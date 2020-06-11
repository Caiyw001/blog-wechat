const Thenjs = require('thenjs');

function Task(callback) {
  Thenjs.nextTick(function () {
    callback(null, arg);
  })
}


Thenjs(function (cont) {
  Task(10, cont);
})