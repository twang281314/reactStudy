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

var _asyncValidator = require('async-validator');

var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

var _Validator = require('./Validator');

var _Validator2 = _interopRequireDefault(_Validator);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _FieldMixin = require('./FieldMixin');

var _FieldMixin2 = _interopRequireDefault(_FieldMixin);

var actionId = 0;

var Validation = (function (_React$Component) {
  _inherits(Validation, _React$Component);

  function Validation(props) {
    var _this = this;

    _classCallCheck(this, Validation);

    _get(Object.getPrototypeOf(Validation.prototype), 'constructor', this).call(this, props);
    this.validators = {};
    ['attachValidator', 'detachValidator', 'onInputChange', 'onInputChangeSilently'].forEach(function (m) {
      _this[m] = _this[m].bind(_this);
    });
  }

  _createClass(Validation, [{
    key: 'onInputChangeSilently',
    value: function onInputChangeSilently(validator, value) {
      var r = this.getValidateResult();
      r.formData[validator.getName()] = value;
      this.props.onValidate(r.status, r.formData);
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(validator, v, fn) {
      var value = v;
      var name = validator.getName();
      var schema = this.getSchema(validator);
      var rules = schema[name];
      rules.forEach(function (rule, index) {
        if (rule.transform) {
          value = rule.transform(value);
          var newRule = (0, _objectAssign2['default'])({}, rule);
          newRule.transform = null;
          rules[index] = newRule;
        }
      });
      var values = {};
      values[name] = value;
      validator.errors = undefined;
      validator.isValidating = true;
      validator.dirty = true;
      var currentActionId = actionId;
      validator.actionId = currentActionId;
      actionId++;
      var result = this.getValidateResult();
      result.formData[name] = value;
      this.props.onValidate(result.status, result.formData);
      var self = this;
      new _asyncValidator2['default'](schema).validate(values, function (errors) {
        var validators = self.validators;
        // in case component is unmount and remount
        var nowValidator = validators[name];
        // prevent concurrency call
        if (nowValidator && nowValidator.actionId === currentActionId) {
          validator.errors = errors;
          validator.isValidating = false;
          validator.dirty = false;
          var r = self.getValidateResult();
          r.formData[name] = value;
          self.props.onValidate(r.status, r.formData);
          if (fn) {
            fn();
          }
        }
      });
    }
  }, {
    key: 'getSchema',
    value: function getSchema(validator) {
      var ret = {};
      var rules = validator.props.rules;
      if (Array.isArray(rules)) {
        rules = rules.concat();
      } else {
        rules = [rules];
      }
      ret[validator.getName()] = rules;
      return ret;
    }
  }, {
    key: 'getValidateResult',
    value: function getValidateResult() {
      var formData = {};
      var status = {};
      var validators = this.validators;
      Object.keys(validators).forEach(function (name) {
        var validator = validators[name];
        var errors = undefined;
        if (validator.errors) {
          errors = validator.errors.map(function (e) {
            return e.message;
          });
        }
        if (errors && errors.length === 0) {
          errors = null;
        }
        status[name] = {
          errors: errors,
          isValidating: validator.isValidating
        };
        formData[name] = validator.getValue();
      });
      return {
        formData: formData,
        status: status
      };
    }
  }, {
    key: 'isValid',
    value: function isValid() {
      var result = this.getValidateResult().status;
      return Object.keys(result).every(function (name) {
        if (result[name].isValidating || result[name].errors) {
          return false;
        }
        return true;
      });
    }
  }, {
    key: 'attachValidators',
    value: function attachValidators(children) {
      var self = this;
      if (children) {
        var _ret = (function () {
          // refer: React traverseAllChildrenImpl
          // bug fix for react 0.13 @2015.07.02
          // option should not have non-text children
          // <option>11</option>
          // React.Children.map(option.props.children,function(c){return c}) => {'.0':'11'}
          var type = typeof children;
          if (type === 'boolean') {
            return {
              v: children
            };
          }
          if (type === 'string' || type === 'number') {
            return {
              v: children
            };
          }
          var childrenArray = [];
          var ret = _react2['default'].Children.map(children, function (c) {
            var child = c;
            if (_react2['default'].isValidElement(child)) {
              if (child.type === _Validator2['default']) {
                child = _react2['default'].cloneElement(child, {
                  attachValidator: self.attachValidator,
                  detachValidator: self.detachValidator,
                  onInputChange: self.onInputChange,
                  onInputChangeSilently: self.onInputChangeSilently
                });
              } else if (child.props) {
                child = _react2['default'].cloneElement(child, {}, self.attachValidators(child.props.children));
              }
            }
            childrenArray.push(child);
            return child;
          });
          // if only one child, then flatten
          if (childrenArray.length === 1) {
            return {
              v: childrenArray[0]
            };
          }
          return {
            v: ret
          };
        })();

        if (typeof _ret === 'object') return _ret.v;
      }
      return children;
    }
  }, {
    key: 'attachValidator',
    value: function attachValidator(validator) {
      var name = validator.getName();
      this.validators[name] = validator;
    }
  }, {
    key: 'detachValidator',
    value: function detachValidator(validator) {
      delete this.validators[validator.getName()];
    }
  }, {
    key: 'forceValidate',
    value: function forceValidate(fs, callback) {
      var _this2 = this;

      var fields = fs;
      // must async to allow state sync
      setTimeout(function () {
        var self = _this2;
        var validators = _this2.validators;
        var validator = undefined;
        var doing = 0;

        fields = fields || Object.keys(validators);
        var count = fields.length;
        if (count === 0) {
          callback(self.isValid());
          return;
        }

        function track() {
          doing++;
          if (doing === count) {
            if (callback) {
              callback(self.isValid());
            }
          }
        }

        fields.forEach(function (name) {
          validator = validators[name];
          self.onInputChange(validator, validator.getValue(), track);
        });
      }, 0);
    }
  }, {
    key: 'validate',
    value: function validate(callback) {
      var _this3 = this;

      var self = this;
      var validators = this.validators;
      var count = 0;
      var validator = undefined;
      var doing = 0;

      Object.keys(validators).forEach(function (name) {
        validator = validators[name];
        if (validator.dirty) {
          count++;
        }
      });

      if (count === 0) {
        callback(self.isValid());
        return;
      }

      function track() {
        doing++;
        if (doing === count) {
          callback(self.isValid());
        }
      }

      Object.keys(validators).forEach(function (name) {
        validator = validators[name];
        if (validator.dirty) {
          _this3.onInputChange(validator, validator.getValue(), track);
        }
      });
    }
  }, {
    key: 'reset',
    value: function reset() {
      var validators = this.validators;
      Object.keys(validators).forEach(function (name) {
        validators[name].reset();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: this.props.className },
        this.attachValidators(this.props.children)
      );
    }
  }]);

  return Validation;
})(_react2['default'].Component);

Validation.propTypes = {
  onChange: _react2['default'].PropTypes.func,
  onValidate: _react2['default'].PropTypes.func,
  className: _react2['default'].PropTypes.string,
  children: _react2['default'].PropTypes.any
};

Validation.defaultProps = {
  onValidate: function onValidate() {}
};

Validation.Validator = _Validator2['default'];

Validation.FieldMixin = _FieldMixin2['default'];

exports['default'] = Validation;
module.exports = exports['default'];