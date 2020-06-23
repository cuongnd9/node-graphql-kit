"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateSchema = exports.middleware = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _joi = _interopRequireDefault(require("joi"));

var _lodash = require("lodash");

var _errors = require("./errors");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var middleware = function middleware() {
  for (var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++) {
    parameters[_key] = arguments[_key];
  }

  return function (obj, args, context, info) {
    var resolver = parameters[parameters.length - 1];
    (0, _lodash.flow)((0, _toConsumableArray2["default"])(parameters.slice(0, parameters.length - 1)))(obj, args, context, info);
    return resolver(obj, args, context, info);
  };
};

exports.middleware = middleware;

var validateSchema = function validateSchema(schema) {
  return function () {
    for (var _len2 = arguments.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      rest[_key2] = arguments[_key2];
    }

    var root = rest[0];
    var args = rest[1];

    var value = _objectSpread(_objectSpread({}, root), args);

    var validateOptions = {
      allowUnknown: true,
      abortEarly: false
    };

    var validation = _joi["default"].validate(value, schema, validateOptions);

    if (validation.error) {
      throw new _errors.SchemaValidationError(validation.error);
    }

    return rest;
  };
};

exports.validateSchema = validateSchema;