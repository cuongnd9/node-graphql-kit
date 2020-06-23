"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _path = _interopRequireDefault(require("path"));

var _signale = _interopRequireDefault(require("signale"));

var _utils = require("./components/utils");

var _models = _interopRequireDefault(require("./models"));

var _app = _interopRequireDefault(require("./app"));

var main = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var pathToMigration;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pathToMigration = _path["default"].join(__dirname, 'migrations');
            _context.next = 3;
            return (0, _utils.migrateDB)(_models["default"].sequelize, pathToMigration)["catch"](_signale["default"].watch);

          case 3:
            (0, _app["default"])();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

main()["catch"](_signale["default"].watch);