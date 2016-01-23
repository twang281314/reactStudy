'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function prefixClsFn(prefixCls) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return args.map(function (s) {
    return prefixCls + '-' + s;
  }).join(' ');
}

function ieGT9() {
  if ((typeof document === 'undefined' ? 'undefined' : _typeof(document)) === undefined) {
    return false;
  }
  var documentMode = document.documentMode || 0;
  return documentMode > 9;
}

function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return value;
}

var Group = function (_React$Component) {
  _inherits(Group, _React$Component);

  function Group() {
    _classCallCheck(this, Group);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Group).apply(this, arguments));
  }

  _createClass(Group, [{
    key: 'render',
    value: function render() {
      var className = 'ant-input-group ' + (this.props.className || '');
      return _react2.default.createElement(
        'span',
        { className: className,
          style: this.props.style },
        this.props.children
      );
    }
  }]);

  return Group;
}(_react2.default.Component);

Group.propTypes = {
  children: _react2.default.PropTypes.any
};

var Input = function (_React$Component2) {
  _inherits(Input, _React$Component2);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'renderLabledInput',
    value: function renderLabledInput(children) {
      var props = this.props;
      var wrapperClassName = prefixClsFn(props.prefixCls, 'input-group');
      var addonClassName = prefixClsFn(wrapperClassName, 'addon');
      var addonBefore = props.addonBefore ? _react2.default.createElement(
        'span',
        { className: addonClassName },
        props.addonBefore
      ) : null;

      var addonAfter = props.addonAfter ? _react2.default.createElement(
        'span',
        { className: addonClassName },
        props.addonAfter
      ) : null;

      return _react2.default.createElement(
        'span',
        { className: addonBefore || addonAfter ? wrapperClassName : '' },
        addonBefore,
        children,
        addonAfter
      );
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var props = (0, _objectAssign2.default)({}, this.props);
      var prefixCls = props.prefixCls;
      var inputClassName = prefixClsFn(prefixCls, 'input');
      if (!props.type) {
        return props.children;
      }

      switch (props.size) {
        case 'small':
          inputClassName = prefixClsFn(prefixCls, 'input', 'input-sm');break;
        case 'large':
          inputClassName = prefixClsFn(prefixCls, 'input', 'input-lg');break;
        default:
      }
      var placeholder = props.placeholder;
      if (placeholder && ieGT9()) {
        placeholder = null;
      }
      if ('value' in props) {
        props.value = fixControlledValue(props.value);
      }
      switch (props.type) {
        case 'textarea':
          return _react2.default.createElement('textarea', _extends({}, props, { placeholder: placeholder, className: inputClassName, ref: 'input' }));
        default:
          inputClassName = props.className ? props.className : inputClassName;
          return _react2.default.createElement('input', _extends({}, props, { placeholder: placeholder, className: inputClassName, ref: 'input' }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.renderLabledInput(this.renderInput());
    }
  }]);

  return Input;
}(_react2.default.Component);

Input.propTypes = {
  type: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  size: _react2.default.PropTypes.oneOf(['small', 'default', 'large']),
  disabled: _react2.default.PropTypes.bool,
  value: _react2.default.PropTypes.any,
  defaultValue: _react2.default.PropTypes.any,
  className: _react2.default.PropTypes.string,
  addonBefore: _react2.default.PropTypes.node,
  addonAfter: _react2.default.PropTypes.node,
  prefixCls: _react2.default.PropTypes.string
};

Input.defaultProps = {
  defaultValue: '',
  disabled: false,
  prefixCls: 'ant',
  type: 'text'
};

module.exports = Input;
module.exports.Group = Group;