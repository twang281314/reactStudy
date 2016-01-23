'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function merge() {
  var ret = {};
  var args = [].slice.call(arguments, 0);
  args.forEach(function (a) {
    Object.keys(a).forEach(function (k) {
      ret[k] = a[k];
    });
  });
  return ret;
}

var FieldMixin = {
  setField: function setField(field, e) {
    var v = e;
    var target = e && e.target;
    if (target) {
      // no radio
      if ((target.nodeName + '').toLowerCase() === 'input' && target.type === 'checkbox') {
        v = target.checked;
      } else {
        v = e.target.value;
      }
    }
    var newFormData = {};
    newFormData[field] = v;
    this.setState({
      formData: merge(this.state.formData, newFormData)
    });
  },

  handleValidate: function handleValidate(status, formData) {
    this.onValidate(status, formData);
  },

  onValidate: function onValidate(status, formData) {
    this.setState({
      status: merge(this.state.status, status),
      formData: merge(this.state.formData, formData)
    });
  }
};

exports['default'] = FieldMixin;
module.exports = exports['default'];