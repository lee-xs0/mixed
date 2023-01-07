/*
 * @Author: atwLee
 * @Date: 2022-12-24 10:15:57
 * @LastEditors: atwLee
 * @LastEditTime: 2023-01-06 22:20:31
 * @Description: 水滴形状的box
 * @FilePath: /al-mixed/packages/box/src/water-droplet/index.tsx
 */
import React from 'react';
import { useEffect, useRef } from 'react';
import { hexToRgba, regRgbaFormat, rgbaToHex } from '@al-mixed/utils';
import './index.css';
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
  var waterRef = useRef(null);
  useEffect(function () {
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
      if (shadowColor.includes('#') && hexToRgba(shadowColor).rgba !== 'error') {
        newShadowColor = hexToRgba(shadowColor).rgba;
      } else if (regRgbaFormat(shadowColor)) {
        newShadowColor = hexToRgba(rgbaToHex(shadowColor, 0.05).hexa).rgba;
      } else {
        console.warn('Please check the color format————', shadowColor);
      }
      if (newShadowColor !== '') {
        (_m = waterRef.current) === null || _m === void 0 ? void 0 : _m.style.setProperty('--shadowColor', newShadowColor);
      }
    }
  }, [width, height, embellishment, shadowColor]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: borderRadius,
      backgroundColor: backgroundColor
    },
    className: "alm-box-water-droplet ".concat(className),
    ref: waterRef
  }, children);
}
export default WaterDroplet;