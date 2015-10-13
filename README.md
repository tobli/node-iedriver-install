# IEDriver install

[![Build status][appveyor-image]][appveyor-url]

This is a simple package that downloads [IEDriver](https://code.google.com/p/selenium/wiki/InternetExplorerDriver) and 
provides a node api for accessing the path to the binary. There are other packages like this, but I wanted to make sure
I had an updated package to include in [Browsertime](http://www.browsertime.net).

Why the funny name you ask? Well, there are [countless](https://www.npmjs.com/search?q=selenium) Selenium modules in npm.
Keywords and the description for the module allows you to find it anyway, so might as well choose a unique name.

How to use?
```node
var iedriver = require('tenor-saxophone').iedriver;

var p = iedriver.binPath();
// launch ie driver server from path
```

[appveyor-image]: https://ci.appveyor.com/api/projects/status/github/tobli/node-iedriver-install?svg=true
[appveyor-url]: https://ci.appveyor.com/project/tobli/node-iedriver-install
