'use strict';

var Download = require('download'),
    downloadStatus = require('download-status'),
    os = require('os');

function getIEDriverUrl() {
  var urlBase = 'http://selenium-release.storage.googleapis.com/2.48/';

  if (os.arch() === 'x64') {
    return urlBase + 'IEDriverServer_x64_2.48.0.zip';
  } else {
    return urlBase + 'IEDriverServer_Win32_2.48.0.zip';
  }
}

if (os.platform() === 'win32') {
  new Download({mode: '755', extract: true})
      .get(getIEDriverUrl())
      .dest('vendor')
      .use(downloadStatus())
      .run(function(err) {
        if (err) {
          throw err;
        }
      });
}
