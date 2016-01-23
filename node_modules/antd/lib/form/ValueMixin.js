'use strict';

Object.defineProperty(exports, "__esModule", {
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

var ValueMixin = {
  setValue: function setValue(field, e) {
    var v = e;
    var target = e && e.target;
    if (target) {
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
  }
};

exports.default = ValueMixin;
module.exports = exports['default'];