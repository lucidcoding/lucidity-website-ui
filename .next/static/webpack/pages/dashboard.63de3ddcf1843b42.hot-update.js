/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[9].use[4]!./components/GridStackTile/GridStackTile.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[9].use[4]!./components/GridStackTile/GridStackTile.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"div.GridStackTile_container__z5Q9L div.GridStackTile_content__S72Zi {\\n  background-color: rgb(25, 28, 36);\\n  border-radius: 4px;\\n}\\ndiv.GridStackTile_container__z5Q9L div.GridStackTile_content__S72Zi div.GridStackTile_header__LiSNF {\\n  padding: 2px 4px 2px 10px;\\n  display: flex;\\n  align-items: center;\\n  cursor: move;\\n}\\ndiv.GridStackTile_container__z5Q9L div.GridStackTile_content__S72Zi div.GridStackTile_header__LiSNF div.GridStackTile_title__J5mfc {\\n  flex-grow: 1;\\n  padding: 0;\\n  line-height: 24px;\\n  color: color(brand, dark-grey);\\n}\\ndiv.GridStackTile_container__z5Q9L div.GridStackTile_content__S72Zi div.GridStackTile_header__LiSNF button {\\n  padding: 0;\\n  height: 24px;\\n  width: 24px;\\n  z-index: inherit;\\n  background-color: transparent;\\n  border: 0;\\n  cursor: pointer;\\n}\\ndiv.GridStackTile_container__z5Q9L div.GridStackTile_content__S72Zi div.GridStackTile_header__LiSNF button:hover {\\n  background-color: rgb(0, 0, 0);\\n}\\ndiv.GridStackTile_container__z5Q9L div.GridStackTile_content__S72Zi div.GridStackTile_header__LiSNF button svg {\\n  fill: rgb(108, 114, 147);\\n  color: #fff;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://components/GridStackTile/GridStackTile.module.scss\",\"webpack://styles/common.scss\"],\"names\":[],\"mappings\":\"AAGI;EACI,iCCGG;EDFH,kBAAA;AAFR;AAIQ;EAEI,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;AAHZ;AAKY;EACI,YAAA;EACA,UAAA;EACA,iBAAA;EACA,8BAAA;AAHhB;AAMY;EACI,UAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,6BAAA;EACA,SAAA;EACA,eAAA;AAJhB;AAMgB;EACI,8BCvBR;ADmBZ;AAOgB;EACI,wBC7BP;ED8BO,WCnCZ;AD8BR\",\"sourcesContent\":[\"@import \\\"../../styles/common.scss\\\";\\r\\n\\r\\ndiv.container {\\r\\n    div.content {\\r\\n        background-color: $grey-mid;\\r\\n        border-radius: 4px;\\r\\n        \\r\\n        div.header {\\r\\n            //border-bottom: 1px solid $grey-dark;\\r\\n            padding: 2px 4px 2px 10px;\\r\\n            display: flex;\\r\\n            align-items: center;\\r\\n            cursor: move;\\r\\n\\r\\n            div.title {\\r\\n                flex-grow: 1;\\r\\n                padding: 0;\\r\\n                line-height: 24px;\\r\\n                color: color(brand, dark-grey);\\r\\n            }\\r\\n\\r\\n            button {\\r\\n                padding: 0 ;\\r\\n                height: 24px;\\r\\n                width: 24px;\\r\\n                z-index: inherit;\\r\\n                background-color: transparent;\\r\\n                border: 0;\\r\\n                cursor: pointer;\\r\\n\\r\\n                &:hover  {\\r\\n                    background-color: $grey-dark;\\r\\n                }\\r\\n    \\r\\n                svg {\\r\\n                    fill: $grey-light;\\r\\n                    color: $white;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\",\"$black: #000;\\r\\n$white: #fff;\\r\\n$transparent: rgba(255, 255, 255, 0);\\r\\n\\r\\n$primary: #582c83;\\r\\n\\r\\n$grey-light: rgb(108, 114, 147);\\r\\n$grey-mid: rgb(25, 28, 36);\\r\\n$grey-dark: rgb(0, 0, 0);\\r\\n\\r\\n$large-padding: 25px;\\r\\n$standard-padding: 10px;\\r\\n$small-padding: 3px;\\r\\n\\r\\n$large-font: 16pt;\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"GridStackTile_container__z5Q9L\",\n\t\"content\": \"GridStackTile_content__S72Zi\",\n\t\"header\": \"GridStackTile_header__LiSNF\",\n\t\"title\": \"GridStackTile_title__J5mfc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzldLnVzZVs0XSEuL2NvbXBvbmVudHMvR3JpZFN0YWNrVGlsZS9HcmlkU3RhY2tUaWxlLm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsc0tBQWtGO0FBQzVIO0FBQ0E7QUFDQSwrR0FBK0csc0NBQXNDLHVCQUF1QixHQUFHLHVHQUF1Ryw4QkFBOEIsa0JBQWtCLHdCQUF3QixpQkFBaUIsR0FBRyxzSUFBc0ksaUJBQWlCLGVBQWUsc0JBQXNCLG1DQUFtQyxHQUFHLDhHQUE4RyxlQUFlLGlCQUFpQixnQkFBZ0IscUJBQXFCLGtDQUFrQyxjQUFjLG9CQUFvQixHQUFHLG9IQUFvSCxtQ0FBbUMsR0FBRyxrSEFBa0gsNkJBQTZCLGdCQUFnQixHQUFHLE9BQU8sa0pBQWtKLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLCtEQUErRCx1QkFBdUIscUJBQXFCLHdDQUF3QywrQkFBK0Isb0NBQW9DLHNEQUFzRCwwQ0FBMEMsOEJBQThCLG9DQUFvQyw2QkFBNkIsK0JBQStCLGlDQUFpQywrQkFBK0Isc0NBQXNDLG1EQUFtRCxpQkFBaUIsNEJBQTRCLGdDQUFnQyxpQ0FBaUMsZ0NBQWdDLHFDQUFxQyxrREFBa0QsOEJBQThCLG9DQUFvQyxrQ0FBa0MscURBQXFELHFCQUFxQixpQ0FBaUMsMENBQTBDLHNDQUFzQyxxQkFBcUIsaUJBQWlCLGFBQWEsU0FBUyxLQUFLLG9CQUFvQixpQkFBaUIseUNBQXlDLDBCQUEwQix3Q0FBd0MsK0JBQStCLDZCQUE2Qiw2QkFBNkIsNEJBQTRCLHdCQUF3QiwwQkFBMEIsbUJBQW1CO0FBQzVnRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR3JpZFN0YWNrVGlsZS9HcmlkU3RhY2tUaWxlLm1vZHVsZS5zY3NzP2FjMzgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImRpdi5HcmlkU3RhY2tUaWxlX2NvbnRhaW5lcl9fejVROUwgZGl2LkdyaWRTdGFja1RpbGVfY29udGVudF9fUzcyWmkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1LCAyOCwgMzYpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5kaXYuR3JpZFN0YWNrVGlsZV9jb250YWluZXJfX3o1UTlMIGRpdi5HcmlkU3RhY2tUaWxlX2NvbnRlbnRfX1M3MlppIGRpdi5HcmlkU3RhY2tUaWxlX2hlYWRlcl9fTGlTTkYge1xcbiAgcGFkZGluZzogMnB4IDRweCAycHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbn1cXG5kaXYuR3JpZFN0YWNrVGlsZV9jb250YWluZXJfX3o1UTlMIGRpdi5HcmlkU3RhY2tUaWxlX2NvbnRlbnRfX1M3MlppIGRpdi5HcmlkU3RhY2tUaWxlX2hlYWRlcl9fTGlTTkYgZGl2LkdyaWRTdGFja1RpbGVfdGl0bGVfX0o1bWZjIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGNvbG9yOiBjb2xvcihicmFuZCwgZGFyay1ncmV5KTtcXG59XFxuZGl2LkdyaWRTdGFja1RpbGVfY29udGFpbmVyX196NVE5TCBkaXYuR3JpZFN0YWNrVGlsZV9jb250ZW50X19TNzJaaSBkaXYuR3JpZFN0YWNrVGlsZV9oZWFkZXJfX0xpU05GIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICB6LWluZGV4OiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmRpdi5HcmlkU3RhY2tUaWxlX2NvbnRhaW5lcl9fejVROUwgZGl2LkdyaWRTdGFja1RpbGVfY29udGVudF9fUzcyWmkgZGl2LkdyaWRTdGFja1RpbGVfaGVhZGVyX19MaVNORiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbn1cXG5kaXYuR3JpZFN0YWNrVGlsZV9jb250YWluZXJfX3o1UTlMIGRpdi5HcmlkU3RhY2tUaWxlX2NvbnRlbnRfX1M3MlppIGRpdi5HcmlkU3RhY2tUaWxlX2hlYWRlcl9fTGlTTkYgYnV0dG9uIHN2ZyB7XFxuICBmaWxsOiByZ2IoMTA4LCAxMTQsIDE0Nyk7XFxuICBjb2xvcjogI2ZmZjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvR3JpZFN0YWNrVGlsZS9HcmlkU3RhY2tUaWxlLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL2NvbW1vbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdJO0VBQ0ksaUNDR0c7RURGSCxrQkFBQTtBQUZSO0FBSVE7RUFFSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFIWjtBQUtZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBSGhCO0FBTVk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFKaEI7QUFNZ0I7RUFDSSw4QkN2QlI7QURtQlo7QUFPZ0I7RUFDSSx3QkM3QlA7RUQ4Qk8sV0NuQ1o7QUQ4QlJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi4vLi4vc3R5bGVzL2NvbW1vbi5zY3NzXFxcIjtcXHJcXG5cXHJcXG5kaXYuY29udGFpbmVyIHtcXHJcXG4gICAgZGl2LmNvbnRlbnQge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktbWlkO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAgICAgXFxyXFxuICAgICAgICBkaXYuaGVhZGVyIHtcXHJcXG4gICAgICAgICAgICAvL2JvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZ3JleS1kYXJrO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA0cHggMnB4IDEwcHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogbW92ZTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBkaXYudGl0bGUge1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IoYnJhbmQsIGRhcmstZ3JleSk7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgO1xcclxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICAgICAgICAgICAgICB6LWluZGV4OiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICY6aG92ZXIgIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LWRhcms7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgICAgIHN2ZyB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmaWxsOiAkZ3JleS1saWdodDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXCIsXCIkYmxhY2s6ICMwMDA7XFxyXFxuJHdoaXRlOiAjZmZmO1xcclxcbiR0cmFuc3BhcmVudDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXHJcXG5cXHJcXG4kcHJpbWFyeTogIzU4MmM4MztcXHJcXG5cXHJcXG4kZ3JleS1saWdodDogcmdiKDEwOCwgMTE0LCAxNDcpO1xcclxcbiRncmV5LW1pZDogcmdiKDI1LCAyOCwgMzYpO1xcclxcbiRncmV5LWRhcms6IHJnYigwLCAwLCAwKTtcXHJcXG5cXHJcXG4kbGFyZ2UtcGFkZGluZzogMjVweDtcXHJcXG4kc3RhbmRhcmQtcGFkZGluZzogMTBweDtcXHJcXG4kc21hbGwtcGFkZGluZzogM3B4O1xcclxcblxcclxcbiRsYXJnZS1mb250OiAxNnB0O1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkdyaWRTdGFja1RpbGVfY29udGFpbmVyX196NVE5TFwiLFxuXHRcImNvbnRlbnRcIjogXCJHcmlkU3RhY2tUaWxlX2NvbnRlbnRfX1M3MlppXCIsXG5cdFwiaGVhZGVyXCI6IFwiR3JpZFN0YWNrVGlsZV9oZWFkZXJfX0xpU05GXCIsXG5cdFwidGl0bGVcIjogXCJHcmlkU3RhY2tUaWxlX3RpdGxlX19KNW1mY1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[9].use[4]!./components/GridStackTile/GridStackTile.module.scss\n"));

/***/ })

});