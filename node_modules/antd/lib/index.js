'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var antd = {
  Affix: require('./affix'),
  DatePicker: require('./date-picker'),
  Tooltip: require('./tooltip'),
  Carousel: require('./carousel'),
  Tabs: require('./tabs'),
  Modal: require('./modal'),
  Dropdown: require('./dropdown'),
  Progress: require('./progress'),
  Popover: require('./popover'),
  Select: require('./select'),
  Breadcrumb: require('./breadcrumb'),
  Popconfirm: require('./popconfirm'),
  Pagination: require('./pagination'),
  Steps: require('./steps'),
  InputNumber: require('./input-number'),
  Switch: require('./switch'),
  Checkbox: require('./checkbox'),
  Table: require('./table'),
  Tag: require('./tag'),
  Collapse: require('./collapse'),
  message: require('./message'),
  Slider: require('./slider'),
  QueueAnim: require('./queue-anim'),
  Radio: require('./radio'),
  notification: require('./notification'),
  Alert: require('./alert'),
  Validation: require('./validation'),
  Tree: require('./tree'),
  Upload: require('./upload'),
  Badge: require('./badge'),
  Menu: require('./menu'),
  Timeline: require('./timeline'),
  Button: require('./button'),
  Icon: require('./icon'),
  Row: require('./row'),
  Col: require('./col'),
  Spin: require('./spin'),
  Form: require('./form'),
  Input: require('./input'),
  Calendar: require('./calendar'),
  TimePicker: require('./time-picker'),
  Transfer: require('./transfer')
};

antd.version = require('./package').version;

var ReactVersion = _react2.default.version;
if (process.env.NODE_ENV !== 'production') {
  var warning = require('warning');
  var semver = require('semver');
  var reactVersionInDeps = require('./package').devDependencies.react;
  warning(semver.satisfies(ReactVersion, reactVersionInDeps) || semver.gtr(ReactVersion, reactVersionInDeps), 'antd@' + antd.version + ' need react@' + reactVersionInDeps + ' or higher, which is react@' + ReactVersion + ' now.');
}

module.exports = antd;