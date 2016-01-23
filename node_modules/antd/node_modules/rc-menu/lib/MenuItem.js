'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcUtil = require('rc-util');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var MenuItem = _react2['default'].createClass({
  displayName: 'MenuItem',

  propTypes: {
    rootPrefixCls: _react2['default'].PropTypes.string,
    eventKey: _react2['default'].PropTypes.string,
    active: _react2['default'].PropTypes.bool,
    selected: _react2['default'].PropTypes.bool,
    disabled: _react2['default'].PropTypes.bool,
    title: _react2['default'].PropTypes.string,
    onSelect: _react2['default'].PropTypes.func,
    onClick: _react2['default'].PropTypes.func,
    onDeselect: _react2['default'].PropTypes.func,
    parentMenu: _react2['default'].PropTypes.object,
    onItemHover: _react2['default'].PropTypes.func,
    onDestroy: _react2['default'].PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onSelect: function onSelect() {},
      onMouseEnter: function onMouseEnter() {}
    };
  },

  componentWillUnmount: function componentWillUnmount() {
    var props = this.props;
    if (props.onDestroy) {
      props.onDestroy(props.eventKey);
    }
  },

  onKeyDown: function onKeyDown(e) {
    var keyCode = e.keyCode;
    if (keyCode === _rcUtil.KeyCode.ENTER) {
      this.onClick(e);
      return true;
    }
  },

  onMouseLeave: function onMouseLeave() {
    var _this = this;

    var eventKey = this.props.eventKey;
    var parentMenu = this.props.parentMenu;
    parentMenu.menuItemMouseLeaveTimer = setTimeout(function () {
      if (_this.isMounted() && _this.props.active) {
        _this.props.onItemHover({
          key: eventKey,
          item: _this,
          hover: false,
          trigger: 'mouseleave'
        });
      }
    }, 30);
  },

  onMouseEnter: function onMouseEnter() {
    var props = this.props;
    var parentMenu = this.props.parentMenu;
    if (parentMenu.menuItemMouseLeaveTimer) {
      clearTimeout(parentMenu.menuItemMouseLeaveTimer);
      parentMenu.menuItemMouseLeaveTimer = null;
    }
    var eventKey = props.eventKey;
    props.onItemHover({
      key: eventKey,
      item: this,
      hover: true,
      trigger: 'mouseenter'
    });
  },

  onClick: function onClick(e) {
    var props = this.props;
    var eventKey = props.eventKey;
    var info = {
      key: eventKey,
      keyPath: [eventKey],
      item: this,
      domEvent: e
    };
    props.onClick(info);
    if (props.multiple) {
      if (props.selected) {
        props.onDeselect(info);
      } else {
        props.onSelect(info);
      }
    } else if (!props.selected) {
      props.onSelect(info);
    }
  },

  getPrefixCls: function getPrefixCls() {
    return this.props.rootPrefixCls + '-item';
  },

  getActiveClassName: function getActiveClassName() {
    return this.getPrefixCls() + '-active';
  },

  getSelectedClassName: function getSelectedClassName() {
    return this.getPrefixCls() + '-selected';
  },

  getDisabledClassName: function getDisabledClassName() {
    return this.getPrefixCls() + '-disabled';
  },

  render: function render() {
    var props = this.props;
    var classes = {};
    classes[this.getActiveClassName()] = !props.disabled && props.active;
    classes[this.getSelectedClassName()] = props.selected;
    classes[this.getDisabledClassName()] = props.disabled;
    classes[this.getPrefixCls()] = true;
    classes[props.className] = !!props.className;
    var attrs = {
      title: props.title,
      className: (0, _classnames2['default'])(classes),
      role: 'menuitem',
      'aria-selected': props.selected,
      'aria-disabled': props.disabled
    };
    var mouseEvent = {};
    if (!props.disabled) {
      mouseEvent = {
        onClick: this.onClick,
        onMouseLeave: this.onMouseLeave,
        onMouseEnter: this.onMouseEnter
      };
    }
    var style = {};
    if (props.mode === 'inline') {
      style.paddingLeft = props.inlineIndent * props.level;
    }
    return _react2['default'].createElement(
      'li',
      _extends({ style: style
      }, attrs, mouseEvent),
      props.children
    );
  }
});

exports['default'] = MenuItem;
module.exports = exports['default'];