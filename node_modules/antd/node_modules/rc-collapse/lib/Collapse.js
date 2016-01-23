'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _openAnimation = require('./openAnimation');

var _openAnimation2 = _interopRequireDefault(_openAnimation);

var Collapse = (0, _react.createClass)({
  statics: {
    Panel: _Panel2['default']
  },

  propTypes: {
    prefixCls: _react.PropTypes.string,
    activeKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]),
    defaultActiveKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]),
    openAnimation: _react.PropTypes.object,
    onChange: _react.PropTypes.func,
    accordion: _react.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-collapse',
      onChange: function onChange() {},
      openAnimation: _openAnimation2['default'],
      accordion: false
    };
  },

  getInitialState: function getInitialState() {
    var _props = this.props;
    var activeKey = _props.activeKey;
    var accordion = _props.accordion;
    var defaultActiveKey = this.props.defaultActiveKey;

    // If is not accordion mode, then, defaultActiveKey should be an array
    if (!accordion) {
      defaultActiveKey = defaultActiveKey || [];
    }

    return {
      activeKey: activeKey || defaultActiveKey
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('activeKey' in nextProps) {
      this.setState({
        activeKey: nextProps.activeKey
      });
    }
  },

  handleClickItem: function handleClickItem(key) {
    var _this = this;

    return function () {
      var activeKey = _this._getActivityKey();
      if (_this.props.accordion) {
        _this.setState({
          activeKey: key === activeKey ? null : key
        });
      } else {
        var index = activeKey.indexOf(key);
        var isActive = index > -1;
        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }

        _this.setState({ activeKey: activeKey });
      }
      _this.props.onChange(key);
    };
  },

  _getActivityKey: function _getActivityKey() {
    var activeKey = this.state.activeKey;
    var accordion = this.props.accordion;

    if (accordion && Array.isArray(activeKey)) {
      activeKey = activeKey[0];
    }

    if (!accordion && !Array.isArray(activeKey)) {
      activeKey = activeKey ? [activeKey] : [];
    }
    return activeKey;
  },

  getItems: function getItems() {
    var _this2 = this;

    var activeKey = this._getActivityKey();
    var _props2 = this.props;
    var prefixCls = _props2.prefixCls;
    var accordion = _props2.accordion;

    return _react.Children.map(this.props.children, function (child, index) {
      // If there is no key provide, use the panel order as default key
      var key = child.key || index;
      var header = child.props.header;
      var isActive = false;
      if (accordion) {
        isActive = activeKey === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }

      var props = {
        key: key,
        header: header,
        isActive: isActive,
        prefixCls: prefixCls,
        openAnimation: _this2.props.openAnimation,
        children: child.props.children,
        onItemClick: _this2.handleClickItem(key).bind(_this2)
      };

      return _react2['default'].createElement(_Panel2['default'], props);
    });
  },

  render: function render() {
    var prefixCls = this.props.prefixCls;
    return _react2['default'].createElement(
      'div',
      { className: prefixCls },
      this.getItems()
    );
  }
});

exports['default'] = Collapse;
module.exports = exports['default'];