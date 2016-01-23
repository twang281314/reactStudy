'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _KeyCode = require('./KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _TabPane = require('./TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

function noop() {}

function getDefaultActiveKey(props) {
  var activeKey = undefined;
  _react2['default'].Children.forEach(props.children, function (child) {
    if (!activeKey && !child.props.disabled) {
      activeKey = child.key;
    }
  });
  return activeKey;
}

var Tabs = _react2['default'].createClass({
  displayName: 'Tabs',

  propTypes: {
    destroyInactiveTabPane: _react.PropTypes.bool,
    onTabClick: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    children: _react.PropTypes.any,
    tabBarExtraContent: _react.PropTypes.any,
    animation: _react.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-tabs',
      destroyInactiveTabPane: false,
      tabBarExtraContent: null,
      onChange: noop,
      tabPosition: 'top',
      style: {},
      contentStyle: {},
      navStyle: {},
      onTabClick: noop
    };
  },

  getInitialState: function getInitialState() {
    var props = this.props;
    var activeKey = undefined;
    if ('activeKey' in props) {
      activeKey = props.activeKey;
    } else if ('defaultActiveKey' in props) {
      activeKey = props.defaultActiveKey;
    } else {
      activeKey = getDefaultActiveKey(props);
    }
    // cache panels
    this.renderPanels = {};
    return { activeKey: activeKey };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var newActiveKey = this.state.activeKey;
    if ('activeKey' in nextProps) {
      newActiveKey = nextProps.activeKey;
    }
    var found = undefined;
    _react2['default'].Children.forEach(nextProps.children, function (child) {
      if (child.key === newActiveKey) {
        found = true;
      }
    });
    if (found) {
      this.setActiveKey(newActiveKey, nextProps);
    } else {
      this.setActiveKey(getDefaultActiveKey(nextProps), nextProps);
    }
  },

  onTabDestroy: function onTabDestroy(key) {
    delete this.renderPanels[key];
  },

  onTabClick: function onTabClick(key) {
    this.props.onTabClick(key);
    this.setActiveKey(key);
    if (this.state.activeKey !== key) {
      this.props.onChange(key);
    }
  },

  onKeyDown: function onKeyDown(e) {
    if (e.target !== _reactDom2['default'].findDOMNode(this)) {
      return;
    }
    var eventKeyCode = e.keyCode;
    switch (eventKeyCode) {
      case _KeyCode2['default'].RIGHT:
      case _KeyCode2['default'].DOWN:
        e.preventDefault();
        var nextKey = this.getNextActiveKey(true);
        this.onTabClick(nextKey);
        break;
      case _KeyCode2['default'].LEFT:
      case _KeyCode2['default'].UP:
        e.preventDefault();
        var previousKey = this.getNextActiveKey(false);
        this.onTabClick(previousKey);
        break;
      default:
    }
  },

  getNextActiveKey: function getNextActiveKey(next) {
    var activeKey = this.state.activeKey;
    var children = [];
    _react2['default'].Children.forEach(this.props.children, function (c) {
      if (!c.props.disabled) {
        if (next) {
          children.push(c);
        } else {
          children.unshift(c);
        }
      }
    });
    var length = children.length;
    var ret = length && children[0].key;
    children.forEach(function (child, i) {
      if (child.key === activeKey) {
        if (i === length - 1) {
          ret = children[0].key;
        } else {
          ret = children[i + 1].key;
        }
      }
    });
    return ret;
  },

  getTabPanes: function getTabPanes() {
    var _this = this;

    var state = this.state;
    var props = this.props;
    var activeKey = state.activeKey;
    var children = props.children;
    var newChildren = [];
    var renderPanels = this.renderPanels;

    _react2['default'].Children.forEach(children, function (c) {
      var child = c;
      var key = child.key;
      var active = activeKey === key;
      if (active || renderPanels[key]) {
        child = active ? child : renderPanels[key];
        renderPanels[key] = _react2['default'].cloneElement(child, {
          active: active,
          onDestroy: _this.onTabDestroy.bind(_this, key),
          // eventKey: key,
          rootPrefixCls: props.prefixCls
        });
        newChildren.push(renderPanels[key]);
      } else {
        // do not change owner ...
        // or else will destroy and reinit
        // newChildren.push(<TabPane active={false}
        //  key={key}
        //  eventKey={key}
        //  rootPrefixCls={this.props.prefixCls}></TabPane>);
        // return
        // lazy load
        newChildren.push(_react2['default'].cloneElement(child, {
          active: false,
          // eventKey: key,
          rootPrefixCls: props.prefixCls
        }, []));
      }
    });

    return newChildren;
  },

  getIndexPair: function getIndexPair(props, currentActiveKey, activeKey) {
    var keys = [];
    _react2['default'].Children.forEach(props.children, function (c) {
      keys.push(c.key);
    });
    var currentIndex = keys.indexOf(currentActiveKey);
    var nextIndex = keys.indexOf(activeKey);
    return { currentIndex: currentIndex, nextIndex: nextIndex };
  },

  setActiveKey: function setActiveKey(activeKey, props) {
    var currentActiveKey = this.state.activeKey;
    if (currentActiveKey === activeKey) {
      return;
    }
    if (!currentActiveKey) {
      this.setState({
        activeKey: activeKey
      });
    } else {
      var _getIndexPair = this.getIndexPair(props || this.props, currentActiveKey, activeKey);

      var currentIndex = _getIndexPair.currentIndex;
      var nextIndex = _getIndexPair.nextIndex;

      // removed
      if (currentIndex === -1) {
        var newPair = this.getIndexPair(this.props, currentActiveKey, activeKey);
        currentIndex = newPair.currentIndex;
        nextIndex = newPair.nextIndex;
      }
      var tabMovingDirection = currentIndex > nextIndex ? 'backward' : 'forward';
      this.setState({
        activeKey: activeKey,
        tabMovingDirection: tabMovingDirection
      });
    }
  },

  render: function render() {
    var props = this.props;
    var destroyInactiveTabPane = props.destroyInactiveTabPane;
    var prefixCls = props.prefixCls;
    var tabPosition = props.tabPosition;

    var cls = prefixCls + ' ' + prefixCls + '-' + tabPosition;
    var tabMovingDirection = this.state.tabMovingDirection;
    if (props.className) {
      cls += ' ' + props.className;
    }
    var animation = this.props.animation;
    var tabPanes = this.getTabPanes();
    var transitionName = undefined;
    transitionName = props.transitionName && props.transitionName[tabMovingDirection || 'backward'];
    if (!transitionName && animation) {
      transitionName = prefixCls + '-' + animation + '-' + (tabMovingDirection || 'backward');
    }
    if (destroyInactiveTabPane) {
      tabPanes = tabPanes.filter(function (panel) {
        return panel.props.active;
      });
    }
    if (transitionName) {
      if (destroyInactiveTabPane) {
        tabPanes = _react2['default'].createElement(
          _rcAnimate2['default'],
          { exclusive: true,
            transitionName: transitionName },
          tabPanes
        );
      } else {
        tabPanes = _react2['default'].createElement(
          _rcAnimate2['default'],
          { showProp: 'active',
            exclusive: true,
            transitionName: transitionName },
          tabPanes
        );
      }
    }
    var contents = [_react2['default'].createElement(_Nav2['default'], { prefixCls: prefixCls,
      key: 'nav',
      tabBarExtraContent: this.props.tabBarExtraContent,
      tabPosition: tabPosition,
      style: props.navStyle,
      onTabClick: this.onTabClick,
      tabMovingDirection: tabMovingDirection,
      panels: this.props.children,
      activeKey: this.state.activeKey }), _react2['default'].createElement(
      'div',
      { className: prefixCls + '-content',
        style: props.contentStyle,
        key: 'content' },
      tabPanes
    )];
    if (tabPosition === 'bottom') {
      contents.reverse();
    }
    return _react2['default'].createElement(
      'div',
      { className: cls,
        tabIndex: '0',
        style: props.style,
        onKeyDown: this.onKeyDown },
      contents
    );
  }
});

Tabs.TabPane = _TabPane2['default'];

exports['default'] = Tabs;
module.exports = exports['default'];