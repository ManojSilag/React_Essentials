webpackHotUpdate("static/development/pages/ImageChange.js",{

/***/ "./src/ImageHover.js":
/*!***************************!*\
  !*** ./src/ImageHover.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/manoj/Desktop/React/React_Essentials/React_Hooks/src/ImageHover.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageHover = function ImageHover(prop) {
  var imgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx("img", {
    onMouseOver: function onMouseOver() {
      imgRef.current.src = prop.secondaryImg, console.log(imgRef);
    },
    onMouseOut: function onMouseOut() {
      imgRef.current.src = prop.primaryImg;
    },
    src: prop.primaryImg,
    alt: prop.alt,
    width: "400",
    ref: imgRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageHover);

/***/ })

})
//# sourceMappingURL=ImageChange.js.16df765cd7b897df2715.hot-update.js.map