'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rcTabs = require('rc-tabs');

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AntTabs = function (_React$Component) {
  _inherits(AntTabs, _React$Component);

  function AntTabs(props) {
    _classCallCheck(this, AntTabs);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AntTabs).call(this, props));

    ['createNewTab', 'removeTab', 'handleChange'].forEach(function (method) {
      return _this[method] = _this[method].bind(_this);
    });
    return _this;
  }

  _createClass(AntTabs, [{
    key: 'createNewTab',
    value: function createNewTab(targetKey) {
      this.props.onEdit(targetKey, 'add');
    }
  }, {
    key: 'removeTab',
    value: function removeTab(targetKey, e) {
      e.stopPropagation();
      if (!targetKey) {
        return;
      }
      this.props.onEdit(targetKey, 'remove');
    }
  }, {
    key: 'handleChange',
    value: function handleChange(activeKey) {
      this.props.onChange(activeKey);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames,
          _this2 = this;

      var _props = this.props;
      var prefixCls = _props.prefixCls;
      var size = _props.size;
      var tabPosition = _props.tabPosition;
      var animation = _props.animation;
      var type = _props.type;
      var children = _props.children;
      var tabBarExtraContent = _props.tabBarExtraContent;

      var className = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, this.props.className, !!this.props.className), _defineProperty(_classNames, prefixCls + '-mini', size === 'small' || size === 'mini'), _defineProperty(_classNames, prefixCls + '-vertical', tabPosition === 'left' || tabPosition === 'right'), _defineProperty(_classNames, prefixCls + '-card', type.indexOf('card') >= 0), _classNames));
      if (tabPosition === 'left' || tabPosition === 'right' || type.indexOf('card') >= 0) {
        animation = null;
      }
      // only card type tabs can be added and closed
      if (type === 'editable-card') {
        if (children.length > 1) {
          children = children.map(function (child, index) {
            return (0, _react.cloneElement)(child, {
              tab: _react2.default.createElement(
                'div',
                null,
                child.props.tab,
                _react2.default.createElement(_icon2.default, { type: 'cross', onClick: _this2.removeTab.bind(_this2, child.key) })
              ),
              key: child.key || index
            });
          });
        }
        // Add new tab handler
        tabBarExtraContent = _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(_icon2.default, { type: 'plus', className: prefixCls + '-new-tab', onClick: this.createNewTab }),
          tabBarExtraContent
        );
      }
      // Wrap the extra content
      tabBarExtraContent = _react2.default.createElement(
        'div',
        { className: prefixCls + '-extra-content' },
        tabBarExtraContent
      );
      return _react2.default.createElement(
        _rcTabs2.default,
        _extends({}, this.props, {
          className: className,
          tabBarExtraContent: tabBarExtraContent,
          onChange: this.handleChange,
          animation: animation }),
        children
      );
    }
  }]);

  return AntTabs;
}(_react2.default.Component);

AntTabs.defaultProps = {
  prefixCls: 'ant-tabs',
  size: 'default',
  animation: 'slide-horizontal',
  type: 'line', // or 'card' 'editable-card'
  onChange: function onChange() {},
  onEdit: function onEdit() {}
};

AntTabs.TabPane = _rcTabs2.default.TabPane;

exports.default = AntTabs;
module.exports = exports['default'];