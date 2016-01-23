'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _SubPopupMenu = require('./SubPopupMenu');

var _SubPopupMenu2 = _interopRequireDefault(_SubPopupMenu);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcUtil = require('rc-util');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var SubMenu = _react2['default'].createClass({
  displayName: 'SubMenu',

  propTypes: {
    parentMenu: _react2['default'].PropTypes.object,
    title: _react2['default'].PropTypes.node,
    onClick: _react2['default'].PropTypes.func,
    onOpenChange: _react2['default'].PropTypes.func,
    rootPrefixCls: _react2['default'].PropTypes.string,
    eventKey: _react2['default'].PropTypes.string,
    multiple: _react2['default'].PropTypes.bool,
    active: _react2['default'].PropTypes.bool,
    open: _react2['default'].PropTypes.bool,
    onSelect: _react2['default'].PropTypes.func,
    closeSubMenuOnMouseLeave: _react2['default'].PropTypes.bool,
    openSubMenuOnMouseEnter: _react2['default'].PropTypes.bool,
    onDeselect: _react2['default'].PropTypes.func,
    onDestroy: _react2['default'].PropTypes.func,
    onItemHover: _react2['default'].PropTypes.func
  },

  mixins: [require('./SubMenuStateMixin')],

  getDefaultProps: function getDefaultProps() {
    return {
      onMouseEnter: function onMouseEnter() {},
      title: ''
    };
  },

  getInitialState: function getInitialState() {
    this.isSubMenu = 1;
    return {
      defaultActiveFirst: false
    };
  },

  componentWillUnmount: function componentWillUnmount() {
    var props = this.props;
    if (props.onDestroy) {
      props.onDestroy(props.eventKey);
    }
  },

  onDestroy: function onDestroy(key) {
    this.props.onDestroy(key);
  },

  onKeyDown: function onKeyDown(e) {
    var keyCode = e.keyCode;
    var menu = this.menuInstance;

    if (keyCode === _rcUtil.KeyCode.ENTER) {
      this.onClick(e);
      this.setState({
        defaultActiveFirst: true
      });
      return true;
    }

    if (keyCode === _rcUtil.KeyCode.RIGHT) {
      if (this.props.open) {
        menu.onKeyDown(e);
      } else {
        this.triggerOpenChange(true);
        this.setState({
          defaultActiveFirst: true
        });
      }
      return true;
    }
    if (keyCode === _rcUtil.KeyCode.LEFT) {
      var handled = undefined;
      if (this.props.open) {
        handled = menu.onKeyDown(e);
      } else {
        return undefined;
      }
      if (!handled) {
        this.triggerOpenChange(false);
        handled = true;
      }
      return handled;
    }

    if (this.props.open && (keyCode === _rcUtil.KeyCode.UP || keyCode === _rcUtil.KeyCode.DOWN)) {
      return menu.onKeyDown(e);
    }
  },

  onSubTreeMouseEnter: function onSubTreeMouseEnter() {
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
      this.leaveTimer = null;
    }
  },

  onOpenChange: function onOpenChange(e) {
    this.props.onOpenChange(this.addKeyPath(e));
  },

  onMouseEnter: function onMouseEnter() {
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
      this.leaveTimer = null;
    }
    var props = this.props;
    var parentMenu = props.parentMenu;
    if (parentMenu.menuItemMouseLeaveTimer) {
      clearTimeout(parentMenu.menuItemMouseLeaveTimer);
      parentMenu.menuItemMouseLeaveTimer = null;
    }
    props.onItemHover({
      key: this.props.eventKey,
      item: this,
      hover: true,
      trigger: 'mouseenter'
    });
    if (props.openSubMenuOnMouseEnter) {
      this.triggerOpenChange(true);
    }
    this.setState({
      defaultActiveFirst: false
    });
  },

  onMouseLeave: function onMouseLeave() {
    var _this = this;

    // prevent popup menu and submenu gap
    this.leaveTimer = setTimeout(function () {
      // leave whole sub tree
      // still active
      if (_this.isMounted() && _this.props.active) {
        _this.props.onItemHover({
          key: _this.props.eventKey,
          item: _this,
          hover: false,
          trigger: 'mouseleave'
        });
      }
      if (_this.isMounted() && _this.props.open) {
        if (_this.props.closeSubMenuOnMouseLeave) {
          _this.triggerOpenChange(false);
        }
      }
    }, 100);
  },

  onClick: function onClick() {
    if (this.props.openSubMenuOnMouseEnter) {
      return;
    }
    this.triggerOpenChange(!this.props.open, 'click');
    this.setState({
      defaultActiveFirst: false
    });
  },

  onSubMenuClick: function onSubMenuClick(info) {
    this.props.onClick(this.addKeyPath(info));
  },

  onSelect: function onSelect(info) {
    this.props.onSelect(info);
  },

  onDeselect: function onDeselect(info) {
    this.props.onDeselect(info);
  },

  getPrefixCls: function getPrefixCls() {
    return this.props.rootPrefixCls + '-submenu';
  },

  getActiveClassName: function getActiveClassName() {
    return this.getPrefixCls() + '-active';
  },

  getDisabledClassName: function getDisabledClassName() {
    return this.getPrefixCls() + '-disabled';
  },

  getOpenClassName: function getOpenClassName() {
    return this.props.rootPrefixCls + '-submenu-open';
  },

  saveMenuInstance: function saveMenuInstance(c) {
    this.menuInstance = c;
  },

  addKeyPath: function addKeyPath(info) {
    return (0, _objectAssign2['default'])({}, info, {
      keyPath: (info.keyPath || []).concat(this.props.eventKey)
    });
  },

  triggerOpenChange: function triggerOpenChange(open, type) {
    var key = this.props.eventKey;
    this.onOpenChange({
      key: key,
      item: this,
      trigger: type,
      open: open
    });
  },

  renderChildren: function renderChildren(children) {
    var props = this.props;
    var baseProps = {
      mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
      visible: props.open,
      level: props.level + 1,
      inlineIndent: props.inlineIndent,
      focusable: false,
      onClick: this.onSubMenuClick,
      onSelect: this.onSelect,
      onDeselect: this.onDeselect,
      onDestroy: this.onDestroy,
      selectedKeys: props.selectedKeys,
      eventKey: props.eventKey + '-menu-',
      openKeys: props.openKeys,
      openTransitionName: props.openTransitionName,
      openAnimation: props.openAnimation,
      onOpenChange: this.onOpenChange,
      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
      defaultActiveFirst: this.state.defaultActiveFirst,
      multiple: props.multiple,
      prefixCls: props.rootPrefixCls,
      id: this._menuId,
      ref: this.saveMenuInstance
    };
    return _react2['default'].createElement(
      _SubPopupMenu2['default'],
      baseProps,
      children
    );
  },

  render: function render() {
    var _classes;

    this.haveOpen = this.haveOpen || this.props.open;
    var props = this.props;
    var prefixCls = this.getPrefixCls();
    var classes = (_classes = {}, _defineProperty(_classes, props.className, !!props.className), _defineProperty(_classes, prefixCls + '-' + props.mode, 1), _classes);

    classes[this.getOpenClassName()] = this.props.open;
    classes[this.getActiveClassName()] = props.active;
    classes[this.getDisabledClassName()] = props.disabled;
    this._menuId = this._menuId || (0, _rcUtil.guid)();
    classes[prefixCls] = true;
    classes[prefixCls + '-' + props.mode] = 1;
    var clickEvents = {};
    var mouseEvents = {};
    var titleMouseEvents = {};
    if (!props.disabled) {
      clickEvents = {
        onClick: this.onClick
      };
      mouseEvents = {
        onMouseLeave: this.onMouseLeave,
        onMouseEnter: this.onSubTreeMouseEnter
      };
      // only works in title, not outer li
      titleMouseEvents = {
        onMouseEnter: this.onMouseEnter
      };
    }
    var style = {};
    if (props.mode === 'inline') {
      style.paddingLeft = props.inlineIndent * props.level;
    }
    return _react2['default'].createElement(
      'li',
      _extends({ className: (0, _classnames2['default'])(classes) }, mouseEvents),
      _react2['default'].createElement(
        'div',
        _extends({
          style: style,
          className: prefixCls + '-title'
        }, titleMouseEvents, clickEvents, {
          'aria-open': props.open,
          'aria-owns': this._menuId,
          'aria-haspopup': 'true'
        }),
        props.title
      ),
      this.renderChildren(props.children)
    );
  }
});

exports['default'] = SubMenu;
module.exports = exports['default'];