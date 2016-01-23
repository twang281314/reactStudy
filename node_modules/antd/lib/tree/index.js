'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTree = require('rc-tree');

var _rcTree2 = _interopRequireDefault(_rcTree);

var _openAnimation = require('../common/openAnimation');

var _openAnimation2 = _interopRequireDefault(_openAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AntTree = _react2.default.createClass({
  displayName: 'AntTree',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-tree',
      checkable: false,
      showIcon: false
    };
  },
  render: function render() {
    var props = this.props;
    var checkable = props.checkable;
    if (checkable) {
      checkable = _react2.default.createElement('span', { className: props.prefixCls + '-checkbox-inner' });
    }
    return _react2.default.createElement(
      _rcTree2.default,
      _extends({ openAnimation: _openAnimation2.default }, props, { checkable: checkable }),
      this.props.children
    );
  }
});

AntTree.TreeNode = _rcTree2.default.TreeNode;
exports.default = AntTree;
module.exports = exports['default'];