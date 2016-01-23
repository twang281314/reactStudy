'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MenuMixin = require('./MenuMixin');

var _MenuMixin2 = _interopRequireDefault(_MenuMixin);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _util = require('./util');

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var SubPopupMenu = _react2['default'].createClass({
  displayName: 'SubPopupMenu',

  propTypes: {
    onSelect: _react2['default'].PropTypes.func,
    onClick: _react2['default'].PropTypes.func,
    onDeselect: _react2['default'].PropTypes.func,
    onOpenChange: _react2['default'].PropTypes.func,
    onDestroy: _react2['default'].PropTypes.func,
    openTransitionName: _react2['default'].PropTypes.string,
    openAnimation: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.object]),
    openKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
    closeSubMenuOnMouseLeave: _react2['default'].PropTypes.bool,
    visible: _react2['default'].PropTypes.bool,
    children: _react2['default'].PropTypes.any
  },

  mixins: [_MenuMixin2['default']],

  onDeselect: function onDeselect(selectInfo) {
    this.props.onDeselect(selectInfo);
  },

  onSelect: function onSelect(selectInfo) {
    this.props.onSelect(selectInfo);
  },

  onClick: function onClick(e) {
    this.props.onClick(e);
  },

  onOpenChange: function onOpenChange(e) {
    this.props.onOpenChange(e);
  },

  onDestroy: function onDestroy(key) {
    this.props.onDestroy(key);
  },

  onItemHover: function onItemHover(e) {
    this.onCommonItemHover(e);
  },

  getOpenTransitionName: function getOpenTransitionName() {
    return this.props.openTransitionName;
  },

  renderMenuItem: function renderMenuItem(c, i, subIndex) {
    var props = this.props;
    var key = (0, _util.getKeyFromChildrenIndex)(c, props.eventKey, i);
    var extraProps = {
      openKeys: props.openKeys,
      selectedKeys: props.selectedKeys,
      open: props.openKeys.indexOf(key) !== -1,
      selected: props.selectedKeys.indexOf(key) !== -1,
      openSubMenuOnMouseEnter: true
    };
    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
  },

  render: function render() {
    var renderFirst = this.renderFirst;
    this.renderFirst = 1;
    this.haveOpened = this.haveOpened || this.props.visible;
    if (!this.haveOpened) {
      return null;
    }
    var transitionAppear = true;
    if (!renderFirst && this.props.visible) {
      transitionAppear = false;
    }
    var props = (0, _objectAssign2['default'])({}, this.props);
    props.className += ' ' + props.prefixCls + '-sub';
    var animProps = {};
    if (props.openTransitionName) {
      animProps.transitionName = props.openTransitionName;
    } else if (typeof props.openAnimation === 'object') {
      animProps.animation = (0, _objectAssign2['default'])({}, props.openAnimation);
      if (!transitionAppear) {
        delete animProps.animation.appear;
      }
    }
    return _react2['default'].createElement(
      _rcAnimate2['default'],
      _extends({}, animProps, {
        showProp: 'visible',
        component: '',
        transitionAppear: transitionAppear }),
      this.renderRoot(props)
    );
  }
});

exports['default'] = SubPopupMenu;
module.exports = exports['default'];