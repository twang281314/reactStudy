'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcDialog = require('rc-dialog');

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _rcUtil = require('rc-util');

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

var mousePosition = undefined;
var mousePositionEventBinded = undefined;

var AntModal = _react2.default.createClass({
  displayName: 'AntModal',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-modal',
      onOk: noop,
      onCancel: noop,
      okText: '确定',
      cancelText: '取消',
      width: 520,
      transitionName: 'zoom',
      maskAnimation: 'fade',
      confirmLoading: false,
      visible: false
    };
  },
  handleCancel: function handleCancel() {
    this.props.onCancel();
  },
  handleOk: function handleOk() {
    this.props.onOk();
  },
  componentDidMount: function componentDidMount() {
    if (mousePositionEventBinded) {
      return;
    }
    // 只有点击事件支持从鼠标位置动画展开
    _rcUtil.Dom.addEventListener(document.body, 'click', function onDocumentMousemove(e) {
      mousePosition = {
        x: e.pageX,
        y: e.pageY
      };
      // 20ms 内发生过点击事件，则从点击位置动画展示
      // 否则直接 zoom 展示
      // 这样可以兼容非点击方式展开
      setTimeout(function () {
        return mousePosition = null;
      }, 20);
    });
    mousePositionEventBinded = true;
  },
  render: function render() {
    var props = this.props;
    var defaultFooter = [_react2.default.createElement(
      _button2.default,
      { key: 'cancel',
        type: 'ghost',
        size: 'large',
        onClick: this.handleCancel },
      props.cancelText
    ), _react2.default.createElement(
      _button2.default,
      { key: 'confirm',
        type: 'primary',
        size: 'large',
        loading: props.confirmLoading,
        onClick: this.handleOk },
      props.okText
    )];
    var footer = props.footer || defaultFooter;
    return _react2.default.createElement(_rcDialog2.default, _extends({ onClose: this.handleCancel, footer: footer }, props, {
      visible: props.visible, mousePosition: mousePosition }));
  }
});

exports.default = AntModal;
module.exports = exports['default'];