'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _dropdown = require('./dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = _button2.default.Group;

var align = {
  points: ['tr', 'br'],
  overlay: {
    adjustX: 1,
    adjustY: 1
  },
  offset: [0, 3],
  targetOffset: [0, 0]
};

exports.default = _react2.default.createClass({
  displayName: 'dropdown-button',
  getDefaultProps: function getDefaultProps() {
    return {
      align: align,
      type: 'default'
    };
  },
  render: function render() {
    return _react2.default.createElement(
      ButtonGroup,
      { className: 'ant-dropdown-button' },
      _react2.default.createElement(
        _button2.default,
        { type: this.props.type },
        this.props.children
      ),
      _react2.default.createElement(
        _dropdown2.default,
        this.props,
        _react2.default.createElement(
          _button2.default,
          { type: this.props.type },
          _react2.default.createElement(_icon2.default, { type: 'down' })
        )
      )
    );
  }
});
module.exports = exports['default'];