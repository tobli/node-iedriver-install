'use strict';

var Download = require('download'),
    os = require('os');

function getIEDriverUrl() {
  var urlBase = 'http://selenium-release.storage.googleapis.com/2.45/';

  if (os.arch() === 'x64') {
    return urlBase + 'IEDriverServer_Win32_2.45.0.zip';
  } else {
    return urlBase + 'IEDriverServer_x64_2.45.0.zip';
  }
}

if (os.platform() === 'windows') {
  new Download({mode: '755', extract: true})
      .get(getIEDriverUrl())
      .dest('vendor')
      .run();
}
