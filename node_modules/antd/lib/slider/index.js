'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcSlider = require('rc-slider');

var _rcSlider2 = _interopRequireDefault(_rcSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = _react2.default.createClass({
  displayName: 'slider',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-slider',
      tipTransitionName: 'zoom-down'
    };
  },
  render: function render() {
    var _props = this.props;
    var isIncluded = _props.isIncluded;
    var marks = _props.marks;
    var index = _props.index;
    var defaultIndex = _props.defaultIndex;

    var rest = _objectWithoutProperties(_props, ['isIncluded', 'marks', 'index', 'defaultIndex']);

    if (isIncluded !== undefined) {
      // 兼容 `isIncluded`
      rest.included = isIncluded;
    }

    if (Array.isArray(marks)) {
      // 兼容当 marks 为数组的情况
      rest.min = 0;
      rest.max = marks.length - 1;
      rest.step = 1;

      if (index !== undefined) {
        rest.value = index;
      }
      if (defaultIndex !== undefined) {
        rest.defaultValue = defaultIndex;
      }

      rest.marks = {};
      marks.forEach(function (val, idx) {
        rest.marks[idx] = val;
      });
    } else {
      rest.marks = marks;
    }

    return _react2.default.createElement(_rcSlider2.default, rest);
  }
});
module.exports = exports['default'];