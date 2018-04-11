#!groovy

// Define job properties
properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '5')), pipelineTriggers([])])

pipeline {
	
	agent none

	stages {
		
		stage ('Checkout') {
			agent any
			steps {
				checkout scm
			}
		}

		stage ('Build') {
			agent any
			steps {
				sh "mvn clean compile"
			}
		}
		
		stage ('Package') {
			agent any
			steps {
				sh "mvn assembly:single"
				sh "mv target/bulletinNG-1.0.0.zip dist/maclasse.zip"
			}
		}

		stage ('Unit test') {
			agent any
			steps {
				sh "mvn test"
			}
		}

		stage ('Integration test') {
			agent any
			steps {
				sh "mvn integration-test"
			}
		}
		
		stage ('Quality') {
			agent any
			steps {
				withCredentials([string(credentialsId: 'sonarSecretKey', variable: 'SONAR_KEY')]) {
					sh "sed -i 's/XXXXXXXXX/${SONAR_KEY}/' ./sonar-bulletinNG.properties"
					sh "mvn frontend:npm@npmRunQuality"
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

