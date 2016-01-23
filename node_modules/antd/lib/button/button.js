'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2,2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
  return typeof str === 'string';
}

var prefix = 'ant-btn-';

// Insert one space between two chinese characters automatically.
function insertSpace(child) {
  if (isString(child) && isTwoCNChar(child)) {
    return child.split('').join(' ');
  }

  if (isString(child.type) && isTwoCNChar(child.props.children)) {
    return _react2.default.cloneElement(child, {}, child.props.children.split('').join(' '));
  }

  return child;
}

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (window && window.PIE) {
        window.PIE.attach((0, _reactDom.findDOMNode)(this));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var props = this.props;
      var type = props.type;
      var shape = props.shape;
      var size = props.size;
      var onClick = props.onClick;
      var className = props.className;
      var htmlType = props.htmlType;
      var children = props.children;

      var others = _objectWithoutProperties(props, ['type', 'shape', 'size', 'onClick', 'className', 'htmlType', 'children']);

      // large => lg
      // small => sm

      var sizeCls = {
        'large': 'lg',
        'small': 'sm'
      }[size] || '';

      var classes = (0, _classnames2.default)((_classNames = {
        'ant-btn': true
      }, _defineProperty(_classNames, prefix + type, type), _defineProperty(_classNames, prefix + shape, shape), _defineProperty(_classNames, prefix + sizeCls, sizeCls), _defineProperty(_classNames, prefix + 'loading', 'loading' in props && props.loading !== false), _defineProperty(_classNames, className, className), _classNames));

      var kids = _react2.default.Children.map(children, insertSpace);

      return _react2.default.createElement(
        'button',
        _extends({}, others, { type: htmlType || 'button', className: classes, onClick: onClick }),
        kids
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

exports.default = Button;

Button.propTypes = {
  type: _react2.default.PropTypes.string,
  shape: _react2.default.PropTypes.string,
  size: _react2.default.PropTypes.string,
  htmlType: _react2.default.PropTypes.string,
  onClick: _react2.default.PropTypes.func,
  loading: _react2.default.PropTypes.bool,
  className: _react2.default.PropTypes.string
};

Button.defaultProps = {
  onClick: function onClick() {}
};
module.exports = exports['default'];