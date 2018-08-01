parameters {
  string(
    name: 'APK_URL',
    defaultValue: 'http://artifacts.status.im:8081/artifactory/nightlies-local/im.status.ethereum-<commit_hash>.apk',
    description: 'URL of .apk for download.'
  )
  string(
    name: 'IOS_URL',
    defaultValue: 'https://i.diawi.com/<build_id_here>',
    description: 'URL of iOS app file.'
  )
}

def gh_user = 'status-im-auto'
def gh_email = 'auto@status.im'

node('linux') {
  environment {
    GH_USER = gh_user
    APK_URL = params.APK_URL
    IOS_URL = params.IOS_URL
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
