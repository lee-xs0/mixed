"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("@al-mixed/utils");
require("./index.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/*
 * @Author: atwLee
 * @Date: 2022-12-24 10:15:57
 * @LastEditors: atwLee
 * @LastEditTime: 2023-01-06 22:20:31
 * @Description: 水滴形状的box
 * @FilePath: /al-mixed/packages/box/src/water-droplet/index.tsx
 */

function WaterDroplet(props) {
  var _props$width = props.width,
    width = _props$width === void 0 ? 350 : _props$width,
    _props$height = props.height,
    height = _props$height === void 0 ? 350 : _props$height,
    children = props.children,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$borderRadius = props.borderRadius,
    borderRadius = _props$borderRadius === void 0 ? '52% 48% 33% 67% / 38% 45% 55% 62%' : _props$borderRadius,
    _props$backgroundColo = props.backgroundColor,
    backgroundColor = _props$backgroundColo === void 0 ? '#eff0f2' : _props$backgroundColo,
    embellishment = props.embellishment,
    shadowColor = props.shadowColor;
  var waterRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    // set water droplet width and height
    (_a = waterRef.current) === null || _a === void 0 ? void 0 : _a.style.setProperty('--droplet-width', width + 'px');
    (_b = waterRef.current) === null || _b === void 0 ? void 0 : _b.style.setProperty('--droplet-height', height + 'px');
    // set embellishment width and height
    (_c = waterRef.current) === null || _c === void 0 ? void 0 : _c.style.setProperty('--embellishmentWH', "".concat(Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / 14, "px"));
    // set embellishment position and background color
    if (embellishment) {
      (_d = waterRef.current) === null || _d === void 0 ? void 0 : _d.style.setProperty('--embellishmentL', (_f = (_e = embellishment.position) === null || _e === void 0 ? void 0 : _e.left) !== null && _f !== void 0 ? _f : null);
      (_g = waterRef.current) === null || _g === void 0 ? void 0 : _g.style.setProperty('--embellishmentT', (_j = (_h = embellishment.position) === null || _h === void 0 ? void 0 : _h.top) !== null && _j !== void 0 ? _j : null);
      (_k = waterRef.current) === null || _k === void 0 ? void 0 : _k.style.setProperty('--embellishmentBKC', (_l = embellishment.backgroundColor) !== null && _l !== void 0 ? _l : null);
    }
    // set shadow color
    if (shadowColor) {
      var newShadowColor = '';
      if (shadowColor.includes('#') && (0, _utils.hexToRgba)(shadowColor).rgba !== 'error') {
        newShadowColor = (0, _utils.hexToRgba)(shadowColor).rgba;
      } else if ((0, _utils.regRgbaFormat)(shadowColor)) {
        newShadowColor = (0, _utils.hexToRgba)((0, _utils.rgbaToHex)(shadowColor, 0.05).hexa).rgba;
      } else {
        console.warn('Please check the color format————', shadowColor);
      }
      if (newShadowColor !== '') {
        (_m = waterRef.current) === null || _m === void 0 ? void 0 : _m.style.setProperty('--shadowColor', newShadowColor);
      }
    }
  }, [width, height, embellishment, shadowColor]);
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      borderRadius: borderRadius,
      backgroundColor: backgroundColor
    },
    className: "alm-box-water-droplet ".concat(className),
    ref: waterRef
  }, children);
}
var _default = WaterDroplet;
exports.default = _default;