'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _rule = require('../rule/');

var _rule2 = _interopRequireDefault(_rule);

function type(rule, value, callback, source, options) {
  var errors = [];
  _rule2['default'].type(rule, value, source, errors, options);
  callback(errors);
}

exports['default'] = type;
module.exports = exports['default'];