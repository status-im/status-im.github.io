def gh_user = 'status-im-auto'
def gh_email = 'auto@status.im'

node('linux') {
  environment {
    GH_USER = gh_user
  }

  stage('Git Prep') {
    checkout scm
    sh "git config user.name ${gh_user}"
    sh "git config user.email ${gh_email}"
  }

  stage('Install Deps') {
    sh 'npm install'
  }

  stage('Build') {
    /* Load URLs from the groovy file */
    load 'env.groovy'
    sh 'npm run build'
  }

  stage('Publish') {
    withCredentials([string(
      credentialsId: 'jenkins-github-token',
      variable: 'GH_TOKEN',
    )]) {
      sh 'npm run gh-publish'
    }
  }
}
