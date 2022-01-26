
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
                echo 'app is deployed! Hurray!'
                }
            }
    }
  }