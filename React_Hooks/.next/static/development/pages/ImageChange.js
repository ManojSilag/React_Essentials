(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/ImageChange.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChange&absolutePagePath=%2Fhome%2Fmanoj%2FDesktop%2FReact%2FReact_Essentials%2FReact_Hooks%2Fpages%2FImageChange.js!./":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChange&absolutePagePath=%2Fhome%2Fmanoj%2FDesktop%2FReact%2FReact_Essentials%2FReact_Hooks%2Fpages%2FImageChange.js ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/ImageChange", function() {
      var mod = __webpack_require__(/*! ./pages/ImageChange.js */ "./pages/ImageChange.js")
      if(true) {
        module.hot.accept(/*! ./pages/ImageChange.js */ "./pages/ImageChange.js", function() {
          if(!next.router.components["/ImageChange"]) return
          var updatedPage = __webpack_require__(/*! ./pages/ImageChange.js */ "./pages/ImageChange.js")
          next.router.update("/ImageChange", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

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
  }), __jsx(_src_ImageHoverScrollEffect__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/image1.png",
    secondaryImg: "static/image2.png",
    alt: "image_1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  }), __jsx(_src_ImageHoverScrollEffect__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "static/image2.png",
    secondaryImg: "/static/image1.png",
    alt: "image_1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChange);

/***/ }),

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

/***/ }),

/***/ 3:
/*!***********************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2FImageChange&absolutePagePath=%2Fhome%2Fmanoj%2FDesktop%2FReact%2FReact_Essentials%2FReact_Hooks%2Fpages%2FImageChange.js ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2FImageChange&absolutePagePath=%2Fhome%2Fmanoj%2FDesktop%2FReact%2FReact_Essentials%2FReact_Hooks%2Fpages%2FImageChange.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2FImageChange&absolutePagePath=%2Fhome%2Fmanoj%2FDesktop%2FReact%2FReact_Essentials%2FReact_Hooks%2Fpages%2FImageChange.js!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[3,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=ImageChange.js.map