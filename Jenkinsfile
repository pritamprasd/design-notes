pipeline {
  agent any
  stages {
    stage('print') {
      steps {
        sh 'echo \'from inside pipeline stage\''
      }
    }

    stage('stop') {
      steps {
        echo 'all done'
      }
    }

  }
}