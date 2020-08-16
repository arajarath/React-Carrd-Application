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
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var FieldTypes = [{
  id: 'image',
  type: 'image',
  defaultValue: ""
}, {
  id: 'name',
  type: 'text',
  defaultValue: "Cayce Pollard"
}, {
  id: 'profile',
  type: 'text',
  defaultValue: "Neural Interface Designer"
}];

var Field = function Field(_ref) {
  _s();

  var type = _ref.type,
      id = _ref.id,
      defaultValue = _ref.defaultValue,
      edit = _ref.edit;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(defaultValue),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return __jsx("div", {
    className: "field ".concat(type, " ").concat(edit === type ? 'active' : ''),
    onClick: function onClick() {
      return editField(type);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 10
    }
  }, type === 'image' ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, value ? __jsx("img", {
    src: value,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }) : __jsx("div", {
    className: "field placeholder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  })) : type === 'text' ? __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, value) : null);
};

_s(Field, "+di++irDcPspjmhJVP9frUKGzpo=");

_c = Field;

var Build = function Build() {
  _s2();

  // const [image, setImage] = React.useState()
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      edit = _React$useState4[0],
      setEdit = _React$useState4[1]; // const [name, setName] = React.useState("")
  // const [profile, setProfile] = React.useState("")


  var editField = function editField(type) {
    setEdit(type);
  };

  return __jsx("div", {
    className: "jsx-151901740" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-151901740" + " " + "sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Sidebar", __jsx("br", {
    className: "jsx-151901740",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-151901740" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, FieldTypes.map(function (f) {
    return __jsx(Field, {
      type: f.type,
      defaultValue: f.defaultValue,
      id: f.id,
      edit: edit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "151901740",
    __self: _this
  }, ".sidebar.jsx-151901740{width:200px;position:fixed;top:0;left:0;height:100vh;overflow:auto;background:#222;color:#fff;}.container.jsx-151901740{width:80%;max-width:720px;margin:0 auto;}.header.jsx-151901740{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.field.jsx-151901740:hover{border:1px solid lightblue;}.field.active.jsx-151901740{border:2px solid navy;border-radius:3px;}.field.jsx-151901740{padding:10px 20px;margin-top:20px;text-align:center;}.placeholder.jsx-151901740{width:50px;height:50px;border-radius:50%;background:#aaa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdFxcY2FyZFxccGFnZXNcXGJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFd0IsQUFHNkIsQUFVRixBQU1HLEFBTWMsQUFHTCxBQUlKLEFBTVAsVUF4QkssQ0F5QkosQ0FuQ0csTUE2QkMsSUFKRSxDQVdBLEdBekJKLENBVlIsQUFxQlIsTUFwQlMsQ0E0QlcsTUEzQkwsQUFTZixBQWNBLENBV2tCLFdBTmxCLENBM0JnQixJQWtDaEIsVUFqQ2tCLE9BV00sU0FWWCxXQUNiLDBEQVVxQiw2RkFDckIiLCJmaWxlIjoiRTpcXHJlYWN0XFxjYXJkXFxwYWdlc1xcYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IEZpZWxkVHlwZXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdpbWFnZScsXHJcbiAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICduYW1lJyxcclxuICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJDYXljZSBQb2xsYXJkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3Byb2ZpbGUnLFxyXG4gICAgdHlwZTogJ3RleHQnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIk5ldXJhbCBJbnRlcmZhY2UgRGVzaWduZXJcIixcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IEZpZWxkID0gKHsgdHlwZSwgaWQsIGRlZmF1bHRWYWx1ZSwgZWRpdCB9KSA9PiB7XHJcbiBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRWYWx1ZSkgXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZmllbGQgJHt0eXBlfSAke2VkaXQgPT09IHR5cGUgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGVkaXRGaWVsZCh0eXBlKX0gPlxyXG4gIHt0eXBlID09PSAnaW1hZ2UnID8gKFxyXG4gICAgPD5cclxuICAgIHt2YWx1ZSA/IFxyXG4gICAgICA8aW1nIHNyYz17dmFsdWV9IC8+IDogXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmllbGQgcGxhY2Vob2xkZXJgfSAvPn1cclxuICAgICAgPC8+XHJcbiAgKSA6IHR5cGUgPT09ICd0ZXh0JyAgPyhcclxuICAgICAgPGgxPnt2YWx1ZX08L2gxPlxyXG4gICAgICApIDogbnVsbH1cclxuICA8L2Rpdj5cclxufVxyXG5cclxuY29uc3QgQnVpbGQgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZSgpXHJcbiAgY29uc3QgW2VkaXQsIHNldEVkaXRdID0gUmVhY3QudXNlU3RhdGUobnVsbClcclxuICAvLyBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gIC8vIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgZWRpdEZpZWxkID0gKHR5cGUpID0+IHtcclxuICAgIHNldEVkaXQodHlwZSlcclxuICB9IFxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XHJcbiAgICAgICAgICAgIFNpZGViYXJcclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIHsvKiB7ZWRpdCA9PT0gXCJwcm9maWxlXCIgICYmIChcclxuICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb2ZpbGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvZmlsZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtlZGl0ID09PSBcImltYWdlXCIgICYmIChcclxuICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2ltYWdlfSBvbkNoYW5nZT17KGUpID0+IHNldEltYWdlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2VkaXQgPT09IFwibmFtZVwiICAmJiAoXHJcbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIHtGaWVsZFR5cGVzLm1hcChmID0+IChcclxuICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPXtmLnR5cGV9IGRlZmF1bHRWYWx1ZT17Zi5kZWZhdWx0VmFsdWV9IGlkPXtmLmlkfSBlZGl0PXtlZGl0fSAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmZpZWxkOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBuYXZ5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZmllbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1aWxkOyJdfQ== */\n/*@ sourceURL=E:\\\\react\\\\card\\\\pages\\\\build.js */"));
};

_s2(Build, "0SsLhLC9jCSWl+yHlr8hqc+NQ1I=");

_c2 = Build;
/* harmony default export */ __webpack_exports__["default"] = (Build);

var _c, _c2;

$RefreshReg$(_c, "Field");
$RefreshReg$(_c2, "Build");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVpbGQuanMiXSwibmFtZXMiOlsiRmllbGRUeXBlcyIsImlkIiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsIkZpZWxkIiwiZWRpdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZWRpdEZpZWxkIiwiQnVpbGQiLCJzZXRFZGl0IiwibWFwIiwiZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0EsSUFBTUEsVUFBVSxHQUFHLENBQ2pCO0FBQ0VDLElBQUUsRUFBRSxPQUROO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLGNBQVksRUFBRTtBQUhoQixDQURpQixFQU1qQjtBQUNFRixJQUFFLEVBQUUsTUFETjtBQUVFQyxNQUFJLEVBQUUsTUFGUjtBQUdFQyxjQUFZLEVBQUU7QUFIaEIsQ0FOaUIsRUFXakI7QUFDRUYsSUFBRSxFQUFFLFNBRE47QUFFRUMsTUFBSSxFQUFFLE1BRlI7QUFHRUMsY0FBWSxFQUFFO0FBSGhCLENBWGlCLENBQW5COztBQWtCQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFzQztBQUFBOztBQUFBLE1BQW5DRixJQUFtQyxRQUFuQ0EsSUFBbUM7QUFBQSxNQUE3QkQsRUFBNkIsUUFBN0JBLEVBQTZCO0FBQUEsTUFBekJFLFlBQXlCLFFBQXpCQSxZQUF5QjtBQUFBLE1BQVhFLElBQVcsUUFBWEEsSUFBVzs7QUFBQSx3QkFDekJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZUosWUFBZixDQUR5QjtBQUFBO0FBQUEsTUFDNUNLLEtBRDRDO0FBQUEsTUFDckNDLFFBRHFDOztBQUVsRCxTQUFPO0FBQUssYUFBUyxrQkFBV1AsSUFBWCxjQUFtQkcsSUFBSSxLQUFLSCxJQUFULEdBQWdCLFFBQWhCLEdBQTJCLEVBQTlDLENBQWQ7QUFBa0UsV0FBTyxFQUFFO0FBQUEsYUFBTVEsU0FBUyxDQUFDUixJQUFELENBQWY7QUFBQSxLQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ05BLElBQUksS0FBSyxPQUFULEdBQ0MsbUVBQ0NNLEtBQUssR0FDSjtBQUFLLE9BQUcsRUFBRUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREksR0FFSjtBQUNFLGFBQVMscUJBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREQsR0FPR04sSUFBSSxLQUFLLE1BQVQsR0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtNLEtBQUwsQ0FEQSxHQUVJLElBVkQsQ0FBUDtBQVlELENBZEQ7O0dBQU1KLEs7O0tBQUFBLEs7O0FBZ0JOLElBQU1PLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEI7QUFEa0IseUJBRU1MLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBRk47QUFBQTtBQUFBLE1BRVhGLElBRlc7QUFBQSxNQUVMTyxPQUZLLHdCQUdsQjtBQUNBOzs7QUFDQSxNQUFNRixTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDUixJQUFELEVBQVU7QUFDMUJVLFdBQU8sQ0FBQ1YsSUFBRCxDQUFQO0FBQ0QsR0FGRDs7QUFJRSxTQUNJO0FBQUEsdUNBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSx1Q0FBZSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQWNJO0FBQUEsdUNBQWUsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLFVBQVUsQ0FBQ2EsR0FBWCxDQUFlLFVBQUFDLENBQUM7QUFBQSxXQUNmLE1BQUMsS0FBRDtBQUFPLFVBQUksRUFBRUEsQ0FBQyxDQUFDWixJQUFmO0FBQXFCLGtCQUFZLEVBQUVZLENBQUMsQ0FBQ1gsWUFBckM7QUFBbUQsUUFBRSxFQUFFVyxDQUFDLENBQUNiLEVBQXpEO0FBQTZELFVBQUksRUFBRUksSUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURlO0FBQUEsR0FBaEIsQ0FESCxDQWRKO0FBQUE7QUFBQTtBQUFBLDRvTEFESjtBQWtFSCxDQTNFRDs7SUFBTU0sSzs7TUFBQUEsSztBQTZFU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnVpbGQuZDM2ZGFlNzAzYmQwMWU1YWE2MDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5cclxuY29uc3QgRmllbGRUeXBlcyA9IFtcclxuICB7XHJcbiAgICBpZDogJ2ltYWdlJyxcclxuICAgIHR5cGU6ICdpbWFnZScsXHJcbiAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ25hbWUnLFxyXG4gICAgdHlwZTogJ3RleHQnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIkNheWNlIFBvbGxhcmRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAncHJvZmlsZScsXHJcbiAgICB0eXBlOiAndGV4dCcsXHJcbiAgICBkZWZhdWx0VmFsdWU6IFwiTmV1cmFsIEludGVyZmFjZSBEZXNpZ25lclwiLFxyXG4gIH1cclxuXVxyXG5cclxuY29uc3QgRmllbGQgPSAoeyB0eXBlLCBpZCwgZGVmYXVsdFZhbHVlLCBlZGl0IH0pID0+IHtcclxuIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdFZhbHVlKSBcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BmaWVsZCAke3R5cGV9ICR7ZWRpdCA9PT0gdHlwZSA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4gZWRpdEZpZWxkKHR5cGUpfSA+XHJcbiAge3R5cGUgPT09ICdpbWFnZScgPyAoXHJcbiAgICA8PlxyXG4gICAge3ZhbHVlID8gXHJcbiAgICAgIDxpbWcgc3JjPXt2YWx1ZX0gLz4gOiBcclxuICAgICAgPGRpdiBcclxuICAgICAgICBjbGFzc05hbWU9e2BmaWVsZCBwbGFjZWhvbGRlcmB9IC8+fVxyXG4gICAgICA8Lz5cclxuICApIDogdHlwZSA9PT0gJ3RleHQnICA/KFxyXG4gICAgICA8aDE+e3ZhbHVlfTwvaDE+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5jb25zdCBCdWlsZCA9ICgpID0+IHtcclxuICAvLyBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IFJlYWN0LnVzZVN0YXRlKClcclxuICBjb25zdCBbZWRpdCwgc2V0RWRpdF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxyXG4gIC8vIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgLy8gY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBlZGl0RmllbGQgPSAodHlwZSkgPT4ge1xyXG4gICAgc2V0RWRpdCh0eXBlKVxyXG4gIH0gXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgU2lkZWJhclxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgey8qIHtlZGl0ID09PSBcInByb2ZpbGVcIiAgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17cHJvZmlsZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9maWxlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2VkaXQgPT09IFwiaW1hZ2VcIiAgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17aW1hZ2V9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW1hZ2UoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7ZWRpdCA9PT0gXCJuYW1lXCIgICYmIChcclxuICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAge0ZpZWxkVHlwZXMubWFwKGYgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9e2YudHlwZX0gZGVmYXVsdFZhbHVlPXtmLmRlZmF1bHRWYWx1ZX0gaWQ9e2YuaWR9IGVkaXQ9e2VkaXR9IC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgLnNpZGViYXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuZmllbGQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZmllbGQuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIG5hdnk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2FhYTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVpbGQ7Il0sInNvdXJjZVJvb3QiOiIifQ==