'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcNotification = require('rc-notification');

var _rcNotification2 = _interopRequireDefault(_rcNotification);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultDuration = 1.5;
var top = undefined;
var messageInstance = undefined;
var key = 1;

function getMessageInstance() {
  messageInstance = messageInstance || _rcNotification2.default.newInstance({
    prefixCls: 'ant-message',
    transitionName: 'move-up',
    style: {
      top: top
    } // 覆盖原来的样式
  });
  return messageInstance;
}

function notice(content) {
  var duration = arguments.length <= 1 || arguments[1] === undefined ? defaultDuration : arguments[1];
  var type = arguments[2];
  var onClose = arguments[3];

  var iconClass = {
    'info': 'ant-message-info',
    'success': 'ant-message-success',
    'error': 'ant-message-error',
    'warn': 'ant-message-warn',
    'loading': 'ant-message-loading'
  }[type];

  var iconType = {
    'info': 'info-circle',
    'success': 'check-circle',
    'error': 'exclamation-circle',
    'warn': 'exclamation-circle',
    'loading': 'loading'
  }[type];

  var instance = getMessageInstance();
  instance.notice({
    key: key,
    duration: duration,
    style: {},
    content: _react2.default.createElement(
      'div',
      { className: 'ant-message-custom-content ' + iconClass },
      _react2.default.createElement(_icon2.default, { className: iconClass, type: iconType }),
      _react2.default.createElement(
        'span',
        null,
        content
      )
    ),
    onClose: onClose
  });
  return function () {
    var target = key++;
    return function () {
      instance.removeNotice(target);
    };
  }();
}

exports.default = {
  info: function info(content, duration, onClose) {
    return notice(content, duration, 'info', onClose);
  },
  success: function success(content, duration, onClose) {
    return notice(content, duration, 'success', onClose);
  },
  error: function error(content, duration, onClose) {
    return notice(content, duration, 'error', onClose);
  },
  warn: function warn(content, duration, onClose) {
    return notice(content, duration, 'warn', onClose);
  },
  loading: function loading(content, duration, onClose) {
    return notice(content, duration, 'loading', onClose);
  },
  config: function config(options) {
    if (options.top) {
      top = options.top;
    }
  }
};
module.exports = exports['default'];