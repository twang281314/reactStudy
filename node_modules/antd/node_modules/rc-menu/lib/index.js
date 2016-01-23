'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _SubMenu = require('./SubMenu');

var _SubMenu2 = _interopRequireDefault(_SubMenu);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuItemGroup = require('./MenuItemGroup');

var _MenuItemGroup2 = _interopRequireDefault(_MenuItemGroup);

var _Divider = require('./Divider');

var _Divider2 = _interopRequireDefault(_Divider);

_Menu2['default'].SubMenu = _SubMenu2['default'];
_Menu2['default'].Item = _MenuItem2['default'];
_Menu2['default'].ItemGroup = _MenuItemGroup2['default'];
_Menu2['default'].Divider = _Divider2['default'];

exports['default'] = _Menu2['default'];
module.exports = exports['default'];