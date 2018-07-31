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
def tstamp = Calendar.getInstance().getTime().format(
  'YYYY/MM/dd hh:mm:ss zz',TimeZone.getTimeZone('UTC')
)

node('linux') {
  environment {
    GH_USER = gh_user
    APK_URL = params.APK_URL
    IOS_URL = params.IOS_URL
    TIMESTAMP = tstamp
  }

  stage('Git Prep') {
    checkout scm
    sh "git config user.name ${gh_user}"
    sh "git config user.email ${gh_email}"
  }

  stage('Install Deps') {
    sh 'npm install'
  }

  stage('Copy sources') {
    sh 'cp -r src/* out/'
  }

  stage('Download QR Codes') {
    sh "node_modules/.bin/qrcode '${params.APK_URL}' -w 450 -o out/nightly/qr-apk.png"
    sh "node_modules/.bin/qrcode '${params.IOS_URL}' -w 450 -o out/nightly/qr-ios.png"
  }

  stage('Template HTML') {
    sh 'cat src/nightly/index.html | envsubst > out/nightly/index.html'
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
