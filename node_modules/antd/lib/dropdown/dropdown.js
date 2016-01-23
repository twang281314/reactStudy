'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcDropdown = require('rc-dropdown');

var _rcDropdown2 = _interopRequireDefault(_rcDropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = _react2.default.createClass({
  displayName: 'dropdown',

  getDefaultProps: function getDefaultProps() {
    return {
      transitionName: 'slide-up',
      prefixCls: 'ant-dropdown'
    };
  },
  render: function render() {
    var _props = this.props;
    var overlay = _props.overlay;

    var otherProps = _objectWithoutProperties(_props, ['overlay']);

    var menu = _react2.default.cloneElement(overlay, {
      openTransitionName: 'zoom-big'
    });
    return _react2.default.createElement(_rcDropdown2.default, _extends({}, otherProps, { overlay: menu }));
  }
});
module.exports = exports['default'];