const chalk = require('chalk')
const semver = require('semver')
const symbols = require('node-symbols')
const eachAsync = require('each-async')
const binVersionCheck = require('bin-version-check')

let MSG = {
  NODE_VERSION_MSG: `${symbols('Your Node.js version is outdated.', 'red')} \nUpgrade to the latest version: ${symbols('https://nodejs.org', 'blue')}`,
  NPM_VERSION_MSG: `${symbols('Your npm version is outdated.', 'red')} \nUpgrade to the latest version by running: ${symbols('npm install -g npm', 'magenta')}`,
}

let rules = [
  {
    description: 'Node.js version',
    verify: function(cb) {
      let NODE_VERSION = '5.2.0'
      cb(semver.lt(process.version, NODE_VERSION) ? MSG.NODE_VERSION_MSG : null)
    }
  },
  {
    description: 'npm version',
    verify: function(cb) {
      let NPM_VERSION = '3.3.0'
      binVersionCheck('npm', '>=' + NPM_VERSION)
        .then(cb, () => cb(MSG.NPM_VERSION_MSG))
    }
  }
]


function validate() {
  let errCount = 0
  console.log('\n' + chalk.underline.blue('YI Doctor'))
  console.log('Running sanity checks on your system\n')

  eachAsync(rules, function(rule, i, cb) {
    // console.log(rule)
    // console.log(i)
    // console.log(cb)
    rule.verify(function(err) {
      console.log((err ? symbols('cross', 'red') : symbols('tick', 'green')) + ' ' + rule.description)
      if (err) {
        errCount++
        console.log(err)
      }

      cb()
    })

  }, function() {
    // 所有的的执行完调用
    if (errCount === 0) {
      console.log(chalk.green('\n' + symbols('smiley', 'green') + ' Everything looks all right!'))
    } else {
      console.log(chalk.red('\nFound potential issues on your machine ::>_<::  '))
    }
  })
}

validate()
