/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/style.scss":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/style.scss ***!
  \************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../font/georgia.ttf */ \"./font/georgia.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/start-screen-mosaic.png */ \"./images/start-screen-mosaic.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/start-screen-puppy.png */ \"./images/start-screen-puppy.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/about-pets.png */ \"./images/about-pets.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Georgia\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n* {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  font-family: \\\"Arial\\\";\\n  margin: auto;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nh3 {\\n  font-family: \\\"Georgia\\\";\\n  line-height: 130%;\\n  letter-spacing: 0.06em;\\n  color: #292929;\\n  font-weight: 300;\\n  font-size: 35px;\\n  width: 370px;\\n  text-align: center;\\n  color: #545454;\\n}\\n\\nh4 {\\n  font-family: \\\"Georgia\\\";\\n  line-height: 130%;\\n  letter-spacing: 0.06em;\\n  color: #292929;\\n  font-weight: 300;\\n  font-size: 20px;\\n  text-align: center;\\n  color: #545454;\\n}\\n\\n.card-pet {\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  flex-direction: column;\\n  background-color: #FAFAFA;\\n  border-radius: 9px;\\n}\\n.card-pet:hover {\\n  background-color: white;\\n  cursor: pointer;\\n  transition-duration: 0.3s;\\n}\\n.card-pet:hover .card-pet-btn {\\n  background-color: #FDDCC4;\\n  transition-duration: 0.3s;\\n}\\n.card-pet p {\\n  margin: 20px 0 30px;\\n  font-family: \\\"Georgia\\\";\\n  line-height: 130%;\\n  letter-spacing: 0.06em;\\n  color: #292929;\\n  font-size: 20px;\\n  color: #545454;\\n}\\n.card-pet-more {\\n  margin-bottom: 30px;\\n}\\n.card-pet-btn {\\n  font-family: \\\"Georgia\\\";\\n  line-height: 130%;\\n  letter-spacing: 0.06em;\\n  color: #292929;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 200px;\\n  height: 50px;\\n  border-radius: 100px;\\n  font-size: 17px;\\n  border: 2px solid #FDDCC4;\\n  width: 187px;\\n}\\n.card-pet-btn:hover {\\n  background-color: #FDDCC4;\\n  transition-duration: 0.3s;\\n}\\n\\n.card-pet.active {\\n  box-shadow: 0px 0px 5px 0px rgb(165, 165, 165);\\n  border: 1px solid transparent;\\n  transition-duration: 0.3s;\\n}\\n\\n.control-circle {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 52px;\\n  width: 52px;\\n  font-family: \\\"Georgia\\\";\\n  font-size: 20px;\\n  font-weight: 400;\\n  line-height: 115%;\\n  border-radius: 100%;\\n  background-color: transparent;\\n  border: 2px solid #FDDCC4;\\n}\\n.control-circle:hover {\\n  cursor: pointer;\\n  background-color: #FDDCC4;\\n  transition-duration: 0.3s;\\n}\\n.control-circle:active {\\n  cursor: pointer;\\n  transition-duration: 0.3s;\\n}\\n\\n.control-circle-c {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  height: 52px;\\n  width: 52px;\\n  font-family: \\\"Georgia\\\";\\n  font-size: 20px;\\n  font-weight: 400;\\n  line-height: 115%;\\n  border-radius: 100%;\\n  background-color: #F1CDB3;\\n  border: 2px solid #FDDCC4;\\n}\\n.control-circle-c:hover {\\n  cursor: pointer;\\n  background-color: #FDDCC4;\\n  transition-duration: 0.3s;\\n}\\n.control-circle-c:active {\\n  cursor: pointer;\\n  transition-duration: 0.3s;\\n}\\n\\n.control-circle.disabled {\\n  color: #CDCDCD;\\n  border: 2px solid #CDCDCD;\\n  background-color: transparent;\\n  cursor: default;\\n}\\n\\n.wrapper {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \"), radial-gradient(100% 215.42% at 0% 0%, #5B483A 0%, #262425 100%);\\n}\\n\\n.header {\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n}\\n.header__container {\\n  margin: auto;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 30px 40px 0px;\\n  width: 1280px;\\n}\\n.header__container__logo {\\n  width: 190px;\\n  height: 60px;\\n}\\n.header__container__logo-title {\\n  font-family: \\\"Georgia\\\";\\n  font-size: 32px;\\n  font-weight: 300;\\n  letter-spacing: 0.06em;\\n  color: #F1CDB3;\\n}\\n.header__container__logo-subtitle {\\n  padding: 10px 0px 0px 3px;\\n  font-family: \\\"Arial\\\";\\n  font-weight: 300;\\n  font-size: 13px;\\n  line-height: 15px;\\n  letter-spacing: 0.1em;\\n  color: white;\\n}\\n.header__nav {\\n  font-family: \\\"Arial\\\";\\n  font-size: 15px;\\n  color: #CDCDCD;\\n  padding-top: 20px;\\n}\\n.header__nav-list {\\n  display: flex;\\n}\\n.header__nav-link a {\\n  display: inline-block;\\n  margin-left: 35px;\\n  color: #CDCDCD;\\n  border-bottom: 3px solid transparent;\\n}\\n.header__nav-link a:hover {\\n  border-bottom: 3px solid transparent;\\n  color: white;\\n  transition-duration: 0.3s;\\n}\\n.header__nav-link a:active {\\n  border-bottom: 3px solid #F1CDB3;\\n  transition-duration: 0.3s;\\n}\\n.header__nav-link.active a {\\n  color: white;\\n  border-bottom: 3px solid #F1CDB3;\\n  cursor: default;\\n}\\n\\n.not-only {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \"), radial-gradient(100% 215.42% at 0% 0%, #5B483A 0%, #262425 100%);\\n}\\n.not-only__container {\\n  margin: auto;\\n  width: 1280px;\\n  display: flex;\\n}\\n.not-only__container__left {\\n  margin: 345px 40px 0;\\n  width: 460px;\\n}\\n.not-only__container__left-heading {\\n  font-weight: 300;\\n  color: white;\\n}\\n.not-only__container__left-heading {\\n  margin-bottom: 42px;\\n  width: 400px;\\n  font-family: \\\"Georgia\\\";\\n  font-size: 44px;\\n  line-height: 130%;\\n}\\n.not-only__container__left-subheading {\\n  width: 460px;\\n  font-family: \\\"Arial\\\";\\n  font-size: 15px;\\n  margin-bottom: 45px;\\n  color: #CDCDCD;\\n  line-height: 150%;\\n}\\n.not-only__container__left-btn .btn {\\n  font-family: \\\"Georgia\\\";\\n  line-height: 130%;\\n  letter-spacing: 0.06em;\\n  color: #292929;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 200px;\\n  height: 50px;\\n  border-radius: 100px;\\n  font-size: 17px;\\n  background-color: #F1CDB3;\\n}\\n.not-only__container__left-btn .btn:hover {\\n  background-color: #FDDCC4;\\n  transition-duration: 0.3s;\\n}\\n.not-only__container__left-btn .btn:active {\\n  color: white;\\n  transition-duration: 0.3s;\\n}\\n.not-only__container__right {\\n  margin: 180px 0 0;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-repeat: no-repeat;\\n  max-width: 698px;\\n  min-height: 728px;\\n  width: 820px;\\n}\\n\\n.about__container {\\n  margin: auto;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 80px 40px 100px;\\n  min-height: 588px;\\n  width: 1280px;\\n}\\n.about__container__pets {\\n  margin-left: 175px;\\n  height: 408px;\\n  width: 300px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\n.about__container__content {\\n  width: 430px;\\n  margin-right: 175px;\\n}\\n.about__container__content h3 {\\n  width: 370px;\\n  text-align: left;\\n}\\n.about__container__content p {\\n  margin-top: 25px;\\n  font-size: 15px;\\n  line-height: 160%;\\n  color: #4C4C4C;\\n}\\n\\n.our-frends {\\n  background-color: #F6F6F6;\\n}\\n.our-frends__container {\\n  margin: auto;\\n  padding: 80px 40px 100px;\\n  width: 1280px;\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  flex-direction: column;\\n  row-gap: 60px;\\n}\\n.our-frends__container h3 {\\n  margin: auto;\\n  width: 600px;\\n}\\n.our-frends__container__bottom {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  column-gap: 53px;\\n}\\n.our-frends__container__bottom__slider {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  column-gap: 90px;\\n}\\n.our-frends__container__bottom__arrow:hover {\\n  cursor: pointer;\\n}\\n.our-frends__container__bottom__arrow.disable {\\n  cursor: default;\\n  color: #4C4C4C;\\n}\\n.our-frends__container__bottom__arrow.disable img {\\n  color: #4C4C4C;\\n}\\n.our-frends__container-btn .btn {\\n  font-family: \\\"Georgia\\\";\\n  line-height: 130%;\\n  letter-spacing: 0.06em;\\n  color: #292929;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 200px;\\n  height: 50px;\\n  border-radius: 100px;\\n  font-size: 17px;\\n  background-color: #F1CDB3;\\n  width: 260px;\\n}\\n.our-frends__container-btn .btn:hover {\\n  background-color: #FDDCC4;\\n  transition-duration: 0.3s;\\n}\\n.our-frends__container-btn .btn:active {\\n  color: white;\\n  transition-duration: 0.3s;\\n}\\n\\n.help__container {\\n  margin: auto;\\n  padding: 80px 40px 100px;\\n  width: 1280px;\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  flex-direction: column;\\n  row-gap: 60px;\\n}\\n.help__container__list {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  column-gap: 120px;\\n  row-gap: 55px;\\n  flex-flow: row wrap;\\n}\\n.help__container__list-item {\\n  text-align: center;\\n}\\n.help__container__list-item h4 {\\n  margin-top: 25px;\\n}\\n\\n.in-addition {\\n  background-color: #F6F6F6;\\n}\\n.in-addition__container {\\n  margin: auto;\\n  padding: 80px 182px 100px;\\n  width: 1280px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  row-gap: 30px;\\n  column-gap: 30px;\\n}\\n.in-addition__container__right {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  align-items: flex-start;\\n  flex-direction: column;\\n  row-gap: 20px;\\n  width: 380px;\\n}\\n.in-addition__container__right-heading {\\n  width: 290px;\\n  text-align: left;\\n}\\n.in-addition__container__right-subheading {\\n  font-family: \\\"Georgia\\\";\\n  font-size: 15px;\\n  line-height: 110%;\\n  letter-spacing: 0.06em;\\n}\\n.in-addition__container__right__card {\\n  width: 350px;\\n  height: 43px;\\n  background: #F1CDB3;\\n  border-radius: 9px;\\n}\\n.in-addition__container__right__card-img {\\n  margin: 10px 10px -7px 15px;\\n}\\n.in-addition__container__right__card span {\\n  width: 310px;\\n  height: 40px;\\n  align-items: center;\\n  font-family: \\\"Georgia\\\";\\n  font-size: 20px;\\n  line-height: 110%;\\n  letter-spacing: 0.06em;\\n  background: #F1CDB3;\\n  border-radius: 9px;\\n  border-style: none;\\n  color: #545454;\\n}\\n.in-addition__container__right__card span:hover {\\n  color: #000000;\\n  transition-duration: 0.3s;\\n}\\n.in-addition__container__right__card span:active {\\n  color: #f8f8f8;\\n  transition-duration: 0.3s;\\n}\\n.in-addition__container__right__card input {\\n  width: 310px;\\n  height: 40px;\\n  align-items: center;\\n  font-family: \\\"Georgia\\\";\\n  font-size: 20px;\\n  line-height: 110%;\\n  letter-spacing: 0.06em;\\n  background: #F1CDB3;\\n  border-radius: 9px;\\n  border-style: none;\\n  color: #545454;\\n}\\n.in-addition__container__right__card input:focus {\\n  outline: none;\\n}\\n.in-addition__container__right__card input:focus {\\n  outline: none;\\n}\\n.in-addition__container__right-legal {\\n  font-style: italic;\\n  font-weight: 300;\\n  font-size: 12px;\\n  line-height: 18px;\\n  color: #B2B2B2;\\n}\\n\\n.footer {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \"), radial-gradient(110.67% 538.64% at 5.73% 50%, #513D2F 0%, #1A1A1C 100%), #211F20;\\n}\\n.footer__container {\\n  display: flex;\\n  column-gap: 40px;\\n  width: 1280px;\\n  margin: auto;\\n  padding: 40px 40px 0;\\n}\\n.footer__container__column {\\n  padding-top: 20px;\\n  width: 400px;\\n  display: flex;\\n  flex-flow: column;\\n}\\n.footer__container__column h3 {\\n  text-align: left;\\n  color: white;\\n  width: 280px;\\n  height: 90px;\\n}\\n.footer__container__column div.email, .footer__container__column div.phone {\\n  margin-top: 40px;\\n}\\n.footer__container__column div.address {\\n  margin-top: 28px;\\n}\\n.footer__container__column div a {\\n  display: flex;\\n  align-items: center;\\n}\\n.footer__container__column div img {\\n  margin-right: 20px;\\n}\\n.footer__container__column div h4 {\\n  font-size: 20px;\\n  color: #F1CDB3;\\n  width: 280px;\\n  display: inline-block;\\n  text-align: left;\\n}\\n.footer__container__column div h4:hover {\\n  color: rgb(255, 255, 255);\\n  transition-duration: 0.3s;\\n}\\n.footer__container__column div h4:active {\\n  color: #F1CDB3;\\n  transition-duration: 0.3s;\\n}\\n.footer__container .footer__container__puppy {\\n  margin-left: 20px;\\n}\\n\\n.header__pets__container {\\n  margin: auto;\\n  display: flex;\\n  justify-content: space-between;\\n  padding: 30px 40px 30px;\\n  width: 1280px;\\n}\\n.header__pets__container__logo {\\n  width: 190px;\\n  height: 60px;\\n}\\n.header__pets__container__logo-title {\\n  font-family: \\\"Georgia\\\";\\n  font-size: 32px;\\n  font-weight: 300;\\n  letter-spacing: 0.06em;\\n  color: #545454;\\n}\\n.header__pets__container__logo-subtitle {\\n  padding: 10px 0px 0px 3px;\\n  font-family: \\\"Arial\\\";\\n  font-weight: 400;\\n  font-size: 13px;\\n  line-height: 15px;\\n  letter-spacing: 0.1em;\\n  color: #545454;\\n}\\n.header__pets__nav {\\n  font-family: \\\"Arial\\\";\\n  font-size: 15px;\\n  color: #545454;\\n  padding-top: 20px;\\n}\\n.header__pets__nav-list {\\n  display: flex;\\n}\\n.header__pets__nav-link a {\\n  display: inline-block;\\n  margin-left: 35px;\\n  color: #545454;\\n  border-bottom: 3px solid transparent;\\n}\\n.header__pets__nav-link a:hover {\\n  border-bottom: 3px solid transparent;\\n  color: black;\\n  transition-duration: 0.3s;\\n}\\n.header__pets__nav-link a:active {\\n  border-bottom: 3px solid #F1CDB3;\\n  transition-duration: 0.3s;\\n}\\n.header__pets__nav-link.active a {\\n  color: black;\\n  border-bottom: 3px solid #F1CDB3;\\n  cursor: default;\\n}\\n\\n.our-frends-pets {\\n  background-color: #F6F6F6;\\n}\\n.our-frends-pets__container {\\n  padding: 80px 40px 100px;\\n  margin: auto;\\n  width: 1280px;\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: center;\\n  flex-direction: column;\\n  row-gap: 60px;\\n}\\n.our-frends-pets__container h3 {\\n  margin: auto;\\n  width: 600px;\\n}\\n.our-frends-pets__container__page {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  column-gap: 30px;\\n  row-gap: 35px;\\n}\\n.our-frends-pets__container__controls {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  column-gap: 20px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://shelter/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B3%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://shelter/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://shelter/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://shelter/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!../node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/sass-resources-loader/lib/loader.js??ruleSet[1].rules[1].use[3]!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_node_modules_sass_resources_loader_lib_loader_js_ruleSet_1_rules_1_use_3_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://shelter/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://shelter/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\n\n//# sourceURL=webpack://shelter/./src/index.js?");

/***/ }),

/***/ "./font/georgia.ttf":
/*!**************************!*\
  !*** ./font/georgia.ttf ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7eb0e3cec9d41a50efd7.ttf\";\n\n//# sourceURL=webpack://shelter/./font/georgia.ttf?");

/***/ }),

/***/ "./images/about-pets.png":
/*!*******************************!*\
  !*** ./images/about-pets.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3850ca5af2308921a653.png\";\n\n//# sourceURL=webpack://shelter/./images/about-pets.png?");

/***/ }),

/***/ "./images/start-screen-mosaic.png":
/*!****************************************!*\
  !*** ./images/start-screen-mosaic.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"414ad5131a671907e5b9.png\";\n\n//# sourceURL=webpack://shelter/./images/start-screen-mosaic.png?");

/***/ }),

/***/ "./images/start-screen-puppy.png":
/*!***************************************!*\
  !*** ./images/start-screen-puppy.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"021d028beb78c4d75556.png\";\n\n//# sourceURL=webpack://shelter/./images/start-screen-puppy.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;