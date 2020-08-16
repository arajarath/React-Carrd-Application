webpackHotUpdate_N_E("pages/build",{

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
    _s = $RefreshSig$();



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
  var value = _ref.value,
      setValue = _ref.setValue,
      type = _ref.type,
      id = _ref.id,
      defaultValue = _ref.defaultValue,
      setEdit = _ref.setEdit,
      editMode = _ref.editMode,
      edit = _ref.edit;

  if (editMode) {
    return edit === id && __jsx("input", {
      value: value,
      onChange: function onChange(e) {
        return setValue(id, e.target.value);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
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
      lineNumber: 31,
      columnNumber: 10
    }
  }, type === 'image' ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, value ? __jsx("img", {
    src: value,
    className: "jsx-2295813568",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }) : __jsx("div", {
    className: "jsx-2295813568" + " " + "field placeholder",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  })) : type === 'text' ? __jsx("h1", {
    className: "jsx-2295813568",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, value) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2295813568",
    __self: _this
  }, ".field.jsx-2295813568:hover{border:1px solid lightblue;}.field.active.jsx-2295813568{border:2px solid navy;border-radius:3px;}.field.jsx-2295813568{padding:10px 20px;margin-top:20px;text-align:center;}.placeholder.jsx-2295813568{width:50px;height:50px;border-radius:50%;background:#aaa;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdFxcY2FyZFxccGFnZXNcXGJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDTyxBQUk0QyxBQUdMLEFBSUosQUFNUCxXQUNDLE9BTkksSUFKRSxDQVdBLElBZHBCLE9BUW9CLE1BSnBCLENBV2tCLFdBTmxCLEtBT0EiLCJmaWxlIjoiRTpcXHJlYWN0XFxjYXJkXFxwYWdlc1xcYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IEZpZWxkVHlwZXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdpbWFnZScsXHJcbiAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICduYW1lJyxcclxuICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJDYXljZSBQb2xsYXJkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3Byb2ZpbGUnLFxyXG4gICAgdHlwZTogJ3RleHQnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIk5ldXJhbCBJbnRlcmZhY2UgRGVzaWduZXJcIixcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IEZpZWxkID0gKHsgdmFsdWUsIHNldFZhbHVlLCB0eXBlLCBpZCwgZGVmYXVsdFZhbHVlLCBzZXRFZGl0LCBlZGl0TW9kZSwgZWRpdCB9KSA9PiB7XHJcbiAgXHJcbiAgaWYgKGVkaXRNb2RlKSB7XHJcbiAgICByZXR1cm4gZWRpdCA9PT0gaWQgJiYgKFxyXG4gICAgICA8aW5wdXQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGlkLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZmllbGQgJHt0eXBlfSAke2VkaXQgPT09IGlkID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KGlkKX0gPlxyXG4gIHt0eXBlID09PSAnaW1hZ2UnID8gKFxyXG4gICAgPD5cclxuICAgIHt2YWx1ZSA/IFxyXG4gICAgICA8aW1nIHNyYz17dmFsdWV9IC8+IDogXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmllbGQgcGxhY2Vob2xkZXJgfSAvPn1cclxuICAgICAgPC8+XHJcbiAgKSA6IHR5cGUgPT09ICd0ZXh0JyAgPyhcclxuICAgICAgPGgxPnt2YWx1ZX08L2gxPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgXHJcbiAgICAgIC5maWVsZDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5maWVsZC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgbmF2eTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbn1cclxuXHJcbmNvbnN0IEJ1aWxkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRlZmF1bHRTdGF0ZSA9IHt9XHJcbiAgRmllbGRUeXBlcy5mb3JFYWNoKGYgPT4gZGVmYXVsdFN0YXRlW2YuaWRdID0gZi5kZWZhdWx0VmFsdWUgKVxyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIC4uLmRlZmF1bHRTdGF0ZVxyXG4gIH0pXHJcbiAgY29uc3QgW2VkaXQsIHNldEVkaXRdID0gUmVhY3QudXNlU3RhdGUobnVsbClcclxuICAvLyBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gIC8vIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3Qgc2V0VmFsdWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG5cclxuICAgIHNldFBhZ2Uoe1xyXG4gICAgICAuLi5wYWdlLFxyXG4gICAgICBba2V5XTogdmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhwYWdlKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlYmFyICR7ISFlZGl0ICYmICdhY3RpdmUnfWB9PlxyXG4gICAgICAgICAgICBTaWRlYmFyXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7RmllbGRUeXBlcy5tYXAoZiA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RmllbGQga2V5PXtgdi0ke2YuaWR9YH0gdmFsdWU9e3BhZ2VbZi5pZF19IHNldFZhbHVlPXtzZXRWYWx1ZX0gZWRpdE1vZGUgdHlwZT17Zi50eXBlfSBzZXRFZGl0PXtzZXRFZGl0fSBkZWZhdWx0VmFsdWU9e2YuZGVmYXVsdFZhbHVlfSBpZD17Zi5pZH0gZWRpdD17ZWRpdH0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIHtGaWVsZFR5cGVzLm1hcChmID0+IChcclxuICAgICAgICAgICAgICAgIDxGaWVsZCBrZXk9e2B2YS0ke2YuaWR9YH0gdmFsdWU9e3BhZ2VbZi5pZF19ICB0eXBlPXtmLnR5cGV9IHNldEVkaXQ9e3NldEVkaXR9IGRlZmF1bHRWYWx1ZT17Zi5kZWZhdWx0VmFsdWV9IGlkPXtmLmlkfSBlZGl0PXtlZGl0fSAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2lkZWJhci5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1aWxkOyJdfQ== */\n/*@ sourceURL=E:\\\\react\\\\card\\\\pages\\\\build.js */"));
};

_c = Field;

var Build = function Build() {
  _s();

  var defaultState = {};
  FieldTypes.forEach(function (f) {
    return defaultState[f.id] = f.defaultValue;
  });

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(_objectSpread({}, defaultState)),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(null),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      edit = _React$useState4[0],
      setEdit = _React$useState4[1]; // const [name, setName] = React.useState("")
  // const [profile, setProfile] = React.useState("")


  var setValue = function setValue(key, value) {
    setPage(_objectSpread(_objectSpread({}, page), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value)));
  };

  console.log(page);
  return __jsx("div", {
    className: "jsx-2031351884" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2031351884" + " " + "sidebar ".concat(!!edit && 'active'),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, "Sidebar", __jsx("br", {
    className: "jsx-2031351884",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }), FieldTypes.map(function (f) {
    return __jsx(Field, {
      key: "v-".concat(f.id),
      value: page[f.id],
      setValue: setValue,
      editMode: true,
      type: f.type,
      setEdit: setEdit,
      defaultValue: f.defaultValue,
      id: f.id,
      edit: edit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    });
  })), __jsx("div", {
    className: "jsx-2031351884" + " " + "header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, FieldTypes.map(function (f) {
    return __jsx(Field, {
      key: "va-".concat(f.id),
      value: page[f.id],
      type: f.type,
      setEdit: setEdit,
      defaultValue: f.defaultValue,
      id: f.id,
      edit: edit,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    });
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2031351884",
    __self: _this
  }, ".sidebar.jsx-2031351884{width:200px;position:fixed;top:0;left:0;height:100vh;overflow:auto;background:#222;color:#fff;display:none;}.sidebar.active.jsx-2031351884{display:block;}.container.jsx-2031351884{width:80%;max-width:720px;margin:0 auto;}.header.jsx-2031351884{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdFxcY2FyZFxccGFnZXNcXGJ1aWxkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Hd0IsQUFHNkIsQUFXRSxBQUdKLEFBTUcsVUFMRyxFQWRELEVBV2pCLFlBSWdCLENBZFIsTUFDQyxPQUNNLEFBYWYsYUFaZ0IsY0FDRSxPQWVNLFNBZFgsV0FDRSxhQUNmLDZDQWFxQiw2RkFDckIiLCJmaWxlIjoiRTpcXHJlYWN0XFxjYXJkXFxwYWdlc1xcYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IEZpZWxkVHlwZXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdpbWFnZScsXHJcbiAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICduYW1lJyxcclxuICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJDYXljZSBQb2xsYXJkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3Byb2ZpbGUnLFxyXG4gICAgdHlwZTogJ3RleHQnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIk5ldXJhbCBJbnRlcmZhY2UgRGVzaWduZXJcIixcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IEZpZWxkID0gKHsgdmFsdWUsIHNldFZhbHVlLCB0eXBlLCBpZCwgZGVmYXVsdFZhbHVlLCBzZXRFZGl0LCBlZGl0TW9kZSwgZWRpdCB9KSA9PiB7XHJcbiAgXHJcbiAgaWYgKGVkaXRNb2RlKSB7XHJcbiAgICByZXR1cm4gZWRpdCA9PT0gaWQgJiYgKFxyXG4gICAgICA8aW5wdXQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGlkLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZmllbGQgJHt0eXBlfSAke2VkaXQgPT09IGlkID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KGlkKX0gPlxyXG4gIHt0eXBlID09PSAnaW1hZ2UnID8gKFxyXG4gICAgPD5cclxuICAgIHt2YWx1ZSA/IFxyXG4gICAgICA8aW1nIHNyYz17dmFsdWV9IC8+IDogXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmllbGQgcGxhY2Vob2xkZXJgfSAvPn1cclxuICAgICAgPC8+XHJcbiAgKSA6IHR5cGUgPT09ICd0ZXh0JyAgPyhcclxuICAgICAgPGgxPnt2YWx1ZX08L2gxPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgXHJcbiAgICAgIC5maWVsZDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5maWVsZC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgbmF2eTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbn1cclxuXHJcbmNvbnN0IEJ1aWxkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRlZmF1bHRTdGF0ZSA9IHt9XHJcbiAgRmllbGRUeXBlcy5mb3JFYWNoKGYgPT4gZGVmYXVsdFN0YXRlW2YuaWRdID0gZi5kZWZhdWx0VmFsdWUgKVxyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIC4uLmRlZmF1bHRTdGF0ZVxyXG4gIH0pXHJcbiAgY29uc3QgW2VkaXQsIHNldEVkaXRdID0gUmVhY3QudXNlU3RhdGUobnVsbClcclxuICAvLyBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gIC8vIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3Qgc2V0VmFsdWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG5cclxuICAgIHNldFBhZ2Uoe1xyXG4gICAgICAuLi5wYWdlLFxyXG4gICAgICBba2V5XTogdmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhwYWdlKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlYmFyICR7ISFlZGl0ICYmICdhY3RpdmUnfWB9PlxyXG4gICAgICAgICAgICBTaWRlYmFyXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7RmllbGRUeXBlcy5tYXAoZiA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RmllbGQga2V5PXtgdi0ke2YuaWR9YH0gdmFsdWU9e3BhZ2VbZi5pZF19IHNldFZhbHVlPXtzZXRWYWx1ZX0gZWRpdE1vZGUgdHlwZT17Zi50eXBlfSBzZXRFZGl0PXtzZXRFZGl0fSBkZWZhdWx0VmFsdWU9e2YuZGVmYXVsdFZhbHVlfSBpZD17Zi5pZH0gZWRpdD17ZWRpdH0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIHtGaWVsZFR5cGVzLm1hcChmID0+IChcclxuICAgICAgICAgICAgICAgIDxGaWVsZCBrZXk9e2B2YS0ke2YuaWR9YH0gdmFsdWU9e3BhZ2VbZi5pZF19ICB0eXBlPXtmLnR5cGV9IHNldEVkaXQ9e3NldEVkaXR9IGRlZmF1bHRWYWx1ZT17Zi5kZWZhdWx0VmFsdWV9IGlkPXtmLmlkfSBlZGl0PXtlZGl0fSAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2lkZWJhci5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1aWxkOyJdfQ== */\n/*@ sourceURL=E:\\\\react\\\\card\\\\pages\\\\build.js */"));
};

_s(Build, "deQ+ZxGfDk5AwKN2baVR+XT7sKI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYnVpbGQuanMiXSwibmFtZXMiOlsiRmllbGRUeXBlcyIsImlkIiwidHlwZSIsImRlZmF1bHRWYWx1ZSIsIkZpZWxkIiwidmFsdWUiLCJzZXRWYWx1ZSIsInNldEVkaXQiLCJlZGl0TW9kZSIsImVkaXQiLCJlIiwidGFyZ2V0IiwiQnVpbGQiLCJkZWZhdWx0U3RhdGUiLCJmb3JFYWNoIiwiZiIsIlJlYWN0IiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBLElBQU1BLFVBQVUsR0FBRyxDQUNqQjtBQUNFQyxJQUFFLEVBQUUsT0FETjtBQUVFQyxNQUFJLEVBQUUsT0FGUjtBQUdFQyxjQUFZLEVBQUU7QUFIaEIsQ0FEaUIsRUFNakI7QUFDRUYsSUFBRSxFQUFFLE1BRE47QUFFRUMsTUFBSSxFQUFFLE1BRlI7QUFHRUMsY0FBWSxFQUFFO0FBSGhCLENBTmlCLEVBV2pCO0FBQ0VGLElBQUUsRUFBRSxTQUROO0FBRUVDLE1BQUksRUFBRSxNQUZSO0FBR0VDLGNBQVksRUFBRTtBQUhoQixDQVhpQixDQUFuQjs7QUFrQkEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBMEU7QUFBQSxNQUF2RUMsS0FBdUUsUUFBdkVBLEtBQXVFO0FBQUEsTUFBaEVDLFFBQWdFLFFBQWhFQSxRQUFnRTtBQUFBLE1BQXRESixJQUFzRCxRQUF0REEsSUFBc0Q7QUFBQSxNQUFoREQsRUFBZ0QsUUFBaERBLEVBQWdEO0FBQUEsTUFBNUNFLFlBQTRDLFFBQTVDQSxZQUE0QztBQUFBLE1BQTlCSSxPQUE4QixRQUE5QkEsT0FBOEI7QUFBQSxNQUFyQkMsUUFBcUIsUUFBckJBLFFBQXFCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUV0RixNQUFJRCxRQUFKLEVBQWM7QUFDWixXQUFP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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVCxVQUFVLENBQUN1QixHQUFYLENBQWUsVUFBQVIsQ0FBQztBQUFBLFdBQ2YsTUFBQyxLQUFEO0FBQU8sU0FBRyxlQUFRQSxDQUFDLENBQUNkLEVBQVYsQ0FBVjtBQUEwQixXQUFLLEVBQUVpQixJQUFJLENBQUNILENBQUMsQ0FBQ2QsRUFBSCxDQUFyQztBQUE4QyxVQUFJLEVBQUVjLENBQUMsQ0FBQ2IsSUFBdEQ7QUFBNEQsYUFBTyxFQUFFSyxPQUFyRTtBQUE4RSxrQkFBWSxFQUFFUSxDQUFDLENBQUNaLFlBQTlGO0FBQTRHLFFBQUUsRUFBRVksQ0FBQyxDQUFDZCxFQUFsSDtBQUFzSCxVQUFJLEVBQUVRLElBQTVIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEZTtBQUFBLEdBQWhCLENBREgsQ0FSSjtBQUFBO0FBQUE7QUFBQSwyM0xBREo7QUE4Q0gsQ0FoRUQ7O0dBQU1HLEs7O01BQUFBLEs7QUFrRVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2J1aWxkLmIwYWNhOTBhNWUxY2VmZTA5YjUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmNvbnN0IEZpZWxkVHlwZXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6ICdpbWFnZScsXHJcbiAgICB0eXBlOiAnaW1hZ2UnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICduYW1lJyxcclxuICAgIHR5cGU6ICd0ZXh0JyxcclxuICAgIGRlZmF1bHRWYWx1ZTogXCJDYXljZSBQb2xsYXJkXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ3Byb2ZpbGUnLFxyXG4gICAgdHlwZTogJ3RleHQnLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBcIk5ldXJhbCBJbnRlcmZhY2UgRGVzaWduZXJcIixcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IEZpZWxkID0gKHsgdmFsdWUsIHNldFZhbHVlLCB0eXBlLCBpZCwgZGVmYXVsdFZhbHVlLCBzZXRFZGl0LCBlZGl0TW9kZSwgZWRpdCB9KSA9PiB7XHJcbiAgXHJcbiAgaWYgKGVkaXRNb2RlKSB7XHJcbiAgICByZXR1cm4gZWRpdCA9PT0gaWQgJiYgKFxyXG4gICAgICA8aW5wdXQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGlkLCBlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZmllbGQgJHt0eXBlfSAke2VkaXQgPT09IGlkID8gJ2FjdGl2ZScgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0KGlkKX0gPlxyXG4gIHt0eXBlID09PSAnaW1hZ2UnID8gKFxyXG4gICAgPD5cclxuICAgIHt2YWx1ZSA/IFxyXG4gICAgICA8aW1nIHNyYz17dmFsdWV9IC8+IDogXHJcbiAgICAgIDxkaXYgXHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmllbGQgcGxhY2Vob2xkZXJgfSAvPn1cclxuICAgICAgPC8+XHJcbiAgKSA6IHR5cGUgPT09ICd0ZXh0JyAgPyhcclxuICAgICAgPGgxPnt2YWx1ZX08L2gxPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAge2BcclxuICAgICAgXHJcbiAgICAgIC5maWVsZDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5maWVsZC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgbmF2eTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIC5wbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNhYWE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbn1cclxuXHJcbmNvbnN0IEJ1aWxkID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRlZmF1bHRTdGF0ZSA9IHt9XHJcbiAgRmllbGRUeXBlcy5mb3JFYWNoKGYgPT4gZGVmYXVsdFN0YXRlW2YuaWRdID0gZi5kZWZhdWx0VmFsdWUgKVxyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKHtcclxuICAgIC4uLmRlZmF1bHRTdGF0ZVxyXG4gIH0pXHJcbiAgY29uc3QgW2VkaXQsIHNldEVkaXRdID0gUmVhY3QudXNlU3RhdGUobnVsbClcclxuICAvLyBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gIC8vIGNvbnN0IFtwcm9maWxlLCBzZXRQcm9maWxlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3Qgc2V0VmFsdWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG5cclxuICAgIHNldFBhZ2Uoe1xyXG4gICAgICAuLi5wYWdlLFxyXG4gICAgICBba2V5XTogdmFsdWVcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmxvZyhwYWdlKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzaWRlYmFyICR7ISFlZGl0ICYmICdhY3RpdmUnfWB9PlxyXG4gICAgICAgICAgICBTaWRlYmFyXHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICB7RmllbGRUeXBlcy5tYXAoZiA9PiAoXHJcbiAgICAgICAgICAgICAgICA8RmllbGQga2V5PXtgdi0ke2YuaWR9YH0gdmFsdWU9e3BhZ2VbZi5pZF19IHNldFZhbHVlPXtzZXRWYWx1ZX0gZWRpdE1vZGUgdHlwZT17Zi50eXBlfSBzZXRFZGl0PXtzZXRFZGl0fSBkZWZhdWx0VmFsdWU9e2YuZGVmYXVsdFZhbHVlfSBpZD17Zi5pZH0gZWRpdD17ZWRpdH0gLz5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIHtGaWVsZFR5cGVzLm1hcChmID0+IChcclxuICAgICAgICAgICAgICAgIDxGaWVsZCBrZXk9e2B2YS0ke2YuaWR9YH0gdmFsdWU9e3BhZ2VbZi5pZF19ICB0eXBlPXtmLnR5cGV9IHNldEVkaXQ9e3NldEVkaXR9IGRlZmF1bHRWYWx1ZT17Zi5kZWZhdWx0VmFsdWV9IGlkPXtmLmlkfSBlZGl0PXtlZGl0fSAvPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgIC5zaWRlYmFyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2lkZWJhci5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1aWxkOyJdLCJzb3VyY2VSb290IjoiIn0=