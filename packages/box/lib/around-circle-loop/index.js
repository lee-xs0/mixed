"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AroundCircleWrapper = exports.AroundCircleItem = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
require("./index.less");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var LoopParamContext = /*#__PURE__*/_react.default.createContext({});
var AroundCircleWrapper = function AroundCircleWrapper(props) {
  var _props$interval = props.interval,
    interval = _props$interval === void 0 ? 3000 : _props$interval,
    blockW = props.blockW,
    blockH = props.blockH,
    dataLength = props.dataLength,
    _props$openLoop = props.openLoop,
    openLoop = _props$openLoop === void 0 ? true : _props$openLoop,
    position = props.position;
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    animateNum = _useState2[0],
    setAnimateNum = _useState2[1];
  var timer = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    openLoop && startLoop(); // 开启数据块轮播
    return function () {
      clearInterval(timer.current);
      setAnimateNum(0);
    };
  }, []);
  function startLoop() {
    timer.current = setInterval(function () {
      setAnimateNum(animateNum++);
    }, interval);
  }
  var contextValue = (0, _react.useMemo)(function () {
    return {
      animateNum: animateNum,
      blockW: blockW,
      blockH: blockH,
      dataLength: dataLength
    };
  }, [animateNum]);
  return /*#__PURE__*/_react.default.createElement(LoopParamContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "alm-box-dimensionLayer",
    style: position.show ? {
      position: 'relative',
      width: "".concat(position.wrapperWidth, "px"),
      height: "".concat(position.wrapperHeight, "px")
    } : {}
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "alm-box-dimensionWrapper"
  }, props.children)));
};
exports.AroundCircleWrapper = AroundCircleWrapper;
var AroundCircleItem = function AroundCircleItem(props) {
  var num = props.num;
  var _useContext = (0, _react.useContext)(LoopParamContext),
    animateNum = _useContext.animateNum,
    blockW = _useContext.blockW,
    blockH = _useContext.blockH,
    dataLength = _useContext.dataLength;
  // 判断不在屏幕显示的其他的item
  function isDimensionOther(animateNum, index, dataLength) {
    if ((animateNum + index) % dataLength !== 0 && (animateNum + index) % dataLength !== 1 && (animateNum + index) % dataLength !== 2 && (animateNum + index) % dataLength !== 3 && (animateNum + index) % dataLength !== 4 && (animateNum + index) % dataLength !== dataLength - 1 && (animateNum + index) % dataLength !== dataLength - 2 && (animateNum + index) % dataLength !== dataLength - 3) return true;else return false;
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('alm-box-dimensionItem', {
      'alm-box-dimensionItem0': (animateNum + num) % dataLength === 0
    }, {
      'alm-box-dimensionItem1': (animateNum + num) % dataLength === 1
    }, {
      'alm-box-dimensionItem2': (animateNum + num) % dataLength === 2
    }, {
      'alm-box-dimensionItem3': (animateNum + num) % dataLength === 3
    }, {
      'alm-box-dimensionItem4': (animateNum + num) % dataLength === 4
    }, {
      'alm-box-dimensionItemL1': (animateNum + num) % dataLength === dataLength - 1
    }, {
      'alm-box-dimensionItemL2': (animateNum + num) % dataLength === dataLength - 2
    }, {
      'alm-box-dimensionItemL3': (animateNum + num) % dataLength === dataLength - 3
    }, {
      'alm-box-dimensionItemOther': isDimensionOther(animateNum, num, dataLength)
    }),
    style: {
      width: "".concat(blockW, "px"),
      height: "".concat(blockH, "px"),
      left: "calc(50% - ".concat(blockW / 2, "px)")
    }
  }, props.children);
};
exports.AroundCircleItem = AroundCircleItem;