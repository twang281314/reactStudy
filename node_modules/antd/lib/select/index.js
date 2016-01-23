'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcSelect = require('rc-select');

var _rcSelect2 = _interopRequireDefault(_rcSelect);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AntSelect = _react2.default.createClass({
  displayName: 'AntSelect',
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'ant-select',
      transitionName: 'slide-up',
      optionLabelProp: 'children',
      choiceTransitionName: 'zoom',
      showSearch: false,
      size: 'default'
    };
  },
  render: function render() {
    var _props = this.props;
    var size = _props.size;
    var className = _props.className;
    var combobox = _props.combobox;
    var notFoundContent = _props.notFoundContent;

    var cls = (0, _classnames2.default)(_defineProperty({
      'ant-select-lg': size === 'large',
      'ant-select-sm': size === 'small'
    }, className, !!className));

    if (combobox) {
      notFoundContent = null;
    }

    return _react2.default.createElement(_rcSelect2.default, _extends({}, this.props, {
      className: cls,
      notFoundContent: notFoundContent }));
  }
});

AntSelect.Option = _rcSelect2.default.Option;
AntSelect.OptGroup = _rcSelect2.default.OptGroup;

exports.default = AntSelect;
module.exports = exports['default'];