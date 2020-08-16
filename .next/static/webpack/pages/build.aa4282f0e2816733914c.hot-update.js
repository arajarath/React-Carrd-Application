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
    onClick: function onClick() {
      return setEdit(id);
    },
    className: "jsx-2295813568" + " " + "field ".concat(type, " ").concat(edit === id ? 'active' : ''),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 10
    }
  }, type === 'image' ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, value ? __jsx("img", {
    src: value,
    className: "jsx-2295813568",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }) : __jsx("div", {
    className: "jsx-2295813568" + " " + "field placeholder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  })) : type === 'text' ? __jsx("h1", {
    className: "jsx-2295813568",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, value) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2295813568",
    __self: _this
  }, ".field.jsx-2295813568:hover{border:1px solid lightblue;}.field.active.jsx-2295813568{border:2px solid navy;border-radius:3px;}.field.jsx-2295813568{padding:10px 20px;margin-top:20px;text-align:center;}.placeholder.jsx-2295813568{width:50px;height:50px;border-radius:50%;background:#aaa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdFxcY2FyZFxccGFnZXNcXGJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DTyxBQUk0QyxBQUdMLEFBSUosQUFNUCxXQUNDLE9BTkksSUFKRSxDQVdBLElBZHBCLE9BUW9CLE1BSnBCLENBV2tCLFdBTmxCLEtBT0EiLCJmaWxlIjoiRTpcXHJlYWN0XFxjYXJkXFxwYWdlc1xcYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IEZpZWxkVHlwZXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdpbWFnZScsXHJcbiAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICduYW1lJyxcclxuICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJDYXljZSBQb2xsYXJkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3Byb2ZpbGUnLFxyXG4gICAgdHlwZTogJ3RleHQnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIk5ldXJhbCBJbnRlcmZhY2UgRGVzaWduZXJcIixcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IEZpZWxkID0gKHsgdHlwZSwgaWQsIGRlZmF1bHRWYWx1ZSwgc2V0RWRpdCwgZWRpdCB9KSA9PiB7XHJcbiBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRWYWx1ZSkgXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZmllbGQgJHt0eXBlfSAke2VkaXQgPT09IGlkID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KGlkKX0gPlxyXG4gIHt0eXBlID09PSAnaW1hZ2UnID8gKFxyXG4gICAgPD5cclxuICAgIHt2YWx1ZSA/IFxyXG4gICAgICA8aW1nIHNyYz17dmFsdWV9IC8+IDogXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmllbGQgcGxhY2Vob2xkZXJgfSAvPn1cclxuICAgICAgPC8+XHJcbiAgKSA6IHR5cGUgPT09ICd0ZXh0JyAgPyhcclxuICAgICAgPGgxPnt2YWx1ZX08L2gxPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgXHJcbiAgICAgIC5maWVsZDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5maWVsZC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgbmF2eTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbn1cclxuXHJcbmNvbnN0IEJ1aWxkID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gUmVhY3QudXNlU3RhdGUoKVxyXG4gIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgLy8gY29uc3QgW25hbWUsIHNldE5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAvLyBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlYmFyICR7ISFlZGl0ICYmICdhY3RpdmUnfWB9PlxyXG4gICAgICAgICAgICBTaWRlYmFyXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7Lyoge2VkaXQgPT09IFwicHJvZmlsZVwiICAmJiAoXHJcbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwcm9maWxlfSBvbkNoYW5nZT17KGUpID0+IHNldFByb2ZpbGUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7ZWRpdCA9PT0gXCJpbWFnZVwiICAmJiAoXHJcbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtpbWFnZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtlZGl0ID09PSBcIm5hbWVcIiAgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICB7RmllbGRUeXBlcy5tYXAoZiA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT17Zi50eXBlfSBzZXRFZGl0PXtzZXRFZGl0fSBkZWZhdWx0VmFsdWU9e2YuZGVmYXVsdFZhbHVlfSBpZD17Zi5pZH0gZWRpdD17ZWRpdH0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnNpZGViYXIuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWlsZDsiXX0= */\n/*@ sourceURL=E:\\\\react\\\\card\\\\pages\\\\build.js */"));
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
    className: "jsx-2031351884" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2031351884" + " " + "sidebar ".concat(!!edit && 'active'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "Sidebar", __jsx("br", {
    className: "jsx-2031351884",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "jsx-2031351884" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
        lineNumber: 85,
        columnNumber: 17
      }
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2031351884",
    __self: _this
  }, ".sidebar.jsx-2031351884{width:200px;position:fixed;top:0;left:0;height:100vh;overflow:auto;background:#222;color:#fff;display:none;}.sidebar.active.jsx-2031351884{display:block;}.container.jsx-2031351884{width:80%;max-width:720px;margin:0 auto;}.header.jsx-2031351884{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdFxcY2FyZFxccGFnZXNcXGJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGd0IsQUFHNkIsQUFXRSxBQUdKLEFBTUcsVUFMRyxFQWRELEVBV2pCLFlBSWdCLENBZFIsTUFDQyxPQUNNLEFBYWYsYUFaZ0IsY0FDRSxPQWVNLFNBZFgsV0FDRSxhQUNmLDZDQWFxQiw2RkFDckIiLCJmaWxlIjoiRTpcXHJlYWN0XFxjYXJkXFxwYWdlc1xcYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IEZpZWxkVHlwZXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdpbWFnZScsXHJcbiAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICduYW1lJyxcclxuICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJDYXljZSBQb2xsYXJkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3Byb2ZpbGUnLFxyXG4gICAgdHlwZTogJ3RleHQnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIk5ldXJhbCBJbnRlcmZhY2UgRGVzaWduZXJcIixcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IEZpZWxkID0gKHsgdHlwZSwgaWQsIGRlZmF1bHRWYWx1ZSwgc2V0RWRpdCwgZWRpdCB9KSA9PiB7XHJcbiBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRWYWx1ZSkgXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZmllbGQgJHt0eXBlfSAke2VkaXQgPT09IGlkID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KGlkKX0gPlxyXG4gIHt0eXBlID09PSAnaW1hZ2UnID8gKFxyXG4gICAgPD5cclxuICAgIHt2YWx1ZSA/IFxyXG4gICAgICA8aW1nIHNyYz17dmFsdWV9IC8+IDogXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmllbGQgcGxhY2Vob2xkZXJgfSAvPn1cclxuICAgICAgPC8+XHJcbiAgKSA6IHR5cGUgPT09ICd0ZXh0JyAgPyhcclxuICAgICAgPGgxPnt2YWx1ZX08L2gxPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgXHJcbiAgICAgIC5maWVsZDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5maWVsZC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgbmF2eTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbn1cclxuXHJcbmNvbnN0IEJ1aWxkID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gUmVhY3QudXNlU3RhdGUoKVxyXG4gIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgLy8gY29uc3QgW25hbWUsIHNldE5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAvLyBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlYmFyICR7ISFlZGl0ICYmICdhY3RpdmUnfWB9PlxyXG4gICAgICAgICAgICBTaWRlYmFyXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7Lyoge2VkaXQgPT09IFwicHJvZmlsZVwiICAmJiAoXHJcbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwcm9maWxlfSBvbkNoYW5nZT17KGUpID0+IHNldFByb2ZpbGUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7ZWRpdCA9PT0gXCJpbWFnZVwiICAmJiAoXHJcbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtpbWFnZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtlZGl0ID09PSBcIm5hbWVcIiAgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICB7RmllbGRUeXBlcy5tYXAoZiA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT17Zi50eXBlfSBzZXRFZGl0PXtzZXRFZGl0fSBkZWZhdWx0VmFsdWU9e2YuZGVmYXVsdFZhbHVlfSBpZD17Zi5pZH0gZWRpdD17ZWRpdH0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnNpZGViYXIuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWlsZDsiXX0= */\n/*@ sourceURL=E:\\\\react\\\\card\\\\pages\\\\build.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVpbGQuanMiXSwibmFtZXMiOlsiRmllbGRUeXBlcyIsImlkIiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsIkZpZWxkIiwic2V0RWRpdCIsImVkaXQiLCJSZWFjdCIsInVzZVN0YXRlIiwidmFsdWUiLCJzZXRWYWx1ZSIsIkJ1aWxkIiwibWFwIiwiZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0EsSUFBTUEsVUFBVSxHQUFHLENBQ2pCO0FBQ0VDLElBQUUsRUFBRSxPQUROO0FBRUVDLE1BQUksRUFBRSxPQUZSO0FBR0VDLGNBQVksRUFBRTtBQUhoQixDQURpQixFQU1qQjtBQUNFRixJQUFFLEVBQUUsTUFETjtBQUVFQyxNQUFJLEVBQUUsTUFGUjtBQUdFQyxjQUFZLEVBQUU7QUFIaEIsQ0FOaUIsRUFXakI7QUFDRUYsSUFBRSxFQUFFLFNBRE47QUFFRUMsTUFBSSxFQUFFLE1BRlI7QUFHRUMsY0FBWSxFQUFFO0FBSGhCLENBWGlCLENBQW5COztBQWtCQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUErQztBQUFBOztBQUFBLE1BQTVDRixJQUE0QyxRQUE1Q0EsSUFBNEM7QUFBQSxNQUF0Q0QsRUFBc0MsUUFBdENBLEVBQXNDO0FBQUEsTUFBbENFLFlBQWtDLFFBQWxDQSxZQUFrQztBQUFBLE1BQXBCRSxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsd0JBQ2xDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWVMLFlBQWYsQ0FEa0M7QUFBQTtBQUFBLE1BQ3JETSxLQURxRDtBQUFBLE1BQzlDQyxRQUQ4Qzs7QUFFM0QsU0FBTztBQUFnRSxXQUFPLEVBQUU7QUFBQSxhQUFNTCxPQUFPLENBQUNKLEVBQUQsQ0FBYjtBQUFBLEtBQXpFO0FBQUEsd0RBQXlCQyxJQUF6QixjQUFpQ0ksSUFBSSxLQUFLTCxFQUFULEdBQWMsUUFBZCxHQUF5QixFQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ05DLElBQUksS0FBSyxPQUFULEdBQ0MsbUVBQ0NPLEtBQUssR0FDSjtBQUFLLE9BQUcsRUFBRUEsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESSxHQUVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREQsR0FPR1AsSUFBSSxLQUFLLE1BQVQsR0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS08sS0FBTCxDQURBLEdBRUksSUFWRDtBQUFBO0FBQUE7QUFBQSw0ektBQVA7QUFvQ0QsQ0F0Q0Q7O0dBQU1MLEs7O0tBQUFBLEs7O0FBd0NOLElBQU1PLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEI7QUFEa0IseUJBRU1KLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBRk47QUFBQTtBQUFBLE1BRVhGLElBRlc7QUFBQSxNQUVMRCxPQUZLLHdCQUdsQjtBQUNBOzs7QUFFRSxTQUNJO0FBQUEsd0NBQWUsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQSwwREFBMkIsQ0FBQyxDQUFDQyxJQUFGLElBQVUsUUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBY0k7QUFBQSx3Q0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR04sVUFBVSxDQUFDWSxHQUFYLENBQWUsVUFBQUMsQ0FBQztBQUFBLFdBQ2YsTUFBQyxLQUFEO0FBQU8sVUFBSSxFQUFFQSxDQUFDLENBQUNYLElBQWY7QUFBcUIsYUFBTyxFQUFFRyxPQUE5QjtBQUF1QyxrQkFBWSxFQUFFUSxDQUFDLENBQUNWLFlBQXZEO0FBQXFFLFFBQUUsRUFBRVUsQ0FBQyxDQUFDWixFQUEzRTtBQUErRSxVQUFJLEVBQUVLLElBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEZTtBQUFBLEdBQWhCLENBREgsQ0FkSjtBQUFBO0FBQUE7QUFBQSwya0xBREo7QUFvREgsQ0ExREQ7O0lBQU1LLEs7O01BQUFBLEs7QUE0RFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1aWxkLmFhNDI4MmYwZTI4MTY3MzM5MTRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IEZpZWxkVHlwZXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdpbWFnZScsXHJcbiAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICduYW1lJyxcclxuICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJDYXljZSBQb2xsYXJkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3Byb2ZpbGUnLFxyXG4gICAgdHlwZTogJ3RleHQnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIk5ldXJhbCBJbnRlcmZhY2UgRGVzaWduZXJcIixcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IEZpZWxkID0gKHsgdHlwZSwgaWQsIGRlZmF1bHRWYWx1ZSwgc2V0RWRpdCwgZWRpdCB9KSA9PiB7XHJcbiBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRWYWx1ZSkgXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZmllbGQgJHt0eXBlfSAke2VkaXQgPT09IGlkID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KGlkKX0gPlxyXG4gIHt0eXBlID09PSAnaW1hZ2UnID8gKFxyXG4gICAgPD5cclxuICAgIHt2YWx1ZSA/IFxyXG4gICAgICA8aW1nIHNyYz17dmFsdWV9IC8+IDogXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmllbGQgcGxhY2Vob2xkZXJgfSAvPn1cclxuICAgICAgPC8+XHJcbiAgKSA6IHR5cGUgPT09ICd0ZXh0JyAgPyhcclxuICAgICAgPGgxPnt2YWx1ZX08L2gxPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgXHJcbiAgICAgIC5maWVsZDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5maWVsZC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgbmF2eTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbn1cclxuXHJcbmNvbnN0IEJ1aWxkID0gKCkgPT4ge1xyXG4gIC8vIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gUmVhY3QudXNlU3RhdGUoKVxyXG4gIGNvbnN0IFtlZGl0LCBzZXRFZGl0XSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXHJcbiAgLy8gY29uc3QgW25hbWUsIHNldE5hbWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIilcclxuICAvLyBjb25zdCBbcHJvZmlsZSwgc2V0UHJvZmlsZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlYmFyICR7ISFlZGl0ICYmICdhY3RpdmUnfWB9PlxyXG4gICAgICAgICAgICBTaWRlYmFyXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7Lyoge2VkaXQgPT09IFwicHJvZmlsZVwiICAmJiAoXHJcbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtwcm9maWxlfSBvbkNoYW5nZT17KGUpID0+IHNldFByb2ZpbGUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7ZWRpdCA9PT0gXCJpbWFnZVwiICAmJiAoXHJcbiAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtpbWFnZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRJbWFnZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtlZGl0ID09PSBcIm5hbWVcIiAgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbnB1dCB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgKX0gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICB7RmllbGRUeXBlcy5tYXAoZiA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RmllbGQgdHlwZT17Zi50eXBlfSBzZXRFZGl0PXtzZXRFZGl0fSBkZWZhdWx0VmFsdWU9e2YuZGVmYXVsdFZhbHVlfSBpZD17Zi5pZH0gZWRpdD17ZWRpdH0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAuc2lkZWJhciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnNpZGViYXIuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdWlsZDsiXSwic291cmNlUm9vdCI6IiJ9