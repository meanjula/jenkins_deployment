
pipeline {
  agent any

  tools {nodejs "node"}

  stages {

    stage ("build") {
      steps {
        echo 'building our app...' 
        sh 'npm install'
      }
    }

    // stage ("test") {
    //   steps {
    //     echo 'testing our app...'
    //   }
    // }

   stage('Deploy') {
            steps {
                timeout(time: 3, unit: 'MINUTES') {
                    retry(5) {
                        sh './flakey-deploy.sh'
                    }

                  }

                }
            }
    }
  }