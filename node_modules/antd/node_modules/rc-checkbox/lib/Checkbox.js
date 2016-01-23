'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var Checkbox = (function (_React$Component) {
  _inherits(Checkbox, _React$Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    _get(Object.getPrototypeOf(Checkbox.prototype), 'constructor', this).call(this, props);
    this.handleChange = this.handleChange.bind(this);
    var checked = false;
    if ('checked' in props) {
      checked = props.checked;
    } else {
      checked = props.defaultChecked;
    }
    this.state = { checked: checked };
  }

  _createClass(Checkbox, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('checked' in nextProps) {
        this.setState({
          checked: nextProps.checked
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var props = this.props;
      var prefixCls = props.prefixCls;
      var checked = this.state.checked;
      if (typeof checked === 'boolean') {
        checked = checked ? 1 : 0;
      }
      return _react2['default'].createElement(
        'span',
        { className: (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, props.className, !!props.className), _defineProperty(_classnames, prefixCls, 1), _defineProperty(_classnames, prefixCls + '-checked', checked), _defineProperty(_classnames, prefixCls + '-checked-' + checked, !!checked), _defineProperty(_classnames, prefixCls + '-disabled', props.disabled), _classnames)),
          style: props.style
        },
        _react2['default'].createElement('span', { className: prefixCls + '-inner' }),
        _react2['default'].createElement('input', _extends({}, props, {
          defaultChecked: !!props.defaultChecked,
          className: prefixCls + '-input',
          checked: !!checked,
          onChange: this.handleChange
        }))
      );
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var checked = e.target.checked;
      if (!('checked' in this.props)) {
        this.setState({
          checked: checked ? 1 : 0
        });
      }
      this.props.onChange(e, this.state.checked);
    }
  }]);

  return Checkbox;
})(_react2['default'].Component);

exports['default'] = Checkbox;

Checkbox.propTypes = {
  prefixCls: _react2['default'].PropTypes.string,
  style: _react2['default'].PropTypes.object,
  type: _react2['default'].PropTypes.string,
  className: _react2['default'].PropTypes.string,
  defaultChecked: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.bool]),
  checked: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.bool]),
  onChange: _react2['default'].PropTypes.func
};

Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  style: {},
  type: 'checkbox',
  className: '',
  defaultChecked: 0,
  onChange: function onChange() {}
};
module.exports = exports['default'];