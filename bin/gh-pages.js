var ghpages = require('gh-pages')
 
ghpages.publish('out', {
  repo: ( 
    'https://'
    + process.env.GH_USER + ':'
    + process.env.GH_TOKEN
    + '@github.com/status-im/ETHReport.git'
  ),
  branch: 'gh-pages',
  dotfiles: true,
  silent: false
}, function(err) {
  if (err) { console.error(err) }
})
