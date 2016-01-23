'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rcProgress = require('rc-progress');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixCls = 'ant-progress';

var statusColorMap = {
  'normal': '#2db7f5',
  'exception': '#ff6600',
  'success': '#87d068'
};

var Line = _react2.default.createClass({
  displayName: 'Line',

  propTypes: {
    status: _react2.default.PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
    showInfo: _react2.default.PropTypes.bool,
    percent: _react2.default.PropTypes.number,
    strokeWidth: _react2.default.PropTypes.number
  },
  getDefaultProps: function getDefaultProps() {
    return {
      percent: 0,
      strokeWidth: 10,
      status: 'normal', // exception active
      format: '${percent}%',
      showInfo: true
    };
  },
  render: function render() {
    var props = (0, _objectAssign2.default)({}, this.props);

    if (parseInt(props.percent, 10) === 100) {
      props.status = 'success';
    }

    var progressInfo = undefined;
    var fullCls = '';
    var text = typeof props.format === 'string' ? props.format.replace('${percent}', props.percent) : props.format;

    if (props.showInfo === true) {
      if (props.status === 'exception') {
        progressInfo = _react2.default.createElement(
          'span',
          { className: prefixCls + '-line-text' },
          text
        );
      } else if (props.status === 'success') {
        progressInfo = _react2.default.createElement(
          'span',
          { className: prefixCls + '-line-text' },
          _react2.default.createElement(_icon2.default, { type: 'check' })
        );
      } else {
        progressInfo = _react2.default.createElement(
          'span',
          { className: prefixCls + '-line-text' },
          text
        );
      }
    } else {
      fullCls = ' ' + prefixCls + '-line-wrap-full';
    }
    var percentStyle = {
      width: props.percent + '%',
      height: props.strokeWidth
    };

    return _react2.default.createElement(
      'div',
      { className: prefixCls + '-line-wrap clearfix status-' + props.status + fullCls },
      progressInfo,
      _react2.default.createElement(
        'div',
        { className: prefixCls + '-line-outer' },
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-line-inner' },
          _react2.default.createElement('div', { className: prefixCls + '-line-bg', style: percentStyle })
        )
      )
    );
  }
});

var Circle = _react2.default.createClass({
  displayName: 'Circle',

  propTypes: {
    status: _react2.default.PropTypes.oneOf(['normal', 'exception', 'success']),
    percent: _react2.default.PropTypes.number,
    strokeWidth: _react2.default.PropTypes.number,
    width: _react2.default.PropTypes.number
  },
  getDefaultProps: function getDefaultProps() {
    return {
      width: 132,
      percent: 0,
      strokeWidth: 6,
      format: '${percent}%',
      status: 'normal' };
  },
  // exception
  render: function render() {
    var props = (0, _objectAssign2.default)({}, this.props);

    if (parseInt(props.percent, 10) === 100) {
      props.status = 'success';
    }

    var style = {
      'width': props.width,
      'height': props.width,
      'fontSize': props.width * 0.16 + 6
    };
    var progressInfo = undefined;
    var text = typeof props.format === 'string' ? props.format.replace('${percent}', props.percent) : props.format;
    if (props.status === 'exception') {
      progressInfo = _react2.default.createElement(
        'span',
        { className: prefixCls + '-circle-text' },
        text
      );
    } else if (props.status === 'success') {
      progressInfo = _react2.default.createElement(
        'span',
        { className: prefixCls + '-circle-text' },
        _react2.default.createElement(_icon2.default, { type: 'check' })
      );
    } else {
      progressInfo = _react2.default.createElement(
        'span',
        { className: prefixCls + '-circle-text' },
        text
      );
    }

    return _react2.default.createElement(
      'div',
      { className: prefixCls + '-circle-wrap status-' + props.status },
      _react2.default.createElement(
        'div',
        { className: prefixCls + '-circle-inner', style: style },
        _react2.default.createElement(_rcProgress.Circle, { percent: props.percent, strokeWidth: props.strokeWidth,
          strokeColor: statusColorMap[props.status], trailColor: '#e9e9e9' }),
        progressInfo
      )
    );
  }
});

exports.default = {
  Line: Line,
  Circle: Circle
};
module.exports = exports['default'];