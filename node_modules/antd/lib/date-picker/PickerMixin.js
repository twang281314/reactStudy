'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _gregorianCalendarFormat = require('gregorian-calendar-format');

var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);

var _gregorianCalendar = require('gregorian-calendar');

var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getLocale: function getLocale() {
    // 统一合并为完整的 Locale
    var locale = (0, _objectAssign2.default)({}, _zh_CN2.default, this.props.locale);
    locale.lang = (0, _objectAssign2.default)({}, _zh_CN2.default.lang, this.props.locale.lang);
    return locale;
  },
  getFormatter: function getFormatter() {
    var formats = this.formats = this.formats || {};
    var format = this.props.format;
    if (formats[format]) {
      return formats[format];
    }
    formats[format] = new _gregorianCalendarFormat2.default(format, this.getLocale().lang.format);
    return formats[format];
  },
  parseDateFromValue: function parseDateFromValue(value) {
    if (value) {
      if (typeof value === 'string') {
        return this.getFormatter().parse(value, { locale: this.getLocale() });
      } else if (value instanceof Date) {
        var date = new _gregorianCalendar2.default(this.getLocale());
        date.setTime(+value);
        return date;
      }
    } else if (value === null) {
      return value;
    }
    return undefined;
  },

  // remove input readonly warning
  handleInputChange: function handleInputChange() {},
  toggleOpen: function toggleOpen(e) {
    this.setState({
      open: e.open
    });
  }
};
module.exports = exports['default'];