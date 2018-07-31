var ghpages = require('gh-pages')
 
ghpages.publish('out', {
  repo: ( 
    'https://'
    + process.env.GH_USER + ':'
    + process.env.GH_TOKEN
    + '@github.com/status-im/status-im.github.io.git'
  ),
  branch: 'master',
  dotfiles: true,
  silent: false
}, function(err) {
  if (err) { throw err }
})
