pipeline {
    agent any

    environment {
        AZURE_APP_NAME = 'my-react-webapp'
        AZURE_RG = 'reactapp-rg'
        NODE_HOME = tool name: 'NodeJS_16', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch : 'master', url : 'https://github.com/RaghavSaxena0406/Products-App-with-Redux.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy to Azure') {
            steps {
                withCredentials([azureServicePrincipal('AZURE_CREDENTIALS')]) {
                    sh '''
                        az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET --tenant $AZURE_TENANT_ID
                        az webapp deployment source config-zip \
                          --resource-group $AZURE_RG \
                          --name $AZURE_APP_NAME \
                          --src build.zip
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '🚀 Deployed Successfully!'
        }
        failure {
            echo '❌ Deployment Failed!'
        }
    }
}
