const fs = require('fs');

fs.readFile('loop.js', function (err, buff) {
  setTimeout(function () {
    console.log('setTimeOut');
  });

  setImmediate(function () {
    console.log('setImmediate');
  })
})