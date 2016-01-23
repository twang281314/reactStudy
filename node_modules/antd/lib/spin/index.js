'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _cssAnimation = require('css-animation');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AntSpin = _react2.default.createClass({
  displayName: 'AntSpin',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-spin',
      size: 'default',
      spining: true
    };
  },

  propTypes: {
    className: _react2.default.PropTypes.string,
    size: _react2.default.PropTypes.oneOf(['small', 'default', 'large'])
  },

  isNestedPattern: function isNestedPattern() {
    return !!(this.props && this.props.children);
  },
  render: function render() {
    var _classNames;

    var _props = this.props;
    var className = _props.className;
    var size = _props.size;
    var prefixCls = _props.prefixCls;

    var spinClassName = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-' + size, size), _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-spining', this.props.spining), _classNames));

    var spinElement = undefined;
    if (!_cssAnimation.isCssAnimationSupported) {
      // not support for animation, just use text instead
      spinElement = _react2.default.createElement(
        'div',
        { className: spinClassName },
        '加载中...'
      );
    } else {
      spinElement = _react2.default.createElement(
        'div',
        { className: spinClassName },
        _react2.default.createElement('span', { className: prefixCls + '-dot ' + prefixCls + '-dot-first' }),
        _react2.default.createElement('span', { className: prefixCls + '-dot ' + prefixCls + '-dot-second' }),
        _react2.default.createElement('span', { className: prefixCls + '-dot ' + prefixCls + '-dot-third' })
      );
    }

    if (this.isNestedPattern()) {
      return _react2.default.createElement(
        'div',
        { className: this.props.spining ? prefixCls + '-nested-loading' : '' },
        spinElement,
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-container' },
          this.props.children
        )
      );
    } else {
      return spinElement;
    }
  }
});

exports.default = AntSpin;
module.exports = exports['default'];