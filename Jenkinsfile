
pipeline {
  agent any

  stages {

    stage ("build") {
      steps {
        echo 'building our app...' 
        sh 'npm install'
      }
    }

    stage ("test") {
      steps {
        echo 'testing our app...'
        sh 'echo "Fail!"; exit 1'
      }
    }

    stage ("deploy") {
      steps {
        echo 'deploying our app...'
      }
    }

  }

}