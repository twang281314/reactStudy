'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var velocity = undefined;
if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  velocity = require('velocity-animate');
}

function animate(node, show, transitionName, done) {
  var ok = undefined;

  function complete() {
    if (!ok) {
      ok = true;
      done();
    }
  }

  // Fix safari flash bug
  node.style.display = show ? 'block' : 'none';
  velocity(node, transitionName, {
    duration: 300,
    complete: complete,
    easing: 'ease'
  });
  return {
    stop: function stop() {
      velocity(node, 'finish');
      complete();
    }
  };
}

var animation = {
  enter: function enter(node, done) {
    return animate(node, false, 'slideDown', done);
  },
  leave: function leave(node, done) {
    return animate(node, true, 'slideUp', done);
  }
};

exports['default'] = animation;
module.exports = exports['default'];