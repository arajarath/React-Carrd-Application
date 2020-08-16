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
      lineNumber: 27,
      columnNumber: 7
    }
  }) : __jsx("div", {
    className: "field placeholder image ".concat(edit === 'image' ? 'active' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  })) : type === 'text' ? __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-151901740" + " " + "sidebar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, "Sidebar", __jsx("br", {
    className: "jsx-151901740",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), edit === "profile" && __jsx("input", {
    value: profile,
    onChange: function onChange(e) {
      return setProfile(e.target.value);
    },
    className: "jsx-151901740",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }), edit === "image" && __jsx("input", {
    value: image,
    onChange: function onChange(e) {
      return setImage(e.target.value);
    },
    className: "jsx-151901740",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }), edit === "name" && __jsx("input", {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    className: "jsx-151901740",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "jsx-151901740" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return editField('image');
    },
    className: "jsx-151901740" + " " + "field userimage",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }), __jsx("div", {
    onClick: function onClick() {
      return editField('name');
    },
    className: "jsx-151901740" + " " + "field name ".concat(edit === 'name' ? 'active' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx("h2", {
    className: "jsx-151901740",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, name)), __jsx("div", {
    className: "jsx-151901740",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx("h4", {
    className: "jsx-151901740",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, profile))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "151901740",
    __self: _this
  }, ".sidebar.jsx-151901740{width:200px;position:fixed;top:0;left:0;height:100vh;overflow:auto;background:#222;color:#fff;}.container.jsx-151901740{width:80%;max-width:720px;margin:0 auto;}.header.jsx-151901740{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.field.jsx-151901740:hover{border:1px solid lightblue;}.field.active.jsx-151901740{border:2px solid navy;border-radius:3px;}.field.jsx-151901740{padding:10px 20px;margin-top:20px;text-align:center;}.placeholder.jsx-151901740{width:50px;height:50px;border-radius:50%;background:#aaa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdFxcY2FyZFxccGFnZXNcXGJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFd0IsQUFHNkIsQUFVRixBQU1HLEFBTWMsQUFHTCxBQUlKLEFBTVAsVUF4QkssQ0F5QkosQ0FuQ0csTUE2QkMsSUFKRSxDQVdBLEdBekJKLENBVlIsQUFxQlIsTUFwQlMsQ0E0QlcsTUEzQkwsQUFTZixBQWNBLENBV2tCLFdBTmxCLENBM0JnQixJQWtDaEIsVUFqQ2tCLE9BV00sU0FWWCxXQUNiLDBEQVVxQiw2RkFDckIiLCJmaWxlIjoiRTpcXHJlYWN0XFxjYXJkXFxwYWdlc1xcYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IEZpZWxkVHlwZXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdpbWFnZScsXHJcbiAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICduYW1lJyxcclxuICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJDYXljZSBQb2xsYXJkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3Byb2ZpbGUnLFxyXG4gICAgdHlwZTogJ3RleHQnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIk5ldXJhbCBJbnRlcmZhY2UgRGVzaWduZXJcIixcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IEZpZWxkID0gKHsgdHlwZSwgaWQsIGRlZmF1bHRWYWx1ZSwgZWRpdCB9KSA9PiB7XHJcbiBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRWYWx1ZSkgXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZmllbGQgJHt0eXBlfSAke2VkaXQgPT09IHR5cGUgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IGVkaXRGaWVsZCh0eXBlKX0gPnt0eXBlID09PSAnaW1hZ2UnID8gKFxyXG4gICAgPD5cclxuICAgIHt2YWx1ZSA/IFxyXG4gICAgICA8aW1nIHNyYz17dmFsdWV9IC8+IDogXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmllbGQgcGxhY2Vob2xkZXIgaW1hZ2UgJHtlZGl0ID09PSAnaW1hZ2UnID8gJ2FjdGl2ZScgOiAnJ31gfSAvPn1cclxuICAgICAgPC8+XHJcbiAgKSA6IHR5cGUgPT09ICd0ZXh0JyAgPyhcclxuICAgICAgPGgxPnt2YWx1ZX08L2gxPlxyXG4gICkgOiBudWxsfTwvZGl2PlxyXG59XHJcblxyXG5jb25zdCBCdWlsZCA9ICgpID0+IHtcclxuICAvLyBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IFJlYWN0LnVzZVN0YXRlKClcclxuICBjb25zdCBbZWRpdCwgc2V0RWRpdF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxyXG4gIC8vIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgLy8gY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBlZGl0RmllbGQgPSAodHlwZSkgPT4ge1xyXG4gICAgc2V0RWRpdCh0eXBlKVxyXG4gIH0gXHJcbiAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgU2lkZWJhclxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAge2VkaXQgPT09IFwicHJvZmlsZVwiICAmJiAoXHJcbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwcm9maWxlfSBvbkNoYW5nZT17KGUpID0+IHNldFByb2ZpbGUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7ZWRpdCA9PT0gXCJpbWFnZVwiICAmJiAoXHJcbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtpbWFnZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtlZGl0ID09PSBcIm5hbWVcIiAgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgdXNlcmltYWdlXCIgb25DbGljaz17KCkgPT4gZWRpdEZpZWxkKCdpbWFnZScpfT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgZmllbGQgbmFtZSAke2VkaXQgPT09ICduYW1lJyA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4gZWRpdEZpZWxkKCduYW1lJyl9ID5cclxuICAgICAgICAgICAgICAgIDxoMj57bmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8aDQ+e3Byb2ZpbGV9PC9oND5cclxuICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgdmFsdWU9e3VzZXJwcm9maWxlfSBvbkNoYW5nZT17KGUpID0+IHNldFByb2ZpbGUoZS50YXJnZXQudmFsdWUpfSAvPiAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5maWVsZDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5maWVsZC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgbmF2eTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAucGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYWFhO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWlsZDsiXX0= */\n/*@ sourceURL=E:\\\\react\\\\card\\\\pages\\\\build.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVpbGQuanMiXSwibmFtZXMiOlsiRmllbGRUeXBlcyIsImlkIiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsIkZpZWxkIiwiZWRpdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZWRpdEZpZWxkIiwiQnVpbGQiLCJzZXRFZGl0IiwicHJvZmlsZSIsImUiLCJzZXRQcm9maWxlIiwidGFyZ2V0IiwiaW1hZ2UiLCJzZXRJbWFnZSIsIm5hbWUiLCJzZXROYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFDRUMsSUFBRSxFQUFFLE9BRE47QUFFRUMsTUFBSSxFQUFFLE9BRlI7QUFHRUMsY0FBWSxFQUFFO0FBSGhCLENBRGlCLEVBTWpCO0FBQ0VGLElBQUUsRUFBRSxNQUROO0FBRUVDLE1BQUksRUFBRSxNQUZSO0FBR0VDLGNBQVksRUFBRTtBQUhoQixDQU5pQixFQVdqQjtBQUNFRixJQUFFLEVBQUUsU0FETjtBQUVFQyxNQUFJLEVBQUUsTUFGUjtBQUdFQyxjQUFZLEVBQUU7QUFIaEIsQ0FYaUIsQ0FBbkI7O0FBa0JBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXNDO0FBQUE7O0FBQUEsTUFBbkNGLElBQW1DLFFBQW5DQSxJQUFtQztBQUFBLE1BQTdCRCxFQUE2QixRQUE3QkEsRUFBNkI7QUFBQSxNQUF6QkUsWUFBeUIsUUFBekJBLFlBQXlCO0FBQUEsTUFBWEUsSUFBVyxRQUFYQSxJQUFXOztBQUFBLHdCQUN6QkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlSixZQUFmLENBRHlCO0FBQUE7QUFBQSxNQUM1Q0ssS0FENEM7QUFBQSxNQUNyQ0MsUUFEcUM7O0FBRWxELFNBQU87QUFBSyxhQUFTLGtCQUFXUCxJQUFYLGNBQW1CRyxJQUFJLEtBQUtILElBQVQsR0FBZ0IsUUFBaEIsR0FBMkIsRUFBOUMs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLTixPQUFMLENBREYsQ0FSRixDQWRKO0FBQUE7QUFBQTtBQUFBLG9vTUFESjtBQTBFSCxDQW5GRDs7SUFBTUYsSzs7TUFBQUEsSztBQXFGU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYnVpbGQuM2U4NTBhNmVhOTc3ZTcxZWQ0NGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5cclxuY29uc3QgRmllbGRUeXBlcyA9IFtcclxuICB7XHJcbiAgICBpZDogJ2ltYWdlJyxcclxuICAgIHR5cGU6ICdpbWFnZScsXHJcbiAgICBkZWZhdWx0VmFsdWU6IFwiXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ25hbWUnLFxyXG4gICAgdHlwZTogJ3RleHQnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIkNheWNlIFBvbGxhcmRcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAncHJvZmlsZScsXHJcbiAgICB0eXBlOiAndGV4dCcsXHJcbiAgICBkZWZhdWx0VmFsdWU6IFwiTmV1cmFsIEludGVyZmFjZSBEZXNpZ25lclwiLFxyXG4gIH1cclxuXVxyXG5cclxuY29uc3QgRmllbGQgPSAoeyB0eXBlLCBpZCwgZGVmYXVsdFZhbHVlLCBlZGl0IH0pID0+IHtcclxuIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdFZhbHVlKSBcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BmaWVsZCAke3R5cGV9ICR7ZWRpdCA9PT0gdHlwZSA/ICdhY3RpdmUnIDogJyd9YH0gb25DbGljaz17KCkgPT4gZWRpdEZpZWxkKHR5cGUpfSA+e3R5cGUgPT09ICdpbWFnZScgPyAoXHJcbiAgICA8PlxyXG4gICAge3ZhbHVlID8gXHJcbiAgICAgIDxpbWcgc3JjPXt2YWx1ZX0gLz4gOiBcclxuICAgICAgPGRpdiBcclxuICAgICAgICBjbGFzc05hbWU9e2BmaWVsZCBwbGFjZWhvbGRlciBpbWFnZSAke2VkaXQgPT09ICdpbWFnZScgPyAnYWN0aXZlJyA6ICcnfWB9IC8+fVxyXG4gICAgICA8Lz5cclxuICApIDogdHlwZSA9PT0gJ3RleHQnICA/KFxyXG4gICAgICA8aDE+e3ZhbHVlfTwvaDE+XHJcbiAgKSA6IG51bGx9PC9kaXY+XHJcbn1cclxuXHJcbmNvbnN0IEJ1aWxkID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gUmVhY3QudXNlU3RhdGUoKVxyXG4gIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgLy8gY29uc3QgW25hbWUsIHNldE5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAvLyBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gIGNvbnN0IGVkaXRGaWVsZCA9ICh0eXBlKSA9PiB7XHJcbiAgICBzZXRFZGl0KHR5cGUpXHJcbiAgfSBcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj4gICAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhclwiPlxyXG4gICAgICAgICAgICBTaWRlYmFyXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7ZWRpdCA9PT0gXCJwcm9maWxlXCIgICYmIChcclxuICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e3Byb2ZpbGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvZmlsZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtlZGl0ID09PSBcImltYWdlXCIgICYmIChcclxuICAgICAgICAgICAgICA8aW5wdXQgdmFsdWU9e2ltYWdlfSBvbkNoYW5nZT17KGUpID0+IHNldEltYWdlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2VkaXQgPT09IFwibmFtZVwiICAmJiAoXHJcbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZCB1c2VyaW1hZ2VcIiBvbkNsaWNrPXsoKSA9PiBlZGl0RmllbGQoJ2ltYWdlJyl9PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BmaWVsZCBuYW1lICR7ZWRpdCA9PT0gJ25hbWUnID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBlZGl0RmllbGQoJ25hbWUnKX0gPlxyXG4gICAgICAgICAgICAgICAgPGgyPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgIDxoND57cHJvZmlsZX08L2g0PlxyXG4gICAgICAgICAgICAgICAgey8qIDxpbnB1dCB2YWx1ZT17dXNlcnByb2ZpbGV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJvZmlsZShlLnRhcmdldC52YWx1ZSl9IC8+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmZpZWxkOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBuYXZ5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZmllbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1aWxkOyJdLCJzb3VyY2VSb290IjoiIn0=