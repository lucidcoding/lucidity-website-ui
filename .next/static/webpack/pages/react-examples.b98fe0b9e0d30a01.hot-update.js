"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/react-examples",{

/***/ "./components/Examples/ExamplePanel/ExamplePanel.js":
/*!**********************************************************!*\
  !*** ./components/Examples/ExamplePanel/ExamplePanel.js ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ExamplePanel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExamplePanel.module.scss */ \"./components/Examples/ExamplePanel/ExamplePanel.module.scss\");\n/* harmony import */ var _ExamplePanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ExamplePanel_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst ExamplePanel = (props)=>{\n    _s();\n    const [exampleValue, setExampleValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleClick = ()=>{\n        setExampleValue(exampleValue + 1);\n    };\n    const currentDate = new Date();\n    const formattedDate = \"\".concat(currentDate.getHours(), \":\").concat(currentDate.getMinutes(), \":\").concat(currentDate.getSeconds());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ExamplePanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"ExamplePanel\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\Examples\\\\ExamplePanel\\\\ExamplePanel.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"exampleValue: \",\n                    exampleValue,\n                    \"\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleClick,\n                        children: \"Increment!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\Examples\\\\ExamplePanel\\\\ExamplePanel.js\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\Examples\\\\ExamplePanel\\\\ExamplePanel.js\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Date: \",\n                    currentDate\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\Examples\\\\ExamplePanel\\\\ExamplePanel.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\Examples\\\\ExamplePanel\\\\ExamplePanel.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ExamplePanel, \"QsvNFw4HMURmj51qYjJpIxzHBl4=\");\n_c = ExamplePanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExamplePanel);\nvar _c;\n$RefreshReg$(_c, \"ExamplePanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4YW1wbGVzL0V4YW1wbGVQYW5lbC9FeGFtcGxlUGFuZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ087QUFFL0MsTUFBTUcsZUFBZSxDQUFDQzs7SUFDbEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0wsK0NBQVFBLENBQUM7SUFFakQsTUFBTU0sY0FBYztRQUNoQkQsZ0JBQWdCRCxlQUFlO0lBQ25DO0lBRUEsTUFBTUcsY0FBYyxJQUFJQztJQUN4QixNQUFNQyxnQkFBZ0IsR0FBNkJGLE9BQTFCQSxZQUFZRyxRQUFRLElBQUcsS0FBK0JILE9BQTVCQSxZQUFZSSxVQUFVLElBQUcsS0FBNEIsT0FBekJKLFlBQVlLLFVBQVU7SUFFckcscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVdiLDRFQUFnQjs7MEJBQzVCLDhEQUFDZTswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDSDs7b0JBQUk7b0JBQWVUO29CQUFhO2tDQUU3Qiw4REFBQ2E7d0JBQU9DLFNBQVNaO2tDQUFhOzs7Ozs7Ozs7Ozs7MEJBRWxDLDhEQUFDTzs7b0JBQUk7b0JBQ01OOzs7Ozs7Ozs7Ozs7O0FBSXZCO0dBdEJNTDtLQUFBQTtBQXdCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V4YW1wbGVzL0V4YW1wbGVQYW5lbC9FeGFtcGxlUGFuZWwuanM/MDYwNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0V4YW1wbGVQYW5lbC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IEV4YW1wbGVQYW5lbCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2V4YW1wbGVWYWx1ZSwgc2V0RXhhbXBsZVZhbHVlXSA9IHVzZVN0YXRlKDApXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0RXhhbXBsZVZhbHVlKGV4YW1wbGVWYWx1ZSArIDEpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gYCR7Y3VycmVudERhdGUuZ2V0SG91cnMoKX06JHtjdXJyZW50RGF0ZS5nZXRNaW51dGVzKCl9OiR7Y3VycmVudERhdGUuZ2V0U2Vjb25kcygpfWA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoMT5FeGFtcGxlUGFuZWw8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2PmV4YW1wbGVWYWx1ZToge2V4YW1wbGVWYWx1ZX1cclxuICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+SW5jcmVtZW50ITwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIERhdGU6IHtjdXJyZW50RGF0ZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGVQYW5lbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJFeGFtcGxlUGFuZWwiLCJwcm9wcyIsImV4YW1wbGVWYWx1ZSIsInNldEV4YW1wbGVWYWx1ZSIsImhhbmRsZUNsaWNrIiwiY3VycmVudERhdGUiLCJEYXRlIiwiZm9ybWF0dGVkRGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Examples/ExamplePanel/ExamplePanel.js\n"));

/***/ })

});