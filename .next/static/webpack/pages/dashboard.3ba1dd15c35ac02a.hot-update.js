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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"div.GridStackPanel_container__YCd9x {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: stretch;\\n  height: 100%;\\n}\\ndiv.GridStackPanel_container__YCd9x > div.GridStackPanel_menu__WPlp9 {\\n  width: 200px;\\n  background-color: #383838;\\n}\\ndiv.GridStackPanel_container__YCd9x > div.GridStackPanel_main__FUYFx {\\n  flex-grow: 1;\\n  background-color: #151515;\\n}\\ndiv.GridStackPanel_container__YCd9x > div.GridStackPanel_main__FUYFx > div.GridStackPanel_header__DHNt8 {\\n  padding: 25px;\\n  display: flex;\\n  flex-direction: row;\\n}\\ndiv.GridStackPanel_container__YCd9x > div.GridStackPanel_main__FUYFx > div.GridStackPanel_header__DHNt8 h1 {\\n  font-size: 16pt;\\n  -webkit-margin-before: 0;\\n          margin-block-start: 0;\\n  -webkit-margin-after: 0;\\n          margin-block-end: 0;\\n  -webkit-margin-start: 0;\\n          margin-inline-start: 0;\\n  -webkit-margin-end: 0;\\n          margin-inline-end: 0;\\n  font-weight: bold;\\n  flex-grow: 1;\\n}\\ndiv.GridStackPanel_container__YCd9x > div.GridStackPanel_main__FUYFx > div.GridStackPanel_gridStackContainer__mFwG5 {\\n  padding: 25px;\\n  height: 100%;\\n  flex-grow: 1;\\n}\\ndiv.GridStackPanel_container__YCd9x > div.GridStackPanel_main__FUYFx > div.GridStackPanel_gridStackContainer__mFwG5 > div.GridStackPanel_gridStack__flVqu {\\n  margin: -3px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://components/GridStackPanel/GridStackPanel.module.scss\",\"webpack://styles/common.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,aAAA;EACA,mBAAA;EACA,oBAAA;EACA,YAAA;AADJ;AAGI;EACI,YAAA;EACA,yBCHG;ADEX;AAKI;EACI,YAAA;EACA,yBCRI;ADKZ;AAKQ;EACI,aCTI;EDUJ,aAAA;EACA,mBAAA;AAHZ;AAKY;EACI,eCVH;EDWG,wBAAA;UAAA,qBAAA;EACA,uBAAA;UAAA,mBAAA;EACA,uBAAA;UAAA,sBAAA;EACA,qBAAA;UAAA,oBAAA;EACA,iBAAA;EACA,YAAA;AAHhB;AASQ;EACI,aC3BI;ED4BJ,YAAA;EACA,YAAA;AAPZ;AASY;EACI,YAAA;AAPhB\",\"sourcesContent\":[\"@import \\\"../../styles/common.scss\\\";\\r\\n\\r\\ndiv.container {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    align-items: stretch;\\r\\n    height: 100%;\\r\\n\\r\\n    > div.menu {\\r\\n        width: 200px;\\r\\n        background-color: $grey-mid;\\r\\n        //border-right: 1px solid $grey-lighter;\\r\\n    }\\r\\n\\r\\n    > div.main {\\r\\n        flex-grow: 1;\\r\\n        background-color: $grey-dark;\\r\\n\\r\\n        > div.header {\\r\\n            padding: $large-padding;\\r\\n            display: flex;\\r\\n            flex-direction: row;\\r\\n\\r\\n            h1 {\\r\\n                font-size: $large-font;;\\r\\n                margin-block-start: 0;\\r\\n                margin-block-end: 0;\\r\\n                margin-inline-start: 0;\\r\\n                margin-inline-end: 0;\\r\\n                font-weight: bold;\\r\\n                flex-grow: 1;\\r\\n            }\\r\\n        }\\r\\n\\r\\n        \\r\\n\\r\\n        > div.gridStackContainer {\\r\\n            padding: $large-padding;\\r\\n            height: 100%;\\r\\n            flex-grow: 1;\\r\\n\\r\\n            > div.gridStack {\\r\\n                margin: -3px;\\r\\n            }\\r\\n        }\\r\\n    }\\r\\n}\",\"$black: #000;\\r\\n$white: #fff;\\r\\n$transparent: rgba(255, 255, 255, 0);\\r\\n\\r\\n$primary: #582c83;\\r\\n$grey-lighter: #979797;\\r\\n$grey-light: #474747;\\r\\n$grey-mid: #383838;\\r\\n$grey-dark: #151515;\\r\\n\\r\\n$large-padding: 25px;\\r\\n$standard-padding: 10px;\\r\\n$small-padding: 3px;\\r\\n\\r\\n$large-font: 16pt;\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"GridStackPanel_container__YCd9x\",\n\t\"menu\": \"GridStackPanel_menu__WPlp9\",\n\t\"main\": \"GridStackPanel_main__FUYFx\",\n\t\"header\": \"GridStackPanel_header__DHNt8\",\n\t\"gridStackContainer\": \"GridStackPanel_gridStackContainer__mFwG5\",\n\t\"gridStack\": \"GridStackPanel_gridStack__flVqu\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzddLm9uZU9mWzldLnVzZVs0XSEuL2NvbXBvbmVudHMvR3JpZFN0YWNrUGFuZWwvR3JpZFN0YWNrUGFuZWwubW9kdWxlLnNjc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzS0FBa0Y7QUFDNUg7QUFDQTtBQUNBLCtFQUErRSxrQkFBa0Isd0JBQXdCLHlCQUF5QixpQkFBaUIsR0FBRyx3RUFBd0UsaUJBQWlCLDhCQUE4QixHQUFHLHdFQUF3RSxpQkFBaUIsOEJBQThCLEdBQUcsMkdBQTJHLGtCQUFrQixrQkFBa0Isd0JBQXdCLEdBQUcsOEdBQThHLG9CQUFvQiw2QkFBNkIsa0NBQWtDLDRCQUE0QixnQ0FBZ0MsNEJBQTRCLG1DQUFtQywwQkFBMEIsaUNBQWlDLHNCQUFzQixpQkFBaUIsR0FBRyx1SEFBdUgsa0JBQWtCLGlCQUFpQixpQkFBaUIsR0FBRyw2SkFBNkosaUJBQWlCLEdBQUcsT0FBTyxvSkFBb0osVUFBVSxXQUFXLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLCtEQUErRCx1QkFBdUIsc0JBQXNCLDRCQUE0Qiw2QkFBNkIscUJBQXFCLHdCQUF3Qix5QkFBeUIsd0NBQXdDLG9EQUFvRCxTQUFTLHdCQUF3Qix5QkFBeUIseUNBQXlDLDhCQUE4Qix3Q0FBd0MsOEJBQThCLG9DQUFvQyx3QkFBd0IsNENBQTRDLDBDQUEwQyx3Q0FBd0MsMkNBQTJDLHlDQUF5QyxzQ0FBc0MsaUNBQWlDLGlCQUFpQixhQUFhLDBEQUEwRCx3Q0FBd0MsNkJBQTZCLDZCQUE2QixxQ0FBcUMsaUNBQWlDLGlCQUFpQixhQUFhLFNBQVMsS0FBSyxnQkFBZ0IsaUJBQWlCLHlDQUF5QywwQkFBMEIsMkJBQTJCLHlCQUF5Qix1QkFBdUIsd0JBQXdCLDZCQUE2Qiw0QkFBNEIsd0JBQXdCLDBCQUEwQixtQkFBbUI7QUFDcHdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvR3JpZFN0YWNrUGFuZWwvR3JpZFN0YWNrUGFuZWwubW9kdWxlLnNjc3M/YThjNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiZGl2LkdyaWRTdGFja1BhbmVsX2NvbnRhaW5lcl9fWUNkOXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuZGl2LkdyaWRTdGFja1BhbmVsX2NvbnRhaW5lcl9fWUNkOXggPiBkaXYuR3JpZFN0YWNrUGFuZWxfbWVudV9fV1BscDkge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4MzgzODtcXG59XFxuZGl2LkdyaWRTdGFja1BhbmVsX2NvbnRhaW5lcl9fWUNkOXggPiBkaXYuR3JpZFN0YWNrUGFuZWxfbWFpbl9fRlVZRngge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1MTUxNTtcXG59XFxuZGl2LkdyaWRTdGFja1BhbmVsX2NvbnRhaW5lcl9fWUNkOXggPiBkaXYuR3JpZFN0YWNrUGFuZWxfbWFpbl9fRlVZRnggPiBkaXYuR3JpZFN0YWNrUGFuZWxfaGVhZGVyX19ESE50OCB7XFxuICBwYWRkaW5nOiAyNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbmRpdi5HcmlkU3RhY2tQYW5lbF9jb250YWluZXJfX1lDZDl4ID4gZGl2LkdyaWRTdGFja1BhbmVsX21haW5fX0ZVWUZ4ID4gZGl2LkdyaWRTdGFja1BhbmVsX2hlYWRlcl9fREhOdDggaDEge1xcbiAgZm9udC1zaXplOiAxNnB0O1xcbiAgLXdlYmtpdC1tYXJnaW4tYmVmb3JlOiAwO1xcbiAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxuICAtd2Via2l0LW1hcmdpbi1hZnRlcjogMDtcXG4gICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcXG4gIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwO1xcbiAgICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xcbiAgLXdlYmtpdC1tYXJnaW4tZW5kOiAwO1xcbiAgICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5kaXYuR3JpZFN0YWNrUGFuZWxfY29udGFpbmVyX19ZQ2Q5eCA+IGRpdi5HcmlkU3RhY2tQYW5lbF9tYWluX19GVVlGeCA+IGRpdi5HcmlkU3RhY2tQYW5lbF9ncmlkU3RhY2tDb250YWluZXJfX21Gd0c1IHtcXG4gIHBhZGRpbmc6IDI1cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcbmRpdi5HcmlkU3RhY2tQYW5lbF9jb250YWluZXJfX1lDZDl4ID4gZGl2LkdyaWRTdGFja1BhbmVsX21haW5fX0ZVWUZ4ID4gZGl2LkdyaWRTdGFja1BhbmVsX2dyaWRTdGFja0NvbnRhaW5lcl9fbUZ3RzUgPiBkaXYuR3JpZFN0YWNrUGFuZWxfZ3JpZFN0YWNrX19mbFZxdSB7XFxuICBtYXJnaW46IC0zcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL0dyaWRTdGFja1BhbmVsL0dyaWRTdGFja1BhbmVsLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL2NvbW1vbi5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBREo7QUFHSTtFQUNJLFlBQUE7RUFDQSx5QkNIRztBREVYO0FBS0k7RUFDSSxZQUFBO0VBQ0EseUJDUkk7QURLWjtBQUtRO0VBQ0ksYUNUSTtFRFVKLGFBQUE7RUFDQSxtQkFBQTtBQUhaO0FBS1k7RUFDSSxlQ1ZIO0VEV0csd0JBQUE7VUFBQSxxQkFBQTtFQUNBLHVCQUFBO1VBQUEsbUJBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0VBQ0EscUJBQUE7VUFBQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUhoQjtBQVNRO0VBQ0ksYUMzQkk7RUQ0QkosWUFBQTtFQUNBLFlBQUE7QUFQWjtBQVNZO0VBQ0ksWUFBQTtBQVBoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi9zdHlsZXMvY29tbW9uLnNjc3NcXFwiO1xcclxcblxcclxcbmRpdi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgICA+IGRpdi5tZW51IHtcXHJcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LW1pZDtcXHJcXG4gICAgICAgIC8vYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGdyZXktbGlnaHRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA+IGRpdi5tYWluIHtcXHJcXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LWRhcms7XFxyXFxuXFxyXFxuICAgICAgICA+IGRpdi5oZWFkZXIge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6ICRsYXJnZS1wYWRkaW5nO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHJcXG4gICAgICAgICAgICBoMSB7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogJGxhcmdlLWZvbnQ7O1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDA7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIFxcclxcblxcclxcbiAgICAgICAgPiBkaXYuZ3JpZFN0YWNrQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAkbGFyZ2UtcGFkZGluZztcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xcclxcblxcclxcbiAgICAgICAgICAgID4gZGl2LmdyaWRTdGFjayB7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogLTNweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCIsXCIkYmxhY2s6ICMwMDA7XFxyXFxuJHdoaXRlOiAjZmZmO1xcclxcbiR0cmFuc3BhcmVudDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXHJcXG5cXHJcXG4kcHJpbWFyeTogIzU4MmM4MztcXHJcXG4kZ3JleS1saWdodGVyOiAjOTc5Nzk3O1xcclxcbiRncmV5LWxpZ2h0OiAjNDc0NzQ3O1xcclxcbiRncmV5LW1pZDogIzM4MzgzODtcXHJcXG4kZ3JleS1kYXJrOiAjMTUxNTE1O1xcclxcblxcclxcbiRsYXJnZS1wYWRkaW5nOiAyNXB4O1xcclxcbiRzdGFuZGFyZC1wYWRkaW5nOiAxMHB4O1xcclxcbiRzbWFsbC1wYWRkaW5nOiAzcHg7XFxyXFxuXFxyXFxuJGxhcmdlLWZvbnQ6IDE2cHQ7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiR3JpZFN0YWNrUGFuZWxfY29udGFpbmVyX19ZQ2Q5eFwiLFxuXHRcIm1lbnVcIjogXCJHcmlkU3RhY2tQYW5lbF9tZW51X19XUGxwOVwiLFxuXHRcIm1haW5cIjogXCJHcmlkU3RhY2tQYW5lbF9tYWluX19GVVlGeFwiLFxuXHRcImhlYWRlclwiOiBcIkdyaWRTdGFja1BhbmVsX2hlYWRlcl9fREhOdDhcIixcblx0XCJncmlkU3RhY2tDb250YWluZXJcIjogXCJHcmlkU3RhY2tQYW5lbF9ncmlkU3RhY2tDb250YWluZXJfX21Gd0c1XCIsXG5cdFwiZ3JpZFN0YWNrXCI6IFwiR3JpZFN0YWNrUGFuZWxfZ3JpZFN0YWNrX19mbFZxdVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[7].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[7].oneOf[9].use[4]!./components/GridStackPanel/GridStackPanel.module.scss\n"));

/***/ })

});