'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

var TransferList = function (_Component) {
  _inherits(TransferList, _Component);

  function TransferList(props) {
    _classCallCheck(this, TransferList);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TransferList).call(this, props));

    _this.state = {
      mounted: false
    };
    return _this;
  }

  _createClass(TransferList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      setTimeout(function () {
        _this2.setState({
          mounted: true
        });
      }, 0);
    }
  }, {
    key: 'handleSelectALl',
    value: function handleSelectALl() {
      this.props.handleSelectAll();
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(selectedItem) {
      var checkedKeys = this.props.checkedKeys;

      var result = checkedKeys.some(function (key) {
        return key === selectedItem.key;
      });
      this.props.handleSelect(selectedItem, !result);
    }
  }, {
    key: 'handleFilter',
    value: function handleFilter(e) {
      this.props.handleFilter(e);
    }
  }, {
    key: 'handleClear',
    value: function handleClear() {
      this.props.handleClear();
    }
  }, {
    key: 'renderCheckbox',
    value: function renderCheckbox(props) {
      var _classNames;

      var prefixCls = props.prefixCls;

      var checkboxCls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, prefixCls + '-checkbox', true), _defineProperty(_classNames, prefixCls + '-checkbox-indeterminate', props.checkPart), _defineProperty(_classNames, prefixCls + '-checkbox-checked', !props.checkPart && props.checked), _defineProperty(_classNames, prefixCls + '-checkbox-disabled', !!props.disabled), _classNames));
      var customEle = null;
      if (typeof props.checkable !== 'boolean') {
        customEle = props.checkable;
      }
      return _react2.default.createElement(
        'span',
        { ref: 'checkbox',
          className: checkboxCls,
          onClick: !props.disabled && this.handleSelectALl.bind(this) },
        customEle
      );
    }
  }, {
    key: 'matchFilter',
    value: function matchFilter(text, filterText) {
      var regex = new RegExp(filterText);
      return text.match(regex);
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames2,
          _this3 = this;

      var _props = this.props;
      var prefixCls = _props.prefixCls;
      var dataSource = _props.dataSource;
      var titleText = _props.titleText;
      var filter = _props.filter;
      var checkedKeys = _props.checkedKeys;
      var checkStatus = _props.checkStatus;
      var body = _props.body;
      var footer = _props.footer;
      var showSearch = _props.showSearch;

      // Custom Layout

      var footerDom = footer(_extends({}, this.props));
      var bodyDom = body(_extends({}, this.props));

      var listCls = (0, _classnames2.default)((_classNames2 = {}, _defineProperty(_classNames2, prefixCls, true), _defineProperty(_classNames2, prefixCls + '-with-footer', !!footerDom), _classNames2));

      var showItems = dataSource.map(function (item) {
        // apply filter
        var itemText = _this3.props.render(item);
        var filterResult = _this3.matchFilter(itemText, filter);
        var renderedText = _this3.props.render(item);

        if (filterResult) {
          return _react2.default.createElement(
            'li',
            { onClick: _this3.handleSelect.bind(_this3, item), key: item.key, title: renderedText },
            _react2.default.createElement(_checkbox2.default, { checked: checkedKeys.some(function (key) {
                return key === item.key;
              }) }),
            renderedText
          );
        }
      }).filter(function (item) {
        return !!item;
      });

      return _react2.default.createElement(
        'div',
        _extends({ className: listCls }, this.props),
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-header' },
          this.renderCheckbox({
            prefixCls: 'ant-transfer',
            checked: checkStatus === 'all',
            checkPart: checkStatus === 'part',
            checkable: _react2.default.createElement('span', { className: 'ant-transfer-checkbox-inner' })
          }),
          _react2.default.createElement(
            'span',
            { className: prefixCls + '-header-selected' },
            _react2.default.createElement(
              'span',
              null,
              (checkedKeys.length > 0 ? checkedKeys.length + '/' : '') + dataSource.length,
              ' 条'
            ),
            _react2.default.createElement(
              'span',
              { className: prefixCls + '-header-title' },
              titleText
            )
          )
        ),
        bodyDom ? bodyDom : _react2.default.createElement(
          'div',
          { className: showSearch ? prefixCls + '-body ' + prefixCls + '-body-with-search' : prefixCls + '-body' },
          showSearch ? _react2.default.createElement(
            'div',
            { className: prefixCls + '-body-search-wrapper' },
            _react2.default.createElement(_search2.default, { prefixCls: prefixCls + '-search', onChange: this.handleFilter.bind(this), handleClear: this.handleClear.bind(this), value: filter })
          ) : null,
          _react2.default.createElement(
            _rcAnimate2.default,
            { component: 'ul',
              transitionName: this.state.mounted ? prefixCls + '-highlight' : '',
              transitionLeave: false },
            showItems.length > 0 ? showItems : _react2.default.createElement(
              'div',
              { className: prefixCls + '-body-not-found' },
              'Not Found'
            )
          )
        ),
        footerDom ? _react2.default.createElement(
          'div',
          { className: prefixCls + '-footer' },
          footerDom
        ) : null
      );
    }
  }]);

  return TransferList;
}(_react.Component);

TransferList.defaultProps = {
  dataSource: [],
  titleText: '',
  showSearch: false,
  searchPlaceholder: '',
  handleFilter: noop,
  handleSelect: noop,
  handleSelectAll: noop,
  render: noop,
  //advanced
  body: noop,
  footer: noop
};

TransferList.propTypes = {
  prefixCls: _react.PropTypes.string,
  dataSource: _react.PropTypes.array,
  showSearch: _react.PropTypes.bool,
  searchPlaceholder: _react.PropTypes.string,
  titleText: _react.PropTypes.string,
  style: _react.PropTypes.object,
  handleFilter: _react.PropTypes.func,
  handleSelect: _react.PropTypes.func,
  handleSelectAll: _react.PropTypes.func,
  render: _react.PropTypes.func,
  body: _react.PropTypes.func,
  footer: _react.PropTypes.func
};

exports.default = TransferList;
module.exports = exports['default'];