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

exports.default = _react2.default.createClass({
  displayName: 'tooltip',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-tooltip',
      placement: 'top',
      mouseEnterDelay: 0.1,
      mouseLeaveDelay: 0.1
    };
  },
  getInitialState: function getInitialState() {
    return {
      visible: false
    };
  },
  onVisibleChange: function onVisibleChange(visible) {
    this.setState({ visible: visible });
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

    // Hide tooltip when there is no title
    var visible = this.state.visible;
    if (!this.props.title) {
      visible = false;
    }

    return _react2.default.createElement(
      _rcTooltip2.default,
      _extends({ transitionName: transitionName,
        overlay: this.props.title,
        visible: visible,
        onVisibleChange: this.onVisibleChange
      }, this.props),
      this.props.children
    );
  }
});
module.exports = exports['default'];