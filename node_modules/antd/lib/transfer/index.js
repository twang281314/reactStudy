'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _operation = require('./operation');

var _operation2 = _interopRequireDefault(_operation);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

var Transfer = function (_Component) {
  _inherits(Transfer, _Component);

  function Transfer(props) {
    _classCallCheck(this, Transfer);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Transfer).call(this, props));

    _this.state = {
      leftFilter: '',
      rightFilter: '',
      leftCheckedKeys: [],
      rightCheckedKeys: []
    };
    return _this;
  }

  _createClass(Transfer, [{
    key: 'splitDataSource',
    value: function splitDataSource() {
      var _props = this.props;
      var targetKeys = _props.targetKeys;
      var dataSource = _props.dataSource;

      var leftDataSource = Object.assign([], dataSource);
      var rightDataSource = [];

      if (targetKeys.length > 0) {
        targetKeys.forEach(function (targetKey) {
          rightDataSource.push(leftDataSource.find(function (data, index) {
            if (data.key === targetKey) {
              leftDataSource.splice(index, 1);
              return true;
            }
          }));
        });
      }

      return {
        leftDataSource: leftDataSource,
        rightDataSource: rightDataSource
      };
    }
  }, {
    key: 'moveTo',
    value: function moveTo(direction) {
      var targetKeys = this.props.targetKeys;
      var _state = this.state;
      var leftCheckedKeys = _state.leftCheckedKeys;
      var rightCheckedKeys = _state.rightCheckedKeys;
      // move items to target box

      var newTargetKeys = direction === 'right' ? leftCheckedKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
        return !rightCheckedKeys.some(function (checkedKey) {
          return targetKey === checkedKey;
        });
      });

      // empty checked keys
      this.setState(_defineProperty({}, direction === 'right' ? 'leftCheckedKeys' : 'rightCheckedKeys', []));

      this.props.onChange(newTargetKeys);
    }
  }, {
    key: 'getGlobalCheckStatus',
    value: function getGlobalCheckStatus(direction) {
      var _splitDataSource = this.splitDataSource();

      var leftDataSource = _splitDataSource.leftDataSource;
      var rightDataSource = _splitDataSource.rightDataSource;
      var _state2 = this.state;
      var leftFilter = _state2.leftFilter;
      var rightFilter = _state2.rightFilter;
      var leftCheckedKeys = _state2.leftCheckedKeys;
      var rightCheckedKeys = _state2.rightCheckedKeys;

      var dataSource = direction === 'left' ? leftDataSource : rightDataSource;
      var filter = direction === 'left' ? leftFilter : rightFilter;
      var checkedKeys = direction === 'left' ? leftCheckedKeys : rightCheckedKeys;
      var filteredDataSource = this.filterDataSource(dataSource, filter);

      var globalCheckStatus = undefined;

      if (checkedKeys.length > 0) {
        if (checkedKeys.length < filteredDataSource.length) {
          globalCheckStatus = 'part';
        } else {
          globalCheckStatus = 'all';
        }
      } else {
        globalCheckStatus = 'none';
      }
      return globalCheckStatus;
    }
  }, {
    key: 'filterDataSource',
    value: function filterDataSource(dataSource, filter) {
      var _this2 = this;

      return dataSource.filter(function (item) {
        var itemText = _this2.props.render(item);
        return _this2.matchFilter(itemText, filter);
      });
    }
  }, {
    key: 'matchFilter',
    value: function matchFilter(text, filterText) {
      var regex = new RegExp(filterText);
      return text.match(regex);
    }
  }, {
    key: 'handleSelectAll',
    value: function handleSelectAll(direction) {
      var _splitDataSource2 = this.splitDataSource();

      var leftDataSource = _splitDataSource2.leftDataSource;
      var rightDataSource = _splitDataSource2.rightDataSource;
      var _state3 = this.state;
      var leftFilter = _state3.leftFilter;
      var rightFilter = _state3.rightFilter;

      var dataSource = direction === 'left' ? leftDataSource : rightDataSource;
      var filter = direction === 'left' ? leftFilter : rightFilter;
      var checkStatus = this.getGlobalCheckStatus(direction);
      var holder = [];

      if (checkStatus === 'all') {
        holder = [];
      } else {
        holder = this.filterDataSource(dataSource, filter).map(function (item) {
          return item.key;
        });
      }

      this.setState(_defineProperty({}, direction + 'CheckedKeys', holder));
    }
  }, {
    key: 'handleFilter',
    value: function handleFilter(direction, e) {
      var _setState3;

      this.setState((_setState3 = {}, _defineProperty(_setState3, direction + 'CheckedKeys', []), _defineProperty(_setState3, direction + 'Filter', e.target.value), _setState3));
    }
  }, {
    key: 'handleClear',
    value: function handleClear(direction) {
      this.setState(_defineProperty({}, direction + 'Filter', ''));
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(direction, selectedItem, checked) {
      var _state4 = this.state;
      var leftCheckedKeys = _state4.leftCheckedKeys;
      var rightCheckedKeys = _state4.rightCheckedKeys;

      var holder = direction === 'left' ? leftCheckedKeys : rightCheckedKeys;
      var index = holder.findIndex(function (key) {
        return key === selectedItem.key;
      });
      if (index > -1) {
        holder.splice(index, 1);
      }
      if (checked) {
        holder.push(selectedItem.key);
      }
      this.setState(_defineProperty({}, direction + 'CheckedKeys', holder));
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props;
      var prefixCls = _props2.prefixCls;
      var titles = _props2.titles;
      var operations = _props2.operations;
      var showSearch = _props2.showSearch;
      var searchPlaceholder = _props2.searchPlaceholder;
      var body = _props2.body;
      var footer = _props2.footer;
      var listStyle = _props2.listStyle;
      var className = _props2.className;
      var _state5 = this.state;
      var leftFilter = _state5.leftFilter;
      var rightFilter = _state5.rightFilter;
      var leftCheckedKeys = _state5.leftCheckedKeys;
      var rightCheckedKeys = _state5.rightCheckedKeys;

      var _splitDataSource3 = this.splitDataSource();

      var leftDataSource = _splitDataSource3.leftDataSource;
      var rightDataSource = _splitDataSource3.rightDataSource;

      var leftActive = rightCheckedKeys.length > 0;
      var rightActive = leftCheckedKeys.length > 0;

      var leftCheckStatus = this.getGlobalCheckStatus('left');
      var rightCheckStatus = this.getGlobalCheckStatus('right');

      var cls = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, 'prefixCls', true), _classNames));

      return _react2.default.createElement(
        'div',
        { className: cls },
        _react2.default.createElement(_list2.default, { titleText: titles[0],
          dataSource: leftDataSource,
          filter: leftFilter,
          style: listStyle,
          checkedKeys: leftCheckedKeys,
          checkStatus: leftCheckStatus,
          handleFilter: this.handleFilter.bind(this, 'left'),
          handleClear: this.handleClear.bind(this, 'left'),
          handleSelect: this.handleSelect.bind(this, 'left'),
          handleSelectAll: this.handleSelectAll.bind(this, 'left'),
          position: 'left',
          render: this.props.render,
          showSearch: showSearch,
          searchPlaceholder: searchPlaceholder,
          body: body,
          footer: footer,
          prefixCls: prefixCls + '-list'
        }),
        _react2.default.createElement(_operation2.default, { rightActive: rightActive,
          rightArrowText: operations[0],
          moveToRight: this.moveTo.bind(this, 'right'),
          leftActive: leftActive,
          leftArrowText: operations[1],
          moveToLeft: this.moveTo.bind(this, 'left'),
          className: prefixCls + '-operation'
        }),
        _react2.default.createElement(_list2.default, { titleText: titles[1],
          dataSource: rightDataSource,
          filter: rightFilter,
          style: listStyle,
          checkedKeys: rightCheckedKeys,
          checkStatus: rightCheckStatus,
          handleFilter: this.handleFilter.bind(this, 'right'),
          handleClear: this.handleClear.bind(this, 'right'),
          handleSelect: this.handleSelect.bind(this, 'right'),
          handleSelectAll: this.handleSelectAll.bind(this, 'right'),
          position: 'right',
          render: this.props.render,
          showSearch: showSearch,
          searchPlaceholder: searchPlaceholder,
          body: body,
          footer: footer,
          prefixCls: prefixCls + '-list'
        })
      );
    }
  }]);

  return Transfer;
}(_react.Component);

Transfer.defaultProps = {
  prefixCls: 'ant-transfer',
  dataSource: [],
  render: noop,
  targetKeys: [],
  onChange: noop,
  titles: ['源列表', '目的列表'],
  operations: [],
  showSearch: false,
  searchPlaceholder: '请输入搜索内容',
  body: noop,
  footer: noop
};

Transfer.propTypes = {
  prefixCls: _react.PropTypes.string,
  dataSource: _react.PropTypes.array,
  render: _react.PropTypes.func,
  targetKeys: _react.PropTypes.array,
  onChange: _react.PropTypes.func,
  height: _react.PropTypes.number,
  listStyle: _react.PropTypes.object,
  className: _react.PropTypes.string,
  titles: _react.PropTypes.array,
  operations: _react.PropTypes.array,
  showSearch: _react.PropTypes.bool,
  searchPlaceholder: _react.PropTypes.string,
  body: _react.PropTypes.func,
  footer: _react.PropTypes.func
};

Transfer.List = _list2.default;
Transfer.Operation = _operation2.default;
Transfer.Search = _search2.default;

exports.default = Transfer;
module.exports = exports['default'];