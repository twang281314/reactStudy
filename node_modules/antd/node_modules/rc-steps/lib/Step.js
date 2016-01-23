'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Step = _react2['default'].createClass({
  displayName: 'Step',

  render: function render() {
    var props = this.props;
    var status = props.status || 'wait';
    var prefixCls = props.prefixCls;
    var iconPrefix = props.iconPrefix;
    var maxWidth = props.maxDescriptionWidth;
    var iconName = props.icon ? props.icon : 'check';
    var icon = !props.icon && status !== 'finish' ? _react2['default'].createElement(
      'span',
      { className: prefixCls + '-icon' },
      props.stepNumber
    ) : _react2['default'].createElement('span', { className: prefixCls + '-icon ' + iconPrefix + 'icon ' + iconPrefix + 'icon-' + iconName });
    return _react2['default'].createElement(
      'div',
      { className: prefixCls + '-item ' + (props.stepLast ? prefixCls + '-item-last ' : '') + prefixCls + '-status-' + status + (props.icon ? ' ' + prefixCls + '-custom' : ''), style: { width: props.tailWidth } },
      !props.stepLast ? _react2['default'].createElement(
        'div',
        { className: prefixCls + '-tail' },
        _react2['default'].createElement('i', null)
      ) : '',
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-head' },
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-head-inner' },
          icon
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: prefixCls + '-main', style: { maxWidth: maxWidth } },
        _react2['default'].createElement(
          'div',
          { className: prefixCls + '-title' },
          props.title
        ),
        props.description ? _react2['default'].createElement(
          'div',
          { className: prefixCls + '-description' },
          props.description
        ) : ''
      )
    );
  }
});

module.exports = Step;