'use strict';

var path = require('path');

module.exports.binPath = function() {
  return path.resolve(__dirname, 'vendor', 'IEDriverServer.exe');
};
