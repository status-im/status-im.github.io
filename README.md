__WARNING:__ This repo is obsolete, if you're looking for `simple-dapp` look [here](https://github.com/status-im/simple-dapp).

# Description

This repo hosts the app available at: https://status-im.github.io/
To be precise it hosts:

* [status-im.github.io/fiddle](https://status-im.github.io/fiddle) - Status fiddle (react native UI editor)
* [status-im.github.io/nightly](https://status-im.github.io/nightly) - Status nightly builds
* [status-im.github.io/dapp](https://status-im.github.io/dapp) - Status simple DAPP

# Usage

To generate the pages use:
```
npm run build
```
To publish this to GitHub Pages use:
```
npm run gh-publish
```
The configuration for templating and QR codes is in `env.sh` and is sourced in `package.json`.

# Continuous Integration

This is built by Jenkins via [`Jenkinsfile`](./ci/Jenkinsfile) in:
https://ci.status.im/job/misc/job/status-im.github.io/
The `env.sh` file is updated via [`Jenkinsfile.update_env`](./ci/Jenkinsfile.update_env) in:
https://ci.status.im/job/misc/job/status-im.github.io-update_env/
