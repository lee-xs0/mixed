/*
 * @Author: atwLee
 * @Date: 2022-12-24 15:45:59
 * @LastEditors: atwLee
 * @LastEditTime: 2022-12-24 20:59:57
 * @Description: 参数转换的utils
 * @FilePath: /mixed/src/packages/utils/transform.ts
 */
/**
 * @description: rgba => hex
 * @return {*}
 */
export var rgbaToHex = function rgbaToHex(val, alpha) {
  //RGB(A)颜色转换为HEX十六进制的颜色值
  var r,
    g,
    b,
    a,
    regRgba = /rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([.\d]+))?\)/,
    //判断rgb颜色值格式的正则表达式，如rgba(255,20,10,.54)
    rsa = val.replace(/\s+/g, '').match(regRgba);
  if (!!rsa) {
    r = parseInt(rsa[1]).toString(16);
    r = r.length === 1 ? '0' + r : r;
    g = (+rsa[2]).toString(16);
    g = g.length === 1 ? '0' + g : g;
    b = (+rsa[3]).toString(16);
    b = b.length === 1 ? '0' + b : b;
    a = +(rsa[5] ? rsa[5] : alpha !== null && alpha !== void 0 ? alpha : 1) * 255;
    return {
      hex: '#' + r + g + b,
      r: parseInt(r, 16),
      g: parseInt(g, 16),
      b: parseInt(b, 16),
      alpha: rsa[5] ? rsa[5] : alpha !== null && alpha !== void 0 ? alpha : 1,
      hexa: '#' + r + g + b + (a.toString(16).split('.')[0].length === 1 ? '0' + a.toString(16).split('.')[0] : a.toString(16).split('.')[0])
    };
  } else {
    return {
      hex: '无效',
      alpha: 100
    };
  }
};
/**
 * @description: hex => rgba
 * @param {string} val
 * @return {*}
 */
export var hexToRgba = function hexToRgba(val) {
  // 16进制颜色值的正则
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/;
  // 把颜色值变成小写
  var color = val.toLowerCase();
  var result = '';
  if (reg.test(color)) {
    // 如果只有3位的值，需变成8位，如：#fff => #ffffffff
    if (color.length === 4) {
      var colorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
      }
      color = colorNew + 'ff';
    }
    // 如果只有6位，需要变成8位，如：#ffffff => #ffffffff
    if (color.length === 7) {
      color = color + 'ff';
    }
    // 处理8位的颜色值，转为RGBA
    var colorChange = [];
    for (var _i = 1; _i < 9; _i += 2) {
      if (_i >= 7) {
        colorChange.push(parseInt('0x' + color.slice(_i, _i + 2)) / 255);
      } else colorChange.push(parseInt('0x' + color.slice(_i, _i + 2)));
    }
    result = 'rgba(' + colorChange.join(',') + ')';
    return {
      rgba: result,
      r: colorChange[0],
      g: colorChange[1],
      b: colorChange[2],
      a: colorChange[3]
    };
  } else {
    result = 'error';
    return {
      rgba: result
    };
  }
};
/**
 * @description: 检查是否符合rgba的格式
 * @param {string} val
 * @return {*}
 */
export var regRgbaFormat = function regRgbaFormat(val) {
  var regRgba = /rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(,([.\d]+))?\)/;
  return regRgba.test(val);
};