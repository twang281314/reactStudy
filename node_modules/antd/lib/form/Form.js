'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Form).apply(this, arguments));
  }

  _createClass(Form, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props;
      var prefixCls = _props.prefixCls;
      var className = _props.className;

      var formClassName = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-horizontal', this.props.horizontal), _defineProperty(_classNames, prefixCls + '-inline', this.props.inline), _classNames));

      return _react2.default.createElement(
        'form',
        _extends({}, this.props, { className: formClassName }),
        this.props.children
      );
    }
  }]);

  return Form;
}(_react2.default.Component);

Form.propTypes = {
  prefixCls: _react2.default.PropTypes.string,
  horizontal: _react2.default.PropTypes.bool,
  inline: _react2.default.PropTypes.bool,
  children: _react2.default.PropTypes.any,
  onSubmit: _react2.default.PropTypes.func
};

Form.defaultProps = {
  prefixCls: 'ant-form'
};

module.exports = Form;