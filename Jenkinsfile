pipeline {
  agent any
  stages {
    stage('print') {
      steps {
        sh 'echo \'from inside pipeline stage\''
        sh 'ls -la .'
        sh 'ls -la /'
      }
    }

  }
}