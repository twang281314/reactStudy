'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rcRadio = require('rc-radio');

var _rcRadio2 = _interopRequireDefault(_rcRadio);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AntRadio = _react2.default.createClass({
  displayName: 'AntRadio',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-radio'
    };
  },
  render: function render() {
    var classString = this.props.className;
    if (classString) {
      classString += this.props.checked ? ' ' + classString + '-checked' : '';
    }
    if (this.props.disabled) {
      classString += ' ' + this.props.className + '-disabled';
    }
    return _react2.default.createElement(
      'label',
      { className: classString },
      _react2.default.createElement(_rcRadio2.default, _extends({}, this.props, { children: null })),
      this.props.children
    );
  }
});

exports.default = AntRadio;
module.exports = exports['default'];