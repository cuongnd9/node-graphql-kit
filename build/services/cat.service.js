"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _models = _interopRequireDefault(require("../models"));

var CatService = /*#__PURE__*/function () {
  function CatService() {
    (0, _classCallCheck2["default"])(this, CatService);
  }

  (0, _createClass2["default"])(CatService, null, [{
    key: "getCats",
    value: function getCats() {
      return _models["default"].Cat.findAll({
        include: [{
          model: _models["default"].Category,
          as: 'category'
        }]
      });
    }
  }, {
    key: "createCat",
    value: function createCat(_ref) {
      var name = _ref.name,
          color = _ref.color,
          categoryId = _ref.categoryId;
      return _models["default"].Cat.create({
        name: name,
        color: color,
        categoryId: categoryId
      });
    }
  }]);
  return CatService;
}();

var _default = CatService;
exports["default"] = _default;