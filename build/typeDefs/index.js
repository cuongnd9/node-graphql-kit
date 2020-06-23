"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _graphqlScalars = require("graphql-scalars");

var typeDefs = (0, _toConsumableArray2["default"])(_graphqlScalars.typeDefs);

_fs["default"].readdirSync(__dirname).filter(function (fileName) {
  return /typeDef.js$/.test(fileName);
}).forEach(function (fileName) {
  var typeDef = require(_path["default"].join(__dirname, fileName));

  typeDefs = [].concat((0, _toConsumableArray2["default"])(typeDefs), [typeDef["default"]]);
});

var _default = typeDefs;
exports["default"] = _default;