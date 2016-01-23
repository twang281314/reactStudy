'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = require('react');
var rcUtil = require('rc-util');

function noop() {}

var Switch = React.createClass({
  displayName: 'Switch',

  propTypes: {
    onChange: React.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-switch',
      style: {},
      checkedChildren: null,
      unCheckedChildren: null,
      className: '',
      defaultChecked: false,
      onChange: noop
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    var checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    return {
      checked: checked
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked
      });
    }
  },
  toggle: function toggle() {
    var checked = !this.state.checked;
    this.setState({
      checked: checked
    });
    this.props.onChange(checked);
  },
  render: function render() {
    var _classes;

    var props = this.props;
    var prefixCls = props.prefixCls;
    var classes = (_classes = {}, _defineProperty(_classes, props.className, !!props.className), _defineProperty(_classes, prefixCls, 1), _defineProperty(_classes, prefixCls + '-checked', this.state.checked), _defineProperty(_classes, prefixCls + '-disabled', props.disabled), _classes);
    return React.createElement(
      'span',
      { className: rcUtil.classSet(classes),
        onClick: props.disabled ? noop : this.toggle,
        style: props.style },
      React.createElement(
        'span',
        { className: prefixCls + '-inner' },
        this.state.checked ? props.checkedChildren : props.unCheckedChildren
      )
    );
  }
});

module.exports = Switch;