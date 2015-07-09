var cp = require('child_process'),
    semver = require('semver'),
    iedriver = require('./'),
    packageVersion = require('./package.json').version;

var helpText = cp.execFileSync(iedriver.binPath(), ['--help']).toString();
console.log(helpText);
