#!groovy

// Define job properties
properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '5')), pipelineTriggers([]), disableConcurrentBuilds()])

pipeline {
	
	agent none

	stages {
		
		stage ('Checkout') {
			agent any
			steps {
				checkout scm
				script {
					stash name: 'sources', includes: '*'
				}
			}
		}

		stage ('Build') {
			agent any
			steps {
				sh "npm install --no-optional"
				sh "npm run build-prod"
				stash name:'modules', includes: 'node_modules/**'
				stash name:'binaires', includes: 'dist/**'
			}
		}

		stage ('Unit test') {
			agent any
			steps {
				unstash 'sources'
				unstash 'modules'
				sh "npm run test-ic"
			}
		}

		stage ('Integration test') {
			agent any
			steps {
				unstash 'sources'
				unstash 'modules'
				sh "npm run e2e-ic"
			}
		}
		
		stage ('Quality') {
			agent any
			steps {
				unstash 'sources'
				withCredentials([string(credentialsId: 'sonarSecretKey', variable: 'SONAR_KEY')]) {
					sh "sed -i 's/XXXXXXXXX/${SONAR_KEY}/' ./sonar-bulletinNG.properties"
					sh "npm run quality"
					sh "sed -i 's/${SONAR_KEY}/XXXXXXXXX/' ./sonar-bulletinNG.properties"
				}
			}
		}
		
		stage ('Production') { 
			agent none
			// Pour sauter le stage 'production' si la branche n'est pas le master
			when { branch 'master' }
			steps {
				script {

					// Pour traiter le timeout sans déclencher un failure
					long startTime = System.currentTimeMillis()
					try {
					
						// Pour ne pas laisser trainer l'attente d'une saisie durant plus de 1 jour
						timeout(time:1, unit:'DAYS') {
							// Demande de saisie avec milestone pour arrêter les builds précédents en attente au moment où un utilisateur répond à un build plus récent
							milestone(1)
							def userInput = input message: 'Production ?', parameters: [booleanParam(defaultValue: false, description: '', name: 'miseEnProduction')]
							milestone(2)

							// Installation en production et changement du nom indiquant le statut
							if (userInput) {
								node {
									currentBuild.displayName = currentBuild.displayName + " - deployed to production"
									unstash 'binaires'
									sh "sed -i 's/\"\\/\"/\"\\/maclasse\\/\"/' ./dist/index.html"
									sh "mv ./dist/index.html ./dist/indexArenommer.html"
									sh 'echo "Déploiement de la nouvelle version en cours" > /var/www/html/maclasse/index.html'
									sh "rm -rf /var/www/html/maclasse/*"
									sh "cp -r ./dist/* /var/www/html/maclasse/"
									sh "mv /var/www/html/maclasse/indexArenommer.html /var/www/html/maclasse/index.html"
								}
							}
						}
					} catch(err) {
						long timePassed = System.currentTimeMillis() - startTime
                        if (timePassed >= 1 * 1000 * 3600 * 24) {
                            echo 'Timed out du passage en production'
                        } else {
                            throw err
                        }
					}
				}
			}
		}
	}
	
	post {
        success {
			node ('') {  }
			node ('') { step([$class: 'WsCleanup', notFailBuild: true]) }
        }
        unstable {
			node ('') {  }
			node ('') { step([$class: 'WsCleanup', notFailBuild: true]) }
		}
        failure {
			node ('') { emailext subject: "${env.JOB_NAME}#${env.BUILD_NUMBER} - Error during the build !", to: "talbotgui@gmail.com", body: "failure : ${e}"; }
			node ('') { step([$class: 'WsCleanup', notFailBuild: true]) }
        }
        //always {}
        //changed {}
    }
}

/* Fonctions utilitaires */

/* Variables disponibles : env.PATH, env.BUILD_TAG, env.BRANCH_NAME, currentBuild.result, currentBuild.displayName, currentBuild.description */

// Exemple de definition de parametres dans le job : https://issues.jenkins-ci.org/browse/JENKINS-32780

