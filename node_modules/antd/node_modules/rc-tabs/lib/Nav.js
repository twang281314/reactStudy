'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var tabBarExtraContentStyle = {
  float: 'right'
};

function noop() {}

var Nav = _react2['default'].createClass({
  displayName: 'Nav',

  propTypes: {
    tabPosition: _react.PropTypes.string,
    tabBarExtraContent: _react.PropTypes.any,
    onTabClick: _react.PropTypes.func
  },

  mixins: [require('./InkBarMixin')],

  getInitialState: function getInitialState() {
    return {
      next: false,
      offset: 0,
      prev: false
    };
  },

  componentDidMount: function componentDidMount() {
    this.componentDidUpdate();
  },

  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps && prevProps.tabPosition !== this.props.tabPosition) {
      this.setOffset(0);
      return;
    }

    var navNode = this.refs.nav;
    var navNodeWH = this.getOffsetWH(navNode);
    var navWrapNode = this.refs.navWrap;
    var navWrapNodeWH = this.getOffsetWH(navWrapNode);
    var state = this.state;
    var offset = state.offset;
    var minOffset = navWrapNodeWH - navNodeWH;

    if (minOffset >= 0) {
      this.setNext(false);
      this.setOffset(0);
      offset = 0;
    } else if (minOffset < offset) {
      this.setNext(true);
    } else {
      this.setNext(false);
      this.setOffset(minOffset);
      offset = minOffset;
    }

    if (offset < 0) {
      this.setPrev(true);
    } else {
      this.setPrev(false);
    }
  },

  onTabClick: function onTabClick(key) {
    this.props.onTabClick(key);
  },

  getTabs: function getTabs() {
    var _this = this;

    var props = this.props;
    var children = props.panels;
    var activeKey = props.activeKey;
    var rst = [];
    var prefixCls = props.prefixCls;

    _react2['default'].Children.forEach(children, function (child) {
      var key = child.key;
      var cls = activeKey === key ? prefixCls + '-tab-active' : '';
      cls += ' ' + prefixCls + '-tab';
      var events = {};
      if (child.props.disabled) {
        cls += ' ' + prefixCls + '-tab-disabled';
      } else {
        events = {
          onClick: _this.onTabClick.bind(_this, key)
        };
      }
      var ref = {};
      if (activeKey === key) {
        ref.ref = 'activeTab';
      }
      rst.push(_react2['default'].createElement(
        'div',
        _extends({}, events, {
          className: cls,
          key: key
        }, ref),
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-tab-inner' },
          child.props.tab
        )
      ));
    });

    return rst;
  },

  getOffsetWH: function getOffsetWH(node) {
    var tabPosition = this.props.tabPosition;
    var prop = 'offsetWidth';
    if (tabPosition === 'left' || tabPosition === 'right') {
      prop = 'offsetHeight';
    }
    return node[prop];
  },

  setOffset: function setOffset(offset) {
    var target = Math.min(0, offset);
    if (this.state.offset !== target) {
      this.setState({
        offset: target
      });
    }
  },

  setPrev: function setPrev(v) {
    if (this.state.prev !== v) {
      this.setState({
        prev: v
      });
    }
  },

  setNext: function setNext(v) {
    if (this.state.next !== v) {
      this.setState({
        next: v
      });
    }
  },

  prev: function prev() {
    var navWrapNode = this.refs.navWrap;
    var navWrapNodeWH = this.getOffsetWH(navWrapNode);
    var state = this.state;
    var offset = state.offset;
    this.setOffset(offset + navWrapNodeWH);
  },

  next: function next() {
    var navWrapNode = this.refs.navWrap;
    var navWrapNodeWH = this.getOffsetWH(navWrapNode);
    var state = this.state;
    var offset = state.offset;
    this.setOffset(offset - navWrapNodeWH);
  },

  render: function render() {
    var props = this.props;
    var state = this.state;
    var prefixCls = props.prefixCls;
    var tabs = this.getTabs();
    var tabMovingDirection = props.tabMovingDirection;
    var tabPosition = props.tabPosition;
    var inkBarClass = prefixCls + '-ink-bar';
    if (tabMovingDirection) {
      inkBarClass += ' ' + prefixCls + '-ink-bar-transition-' + tabMovingDirection;
    }
    var nextButton = undefined;
    var prevButton = undefined;

    var showNextPrev = state.prev || state.next;

    if (showNextPrev) {
      var _cx, _cx2;

      prevButton = _react2['default'].createElement(
        'span',
        {
          onClick: state.prev ? this.prev : noop,
          unselectable: 'unselectable',
          className: (0, _utils.cx)((_cx = {}, _defineProperty(_cx, prefixCls + '-tab-prev', 1), _defineProperty(_cx, prefixCls + '-tab-btn-disabled', !state.prev), _cx)) },
        _react2['default'].createElement('span', { className: prefixCls + '-tab-prev-icon' })
      );

      nextButton = _react2['default'].createElement(
        'span',
        {
          onClick: state.next ? this.next : noop,
          unselectable: 'unselectable',
          className: (0, _utils.cx)((_cx2 = {}, _defineProperty(_cx2, prefixCls + '-tab-next', 1), _defineProperty(_cx2, prefixCls + '-tab-btn-disabled', !state.next), _cx2)) },
        _react2['default'].createElement('span', { className: prefixCls + '-tab-next-icon' })
      );
    }

    var navOffset = {};
    if (tabPosition === 'left' || tabPosition === 'right') {
      navOffset = {
        top: state.offset
      };
    } else {
      navOffset = {
        left: state.offset
      };
    }

    var tabBarExtraContent = this.props.tabBarExtraContent;

    return _react2['default'].createElement(
      'div',
      { className: prefixCls + '-tabs-bar' },
      tabBarExtraContent ? _react2['default'].createElement(
        'div',
        { style: tabBarExtraContentStyle },
        tabBarExtraContent
      ) : null,
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-nav-container ' + (showNextPrev ? prefixCls + '-nav-container-scrolling' : ''),
          style: props.style,
          ref: 'container' },
        prevButton,
        nextButton,
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-nav-wrap', ref: 'navWrap' },
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-nav-scroll' },
            _react2['default'].createElement(
              'div',
              { className: prefixCls + '-nav', ref: 'nav', style: navOffset },
              _react2['default'].createElement('div', { className: inkBarClass, ref: 'inkBar' }),
              tabs
            )
          )
        )
      )
    );
  }
});

exports['default'] = Nav;
module.exports = exports['default'];