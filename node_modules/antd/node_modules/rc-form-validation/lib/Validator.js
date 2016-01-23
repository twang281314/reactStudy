'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcUtil = require('rc-util');

function getValueFromEvent(e) {
  // support custom element
  return e && e.target ? e.target.value : e;
}

function hasPlaceholder(child) {
  return child.type === 'input' && !!child.props.placeholder;
}

function ieGT9() {
  if (typeof document === undefined) {
    return false;
  }
  var documentMode = document.documentMode || 0;
  return documentMode > 9;
}

var Validator = (function (_React$Component) {
  _inherits(Validator, _React$Component);

  function Validator(props) {
    _classCallCheck(this, Validator);

    _get(Object.getPrototypeOf(Validator.prototype), 'constructor', this).call(this, props);
    this.reset();
    this.onChange = this.onChange.bind(this);
    this.onChangeSilently = this.onChangeSilently.bind(this);
  }

  _createClass(Validator, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.attachValidator(this);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.props.attachValidator(this);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.detachValidator(this);
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      this.props.onInputChange(this, getValueFromEvent(e));
    }
  }, {
    key: 'onChangeSilently',
    value: function onChangeSilently(e) {
      // keep last error
      this.dirty = true;
      this.isValidating = false;
      this.props.onInputChangeSilently(this, getValueFromEvent(e));
    }
  }, {
    key: 'getInputElement',
    value: function getInputElement() {
      return _react2['default'].Children.only(this.props.children);
    }
  }, {
    key: 'getName',
    value: function getName() {
      return this.getInputElement().props.name;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.getInputElement().props.value;
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.errors = undefined;
      this.dirty = true;
      this.isValidating = false;
      // in case component is unmount and remount
      this.actionId = -1;
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      var child = this.getInputElement();
      var trigger = props.trigger;
      var extraProps = {};
      // keep model updated
      if (trigger !== 'onChange') {
        extraProps.onChange = (0, _rcUtil.createChainedFunction)(child.props.onChange, this.onChangeSilently);
      }
      extraProps[trigger] = (0, _rcUtil.createChainedFunction)(child.props[trigger], this.onChange);
      if (hasPlaceholder(child) && ieGT9()) {
        // https://github.com/react-component/form-validation/issues/13
        extraProps.placeholder = undefined;
      }
      return _react2['default'].cloneElement(child, extraProps);
    }
  }]);

  return Validator;
})(_react2['default'].Component);

Validator.defaultProps = {
  trigger: 'onChange'
};

Validator.propTypes = {
  attachValidator: _react.PropTypes.func,
  detachValidator: _react.PropTypes.func,
  onInputChange: _react.PropTypes.func,
  children: _react.PropTypes.any,
  onInputChangeSilently: _react.PropTypes.func,
  trigger: _react.PropTypes.string
};

exports['default'] = Validator;
module.exports = exports['default'];