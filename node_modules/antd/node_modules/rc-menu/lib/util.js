'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.noop = noop;
exports.getKeyFromChildrenIndex = getKeyFromChildrenIndex;
var now = Date.now();

function noop() {}

function getKeyFromChildrenIndex(child, menuEventKey, index) {
  var prefix = menuEventKey || '';
  return child.key || prefix + 'item_' + now + '_' + index;
}