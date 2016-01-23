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

var Col = _react2.default.createClass({
  displayName: 'Col',

  propTypes: {
    span: _react2.default.PropTypes.string,
    order: _react2.default.PropTypes.string,
    offset: _react2.default.PropTypes.string,
    push: _react2.default.PropTypes.string,
    pull: _react2.default.PropTypes.string,
    className: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node
  },
  render: function render() {
    var _classNames;

    var _props = this.props;
    var span = _props.span;
    var order = _props.order;
    var offset = _props.offset;
    var push = _props.push;
    var pull = _props.pull;
    var className = _props.className;

    var others = _objectWithoutProperties(_props, ['span', 'order', 'offset', 'push', 'pull', 'className']);

    var classes = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'col-' + span, span), _defineProperty(_classNames, 'col-order-' + order, order), _defineProperty(_classNames, 'col-offset-' + offset, offset), _defineProperty(_classNames, 'col-push-' + push, push), _defineProperty(_classNames, 'col-pull-' + pull, pull), _defineProperty(_classNames, className, className), _classNames));
    return _react2.default.createElement(
      'div',
      _extends({}, others, { className: classes }),
      this.props.children
    );
  }
});

exports.default = Col;
module.exports = exports['default'];