'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _confirm = require('./confirm');

var _confirm2 = _interopRequireDefault(_confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Modal2.default.info = function (props) {
  props.iconClassName = 'info-circle';
  props.okCancel = false;
  return (0, _confirm2.default)(props);
};

_Modal2.default.success = function (props) {
  props.iconClassName = 'check-circle';
  props.okCancel = false;
  return (0, _confirm2.default)(props);
};

_Modal2.default.error = function (props) {
  props.iconClassName = 'exclamation-circle';
  props.okCancel = false;
  return (0, _confirm2.default)(props);
};

_Modal2.default.confirm = function (props) {
  props.okCancel = true;
  return (0, _confirm2.default)(props);
};

exports.default = _Modal2.default;
module.exports = exports['default'];