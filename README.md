# Description

This repo hosts the app available at: https://status-im.github.io/
To be precise it hosts:

* [status-im.github.io/fiddle](https://status-im.github.io/fiddle) - Status fiddle (react native UI editor)
* [status-im.github.io/nightly](https://status-im.github.io/nightly) - Status nightly builds
* [status-im.github.io/dapp](https://status-im.github.io/dapp) - Status simple DAPP

# Usage

To generate the pages use:
```
export APK_URL='SET_ME!'
export IOS_URL='SET_ME!'
npm run build
```
To publish this to GitHub Pages use:
```
npm run gh-publish
```

# Continuous Integration

This is built by Jenkins via [`Jenkinsfile`](./Jenkinsfile) in:
https://ci.status.im/job/misc/job/status-im.github.io/
