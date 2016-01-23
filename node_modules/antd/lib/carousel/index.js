'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactSlick = require('react-slick');

var _reactSlick2 = _interopRequireDefault(_reactSlick);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill() {
    return {
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

var AntCarousel = _react2.default.createClass({
  displayName: 'AntCarousel',
  getDefaultProps: function getDefaultProps() {
    return {
      dots: true,
      arrows: false
    };
  },
  render: function render() {
    var props = (0, _objectAssign2.default)({}, this.props);

    if (props.effect === 'fade') {
      props.fade = true;
      props.draggable = false;
    }

    var className = 'ant-carousel';
    if (props.vertical) {
      className = className + ' ant-carousel-vertical';
    }

    return _react2.default.createElement(
      'div',
      { className: className },
      _react2.default.createElement(_reactSlick2.default, props)
    );
  }
});

exports.default = AntCarousel;
module.exports = exports['default'];