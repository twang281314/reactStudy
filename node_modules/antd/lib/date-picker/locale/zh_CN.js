'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _zh_CN = require('gregorian-calendar/lib/locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _zh_CN3 = require('rc-calendar/lib/locale/zh_CN');

var _zh_CN4 = _interopRequireDefault(_zh_CN3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 统一合并为完整的 Locale
var locale = (0, _objectAssign2.default)({}, _zh_CN2.default);
locale.lang = (0, _objectAssign2.default)({
  placeholder: '请选择日期',
  timePlaceholder: '请选择时间'
}, _zh_CN4.default);

// should add whitespace between char in Button
locale.lang.ok = '确 定';

// All settings at:
// https://github.com/ant-design/ant-design/issues/424

exports.default = locale;
module.exports = exports['default'];