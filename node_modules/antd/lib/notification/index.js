'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcNotification = require('rc-notification');

var _rcNotification2 = _interopRequireDefault(_rcNotification);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var top = 24;
var notificationInstance = undefined;

function getNotificationInstance() {
  if (notificationInstance) {
    return notificationInstance;
  }
  notificationInstance = _rcNotification2.default.newInstance({
    prefixCls: 'ant-notification',
    style: {
      top: top,
      right: 0
    }
  });
  return notificationInstance;
}

function notice(args) {
  var duration = undefined;
  if (args.duration === undefined) {
    duration = 4.5;
  } else {
    duration = args.duration;
  }

  if (args.icon) {
    var prefixCls = ' ant-notification-notice-content-icon-';
    var iconType = '';
    switch (args.icon) {
      case 'success':
        iconType = 'check-circle-o';
        break;
      case 'info':
        iconType = 'info-circle-o';
        break;
      case 'error':
        iconType = 'exclamation-circle-o';
        break;
      case 'warn':
        iconType = 'question-circle-o';
        break;
      default:
        iconType = 'info-circle';
    }

    getNotificationInstance().notice({
      content: _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_icon2.default, { className: prefixCls + 'icon-' + args.icon + prefixCls + 'icon', type: iconType }),
        _react2.default.createElement(
          'div',
          { className: prefixCls + 'message' },
          args.message
        ),
        _react2.default.createElement(
          'div',
          { className: prefixCls + 'description' },
          args.description
        )
      ),
      duration: duration,
      closable: true,
      onClose: args.onClose,
      key: args.key,
      style: {}
    });
  } else {
    var prefixCls = 'ant-notification-notice-content-';
    if (!args.btn) {
      getNotificationInstance().notice({
        content: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: prefixCls + 'message' },
            args.message
          ),
          _react2.default.createElement(
            'div',
            { className: prefixCls + 'description' },
            args.description
          )
        ),
        duration: duration,
        closable: true,
        onClose: args.onClose,
        key: args.key,
        style: {}
      });
    } else {
      getNotificationInstance().notice({
        content: _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: prefixCls + 'message' },
            args.message
          ),
          _react2.default.createElement(
            'div',
            { className: prefixCls + 'description' },
            args.description
          ),
          _react2.default.createElement(
            'span',
            { className: prefixCls + 'btn' },
            args.btn
          )
        ),
        duration: duration,
        closable: true,
        onClose: args.onClose,
        key: args.key,
        style: {}
      });
    }
  }
}

var api = {
  open: function open(args) {
    notice(args);
  },
  close: function close(key) {
    if (notificationInstance) {
      notificationInstance.removeNotice(key);
    }
  },
  config: function config(options) {
    top = isNaN(options.top) ? 24 : options.top;
  }
};

['success', 'info', 'warn', 'error'].forEach(function (type) {
  api[type] = function (args) {
    var newArgs = (0, _objectAssign2.default)({}, args, {
      icon: type
    });
    return api.open(newArgs);
  };
});

exports.default = api;
module.exports = exports['default'];