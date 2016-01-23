'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _domAlign = require('dom-align');

var _domAlign2 = _interopRequireDefault(_domAlign);

var _rcUtil = require('rc-util');

var _isWindow = require('./isWindow');

var _isWindow2 = _interopRequireDefault(_isWindow);

function buffer(fn, ms) {
  var timer = undefined;
  return function bufferFn() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(fn, ms);
  };
}

var Align = _react2['default'].createClass({
  displayName: 'Align',

  propTypes: {
    childrenProps: _react.PropTypes.object,
    align: _react.PropTypes.object.isRequired,
    target: _react.PropTypes.func,
    onAlign: _react.PropTypes.func,
    monitorBufferTime: _react.PropTypes.number,
    monitorWindowResize: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    children: _react.PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      target: function target() {
        return window;
      },
      onAlign: function onAlign() {},
      monitorBufferTime: 50,
      monitorWindowResize: false,
      disabled: false
    };
  },

  componentDidMount: function componentDidMount() {
    var props = this.props;
    // if parent ref not attached .... use document.getElementById
    if (!props.disabled) {
      var source = _reactDom2['default'].findDOMNode(this);
      props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
      if (props.monitorWindowResize) {
        this.startMonitorWindowResize();
      }
    }
  },

  componentDidUpdate: function componentDidUpdate(prevProps) {
    var reAlign = false;
    var props = this.props;
    var currentTarget = undefined;

    if (!props.disabled) {
      if (prevProps.disabled || prevProps.align !== props.align) {
        reAlign = true;
        currentTarget = props.target();
      } else {
        var lastTarget = prevProps.target();
        currentTarget = props.target();
        if ((0, _isWindow2['default'])(lastTarget) && (0, _isWindow2['default'])(currentTarget)) {
          reAlign = false;
        } else if (lastTarget !== currentTarget) {
          reAlign = true;
        }
      }
    }

    if (reAlign) {
      var source = _reactDom2['default'].findDOMNode(this);
      props.onAlign(source, (0, _domAlign2['default'])(source, currentTarget, props.align));
    }

    if (props.monitorWindowResize && !props.disabled) {
      this.startMonitorWindowResize();
    } else {
      this.stopMonitorWindowResize();
    }
  },

  componentWillUnmount: function componentWillUnmount() {
    this.stopMonitorWindowResize();
  },

  onWindowResize: function onWindowResize() {
    var props = this.props;
    if (!props.disabled) {
      var source = _reactDom2['default'].findDOMNode(this);
      props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
    }
  },

  startMonitorWindowResize: function startMonitorWindowResize() {
    if (!this.resizeHandler) {
      this.resizeHandler = _rcUtil.Dom.addEventListener(window, 'resize', buffer(this.onWindowResize, this.props.monitorBufferTime));
    }
  },

  stopMonitorWindowResize: function stopMonitorWindowResize() {
    if (this.resizeHandler) {
      this.resizeHandler.remove();
      this.resizeHandler = null;
    }
  },

  render: function render() {
    var _props = this.props;
    var childrenProps = _props.childrenProps;
    var children = _props.children;

    var child = _react2['default'].Children.only(children);
    if (childrenProps) {
      var newProps = {};
      for (var prop in childrenProps) {
        if (childrenProps.hasOwnProperty(prop)) {
          newProps[prop] = this.props[childrenProps[prop]];
        }
      }
      return _react2['default'].cloneElement(child, newProps);
    }
    return child;
  }
});

exports['default'] = Align;
module.exports = exports['default'];