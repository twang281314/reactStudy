'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rcCheckbox = require('rc-checkbox');

var _rcCheckbox2 = _interopRequireDefault(_rcCheckbox);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = _react2.default.createClass({
  displayName: 'Checkbox',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-checkbox'
    };
  },
  render: function render() {
    return _react2.default.createElement(_rcCheckbox2.default, this.props);
  }
});

Checkbox.Group = _Group2.default;

exports.default = Checkbox;
module.exports = exports['default'];