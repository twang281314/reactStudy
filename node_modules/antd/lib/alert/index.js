'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = _react2.default.createClass({
  displayName: 'alert',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-alert',
      showIcon: false,
      onClose: function onClose() {}
    };
  },
  getInitialState: function getInitialState() {
    return {
      closing: true,
      closed: false
    };
  },
  handleClose: function handleClose(e) {
    e.preventDefault();
    var dom = _reactDom2.default.findDOMNode(this);
    dom.style.height = dom.offsetHeight + 'px';
    // Magic code
    // 重复一次后才能正确设置 height
    dom.style.height = dom.offsetHeight + 'px';

    this.setState({
      closing: false
    });
    this.props.onClose.call(this, e);
  },
  animationEnd: function animationEnd() {
    this.setState({
      closed: true,
      closing: true
    });
  },
  render: function render() {
    var _classNames;

    var _props = this.props;
    var closable = _props.closable;
    var description = _props.description;
    var type = _props.type;
    var prefixCls = _props.prefixCls;
    var message = _props.message;
    var closeText = _props.closeText;
    var showIcon = _props.showIcon;

    var iconType = '';
    switch (type) {
      case 'success':
        iconType = 'check-circle';
        break;
      case 'info':
        iconType = 'info-circle';
        break;
      case 'error':
        iconType = 'exclamation-circle';
        break;
      case 'warn':
        iconType = 'exclamation-circle';
        break;
      default:
        iconType = 'default';
    }

    // use outline icon in alert with description
    if (!!description) {
      iconType += '-o';
    }

    var alertCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-' + type, true), _defineProperty(_classNames, prefixCls + '-close', !this.state.closing), _defineProperty(_classNames, prefixCls + '-with-description', !!description), _defineProperty(_classNames, prefixCls + '-no-icon', !showIcon), _classNames));

    // closeable when closeText is assigned
    if (closeText) {
      closable = true;
    }

    return this.state.closed ? null : _react2.default.createElement(
      _rcAnimate2.default,
      { component: '',
        showProp: 'data-show',
        transitionName: 'slide-up',
        onEnd: this.animationEnd },
      _react2.default.createElement(
        'div',
        { 'data-show': this.state.closing, className: alertCls },
        showIcon ? _react2.default.createElement(_icon2.default, { className: 'ant-alert-icon', type: iconType }) : null,
        _react2.default.createElement(
          'span',
          { className: prefixCls + '-message' },
          message
        ),
        _react2.default.createElement(
          'span',
          { className: prefixCls + '-description' },
          description
        ),
        closable ? _react2.default.createElement(
          'a',
          { onClick: this.handleClose, className: prefixCls + '-close-icon' },
          closeText || _react2.default.createElement(_icon2.default, { type: 'cross' })
        ) : null
      )
    );
  }
});
module.exports = exports['default'];