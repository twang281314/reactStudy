'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTooltip = require('rc-tooltip');

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ant-popover';
var noop = function noop() {};
var transitionNames = {
  top: 'zoom-down',
  bottom: 'zoom-up',
  left: 'zoom-right',
  right: 'zoom-left',
  topLeft: 'zoom-down',
  bottomLeft: 'zoom-up',
  leftTop: 'zoom-right',
  rightTop: 'zoom-left',
  topRight: 'zoom-down',
  bottomRight: 'zoom-up',
  leftBottom: 'zoom-right',
  rightBottom: 'zoom-left'
};

exports.default = _react2.default.createClass({
  displayName: 'popconfirm',
  getInitialState: function getInitialState() {
    return {
      visible: false
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      transitionName: '',
      placement: 'top',
      trigger: 'click',
      overlayStyle: {},
      onConfirm: noop,
      onCancel: noop,
      okText: '确定',
      cancelText: '取消',
      onVisibleChange: function onVisibleChange() {}
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setState({ visible: nextProps.visible });
    }
  },
  confirm: function confirm() {
    this.setVisible(false);
    this.props.onConfirm.call(this);
  },
  cancel: function cancel() {
    this.setVisible(false);
    this.props.onCancel.call(this);
  },
  onVisibleChange: function onVisibleChange(visible) {
    this.setVisible(visible);
    this.props.onVisibleChange(visible);
  },
  setVisible: function setVisible(visible) {
    if (!('visible' in this.props)) {
      this.setState({ visible: visible });
    }
  },
  render: function render() {
    var _props = this.props;
    var title = _props.title;
    var okText = _props.okText;
    var cancelText = _props.cancelText;
    var placement = _props.placement;
    var overlayStyle = _props.overlayStyle;
    var trigger = _props.trigger;

    var overlay = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: prefixCls + '-content' },
        _react2.default.createElement(
          'p',
          { className: prefixCls + '-message' },
          _react2.default.createElement(_icon2.default, { type: 'exclamation-circle' }),
          title
        ),
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-buttons' },
          _react2.default.createElement(
            _button2.default,
            { onClick: this.cancel, type: 'ghost', size: 'small' },
            cancelText
          ),
          _react2.default.createElement(
            _button2.default,
            { onClick: this.confirm, type: 'primary', size: 'small' },
            okText
          )
        )
      )
    );

    var transitionName = transitionNames[placement];

    return _react2.default.createElement(
      _rcTooltip2.default,
      { placement: placement,
        overlayStyle: overlayStyle,
        prefixCls: prefixCls,
        onVisibleChange: this.onVisibleChange,
        transitionName: transitionName,
        visible: this.state.visible,
        trigger: trigger,
        overlay: overlay },
      this.props.children
    );
  }
});
module.exports = exports['default'];