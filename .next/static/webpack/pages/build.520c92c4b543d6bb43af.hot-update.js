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
      image = _React$useState2[0],
      setimage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      edit = _React$useState4[0],
      setEdit = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("Cayce Pollard"),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      name = _React$useState6[0],
      setUserName = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("Neural Interface Designer"),
      _React$useState8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState7, 2),
      profile = _React$useState8[0],
      setProfile = _React$useState8[1];

  var editField = function editField(type) {
    setEdit(type);
  };

  return __jsx("div", {
    className: "jsx-151901740" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-151901740" + " " + "sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "Sidebar", __jsx("br", {
    className: "jsx-151901740",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), edit === "name" && __jsx("input", {
    value: username,
    onChange: function onChange(e) {
      return setUserName(e.target.value);
    },
    className: "jsx-151901740",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }), edit === "image" && __jsx("input", {
    value: username,
    onChange: function onChange(e) {
      return setUserName(e.target.value);
    },
    className: "jsx-151901740",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }), edit === "profile" && __jsx("input", {
    value: profile,
    onChange: function onChange(e) {
      return setUserName(e.target.value);
    },
    className: "jsx-151901740",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-151901740" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-151901740" + " " + "field userimage",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, image ? __jsx("img", {
    src: image,
    className: "jsx-151901740",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }) : __jsx("div", {
    onClick: function onClick() {
      return editField('image');
    },
    className: "jsx-151901740" + " " + "field placeholder image ".concat(edit === 'image' ? 'active' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  })), __jsx("div", {
    onClick: function onClick() {
      return editField('name');
    },
    className: "jsx-151901740" + " " + "field name ".concat(edit === 'name' ? 'active' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "jsx-151901740",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, name)), __jsx("div", {
    onClick: function onClick() {
      return editField('profile');
    },
    className: "jsx-151901740" + " " + "field profile ".concat(edit === 'profile' ? 'active' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx("h4", {
    className: "jsx-151901740",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, profile))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "151901740",
    __self: _this
  }, ".sidebar.jsx-151901740{width:200px;position:fixed;top:0;left:0;height:100vh;overflow:auto;background:#222;color:#fff;}.container.jsx-151901740{width:80%;max-width:720px;margin:0 auto;}.header.jsx-151901740{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.field.jsx-151901740:hover{border:1px solid lightblue;}.field.active.jsx-151901740{border:2px solid navy;border-radius:3px;}.field.jsx-151901740{padding:10px 20px;margin-top:20px;text-align:center;}.placeholder.jsx-151901740{width:50px;height:50px;border-radius:50%;background:#aaa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdFxcY2FyZFxccGFnZXNcXGJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDd0IsQUFHNkIsQUFVRixBQU1HLEFBTWMsQUFHTCxBQUlKLEFBTVAsVUF4QkssQ0F5QkosQ0FuQ0csTUE2QkMsSUFKRSxDQVdBLEdBekJKLENBVlIsQUFxQlIsTUFwQlMsQ0E0QlcsTUEzQkwsQUFTZixBQWNBLENBV2tCLFdBTmxCLENBM0JnQixJQWtDaEIsVUFqQ2tCLE9BV00sU0FWWCxXQUNiLDBEQVVxQiw2RkFDckIiLCJmaWxlIjoiRTpcXHJlYWN0XFxjYXJkXFxwYWdlc1xcYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgQnVpbGQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRpbWFnZV0gPSBSZWFjdC51c2VTdGF0ZSgpXHJcbiAgY29uc3QgW2VkaXQsIHNldEVkaXRdID0gUmVhY3QudXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbbmFtZSwgc2V0VXNlck5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJDYXljZSBQb2xsYXJkXCIpXHJcbiAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gUmVhY3QudXNlU3RhdGUoXCJOZXVyYWwgSW50ZXJmYWNlIERlc2lnbmVyXCIpXHJcbiAgY29uc3QgZWRpdEZpZWxkID0gKHR5cGUpID0+IHtcclxuICAgIHNldEVkaXQodHlwZSlcclxuICB9IFxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIFNpZGViYXJcclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIHtlZGl0ID09PSBcIm5hbWVcIiAgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlck5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7ZWRpdCA9PT0gXCJpbWFnZVwiICAmJiAoXHJcbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtlZGl0ID09PSBcInByb2ZpbGVcIiAgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17cHJvZmlsZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIHVzZXJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAge2ltYWdlID8gXHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gLz4gOiBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaWVsZCBwbGFjZWhvbGRlciBpbWFnZSAke2VkaXQgPT09ICdpbWFnZScgPyAnYWN0aXZlJyA6ICcnfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRGaWVsZCgnaW1hZ2UnKX0gLz59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaWVsZCBuYW1lICR7ZWRpdCA9PT0gJ25hbWUnID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBlZGl0RmllbGQoJ25hbWUnKX0gPlxyXG4gICAgICAgICAgICAgICAgPGgyPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpZWxkIHByb2ZpbGUgJHtlZGl0ID09PSAncHJvZmlsZScgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGVkaXRGaWVsZCgncHJvZmlsZScpfT5cclxuICAgICAgICAgICAgICAgIDxoND57cHJvZmlsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgey8qIDxpbnB1dCB2YWx1ZT17dXNlcnByb2ZpbGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvZmlsZShlLnRhcmdldC52YWx1ZSl9IC8+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmZpZWxkOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBuYXZ5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZmllbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1aWxkOyJdfQ== */\n/*@ sourceURL=E:\\\\react\\\\card\\\\pages\\\\build.js */"));
};

_s(Build, "5+5rmAnlmOVgUpaIqARddFRCtvI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVpbGQuanMiXSwibmFtZXMiOlsiQnVpbGQiLCJSZWFjdCIsInVzZVN0YXRlIiwiaW1hZ2UiLCJzZXRpbWFnZSIsImVkaXQiLCJzZXRFZGl0IiwibmFtZSIsInNldFVzZXJOYW1lIiwicHJvZmlsZSIsInNldFByb2ZpbGUiLCJlZGl0RmllbGQiLCJ0eXBlIiwidXNlcm5hbWUiLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSx3QkFDUUMsNENBQUssQ0FBQ0MsUUFBTixFQURSO0FBQUE7QUFBQSxNQUNYQyxLQURXO0FBQUEsTUFDSkMsUUFESTs7QUFBQSx5QkFFTUgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FGTjtBQUFBO0FBQUEsTUFFWEcsSUFGVztBQUFBLE1BRUxDLE9BRks7O0FBQUEseUJBR1VMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxlQUFmLENBSFY7QUFBQTtBQUFBLE1BR1hLLElBSFc7QUFBQSxNQUdMQyxXQUhLOztBQUFBLHlCQUlZUCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsMkJBQWYsQ0FKWjtBQUFBO0FBQUEsTUFJWE8sT0FKVztBQUFBLE1BSUZDLFVBSkU7O0FBS2xCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBVTtBQUMxQk4sV0FBTyxDQUFDTSxJQUFELENBQVA7QUFDRCxHQUZEOztBQUlFLFNBQ0k7QUFBQSx1Q0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHVDQUFlLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdHUCxJQUFJLEtBQUssTUFBVCxJQUNDO0FBQU8sU0FBSyxFQUFFUSxRQUFkO0FBQXdCLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLGFBQU9OLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQU1HWCxJQUFJLEtBQUssT0FBVCxJQUNDO0FBQU8sU0FBSyxFQUFFUSxRQUFkO0FBQXdCLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLGFBQU9OLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVNHWCxJQUFJLEtBQUssU0FBVCxJQUNDO0FBQU8sU0FBSyxFQUFFSSxPQUFkO0FBQXVCLFlBQVEsRUFBRSxrQkFBQ0ssQ0FBRDtBQUFBLGFBQU9OLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEI7QUFBQSxLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixDQURGLEVBY0k7QUFBQSx1Q0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHVDQUFlLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR2IsS0FBSyxHQUNKO0FBQUssT0FBRyxFQUFFQSxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURJLEdBRUo7QUFFRSxXQUFPLEVBQUU7QUFBQSxhQUFNUSxTQUFTLENBQUMsT0FBRCxDQUFmO0FBQUEsS0FGWDtBQUFBLHlFQUN3Q04sSUFBSSxLQUFLLE9BQVQsR0FBbUIsUUFBbkIsR0FBOEIsRUFEdEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBREYsRUFRRTtBQUFpRSxXQUFPLEVBQUU7QUFBQSxhQUFNTSxTQUFTLENBQUMsTUFBRCxDQUFmO0FBQUEsS0FBMUU7QUFBQSw0REFBOEJOLElBQUksS0FBSyxNQUFULEdBQWtCLFFBQWxCLEdBQTZCLEVBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0UsSUFBTCxDQURGLENBUkYsRUFZRTtBQUF1RSxXQUFPLEVBQUU7QUFBQSxhQUFNSSxTQUFTLENBQUMsU0FBRCxDQUFmO0FBQUEsS0FBaEY7QUFBQSwrREFBaUNOLElBQUksS0FBSyxTQUFULEdBQXFCLFFBQXJCLEdBQWdDLEVBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0ksT0FBTCxDQURGLENBWkYsQ0FkSjtBQUFBO0FBQUE7QUFBQSxvZ0xBREo7QUE4RUgsQ0F2RkQ7O0dBQU1ULEs7O0tBQUFBLEs7QUF5RlNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1aWxkLjUyMGM5MmM0YjU0M2Q2YmI0M2FmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgQnVpbGQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRpbWFnZV0gPSBSZWFjdC51c2VTdGF0ZSgpXHJcbiAgY29uc3QgW2VkaXQsIHNldEVkaXRdID0gUmVhY3QudXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbbmFtZSwgc2V0VXNlck5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJDYXljZSBQb2xsYXJkXCIpXHJcbiAgY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gUmVhY3QudXNlU3RhdGUoXCJOZXVyYWwgSW50ZXJmYWNlIERlc2lnbmVyXCIpXHJcbiAgY29uc3QgZWRpdEZpZWxkID0gKHR5cGUpID0+IHtcclxuICAgIHNldEVkaXQodHlwZSlcclxuICB9IFxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIFNpZGViYXJcclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIHtlZGl0ID09PSBcIm5hbWVcIiAgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17dXNlcm5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlck5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7ZWRpdCA9PT0gXCJpbWFnZVwiICAmJiAoXHJcbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtlZGl0ID09PSBcInByb2ZpbGVcIiAgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17cHJvZmlsZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkIHVzZXJpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAge2ltYWdlID8gXHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gLz4gOiBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmaWVsZCBwbGFjZWhvbGRlciBpbWFnZSAke2VkaXQgPT09ICdpbWFnZScgPyAnYWN0aXZlJyA6ICcnfWB9IFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGVkaXRGaWVsZCgnaW1hZ2UnKX0gLz59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaWVsZCBuYW1lICR7ZWRpdCA9PT0gJ25hbWUnID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBlZGl0RmllbGQoJ25hbWUnKX0gPlxyXG4gICAgICAgICAgICAgICAgPGgyPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZpZWxkIHByb2ZpbGUgJHtlZGl0ID09PSAncHJvZmlsZScgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGVkaXRGaWVsZCgncHJvZmlsZScpfT5cclxuICAgICAgICAgICAgICAgIDxoND57cHJvZmlsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgey8qIDxpbnB1dCB2YWx1ZT17dXNlcnByb2ZpbGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvZmlsZShlLnRhcmdldC52YWx1ZSl9IC8+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmZpZWxkOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBuYXZ5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZmllbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1aWxkOyJdLCJzb3VyY2VSb290IjoiIn0=