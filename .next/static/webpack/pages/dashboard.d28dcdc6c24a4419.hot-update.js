/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[9].use[4]!./components/GridStackPanel/GridStackPanel.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[9].use[4]!./components/GridStackPanel/GridStackPanel.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"div.GridStackPanel_container__YCd9x {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: stretch;\\n  min-height: 100vh;\\n}\\ndiv.GridStackPanel_container__YCd9x > div.GridStackPanel_menu__WPlp9 {\\n  width: 200px;\\n  background-color: rgb(25, 28, 36);\\n}\\ndiv.GridStackPanel_container__YCd9x > div.GridStackPanel_main__FUYFx {\\n  flex-grow: 1;\\n  background-color: rgb(0, 0, 0);\\n}\\ndiv.GridStackPanel_container__YCd9x > div.GridStackPanel_main__FUYFx > div.GridStackPanel_header__DHNt8 {\\n  padding: 24px 24px 0 24px;\\n  display: flex;\\n  flex-direction: row;\\n}\\ndiv.GridStackPanel_container__YCd9x > div.GridStackPanel_main__FUYFx > div.GridStackPanel_header__DHNt8 h1 {\\n  font-size: 18px;\\n  -webkit-margin-before: 0;\\n          margin-block-start: 0;\\n  -webkit-margin-after: 0;\\n          margin-block-end: 0;\\n  -webkit-margin-start: 0;\\n          margin-inline-start: 0;\\n  -webkit-margin-end: 0;\\n          margin-inline-end: 0;\\n  font-weight: normal;\\n  flex-grow: 1;\\n}\\ndiv.GridStackPanel_container__YCd9x > div.GridStackPanel_main__FUYFx > div.GridStackPanel_gridStackContainer__mFwG5 {\\n  padding: 24px;\\n  flex-grow: 1;\\n}\\ndiv.GridStackPanel_container__YCd9x > div.GridStackPanel_main__FUYFx > div.GridStackPanel_gridStackContainer__mFwG5 > div.GridStackPanel_gridStack__flVqu {\\n  margin: -12px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://components/GridStackPanel/GridStackPanel.module.scss\",\"webpack://styles/common.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,aAAA;EACA,mBAAA;EACA,oBAAA;EACA,iBAAA;AADJ;AAII;EACI,YAAA;EACA,iCCJG;ADEX;AAOI;EACI,YAAA;EACA,8BCVI;ADKZ;AAOQ;EACI,yBAAA;EACA,aAAA;EACA,mBAAA;AALZ;AAOY;EACI,eCZH;EDaG,wBAAA;UAAA,qBAAA;EACA,uBAAA;UAAA,mBAAA;EACA,uBAAA;UAAA,sBAAA;EACA,qBAAA;UAAA,oBAAA;EACA,mBAAA;EACA,YAAA;AALhB;AAWQ;EACI,aC7BI;ED8BJ,YAAA;AATZ;AAWY;EACI,aAAA;AAThB\",\"sourcesContent\":[\"@import \\\"../../styles/common.scss\\\";\\r\\n\\r\\ndiv.container {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: stretch;\\r\\n    min-height: 100vh;\\r\\n\\r\\n\\r\\n    > div.menu {\\r\\n        width: 200px;\\r\\n        background-color: $grey-mid;\\r\\n        //border-right: 1px solid $grey-lighter;\\r\\n        //height: 100%;\\r\\n    }\\r\\n\\r\\n    > div.main {\\r\\n        flex-grow: 1;\\r\\n        background-color: $grey-dark;\\r\\n\\r\\n        > div.header {\\r\\n            padding: $large-padding $large-padding 0 $large-padding;\\r\\n            display: flex;\\r\\n            flex-direction: row;\\r\\n\\r\\n            h1 {\\r\\n                font-size: $large-font;\\r\\n                margin-block-start: 0;\\r\\n                margin-block-end: 0;\\r\\n                margin-inline-start: 0;\\r\\n                margin-inline-end: 0;\\r\\n                font-weight: normal;\\r\\n                flex-grow: 1;\\r\\n            }\\r\\n        }\\r\\n\\r\\n        \\r\\n\\r\\n        > div.gridStackContainer {\\r\\n            padding: $large-padding;\\r\\n            flex-grow: 1;\\r\\n\\r\\n            > div.gridStack {\\r\\n                margin: -12px;\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n}\",\"$black: #000;\\r\\n$white: #fff;\\r\\n$transparent: rgba(255, 255, 255, 0);\\r\\n\\r\\n$primary: #582c83;\\r\\n\\r\\n$grey-light: rgb(108, 114, 147);\\r\\n$grey-mid: rgb(25, 28, 36);\\r\\n$grey-dark: rgb(0, 0, 0);\\r\\n\\r\\n$large-padding: 24px;\\r\\n$standard-padding: 10px;\\r\\n$small-padding: 3px;\\r\\n\\r\\n$large-font: 18px;\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"GridStackPanel_container__YCd9x\",\n\t\"menu\": \"GridStackPanel_menu__WPlp9\",\n\t\"main\": \"GridStackPanel_main__FUYFx\",\n\t\"header\": \"GridStackPanel_header__DHNt8\",\n\t\"gridStackContainer\": \"GridStackPanel_gridStackContainer__mFwG5\",\n\t\"gridStack\": \"GridStackPanel_gridStack__flVqu\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzldLnVzZVs0XSEuL2NvbXBvbmVudHMvR3JpZFN0YWNrUGFuZWwvR3JpZFN0YWNrUGFuZWwubW9kdWxlLnNjc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzS0FBa0Y7QUFDNUg7QUFDQTtBQUNBLCtFQUErRSxrQkFBa0Isd0JBQXdCLHlCQUF5QixzQkFBc0IsR0FBRyx3RUFBd0UsaUJBQWlCLHNDQUFzQyxHQUFHLHdFQUF3RSxpQkFBaUIsbUNBQW1DLEdBQUcsMkdBQTJHLDhCQUE4QixrQkFBa0Isd0JBQXdCLEdBQUcsOEdBQThHLG9CQUFvQiw2QkFBNkIsa0NBQWtDLDRCQUE0QixnQ0FBZ0MsNEJBQTRCLG1DQUFtQywwQkFBMEIsaUNBQWlDLHdCQUF3QixpQkFBaUIsR0FBRyx1SEFBdUgsa0JBQWtCLGlCQUFpQixHQUFHLDZKQUE2SixrQkFBa0IsR0FBRyxPQUFPLG9KQUFvSixVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLCtEQUErRCx1QkFBdUIsc0JBQXNCLDRCQUE0Qiw2QkFBNkIsMEJBQTBCLDRCQUE0Qix5QkFBeUIsd0NBQXdDLG9EQUFvRCwyQkFBMkIsU0FBUyx3QkFBd0IseUJBQXlCLHlDQUF5Qyw4QkFBOEIsd0VBQXdFLDhCQUE4QixvQ0FBb0Msd0JBQXdCLDJDQUEyQywwQ0FBMEMsd0NBQXdDLDJDQUEyQyx5Q0FBeUMsd0NBQXdDLGlDQUFpQyxpQkFBaUIsYUFBYSwwREFBMEQsd0NBQXdDLDZCQUE2QixxQ0FBcUMsa0NBQWtDLGlCQUFpQixhQUFhLFNBQVMsS0FBSyxnQkFBZ0IsaUJBQWlCLHlDQUF5QywwQkFBMEIsd0NBQXdDLCtCQUErQiw2QkFBNkIsNkJBQTZCLDRCQUE0Qix3QkFBd0IsMEJBQTBCLG1CQUFtQjtBQUN0ekc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkU3RhY2tQYW5lbC9HcmlkU3RhY2tQYW5lbC5tb2R1bGUuc2Nzcz9hOGM0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuR3JpZFN0YWNrUGFuZWxfY29udGFpbmVyX19ZQ2Q5eCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbmRpdi5HcmlkU3RhY2tQYW5lbF9jb250YWluZXJfX1lDZDl4ID4gZGl2LkdyaWRTdGFja1BhbmVsX21lbnVfX1dQbHA5IHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgMjgsIDM2KTtcXG59XFxuZGl2LkdyaWRTdGFja1BhbmVsX2NvbnRhaW5lcl9fWUNkOXggPiBkaXYuR3JpZFN0YWNrUGFuZWxfbWFpbl9fRlVZRngge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbn1cXG5kaXYuR3JpZFN0YWNrUGFuZWxfY29udGFpbmVyX19ZQ2Q5eCA+IGRpdi5HcmlkU3RhY2tQYW5lbF9tYWluX19GVVlGeCA+IGRpdi5HcmlkU3RhY2tQYW5lbF9oZWFkZXJfX0RITnQ4IHtcXG4gIHBhZGRpbmc6IDI0cHggMjRweCAwIDI0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuZGl2LkdyaWRTdGFja1BhbmVsX2NvbnRhaW5lcl9fWUNkOXggPiBkaXYuR3JpZFN0YWNrUGFuZWxfbWFpbl9fRlVZRnggPiBkaXYuR3JpZFN0YWNrUGFuZWxfaGVhZGVyX19ESE50OCBoMSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICAtd2Via2l0LW1hcmdpbi1iZWZvcmU6IDA7XFxuICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXG4gIC13ZWJraXQtbWFyZ2luLWFmdGVyOiAwO1xcbiAgICAgICAgICBtYXJnaW4tYmxvY2stZW5kOiAwO1xcbiAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDA7XFxuICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XFxuICAtd2Via2l0LW1hcmdpbi1lbmQ6IDA7XFxuICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuZGl2LkdyaWRTdGFja1BhbmVsX2NvbnRhaW5lcl9fWUNkOXggPiBkaXYuR3JpZFN0YWNrUGFuZWxfbWFpbl9fRlVZRnggPiBkaXYuR3JpZFN0YWNrUGFuZWxfZ3JpZFN0YWNrQ29udGFpbmVyX19tRndHNSB7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5kaXYuR3JpZFN0YWNrUGFuZWxfY29udGFpbmVyX19ZQ2Q5eCA+IGRpdi5HcmlkU3RhY2tQYW5lbF9tYWluX19GVVlGeCA+IGRpdi5HcmlkU3RhY2tQYW5lbF9ncmlkU3RhY2tDb250YWluZXJfX21Gd0c1ID4gZGl2LkdyaWRTdGFja1BhbmVsX2dyaWRTdGFja19fZmxWcXUge1xcbiAgbWFyZ2luOiAtMTJweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL2NvbXBvbmVudHMvR3JpZFN0YWNrUGFuZWwvR3JpZFN0YWNrUGFuZWwubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvY29tbW9uLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBREo7QUFJSTtFQUNJLFlBQUE7RUFDQSxpQ0NKRztBREVYO0FBT0k7RUFDSSxZQUFBO0VBQ0EsOEJDVkk7QURLWjtBQU9RO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFMWjtBQU9ZO0VBQ0ksZUNaSDtFRGFHLHdCQUFBO1VBQUEscUJBQUE7RUFDQSx1QkFBQTtVQUFBLG1CQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtFQUNBLHFCQUFBO1VBQUEsb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFMaEI7QUFXUTtFQUNJLGFDN0JJO0VEOEJKLFlBQUE7QUFUWjtBQVdZO0VBQ0ksYUFBQTtBQVRoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvY29tbW9uLnNjc3NcXFwiO1xcclxcblxcclxcbmRpdi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuXFxyXFxuXFxyXFxuICAgID4gZGl2Lm1lbnUge1xcclxcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktbWlkO1xcclxcbiAgICAgICAgLy9ib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAkZ3JleS1saWdodGVyO1xcclxcbiAgICAgICAgLy9oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgPiBkaXYubWFpbiB7XFxyXFxuICAgICAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS1kYXJrO1xcclxcblxcclxcbiAgICAgICAgPiBkaXYuaGVhZGVyIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAkbGFyZ2UtcGFkZGluZyAkbGFyZ2UtcGFkZGluZyAwICRsYXJnZS1wYWRkaW5nO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHJcXG4gICAgICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGxhcmdlLWZvbnQ7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1zdGFydDogMDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMDtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBcXHJcXG5cXHJcXG4gICAgICAgID4gZGl2LmdyaWRTdGFja0NvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogJGxhcmdlLXBhZGRpbmc7XFxyXFxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcclxcblxcclxcbiAgICAgICAgICAgID4gZGl2LmdyaWRTdGFjayB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogLTEycHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiLFwiJGJsYWNrOiAjMDAwO1xcclxcbiR3aGl0ZTogI2ZmZjtcXHJcXG4kdHJhbnNwYXJlbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxyXFxuXFxyXFxuJHByaW1hcnk6ICM1ODJjODM7XFxyXFxuXFxyXFxuJGdyZXktbGlnaHQ6IHJnYigxMDgsIDExNCwgMTQ3KTtcXHJcXG4kZ3JleS1taWQ6IHJnYigyNSwgMjgsIDM2KTtcXHJcXG4kZ3JleS1kYXJrOiByZ2IoMCwgMCwgMCk7XFxyXFxuXFxyXFxuJGxhcmdlLXBhZGRpbmc6IDI0cHg7XFxyXFxuJHN0YW5kYXJkLXBhZGRpbmc6IDEwcHg7XFxyXFxuJHNtYWxsLXBhZGRpbmc6IDNweDtcXHJcXG5cXHJcXG4kbGFyZ2UtZm9udDogMThweDtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJHcmlkU3RhY2tQYW5lbF9jb250YWluZXJfX1lDZDl4XCIsXG5cdFwibWVudVwiOiBcIkdyaWRTdGFja1BhbmVsX21lbnVfX1dQbHA5XCIsXG5cdFwibWFpblwiOiBcIkdyaWRTdGFja1BhbmVsX21haW5fX0ZVWUZ4XCIsXG5cdFwiaGVhZGVyXCI6IFwiR3JpZFN0YWNrUGFuZWxfaGVhZGVyX19ESE50OFwiLFxuXHRcImdyaWRTdGFja0NvbnRhaW5lclwiOiBcIkdyaWRTdGFja1BhbmVsX2dyaWRTdGFja0NvbnRhaW5lcl9fbUZ3RzVcIixcblx0XCJncmlkU3RhY2tcIjogXCJHcmlkU3RhY2tQYW5lbF9ncmlkU3RhY2tfX2ZsVnF1XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[9].use[4]!./components/GridStackPanel/GridStackPanel.module.scss\n"));

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[9].use[4]!./components/GridStackTile/GridStackTile.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[9].use[4]!./components/GridStackTile/GridStackTile.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"div.GridStackTile_container__z5Q9L div.GridStackTile_content__S72Zi {\\n  background-color: rgb(25, 28, 36);\\n  border-radius: 6px;\\n}\\ndiv.GridStackTile_container__z5Q9L div.GridStackTile_content__S72Zi div.GridStackTile_header__LiSNF {\\n  padding: 2px 4px 2px 10px;\\n  display: flex;\\n  align-items: center;\\n  cursor: move;\\n}\\ndiv.GridStackTile_container__z5Q9L div.GridStackTile_content__S72Zi div.GridStackTile_header__LiSNF div.GridStackTile_title__J5mfc {\\n  flex-grow: 1;\\n  padding: 0;\\n  line-height: 24px;\\n  color: color(brand, dark-grey);\\n}\\ndiv.GridStackTile_container__z5Q9L div.GridStackTile_content__S72Zi div.GridStackTile_header__LiSNF button {\\n  padding: 0;\\n  height: 24px;\\n  width: 24px;\\n  z-index: inherit;\\n  background-color: transparent;\\n  border: 0;\\n  cursor: pointer;\\n  border-radius: 12px;\\n}\\ndiv.GridStackTile_container__z5Q9L div.GridStackTile_content__S72Zi div.GridStackTile_header__LiSNF button:hover {\\n  background-color: rgb(0, 0, 0);\\n}\\ndiv.GridStackTile_container__z5Q9L div.GridStackTile_content__S72Zi div.GridStackTile_header__LiSNF button svg {\\n  fill: rgb(108, 114, 147);\\n  color: #fff;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://components/GridStackTile/GridStackTile.module.scss\",\"webpack://styles/common.scss\"],\"names\":[],\"mappings\":\"AAGI;EACI,iCCGG;EDFH,kBAAA;AAFR;AAIQ;EAEI,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,YAAA;AAHZ;AAKY;EACI,YAAA;EACA,UAAA;EACA,iBAAA;EACA,8BAAA;AAHhB;AAMY;EACI,UAAA;EACA,YAAA;EACA,WAAA;EACA,gBAAA;EACA,6BAAA;EACA,SAAA;EACA,eAAA;EACA,mBAAA;AAJhB;AAMgB;EACI,8BCxBR;ADoBZ;AAOgB;EACI,wBC9BP;ED+BO,WCpCZ;AD+BR\",\"sourcesContent\":[\"@import \\\"../../styles/common.scss\\\";\\r\\n\\r\\ndiv.container {\\r\\n    div.content {\\r\\n        background-color: $grey-mid;\\r\\n        border-radius: 6px;\\r\\n        \\r\\n        div.header {\\r\\n            //border-bottom: 1px solid $grey-dark;\\r\\n            padding: 2px 4px 2px 10px;\\r\\n            display: flex;\\r\\n            align-items: center;\\r\\n            cursor: move;\\r\\n\\r\\n            div.title {\\r\\n                flex-grow: 1;\\r\\n                padding: 0;\\r\\n                line-height: 24px;\\r\\n                color: color(brand, dark-grey);\\r\\n            }\\r\\n\\r\\n            button {\\r\\n                padding: 0 ;\\r\\n                height: 24px;\\r\\n                width: 24px;\\r\\n                z-index: inherit;\\r\\n                background-color: transparent;\\r\\n                border: 0;\\r\\n                cursor: pointer;\\r\\n                border-radius: 12px;\\r\\n\\r\\n                &:hover  {\\r\\n                    background-color: $grey-dark;\\r\\n                }\\r\\n    \\r\\n                svg {\\r\\n                    fill: $grey-light;\\r\\n                    color: $white;\\r\\n                }\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n}\\r\\n\",\"$black: #000;\\r\\n$white: #fff;\\r\\n$transparent: rgba(255, 255, 255, 0);\\r\\n\\r\\n$primary: #582c83;\\r\\n\\r\\n$grey-light: rgb(108, 114, 147);\\r\\n$grey-mid: rgb(25, 28, 36);\\r\\n$grey-dark: rgb(0, 0, 0);\\r\\n\\r\\n$large-padding: 24px;\\r\\n$standard-padding: 10px;\\r\\n$small-padding: 3px;\\r\\n\\r\\n$large-font: 18px;\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"GridStackTile_container__z5Q9L\",\n\t\"content\": \"GridStackTile_content__S72Zi\",\n\t\"header\": \"GridStackTile_header__LiSNF\",\n\t\"title\": \"GridStackTile_title__J5mfc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzldLnVzZVs0XSEuL2NvbXBvbmVudHMvR3JpZFN0YWNrVGlsZS9HcmlkU3RhY2tUaWxlLm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsc0tBQWtGO0FBQzVIO0FBQ0E7QUFDQSwrR0FBK0csc0NBQXNDLHVCQUF1QixHQUFHLHVHQUF1Ryw4QkFBOEIsa0JBQWtCLHdCQUF3QixpQkFBaUIsR0FBRyxzSUFBc0ksaUJBQWlCLGVBQWUsc0JBQXNCLG1DQUFtQyxHQUFHLDhHQUE4RyxlQUFlLGlCQUFpQixnQkFBZ0IscUJBQXFCLGtDQUFrQyxjQUFjLG9CQUFvQix3QkFBd0IsR0FBRyxvSEFBb0gsbUNBQW1DLEdBQUcsa0hBQWtILDZCQUE2QixnQkFBZ0IsR0FBRyxPQUFPLGtKQUFrSixXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxZQUFZLCtEQUErRCx1QkFBdUIscUJBQXFCLHdDQUF3QywrQkFBK0Isb0NBQW9DLHNEQUFzRCwwQ0FBMEMsOEJBQThCLG9DQUFvQyw2QkFBNkIsK0JBQStCLGlDQUFpQywrQkFBK0Isc0NBQXNDLG1EQUFtRCxpQkFBaUIsNEJBQTRCLGdDQUFnQyxpQ0FBaUMsZ0NBQWdDLHFDQUFxQyxrREFBa0QsOEJBQThCLG9DQUFvQyx3Q0FBd0Msa0NBQWtDLHFEQUFxRCxxQkFBcUIsaUNBQWlDLDBDQUEwQyxzQ0FBc0MscUJBQXFCLGlCQUFpQixhQUFhLFNBQVMsS0FBSyxvQkFBb0IsaUJBQWlCLHlDQUF5QywwQkFBMEIsd0NBQXdDLCtCQUErQiw2QkFBNkIsNkJBQTZCLDRCQUE0Qix3QkFBd0IsMEJBQTBCLG1CQUFtQjtBQUN2bEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dyaWRTdGFja1RpbGUvR3JpZFN0YWNrVGlsZS5tb2R1bGUuc2Nzcz9hYzM4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJkaXYuR3JpZFN0YWNrVGlsZV9jb250YWluZXJfX3o1UTlMIGRpdi5HcmlkU3RhY2tUaWxlX2NvbnRlbnRfX1M3MlppIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNSwgMjgsIDM2KTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuZGl2LkdyaWRTdGFja1RpbGVfY29udGFpbmVyX196NVE5TCBkaXYuR3JpZFN0YWNrVGlsZV9jb250ZW50X19TNzJaaSBkaXYuR3JpZFN0YWNrVGlsZV9oZWFkZXJfX0xpU05GIHtcXG4gIHBhZGRpbmc6IDJweCA0cHggMnB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogbW92ZTtcXG59XFxuZGl2LkdyaWRTdGFja1RpbGVfY29udGFpbmVyX196NVE5TCBkaXYuR3JpZFN0YWNrVGlsZV9jb250ZW50X19TNzJaaSBkaXYuR3JpZFN0YWNrVGlsZV9oZWFkZXJfX0xpU05GIGRpdi5HcmlkU3RhY2tUaWxlX3RpdGxlX19KNW1mYyB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogY29sb3IoYnJhbmQsIGRhcmstZ3JleSk7XFxufVxcbmRpdi5HcmlkU3RhY2tUaWxlX2NvbnRhaW5lcl9fejVROUwgZGl2LkdyaWRTdGFja1RpbGVfY29udGVudF9fUzcyWmkgZGl2LkdyaWRTdGFja1RpbGVfaGVhZGVyX19MaVNORiBidXR0b24ge1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMjRweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgei1pbmRleDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuZGl2LkdyaWRTdGFja1RpbGVfY29udGFpbmVyX196NVE5TCBkaXYuR3JpZFN0YWNrVGlsZV9jb250ZW50X19TNzJaaSBkaXYuR3JpZFN0YWNrVGlsZV9oZWFkZXJfX0xpU05GIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxufVxcbmRpdi5HcmlkU3RhY2tUaWxlX2NvbnRhaW5lcl9fejVROUwgZGl2LkdyaWRTdGFja1RpbGVfY29udGVudF9fUzcyWmkgZGl2LkdyaWRTdGFja1RpbGVfaGVhZGVyX19MaVNORiBidXR0b24gc3ZnIHtcXG4gIGZpbGw6IHJnYigxMDgsIDExNCwgMTQ3KTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9HcmlkU3RhY2tUaWxlL0dyaWRTdGFja1RpbGUubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvY29tbW9uLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0k7RUFDSSxpQ0NHRztFREZILGtCQUFBO0FBRlI7QUFJUTtFQUVJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUhaO0FBS1k7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFIaEI7QUFNWTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSmhCO0FBTWdCO0VBQ0ksOEJDeEJSO0FEb0JaO0FBT2dCO0VBQ0ksd0JDOUJQO0VEK0JPLFdDcENaO0FEK0JSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4uLy4uL3N0eWxlcy9jb21tb24uc2Nzc1xcXCI7XFxyXFxuXFxyXFxuZGl2LmNvbnRhaW5lciB7XFxyXFxuICAgIGRpdi5jb250ZW50IHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LW1pZDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgZGl2LmhlYWRlciB7XFxyXFxuICAgICAgICAgICAgLy9ib3JkZXItYm90dG9tOiAxcHggc29saWQgJGdyZXktZGFyaztcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAycHggNHB4IDJweCAxMHB4O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IG1vdmU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgZGl2LnRpdGxlIHtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcXHJcXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yKGJyYW5kLCBkYXJrLWdyZXkpO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICBidXR0b24ge1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDtcXHJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgICAgICAgICAgICAgei1pbmRleDogaW5oZXJpdDtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAmOmhvdmVyICB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JleS1kYXJrO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgIFxcclxcbiAgICAgICAgICAgICAgICBzdmcge1xcclxcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogJGdyZXktbGlnaHQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVxcclxcblwiLFwiJGJsYWNrOiAjMDAwO1xcclxcbiR3aGl0ZTogI2ZmZjtcXHJcXG4kdHJhbnNwYXJlbnQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxyXFxuXFxyXFxuJHByaW1hcnk6ICM1ODJjODM7XFxyXFxuXFxyXFxuJGdyZXktbGlnaHQ6IHJnYigxMDgsIDExNCwgMTQ3KTtcXHJcXG4kZ3JleS1taWQ6IHJnYigyNSwgMjgsIDM2KTtcXHJcXG4kZ3JleS1kYXJrOiByZ2IoMCwgMCwgMCk7XFxyXFxuXFxyXFxuJGxhcmdlLXBhZGRpbmc6IDI0cHg7XFxyXFxuJHN0YW5kYXJkLXBhZGRpbmc6IDEwcHg7XFxyXFxuJHNtYWxsLXBhZGRpbmc6IDNweDtcXHJcXG5cXHJcXG4kbGFyZ2UtZm9udDogMThweDtcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJHcmlkU3RhY2tUaWxlX2NvbnRhaW5lcl9fejVROUxcIixcblx0XCJjb250ZW50XCI6IFwiR3JpZFN0YWNrVGlsZV9jb250ZW50X19TNzJaaVwiLFxuXHRcImhlYWRlclwiOiBcIkdyaWRTdGFja1RpbGVfaGVhZGVyX19MaVNORlwiLFxuXHRcInRpdGxlXCI6IFwiR3JpZFN0YWNrVGlsZV90aXRsZV9fSjVtZmNcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[9].use[4]!./components/GridStackTile/GridStackTile.module.scss\n"));

/***/ })

});