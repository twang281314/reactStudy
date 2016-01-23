'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AntTag = function (_React$Component) {
  _inherits(AntTag, _React$Component);

  function AntTag(props) {
    _classCallCheck(this, AntTag);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AntTag).call(this, props));

    _this.state = {
      closing: false,
      closed: false
    };
    return _this;
  }

  _createClass(AntTag, [{
    key: 'close',
    value: function close(e) {
      var dom = _reactDom2.default.findDOMNode(this);
      dom.style.width = dom.offsetWidth + 'px';
      // It's Magic Code, don't know why
      dom.style.width = dom.offsetWidth + 'px';
      this.setState({
        closing: true
      });
      this.props.onClose.call(this, e);
    }
  }, {
    key: 'animationEnd',
    value: function animationEnd() {
      this.setState({
        closed: true,
        closing: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var close = this.props.closable ? _react2.default.createElement(_icon2.default, { type: 'cross', onClick: this.close.bind(this) }) : '';
      var colorClass = this.props.color ? this.props.prefixCls + '-' + this.props.color : '';
      var className = this.props.prefixCls + ' ' + colorClass;
      className = this.state.closing ? className + ' ' + this.props.prefixCls + '-close' : className;

      return this.state.closed ? null : _react2.default.createElement(
        _rcAnimate2.default,
        { component: '',
          showProp: 'data-show',
          transitionName: this.props.prefixCls + '-zoom',
          onEnd: this.animationEnd.bind(this) },
        _react2.default.createElement(
          'div',
          { 'data-show': !this.state.closing, className: className },
          _react2.default.createElement('a', _extends({ className: this.props.prefixCls + '-text' }, this.props)),
          close
        )
      );
    }
  }]);

  return AntTag;
}(_react2.default.Component);

AntTag.defaultProps = {
  prefixCls: 'ant-tag',
  closable: false,
  onClose: function onClose() {}
};

exports.default = AntTag;
module.exports = exports['default'];