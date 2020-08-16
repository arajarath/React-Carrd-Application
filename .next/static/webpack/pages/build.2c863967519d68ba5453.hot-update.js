webpackHotUpdate_N_E("pages/build",{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/build.js":
/*!************************!*\
  !*** ./pages/build.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);



var _this = undefined,
    _jsxFileName = "E:\\react\\card\\pages\\build.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


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
      editMode = _ref.editMode,
      edit = _ref.edit;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(defaultValue),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  if (editMode) {
    return edit === id && __jsx("input", {
      value: value,
      onChange: function onChange(e) {
        return setValue(e.target.value);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    });
  }

  return __jsx("div", {
    onClick: function onClick() {
      return setEdit(id);
    },
    className: "jsx-2295813568" + " " + "field ".concat(type, " ").concat(edit === id ? 'active' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 10
    }
  }, type === 'image' ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, value ? __jsx("img", {
    src: value,
    className: "jsx-2295813568",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }) : __jsx("div", {
    className: "jsx-2295813568" + " " + "field placeholder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  })) : type === 'text' ? __jsx("h1", {
    className: "jsx-2295813568",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, value) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2295813568",
    __self: _this
  }, ".field.jsx-2295813568:hover{border:1px solid lightblue;}.field.active.jsx-2295813568{border:2px solid navy;border-radius:3px;}.field.jsx-2295813568{padding:10px 20px;margin-top:20px;text-align:center;}.placeholder.jsx-2295813568{width:50px;height:50px;border-radius:50%;background:#aaa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdFxcY2FyZFxccGFnZXNcXGJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDTyxBQUk0QyxBQUdMLEFBSUosQUFNUCxXQUNDLE9BTkksSUFKRSxDQVdBLElBZHBCLE9BUW9CLE1BSnBCLENBV2tCLFdBTmxCLEtBT0EiLCJmaWxlIjoiRTpcXHJlYWN0XFxjYXJkXFxwYWdlc1xcYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IEZpZWxkVHlwZXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdpbWFnZScsXHJcbiAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICduYW1lJyxcclxuICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJDYXljZSBQb2xsYXJkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3Byb2ZpbGUnLFxyXG4gICAgdHlwZTogJ3RleHQnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIk5ldXJhbCBJbnRlcmZhY2UgRGVzaWduZXJcIixcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IEZpZWxkID0gKHsgdHlwZSwgaWQsIGRlZmF1bHRWYWx1ZSwgc2V0RWRpdCwgZWRpdE1vZGUsIGVkaXQgfSkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdFZhbHVlKSBcclxuXHJcbiAgaWYgKGVkaXRNb2RlKSB7XHJcbiAgICByZXR1cm4gZWRpdCA9PT0gaWQgJiYgKFxyXG4gICAgICA8aW5wdXQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgIClcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BmaWVsZCAke3R5cGV9ICR7ZWRpdCA9PT0gaWQgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHNldEVkaXQoaWQpfSA+XHJcbiAge3R5cGUgPT09ICdpbWFnZScgPyAoXHJcbiAgICA8PlxyXG4gICAge3ZhbHVlID8gXHJcbiAgICAgIDxpbWcgc3JjPXt2YWx1ZX0gLz4gOiBcclxuICAgICAgPGRpdiBcclxuICAgICAgICBjbGFzc05hbWU9e2BmaWVsZCBwbGFjZWhvbGRlcmB9IC8+fVxyXG4gICAgICA8Lz5cclxuICApIDogdHlwZSA9PT0gJ3RleHQnICA/KFxyXG4gICAgICA8aDE+e3ZhbHVlfTwvaDE+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICB7YFxyXG4gICAgICBcclxuICAgICAgLmZpZWxkOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBuYXZ5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZmllbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2FhYTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuY29uc3QgQnVpbGQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgLi4uRmllbGRUeXBlcy5tYXAoZiA9PiAoe1tmLmlkXTogZi5kZWZhdWx0VmFsdWV9KSlcclxuICB9KVxyXG4gIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgLy8gY29uc3QgW25hbWUsIHNldE5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAvLyBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlYmFyICR7ISFlZGl0ICYmICdhY3RpdmUnfWB9PlxyXG4gICAgICAgICAgICBTaWRlYmFyXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7RmllbGRUeXBlcy5tYXAoZiA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RmllbGQgZWRpdE1vZGUgdHlwZT17Zi50eXBlfSBzZXRFZGl0PXtzZXRFZGl0fSBkZWZhdWx0VmFsdWU9e2YuZGVmYXVsdFZhbHVlfSBpZD17Zi5pZH0gZWRpdD17ZWRpdH0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIHtGaWVsZFR5cGVzLm1hcChmID0+IChcclxuICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPXtmLnR5cGV9IHNldEVkaXQ9e3NldEVkaXR9IGRlZmF1bHRWYWx1ZT17Zi5kZWZhdWx0VmFsdWV9IGlkPXtmLmlkfSBlZGl0PXtlZGl0fSAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2lkZWJhci5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1aWxkOyJdfQ== */\n/*@ sourceURL=E:\\\\react\\\\card\\\\pages\\\\build.js */"));
};

_s(Field, "+di++irDcPspjmhJVP9frUKGzpo=");

_c = Field;

var Build = function Build() {
  _s2();

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(_objectSpread({}, FieldTypes.map(function (f) {
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, f.id, f.defaultValue);
  }))),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      page = _React$useState4[0],
      setPage = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      edit = _React$useState6[0],
      setEdit = _React$useState6[1]; // const [name, setName] = React.useState("")
  // const [profile, setProfile] = React.useState("")


  return __jsx("div", {
    className: "jsx-2031351884" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2031351884" + " " + "sidebar ".concat(!!edit && 'active'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, "Sidebar", __jsx("br", {
    className: "jsx-2031351884",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }), FieldTypes.map(function (f) {
    return __jsx(Field, {
      editMode: true,
      type: f.type,
      setEdit: setEdit,
      defaultValue: f.defaultValue,
      id: f.id,
      edit: edit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    });
  })), __jsx("div", {
    className: "jsx-2031351884" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
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
        lineNumber: 89,
        columnNumber: 17
      }
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2031351884",
    __self: _this
  }, ".sidebar.jsx-2031351884{width:200px;position:fixed;top:0;left:0;height:100vh;overflow:auto;background:#222;color:#fff;display:none;}.sidebar.active.jsx-2031351884{display:block;}.container.jsx-2031351884{width:80%;max-width:720px;margin:0 auto;}.header.jsx-2031351884{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdFxcY2FyZFxccGFnZXNcXGJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJGd0IsQUFHNkIsQUFXRSxBQUdKLEFBTUcsVUFMRyxFQWRELEVBV2pCLFlBSWdCLENBZFIsTUFDQyxPQUNNLEFBYWYsYUFaZ0IsY0FDRSxPQWVNLFNBZFgsV0FDRSxhQUNmLDZDQWFxQiw2RkFDckIiLCJmaWxlIjoiRTpcXHJlYWN0XFxjYXJkXFxwYWdlc1xcYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IEZpZWxkVHlwZXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdpbWFnZScsXHJcbiAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICduYW1lJyxcclxuICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJDYXljZSBQb2xsYXJkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3Byb2ZpbGUnLFxyXG4gICAgdHlwZTogJ3RleHQnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIk5ldXJhbCBJbnRlcmZhY2UgRGVzaWduZXJcIixcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IEZpZWxkID0gKHsgdHlwZSwgaWQsIGRlZmF1bHRWYWx1ZSwgc2V0RWRpdCwgZWRpdE1vZGUsIGVkaXQgfSkgPT4ge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdFZhbHVlKSBcclxuXHJcbiAgaWYgKGVkaXRNb2RlKSB7XHJcbiAgICByZXR1cm4gZWRpdCA9PT0gaWQgJiYgKFxyXG4gICAgICA8aW5wdXQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgIClcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BmaWVsZCAke3R5cGV9ICR7ZWRpdCA9PT0gaWQgPyAnYWN0aXZlJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IHNldEVkaXQoaWQpfSA+XHJcbiAge3R5cGUgPT09ICdpbWFnZScgPyAoXHJcbiAgICA8PlxyXG4gICAge3ZhbHVlID8gXHJcbiAgICAgIDxpbWcgc3JjPXt2YWx1ZX0gLz4gOiBcclxuICAgICAgPGRpdiBcclxuICAgICAgICBjbGFzc05hbWU9e2BmaWVsZCBwbGFjZWhvbGRlcmB9IC8+fVxyXG4gICAgICA8Lz5cclxuICApIDogdHlwZSA9PT0gJ3RleHQnICA/KFxyXG4gICAgICA8aDE+e3ZhbHVlfTwvaDE+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICB7YFxyXG4gICAgICBcclxuICAgICAgLmZpZWxkOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBuYXZ5O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuZmllbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgLnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2FhYTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuY29uc3QgQnVpbGQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgLi4uRmllbGRUeXBlcy5tYXAoZiA9PiAoe1tmLmlkXTogZi5kZWZhdWx0VmFsdWV9KSlcclxuICB9KVxyXG4gIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgLy8gY29uc3QgW25hbWUsIHNldE5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAvLyBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlYmFyICR7ISFlZGl0ICYmICdhY3RpdmUnfWB9PlxyXG4gICAgICAgICAgICBTaWRlYmFyXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7RmllbGRUeXBlcy5tYXAoZiA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RmllbGQgZWRpdE1vZGUgdHlwZT17Zi50eXBlfSBzZXRFZGl0PXtzZXRFZGl0fSBkZWZhdWx0VmFsdWU9e2YuZGVmYXVsdFZhbHVlfSBpZD17Zi5pZH0gZWRpdD17ZWRpdH0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIHtGaWVsZFR5cGVzLm1hcChmID0+IChcclxuICAgICAgICAgICAgICAgIDxGaWVsZCB0eXBlPXtmLnR5cGV9IHNldEVkaXQ9e3NldEVkaXR9IGRlZmF1bHRWYWx1ZT17Zi5kZWZhdWx0VmFsdWV9IGlkPXtmLmlkfSBlZGl0PXtlZGl0fSAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2lkZWJhci5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1aWxkOyJdfQ== */\n/*@ sourceURL=E:\\\\react\\\\card\\\\pages\\\\build.js */"));
};

_s2(Build, "5O2uMkln2gjJeR8tM25/BGXvTuM=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9idWlsZC5qcyJdLCJuYW1lcyI6WyJGaWVsZFR5cGVzIiwiaWQiLCJ0eXBlIiwiZGVmYXVsdFZhbHVlIiwiRmllbGQiLCJzZXRFZGl0IiwiZWRpdE1vZGUiLCJlZGl0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJlIiwidGFyZ2V0IiwiQnVpbGQiLCJtYXAiLCJmIiwicGFnZSIsInNldFBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFHQSxJQUFNQSxVQUFVLEdBQUcsQ0FDakI7QUFDRUMsSUFBRSxFQUFFLE9BRE47QUFFRUMsTUFBSSxFQUFFLE9BRlI7QUFHRUMsY0FBWSxFQUFFO0FBSGhCLENBRGlCLEVBTWpCO0FBQ0VGLElBQUUsRUFBRSxNQUROO0FBRUVDLE1BQUksRUFBRSxNQUZSO0FBR0VDLGNBQVksRUFBRTtBQUhoQixDQU5pQixFQVdqQjtBQUNFRixJQUFFLEVBQUUsU0FETjtBQUVFQyxNQUFJLEVBQUUsTUFGUjtBQUdFQyxjQUFZLEVBQUU7QUFIaEIsQ0FYaUIsQ0FBbkI7O0FBa0JBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXlEO0FBQUE7O0FBQUEsTUFBdERGLElBQXNELFFBQXREQSxJQUFzRDtBQUFBLE1BQWhERCxFQUFnRCxRQUFoREEsRUFBZ0Q7QUFBQSxNQUE1Q0UsWUFBNEMsUUFBNUNBLFlBQTRDO0FBQUEsTUFBOUJFLE9BQThCLFFBQTlCQSxPQUE4QjtBQUFBLE1BQXJCQyxRQUFx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RVcsQ0FBQyxDQUFDYixZQUF2RDtBQUFxRSxRQUFFLEVBQUVhLENBQUMsQ0FBQ2YsRUFBM0U7QUFBK0UsVUFBSSxFQUFFTSxJQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGU7QUFBQSxHQUFoQixDQURILENBUko7QUFBQTtBQUFBO0FBQUEsbWlMQURKO0FBOENILENBdEREOztJQUFNTyxLOztNQUFBQSxLO0FBd0RTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9idWlsZC4yYzg2Mzk2NzUxOWQ2OGJhNTQ1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5jb25zdCBGaWVsZFR5cGVzID0gW1xyXG4gIHtcclxuICAgIGlkOiAnaW1hZ2UnLFxyXG4gICAgdHlwZTogJ2ltYWdlJyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnbmFtZScsXHJcbiAgICB0eXBlOiAndGV4dCcsXHJcbiAgICBkZWZhdWx0VmFsdWU6IFwiQ2F5Y2UgUG9sbGFyZFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdwcm9maWxlJyxcclxuICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJOZXVyYWwgSW50ZXJmYWNlIERlc2lnbmVyXCIsXHJcbiAgfVxyXG5dXHJcblxyXG5jb25zdCBGaWVsZCA9ICh7IHR5cGUsIGlkLCBkZWZhdWx0VmFsdWUsIHNldEVkaXQsIGVkaXRNb2RlLCBlZGl0IH0pID0+IHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRWYWx1ZSkgXHJcblxyXG4gIGlmIChlZGl0TW9kZSkge1xyXG4gICAgcmV0dXJuIGVkaXQgPT09IGlkICYmIChcclxuICAgICAgPGlucHV0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZmllbGQgJHt0eXBlfSAke2VkaXQgPT09IGlkID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KGlkKX0gPlxyXG4gIHt0eXBlID09PSAnaW1hZ2UnID8gKFxyXG4gICAgPD5cclxuICAgIHt2YWx1ZSA/IFxyXG4gICAgICA8aW1nIHNyYz17dmFsdWV9IC8+IDogXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmllbGQgcGxhY2Vob2xkZXJgfSAvPn1cclxuICAgICAgPC8+XHJcbiAgKSA6IHR5cGUgPT09ICd0ZXh0JyAgPyhcclxuICAgICAgPGgxPnt2YWx1ZX08L2gxPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgXHJcbiAgICAgIC5maWVsZDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5maWVsZC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgbmF2eTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbn1cclxuXHJcbmNvbnN0IEJ1aWxkID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIC4uLkZpZWxkVHlwZXMubWFwKGYgPT4gKHtbZi5pZF06IGYuZGVmYXVsdFZhbHVlfSkpXHJcbiAgfSlcclxuICBjb25zdCBbZWRpdCwgc2V0RWRpdF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxyXG4gIC8vIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgLy8gY29uc3QgW3Byb2ZpbGUsIHNldFByb2ZpbGVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj4gICAgICAgICAgICBcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2lkZWJhciAkeyEhZWRpdCAmJiAnYWN0aXZlJ31gfT5cclxuICAgICAgICAgICAgU2lkZWJhclxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAge0ZpZWxkVHlwZXMubWFwKGYgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGVkaXRNb2RlIHR5cGU9e2YudHlwZX0gc2V0RWRpdD17c2V0RWRpdH0gZGVmYXVsdFZhbHVlPXtmLmRlZmF1bHRWYWx1ZX0gaWQ9e2YuaWR9IGVkaXQ9e2VkaXR9IC8+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICB7RmllbGRUeXBlcy5tYXAoZiA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT17Zi50eXBlfSBzZXRFZGl0PXtzZXRFZGl0fSBkZWZhdWx0VmFsdWU9e2YuZGVmYXVsdFZhbHVlfSBpZD17Zi5pZH0gZWRpdD17ZWRpdH0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnNpZGViYXIuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWlsZDsiXSwic291cmNlUm9vdCI6IiJ9