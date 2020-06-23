"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../models"));

var CategoryService = /*#__PURE__*/function () {
  function CategoryService() {
    (0, _classCallCheck2["default"])(this, CategoryService);
  }

  (0, _createClass2["default"])(CategoryService, null, [{
    key: "getCategories",
    value: function getCategories() {
      return _models["default"].Category.findAll({
        include: [{
          model: _models["default"].Cat,
          as: 'cats'
        }]
      });
    }
  }, {
    key: "createCategory",
    value: function createCategory(_ref) {
      var name = _ref.name;
      return _models["default"].Category.create({
        name: name
      });
    }
  }]);
  return CategoryService;
}();

var _default = CategoryService;
exports["default"] = _default;