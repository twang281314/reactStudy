'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var CollapsePanel = (0, _react.createClass)({
  propTypes: {
    openAnimation: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    header: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.node]),
    isActive: _react.PropTypes.bool,
    onItemClick: _react.PropTypes.func
  },

  getInitialState: function getInitialState() {
    return { isActive: this.props.isActive };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      isActive: false,
      onItemClick: function onItemClick() {}
    };
  },

  handleItemClick: function handleItemClick() {
    this.props.onItemClick();
  },

  render: function render() {
    var _classnames;

    var _props = this.props;
    var prefixCls = _props.prefixCls;
    var header = _props.header;
    var children = _props.children;
    var isActive = _props.isActive;

    var headerCls = prefixCls + '-header';
    var contentCls = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, prefixCls + '-content', true), _defineProperty(_classnames, prefixCls + '-content-active', isActive), _classnames));

    return _react2['default'].createElement(
      'div',
      { className: prefixCls + '-item' },
      _react2['default'].createElement(
        'div',
        { className: headerCls, onClick: this.handleItemClick,
          role: 'tab', 'aria-expanded': isActive },
        _react2['default'].createElement('i', { className: 'arrow' }),
        header
      ),
      _react2['default'].createElement(
        _rcAnimate2['default'],
        { showProp: 'data-active',
          exclusive: true,
          animation: this.props.openAnimation },
        _react2['default'].createElement(
          'div',
          { className: contentCls,
            'data-active': isActive,
            role: 'tabpanel' },
          _react2['default'].createElement(
            'div',
            { className: prefixCls + '-content-box' },
            children
          )
        )
      )
    );
  }
});

exports['default'] = CollapsePanel;
module.exports = exports['default'];