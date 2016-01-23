'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'Group',
  getDefaultProps: function getDefaultProps() {
    return {
      options: [],
      onChange: function onChange() {}
    };
  },

  propTypes: {
    defaultValue: _react2.default.PropTypes.array,
    value: _react2.default.PropTypes.array,
    options: _react2.default.PropTypes.array.isRequired,
    onChange: _react2.default.PropTypes.func
  },
  getInitialState: function getInitialState() {
    var _props = this.props;
    var value = _props.value;
    var defaultValue = _props.defaultValue;

    return {
      value: value || defaultValue || []
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  },
  toggleOption: function toggleOption(option) {
    var optionIndex = this.state.value.indexOf(option);
    var value = this.state.value;
    if (optionIndex === -1) {
      value.push(option);
    } else {
      value.splice(optionIndex, 1);
    }
    if (!('value' in this.props)) {
      this.setState({ value: value });
    }
    this.props.onChange(value);
  },
  render: function render() {
    var _this = this;

    var options = this.props.options;
    return _react2.default.createElement(
      'div',
      { className: 'ant-checkbox-group' },
      options.map(function (option) {
        return _react2.default.createElement(
          'label',
          { className: 'ant-checkbox-group-item', key: option },
          _react2.default.createElement(_index2.default, { disabled: _this.props.disabled,
            checked: _this.state.value.indexOf(option) !== -1,
            onChange: _this.toggleOption.bind(_this, option) }),
          option
        );
      })
    );
  }
});
module.exports = exports['default'];