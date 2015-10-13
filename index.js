'use strict';

var path = require('path'),
  pkg = require('./package');

module.exports.iedriver = {
  version: pkg.version,
  binPath: function() {
    return path.resolve(__dirname, 'vendor', 'IEDriverServer.exe');
  }
};
