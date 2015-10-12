'use strict';

var path = require('path'),
  version = require('./package').version;

module.exports.version = version;

module.exports.binPath = function() {
  return path.resolve(__dirname, 'vendor', 'IEDriverServer.exe');
};
