'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTable = require('rc-table');

var _rcTable2 = _interopRequireDefault(_rcTable);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('../radio');

var _radio2 = _interopRequireDefault(_radio);

var _filterDropdown = require('./filterDropdown');

var _filterDropdown2 = _interopRequireDefault(_filterDropdown);

var _pagination = require('../pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _objectAssign2 = require('object-assign');

var _objectAssign3 = _interopRequireDefault(_objectAssign2);

var _spin = require('../spin');

var _spin2 = _interopRequireDefault(_spin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function noop() {}

var defaultLocale = {
  filterTitle: '筛选',
  filterConfirm: '确定',
  filterReset: '重置',
  emptyText: '暂无数据'
};

var defaultPagination = {
  pageSize: 10,
  current: 1,
  onChange: noop,
  onShowSizeChange: noop
};

var AntTable = _react2.default.createClass({
  displayName: 'AntTable',
  getInitialState: function getInitialState() {
    return {
      // 减少状态
      selectedRowKeys: this.props.selectedRowKeys || [],
      filters: {},
      selectionDirty: false,
      sortColumn: '',
      sortOrder: '',
      sorter: null,
      radioIndex: null,
      pagination: this.hasPagination() ? (0, _objectAssign3.default)({}, defaultPagination, this.props.pagination) : {}
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      dataSource: [],
      prefixCls: 'ant-table',
      useFixedHeader: false,
      rowSelection: null,
      className: '',
      size: 'large',
      loading: false,
      bordered: false,
      indentSize: 20,
      onChange: noop,
      locale: {}
    };
  },

  propTypes: {
    dataSource: _react2.default.PropTypes.array,
    prefixCls: _react2.default.PropTypes.string,
    useFixedHeader: _react2.default.PropTypes.bool,
    rowSelection: _react2.default.PropTypes.object,
    className: _react2.default.PropTypes.string,
    size: _react2.default.PropTypes.string,
    loading: _react2.default.PropTypes.bool,
    bordered: _react2.default.PropTypes.bool,
    onChange: _react2.default.PropTypes.func,
    locale: _react2.default.PropTypes.object
  },

  getDefaultSelection: function getDefaultSelection() {
    var _this = this;

    if (!this.props.rowSelection || !this.props.rowSelection.getCheckboxProps) {
      return [];
    }
    return this.getCurrentPageData().filter(function (item) {
      return _this.props.rowSelection.getCheckboxProps(item).defaultChecked;
    }).map(function (record, rowIndex) {
      return _this.getRecordKey(record, rowIndex);
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('pagination' in nextProps && nextProps.pagination !== false) {
      this.setState({
        pagination: (0, _objectAssign3.default)({}, this.state.pagination, nextProps.pagination)
      });
    }
    // dataSource 的变化会清空选中项
    if ('dataSource' in nextProps && nextProps.dataSource !== this.props.dataSource) {
      this.setState({
        selectionDirty: false
      });
      this.setSelectedRowKeys([]);
    }
    if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
      this.setState({
        selectedRowKeys: nextProps.rowSelection.selectedRowKeys || []
      });
    }
  },
  setSelectedRowKeys: function setSelectedRowKeys(selectedRowKeys) {
    if (this.props.rowSelection && !('selectedRowKeys' in this.props.rowSelection)) {
      this.setState({ selectedRowKeys: selectedRowKeys });
    }
    if (this.props.rowSelection && this.props.rowSelection.onChange) {
      this.props.rowSelection.onChange(selectedRowKeys);
    }
  },
  hasPagination: function hasPagination() {
    return this.props.pagination !== false;
  },
  toggleSortOrder: function toggleSortOrder(order, column) {
    var sortColumn = this.state.sortColumn;
    var sortOrder = this.state.sortOrder;
    var sorter = undefined;
    // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题
    var isSortColumn = this.isSortColumn(column);
    if (!isSortColumn) {
      // 当前列未排序
      sortOrder = order;
      sortColumn = column;
    } else {
      // 当前列已排序
      if (sortOrder === order) {
        // 切换为未排序状态
        sortOrder = '';
        sortColumn = null;
      } else {
        // 切换为排序状态
        sortOrder = order;
      }
    }
    if (typeof column.sorter === 'function') {
      sorter = function sorter() {
        var result = column.sorter.apply(this, arguments);
        if (sortOrder === 'ascend') {
          return result;
        } else if (sortOrder === 'descend') {
          return -result;
        }
      };
    }
    var newState = {
      sortOrder: sortOrder,
      sortColumn: sortColumn,
      sorter: sorter
    };
    this.setState(newState);
    this.props.onChange.apply(this, this.prepareParamsArguments((0, _objectAssign3.default)({}, this.state, newState)));
  },
  handleFilter: function handleFilter(column, filters) {
    var _this2 = this;

    filters = (0, _objectAssign3.default)({}, this.state.filters, _defineProperty({}, this.getColumnKey(column), filters));
    // Remove filters not in current columns
    var currentColumnKeys = this.props.columns.map(function (c) {
      return _this2.getColumnKey(c);
    });
    Object.keys(filters).forEach(function (columnKey) {
      if (currentColumnKeys.indexOf(columnKey) < 0) {
        delete filters[columnKey];
      }
    });
    var newState = {
      selectionDirty: false,
      filters: filters
    };
    this.setState(newState);
    this.setSelectedRowKeys([]);
    this.props.onChange.apply(this, this.prepareParamsArguments((0, _objectAssign3.default)({}, this.state, newState)));
  },
  handleSelect: function handleSelect(record, rowIndex, e) {
    var _this3 = this;

    var checked = e.target.checked;
    var defaultSelection = this.state.selectionDirty ? [] : this.getDefaultSelection();
    var selectedRowKeys = this.state.selectedRowKeys.concat(defaultSelection);
    var key = this.getRecordKey(record, rowIndex);
    if (checked) {
      selectedRowKeys.push(this.getRecordKey(record, rowIndex));
    } else {
      selectedRowKeys = selectedRowKeys.filter(function (i) {
        return key !== i;
      });
    }
    this.setState({
      selectionDirty: true
    });
    this.setSelectedRowKeys(selectedRowKeys);
    if (this.props.rowSelection.onSelect) {
      var data = this.getCurrentPageData();
      var selectedRows = data.filter(function (row, i) {
        return selectedRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
      });
      this.props.rowSelection.onSelect(record, checked, selectedRows);
    }
  },

  handleRadioSelect: function handleRadioSelect(record, rowIndex, e) {
    var _this4 = this;

    var checked = e.target.checked;
    var defaultSelection = this.state.selectionDirty ? [] : this.getDefaultSelection();
    var selectedRowKeys = this.state.selectedRowKeys.concat(defaultSelection);
    var key = this.getRecordKey(record, rowIndex);
    selectedRowKeys = [key];
    this.setState({
      radioIndex: key,
      selectionDirty: true
    });
    this.setSelectedRowKeys(selectedRowKeys);
    if (this.props.rowSelection.onSelect) {
      var data = this.getCurrentPageData();
      var selectedRows = data.filter(function (row, i) {
        return selectedRowKeys.indexOf(_this4.getRecordKey(row, i)) >= 0;
      });
      this.props.rowSelection.onSelect(record, checked, selectedRows);
    }
  },

  handleSelectAllRow: function handleSelectAllRow(e) {
    var _this5 = this;

    var checked = e.target.checked;
    var data = this.getCurrentPageData();
    var defaultSelection = this.state.selectionDirty ? [] : this.getDefaultSelection();
    var selectedRowKeys = this.state.selectedRowKeys.concat(defaultSelection);
    var changableRowKeys = data.filter(function (item) {
      return !_this5.props.rowSelection.getCheckboxProps || !_this5.props.rowSelection.getCheckboxProps(item).disabled;
    }).map(function (item, i) {
      return _this5.getRecordKey(item, i);
    });
    if (checked) {
      changableRowKeys.forEach(function (key) {
        if (selectedRowKeys.indexOf(key) < 0) {
          selectedRowKeys.push(key);
        }
      });
    } else {
      changableRowKeys.forEach(function (key) {
        if (selectedRowKeys.indexOf(key) >= 0) {
          selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
        }
      });
    }
    this.setState({
      selectionDirty: true
    });
    this.setSelectedRowKeys(selectedRowKeys);
    if (this.props.rowSelection.onSelectAll) {
      var selectedRows = data.filter(function (row, i) {
        return selectedRowKeys.indexOf(_this5.getRecordKey(row, i)) >= 0;
      });
      this.props.rowSelection.onSelectAll(checked, selectedRows);
    }
  },
  handlePageChange: function handlePageChange(current) {
    var pagination = (0, _objectAssign3.default)({}, this.state.pagination);
    if (current) {
      pagination.current = current;
    } else {
      pagination.current = pagination.current || 1;
    }
    pagination.onChange(pagination.current);

    var newState = {
      selectionDirty: false,
      pagination: pagination
    };
    this.setState(newState);
    this.setSelectedRowKeys([]);
    this.props.onChange.apply(this, this.prepareParamsArguments((0, _objectAssign3.default)({}, this.state, newState)));
  },

  onRadioChange: function onRadioChange(ev) {
    this.setState({
      radioIndex: ev.target.value
    });
  },

  renderSelectionRadio: function renderSelectionRadio(value, record, index) {
    var rowIndex = this.getRecordKey(record, index); // 从 1 开始
    var props = {};
    if (this.props.rowSelection.getCheckboxProps) {
      props = this.props.rowSelection.getCheckboxProps.call(this, record);
    }
    var checked = undefined;
    if (this.state.selectionDirty) {
      checked = this.state.radioIndex === rowIndex;
    } else {
      checked = this.state.radioIndex === rowIndex || this.getDefaultSelection().indexOf(rowIndex) >= 0;
    }
    return _react2.default.createElement(_radio2.default, { disabled: props.disabled, onChange: this.handleRadioSelect.bind(this, record, rowIndex),
      value: rowIndex, checked: checked });
  },
  renderSelectionCheckBox: function renderSelectionCheckBox(value, record, index) {
    var rowIndex = this.getRecordKey(record, index); // 从 1 开始
    var checked = undefined;
    if (this.state.selectionDirty) {
      checked = this.state.selectedRowKeys.indexOf(rowIndex) >= 0;
    } else {
      checked = this.state.selectedRowKeys.indexOf(rowIndex) >= 0 || this.getDefaultSelection().indexOf(rowIndex) >= 0;
    }
    var props = {};
    if (this.props.rowSelection.getCheckboxProps) {
      props = this.props.rowSelection.getCheckboxProps.call(this, record);
    }
    return _react2.default.createElement(_checkbox2.default, { checked: checked, disabled: props.disabled,
      onChange: this.handleSelect.bind(this, record, rowIndex) });
  },
  getRecordKey: function getRecordKey(record, index) {
    if (this.props.rowKey) {
      return this.props.rowKey(record, index);
    }
    return record.key || index;
  },
  renderRowSelection: function renderRowSelection() {
    var _this6 = this;

    var columns = this.props.columns.concat();
    if (this.props.rowSelection) {
      var data = this.getCurrentPageData().filter(function (item) {
        if (_this6.props.rowSelection.getCheckboxProps) {
          return !_this6.props.rowSelection.getCheckboxProps(item).disabled;
        }
        return true;
      });
      var checked = undefined;
      if (!data.length) {
        checked = false;
      } else {
        checked = this.state.selectionDirty ? data.every(function (item, i) {
          return _this6.state.selectedRowKeys.indexOf(_this6.getRecordKey(item, i)) >= 0;
        }) : data.every(function (item) {
          return _this6.props.rowSelection.getCheckboxProps && _this6.props.rowSelection.getCheckboxProps(item).defaultChecked;
        });
      }
      var selectionColumn = undefined;
      if (this.props.rowSelection.type === 'radio') {
        selectionColumn = {
          key: 'selection-column',
          render: this.renderSelectionRadio,
          className: 'ant-table-selection-column'
        };
      } else {
        var checkboxAllDisabled = data.every(function (item) {
          return _this6.props.rowSelection.getCheckboxProps && _this6.props.rowSelection.getCheckboxProps(item).disabled;
        });
        var checkboxAll = _react2.default.createElement(_checkbox2.default, { checked: checked,
          disabled: checkboxAllDisabled,
          onChange: this.handleSelectAllRow });
        selectionColumn = {
          key: 'selection-column',
          title: checkboxAll,
          render: this.renderSelectionCheckBox,
          className: 'ant-table-selection-column'
        };
      }
      if (columns[0] && columns[0].key === 'selection-column') {
        columns[0] = selectionColumn;
      } else {
        columns.unshift(selectionColumn);
      }
    }
    return columns;
  },
  getColumnKey: function getColumnKey(column, index) {
    return column.key || column.dataIndex || index;
  },
  isSortColumn: function isSortColumn(column) {
    if (!column || !this.state.sortColumn) {
      return false;
    }
    var colKey = this.getColumnKey(column);
    var isSortColumn = this.getColumnKey(this.state.sortColumn) === colKey;
    return isSortColumn;
  },
  renderColumnsDropdown: function renderColumnsDropdown(columns) {
    var _this7 = this;

    var locale = (0, _objectAssign3.default)({}, defaultLocale, this.props.locale);
    return columns.map(function (column, i) {
      column = (0, _objectAssign3.default)({}, column);
      var key = _this7.getColumnKey(column, i);
      var filterDropdown = undefined,
          sortButton = undefined;
      if (column.filters && column.filters.length > 0) {
        var colFilters = _this7.state.filters[key] || [];
        filterDropdown = _react2.default.createElement(_filterDropdown2.default, { locale: locale, column: column,
          selectedKeys: colFilters,
          confirmFilter: _this7.handleFilter });
      }
      if (column.sorter) {
        var isSortColumn = _this7.isSortColumn(column);
        if (isSortColumn) {
          column.className = column.className || '';
          if (_this7.state.sortOrder) {
            column.className += ' ant-table-column-sort';
          }
        }

        sortButton = _react2.default.createElement(
          'div',
          { className: 'ant-table-column-sorter' },
          _react2.default.createElement(
            'span',
            { className: 'ant-table-column-sorter-up ' + (isSortColumn && _this7.state.sortOrder === 'ascend' ? 'on' : 'off'),
              title: '↑',
              onClick: _this7.toggleSortOrder.bind(_this7, 'ascend', column) },
            _react2.default.createElement(_icon2.default, { type: 'caret-up' })
          ),
          _react2.default.createElement(
            'span',
            { className: 'ant-table-column-sorter-down ' + (isSortColumn && _this7.state.sortOrder === 'descend' ? 'on' : 'off'),
              title: '↓',
              onClick: _this7.toggleSortOrder.bind(_this7, 'descend', column) },
            _react2.default.createElement(_icon2.default, { type: 'caret-down' })
          )
        );
      }
      column.title = _react2.default.createElement(
        'div',
        null,
        column.title,
        sortButton,
        filterDropdown
      );
      return column;
    });
  },
  handleShowSizeChange: function handleShowSizeChange(current, pageSize) {
    var pagination = this.state.pagination;
    pagination.onShowSizeChange(current, pageSize);

    var nextPagination = (0, _objectAssign3.default)(pagination, {
      pageSize: pageSize
    });
    this.setState({ pagination: nextPagination });
  },
  renderPagination: function renderPagination() {
    // 强制不需要分页
    if (!this.hasPagination()) {
      return null;
    }
    var classString = (0, _classnames2.default)({
      'ant-table-pagination': true,
      'mini': this.props.size === 'middle' || this.props.size === 'small'
    });
    var total = this.state.pagination.total || this.getLocalData().length;
    var pageSize = this.state.pagination.pageSize;
    return total > 0 ? _react2.default.createElement(_pagination2.default, _extends({}, this.state.pagination, {
      className: classString,
      onChange: this.handlePageChange,
      total: total,
      pageSize: pageSize,
      onShowSizeChange: this.handleShowSizeChange })) : null;
  },
  prepareParamsArguments: function prepareParamsArguments(state) {
    // 准备筛选、排序、分页的参数
    var pagination = state.pagination;
    var filters = state.filters;
    var sorter = {};
    if (state.sortColumn && state.sortOrder && state.sortColumn.dataIndex) {
      sorter.field = state.sortColumn.dataIndex;
      sorter.order = state.sortOrder;
    }
    return [pagination, filters, sorter];
  },
  findColumn: function findColumn(myKey) {
    var _this8 = this;

    return this.props.columns.filter(function (c) {
      return _this8.getColumnKey(c) === myKey;
    })[0];
  },
  getCurrentPageData: function getCurrentPageData(dataSource) {
    var data = this.getLocalData(dataSource);
    var current = undefined,
        pageSize = undefined;
    var state = this.state;
    // 如果没有分页的话，默认全部展示
    if (!this.hasPagination()) {
      pageSize = Number.MAX_VALUE;
      current = 1;
    } else {
      pageSize = state.pagination.pageSize;
      current = state.pagination.current;
    }
    // 分页
    // ---
    // 当数据量少于每页数量时，直接设置数据
    // 否则进行读取分页数据
    if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
      data = data.filter(function (item, i) {
        if (i >= (current - 1) * pageSize && i < current * pageSize) {
          return item;
        }
      });
    }
    return data;
  },
  getLocalData: function getLocalData(dataSource) {
    var _this9 = this;

    var state = this.state;
    var data = dataSource || this.props.dataSource;
    // 排序
    if (state.sortOrder && state.sorter) {
      data = data.sort(state.sorter);
    }
    // 筛选
    if (state.filters) {
      Object.keys(state.filters).forEach(function (columnKey) {
        var col = _this9.findColumn(columnKey);
        if (!col) {
          return;
        }
        var values = state.filters[columnKey] || [];
        if (values.length === 0) {
          return;
        }
        data = col.onFilter ? data.filter(function (record) {
          return values.some(function (v) {
            return col.onFilter(v, record);
          });
        }) : data;
      });
    }
    return data;
  },
  render: function render() {
    var _classNames;

    var data = this.getCurrentPageData();
    var columns = this.renderRowSelection();
    var expandIconAsCell = this.props.expandedRowRender && this.props.expandIconAsCell !== false;
    var locale = (0, _objectAssign3.default)({}, defaultLocale, this.props.locale);

    var classString = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, 'ant-table-' + this.props.size, true), _defineProperty(_classNames, 'ant-table-bordered', this.props.bordered), _defineProperty(_classNames, this.props.className, !!this.props.className), _classNames));

    columns = this.renderColumnsDropdown(columns);
    columns = columns.map(function (column, i) {
      column.key = column.key || column.dataIndex || i;
      return column;
    });
    var emptyText = undefined;
    var emptyClass = '';
    if (!data || data.length === 0) {
      emptyText = _react2.default.createElement(
        'div',
        { className: 'ant-table-placeholder' },
        _react2.default.createElement(_icon2.default, { type: 'frown' }),
        locale.emptyText
      );
      emptyClass = ' ant-table-empty';
    }

    var table = _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_rcTable2.default, _extends({}, this.props, {
        data: data,
        columns: columns,
        className: classString,
        expandIconAsCell: expandIconAsCell })),
      emptyText
    );
    if (this.props.loading) {
      // if there is no pagination or no data, the height of spin should decrease by half of pagination
      var paginationPatchClass = this.hasPagination() && data && data.length !== 0 ? 'ant-table-with-pagination' : 'ant-table-without-pagination';
      var spinClassName = paginationPatchClass + ' ant-table-spin-holder';
      table = _react2.default.createElement(
        _spin2.default,
        { className: spinClassName },
        table
      );
    }
    return _react2.default.createElement(
      'div',
      { className: 'clearfix' + emptyClass },
      table,
      this.renderPagination()
    );
  }
});

exports.default = AntTable;
module.exports = exports['default'];