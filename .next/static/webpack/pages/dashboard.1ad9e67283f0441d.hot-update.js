"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./components/GridStackPanel/GridStackPanel.js":
/*!*****************************************************!*\
  !*** ./components/GridStackPanel/GridStackPanel.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GridStackTile_GridStackTile_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GridStackTile/GridStackTile.js */ \"./components/GridStackTile/GridStackTile.js\");\n/* harmony import */ var _TestContent_TestContent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../TestContent/TestContent.js */ \"./components/TestContent/TestContent.js\");\n/* harmony import */ var _TestContent2_TestContent2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../TestContent2/TestContent2.js */ \"./components/TestContent2/TestContent2.js\");\n/* harmony import */ var gridstack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gridstack */ \"./node_modules/gridstack/dist/gridstack.js\");\n/* harmony import */ var gridstack_dist_gridstack_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gridstack/dist/gridstack.css */ \"./node_modules/gridstack/dist/gridstack.css\");\n/* harmony import */ var gridstack_dist_gridstack_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gridstack_dist_gridstack_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _GridStackPanel_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GridStackPanel.module.scss */ \"./components/GridStackPanel/GridStackPanel.module.scss\");\n/* harmony import */ var _GridStackPanel_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_GridStackPanel_module_scss__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst GridStackPanel = (props)=>{\n    _s();\n    const initialTileData = [\n        {\n            key: 0,\n            width: 1,\n            height: 1,\n            x: 2,\n            y: 2,\n            content: \"tile 0\"\n        },\n        {\n            key: 1,\n            width: 2,\n            height: 2,\n            content: \"tile 1\"\n        },\n        {\n            key: 2,\n            width: 3,\n            height: 1,\n            content: \"tile 2\"\n        },\n        {\n            key: 3,\n            width: 4,\n            height: 1,\n            content: \"tile 3\"\n        },\n        {\n            key: 4,\n            width: 5,\n            height: 1,\n            content: \"tile 4\"\n        }\n    ];\n    const [tileData, setTileData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialTileData);\n    let grid;\n    console.log(tileData);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        grid = gridstack__WEBPACK_IMPORTED_MODULE_5__.GridStack.init();\n        grid.margin(\"12px\");\n    });\n    const mounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const lastKeyAdded = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!mounted.current) {\n            // do componentDidMount logic\n            mounted.current = true;\n        } else {\n            // do componentDidUpdate logic\n            if (lastKeyAdded.current) {\n                grid.makeWidget(\"#\".concat(lastKeyAdded.current));\n                lastKeyAdded.current = null;\n            }\n        }\n    });\n    const handleAddTile = ()=>{\n        const newTileData = [\n            ...tileData\n        ];\n        var existingKeys = newTileData.map((element)=>element.key);\n        var nextKey = Math.max(...existingKeys) + 1;\n        newTileData.push({\n            key: nextKey,\n            width: 1,\n            height: 1,\n            content: \"tile \".concat(nextKey)\n        });\n        setTileData(newTileData);\n        lastKeyAdded.current = nextKey;\n    };\n    const handleTileClose = (ref, key)=>{\n        grid.removeWidget(ref.current, false);\n        const newTileData = [\n            ...tileData\n        ];\n        var currentTile = newTileData.find((element)=>element.key == key);\n        var tileIndex = newTileData.indexOf(currentTile);\n        newTileData.splice(tileIndex, 1);\n        setTileData(newTileData);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_GridStackPanel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_GridStackPanel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().menu),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_GridStackPanel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\GridStackPanel\\\\GridStackPanel.js\",\n                        lineNumber: 98,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Add Widget\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\GridStackPanel\\\\GridStackPanel.js\",\n                        lineNumber: 99,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: handleAddTile,\n                        children: \"Guage\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\GridStackPanel\\\\GridStackPanel.js\",\n                        lineNumber: 100,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: handleAddTile,\n                        children: \"Bar Chart\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\GridStackPanel\\\\GridStackPanel.js\",\n                        lineNumber: 101,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: handleAddTile,\n                        children: \"Graph\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\GridStackPanel\\\\GridStackPanel.js\",\n                        lineNumber: 102,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\GridStackPanel\\\\GridStackPanel.js\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_GridStackPanel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_GridStackPanel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Analytics Dashboard\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\GridStackPanel\\\\GridStackPanel.js\",\n                            lineNumber: 106,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\GridStackPanel\\\\GridStackPanel.js\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_GridStackPanel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().gridStackContainer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-stack \".concat((_GridStackPanel_module_scss__WEBPACK_IMPORTED_MODULE_7___default().gridStack)),\n                            children: tileData.map((tileDatum, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GridStackTile_GridStackTile_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    title: tileDatum.content,\n                                    gsWidth: tileDatum.width,\n                                    gsHeight: tileDatum.height,\n                                    gsX: tileDatum.x,\n                                    gsY: tileDatum.y,\n                                    gsId: tileDatum.key,\n                                    handleClose: (ref)=>handleTileClose(ref, tileDatum.key),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: tileDatum.content\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\GridStackPanel\\\\GridStackPanel.js\",\n                                            lineNumber: 120,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TestContent2_TestContent2_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                            fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\GridStackPanel\\\\GridStackPanel.js\",\n                                            lineNumber: 121,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, tileDatum.key, true, {\n                                    fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\GridStackPanel\\\\GridStackPanel.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\GridStackPanel\\\\GridStackPanel.js\",\n                            lineNumber: 109,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\GridStackPanel\\\\GridStackPanel.js\",\n                        lineNumber: 108,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\GridStackPanel\\\\GridStackPanel.js\",\n                lineNumber: 104,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Code\\\\Paul\\\\D3Examples\\\\lucidity-d3js\\\\components\\\\GridStackPanel\\\\GridStackPanel.js\",\n        lineNumber: 96,\n        columnNumber: 9\n    }, undefined);\n};\n_s(GridStackPanel, \"GngEBrAaDPLBnlpSxVV0QHgOpts=\");\n_c = GridStackPanel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GridStackPanel);\nvar _c;\n$RefreshReg$(_c, \"GridStackPanel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dyaWRTdGFja1BhbmVsL0dyaWRTdGFja1BhbmVsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRTtBQUNSO0FBQ047QUFDRztBQUNyQjtBQUNBO0FBQ1k7QUFFbEQsTUFBTVUsaUJBQWlCLENBQUNDOztJQUNwQixNQUFNQyxrQkFBa0I7UUFDcEI7WUFDSUMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsR0FBRztZQUNIQyxHQUFHO1lBQ0hDLFNBQVM7UUFDYjtRQUNBO1lBQ0lMLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JHLFNBQVM7UUFDYjtRQUNBO1lBQ0lMLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JHLFNBQVM7UUFDYjtRQUNBO1lBQ0lMLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JHLFNBQVM7UUFDYjtRQUNBO1lBQ0lMLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxRQUFRO1lBQ1JHLFNBQVM7UUFDYjtLQUNIO0lBRUQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdsQiwrQ0FBUUEsQ0FBQ1U7SUFDekMsSUFBSVM7SUFFSkMsUUFBUUMsR0FBRyxDQUFDSjtJQUNabEIsZ0RBQVNBLENBQUM7UUFDTm9CLE9BQU9iLGdEQUFTQSxDQUFDZ0IsSUFBSTtRQUNyQkgsS0FBS0ksTUFBTSxDQUFDO0lBQ2hCO0lBRUEsTUFBTUMsVUFBVXZCLDZDQUFNQTtJQUN0QixNQUFNd0IsZUFBZXhCLDZDQUFNQSxDQUFDO0lBRTVCRixnREFBU0EsQ0FBQztRQUNOLElBQUksQ0FBQ3lCLFFBQVFFLE9BQU8sRUFBRTtZQUNsQiw2QkFBNkI7WUFDN0JGLFFBQVFFLE9BQU8sR0FBRztRQUN0QixPQUFPO1lBQ0gsOEJBQThCO1lBQzlCLElBQUlELGFBQWFDLE9BQU8sRUFBRTtnQkFDdEJQLEtBQUtRLFVBQVUsQ0FBQyxJQUF5QixPQUFyQkYsYUFBYUMsT0FBTztnQkFDeENELGFBQWFDLE9BQU8sR0FBRztZQUMzQjtRQUNKO0lBQ0o7SUFFQSxNQUFNRSxnQkFBZ0I7UUFDbEIsTUFBTUMsY0FBYztlQUFJWjtTQUFTO1FBQ2pDLElBQUlhLGVBQWVELFlBQVlFLEdBQUcsQ0FBQ0MsQ0FBQUEsVUFBV0EsUUFBUXJCLEdBQUc7UUFDekQsSUFBSXNCLFVBQVVDLEtBQUtDLEdBQUcsSUFBSUwsZ0JBQWdCO1FBRTFDRCxZQUFZTyxJQUFJLENBQUM7WUFDYnpCLEtBQUtzQjtZQUNMckIsT0FBTztZQUNQQyxRQUFRO1lBQ1JHLFNBQVMsUUFBZ0IsT0FBUmlCO1FBQ3JCO1FBRUFmLFlBQVlXO1FBQ1pKLGFBQWFDLE9BQU8sR0FBR087SUFDM0I7SUFFQSxNQUFNSSxrQkFBa0IsQ0FBQ0MsS0FBSzNCO1FBQzFCUSxLQUFLb0IsWUFBWSxDQUFDRCxJQUFJWixPQUFPLEVBQUU7UUFDL0IsTUFBTUcsY0FBYztlQUFJWjtTQUFTO1FBQ2pDLElBQUl1QixjQUFjWCxZQUFZWSxJQUFJLENBQUMsQ0FBQ1QsVUFBWUEsUUFBUXJCLEdBQUcsSUFBSUE7UUFDL0QsSUFBSStCLFlBQVliLFlBQVljLE9BQU8sQ0FBQ0g7UUFDcENYLFlBQVllLE1BQU0sQ0FBQ0YsV0FBVztRQUM5QnhCLFlBQVlXO0lBQ2hCO0lBRUEscUJBQ0ksOERBQUNnQjtRQUFJQyxXQUFXdkMsOEVBQWdCOzswQkFDNUIsOERBQUNzQztnQkFBSUMsV0FBV3ZDLHlFQUFXOztrQ0FDdkIsOERBQUNzQzt3QkFBSUMsV0FBV3ZDLDJFQUFhOzs7Ozs7a0NBQzdCLDhEQUFDMkM7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQU9DLE1BQUs7d0JBQVNDLFNBQVN6QjtrQ0FBZTs7Ozs7O2tDQUM5Qyw4REFBQ3VCO3dCQUFPQyxNQUFLO3dCQUFTQyxTQUFTekI7a0NBQWU7Ozs7OztrQ0FDOUMsOERBQUN1Qjt3QkFBT0MsTUFBSzt3QkFBU0MsU0FBU3pCO2tDQUFlOzs7Ozs7Ozs7Ozs7MEJBRWxELDhEQUFDaUI7Z0JBQUlDLFdBQVd2Qyx5RUFBVzs7a0NBQ3ZCLDhEQUFDc0M7d0JBQUlDLFdBQVd2QywyRUFBYTtrQ0FDekIsNEVBQUNnRDtzQ0FBRzs7Ozs7Ozs7Ozs7a0NBRVIsOERBQUNWO3dCQUFJQyxXQUFXdkMsdUZBQXlCO2tDQUNyQyw0RUFBQ3NDOzRCQUFJQyxXQUFXLGNBQStCLE9BQWpCdkMsOEVBQWdCO3NDQUN6Q1UsU0FBU2MsR0FBRyxDQUFDLENBQUMyQixXQUFXQyxzQkFDdEIsOERBQUN4RCx1RUFBYUE7b0NBQ1Z5RCxPQUFPRixVQUFVMUMsT0FBTztvQ0FDeEI2QyxTQUFTSCxVQUFVOUMsS0FBSztvQ0FDeEJrRCxVQUFVSixVQUFVN0MsTUFBTTtvQ0FDMUJrRCxLQUFLTCxVQUFVNUMsQ0FBQztvQ0FDaEJrRCxLQUFLTixVQUFVM0MsQ0FBQztvQ0FFaEJrRCxNQUFNUCxVQUFVL0MsR0FBRztvQ0FDbkJ1RCxhQUFhLENBQUM1QixNQUFRRCxnQkFBZ0JDLEtBQUtvQixVQUFVL0MsR0FBRzs7c0RBQ3hELDhEQUFDd0Q7c0RBQUdULFVBQVUxQyxPQUFPOzs7Ozs7c0RBQ3JCLDhEQUFDWCxxRUFBWUE7Ozs7OzttQ0FKUnFELFVBQVUvQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZbEQ7R0F4SE1IO0tBQUFBO0FBMEhOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR3JpZFN0YWNrUGFuZWwvR3JpZFN0YWNrUGFuZWwuanM/ZDFiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdyaWRTdGFja1RpbGUgZnJvbSAnLi4vR3JpZFN0YWNrVGlsZS9HcmlkU3RhY2tUaWxlLmpzJztcclxuaW1wb3J0IFRlc3RDb250ZW50IGZyb20gJy4uL1Rlc3RDb250ZW50L1Rlc3RDb250ZW50LmpzJztcclxuaW1wb3J0IFRlc3RDb250ZW50MiBmcm9tICcuLi9UZXN0Q29udGVudDIvVGVzdENvbnRlbnQyLmpzJztcclxuaW1wb3J0IHsgR3JpZFN0YWNrIH0gZnJvbSAnZ3JpZHN0YWNrJztcclxuaW1wb3J0ICdncmlkc3RhY2svZGlzdC9ncmlkc3RhY2suY3NzJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0dyaWRTdGFja1BhbmVsLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IEdyaWRTdGFja1BhbmVsID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsVGlsZURhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6IDAsXHJcbiAgICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEsXHJcbiAgICAgICAgICAgIHg6IDIsXHJcbiAgICAgICAgICAgIHk6IDIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICd0aWxlIDAnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogMSxcclxuICAgICAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgICAgIGhlaWdodDogMixcclxuICAgICAgICAgICAgY29udGVudDogJ3RpbGUgMSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAga2V5OiAyLFxyXG4gICAgICAgICAgICB3aWR0aDogMyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAxLFxyXG4gICAgICAgICAgICBjb250ZW50OiAndGlsZSAyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBrZXk6IDMsXHJcbiAgICAgICAgICAgIHdpZHRoOiA0LFxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICd0aWxlIDMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGtleTogNCxcclxuICAgICAgICAgICAgd2lkdGg6IDUsXHJcbiAgICAgICAgICAgIGhlaWdodDogMSxcclxuICAgICAgICAgICAgY29udGVudDogJ3RpbGUgNCdcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IFt0aWxlRGF0YSwgc2V0VGlsZURhdGFdID0gdXNlU3RhdGUoaW5pdGlhbFRpbGVEYXRhKTtcclxuICAgIGxldCBncmlkO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRpbGVEYXRhKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ3JpZCA9IEdyaWRTdGFjay5pbml0KCk7XHJcbiAgICAgICAgZ3JpZC5tYXJnaW4oJzEycHgnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IG1vdW50ZWQgPSB1c2VSZWYoKTtcclxuICAgIGNvbnN0IGxhc3RLZXlBZGRlZCA9IHVzZVJlZihudWxsKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghbW91bnRlZC5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIC8vIGRvIGNvbXBvbmVudERpZE1vdW50IGxvZ2ljXHJcbiAgICAgICAgICAgIG1vdW50ZWQuY3VycmVudCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gZG8gY29tcG9uZW50RGlkVXBkYXRlIGxvZ2ljXHJcbiAgICAgICAgICAgIGlmIChsYXN0S2V5QWRkZWQuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC5tYWtlV2lkZ2V0KGAjJHtsYXN0S2V5QWRkZWQuY3VycmVudH1gKTtcclxuICAgICAgICAgICAgICAgIGxhc3RLZXlBZGRlZC5jdXJyZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUFkZFRpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3VGlsZURhdGEgPSBbLi4udGlsZURhdGFdO1xyXG4gICAgICAgIHZhciBleGlzdGluZ0tleXMgPSBuZXdUaWxlRGF0YS5tYXAoZWxlbWVudCA9PiBlbGVtZW50LmtleSk7XHJcbiAgICAgICAgdmFyIG5leHRLZXkgPSBNYXRoLm1heCguLi5leGlzdGluZ0tleXMpICsgMTtcclxuXHJcbiAgICAgICAgbmV3VGlsZURhdGEucHVzaCh7XHJcbiAgICAgICAgICAgIGtleTogbmV4dEtleSxcclxuICAgICAgICAgICAgd2lkdGg6IDEsXHJcbiAgICAgICAgICAgIGhlaWdodDogMSxcclxuICAgICAgICAgICAgY29udGVudDogYHRpbGUgJHtuZXh0S2V5fWBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0VGlsZURhdGEobmV3VGlsZURhdGEpO1xyXG4gICAgICAgIGxhc3RLZXlBZGRlZC5jdXJyZW50ID0gbmV4dEtleTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVUaWxlQ2xvc2UgPSAocmVmLCBrZXkpID0+IHtcclxuICAgICAgICBncmlkLnJlbW92ZVdpZGdldChyZWYuY3VycmVudCwgZmFsc2UpO1xyXG4gICAgICAgIGNvbnN0IG5ld1RpbGVEYXRhID0gWy4uLnRpbGVEYXRhXTtcclxuICAgICAgICB2YXIgY3VycmVudFRpbGUgPSBuZXdUaWxlRGF0YS5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LmtleSA9PSBrZXkpO1xyXG4gICAgICAgIHZhciB0aWxlSW5kZXggPSBuZXdUaWxlRGF0YS5pbmRleE9mKGN1cnJlbnRUaWxlKTtcclxuICAgICAgICBuZXdUaWxlRGF0YS5zcGxpY2UodGlsZUluZGV4LCAxKTtcclxuICAgICAgICBzZXRUaWxlRGF0YShuZXdUaWxlRGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgyPkFkZCBXaWRnZXQ8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQWRkVGlsZX0+R3VhZ2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUFkZFRpbGV9PkJhciBDaGFydDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQWRkVGlsZX0+R3JhcGg8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPkFuYWx5dGljcyBEYXNoYm9hcmQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWRTdGFja0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BncmlkLXN0YWNrICR7c3R5bGVzLmdyaWRTdGFja31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RpbGVEYXRhLm1hcCgodGlsZURhdHVtLCBpbmRleCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkU3RhY2tUaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RpbGVEYXR1bS5jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdzV2lkdGg9e3RpbGVEYXR1bS53aWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnc0hlaWdodD17dGlsZURhdHVtLmhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnc1g9e3RpbGVEYXR1bS54fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdzWT17dGlsZURhdHVtLnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXt0aWxlRGF0dW0ua2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdzSWQ9e3RpbGVEYXR1bS5rZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2U9eyhyZWYpID0+IGhhbmRsZVRpbGVDbG9zZShyZWYsIHRpbGVEYXR1bS5rZXkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGlsZURhdHVtLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXN0Q29udGVudDI+PC9UZXN0Q29udGVudDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWRTdGFja1RpbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmlkU3RhY2tQYW5lbDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkNvbXBvbmVudCIsIkdyaWRTdGFja1RpbGUiLCJUZXN0Q29udGVudCIsIlRlc3RDb250ZW50MiIsIkdyaWRTdGFjayIsInN0eWxlcyIsIkdyaWRTdGFja1BhbmVsIiwicHJvcHMiLCJpbml0aWFsVGlsZURhdGEiLCJrZXkiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5IiwiY29udGVudCIsInRpbGVEYXRhIiwic2V0VGlsZURhdGEiLCJncmlkIiwiY29uc29sZSIsImxvZyIsImluaXQiLCJtYXJnaW4iLCJtb3VudGVkIiwibGFzdEtleUFkZGVkIiwiY3VycmVudCIsIm1ha2VXaWRnZXQiLCJoYW5kbGVBZGRUaWxlIiwibmV3VGlsZURhdGEiLCJleGlzdGluZ0tleXMiLCJtYXAiLCJlbGVtZW50IiwibmV4dEtleSIsIk1hdGgiLCJtYXgiLCJwdXNoIiwiaGFuZGxlVGlsZUNsb3NlIiwicmVmIiwicmVtb3ZlV2lkZ2V0IiwiY3VycmVudFRpbGUiLCJmaW5kIiwidGlsZUluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1lbnUiLCJoZWFkZXIiLCJoMiIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwibWFpbiIsImgxIiwiZ3JpZFN0YWNrQ29udGFpbmVyIiwiZ3JpZFN0YWNrIiwidGlsZURhdHVtIiwiaW5kZXgiLCJ0aXRsZSIsImdzV2lkdGgiLCJnc0hlaWdodCIsImdzWCIsImdzWSIsImdzSWQiLCJoYW5kbGVDbG9zZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GridStackPanel/GridStackPanel.js\n"));

/***/ })

});