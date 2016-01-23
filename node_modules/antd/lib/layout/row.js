'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Row = _react2.default.createClass({
  displayName: 'Row',

  propTypes: {
    type: _react2.default.PropTypes.string,
    align: _react2.default.PropTypes.string,
    justify: _react2.default.PropTypes.string,
    className: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node
  },
  render: function render() {
    var _classNames;

    var _props = this.props;
    var type = _props.type;
    var justify = _props.justify;
    var align = _props.align;
    var className = _props.className;

    var others = _objectWithoutProperties(_props, ['type', 'justify', 'align', 'className']);

    var classes = (0, _classnames2.default)((_classNames = {
      'row': true
    }, _defineProperty(_classNames, 'row-' + type, type), _defineProperty(_classNames, 'row-' + type + '-' + justify, justify), _defineProperty(_classNames, 'row-' + type + '-' + align, align), _defineProperty(_classNames, className, className), _classNames));
    return _react2.default.createElement(
      'div',
      _extends({}, others, { className: classes }),
      this.props.children
    );
  }
});

exports.default = Row;
module.exports = exports['default'];