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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ExamplePanel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExamplePanel.module.scss */ \"./components/Examples/ExamplePanel/ExamplePanel.module.scss\");\n/* harmony import */ var _ExamplePanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ExamplePanel_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst ExamplePanel = (props)=>{\n    _s();\n    const [exampleValue, setExampleValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleClick = ()=>{\n        setExampleValue(exampleValue + 1);\n    };\n    const currentDate = new Date().toDateString();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ExamplePanel_module_scss__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"ExamplePanel\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\Examples\\\\ExamplePanel\\\\ExamplePanel.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"exampleValue: \",\n                    exampleValue,\n                    \"\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleClick,\n                        children: \"Increment!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\Examples\\\\ExamplePanel\\\\ExamplePanel.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\Examples\\\\ExamplePanel\\\\ExamplePanel.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Date: \",\n                    currentDate\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\Examples\\\\ExamplePanel\\\\ExamplePanel.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\Examples\\\\ExamplePanel\\\\ExamplePanel.js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ExamplePanel, \"QsvNFw4HMURmj51qYjJpIxzHBl4=\");\n_c = ExamplePanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExamplePanel);\nvar _c;\n$RefreshReg$(_c, \"ExamplePanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4YW1wbGVzL0V4YW1wbGVQYW5lbC9FeGFtcGxlUGFuZWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ087QUFFL0MsTUFBTUcsZUFBZSxDQUFDQzs7SUFDbEIsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR0wsK0NBQVFBLENBQUM7SUFFakQsTUFBTU0sY0FBYztRQUNoQkQsZ0JBQWdCRCxlQUFlO0lBQ25DO0lBRUEsTUFBTUcsY0FBYyxJQUFJQyxPQUFPQyxZQUFZO0lBRTNDLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFXViw0RUFBZ0I7OzBCQUM1Qiw4REFBQ1k7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0g7O29CQUFJO29CQUFlTjtvQkFBYTtrQ0FFN0IsOERBQUNVO3dCQUFPQyxTQUFTVDtrQ0FBYTs7Ozs7Ozs7Ozs7OzBCQUVsQyw4REFBQ0k7O29CQUFJO29CQUNNSDs7Ozs7Ozs7Ozs7OztBQUl2QjtHQXJCTUw7S0FBQUE7QUF1Qk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FeGFtcGxlcy9FeGFtcGxlUGFuZWwvRXhhbXBsZVBhbmVsLmpzPzA2MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9FeGFtcGxlUGFuZWwubW9kdWxlLnNjc3MnXHJcblxyXG5jb25zdCBFeGFtcGxlUGFuZWwgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtleGFtcGxlVmFsdWUsIHNldEV4YW1wbGVWYWx1ZV0gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEV4YW1wbGVWYWx1ZShleGFtcGxlVmFsdWUgKyAxKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLnRvRGF0ZVN0cmluZygpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDE+RXhhbXBsZVBhbmVsPC9oMT5cclxuICAgICAgICAgICAgPGRpdj5leGFtcGxlVmFsdWU6IHtleGFtcGxlVmFsdWV9XHJcbiAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkluY3JlbWVudCE8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICBEYXRlOiB7Y3VycmVudERhdGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlUGFuZWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiRXhhbXBsZVBhbmVsIiwicHJvcHMiLCJleGFtcGxlVmFsdWUiLCJzZXRFeGFtcGxlVmFsdWUiLCJoYW5kbGVDbGljayIsImN1cnJlbnREYXRlIiwiRGF0ZSIsInRvRGF0ZVN0cmluZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Examples/ExamplePanel/ExamplePanel.js\n"));

/***/ })

});