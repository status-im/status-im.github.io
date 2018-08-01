parameters {
  string(name: 'APK_URL', description: 'URL of .apk for download.')
  string(name: 'IOS_URL', description: 'URL of iOS app file.')
  string(name: 'NIX_URL', description: 'URL of Linux app file.')
  string(name: 'OSX_URL', description: 'URL of OSX app file.')
}

def gh_user = 'status-im-auto'
def gh_email = 'auto@status.im'

def updateEnv(key, val) {
  echo 'key: ' + key + ' val: ' + val
  if (!val) { return 0 }
  sh "sed -i 's#env.${key}=.*#env.${key}=\"${val}\"#g' env.groovy"
  return 1
}

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

  stage('Update Params') {
    /* Update URLs in the groovy file */
    def changed = 0
    changed += updateEnv('APK_URL', params.APK_URL)
    changed += updateEnv('IOS_URL', params.IOS_URL)
    changed += updateEnv('NIX_URL', params.NIX_URL)
    changed += updateEnv('OSX_URL', params.OSX_URL)
    if (changed>0) {
      sh 'git commit -m \"Update links\" env.groovy'
      withCredentials([string(
        credentialsId: 'jenkins-github-token',
        variable: 'GH_TOKEN',
      )]) {
        sh 'git push https://${GH_USER}:${GH_TOKEN}@github.com/status-im/status-im.github.io.git'
      }
    }
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
