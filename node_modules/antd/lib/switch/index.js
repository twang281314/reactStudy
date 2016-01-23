'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rcSwitch = require('rc-switch');

var _rcSwitch2 = _interopRequireDefault(_rcSwitch);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _react2.default.createClass({
  displayName: 'switch',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-switch',
      size: 'default'
    };
  },
  render: function render() {
    var _classNames;

    var _props = this.props;
    var prefixCls = _props.prefixCls;
    var size = _props.size;
    var className = _props.className;

    var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-' + size, true), _classNames));
    return _react2.default.createElement(_rcSwitch2.default, _extends({ className: cls }, this.props));
  }
});
module.exports = exports['default'];