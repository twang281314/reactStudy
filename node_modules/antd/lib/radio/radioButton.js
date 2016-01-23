'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioButton = _react2.default.createClass({
  displayName: 'RadioButton',
  getDefaultProps: function getDefaultProps() {
    return {
      className: 'ant-radio-button'
    };
  },
  render: function render() {
    return _react2.default.createElement(_radio2.default, this.props);
  }
});

exports.default = RadioButton;
module.exports = exports['default'];