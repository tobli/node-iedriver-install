var cp = require('child_process'),
  os = require('os'),
  iedriver = require('./').iedriver;

if (os.platform() === 'win32') {
  cp.execFileSync(iedriver.binPath(), ['--help']).toString();
}
