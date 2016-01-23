'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcPagination = require('rc-pagination');

var _rcPagination2 = _interopRequireDefault(_rcPagination);

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MiniSelect = function (_React$Component) {
  _inherits(MiniSelect, _React$Component);

  function MiniSelect() {
    _classCallCheck(this, MiniSelect);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MiniSelect).apply(this, arguments));
  }

  _createClass(MiniSelect, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_select2.default, _extends({ size: 'small' }, this.props));
    }
  }]);

  return MiniSelect;
}(_react2.default.Component);

MiniSelect.Option = _select2.default.Option;

var AntPagination = function (_React$Component2) {
  _inherits(AntPagination, _React$Component2);

  function AntPagination() {
    _classCallCheck(this, AntPagination);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AntPagination).apply(this, arguments));
  }

  _createClass(AntPagination, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;
      var selectComponentClass = _select2.default;

      if (this.props.size === 'small') {
        className += ' mini';
        selectComponentClass = MiniSelect;
      }

      return _react2.default.createElement(_rcPagination2.default, _extends({ selectComponentClass: selectComponentClass,
        selectPrefixCls: 'ant-select'
      }, this.props, {
        className: className }));
    }
  }]);

  return AntPagination;
}(_react2.default.Component);

AntPagination.defaultProps = {
  locale: _zh_CN2.default,
  className: '',
  prefixCls: 'ant-pagination'
};

exports.default = AntPagination;
module.exports = exports['default'];