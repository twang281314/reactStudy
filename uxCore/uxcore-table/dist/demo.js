/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Grid Component Demo for uxcore
	 * @author zhouquan.yezq
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	var Demo = __webpack_require__(1);
	var Demo2 = __webpack_require__(153);
	// var Demo3 = require('./TreeGridDemo');
	// var Demo4 = require('./GridViewModeDemo');
	
	ReactDOM.render(React.createElement(Demo, null), document.getElementById('UXCoreDemo'));
	ReactDOM.render(React.createElement(Demo2, null), document.getElementById('UXCoreDemo2'));
	// ReactDOM.render(<Demo3/>, document.getElementById('UXCoreDemo3'));
	// ReactDOM.render(<Demo4/>, document.getElementById('UXCoreDemo4'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Grid Component Demo for uxcore
	 * @author zhouquan.yezq
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classnames = __webpack_require__(2);
	var Grid = __webpack_require__(3);
	var Button = __webpack_require__(146);
	var urlPrefix = 'http://192.168.31.117:3000/';
	var mockData = {
	    "datas": [{
	        "check": true,
	        "id": "1",
	        "grade": "grade1",
	        "email": "email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1",
	        "firstName": "firstName1",
	        "lastName": "lastName1",
	        "birthDate": "birthDate1",
	        "country": "086156529655931.121(xsxs)",
	        "city": "87181"
	    }, {
	        "check": false,
	        "id": "1",
	        "grade": "grade1",
	        "email": "email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1email1",
	        "firstName": "firstName1",
	        "lastName": "lastName1",
	        "birthDate": "birthDate1",
	        "country": "086156529655931.121(xsxs)",
	        "city": "87181"
	    }]
	};
	
	var Demo = (function (_React$Component) {
	    _inherits(Demo, _React$Component);
	
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        _get(Object.getPrototypeOf(Demo.prototype), 'constructor', this).call(this, props);
	        this.state = {};
	    }
	
	    _createClass(Demo, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            mockData.datas[0].check = !mockData.datas[0].check;
	            this.forceUpdate();
	        }
	    }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate() {
	            // this.refs.grid.fetchData();
	        }
	    }, {
	        key: 'onModifyRow',
	        value: function onModifyRow(value, dataKey, record) {
	            return true;
	        }
	    }, {
	        key: 'hanldeFetchData',
	        value: function hanldeFetchData() {
	            this.refs.grid.fetchData();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            var me = this;
	            // 通过 rowSelection 对象表明需要行选择
	            var rowSelection = {
	                onSelect: function onSelect(record, selected, selectedRows) {
	                    console.log(record, selected, selectedRows);
	                },
	                onSelectAll: function onSelectAll(record, selectedRows) {
	                    console.log(record, selectedRows);
	                }
	            };
	            //[{title:'编辑', type:"inlineEdit1", cb: function(rowData){ me.refs.grid.toggleSubComp(rowData)}},
	            //      {title:'删除', type:"del", cb: function(rowData){ me.refs.grid.delRow(rowData)}}
	            //  ]
	            // title, width, type, hidden,dataKey
	            var columns = [{ dataKey: 'check', title: '复选框', type: 'checkbox', isDisable: function isDisable(rowData) {
	                    return (/city/.test(rowData.city)
	                    );
	                } }, { dataKey: 'id', title: 'ID', width: 50, hidden: true, fixed: true }, { dataKey: 'country', title: '国家国家国家国家', width: 200, ordered: true, type: "money", delimiter: ' ', fixed: true }, { dataKey: 'city', title: '城市', width: 150 }, { dataKey: 'firstName', title: "FristName", fixed: true, beforeRender: function beforeRender(rowData) {
	                    return "abc";
	                } }, { dataKey: 'lastName', title: "LastName" }, { dataKey: 'email', title: "Email", width: 200, ordered: true }, { dataKey: 'action1', title: '操作1', width: 100, type: "action", actions: {
	                    "编辑": function _(rowData, actions) {
	                        console.log(actions.addEmptyRow);
	                        me.refs.grid.toggleSubComp(rowData);
	                    },
	                    "删除": function _(rowData) {
	                        me.refs.grid.delRow(rowData);
	                    }
	                }
	            }, { dataKey: 'action', title: '链接', width: 150, render: function render(cellData, rowData) {
	                    return React.createElement(
	                        'div',
	                        null,
	                        React.createElement(
	                            'a',
	                            { href: '#' },
	                            rowData.email
	                        )
	                    );
	                }, beforeRender: function beforeRender(rowData) {
	                    return rowData.email;
	                }
	            }];
	
	            var subCols = [{ dataKey: 'firstName', title: 'firstName', width: 200 }, { dataKey: 'city', title: '城市', width: 200 }];
	
	            var renderSubProps = {
	                height: 100,
	                width: 1196,
	                showHeader: true,
	                showPager: false,
	                jsxcolumns: subCols,
	                // fetchUrl:"http://demo.nwux.taobao.net/file/getGridJson.jsonp",
	                queryKeys: ["firstName", "city"],
	                onModifyRow: this.onModifyRow,
	                processData: function processData(data) {
	                    return { datas: [data] };
	                }
	            };
	
	            var renderProps = {
	                width: 1000,
	                height: 400,
	                actionBar: {
	                    '新增': function _(type, actions) {
	                        console.info(actions);alert(type);
	                    },
	                    '黄山': function _(type) {
	                        alert(type);
	                    }
	                },
	                showSearch: true,
	                searchBarPlaceholder: "请搜索",
	                fetchParams: {},
	                // jsxdata: mockData,
	                fetchUrl: "http://eternalsky.me:8122/file/getGridJson.jsonp",
	                // fetchUrl: urlPrefix + "demo/data.json",
	                jsxcolumns: columns,
	                subComp: React.createElement(Grid, _extends({}, renderSubProps, { ref: 'subGrid' })),
	                rowSelection: rowSelection,
	                addRowClassName: function addRowClassName(rowData) {},
	                beforeFetch: function beforeFetch(sendData, from) {
	                    return sendData;
	                },
	                processData: function processData(data) {
	                    return data;
	                }
	            };
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(Grid, _extends({}, renderProps, { ref: 'grid' })),
	                React.createElement(
	                    Button,
	                    { onClick: me.handleClick.bind(me) },
	                    '页面重新渲染'
	                ),
	                React.createElement(
	                    Button,
	                    { onClick: me.hanldeFetchData.bind(me) },
	                    '手动 fetchData'
	                )
	            );
	        }
	    }]);
	
	    return Demo;
	})(React.Component);
	
	;
	
	module.exports = Demo;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Table Component for uxcore
	 * @author zhouquan.yezq
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	module.exports = __webpack_require__(4);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Table Component for uxcore
	 * @author zhouquan.yezq
	 *
	 * Copyright 2014-2015, UXCore Team, Alinw.
	 * All rights reserved.
	 */
	
	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = __webpack_require__(5);
	var Tbody = __webpack_require__(47);
	var ActionBar = __webpack_require__(144);
	var CellField = __webpack_require__(51);
	var Pagination = __webpack_require__(148);
	var Const = __webpack_require__(7);
	var assign = __webpack_require__(9);
	var deepcopy = __webpack_require__(130);
	var deepEqual = __webpack_require__(139);
	var classnames = __webpack_require__(2);
	
	var Table = (function (_React$Component) {
	    _inherits(Table, _React$Component);
	
	    function Table(props) {
	        _classCallCheck(this, Table);
	
	        _get(Object.getPrototypeOf(Table.prototype), "constructor", this).call(this, props);
	        this.uid = 0;
	        this.fields = {};
	        this.state = {
	            data: this.addValuesInData(deepcopy(this.props.jsxdata)), // checkbox 内部交互
	            columns: this.processColumn(), // column 内部交互
	            showMask: this.props.showMask, // fetchData 时的内部状态改变
	            pageSize: props.pageSize, // pagination 相关
	            currentPage: props.currentPage, // pagination 相关
	            activeColumn: null,
	            searchTxt: "",
	            passedData: null,
	            params: null,
	            selected: [],
	            expanded: false
	        };
	    }
	
	    _createClass(Table, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            this.fetchData();
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var me = this;
	            me.el = ReactDOM.findDOMNode(me);
	            if (!!me.state.data && !!me.state.data.datas) {
	                console.warn("Table: 'content.data' rather than 'content.datas' is recommended, the support for 'content.datas' will be end from ver. 1.3.0");
	            }
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            var me = this;
	            var newData = {};
	            if (!!nextProps.jsxdata && !!me.props.jsxdata && !me._isEqual(nextProps.jsxdata, me.props.jsxdata)) {
	                // Data has changed, so uid which is used to mark the data should be reset.
	                me.uid = 0;
	                newData['data'] = me.addValuesInData(deepcopy(nextProps.jsxdata));
	                me.data = deepcopy(newData['data']);
	            }
	            if (nextProps.pageSize != me.props.pageSize) {
	                newData['pageSize'] = nextProps.pageSize;
	            }
	            if (nextProps.currentPage != me.props.currentPage) {
	                newData['currentPage'] = nextProps.currentPage;
	            }
	            if (!!nextProps.jsxcolumns && !!me.props.jsxcolumns && !me._isEqual(nextProps.jsxcolumns, me.props.jsxcolumns)) {
	                newData['columns'] = me.processColumn(nextProps);
	            }
	            me.setState(newData);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var me = this;
	        }
	
	        /**
	         * For inline edit
	         * receive changes from cell field and change state.data
	         * inform users of the change with dataKey & pass
	         */
	
	    }, {
	        key: "handleDataChange",
	        value: function handleDataChange(obj) {
	            var me = this;
	            var jsxid = obj.jsxid;
	            var column = obj.column;
	            var value = obj.value;
	            var text = obj.text;
	            var pass = obj.pass;
	
	            var dataKey = column.dataKey;
	            var editKey = column.editKey || dataKey;
	            var data = deepcopy(me.state.data);
	            var changedData = {};
	            for (var i = 0; i < data.data.length; i++) {
	                if (data.data[i].jsxid == jsxid) {
	                    data.data[i][dataKey] = text;
	                    data.data[i][editKey] = value;
	                    changedData = data.data[i];
	                }
	            }
	
	            me.setState({
	                data: data
	            }, function () {
	                me.props.onChange({
	                    data: me.state.data,
	                    editKey: editKey,
	                    dataKey: dataKey,
	                    changedData: changedData,
	                    pass: pass
	                });
	            });
	        }
	
	        /**
	         * register CellField to Table for the global validation
	         * @param field {element} the cell field to be registered
	         */
	
	    }, {
	        key: "attachCellField",
	        value: function attachCellField(validate, name) {
	            var me = this;
	            if (!name) {
	                console.error("Table: name can not be empty, check the dataKey of the column config");
	            } else {
	                me.fields[name] = validate;
	            }
	        }
	
	        /**
	         * cancel the CellField when it is unmounted.
	         * @param field {element} the cell field to be canceled.
	         */
	
	    }, {
	        key: "detachCellField",
	        value: function detachCellField(name) {
	            delete this.fields[name];
	        }
	
	        /**
	         * simple method to compare two datas, 
	         * only support the data which JSON can parse.
	         */
	
	    }, {
	        key: "_isEqual",
	        value: function _isEqual(a, b) {
	            return deepEqual(a, b);
	        }
	
	        /**
	         * get Query Object by combining data from searchBar, column order, pagination
	         * and fetchParams.
	         * @param from {string} used in props.beforeFetch
	         */
	
	    }, {
	        key: "getQueryObj",
	        value: function getQueryObj(from) {
	
	            var me = this,
	                queryObj = {};
	            if (me.props.passedData) {
	                var queryKeys = me.props.queryKeys;
	                if (!queryKeys) {
	                    queryObj = me.props.passedData;
	                } else {
	                    queryKeys.forEach(function (key) {
	                        if (me.props.passedData[key] !== undefined) {
	                            queryObj[key] = me.props.passedData[key];
	                        }
	                    });
	                }
	            }
	
	            // pagination
	            queryObj = assign({}, queryObj, {
	                pageSize: me.state.pageSize,
	                currentPage: me.state.currentPage
	            });
	
	            // column order
	            var activeColumn = this.state.activeColumn;
	            if (!!activeColumn) {
	                queryObj = assign({}, queryObj, {
	                    orderColumn: activeColumn.dataKey,
	                    orderType: activeColumn.orderType
	                });
	            }
	
	            // search query
	            var searchTxt = me.state.searchTxt;
	            if (!!searchTxt) {
	                queryObj = assign({}, queryObj, {
	                    searchTxt: searchTxt
	                });
	            }
	
	            // fetchParams has the top priority
	            if (!!me.props.fetchParams) {
	                queryObj = assign({}, queryObj, me.props.fetchParams);
	            }
	
	            return me.props.beforeFetch(queryObj, from);
	        }
	
	        /**
	         * fetch Data via Ajax
	         * @param from {string} tell fetchData where it is invoked, the param will be 
	         * passed to props.beforeFetch in order to help the user.
	         */
	
	    }, {
	        key: "fetchData",
	        value: function fetchData(from) {
	
	            var me = this;
	            // reset uid cause table data has changed
	            me.uid = 0;
	
	            // fetchUrl has the top priority.
	            if (!!me.props.fetchUrl) {
	                if (!me.state.showMask) {
	                    me.setState({
	                        showMask: true
	                    });
	                }
	                var ajaxOptions = {
	                    url: me.props.fetchUrl,
	                    data: me.getQueryObj(from),
	                    dataType: "json",
	                    success: function success(result) {
	                        if (result.success === true || result.hasError === false) {
	                            var _data = result.content;
	                            var processedData = me.addValuesInData(me.props.processData(deepcopy(_data)));
	                            var updateObj = {
	                                data: processedData,
	                                showMask: false
	                            };
	                            if (processedData.currentPage !== undefined) {
	                                updateObj.currentPage = processedData.currentPage;
	                            }
	                            me.data = deepcopy(processedData);
	                            me.setState(updateObj);
	                        } else {
	                            me.props.onFetchError(result);
	                        }
	                    }
	                };
	
	                if (/\.jsonp/.test(me.props.fetchUrl)) {
	                    ajaxOptions.dataType = "jsonp";
	                }
	
	                $.ajax(ajaxOptions);
	            } else if (!!me.props.passedData) {
	
	                if (!me.props.queryKeys) {
	                    var data = me.addValuesInData(me.props.processData(deepcopy(me.props.passedData)));
	                    me.setState({
	                        data: data
	                    });
	                    me.data = deepcopy(data);
	                } else {
	                    (function () {
	                        var data = {};
	                        me.props.queryKeys.forEach(function (key, index) {
	                            if (me.props.passedData[key] !== undefined) {
	                                data[key] = me.props.passedData[key];
	                            }
	                        });
	                        var processedData = me.addValuesInData(me.props.processData(deepcopy(data)));
	                        me.setState({
	                            data: processedData
	                        });
	                        me.data = deepcopy(processedData);
	                    })();
	                }
	            } else if (!!this.props.jsxdata) {
	                var data = this.addValuesInData(deepcopy(this.props.jsxdata));
	                me.setState({
	                    data: data
	                });
	                me.data = deepcopy(data);
	            } else {
	                //default will create one row
	                var data = {
	                    data: [{
	                        jsxid: me.uid++,
	                        __mode__: Const.MODE.EDIT
	                    }],
	                    "currentPage": 1,
	                    "totalCount": 0
	                };
	                me.data = deepcopy(data);
	                me.setState({
	                    "data": deepcopy(data)
	                });
	            }
	        }
	    }, {
	        key: "processColumn",
	        value: function processColumn(props) {
	
	            props = props || this.props;
	
	            var me = this,
	                columns = deepcopy(props.jsxcolumns),
	                hasCheckboxColumn = false;
	
	            columns.forEach(function (item) {
	                if (item.type == 'checkbox') {
	                    hasCheckboxColumn = true;
	                    me.checkboxColumn = item;
	                    me.checkboxColumnKey = item.dataKey;
	                    item.width = item.width || 46;
	                    item.align = item.align || 'right';
	                }
	            });
	
	            // filter the column which has a dataKey 'jsxchecked' & 'jsxtreeIcon'
	
	            columns = columns.filter(function (item) {
	                return item.dataKey !== 'jsxchecked' && item.dataKey !== 'jsxtreeIcon';
	            });
	            // if hidden is not set, then it's false
	
	            columns = columns.map(function (item, index) {
	                item.hidden = !!item.hidden;
	                return item;
	            });
	
	            if (!!props.rowSelection & !hasCheckboxColumn) {
	                me.checkboxColumn = { dataKey: 'jsxchecked', width: 46, type: 'checkbox', align: 'right' };
	                me.checkboxColumnKey = 'jsxchecked';
	
	                columns = [me.checkboxColumn].concat(columns);
	            }
	
	            // no rowSelection but has parentHasCheckbox, render placeholder
	            else if (!!props.parentHasCheckbox) {
	                    columns = [{ dataKey: 'jsxwhite', width: 46, type: 'empty' }].concat(columns);
	                }
	
	            if (!!props.subComp && props.renderModel !== 'tree') {
	                columns = [{ dataKey: 'jsxtreeIcon', width: 34, type: 'treeIcon' }].concat(columns);
	            }
	            // no subComp but has passedData, means sub mode, parent should has tree icon,
	            // render tree icon placeholder
	            else if (!!props.passedData) {
	                    columns = [{ dataKey: 'jsxwhite', width: 34, type: 'empty' }].concat(columns);
	                }
	
	            return columns;
	        }
	    }, {
	        key: "handleColumnPickerChange",
	        value: function handleColumnPickerChange(checkedKeys) {
	            var _columns = deepcopy(this.state.columns);
	            _columns.forEach(function (item, index) {
	                if ('group' in item) {
	                    item.columns.forEach(function (ele, idx) {
	                        if (checkedKeys.indexOf(ele.dataKey) !== -1) {
	                            ele.hidden = false;
	                        } else {
	                            ele.hidden = true;
	                        }
	                    });
	                } else {
	                    if (checkedKeys.indexOf(item.dataKey) !== -1) {
	                        item.hidden = false;
	                    } else {
	                        item.hidden = true;
	                    }
	                }
	            });
	            this.setState({
	                columns: _columns
	            });
	        }
	
	        /**
	         * change SelectedRows data via checkbox, this function will pass to the Cell
	         * @param checked {boolean} the checkbox status
	         * @param rowIndex {number} the row Index
	         * @param fromMount {boolean} onSelect is called from cell Mount is not expected.
	         */
	
	    }, {
	        key: "changeSelected",
	        value: function changeSelected(checked, rowIndex, fromMount) {
	
	            var me = this;
	            var _content = deepcopy(this.state.data);
	            var _data = _content.datas || _content.data;
	
	            _data.map(function (item, index) {
	                if (item.jsxid == rowIndex) {
	                    item[me.checkboxColumnKey] = checked;
	                    return item;
	                }
	            });
	
	            me.setState({
	                data: _content
	            }, function () {
	                if (!fromMount) {
	                    var data = me.state.data.datas || me.state.data.data;
	                    var selectedRows = data.filter(function (item, index) {
	                        return item[me.checkboxColumnKey] == true;
	                    });
	                    !!me.props.rowSelection && !!me.props.rowSelection.onSelect && me.props.rowSelection.onSelect(checked, data[rowIndex], selectedRows);
	                }
	            });
	        }
	    }, {
	        key: "selectAll",
	        value: function selectAll(checked) {
	
	            var me = this;
	            var _content = deepcopy(me.state.data);
	            var _data = _content.datas || _content.data;
	            var rowSelection = me.props.rowSelection;
	
	            var selectedRows = [];
	            _data = _data.forEach(function (item, index) {
	                if (!('isDisable' in me.checkboxColumn) || !me.checkboxColumn.isDisable(item)) {
	                    item[me.checkboxColumnKey] = checked;
	                    selectedRows.push(item);
	                }
	            });
	
	            if (!!rowSelection && !!rowSelection.onSelectAll) {
	                rowSelection.onSelectAll.apply(null, [checked, checked ? selectedRows : []]);
	            }
	            me.setState({
	                data: _content
	            });
	        }
	    }, {
	        key: "onPageChange",
	        value: function onPageChange(current) {
	            var me = this;
	            me.setState({
	                currentPage: current
	            }, function () {
	                me.fetchData("pagination");
	            });
	        }
	    }, {
	        key: "handleShowSizeChange",
	        value: function handleShowSizeChange(current, pageSize) {
	            var me = this;
	            me.setState({
	                currentPage: current,
	                pageSize: pageSize
	            }, function () {
	                me.fetchData("pagination");
	            });
	        }
	    }, {
	        key: "renderPager",
	        value: function renderPager() {
	            if (this.props.showPager && this.state.data && this.state.data.totalCount) {
	                return React.createElement(
	                    "div",
	                    { className: "kuma-uxtable-page" },
	                    React.createElement(Pagination, { className: "mini",
	                        showSizeChanger: true,
	                        total: this.state.data.totalCount,
	                        onShowSizeChange: this.handleShowSizeChange.bind(this),
	                        onChange: this.onPageChange.bind(this),
	                        current: this.state.currentPage,
	                        pageSize: this.state.pageSize })
	                );
	            }
	        }
	    }, {
	        key: "handleOrderColumnCB",
	        value: function handleOrderColumnCB(type, column) {
	
	            //this.props.activeColumn=column;
	            this.setState({
	                activeColumn: column
	            });
	            this.fetchData("order");
	        }
	    }, {
	        key: "handleActionBarSearch",
	        value: function handleActionBarSearch(value) {
	            var me = this;
	            this.setState({
	                searchTxt: value
	            }, function () {
	                me.fetchData("search");
	            });
	        }
	    }, {
	        key: "getData",
	        value: function getData(validate) {
	            var me = this;
	            var pass = true;
	            if (validate !== false) {
	                for (name in me.fields) {
	                    var fieldPass = me.fields[name]();
	
	                    // if one field fails to pass, the table fails to pass
	                    if (pass) {
	                        pass = fieldPass;
	                    }
	                }
	            }
	            if (me.props.getSavedData) {
	                // 滤除可能为空的元素
	                var data = deepcopy(me.data);
	                data.data = data.data.filter(function (item) {
	                    return item != undefined;
	                });
	                return { data: data, pass: pass };
	            } else {
	                return { data: me.state.data, pass: pass };
	            }
	        }
	    }, {
	        key: "hasFixColumn",
	        value: function hasFixColumn() {
	            var props = this.props;
	            var _columns = props.jsxcolumns.filter(function (item) {
	                if (item.fixed) {
	                    return true;
	                }
	            });
	            if (_columns.length > 0) {
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: "renderHeader",
	        value: function renderHeader(renderHeaderProps) {
	
	            if (!this.props.showHeader) {
	                return;
	            }
	
	            if (this.hasFixColumn()) {
	                return React.createElement(
	                    "div",
	                    { className: "kuma-uxtable-header-wrapper" },
	                    React.createElement(Header, _extends({}, renderHeaderProps, { fixedColumn: "fixed", key: "grid-header-fixed" })),
	                    React.createElement(Header, _extends({}, renderHeaderProps, { fixedColumn: "scroll", key: "grid-header-scroll" }))
	                );
	            } else {
	                return React.createElement(
	                    "div",
	                    { className: "kuma-uxtable-header-wrapper" },
	                    React.createElement(Header, _extends({}, renderHeaderProps, { fixedColumn: "no" }))
	                );
	            }
	        }
	    }, {
	        key: "renderTbody",
	        value: function renderTbody(renderBodyProps, bodyHeight) {
	
	            if (this.hasFixColumn()) {
	                var subComp = renderBodyProps.subComp;
	
	                var fixedBodyProps = _objectWithoutProperties(renderBodyProps, ["subComp"]);
	
	                return React.createElement(
	                    "div",
	                    { className: "kuma-uxtable-body-wrapper", style: {
	                            height: bodyHeight
	                        } },
	                    React.createElement(Tbody, _extends({}, fixedBodyProps, { fixedColumn: "fixed", key: "grid-body-fixed" })),
	                    React.createElement(Tbody, _extends({}, renderBodyProps, { fixedColumn: "scroll", key: "grid-body-scroll" }))
	                );
	            } else {
	                return React.createElement(
	                    "div",
	                    { className: "kuma-uxtable-body-wrapper", style: {
	                            height: bodyHeight
	                        } },
	                    React.createElement(Tbody, _extends({}, renderBodyProps, { fixedColumn: "no" }))
	                );
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _classnames;
	
	            var props = this.props;
	            var bodyHeight = undefined;
	            // if table is in sub mode, people always want to align the parent
	            // and the sub table, so width should not be cared.
	            var headerHeight = props.headerHeight;
	
	            var _style = {
	                width: !!props.passedData ? "auto" : props.width,
	                height: props.height
	            };
	            var actionBarHeight = props.actionBar ? props.actionBarHeight : 0;
	            var pagerHeight = props.showPager && this.state.data && this.state.data.totalCount ? 50 : 0;
	
	            // decide whether the table has column groups
	            var hasGroup = false;
	            for (var i = 0; i < this.state.columns.length; i++) {
	                if ('group' in this.state.columns[i]) {
	                    hasGroup = true;
	                    break;
	                }
	            }
	
	            headerHeight = headerHeight || (hasGroup ? 80 : 40);
	
	            if (props.height == 'auto') {
	                bodyHeight = 'auto';
	            } else {
	                bodyHeight = props.height == "100%" ? props.height : props.height - headerHeight - actionBarHeight - pagerHeight;
	            }
	            var renderBodyProps = {
	                columns: this.state.columns,
	                data: this.state.data ? this.state.data.datas || this.state.data.data : [],
	                onModifyRow: props.onModifyRow ? props.onModifyRow : function () {},
	                rowSelection: props.rowSelection,
	                addRowClassName: props.addRowClassName,
	                subComp: props.subComp,
	                mask: this.state.showMask,
	                changeSelected: this.changeSelected.bind(this),
	                rowHeight: this.props.rowHeight,
	                height: bodyHeight,
	                width: props.width,
	                root: this,
	                mode: props.mode,
	                renderModel: props.renderModel,
	                levels: props.levels,
	                handleDataChange: this.handleDataChange.bind(this),
	                attachCellField: this.attachCellField.bind(this),
	                detachCellField: this.detachCellField.bind(this),
	                key: 'grid-body'
	            },
	                renderHeaderProps = {
	                columns: this.state.columns,
	                activeColumn: this.state.activeColumn,
	                checkAll: this.selectAll.bind(this),
	                columnPicker: props.showColumnPicker,
	                showHeaderBorder: props.showHeaderBorder,
	                handleColumnPickerChange: this.handleColumnPickerChange.bind(this),
	                headerHeight: props.headerHeight,
	                width: props.width,
	                mode: props.mode,
	                orderColumnCB: this.handleOrderColumnCB.bind(this),
	                key: 'grid-header'
	
	            };
	
	            var actionBar = undefined;
	
	            if (props.actionBar || props.showSearch) {
	                var renderActionProps = {
	                    onSearch: this.handleActionBarSearch.bind(this),
	                    actionBarConfig: this.props.actionBar,
	                    showSearch: this.props.showSearch,
	                    searchBarPlaceholder: this.props.searchBarPlaceholder,
	                    key: 'grid-actionbar'
	                };
	                actionBar = React.createElement(ActionBar, renderActionProps);
	            }
	
	            return React.createElement(
	                "div",
	                { className: classnames((_classnames = {}, _defineProperty(_classnames, props.jsxprefixCls, true), _defineProperty(_classnames, "kuma-subgrid-mode", !!props.passedData), _classnames)), style: _style },
	                actionBar,
	                React.createElement(
	                    "div",
	                    { className: "kuma-uxtable-content", style: {
	                            width: !!props.passedData ? "auto" : props.width
	                        } },
	                    this.renderHeader(renderHeaderProps),
	                    this.renderTbody(renderBodyProps, bodyHeight)
	                ),
	                this.renderPager()
	            );
	        }
	
	        ///////////////////////// Util Method /////////////////////////
	
	        /**
	         * add some specific value for each row data which will be used in manipulating data & rendering.
	         * used in record API.
	         */
	
	    }, {
	        key: "addJSXIdsForRecord",
	        value: function addJSXIdsForRecord(objAux) {
	            var me = this;
	            if (objAux instanceof Array) {
	                objAux = objAux.map(function (item) {
	                    if (item.jsxid == undefined || item.jsxid == null) {
	                        item.jsxid = me.uid++;
	                    }
	                    if (!item.__mode__) {
	                        item.__mode__ = Const.MODE.EDIT;
	                    }
	                    return item;
	                });
	            } else {
	                objAux.jsxid = me.uid++;
	            }
	            return objAux;
	        }
	
	        /**
	         * add some specific value for each row data which will be used in manipulating data & rendering.
	         * used in method fetchData
	         */
	
	    }, {
	        key: "addValuesInData",
	        value: function addValuesInData(objAux) {
	            if (!objAux || !objAux.datas && !objAux.data) return;
	            var me = this;
	            var data = objAux.datas || objAux.data;
	            data.forEach(function (node) {
	                node.jsxid = me.uid++;
	                node.__mode__ = node.__mode__ || Const.MODE.VIEW;
	                me.addValuesInData(node);
	            });
	            return objAux;
	        }
	
	        /**
	         * merge data
	         */
	
	    }, {
	        key: "mergeData",
	        value: function mergeData(data, obj) {
	            var newData = deepcopy(data);
	
	            // code compatible
	            if (!!newData.datas) {
	                newData.datas = newData.datas.concat(obj);
	            } else if (!!newData.data) {
	                newData.data = newData.data.concat(obj);
	            }
	            newData.totalCount++;
	            return newData;
	        }
	
	        /**
	         * insert some data into this.state.data
	         * @param objAux {Array or Object} datum or data need to be inserted
	         */
	
	    }, {
	        key: "insertRecords",
	        value: function insertRecords(objAux) {
	            if (typeof objAux !== "object") return;
	            var me = this;
	            if (!(objAux instanceof Array)) {
	                objAux = [objAux];
	            }
	
	            objAux = this.addJSXIdsForRecord(objAux);
	
	            // me.data = me.mergeData(me.data, objAux);
	            this.setState({
	                data: me.mergeData(me.state.data, objAux)
	            });
	        }
	
	        /**
	         * @param {objAux} {a:'b',c:'d',jsxid:''}
	         */
	    }, {
	        key: "updateRecord",
	        value: function updateRecord(objAux, cb) {
	            var _data = this.state.data;
	
	            if (!_data) {
	                return;
	            }
	
	            if (_data.data || _data.datas) {
	                var data = _data.data || _data.datas;
	
	                data = data.map(function (item) {
	                    if (item.jsxid == objAux.jsxid) {
	                        return objAux;
	                    } else {
	                        return item;
	                    }
	                });
	                if (!!_data.data) {
	                    _data.data = data;
	                } else if (!!_data.datas) {
	                    _data.datas = data;
	                }
	            }
	            this.setState({
	                data: _data
	            }, function () {
	                !!cb && cb();
	            });
	        }
	    }, {
	        key: "syncRecord",
	        value: function syncRecord(objAux) {
	            var me = this;
	            var _data = me.data.data || me.data.datas;
	
	            me.updateRecord(objAux, function () {
	                var _stateData = me.state.data.data || me.state.data.datas;
	                // _data.forEach((item, index) => {
	                //     if (item.jsxid == objAux.jsxid) {
	                //         _data[index] = _stateData.filter((ele) => {
	                //             return ele.jsxid == objAux.jsxid
	                //         })[0];
	                //     }
	                // });
	                _stateData.forEach(function (item, index) {
	                    if (item.jsxid == objAux.jsxid) {
	                        _data[index] = item;
	                    }
	                });
	            });
	        }
	    }, {
	        key: "removeRecords",
	        value: function removeRecords(objAux) {
	
	            //at least one record
	            var me = this;
	            var content = this.state.data;
	            var data = content.data || content.datas;
	
	            // deepcopy protect
	            var _content = deepcopy(content),
	                _data = _content.data || _content.datas;
	
	            if (Object.prototype.toString.call(objAux) !== "[object Array]") {
	                objAux = [objAux];
	            }
	
	            objAux.map(function (item) {
	                _data.forEach(function (element, index, array) {
	                    if (element.jsxid == item.jsxid) {
	                        _data.splice(index, 1);
	                    }
	                });
	            });
	
	            me.data = _content;
	
	            this.setState({
	                data: _content
	            });
	        }
	
	        //////////////////////// CURD for gird ////////////////
	
	    }, {
	        key: "addEmptyRow",
	        value: function addEmptyRow() {
	            this.insertRecords({});
	        }
	    }, {
	        key: "addRow",
	        value: function addRow(rowData) {
	            this.insertRecords(rowData);
	        }
	    }, {
	        key: "resetRow",
	        value: function resetRow(rowData) {
	            var me = this;
	            var updateData = {};
	            var _data = me.data.datas || me.data.data;
	            for (var i = 0; i < _data.length; i++) {
	                if (_data[i].jsxid == rowData.jsxid) {
	                    updateData = deepcopy(_data[i]);
	                    break;
	                }
	            }
	            updateData['__mode__'] = Const.MODE.EDIT;
	            this.updateRecord(updateData);
	        }
	    }, {
	        key: "delRow",
	        value: function delRow(rowData) {
	            this.removeRecords(rowData);
	        }
	    }, {
	        key: "editRow",
	        value: function editRow(rowData) {
	            rowData.__mode__ = Const.MODE.EDIT;
	            this.updateRecord(rowData);
	        }
	    }, {
	        key: "viewRow",
	        value: function viewRow(rowData) {
	            rowData.__mode__ = Const.MODE.VIEW;
	            this.updateRecord(rowData);
	        }
	    }, {
	        key: "saveRow",
	        value: function saveRow(rowData) {
	            rowData.__mode__ = Const.MODE.VIEW;
	            rowData.__edited__ = true;
	            this.syncRecord(rowData);
	        }
	    }, {
	        key: "saveAllRow",
	        value: function saveAllRow() {
	            var me = this;
	            var data = deepcopy(me.state.data.data || me.state.data.datas);
	            data.forEach(function (item) {
	                me.saveRow(item);
	            });
	        }
	    }, {
	        key: "editAllRow",
	        value: function editAllRow() {
	            var me = this;
	            var data = deepcopy(me.data.data || me.data.datas);
	            data.forEach(function (item) {
	                me.editRow(item);
	            });
	        }
	    }, {
	        key: "toggleSubComp",
	        value: function toggleSubComp(rowData) {
	            var _content = deepcopy(this.state.data);
	            var _data = _content.data || _content.datas;
	
	            if (_data) {
	                _data = _data.map(function (item) {
	                    if (item.jsxid == rowData.jsxid) {
	                        item.showSubComp = !item.showSubComp;
	                        return item;
	                    } else {
	                        return item;
	                    }
	                });
	            }
	            this.setState({
	                data: _content
	            });
	        }
	    }]);
	
	    return Table;
	})(React.Component);
	
	;
	
	Table.defaultProps = {
	    jsxprefixCls: "kuma-uxtable",
	    showHeader: true,
	    width: "auto",
	    height: "auto",
	    mode: Const.MODE.EDIT,
	    renderModel: '',
	    levels: 1,
	    actionBarHeight: 40,
	    doubleClickToEdit: true,
	    showPager: true,
	    showColumnPicker: true,
	    showHeaderBorder: false,
	    showMask: false,
	    showSearch: false,
	    getSavedData: true,
	    pageSize: 10,
	    rowHeight: 76,
	    fetchParams: {},
	    currentPage: 1,
	    queryKeys: [],
	    emptyText: "暂无数据",
	    searchBarPlaceholder: "搜索表格内容",
	    processData: function processData(data) {
	        return data;
	    },
	    beforeFetch: function beforeFetch(obj) {
	        return obj;
	    },
	    onFetchError: function onFetchError() {},
	    addRowClassName: function addRowClassName() {},
	    onChange: function onChange() {}
	};
	
	// http://facebook.github.io/react/docs/reusable-components.html
	Table.propTypes = {
	    jsxcolumns: React.PropTypes.arrayOf(React.PropTypes.object),
	    width: React.PropTypes.number,
	    height: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
	    headerHeight: React.PropTypes.number,
	    pageSize: React.PropTypes.number,
	    queryKeys: React.PropTypes.array,
	    doubleClickToEdit: React.PropTypes.bool,
	    showColumnPicker: React.PropTypes.bool,
	    showPager: React.PropTypes.bool,
	    showHeader: React.PropTypes.bool,
	    showHeaderBorder: React.PropTypes.bool,
	    showMask: React.PropTypes.bool,
	    showSearch: React.PropTypes.bool,
	    searchBarPlaceholder: React.PropTypes.string,
	    subComp: React.PropTypes.element,
	    emptyText: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element]),
	    jsxdata: React.PropTypes.object,
	    fetchUrl: React.PropTypes.string,
	    fetchParams: React.PropTypes.object,
	    actionBar: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object]),
	    processData: React.PropTypes.func,
	    beforeFetch: React.PropTypes.func,
	    onFetchError: React.PropTypes.func,
	    addRowClassName: React.PropTypes.func,
	    passedData: React.PropTypes.object,
	    // For inline edit
	    getSavedData: React.PropTypes.bool,
	    onChange: React.PropTypes.func,
	    // For tree Mode
	    renderModel: React.PropTypes.string,
	    levels: React.PropTypes.number
	};
	
	Table.displayName = "Table";
	Table.CellField = CellField;
	Table.Constants = Const;
	
	module.exports = Table;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by xy on 15/4/13.
	 */
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CheckBox = __webpack_require__(6);
	var assign = __webpack_require__(9);
	var Const = __webpack_require__(7);
	var Tree = __webpack_require__(10);
	var classnames = __webpack_require__(2);
	var TreeNode = Tree.TreeNode;
	
	var Header = (function (_React$Component) {
	    _inherits(Header, _React$Component);
	
	    function Header(props) {
	        _classCallCheck(this, Header);
	
	        _get(Object.getPrototypeOf(Header.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            pickerDisplay: 'none'
	        };
	    }
	
	    _createClass(Header, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var me = this;
	            me.handleGlobalClick = this.handleGlobalClick.bind(this);
	            $(document).on('click.uxcore-grid-header', me.handleGlobalClick);
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            var me = this;
	            $(document).off('click.uxcore-grid-header', me.handleGlobalClick);
	        }
	    }, {
	        key: 'handleGlobalClick',
	        value: function handleGlobalClick(e) {
	            if (this.props.columnPicker) {
	                this.hideColumnPicker(e);
	            }
	        }
	    }, {
	        key: 'hideColumnPicker',
	        value: function hideColumnPicker(e) {
	            var target = e.target;
	
	            if ($(target).parents('.kuma-column-picker-container').length == 0 && !$(target).hasClass("kuma-column-picker-container")) {
	                this.setState({
	                    pickerDisplay: 'none'
	                });
	            }
	        }
	    }, {
	        key: 'handleCheckBoxChange',
	        value: function handleCheckBoxChange() {
	            var v = this.refs.checkbox.getValue();
	            this.props.checkAll.apply(null, [v]);
	        }
	    }, {
	        key: 'handleColumnPicker',
	        value: function handleColumnPicker(e) {
	
	            e.stopPropagation();
	            if (this.state.pickerDisplay == 'block') {
	                this.setState({
	                    pickerDisplay: 'none'
	                });
	            } else {
	                this.setState({
	                    pickerDisplay: 'block'
	                });
	            }
	        }
	    }, {
	        key: 'handlePickerCheck',
	        value: function handlePickerCheck(info) {
	            this.props.handleColumnPickerChange(info.checkedKeys);
	        }
	    }, {
	        key: 'handleColumns',
	        value: function handleColumns(index) {
	            this.props.handleColumnPickerChange;
	        }
	    }, {
	        key: 'getCheckedKeys',
	        value: function getCheckedKeys() {
	            var me = this;
	            var columns = me.props.columns;
	
	            var _columns = [];
	            var checkedKeys = [];
	            columns.forEach(function (item, index) {
	                if ('group' in item) {
	                    _columns = _columns.concat(item.columns);
	                } else {
	                    _columns.push(item);
	                }
	            });
	            _columns.forEach(function (item, index) {
	                if (!item.hidden) {
	                    checkedKeys.push(item.dataKey);
	                }
	            });
	            return checkedKeys;
	        }
	    }, {
	        key: 'renderColumnTree',
	        value: function renderColumnTree() {
	            var me = this;
	            var columns = me.props.columns;
	
	            var notRenderColumns = ['jsxchecked', 'jsxtreeIcon', 'jsxwhite'];
	
	            var treeProps = {
	                multiple: true,
	                checkable: true,
	                defaultCheckedKeys: me.getCheckedKeys(),
	                onCheck: me.handlePickerCheck.bind(me)
	            };
	
	            return React.createElement(
	                Tree,
	                treeProps,
	                columns.map(function (item, index) {
	                    if (notRenderColumns.indexOf(item.dataKey) !== -1) return;
	                    if ('group' in item) {
	                        return React.createElement(
	                            TreeNode,
	                            { key: item.group, title: item.group },
	                            item.columns.map(function (column, idx) {
	                                return React.createElement(TreeNode, { key: column.dataKey, title: column.title });
	                            })
	                        );
	                    } else {
	                        return React.createElement(TreeNode, { key: item.dataKey, title: item.title });
	                    }
	                }).filter(function (item, index) {
	                    return item != undefined;
	                })
	            );
	        }
	    }, {
	        key: 'renderPicker',
	        value: function renderPicker() {
	            var me = this;
	            var _style = {
	                display: this.state.pickerDisplay
	            };
	
	            return React.createElement(
	                'div',
	                { className: classnames({
	                        "kuma-column-picker-container": true,
	                        "hasGroup": me.hasGroup
	                    }) },
	                React.createElement('i', { className: 'kuma-icon kuma-icon-target-list kuma-column-picker', onClick: this.handleColumnPicker.bind(this) }),
	                React.createElement(
	                    'div',
	                    { className: 'kuma-uxtable-colmnpicker', style: _style, ref: 'columnpicker' },
	                    me.renderColumnTree()
	                )
	            );
	        }
	    }, {
	        key: 'handleColumnOrder',
	        value: function handleColumnOrder(type, column) {
	            column.orderType = type;
	            this.props.orderColumnCB.apply(null, [type, column]);
	        }
	    }, {
	        key: 'renderOrderIcon',
	        value: function renderOrderIcon(column) {
	            var me = this;
	            if (column.ordered) {
	                var desc = "sort-down",
	                    asc = "sort-up";
	                if (this.props.activeColumn && column.dataKey == this.props.activeColumn.dataKey) {
	                    if (column.orderType == "desc") {
	                        desc = "sort-down-active";
	                    } else {
	                        asc = "sort-up-active";
	                    }
	                }
	                return React.createElement(
	                    'span',
	                    { className: 'kuma-uxtable-h-sort' },
	                    React.createElement('i', { className: asc, onClick: this.handleColumnOrder.bind(me, 'asc', column) }),
	                    React.createElement('i', { className: desc, onClick: this.handleColumnOrder.bind(me, 'desc', column) })
	                );
	            }
	        }
	    }, {
	        key: 'renderColumn',
	        value: function renderColumn(item, index, hasGroup, last) {
	
	            if (item.hidden) return;
	            var me = this;
	            var noBorderColumn = ['jsxchecked', 'jsxtreeIcon', 'jsxwhite'];
	            var _style = {
	                width: item.width ? item.width : 100,
	                textAlign: item.align ? item.align : "left"
	            };
	            var _v = undefined;
	
	            if (hasGroup) {
	                assign(_style, {
	                    height: 80,
	                    lineHeight: 80 + 'px'
	                });
	            }
	
	            if (item.type == 'checkbox') {
	                assign(_style, {
	                    paddingRight: 32,
	                    paddingLeft: 12,
	                    width: item.width ? item.width : 92,
	                    borderRight: 'none'
	                });
	
	                var checkBoxProps = {
	                    ref: 'checkbox',
	                    disable: me.props.mode !== Const.MODE.VIEW ? item.disable : true,
	                    onchange: me.handleCheckBoxChange.bind(me)
	                };
	
	                _v = React.createElement(CheckBox, checkBoxProps);
	            } else {
	                _v = React.createElement(
	                    'span',
	                    { title: item.title },
	                    item.title
	                );
	            }
	
	            if (noBorderColumn.indexOf(item.dataKey) !== -1 || last) {
	                assign(_style, {
	                    borderRight: 'none'
	                });
	            }
	
	            return React.createElement(
	                'div',
	                { key: index, className: classnames({
	                        "kuma-uxtable-cell": true,
	                        "show-border": me.props.showHeaderBorder
	                    }), style: _style },
	                _v,
	                me.renderOrderIcon(item)
	            );
	        }
	    }, {
	        key: 'renderItems',
	        value: function renderItems(_columns) {
	            var me = this;
	
	            var columns = _columns.map(function (item, index) {
	                var last = index == _columns.length - 1;
	                if ('group' in item) {
	                    // First determine whether the group should be rendered, if all columns
	                    // is hidden, the column group should not be rendered.
	                    var shouldRenderGroup = item.columns.some(function (column, i) {
	                        return !column.hidden;
	                    });
	                    if (shouldRenderGroup) {
	                        return React.createElement(
	                            'div',
	                            { className: 'kuma-uxtable-header-column-group', key: index },
	                            React.createElement(
	                                'div',
	                                { className: 'kuma-uxtable-header-group-name' },
	                                item.group
	                            ),
	                            item.columns.map(function (column, i) {
	                                return me.renderColumn(column, i, false, last);
	                            })
	                        );
	                    }
	                } else {
	                    return me.renderColumn(item, index, me.hasGroup, last);
	                }
	            });
	            return columns;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            var props = this.props,
	                me = this,
	                _picker = undefined,
	                _width = 0,
	                headerWrapClassName = undefined,
	                _headerStyle = {},
	                _columns = undefined;
	
	            if (props.columnPicker && (props.fixedColumn == 'no' || props.fixedColumn == 'scroll')) {
	                _picker = this.renderPicker();
	            }
	
	            if (props.fixedColumn == 'fixed') {
	                _columns = props.columns.filter(function (item) {
	                    if (item.fixed && !item.hidden) {
	                        if (!item.width) {
	                            item.width = 100;
	                        }
	                        _width = item.width * 1 + _width;
	                        return true;
	                    }
	                });
	                assign(_headerStyle, {
	                    width: _width,
	                    minWidth: _width
	                });
	                headerWrapClassName = "kuma-uxtable-header-fixed";
	            } else if (props.fixedColumn == 'scroll') {
	                _columns = props.columns.filter(function (item) {
	                    if (!item.fixed) {
	                        return true;
	                    } else if (!item.hidden) {
	                        if (!item.width) {
	                            item.width = 100;
	                        }
	                        _width = item.width * 1 + _width;
	                    }
	                });
	                assign(_headerStyle, {
	                    width: props.width - _width - 3,
	                    minWidth: props.width - _width - 3
	                });
	                headerWrapClassName = "kuma-uxtable-header-scroll";
	            } else {
	                _columns = props.columns;
	                headerWrapClassName = "kuma-uxtable-header-no";
	            }
	
	            me.hasGroup = false;
	            for (var i = 0; i < _columns.length; i++) {
	                if ('group' in _columns[i]) {
	                    me.hasGroup = true;
	                    break;
	                }
	            }
	
	            assign(_headerStyle, {
	                height: props.headerHeight ? props.headerHeight : me.hasGroup ? 80 : 40,
	                lineHeight: (props.headerHeight ? props.headerHeight : 40) + "px"
	            });
	
	            return React.createElement(
	                'div',
	                { className: headerWrapClassName, style: _headerStyle },
	                React.createElement(
	                    'div',
	                    { className: props.jsxprefixCls },
	                    me.renderItems(_columns),
	                    _picker
	                )
	            );
	        }
	    }]);
	
	    return Header;
	})(React.Component);
	
	;
	
	Header.propTypes = {};
	
	Header.defaultProps = {
	    jsxprefixCls: "kuma-uxtable-header"
	};
	
	module.exports = Header;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A checkbox field
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Const = __webpack_require__(7);
	
	var CheckBox = (function (_React$Component) {
	    _inherits(CheckBox, _React$Component);
	
	    function CheckBox(props) {
	        _classCallCheck(this, CheckBox);
	
	        _get(Object.getPrototypeOf(CheckBox.prototype), 'constructor', this).call(this, props);
	    }
	
	    _createClass(CheckBox, [{
	        key: 'handleChange',
	        value: function handleChange(e) {
	            var v = this.getValue();
	            v = v ? 'checked' : '';
	            this.props.onchange.apply(null, [e]);
	        }
	    }, {
	        key: 'getValue',
	        value: function getValue() {
	            return this.refs.checkbox.checked;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            var props = this.props;
	
	            if (props.mode !== Const.MODE.VIEW) {
	                var renderProps = {
	                    className: "kuma-checkbox",
	                    checked: this.props.jsxchecked,
	                    onChange: this.handleChange.bind(this)
	                };
	                if (!!props.disable) {
	                    renderProps.disabled = true;
	                }
	                return React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', _extends({ type: 'checkbox', ref: 'checkbox' }, renderProps)),
	                    React.createElement('s', null)
	                );
	            } else {
	
	                var renderProps = {
	                    className: "kuma-checkbox",
	                    checked: this.props.jsxchecked,
	                    disabled: true
	                };
	                return React.createElement(
	                    'label',
	                    null,
	                    React.createElement('input', _extends({ type: 'checkbox', ref: 'checkbox' }, renderProps)),
	                    React.createElement('s', null)
	                );
	            }
	        }
	    }]);
	
	    return CheckBox;
	})(React.Component);
	
	;
	
	CheckBox.propTypes = {};
	
	CheckBox.defaultProps = {};
	
	exports['default'] = CheckBox;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Const Component for uxcore
	 * @author zhouquan.yezq
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	module.exports = __webpack_require__(8);

/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Const Component for uxcore
	 * @author zhouquan.yezq
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	var Const = {
	  MODE: {
	    VIEW: 'view',
	    EDIT: 'edit'
	  },
	  ENV: {
	    DEBUG: 'debug',
	    LIVE: 'live'
	  }
	};
	
	module.exports = Const;

/***/ },
/* 9 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Tree Component for uxcore
	 * @author 
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	module.exports = __webpack_require__(11);

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _objectAssign = __webpack_require__(12);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _rcTree = __webpack_require__(13);
	
	var _rcTree2 = _interopRequireDefault(_rcTree);
	
	var Tree = (function (_RcTree) {
	    _inherits(Tree, _RcTree);
	
	    function Tree(props) {
	        _classCallCheck(this, Tree);
	
	        _get(Object.getPrototypeOf(Tree.prototype), 'constructor', this).call(this, props);
	    }
	
	    return Tree;
	})(_rcTree2['default']);
	
	Tree.displayName = 'Tree';
	Tree.propTypes = _rcTree2['default'].propTypes;
	Tree.defaultProps = (0, _objectAssign2['default'])(_rcTree2['default'].defaultProps, {
	    prefixCls: 'kuma-tree',
	    showIcon: false
	});
	
	Tree.TreeNode = _rcTree2['default'].TreeNode;
	
	exports['default'] = Tree;
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _Tree = __webpack_require__(14);
	
	var _Tree2 = _interopRequireDefault(_Tree);
	
	var _TreeNode = __webpack_require__(38);
	
	var _TreeNode2 = _interopRequireDefault(_TreeNode);
	
	_Tree2['default'].TreeNode = _TreeNode2['default'];
	
	exports['default'] = _Tree2['default'];
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x2, _x3, _x4) {
	  var _again = true;_function: while (_again) {
	    var object = _x2,
	        property = _x3,
	        receiver = _x4;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x2 = parent;_x3 = property;_x4 = receiver;_again = true;desc = parent = undefined;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(16);
	
	// sorted array ['0-0','0-1', '0-0-1', '0-1-1'] => ['0-0', '0-1']
	var filterMin = function filterMin(arr) {
	  var a = [];
	  arr.forEach(function (item) {
	    var b = a.filter(function (i) {
	      return item.indexOf(i) === 0;
	    });
	    if (!b.length) {
	      a.push(item);
	    }
	  });
	  return a;
	};
	
	var Tree = (function (_React$Component) {
	  _inherits(Tree, _React$Component);
	
	  function Tree(props) {
	    var _this = this;
	
	    _classCallCheck(this, Tree);
	
	    _get(Object.getPrototypeOf(Tree.prototype), 'constructor', this).call(this, props);
	    ['handleKeyDown', 'handleCheck'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	    this.defaultExpandAll = props.defaultExpandAll;
	    var expandedKeys = props.defaultExpandedKeys;
	    var checkedKeys = props.defaultCheckedKeys;
	    if ('checkedKeys' in props) {
	      checkedKeys = props.checkedKeys || [];
	    }
	    var selectedKeys = props.multiple ? [].concat(_toConsumableArray(props.defaultSelectedKeys)) : [props.defaultSelectedKeys[0]];
	    if ('selectedKeys' in props) {
	      selectedKeys = props.multiple ? [].concat(_toConsumableArray(props.selectedKeys)) : [props.selectedKeys[0]];
	    }
	    this.state = {
	      expandedKeys: expandedKeys,
	      checkedKeys: checkedKeys,
	      selectedKeys: selectedKeys
	    };
	    this.contextmenuKeys = [];
	  }
	
	  _createClass(Tree, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var props = {};
	      if ('checkedKeys' in nextProps) {
	        props.checkedKeys = nextProps.checkedKeys;
	      }
	      if ('selectedKeys' in nextProps) {
	        props.selectedKeys = nextProps.multiple ? nextProps.selectedKeys : [nextProps.selectedKeys[0]];
	      }
	      this.setState(props);
	    }
	  }, {
	    key: 'getCheckKeys',
	    value: function getCheckKeys() {
	      var _this2 = this;
	
	      var checkPartKeys = [];
	      var checkedKeys = [];
	      Object.keys(this.treeNodesChkStates).forEach(function (item) {
	        var itemObj = _this2.treeNodesChkStates[item];
	        if (itemObj.checked) {
	          checkedKeys.push(itemObj.key);
	        } else if (itemObj.checkPart) {
	          checkPartKeys.push(itemObj.key);
	        }
	      });
	      return {
	        checkPartKeys: checkPartKeys, checkedKeys: checkedKeys
	      };
	    }
	  }, {
	    key: 'getOpenTransitionName',
	    value: function getOpenTransitionName() {
	      var props = this.props;
	      var transitionName = props.openTransitionName;
	      var animationName = props.openAnimation;
	      if (!transitionName && typeof animationName === 'string') {
	        transitionName = props.prefixCls + '-open-' + animationName;
	      }
	      return transitionName;
	    }
	  }, {
	    key: 'loopAllChildren',
	    value: function loopAllChildren(childs, callback) {
	      var loop = function loop(children, level) {
	        _react2['default'].Children.forEach(children, function (item, index) {
	          var pos = level + '-' + index;
	          var newChildren = item.props.children;
	          if (newChildren) {
	            if (!Array.isArray(newChildren)) {
	              newChildren = [newChildren];
	            }
	            loop(newChildren, pos);
	          }
	          callback(item, index, pos);
	        });
	      };
	      loop(childs, 0);
	    }
	  }, {
	    key: 'handleCheckState',
	    value: function handleCheckState(obj, checkedArr, unCheckEvent) {
	      var evt = false;
	      if (typeof unCheckEvent === 'boolean') {
	        evt = true;
	      }
	      var splitPos = function splitPos(pos) {
	        return pos.split('-');
	      };
	      // stripTail('x-xx-sss-xx')
	      var stripTail = function stripTail(str) {
	        var arr = str.match(/(.+)(-[^-]+)$/);
	        var st = '';
	        if (arr && arr.length === 3) {
	          st = arr[1];
	        }
	        return st;
	      };
	      checkedArr.forEach(function (_pos) {
	        Object.keys(obj).forEach(function (i) {
	          if (splitPos(i).length > splitPos(_pos).length && i.indexOf(_pos) === 0) {
	            obj[i].checkPart = false;
	            if (evt) {
	              if (unCheckEvent) {
	                obj[i].checked = false;
	              } else {
	                obj[i].checked = true;
	              }
	            } else {
	              obj[i].checked = true;
	            }
	          }
	        });
	        var loop = function loop(__pos) {
	          var _posLen = splitPos(__pos).length;
	          if (_posLen <= 2) {
	            return;
	          }
	          var sibling = 0;
	          var siblingChecked = 0;
	          var parentPos = stripTail(__pos);
	          Object.keys(obj).forEach(function (i) {
	            if (splitPos(i).length === _posLen && i.indexOf(parentPos) === 0) {
	              sibling++;
	              if (obj[i].checked) {
	                siblingChecked++;
	              } else if (obj[i].checkPart) {
	                siblingChecked += 0.5;
	              }
	            }
	          });
	          var parent = obj[parentPos];
	          // sibling 不会等于0
	          // 全不选 - 全选 - 半选
	          if (siblingChecked === 0) {
	            parent.checked = false;
	            parent.checkPart = false;
	          } else if (siblingChecked === sibling) {
	            parent.checked = true;
	            parent.checkPart = false;
	          } else {
	            parent.checkPart = true;
	            parent.checked = false;
	          }
	          loop(parentPos);
	        };
	        loop(_pos);
	      });
	    }
	  }, {
	    key: 'handleCheck',
	    value: function handleCheck(treeNode) {
	      var _this3 = this;
	
	      var tnProps = treeNode.props;
	      var checked = !tnProps.checked;
	      if (tnProps.checkPart) {
	        checked = true;
	      }
	      var pos = undefined;
	      Object.keys(this.treeNodesChkStates).forEach(function (item) {
	        var itemObj = _this3.treeNodesChkStates[item];
	        if (itemObj.key === (treeNode.key || tnProps.eventKey)) {
	          pos = item;
	          itemObj.checked = checked;
	          itemObj.checkPart = false;
	        }
	      });
	      this.handleCheckState(this.treeNodesChkStates, [pos], !checked);
	      var checkKeys = this.getCheckKeys();
	      this.checkPartKeys = checkKeys.checkPartKeys;
	      var checkedKeys = checkKeys.checkedKeys;
	      var newSt = {
	        event: 'check',
	        node: treeNode
	      };
	      if (!('checkedKeys' in this.props)) {
	        this.setState({
	          checkedKeys: checkedKeys
	        });
	        newSt.checked = checked;
	      } else {
	        checkedKeys = this.state.checkedKeys;
	      }
	      newSt.checkedKeys = checkedKeys;
	      if (this.props.onCheck) {
	        this.props.onCheck(newSt);
	      }
	    }
	  }, {
	    key: 'handleSelect',
	    value: function handleSelect(treeNode) {
	      var props = this.props;
	      var selectedKeys = [].concat(_toConsumableArray(this.state.selectedKeys));
	      var eventKey = treeNode.props.eventKey;
	      var index = selectedKeys.indexOf(eventKey);
	      var selected = undefined;
	      if (index !== -1) {
	        selected = false;
	        selectedKeys.splice(index, 1);
	      } else {
	        selected = true;
	        if (!props.multiple) {
	          selectedKeys.length = 0;
	        }
	        selectedKeys.push(eventKey);
	      }
	      var newSt = {
	        event: 'select',
	        node: treeNode
	      };
	      if (!('selectedKeys' in this.props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	        newSt.selected = selected;
	      } else {
	        selectedKeys = this.state.selectedKeys;
	      }
	      newSt.selectedKeys = selectedKeys;
	      if (props.onSelect) {
	        props.onSelect(newSt);
	      }
	    }
	  }, {
	    key: 'handleContextMenu',
	    value: function handleContextMenu(e, treeNode) {
	      var selectedKeys = [].concat(_toConsumableArray(this.state.selectedKeys));
	      var eventKey = treeNode.props.eventKey;
	      if (this.contextmenuKeys.indexOf(eventKey) === -1) {
	        this.contextmenuKeys.push(eventKey);
	      }
	      this.contextmenuKeys.forEach(function (key) {
	        var index = selectedKeys.indexOf(key);
	        if (index !== -1) {
	          selectedKeys.splice(index, 1);
	        }
	      });
	      if (selectedKeys.indexOf(eventKey) === -1) {
	        selectedKeys.push(eventKey);
	      }
	      this.setState({
	        selectedKeys: selectedKeys
	      });
	      this.props.onRightClick({ event: e, node: treeNode });
	    }
	  }, {
	    key: 'handleExpand',
	    value: function handleExpand(treeNode) {
	      var _this4 = this;
	
	      var thisProps = this.props;
	      var tnProps = treeNode.props;
	      var expandedKeys = this.state.expandedKeys.concat([]);
	      var expanded = !tnProps.expanded;
	      if (this.defaultExpandAll) {
	        this.loopAllChildren(thisProps.children, function (item, index, pos) {
	          var key = item.key || pos;
	          if (expandedKeys.indexOf(key) === -1) {
	            expandedKeys.push(key);
	          }
	        });
	        this.defaultExpandAll = false;
	      }
	      var index = expandedKeys.indexOf(tnProps.eventKey);
	      if (expanded) {
	        if (index === -1) {
	          expandedKeys.push(tnProps.eventKey);
	          if (thisProps.onDataLoaded) {
	            return thisProps.onDataLoaded(treeNode).then(function () {
	              _this4.setState({
	                expandedKeys: expandedKeys
	              });
	            })['catch'](function () {
	              // console.error('Something went wrong', reason);
	            });
	          }
	        }
	      } else {
	          expandedKeys.splice(index, 1);
	        }
	      this.setState({
	        expandedKeys: expandedKeys
	      });
	    }
	
	    // all keyboard events callbacks run from here at first
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(e) {
	      e.preventDefault();
	    }
	  }, {
	    key: 'renderTreeNode',
	    value: function renderTreeNode(child, index) {
	      var level = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
	
	      var key = child.key || level + '-' + index;
	      var state = this.state;
	      var props = this.props;
	      var cloneProps = {
	        ref: 'treeNode',
	        root: this,
	        eventKey: key,
	        pos: level + '-' + index,
	        onDataLoaded: props.onDataLoaded,
	        onRightClick: props.onRightClick,
	        prefixCls: props.prefixCls,
	        showLine: props.showLine,
	        showIcon: props.showIcon,
	        checkable: props.checkable,
	        expanded: this.defaultExpandAll || state.expandedKeys.indexOf(key) !== -1,
	        selected: state.selectedKeys.indexOf(key) !== -1,
	        checked: this.checkedKeys.indexOf(key) !== -1,
	        checkPart: this.checkPartKeys.indexOf(key) !== -1,
	        openTransitionName: this.getOpenTransitionName(),
	        openAnimation: props.openAnimation
	      };
	      return _react2['default'].cloneElement(child, cloneProps);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this5 = this;
	
	      var props = this.props;
	      var domProps = {
	        className: (0, _rcUtil.classSet)(props.className, props.prefixCls),
	        role: 'tree-node'
	      };
	      if (props.focusable) {
	        domProps.tabIndex = '0';
	        domProps.onKeyDown = this.handleKeyDown;
	      }
	      var checkedKeys = this.state.checkedKeys;
	      var checkedPos = [];
	      this.treeNodesChkStates = {};
	      this.loopAllChildren(props.children, function (item, index, pos) {
	        var key = item.key || pos;
	        var checked = false;
	        if (checkedKeys.indexOf(key) !== -1) {
	          checked = true;
	          checkedPos.push(pos);
	        }
	        _this5.treeNodesChkStates[pos] = {
	          key: key,
	          checked: checked,
	          checkPart: false
	        };
	      });
	      this.handleCheckState(this.treeNodesChkStates, filterMin(checkedPos.sort()));
	      var checkKeys = this.getCheckKeys();
	      this.checkPartKeys = checkKeys.checkPartKeys;
	      this.checkedKeys = checkKeys.checkedKeys;
	      this.newChildren = _react2['default'].Children.map(props.children, this.renderTreeNode, this);
	      return _react2['default'].createElement('ul', _extends({}, domProps, { ref: 'tree' }), this.newChildren);
	    }
	  }]);
	
	  return Tree;
	})(_react2['default'].Component);
	
	Tree.propTypes = {
	  prefixCls: _react2['default'].PropTypes.string,
	  checkable: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool, _react2['default'].PropTypes.node]),
	  multiple: _react2['default'].PropTypes.bool,
	  showLine: _react2['default'].PropTypes.bool,
	  showIcon: _react2['default'].PropTypes.bool,
	  defaultExpandAll: _react2['default'].PropTypes.bool,
	  defaultExpandedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	  checkedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	  defaultCheckedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	  selectedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	  defaultSelectedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	  onCheck: _react2['default'].PropTypes.func,
	  onSelect: _react2['default'].PropTypes.func,
	  onDataLoaded: _react2['default'].PropTypes.func,
	  onRightClick: _react2['default'].PropTypes.func,
	  openTransitionName: _react2['default'].PropTypes.string,
	  openAnimation: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.object])
	};
	
	Tree.defaultProps = {
	  prefixCls: 'rc-tree',
	  multiple: false,
	  checkable: false,
	  showLine: false,
	  showIcon: true,
	  defaultExpandAll: false,
	  defaultExpandedKeys: [],
	  defaultCheckedKeys: [],
	  defaultSelectedKeys: []
	};
	
	exports['default'] = Tree;
	module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  guid: __webpack_require__(17),
	  classSet: __webpack_require__(18),
	  joinClasses: __webpack_require__(20),
	  KeyCode: __webpack_require__(21),
	  PureRenderMixin: __webpack_require__(22),
	  shallowEqual: __webpack_require__(23),
	  createChainedFunction: __webpack_require__(28),
	  Dom: {
	    addEventListener: __webpack_require__(29),
	    contains: __webpack_require__(35)
	  },
	  Children: {
	    toArray: __webpack_require__(36),
	    mapSelf: __webpack_require__(37)
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	var seed = 0;
	module.exports = function guid() {
	  return Date.now() + '_' + seed++;
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var deprecate = __webpack_require__(19);
	var classNames = __webpack_require__(2);
	
	module.exports = deprecate(classNames, '`rcUtil.classSet()` is deprecated, use `classNames()` by `require(\'classnames\')` instead');

/***/ },
/* 19 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module exports.
	 */
	
	'use strict';
	
	module.exports = deprecate;
	
	/**
	 * Mark that a method should not be used.
	 * Returns a modified function which warns once by default.
	 *
	 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
	 *
	 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
	 * will throw an Error when invoked.
	 *
	 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
	 * will invoke `console.trace()` instead of `console.error()`.
	 *
	 * @param {Function} fn - the function to deprecate
	 * @param {String} msg - the string to print to the console when `fn` is invoked
	 * @returns {Function} a new "deprecated" version of `fn`
	 * @api public
	 */
	
	function deprecate(fn, msg) {
	  if (config('noDeprecation')) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (config('throwDeprecation')) {
	        throw new Error(msg);
	      } else if (config('traceDeprecation')) {
	        console.trace(msg);
	      } else {
	        console.warn(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	}
	
	/**
	 * Checks `localStorage` for boolean values for the given `name`.
	 *
	 * @param {String} name
	 * @returns {Boolean}
	 * @api private
	 */
	
	function config(name) {
	  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
	  try {
	    if (!global.localStorage) return false;
	  } catch (_) {
	    return false;
	  }
	  var val = global.localStorage[name];
	  if (null == val) return false;
	  return String(val).toLowerCase() === 'true';
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var deprecate = __webpack_require__(19);
	var classNames = __webpack_require__(2);
	
	module.exports = deprecate(classNames, '`rcUtil.joinClasses()` is deprecated, use `classNames()` by `require(\'classnames\')` instead');

/***/ },
/* 21 */
/***/ function(module, exports) {

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shallowEqual = __webpack_require__(23);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   const ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fetchKeys = __webpack_require__(24);
	
	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	
	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	    if (ret !== void 0) {
	        return !!ret;
	    }
	
	    if (objA === objB) {
	        return true;
	    }
	
	    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	        return false;
	    }
	
	    var keysA = fetchKeys(objA);
	    var keysB = fetchKeys(objB);
	
	    var len = keysA.length;
	    if (len !== keysB.length) {
	        return false;
	    }
	
	    compareContext = compareContext || null;
	
	    // Test for A's keys different from B.
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	    for (var i = 0; i < len; i++) {
	        var key = keysA[i];
	        if (!bHasOwnProperty(key)) {
	            return false;
	        }
	        var valueA = objA[key];
	        var valueB = objB[key];
	
	        var _ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	        if (_ret === false || _ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	    }
	
	    return true;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	'use strict';
	
	var getNative = __webpack_require__(25),
	    isArguments = __webpack_require__(26),
	    isArray = __webpack_require__(27);
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = typeof value == 'number' || reIsUint.test(value) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if (allowIndexes && isIndex(key, length) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function (object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if (typeof Ctor == 'function' && Ctor.prototype === object || typeof object != 'function' && isArrayLike(object)) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = length && isLength(length) && (isArray(object) || isArguments(object)) && length || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = index + '';
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keys;

/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	'use strict';
	
	var funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = getNative;

/***/ },
/* 26 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.7 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as references for various `Number` constants. */
	'use strict';
	
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isArguments;

/***/ },
/* 27 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	'use strict';
	
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function (value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isArray;

/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	"use strict";
	
	function createChainedFunction() {
	  var args = arguments;
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}
	
	module.exports = createChainedFunction;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListenerWrap;
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _addDomEventListener = __webpack_require__(30);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
	    _reactDom2['default'].unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2['default'])(target, eventType, callback);
	}
	
	module.exports = exports['default'];

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListener;
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _EventObject = __webpack_require__(31);
	
	var _EventObject2 = _interopRequireDefault(_EventObject);
	
	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2['default'](e);
	    callback.call(target, ne);
	  }
	
	  if (target.addEventListener) {
	    target.addEventListener(eventType, wrapCallback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, wrapCallback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _EventBaseObject = __webpack_require__(32);
	
	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);
	
	var _objectAssign = __webpack_require__(33);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];
	
	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}
	
	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }
	
	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = undefined;
	    var deltaY = undefined;
	    var delta = undefined;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;
	
	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }
	
	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }
	
	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }
	
	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }
	
	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }
	
	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }
	
	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }
	
	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = undefined;
	    var doc = undefined;
	    var body = undefined;
	    var target = event.target;
	    var button = nativeEvent.button;
	
	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }
	
	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }
	
	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }
	
	    return event;
	  }
	}];
	
	function retTrue() {
	  return TRUE;
	}
	
	function retFalse() {
	  return FALSE;
	}
	
	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;
	
	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';
	
	  _EventBaseObject2['default'].call(this);
	
	  this.nativeEvent = nativeEvent;
	
	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }
	
	  this.isDefaultPrevented = isDefaultPrevented;
	
	  var fixFns = [];
	  var fixFn = undefined;
	  var l = undefined;
	  var prop = undefined;
	  var props = commonProps.concat();
	
	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });
	
	  l = props.length;
	
	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }
	
	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }
	
	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }
	
	  l = fixFns.length;
	
	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }
	
	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}
	
	var EventBaseObjectProto = _EventBaseObject2['default'].prototype;
	
	(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,
	
	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;
	
	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }
	
	    EventBaseObjectProto.preventDefault.call(this);
	  },
	
	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;
	
	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }
	
	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});
	
	exports['default'] = DomEventObject;
	module.exports = exports['default'];

/***/ },
/* 32 */
/***/ function(module, exports) {

	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function returnFalse() {
	  return false;
	}
	
	function returnTrue() {
	  return true;
	}
	
	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}
	
	EventBaseObject.prototype = {
	  isEventObject: 1,
	
	  constructor: EventBaseObject,
	
	  isDefaultPrevented: returnFalse,
	
	  isPropagationStopped: returnFalse,
	
	  isImmediatePropagationStopped: returnFalse,
	
	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },
	
	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },
	
	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },
	
	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};
	
	exports["default"] = EventBaseObject;
	module.exports = exports["default"];

/***/ },
/* 33 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 35 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(15);
	
	module.exports = function toArray(children) {
	  var ret = [];
	  React.Children.forEach(children, function each(c) {
	    ret.push(c);
	  });
	  return ret;
	};

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(15);
	
	function mirror(o) {
	  return o;
	}
	
	module.exports = function mapSelf(children) {
	  // return ReactFragment
	  return React.Children.map(children, mirror);
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(16);
	
	var _rcAnimate = __webpack_require__(39);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _objectAssign = __webpack_require__(33);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var defaultTitle = '---';
	
	var TreeNode = (function (_React$Component) {
	  _inherits(TreeNode, _React$Component);
	
	  function TreeNode(props) {
	    var _this = this;
	
	    _classCallCheck(this, TreeNode);
	
	    _get(Object.getPrototypeOf(TreeNode.prototype), 'constructor', this).call(this, props);
	    ['handleExpand', 'handleCheck', 'handleContextMenu'].forEach(function (m) {
	      _this[m] = _this[m].bind(_this);
	    });
	    this.state = {
	      dataLoading: false
	    };
	  }
	
	  _createClass(TreeNode, [{
	    key: 'getPosition',
	    value: function getPosition(pos) {
	      var obj = {
	        last: false,
	        center: false
	      };
	      var siblings = Object.keys(this.props.root.treeNodesChkStates).filter(function (item) {
	        var len = pos.length;
	        return len === item.length && pos.substring(0, len - 2) === item.substring(0, len - 2);
	      });
	      var sLen = siblings.length;
	      var posIndex = Number(pos.substr(-1, 1));
	      if (sLen === 1 || posIndex === sLen - 1) {
	        obj.last = true;
	      } else {
	        obj.center = true;
	      }
	      return obj;
	    }
	  }, {
	    key: 'handleCheck',
	    value: function handleCheck() {
	      this.props.root.handleCheck(this);
	    }
	  }, {
	    key: 'handleSelect',
	    value: function handleSelect() {
	      this.props.root.handleSelect(this);
	    }
	  }, {
	    key: 'handleContextMenu',
	    value: function handleContextMenu(e) {
	      e.preventDefault();
	      this.props.root.handleContextMenu(e, this);
	    }
	  }, {
	    key: 'handleExpand',
	    value: function handleExpand() {
	      var _this2 = this;
	
	      var callbackPromise = this.props.root.handleExpand(this);
	      if (callbackPromise && typeof callbackPromise === 'object') {
	        (function () {
	          var setLoading = function setLoading(dataLoading) {
	            _this2.setState({
	              dataLoading: dataLoading
	            });
	          };
	          setLoading(true);
	          callbackPromise.then(function () {
	            setLoading(false);
	          }, function () {
	            setLoading(false);
	          });
	        })();
	      }
	    }
	
	    // keyboard event support
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(e) {
	      e.preventDefault();
	    }
	  }, {
	    key: 'renderSwitcher',
	    value: function renderSwitcher(props, expandedState) {
	      var prefixCls = props.prefixCls;
	      var switcherCls = _defineProperty({}, prefixCls + '-switcher', true);
	      if (props.disabled) {
	        switcherCls[prefixCls + '-switcher-disabled'] = true;
	        return _react2['default'].createElement('span', { className: (0, _rcUtil.classSet)(switcherCls) });
	      }
	
	      var posObj = this.getPosition(props.pos);
	
	      if (!props.showLine) {
	        switcherCls[prefixCls + '-noline_' + expandedState] = true;
	      } else if (props.pos === '0-0') {
	        switcherCls[prefixCls + '-roots_' + expandedState] = true;
	      } else {
	        switcherCls[prefixCls + '-center_' + expandedState] = posObj.center;
	        switcherCls[prefixCls + '-bottom_' + expandedState] = posObj.last;
	      }
	      return _react2['default'].createElement('span', { className: (0, _rcUtil.classSet)(switcherCls), onClick: this.handleExpand });
	    }
	  }, {
	    key: 'renderCheckbox',
	    value: function renderCheckbox(props) {
	      var prefixCls = props.prefixCls;
	      var checkboxCls = _defineProperty({}, prefixCls + '-checkbox', true);
	      if (props.checkPart) {
	        checkboxCls[prefixCls + '-checkbox-indeterminate'] = true;
	      } else if (props.checked) {
	        checkboxCls[prefixCls + '-checkbox-checked'] = true;
	      }
	      var customEle = null;
	      if (typeof props.checkable !== 'boolean') {
	        customEle = props.checkable;
	      }
	      if (props.disabled) {
	        checkboxCls[prefixCls + '-checkbox-disabled'] = true;
	        return _react2['default'].createElement('span', { ref: 'checkbox', className: (0, _rcUtil.classSet)(checkboxCls) }, customEle);
	      }
	      return _react2['default'].createElement('span', { ref: 'checkbox', className: (0, _rcUtil.classSet)(checkboxCls), onClick: this.handleCheck }, customEle);
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren(props) {
	      var renderFirst = this.renderFirst;
	      this.renderFirst = 1;
	      var transitionAppear = true;
	      if (!renderFirst && props.expanded) {
	        transitionAppear = false;
	      }
	      var children = props.children;
	      var newChildren = children;
	      if (!children) {
	        return children;
	      }
	      if (children.type === TreeNode || Array.isArray(children) && children.every(function (item) {
	        return item.type === TreeNode;
	      })) {
	        var _cls;
	
	        var cls = (_cls = {}, _defineProperty(_cls, props.prefixCls + '-child-tree', true), _defineProperty(_cls, props.prefixCls + '-child-tree-open', props.expanded), _cls);
	        if (props.showLine) {
	          cls[props.prefixCls + '-line'] = this.getPosition(props.pos).center;
	        }
	        var animProps = {};
	        if (props.openTransitionName) {
	          animProps.transitionName = props.openTransitionName;
	        } else if (typeof props.openAnimation === 'object') {
	          animProps.animation = (0, _objectAssign2['default'])({}, props.openAnimation);
	          if (!transitionAppear) {
	            delete animProps.animation.appear;
	          }
	        }
	        newChildren = this.newChildren = _react2['default'].createElement(_rcAnimate2['default'], _extends({}, animProps, {
	          showProp: 'expanded',
	          transitionAppear: transitionAppear,
	          component: '' }), _react2['default'].createElement('ul', { className: (0, _rcUtil.classSet)(cls), expanded: props.expanded }, _react2['default'].Children.map(children, function (item, index) {
	          return props.root.renderTreeNode(item, index, props.pos);
	        }, props.root)));
	      }
	      return newChildren;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _iconEleCls,
	          _this3 = this;
	
	      var props = this.props;
	      var prefixCls = props.prefixCls;
	      var expandedState = props.expanded ? 'open' : 'close';
	
	      var iconEleCls = (_iconEleCls = {}, _defineProperty(_iconEleCls, prefixCls + '-iconEle', true), _defineProperty(_iconEleCls, prefixCls + '-icon_loading', this.state.dataLoading), _defineProperty(_iconEleCls, prefixCls + '-icon__' + expandedState, true), _iconEleCls);
	
	      var canRenderSwitcher = true;
	      var content = props.title;
	      var newChildren = this.renderChildren(props);
	      if (!newChildren || newChildren === props.children) {
	        // content = newChildren;
	        newChildren = null;
	        if (!props.onDataLoaded) {
	          canRenderSwitcher = false;
	        }
	      }
	
	      var selectHandle = function selectHandle() {
	        var icon = props.showIcon || props.onDataLoaded && _this3.state.dataLoading ? _react2['default'].createElement('span', { className: (0, _rcUtil.classSet)(iconEleCls) }) : null;
	        var title = _react2['default'].createElement('span', { className: prefixCls + '-title' }, content);
	        var domProps = {};
	        if (!props.disabled) {
	          if (props.selected) {
	            domProps.className = prefixCls + '-node-selected';
	          }
	          domProps.onClick = function () {
	            _this3.handleSelect();
	            if (props.checkable) {
	              _this3.handleCheck();
	            }
	          };
	          if (props.onRightClick) {
	            domProps.onContextMenu = _this3.handleContextMenu;
	          }
	        }
	        return _react2['default'].createElement('a', _extends({ ref: 'selectHandle', title: content }, domProps), icon, title);
	      };
	
	      return _react2['default'].createElement('li', { className: (0, _rcUtil.joinClasses)(props.className, props.disabled ? prefixCls + '-treenode-disabled' : '') }, canRenderSwitcher ? this.renderSwitcher(props, expandedState) : _react2['default'].createElement('span', { className: prefixCls + '-switcher-noop' }), props.checkable ? this.renderCheckbox(props) : null, selectHandle(), newChildren);
	    }
	  }]);
	
	  return TreeNode;
	})(_react2['default'].Component);
	
	TreeNode.propTypes = {
	  prefixCls: _react2['default'].PropTypes.string,
	  expanded: _react2['default'].PropTypes.bool,
	  root: _react2['default'].PropTypes.object,
	  onSelect: _react2['default'].PropTypes.func
	};
	TreeNode.defaultProps = {
	  title: defaultTitle
	};
	
	exports['default'] = TreeNode;
	module.exports = exports['default'];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	module.exports = __webpack_require__(40);

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ChildrenUtils = __webpack_require__(41);
	
	var _AnimateChild = __webpack_require__(42);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(46);
	
	var _util2 = _interopRequireDefault(_util);
	
	var defaultKey = 'rc_animate_' + Date.now();
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2['default'].isValidElement(children)) {
	    if (!children.key) {
	      return _react2['default'].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var Animate = _react2['default'].createClass({
	  displayName: 'Animate',
	
	  propTypes: {
	    component: _react2['default'].PropTypes.any,
	    animation: _react2['default'].PropTypes.object,
	    transitionName: _react2['default'].PropTypes.string,
	    transitionEnter: _react2['default'].PropTypes.bool,
	    transitionAppear: _react2['default'].PropTypes.bool,
	    exclusive: _react2['default'].PropTypes.bool,
	    transitionLeave: _react2['default'].PropTypes.bool,
	    onEnd: _react2['default'].PropTypes.func,
	    onEnter: _react2['default'].PropTypes.func,
	    onLeave: _react2['default'].PropTypes.func,
	    onAppear: _react2['default'].PropTypes.func,
	    showProp: _react2['default'].PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: {},
	      component: 'span',
	      transitionEnter: true,
	      transitionLeave: true,
	      transitionAppear: false,
	      onEnd: noop,
	      onEnter: noop,
	      onLeave: noop,
	      onAppear: noop
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    this.currentlyAnimatingKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    return {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props))
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      _this.performAppear(child.key);
	    });
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this2.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = undefined;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2['default'].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }
	
	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildren.forEach(function (child) {
	      var key = child.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this2.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this2.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this2.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (child) {
	      var key = child.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this2.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this2.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this2.keysToLeave.push(key);
	      }
	    });
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.isMounted()) {
	      var keysToEnter = this.keysToEnter;
	      this.keysToEnter = [];
	      keysToEnter.forEach(this.performEnter);
	      var keysToLeave = this.keysToLeave;
	      this.keysToLeave = [];
	      keysToLeave.forEach(this.performLeave);
	    }
	  },
	
	  performEnter: function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  },
	
	  performAppear: function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  },
	
	  handleDoneAdding: function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2['default'].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2['default'].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  },
	
	  performLeave: function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  },
	
	  handleDoneLeaving: function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      if (_util2['default'].allowLeaveCallback(props)) {
	        props.onLeave(key);
	        props.onEnd(key, false);
	      }
	      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        });
	      }
	    }
	  },
	
	  isValidChildByKey: function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  },
	
	  stop: function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  },
	
	  render: function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2['default'].createElement(_AnimateChild2['default'], {
	          key: child.key,
	          ref: child.key,
	          animation: props.animation,
	          transitionName: props.transitionName,
	          transitionEnter: props.transitionEnter,
	          transitionAppear: props.transitionAppear,
	          transitionLeave: props.transitionLeave }, child);
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      return _react2['default'].createElement(Component, this.props, children);
	    }
	    return children[0] || null;
	  }
	});
	
	exports['default'] = Animate;
	module.exports = exports['default'];

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	function toArrayChildren(children) {
	  var ret = [];
	  _react2['default'].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}
	
	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}
	
	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child.key !== child2.key) {
	        same = false;
	      } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	        same = false;
	      }
	    });
	  }
	  return same;
	}
	
	function mergeChildren(prev, next) {
	  var ret = [];
	
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });
	
	  next.forEach(function (child) {
	    if (nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });
	
	  ret = ret.concat(pendingChildren);
	
	  return ret;
	}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _cssAnimation = __webpack_require__(43);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	var _util = __webpack_require__(46);
	
	var _util2 = _interopRequireDefault(_util);
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var AnimateChild = _react2['default'].createClass({
	  displayName: 'AnimateChild',
	
	  propTypes: {
	    children: _react2['default'].PropTypes.any
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.stop();
	  },
	
	  componentWillEnter: function componentWillEnter(done) {
	    if (_util2['default'].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillAppear: function componentWillAppear(done) {
	    if (_util2['default'].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function componentWillLeave(done) {
	    if (_util2['default'].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      done();
	    }
	  },
	
	  transition: function transition(animationType, finishCallback) {
	    var _this = this;
	
	    var node = _reactDom2['default'].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    this.stop();
	    var end = function end() {
	      _this.stopper = null;
	      finishCallback();
	    };
	    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      this.stopper = (0, _cssAnimation2['default'])(node, transitionName + '-' + animationType, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  },
	
	  stop: function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  },
	
	  render: function render() {
	    return this.props.children;
	  }
	});
	
	exports['default'] = AnimateChild;
	module.exports = exports['default'];

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Event = __webpack_require__(44);
	var Css = __webpack_require__(45);
	var isCssAnimationSupported = Event.endEvents.length !== 0;
	
	function getDuration(node, name) {
	  var style = window.getComputedStyle(node);
	  var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDuration = parseFloat(getDuration(node, 'transition-duration')) || 0;
	    var animationDuration = parseFloat(getDuration(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration, animationDuration);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, callback) {
	  var className = transitionName;
	  var activeClassName = className + '-active';
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    Css.removeClass(node, className);
	    Css.removeClass(node, activeClassName);
	
	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  Event.addEndEventListener(node, node.rcEndListener);
	
	  Css.addClass(node, className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    Css.addClass(node, activeClassName);
	    fixBrowserByTimeout(node);
	  }, 0);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  Event.addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  ['Webkit', 'Moz', 'O',
	  // ms is special .... !
	  'ms'].forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.addClass = Css.addClass;
	cssAnimation.removeClass = Css.removeClass;
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	module.exports = cssAnimation;

/***/ },
/* 44 */
/***/ function(module, exports) {

	'use strict';
	
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = TransitionEvents;

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';
	
	var SPACE = ' ';
	var RE_CLASS = /[\n\t\r]/g;
	
	function norm(elemClass) {
	  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
	}
	
	module.exports = {
	  addClass: function addClass(elem, className) {
	    elem.className += ' ' + className;
	  },
	
	  removeClass: function removeClass(elem, n) {
	    var elemClass = elem.className.trim();
	    var className = norm(elemClass);
	    var needle = n.trim();
	    needle = SPACE + needle + SPACE;
	    // 一个 cls 有可能多次出现：'link link2 link link3 link'
	    while (className.indexOf(needle) >= 0) {
	      className = className.replace(needle, SPACE);
	    }
	    elem.className = className.trim();
	  }
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports["default"];

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by xy on 15/4/13.
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Row = __webpack_require__(48);
	var Mask = __webpack_require__(142);
	var util = __webpack_require__(143);
	var deepcopy = __webpack_require__(130);
	
	var Tbody = (function (_React$Component) {
	    _inherits(Tbody, _React$Component);
	
	    function Tbody(props) {
	        _classCallCheck(this, Tbody);
	
	        _get(Object.getPrototypeOf(Tbody.prototype), "constructor", this).call(this, props);
	        this.state = {};
	    }
	
	    _createClass(Tbody, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            var me = this;
	            me.rootEl = ReactDOM.findDOMNode(me.refs.root);
	            me.scrollHandler = me.onScroll.bind(me);
	            $(me.rootEl).on("scroll", me.scrollHandler);
	        }
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            var me = this;
	            me.resizeTimer = null;
	            $(me.rootEl).off("scroll", me.scrollHandler);
	        }
	    }, {
	        key: "renderEmptyData",
	        value: function renderEmptyData() {
	
	            if (this.props.data.length == 0 && !this.props.mask) {
	                var _style = {
	                    lineHeight: this.props.height - 10 + "px"
	                };
	                return React.createElement(
	                    "div",
	                    { className: "kuma-uxtable-body-emptyword", style: _style },
	                    this.props.root.props.emptyText
	                );
	            }
	        }
	    }, {
	        key: "onScroll",
	        value: function onScroll(e) {
	            // TODO: remove jquery animation
	            //       merge classname scroll/no/fixed
	
	            this.el = ReactDOM.findDOMNode(this);
	            var $tableEl = $(this.el).parents(".kuma-uxtable");
	            if (this.props.fixedColumn == 'no') {
	                $tableEl.find('.kuma-uxtable-header-no').animate({ scrollLeft: $tableEl.find('.kuma-uxtable-body-no').scrollLeft() }, 0);
	                return;
	            }
	
	            var target = $(e.target);
	            if (target.hasClass('kuma-uxtable-body-scroll')) {
	
	                $tableEl.find('.kuma-uxtable-body-fixed').animate({ scrollTop: $tableEl.find('.kuma-uxtable-body-scroll').scrollTop() }, 0);
	                $tableEl.find('.kuma-uxtable-header-scroll').animate({ scrollLeft: $tableEl.find('.kuma-uxtable-body-scroll').scrollLeft() }, 0);
	            } else {
	                $tableEl.find('.kuma-uxtable-body-scroll').animate({ scrollTop: $tableEl.find('.kuma-uxtable-body-fixed').scrollTop() }, 0);
	            }
	        }
	    }, {
	        key: "render",
	        value: function render() {
	
	            var me = this,
	                _props = me.props,
	                _columns = _props.columns,
	                _data = _props.data.length > 0 ? _props.data : [],
	                _style = {},
	                _width = 0,
	                bodyWrapClassName = undefined;
	
	            if (_props.fixedColumn == 'fixed') {
	                _columns = _props.columns.filter(function (item) {
	                    if (item.fixed && !item.hidden) {
	                        if (!item.width) {
	                            item.width = 100;
	                        }
	                        _width = item.width * 1 + _width;
	                        return true;
	                    }
	                });
	                _style = {
	                    width: _width,
	                    minWidth: _width
	                };
	                bodyWrapClassName = "kuma-uxtable-body-fixed";
	            } else if (_props.fixedColumn == 'scroll') {
	                var fixedWidth = 0;
	                _columns = _props.columns.filter(function (item) {
	                    if (!item.fixed) {
	                        return true;
	                    } else if (!item.hidden) {
	                        if (!item.width) {
	                            item.width = 100;
	                        }
	                        _width = item.width * 1 + _width;
	                    }
	                });
	
	                // content-box: border-box
	                var delta = 2;
	                if (util.isIE(8)) {
	                    delta = 3;
	                }
	                _style = {
	                    width: _props.width - _width - delta, //change 2 to 3, fix ie8 issue
	                    minWidth: _props.width - _width - delta
	                };
	                bodyWrapClassName = "kuma-uxtable-body-scroll";
	            } else {
	                bodyWrapClassName = "kuma-uxtable-body-no";
	            }
	            return React.createElement(
	                "div",
	                { className: bodyWrapClassName, ref: "root", style: _style },
	                React.createElement(
	                    "ul",
	                    { className: this.props.jsxprefixCls },
	                    this.renderEmptyData(),
	                    _data.map(function (item, index) {
	                        var renderProps = {
	                            columns: _columns,
	                            rowIndex: item.jsxid, //tree mode, rowIndex need think more, so use jsxid
	                            rowData: deepcopy(_data[index]),
	                            index: index,
	                            data: _data,
	                            root: _props.root,
	                            addRowClassName: _props.addRowClassName,
	                            rowSelection: _props.rowSelection,
	                            changeSelected: me.props.changeSelected,
	                            subComp: _props.subComp,
	                            actions: _props.actions,
	                            key: 'row' + index,
	                            mode: _props.mode,
	                            renderModel: _props.renderModel,
	                            fixedColumn: _props.fixedColumn,
	                            level: 1,
	                            levels: _props.levels,
	                            handleDataChange: _props.handleDataChange,
	                            attachCellField: _props.attachCellField,
	                            detachCellField: _props.detachCellField,
	                            visible: true
	                        };
	                        return React.createElement(Row, renderProps);
	                    }),
	                    React.createElement(Mask, { visible: _props.mask })
	                )
	            );
	        }
	    }]);
	
	    return Tbody;
	})(React.Component);
	
	;
	
	Tbody.propTypes = {};
	
	Tbody.defaultProps = {
	    jsxprefixCls: "kuma-uxtable-body"
	};
	
	exports["default"] = Tbody;
	module.exports = exports["default"];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by xy on 15/4/13.
	 */
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Cell = __webpack_require__(49);
	var classnames = __webpack_require__(2);
	var assign = __webpack_require__(9);
	var Const = __webpack_require__(7);
	var deepEqual = __webpack_require__(139);
	var deepcopy = __webpack_require__(130);
	
	var Row = (function (_React$Component) {
	    _inherits(Row, _React$Component);
	
	    function Row(props) {
	        _classCallCheck(this, Row);
	
	        _get(Object.getPrototypeOf(Row.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            expanded: this.props.level < this.props.levels ? true : false
	        };
	    }
	
	    _createClass(Row, [{
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            // 需要考虑的 prop 包括
	            // columns, rowIndex(s), rowData, index(s), addRowClassName(f), rowSelection, subComp(f), actions
	            // mode(s), renderModel(s), fixedColumn(s), levels(s)
	            var me = this;
	            var shouldUpdate = false;
	            ['rowIndex', 'index', 'mode', 'renderModel', 'fixedColumn', 'levels', 'addRowClassName', 'subComp'].forEach(function (item) {
	                if (me.props[item] !== nextProps[item]) {
	                    shouldUpdate = true;
	                }
	            });
	            if (!shouldUpdate) {
	                ['columns', 'rowData', 'rowSelection', 'actions'].forEach(function (item, index) {
	                    if (!deepEqual(me.props[item], nextProps[item])) {
	                        shouldUpdate = true;
	                    }
	                });
	            };
	            if (!shouldUpdate) {
	                shouldUpdate = me.state.expanded !== nextState.expanded;
	            }
	            return shouldUpdate;
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(rowData) {
	            var me = this;
	        }
	    }, {
	        key: 'handleDoubleClick',
	        value: function handleDoubleClick(rowData) {
	            var table = this.props.root;
	            if (table.props.doubleClickToEdit) {
	                table.editRow(deepcopy(rowData));
	            }
	        }
	    }, {
	        key: 'showSubCompFunc',
	        value: function showSubCompFunc() {
	            var me = this;
	            me.props.root.toggleSubComp(me.props.rowData);
	        }
	    }, {
	        key: 'renderSubComp',
	        value: function renderSubComp() {
	            var props = this.props;
	            if (props.subComp && props.level == 1 && props.renderModel !== 'tree') {
	                if (props.rowData.showSubComp) {
	                    var subComp = React.cloneElement(props.subComp, {
	                        passedData: this.props.rowData,
	                        parentHasCheckbox: !!this.props.rowSelection
	                    });
	                    return React.createElement(
	                        'div',
	                        { className: 'kuma-uxtable-subrow', ref: 'subRow' },
	                        subComp
	                    );
	                }
	                return false;
	            } else {
	                return false;
	            }
	        }
	    }, {
	        key: 'renderChild',
	        value: function renderChild() {
	
	            var props = this.props,
	                me = this,
	                children = [];
	
	            if (props.renderModel !== 'tree') {
	                return children;
	            }
	            if (props.rowData.datas) {
	                props.rowData.datas.forEach(function (node) {
	                    var renderProps = assign({}, props, {
	                        level: me.props.level + 1,
	                        rowData: node,
	                        rowIndex: node.jsxid,
	                        key: node.jsxid,
	                        showSubComp: false,
	                        visible: me.state.expanded && me.props.visible
	                    });
	                    children.push(React.createElement(Row, renderProps));
	                });
	
	                var renderProps = {
	                    key: "treeRow" + this.props.rowData.jsxid,
	                    className: "kuma-uxtable-tree-row"
	                };
	
	                children = React.createElement(
	                    'ul',
	                    renderProps,
	                    children
	                );
	            }
	
	            return children;
	        }
	    }, {
	        key: 'renderExpendIcon',
	        value: function renderExpendIcon(rowIndex) {
	
	            var expandCollapseIcon = undefined,
	                props = this.props,
	                _expandIconClass = undefined;
	
	            if (props.renderModel !== 'tree') {
	                return false;
	            }
	
	            if (props.rowData.datas) {
	                if (!this.state.expanded) {
	
	                    _expandIconClass = {
	                        "kuma-icon": true,
	                        "kuma-icon-tree-open-2": false,
	                        "kuma-icon-tree-close-2": true
	                    };
	                    _expandIconClass["kuma-uxtable-expandIcon-" + props.fixedColumn + "-" + rowIndex] = true;
	
	                    expandCollapseIcon = React.createElement(
	                        'span',
	                        { className: 'kuma-uxtable-tree-icon', 'data-type': props.fixedColumn, 'data-index': rowIndex,
	                            onClick: this.toggleExpanded.bind(this) },
	                        React.createElement('i', { className: classnames(_expandIconClass) })
	                    );
	                } else {
	
	                    _expandIconClass = {
	                        "kuma-icon": true,
	                        "kuma-icon-tree-open-2": true,
	                        "kuma-icon-tree-close-2": false
	                    };
	                    _expandIconClass["kuma-uxtable-expandIcon-" + props.fixedColumn + "-" + rowIndex] = true;
	
	                    expandCollapseIcon = React.createElement(
	                        'span',
	                        { className: 'kuma-uxtable-tree-icon', 'data-type': props.fixedColumn, 'data-index': rowIndex,
	                            onClick: this.toggleExpanded.bind(this) },
	                        React.createElement('i', { className: classnames(_expandIconClass) })
	                    );
	                }
	            } else {
	                expandCollapseIcon = React.createElement('span', { className: 'kuma-uxtable-emptyicon' });
	            }
	            return expandCollapseIcon;
	        }
	    }, {
	        key: 'renderIndent',
	        value: function renderIndent() {
	            var indents = [];
	            if (this.props.renderModel == 'tree') {
	                for (var i = 0; i < this.props.level - 1; i++) {
	                    var renderProps = {
	                        className: "indent",
	                        key: 'indent' + i
	                    };
	                    indents.push(React.createElement('span', renderProps));
	                }
	            }
	
	            return indents;
	        }
	    }, {
	        key: 'toggleExpanded',
	        value: function toggleExpanded(e) {
	            this.setState({ expanded: !this.state.expanded });
	            e.stopPropagation();
	            var t = $(e.target);
	            if (!t.hasClass('kuma-uxtable-tree-icon')) {
	                t = t.parents('.kuma-uxtable-tree-icon');
	            }
	            if (t.data('type') == 'fixed') {
	                $(".kuma-uxtable-expandIcon-scroll" + "-" + t.data('index')).trigger('click');
	            } else if (t.data('type') == 'scroll') {
	                $(".kuma-uxtable-expandIcon-fixed" + "-" + t.data('index')).trigger('click');
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _classnames;
	
	            var props = this.props,
	                _columns = [],
	                _style = {},
	                _data = props.data,
	                me = this,
	                otherCls = props.addRowClassName(_data[props.rowIndex]);
	
	            if (!this.props.visible) {
	                _style = {
	                    display: 'none'
	                };
	            }
	
	            props.columns.forEach(function (column, index) {
	                if ("group" in column) {
	                    _columns = _columns.concat(column.columns);
	                } else {
	                    _columns.push(column);
	                }
	            });
	
	            var firstVisableColumn = 0;
	
	            return React.createElement(
	                'li',
	                { className: classnames((_classnames = {}, _defineProperty(_classnames, this.props.jsxprefixCls, true), _defineProperty(_classnames, otherCls, !!otherCls), _classnames)), style: _style,
	                    onClick: this.handleClick.bind(this, props.rowData),
	                    onDoubleClick: this.handleDoubleClick.bind(this, props.rowData) },
	                _columns.map(function (item, index) {
	                    if (item.hidden) return;
	                    firstVisableColumn++;
	                    var renderProps = {
	                        column: item,
	                        root: props.root,
	                        align: item.align,
	                        rowData: props.rowData,
	                        rowIndex: props.rowIndex,
	                        index: props.index,
	                        cellIndex: index,
	                        hasSubComp: props.subComp ? true : false,
	                        data: _data,
	                        changeSelected: me.props.changeSelected,
	                        showSubCompCallback: me.showSubCompFunc.bind(me),
	                        rowSelection: props.rowSelection,
	                        actions: props.actions,
	                        mode: props.mode,
	                        handleDataChange: props.handleDataChange,
	                        attachCellField: props.attachCellField,
	                        detachCellField: props.detachCellField,
	                        key: "cell" + index
	                    };
	
	                    if (firstVisableColumn == 1) {
	                        return React.createElement(
	                            Cell,
	                            renderProps,
	                            me.renderIndent(),
	                            me.renderExpendIcon(props.rowIndex)
	                        );
	                    }
	                    //if have vertical data structure, how to process it
	                    return React.createElement(Cell, renderProps);
	                }),
	                me.renderChild(),
	                this.renderSubComp()
	            );
	        }
	    }]);
	
	    return Row;
	})(React.Component);
	
	;
	
	Row.propTypes = {
	    jsxprefixCls: React.PropTypes.string,
	    showSubComp: React.PropTypes.bool
	};
	
	Row.defaultProps = {
	    jsxprefixCls: "kuma-uxtable-row",
	    showSubComp: false
	};
	
	exports['default'] = Row;
	module.exports = exports['default'];

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by xy on 15/4/13.
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Const = __webpack_require__(7);
	var CheckBox = __webpack_require__(6);
	var TextField = __webpack_require__(50);
	var SelectField = __webpack_require__(52);
	var RadioField = __webpack_require__(123);
	var util = __webpack_require__(127);
	var classnames = __webpack_require__(2);
	var assign = __webpack_require__(9);
	var deepcopy = __webpack_require__(130);
	var fieldsMap = {
	    "select": SelectField,
	    "text": TextField,
	    "radio": RadioField
	};
	
	var Cell = (function (_React$Component) {
	    _inherits(Cell, _React$Component);
	
	    function Cell(props) {
	        _classCallCheck(this, Cell);
	
	        _get(Object.getPrototypeOf(Cell.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            'fold': 1, // 1- fold  0-unfold
	            'checked': !!this.getCellData()
	        };
	    }
	
	    _createClass(Cell, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var me = this;
	            if (me.props.column.type == "checkbox") {
	                me.setState({
	                    checked: !!me.getCellData(nextProps)
	                });
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var me = this;
	            if (me.props.column.type == "checkbox") {
	                me.props.changeSelected(me.state.checked, me.props.rowIndex, true);
	            }
	        }
	    }, {
	        key: 'handleCheckChange',
	        value: function handleCheckChange(e) {
	            var me = this,
	                _props = this.props,
	                v = _props.rowData;
	            me.props.changeSelected(e.target.checked, _props.rowIndex, false);
	        }
	    }, {
	        key: 'showSubComp',
	        value: function showSubComp() {
	            this.props.showSubCompCallback.apply();
	        }
	    }, {
	        key: 'renderTreeIcon',
	        value: function renderTreeIcon() {
	            if (this.props.cellIndex == 0 && this.props.hasSubComp) {
	                var _open = this.props.rowData.showSubComp;
	                return React.createElement(
	                    'span',
	                    { className: 'kuma-uxtable-tree-icon', onClick: this.showSubComp.bind(this) },
	                    React.createElement('i', { className: classnames({
	                            "kuma-icon": true,
	                            "kuma-icon-tree-open-2": _open,
	                            "kuma-icon-tree-close-2": !_open
	                        }) })
	                );
	            }
	        }
	
	        /**
	         * @param actions {Array or Object}
	         */
	    }, {
	        key: 'getActionItems',
	        value: function getActionItems(actions) {
	            if (typeof actions !== "object") {
	                console.error("Table: Actions should be an object or array");
	                return [];
	            } else {
	                var me = this;
	                me.items = [];
	                if (actions instanceof Array) {
	                    me.items = actions;
	                } else {
	                    for (var i in actions) {
	                        if (actions.hasOwnProperty(i)) {
	                            me.items.push({
	                                title: i,
	                                callback: actions[i]
	                            });
	                        }
	                    }
	                }
	
	                return me.items;
	            }
	        }
	    }, {
	        key: 'getEditData',
	        value: function getEditData() {
	            var me = this;
	            var column = me.props.column;
	            var editKey = column.editKey || column.dataKey;
	            return me.props.rowData[editKey];
	        }
	    }, {
	        key: 'getCellData',
	        value: function getCellData(nextProps) {
	
	            var props = nextProps || this.props,
	                _column = props.column,
	                cellData = props.rowData[_column.dataKey];
	
	            return cellData;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	
	            var me = this,
	                props = me.props,
	                _column = props.column,
	                _width = _column.width,
	                _mode = props.rowData['__mode__'],
	                _style = {
	                width: _width ? _width : 100,
	                textAlign: props.align ? props.align : "left"
	            },
	                _v = deepcopy(props.rowData),
	                renderProps = undefined;
	
	            if (_column.type == 'action') {
	                (function () {
	                    var showActionIndex = 0;
	                    _v = React.createElement(
	                        'div',
	                        { className: 'action-container' },
	                        me.getActionItems(_column.actions).map(function (item, index) {
	
	                            // There are two cases in which Table will render the action.
	                            // One is that 'mode' is not defined in action, which means it will be rendered in any mode.
	                            // The other is that 'mode' is defined & 'mode' is equal to the Cell mode,
	                            // which means this action is rendered in the user-specified mode.
	
	                            if (!('mode' in item) || item.mode == _mode) {
	                                var arr = [];
	                                if (showActionIndex !== 0) {
	                                    arr.push(React.createElement(
	                                        'span',
	                                        { key: 'split', className: 'split' },
	                                        ' | '
	                                    ));
	                                }
	                                showActionIndex++;
	                                arr.push(React.createElement(
	                                    'a',
	                                    { href: 'javascript:void(0);', className: 'action', key: 'action', onClick: item.callback.bind(me, _v, me.props.root) },
	                                    !!item.render ? item.render(item.title, me.props.rowData) : item.title
	                                ));
	                                return React.createElement(
	                                    'span',
	                                    { key: index },
	                                    arr
	                                );
	                            }
	                        })
	                    );
	                })();
	            } else if (_column.type == 'checkbox') {
	
	                _style.paddingRight = 32;
	                _style.paddingLeft = 12;
	
	                var checked = undefined;
	                if (me.state.checked) {
	                    checked = 'checked';
	                } else {
	                    checked = "";
	                }
	
	                var disable = false;
	                if ('disable' in _column) {
	                    disable = _column.disable;
	                } else if ('isDisable' in _column) {
	                    disable = !!_column.isDisable(props.rowData);
	                }
	                _v = React.createElement(CheckBox, { disable: disable, mode: props.mode, align: props.align, jsxchecked: checked, ref: 'checkbox', onchange: me.handleCheckChange.bind(me) });
	            } else if (_column.type == 'treeIcon') {
	                _v = me.renderTreeIcon();
	            }
	
	            // inline edit mode
	
	            else if ((_column.type == 'custom' || _column.type in fieldsMap) && _mode == Const.MODE.EDIT && (!('canEdit' in _column) || _column.canEdit(props.rowData))) {
	                    renderProps = {
	                        value: me.getEditData(),
	                        rowData: props.rowData,
	                        index: props.index,
	                        column: _column,
	                        handleDataChange: props.handleDataChange,
	                        attachCellField: props.attachCellField,
	                        detachCellField: props.detachCellField
	                    };
	                    var Field = undefined;
	                    if (_column.type == 'custom') {
	                        Field = props.column.customField;
	                    } else {
	                        Field = fieldsMap[_column.type];
	                    }
	                    _v = React.createElement(Field, renderProps);
	                } else if (_column.type == 'money' || _column.type == "card" || _column.type == "cnmobile") {
	                    _v = React.createElement(
	                        'div',
	                        { title: me.getCellData() },
	                        util.formatValue(me.getCellData(), _column.type, _column.delimiter)
	                    );
	                } else if (_column.render) {
	                    _v = _column.render.apply(null, [me.getCellData(), _v]);
	                } else {
	                    _v = React.createElement(
	                        'div',
	                        { title: me.getCellData() },
	                        me.getCellData()
	                    );
	                }
	
	            var child = me.props.children;
	            return React.createElement(
	                'div',
	                { className: props.jsxprefixCls, style: _style },
	                child,
	                _v
	            );
	        }
	    }]);
	
	    return Cell;
	})(React.Component);
	
	;
	
	Cell.propTypes = {};
	
	Cell.defaultProps = {
	    jsxprefixCls: "kuma-uxtable-cell"
	};
	
	exports['default'] = Cell;
	module.exports = exports['default'];

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * A editable plain text field
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CellField = __webpack_require__(51);
	var classnames = __webpack_require__(2);
	var assign = __webpack_require__(9);
	
	var TextField = (function (_CellField) {
	    _inherits(TextField, _CellField);
	
	    function TextField(props) {
	        _classCallCheck(this, TextField);
	
	        _get(Object.getPrototypeOf(TextField.prototype), 'constructor', this).call(this, props);
	    }
	
	    _createClass(TextField, [{
	        key: 'renderContent',
	        value: function renderContent() {
	            var me = this;
	            var dataKey = me.props.column.dataKey;
	            var fieldProps = {
	                className: classnames({
	                    "kuma-input": true
	                }),
	                onChange: function onChange(e) {
	                    me.handleDataChange({
	                        jsxid: me.props.rowData['jsxid'],
	                        column: me.props.column,
	                        value: e.target.value,
	                        text: e.target.value
	                    });
	                },
	                value: me.props.value
	            };
	            if (me.props.column.config) {
	                var _me$props$column$config = me.props.column.config;
	                var className = _me$props$column$config.className;
	                var onChange = _me$props$column$config.onChange;
	
	                var customProps = _objectWithoutProperties(_me$props$column$config, ['className', 'onChange']);
	
	                assign(fieldProps, customProps);
	            }
	            return React.createElement('input', fieldProps);
	        }
	    }]);
	
	    return TextField;
	})(CellField);
	
	;
	
	TextField.propTypes = assign({}, CellField.propTypes);
	
	TextField.defaultProps = assign({}, CellField.defaultProps);
	
	module.exports = TextField;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classnames = __webpack_require__(2);
	var assgin = __webpack_require__(9);
	
	var CellField = (function (_React$Component) {
	    _inherits(CellField, _React$Component);
	
	    function CellField(props) {
	        _classCallCheck(this, CellField);
	
	        _get(Object.getPrototypeOf(CellField.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            pass: true
	        };
	    }
	
	    _createClass(CellField, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var me = this;
	            me.props.attachCellField(me.validate.bind(this), me.getName());
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            var me = this;
	            me.props.detachCellField(me.getName());
	        }
	    }, {
	        key: 'handleDataChange',
	        value: function handleDataChange(obj) {
	            var me = this;
	            var jsxid = obj.jsxid;
	            var column = obj.column;
	            var value = obj.value;
	            var text = obj.text;
	
	            me.validate(value, function (pass) {
	                me.props.handleDataChange(assgin({}, obj, {
	                    pass: pass
	                }));
	            });
	            // me.props.handleDataChange(assgin({}, obj, {
	            //     pass: me.state.pass
	            // }));
	        }
	    }, {
	        key: 'getName',
	        value: function getName() {
	            var me = this;
	            return me.props.column.dataKey + "." + me.props.index;
	        }
	    }, {
	        key: 'validate',
	        value: function validate(value, cb) {
	            var me = this;
	            value = value || me.props.value;
	            var rowData = me.props.rowData;
	            var rules = me.props.column.rules;
	
	            var pass = true;
	            var errMsg = "";
	            if (typeof rules == "object" && !Array.isArray(rules)) {
	                pass = !!rules.validator(value, rowData);
	                errMsg = rules.errMsg;
	            } else if (Array.isArray(rules)) {
	                for (var i = 0; i < rules.length; i++) {
	                    pass = rules[i].validator(value, rowData);
	                    if (!pass) {
	                        errMsg = rules[i].errMsg;
	                        break;
	                    }
	                }
	            }
	            !!cb && cb(pass);
	            me.setState({
	                pass: pass,
	                errMsg: errMsg
	            });
	            return pass;
	        }
	    }, {
	        key: 'renderContent',
	        value: function renderContent() {}
	    }, {
	        key: 'addSpecificClass',
	        value: function addSpecificClass() {
	            return this.props.prefixCls;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _classnames;
	
	            var me = this;
	            var specificCls = me.addSpecificClass();
	            return React.createElement(
	                'div',
	                { className: classnames((_classnames = {
	                        "hasError": !me.state.pass
	                    }, _defineProperty(_classnames, specificCls, true), _defineProperty(_classnames, me.props.className, !!me.props.className), _classnames)) },
	                me.renderContent()
	            );
	        }
	    }]);
	
	    return CellField;
	})(React.Component);
	
	CellField.displayName = "CellField";
	CellField.propTypes = {
	    prefixCls: React.PropTypes.string
	};
	
	CellField.defaultProps = {
	    prefixCls: 'kuma-uxtable-cell-field'
	};
	
	module.exports = CellField;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CellField = __webpack_require__(51);
	var classnames = __webpack_require__(2);
	var assign = __webpack_require__(9);
	var Select = __webpack_require__(53);
	var Option = Select.Option;
	
	var SelectField = (function (_CellField) {
	    _inherits(SelectField, _CellField);
	
	    function SelectField(props) {
	        _classCallCheck(this, SelectField);
	
	        _get(Object.getPrototypeOf(SelectField.prototype), 'constructor', this).call(this, props);
	    }
	
	    _createClass(SelectField, [{
	        key: 'renderContent',
	        value: function renderContent() {
	            var me = this;
	            var fieldProps = {
	                onSelect: function onSelect(value, Option) {
	                    me.handleDataChange({
	                        jsxid: me.props.rowData['jsxid'],
	                        column: me.props.column,
	                        text: Option.props.children,
	                        value: value
	                    });
	                },
	                value: me.props.value
	            };
	            if (me.props.column.config) {
	                var _me$props$column$config = me.props.column.config;
	                var value = _me$props$column$config.value;
	                var onSelect = _me$props$column$config.onSelect;
	
	                var customProps = _objectWithoutProperties(_me$props$column$config, ['value', 'onSelect']);
	
	                assign(fieldProps, customProps);
	            }
	            return React.createElement(
	                Select,
	                fieldProps,
	                me.props.column.children
	            );
	        }
	    }]);
	
	    return SelectField;
	})(CellField);
	
	;
	
	SelectField.propTypes = assign({}, CellField.propTypes);
	
	SelectField.defaultProps = assign({}, CellField.defaultProps);
	
	module.exports = SelectField;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Select2 Component for uxcore
	 * @author 
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	module.exports = __webpack_require__(54);

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RcSelect = __webpack_require__(55);
	var assign = __webpack_require__(122);
	
	var Select2 = (function (_RcSelect) {
	    _inherits(Select2, _RcSelect);
	
	    function Select2(props) {
	        _classCallCheck(this, Select2);
	
	        _get(Object.getPrototypeOf(Select2.prototype), 'constructor', this).call(this, props);
	    }
	
	    // componentDidUpdate() {
	    //     var me = this;
	    //     var haveOpened = me.haveOpened;
	    //     me.haveOpened = false;
	    //     if (haveOpened) {
	    //         React.render(me.getDropdownElement(), (function() {
	    //             if (!me.dropdownContainer) {
	    //                 me.dropdownContainer = document.createElement('div');
	    //                 me.dropdownContainer.className = 'uxcore';
	    //                 document.body.appendChild(me.dropdownContainer);
	    //             }
	    //             return me.dropdownContainer;
	    //         })());
	    //     }
	    //     super.componentDidUpdate();
	    //     me.haveOpened = haveOpened;
	    // }
	    return Select2;
	})(RcSelect);
	
	Select2.displayName = 'Select2';
	Select2.defaultProps = assign({}, RcSelect.defaultProps, {
	    prefixCls: "kuma-select2",
	    optionLabelProp: "children"
	});
	
	module.exports = Select2;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _Select = __webpack_require__(56);
	
	var _Select2 = _interopRequireDefault(_Select);
	
	var _Option = __webpack_require__(121);
	
	var _Option2 = _interopRequireDefault(_Option);
	
	var _OptGroup = __webpack_require__(78);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	_Select2['default'].Option = _Option2['default'];
	_Select2['default'].OptGroup = _OptGroup2['default'];
	exports['default'] = _Select2['default'];
	module.exports = exports['default'];

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcUtil = __webpack_require__(57);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _OptGroup = __webpack_require__(78);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	var _rcAnimate = __webpack_require__(79);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _util = __webpack_require__(87);
	
	var _SelectTrigger = __webpack_require__(103);
	
	var _SelectTrigger2 = _interopRequireDefault(_SelectTrigger);
	
	function noop() {}
	
	function filterFn(input, child) {
	  return String((0, _util.getPropValue)(child, this.props.optionFilterProp)).indexOf(input) > -1;
	}
	
	function saveRef(name, component) {
	  this[name] = component;
	}
	
	var Select = _react2['default'].createClass({
	  displayName: 'Select',
	
	  propTypes: {
	    defaultActiveFirstOption: _react.PropTypes.bool,
	    multiple: _react.PropTypes.bool,
	    filterOption: _react.PropTypes.any,
	    showSearch: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    showArrow: _react.PropTypes.bool,
	    tags: _react.PropTypes.bool,
	    transitionName: _react.PropTypes.string,
	    optionLabelProp: _react.PropTypes.string,
	    optionFilterProp: _react.PropTypes.string,
	    animation: _react.PropTypes.string,
	    choiceTransitionName: _react.PropTypes.string,
	    onChange: _react.PropTypes.func,
	    onSelect: _react.PropTypes.func,
	    onSearch: _react.PropTypes.func,
	    searchPlaceholder: _react.PropTypes.string,
	    placeholder: _react.PropTypes.any,
	    onDeselect: _react.PropTypes.func,
	    value: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.string]),
	    defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.string]),
	    label: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.any]),
	    defaultLabel: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.any]),
	    dropdownStyle: _react.PropTypes.object,
	    maxTagTextLength: _react.PropTypes.number
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-select',
	      filterOption: filterFn,
	      defaultActiveFirstOption: true,
	      showSearch: true,
	      allowClear: false,
	      placeholder: '',
	      searchPlaceholder: '',
	      defaultValue: [],
	      onChange: noop,
	      onSelect: noop,
	      onSearch: noop,
	      onDeselect: noop,
	      showArrow: true,
	      dropdownMatchSelectWidth: true,
	      dropdownStyle: {},
	      dropdownMenuStyle: {},
	      optionFilterProp: 'value',
	      optionLabelProp: 'value',
	      notFoundContent: 'Not Found'
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var value = [];
	    if ('value' in props) {
	      value = (0, _util.toArray)(props.value);
	    } else {
	      value = (0, _util.toArray)(props.defaultValue);
	    }
	    var label = this.getLabelFromProps(props, value, 1);
	    var inputValue = '';
	    if (props.combobox) {
	      inputValue = value[0] || '';
	    }
	    this.saveInputRef = saveRef.bind(this, 'inputInstance');
	    return { value: value, inputValue: inputValue, label: label };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('value' in nextProps) {
	      var value = (0, _util.toArray)(nextProps.value);
	      var label = this.getLabelFromProps(nextProps, value);
	      this.setState({
	        value: value,
	        label: label
	      });
	      if (nextProps.combobox) {
	        this.setState({
	          inputValue: value[0] || ''
	        });
	      }
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    var state = this.state;
	    var props = this.props;
	    if (state.open && (0, _util.isMultipleOrTags)(props)) {
	      var inputNode = this.getInputDOMNode();
	      if (inputNode.value) {
	        inputNode.style.width = '';
	        inputNode.style.width = inputNode.scrollWidth + 'px';
	      } else {
	        inputNode.style.width = '';
	      }
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    if (this.dropdownContainer) {
	      _reactDom2['default'].unmountComponentAtNode(this.dropdownContainer);
	      document.body.removeChild(this.dropdownContainer);
	      this.dropdownContainer = null;
	    }
	  },
	
	  onInputChange: function onInputChange(event) {
	    var val = event.target.value;
	    var props = this.props;
	    this.setState({
	      inputValue: val,
	      open: true
	    });
	    if ((0, _util.isCombobox)(props)) {
	      this.fireChange([val], [val]);
	    }
	    props.onSearch(val);
	  },
	
	  onDropdownVisibleChange: function onDropdownVisibleChange(open) {
	    this.setOpenState(open);
	  },
	
	  // combobox ignore
	  onKeyDown: function onKeyDown(event) {
	    var props = this.props;
	    if (props.disabled) {
	      return;
	    }
	    var keyCode = event.keyCode;
	    if (this.state.open && !this.getInputDOMNode()) {
	      this.onInputKeyDown(event);
	    } else if (keyCode === _rcUtil.KeyCode.ENTER || keyCode === _rcUtil.KeyCode.DOWN) {
	      this.setOpenState(true);
	      event.preventDefault();
	    }
	  },
	
	  onInputKeyDown: function onInputKeyDown(event) {
	    var props = this.props;
	    var state = this.state;
	    var keyCode = event.keyCode;
	    if ((0, _util.isMultipleOrTags)(props) && !event.target.value && keyCode === _rcUtil.KeyCode.BACKSPACE) {
	      var value = state.value.concat();
	      if (value.length) {
	        var label = state.label.concat();
	        var popValue = value.pop();
	        label.pop();
	        props.onDeselect(popValue);
	        this.fireChange(value, label);
	      }
	      return;
	    }
	
	    if (keyCode === _rcUtil.KeyCode.DOWN) {
	      if (!state.open) {
	        this.openIfHasChildren();
	        event.preventDefault();
	        event.stopPropagation();
	        return;
	      }
	    } else if (keyCode === _rcUtil.KeyCode.ESC) {
	      if (state.open) {
	        this.setOpenState(false);
	        event.preventDefault();
	        event.stopPropagation();
	      }
	      return;
	    }
	
	    if (state.open) {
	      var menu = this.refs.trigger.getInnerMenu();
	      if (menu && menu.onKeyDown(event)) {
	        event.preventDefault();
	        event.stopPropagation();
	      }
	    }
	  },
	
	  onMenuSelect: function onMenuSelect(_ref) {
	    var item = _ref.item;
	
	    var value = this.state.value;
	    var label = this.state.label;
	    var props = this.props;
	    var selectedValue = (0, _util.getValuePropValue)(item);
	    var selectedLabel = this.getLabelFromOption(item);
	    props.onSelect(selectedValue, item);
	    if ((0, _util.isMultipleOrTags)(props)) {
	      if (value.indexOf(selectedValue) !== -1) {
	        return;
	      }
	      value = value.concat([selectedValue]);
	      label = label.concat([selectedLabel]);
	    } else {
	      if (value[0] === selectedValue) {
	        this.setOpenState(false);
	        return;
	      }
	      value = [selectedValue];
	      label = [selectedLabel];
	      this.setOpenState(false);
	    }
	    this.fireChange(value, label);
	    this.setState({
	      inputValue: ''
	    });
	    if ((0, _util.isCombobox)(props)) {
	      this.setState({
	        inputValue: (0, _util.getPropValue)(item, props.optionLabelProp)
	      });
	    }
	  },
	
	  onMenuDeselect: function onMenuDeselect(_ref2) {
	    var item = _ref2.item;
	    var domEvent = _ref2.domEvent;
	
	    if (domEvent.type === 'click') {
	      this.removeSelected((0, _util.getValuePropValue)(item));
	    }
	    if (!(0, _util.isMultipleOrTags)(this.props)) {
	      this.setOpenState(false);
	    }
	    this.setState({
	      inputValue: ''
	    });
	  },
	
	  onPlaceholderClick: function onPlaceholderClick() {
	    this.getInputDOMNode().focus();
	  },
	
	  onClearSelection: function onClearSelection(event) {
	    var props = this.props;
	    var state = this.state;
	    if (props.disabled) {
	      return;
	    }
	    event.stopPropagation();
	    if (state.inputValue || state.value.length) {
	      this.fireChange([], []);
	      this.setOpenState(false);
	      this.setState({
	        inputValue: ''
	      });
	    }
	  },
	
	  getLabelBySingleValue: function getLabelBySingleValue(children, value) {
	    var _this = this;
	
	    if (value === undefined) {
	      return null;
	    }
	    var label = null;
	    _react2['default'].Children.forEach(children, function (child) {
	      if (child.type === _OptGroup2['default']) {
	        var maybe = _this.getLabelBySingleValue(child.props.children, value);
	        if (maybe !== null) {
	          label = maybe;
	        }
	      } else if ((0, _util.getValuePropValue)(child) === value) {
	        label = _this.getLabelFromOption(child);
	      }
	    });
	    return label;
	  },
	
	  getLabelFromOption: function getLabelFromOption(child) {
	    return (0, _util.getPropValue)(child, this.props.optionLabelProp);
	  },
	
	  getLabelFromProps: function getLabelFromProps(props, value, init) {
	    var label = [];
	    if ('label' in props) {
	      label = (0, _util.toArray)(props.label);
	    } else if (init && 'defaultLabel' in props) {
	      label = (0, _util.toArray)(props.defaultLabel);
	    } else {
	      label = this.getLabelByValue(props.children, value);
	    }
	    return label;
	  },
	
	  getVLForOnChange: function getVLForOnChange(vls) {
	    if (vls !== undefined) {
	      return (0, _util.isMultipleOrTags)(this.props) ? vls : vls[0];
	    }
	    return vls;
	  },
	
	  getLabelByValue: function getLabelByValue(children, values) {
	    var _this2 = this;
	
	    return values.map(function (value) {
	      var label = _this2.getLabelBySingleValue(children, value);
	      if (label === null) {
	        return value;
	      }
	      return label;
	    });
	  },
	
	  getDropdownContainer: function getDropdownContainer() {
	    if (!this.dropdownContainer) {
	      this.dropdownContainer = document.createElement('div');
	      document.body.appendChild(this.dropdownContainer);
	    }
	    return this.dropdownContainer;
	  },
	
	  getSearchPlaceholderElement: function getSearchPlaceholderElement(hidden) {
	    var props = this.props;
	    if (props.searchPlaceholder) {
	      return _react2['default'].createElement('span', {
	        style: { display: hidden ? 'none' : 'block' },
	        onClick: this.onPlaceholderClick,
	        className: props.prefixCls + '-search__field__placeholder' }, props.searchPlaceholder);
	    }
	    return null;
	  },
	
	  getInputElement: function getInputElement() {
	    var props = this.props;
	    return _react2['default'].createElement('span', { className: props.prefixCls + '-search__field__wrap' }, _react2['default'].createElement('input', { ref: this.saveInputRef,
	      onChange: this.onInputChange,
	      onKeyDown: this.onInputKeyDown,
	      value: this.state.inputValue,
	      disabled: props.disabled,
	      className: props.prefixCls + '-search__field',
	      role: 'textbox' }), (0, _util.isMultipleOrTags)(props) ? null : this.getSearchPlaceholderElement(!!this.state.inputValue));
	  },
	
	  getInputDOMNode: function getInputDOMNode() {
	    return this.inputInstance;
	  },
	
	  getPopupDOMNode: function getPopupDOMNode() {
	    return this.refs.trigger.getPopupDOMNode();
	  },
	
	  getPopupMenuComponent: function getPopupMenuComponent() {
	    return this.refs.trigger.getInnerMenu();
	  },
	
	  setOpenState: function setOpenState(open) {
	    var _this3 = this;
	
	    var refs = this.refs;
	    this.setState({
	      open: open
	    }, function () {
	      if (open || (0, _util.isMultipleOrTagsOrCombobox)(_this3.props)) {
	        if (_this3.getInputDOMNode()) {
	          _this3.getInputDOMNode().focus();
	        }
	      } else if (refs.selection) {
	        refs.selection.focus();
	      }
	    });
	  },
	
	  removeSelected: function removeSelected(selectedValue) {
	    var props = this.props;
	    if (props.disabled) {
	      return;
	    }
	    var label = this.state.label.concat();
	    var index = this.state.value.indexOf(selectedValue);
	    var value = this.state.value.filter(function (singleValue) {
	      return singleValue !== selectedValue;
	    });
	    if (index !== -1) {
	      label.splice(index, 1);
	    }
	    var canMultiple = (0, _util.isMultipleOrTags)(props);
	    if (canMultiple) {
	      props.onDeselect(selectedValue);
	    }
	    this.fireChange(value, label);
	  },
	
	  openIfHasChildren: function openIfHasChildren() {
	    var props = this.props;
	    if (_react2['default'].Children.count(props.children) || (0, _util.isSingleMode)(props)) {
	      this.setOpenState(true);
	    }
	  },
	
	  fireChange: function fireChange(value, label) {
	    var props = this.props;
	    if (!('value' in props)) {
	      this.setState({
	        value: value, label: label
	      });
	    }
	    props.onChange(this.getVLForOnChange(value), this.getVLForOnChange(label));
	  },
	  renderTopControlNode: function renderTopControlNode() {
	    var _this4 = this;
	
	    var value = this.state.value;
	    var label = this.state.label;
	    var props = this.props;
	    var choiceTransitionName = props.choiceTransitionName;
	    var prefixCls = props.prefixCls;
	    var maxTagTextLength = props.maxTagTextLength;
	
	    // single and not combobox, input is inside dropdown
	    if ((0, _util.isSingleMode)(props)) {
	      var placeholder = _react2['default'].createElement('span', { key: 'placeholder',
	        className: prefixCls + '-selection__placeholder' }, props.placeholder);
	      var innerNode = placeholder;
	      if (this.state.label[0]) {
	        innerNode = _react2['default'].createElement('span', { key: 'value' }, this.state.label[0]);
	      }
	      return _react2['default'].createElement('span', { className: prefixCls + '-selection__rendered' }, innerNode);
	    }
	
	    var selectedValueNodes = [];
	    if ((0, _util.isMultipleOrTags)(props)) {
	      selectedValueNodes = value.map(function (singleValue, index) {
	        var content = label[index];
	        var title = content;
	        if (maxTagTextLength && typeof content === 'string' && content.length > maxTagTextLength) {
	          content = content.slice(0, maxTagTextLength) + '...';
	        }
	        return _react2['default'].createElement('li', { className: prefixCls + '-selection__choice',
	          key: singleValue,
	          title: title }, _react2['default'].createElement('span', { className: prefixCls + '-selection__choice__content' }, content), _react2['default'].createElement('span', { className: prefixCls + '-selection__choice__remove',
	          onClick: _this4.removeSelected.bind(_this4, singleValue) }));
	      });
	    }
	    selectedValueNodes.push(_react2['default'].createElement('li', { className: prefixCls + '-search ' + prefixCls + '-search--inline', key: '__input' }, this.getInputElement()));
	    var className = prefixCls + '-selection__rendered';
	    if ((0, _util.isMultipleOrTags)(props) && choiceTransitionName) {
	      return _react2['default'].createElement(_rcAnimate2['default'], { className: className,
	        component: 'ul',
	        transitionName: choiceTransitionName }, selectedValueNodes);
	    }
	    return _react2['default'].createElement('ul', { className: className }, selectedValueNodes);
	  },
	
	  render: function render() {
	    var _rootCls;
	
	    var props = this.props;
	    var multiple = (0, _util.isMultipleOrTags)(props);
	    var state = this.state;
	    var className = props.className;
	    var disabled = props.disabled;
	    var allowClear = props.allowClear;
	    var prefixCls = props.prefixCls;
	
	    var ctrlNode = this.renderTopControlNode();
	    var extraSelectionProps = {};
	    if (!(0, _util.isCombobox)(props)) {
	      extraSelectionProps = {
	        onKeyDown: this.onKeyDown,
	        tabIndex: 0
	      };
	    }
	    var rootCls = (_rootCls = {}, _defineProperty(_rootCls, className, !!className), _defineProperty(_rootCls, prefixCls, 1), _defineProperty(_rootCls, prefixCls + '-open', state.open), _defineProperty(_rootCls, prefixCls + '-combobox', (0, _util.isCombobox)(props)), _defineProperty(_rootCls, prefixCls + '-disabled', disabled), _defineProperty(_rootCls, prefixCls + '-enabled', !disabled), _rootCls);
	
	    var clear = _react2['default'].createElement('span', { key: 'clear',
	      className: prefixCls + '-selection__clear',
	      onClick: this.onClearSelection });
	    return _react2['default'].createElement(_SelectTrigger2['default'], _extends({}, props, {
	      options: props.children,
	      multiple: multiple,
	      disabled: disabled,
	      visible: state.open,
	      inputValue: state.inputValue,
	      inputElement: this.getInputElement(),
	      value: state.value,
	      onDropdownVisibleChange: this.onDropdownVisibleChange,
	      onMenuSelect: this.onMenuSelect,
	      onMenuDeselect: this.onMenuDeselect,
	      ref: 'trigger' }), _react2['default'].createElement('span', {
	      style: props.style,
	      className: (0, _classnames2['default'])(rootCls) }, _react2['default'].createElement('span', _extends({ ref: 'selection',
	      key: 'selection',
	      className: prefixCls + '-selection ' + prefixCls + '-selection--' + (multiple ? 'multiple' : 'single'),
	      role: 'combobox',
	      'aria-autocomplete': 'list',
	      'aria-haspopup': 'true',
	      'aria-expanded': state.open
	    }, extraSelectionProps), ctrlNode, allowClear && !(0, _util.isMultipleOrTags)(props) ? clear : null, multiple || !props.showArrow ? null : _react2['default'].createElement('span', { key: 'arrow', className: prefixCls + '-arrow', tabIndex: '-1', style: { outline: 'none' } }, _react2['default'].createElement('b', null)), multiple ? this.getSearchPlaceholderElement(!!this.state.inputValue || this.state.value.length) : null)));
	  }
	});
	
	exports['default'] = Select;
	module.exports = exports['default'];

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = {
	  guid: __webpack_require__(58),
	  classSet: __webpack_require__(59),
	  joinClasses: __webpack_require__(61),
	  KeyCode: __webpack_require__(62),
	  PureRenderMixin: __webpack_require__(63),
	  shallowEqual: __webpack_require__(64),
	  createChainedFunction: __webpack_require__(69),
	  Dom: {
	    addEventListener: __webpack_require__(70),
	    contains: __webpack_require__(75)
	  },
	  Children: {
	    toArray: __webpack_require__(76),
	    mapSelf: __webpack_require__(77)
	  }
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	'use strict';
	
	var seed = 0;
	module.exports = function guid() {
	  return Date.now() + '_' + seed++;
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var deprecate = __webpack_require__(60);
	var classNames = __webpack_require__(2);
	
	module.exports = deprecate(classNames, '`rcUtil.classSet()` is deprecated, use `classNames()` by `require(\'classnames\')` instead');

/***/ },
/* 60 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/**
	 * Module exports.
	 */
	
	'use strict';
	
	module.exports = deprecate;
	
	/**
	 * Mark that a method should not be used.
	 * Returns a modified function which warns once by default.
	 *
	 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
	 *
	 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
	 * will throw an Error when invoked.
	 *
	 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
	 * will invoke `console.trace()` instead of `console.error()`.
	 *
	 * @param {Function} fn - the function to deprecate
	 * @param {String} msg - the string to print to the console when `fn` is invoked
	 * @returns {Function} a new "deprecated" version of `fn`
	 * @api public
	 */
	
	function deprecate(fn, msg) {
	  if (config('noDeprecation')) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (config('throwDeprecation')) {
	        throw new Error(msg);
	      } else if (config('traceDeprecation')) {
	        console.trace(msg);
	      } else {
	        console.warn(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	}
	
	/**
	 * Checks `localStorage` for boolean values for the given `name`.
	 *
	 * @param {String} name
	 * @returns {Boolean}
	 * @api private
	 */
	
	function config(name) {
	  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
	  try {
	    if (!global.localStorage) return false;
	  } catch (_) {
	    return false;
	  }
	  var val = global.localStorage[name];
	  if (null == val) return false;
	  return String(val).toLowerCase() === 'true';
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var deprecate = __webpack_require__(60);
	var classNames = __webpack_require__(2);
	
	module.exports = deprecate(classNames, '`rcUtil.joinClasses()` is deprecated, use `classNames()` by `require(\'classnames\')` instead');

/***/ },
/* 62 */
/***/ function(module, exports) {

	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var shallowEqual = __webpack_require__(64);
	
	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   const ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
	    return !shallowEqual(this.props, nextProps) || !shallowEqual(this.state, nextState);
	  }
	};
	
	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var fetchKeys = __webpack_require__(65);
	
	module.exports = function shallowEqual(objA, objB, compare, compareContext) {
	
	    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
	
	    if (ret !== void 0) {
	        return !!ret;
	    }
	
	    if (objA === objB) {
	        return true;
	    }
	
	    if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	        return false;
	    }
	
	    var keysA = fetchKeys(objA);
	    var keysB = fetchKeys(objB);
	
	    var len = keysA.length;
	    if (len !== keysB.length) {
	        return false;
	    }
	
	    compareContext = compareContext || null;
	
	    // Test for A's keys different from B.
	    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	    for (var i = 0; i < len; i++) {
	        var key = keysA[i];
	        if (!bHasOwnProperty(key)) {
	            return false;
	        }
	        var valueA = objA[key];
	        var valueB = objB[key];
	
	        var _ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
	        if (_ret === false || _ret === void 0 && valueA !== valueB) {
	            return false;
	        }
	    }
	
	    return true;
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.1.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	'use strict';
	
	var getNative = __webpack_require__(66),
	    isArguments = __webpack_require__(67),
	    isArray = __webpack_require__(68);
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = typeof value == 'number' || reIsUint.test(value) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) && (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if (allowIndexes && isIndex(key, length) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function (object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if (typeof Ctor == 'function' && Ctor.prototype === object || typeof object != 'function' && isArrayLike(object)) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = length && isLength(length) && (isArray(object) || isArguments(object)) && length || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = index + '';
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keys;

/***/ },
/* 66 */
/***/ function(module, exports) {

	/**
	 * lodash 3.9.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	'use strict';
	
	var funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = getNative;

/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.7 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** Used as references for various `Number` constants. */
	'use strict';
	
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && !(typeof value == 'function' && isFunction(value)) && isLength(getLength(value));
	}
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array constructors, and
	  // PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isArguments;

/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * lodash 3.0.4 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/** `Object#toString` result references. */
	'use strict';
	
	var arrayTag = '[object Array]',
	    funcTag = '[object Function]';
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function (value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 equivalents which return 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isArray;

/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @returns {function|null}
	 */
	"use strict";
	
	function createChainedFunction() {
	  var args = arguments;
	  return function chainedFunction() {
	    for (var i = 0; i < args.length; i++) {
	      if (args[i] && args[i].apply) {
	        args[i].apply(this, arguments);
	      }
	    }
	  };
	}
	
	module.exports = createChainedFunction;

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListenerWrap;
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _addDomEventListener = __webpack_require__(71);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
	    _reactDom2['default'].unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2['default'])(target, eventType, callback);
	}
	
	module.exports = exports['default'];

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListener;
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _EventObject = __webpack_require__(72);
	
	var _EventObject2 = _interopRequireDefault(_EventObject);
	
	function addEventListener(target, eventType, callback) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2['default'](e);
	    callback.call(target, ne);
	  }
	
	  if (target.addEventListener) {
	    target.addEventListener(eventType, wrapCallback, false);
	    return {
	      remove: function remove() {
	        target.removeEventListener(eventType, wrapCallback, false);
	      }
	    };
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}
	
	module.exports = exports['default'];

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _EventBaseObject = __webpack_require__(73);
	
	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);
	
	var _objectAssign = __webpack_require__(74);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];
	
	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}
	
	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }
	
	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = undefined;
	    var deltaY = undefined;
	    var delta = undefined;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;
	
	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }
	
	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }
	
	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }
	
	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }
	
	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }
	
	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }
	
	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }
	
	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = undefined;
	    var doc = undefined;
	    var body = undefined;
	    var target = event.target;
	    var button = nativeEvent.button;
	
	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }
	
	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }
	
	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }
	
	    return event;
	  }
	}];
	
	function retTrue() {
	  return TRUE;
	}
	
	function retFalse() {
	  return FALSE;
	}
	
	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;
	
	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';
	
	  _EventBaseObject2['default'].call(this);
	
	  this.nativeEvent = nativeEvent;
	
	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }
	
	  this.isDefaultPrevented = isDefaultPrevented;
	
	  var fixFns = [];
	  var fixFn = undefined;
	  var l = undefined;
	  var prop = undefined;
	  var props = commonProps.concat();
	
	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });
	
	  l = props.length;
	
	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }
	
	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }
	
	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }
	
	  l = fixFns.length;
	
	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }
	
	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}
	
	var EventBaseObjectProto = _EventBaseObject2['default'].prototype;
	
	(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,
	
	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;
	
	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }
	
	    EventBaseObjectProto.preventDefault.call(this);
	  },
	
	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;
	
	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }
	
	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});
	
	exports['default'] = DomEventObject;
	module.exports = exports['default'];

/***/ },
/* 73 */
/***/ function(module, exports) {

	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function returnFalse() {
	  return false;
	}
	
	function returnTrue() {
	  return true;
	}
	
	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}
	
	EventBaseObject.prototype = {
	  isEventObject: 1,
	
	  constructor: EventBaseObject,
	
	  isDefaultPrevented: returnFalse,
	
	  isPropagationStopped: returnFalse,
	
	  isImmediatePropagationStopped: returnFalse,
	
	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },
	
	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },
	
	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },
	
	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};
	
	exports["default"] = EventBaseObject;
	module.exports = exports["default"];

/***/ },
/* 74 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};

/***/ },
/* 75 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(15);
	
	module.exports = function toArray(children) {
	  var ret = [];
	  React.Children.forEach(children, function each(c) {
	    ret.push(c);
	  });
	  return ret;
	};

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(15);
	
	function mirror(o) {
	  return o;
	}
	
	module.exports = function mapSelf(children) {
	  // return ReactFragment
	  return React.Children.map(children, mirror);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var OptGroup = (function (_React$Component) {
	  _inherits(OptGroup, _React$Component);
	
	  function OptGroup() {
	    _classCallCheck(this, OptGroup);
	
	    _get(Object.getPrototypeOf(OptGroup.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  return OptGroup;
	})(_react2['default'].Component);
	
	exports['default'] = OptGroup;
	module.exports = exports['default'];

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	module.exports = __webpack_require__(80);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _ChildrenUtils = __webpack_require__(81);
	
	var _AnimateChild = __webpack_require__(82);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(86);
	
	var _util2 = _interopRequireDefault(_util);
	
	var defaultKey = 'rc_animate_' + Date.now();
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2['default'].isValidElement(children)) {
	    if (!children.key) {
	      return _react2['default'].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var Animate = _react2['default'].createClass({
	  displayName: 'Animate',
	
	  propTypes: {
	    component: _react2['default'].PropTypes.any,
	    animation: _react2['default'].PropTypes.object,
	    transitionName: _react2['default'].PropTypes.string,
	    transitionEnter: _react2['default'].PropTypes.bool,
	    transitionAppear: _react2['default'].PropTypes.bool,
	    exclusive: _react2['default'].PropTypes.bool,
	    transitionLeave: _react2['default'].PropTypes.bool,
	    onEnd: _react2['default'].PropTypes.func,
	    onEnter: _react2['default'].PropTypes.func,
	    onLeave: _react2['default'].PropTypes.func,
	    onAppear: _react2['default'].PropTypes.func,
	    showProp: _react2['default'].PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      animation: {},
	      component: 'span',
	      transitionEnter: true,
	      transitionLeave: true,
	      transitionAppear: false,
	      onEnd: noop,
	      onEnter: noop,
	      onLeave: noop,
	      onAppear: noop
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    this.currentlyAnimatingKeys = {};
	    this.keysToEnter = [];
	    this.keysToLeave = [];
	    return {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(this.props))
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      _this.performAppear(child.key);
	    });
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this2.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = undefined;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2['default'].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }
	
	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildren.forEach(function (child) {
	      var key = child.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this2.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this2.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this2.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (child) {
	      var key = child.key;
	      if (currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this2.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this2.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this2.keysToLeave.push(key);
	      }
	    });
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.isMounted()) {
	      var keysToEnter = this.keysToEnter;
	      this.keysToEnter = [];
	      keysToEnter.forEach(this.performEnter);
	      var keysToLeave = this.keysToLeave;
	      this.keysToLeave = [];
	      keysToLeave.forEach(this.performLeave);
	    }
	  },
	
	  performEnter: function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  },
	
	  performAppear: function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  },
	
	  handleDoneAdding: function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2['default'].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2['default'].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  },
	
	  performLeave: function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  },
	
	  handleDoneLeaving: function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      if (_util2['default'].allowLeaveCallback(props)) {
	        props.onLeave(key);
	        props.onEnd(key, false);
	      }
	      if (this.isMounted() && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        });
	      }
	    }
	  },
	
	  isValidChildByKey: function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  },
	
	  stop: function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  },
	
	  render: function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2['default'].createElement(_AnimateChild2['default'], {
	          key: child.key,
	          ref: child.key,
	          animation: props.animation,
	          transitionName: props.transitionName,
	          transitionEnter: props.transitionEnter,
	          transitionAppear: props.transitionAppear,
	          transitionLeave: props.transitionLeave }, child);
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      return _react2['default'].createElement(Component, this.props, children);
	    }
	    return children[0] || null;
	  }
	});
	
	exports['default'] = Animate;
	module.exports = exports['default'];

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	function toArrayChildren(children) {
	  var ret = [];
	  _react2['default'].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}
	
	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}
	
	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child.key !== child2.key) {
	        same = false;
	      } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	        same = false;
	      }
	    });
	  }
	  return same;
	}
	
	function mergeChildren(prev, next) {
	  var ret = [];
	
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });
	
	  next.forEach(function (child) {
	    if (nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });
	
	  ret = ret.concat(pendingChildren);
	
	  return ret;
	}

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _cssAnimation = __webpack_require__(83);
	
	var _cssAnimation2 = _interopRequireDefault(_cssAnimation);
	
	var _util = __webpack_require__(86);
	
	var _util2 = _interopRequireDefault(_util);
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var AnimateChild = _react2['default'].createClass({
	  displayName: 'AnimateChild',
	
	  propTypes: {
	    children: _react2['default'].PropTypes.any
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.stop();
	  },
	
	  componentWillEnter: function componentWillEnter(done) {
	    if (_util2['default'].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillAppear: function componentWillAppear(done) {
	    if (_util2['default'].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  },
	
	  componentWillLeave: function componentWillLeave(done) {
	    if (_util2['default'].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      done();
	    }
	  },
	
	  transition: function transition(animationType, finishCallback) {
	    var _this = this;
	
	    var node = _reactDom2['default'].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    this.stop();
	    var end = function end() {
	      _this.stopper = null;
	      finishCallback();
	    };
	    if ((_cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      this.stopper = (0, _cssAnimation2['default'])(node, transitionName + '-' + animationType, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  },
	
	  stop: function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  },
	
	  render: function render() {
	    return this.props.children;
	  }
	});
	
	exports['default'] = AnimateChild;
	module.exports = exports['default'];

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Event = __webpack_require__(84);
	var Css = __webpack_require__(85);
	var isCssAnimationSupported = Event.endEvents.length !== 0;
	
	function getDuration(node, name) {
	  var style = window.getComputedStyle(node);
	  var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDuration = parseFloat(getDuration(node, 'transition-duration')) || 0;
	    var animationDuration = parseFloat(getDuration(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration, animationDuration);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, callback) {
	  var className = transitionName;
	  var activeClassName = className + '-active';
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    Css.removeClass(node, className);
	    Css.removeClass(node, activeClassName);
	
	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  Event.addEndEventListener(node, node.rcEndListener);
	
	  Css.addClass(node, className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    Css.addClass(node, activeClassName);
	    fixBrowserByTimeout(node);
	  }, 0);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    Event.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  Event.addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  ['Webkit', 'Moz', 'O',
	  // ms is special .... !
	  'ms'].forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.addClass = Css.addClass;
	cssAnimation.removeClass = Css.removeClass;
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	module.exports = cssAnimation;

/***/ },
/* 84 */
/***/ function(module, exports) {

	'use strict';
	
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	module.exports = TransitionEvents;

/***/ },
/* 85 */
/***/ function(module, exports) {

	'use strict';
	
	var SPACE = ' ';
	var RE_CLASS = /[\n\t\r]/g;
	
	function norm(elemClass) {
	  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
	}
	
	module.exports = {
	  addClass: function addClass(elem, className) {
	    elem.className += ' ' + className;
	  },
	
	  removeClass: function removeClass(elem, n) {
	    var elemClass = elem.className.trim();
	    var className = norm(elemClass);
	    var needle = n.trim();
	    needle = SPACE + needle + SPACE;
	    // 一个 cls 有可能多次出现：'link link2 link link3 link'
	    while (className.indexOf(needle) >= 0) {
	      className = className.replace(needle, SPACE);
	    }
	    elem.className = className.trim();
	  }
	};

/***/ },
/* 86 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports["default"];

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getValuePropValue = getValuePropValue;
	exports.getPropValue = getPropValue;
	exports.isCombobox = isCombobox;
	exports.isMultipleOrTags = isMultipleOrTags;
	exports.isMultipleOrTagsOrCombobox = isMultipleOrTagsOrCombobox;
	exports.isSingleMode = isSingleMode;
	exports.toArray = toArray;
	exports.getSelectKeys = getSelectKeys;
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _rcMenu = __webpack_require__(88);
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	function getValuePropValue(child) {
	  var props = child.props;
	  if ('value' in props) {
	    return props.value;
	  }
	  if (child.key) {
	    return child.key;
	  }
	  throw new Error('no key or value for ' + child);
	}
	
	function getPropValue(child, prop) {
	  if (prop === 'value') {
	    return getValuePropValue(child);
	  }
	  return child.props[prop];
	}
	
	function isCombobox(props) {
	  return props.combobox;
	}
	
	function isMultipleOrTags(props) {
	  return props.multiple || props.tags;
	}
	
	function isMultipleOrTagsOrCombobox(props) {
	  return isMultipleOrTags(props) || isCombobox(props);
	}
	
	function isSingleMode(props) {
	  return !isMultipleOrTagsOrCombobox(props);
	}
	
	function toArray(value) {
	  var ret = value;
	  if (value === undefined) {
	    ret = [];
	  } else if (!Array.isArray(value)) {
	    ret = [value];
	  }
	  return ret;
	}
	
	function getSelectKeys(menuItems, value) {
	  if (value === null || value === undefined) {
	    return [];
	  }
	  var selectedKeys = [];
	  _react2['default'].Children.forEach(menuItems, function (item) {
	    if (item.type === _rcMenu.ItemGroup) {
	      selectedKeys = selectedKeys.concat(getSelectKeys(item.props.children, value));
	    } else {
	      var itemValue = getValuePropValue(item);
	      var itemKey = item.key;
	      if (value.indexOf(itemValue) !== -1 && itemKey) {
	        selectedKeys.push(itemKey);
	      }
	    }
	  });
	  return selectedKeys;
	}

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _Menu = __webpack_require__(89);
	
	var _Menu2 = _interopRequireDefault(_Menu);
	
	var _SubMenu = __webpack_require__(97);
	
	var _SubMenu2 = _interopRequireDefault(_SubMenu);
	
	var _MenuItem = __webpack_require__(100);
	
	var _MenuItem2 = _interopRequireDefault(_MenuItem);
	
	var _MenuItemGroup = __webpack_require__(101);
	
	var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);
	
	var _Divider = __webpack_require__(102);
	
	var _Divider2 = _interopRequireDefault(_Divider);
	
	exports.SubMenu = _SubMenu2['default'];
	exports.Item = _MenuItem2['default'];
	exports.MenuItem = _MenuItem2['default'];
	exports.MenuItemGroup = _MenuItemGroup2['default'];
	exports.ItemGroup = _MenuItemGroup2['default'];
	exports.Divider = _Divider2['default'];
	exports['default'] = _Menu2['default'];

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MenuMixin = __webpack_require__(90);
	
	var _MenuMixin2 = _interopRequireDefault(_MenuMixin);
	
	var _objectAssign = __webpack_require__(94);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _util = __webpack_require__(95);
	
	var Menu = _react2['default'].createClass({
	  displayName: 'Menu',
	
	  propTypes: {
	    openSubMenuOnMouseEnter: _react2['default'].PropTypes.bool,
	    closeSubMenuOnMouseLeave: _react2['default'].PropTypes.bool,
	    selectedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    defaultSelectedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    defaultOpenKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    openKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    mode: _react2['default'].PropTypes.string,
	    onClick: _react2['default'].PropTypes.func,
	    onSelect: _react2['default'].PropTypes.func,
	    onDeselect: _react2['default'].PropTypes.func,
	    onDestroy: _react2['default'].PropTypes.func,
	    openTransitionName: _react2['default'].PropTypes.string,
	    openAnimation: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.object]),
	    level: _react2['default'].PropTypes.number,
	    eventKey: _react2['default'].PropTypes.string,
	    selectable: _react2['default'].PropTypes.bool,
	    children: _react2['default'].PropTypes.any
	  },
	
	  mixins: [_MenuMixin2['default']],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      openSubMenuOnMouseEnter: true,
	      closeSubMenuOnMouseLeave: true,
	      selectable: true,
	      onClick: _util.noop,
	      onSelect: _util.noop,
	      onOpen: _util.noop,
	      onClose: _util.noop,
	      onDeselect: _util.noop,
	      defaultSelectedKeys: [],
	      defaultOpenKeys: []
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var selectedKeys = props.defaultSelectedKeys;
	    var openKeys = props.defaultOpenKeys;
	    if ('selectedKeys' in props) {
	      selectedKeys = props.selectedKeys || [];
	    }
	    if ('openKeys' in props) {
	      openKeys = props.openKeys || [];
	    }
	    return {
	      selectedKeys: selectedKeys, openKeys: openKeys
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var props = {};
	    if ('selectedKeys' in nextProps) {
	      props.selectedKeys = nextProps.selectedKeys;
	    }
	    if ('openKeys' in nextProps) {
	      props.openKeys = nextProps.openKeys;
	    }
	    this.setState(props);
	  },
	
	  onDestroy: function onDestroy(key) {
	    var state = this.state;
	    var props = this.props;
	    var selectedKeys = state.selectedKeys;
	    var openKeys = state.openKeys;
	    var index = selectedKeys.indexOf(key);
	    if (!('selectedKeys' in props) && index !== -1) {
	      selectedKeys.splice(index, 1);
	    }
	    index = openKeys.indexOf(key);
	    if (!('openKeys' in props) && index !== -1) {
	      openKeys.splice(index, 1);
	    }
	  },
	
	  onItemHover: function onItemHover(e) {
	    var _this = this;
	
	    var item = e.item;
	
	    // special for top sub menu
	    if (this.props.mode !== 'inline' && !this.props.closeSubMenuOnMouseLeave && item.isSubMenu) {
	      (function () {
	        var activeKey = _this.state.activeKey;
	        var activeItem = _this.getFlatInstanceArray().filter(function (c) {
	          return c && c.props.eventKey === activeKey;
	        })[0];
	        if (activeItem && activeItem.props.open) {
	          _this.onOpenChange({
	            key: item.props.eventKey,
	            item: e.item,
	            open: true
	          });
	        }
	      })();
	    }
	
	    this.onCommonItemHover(e);
	  },
	
	  onSelect: function onSelect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      // root menu
	      var selectedKeys = this.state.selectedKeys;
	      var selectedKey = selectInfo.key;
	      if (props.multiple) {
	        selectedKeys = selectedKeys.concat([selectedKey]);
	      } else {
	        selectedKeys = [selectedKey];
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onSelect((0, _objectAssign2['default'])({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  },
	
	  onClick: function onClick(e) {
	    var props = this.props;
	    props.onClick(e);
	  },
	
	  onOpenChange: function onOpenChange(e) {
	    var openKeys = this.state.openKeys;
	    var props = this.props;
	    var changed = true;
	    if (e.open) {
	      changed = openKeys.indexOf(e.key) === -1;
	      if (changed) {
	        openKeys = openKeys.concat(e.key);
	      }
	    } else {
	      var index = openKeys.indexOf(e.key);
	      changed = index !== -1;
	      if (changed) {
	        openKeys = openKeys.concat();
	        openKeys.splice(index, 1);
	      }
	    }
	    if (changed) {
	      if (!('openKeys' in this.props)) {
	        // hack: batch does not update state
	        this.state.openKeys = openKeys;
	        this.setState({ openKeys: openKeys });
	      }
	      var info = (0, _objectAssign2['default'])({ openKeys: openKeys }, e);
	      if (e.open) {
	        props.onOpen(info);
	      } else {
	        props.onClose(info);
	      }
	    }
	  },
	
	  onDeselect: function onDeselect(selectInfo) {
	    var props = this.props;
	    if (props.selectable) {
	      var selectedKeys = this.state.selectedKeys.concat();
	      var selectedKey = selectInfo.key;
	      var index = selectedKeys.indexOf(selectedKey);
	      if (index !== -1) {
	        selectedKeys.splice(index, 1);
	      }
	      if (!('selectedKeys' in props)) {
	        this.setState({
	          selectedKeys: selectedKeys
	        });
	      }
	      props.onDeselect((0, _objectAssign2['default'])({}, selectInfo, {
	        selectedKeys: selectedKeys
	      }));
	    }
	  },
	
	  getOpenTransitionName: function getOpenTransitionName() {
	    var props = this.props;
	    var transitionName = props.openTransitionName;
	    var animationName = props.openAnimation;
	    if (!transitionName && typeof animationName === 'string') {
	      transitionName = props.prefixCls + '-open-' + animationName;
	    }
	    return transitionName;
	  },
	
	  isInlineMode: function isInlineMode() {
	    return this.props.mode === 'inline';
	  },
	
	  lastOpenSubMenu: function lastOpenSubMenu() {
	    var _this2 = this;
	
	    var lastOpen = [];
	    if (this.state.openKeys.length) {
	      lastOpen = this.getFlatInstanceArray().filter(function (c) {
	        return c && _this2.state.openKeys.indexOf(c.props.eventKey) !== -1;
	      });
	    }
	    return lastOpen[0];
	  },
	
	  renderMenuItem: function renderMenuItem(c, i, subIndex) {
	    var key = (0, _util.getKeyFromChildrenIndex)(c, this.props.eventKey, i);
	    var state = this.state;
	    var extraProps = {
	      openKeys: state.openKeys,
	      open: state.openKeys.indexOf(key) !== -1,
	      selectedKeys: state.selectedKeys,
	      selected: state.selectedKeys.indexOf(key) !== -1,
	      openSubMenuOnMouseEnter: this.props.openSubMenuOnMouseEnter
	    };
	    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
	  },
	
	  render: function render() {
	    var props = (0, _objectAssign2['default'])({}, this.props);
	    props.className += ' ' + props.prefixCls + '-root';
	    return this.renderRoot(props);
	  }
	});
	
	exports['default'] = Menu;
	module.exports = exports['default'];

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcUtil = __webpack_require__(57);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _domScrollIntoView = __webpack_require__(91);
	
	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);
	
	var _objectAssign = __webpack_require__(94);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _util = __webpack_require__(95);
	
	var _DOMWrap = __webpack_require__(96);
	
	var _DOMWrap2 = _interopRequireDefault(_DOMWrap);
	
	function allDisabled(arr) {
	  if (!arr.length) {
	    return true;
	  }
	  return arr.every(function (c) {
	    return !!c.props.disabled;
	  });
	}
	
	function getActiveKey(props, originalActiveKey) {
	  var activeKey = originalActiveKey;
	  var children = props.children;
	  var eventKey = props.eventKey;
	  if (activeKey) {
	    var found = undefined;
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (!c.props.disabled && activeKey === (0, _util.getKeyFromChildrenIndex)(c, eventKey, i)) {
	        found = true;
	      }
	    });
	    if (found) {
	      return activeKey;
	    }
	  }
	  activeKey = null;
	  if (props.defaultActiveFirst) {
	    (0, _util.loopMenuItem)(children, function (c, i) {
	      if (!activeKey && !c.props.disabled) {
	        activeKey = (0, _util.getKeyFromChildrenIndex)(c, eventKey, i);
	      }
	    });
	    return activeKey;
	  }
	  return activeKey;
	}
	
	function saveRef(index, subIndex, c) {
	  if (c) {
	    if (subIndex !== undefined) {
	      this.instanceArray[index] = this.instanceArray[index] || [];
	      this.instanceArray[index][subIndex] = c;
	    } else {
	      this.instanceArray[index] = c;
	    }
	  }
	}
	
	var MenuMixin = {
	  propTypes: {
	    focusable: _react2['default'].PropTypes.bool,
	    multiple: _react2['default'].PropTypes.bool,
	    style: _react2['default'].PropTypes.object,
	    defaultActiveFirst: _react2['default'].PropTypes.bool,
	    visible: _react2['default'].PropTypes.bool,
	    activeKey: _react2['default'].PropTypes.string,
	    selectedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    defaultSelectedKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    defaultOpenKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    openKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    children: _react2['default'].PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-menu',
	      className: '',
	      mode: 'vertical',
	      level: 1,
	      inlineIndent: 24,
	      visible: true,
	      focusable: true,
	      style: {}
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    return {
	      activeKey: getActiveKey(props, props.activeKey)
	    };
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    var props = undefined;
	    if (nextProps.activeKey) {
	      props = {
	        activeKey: getActiveKey(nextProps, nextProps.activeKey)
	      };
	    } else {
	      var originalActiveKey = this.state.activeKey;
	      var activeKey = getActiveKey(nextProps, originalActiveKey);
	      // fix: this.setState(), parent.render(),
	      if (activeKey !== originalActiveKey) {
	        props = {
	          activeKey: activeKey
	        };
	      }
	    }
	    if (props) {
	      this.setState(props);
	    }
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    return this.props.visible || nextProps.visible;
	  },
	
	  componentWillMount: function componentWillMount() {
	    this.instanceArray = [];
	  },
	
	  // all keyboard events callbacks run from here at first
	  onKeyDown: function onKeyDown(e) {
	    var _this = this;
	
	    var keyCode = e.keyCode;
	    var handled = undefined;
	    this.getFlatInstanceArray().forEach(function (obj) {
	      if (obj && obj.props.active) {
	        handled = obj.onKeyDown(e);
	      }
	    });
	    if (handled) {
	      return 1;
	    }
	    var activeItem = null;
	    if (keyCode === _rcUtil.KeyCode.UP || keyCode === _rcUtil.KeyCode.DOWN) {
	      activeItem = this.step(keyCode === _rcUtil.KeyCode.UP ? -1 : 1);
	    }
	    if (activeItem) {
	      e.preventDefault();
	      this.setState({
	        activeKey: activeItem.props.eventKey
	      }, function () {
	        (0, _domScrollIntoView2['default'])(_reactDom2['default'].findDOMNode(activeItem), _reactDom2['default'].findDOMNode(_this), {
	          onlyScrollIfNeeded: true
	        });
	      });
	      return 1;
	    } else if (activeItem === undefined) {
	      e.preventDefault();
	      this.setState({
	        activeKey: null
	      });
	      return 1;
	    }
	  },
	
	  onCommonItemHover: function onCommonItemHover(e) {
	    var mode = this.props.mode;
	    var key = e.key;
	    var hover = e.hover;
	    var trigger = e.trigger;
	
	    var activeKey = this.state.activeKey;
	    if (!trigger || hover || this.props.closeSubMenuOnMouseLeave || !e.item.isSubMenu || mode === 'inline') {
	      this.setState({
	        activeKey: hover ? key : null
	      });
	    } else {}
	    // keep active for sub menu for click active
	    // empty
	
	    // clear last open status
	    if (hover && mode !== 'inline') {
	      var activeItem = this.getFlatInstanceArray().filter(function (c) {
	        return c && c.props.eventKey === activeKey;
	      })[0];
	      if (activeItem && activeItem.isSubMenu && activeItem.props.eventKey !== key) {
	        this.onOpenChange({
	          item: activeItem,
	          key: activeItem.props.eventKey,
	          open: false
	        });
	      }
	    }
	  },
	
	  getFlatInstanceArray: function getFlatInstanceArray() {
	    var instanceArray = this.instanceArray;
	    var hasInnerArray = instanceArray.some(function (a) {
	      return Array.isArray(a);
	    });
	    if (hasInnerArray) {
	      instanceArray = [];
	      this.instanceArray.forEach(function (a) {
	        if (Array.isArray(a)) {
	          instanceArray.push.apply(instanceArray, a);
	        } else {
	          instanceArray.push(a);
	        }
	      });
	      this.instanceArray = instanceArray;
	    }
	    return instanceArray;
	  },
	
	  renderCommonMenuItem: function renderCommonMenuItem(child, i, subIndex, extraProps) {
	    var state = this.state;
	    var props = this.props;
	    var key = (0, _util.getKeyFromChildrenIndex)(child, props.eventKey, i);
	    var childProps = child.props;
	    var newChildProps = (0, _objectAssign2['default'])({
	      mode: props.mode,
	      level: props.level,
	      inlineIndent: props.inlineIndent,
	      renderMenuItem: this.renderMenuItem,
	      rootPrefixCls: props.prefixCls,
	      index: i,
	      parentMenu: this,
	      ref: childProps.disabled ? undefined : (0, _rcUtil.createChainedFunction)(child.ref, saveRef.bind(this, i, subIndex)),
	      eventKey: key,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      onItemHover: this.onItemHover,
	      active: !childProps.disabled && key === state.activeKey,
	      multiple: props.multiple,
	      onClick: this.onClick,
	      openTransitionName: this.getOpenTransitionName(),
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      onSelect: this.onSelect
	    }, extraProps);
	    if (props.mode === 'inline') {
	      newChildProps.closeSubMenuOnMouseLeave = newChildProps.openSubMenuOnMouseEnter = false;
	    }
	    return _react2['default'].cloneElement(child, newChildProps);
	  },
	
	  renderRoot: function renderRoot(props) {
	    var _classes;
	
	    this.instanceArray = [];
	    var classes = (_classes = {}, _defineProperty(_classes, props.prefixCls, 1), _defineProperty(_classes, props.prefixCls + '-' + props.mode, 1), _defineProperty(_classes, props.className, !!props.className), _classes);
	    var domProps = {
	      className: (0, _classnames2['default'])(classes),
	      role: 'menu',
	      'aria-activedescendant': ''
	    };
	    if (props.id) {
	      domProps.id = props.id;
	    }
	    if (props.focusable) {
	      domProps.tabIndex = '0';
	      domProps.onKeyDown = this.onKeyDown;
	    }
	    return(
	      // ESLint is not smart enough to know that the type of `children` was checked.
	      /* eslint-disable */
	      _react2['default'].createElement(_DOMWrap2['default'], _extends({ style: props.style,
	        tag: 'ul',
	        hiddenClassName: props.prefixCls + '-hidden',
	        visible: props.visible
	      }, domProps), _react2['default'].Children.map(props.children, this.renderMenuItem))
	      /*eslint-enable */
	
	    );
	  },
	
	  step: function step(direction) {
	    var children = this.getFlatInstanceArray();
	    var activeKey = this.state.activeKey;
	    var len = children.length;
	    if (direction < 0) {
	      children = children.concat().reverse();
	    }
	    // find current activeIndex
	    var activeIndex = -1;
	    children.every(function (c, ci) {
	      if (c && c.props.eventKey === activeKey) {
	        activeIndex = ci;
	        return false;
	      }
	      return true;
	    });
	    if (!this.props.defaultActiveFirst && activeIndex !== -1) {
	      if (allDisabled(children.slice(activeIndex, len - 1))) {
	        return undefined;
	      }
	    }
	    var start = (activeIndex + 1) % len;
	    var i = start;
	    for (;;) {
	      var child = children[i];
	      if (!child || child.props.disabled) {
	        i = (i + 1 + len) % len;
	        // complete a loop
	        if (i === start) {
	          return null;
	        }
	      } else {
	        return child;
	      }
	    }
	  }
	};
	
	exports['default'] = MenuMixin;
	module.exports = exports['default'];

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(92);

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var util = __webpack_require__(93);
	
	function scrollIntoView(elem, container, config) {
	  config = config || {};
	  // document 归一化到 window
	  if (container.nodeType === 9) {
	    container = util.getWindow(container);
	  }
	
	  var allowHorizontalScroll = config.allowHorizontalScroll;
	  var onlyScrollIfNeeded = config.onlyScrollIfNeeded;
	  var alignWithTop = config.alignWithTop;
	  var alignWithLeft = config.alignWithLeft;
	
	  allowHorizontalScroll = allowHorizontalScroll === undefined ? true : allowHorizontalScroll;
	
	  var isWin = util.isWindow(container);
	  var elemOffset = util.offset(elem);
	  var eh = util.outerHeight(elem);
	  var ew = util.outerWidth(elem);
	  var containerOffset = undefined;
	  var ch = undefined;
	  var cw = undefined;
	  var containerScroll = undefined;
	  var diffTop = undefined;
	  var diffBottom = undefined;
	  var win = undefined;
	  var winScroll = undefined;
	  var ww = undefined;
	  var wh = undefined;
	
	  if (isWin) {
	    win = container;
	    wh = util.height(win);
	    ww = util.width(win);
	    winScroll = {
	      left: util.scrollLeft(win),
	      top: util.scrollTop(win)
	    };
	    // elem 相对 container 可视视窗的距离
	    diffTop = {
	      left: elemOffset.left - winScroll.left,
	      top: elemOffset.top - winScroll.top
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (winScroll.left + ww),
	      top: elemOffset.top + eh - (winScroll.top + wh)
	    };
	    containerScroll = winScroll;
	  } else {
	    containerOffset = util.offset(container);
	    ch = container.clientHeight;
	    cw = container.clientWidth;
	    containerScroll = {
	      left: container.scrollLeft,
	      top: container.scrollTop
	    };
	    // elem 相对 container 可视视窗的距离
	    // 注意边框, offset 是边框到根节点
	    diffTop = {
	      left: elemOffset.left - (containerOffset.left + (parseFloat(util.css(container, 'borderLeftWidth')) || 0)),
	      top: elemOffset.top - (containerOffset.top + (parseFloat(util.css(container, 'borderTopWidth')) || 0))
	    };
	    diffBottom = {
	      left: elemOffset.left + ew - (containerOffset.left + cw + (parseFloat(util.css(container, 'borderRightWidth')) || 0)),
	      top: elemOffset.top + eh - (containerOffset.top + ch + (parseFloat(util.css(container, 'borderBottomWidth')) || 0))
	    };
	  }
	
	  if (diffTop.top < 0 || diffBottom.top > 0) {
	    // 强制向上
	    if (alignWithTop === true) {
	      util.scrollTop(container, containerScroll.top + diffTop.top);
	    } else if (alignWithTop === false) {
	      util.scrollTop(container, containerScroll.top + diffBottom.top);
	    } else {
	      // 自动调整
	      if (diffTop.top < 0) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  } else {
	    if (!onlyScrollIfNeeded) {
	      alignWithTop = alignWithTop === undefined ? true : !!alignWithTop;
	      if (alignWithTop) {
	        util.scrollTop(container, containerScroll.top + diffTop.top);
	      } else {
	        util.scrollTop(container, containerScroll.top + diffBottom.top);
	      }
	    }
	  }
	
	  if (allowHorizontalScroll) {
	    if (diffTop.left < 0 || diffBottom.left > 0) {
	      // 强制向上
	      if (alignWithLeft === true) {
	        util.scrollLeft(container, containerScroll.left + diffTop.left);
	      } else if (alignWithLeft === false) {
	        util.scrollLeft(container, containerScroll.left + diffBottom.left);
	      } else {
	        // 自动调整
	        if (diffTop.left < 0) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    } else {
	      if (!onlyScrollIfNeeded) {
	        alignWithLeft = alignWithLeft === undefined ? true : !!alignWithLeft;
	        if (alignWithLeft) {
	          util.scrollLeft(container, containerScroll.left + diffTop.left);
	        } else {
	          util.scrollLeft(container, containerScroll.left + diffBottom.left);
	        }
	      }
	    }
	  }
	}
	
	module.exports = scrollIntoView;

/***/ },
/* 93 */
/***/ function(module, exports) {

	'use strict';
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	};
	
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	function getClientPosition(elem) {
	  var box = undefined;
	  var x = undefined;
	  var y = undefined;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, computedStyle_) {
	  var val = '';
	  var d = elem.ownerDocument;
	  var computedStyle = computedStyle_ || d.defaultView.getComputedStyle(elem, null);
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	var getComputedStyleX = undefined;
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = undefined;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = undefined;
	  var j = undefined;
	  var i = undefined;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = undefined;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj != null && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, extra) {
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue == null || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue == null || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  }
	  if (borderBoxValueOrIsBorderBox) {
	    var padding = extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle);
	    return val + (extra === BORDER_INDEX ? 0 : padding);
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	};
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay(elem) {
	  var val = undefined;
	  var args = arguments;
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	function css(el, name, v) {
	  var value = v;
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value += 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, val) {
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	
	  var old = getOffset(elem);
	  var ret = {};
	  var current = undefined;
	  var key = undefined;
	
	  for (key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      current = parseFloat(css(elem, key)) || 0;
	      ret[key] = current + offset[key] - old[key];
	    }
	  }
	  css(elem, ret);
	}
	
	module.exports = _extends({
	  getWindow: function getWindow(node) {
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value);
	    } else {
	      return getOffset(el);
	    }
	  },
	
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var ret = {};
	    for (var i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (var i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	  scrollLeft: function scrollLeft(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollLeft(w);
	      }
	      window.scrollTo(v, getScrollTop(w));
	    } else {
	      if (v === undefined) {
	        return w.scrollLeft;
	      }
	      w.scrollLeft = v;
	    }
	  },
	  scrollTop: function scrollTop(w, v) {
	    if (isWindow(w)) {
	      if (v === undefined) {
	        return getScrollTop(w);
	      }
	      window.scrollTo(getScrollLeft(w), v);
	    } else {
	      if (v === undefined) {
	        return w.scrollTop;
	      }
	      w.scrollTop = v;
	    }
	  },
	
	  viewportWidth: 0,
	  viewportHeight: 0
	}, domUtils);

/***/ },
/* 94 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.noop = noop;
	exports.getKeyFromChildrenIndex = getKeyFromChildrenIndex;
	exports.loopMenuItem = loopMenuItem;
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var now = Date.now();
	
	function noop() {}
	
	function getKeyFromChildrenIndex(child, menuEventKey, index) {
	  var prefix = menuEventKey || '';
	  return child.key || prefix + 'item_' + now + '_' + index;
	}
	
	function loopMenuItem(children, cb) {
	  var index = -1;
	  _react2['default'].Children.forEach(children, function (c) {
	    index++;
	    if (c && c.type.isMenuItemGroup) {
	      _react2['default'].Children.forEach(c.props.children, function (c2) {
	        index++;
	        cb(c2, index);
	      });
	    } else {
	      cb(c, index);
	    }
	  });
	}

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _objectAssign = __webpack_require__(94);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var DOMWrap = _react2['default'].createClass({
	  displayName: 'DOMWrap',
	
	  propTypes: {
	    tag: _react2['default'].PropTypes.string
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tag: 'div'
	    };
	  },
	
	  render: function render() {
	    var props = (0, _objectAssign2['default'])({}, this.props);
	    if (!props.visible) {
	      props.className = props.className || '';
	      props.className += ' ' + props.hiddenClassName;
	    }
	    var Tag = props.tag;
	    return _react2['default'].createElement(Tag, props);
	  }
	});
	
	exports['default'] = DOMWrap;
	module.exports = exports['default'];

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	var _SubPopupMenu = __webpack_require__(98);
	
	var _SubPopupMenu2 = _interopRequireDefault(_SubPopupMenu);
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(57);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _objectAssign = __webpack_require__(94);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var SubMenu = _react2['default'].createClass({
	  displayName: 'SubMenu',
	
	  propTypes: {
	    parentMenu: _react2['default'].PropTypes.object,
	    title: _react2['default'].PropTypes.node,
	    onClick: _react2['default'].PropTypes.func,
	    onOpenChange: _react2['default'].PropTypes.func,
	    rootPrefixCls: _react2['default'].PropTypes.string,
	    eventKey: _react2['default'].PropTypes.string,
	    multiple: _react2['default'].PropTypes.bool,
	    active: _react2['default'].PropTypes.bool,
	    open: _react2['default'].PropTypes.bool,
	    onSelect: _react2['default'].PropTypes.func,
	    closeSubMenuOnMouseLeave: _react2['default'].PropTypes.bool,
	    openSubMenuOnMouseEnter: _react2['default'].PropTypes.bool,
	    onDeselect: _react2['default'].PropTypes.func,
	    onDestroy: _react2['default'].PropTypes.func,
	    onItemHover: _react2['default'].PropTypes.func
	  },
	
	  mixins: [__webpack_require__(99)],
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onMouseEnter: function onMouseEnter() {},
	      title: ''
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    this.isSubMenu = 1;
	    return {
	      defaultActiveFirst: false
	    };
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    var props = this.props;
	    if (props.onDestroy) {
	      props.onDestroy(props.eventKey);
	    }
	  },
	
	  onDestroy: function onDestroy(key) {
	    this.props.onDestroy(key);
	  },
	
	  onKeyDown: function onKeyDown(e) {
	    var keyCode = e.keyCode;
	    var menu = this.menuInstance;
	
	    if (keyCode === _rcUtil.KeyCode.ENTER) {
	      this.onClick(e);
	      this.setState({
	        defaultActiveFirst: true
	      });
	      return true;
	    }
	
	    if (keyCode === _rcUtil.KeyCode.RIGHT) {
	      if (this.props.open) {
	        menu.onKeyDown(e);
	      } else {
	        this.triggerOpenChange(true);
	        this.setState({
	          defaultActiveFirst: true
	        });
	      }
	      return true;
	    }
	    if (keyCode === _rcUtil.KeyCode.LEFT) {
	      var handled = undefined;
	      if (this.props.open) {
	        handled = menu.onKeyDown(e);
	      } else {
	        return undefined;
	      }
	      if (!handled) {
	        this.triggerOpenChange(false);
	        handled = true;
	      }
	      return handled;
	    }
	
	    if (this.props.open && (keyCode === _rcUtil.KeyCode.UP || keyCode === _rcUtil.KeyCode.DOWN)) {
	      return menu.onKeyDown(e);
	    }
	  },
	
	  onSubTreeMouseEnter: function onSubTreeMouseEnter() {
	    if (this.leaveTimer) {
	      clearTimeout(this.leaveTimer);
	      this.leaveTimer = null;
	    }
	  },
	
	  onOpenChange: function onOpenChange(e) {
	    this.props.onOpenChange(this.addKeyPath(e));
	  },
	
	  onMouseEnter: function onMouseEnter() {
	    if (this.leaveTimer) {
	      clearTimeout(this.leaveTimer);
	      this.leaveTimer = null;
	    }
	    var props = this.props;
	    var parentMenu = props.parentMenu;
	    if (parentMenu.menuItemMouseLeaveTimer) {
	      clearTimeout(parentMenu.menuItemMouseLeaveTimer);
	      parentMenu.menuItemMouseLeaveTimer = null;
	    }
	    props.onItemHover({
	      key: this.props.eventKey,
	      item: this,
	      hover: true,
	      trigger: 'mouseenter'
	    });
	    if (props.openSubMenuOnMouseEnter) {
	      this.triggerOpenChange(true);
	    }
	    this.setState({
	      defaultActiveFirst: false
	    });
	  },
	
	  onMouseLeave: function onMouseLeave() {
	    var _this = this;
	
	    // prevent popup menu and submenu gap
	    this.leaveTimer = setTimeout(function () {
	      // leave whole sub tree
	      // still active
	      if (_this.isMounted() && _this.props.active) {
	        _this.props.onItemHover({
	          key: _this.props.eventKey,
	          item: _this,
	          hover: false,
	          trigger: 'mouseleave'
	        });
	      }
	      if (_this.isMounted() && _this.props.open) {
	        if (_this.props.closeSubMenuOnMouseLeave) {
	          _this.triggerOpenChange(false);
	        }
	      }
	    }, 100);
	  },
	
	  onClick: function onClick() {
	    if (this.props.openSubMenuOnMouseEnter) {
	      return;
	    }
	    this.triggerOpenChange(!this.props.open, 'click');
	    this.setState({
	      defaultActiveFirst: false
	    });
	  },
	
	  onSubMenuClick: function onSubMenuClick(info) {
	    this.props.onClick(this.addKeyPath(info));
	  },
	
	  onSelect: function onSelect(info) {
	    this.props.onSelect(info);
	  },
	
	  onDeselect: function onDeselect(info) {
	    this.props.onDeselect(info);
	  },
	
	  getPrefixCls: function getPrefixCls() {
	    return this.props.rootPrefixCls + '-submenu';
	  },
	
	  getActiveClassName: function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  },
	
	  getDisabledClassName: function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  },
	
	  getOpenClassName: function getOpenClassName() {
	    return this.props.rootPrefixCls + '-submenu-open';
	  },
	
	  saveMenuInstance: function saveMenuInstance(c) {
	    this.menuInstance = c;
	  },
	
	  addKeyPath: function addKeyPath(info) {
	    return (0, _objectAssign2['default'])({}, info, {
	      keyPath: (info.keyPath || []).concat(this.props.eventKey)
	    });
	  },
	
	  triggerOpenChange: function triggerOpenChange(open, type) {
	    var key = this.props.eventKey;
	    this.onOpenChange({
	      key: key,
	      item: this,
	      trigger: type,
	      open: open
	    });
	  },
	
	  renderChildren: function renderChildren(children) {
	    var props = this.props;
	    var baseProps = {
	      mode: props.mode === 'horizontal' ? 'vertical' : props.mode,
	      visible: props.open,
	      level: props.level + 1,
	      inlineIndent: props.inlineIndent,
	      focusable: false,
	      onClick: this.onSubMenuClick,
	      onSelect: this.onSelect,
	      onDeselect: this.onDeselect,
	      onDestroy: this.onDestroy,
	      selectedKeys: props.selectedKeys,
	      eventKey: props.eventKey + '-menu-',
	      openKeys: props.openKeys,
	      openTransitionName: props.openTransitionName,
	      openAnimation: props.openAnimation,
	      onOpenChange: this.onOpenChange,
	      closeSubMenuOnMouseLeave: props.closeSubMenuOnMouseLeave,
	      defaultActiveFirst: this.state.defaultActiveFirst,
	      multiple: props.multiple,
	      prefixCls: props.rootPrefixCls,
	      id: this._menuId,
	      ref: this.saveMenuInstance
	    };
	    return _react2['default'].createElement(_SubPopupMenu2['default'], baseProps, children);
	  },
	
	  render: function render() {
	    var _classes;
	
	    this.haveOpen = this.haveOpen || this.props.open;
	    var props = this.props;
	    var prefixCls = this.getPrefixCls();
	    var classes = (_classes = {}, _defineProperty(_classes, props.className, !!props.className), _defineProperty(_classes, prefixCls + '-' + props.mode, 1), _classes);
	
	    classes[this.getOpenClassName()] = this.props.open;
	    classes[this.getActiveClassName()] = props.active;
	    classes[this.getDisabledClassName()] = props.disabled;
	    this._menuId = this._menuId || (0, _rcUtil.guid)();
	    classes[prefixCls] = true;
	    classes[prefixCls + '-' + props.mode] = 1;
	    var clickEvents = {};
	    var mouseEvents = {};
	    var titleMouseEvents = {};
	    if (!props.disabled) {
	      clickEvents = {
	        onClick: this.onClick
	      };
	      mouseEvents = {
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onSubTreeMouseEnter
	      };
	      // only works in title, not outer li
	      titleMouseEvents = {
	        onMouseEnter: this.onMouseEnter
	      };
	    }
	    var style = {};
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    return _react2['default'].createElement('li', _extends({ className: (0, _classnames2['default'])(classes) }, mouseEvents), _react2['default'].createElement('div', _extends({
	      style: style,
	      className: prefixCls + '-title'
	    }, titleMouseEvents, clickEvents, {
	      'aria-open': props.open,
	      'aria-owns': this._menuId,
	      'aria-haspopup': 'true'
	    }), props.title), this.renderChildren(props.children));
	  }
	});
	
	exports['default'] = SubMenu;
	module.exports = exports['default'];

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _MenuMixin = __webpack_require__(90);
	
	var _MenuMixin2 = _interopRequireDefault(_MenuMixin);
	
	var _objectAssign = __webpack_require__(94);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var _util = __webpack_require__(95);
	
	var _rcAnimate = __webpack_require__(79);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var SubPopupMenu = _react2['default'].createClass({
	  displayName: 'SubPopupMenu',
	
	  propTypes: {
	    onSelect: _react2['default'].PropTypes.func,
	    onClick: _react2['default'].PropTypes.func,
	    onDeselect: _react2['default'].PropTypes.func,
	    onOpenChange: _react2['default'].PropTypes.func,
	    onDestroy: _react2['default'].PropTypes.func,
	    openTransitionName: _react2['default'].PropTypes.string,
	    openAnimation: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.object]),
	    openKeys: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
	    closeSubMenuOnMouseLeave: _react2['default'].PropTypes.bool,
	    visible: _react2['default'].PropTypes.bool,
	    children: _react2['default'].PropTypes.any
	  },
	
	  mixins: [_MenuMixin2['default']],
	
	  onDeselect: function onDeselect(selectInfo) {
	    this.props.onDeselect(selectInfo);
	  },
	
	  onSelect: function onSelect(selectInfo) {
	    this.props.onSelect(selectInfo);
	  },
	
	  onClick: function onClick(e) {
	    this.props.onClick(e);
	  },
	
	  onOpenChange: function onOpenChange(e) {
	    this.props.onOpenChange(e);
	  },
	
	  onDestroy: function onDestroy(key) {
	    this.props.onDestroy(key);
	  },
	
	  onItemHover: function onItemHover(e) {
	    this.onCommonItemHover(e);
	  },
	
	  getOpenTransitionName: function getOpenTransitionName() {
	    return this.props.openTransitionName;
	  },
	
	  renderMenuItem: function renderMenuItem(c, i, subIndex) {
	    var props = this.props;
	    var key = (0, _util.getKeyFromChildrenIndex)(c, props.eventKey, i);
	    var extraProps = {
	      openKeys: props.openKeys,
	      selectedKeys: props.selectedKeys,
	      open: props.openKeys.indexOf(key) !== -1,
	      selected: props.selectedKeys.indexOf(key) !== -1,
	      openSubMenuOnMouseEnter: true
	    };
	    return this.renderCommonMenuItem(c, i, subIndex, extraProps);
	  },
	
	  render: function render() {
	    var renderFirst = this.renderFirst;
	    this.renderFirst = 1;
	    this.haveOpened = this.haveOpened || this.props.visible;
	    if (!this.haveOpened) {
	      return null;
	    }
	    var transitionAppear = true;
	    if (!renderFirst && this.props.visible) {
	      transitionAppear = false;
	    }
	    var props = (0, _objectAssign2['default'])({}, this.props);
	    props.className += ' ' + props.prefixCls + '-sub';
	    var animProps = {};
	    if (props.openTransitionName) {
	      animProps.transitionName = props.openTransitionName;
	    } else if (typeof props.openAnimation === 'object') {
	      animProps.animation = (0, _objectAssign2['default'])({}, props.openAnimation);
	      if (!transitionAppear) {
	        delete animProps.animation.appear;
	      }
	    }
	    return _react2['default'].createElement(_rcAnimate2['default'], _extends({}, animProps, {
	      showProp: 'visible',
	      component: '',
	      transitionAppear: transitionAppear }), this.renderRoot(props));
	  }
	});
	
	exports['default'] = SubPopupMenu;
	module.exports = exports['default'];

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _rcUtil = __webpack_require__(57);
	
	var _rcUtil2 = _interopRequireDefault(_rcUtil);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	exports['default'] = {
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate();
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.mode !== 'inline') {
	      if (this.props.open) {
	        this.bindRootCloseHandlers();
	      } else {
	        this.unbindRootCloseHandlers();
	      }
	    }
	  },
	
	  handleDocumentKeyUp: function handleDocumentKeyUp(e) {
	    if (e.keyCode === _rcUtil.KeyCode.ESC) {
	      this.props.onItemHover({
	        key: this.props.eventKey,
	        item: this,
	        hover: false
	      });
	    }
	  },
	
	  handleDocumentClick: function handleDocumentClick(e) {
	    // If the click originated from within this component
	    // don't do anything.
	    if (_rcUtil2['default'].Dom.contains(_reactDom2['default'].findDOMNode(this), e.target)) {
	      return;
	    }
	    var props = this.props;
	    props.onItemHover({
	      hover: false,
	      item: this,
	      key: this.props.eventKey
	    });
	    this.triggerOpenChange(false);
	  },
	
	  bindRootCloseHandlers: function bindRootCloseHandlers() {
	    if (!this._onDocumentClickListener) {
	      this._onDocumentClickListener = _rcUtil2['default'].Dom.addEventListener(document, 'click', this.handleDocumentClick);
	      this._onDocumentKeyupListener = _rcUtil2['default'].Dom.addEventListener(document, 'keyup', this.handleDocumentKeyUp);
	    }
	  },
	
	  unbindRootCloseHandlers: function unbindRootCloseHandlers() {
	    if (this._onDocumentClickListener) {
	      this._onDocumentClickListener.remove();
	      this._onDocumentClickListener = null;
	    }
	
	    if (this._onDocumentKeyupListener) {
	      this._onDocumentKeyupListener.remove();
	      this._onDocumentKeyupListener = null;
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.unbindRootCloseHandlers();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _rcUtil = __webpack_require__(57);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var MenuItem = _react2['default'].createClass({
	  displayName: 'MenuItem',
	
	  propTypes: {
	    rootPrefixCls: _react2['default'].PropTypes.string,
	    eventKey: _react2['default'].PropTypes.string,
	    active: _react2['default'].PropTypes.bool,
	    selected: _react2['default'].PropTypes.bool,
	    disabled: _react2['default'].PropTypes.bool,
	    title: _react2['default'].PropTypes.string,
	    onSelect: _react2['default'].PropTypes.func,
	    onClick: _react2['default'].PropTypes.func,
	    onDeselect: _react2['default'].PropTypes.func,
	    parentMenu: _react2['default'].PropTypes.object,
	    onItemHover: _react2['default'].PropTypes.func,
	    onDestroy: _react2['default'].PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onSelect: function onSelect() {},
	      onMouseEnter: function onMouseEnter() {}
	    };
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    var props = this.props;
	    if (props.onDestroy) {
	      props.onDestroy(props.eventKey);
	    }
	  },
	
	  onKeyDown: function onKeyDown(e) {
	    var keyCode = e.keyCode;
	    if (keyCode === _rcUtil.KeyCode.ENTER) {
	      this.onClick(e);
	      return true;
	    }
	  },
	
	  onMouseLeave: function onMouseLeave() {
	    var _this = this;
	
	    var eventKey = this.props.eventKey;
	    var parentMenu = this.props.parentMenu;
	    parentMenu.menuItemMouseLeaveTimer = setTimeout(function () {
	      if (_this.isMounted() && _this.props.active) {
	        _this.props.onItemHover({
	          key: eventKey,
	          item: _this,
	          hover: false,
	          trigger: 'mouseleave'
	        });
	      }
	    }, 30);
	  },
	
	  onMouseEnter: function onMouseEnter() {
	    var props = this.props;
	    var parentMenu = this.props.parentMenu;
	    if (parentMenu.menuItemMouseLeaveTimer) {
	      clearTimeout(parentMenu.menuItemMouseLeaveTimer);
	      parentMenu.menuItemMouseLeaveTimer = null;
	    }
	    var eventKey = props.eventKey;
	    props.onItemHover({
	      key: eventKey,
	      item: this,
	      hover: true,
	      trigger: 'mouseenter'
	    });
	  },
	
	  onClick: function onClick(e) {
	    var props = this.props;
	    var eventKey = props.eventKey;
	    var info = {
	      key: eventKey,
	      keyPath: [eventKey],
	      item: this,
	      domEvent: e
	    };
	    props.onClick(info);
	    if (props.multiple) {
	      if (props.selected) {
	        props.onDeselect(info);
	      } else {
	        props.onSelect(info);
	      }
	    } else if (!props.selected) {
	      props.onSelect(info);
	    }
	  },
	
	  getPrefixCls: function getPrefixCls() {
	    return this.props.rootPrefixCls + '-item';
	  },
	
	  getActiveClassName: function getActiveClassName() {
	    return this.getPrefixCls() + '-active';
	  },
	
	  getSelectedClassName: function getSelectedClassName() {
	    return this.getPrefixCls() + '-selected';
	  },
	
	  getDisabledClassName: function getDisabledClassName() {
	    return this.getPrefixCls() + '-disabled';
	  },
	
	  render: function render() {
	    var props = this.props;
	    var classes = {};
	    classes[this.getActiveClassName()] = !props.disabled && props.active;
	    classes[this.getSelectedClassName()] = props.selected;
	    classes[this.getDisabledClassName()] = props.disabled;
	    classes[this.getPrefixCls()] = true;
	    classes[props.className] = !!props.className;
	    var attrs = {
	      title: props.title,
	      className: (0, _classnames2['default'])(classes),
	      role: 'menuitem',
	      'aria-selected': props.selected,
	      'aria-disabled': props.disabled
	    };
	    var mouseEvent = {};
	    if (!props.disabled) {
	      mouseEvent = {
	        onClick: this.onClick,
	        onMouseLeave: this.onMouseLeave,
	        onMouseEnter: this.onMouseEnter
	      };
	    }
	    var style = {};
	    if (props.mode === 'inline') {
	      style.paddingLeft = props.inlineIndent * props.level;
	    }
	    return _react2['default'].createElement('li', _extends({ style: style
	    }, attrs, mouseEvent), props.children);
	  }
	});
	
	exports['default'] = MenuItem;
	module.exports = exports['default'];

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var MenuItemGroup = _react2['default'].createClass({
	  displayName: 'MenuItemGroup',
	
	  propTypes: {
	    renderMenuItem: _react.PropTypes.func,
	    index: _react.PropTypes.number
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: true
	    };
	  },
	
	  renderInnerMenuItem: function renderInnerMenuItem(item, subIndex) {
	    var renderMenuItem = this.props.renderMenuItem;
	    return renderMenuItem(item, this.props.index, subIndex);
	  },
	
	  render: function render() {
	    var props = this.props;
	    var className = props.className || '';
	    var rootPrefixCls = props.rootPrefixCls;
	
	    className += ' ' + rootPrefixCls + '-item-group';
	    var titleClassName = rootPrefixCls + '-item-group-title';
	    var listClassName = rootPrefixCls + '-item-group-list';
	    return _react2['default'].createElement('li', { className: className }, _react2['default'].createElement('div', { className: titleClassName }, props.title), _react2['default'].createElement('ul', { className: listClassName }, _react2['default'].Children.map(props.children, this.renderInnerMenuItem)));
	  }
	});
	
	MenuItemGroup.isMenuItemGroup = true;
	
	exports['default'] = MenuItemGroup;
	module.exports = exports['default'];

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Divider = _react2['default'].createClass({
	  displayName: 'Divider',
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      disabled: true
	    };
	  },
	
	  render: function render() {
	    var props = this.props;
	    var className = props.className || '';
	    var rootPrefixCls = props.rootPrefixCls;
	    className += ' ' + (rootPrefixCls + '-item-divider');
	    return _react2['default'].createElement('li', _extends({}, props, { className: className }));
	  }
	});
	
	exports['default'] = Divider;
	module.exports = exports['default'];

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
	}
	
	var _rcTrigger = __webpack_require__(104);
	
	var _rcTrigger2 = _interopRequireDefault(_rcTrigger);
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _DropdownMenu = __webpack_require__(120);
	
	var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _OptGroup = __webpack_require__(78);
	
	var _OptGroup2 = _interopRequireDefault(_OptGroup);
	
	var _util = __webpack_require__(87);
	
	var _rcMenu = __webpack_require__(88);
	
	var BUILT_IN_PLACEMENTS = {
	  bottomLeft: {
	    points: ['tl', 'bl'],
	    offset: [0, 4],
	    overflow: {
	      adjustX: 0,
	      adjustY: 1
	    }
	  },
	  topLeft: {
	    points: ['bl', 'tl'],
	    offset: [0, -4],
	    overflow: {
	      adjustX: 0,
	      adjustY: 1
	    }
	  }
	};
	
	var SelectTrigger = _react2['default'].createClass({
	  displayName: 'SelectTrigger',
	
	  propTypes: {
	    dropdownMatchSelectWidth: _react.PropTypes.bool,
	    visible: _react.PropTypes.bool,
	    filterOption: _react.PropTypes.any,
	    options: _react.PropTypes.any,
	    prefixCls: _react.PropTypes.string,
	    popupClassName: _react.PropTypes.string,
	    children: _react.PropTypes.any
	  },
	
	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.dropdownMatchSelectWidth && this.props.visible) {
	      var dropdownDOMNode = this.getPopupDOMNode();
	      if (dropdownDOMNode) {
	        dropdownDOMNode.style.width = _reactDom2['default'].findDOMNode(this).offsetWidth + 'px';
	      }
	    }
	  },
	
	  getInnerMenu: function getInnerMenu() {
	    return this.popupMenu && this.popupMenu.refs.menu;
	  },
	
	  getPopupDOMNode: function getPopupDOMNode() {
	    return this.refs.trigger.getPopupDomNode();
	  },
	
	  getDropdownElement: function getDropdownElement(newProps) {
	    var props = this.props;
	    return _react2['default'].createElement(_DropdownMenu2['default'], _extends({
	      ref: this.saveMenu
	    }, newProps, {
	      prefixCls: this.getDropdownPrefixCls(),
	      onMenuSelect: props.onMenuSelect,
	      onMenuDeselect: props.onMenuDeselect,
	      value: props.value,
	      defaultActiveFirstOption: props.defaultActiveFirstOption,
	      dropdownMenuStyle: props.dropdownMenuStyle
	    }));
	  },
	
	  getDropdownTransitionName: function getDropdownTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = this.getDropdownPrefixCls() + '-' + props.animation;
	    }
	    return transitionName;
	  },
	
	  getDropdownPrefixCls: function getDropdownPrefixCls() {
	    return this.props.prefixCls + '-dropdown';
	  },
	
	  filterOption: function filterOption(input, child) {
	    if (!input) {
	      return true;
	    }
	    var filterOption = this.props.filterOption;
	    if (!filterOption) {
	      return true;
	    }
	    if (child.props.disabled) {
	      return false;
	    }
	    return filterOption.call(this, input, child);
	  },
	
	  saveMenu: function saveMenu(menu) {
	    this.popupMenu = menu;
	  },
	
	  renderFilterOptions: function renderFilterOptions() {
	    return this.renderFilterOptionsFromChildren(this.props.options, true);
	  },
	
	  renderFilterOptionsFromChildren: function renderFilterOptionsFromChildren(children, showNotFound) {
	    var _this = this;
	
	    var sel = [];
	    var props = this.props;
	    var inputValue = props.inputValue;
	    var childrenKeys = [];
	    var tags = props.tags;
	    _react2['default'].Children.forEach(children, function (child) {
	      if (child.type === _OptGroup2['default']) {
	        var innerItems = _this.renderFilterOptionsFromChildren(child.props.children, false);
	        if (innerItems.length) {
	          var label = child.props.label;
	          var key = child.key;
	          if (!key && typeof label === 'string') {
	            key = label;
	          } else if (!label && key) {
	            label = key;
	          }
	          sel.push(_react2['default'].createElement(_rcMenu.ItemGroup, { key: key, title: label }, innerItems));
	        }
	        return;
	      }
	      var childValue = (0, _util.getValuePropValue)(child);
	      if (_this.filterOption(inputValue, child)) {
	        sel.push(_react2['default'].createElement(_rcMenu.Item, _extends({
	          value: childValue,
	          key: childValue
	        }, child.props)));
	      }
	      if (tags && !child.props.disabled) {
	        childrenKeys.push(childValue);
	      }
	    });
	    if (tags) {
	      // tags value must be string
	      var value = props.value;
	      value = value.filter(function (singleValue) {
	        return childrenKeys.indexOf(singleValue) === -1 && (!inputValue || singleValue.indexOf(inputValue) > -1);
	      });
	      sel = sel.concat(value.map(function (singleValue) {
	        return _react2['default'].createElement(_rcMenu.Item, { value: singleValue, key: singleValue }, singleValue);
	      }));
	      if (inputValue) {
	        var notFindInputItem = sel.every(function (option) {
	          return (0, _util.getValuePropValue)(option) !== inputValue;
	        });
	        if (notFindInputItem) {
	          sel.unshift(_react2['default'].createElement(_rcMenu.Item, { value: inputValue, key: inputValue }, inputValue));
	        }
	      }
	    }
	    if (!sel.length && showNotFound && props.notFoundContent) {
	      sel = [_react2['default'].createElement(_rcMenu.Item, { disabled: true, value: 'NOT_FOUND', key: 'NOT_FOUND' }, props.notFoundContent)];
	    }
	    return sel;
	  },
	
	  render: function render() {
	    var _popupClassName;
	
	    var props = this.props;
	    var multiple = props.multiple;
	    var dropdownPrefixCls = this.getDropdownPrefixCls();
	    var popupClassName = (_popupClassName = {}, _defineProperty(_popupClassName, props.dropdownClassName, !!props.dropdownClassName), _defineProperty(_popupClassName, dropdownPrefixCls + '--' + (multiple ? 'multiple' : 'single'), 1), _popupClassName);
	    var visible = props.visible;
	    var menuItems = undefined;
	    var search = undefined;
	    menuItems = this.renderFilterOptions();
	    search = multiple || props.combobox || !props.showSearch ? null : _react2['default'].createElement('span', { className: dropdownPrefixCls + '-search' }, props.inputElement);
	    if (!search && !menuItems.length) {
	      visible = false;
	    }
	    var popupElement = this.getDropdownElement({
	      menuItems: menuItems,
	      search: search,
	      multiple: multiple,
	      visible: visible
	    });
	    return _react2['default'].createElement(_rcTrigger2['default'], { action: props.disabled ? [] : ['click'],
	      ref: 'trigger',
	      getPopupContainer: props.getPopupContainer,
	      popupPlacement: 'bottomLeft',
	      builtinPlacements: BUILT_IN_PLACEMENTS,
	      prefixCls: dropdownPrefixCls,
	      popupTransitionName: this.getDropdownTransitionName(),
	      onPopupVisibleChange: props.onDropdownVisibleChange,
	      popup: popupElement,
	      popupVisible: visible,
	      popupClassName: (0, _classnames2['default'])(popupClassName),
	      popupStyle: props.dropdownStyle
	    }, this.props.children);
	  }
	});
	
	exports['default'] = SelectTrigger;
	module.exports = exports['default'];

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(105);

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcUtil = __webpack_require__(57);
	
	var _Popup = __webpack_require__(106);
	
	var _Popup2 = _interopRequireDefault(_Popup);
	
	var _utils = __webpack_require__(119);
	
	function noop() {}
	
	function returnEmptyString() {
	  return '';
	}
	
	var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];
	
	var Trigger = _react2['default'].createClass({
	  displayName: 'Trigger',
	
	  propTypes: {
	    action: _react.PropTypes.any,
	    getPopupClassNameFromAlign: _react.PropTypes.any,
	    onPopupVisibleChange: _react.PropTypes.func,
	    afterPopupVisibleChange: _react.PropTypes.func,
	    popup: _react.PropTypes.node.isRequired,
	    popupStyle: _react.PropTypes.object,
	    popupClassName: _react.PropTypes.string,
	    popupPlacement: _react.PropTypes.string,
	    builtinPlacements: _react.PropTypes.object,
	    popupTransitionName: _react.PropTypes.string,
	    popupAnimation: _react.PropTypes.any,
	    mouseEnterDelay: _react.PropTypes.number,
	    mouseLeaveDelay: _react.PropTypes.number,
	    getPopupContainer: _react.PropTypes.func,
	    destroyPopupOnHide: _react.PropTypes.bool,
	    popupAlign: _react.PropTypes.object,
	    popupVisible: _react.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      prefixCls: 'rc-trigger-popup',
	      getPopupClassNameFromAlign: returnEmptyString,
	      onPopupVisibleChange: noop,
	      afterPopupVisibleChange: noop,
	      popupClassName: '',
	      mouseEnterDelay: 0,
	      mouseLeaveDelay: 0.1,
	      popupStyle: {},
	      destroyPopupOnHide: false,
	      popupAlign: {},
	      defaultPopupVisible: false,
	      action: []
	    };
	  },
	
	  getInitialState: function getInitialState() {
	    var props = this.props;
	    var popupVisible = undefined;
	    if ('popupVisible' in props) {
	      popupVisible = !!props.popupVisible;
	    } else {
	      popupVisible = !!props.defaultPopupVisible;
	    }
	    return { popupVisible: popupVisible };
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.componentDidUpdate({}, {
	      popupVisible: this.state.popupVisible
	    });
	  },
	
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if ('popupVisible' in nextProps) {
	      this.setState({
	        popupVisible: !!nextProps.popupVisible
	      });
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    var _this = this;
	
	    var props = this.props;
	    var state = this.state;
	    if (this.popupRendered) {
	      var _ret = (function () {
	        var self = _this;
	        _reactDom2['default'].unstable_renderSubtreeIntoContainer(_this, _this.getPopupElement(), _this.getPopupContainer(), function renderPopup() {
	          if (this.isMounted()) {
	            self.popupDomNode = (0, _reactDom.findDOMNode)(this);
	          } else {
	            self.popupDomNode = null;
	          }
	          if (prevState.popupVisible !== state.popupVisible) {
	            props.afterPopupVisibleChange(state.popupVisible);
	          }
	        });
	        if (props.action.indexOf('click') !== -1) {
	          if (state.popupVisible) {
	            if (!_this.clickOutsideHandler) {
	              _this.clickOutsideHandler = _rcUtil.Dom.addEventListener(document, 'mousedown', _this.onDocumentClick);
	              _this.touchOutsideHandler = _rcUtil.Dom.addEventListener(document, 'touchstart', _this.onDocumentClick);
	            }
	            return {
	              v: undefined
	            };
	          }
	        }
	        if (_this.clickOutsideHandler) {
	          _this.clickOutsideHandler.remove();
	          _this.touchOutsideHandler.remove();
	          _this.clickOutsideHandler = null;
	          _this.touchOutsideHandler = null;
	        }
	      })();
	
	      if (typeof _ret === 'object') return _ret.v;
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    var popupContainer = this.popupContainer;
	    if (popupContainer) {
	      _reactDom2['default'].unmountComponentAtNode(popupContainer);
	      if (this.props.getPopupContainer) {
	        var mountNode = this.props.getPopupContainer((0, _reactDom.findDOMNode)(this));
	        mountNode.removeChild(popupContainer);
	      } else {
	        document.body.removeChild(popupContainer);
	      }
	      this.popupContainer = null;
	    }
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	    if (this.clickOutsideHandler) {
	      this.clickOutsideHandler.remove();
	      this.touchOutsideHandler.remove();
	      this.clickOutsideHandler = null;
	      this.touchOutsideHandler = null;
	    }
	  },
	
	  onMouseEnter: function onMouseEnter() {
	    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
	  },
	
	  onMouseLeave: function onMouseLeave() {
	    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
	  },
	
	  onFocus: function onFocus() {
	    this.focusTime = Date.now();
	    this.setPopupVisible(true);
	  },
	
	  onMouseDown: function onMouseDown() {
	    this.preClickTime = Date.now();
	  },
	
	  onTouchStart: function onTouchStart() {
	    this.preTouchTime = Date.now();
	  },
	
	  onBlur: function onBlur() {
	    this.setPopupVisible(false);
	  },
	
	  onClick: function onClick(event) {
	    // focus will trigger click
	    if (this.focusTime) {
	      var preTime = undefined;
	      if (this.preClickTime && this.preTouchTime) {
	        preTime = Math.min(this.preClickTime, this.preTouchTime);
	      } else if (this.preClickTime) {
	        preTime = this.preClickTime;
	      } else if (this.preTouchTime) {
	        preTime = this.preTouchTime;
	      }
	      if (Math.abs(preTime - this.focusTime) < 20) {
	        return;
	      }
	      this.focusTime = 0;
	    }
	    this.preClickTime = 0;
	    this.preTouchTime = 0;
	    event.preventDefault();
	    this.setPopupVisible(!this.state.popupVisible);
	  },
	
	  onDocumentClick: function onDocumentClick(event) {
	    var target = event.target;
	    var root = (0, _reactDom.findDOMNode)(this);
	    var popupNode = this.getPopupDomNode();
	    if (!_rcUtil.Dom.contains(root, target) && !_rcUtil.Dom.contains(popupNode, target)) {
	      this.setPopupVisible(false);
	    }
	  },
	
	  getPopupDomNode: function getPopupDomNode() {
	    // for test
	    return this.popupDomNode;
	  },
	
	  getPopupContainer: function getPopupContainer() {
	    if (!this.popupContainer) {
	      this.popupContainer = document.createElement('div');
	      if (this.props.getPopupContainer) {
	        var mountNode = this.props.getPopupContainer((0, _reactDom.findDOMNode)(this));
	        mountNode.appendChild(this.popupContainer);
	      } else {
	        document.body.appendChild(this.popupContainer);
	      }
	    }
	    return this.popupContainer;
	  },
	
	  getPopupClassNameFromAlign: function getPopupClassNameFromAlign(align) {
	    var className = [];
	    var props = this.props;
	    var popupPlacement = props.popupPlacement;
	    var builtinPlacements = props.builtinPlacements;
	    var prefixCls = props.prefixCls;
	
	    if (popupPlacement && builtinPlacements) {
	      className.push((0, _utils.getPopupClassNameFromAlign)(builtinPlacements, prefixCls, align));
	    }
	    if (props.getPopupClassNameFromAlign) {
	      className.push(props.getPopupClassNameFromAlign(align));
	    }
	    return className.join(' ');
	  },
	
	  getPopupAlign: function getPopupAlign() {
	    var props = this.props;
	    var popupPlacement = props.popupPlacement;
	    var popupAlign = props.popupAlign;
	    var builtinPlacements = props.builtinPlacements;
	
	    if (popupPlacement && builtinPlacements) {
	      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
	    }
	    return popupAlign;
	  },
	
	  getPopupElement: function getPopupElement() {
	    var props = this.props;
	    var state = this.state;
	    var mouseProps = {};
	    if (props.action.indexOf('hover') !== -1) {
	      mouseProps.onMouseEnter = this.onMouseEnter;
	      mouseProps.onMouseLeave = this.onMouseLeave;
	    }
	    return _react2['default'].createElement(_Popup2['default'], _extends({ prefixCls: props.prefixCls,
	      destroyPopupOnHide: props.destroyPopupOnHide,
	      visible: state.popupVisible,
	      className: props.popupClassName,
	      action: props.action,
	      align: this.getPopupAlign(),
	      animation: props.popupAnimation,
	      getClassNameFromAlign: this.getPopupClassNameFromAlign
	    }, mouseProps, {
	      wrap: this,
	      style: props.popupStyle,
	      transitionName: props.popupTransitionName }), props.popup);
	  },
	
	  setPopupVisible: function setPopupVisible(popupVisible) {
	    if (this.state.popupVisible !== popupVisible) {
	      if (!('popupVisible' in this.props)) {
	        this.setState({
	          popupVisible: popupVisible
	        });
	      }
	      this.props.onPopupVisibleChange(popupVisible);
	    }
	  },
	
	  delaySetPopupVisible: function delaySetPopupVisible(visible, delayS) {
	    var _this2 = this;
	
	    var delay = delayS * 1000;
	    if (this.delayTimer) {
	      clearTimeout(this.delayTimer);
	      this.delayTimer = null;
	    }
	    if (delay) {
	      this.delayTimer = setTimeout(function () {
	        _this2.setPopupVisible(visible);
	        _this2.delayTimer = null;
	      }, delay);
	    } else {
	      this.setPopupVisible(visible);
	    }
	  },
	
	  render: function render() {
	    this.popupRendered = this.popupRendered || this.state.popupVisible;
	    var props = this.props;
	    var children = props.children;
	    var child = _react2['default'].Children.only(children);
	    var childProps = child.props || {};
	    var newChildProps = {};
	    var trigger = props.action;
	    if (trigger.indexOf('click') !== -1) {
	      newChildProps.onClick = (0, _rcUtil.createChainedFunction)(this.onClick, childProps.onClick);
	      newChildProps.onMouseDown = (0, _rcUtil.createChainedFunction)(this.onMouseDown, childProps.onMouseDown);
	      newChildProps.onTouchStart = (0, _rcUtil.createChainedFunction)(this.onTouchStart, childProps.onTouchStart);
	    }
	    if (trigger.indexOf('hover') !== -1) {
	      newChildProps.onMouseEnter = (0, _rcUtil.createChainedFunction)(this.onMouseEnter, childProps.onMouseEnter);
	      newChildProps.onMouseLeave = (0, _rcUtil.createChainedFunction)(this.onMouseLeave, childProps.onMouseLeave);
	    }
	    if (trigger.indexOf('focus') !== -1) {
	      newChildProps.onFocus = (0, _rcUtil.createChainedFunction)(this.onFocus, childProps.onFocus);
	      newChildProps.onBlur = (0, _rcUtil.createChainedFunction)(this.onBlur, childProps.onBlur);
	    }
	
	    ALL_HANDLERS.forEach(function (handler) {
	      var newFn = undefined;
	      if (props[handler] && newChildProps[handler]) {
	        newFn = (0, _rcUtil.createChainedFunction)(props[handler], newChildProps[handler]);
	      } else {
	        newFn = props[handler] || newChildProps[handler];
	      }
	      if (newFn) {
	        newChildProps[handler] = newFn;
	      }
	    });
	
	    return _react2['default'].cloneElement(child, newChildProps);
	  }
	});
	
	exports['default'] = Trigger;
	module.exports = exports['default'];

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcAlign = __webpack_require__(107);
	
	var _rcAlign2 = _interopRequireDefault(_rcAlign);
	
	var _rcAnimate = __webpack_require__(79);
	
	var _rcAnimate2 = _interopRequireDefault(_rcAnimate);
	
	var _PopupInner = __webpack_require__(118);
	
	var _PopupInner2 = _interopRequireDefault(_PopupInner);
	
	var Popup = _react2['default'].createClass({
	  displayName: 'Popup',
	
	  propTypes: {
	    visible: _react.PropTypes.bool,
	    wrap: _react.PropTypes.object,
	    style: _react.PropTypes.object,
	    getClassNameFromAlign: _react.PropTypes.func,
	    onMouseEnter: _react.PropTypes.func,
	    className: _react.PropTypes.string,
	    onMouseLeave: _react.PropTypes.func
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.rootNode = this.getPopupDomNode();
	  },
	
	  onAlign: function onAlign(popupDomNode, align) {
	    var props = this.props;
	    var alignClassName = props.getClassNameFromAlign(props.align);
	    var currentAlignClassName = props.getClassNameFromAlign(align);
	    if (alignClassName !== currentAlignClassName) {
	      this.currentAlignClassName = currentAlignClassName;
	      popupDomNode.className = this.getClassName(currentAlignClassName);
	    }
	  },
	
	  getPopupDomNode: function getPopupDomNode() {
	    return _reactDom2['default'].findDOMNode(this);
	  },
	
	  getTarget: function getTarget() {
	    return _reactDom2['default'].findDOMNode(this.props.wrap);
	  },
	
	  getTransitionName: function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.prefixCls + '-' + props.animation;
	    }
	    return transitionName;
	  },
	
	  getClassName: function getClassName(currentAlignClassName) {
	    var props = this.props;
	    var prefixCls = props.prefixCls;
	
	    var className = prefixCls + ' ' + props.className + ' ';
	    className += currentAlignClassName;
	    return className;
	  },
	
	  render: function render() {
	    var props = this.props;
	    var align = props.align;
	    var style = props.style;
	    var visible = props.visible;
	    var prefixCls = props.prefixCls;
	    var destroyPopupOnHide = props.destroyPopupOnHide;
	
	    var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
	    var hiddenClassName = prefixCls + '-hidden';
	    if (!visible) {
	      this.currentAlignClassName = null;
	    }
	    if (destroyPopupOnHide) {
	      return _react2['default'].createElement(_rcAnimate2['default'], { component: '',
	        exclusive: true,
	        transitionAppear: true,
	        transitionName: this.getTransitionName() }, visible ? _react2['default'].createElement(_rcAlign2['default'], { target: this.getTarget,
	        key: 'popup',
	        monitorWindowResize: true,
	        align: align,
	        onAlign: this.onAlign }, _react2['default'].createElement(_PopupInner2['default'], { className: className,
	        visible: true,
	        onMouseEnter: props.onMouseEnter,
	        onMouseLeave: props.onMouseLeave,
	        style: style }, props.children)) : null);
	    }
	    return _react2['default'].createElement(_rcAnimate2['default'], { component: '',
	      exclusive: true,
	      transitionAppear: true,
	      transitionName: this.getTransitionName(),
	      showProp: 'xVisible' }, _react2['default'].createElement(_rcAlign2['default'], { target: this.getTarget,
	      key: 'popup',
	      monitorWindowResize: true,
	      xVisible: visible,
	      childrenProps: {
	        visible: 'xVisible'
	      },
	      disabled: !visible,
	      align: align,
	      onAlign: this.onAlign }, _react2['default'].createElement(_PopupInner2['default'], { className: className,
	      hiddenClassName: hiddenClassName,
	      onMouseEnter: props.onMouseEnter,
	      onMouseLeave: props.onMouseLeave,
	      style: style }, props.children)));
	  }
	});
	
	exports['default'] = Popup;
	module.exports = exports['default'];

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// export this package's api
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _Align = __webpack_require__(108);
	
	var _Align2 = _interopRequireDefault(_Align);
	
	exports['default'] = _Align2['default'];
	module.exports = exports['default'];

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domAlign = __webpack_require__(109);
	
	var _domAlign2 = _interopRequireDefault(_domAlign);
	
	var _rcUtil = __webpack_require__(57);
	
	var _isWindow = __webpack_require__(117);
	
	var _isWindow2 = _interopRequireDefault(_isWindow);
	
	function buffer(fn, ms) {
	  var timer = undefined;
	  return function bufferFn() {
	    if (timer) {
	      clearTimeout(timer);
	    }
	    timer = setTimeout(fn, ms);
	  };
	}
	
	var Align = _react2['default'].createClass({
	  displayName: 'Align',
	
	  propTypes: {
	    childrenProps: _react.PropTypes.object,
	    align: _react.PropTypes.object.isRequired,
	    target: _react.PropTypes.func,
	    onAlign: _react.PropTypes.func,
	    monitorBufferTime: _react.PropTypes.number,
	    monitorWindowResize: _react.PropTypes.bool,
	    disabled: _react.PropTypes.bool,
	    children: _react.PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      target: function target() {
	        return window;
	      },
	      onAlign: function onAlign() {},
	      monitorBufferTime: 50,
	      monitorWindowResize: false,
	      disabled: false
	    };
	  },
	
	  componentDidMount: function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    if (!props.disabled) {
	      var source = _reactDom2['default'].findDOMNode(this);
	      props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
	      if (props.monitorWindowResize) {
	        this.startMonitorWindowResize();
	      }
	    }
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;
	    var currentTarget = undefined;
	
	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	        currentTarget = props.target();
	      } else {
	        var lastTarget = prevProps.target();
	        currentTarget = props.target();
	        if ((0, _isWindow2['default'])(lastTarget) && (0, _isWindow2['default'])(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }
	
	    if (reAlign) {
	      var source = _reactDom2['default'].findDOMNode(this);
	      props.onAlign(source, (0, _domAlign2['default'])(source, currentTarget, props.align));
	    }
	
	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  },
	
	  componentWillUnmount: function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  },
	
	  onWindowResize: function onWindowResize() {
	    var props = this.props;
	    if (!props.disabled) {
	      var source = _reactDom2['default'].findDOMNode(this);
	      props.onAlign(source, (0, _domAlign2['default'])(source, props.target(), props.align));
	    }
	  },
	
	  startMonitorWindowResize: function startMonitorWindowResize() {
	    if (!this.resizeHandler) {
	      this.resizeHandler = _rcUtil.Dom.addEventListener(window, 'resize', buffer(this.onWindowResize, this.props.monitorBufferTime));
	    }
	  },
	
	  stopMonitorWindowResize: function stopMonitorWindowResize() {
	    if (this.resizeHandler) {
	      this.resizeHandler.remove();
	      this.resizeHandler = null;
	    }
	  },
	
	  render: function render() {
	    var _props = this.props;
	    var childrenProps = _props.childrenProps;
	    var children = _props.children;
	
	    var child = _react2['default'].Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2['default'].cloneElement(child, newProps);
	    }
	    return child;
	  }
	});
	
	exports['default'] = Align;
	module.exports = exports['default'];

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _utils = __webpack_require__(110);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getOffsetParent = __webpack_require__(111);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	var _getVisibleRectForElement = __webpack_require__(112);
	
	var _getVisibleRectForElement2 = _interopRequireDefault(_getVisibleRectForElement);
	
	var _adjustForViewport = __webpack_require__(113);
	
	var _adjustForViewport2 = _interopRequireDefault(_adjustForViewport);
	
	var _getRegion = __webpack_require__(114);
	
	var _getRegion2 = _interopRequireDefault(_getRegion);
	
	var _getElFuturePos = __webpack_require__(115);
	
	var _getElFuturePos2 = _interopRequireDefault(_getElFuturePos);
	
	// http://yiminghe.iteye.com/blog/1124720
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  _utils2['default'].each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function convertOffset(str, offsetLen) {
	  var n = undefined;
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	  return n || 0;
	}
	
	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}
	
	function domAlign(el, refNode, align) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var target = align.target || refNode;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	
	  var fail = 0;
	  // 当前节点可以被放置的显示区域
	  var visibleRect = (0, _getVisibleRectForElement2['default'])(source);
	  // 当前节点所占的区域, left/top/width/height
	  var elRegion = (0, _getRegion2['default'])(source);
	  // 参照节点所占的区域, left/top/width/height
	  var refNodeRegion = (0, _getRegion2['default'])(target);
	  // 将 offset 转换成数值，支持百分比
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, refNodeRegion);
	  // 当前节点将要被放置的位置
	  var elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	  // 当前节点将要所处的区域
	  var newElRegion = _utils2['default'].merge(elRegion, elFuturePos);
	
	  // 如果可视区域不能完全放置当前节点时允许调整
	  if (visibleRect && (overflow.adjustX || overflow.adjustY)) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[lr]/ig, {
	          l: 'r',
	          r: 'l'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 0);
	        targetOffset = flipOffset(targetOffset, 0);
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        fail = 1;
	        // 对齐位置反下
	        points = flip(points, /[tb]/ig, {
	          t: 'b',
	          b: 't'
	        });
	        // 偏移量也反下
	        offset = flipOffset(offset, 1);
	        targetOffset = flipOffset(targetOffset, 1);
	      }
	    }
	
	    // 如果失败，重新计算当前节点将要被放置的位置
	    if (fail) {
	      elFuturePos = (0, _getElFuturePos2['default'])(elRegion, refNodeRegion, points, offset, targetOffset);
	      _utils2['default'].mix(newElRegion, elFuturePos);
	    }
	
	    // 检查反下后的位置是否可以放下了
	    // 如果仍然放不下只有指定了可以调整当前方向才调整
	    newOverflowCfg.adjustX = overflow.adjustX && isFailX(elFuturePos, elRegion, visibleRect);
	
	    newOverflowCfg.adjustY = overflow.adjustY && isFailY(elFuturePos, elRegion, visibleRect);
	
	    // 确实要调整，甚至可能会调整高度宽度
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = (0, _adjustForViewport2['default'])(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  }
	
	  // need judge to in case set fixed with in css on height auto element
	  if (newElRegion.width !== elRegion.width) {
	    _utils2['default'].css(source, 'width', source.width() + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    _utils2['default'].css(source, 'height', source.height() + newElRegion.height - elRegion.height);
	  }
	
	  // https://github.com/kissyteam/kissy/issues/190
	  // http://localhost:8888/kissy/src/overlay/demo/other/relative_align/align.html
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	  _utils2['default'].offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom
	  });
	
	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}
	
	domAlign.__getOffsetParent = _getOffsetParent2['default'];
	
	domAlign.__getVisibleRectForElement = _getVisibleRectForElement2['default'];
	
	exports['default'] = domAlign;
	
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/
	module.exports = exports['default'];

/***/ },
/* 110 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	
	var getComputedStyleX = undefined;
	
	function css(el, name, v) {
	  var value = v;
	  if (typeof name === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	    return undefined;
	  }
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = value + 'px';
	    }
	    el.style[name] = value;
	    return undefined;
	  }
	  return getComputedStyleX(el, name);
	}
	
	function getClientPosition(elem) {
	  var box = undefined;
	  var x = undefined;
	  var y = undefined;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement;
	  // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	  box = elem.getBoundingClientRect();
	
	  // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top;
	
	  // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	
	  return { left: x, top: y };
	}
	
	function getScroll(w, top) {
	  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
	  var method = 'scroll' + (top ? 'Top' : 'Left');
	  if (typeof ret !== 'number') {
	    var d = w.document;
	    // ie6,7,8 standard mode
	    ret = d.documentElement[method];
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = elem.ownerDocument;
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null);
	
	  // https://github.com/kissyteam/kissy/issues/61
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp('^(' + RE_NUM + ')(?!px)[a-z%]+$', 'i');
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name];
	
	  // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT];
	
	    // prevent flashing of content
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT];
	
	    // Put in the new values to get a computed value out
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX;
	
	    // Revert the changed values
	    style[LEFT] = left;
	
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	  return ret === '' ? 'auto' : ret;
	}
	
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	  return option.useCssBottom ? 'bottom' : dir;
	}
	
	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	}
	
	// 设置 elem 相对 elem.ownerDocument 的坐标
	function setOffset(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
	
	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }
	
	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = presetH + 'px';
	  }
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = presetV + 'px';
	  }
	  var old = getOffset(elem);
	  var ret = {};
	  var key = undefined;
	  for (key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      if (dir === key) {
	        ret[dir] = preset + offset[key] - old[key];
	      } else {
	        ret[dir] = preset + old[key] - offset[key];
	      }
	    }
	  }
	  css(elem, ret);
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name = undefined;
	
	  // Remember the old values, and insert the new ones
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem);
	
	  // Revert the old values
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop = undefined;
	  var j = undefined;
	  var i = undefined;
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = undefined;
	        if (prop === 'border') {
	          cssProp = prop + which[i] + 'Width';
	        } else {
	          cssProp = prop + which[i];
	        }
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	  return value;
	}
	
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	function isWindow(obj) {
	  // must use == for ie8
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}
	
	var domUtils = {};
	
	each(['Width', 'Height'], function (name) {
	  domUtils['doc' + name] = function (refWin) {
	    var d = refWin.document;
	    return Math.max(
	    // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement['scroll' + name],
	    // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body['scroll' + name], domUtils['viewport' + name](d));
	  };
	
	  domUtils['viewport' + name] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = 'client' + name;
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop];
	    // 标准模式取 documentElement
	    // backcompat 取 body
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	function getWH(elem, name, ex) {
	  var extra = ex;
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.offsetWidth : elem.offsetHeight;
	  var computedStyle = getComputedStyleX(elem);
	  var isBorderBox = isBorderBoxFn(elem, computedStyle);
	  var cssBoxValue = 0;
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined;
	    // Fall back to computed then un computed css if necessary
	    cssBoxValue = getComputedStyleX(elem, name);
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    }
	    // Normalize '', auto, and prepare for extra
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which, computedStyle);
	    }
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which, computedStyle) : getPBMWidth(elem, ['margin'], which, computedStyle));
	  }
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which, computedStyle);
	}
	
	var cssShow = { position: 'absolute', visibility: 'hidden', display: 'block' };
	
	// fix #119 : https://github.com/kissyteam/kissy/issues/119
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }
	
	  var val = undefined;
	  var elem = args[0];
	  // in case elem is window
	  // elem.offsetWidth === undefined
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	  domUtils['outer' + first] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, v) {
	    var val = v;
	    if (val !== undefined) {
	      if (elem) {
	        var computedStyle = getComputedStyleX(elem);
	        var isBorderBox = isBorderBoxFn(elem);
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which, computedStyle);
	        }
	        return css(elem, name, val);
	      }
	      return undefined;
	    }
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	  return to;
	}
	
	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i = undefined;
	    var ret = {};
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	    var overflow = obj.overflow;
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	    return ret;
	  },
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    for (var i = 0; i < args.length; i++) {
	      utils.mix(ret, args[i]);
	    }
	    return ret;
	  },
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	
	mix(utils, domUtils);
	
	exports['default'] = utils;
	module.exports = exports['default'];

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _utils = __webpack_require__(110);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	function getOffsetParent(element) {
	  // ie 这个也不是完全可行
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	  var doc = element.ownerDocument;
	  var body = doc.body;
	  var parent = undefined;
	  var positionStyle = _utils2['default'].css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : element.parentNode;
	  }
	
	  for (parent = element.parentNode; parent && parent !== body; parent = parent.parentNode) {
	    positionStyle = _utils2['default'].css(parent, 'position');
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	  return null;
	}
	
	exports['default'] = getOffsetParent;
	module.exports = exports['default'];

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _utils = __webpack_require__(110);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	var _getOffsetParent = __webpack_require__(111);
	
	var _getOffsetParent2 = _interopRequireDefault(_getOffsetParent);
	
	/**
	 * 获得元素的显示部分的区域
	 */
	function getVisibleRectForElement(element) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = (0, _getOffsetParent2['default'])(element);
	  var scrollX = undefined;
	  var scrollY = undefined;
	  var winSize = undefined;
	  var doc = element.ownerDocument;
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement;
	
	  // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) &&
	    // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && _utils2['default'].css(el, 'overflow') !== 'visible') {
	      var pos = _utils2['default'].offset(el);
	      // add border
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right,
	      // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	    el = (0, _getOffsetParent2['default'])(el);
	  }
	
	  // Clip by window's viewport.
	  scrollX = _utils2['default'].getWindowScrollLeft(win);
	  scrollY = _utils2['default'].getWindowScrollTop(win);
	  visibleRect.left = Math.max(visibleRect.left, scrollX);
	  visibleRect.top = Math.max(visibleRect.top, scrollY);
	  winSize = {
	    width: _utils2['default'].viewportWidth(win),
	    height: _utils2['default'].viewportHeight(win)
	  };
	  visibleRect.right = Math.min(visibleRect.right, scrollX + winSize.width);
	  visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + winSize.height);
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	exports['default'] = getVisibleRectForElement;
	module.exports = exports['default'];

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _utils = __webpack_require__(110);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = _utils2['default'].clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  }
	
	  // Left edge inside and right edge outside viewport, try to resize it.
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  }
	
	  // Right edge outside viewport, try to move it.
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  }
	
	  // Top edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  }
	
	  // Top edge inside and bottom edge outside viewport, try to resize it.
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  }
	
	  // Bottom edge outside viewport, try to move it.
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return _utils2['default'].mix(pos, size);
	}
	
	exports['default'] = adjustForViewport;
	module.exports = exports['default'];

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _utils = __webpack_require__(110);
	
	var _utils2 = _interopRequireDefault(_utils);
	
	function getRegion(node) {
	  var offset = undefined;
	  var w = undefined;
	  var h = undefined;
	  if (!_utils2['default'].isWindow(node) && node.nodeType !== 9) {
	    offset = _utils2['default'].offset(node);
	    w = _utils2['default'].outerWidth(node);
	    h = _utils2['default'].outerHeight(node);
	  } else {
	    var win = _utils2['default'].getWindow(node);
	    offset = {
	      left: _utils2['default'].getWindowScrollLeft(win),
	      top: _utils2['default'].getWindowScrollTop(win)
	    };
	    w = _utils2['default'].viewportWidth(win);
	    h = _utils2['default'].viewportHeight(win);
	  }
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	exports['default'] = getRegion;
	module.exports = exports['default'];

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _getAlignOffset = __webpack_require__(116);
	
	var _getAlignOffset2 = _interopRequireDefault(_getAlignOffset);
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var xy = undefined;
	  var diff = undefined;
	  var p1 = undefined;
	  var p2 = undefined;
	
	  xy = {
	    left: elRegion.left,
	    top: elRegion.top
	  };
	
	  p1 = (0, _getAlignOffset2['default'])(refNodeRegion, points[1]);
	  p2 = (0, _getAlignOffset2['default'])(elRegion, points[0]);
	
	  diff = [p2.left - p1.left, p2.top - p1.top];
	
	  return {
	    left: xy.left - diff[0] + offset[0] - targetOffset[0],
	    top: xy.top - diff[1] + offset[1] - targetOffset[1]
	  };
	}
	
	exports['default'] = getElFuturePos;
	module.exports = exports['default'];

/***/ },
/* 116 */
/***/ function(module, exports) {

	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	  var x = undefined;
	  var y = undefined;
	
	  x = region.left;
	  y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	exports['default'] = getAlignOffset;
	module.exports = exports['default'];

/***/ },
/* 117 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = isWindow;
	
	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}
	
	module.exports = exports["default"];

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var PopupInner = _react2['default'].createClass({
	  displayName: 'PopupInner',
	
	  propTypes: {
	    hiddenClassName: _react.PropTypes.string,
	    className: _react.PropTypes.string,
	    onMouseEnter: _react.PropTypes.func,
	    onMouseLeave: _react.PropTypes.func,
	    children: _react.PropTypes.any
	  },
	  render: function render() {
	    var props = this.props;
	    var className = props.className;
	    if (!props.visible) {
	      className += ' ' + props.hiddenClassName;
	    }
	    return _react2['default'].createElement('div', { className: className,
	      onMouseEnter: props.onMouseEnter,
	      onMouseLeave: props.onMouseLeave,
	      style: props.style }, props.children);
	  }
	});
	
	exports['default'] = PopupInner;
	module.exports = exports['default'];

/***/ },
/* 119 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	exports.getAlignFromPlacement = getAlignFromPlacement;
	exports.getPopupClassNameFromAlign = getPopupClassNameFromAlign;
	function isPointsEq(a1, a2) {
	  return a1[0] === a2[0] && a1[1] === a2[1];
	}
	
	function getAlignFromPlacement(builtinPlacements, placementStr, align) {
	  var baseAlign = builtinPlacements[placementStr] || {};
	  return _extends({}, baseAlign, align);
	}
	
	function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
	  var points = align.points;
	  for (var placement in builtinPlacements) {
	    if (builtinPlacements.hasOwnProperty(placement)) {
	      if (isPointsEq(builtinPlacements[placement].points, points)) {
	        return prefixCls + '-placement-' + placement;
	      }
	    }
	  }
	  return '';
	}

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _util = __webpack_require__(87);
	
	var _rcMenu = __webpack_require__(88);
	
	var _rcMenu2 = _interopRequireDefault(_rcMenu);
	
	var _domScrollIntoView = __webpack_require__(91);
	
	var _domScrollIntoView2 = _interopRequireDefault(_domScrollIntoView);
	
	var DropdownMenu = _react2['default'].createClass({
	  displayName: 'DropdownMenu',
	
	  propTypes: {
	    prefixCls: _react2['default'].PropTypes.string,
	    menuItems: _react2['default'].PropTypes.any,
	    search: _react2['default'].PropTypes.any
	  },
	
	  componentDidMount: function componentDidMount() {
	    this.scrollActiveItemToView();
	  },
	
	  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
	    // freeze when hide
	    return nextProps.visible;
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    var props = this.props;
	    if (!prevProps.visible && props.visible) {
	      this.scrollActiveItemToView();
	    }
	  },
	
	  scrollActiveItemToView: function scrollActiveItemToView() {
	    // scroll into view
	    var itemComponent = (0, _reactDom.findDOMNode)(this.firstActiveItem);
	    if (itemComponent) {
	      (0, _domScrollIntoView2['default'])(itemComponent, (0, _reactDom.findDOMNode)(this.refs.menu), {
	        onlyScrollIfNeeded: true
	      });
	    }
	  },
	
	  renderMenu: function renderMenu() {
	    var _this = this;
	
	    var props = this.props;
	    var menuItems = props.menuItems;
	    var defaultActiveFirstOption = props.defaultActiveFirstOption;
	    var value = props.value;
	    var dropdownMenuStyle = props.dropdownMenuStyle;
	    var prefixCls = props.prefixCls;
	    var multiple = props.multiple;
	    var onMenuDeselect = props.onMenuDeselect;
	    var onMenuSelect = props.onMenuSelect;
	
	    if (menuItems && menuItems.length) {
	      var _ret = (function () {
	        var menuProps = {};
	        if (multiple) {
	          menuProps.onDeselect = onMenuDeselect;
	          menuProps.onSelect = onMenuSelect;
	        } else {
	          menuProps.onClick = onMenuSelect;
	        }
	        var selectedKeys = (0, _util.getSelectKeys)(menuItems, value);
	        var activeKeyProps = {};
	
	        var clonedMenuItems = menuItems;
	        if (selectedKeys.length) {
	          (function () {
	            activeKeyProps.activeKey = selectedKeys[0];
	            var foundFirst = false;
	            // set firstActiveItem via cloning menus
	            // for scroll into view
	            var clone = function clone(item) {
	              if (!foundFirst && selectedKeys.indexOf(item.key) !== -1) {
	                foundFirst = true;
	                return (0, _react.cloneElement)(item, {
	                  ref: function ref(_ref) {
	                    _this.firstActiveItem = _ref;
	                  }
	                });
	              }
	              return item;
	            };
	
	            clonedMenuItems = menuItems.map(function (item) {
	              if (item.type === _rcMenu.ItemGroup) {
	                var children = item.props.children.map(clone);
	                return (0, _react.cloneElement)(item, {}, children);
	              }
	              return clone(item);
	            });
	          })();
	        }
	
	        return {
	          v: _react2['default'].createElement(_rcMenu2['default'], _extends({
	            ref: 'menu',
	            defaultActiveFirst: defaultActiveFirstOption,
	            style: dropdownMenuStyle
	          }, activeKeyProps, {
	            multiple: multiple,
	            focusable: false
	          }, menuProps, {
	            selectedKeys: selectedKeys,
	            prefixCls: prefixCls + '-menu' }), clonedMenuItems)
	        };
	      })();
	
	      if (typeof _ret === 'object') return _ret.v;
	    }
	    return null;
	  },
	
	  render: function render() {
	    return _react2['default'].createElement('div', null, this.props.search, this.renderMenu());
	  }
	});
	
	exports['default'] = DropdownMenu;
	module.exports = exports['default'];

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _get = function get(_x, _x2, _x3) {
	  var _again = true;_function: while (_again) {
	    var object = _x,
	        property = _x2,
	        receiver = _x3;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
	      var parent = Object.getPrototypeOf(object);if (parent === null) {
	        return undefined;
	      } else {
	        _x = parent;_x2 = property;_x3 = receiver;_again = true;desc = parent = undefined;continue _function;
	      }
	    } else if ('value' in desc) {
	      return desc.value;
	    } else {
	      var getter = desc.get;if (getter === undefined) {
	        return undefined;
	      }return getter.call(receiver);
	    }
	  }
	};
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError('Cannot call a class as a function');
	  }
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== 'function' && superClass !== null) {
	    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _react = __webpack_require__(15);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Option = (function (_React$Component) {
	  _inherits(Option, _React$Component);
	
	  function Option() {
	    _classCallCheck(this, Option);
	
	    _get(Object.getPrototypeOf(Option.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  return Option;
	})(_react2['default'].Component);
	
	exports['default'] = Option;
	module.exports = exports['default'];

/***/ },
/* 122 */
/***/ function(module, exports) {

	'use strict';
	
	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);
	
		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = Object.keys(Object(from));
	
			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}
	
		return to;
	};

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CellField = __webpack_require__(51);
	var classnames = __webpack_require__(2);
	var assign = __webpack_require__(9);
	var RadioGroup = __webpack_require__(124);
	
	var RadioField = (function (_CellField) {
	    _inherits(RadioField, _CellField);
	
	    function RadioField(props) {
	        _classCallCheck(this, RadioField);
	
	        _get(Object.getPrototypeOf(RadioField.prototype), 'constructor', this).call(this, props);
	    }
	
	    _createClass(RadioField, [{
	        key: 'processChildren',
	        value: function processChildren() {
	            var me = this;
	            var obj = {};
	            me.props.column.children.forEach(function (item) {
	                obj[item.props.value] = item.props.text;
	            });
	            return obj;
	        }
	    }, {
	        key: 'renderContent',
	        value: function renderContent() {
	            var me = this;
	            var dataKey = me.props.column.dataKey;
	            var textMap = me.processChildren();
	            var fieldProps = {
	                onChange: function onChange(value) {
	                    me.handleDataChange({
	                        jsxid: me.props.rowData['jsxid'],
	                        column: me.props.column,
	                        text: textMap[value],
	                        value: value
	                    });
	                },
	                value: me.props.value
	            };
	            if (me.props.column.config) {
	                var _me$props$column$config = me.props.column.config;
	                var value = _me$props$column$config.value;
	                var onChange = _me$props$column$config.onChange;
	
	                var customProps = _objectWithoutProperties(_me$props$column$config, ['value', 'onChange']);
	
	                assign(fieldProps, customProps);
	            }
	            return React.createElement(
	                RadioGroup,
	                fieldProps,
	                me.props.column.children
	            );
	        }
	    }]);
	
	    return RadioField;
	})(CellField);
	
	;
	
	RadioField.propTypes = assign({}, CellField.propTypes);
	
	RadioField.defaultProps = assign({}, CellField.defaultProps);
	
	module.exports = RadioField;

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Radiogroup Component for uxcore
	 * @author 
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	module.exports = __webpack_require__(125);

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/**
	* thanks for https://github.com/chenglou/react-radio-group
	* @author: zhouquan.yezq
	* @time  : 5/25 2015
	*/
	
	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Item = __webpack_require__(126);
	var classnames = __webpack_require__(2);
	
	var Radiogroup = (function (_React$Component) {
	    _inherits(Radiogroup, _React$Component);
	
	    function Radiogroup(props) {
	        _classCallCheck(this, Radiogroup);
	
	        _get(Object.getPrototypeOf(Radiogroup.prototype), "constructor", this).call(this, props);
	        this.state = {
	            defaultValue: props.defaultValue
	        };
	    }
	
	    _createClass(Radiogroup, [{
	        key: "_handleChange",
	        value: function _handleChange(value) {
	            var me = this;
	            me.props.onChange(value);
	        }
	    }, {
	        key: "_processChild",
	        value: function _processChild() {
	            var me = this;
	            var length = React.Children.count(me.props.children);
	            if (!length) return false;
	            var elements = React.Children.map(me.props.children, function (child, index) {
	                if (!!child.type && child.type.displayName == "RadiogroupItem") {
	                    return React.cloneElement(child, {
	                        onChange: me._handleChange.bind(me),
	                        key: index,
	                        checked: me.props.value == child.props.value
	                    });
	                }
	            });
	            return elements;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var me = this;
	            return React.createElement(
	                "div",
	                { className: classnames(_defineProperty({
	                        "kuma-radio-group": true
	                    }, me.props.className, !!me.props.className)) },
	                me._processChild()
	            );
	        }
	    }]);
	
	    return Radiogroup;
	})(React.Component);
	
	Radiogroup.displayName = "Radiogroup";
	Radiogroup.propTypes = {
	    value: React.PropTypes.string,
	    onChange: React.PropTypes.func
	};
	Radiogroup.defaultProps = {
	    value: "",
	    onChange: function onChange() {}
	};
	
	Radiogroup.Item = Item;
	
	module.exports = Radiogroup;

/***/ },
/* 126 */
/***/ function(module, exports) {

	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RadiogroupItem = (function (_React$Component) {
	    _inherits(RadiogroupItem, _React$Component);
	
	    function RadiogroupItem(props) {
	        _classCallCheck(this, RadiogroupItem);
	
	        _get(Object.getPrototypeOf(RadiogroupItem.prototype), "constructor", this).call(this, props);
	    }
	
	    _createClass(RadiogroupItem, [{
	        key: "_handleChange",
	        value: function _handleChange(e) {
	            var me = this;
	            me.props.onChange(me.props.value);
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var me = this;
	            return React.createElement(
	                "label",
	                null,
	                React.createElement("input", { type: "radio", ref: "radio", className: me.props.className, checked: me.props.checked, onChange: me._handleChange.bind(me) }),
	                React.createElement("s", null),
	                me.props.text
	            );
	        }
	    }]);
	
	    return RadiogroupItem;
	})(React.Component);
	
	RadiogroupItem.displayName = "RadiogroupItem";
	RadiogroupItem.propTypes = {
	    text: React.PropTypes.string,
	    value: React.PropTypes.string,
	    className: React.PropTypes.string,
	    onChange: React.PropTypes.func
	};
	RadiogroupItem.defaultProps = {
	    text: "",
	    value: "",
	    className: "kuma-checkbox",
	    onChange: function onChange() {}
	};
	
	module.exports = RadiogroupItem;

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Formatter = __webpack_require__(128);
	var util = {
	    formatValue: function formatValue(value, type, delimiter) {
	        delimiter = delimiter || " ";
	        if (value === null || value === undefined) {
	            return value;
	        }
	        value = value + "";
	        if (type == "money") {
	            return Formatter.money(value, delimiter);
	        } else if (type == "card") {
	            return Formatter.card(value, delimiter);
	        } else if (type == "cnmobile") {
	            return Formatter.cnmobile(value, delimiter);
	        }
	    }
	};
	
	module.exports = util;

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Formatter Component for uxcore
	 * @author guanghong.wsj
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	module.exports = __webpack_require__(129);

/***/ },
/* 129 */
/***/ function(module, exports) {

	/**
	 * Formatter Component for uxcore
	 * @author eternalsky
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */
	
	"use strict";
	
	var Formatter = {};
	
	Formatter.date = function (str, pattern) {
	    var date = new Date(str);
	    pattern = pattern || 'YYYY-MM-DD';
	    var o = {
	        "M+": date.getMonth() + 1, //月份
	        "D+": date.getDate(), //日
	        "d+": date.getDate(), //日
	        "H+": date.getHours(), //小时
	        "h+": date.getHours(), //小时
	        "m+": date.getMinutes(), //分
	        "s+": date.getSeconds(), //秒
	        "Q+": Math.floor((date.getMonth() + 3) / 3), //季度
	        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
	        "S": date.getMilliseconds() //毫秒
	    };
	    if (/(y+)/i.test(pattern)) {
	        pattern = pattern.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	    }
	    for (var k in o) {
	        if (new RegExp("(" + k + ")").test(pattern)) pattern = pattern.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
	    }
	    return pattern;
	};
	
	Formatter.money = function (str, delimiter, fixedNum) {
	    delimiter = delimiter || " ";
	    if (fixedNum) {
	        str = parseFloat(str).toFixed(fixedNum).toString();
	    }
	    if (str.indexOf(".") !== -1) {
	        return str.replace(/(\d)(?=(?:\d{3})+(\.))/g, function (match, $1) {
	            return $1 + delimiter;
	        }).replace(/(\d{3})(?![$|\.|\(|\s])/g, function (match, $1) {
	            return $1;
	        });
	    } else {
	        return str.replace(/(\d)(?=(?:\d{3})+$)/g, function (match, $1) {
	            return $1 + delimiter;
	        });
	    }
	};
	
	Formatter.cnmobile = function (str, delimiter) {
	    delimiter = delimiter || " ";
	    return str.replace(/^(\+?0?86)(?!$)/, "$1" + delimiter).replace(/(\d{4})(?!$)/g, "$1" + delimiter);
	};
	
	Formatter.card = function (str, delimiter) {
	    delimiter = delimiter || " ";
	    return str.replace(/(\d{4})(?!$)/g, "$1" + delimiter);
	};
	
	module.exports = Formatter;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, Buffer) {/*!
	 * @license deepcopy.js Copyright(c) 2013 sasa+1
	 * https://github.com/sasaplus1/deepcopy.js
	 * Released under the MIT license.
	 */
	
	
	/**
	 * export to AMD/CommonJS/global.
	 *
	 * @param {Object} global global object.
	 * @param {Function} factory factory method.
	 */
	(function(global, factory) {
	  'use strict';
	
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory();
	  } else {
	    global.deepcopy = factory();
	  }
	}(this, function() {
	  'use strict';
	
	  var isNode, util, isBuffer, getKeys, getSymbols, indexOfArray;
	
	  // is node.js/io.js?
	  isNode = (typeof process !== 'undefined' && "function" !== 'undefined');
	
	  // fallback util module for browser.
	  util = (isNode) ? __webpack_require__(136) : (function() {
	    function isArray(value) {
	      return (typeof value === 'object' &&
	          Object.prototype.toString.call(value) === '[object Array]');
	    }
	
	    function isDate(value) {
	      return (typeof value === 'object' &&
	          Object.prototype.toString.call(value) === '[object Date]');
	    }
	
	    function isRegExp(value) {
	      return (typeof value === 'object' &&
	          Object.prototype.toString.call(value) === '[object RegExp]');
	    }
	
	    function isSymbol(value) {
	      return (typeof value === 'symbol');
	    }
	
	    return {
	      isArray: (typeof Array.isArray === 'function') ?
	          function(obj) {
	            return Array.isArray(obj);
	          } : isArray,
	      isDate: isDate,
	      isRegExp: isRegExp,
	      isSymbol: (typeof Symbol === 'function') ?
	          isSymbol :
	          function() {
	            // always return false when Symbol is not supported.
	            return false;
	          }
	    };
	  }());
	
	  // fallback Buffer.isBuffer
	  isBuffer = (isNode) ?
	      function(obj) {
	        return Buffer.isBuffer(obj);
	      } :
	      function() {
	        // if browser, always return false
	        return false;
	      };
	
	  // fallback Object.keys for old browsers.
	  getKeys = (typeof Object.keys === 'function') ?
	      function(obj) {
	        return Object.keys(obj);
	      } :
	      function(obj) {
	        var keys = [],
	            key;
	
	        if (obj === null || typeof obj !== 'object') {
	          throw new TypeError('obj is not an Object');
	        }
	
	        for (key in obj) {
	          obj.hasOwnProperty(key) && keys.push(key);
	        }
	
	        return keys;
	      };
	
	  // get symbols in object.
	  getSymbols = (typeof Symbol === 'function') ?
	      function(obj) {
	        return Object.getOwnPropertySymbols(obj);
	      } :
	      function() {
	        // always return empty array when Symbol is not supported.
	        return [];
	      };
	
	  // fallback Array#indexOf for old browsers.
	  indexOfArray = (typeof Array.prototype.indexOf === 'function') ?
	      function(array, searchElement) {
	        return array.indexOf(searchElement);
	      } :
	      function(array, searchElement) {
	        var i, len;
	
	        if (!util.isArray(array)) {
	          throw new TypeError('array is not an Array');
	        }
	
	        for (i = 0, len = array.length; i < len; ++i) {
	          if (array[i] === searchElement) {
	            return i;
	          }
	        }
	
	        return -1;
	      };
	
	  /**
	   * recursive deep copy for value.
	   *
	   * @private
	   * @param {*} value copy target.
	   * @param {*} clone
	   * @param {Array} visited
	   * @param {Array} reference
	   * @return {*} copied value.
	   */
	  function copyValue_(value, clone, visited, reference) {
	    var str, pos, buf, keys, i, len, key, val, idx, obj, ref;
	
	    // number, string, boolean, null, undefined, function and symbol.
	    if (value === null || typeof value !== 'object') {
	      return value;
	    }
	
	    // Date.
	    if (util.isDate(value)) {
	      // Firefox need to convert to Number
	      //
	      // Firefox:
	      //   var date = new Date;
	      //   +date;            // 1420909365967
	      //   +new Date(date);  // 1420909365000
	      //   +new Date(+date); // 1420909365967
	      // Chrome:
	      //   var date = new Date;
	      //   +date;            // 1420909757913
	      //   +new Date(date);  // 1420909757913
	      //   +new Date(+date); // 1420909757913
	      return new Date(+value);
	    }
	
	    // RegExp.
	    if (util.isRegExp(value)) {
	      // Chrome, Safari:
	      //   (new RegExp).source => "(?:)"
	      // Firefox:
	      //   (new RegExp).source => ""
	      // Chrome, Safari, Firefox
	      //   String(new RegExp) => "/(?:)/"
	      str = String(value);
	      pos = str.lastIndexOf('/');
	
	      return new RegExp(str.slice(1, pos), str.slice(pos + 1));
	    }
	
	    // Buffer, node.js only.
	    if (isBuffer(value)) {
	      buf = new Buffer(value.length);
	      value.copy(buf);
	
	      return buf;
	    }
	
	    // Object or Array.
	    keys = getKeys(value).concat(getSymbols(value));
	
	    for (i = 0, len = keys.length; i < len; ++i) {
	      key = keys[i];
	      val = value[key];
	
	      if (val !== null && typeof val === 'object') {
	        idx = indexOfArray(visited, val);
	
	        if (idx === -1) {
	          // not circular reference
	          obj = (util.isArray(val)) ? [] : {};
	
	          visited.push(val);
	          reference.push(obj);
	        } else {
	          // circular reference
	          ref = reference[idx];
	        }
	      }
	
	      clone[key] = ref || copyValue_(val, obj, visited, reference);
	    }
	
	    return clone;
	  }
	
	  /**
	   * deep copy for value.
	   *
	   * @param {*} value copy target.
	   */
	  function deepcopy(value) {
	    var clone = (util.isArray(value)) ? [] : {},
	        visited = [value],
	        reference = [clone];
	
	    return copyValue_(value, clone, visited, reference);
	  }
	
	  return deepcopy;
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(131), __webpack_require__(132).Buffer))

/***/ },
/* 131 */
/***/ function(module, exports) {

	// shim for using process in browser
	
	var process = module.exports = {};
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = setTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    clearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        setTimeout(drainQueue, 0);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */
	
	'use strict'
	
	var base64 = __webpack_require__(133)
	var ieee754 = __webpack_require__(134)
	var isArray = __webpack_require__(135)
	
	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50
	Buffer.poolSize = 8192 // not used by this implementation
	
	var rootParent = {}
	
	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Safari 5-7 lacks support for changing the `Object.prototype.constructor` property
	 *     on objects.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.
	
	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()
	
	function typedArraySupport () {
	  function Bar () {}
	  try {
	    var arr = new Uint8Array(1)
	    arr.foo = function () { return 42 }
	    arr.constructor = Bar
	    return arr.foo() === 42 && // typed array instances can be augmented
	        arr.constructor === Bar && // constructor can be set
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}
	
	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}
	
	/**
	 * Class: Buffer
	 * =============
	 *
	 * The Buffer constructor returns instances of `Uint8Array` that are augmented
	 * with function properties for all the node `Buffer` API functions. We use
	 * `Uint8Array` so that square bracket notation works as expected -- it returns
	 * a single octet.
	 *
	 * By augmenting the instances, we can avoid modifying the `Uint8Array`
	 * prototype.
	 */
	function Buffer (arg) {
	  if (!(this instanceof Buffer)) {
	    // Avoid going through an ArgumentsAdaptorTrampoline in the common case.
	    if (arguments.length > 1) return new Buffer(arg, arguments[1])
	    return new Buffer(arg)
	  }
	
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    this.length = 0
	    this.parent = undefined
	  }
	
	  // Common case.
	  if (typeof arg === 'number') {
	    return fromNumber(this, arg)
	  }
	
	  // Slightly less common case.
	  if (typeof arg === 'string') {
	    return fromString(this, arg, arguments.length > 1 ? arguments[1] : 'utf8')
	  }
	
	  // Unusual.
	  return fromObject(this, arg)
	}
	
	function fromNumber (that, length) {
	  that = allocate(that, length < 0 ? 0 : checked(length) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < length; i++) {
	      that[i] = 0
	    }
	  }
	  return that
	}
	
	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8'
	
	  // Assumption: byteLength() return value is always < kMaxLength.
	  var length = byteLength(string, encoding) | 0
	  that = allocate(that, length)
	
	  that.write(string, encoding)
	  return that
	}
	
	function fromObject (that, object) {
	  if (Buffer.isBuffer(object)) return fromBuffer(that, object)
	
	  if (isArray(object)) return fromArray(that, object)
	
	  if (object == null) {
	    throw new TypeError('must start with number, buffer, array or string')
	  }
	
	  if (typeof ArrayBuffer !== 'undefined') {
	    if (object.buffer instanceof ArrayBuffer) {
	      return fromTypedArray(that, object)
	    }
	    if (object instanceof ArrayBuffer) {
	      return fromArrayBuffer(that, object)
	    }
	  }
	
	  if (object.length) return fromArrayLike(that, object)
	
	  return fromJsonObject(that, object)
	}
	
	function fromBuffer (that, buffer) {
	  var length = checked(buffer.length) | 0
	  that = allocate(that, length)
	  buffer.copy(that, 0, 0, length)
	  return that
	}
	
	function fromArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	// Duplicate of fromArray() to keep fromArray() monomorphic.
	function fromTypedArray (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  // Truncating the elements is probably not what people expect from typed
	  // arrays with BYTES_PER_ELEMENT > 1 but it's compatible with the behavior
	  // of the old Buffer constructor.
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	function fromArrayBuffer (that, array) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    array.byteLength
	    that = Buffer._augment(new Uint8Array(array))
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromTypedArray(that, new Uint8Array(array))
	  }
	  return that
	}
	
	function fromArrayLike (that, array) {
	  var length = checked(array.length) | 0
	  that = allocate(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	// Deserialize { type: 'Buffer', data: [1,2,3,...] } into a Buffer object.
	// Returns a zero-length buffer for inputs that don't conform to the spec.
	function fromJsonObject (that, object) {
	  var array
	  var length = 0
	
	  if (object.type === 'Buffer' && isArray(object.data)) {
	    array = object.data
	    length = checked(array.length) | 0
	  }
	  that = allocate(that, length)
	
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}
	
	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	} else {
	  // pre-set for values that may exist in the future
	  Buffer.prototype.length = undefined
	  Buffer.prototype.parent = undefined
	}
	
	function allocate (that, length) {
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = Buffer._augment(new Uint8Array(length))
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that.length = length
	    that._isBuffer = true
	  }
	
	  var fromPool = length !== 0 && length <= Buffer.poolSize >>> 1
	  if (fromPool) that.parent = rootParent
	
	  return that
	}
	
	function checked (length) {
	  // Note: cannot use `length < kMaxLength` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}
	
	function SlowBuffer (subject, encoding) {
	  if (!(this instanceof SlowBuffer)) return new SlowBuffer(subject, encoding)
	
	  var buf = new Buffer(subject, encoding)
	  delete buf.parent
	  return buf
	}
	
	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}
	
	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }
	
	  if (a === b) return 0
	
	  var x = a.length
	  var y = b.length
	
	  var i = 0
	  var len = Math.min(x, y)
	  while (i < len) {
	    if (a[i] !== b[i]) break
	
	    ++i
	  }
	
	  if (i !== len) {
	    x = a[i]
	    y = b[i]
	  }
	
	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}
	
	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'binary':
	    case 'base64':
	    case 'raw':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}
	
	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) throw new TypeError('list argument must be an Array of Buffers.')
	
	  if (list.length === 0) {
	    return new Buffer(0)
	  }
	
	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; i++) {
	      length += list[i].length
	    }
	  }
	
	  var buf = new Buffer(length)
	  var pos = 0
	  for (i = 0; i < list.length; i++) {
	    var item = list[i]
	    item.copy(buf, pos)
	    pos += item.length
	  }
	  return buf
	}
	
	function byteLength (string, encoding) {
	  if (typeof string !== 'string') string = '' + string
	
	  var len = string.length
	  if (len === 0) return 0
	
	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'binary':
	      // Deprecated
	      case 'raw':
	      case 'raws':
	        return len
	      case 'utf8':
	      case 'utf-8':
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength
	
	function slowToString (encoding, start, end) {
	  var loweredCase = false
	
	  start = start | 0
	  end = end === undefined || end === Infinity ? this.length : end | 0
	
	  if (!encoding) encoding = 'utf8'
	  if (start < 0) start = 0
	  if (end > this.length) end = this.length
	  if (end <= start) return ''
	
	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)
	
	      case 'ascii':
	        return asciiSlice(this, start, end)
	
	      case 'binary':
	        return binarySlice(this, start, end)
	
	      case 'base64':
	        return base64Slice(this, start, end)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}
	
	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}
	
	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}
	
	Buffer.prototype.compare = function compare (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return 0
	  return Buffer.compare(this, b)
	}
	
	Buffer.prototype.indexOf = function indexOf (val, byteOffset) {
	  if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff
	  else if (byteOffset < -0x80000000) byteOffset = -0x80000000
	  byteOffset >>= 0
	
	  if (this.length === 0) return -1
	  if (byteOffset >= this.length) return -1
	
	  // Negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = Math.max(this.length + byteOffset, 0)
	
	  if (typeof val === 'string') {
	    if (val.length === 0) return -1 // special case: looking for empty string always fails
	    return String.prototype.indexOf.call(this, val, byteOffset)
	  }
	  if (Buffer.isBuffer(val)) {
	    return arrayIndexOf(this, val, byteOffset)
	  }
	  if (typeof val === 'number') {
	    if (Buffer.TYPED_ARRAY_SUPPORT && Uint8Array.prototype.indexOf === 'function') {
	      return Uint8Array.prototype.indexOf.call(this, val, byteOffset)
	    }
	    return arrayIndexOf(this, [ val ], byteOffset)
	  }
	
	  function arrayIndexOf (arr, val, byteOffset) {
	    var foundIndex = -1
	    for (var i = 0; byteOffset + i < arr.length; i++) {
	      if (arr[byteOffset + i] === val[foundIndex === -1 ? 0 : i - foundIndex]) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === val.length) return byteOffset + foundIndex
	      } else {
	        foundIndex = -1
	      }
	    }
	    return -1
	  }
	
	  throw new TypeError('val must be string, number or Buffer')
	}
	
	// `get` is deprecated
	Buffer.prototype.get = function get (offset) {
	  console.log('.get() is deprecated. Access using array indexes instead.')
	  return this.readUInt8(offset)
	}
	
	// `set` is deprecated
	Buffer.prototype.set = function set (v, offset) {
	  console.log('.set() is deprecated. Access using array indexes instead.')
	  return this.writeUInt8(v, offset)
	}
	
	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }
	
	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new Error('Invalid hex string')
	
	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; i++) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) throw new Error('Invalid hex string')
	    buf[offset + i] = parsed
	  }
	  return i
	}
	
	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}
	
	function binaryWrite (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}
	
	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}
	
	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}
	
	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    var swap = encoding
	    encoding = offset
	    offset = length | 0
	    length = swap
	  }
	
	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining
	
	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('attempt to write outside buffer bounds')
	  }
	
	  if (!encoding) encoding = 'utf8'
	
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)
	
	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)
	
	      case 'ascii':
	        return asciiWrite(this, string, offset, length)
	
	      case 'binary':
	        return binaryWrite(this, string, offset, length)
	
	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)
	
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)
	
	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	
	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}
	
	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}
	
	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []
	
	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1
	
	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint
	
	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }
	
	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }
	
	    res.push(codePoint)
	    i += bytesPerSequence
	  }
	
	  return decodeCodePointsArray(res)
	}
	
	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000
	
	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }
	
	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}
	
	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}
	
	function binarySlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)
	
	  for (var i = start; i < end; i++) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}
	
	function hexSlice (buf, start, end) {
	  var len = buf.length
	
	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len
	
	  var out = ''
	  for (var i = start; i < end; i++) {
	    out += toHex(buf[i])
	  }
	  return out
	}
	
	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}
	
	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end
	
	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }
	
	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }
	
	  if (end < start) end = start
	
	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = Buffer._augment(this.subarray(start, end))
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; i++) {
	      newBuf[i] = this[i + start]
	    }
	  }
	
	  if (newBuf.length) newBuf.parent = this.parent || this
	
	  return newBuf
	}
	
	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}
	
	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }
	
	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }
	
	  return val
	}
	
	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}
	
	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}
	
	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}
	
	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}
	
	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}
	
	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)
	
	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80
	
	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)
	
	  return val
	}
	
	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}
	
	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}
	
	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}
	
	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	
	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}
	
	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}
	
	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}
	
	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}
	
	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}
	
	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('buffer must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	}
	
	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)
	
	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkInt(this, value, offset, byteLength, Math.pow(2, 8 * byteLength), 0)
	
	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; i++) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}
	
	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; i++) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}
	
	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = 0
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)
	
	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }
	
	  var i = byteLength - 1
	  var mul = 1
	  var sub = value < 0 ? 1 : 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }
	
	  return offset + byteLength
	}
	
	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}
	
	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}
	
	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}
	
	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}
	
	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (value > max || value < min) throw new RangeError('value is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('index out of range')
	  if (offset < 0) throw new RangeError('index out of range')
	}
	
	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}
	
	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}
	
	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}
	
	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}
	
	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}
	
	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start
	
	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0
	
	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')
	
	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }
	
	  var len = end - start
	  var i
	
	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; i--) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; i++) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    target._set(this.subarray(start, start + len), targetStart)
	  }
	
	  return len
	}
	
	// fill(value, start=0, end=buffer.length)
	Buffer.prototype.fill = function fill (value, start, end) {
	  if (!value) value = 0
	  if (!start) start = 0
	  if (!end) end = this.length
	
	  if (end < start) throw new RangeError('end < start')
	
	  // Fill 0 bytes; we're done
	  if (end === start) return
	  if (this.length === 0) return
	
	  if (start < 0 || start >= this.length) throw new RangeError('start out of bounds')
	  if (end < 0 || end > this.length) throw new RangeError('end out of bounds')
	
	  var i
	  if (typeof value === 'number') {
	    for (i = start; i < end; i++) {
	      this[i] = value
	    }
	  } else {
	    var bytes = utf8ToBytes(value.toString())
	    var len = bytes.length
	    for (i = start; i < end; i++) {
	      this[i] = bytes[i % len]
	    }
	  }
	
	  return this
	}
	
	/**
	 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
	 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
	 */
	Buffer.prototype.toArrayBuffer = function toArrayBuffer () {
	  if (typeof Uint8Array !== 'undefined') {
	    if (Buffer.TYPED_ARRAY_SUPPORT) {
	      return (new Buffer(this)).buffer
	    } else {
	      var buf = new Uint8Array(this.length)
	      for (var i = 0, len = buf.length; i < len; i += 1) {
	        buf[i] = this[i]
	      }
	      return buf.buffer
	    }
	  } else {
	    throw new TypeError('Buffer.toArrayBuffer not supported in this browser')
	  }
	}
	
	// HELPER FUNCTIONS
	// ================
	
	var BP = Buffer.prototype
	
	/**
	 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
	 */
	Buffer._augment = function _augment (arr) {
	  arr.constructor = Buffer
	  arr._isBuffer = true
	
	  // save reference to original Uint8Array set method before overwriting
	  arr._set = arr.set
	
	  // deprecated
	  arr.get = BP.get
	  arr.set = BP.set
	
	  arr.write = BP.write
	  arr.toString = BP.toString
	  arr.toLocaleString = BP.toString
	  arr.toJSON = BP.toJSON
	  arr.equals = BP.equals
	  arr.compare = BP.compare
	  arr.indexOf = BP.indexOf
	  arr.copy = BP.copy
	  arr.slice = BP.slice
	  arr.readUIntLE = BP.readUIntLE
	  arr.readUIntBE = BP.readUIntBE
	  arr.readUInt8 = BP.readUInt8
	  arr.readUInt16LE = BP.readUInt16LE
	  arr.readUInt16BE = BP.readUInt16BE
	  arr.readUInt32LE = BP.readUInt32LE
	  arr.readUInt32BE = BP.readUInt32BE
	  arr.readIntLE = BP.readIntLE
	  arr.readIntBE = BP.readIntBE
	  arr.readInt8 = BP.readInt8
	  arr.readInt16LE = BP.readInt16LE
	  arr.readInt16BE = BP.readInt16BE
	  arr.readInt32LE = BP.readInt32LE
	  arr.readInt32BE = BP.readInt32BE
	  arr.readFloatLE = BP.readFloatLE
	  arr.readFloatBE = BP.readFloatBE
	  arr.readDoubleLE = BP.readDoubleLE
	  arr.readDoubleBE = BP.readDoubleBE
	  arr.writeUInt8 = BP.writeUInt8
	  arr.writeUIntLE = BP.writeUIntLE
	  arr.writeUIntBE = BP.writeUIntBE
	  arr.writeUInt16LE = BP.writeUInt16LE
	  arr.writeUInt16BE = BP.writeUInt16BE
	  arr.writeUInt32LE = BP.writeUInt32LE
	  arr.writeUInt32BE = BP.writeUInt32BE
	  arr.writeIntLE = BP.writeIntLE
	  arr.writeIntBE = BP.writeIntBE
	  arr.writeInt8 = BP.writeInt8
	  arr.writeInt16LE = BP.writeInt16LE
	  arr.writeInt16BE = BP.writeInt16BE
	  arr.writeInt32LE = BP.writeInt32LE
	  arr.writeInt32BE = BP.writeInt32BE
	  arr.writeFloatLE = BP.writeFloatLE
	  arr.writeFloatBE = BP.writeFloatBE
	  arr.writeDoubleLE = BP.writeDoubleLE
	  arr.writeDoubleBE = BP.writeDoubleBE
	  arr.fill = BP.fill
	  arr.inspect = BP.inspect
	  arr.toArrayBuffer = BP.toArrayBuffer
	
	  return arr
	}
	
	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g
	
	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}
	
	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}
	
	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}
	
	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []
	
	  for (var i = 0; i < length; i++) {
	    codePoint = string.charCodeAt(i)
	
	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }
	
	        // valid lead
	        leadSurrogate = codePoint
	
	        continue
	      }
	
	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }
	
	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }
	
	    leadSurrogate = null
	
	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }
	
	  return bytes
	}
	
	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}
	
	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; i++) {
	    if ((units -= 2) < 0) break
	
	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }
	
	  return byteArray
	}
	
	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}
	
	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; i++) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(132).Buffer, (function() { return this; }())))

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	
	;(function (exports) {
		'use strict';
	
	  var Arr = (typeof Uint8Array !== 'undefined')
	    ? Uint8Array
	    : Array
	
		var PLUS   = '+'.charCodeAt(0)
		var SLASH  = '/'.charCodeAt(0)
		var NUMBER = '0'.charCodeAt(0)
		var LOWER  = 'a'.charCodeAt(0)
		var UPPER  = 'A'.charCodeAt(0)
		var PLUS_URL_SAFE = '-'.charCodeAt(0)
		var SLASH_URL_SAFE = '_'.charCodeAt(0)
	
		function decode (elt) {
			var code = elt.charCodeAt(0)
			if (code === PLUS ||
			    code === PLUS_URL_SAFE)
				return 62 // '+'
			if (code === SLASH ||
			    code === SLASH_URL_SAFE)
				return 63 // '/'
			if (code < NUMBER)
				return -1 //no match
			if (code < NUMBER + 10)
				return code - NUMBER + 26 + 26
			if (code < UPPER + 26)
				return code - UPPER
			if (code < LOWER + 26)
				return code - LOWER + 26
		}
	
		function b64ToByteArray (b64) {
			var i, j, l, tmp, placeHolders, arr
	
			if (b64.length % 4 > 0) {
				throw new Error('Invalid string. Length must be a multiple of 4')
			}
	
			// the number of equal signs (place holders)
			// if there are two placeholders, than the two characters before it
			// represent one byte
			// if there is only one, then the three characters before it represent 2 bytes
			// this is just a cheap hack to not do indexOf twice
			var len = b64.length
			placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0
	
			// base64 is 4/3 + up to two characters of the original data
			arr = new Arr(b64.length * 3 / 4 - placeHolders)
	
			// if there are placeholders, only get up to the last complete 4 chars
			l = placeHolders > 0 ? b64.length - 4 : b64.length
	
			var L = 0
	
			function push (v) {
				arr[L++] = v
			}
	
			for (i = 0, j = 0; i < l; i += 4, j += 3) {
				tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
				push((tmp & 0xFF0000) >> 16)
				push((tmp & 0xFF00) >> 8)
				push(tmp & 0xFF)
			}
	
			if (placeHolders === 2) {
				tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
				push(tmp & 0xFF)
			} else if (placeHolders === 1) {
				tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
				push((tmp >> 8) & 0xFF)
				push(tmp & 0xFF)
			}
	
			return arr
		}
	
		function uint8ToBase64 (uint8) {
			var i,
				extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
				output = "",
				temp, length
	
			function encode (num) {
				return lookup.charAt(num)
			}
	
			function tripletToBase64 (num) {
				return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
			}
	
			// go through the array every three bytes, we'll deal with trailing stuff later
			for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
				temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
				output += tripletToBase64(temp)
			}
	
			// pad the end with zeros, but make sure to not forget the extra bytes
			switch (extraBytes) {
				case 1:
					temp = uint8[uint8.length - 1]
					output += encode(temp >> 2)
					output += encode((temp << 4) & 0x3F)
					output += '=='
					break
				case 2:
					temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
					output += encode(temp >> 10)
					output += encode((temp >> 4) & 0x3F)
					output += encode((temp << 2) & 0x3F)
					output += '='
					break
			}
	
			return output
		}
	
		exports.toByteArray = b64ToByteArray
		exports.fromByteArray = uint8ToBase64
	}( false ? (this.base64js = {}) : exports))


/***/ },
/* 134 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]
	
	  i += d
	
	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}
	
	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}
	
	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
	
	  value = Math.abs(value)
	
	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }
	
	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }
	
	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
	
	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
	
	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 135 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};
	
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(137);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(138);
	
	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(131)))

/***/ },
/* 137 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 138 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(140);
	var isArguments = __webpack_require__(141);
	
	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();
	
	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;
	
	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}
	
	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}
	
	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}
	
	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 140 */
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;
	
	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 141 */
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';
	
	exports = module.exports = supportsArgumentsClass ? supported : unsupported;
	
	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};
	
	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @author: zhouquan.yezq
	 * @time : 8/12 2015
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classnames = __webpack_require__(2);
	
	var Mask = (function (_React$Component) {
	    _inherits(Mask, _React$Component);
	
	    function Mask(props) {
	        _classCallCheck(this, Mask);
	
	        _get(Object.getPrototypeOf(Mask.prototype), "constructor", this).call(this, props);
	    }
	
	    _createClass(Mask, [{
	        key: "componentDidMount",
	        value: function componentDidMount() {}
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate() {}
	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {}
	
	        // visible/size
	    }, {
	        key: "render",
	        value: function render() {
	            var _classnames;
	
	            var props = this.props,
	                visible = props.visible,
	                loadTips = props.tips ? props.tips : "Loading...";
	            var _className = classnames((_classnames = {}, _defineProperty(_classnames, props.jsxprefixCls, true), _defineProperty(_classnames, props.jsxprefixCls + "-hide", !visible), _classnames));
	            return React.createElement(
	                "div",
	                { className: _className },
	                React.createElement(
	                    "div",
	                    { className: props.jsxprefixCls + "-centerblk" },
	                    React.createElement(
	                        "span",
	                        null,
	                        loadTips
	                    )
	                )
	            );
	        }
	    }]);
	
	    return Mask;
	})(React.Component);
	
	;
	
	Mask.propTypes = {};
	
	Mask.defaultProps = {
	    jsxprefixCls: "kuma-uxmask"
	};
	
	exports["default"] = Mask;
	module.exports = exports["default"];

/***/ },
/* 143 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	    isIE: function isIE(version) {
	        if (navigator.appName == "Microsoft Internet Explorer") {
	            if (!version) {
	                return true;
	            } else {
	                return navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE" + version + ".0";
	            }
	        } else {
	            return false;
	        }
	    }
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Grid Component for uxcore
	 * @author zhouquan.yezq
	 *
	 * Copyright 2014-2015, UXCore Team, Alinw.
	 * All rights reserved.
	 */
	
	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SearchBar = __webpack_require__(145);
	var classnames = __webpack_require__(2);
	var Button = __webpack_require__(146);
	
	var ActionBar = (function (_React$Component) {
	    _inherits(ActionBar, _React$Component);
	
	    function ActionBar(props) {
	        _classCallCheck(this, ActionBar);
	
	        _get(Object.getPrototypeOf(ActionBar.prototype), "constructor", this).call(this, props);
	    }
	
	    _createClass(ActionBar, [{
	        key: "handleSearch",
	        value: function handleSearch(value) {
	            this.props.onSearch(value);
	        }
	    }, {
	        key: "renderActionBtn",
	        value: function renderActionBtn(item, index) {
	            var me = this;
	            var itemProps = {
	                className: me.props.jsxprefixCls + "-item",
	                onClick: item.callback || function () {},
	                key: index
	            };
	            if (!!item.render && typeof item.render == "function") {
	                return React.createElement(
	                    "div",
	                    itemProps,
	                    item.render(item.title)
	                );
	            } else {
	                return React.createElement(
	                    Button,
	                    _extends({ type: "secondary", size: "medium" }, itemProps),
	                    item.title
	                );
	            }
	        }
	    }, {
	        key: "renderSearchBar",
	        value: function renderSearchBar() {
	            if (this.props.showSearch) {
	                var me = this;
	                var searchBarProps = {
	                    onSearch: me.handleSearch.bind(me),
	                    key: 'searchbar',
	                    placeholder: me.props.searchBarPlaceholder
	                };
	                return React.createElement(SearchBar, searchBarProps);
	            }
	        }
	
	        /**
	         *  convert ActionBar config from hash to array
	         */
	    }, {
	        key: "getActionItem",
	        value: function getActionItem(config) {
	            var items = [];
	            if (config instanceof Array) {
	                items = config;
	            } else if (typeof config == "object") {
	                for (var item in config) {
	                    if (config.hasOwnProperty(item)) {
	                        items.push({
	                            title: item,
	                            callback: config[item]
	                        });
	                    }
	                }
	            }
	            return items;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _classnames;
	
	            var me = this,
	                _props = this.props,
	                _barConfig = _props.actionBarConfig;
	
	            return React.createElement(
	                "div",
	                { className: classnames((_classnames = {}, _defineProperty(_classnames, _props.jsxprefixCls, _props.jsxprefixCls), _defineProperty(_classnames, "fn-clear", true), _classnames)) },
	                me.getActionItem(_barConfig).map(function (item, index) {
	                    return me.renderActionBtn(item, index);
	                }),
	                me.renderSearchBar()
	            );
	        }
	    }]);
	
	    return ActionBar;
	})(React.Component);
	
	;
	
	ActionBar.propTypes = {};
	
	ActionBar.defaultProps = {
	    jsxprefixCls: "kuma-uxtable-actionbar"
	};
	
	module.exports = ActionBar;

/***/ },
/* 145 */
/***/ function(module, exports) {

	/**
	 * Grid Component for uxcore
	 * @author zhouquan.yezq
	 *
	 * Copyright 2014-2015, UXCore Team, Alinw.
	 * All rights reserved.
	 */
	
	"use strict";
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SearchBar = (function (_React$Component) {
	    _inherits(SearchBar, _React$Component);
	
	    function SearchBar(props) {
	        _classCallCheck(this, SearchBar);
	
	        _get(Object.getPrototypeOf(SearchBar.prototype), "constructor", this).call(this, props);
	        this.state = {
	            searchTxt: ""
	        };
	    }
	
	    _createClass(SearchBar, [{
	        key: "doSearch",
	        value: function doSearch() {
	            this.props.onSearch(this.state.searchTxt);
	        }
	    }, {
	        key: "onKeyDown",
	        value: function onKeyDown(e) {
	            if (e.keyCode == 13) {
	                this.doSearch();
	            }
	        }
	    }, {
	        key: "handleChange",
	        value: function handleChange(e) {
	            this.setState({
	                searchTxt: e.target.value
	            });
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var me = this;
	            var placeholder = me.props.placeholder;
	
	            return React.createElement(
	                "div",
	                { className: this.props.jsxprefixCls },
	                React.createElement("input", { type: "text", className: "kuma-input", placeholder: placeholder, value: this.state.value, onKeyDown: this.onKeyDown.bind(this), onChange: this.handleChange.bind(this) }),
	                React.createElement("i", { className: "kuma-icon kuma-icon-search", onClick: this.doSearch.bind(this) })
	            );
	        }
	    }]);
	
	    return SearchBar;
	})(React.Component);
	
	;
	
	SearchBar.propTypes = {};
	
	SearchBar.defaultProps = {
	    jsxprefixCls: "kuma-uxtable-searchbar",
	    onSearch: function onSearch() {}
	};
	
	module.exports = SearchBar;

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Button Component for uxcore
	 * @author
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _Button = __webpack_require__(147);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	module.exports = _Button2['default'];

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _classnames = __webpack_require__(2);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var sizeMap = {
		small: 'sm',
		medium: '',
		large: 'lg'
	},
	    typeMap = {
		primary: 'primary',
		secondary: 'secondary',
		disabled: 'disabled'
	},
	    clsPrefix = 'kuma-button';
	
	var Button = (function (_React$Component) {
		_inherits(Button, _React$Component);
	
		function Button(props) {
			_classCallCheck(this, Button);
	
			_get(Object.getPrototypeOf(Button.prototype), 'constructor', this).call(this, props);
		}
	
		_createClass(Button, [{
			key: 'render',
			value: function render() {
				var props = this.props;
				var type = props.disabled ? 'disabled' : props.type;
				var clsObj = {};
				if (props.className) {
					clsObj[props.className] = true;
				}
				if (sizeMap[props.size]) {
					clsObj[clsPrefix + '-' + sizeMap[props.size]] = true;
				}
				var className = (0, _classnames2['default'])(clsPrefix, clsPrefix + '-' + typeMap[type], clsObj);
				var propEvents = {};
				Object.keys(props).forEach(function (key) {
					if (key.indexOf('on') === 0) {
						propEvents[key] = props[key];
					}
				});
				return React.createElement(
					'button',
					_extends({ className: className, disabled: props.disabled }, propEvents),
					props.children
				);
			}
		}]);
	
		return Button;
	})(React.Component);
	
	Button.displayName = 'uxcore-button';
	Button.propTypes = {
		size: React.PropTypes.oneOf(Object.keys(sizeMap)),
		type: React.PropTypes.oneOf(Object.keys(typeMap)),
		disabled: React.PropTypes.oneOf(['disabled', true, false]),
		className: React.PropTypes.string
	};
	Button.defaultProps = {
		size: 'medium',
		type: 'primary',
		disabled: false,
		className: ''
	};
	
	module.exports = Button;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Pagination Component for uxcore
	 * @author 
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	module.exports = __webpack_require__(149);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Forked from project rc-pagination
	 * @maintainer eternalsky
	 */
	
	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Select = __webpack_require__(53);
	var Pager = __webpack_require__(150);
	var Options = __webpack_require__(151);
	var KEYCODE = __webpack_require__(152);
	
	function noop() {}
	
	var Pagination = (function (_React$Component) {
	  _inherits(Pagination, _React$Component);
	
	  function Pagination(props) {
	    var _this = this;
	
	    _classCallCheck(this, Pagination);
	
	    _get(Object.getPrototypeOf(Pagination.prototype), 'constructor', this).call(this, props);
	
	    this.state = {
	      current: props.current,
	      _current: props.current,
	      pageSize: props.pageSize
	    };
	
	    ['render', '_handleChange', '_handleKeyUp', '_handleKeyDown', '_changePageSize', '_isValid', '_prev', '_next', '_hasPrev', '_hasNext', '_jumpPrev', '_jumpNext'].forEach(function (method) {
	      return _this[method] = _this[method].bind(_this);
	    });
	  }
	
	  _createClass(Pagination, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.current != this.props.current) {
	        this.setState({
	          current: nextProps.current,
	          _current: nextProps.current
	        });
	      }
	
	      if (nextProps.pageSize != this.props.pageSize) {
	        this.setState({
	          pageSize: nextProps.pageSize
	        });
	      }
	    }
	  }, {
	    key: 'renderTotal',
	    value: function renderTotal() {
	      if (this.props.showTotal) {
	        return React.createElement(
	          'li',
	          { className: this.props.prefixCls + "-total" },
	          '共' + this.props.total + '条'
	        );
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	
	      var prefixCls = props.prefixCls;
	      var allPages = this._calcPage();
	      var pagerList = [];
	      var jumpPrev = null;
	      var jumpNext = null;
	      var firstPager = null;
	      var lastPager = null;
	
	      if (props.simple) {
	        return React.createElement(
	          'ul',
	          { className: prefixCls + ' ' + prefixCls + '-simple ' + props.className },
	          React.createElement(
	            'div',
	            { title: 'Page ' + this.state.current + ' of ' + allPages, className: prefixCls + '-simple-pager' },
	            React.createElement(
	              'span',
	              { className: prefixCls + '-current' },
	              this.state._current
	            ),
	            React.createElement(
	              'span',
	              { className: prefixCls + '-slash' },
	              '/'
	            ),
	            allPages
	          ),
	          React.createElement(
	            'li',
	            { title: 'Previous Page', onClick: this._prev, className: (this._hasPrev() ? '' : prefixCls + '-disabled ') + (prefixCls + '-prev') },
	            React.createElement('a', { className: 'kuma-icon kuma-icon-chevron-left' })
	          ),
	          React.createElement(
	            'li',
	            { title: 'Next Page', onClick: this._next, className: (this._hasNext() ? '' : prefixCls + '-disabled ') + (prefixCls + '-next') },
	            React.createElement('a', { className: 'kuma-icon kuma-icon-chevron-right' })
	          )
	        );
	      }
	
	      if (allPages <= 9) {
	        for (var i = 1; i <= allPages; i++) {
	          var active = this.state.current === i;
	          pagerList.push(React.createElement(Pager, { rootPrefixCls: prefixCls, onClick: this._handleChange.bind(this, i), key: i, page: i, active: active }));
	        }
	      } else {
	        jumpPrev = React.createElement(
	          'li',
	          { title: 'Previous 5 Page', key: 'prev', onClick: this._jumpPrev, className: prefixCls + '-jump-prev' },
	          React.createElement('a', null)
	        );
	        jumpNext = React.createElement(
	          'li',
	          { title: 'Next 5 Page', key: 'next', onClick: this._jumpNext, className: prefixCls + '-jump-next' },
	          React.createElement('a', null)
	        );
	        lastPager = React.createElement(Pager, { last: true, rootPrefixCls: prefixCls, onClick: this._handleChange.bind(this, allPages), key: allPages, page: allPages, active: false });
	        firstPager = React.createElement(Pager, { rootPrefixCls: prefixCls, onClick: this._handleChange.bind(this, 1), key: 1, page: 1, active: false });
	
	        var current = this.state.current;
	
	        var left = Math.max(1, current - 2);
	        var right = Math.min(current + 2, allPages);
	
	        if (current - 1 <= 2) {
	          right = 1 + 4;
	        }
	
	        if (allPages - current <= 2) {
	          left = allPages - 4;
	        }
	
	        for (var i = left; i <= right; i++) {
	          var active = current === i;
	          pagerList.push(React.createElement(Pager, { rootPrefixCls: prefixCls, onClick: this._handleChange.bind(this, i), key: i, page: i, active: active }));
	        }
	
	        if (current - 1 >= 4) {
	          pagerList.unshift(jumpPrev);
	        }
	        if (allPages - current >= 4) {
	          pagerList.push(jumpNext);
	        }
	
	        if (left !== 1) {
	          pagerList.unshift(firstPager);
	        }
	        if (right !== allPages) {
	          pagerList.push(lastPager);
	        }
	      }
	
	      return React.createElement(
	        'ul',
	        { className: prefixCls + ' ' + props.className,
	          unselectable: 'unselectable' },
	        React.createElement(
	          'li',
	          { title: 'Previous Page', onClick: this._prev, className: (this._hasPrev() ? '' : prefixCls + '-disabled ') + (prefixCls + '-prev') },
	          React.createElement('a', { className: 'kuma-icon kuma-icon-chevron-left' })
	        ),
	        pagerList,
	        React.createElement(
	          'li',
	          { title: 'Next Page', onClick: this._next, className: (this._hasNext() ? '' : prefixCls + '-disabled ') + (prefixCls + '-next') },
	          React.createElement('a', { className: 'kuma-icon kuma-icon-chevron-right' })
	        ),
	        this.renderTotal(),
	        React.createElement(Options, { rootPrefixCls: prefixCls,
	          selectComponentClass: props.selectComponentClass,
	          selectPrefixCls: props.selectPrefixCls,
	          changeSize: this.props.showSizeChanger ? this._changePageSize.bind(this) : null,
	          current: this.state.current,
	          pageSize: props.pageSize,
	          sizeOptions: props.sizeOptions,
	          quickGo: this.props.showQuickJumper ? this._handleChange.bind(this) : null })
	      );
	    }
	
	    // private methods
	
	  }, {
	    key: '_calcPage',
	    value: function _calcPage(p) {
	      var pageSize = p;
	      if (typeof pageSize === 'undefined') {
	        pageSize = this.state.pageSize;
	      }
	      return Math.floor((this.props.total - 1) / pageSize) + 1;
	    }
	  }, {
	    key: '_isValid',
	    value: function _isValid(page) {
	      return typeof page === 'number' && page >= 1 && page !== this.state.current;
	    }
	  }, {
	    key: '_handleKeyDown',
	    value: function _handleKeyDown(evt) {
	      if (evt.keyCode === KEYCODE.ARROW_UP || evt.keyCode === KEYCODE.ARROW_DOWN) {
	        evt.preventDefault();
	      }
	    }
	  }, {
	    key: '_handleKeyUp',
	    value: function _handleKeyUp(evt) {
	      var _val = evt.target.value;
	      var val = undefined;
	
	      if (_val === '') {
	        val = _val;
	      } else if (isNaN(Number(_val))) {
	        val = this.state._current;
	      } else {
	        val = Number(_val);
	      }
	
	      this.setState({
	        _current: val
	      });
	
	      if (evt.keyCode === KEYCODE.ENTER) {
	        this._handleChange(val);
	      } else if (evt.keyCode === KEYCODE.ARROW_UP) {
	        this._handleChange(val - 1);
	      } else if (evt.keyCode === KEYCODE.ARROW_DOWN) {
	        this._handleChange(val + 1);
	      }
	    }
	  }, {
	    key: '_changePageSize',
	    value: function _changePageSize(size) {
	      if (typeof size === 'number') {
	        var current = this.state.current;
	
	        this.setState({
	          pageSize: size
	        });
	
	        if (this.state.current > this._calcPage(size)) {
	          current = this._calcPage(size);
	          this.setState({
	            current: current,
	            _current: current
	          });
	        }
	
	        this.props.onShowSizeChange(current, size);
	      }
	    }
	  }, {
	    key: '_handleChange',
	    value: function _handleChange(p) {
	      var page = p;
	      var me = this;
	      if (this._isValid(page)) {
	        if (page > this._calcPage()) {
	          page = this._calcPage();
	        }
	        this.setState({
	          current: page,
	          _current: page
	        }, function () {
	          me.props.onChange(page);
	        });
	
	        return page;
	      }
	
	      return this.state.current;
	    }
	  }, {
	    key: '_prev',
	    value: function _prev() {
	      if (this._hasPrev()) {
	        this._handleChange(this.state.current - 1);
	      }
	    }
	  }, {
	    key: '_next',
	    value: function _next() {
	      if (this._hasNext()) {
	        this._handleChange(this.state.current + 1);
	      }
	    }
	  }, {
	    key: '_jumpPrev',
	    value: function _jumpPrev() {
	      this._handleChange(Math.max(1, this.state.current - 5));
	    }
	  }, {
	    key: '_jumpNext',
	    value: function _jumpNext() {
	      this._handleChange(Math.min(this._calcPage(), this.state.current + 5));
	    }
	  }, {
	    key: '_hasPrev',
	    value: function _hasPrev() {
	      return this.state.current > 1;
	    }
	  }, {
	    key: '_hasNext',
	    value: function _hasNext() {
	      return this.state.current < this._calcPage();
	    }
	  }]);
	
	  return Pagination;
	})(React.Component);
	
	Pagination.propTypes = {
	  current: React.PropTypes.number,
	  total: React.PropTypes.number,
	  showTotal: React.PropTypes.bool,
	  pageSize: React.PropTypes.number,
	  sizeOptions: React.PropTypes.array,
	  onChange: React.PropTypes.func,
	  showSizeChanger: React.PropTypes.bool,
	  onShowSizeChange: React.PropTypes.func,
	  selectComponentClass: React.PropTypes.func,
	  showQuickJumper: React.PropTypes.bool
	};
	
	Pagination.defaultProps = {
	  current: 1,
	  total: 0,
	  showTotal: false,
	  pageSize: 10,
	  sizeOptions: [10, 20, 30, 40],
	  onChange: noop,
	  className: '',
	  selectPrefixCls: 'kuma-select2',
	  prefixCls: 'kuma-page',
	  selectComponentClass: Select,
	  showQuickJumper: false,
	  showSizeChanger: false,
	  onShowSizeChange: noop
	};
	
	Pagination.displayName = 'Pagination';
	
	module.exports = Pagination;

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(15);
	
	var Pager = (function (_React$Component) {
	  _inherits(Pager, _React$Component);
	
	  function Pager() {
	    _classCallCheck(this, Pager);
	
	    _get(Object.getPrototypeOf(Pager.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Pager, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	      var prefixCls = props.rootPrefixCls + '-item';
	      var cls = prefixCls + ' ' + prefixCls + '-' + props.page;
	
	      if (props.active) {
	        cls = cls + ' ' + prefixCls + '-active';
	      }
	
	      var title = undefined;
	      if (props.page === 1) {
	        title = 'First Page';
	      } else if (props.last) {
	        title = 'Last Page: ' + props.page;
	      } else {
	        title = 'Page ' + props.page;
	      }
	      return React.createElement(
	        'li',
	        { title: title, className: cls, onClick: props.onClick },
	        React.createElement(
	          'a',
	          null,
	          props.page
	        )
	      );
	    }
	  }]);
	
	  return Pager;
	})(React.Component);
	
	Pager.propTypes = {
	  page: React.PropTypes.number,
	  active: React.PropTypes.bool,
	  last: React.PropTypes.bool
	};
	
	module.exports = Pager;

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var React = __webpack_require__(15);
	var KEYCODE = __webpack_require__(152);
	
	var Options = (function (_React$Component) {
	  _inherits(Options, _React$Component);
	
	  function Options(props) {
	    var _this = this;
	
	    _classCallCheck(this, Options);
	
	    _get(Object.getPrototypeOf(Options.prototype), 'constructor', this).call(this, props);
	
	    this.state = {
	      current: props.current,
	      _current: props.current
	    };
	
	    ['_handleChange', '_changeSize', '_go'].forEach(function (method) {
	      return _this[method] = _this[method].bind(_this);
	    });
	  }
	
	  _createClass(Options, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var props = this.props;
	      var state = this.state;
	      var prefixCls = props.rootPrefixCls + '-options';
	      var sizeOptions = props.sizeOptions;
	      var pageSize = props.pageSize;
	      var changeSize = props.changeSize;
	      var quickGo = props.quickGo;
	      var Select = props.selectComponentClass;
	      var changeSelect = null;
	      var goInput = null;
	
	      if (!(changeSize || quickGo)) {
	        return null;
	      }
	
	      if (changeSize && Select) {
	        (function () {
	          var Option = Select.Option;
	          changeSelect = React.createElement(
	            Select,
	            {
	              prefixCls: props.selectPrefixCls, showSearch: false,
	              className: prefixCls + '-size-changer',
	              optionLabelProp: 'children',
	              dropdownClassName: prefixCls + '-size-changer-dropdown',
	              defaultValue: sizeOptions.indexOf(pageSize) == -1 ? sizeOptions[0] + "" : pageSize + "",
	              onChange: _this2._changeSize },
	            sizeOptions.map(function (option, index) {
	              return React.createElement(
	                Option,
	                { key: option, value: option + "" },
	                option + "条/页"
	              );
	            })
	          );
	        })();
	      }
	
	      if (quickGo) {
	        goInput = React.createElement(
	          'div',
	          { title: 'Quick jump to page', className: prefixCls + '-quick-jumper' },
	          '跳至',
	          React.createElement('input', { type: 'text', value: state._current, onChange: this._handleChange.bind(this), onKeyUp: this._go.bind(this) }),
	          '页'
	        );
	      }
	
	      return React.createElement(
	        'div',
	        { className: '' + prefixCls },
	        changeSelect,
	        goInput
	      );
	    }
	  }, {
	    key: '_changeSize',
	    value: function _changeSize(value) {
	      this.props.changeSize(Number(value));
	    }
	  }, {
	    key: '_handleChange',
	    value: function _handleChange(evt) {
	      var _val = evt.target.value;
	
	      this.setState({
	        _current: _val
	      });
	    }
	  }, {
	    key: '_go',
	    value: function _go(e) {
	      var _val = e.target.value;
	      if (_val === '') {
	        return;
	      }
	      var val = Number(this.state._current);
	      if (isNaN(val)) {
	        val = this.state.current;
	      }
	      if (e.keyCode === KEYCODE.ENTER) {
	        var c = this.props.quickGo(val);
	        this.setState({
	          _current: c,
	          current: c
	        });
	      }
	    }
	  }]);
	
	  return Options;
	})(React.Component);
	
	Options.propTypes = {
	  changeSize: React.PropTypes.func,
	  quickGo: React.PropTypes.func,
	  selectComponentClass: React.PropTypes.func,
	  current: React.PropTypes.number
	};
	
	module.exports = Options;

/***/ },
/* 152 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  ZERO: 48,
	  NINE: 57,
	
	  NUMPAD_ZERO: 96,
	  NUMPAD_NINE: 105,
	
	  BACKSPACE: 8,
	  DELETE: 46,
	  ENTER: 13,
	
	  ARROW_UP: 38,
	  ARROW_DOWN: 40
	};

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Grid Component Demo for uxcore
	 * @author zhouquan.yezq
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var classnames = __webpack_require__(2);
	var Validator = __webpack_require__(154);
	var Button = __webpack_require__(146);
	var Select = __webpack_require__(53);
	var Option = Select.Option;
	
	var RadioGroup = __webpack_require__(124);
	var RadioItem = RadioGroup.Item;
	var Table = __webpack_require__(3);
	// let RadioField = require('./RadioField');
	// let {Constants} = Table;
	var Constants = __webpack_require__(7);
	var mockData = {
	    "data": [{
	        "email": "xw@abc.com",
	        "nameId": "xiaowang",
	        "name": "小王",
	        "cityId": "bj",
	        "city": "北京"
	    }, {
	        "email": "xl@abc.com",
	        "nameId": "xiaoli",
	        "name": "小李",
	        "cityId": "hz",
	        "city": "杭州"
	    }]
	};
	
	var Demo = (function (_React$Component) {
	    _inherits(Demo, _React$Component);
	
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        _get(Object.getPrototypeOf(Demo.prototype), 'constructor', this).call(this, props);
	        this.state = {
	            data: mockData,
	            showOtherColumn: false
	        };
	    }
	
	    _createClass(Demo, [{
	        key: 'getTableValues',
	        value: function getTableValues() {
	            console.log(this.refs.grid.getData());
	        }
	    }, {
	        key: 'handleTableChange',
	        value: function handleTableChange(data) {
	            console.log(data);
	        }
	    }, {
	        key: 'handleDataChange',
	        value: function handleDataChange() {
	            var me = this;
	            me.setState({
	                data: {
	                    "data": [{
	                        "email": "xw@abc.com",
	                        "nameId": "xiaowang",
	                        "name": "小王",
	                        "cityId": "bj",
	                        "city": "北京"
	                    }, {
	                        "email": "xl@abc.com",
	                        "nameId": "xiaoli",
	                        "name": "小李",
	                        "cityId": "hz",
	                        "city": "杭州"
	                    }, {
	                        "email": "xl@abc.com",
	                        "nameId": "xiaoli",
	                        "name": "小李",
	                        "cityId": "hz",
	                        "city": "杭州"
	                    }]
	                }
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var me = this;
	            var columns = [{ dataKey: 'jsxid', title: 'jsxid', width: 80 }, { dataKey: 'city', editKey: 'cityId', title: '城市', width: 200, type: 'select', children: [{ id: 'bj', name: '北京' }, { id: 'hz', name: '杭州' }].map(function (item) {
	                    return React.createElement(
	                        Option,
	                        { key: item.id },
	                        item.name
	                    );
	                }), config: { filterOption: false }, canEdit: function canEdit(rowData) {
	                    return rowData.name !== "小王";
	                } },
	            // { dataKey: 'name', editKey: 'nameId', title:"姓名", width: 200, type:"custom", customField: RadioField, children: [{id: 'xiaoli', name: '小李'}, {id: 'xiaowang', name: '小王'}].map((item) => {
	            //     return <RadioItem key={item.id} text={item.name} value={item.id} />
	            // })}, 
	            { dataKey: 'email', title: "Email", width: 200, type: "text", rules: { validator: Validator.isEmail, errMsg: "" }, config: { onBlur: function onBlur(e) {
	                        console.log(e);
	                    } } }, { dataKey: 'action1', title: '操作1', width: 100, type: "action", actions: [{
	                    title: '编辑',
	                    callback: function callback(rowData) {
	                        me.refs.grid.editRow(rowData);
	                    },
	                    mode: Constants.MODE.VIEW
	                }, {
	                    title: '保存',
	                    callback: function callback(rowData) {
	                        me.refs.grid.saveRow(rowData);
	                    },
	                    mode: Constants.MODE.EDIT
	                }, {
	                    title: '删除',
	                    callback: function callback(rowData) {
	                        me.refs.grid.delRow(rowData);
	                    },
	                    mode: Constants.MODE.VIEW
	                }, {
	                    title: '重置',
	                    callback: function callback(rowData) {
	                        me.refs.grid.resetRow(rowData);
	                    },
	                    mode: Constants.MODE.EDIT
	                }]
	            }];
	
	            var renderProps = {
	                // height: 200,
	                width: 1000,
	                showPager: false,
	                fetchParams: {},
	                showHeaderBorder: true,
	                getSavedData: true,
	                jsxdata: me.state.data,
	                doubleClickToEdit: true,
	                actionBar: [{
	                    title: '新增行',
	                    callback: function callback() {
	                        me.refs.grid.addEmptyRow();
	                    },
	                    render: function render(title) {
	                        return React.createElement(
	                            Button,
	                            null,
	                            title
	                        );
	                    }
	                }, {
	                    title: "编辑所有行",
	                    callback: function callback() {
	                        me.refs.grid.editAllRow();
	                    }
	                }, {
	                    title: "保存所有行",
	                    callback: function callback() {
	                        me.refs.grid.saveAllRow();
	                    }
	                }],
	                // fetchUrl:"http://demo.nwux.taobao.net/file/getGridJson.jsonp",
	                // fetchUrl: "http://10.1.159.52:3002/demo/data.json",
	                jsxcolumns: columns,
	                beforeFetch: function beforeFetch(sendData) {
	                    sendData.id = 1;return sendData;
	                },
	                processData: function processData(data) {
	                    return data;
	                },
	                onChange: me.handleTableChange
	            };
	
	            return React.createElement(
	                'div',
	                null,
	                React.createElement(Table, _extends({}, renderProps, { ref: 'grid' })),
	                React.createElement(
	                    Button,
	                    { onClick: me.getTableValues.bind(me) },
	                    '获取 Table 的值'
	                ),
	                React.createElement(
	                    Button,
	                    { onClick: me.handleDataChange.bind(me) },
	                    '更改 Data'
	                )
	            );
	        }
	    }]);
	
	    return Demo;
	})(React.Component);
	
	;
	
	module.exports = Demo;

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Validator Component for uxcore
	 * @author eternalsky
	 *
	 * Copyright 2014-2015, Uxcore Team, Alinw.
	 * All rights reserved.
	 */
	
	'use strict';
	
	module.exports = __webpack_require__(155);

/***/ },
/* 155 */
/***/ function(module, exports) {

	/**
	 * Created by xy on 15/4/16.
	 */
	
	'use strict';
	
	var Validator = {};
	
	var PATTERN = {
	    EMAIL: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
	    URL: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
	    HEX: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
	    NUM: /^((-?\d+\.\d+)|(-?\d+)|(-?\.\d+))$/,
	    IDCARD: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/i,
	    CNMOBILE: /^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/
	};
	
	Validator.isNotEmpty = function (value) {
	    // empty means empty string, empty array, empty object & null & undefined
	    if (typeof value == "string") {
	        return value.length !== 0;
	    } else if (typeof value == 'object') {
	        if (value instanceof Array) {
	            return value.length !== 0;
	        } else {
	            var i = 0;
	            for (var key in value) {
	                i++;
	            }
	            return !!i;
	        }
	    } else if (typeof value == 'number') {
	        return true;
	    } else {
	        return !!value;
	    }
	};
	
	Validator.isNum = function (value) {
	    return PATTERN.NUM.test(value);
	};
	
	Validator.isInt = function (value) {
	    return Validator.isNum(value) && parseInt(value) == value;
	};
	
	Validator.isDecimal = function (value) {
	    return Validator.isNum(value) && !Validator.isInt(value);
	};
	
	Validator.isArray = function (value) {
	    return Array.isArray(value);
	};
	
	Validator.isRegExp = function (value) {
	    if (value instanceof RegExp) {
	        return true;
	    }
	    try {
	        return !!new RegExp(value);
	    } catch (e) {
	        return false;
	    }
	};
	
	Validator.isObject = function (value) {
	    return typeof value === 'object' && !Validator.isArray(value);
	};
	
	Validator.isFunc = function (value) {
	    return typeof value === 'function';
	};
	
	Validator.isEmail = function (value) {
	    return typeof value === 'string' && PATTERN.EMAIL.test(value);
	};
	
	Validator.isUrl = function (value) {
	    return typeof value === 'string' && PATTERN.URL.test(value);
	};
	
	Validator.isHex = function (value) {
	    return typeof value === 'string' && PATTERN.HEX.test(value);
	};
	
	Validator.isIdCard = function (value) {
	    return typeof value === 'string' && PATTERN.IDCARD.test(value);
	};
	
	Validator.isCNMobile = function (value) {
	    return typeof value === 'string' && PATTERN.CNMOBILE.test(value);
	};
	module.exports = Validator;

/***/ }
/******/ ]);
//# sourceMappingURL=demo.js.map