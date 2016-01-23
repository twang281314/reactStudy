'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

var Search = function (_Component) {
  _inherits(Search, _Component);

  function Search(props) {
    _classCallCheck(this, Search);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Search).call(this, props));
  }

  _createClass(Search, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.props.onChange(e);
    }
  }, {
    key: 'handleClear',
    value: function handleClear(e) {
      e.preventDefault();
      this.props.handleClear(e);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var placeholder = _props.placeholder;
      var value = _props.value;
      var prefixCls = _props.prefixCls;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', { placeholder: placeholder, className: prefixCls + ' ant-input', value: value, ref: 'input',
          onChange: this.handleChange.bind(this) }),
        value && value.length > 0 ? _react2.default.createElement(
          'a',
          { href: '#', className: prefixCls + '-action', onClick: this.handleClear.bind(this) },
          _react2.default.createElement(_icon2.default, { type: 'cross-circle' })
        ) : _react2.default.createElement(
          'span',
          { className: prefixCls + '-action' },
          _react2.default.createElement(_icon2.default, { type: 'search' })
        )
      );
    }
  }]);

  return Search;
}(_react.Component);

Search.defaultProps = {
  placeholder: '请输入搜索内容',
  onChange: noop,
  handleClear: noop
};

Search.propTypes = {
  prefixCls: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  handleClear: _react.PropTypes.func
};

exports.default = Search;
module.exports = exports['default'];