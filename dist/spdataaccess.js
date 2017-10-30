define("69b1aacd-68f2-4147-8433-8efb08eae331_0.0.1", ["@microsoft/sp-http"], function(__WEBPACK_EXTERNAL_MODULE_0__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sp_http_1 = __webpack_require__(0);
var SharePointDataProvider = (function () {
    function SharePointDataProvider() {
    }
    Object.defineProperty(SharePointDataProvider.prototype, "selectedList", {
        get: function () {
            return this._selectedList;
        },
        set: function (value) {
            this._selectedList = value;
            this._listItemsUrl = this._listsUrl + "(guid'" + value.Id + "')/items";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SharePointDataProvider.prototype, "webPartContext", {
        get: function () {
            return this._webPartContext;
        },
        set: function (value) {
            this._webPartContext = value;
            this._listsUrl = this._webPartContext.pageContext.web.absoluteUrl + "/_api/web/lists";
        },
        enumerable: true,
        configurable: true
    });
    SharePointDataProvider.prototype.getLists = function () {
        var _this = this;
        var listTemplateId = '171';
        var queryString = "?$filter=BaseTemplate eq " + listTemplateId;
        var queryUrl = this._listsUrl + queryString;
        return this._webPartContext.spHttpClient.get(queryUrl, sp_http_1.SPHttpClient.configurations.v1)
            .then(function (response) {
            return response.json();
        })
            .then(function (json) {
            return _this._lists = json.value;
        });
    };
    return SharePointDataProvider;
}());
exports.default = SharePointDataProvider;



/***/ })

/******/ })});;
//# sourceMappingURL=spdataaccess.js.map