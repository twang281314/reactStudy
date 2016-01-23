'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _openAnimation = require('../common/openAnimation');

var _openAnimation2 = _interopRequireDefault(_openAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

var AntMenu = _react2.default.createClass({
  displayName: 'AntMenu',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-menu',
      onClick: noop,
      onOpen: noop,
      onClose: noop,
      className: '',
      theme: 'light' };
  },
  // or dark
  getInitialState: function getInitialState() {
    return {
      openKeys: []
    };
  },
  handleClick: function handleClick(e) {
    this.setState({
      openKeys: []
    });
    this.props.onClick(e);
  },
  handleOpenKeys: function handleOpenKeys(e) {
    this.setState({
      openKeys: e.openKeys
    });
    this.props.onOpen(e);
  },
  handleCloseKeys: function handleCloseKeys(e) {
    this.setState({
      openKeys: e.openKeys
    });
    this.props.onClose(e);
  },
  render: function render() {
    var openAnimation = this.props.openAnimation || this.props.openTransitionName;
    if (!openAnimation) {
      switch (this.props.mode) {
        case 'horizontal':
          openAnimation = 'slide-up';
          break;
        case 'vertical':
          openAnimation = 'zoom-big';
          break;
        case 'inline':
          openAnimation = _openAnimation2.default;
          break;
        default:
      }
    }

    var props = {};
    var className = this.props.className + ' ' + this.props.prefixCls + '-' + this.props.theme;
    if (this.props.mode !== 'inline') {
      // 这组属性的目的是
      // 弹出型的菜单需要点击后立即关闭
      // 另外，弹出型的菜单的受控模式没有使用场景
      props = {
        openKeys: this.state.openKeys,
        onClick: this.handleClick,
        onOpen: this.handleOpenKeys,
        onClose: this.handleCloseKeys,
        openTransitionName: openAnimation,
        className: className
      };
    } else {
      props = {
        openAnimation: openAnimation,
        className: className
      };
    }
    return _react2.default.createElement(_rcMenu2.default, _extends({}, this.props, props));
  }
});

AntMenu.Divider = _rcMenu2.default.Divider;
AntMenu.Item = _rcMenu2.default.Item;
AntMenu.SubMenu = _rcMenu2.default.SubMenu;
AntMenu.ItemGroup = _rcMenu2.default.ItemGroup;

exports.default = AntMenu;
module.exports = exports['default'];