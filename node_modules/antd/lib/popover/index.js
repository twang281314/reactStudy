'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTooltip = require('rc-tooltip');

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ant-popover';

var Popover = _react2.default.createClass({
  displayName: 'Popover',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: prefixCls,
      placement: 'top',
      trigger: 'hover',
      mouseEnterDelay: 0.1,
      mouseLeaveDelay: 0.1,
      overlayStyle: {}
    };
  },
  render: function render() {
    var transitionName = {
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
    }[this.props.placement];

    return _react2.default.createElement(
      _rcTooltip2.default,
      _extends({ transitionName: transitionName,
        ref: 'tooltip'
      }, this.props, {
        overlay: this.getOverlay() }),
      this.props.children
    );
  },
  getPopupDomNode: function getPopupDomNode() {
    return this.refs.tooltip.getPopupDomNode();
  },
  getOverlay: function getOverlay() {
    return _react2.default.createElement(
      'div',
      null,
      this.props.title && _react2.default.createElement(
        'div',
        { className: prefixCls + '-title' },
        this.props.title
      ),
      _react2.default.createElement(
        'div',
        { className: prefixCls + '-content' },
        this.props.overlay
      )
    );
  }
});

exports.default = Popover;
module.exports = exports['default'];