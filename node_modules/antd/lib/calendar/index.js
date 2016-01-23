'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gregorianCalendar = require('gregorian-calendar');

var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _FullCalendar = require('rc-calendar/lib/FullCalendar');

var _FullCalendar2 = _interopRequireDefault(_FullCalendar);

var _Constants = require('./Constants');

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {
  return null;
}

function zerofixed(v) {
  if (v < 10) return '0' + v;
  return v + '';
}

var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Calendar).call(this, props));

    _this.state = {
      value: _this.parseDateFromValue(props.value || new Date()),
      mode: props.mode
    };
    return _this;
  }

  _createClass(Calendar, [{
    key: 'parseDateFromValue',
    value: function parseDateFromValue(value) {
      var date = new _gregorianCalendar2.default(this.props.locale);
      date.setTime(+value);
      return date;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: this.parseDateFromValue(nextProps.value)
        });
      }
    }
  }, {
    key: 'monthCellRender',
    value: function monthCellRender(value, locale) {
      var prefixCls = this.props.prefixCls;
      var month = value.getMonth();
      return _react2.default.createElement(
        'div',
        { className: prefixCls + '-month' },
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-value' },
          locale.format.shortMonths[month]
        ),
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-content' },
          this.props.monthCellRender(value)
        )
      );
    }
  }, {
    key: 'dateCellRender',
    value: function dateCellRender(value) {
      var prefixCls = this.props.prefixCls;
      return _react2.default.createElement(
        'div',
        { className: prefixCls + '-date' },
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-value' },
          zerofixed(value.getDayOfMonth())
        ),
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-content' },
          this.props.dateCellRender(value)
        )
      );
    }
  }, {
    key: 'setValue',
    value: function setValue(value) {
      if (!('value' in this.props) && this.state.value !== value) {
        this.setState({ value: value });
      }
      this.props.onPanelChange(value, this.state.mode);
    }
  }, {
    key: 'setType',
    value: function setType(type) {
      var mode = type === 'date' ? 'month' : 'year';
      if (this.state.mode !== mode) {
        this.setState({ mode: mode });
        this.props.onPanelChange(this.state.value, mode);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var _state = this.state;
      var value = _state.value;
      var mode = _state.mode;
      var locale = props.locale;
      var prefixCls = props.prefixCls;
      var style = props.style;
      var className = props.className;
      var fullscreen = props.fullscreen;

      var type = mode === 'year' ? 'month' : 'date';

      var cls = className || '';
      if (fullscreen) {
        cls += ' ' + prefixCls + '-fullscreen';
      }

      return _react2.default.createElement(
        'div',
        { className: cls, style: style },
        _react2.default.createElement(_Header2.default, {
          fullscreen: fullscreen,
          type: type,
          value: value,
          locale: locale.lang,
          prefixCls: prefixCls,
          onTypeChange: this.setType.bind(this),
          onValueChange: this.setValue.bind(this) }),
        _react2.default.createElement(_FullCalendar2.default, _extends({}, props, {
          Select: noop,
          locale: locale.lang,
          type: type,
          prefixCls: prefixCls,
          showHeader: false,
          value: value,
          monthCellRender: this.monthCellRender.bind(this),
          dateCellRender: this.dateCellRender.bind(this) }))
      );
    }
  }]);

  return Calendar;
}(_react.Component);

Calendar.propTypes = {
  monthCellRender: _react.PropTypes.func,
  dateCellRender: _react.PropTypes.func,
  fullscreen: _react.PropTypes.bool,
  locale: _react.PropTypes.object,
  prefixCls: _react.PropTypes.string,
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  onPanelChange: _react.PropTypes.func,
  value: _react.PropTypes.instanceOf(Date)
};

Calendar.defaultProps = {
  monthCellRender: noop,
  dateCellRender: noop,
  locale: _zh_CN2.default,
  fullscreen: true,
  prefixCls: _Constants.PREFIX_CLS,
  onPanelChange: noop,
  mode: 'month'
};

exports.default = Calendar;
module.exports = exports['default'];