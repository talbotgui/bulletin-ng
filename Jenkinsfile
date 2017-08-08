#!groovy

// Define job properties
properties([buildDiscarder(logRotator(artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '5')), pipelineTriggers([]), disableConcurrentBuilds()])

pipeline {
	
	agent none

	stages {
		
		stage ('Checkout') {
			agent any
			steps {
				git url: 'https://github.com/talbotgui/bulletin-ng.git'
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
		
		stage ('Production') { 
			agent none
			
			// Pour sauter le stage 'production' si la branche n'est pas le master
			when { branch 'master' }
			
			steps {
				
				// Pour ne pas laisser trainer l'attente d'une saisie durant plus de 1 jour
				timeout(time:1, unit:'DAYS') {
					script {
					
						// Demande de saisie avec milestone pour arrêter les builds précédents en attente au moment où un utilisateur répond à un build plus récent
						milestone(1)
						def userInput = input message: 'Production ?', parameters: [booleanParam(defaultValue: false, description: '', name: 'miseEnProduction')]
						milestone(2)

						// Installation en production et changement du nom indiquant le statut
						if (userInput) {
							node {
								currentBuild.displayName = currentBuild.displayName + " - deployed to production"
								unstash 'binaire'
								//sh "mv ./dist/index.html ./dist/indexArenommer.html"
								//sh "mv ./dist/miseEnProd.html /var/www/html/bulletin-ng/index.html"
								//sh "cp ./dist/* /var/www/html/bulletin-ng/"
								//sh "mv /var/www/html/bulletin-ng/indexArenommer.html /var/www/html/bulletin-ng/index.html"
							}
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

// Variables disponibles : env.PATH, env.BUILD_TAG, env.BRANCH_NAME, currentBuild.result, currentBuild.displayName, currentBuild.description
// Exemple de definition de parametres dans le job : https://issues.jenkins-ci.org/browse/JENKINS-32780

