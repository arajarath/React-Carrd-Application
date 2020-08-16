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
      setEdit = _ref.setEdit,
      edit = _ref.edit;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(defaultValue),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  return __jsx("div", {
    className: "field ".concat(type, " ").concat(edit === type ? 'active' : ''),
    onClick: function onClick() {
      return setEdit(type);
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


  return __jsx("div", {
    className: "jsx-1834174827" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1834174827" + " " + "sidebar ".concat(!!edit && 'active'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Sidebar", __jsx("br", {
    className: "jsx-1834174827",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-1834174827" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, FieldTypes.map(function (f) {
    return __jsx(Field, {
      type: f.type,
      setEdit: setEdit,
      defaultValue: f.defaultValue,
      id: f.id,
      edit: edit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1834174827",
    __self: _this
  }, ".sidebar.jsx-1834174827{width:200px;position:fixed;top:0;left:0;height:100vh;overflow:auto;background:#222;color:#fff;display:none;}.sidebar.active.jsx-1834174827{display:block;}.container.jsx-1834174827{width:80%;max-width:720px;margin:0 auto;}.header.jsx-1834174827{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.field.jsx-1834174827:hover{border:1px solid lightblue;}.field.active.jsx-1834174827{border:2px solid navy;border-radius:3px;}.field.jsx-1834174827{padding:10px 20px;margin-top:20px;text-align:center;}.placeholder.jsx-1834174827{width:50px;height:50px;border-radius:50%;background:#aaa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdFxcY2FyZFxccGFnZXNcXGJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEd0IsQUFHNkIsQUFXRSxBQUdKLEFBTUcsQUFNYyxBQUdMLEFBSUosQUFNUCxVQXhCSyxDQXlCSixDQXZDRyxFQVdqQixJQXNCa0IsSUFKRSxDQVdBLEdBekJKLENBZFIsQUF5QlIsTUF4QlMsQ0FnQ1csTUEvQkwsQUFhZixBQWNBLENBV2tCLFdBTmxCLENBL0JnQixJQXNDaEIsVUFyQ2tCLE9BZU0sU0FkWCxXQUNFLGFBQ2YsNkNBYXFCLDZGQUNyQiIsImZpbGUiOiJFOlxccmVhY3RcXGNhcmRcXHBhZ2VzXFxidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5cclxuY29uc3QgRmllbGRUeXBlcyA9IFtcclxuICB7XHJcbiAgICBpZDogJ2ltYWdlJyxcclxuICAgIHR5cGU6ICdpbWFnZScsXHJcbiAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ25hbWUnLFxyXG4gICAgdHlwZTogJ3RleHQnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIkNheWNlIFBvbGxhcmRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAncHJvZmlsZScsXHJcbiAgICB0eXBlOiAndGV4dCcsXHJcbiAgICBkZWZhdWx0VmFsdWU6IFwiTmV1cmFsIEludGVyZmFjZSBEZXNpZ25lclwiLFxyXG4gIH1cclxuXVxyXG5cclxuY29uc3QgRmllbGQgPSAoeyB0eXBlLCBpZCwgZGVmYXVsdFZhbHVlLCBzZXRFZGl0LCBlZGl0IH0pID0+IHtcclxuIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdFZhbHVlKSBcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BmaWVsZCAke3R5cGV9ICR7ZWRpdCA9PT0gdHlwZSA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4gc2V0RWRpdCh0eXBlKX0gPlxyXG4gIHt0eXBlID09PSAnaW1hZ2UnID8gKFxyXG4gICAgPD5cclxuICAgIHt2YWx1ZSA/IFxyXG4gICAgICA8aW1nIHNyYz17dmFsdWV9IC8+IDogXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmllbGQgcGxhY2Vob2xkZXJgfSAvPn1cclxuICAgICAgPC8+XHJcbiAgKSA6IHR5cGUgPT09ICd0ZXh0JyAgPyhcclxuICAgICAgPGgxPnt2YWx1ZX08L2gxPlxyXG4gICAgICApIDogbnVsbH1cclxuICA8L2Rpdj5cclxufVxyXG5cclxuY29uc3QgQnVpbGQgPSAoKSA9PiB7XHJcbiAgLy8gY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSBSZWFjdC51c2VTdGF0ZSgpXHJcbiAgY29uc3QgW2VkaXQsIHNldEVkaXRdID0gUmVhY3QudXNlU3RhdGUobnVsbClcclxuICAvLyBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gIC8vIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHNpZGViYXIgJHshIWVkaXQgJiYgJ2FjdGl2ZSd9YH0+XHJcbiAgICAgICAgICAgIFNpZGViYXJcclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIHsvKiB7ZWRpdCA9PT0gXCJwcm9maWxlXCIgICYmIChcclxuICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb2ZpbGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvZmlsZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtlZGl0ID09PSBcImltYWdlXCIgICYmIChcclxuICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2ltYWdlfSBvbkNoYW5nZT17KGUpID0+IHNldEltYWdlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2VkaXQgPT09IFwibmFtZVwiICAmJiAoXHJcbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIHtGaWVsZFR5cGVzLm1hcChmID0+IChcclxuICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPXtmLnR5cGV9IHNldEVkaXQ9e3NldEVkaXR9IGRlZmF1bHRWYWx1ZT17Zi5kZWZhdWx0VmFsdWV9IGlkPXtmLmlkfSBlZGl0PXtlZGl0fSAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2lkZWJhci5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmZpZWxkOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBuYXZ5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZmllbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1aWxkOyJdfQ== */\n/*@ sourceURL=E:\\\\react\\\\card\\\\pages\\\\build.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVpbGQuanMiXSwibmFtZXMiOlsiRmllbGRUeXBlcyIsImlkIiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsIkZpZWxkIiwic2V0RWRpdCIsImVkaXQiLCJSZWFjdCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsIkJ1aWxkIiwibWFwIiwiZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0EsSUFBTUEsVUFBVSxHQUFHLENBQ2pCO0FBQ0VDLElBQUUsRUFBRSxPQUROO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLGNBQVksRUFBRTtBQUhoQixDQURpQixFQU1qQjtBQUNFRixJQUFFLEVBQUUsTUFETjtBQUVFQyxNQUFJLEVBQUUsTUFGUjtBQUdFQyxjQUFZLEVBQUU7QUFIaEIsQ0FOaUIsRUFXakI7QUFDRUYsSUFBRSxFQUFFLFNBRE47QUFFRUMsTUFBSSxFQUFFLE1BRlI7QUFHRUMsY0FBWSxFQUFFO0FBSGhCLENBWGlCLENBQW5COztBQWtCQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUErQztBQUFBOztBQUFBLE1BQTVDRixJQUE0QyxRQUE1Q0EsSUFBNEM7QUFBQSxNQUF0Q0QsRUFBc0MsUUFBdENBLEVBQXNDO0FBQUEsTUFBbENFLFlBQWtDLFFBQWxDQSxZQUFrQztBQUFBLE1BQXBCRSxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsd0JBQ2xDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVMLFlBQWYsQ0FEa0M7QUFBQTtBQUFBLE1BQ3JETSxLQURxRDtBQUFBLE1BQzlDQyxRQUQ4Qzs7QUFFM0QsU0FBTztBQUFLLGFBQVMsa0JBQVdSLElBQVgsY0FBbUJJLElBQUksS0FBS0osSUFBVCxHQUFnQixRQUFoQixHQUEyQixFQUE5QyxDQUFkO0FBQWtFLFdBQU8sRUFBRTtBQUFBLGFBQU1HLE9BQU8sQ0FBQ0gsSUFBRCxDQUFiO0FBQUEsS0FBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNOQSxJQUFJLEtBQUssT0FBVCxHQUNDLG1FQUNDTyxLQUFLLEdBQ0o7QUFBSyxPQUFHLEVBQUVBLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURJLEdBRUo7QUFDRSxhQUFTLHFCQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQURELEdBT0dQLElBQUksS0FBSyxNQUFULEdBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLTyxLQUFMLENBREEsR0FFSSxJQVZELENBQVA7QUFZRCxDQWREOztHQUFNTCxLOztLQUFBQSxLOztBQWdCTixJQUFNTyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCO0FBRGtCLHlCQUVNSiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUZOO0FBQUE7QUFBQSxNQUVYRixJQUZXO0FBQUEsTUFFTEQsT0FGSyx3QkFHbEI7QUFDQTs7O0FBRUUsU0FDSTtBQUFBLHdDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsMERBQTJCLENBQUMsQ0FBQ0MsSUFBRixJQUFVLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQWNJO0FBQUEsd0NBQWUsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dOLFVBQVUsQ0FBQ1ksR0FBWCxDQUFlLFVBQUFDLENBQUM7QUFBQSxXQUNmLE1BQUMsS0FBRDtBQUFPLFVBQUksRUFBRUEsQ0FBQyxDQUFDWCxJQUFmO0FBQXFCLGFBQU8sRUFBRUcsT0FBOUI7QUFBdUMsa0JBQVksRUFBRVEsQ0FBQyxDQUFDVixZQUF2RDtBQUFxRSxRQUFFLEVBQUVVLENBQUMsQ0FBQ1osRUFBM0U7QUFBK0UsVUFBSSxFQUFFSyxJQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGU7QUFBQSxHQUFoQixDQURILENBZEo7QUFBQTtBQUFBO0FBQUEsazNMQURKO0FBc0VILENBNUVEOztJQUFNSyxLOztNQUFBQSxLO0FBOEVTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idWlsZC4wZWVjZDFiY2RmYjJkNjM5NWYwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5jb25zdCBGaWVsZFR5cGVzID0gW1xyXG4gIHtcclxuICAgIGlkOiAnaW1hZ2UnLFxyXG4gICAgdHlwZTogJ2ltYWdlJyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnbmFtZScsXHJcbiAgICB0eXBlOiAndGV4dCcsXHJcbiAgICBkZWZhdWx0VmFsdWU6IFwiQ2F5Y2UgUG9sbGFyZFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdwcm9maWxlJyxcclxuICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJOZXVyYWwgSW50ZXJmYWNlIERlc2lnbmVyXCIsXHJcbiAgfVxyXG5dXHJcblxyXG5jb25zdCBGaWVsZCA9ICh7IHR5cGUsIGlkLCBkZWZhdWx0VmFsdWUsIHNldEVkaXQsIGVkaXQgfSkgPT4ge1xyXG4gY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShkZWZhdWx0VmFsdWUpIFxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YGZpZWxkICR7dHlwZX0gJHtlZGl0ID09PSB0eXBlID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KHR5cGUpfSA+XHJcbiAge3R5cGUgPT09ICdpbWFnZScgPyAoXHJcbiAgICA8PlxyXG4gICAge3ZhbHVlID8gXHJcbiAgICAgIDxpbWcgc3JjPXt2YWx1ZX0gLz4gOiBcclxuICAgICAgPGRpdiBcclxuICAgICAgICBjbGFzc05hbWU9e2BmaWVsZCBwbGFjZWhvbGRlcmB9IC8+fVxyXG4gICAgICA8Lz5cclxuICApIDogdHlwZSA9PT0gJ3RleHQnICA/KFxyXG4gICAgICA8aDE+e3ZhbHVlfTwvaDE+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5jb25zdCBCdWlsZCA9ICgpID0+IHtcclxuICAvLyBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IFJlYWN0LnVzZVN0YXRlKClcclxuICBjb25zdCBbZWRpdCwgc2V0RWRpdF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxyXG4gIC8vIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgLy8gY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj4gICAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZWJhciAkeyEhZWRpdCAmJiAnYWN0aXZlJ31gfT5cclxuICAgICAgICAgICAgU2lkZWJhclxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgey8qIHtlZGl0ID09PSBcInByb2ZpbGVcIiAgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17cHJvZmlsZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQcm9maWxlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2VkaXQgPT09IFwiaW1hZ2VcIiAgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17aW1hZ2V9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW1hZ2UoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7ZWRpdCA9PT0gXCJuYW1lXCIgICYmIChcclxuICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICl9ICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAge0ZpZWxkVHlwZXMubWFwKGYgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIHR5cGU9e2YudHlwZX0gc2V0RWRpdD17c2V0RWRpdH0gZGVmYXVsdFZhbHVlPXtmLmRlZmF1bHRWYWx1ZX0gaWQ9e2YuaWR9IGVkaXQ9e2VkaXR9IC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgLnNpZGViYXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuZmllbGQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRibHVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZmllbGQuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIG5hdnk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2FhYTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnVpbGQ7Il0sInNvdXJjZVJvb3QiOiIifQ==