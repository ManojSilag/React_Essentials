webpackHotUpdate("static/development/pages/ImageChange.js",{

/***/ "./pages/ImageChange.js":
/*!******************************!*\
  !*** ./pages/ImageChange.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_ImageHoverScrollEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/ImageHoverScrollEffect */ "./src/ImageHoverScrollEffect.js");
var _this = undefined,
    _jsxFileName = "/home/manoj/Desktop/React/React_Essentials/React_Hooks/pages/ImageChange.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ImageChange = function ImageChange() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_src_ImageHoverScrollEffect__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/image1.png",
    secondaryImg: "static/image2.png",
    alt: "image_1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), "\xA0 \xA0 \xA0", __jsx(_src_ImageHoverScrollEffect__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "static/image2.png",
    secondaryImg: "/static/image1.png",
    alt: "image_1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChange);

/***/ }),

/***/ "./src/ImageHover.js":
false,

/***/ "./src/ImageHoverScrollEffect.js":
/*!***************************************!*\
  !*** ./src/ImageHoverScrollEffect.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/manoj/Desktop/React/React_Essentials/React_Hooks/src/ImageHoverScrollEffect.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageHoverScrollEffect = function ImageHoverScrollEffect(prop) {
  var imgRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", scrollHandler);
    return function () {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inview = _useState[0],
      setInview = _useState[1];

  var isInview = function isInview() {
    if (imgRef.current) {
      var rect = imgRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
  };

  var scrollHandler = function scrollHandler() {
    setInview(function () {
      return isInview();
    });
  };

  return __jsx("img", {
    src: inview ? prop.secondaryImg : prop.primaryImg,
    alt: prop.alt,
    width: "500",
    ref: imgRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageHoverScrollEffect);

/***/ })

})
//# sourceMappingURL=ImageChange.js.9f2e44ffb89cdcd8c4a8.hot-update.js.map