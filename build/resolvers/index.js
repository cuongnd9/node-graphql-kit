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

var resolvers = (0, _toConsumableArray2["default"])(Array.from(_graphqlScalars.resolvers));

_fs["default"].readdirSync(__dirname).filter(function (fileName) {
  return /resolver.js$/.test(fileName);
}).forEach(function (fileName) {
  var resolver = require(_path["default"].join(__dirname, fileName));

  resolvers = [].concat((0, _toConsumableArray2["default"])(resolvers), [resolver["default"]]);
});

var _default = resolvers;
exports["default"] = _default;