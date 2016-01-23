'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Constants = require('./Constants');

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _radio = require('../radio');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'getYearSelectElement',
    value: function getYearSelectElement(year) {
      var _props = this.props;
      var yearSelectOffset = _props.yearSelectOffset;
      var yearSelectTotal = _props.yearSelectTotal;
      var locale = _props.locale;
      var prefixCls = _props.prefixCls;
      var fullscreen = _props.fullscreen;

      var start = year - yearSelectOffset;
      var end = start + yearSelectTotal;
      var suffix = locale.year === '年' ? '年' : '';

      var options = [];
      for (var index = start; index < end; index++) {
        options.push(_react2.default.createElement(
          Option,
          { key: '' + index },
          index + suffix
        ));
      }
      return _react2.default.createElement(
        _select2.default,
        {
          style: { width: 75 },
          size: fullscreen ? null : 'small',
          dropdownMatchSelectWidth: false,
          dropdownMenuStyle: { minWidth: 103 },
          className: prefixCls + '-year-select',
          onChange: this.onYearChange.bind(this),
          value: String(year) },
        options
      );
    }
  }, {
    key: 'getMonthSelectElement',
    value: function getMonthSelectElement(month) {
      var props = this.props;
      var months = props.locale.format.months;
      var prefixCls = props.prefixCls;
      var fullscreen = props.fullscreen;

      var options = [];

      for (var index = 0; index < 12; index++) {
        options.push(_react2.default.createElement(
          Option,
          { key: '' + index },
          months[index]
        ));
      }

      return _react2.default.createElement(
        _select2.default,
        {
          style: { minWidth: 70 },
          dropdownMenuStyle: { minWidth: 125 },
          size: fullscreen ? null : 'small',
          dropdownMatchSelectWidth: false,
          className: prefixCls + '-month-select',
          value: String(month),
          onChange: this.onMonthChange.bind(this) },
        options
      );
    }
  }, {
    key: 'onYearChange',
    value: function onYearChange(year) {
      var newValue = this.props.value.clone();
      newValue.setYear(parseInt(year, 10));
      this.props.onValueChange(newValue);
    }
  }, {
    key: 'onMonthChange',
    value: function onMonthChange(month) {
      var newValue = this.props.value.clone();
      newValue.setMonth(parseInt(month, 10));
      this.props.onValueChange(newValue);
    }
  }, {
    key: 'onTypeChange',
    value: function onTypeChange(e) {
      this.props.onTypeChange(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var type = _props2.type;
      var value = _props2.value;
      var prefixCls = _props2.prefixCls;
      var locale = _props2.locale;

      var yearSelect = this.getYearSelectElement(value.getYear());

      var monthSelect = type === 'date' ? this.getMonthSelectElement(value.getMonth()) : null;

      var typeSwitch = _react2.default.createElement(
        _radio.Group,
        { onChange: this.onTypeChange.bind(this), value: type },
        _react2.default.createElement(
          _radio.Button,
          { value: 'date' },
          locale.month
        ),
        _react2.default.createElement(
          _radio.Button,
          { value: 'month' },
          locale.year
        )
      );

      return _react2.default.createElement(
        'div',
        { className: prefixCls + '-header' },
        yearSelect,
        monthSelect,
        typeSwitch
      );
    }
  }]);

  return Header;
}(_react.Component);

Header.propTypes = {
  value: _react.PropTypes.object,
  locale: _react.PropTypes.object,
  yearSelectOffset: _react.PropTypes.number,
  yearSelectTotal: _react.PropTypes.number,
  onValueChange: _react.PropTypes.func,
  onTypeChange: _react.PropTypes.func,
  prefixCls: _react.PropTypes.string,
  selectPrefixCls: _react.PropTypes.string,
  type: _react.PropTypes.string
};

Header.defaultProps = {
  prefixCls: _Constants.PREFIX_CLS + '-header',
  yearSelectOffset: 10,
  yearSelectTotal: 20,
  onValueChange: noop,
  onTypeChange: noop
};

exports.default = Header;
module.exports = exports['default'];