'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _FormItem = require('./FormItem');

var _FormItem2 = _interopRequireDefault(_FormItem);

var _ValueMixin = require('./ValueMixin');

var _ValueMixin2 = _interopRequireDefault(_ValueMixin);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Form2.default.Item = _FormItem2.default;
_Form2.default.ValueMixin = _ValueMixin2.default;

// 对于 import { Form, Input } from 'antd/lib/form/';
// 的方式做向下兼容
// https://github.com/ant-design/ant-design/pull/566
_Form2.default.Form = _Form2.default;
_Form2.default.Input = _input2.default;

exports.default = _Form2.default;
module.exports = exports['default'];