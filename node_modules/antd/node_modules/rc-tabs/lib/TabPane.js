'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var TabPane = _react2['default'].createClass({
  displayName: 'TabPane',

  propTypes: {
    onDestroy: _react2['default'].PropTypes.func
  },

  componentWillUnmount: function componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  },

  render: function render() {
    var props = this.props;
    var prefixCls = props.rootPrefixCls + '-tabpane';
    var cls = props.active ? '' : prefixCls + '-hidden';
    cls += ' ' + prefixCls;
    return _react2['default'].createElement(
      'div',
      { className: cls },
      props.children
    );
  }
});

exports['default'] = TabPane;
module.exports = exports['default'];