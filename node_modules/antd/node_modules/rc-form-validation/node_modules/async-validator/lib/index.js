'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _util = require('./util');

var util = _interopRequireWildcard(_util);

var _validator = require('./validator/');

var _validator2 = _interopRequireDefault(_validator);

var _messages2 = require('./messages');

var _messages3 = _interopRequireDefault(_messages2);

var _rule = require('./rule/');

function asyncMap(arr, func, callback) {
  var results = [];

  function count(_, result) {
    results.push(result);
    if (results.length === arr.length) {
      callback(null, results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function complementError(rule) {
  return function (oe) {
    var e = oe;
    if (!e.message) {
      e = new Error(e);
    }
    e.field = e.field || rule.fullField;
    return e;
  };
}

/**
 *  Encapsulates a validation schema.
 *
 *  @param descriptor An object declaring validation rules
 *  for this schema.
 */
function Schema(descriptor) {
  this.rules = null;
  this._messages = _messages3['default'];
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = _messages;
    }
    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }
    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }
    this.rules = {};
    var z = undefined;
    var item = undefined;
    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source, o, oc) {
    var _this = this;

    if (!this.rules) {
      throw new Error('Cannot validate with no rules.');
    }
    var callback = oc;
    var options = o || {};
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
    function complete(results) {
      var i = undefined;
      var field = undefined;
      var errors = [];
      var fields = {};

      function add(e) {
        if (e instanceof Error) {
          errors.push(e);
        } else if (Array.isArray(e)) {
          errors = errors.concat.apply(errors, e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }
      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        if (options.single) {
          errors = errors.slice(0, 1);
        }
        for (i = 0; i < errors.length; i++) {
          field = errors[i].field;
          fields[field] = fields[field] || [];
          fields[field].push(errors[i]);
        }
      }
      callback(errors, fields);
    }

    options.messages = options.messages || this.messages();
    options.error = _rule.error;
    var arr = undefined;
    var value = undefined;
    var series = [];
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;
        if (typeof rule.transform === 'function') {
          value = source[z] = rule.transform(value);
        }
        if (typeof rule === 'function') {
          rule = {
            validator: rule
          };
        }
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);
        rule.validator = _this.getValidationMethod(rule);
        if (!rule.validator) {
          return;
        }
        series.push({ rule: rule, value: value, source: source, field: z });
      });
    });
    asyncMap(series, function (data, doIt) {
      var rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && typeof rule.fields === 'object';
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;
      function cb(e) {
        var errors = e;
        if (errors && !Array.isArray(errors)) {
          errors = [errors];
        }
        if (errors && errors.length && rule.message) {
          errors = [].concat(rule.message);
        }
        if (errors) {
          errors = errors.map(complementError(rule));
        }
        if (options.first && errors && errors.length) {
          return doIt(errors);
        }
        if (!deep) {
          doIt(null, errors);
        } else {
          errors = errors || [];
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else {
              errors = [options.error(rule, util.format(options.messages.required, rule.field))];
            }
            return doIt(null, errors);
          }
          var fieldsSchema = data.rule.fields;
          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = fieldsSchema[f];
              fieldSchema.fullField = rule.fullField + '.' + f;
            }
          }
          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);
          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }
          schema.validate(data.value, data.rule.options || options, function (errs) {
            doIt(null, errs && errs.length ? errors.concat(errs) : errs);
          });
        }
      }

      rule.validator(rule, data.value, cb, data.source, options);
    }, function (err, results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }
    if (typeof rule.validator !== 'function' && rule.type && !_validator2['default'].hasOwnProperty(rule.type)) {
      throw new Error(util.format('Unknown rule type %s', rule.type));
    }
    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }
    return _validator2['default'][rule.type] || false;
  }
};

Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }
  _validator2['default'][type] = validator;
};

Schema.messages = _messages3['default'];

exports['default'] = Schema;
module.exports = exports['default'];