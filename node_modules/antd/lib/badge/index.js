'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _ScrollNumber = require('./ScrollNumber');

var _ScrollNumber2 = _interopRequireDefault(_ScrollNumber);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AntBadge = function (_React$Component) {
  _inherits(AntBadge, _React$Component);

  function AntBadge(props) {
    _classCallCheck(this, AntBadge);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AntBadge).call(this, props));
  }

  _createClass(AntBadge, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props;
      var count = _props.count;
      var prefixCls = _props.prefixCls;
      var overflowCount = _props.overflowCount;
      var className = _props.className;
      var style = _props.style;
      var children = _props.children;

      var dot = this.props.dot;

      count = count > overflowCount ? overflowCount + '+' : count;

      // dot mode don't need count
      if (dot) {
        count = '';
      }

      // null undefined "" "0" 0
      var hidden = (!count || count === '0') && !dot;
      var scrollNumberCls = prefixCls + (dot ? '-dot' : '-count');
      var badgeCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-not-a-wrapper', !children), _classNames));

      return _react2.default.createElement(
        'span',
        _extends({ className: badgeCls, title: count }, this.props, { style: null }),
        children,
        _react2.default.createElement(
          _rcAnimate2.default,
          { component: '',
            showProp: 'data-show',
            transitionName: prefixCls + '-zoom',
            transitionAppear: true },
          hidden ? null : _react2.default.createElement(_ScrollNumber2.default, { 'data-show': !hidden, className: scrollNumberCls,
            count: count, style: style })
        )
      );
    }
  }]);

  return AntBadge;
}(_react2.default.Component);

AntBadge.defaultProps = {
  prefixCls: 'ant-badge',
  count: null,
  dot: false,
  overflowCount: 99
};

AntBadge.propTypes = {
  count: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  dot: _react2.default.PropTypes.bool,
  overflowCount: _react2.default.PropTypes.number
};

exports.default = AntBadge;
module.exports = exports['default'];