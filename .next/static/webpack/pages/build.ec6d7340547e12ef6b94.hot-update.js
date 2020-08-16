webpackHotUpdate_N_E("pages/build",{

/***/ "./pages/build.js":
/*!************************!*\
  !*** ./pages/build.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _this = undefined,
    _jsxFileName = "E:\\react\\card\\pages\\build.js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


var Build = function Build() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      userImage = _React$useState2[0],
      setUserImage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      edit = _React$useState4[0],
      setEdit = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("Cayce Pollard"),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      username = _React$useState6[0],
      setUserName = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("Neural Interface Designer"),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      userprofile = _React$useState8[0],
      setProfile = _React$useState8[1];

  var editField = function editField(type) {
    setEdit(type);
  };

  return __jsx("div", {
    className: "jsx-2663865254" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2663865254" + " " + "sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Sidebar"), __jsx("div", {
    className: "jsx-2663865254" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2663865254" + " " + "field userimage",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, userImage ? __jsx("img", {
    src: userImage,
    className: "jsx-2663865254",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 19
    }
  }) : __jsx("div", {
    onClick: function onClick() {
      return editField('image');
    },
    className: "jsx-2663865254" + " " + "field placeholder image ".concat(edit === 'image' ? 'active' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 19
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return editField('name');
    },
    className: "jsx-2663865254" + " " + "field name ".concat(edit === 'name' ? 'active' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "jsx-2663865254",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, username)), __jsx("div", {
    onClick: function onClick() {
      return editField('profile');
    },
    className: "jsx-2663865254" + " " + "field profile ".concat(edit === 'profile' ? 'active' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx("h4", {
    className: "jsx-2663865254",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, userprofile))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2663865254",
    __self: _this
  }, ".sidebar.jsx-2663865254{width:300px;position:fixed;top:0;left:0;height:100vh;overflow:auto;}.container.jsx-2663865254{width:80%;max-width:720px;margin:0 auto;}.header.jsx-2663865254{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.field.jsx-2663865254:hover{border:1px solid lightblue;}.field.active.jsx-2663865254{border:2px solid navy;border-radius:3px;}.field.jsx-2663865254{padding:10px 20px;margin-top:20px;text-align:center;}.placeholder.jsx-2663865254{width:50px;height:50px;border-radius:50%;background:#aaa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdFxcY2FyZFxccGFnZXNcXGJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDd0IsQUFHNkIsQUFRRixBQU1HLEFBTWMsQUFHTCxBQUlKLEFBTVAsVUF4QkssQ0F5QkosQ0FqQ0csTUEyQkMsSUFKRSxDQVdBLEdBekJKLENBUlIsQUFtQlIsTUFsQlMsQ0EwQlcsTUF6QkwsQUFPZixBQWNBLENBV2tCLFdBTmxCLENBeEJELElBK0JDLFVBL0JBLE9BU3dCLDhFQUNILDZGQUNyQiIsImZpbGUiOiJFOlxccmVhY3RcXGNhcmRcXHBhZ2VzXFxidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBCdWlsZCA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlckltYWdlLCBzZXRVc2VySW1hZ2VdID0gUmVhY3QudXNlU3RhdGUoKVxyXG4gIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VyTmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIkNheWNlIFBvbGxhcmRcIilcclxuICBjb25zdCBbdXNlcnByb2ZpbGUsIHNldFByb2ZpbGVdID0gUmVhY3QudXNlU3RhdGUoXCJOZXVyYWwgSW50ZXJmYWNlIERlc2lnbmVyXCIpXHJcbiAgY29uc3QgZWRpdEZpZWxkID0gKHR5cGUpID0+IHtcclxuICAgIHNldEVkaXQodHlwZSlcclxuICB9IFxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIFNpZGViYXJcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgdXNlcmltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICB7dXNlckltYWdlID8gXHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VySW1hZ2V9IC8+IDogXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmllbGQgcGxhY2Vob2xkZXIgaW1hZ2UgJHtlZGl0ID09PSAnaW1hZ2UnID8gJ2FjdGl2ZScgOiAnJ31gfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlZGl0RmllbGQoJ2ltYWdlJyl9IC8+fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmllbGQgbmFtZSAke2VkaXQgPT09ICduYW1lJyA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4gZWRpdEZpZWxkKCduYW1lJyl9ID5cclxuICAgICAgICAgICAgICAgIDxoMj57dXNlcm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJOYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaWVsZCBwcm9maWxlICR7ZWRpdCA9PT0gJ3Byb2ZpbGUnID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBlZGl0RmllbGQoJ3Byb2ZpbGUnKX0+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e3VzZXJwcm9maWxlfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICB7LyogPGlucHV0IHZhbHVlPXt1c2VycHJvZmlsZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9maWxlKGUudGFyZ2V0LnZhbHVlKX0gLz4gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgLnNpZGViYXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0b1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5maWVsZDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5maWVsZC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgbmF2eTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAucGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYWFhO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWlsZDsiXX0= */\n/*@ sourceURL=E:\\\\react\\\\card\\\\pages\\\\build.js */"));
};

_s(Build, "0pGT2b1Usa9bClCloJyRnw9RXwA=");

_c = Build;
/* harmony default export */ __webpack_exports__["default"] = (Build);

var _c;

$RefreshReg$(_c, "Build");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVpbGQuanMiXSwibmFtZXMiOlsiQnVpbGQiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlckltYWdlIiwic2V0VXNlckltYWdlIiwiZWRpdCIsInNldEVkaXQiLCJ1c2VybmFtZSIsInNldFVzZXJOYW1lIiwidXNlcnByb2ZpbGUiLCJzZXRQcm9maWxlIiwiZWRpdEZpZWxkIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLHdCQUNnQkMsNENBQUssQ0FBQ0MsUUFBTixFQURoQjtBQUFBO0FBQUEsTUFDWEMsU0FEVztBQUFBLE1BQ0FDLFlBREE7O0FBQUEseUJBRU1ILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBRk47QUFBQTtBQUFBLE1BRVhHLElBRlc7QUFBQSxNQUVMQyxPQUZLOztBQUFBLHlCQUdjTCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsZUFBZixDQUhkO0FBQUE7QUFBQSxNQUdYSyxRQUhXO0FBQUEsTUFHREMsV0FIQzs7QUFBQSx5QkFJZ0JQLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSwyQkFBZixDQUpoQjtBQUFBO0FBQUEsTUFJWE8sV0FKVztBQUFBLE1BSUVDLFVBSkY7O0FBS2xCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBVTtBQUMxQk4sV0FBTyxDQUFDTSxJQUFELENBQVA7QUFDRCxHQUZEOztBQUlFLFNBQ0k7QUFBQSx3Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBSUk7QUFBQSx3Q0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1QsU0FBUyxHQUNSO0FBQUssT0FBRyxFQUFFQSxTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURRLEdBRVI7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFNUSxTQUFTLENBQUMsT0FBRCxDQUFmO0FBQUEsS0FGWDtBQUFBLDBFQUN3Q04sSUFBSSxLQUFLLE9BQVQsR0FBbUIsUUFBbkIsR0FBOEIsRUFEdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBREYsRUFRRTtBQUFpRSxXQUFPLEVBQUU7QUFBQSxhQUFNTSxTQUFTLENBQUMsTUFBRCxDQUFmO0FBQUEsS0FBMUU7QUFBQSw2REFBOEJOLElBQUksS0FBSyxNQUFULEdBQWtCLFFBQWxCLEdBQTZCLEVBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0UsUUFBTCxDQURGLENBUkYsRUFZRTtBQUF1RSxXQUFPLEVBQUU7QUFBQSxhQUFNSSxTQUFTLENBQUMsU0FBRCxDQUFmO0FBQUEsS0FBaEY7QUFBQSxnRUFBaUNOLElBQUksS0FBSyxTQUFULEdBQXFCLFFBQXJCLEdBQWdDLEVBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0ksV0FBTCxDQURGLENBWkYsQ0FKSjtBQUFBO0FBQUE7QUFBQSxvNkpBREo7QUFrRUgsQ0EzRUQ7O0dBQU1ULEs7O0tBQUFBLEs7QUE2RVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1aWxkLmVjNmQ3MzQwNTQ3ZTEyZWY2Yjk0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgQnVpbGQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJJbWFnZSwgc2V0VXNlckltYWdlXSA9IFJlYWN0LnVzZVN0YXRlKClcclxuICBjb25zdCBbZWRpdCwgc2V0RWRpdF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlck5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJDYXljZSBQb2xsYXJkXCIpXHJcbiAgY29uc3QgW3VzZXJwcm9maWxlLCBzZXRQcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlKFwiTmV1cmFsIEludGVyZmFjZSBEZXNpZ25lclwiKVxyXG4gIGNvbnN0IGVkaXRGaWVsZCA9ICh0eXBlKSA9PiB7XHJcbiAgICBzZXRFZGl0KHR5cGUpXHJcbiAgfSBcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj4gICAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxyXG4gICAgICAgICAgICBTaWRlYmFyXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIHVzZXJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAge3VzZXJJbWFnZSA/IFxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlckltYWdlfSAvPiA6IFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZpZWxkIHBsYWNlaG9sZGVyIGltYWdlICR7ZWRpdCA9PT0gJ2ltYWdlJyA/ICdhY3RpdmUnIDogJyd9YH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWRpdEZpZWxkKCdpbWFnZScpfSAvPn1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpZWxkIG5hbWUgJHtlZGl0ID09PSAnbmFtZScgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGVkaXRGaWVsZCgnbmFtZScpfSA+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3VzZXJuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICB7LyogPGlucHV0IHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9IC8+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmllbGQgcHJvZmlsZSAke2VkaXQgPT09ICdwcm9maWxlJyA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4gZWRpdEZpZWxkKCdwcm9maWxlJyl9PlxyXG4gICAgICAgICAgICAgICAgPGg0Pnt1c2VycHJvZmlsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgey8qIDxpbnB1dCB2YWx1ZT17dXNlcnByb2ZpbGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvZmlsZShlLnRhcmdldC52YWx1ZSl9IC8+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG9cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuZmllbGQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZmllbGQuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIG5hdnk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2FhYTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVpbGQ7Il0sInNvdXJjZVJvb3QiOiIifQ==