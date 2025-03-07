"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MsgRequestRand = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _types = require("./types");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
/**
 * Msg struct for requesting a random number
 * @hidden
 */
var MsgRequestRand = /*#__PURE__*/function (_Msg) {
  (0, _inherits2["default"])(MsgRequestRand, _Msg);
  var _super = _createSuper(MsgRequestRand);
  function MsgRequestRand(consumer, blockInterval) {
    var _this;
    (0, _classCallCheck2["default"])(this, MsgRequestRand);
    _this = _super.call(this, 'irishub/slashing/MsgUnjail');
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "value", void 0);
    _this.value = {
      consumer: consumer,
      'block-interval': blockInterval
    };
    return _this;
  }
  (0, _createClass2["default"])(MsgRequestRand, [{
    key: "getSignBytes",
    value: function getSignBytes() {
      return this;
    }
  }]);
  return MsgRequestRand;
}(_types.Msg);
exports.MsgRequestRand = MsgRequestRand;