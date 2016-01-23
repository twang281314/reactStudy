'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rcInputNumber = require('rc-input-number');

var _rcInputNumber2 = _interopRequireDefault(_rcInputNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = _react2.default.createClass({
  displayName: 'input-number',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-input-number',
      step: 1
    };
  },
  render: function render() {
    var _props = this.props;
    var className = _props.className;
    var size = _props.size;

    var other = _objectWithoutProperties(_props, ['className', 'size']);

    var inputNumberClass = (0, _classnames2.default)(_defineProperty({
      'ant-input-number-lg': size === 'large',
      'ant-input-number-sm': size === 'small'
    }, className, !!className));

    return _react2.default.createElement(_rcInputNumber2.default, _extends({ className: inputNumberClass }, other));
  }
});
module.exports = exports['default'];