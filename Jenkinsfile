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

    stage('build') {
      steps {
        sh 'cd servers/dummy/backend-flask'
        sh 'python -m venv venv'
        sh 'source venv/bin/activate'
        sh 'pip install -r requirement.txt'
      }
    }

  }
}