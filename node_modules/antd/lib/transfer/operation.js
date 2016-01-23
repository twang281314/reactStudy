'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

var TransferOperation = function (_Component) {
  _inherits(TransferOperation, _Component);

  function TransferOperation() {
    _classCallCheck(this, TransferOperation);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TransferOperation).apply(this, arguments));
  }

  _createClass(TransferOperation, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var moveToLeft = _props.moveToLeft;
      var moveToRight = _props.moveToRight;
      var leftArrowText = _props.leftArrowText;
      var rightArrowText = _props.rightArrowText;
      var leftActive = _props.leftActive;
      var rightActive = _props.rightActive;
      var className = _props.className;

      var moveToLeftButton = _react2.default.createElement(
        _button2.default,
        { type: 'primary', size: 'small', disabled: !leftActive, onClick: moveToLeft },
        _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(_icon2.default, { type: 'left' }),
          leftArrowText
        )
      );
      var moveToRightButton = _react2.default.createElement(
        _button2.default,
        { type: 'primary', size: 'small', disabled: !rightActive, onClick: moveToRight },
        _react2.default.createElement(
          'span',
          null,
          rightArrowText,
          _react2.default.createElement(_icon2.default, { type: 'right' })
        )
      );
      return _react2.default.createElement(
        'div',
        { className: className },
        moveToLeftButton,
        moveToRightButton
      );
    }
  }]);

  return TransferOperation;
}(_react.Component);

TransferOperation.defaultProps = {
  leftArrowText: '',
  rightArrowText: '',
  moveToLeft: noop,
  moveToRight: noop
};

TransferOperation.propTypes = {
  className: _react.PropTypes.string,
  leftArrowText: _react.PropTypes.string,
  rightArrowText: _react.PropTypes.string,
  moveToLeft: _react.PropTypes.func,
  moveToRight: _react.PropTypes.func
};

exports.default = TransferOperation;
module.exports = exports['default'];