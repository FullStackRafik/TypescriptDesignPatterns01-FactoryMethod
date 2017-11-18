define("39b80ba4-8d62-43f3-8b17-673fecefe627_0.0.1", ["react","react-dom","@microsoft/sp-core-library","@microsoft/sp-http","@microsoft/sp-lodash-subset","@microsoft/sp-webpart-base","FactoryMethodWebPartStrings"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_55__, __WEBPACK_EXTERNAL_MODULE_59__, __WEBPACK_EXTERNAL_MODULE_60__, __WEBPACK_EXTERNAL_MODULE_61__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 163);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(96), exports);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeStyles_1 = __webpack_require__(34);
exports.mergeStyles = mergeStyles_1.mergeStyles;
var mergeStyleSets_1 = __webpack_require__(66);
exports.mergeStyleSets = mergeStyleSets_1.mergeStyleSets;
var concatStyleSets_1 = __webpack_require__(33);
exports.concatStyleSets = concatStyleSets_1.concatStyleSets;
var fontFace_1 = __webpack_require__(63);
exports.fontFace = fontFace_1.fontFace;
var keyframes_1 = __webpack_require__(65);
exports.keyframes = keyframes_1.keyframes;
var Stylesheet_1 = __webpack_require__(9);
exports.Stylesheet = Stylesheet_1.Stylesheet;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sets the virtual parent of an element.
 * Pass `undefined` as the `parent` to clear the virtual parent.
 *
 * @public
 */
function setVirtualParent(child, parent) {
    var virtualChild = child;
    var virtualParent = parent;
    if (!virtualChild._virtual) {
        virtualChild._virtual = {
            children: []
        };
    }
    var oldParent = virtualChild._virtual.parent;
    if (oldParent && oldParent !== parent) {
        // Remove the child from its old parent.
        var index = oldParent._virtual.children.indexOf(virtualChild);
        if (index > -1) {
            oldParent._virtual.children.splice(index, 1);
        }
    }
    virtualChild._virtual.parent = virtualParent || undefined;
    if (virtualParent) {
        if (!virtualParent._virtual) {
            virtualParent._virtual = {
                children: []
            };
        }
        virtualParent._virtual.children.push(virtualChild);
    }
}
exports.setVirtualParent = setVirtualParent;
/**
 * Gets the virtual parent given the child element, if it exists.
 *
 * @public
 */
function getVirtualParent(child) {
    var parent;
    if (child && isVirtualElement(child)) {
        parent = child._virtual.parent;
    }
    return parent;
}
exports.getVirtualParent = getVirtualParent;
/**
 * Gets the element which is the parent of a given element.
 * If `allowVirtuaParents` is `true`, this method prefers the virtual parent over
 * real DOM parent when present.
 *
 * @public
 */
function getParent(child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    return child && (allowVirtualParents && getVirtualParent(child) ||
        child.parentNode && child.parentNode);
}
exports.getParent = getParent;
/**
 * Determines whether or not a parent element contains a given child element.
 * If `allowVirtualParents` is true, this method may return `true` if the child
 * has the parent in its virtual element hierarchy.
 *
 * @public
 */
function elementContains(parent, child, allowVirtualParents) {
    if (allowVirtualParents === void 0) { allowVirtualParents = true; }
    var isContained = false;
    if (parent && child) {
        if (allowVirtualParents) {
            isContained = false;
            while (child) {
                var nextParent = getParent(child);
                if (nextParent === parent) {
                    isContained = true;
                    break;
                }
                child = nextParent;
            }
        }
        else if (parent.contains) {
            isContained = parent.contains(child);
        }
    }
    return isContained;
}
exports.elementContains = elementContains;
var _isSSR = false;
/**
 * Helper to set ssr mode to simulate no window object returned from getWindow helper.
 *
 * @public
 */
function setSSR(isEnabled) {
    _isSSR = isEnabled;
}
exports.setSSR = setSSR;
/**
 * Helper to get the window object.
 *
 * @public
 */
function getWindow(rootElement) {
    if (_isSSR || typeof window === 'undefined') {
        return undefined;
    }
    else {
        return (rootElement &&
            rootElement.ownerDocument &&
            rootElement.ownerDocument.defaultView ?
            rootElement.ownerDocument.defaultView :
            window);
    }
}
exports.getWindow = getWindow;
/**
 * Helper to get the document object.
 *
 * @public
 */
function getDocument(rootElement) {
    if (_isSSR || typeof document === 'undefined') {
        return undefined;
    }
    else {
        return rootElement && rootElement.ownerDocument ? rootElement.ownerDocument : document;
    }
}
exports.getDocument = getDocument;
/**
 * Helper to get bounding client rect, works with window.
 *
 * @public
 */
function getRect(element) {
    var rect;
    if (element) {
        if (element === window) {
            rect = {
                left: 0,
                top: 0,
                width: window.innerWidth,
                height: window.innerHeight,
                right: window.innerWidth,
                bottom: window.innerHeight
            };
        }
        else if (element.getBoundingClientRect) {
            rect = element.getBoundingClientRect();
        }
    }
    return rect;
}
exports.getRect = getRect;
/**
 * Determines whether or not an element has the virtual hierarchy extension.
 *
 * @public
 */
function isVirtualElement(element) {
    return element && !!element._virtual;
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SELECTION_CHANGE = 'change';
var SelectionMode;
(function (SelectionMode) {
    SelectionMode[SelectionMode["none"] = 0] = "none";
    SelectionMode[SelectionMode["single"] = 1] = "single";
    SelectionMode[SelectionMode["multiple"] = 2] = "multiple";
})(SelectionMode = exports.SelectionMode || (exports.SelectionMode = {}));
var SelectionDirection;
(function (SelectionDirection) {
    SelectionDirection[SelectionDirection["horizontal"] = 0] = "horizontal";
    SelectionDirection[SelectionDirection["vertical"] = 1] = "vertical";
})(SelectionDirection = exports.SelectionDirection || (exports.SelectionDirection = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var STYLESHEET_SETTING = '__stylesheet__';
var _stylesheet;
/**
 * Represents the state of styles registered in the page. Abstracts
 * the surface for adding styles to the stylesheet, exposes helpers
 * for reading the styles registered in server rendered scenarios.
 *
 * @public
 */
var Stylesheet = (function () {
    function Stylesheet(config) {
        this._config = tslib_1.__assign({ async: false, injectionMode: 1 /* insertNode */ }, config);
        this.reset();
    }
    /**
     * Gets the singleton instance.
     */
    Stylesheet.getInstance = function () {
        // tslint:disable-next-line:no-any
        var win = typeof window !== 'undefined' ? window : {};
        _stylesheet = win[STYLESHEET_SETTING];
        if (!_stylesheet) {
            _stylesheet = win[STYLESHEET_SETTING] = new Stylesheet();
        }
        return _stylesheet;
    };
    /**
     * Configures the stylesheet.
     */
    Stylesheet.prototype.setConfig = function (config) {
        this._config = tslib_1.__assign({}, this._config, config);
    };
    /**
     * Generates a unique classname.
     *
     * @param displayName - Optional value to use as a prefix.
     */
    Stylesheet.prototype.getClassName = function (displayName) {
        var prefix = displayName || 'css';
        return prefix + "-" + this._counter++;
    };
    /**
     * Used internally to cache information about a class which was
     * registered with the stylesheet.
     */
    Stylesheet.prototype.cacheClassName = function (className, key, args, rules) {
        this._keyToClassName[key] = className;
        this._classNameToArgs[className] = {
            args: args,
            rules: rules
        };
    };
    /**
     * Gets the appropriate classname given a key which was previously
     * registered using cacheClassName.
     */
    Stylesheet.prototype.classNameFromKey = function (key) {
        return this._keyToClassName[key];
    };
    /**
     * Gets the arguments associated with a given classname which was
     * previously registered using cacheClassName.
     */
    Stylesheet.prototype.argsFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return (entry && entry.args);
    };
    /**
   * Gets the arguments associated with a given classname which was
   * previously registered using cacheClassName.
   */
    Stylesheet.prototype.insertedRulesFromClassName = function (className) {
        var entry = this._classNameToArgs[className];
        return (entry && entry.rules);
    };
    /**
     * Inserts a css rule into the stylesheet.
     */
    Stylesheet.prototype.insertRule = function (rule) {
        var element = this._getElement();
        var injectionMode = element ? this._config.injectionMode : 0 /* none */;
        switch (injectionMode) {
            case 1 /* insertNode */:
                var sheet = element.sheet;
                try {
                    // tslint:disable-next-line:no-any
                    sheet.insertRule(rule, sheet.cssRules.length);
                }
                catch (e) {
                    /* no-op on errors */
                }
                break;
            default:
                this._rules.push(rule);
                break;
        }
    };
    /**
     * Gets all rules registered with the stylesheet; only valid when
     * using InsertionMode.none.
     */
    Stylesheet.prototype.getRules = function () {
        return (this._rules.join('') || '') + (this._rulesToInsert.join('') || '');
    };
    /**
     * Resets the internal state of the stylesheet. Only used in server
     * rendered scenarios where we're using InsertionMode.none.
     */
    Stylesheet.prototype.reset = function () {
        this._rules = [];
        this._rulesToInsert = [];
        this._counter = 0;
        this._classNameToArgs = {};
        this._keyToClassName = {};
        if (this._timerId) {
            clearTimeout(this._timerId);
            this._timerId = 0;
        }
    };
    Stylesheet.prototype._getElement = function () {
        if (!this._styleElement && typeof document !== 'undefined') {
            this._styleElement = document.createElement('style');
            document.head.appendChild(this._styleElement);
        }
        return this._styleElement;
    };
    return Stylesheet;
}());
exports.Stylesheet = Stylesheet;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(75), exports);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(1);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(2);
var stylesImport = __webpack_require__(134);
var styles = stylesImport;
var SPACER_WIDTH = 36;
exports.GroupSpacer = function (props) {
    return props.count > 0 && (React.createElement("span", { className: Utilities_1.css('ms-GroupSpacer', styles.root), style: { width: props.count * SPACER_WIDTH } }));
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(6), exports);
tslib_1.__exportStar(__webpack_require__(158), exports);
tslib_1.__exportStar(__webpack_require__(52), exports);
tslib_1.__exportStar(__webpack_require__(159), exports);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationStyles_1 = __webpack_require__(76);
exports.AnimationStyles = AnimationStyles_1.AnimationStyles;
var DefaultPalette_1 = __webpack_require__(19);
exports.DefaultPalette = DefaultPalette_1.DefaultPalette;
var DefaultFontStyles_1 = __webpack_require__(35);
exports.DefaultFontStyles = DefaultFontStyles_1.DefaultFontStyles;
exports.FontSizes = DefaultFontStyles_1.FontSizes;
exports.FontWeights = DefaultFontStyles_1.FontWeights;
var getFocusStyle_1 = __webpack_require__(77);
exports.getFocusStyle = getFocusStyle_1.getFocusStyle;
var hiddenContentStyle_1 = __webpack_require__(78);
exports.hiddenContentStyle = hiddenContentStyle_1.hiddenContentStyle;
var theme_1 = __webpack_require__(79);
exports.ThemeSettingName = theme_1.ThemeSettingName;
exports.getTheme = theme_1.getTheme;
exports.loadTheme = theme_1.loadTheme;
exports.createTheme = theme_1.createTheme;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-string-literal */
Object.defineProperty(exports, "__esModule", { value: true });
/** An instance of EventGroup allows anything with a handle to it to trigger events on it.
 *  If the target is an HTMLElement, the event will be attached to the element and can be
 *  triggered as usual (like clicking for onclick).
 *  The event can be triggered by calling EventGroup.raise() here. If the target is an
 *  HTMLElement, the event gets raised and is handled by the browser. Otherwise, it gets
 *  handled here in EventGroup, and the handler is called in the context of the parent
 *  (which is passed in in the constructor).
 *
 * @public
 */
var EventGroup = (function () {
    /** parent: the context in which events attached to non-HTMLElements are called */
    // tslint:disable-next-line:no-any
    function EventGroup(parent) {
        this._id = EventGroup._uniqueId++;
        this._parent = parent;
        this._eventRecords = [];
    }
    /** For IE8, bubbleEvent is ignored here and must be dealt with by the handler.
     *  Events raised here by default have bubbling set to false and cancelable set to true.
     *  This applies also to built-in events being raised manually here on HTMLElements,
     *  which may lead to unexpected behavior if it differs from the defaults.
     *
     */
    EventGroup.raise = function (
        // tslint:disable-next-line:no-any
        target, eventName, 
        // tslint:disable-next-line:no-any
        eventArgs, bubbleEvent) {
        var retVal;
        if (EventGroup._isElement(target)) {
            if (document.createEvent) {
                var ev = document.createEvent('HTMLEvents');
                ev.initEvent(eventName, bubbleEvent || false, true);
                // tslint:disable-next-line:no-any
                ev['args'] = eventArgs;
                retVal = target.dispatchEvent(ev);
                // tslint:disable-next-line:no-any
            }
            else if (document['createEventObject']) {
                // tslint:disable-next-line:no-any
                var evObj = document['createEventObject'](eventArgs);
                // cannot set cancelBubble on evObj, fireEvent will overwrite it
                target.fireEvent('on' + eventName, evObj);
            }
        }
        else {
            while (target && retVal !== false) {
                var events = target.__events__;
                var eventRecords = events ? events[eventName] : null;
                if (eventRecords) {
                    for (var id in eventRecords) {
                        if (eventRecords.hasOwnProperty(id)) {
                            var eventRecordList = eventRecords[id];
                            for (var listIndex = 0; retVal !== false && listIndex < eventRecordList.length; listIndex++) {
                                var record = eventRecordList[listIndex];
                                if (record.objectCallback) {
                                    retVal = record.objectCallback.call(record.parent, eventArgs);
                                }
                            }
                        }
                    }
                }
                // If the target has a parent, bubble the event up.
                target = bubbleEvent ? target.parent : null;
            }
        }
        return retVal;
    };
    // tslint:disable-next-line:no-any
    EventGroup.isObserved = function (target, eventName) {
        var events = target && target.__events__;
        return !!events && !!events[eventName];
    };
    /** Check to see if the target has declared support of the given event. */
    // tslint:disable-next-line:no-any
    EventGroup.isDeclared = function (target, eventName) {
        var declaredEvents = target && target.__declaredEvents;
        return !!declaredEvents && !!declaredEvents[eventName];
    };
    // tslint:disable-next-line:no-any
    EventGroup.stopPropagation = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        else {
            event.cancelBubble = true;
        }
    };
    EventGroup._isElement = function (target) {
        return (!!target && (!!target.addEventListener ||
            (typeof HTMLElement !== 'undefined' && target instanceof HTMLElement)));
    };
    EventGroup.prototype.dispose = function () {
        if (!this._isDisposed) {
            this._isDisposed = true;
            this.off();
            this._parent = null;
        }
    };
    /** On the target, attach a set of events, where the events object is a name to function mapping. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.onAll = function (target, events, useCapture) {
        for (var eventName in events) {
            if (events.hasOwnProperty(eventName)) {
                this.on(target, eventName, events[eventName], useCapture);
            }
        }
    };
    /** On the target, attach an event whose handler will be called in the context of the parent
     * of this instance of EventGroup.
     */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.on = function (target, eventName, callback, useCapture) {
        var _this = this;
        if (eventName.indexOf(',') > -1) {
            var events = eventName.split(/[ ,]+/);
            for (var i = 0; i < events.length; i++) {
                this.on(target, events[i], callback, useCapture);
            }
        }
        else {
            var parent_1 = this._parent;
            var eventRecord = {
                target: target,
                eventName: eventName,
                parent: parent_1,
                callback: callback,
                useCapture: useCapture || false
            };
            // Initialize and wire up the record on the target, so that it can call the callback if the event fires.
            var events = (target.__events__ = target.__events__ || {});
            events[eventName] = events[eventName] || {
                count: 0
            };
            events[eventName][this._id] = events[eventName][this._id] || [];
            events[eventName][this._id].push(eventRecord);
            events[eventName].count++;
            if (EventGroup._isElement(target)) {
                // tslint:disable-next-line:no-any
                var processElementEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    var result;
                    try {
                        result = callback.apply(parent_1, args);
                        if (result === false && args[0]) {
                            var e = args[0];
                            if (e.preventDefault) {
                                e.preventDefault();
                            }
                            if (e.stopPropagation) {
                                e.stopPropagation();
                            }
                            e.cancelBubble = true;
                        }
                    }
                    catch (e) {
                        /* ErrorHelper.log(e); */
                    }
                    return result;
                };
                eventRecord.elementCallback = processElementEvent;
                if (target.addEventListener) {
                    /* tslint:disable:ban-native-functions */
                    target.addEventListener(eventName, processElementEvent, useCapture);
                    /* tslint:enable:ban-native-functions */
                }
                else if (target.attachEvent) {
                    target.attachEvent('on' + eventName, processElementEvent);
                }
            }
            else {
                // tslint:disable-next-line:no-any
                var processObjectEvent = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    if (_this._isDisposed) {
                        return;
                    }
                    return callback.apply(parent_1, args);
                };
                eventRecord.objectCallback = processObjectEvent;
            }
            // Remember the record locally, so that it can be removed.
            this._eventRecords.push(eventRecord);
        }
    };
    // tslint:disable-next-line:no-any
    EventGroup.prototype.off = function (target, eventName, callback, useCapture) {
        for (var i = 0; i < this._eventRecords.length; i++) {
            var eventRecord = this._eventRecords[i];
            if ((!target || target === eventRecord.target) &&
                (!eventName || eventName === eventRecord.eventName) &&
                (!callback || callback === eventRecord.callback) &&
                ((typeof useCapture !== 'boolean') || useCapture === eventRecord.useCapture)) {
                var events = eventRecord.target.__events__;
                var targetArrayLookup = events[eventRecord.eventName];
                var targetArray = targetArrayLookup ? targetArrayLookup[this._id] : null;
                // We may have already target's entries, so check for null.
                if (targetArray) {
                    if (targetArray.length === 1 || !callback) {
                        targetArrayLookup.count -= targetArray.length;
                        delete events[eventRecord.eventName][this._id];
                    }
                    else {
                        targetArrayLookup.count--;
                        targetArray.splice(targetArray.indexOf(eventRecord), 1);
                    }
                    if (!targetArrayLookup.count) {
                        delete events[eventRecord.eventName];
                    }
                }
                if (eventRecord.elementCallback) {
                    if (eventRecord.target.removeEventListener) {
                        eventRecord.target.removeEventListener(eventRecord.eventName, eventRecord.elementCallback, eventRecord.useCapture);
                    }
                    else if (eventRecord.target.detachEvent) {
                        eventRecord.target.detachEvent('on' + eventRecord.eventName, eventRecord.elementCallback);
                    }
                }
                this._eventRecords.splice(i--, 1);
            }
        }
    };
    /** Trigger the given event in the context of this instance of EventGroup. */
    // tslint:disable-next-line:no-any
    EventGroup.prototype.raise = function (eventName, eventArgs, bubbleEvent) {
        return EventGroup.raise(this._parent, eventName, eventArgs, bubbleEvent);
    };
    /** Declare an event as being supported by this instance of EventGroup. */
    EventGroup.prototype.declare = function (event) {
        var declaredEvents = this._parent.__declaredEvents = this._parent.__declaredEvents || {};
        if (typeof event === 'string') {
            declaredEvents[event] = true;
        }
        else {
            for (var i = 0; i < event.length; i++) {
                declaredEvents[event[i]] = true;
            }
        }
    };
    // tslint:disable-next-line:no-inferrable-types
    EventGroup._uniqueId = 0;
    return EventGroup;
}());
exports.EventGroup = EventGroup;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(127), exports);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Enum to describe how a particular column header behaves.... This enum is used to
 * to specify the property IColumn:columnActionsMode.
 * If IColumn:columnActionsMode is undefined, then it's equivalent to ColumnActionsMode.clickable
 */
var ColumnActionsMode;
(function (ColumnActionsMode) {
    /**
     * Renders the column header as disabled.
     */
    ColumnActionsMode[ColumnActionsMode["disabled"] = 0] = "disabled";
    /**
     * Renders the column header is clickable.
     */
    ColumnActionsMode[ColumnActionsMode["clickable"] = 1] = "clickable";
    /**
     * Renders the column header ias clickable and displays the dropdown cheveron.
     */
    ColumnActionsMode[ColumnActionsMode["hasDropdown"] = 2] = "hasDropdown";
})(ColumnActionsMode = exports.ColumnActionsMode || (exports.ColumnActionsMode = {}));
var ConstrainMode;
(function (ConstrainMode) {
    /** If specified, lets the content grow which allows the page to manage scrolling. */
    ConstrainMode[ConstrainMode["unconstrained"] = 0] = "unconstrained";
    /**
     * If specified, constrains the list to the given layout space.
     */
    ConstrainMode[ConstrainMode["horizontalConstrained"] = 1] = "horizontalConstrained";
})(ConstrainMode = exports.ConstrainMode || (exports.ConstrainMode = {}));
var DetailsListLayoutMode;
(function (DetailsListLayoutMode) {
    /**
     * Lets the user resize columns and makes not attempt to fit them.
     */
    DetailsListLayoutMode[DetailsListLayoutMode["fixedColumns"] = 0] = "fixedColumns";
    /**
     * Manages which columns are visible, tries to size them according to their min/max rules and drops
     * off columns that can't fit and have isCollapsable set.
     */
    DetailsListLayoutMode[DetailsListLayoutMode["justified"] = 1] = "justified";
})(DetailsListLayoutMode = exports.DetailsListLayoutMode || (exports.DetailsListLayoutMode = {}));
var CheckboxVisibility;
(function (CheckboxVisibility) {
    /**
     * Visible on hover.
     */
    CheckboxVisibility[CheckboxVisibility["onHover"] = 0] = "onHover";
    /**
     * Visible always.
     */
    CheckboxVisibility[CheckboxVisibility["always"] = 1] = "always";
    /**
     * Hide checkboxes.
     */
    CheckboxVisibility[CheckboxVisibility["hidden"] = 2] = "hidden";
})(CheckboxVisibility = exports.CheckboxVisibility || (exports.CheckboxVisibility = {}));


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rtlifyRules_1 = __webpack_require__(70);
var provideUnits_1 = __webpack_require__(69);
var prefixRules_1 = __webpack_require__(68);
var kebabRules_1 = __webpack_require__(67);
var Stylesheet_1 = __webpack_require__(9);
var DISPLAY_NAME = 'displayName';
function getDisplayName(rules) {
    var rootStyle = rules && rules['&'];
    return rootStyle ? rootStyle.displayName : undefined;
}
function extractRules(args, rules, currentSelector) {
    if (rules === void 0) { rules = { __order: [] }; }
    if (currentSelector === void 0) { currentSelector = '&'; }
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var currentRules = rules[currentSelector];
    if (!currentRules) {
        currentRules = {};
        rules[currentSelector] = currentRules;
        rules.__order.push(currentSelector);
    }
    for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
        var arg = args_1[_i];
        // If the arg is a string, we need to look up the class map and merge.
        if (typeof arg === 'string') {
            var expandedRules = stylesheet.argsFromClassName(arg);
            if (expandedRules) {
                extractRules(expandedRules, rules);
            }
            // Else if the arg is an array, we need to recurse in.
        }
        else if (Array.isArray(arg)) {
            extractRules(arg, rules, currentSelector);
        }
        else {
            // tslint:disable-next-line:no-any
            for (var prop in arg) {
                if (prop === 'selectors') {
                    // tslint:disable-next-line:no-any
                    var selectors = arg.selectors;
                    for (var newSelector in selectors) {
                        if (selectors.hasOwnProperty(newSelector)) {
                            var selectorValue = selectors[newSelector];
                            if (newSelector.indexOf('&') < 0) {
                                newSelector = currentSelector + newSelector;
                            }
                            extractRules([selectorValue], rules, newSelector);
                        }
                    }
                }
                else {
                    // Else, add the rule to the currentSelector.
                    if (prop === 'margin' || prop === 'padding') {
                        // tslint:disable-next-line:no-any
                        expandQuads(currentRules, prop, arg[prop]);
                    }
                    else {
                        // tslint:disable-next-line:no-any
                        currentRules[prop] = arg[prop];
                    }
                }
            }
        }
    }
    return rules;
}
function expandQuads(currentRules, name, value) {
    var parts = (typeof value === 'string') ? value.split(' ') : [value];
    currentRules[name + 'Top'] = parts[0];
    currentRules[name + 'Right'] = parts[1] || parts[0];
    currentRules[name + 'Bottom'] = parts[2] || parts[0];
    currentRules[name + 'Left'] = parts[3] || parts[1] || parts[0];
}
function getKeyForRules(rules) {
    var serialized = [];
    var hasProps = false;
    for (var _i = 0, _a = rules.__order; _i < _a.length; _i++) {
        var selector = _a[_i];
        serialized.push(selector);
        var rulesForSelector = rules[selector];
        for (var propName in rulesForSelector) {
            if (rulesForSelector.hasOwnProperty(propName)) {
                hasProps = true;
                serialized.push(propName, rulesForSelector[propName]);
            }
        }
    }
    return hasProps ? serialized.join('') : undefined;
}
function serializeRuleEntries(ruleEntries) {
    if (!ruleEntries) {
        return '';
    }
    var allEntries = [];
    for (var entry in ruleEntries) {
        if (ruleEntries.hasOwnProperty(entry) && entry !== DISPLAY_NAME) {
            allEntries.push(entry, ruleEntries[entry]);
        }
    }
    // Apply transforms.
    for (var i = 0; i < allEntries.length; i += 2) {
        kebabRules_1.kebabRules(allEntries, i);
        provideUnits_1.provideUnits(allEntries, i);
        rtlifyRules_1.rtlifyRules(allEntries, i);
        prefixRules_1.prefixRules(allEntries, i);
    }
    // Apply punctuation.
    for (var i = 1; i < allEntries.length; i += 4) {
        allEntries.splice(i, 1, ':', allEntries[i], ';');
    }
    return allEntries.join('');
}
exports.serializeRuleEntries = serializeRuleEntries;
function styleToClassName() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var rules = extractRules(args);
    var key = getKeyForRules(rules);
    var className = '';
    if (key) {
        var stylesheet = Stylesheet_1.Stylesheet.getInstance();
        className = stylesheet.classNameFromKey(key);
        if (!className) {
            className = stylesheet.getClassName(getDisplayName(rules));
            var registeredRules = [];
            for (var _a = 0, _b = rules.__order; _a < _b.length; _a++) {
                var selector = _b[_a];
                var rulesToInsert = serializeRuleEntries(rules[selector]);
                if (rulesToInsert) {
                    registeredRules.push(selector, rulesToInsert);
                    selector = selector.replace(/\&/g, "." + className);
                    stylesheet.insertRule(selector + "{" + rulesToInsert + "}");
                }
            }
            stylesheet.cacheClassName(className, key, args, registeredRules);
        }
    }
    return className;
}
exports.styleToClassName = styleToClassName;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultPalette = {
    themeDarker: '#004578',
    themeDark: '#005a9e',
    themeDarkAlt: '#106ebe',
    themePrimary: '#0078d7',
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeLight: '#c7e0f4',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    black: '#000000',
    blackTranslucent40: 'rgba(0,0,0,.4)',
    neutralDark: '#212121',
    neutralPrimary: '#333333',
    neutralPrimaryAlt: '#3c3c3c',
    neutralSecondary: '#666666',
    neutralTertiary: '#a6a6a6',
    neutralTertiaryAlt: '#c8c8c8',
    neutralQuaternary: '#d0d0d0',
    neutralQuaternaryAlt: '#dadada',
    neutralLight: '#eaeaea',
    neutralLighter: '#f4f4f4',
    neutralLighterAlt: '#f8f8f8',
    accent: '#0078d7',
    white: '#ffffff',
    yellow: '#ffb900',
    yellowLight: '#fff100',
    orange: '#d83b01',
    orangeLight: '#ea4300',
    orangeLighter: '#ff8c00',
    redDark: '#a80000',
    red: '#e81123',
    magentaDark: '#5c005c',
    magenta: '#b4009e',
    magentaLight: '#e3008c',
    purpleDark: '#32145a',
    purple: '#5c2d91',
    purpleLight: '#b4a0ff',
    blueDark: '#002050',
    blueMid: '#00188f',
    blue: '#0078d7',
    blueLight: '#00bcf2',
    tealDark: '#004b50',
    teal: '#008272',
    tealLight: '#00b294',
    greenDark: '#004b1c',
    green: '#107c10',
    greenLight: '#bad80a',
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var buildClassMap_1 = __webpack_require__(80);
exports.buildClassMap = buildClassMap_1.buildClassMap;
var icons_1 = __webpack_require__(36);
exports.getIcon = icons_1.getIcon;
exports.registerIcons = icons_1.registerIcons;
exports.registerIconAlias = icons_1.registerIconAlias;
exports.setIconOptions = icons_1.setIconOptions;
var getIconClassName_1 = __webpack_require__(81);
exports.getIconClassName = getIconClassName_1.getIconClassName;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var GlobalSettings_1 = __webpack_require__(22);
var EventGroup_1 = __webpack_require__(14);
var CustomizationsGlobalKey = 'customizations';
var NO_CUSTOMIZATIONS = { settings: {}, scopedSettings: {} };
var _allSettings = GlobalSettings_1.GlobalSettings.getValue(CustomizationsGlobalKey, {
    settings: {},
    scopedSettings: {}
});
var _events = new EventGroup_1.EventGroup(_allSettings);
var Customizations = (function () {
    function Customizations() {
    }
    Customizations.reset = function () {
        _allSettings.settings = {};
        _allSettings.scopedSettings = {};
    };
    // tslint:disable-next-line:no-any
    Customizations.applySettings = function (settings) {
        _allSettings.settings = tslib_1.__assign({}, _allSettings.settings, settings);
        Customizations._raiseChange();
    };
    // tslint:disable-next-line:no-any
    Customizations.applyScopedSettings = function (scopeName, settings) {
        _allSettings.scopedSettings[scopeName] = tslib_1.__assign({}, _allSettings.scopedSettings[scopeName], settings);
        Customizations._raiseChange();
    };
    Customizations.getSettings = function (properties, scopeName, localSettings
        // tslint:disable-next-line:no-any
    ) {
        if (localSettings === void 0) { localSettings = NO_CUSTOMIZATIONS; }
        // tslint:disable-next-line:no-any
        var settings = {};
        var localScopedSettings = (scopeName && localSettings.scopedSettings[scopeName]) || {};
        var globalScopedSettings = (scopeName && _allSettings.scopedSettings[scopeName]) || {};
        for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
            var property = properties_1[_i];
            settings[property] = (localScopedSettings[property] ||
                localSettings.settings[property] ||
                globalScopedSettings[property] ||
                _allSettings.settings[property]);
        }
        return settings;
    };
    Customizations.observe = function (onChange) {
        _events.on(_allSettings, 'change', onChange);
    };
    Customizations.unobserve = function (onChange) {
        _events.off(_allSettings, 'change', onChange);
    };
    Customizations._raiseChange = function () {
        _events.raise('change');
    };
    return Customizations;
}());
exports.Customizations = Customizations;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Storing global state in local module variables has issues when more than one copy
 * if the module gets loaded on the page (due to a bundling error or simply by consuming
 * a prebundled script.)
 *
 * This file contains helpers to deal with the getting and setting local state, and allows
 * callers to get called back when it mutates.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GLOBAL_SETTINGS_PROP_NAME = '__globalSettings__';
var CALLBACK_STATE_PROP_NAME = '__callbacks__';
// tslint:disable-next-line:no-any
var _globalSettings = {};
var _counter = 0;
if (typeof window !== 'undefined') {
    // tslint:disable-next-line:no-any
    var win = window;
    _globalSettings = win[GLOBAL_SETTINGS_PROP_NAME] = win[GLOBAL_SETTINGS_PROP_NAME] || (_a = {},
        _a[CALLBACK_STATE_PROP_NAME] = {},
        _a);
}
var _callbacks = _globalSettings[CALLBACK_STATE_PROP_NAME];
/**
 * Global settings helper, which stores settings in the global (window) namespace.
 * If window is not provided, it will store settings in module scope. Provides a
 * way to observe changes as well when their values change.
 *
 * @public
 */
var GlobalSettings = (function () {
    function GlobalSettings() {
    }
    GlobalSettings.getValue = function (key, defaultValue) {
        if (_globalSettings[key] === undefined) {
            _globalSettings[key] = typeof defaultValue === 'function' ? defaultValue() : defaultValue;
        }
        return _globalSettings[key];
    };
    GlobalSettings.setValue = function (key, value) {
        var oldValue = _globalSettings[key];
        if (value !== oldValue) {
            _globalSettings[key] = value;
            var changeDescription = {
                oldValue: oldValue,
                value: value,
                key: key
            };
            for (var id in _callbacks) {
                if (_callbacks.hasOwnProperty(id)) {
                    _callbacks[id](changeDescription);
                }
            }
        }
        return value;
    };
    GlobalSettings.addChangeListener = function (cb) {
        // Note: we use generated ids on the callbacks to create a map of the callbacks, which optimizes removal.
        // (It's faster to delete a key than it is to look up the index of an object and splice an array.)
        var id = cb.__id__;
        if (!id) {
            id = cb.__id__ = String(_counter++);
        }
        _callbacks[id] = cb;
    };
    GlobalSettings.removeChangeListener = function (cb) {
        delete _callbacks[cb.__id__];
    };
    return GlobalSettings;
}());
exports.GlobalSettings = GlobalSettings;
var _a;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _warningCallback = warn;
/**
 * Warns when a deprecated props are being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
 * either null or a replacement prop name.
 */
function warnDeprecations(componentName, props, deprecationMap) {
    for (var propName in deprecationMap) {
        if (props && propName in props) {
            var deprecationMessage = componentName + " property '" + propName + "' was used but has been deprecated.";
            var replacementPropName = deprecationMap[propName];
            if (replacementPropName) {
                deprecationMessage += " Use '" + replacementPropName + "' instead.";
            }
            _warningCallback(deprecationMessage);
        }
    }
}
exports.warnDeprecations = warnDeprecations;
/**
 * Warns when two props which are mutually exclusive are both being used.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param exclusiveMap - A map where the key is a parameter, and the value is the other parameter.
 */
function warnMutuallyExclusive(componentName, props, exclusiveMap) {
    for (var propName in exclusiveMap) {
        if (props && propName in props) {
            var propInExclusiveMapValue = exclusiveMap[propName];
            if (propInExclusiveMapValue && propInExclusiveMapValue in props) {
                _warningCallback(componentName + " property '" + propName + "' is mutually exclusive with '" + exclusiveMap[propName] + "'. Use one or the other.");
            }
        }
    }
}
exports.warnMutuallyExclusive = warnMutuallyExclusive;
/**
 * Warns when props are required if a condition is met.
 *
 * @public
 * @param componentName - The name of the component being used.
 * @param props - The props passed into the component.
 * @param requiredProps - The name of the props that are required when the condition is met.
 * @param conditionalPropName - The name of the prop that the condition is based on.
 * @param condition - Whether the condition is met.
*/
function warnConditionallyRequiredProps(componentName, props, requiredProps, conditionalPropName, condition) {
    if (condition === true) {
        for (var _i = 0, requiredProps_1 = requiredProps; _i < requiredProps_1.length; _i++) {
            var requiredPropName = requiredProps_1[_i];
            if (!(requiredPropName in props)) {
                _warningCallback(componentName + " property '" + requiredPropName + "' is required when '" + conditionalPropName + "' is used.'");
            }
        }
    }
}
exports.warnConditionallyRequiredProps = warnConditionallyRequiredProps;
/**
 * Sends a warning to console, if the api is present.
 *
 * @public
 * @param message - Warning message.
 */
function warn(message) {
    if (console && console.warn) {
        console.warn(message);
    }
}
exports.warn = warn;
/**
 * Configures the warning callback. Passing in undefined will reset it to use the default
 * console.warn function.
 *
 * @public
 * @param warningCallback - Callback to override the generated warnings.
 */
function setWarningCallback(warningCallback) {
    _warningCallback = warningCallback === undefined ? warn : warningCallback;
}
exports.setWarningCallback = setWarningCallback;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(137), exports);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(140), exports);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(151), exports);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(1);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(2);
var Check_1 = __webpack_require__(42);
var DetailsRowCheckStyles = __webpack_require__(28);
var CheckStylesModule = __webpack_require__(43);
// tslint:disable:no-any
var CheckStyles = CheckStylesModule;
exports.DetailsRowCheck = function (props) {
    var canSelect = props.canSelect, isSelected = props.isSelected, anySelected = props.anySelected, selected = props.selected, buttonProps = tslib_1.__rest(props, ["canSelect", "isSelected", "anySelected", "selected"]);
    var isPressed = props.isSelected || props.selected;
    return (React.createElement("button", tslib_1.__assign({}, buttonProps, { role: 'checkbox', className: Utilities_1.css('ms-DetailsRow-check', DetailsRowCheckStyles.check, CheckStyles.checkHost, !props.canSelect && DetailsRowCheckStyles.isDisabled, !props.canSelect && 'ms-DetailsRow-check--isDisabled'), "aria-checked": isPressed, "data-selection-toggle": true, "data-automationid": 'DetailsRowCheck' }),
        React.createElement(Check_1.Check, { checked: isPressed })));
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(3);
load_themed_styles_1.loadStyles([{ "rawString": ".check_bd570c10{display:inline-block;cursor:default;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:top;background:none;border:none;opacity:0}.check_bd570c10::-moz-focus-inner{border:0}.check_bd570c10{outline:transparent}.check_bd570c10{position:relative}.ms-Fabric.is-focusVisible .check_bd570c10:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.check_bd570c10:focus{opacity:1}button.check_bd570c10{height:40px;width:40px;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.owner_bd570c10.isSelected_bd570c10 .check_bd570c10,.owner_bd570c10.isVisible_bd570c10 .check_bd570c10,.owner_bd570c10:hover .check_bd570c10{opacity:1}.ms-Fabric.is-focusVisible .owner_bd570c10:focus .check_bd570c10{opacity:1}.isDisabled_bd570c10{visibility:hidden}\n" }]);
exports.check = "check_bd570c10";
exports.owner = "owner_bd570c10";
exports.isSelected = "isSelected_bd570c10";
exports.isVisible = "isVisible_bd570c10";
exports.isDisabled = "isDisabled_bd570c10";


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 32 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Combine a set of styles together (but does not register css classes.)
 * @public
 */
function concatStyleSets() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // tslint:disable-next-line:no-any
    var mergedSet = {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var currentSet = args_1[_a];
        if (currentSet) {
            for (var prop in currentSet) {
                if (currentSet.hasOwnProperty(prop)) {
                    var mergedValue = mergedSet[prop];
                    var currentValue = currentSet[prop];
                    if (mergedValue === undefined) {
                        mergedSet[prop] = currentValue;
                    }
                    else {
                        mergedSet[prop] = (Array.isArray(mergedValue) ? mergedValue : [mergedValue]).concat((Array.isArray(currentValue) ? currentValue : [currentValue]));
                    }
                }
            }
        }
    }
    return mergedSet;
}
exports.concatStyleSets = concatStyleSets;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var styleToClassName_1 = __webpack_require__(18);
var Stylesheet_1 = __webpack_require__(9);
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function mergeStyles() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    var objects = [];
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    function _processArgs(argsList) {
        for (var _i = 0, argsList_1 = argsList; _i < argsList_1.length; _i++) {
            var arg = argsList_1[_i];
            if (arg) {
                if (typeof arg === 'string') {
                    var translatedArgs = stylesheet.argsFromClassName(arg);
                    if (translatedArgs) {
                        objects.push(translatedArgs);
                    }
                    else {
                        classes.push(arg);
                    }
                }
                else if (Array.isArray(arg)) {
                    _processArgs(arg);
                }
                else if (typeof arg === 'object') {
                    objects.push(arg);
                }
            }
        }
    }
    _processArgs(args);
    if (objects.length) {
        classes.push(styleToClassName_1.styleToClassName(objects));
    }
    return classes.join(' ');
}
exports.mergeStyles = mergeStyles;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
var language_1 = __webpack_require__(39);
// Default urls.
var DefaultBaseUrl = 'https://static2.sharepointonline.com/files/fabric/assets';
// Fallback fonts, if specified system or web fonts are unavailable.
var FontFamilyFallbacks = "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif";
// Font face names to be registered.
var FontNameArabic = 'Segoe UI Web (Arabic)';
var FontNameCyrillic = 'Segoe UI Web (Cyrillic)';
var FontNameEastEuropean = 'Segoe UI Web (East European)';
var FontNameGreek = 'Segoe UI Web (Greek)';
var FontNameHebrew = 'Segoe UI Web (Hebrew)';
var FontNameThai = 'Leelawadee UI Web';
var FontNameVietnamese = 'Segoe UI Web (Vietnamese)';
var FontNameWestEuropean = 'Segoe UI Web (West European)';
var FontNameSelawik = 'Selawik Web';
// Font families with fallbacks, for the general regions.
var FontFamilyArabic = "'" + FontNameArabic + "'";
var FontFamilyChineseSimplified = "'Microsoft Yahei', Verdana, Simsun";
var FontFamilyChineseTraditional = "'Microsoft Jhenghei', Pmingliu";
var FontFamilyCyrillic = "'" + FontNameCyrillic + "'";
var FontFamilyEastEuropean = "'" + FontNameEastEuropean + "'";
var FontFamilyGreek = "'" + FontNameGreek + "'";
var FontFamilyHebrew = "'" + FontNameHebrew + "'";
var FontFamilyHindi = "'Nirmala UI'";
var FontFamilyJapanese = "'Yu Gothic', 'Meiryo UI', Meiryo, 'MS Pgothic', Osaka";
var FontFamilyKorean = "'Malgun Gothic', Gulim";
var FontFamilySelawik = "'" + FontNameSelawik + "'";
var FontFamilyThai = "'Leelawadee UI Web', 'Kmer UI'";
var FontFamilyVietnamese = "'" + FontNameVietnamese + "'";
var FontFamilyWestEuropean = "'" + FontNameWestEuropean + "'";
// Mapping of language prefix to to font family.
var LanguageToFontMap = {
    'ar': FontFamilyArabic,
    'bg': FontFamilyCyrillic,
    'cs': FontFamilyEastEuropean,
    'el': FontFamilyGreek,
    'et': FontFamilyEastEuropean,
    'he': FontFamilyHebrew,
    'hi': FontFamilyHindi,
    'hr': FontFamilyEastEuropean,
    'hu': FontFamilyEastEuropean,
    'ja': FontFamilyJapanese,
    'kk': FontFamilyEastEuropean,
    'ko': FontFamilyKorean,
    'lt': FontFamilyEastEuropean,
    'lv': FontFamilyEastEuropean,
    'pl': FontFamilyEastEuropean,
    'ru': FontFamilyCyrillic,
    'sk': FontFamilyEastEuropean,
    'sr-latn': FontFamilyEastEuropean,
    'th': FontFamilyThai,
    'tr': FontFamilyEastEuropean,
    'uk': FontFamilyCyrillic,
    'vi': FontFamilyVietnamese,
    'zh-hans': FontFamilyChineseSimplified,
    'zh-hant': FontFamilyChineseTraditional,
};
// Standard font sizes.
var FontSizes;
(function (FontSizes) {
    FontSizes.mini = '10px';
    FontSizes.xSmall = '11px';
    FontSizes.small = '12px';
    FontSizes.smallPlus = '13px';
    FontSizes.medium = '14px';
    FontSizes.mediumPlus = '15px';
    FontSizes.icon = '16px';
    FontSizes.large = '17px';
    FontSizes.xLarge = '21px';
    FontSizes.xxLarge = '28px';
    FontSizes.superLarge = '42px';
    FontSizes.mega = '72px';
})(FontSizes = exports.FontSizes || (exports.FontSizes = {}));
// Standard font weights.
var FontWeights;
(function (FontWeights) {
    FontWeights.light = 100;
    FontWeights.semilight = 300;
    FontWeights.regular = 400;
    FontWeights.semibold = 600;
    FontWeights.bold = 700;
})(FontWeights = exports.FontWeights || (exports.FontWeights = {}));
// Standard font styling.
exports.DefaultFontStyles = {
    tiny: _createFont(FontSizes.mini, FontWeights.semibold),
    xSmall: _createFont(FontSizes.xSmall, FontWeights.regular),
    small: _createFont(FontSizes.small, FontWeights.regular),
    smallPlus: _createFont(FontSizes.smallPlus, FontWeights.regular),
    medium: _createFont(FontSizes.medium, FontWeights.regular),
    mediumPlus: _createFont(FontSizes.mediumPlus, FontWeights.regular),
    large: _createFont(FontSizes.large, FontWeights.semilight),
    xLarge: _createFont(FontSizes.xLarge, FontWeights.light),
    xxLarge: _createFont(FontSizes.xxLarge, FontWeights.light),
    superLarge: _createFont(FontSizes.superLarge, FontWeights.light),
    mega: _createFont(FontSizes.mega, FontWeights.light)
};
function _getFontFamily() {
    var language = language_1.getLanguage();
    var fontFamily = FontFamilyWestEuropean;
    for (var lang in LanguageToFontMap) {
        if (LanguageToFontMap.hasOwnProperty(lang) && language && lang.indexOf(language) === 0) {
            // tslint:disable-next-line:no-any
            fontFamily = LanguageToFontMap[lang];
            break;
        }
    }
    return fontFamily + ", " + FontFamilyFallbacks;
}
function _createFont(size, weight) {
    return {
        fontFamily: _getFontFamily(),
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',
        fontSize: size,
        fontWeight: weight
    };
}
function _registerFontFace(fontFamily, url, fontWeight) {
    fontFamily = "'" + fontFamily + "'";
    index_1.fontFace({
        fontFamily: fontFamily,
        src: "url('" + url + ".woff2') format('woff2')," +
            ("url('" + url + ".woff') format('woff')"),
        fontWeight: fontWeight,
        fontStyle: 'normal'
    });
}
function _registerFontFaceSet(baseUrl, fontFamily, cdnFolder, cdnFontName) {
    if (cdnFontName === void 0) { cdnFontName = 'segoeui'; }
    var urlBase = baseUrl + "/" + cdnFolder + "/" + cdnFontName;
    _registerFontFace(fontFamily, urlBase + '-light', FontWeights.light);
    _registerFontFace(fontFamily, urlBase + '-semilight', FontWeights.semilight);
    _registerFontFace(fontFamily, urlBase + '-regular', FontWeights.regular);
    _registerFontFace(fontFamily, urlBase + '-semibold', FontWeights.semibold);
}
function _registerDefaultFontFaces() {
    var baseUrl = _getFontBaseUrl();
    if (baseUrl) {
        var fontUrl = baseUrl + "/fonts";
        // Produce @font-face definitions for all supported web fonts.
        _registerFontFaceSet(fontUrl, FontNameThai, 'leelawadeeui-thai', 'leelawadeeui');
        _registerFontFaceSet(fontUrl, FontNameArabic, 'segoeui-arabic');
        _registerFontFaceSet(fontUrl, FontNameCyrillic, 'segoeui-cyrillic');
        _registerFontFaceSet(fontUrl, FontNameEastEuropean, 'segoeui-easteuropean');
        _registerFontFaceSet(fontUrl, FontNameGreek, 'segoeui-greek');
        _registerFontFaceSet(fontUrl, FontNameHebrew, 'segoeui-hebrew');
        _registerFontFaceSet(fontUrl, FontNameVietnamese, 'segoeui-vietnamese');
        _registerFontFaceSet(fontUrl, FontNameWestEuropean, 'segoeui-westeuropean');
        _registerFontFaceSet(fontUrl, FontFamilySelawik, 'selawik', 'selawik');
        // Leelawadee UI (Thai) does not have a 'light' weight, so we override
        // the font-face generated above to use the 'semilight' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-semilight", FontWeights.light);
        // Leelawadee UI (Thai) does not have a 'semibold' weight, so we override
        // the font-face generated above to use the 'bold' weight instead.
        _registerFontFace('Leelawadee UI Web', fontUrl + "/leelawadeeui-thai/leelawadeeui-bold", FontWeights.semibold);
    }
}
/**
 * Reads the fontBaseUrl from window.FabricConfig.fontBaseUrl or falls back to a default.
 */
function _getFontBaseUrl() {
    var win = typeof window !== 'undefined' ? window : undefined;
    // tslint:disable-next-line:no-string-literal no-any
    var fabricConfig = win ? win['FabricConfig'] : undefined;
    return (fabricConfig && fabricConfig.fontBaseUrl !== undefined) ? fabricConfig.fontBaseUrl : DefaultBaseUrl;
}
/**
 * Register the font faces.
 */
_registerDefaultFontFaces();


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var warn_1 = __webpack_require__(23);
var GlobalSettings_1 = __webpack_require__(22);
var index_1 = __webpack_require__(4);
var ICON_SETTING_NAME = 'icons';
var _icons = GlobalSettings_1.GlobalSettings.getValue(ICON_SETTING_NAME, {
    __options: {
        warnOnMissingIcons: true
    },
    __remapped: {}
});
/**
 * Registers a given subset of icons.
 *
 * @param iconSubset - the icon subset definition.
 */
function registerIcons(iconSubset) {
    var subset = tslib_1.__assign({}, iconSubset, { isRegistered: false, className: undefined });
    var icons = iconSubset.icons;
    for (var iconName in icons) {
        if (icons.hasOwnProperty(iconName)) {
            var code = icons[iconName];
            var normalizedIconName = iconName.toLowerCase();
            if (_icons[normalizedIconName]) {
                warn_1.warn("Icon '" + iconName + " being re-registered");
            }
            _icons[normalizedIconName] = {
                code: code,
                subset: subset
            };
        }
    }
}
exports.registerIcons = registerIcons;
/**
 * Remaps one icon name to another.
 */
function registerIconAlias(iconName, mappedToName) {
    _icons.__remapped[iconName.toLowerCase()] = mappedToName.toLowerCase();
}
exports.registerIconAlias = registerIconAlias;
/**
 * Gets an icon definition. If an icon is requested but the subset has yet to be registered,
 * it will get registered immediately.
 *
 * @public
 * @param name - Name of icon.
 */
function getIcon(name) {
    var icon = undefined;
    name = name ? name.toLowerCase() : '';
    name = _icons.__remapped[name] || name;
    if (name) {
        icon = _icons[name];
        if (icon) {
            var subset = icon.subset;
            if (!subset.isRegistered) {
                // Register font face for given icons.
                index_1.fontFace(subset.fontFace);
                // Generate a base class name for the given font.
                subset.className = index_1.mergeStyles(subset.style, {
                    fontFamily: subset.fontFace.fontFamily,
                    fontWeight: subset.fontFace.fontWeight || 'normal',
                    fontStyle: subset.fontFace.fontStyle || 'normal'
                }).toString();
                subset.isRegistered = true;
            }
        }
        else {
            if (_icons.__options.warnOnMissingIcons) {
                warn_1.warn("The icon \"" + name + "\" was referenced but not registered.");
            }
        }
    }
    return icon;
}
exports.getIcon = getIcon;
/**
 * Sets the icon options.
 *
 * @public
 */
function setIconOptions(options) {
    _icons.__options = tslib_1.__assign({}, _icons.__options, options);
}
exports.setIconOptions = setIconOptions;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Bugs often appear in async code when stuff gets disposed, but async operations don't get canceled.
 * This Async helper class solves these issues by tying async code to the lifetime of a disposable object.
 *
 * Usage: Anything class extending from BaseModel can access this helper via this.async. Otherwise create a
 * new instance of the class and remember to call dispose() during your code's dispose handler.
 *
 * @public
 */
var Async = (function () {
    // tslint:disable-next-line:no-any
    function Async(parent, onError) {
        this._timeoutIds = null;
        this._immediateIds = null;
        this._intervalIds = null;
        this._animationFrameIds = null;
        this._isDisposed = false;
        this._parent = parent || null;
        this._onErrorHandler = onError;
        this._noop = function () { };
    }
    /**
     * Dispose function, clears all async operations.
     */
    Async.prototype.dispose = function () {
        var id;
        this._isDisposed = true;
        this._parent = null;
        // Clear timeouts.
        if (this._timeoutIds) {
            for (id in this._timeoutIds) {
                if (this._timeoutIds.hasOwnProperty(id)) {
                    this.clearTimeout(parseInt(id, 10));
                }
            }
            this._timeoutIds = null;
        }
        // Clear immediates.
        if (this._immediateIds) {
            for (id in this._immediateIds) {
                if (this._immediateIds.hasOwnProperty(id)) {
                    this.clearImmediate(parseInt(id, 10));
                }
            }
            this._immediateIds = null;
        }
        // Clear intervals.
        if (this._intervalIds) {
            for (id in this._intervalIds) {
                if (this._intervalIds.hasOwnProperty(id)) {
                    this.clearInterval(parseInt(id, 10));
                }
            }
            this._intervalIds = null;
        }
        // Clear animation frames.
        if (this._animationFrameIds) {
            for (id in this._animationFrameIds) {
                if (this._animationFrameIds.hasOwnProperty(id)) {
                    this.cancelAnimationFrame(parseInt(id, 10));
                }
            }
            this._animationFrameIds = null;
        }
    };
    /**
     * SetTimeout override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setTimeout = function (callback, duration) {
        var _this = this;
        var timeoutId = 0;
        if (!this._isDisposed) {
            if (!this._timeoutIds) {
                this._timeoutIds = {};
            }
            /* tslint:disable:ban-native-functions */
            timeoutId = setTimeout(function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._timeoutIds) {
                        delete _this._timeoutIds[timeoutId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    if (_this._onErrorHandler) {
                        _this._onErrorHandler(e);
                    }
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._timeoutIds[timeoutId] = true;
        }
        return timeoutId;
    };
    /**
     * Clears the timeout.
     * @param id - Id to cancel.
     */
    Async.prototype.clearTimeout = function (id) {
        if (this._timeoutIds && this._timeoutIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearTimeout(id);
            delete this._timeoutIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetImmediate override, which will auto cancel the immediate during dispose.
     * @param callback - Callback to execute.
     * @returns The setTimeout id.
     */
    Async.prototype.setImmediate = function (callback) {
        var _this = this;
        var immediateId = 0;
        if (!this._isDisposed) {
            if (!this._immediateIds) {
                this._immediateIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var setImmediateCallback = function () {
                // Time to execute the timeout, enqueue it as a foreground task to be executed.
                try {
                    // Now delete the record and call the callback.
                    if (_this._immediateIds) {
                        delete _this._immediateIds[immediateId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            immediateId = window.setImmediate ? window.setImmediate(setImmediateCallback) : window.setTimeout(setImmediateCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._immediateIds[immediateId] = true;
        }
        return immediateId;
    };
    /**
     * Clears the immediate.
     * @param id - Id to cancel.
     */
    Async.prototype.clearImmediate = function (id) {
        if (this._immediateIds && this._immediateIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.clearImmediate ? window.clearImmediate(id) : window.clearTimeout(id);
            delete this._immediateIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * SetInterval override, which will auto cancel the timeout during dispose.
     * @param callback - Callback to execute.
     * @param duration - Duration in milliseconds.
     * @returns The setTimeout id.
     */
    Async.prototype.setInterval = function (callback, duration) {
        var _this = this;
        var intervalId = 0;
        if (!this._isDisposed) {
            if (!this._intervalIds) {
                this._intervalIds = {};
            }
            /* tslint:disable:ban-native-functions */
            intervalId = setInterval(function () {
                // Time to execute the interval callback, enqueue it as a foreground task to be executed.
                try {
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            }, duration);
            /* tslint:enable:ban-native-functions */
            this._intervalIds[intervalId] = true;
        }
        return intervalId;
    };
    /**
     * Clears the interval.
     * @param id - Id to cancel.
     */
    Async.prototype.clearInterval = function (id) {
        if (this._intervalIds && this._intervalIds[id]) {
            /* tslint:disable:ban-native-functions */
            clearInterval(id);
            delete this._intervalIds[id];
            /* tslint:enable:ban-native-functions */
        }
    };
    /**
     * Creates a function that, when executed, will only call the func function at most once per
     * every wait milliseconds. Provide an options object to indicate that func should be invoked
     * on the leading and/or trailing edge of the wait timeout. Subsequent calls to the throttled
     * function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the throttled function is invoked more than once during the wait timeout.
     *
     * @param func - The function to throttle.
     * @param wait - The number of milliseconds to throttle executions to. Defaults to 0.
     * @param options - The options object.
     * @returns The new throttled function.
     */
    Async.prototype.throttle = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = true;
        var trailing = true;
        var lastExecuteTime = 0;
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof (options.leading) === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof (options.trailing) === 'boolean') {
            trailing = options.trailing;
        }
        var callback = function (userCall) {
            var now = (new Date).getTime();
            var delta = now - lastExecuteTime;
            var waitLength = leading ? waitMS - delta : waitMS;
            if (delta >= waitMS && (!userCall || leading)) {
                lastExecuteTime = now;
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if (timeoutId === null && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    /**
     * Creates a function that will delay the execution of func until after wait milliseconds have
     * elapsed since the last time it was invoked. Provide an options object to indicate that func
     * should be invoked on the leading and/or trailing edge of the wait timeout. Subsequent calls
     * to the debounced function will return the result of the last func call.
     *
     * Note: If leading and trailing options are true func will be called on the trailing edge of
     * the timeout only if the the debounced function is invoked more than once during the wait
     * timeout.
     *
     * @param func - The function to debounce.
     * @param wait - The number of milliseconds to delay.
     * @param options - The options object.
     * @returns The new debounced function.
     */
    Async.prototype.debounce = function (func, wait, options) {
        var _this = this;
        if (this._isDisposed) {
            return this._noop;
        }
        var waitMS = wait || 0;
        var leading = false;
        var trailing = true;
        var maxWait = null;
        var lastCallTime = 0;
        var lastExecuteTime = (new Date).getTime();
        var lastResult;
        // tslint:disable-next-line:no-any
        var lastArgs;
        var timeoutId = null;
        if (options && typeof (options.leading) === 'boolean') {
            leading = options.leading;
        }
        if (options && typeof (options.trailing) === 'boolean') {
            trailing = options.trailing;
        }
        if (options && typeof (options.maxWait) === 'number' && !isNaN(options.maxWait)) {
            maxWait = options.maxWait;
        }
        var callback = function (userCall) {
            var now = (new Date).getTime();
            var executeImmediately = false;
            if (userCall) {
                if (leading && now - lastCallTime >= waitMS) {
                    executeImmediately = true;
                }
                lastCallTime = now;
            }
            var delta = now - lastCallTime;
            var waitLength = waitMS - delta;
            var maxWaitDelta = now - lastExecuteTime;
            var maxWaitExpired = false;
            if (maxWait !== null) {
                // maxWait only matters when there is a pending callback
                if (maxWaitDelta >= maxWait && timeoutId) {
                    maxWaitExpired = true;
                }
                else {
                    waitLength = Math.min(waitLength, maxWait - maxWaitDelta);
                }
            }
            if (delta >= waitMS || maxWaitExpired || executeImmediately) {
                if (timeoutId) {
                    _this.clearTimeout(timeoutId);
                    timeoutId = null;
                }
                lastExecuteTime = now;
                lastResult = func.apply(_this._parent, lastArgs);
            }
            else if ((timeoutId === null || !userCall) && trailing) {
                timeoutId = _this.setTimeout(callback, waitLength);
            }
            return lastResult;
        };
        // tslint:disable-next-line:no-any
        var resultFunction = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            lastArgs = args;
            return callback(true);
        };
        return resultFunction;
    };
    Async.prototype.requestAnimationFrame = function (callback) {
        var _this = this;
        var animationFrameId = 0;
        if (!this._isDisposed) {
            if (!this._animationFrameIds) {
                this._animationFrameIds = {};
            }
            /* tslint:disable:ban-native-functions */
            var animationFrameCallback = function () {
                try {
                    // Now delete the record and call the callback.
                    if (_this._animationFrameIds) {
                        delete _this._animationFrameIds[animationFrameId];
                    }
                    callback.apply(_this._parent);
                }
                catch (e) {
                    _this._logError(e);
                }
            };
            animationFrameId = window.requestAnimationFrame ?
                window.requestAnimationFrame(animationFrameCallback) :
                window.setTimeout(animationFrameCallback, 0);
            /* tslint:enable:ban-native-functions */
            this._animationFrameIds[animationFrameId] = true;
        }
        return animationFrameId;
    };
    Async.prototype.cancelAnimationFrame = function (id) {
        if (this._animationFrameIds && this._animationFrameIds[id]) {
            /* tslint:disable:ban-native-functions */
            window.cancelAnimationFrame ? window.cancelAnimationFrame(id) : window.clearTimeout(id);
            /* tslint:enable:ban-native-functions */
            delete this._animationFrameIds[id];
        }
    };
    // tslint:disable-next-line:no-any
    Async.prototype._logError = function (e) {
        if (this._onErrorHandler) {
            this._onErrorHandler(e);
        }
    };
    return Async;
}());
exports.Async = Async;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var Async_1 = __webpack_require__(37);
var EventGroup_1 = __webpack_require__(14);
var warn_1 = __webpack_require__(23);
/**
 * BaseComponent class, which provides basic helpers for all components.
 *
 * @public
 */
var BaseComponent = (function (_super) {
    tslib_1.__extends(BaseComponent, _super);
    // tslint:enable:variable-name
    /**
     * BaseComponent constructor
     * @param props - The props for the component.
     * @param context - The context for the component.
     */
    // tslint:disable-next-line:no-any
    function BaseComponent(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this._shouldUpdateComponentRef = true;
        _makeAllSafe(_this, BaseComponent.prototype, [
            'componentWillMount',
            'componentDidMount',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentWillReceiveProps',
            'render',
            'componentDidUpdate',
            'componentWillUnmount'
        ]);
        return _this;
    }
    /**
     * When the component will receive props, make sure the componentRef is updated.
     */
    // tslint:disable-next-line:no-any
    BaseComponent.prototype.componentWillReceiveProps = function (newProps, newContext) {
        this._updateComponentRef(this.props, newProps);
    };
    /**
     * When the component has mounted, update the componentRef.
     */
    BaseComponent.prototype.componentDidMount = function () {
        this._updateComponentRef(undefined, this.props);
    };
    /**
     * If we have disposables, dispose them automatically on unmount.
     */
    BaseComponent.prototype.componentWillUnmount = function () {
        if (this.__disposables) {
            for (var i = 0, len = this._disposables.length; i < len; i++) {
                var disposable = this.__disposables[i];
                if (disposable.dispose) {
                    disposable.dispose();
                }
            }
            this.__disposables = null;
        }
    };
    Object.defineProperty(BaseComponent.prototype, "className", {
        /**
         * Gets the object's class name.
         */
        get: function () {
            if (!this.__className) {
                var funcNameRegex = /function (.{1,})\(/;
                var results = (funcNameRegex).exec((this).constructor.toString());
                this.__className = (results && results.length > 1) ? results[1] : '';
            }
            return this.__className;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_disposables", {
        /**
         * Allows subclasses to push things to this._disposables to be auto disposed.
         */
        get: function () {
            if (!this.__disposables) {
                this.__disposables = [];
            }
            return this.__disposables;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_async", {
        /**
         * Gets the async instance associated with the component, created on demand. The async instance gives
         * subclasses a way to execute setTimeout/setInterval async calls safely, where the callbacks
         * will be cleared/ignored automatically after unmounting. The helpers within the async object also
         * preserve the this pointer so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__async) {
                this.__async = new Async_1.Async(this);
                this._disposables.push(this.__async);
            }
            return this.__async;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseComponent.prototype, "_events", {
        /**
         * Gets the event group instance assocaited with the component, created on demand. The event instance
         * provides on/off methods for listening to DOM (or regular javascript object) events. The event callbacks
         * will be automatically disconnected after unmounting. The helpers within the events object also
         * preserve the this reference so that you don't need to "bind" the callbacks.
         */
        get: function () {
            if (!this.__events) {
                this.__events = new EventGroup_1.EventGroup(this);
                this._disposables.push(this.__events);
            }
            return this.__events;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Helper to return a memoized ref resolver function.
     * @param refName - Name of the member to assign the ref to.
     * @returns A function instance keyed from the given refname.
     */
    BaseComponent.prototype._resolveRef = function (refName) {
        var _this = this;
        if (!this.__resolves) {
            this.__resolves = {};
        }
        if (!this.__resolves[refName]) {
            // tslint:disable-next-line:no-any
            this.__resolves[refName] = function (ref) {
                // tslint:disable-next-line:no-any
                return _this[refName] = ref;
            };
        }
        return this.__resolves[refName];
    };
    /**
     * Updates the componentRef (by calling it with "this" when necessary.)
     */
    BaseComponent.prototype._updateComponentRef = function (currentProps, newProps) {
        if (newProps === void 0) { newProps = {}; }
        if (this._shouldUpdateComponentRef &&
            ((!currentProps && newProps.componentRef) ||
                (currentProps && currentProps.componentRef !== newProps.componentRef))) {
            if (currentProps && currentProps.componentRef) {
                currentProps.componentRef(null);
            }
            if (newProps.componentRef) {
                newProps.componentRef(this);
            }
        }
    };
    /**
     * Warns when a deprecated props are being used.
     *
     * @param deprecationMap - The map of deprecations, where key is the prop name and the value is
     * either null or a replacement prop name.
     */
    BaseComponent.prototype._warnDeprecations = function (deprecationMap) {
        warn_1.warnDeprecations(this.className, this.props, deprecationMap);
    };
    /**
     * Warns when props which are mutually exclusive with each other are both used.
     *
     * @param mutuallyExclusiveMap - The map of mutually exclusive props.
     */
    BaseComponent.prototype._warnMutuallyExclusive = function (mutuallyExclusiveMap) {
        warn_1.warnMutuallyExclusive(this.className, this.props, mutuallyExclusiveMap);
    };
    /**
     * Warns when props are required if a condition is met.
     *
     * @param requiredProps - The name of the props that are required when the condition is met.
     * @param conditionalPropName - The name of the prop that the condition is based on.
     * @param condition - Whether the condition is met.
     */
    BaseComponent.prototype._warnConditionallyRequiredProps = function (requiredProps, conditionalPropName, condition) {
        warn_1.warnConditionallyRequiredProps(this.className, this.props, requiredProps, conditionalPropName, condition);
    };
    return BaseComponent;
}(React.Component));
exports.BaseComponent = BaseComponent;
/**
 * Helper to override a given method with a wrapper method that can try/catch the original, but also
 * ensures that the BaseComponent's methods are called before the subclass's. This ensures that
 * componentWillUnmount in the base is called and that things in the _disposables array are disposed.
 */
function _makeAllSafe(obj, prototype, methodNames) {
    for (var i = 0, len = methodNames.length; i < len; i++) {
        _makeSafe(obj, prototype, methodNames[i]);
    }
}
function _makeSafe(obj, prototype, methodName) {
    // tslint:disable:no-any
    var classMethod = obj[methodName];
    var prototypeMethod = prototype[methodName];
    // tslint:enable:no-any
    if (classMethod || prototypeMethod) {
        // tslint:disable-next-line:no-any
        obj[methodName] = function () {
            var retVal;
            try {
                if (prototypeMethod) {
                    retVal = prototypeMethod.apply(this, arguments);
                }
                if (classMethod !== prototypeMethod) {
                    retVal = classMethod.apply(this, arguments);
                }
            }
            catch (e) {
                var errorMessage = "Exception in " + obj.className + "." + methodName + "(): " + (typeof e === 'string' ? e : e.stack);
                if (BaseComponent.onError) {
                    BaseComponent.onError(errorMessage, e);
                }
            }
            return retVal;
        };
    }
}
BaseComponent.onError = function (errorMessage) {
    console.error(errorMessage);
    throw errorMessage;
};
/**
 * Simple constant function for returning null, used to render empty templates in JSX.
 *
 * @public
 */
function nullRender() { return null; }
exports.nullRender = nullRender;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(5);
var localStorage_1 = __webpack_require__(98);
// Default to undefined so that we initialize on first read.
var _language;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 *
 * @public
 */
function getLanguage() {
    if (_language === undefined) {
        var doc = dom_1.getDocument();
        var savedLanguage = localStorage_1.getItem('language');
        if (savedLanguage !== null) {
            _language = savedLanguage;
        }
        if (_language === undefined && doc) {
            _language = doc.documentElement.getAttribute('lang');
        }
        if (_language === undefined) {
            _language = 'en';
        }
    }
    return _language;
}
exports.getLanguage = getLanguage;
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 *
 * @public
 */
function setLanguage(language, avoidPersisting) {
    if (avoidPersisting === void 0) { avoidPersisting = false; }
    var doc = dom_1.getDocument();
    if (doc) {
        doc.documentElement.setAttribute('lang', language);
    }
    if (!avoidPersisting) {
        localStorage_1.setItem('language', language);
    }
    _language = language;
}
exports.setLanguage = setLanguage;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
Object.defineProperty(exports, "__esModule", { value: true });
// Initialize global window id.
var CURRENT_ID_PROPERTY = '__currentId__';
// tslint:disable-next-line:no-any
var _global = (typeof window !== 'undefined' && window) || process;
if (_global[CURRENT_ID_PROPERTY] === undefined) {
    _global[CURRENT_ID_PROPERTY] = 0;
}
// tslint:disable-next-line:no-any
function checkProperties(a, b) {
    for (var propName in a) {
        if (a.hasOwnProperty(propName)) {
            if (!b.hasOwnProperty(propName) || (b[propName] !== a[propName])) {
                return false;
            }
        }
    }
    return true;
}
/**
 * Compares a to b and b to a.
 *
 * @public
 */
function shallowCompare(a, b) {
    return checkProperties(a, b) && checkProperties(b, a);
}
exports.shallowCompare = shallowCompare;
/**
 * Makes a resulting merge of a bunch of objects. Pass in the target object followed by 1 or more
 * objects as arguments and they will be merged sequentially into the target. Note that this will
 * shallow merge; it will not create new cloned values for target members.
 *
 * @public
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function assign(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return filteredAssign.apply(this, [null, target].concat(args));
}
exports.assign = assign;
/**
 * Makes a resulting merge of a bunch of objects, but allows a filter function to be passed in to filter
 * the resulting merges. This allows for scenarios where you want to merge "everything except that one thing"
 * or "properties that start with data-". Note that this will shallow merge; it will not create new cloned
 * values for target members.
 *
 * @public
 * @param isAllowed - Callback to determine if the given propName is allowed in the result.
 * @param target - Target object to merge following object arguments into.
 * @param args - One or more objects that will be mixed into the target in the order they are provided.
 * @returns Resulting merged target.
 */
// tslint:disable-next-line:no-any
function filteredAssign(isAllowed, target) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    target = target || {};
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var sourceObject = args_1[_a];
        if (sourceObject) {
            for (var propName in sourceObject) {
                if (sourceObject.hasOwnProperty(propName) &&
                    (!isAllowed || isAllowed(propName))) {
                    target[propName] = sourceObject[propName];
                }
            }
        }
    }
    return target;
}
exports.filteredAssign = filteredAssign;
/**
 * Generates a unique id in the global scope (this spans across duplicate copies of the same library.)
 *
 * @public
 */
function getId(prefix) {
    var index = _global[CURRENT_ID_PROPERTY]++;
    return (prefix || '') + index;
}
exports.getId = getId;
/* Takes an enum and iterates over each value of the enum (as a string), running the callback on each, returning a mapped array.
 * The callback takes as a first parameter the string that represents the name of the entry, and the second parameter is the
 * value of that entry, which is the value you'd normally use when using the enum (usually a number).
 * */
function mapEnumByName(
    // tslint:disable-next-line:no-any
    theEnum, callback) {
    // map<any> to satisfy compiler since it doesn't realize we strip out undefineds in the .filter() call
    return Object.keys(theEnum).map(function (p) {
        if (String(Number(p)) !== p) {
            return callback(p, theEnum[p]);
        }
    }).filter(function (v) { return !!v; }); // only return elements with values
}
exports.mapEnumByName = mapEnumByName;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(5);
var styles = __webpack_require__(105);
var _scrollbarWidth;
var _bodyScrollDisabledCount = 0;
/**
 * Placing this attribute on scrollable divs optimizes detection to know
 * if the div is scrollable or not (given we can avoid expensive operations
 * like getComputedStyle.)
 *
 * @public
 */
exports.DATA_IS_SCROLLABLE_ATTRIBUTE = 'data-is-scrollable';
/**
 * Disables the body scrolling.
 *
 * @public
 */
function disableBodyScroll() {
    var doc = dom_1.getDocument();
    if (doc && doc.body && !_bodyScrollDisabledCount) {
        doc.body.classList.add(styles.scrollDisabled);
    }
    _bodyScrollDisabledCount++;
}
exports.disableBodyScroll = disableBodyScroll;
/**
 * Enables the body scrolling.
 *
 * @public
 */
function enableBodyScroll() {
    if (_bodyScrollDisabledCount > 0) {
        var doc = dom_1.getDocument();
        if (doc && doc.body && _bodyScrollDisabledCount === 1) {
            doc.body.classList.remove(styles.scrollDisabled);
        }
        _bodyScrollDisabledCount--;
    }
}
exports.enableBodyScroll = enableBodyScroll;
/**
 * Calculates the width of a scrollbar for the browser/os.
 *
 * @public
 */
function getScrollbarWidth() {
    if (_scrollbarWidth === undefined) {
        var scrollDiv = document.createElement('div');
        scrollDiv.style.setProperty('width', '100px');
        scrollDiv.style.setProperty('height', '100px');
        scrollDiv.style.setProperty('overflow', 'scroll');
        scrollDiv.style.setProperty('position', 'absolute');
        scrollDiv.style.setProperty('top', '-9999px');
        document.body.appendChild(scrollDiv);
        // Get the scrollbar width
        _scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        // Delete the DIV
        document.body.removeChild(scrollDiv);
    }
    return _scrollbarWidth;
}
exports.getScrollbarWidth = getScrollbarWidth;
/**
 * Traverses up the DOM for the element with the data-is-scrollable=true attribute, or returns
 * document.body.
 *
 * @public
 */
function findScrollableParent(startingElement) {
    var el = startingElement;
    // First do a quick scan for the scrollable attribute.
    while (el && el !== document.body) {
        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) === 'true') {
            return el;
        }
        el = el.parentElement;
    }
    // If we haven't found it, the use the slower method: compute styles to evaluate if overflow is set.
    el = startingElement;
    while (el && el !== document.body) {
        if (el.getAttribute(exports.DATA_IS_SCROLLABLE_ATTRIBUTE) !== 'false') {
            var computedStyles = getComputedStyle(el);
            var overflowY = computedStyles ? computedStyles.getPropertyValue('overflow-y') : '';
            if (overflowY && (overflowY === 'scroll' || overflowY === 'auto')) {
                return el;
            }
        }
        el = el.parentElement;
    }
    // Fall back to window scroll.
    if (!el || el === document.body) {
        // tslint:disable-next-line:no-any
        el = window;
    }
    return el;
}
exports.findScrollableParent = findScrollableParent;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(116), exports);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(3);
load_themed_styles_1.loadStyles([{ "rawString": ".root_8cea202d{line-height:1;width:18px;height:18px;vertical-align:top;position:relative;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.root_8cea202d:before{content:'';position:absolute;left:1px;right:1px;bottom:1px;top:1px;border-radius:50%;opacity:1;background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.root_8cea202d.rootIsChecked_8cea202d:before{background:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";opacity:1}.root_8cea202d .check_8cea202d{opacity:0}.checkHost_8cea202d:hover .root_8cea202d .check_8cea202d,.checkHost_8cea202d:focus .root_8cea202d .check_8cea202d,.root_8cea202d:hover .check_8cea202d,.root_8cea202d:focus .check_8cea202d,.root_8cea202d.rootIsChecked_8cea202d .check_8cea202d{opacity:1}.circle_8cea202d,.check_8cea202d{font-size:18px;position:absolute;left:0;top:0;width:18px;height:18px;text-align:center;vertical-align:middle}.circle_8cea202d{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.circle_8cea202d{display:none}}.rootIsChecked_8cea202d .circle_8cea202d{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.check_8cea202d{color:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";font-size:16px;left:.5px}.rootIsChecked_8cea202d .check_8cea202d{color:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";font-weight:900}@media screen and (-ms-high-contrast: active){.rootIsChecked_8cea202d .check_8cea202d{border-radius:10px;border:none;background:Window;color:WindowText}}\n" }]);
exports.root = "root_8cea202d";
exports.rootIsChecked = "rootIsChecked_8cea202d";
exports.check = "check_8cea202d";
exports.checkHost = "checkHost_8cea202d";
exports.circle = "circle_8cea202d";


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(8);
var Utilities_1 = __webpack_require__(2);
var DetailsList_Props_1 = __webpack_require__(16);
var DetailsRowCheck_1 = __webpack_require__(27);
var GroupSpacer_1 = __webpack_require__(11);
var DetailsRowFields_1 = __webpack_require__(121);
var FocusZone_1 = __webpack_require__(15);
var interfaces_1 = __webpack_require__(6);
var GroupedList_1 = __webpack_require__(24);
var stylesImport = __webpack_require__(45);
var styles = stylesImport;
var Styling_1 = __webpack_require__(10);
var checkStyles = __webpack_require__(28);
var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
var DetailsRow = (function (_super) {
    tslib_1.__extends(DetailsRow, _super);
    function DetailsRow(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selectionState: _this._getSelectionState(props),
            columnMeasureInfo: undefined,
            isDropping: false,
            groupNestingDepth: props.groupNestingDepth
        };
        _this._hasSetFocus = false;
        _this._droppingClassNames = '';
        _this._updateDroppingState = _this._updateDroppingState.bind(_this);
        _this._onToggleSelection = _this._onToggleSelection.bind(_this);
        return _this;
    }
    DetailsRow.prototype.componentDidMount = function () {
        var dragDropHelper = this.props.dragDropHelper;
        if (dragDropHelper) {
            this._dragDropSubscription = dragDropHelper.subscribe(this._root, this._events, this._getRowDragDropOptions());
        }
        this._events.on(this.props.selection, interfaces_1.SELECTION_CHANGE, this._onSelectionChanged);
        if (this.props.onDidMount && this.props.item) {
            // If the item appears later, we should wait for it before calling this method.
            this._hasMounted = true;
            this.props.onDidMount(this);
        }
    };
    DetailsRow.prototype.componentDidUpdate = function (previousProps) {
        var state = this.state;
        var _a = this.props, item = _a.item, onDidMount = _a.onDidMount;
        var columnMeasureInfo = state.columnMeasureInfo;
        if (this.props.itemIndex !== previousProps.itemIndex ||
            this.props.item !== previousProps.item ||
            this.props.dragDropHelper !== previousProps.dragDropHelper) {
            if (this._dragDropSubscription) {
                this._dragDropSubscription.dispose();
                delete this._dragDropSubscription;
            }
            if (this.props.dragDropHelper) {
                this._dragDropSubscription = this.props.dragDropHelper.subscribe(this._root, this._events, this._getRowDragDropOptions());
            }
        }
        if (columnMeasureInfo && columnMeasureInfo.index >= 0) {
            var newWidth = this.refs.cellMeasurer.getBoundingClientRect().width;
            columnMeasureInfo.onMeasureDone(newWidth);
            this.setState({
                columnMeasureInfo: undefined
            });
        }
        if (item && onDidMount && !this._hasMounted) {
            this._hasMounted = true;
            onDidMount(this);
        }
    };
    DetailsRow.prototype.componentWillUnmount = function () {
        var _a = this.props, item = _a.item, onWillUnmount = _a.onWillUnmount;
        // Only call the onWillUnmount callback if we have an item.
        if (onWillUnmount && item) {
            onWillUnmount(this);
        }
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
            delete this._dragDropSubscription;
        }
    };
    DetailsRow.prototype.componentWillReceiveProps = function (newProps) {
        this.setState({
            selectionState: this._getSelectionState(newProps),
            groupNestingDepth: newProps.groupNestingDepth
        });
    };
    DetailsRow.prototype.render = function () {
        var _a = this.props, columns = _a.columns, dragDropEvents = _a.dragDropEvents, item = _a.item, itemIndex = _a.itemIndex, _b = _a.onRenderCheck, onRenderCheck = _b === void 0 ? this._onRenderCheck : _b, onRenderItemColumn = _a.onRenderItemColumn, selectionMode = _a.selectionMode, viewport = _a.viewport, checkboxVisibility = _a.checkboxVisibility, getRowAriaLabel = _a.getRowAriaLabel, checkButtonAriaLabel = _a.checkButtonAriaLabel, checkboxCellClassName = _a.checkboxCellClassName, selection = _a.selection;
        var _c = this.state, columnMeasureInfo = _c.columnMeasureInfo, isDropping = _c.isDropping, groupNestingDepth = _c.groupNestingDepth;
        var _d = this.state.selectionState, isSelected = _d.isSelected, anySelected = _d.anySelected;
        var isDraggable = Boolean(dragDropEvents && dragDropEvents.canDrag && dragDropEvents.canDrag(item));
        var droppingClassName = isDropping ? (this._droppingClassNames ? this._droppingClassNames : DEFAULT_DROPPING_CSS_CLASS) : '';
        var ariaLabel = getRowAriaLabel ? getRowAriaLabel(item) : null;
        var canSelect = selection.canSelectItem(item);
        var isContentUnselectable = selectionMode === interfaces_1.SelectionMode.multiple;
        var showCheckbox = selectionMode !== interfaces_1.SelectionMode.none && checkboxVisibility !== DetailsList_Props_1.CheckboxVisibility.hidden;
        return (React.createElement(FocusZone_1.FocusZone, tslib_1.__assign({}, Utilities_1.getNativeProps(this.props, Utilities_1.divProperties), { direction: FocusZone_1.FocusZoneDirection.horizontal, ref: this._onRootRef, componentRef: this._resolveRef('_focusZone'), role: 'row', "aria-label": ariaLabel, className: Utilities_1.css('ms-DetailsRow', Styling_1.AnimationClassNames.fadeIn400, styles.root, checkStyles.owner, droppingClassName, (_e = {},
                _e["is-contentUnselectable " + styles.rootIsContentUnselectable] = isContentUnselectable,
                _e["is-selected " + checkStyles.isSelected + " " + styles.rootIsSelected] = isSelected,
                _e["is-check-visible " + checkStyles.isVisible] = checkboxVisibility === DetailsList_Props_1.CheckboxVisibility.always,
                _e)), "data-is-focusable": true, "data-selection-index": itemIndex, "data-item-index": itemIndex, "aria-rowindex": itemIndex, "data-is-draggable": isDraggable, draggable: isDraggable, "data-automationid": 'DetailsRow', style: { minWidth: viewport ? viewport.width : 0 }, "aria-selected": isSelected, allowFocusRoot: true }),
            showCheckbox && (React.createElement("div", { role: 'gridcell', "aria-colindex": 0, "data-selection-toggle": true, className: Utilities_1.css('ms-DetailsRow-cell', 'ms-DetailsRow-cellCheck', checkStyles.owner, styles.cell, styles.checkCell, checkboxCellClassName) }, onRenderCheck({
                isSelected: isSelected,
                anySelected: anySelected,
                title: checkButtonAriaLabel,
                canSelect: canSelect
            }))),
            GroupSpacer_1.GroupSpacer({ count: groupNestingDepth - (this.props.collapseAllVisibility === GroupedList_1.CollapseAllVisibility.hidden ? 1 : 0) }),
            item && (React.createElement(DetailsRowFields_1.DetailsRowFields, { columns: columns, item: item, itemIndex: itemIndex, columnStartIndex: showCheckbox ? 1 : 0, onRenderItemColumn: onRenderItemColumn })),
            columnMeasureInfo && (React.createElement("span", { role: 'presentation', className: Utilities_1.css('ms-DetailsRow-cellMeasurer ms-DetailsRow-cell', styles.cellMeasurer, styles.cell), ref: 'cellMeasurer' },
                React.createElement(DetailsRowFields_1.DetailsRowFields, { columns: [columnMeasureInfo.column], item: item, itemIndex: itemIndex, columnStartIndex: (showCheckbox ? 1 : 0) + columns.length, onRenderItemColumn: onRenderItemColumn })))));
        var _e;
    };
    /**
     * measure cell at index. and call the call back with the measured cell width when finish measure
     *
     * @param {number} index (the cell index)
     * @param {(width: number) => void} onMeasureDone (the call back function when finish measure)
     */
    DetailsRow.prototype.measureCell = function (index, onMeasureDone) {
        var column = Utilities_1.assign({}, this.props.columns[index]);
        column.minWidth = 0;
        column.maxWidth = 999999;
        delete column.calculatedWidth;
        this.setState({
            columnMeasureInfo: {
                index: index,
                column: column,
                onMeasureDone: onMeasureDone
            }
        });
    };
    DetailsRow.prototype.focus = function () {
        return !!this._focusZone && this._focusZone.focus();
    };
    DetailsRow.prototype._onRenderCheck = function (props) {
        return React.createElement(DetailsRowCheck_1.DetailsRowCheck, tslib_1.__assign({}, props));
    };
    DetailsRow.prototype._getSelectionState = function (props) {
        var itemIndex = props.itemIndex, selection = props.selection;
        return {
            isSelected: selection.isIndexSelected(itemIndex),
            anySelected: selection.getSelectedCount() > 0
        };
    };
    DetailsRow.prototype._onSelectionChanged = function () {
        var selectionState = this._getSelectionState(this.props);
        if (!Utilities_1.shallowCompare(selectionState, this.state.selectionState)) {
            this.setState({
                selectionState: selectionState
            });
        }
    };
    DetailsRow.prototype._onToggleSelection = function () {
        var selection = this.props.selection;
        selection.toggleIndexSelected(this.props.itemIndex);
    };
    DetailsRow.prototype._onRootRef = function (focusZone) {
        if (focusZone) {
            // Need to resolve the actual DOM node, not the component. The element itself will be used for drag/drop and focusing.
            this._root = ReactDOM.findDOMNode(focusZone);
        }
        else {
            this._root = undefined;
        }
    };
    DetailsRow.prototype._getRowDragDropOptions = function () {
        var _a = this.props, item = _a.item, itemIndex = _a.itemIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
        var options = {
            eventMap: eventsToRegister,
            selectionIndex: itemIndex,
            context: { data: item, index: itemIndex },
            canDrag: dragDropEvents.canDrag,
            canDrop: dragDropEvents.canDrop,
            onDragStart: dragDropEvents.onDragStart,
            updateDropState: this._updateDroppingState,
            onDrop: dragDropEvents.onDrop,
            onDragEnd: dragDropEvents.onDragEnd,
        };
        return options;
    };
    /**
     * update isDropping state based on the input value, which is used to change style during drag and drop
     *
     * when change to true, that means drag enter. we will add default dropping class name
     * or the custom dropping class name (return result from onDragEnter) to the root elemet.
     *
     * when change to false, that means drag leave. we will remove the dropping class name from root element.
     *
     * @private
     * @param {boolean} newValue (new isDropping state value)
     * @param {DragEvent} event (the event trigger dropping state change which can be dragenter, dragleave etc)
     */
    DetailsRow.prototype._updateDroppingState = function (newValue, event) {
        var _a = this.state, selectionState = _a.selectionState, isDropping = _a.isDropping;
        var _b = this.props, dragDropEvents = _b.dragDropEvents, item = _b.item;
        if (!newValue) {
            if (dragDropEvents.onDragLeave) {
                dragDropEvents.onDragLeave(item, event);
            }
        }
        else {
            if (dragDropEvents.onDragEnter) {
                this._droppingClassNames = dragDropEvents.onDragEnter(item, event);
            }
        }
        if (isDropping !== newValue) {
            this.setState({ selectionState: selectionState, isDropping: newValue });
        }
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], DetailsRow.prototype, "_onRootRef", null);
    return DetailsRow;
}(Utilities_1.BaseComponent));
exports.DetailsRow = DetailsRow;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(3);
load_themed_styles_1.loadStyles([{ "rawString": ".ms-DetailsList--Compact .root_a53338a5{min-height:32px;border:0}.ms-DetailsList--Compact .cell_a53338a5{min-height:32px;padding:6px 8px}.ms-DetailsList--Compact .check_a53338a5{padding:8px}.ms-List-cell:first-child .root_a53338a5:before{display:none}.root_a53338a5{border-bottom:1px solid " }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": ";display:-webkit-box;display:-ms-flexbox;display:flex;min-width:100%;min-height:42px;white-space:nowrap;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;vertical-align:top}.root_a53338a5::-moz-focus-inner{border:0}.root_a53338a5{outline:transparent}.root_a53338a5{position:relative}.ms-Fabric.is-focusVisible .root_a53338a5:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}[dir='ltr'] .root_a53338a5{text-align:left}[dir='rtl'] .root_a53338a5{text-align:right}.root_a53338a5:hover{background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": ";color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.rootIsSelected_a53338a5{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";border-bottom:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.rootIsSelected_a53338a5::-moz-focus-inner{border:0}.rootIsSelected_a53338a5{outline:transparent}.rootIsSelected_a53338a5{position:relative}.ms-Fabric.is-focusVisible .rootIsSelected_a53338a5:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.rootIsSelected_a53338a5 .cell_a53338a5.isRowHeader_a53338a5{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.rootIsSelected_a53338a5 .cell_a53338a5.isRowHeader_a53338a5{color:HighlightText}}@media screen and (-ms-high-contrast: active){.rootIsSelected_a53338a5 .cell_a53338a5{background:Highlight;color:HighlightText;-ms-high-contrast-adjust:none}}.rootIsSelected_a53338a5:before{position:absolute;display:block;top:-1px;height:1px;bottom:0;left:0;right:0;content:'';border-top:1px solid " }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": "}.rootIsSelected_a53338a5:hover{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": "}.rootIsSelected_a53338a5:hover .cell_a53338a5{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.rootIsSelected_a53338a5:hover .cell_a53338a5{color:HighlightText}}.rootIsSelected_a53338a5:hover .cell_a53338a5.isRowHeader_a53338a5{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.rootIsSelected_a53338a5:hover .cell_a53338a5.isRowHeader_a53338a5{color:HighlightText}}.rootIsSelected_a53338a5:focus{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": "}.rootIsSelected_a53338a5:focus .cell_a53338a5{color:" }, { "theme": "neutralDark", "defaultValue": "#212121" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.rootIsSelected_a53338a5:focus .cell_a53338a5{color:HighlightText}}.rootIsSelected_a53338a5:focus .cell_a53338a5.isRowHeader_a53338a5{color:" }, { "theme": "black", "defaultValue": "#000000" }, { "rawString": "}@media screen and (-ms-high-contrast: active){.rootIsSelected_a53338a5:focus .cell_a53338a5.isRowHeader_a53338a5{color:HighlightText}}.rootIsContentUnselectable_a53338a5{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.cell_a53338a5{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;padding:11px 8px;min-height:42px;vertical-align:top;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cell_a53338a5::-moz-focus-inner{border:0}.cell_a53338a5{outline:transparent}.cell_a53338a5{position:relative}.ms-Fabric.is-focusVisible .cell_a53338a5:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.cell_a53338a5.checkCell_a53338a5{padding:0}.cell_a53338a5>button{max-width:100%}.cell_a53338a5.isRowHeader_a53338a5{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";font-size:14px}.cell_a53338a5 [data-is-focusable=true]::-moz-focus-inner{border:0}.cell_a53338a5 [data-is-focusable=true]{outline:transparent}.cell_a53338a5 [data-is-focusable=true]{position:relative}.ms-Fabric.is-focusVisible .cell_a53338a5 [data-is-focusable=true]:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}[dir='ltr'] .isPadded_a53338a5{padding-right:32px}[dir='rtl'] .isPadded_a53338a5{padding-left:32px}.isPadded_a53338a5.checkCell_a53338a5{padding:0;margin:0}.isMultiline_a53338a5{white-space:normal;word-break:break-word;text-overflow:clip}.fields_a53338a5{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.cellMeasurer_a53338a5 .cell_a53338a5{overflow:visible;white-space:nowrap}\n" }]);
exports.root = "root_a53338a5";
exports.cell = "cell_a53338a5";
exports.check = "check_a53338a5";
exports.rootIsSelected = "rootIsSelected_a53338a5";
exports.isRowHeader = "isRowHeader_a53338a5";
exports.rootIsContentUnselectable = "rootIsContentUnselectable_a53338a5";
exports.checkCell = "checkCell_a53338a5";
exports.isPadded = "isPadded_a53338a5";
exports.isMultiline = "isMultiline_a53338a5";
exports.fields = "fields_a53338a5";
exports.cellMeasurer = "cellMeasurer_a53338a5";


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FocusZoneDirection;
(function (FocusZoneDirection) {
    /** Only react to up/down arrows. */
    FocusZoneDirection[FocusZoneDirection["vertical"] = 0] = "vertical";
    /** Only react to left/right arrows. */
    FocusZoneDirection[FocusZoneDirection["horizontal"] = 1] = "horizontal";
    /** React to all arrows. */
    FocusZoneDirection[FocusZoneDirection["bidirectional"] = 2] = "bidirectional";
})(FocusZoneDirection = exports.FocusZoneDirection || (exports.FocusZoneDirection = {}));


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CollapseAllVisibility;
(function (CollapseAllVisibility) {
    CollapseAllVisibility[CollapseAllVisibility["hidden"] = 0] = "hidden";
    CollapseAllVisibility[CollapseAllVisibility["visible"] = 1] = "visible";
})(CollapseAllVisibility = exports.CollapseAllVisibility || (exports.CollapseAllVisibility = {}));


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(3);
load_themed_styles_1.loadStyles([{ "rawString": ".root_af2fe6f3{position:relative;font-size:12px}.group_af2fe6f3{-webkit-transition:background-color .267s cubic-bezier(0.445, 0.05, 0.55, 0.95);transition:background-color .267s cubic-bezier(0.445, 0.05, 0.55, 0.95)}.groupIsDropping_af2fe6f3{background-color:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.root_af2fe6f3 .ms-List-cell{min-height:36px}\n" }]);
exports.root = "root_af2fe6f3";
exports.group = "group_af2fe6f3";
exports.groupIsDropping = "groupIsDropping_af2fe6f3";


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Please keep alphabetized
var IconType;
(function (IconType) {
    /**
     * Render using the fabric icon font.
     */
    IconType[IconType["default"] = 0] = "default";
    /**
     * Render using an image, where imageProps would be used.
     */
    IconType[IconType["image"] = 1] = "image";
    /**
     * Deprecated, use default.
     * @deprecated
     */
    IconType[IconType["Default"] = 100000] = "Default";
    /**
     * Deprecated, use image.
     * @deprecated
     */
    IconType[IconType["Image"] = 100001] = "Image";
})(IconType = exports.IconType || (exports.IconType = {}));


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(8);
/* tslint:enable:no-unused-variable */
var Fabric_1 = __webpack_require__(111);
var Utilities_1 = __webpack_require__(2);
var stylesImport = __webpack_require__(144);
var styles = stylesImport;
var _layersByHostId = {};
var Layer = (function (_super) {
    tslib_1.__extends(Layer, _super);
    function Layer(props) {
        var _this = _super.call(this, props) || this;
        _this._warnDeprecations({
            onLayerMounted: 'onLayerDidMount'
        });
        if (_this.props.hostId) {
            if (!_layersByHostId[_this.props.hostId]) {
                _layersByHostId[_this.props.hostId] = [];
            }
            _layersByHostId[_this.props.hostId].push(_this);
        }
        return _this;
    }
    /**
     * Used for notifying applicable Layers that a host is available/unavailable and to re-evaluate Layers that
     * care about the specific host.
     */
    Layer.notifyHostChanged = function (id) {
        if (_layersByHostId[id]) {
            _layersByHostId[id].forEach(function (layer) { return layer.forceUpdate(); });
        }
    };
    Layer.prototype.componentDidMount = function () {
        this.componentDidUpdate();
    };
    Layer.prototype.componentWillUnmount = function () {
        var _this = this;
        this._removeLayerElement();
        if (this.props.hostId) {
            _layersByHostId[this.props.hostId] = _layersByHostId[this.props.hostId].filter(function (layer) { return layer !== _this; });
            if (!_layersByHostId[this.props.hostId].length) {
                delete _layersByHostId[this.props.hostId];
            }
        }
    };
    Layer.prototype.componentDidUpdate = function () {
        var _this = this;
        var host = this._getHost();
        if (host !== this._host) {
            this._removeLayerElement();
        }
        if (host) {
            this._host = host;
            if (!this._layerElement) {
                var doc = Utilities_1.getDocument(this._rootElement);
                this._layerElement = doc.createElement('div');
                this._layerElement.className = Utilities_1.css('ms-Layer', (_a = {},
                    _a['ms-Layer--fixed ' + styles.rootIsFixed] = !this.props.hostId,
                    _a));
                host.appendChild(this._layerElement);
                Utilities_1.setVirtualParent(this._layerElement, this._rootElement);
            }
            // Using this 'unstable' method allows us to retain the React context across the layer projection.
            ReactDOM.unstable_renderSubtreeIntoContainer(this, (React.createElement(Fabric_1.Fabric, { className: Utilities_1.css('ms-Layer-content', styles.content) }, this.props.children)), this._layerElement, function () {
                if (!_this._hasMounted) {
                    _this._hasMounted = true;
                    // TODO: @deprecated cleanup required.
                    if (_this.props.onLayerMounted) {
                        _this.props.onLayerMounted();
                    }
                    _this.props.onLayerDidMount();
                }
            });
        }
        var _a;
    };
    Layer.prototype.render = function () {
        return (React.createElement("span", { className: 'ms-Layer', ref: this._resolveRef('_rootElement') }));
    };
    Layer.prototype._removeLayerElement = function () {
        if (this._layerElement) {
            this.props.onLayerWillUnmount();
            ReactDOM.unmountComponentAtNode(this._layerElement);
            var parentNode = this._layerElement.parentNode;
            if (parentNode) {
                parentNode.removeChild(this._layerElement);
            }
            this._layerElement = undefined;
            this._hasMounted = false;
        }
    };
    Layer.prototype._getHost = function () {
        var hostId = this.props.hostId;
        var doc = Utilities_1.getDocument(this._rootElement);
        if (hostId) {
            return doc.getElementById(hostId);
        }
        else {
            return doc.body;
        }
    };
    Layer.defaultProps = {
        onLayerDidMount: function () { return undefined; },
        onLayerWillUnmount: function () { return undefined; }
    };
    return Layer;
}(Utilities_1.BaseComponent));
exports.Layer = Layer;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SpinnerSize;
(function (SpinnerSize) {
    /**
     * 12px Spinner diameter
     */
    SpinnerSize[SpinnerSize["xSmall"] = 0] = "xSmall";
    /**
     * 16px Spinner diameter
     */
    SpinnerSize[SpinnerSize["small"] = 1] = "small";
    /**
     * 20px Spinner diameter
     */
    SpinnerSize[SpinnerSize["medium"] = 2] = "medium";
    /**
     * 28px Spinner diameter
     */
    SpinnerSize[SpinnerSize["large"] = 3] = "large";
})(SpinnerSize = exports.SpinnerSize || (exports.SpinnerSize = {}));
/**
 * Deprecated at v2.0.0, use 'SpinnerSize' instead.
 * @deprecated
 */
var SpinnerType;
(function (SpinnerType) {
    /**
     * Deprecated and will be removed at >= 2.0.0. Use SpinnerSize.medium instead.
     */
    SpinnerType[SpinnerType["normal"] = 0] = "normal";
    /**
     * Deprecated and will be removed at >= 2.0.0. Use SpinnerSize.large instead.
     */
    SpinnerType[SpinnerType["large"] = 1] = "large";
})(SpinnerType = exports.SpinnerType || (exports.SpinnerType = {}));


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(6);
var SelectionLayout = (function () {
    function SelectionLayout(direction) {
        this._direction = direction;
    }
    SelectionLayout.prototype.getItemIndexAbove = function (focusIndex, items) {
        return (this._direction === interfaces_1.SelectionDirection.vertical) ? Math.max(0, focusIndex - 1) : focusIndex;
    };
    SelectionLayout.prototype.getItemIndexBelow = function (focusIndex, items) {
        return (this._direction === interfaces_1.SelectionDirection.vertical) ? Math.min(items.length - 1, focusIndex + 1) : focusIndex;
    };
    SelectionLayout.prototype.getItemIndexLeft = function (focusIndex, items) {
        return (this._direction === interfaces_1.SelectionDirection.vertical) ? focusIndex : Math.max(0, focusIndex - 1);
    };
    SelectionLayout.prototype.getItemIndexRight = function (focusIndex, items) {
        return (this._direction === interfaces_1.SelectionDirection.vertical) ? focusIndex : Math.min(items.length - 1, focusIndex + 1);
    };
    return SelectionLayout;
}());
exports.SelectionLayout = SelectionLayout;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(162)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(161)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(30);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_55__;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//#region Imports
var React = __webpack_require__(1);
var ListItemFactory_1 = __webpack_require__(62);
var DetailsList_1 = __webpack_require__(110);
//#endregion
var FactoryMethod = (function (_super) {
    __extends(FactoryMethod, _super);
    function FactoryMethod(props, state) {
        var _this = _super.call(this, props) || this;
        // reusable inline component
        _this.ListMarqueeSelection = function (itemState) { return (React.createElement("div", null,
            React.createElement(DetailsList_1.DetailsList, { items: itemState.items, columns: itemState.columns, setKey: "set", layoutMode: DetailsList_1.DetailsListLayoutMode.fixedColumns, selectionPreservedOnEmptyClick: true, compact: true }))); };
        _this.setInitialState();
        return _this;
    }
    // lifecycle help here: https://staminaloops.github.io/undefinedisnotafunction/understanding-react/
    //#region Mouting events lifecycle
    // the data returned from render is neither a string nor a DOM node.
    // it's a lightweight description of what the DOM should look like.
    // inspects this.state and this.props and create the markup.
    // when your data changes, the render method is called again.
    // react diff the return value from the previous call to render with
    // the new one, and generate a minimal set of changes to be applied to the DOM.
    FactoryMethod.prototype.render = function () {
        if (this.state.hasError) {
            // you can render any custom fallback UI
            return React.createElement("h1", null, "Something went wrong.");
        }
        else {
            switch (this.props.listName) {
                case "GenericList":
                    // tslint:disable-next-line:max-line-length
                    return React.createElement(this.ListMarqueeSelection, { items: this.state.DetailsGenericListItemState.items, columns: this.state.columns });
                case "News":
                    // tslint:disable-next-line:max-line-length
                    return React.createElement(this.ListMarqueeSelection, { items: this.state.DetailsNewsListItemState.items, columns: this.state.columns });
                case "Announcements":
                    // tslint:disable-next-line:max-line-length
                    return React.createElement(this.ListMarqueeSelection, { items: this.state.DetailsAnnouncementListItemState.items, columns: this.state.columns });
                case "Directory":
                    // tslint:disable-next-line:max-line-length
                    return React.createElement(this.ListMarqueeSelection, { items: this.state.DetailsDirectoryListItemState.items, columns: this.state.columns });
                default:
                    return null;
            }
        }
    };
    FactoryMethod.prototype.componentDidCatch = function (error, info) {
        // display fallback UI
        this.setState({ hasError: true });
        // you can also log the error to an error reporting service
        console.log(error);
        console.log(info);
    };
    // componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here.
    // if you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    // this method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in componentWillUnmount().
    // calling setState() in this method will trigger an extra rendering, but it is guaranteed to flush during the same tick.
    // this guarantees that even though the render() will be called twice in this case, the user won’t see the intermediate state.
    // use this pattern with caution because it often causes performance issues. It can, however, be necessary for cases like modals and
    // tooltips when you need to measure a DOM node before rendering something that depends on its size or position.
    FactoryMethod.prototype.componentDidMount = function () {
        this._configureWebPart = this._configureWebPart.bind(this);
        this.readItemsAndSetStatus();
    };
    //#endregion
    //#region Props changes lifecycle events (after a property changes from parent component)
    // componentWillReceiveProps() is invoked before a mounted component receives new props.
    // if you need to update the state in response to prop
    // changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions
    // using this.setState() in this method.
    // note that React may call this method even if the props have not changed, so make sure to compare the current
    // and next values if you only want to handle changes.
    // this may occur when the parent component causes your component to re-render.
    // react doesn’t call componentWillReceiveProps() with initial props during mounting. It only calls this
    // method if some of component’s props may update
    // calling this.setState() generally doesn’t trigger componentWillReceiveProps()
    FactoryMethod.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.listName !== this.props.listName) {
            this.readItemsAndSetStatus();
        }
    };
    //#endregion
    //#region private methods
    FactoryMethod.prototype._configureWebPart = function () {
        this.props.configureStartCallback();
    };
    FactoryMethod.prototype.setInitialState = function () {
        this.state = {
            hasError: false,
            status: this.listNotConfigured(this.props)
                ? "Please configure list in Web Part properties"
                : "Ready",
            columns: [],
            DetailsGenericListItemState: {
                items: []
            },
            DetailsNewsListItemState: {
                items: []
            },
            DetailsDirectoryListItemState: {
                items: []
            },
            DetailsAnnouncementListItemState: {
                items: []
            },
        };
    };
    // read items using factory method pattern and sets state accordingly
    FactoryMethod.prototype.readItemsAndSetStatus = function () {
        var _this = this;
        this.setState({
            status: "Loading all items..."
        });
        var factory = new ListItemFactory_1.ListItemFactory();
        factory.getItems(this.props.spHttpClient, this.props.siteUrl, this.props.listName)
            .then(function (items) {
            var myItems = null;
            switch (_this.props.listName) {
                case "GenericList":
                    myItems = items;
                    break;
                case "News":
                    myItems = items;
                    break;
                case "Announcements":
                    myItems = items;
                    break;
                case "Directory":
                    myItems = items;
                    break;
            }
            var keyPart = _this.props.listName === "GenericList" ? "" : _this.props.listName;
            // the explicit specification of the type argument `keyof {}` is bad and
            // it should not be required.
            _this.setState((_a = {
                    status: "Successfully loaded " + items.length + " items"
                },
                _a["Details" + keyPart + "ListItemState"] = {
                    myItems: myItems
                },
                _a.columns = DetailsList_1.buildColumns(myItems),
                _a));
            var _a;
        });
    };
    FactoryMethod.prototype.listNotConfigured = function (props) {
        return props.listName === undefined ||
            props.listName === null ||
            props.listName.length === 0;
    };
    return FactoryMethod;
}(React.Component));
exports.default = FactoryMethod;



/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sp_http_1 = __webpack_require__(55);
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
    // get all lists, not only tasks lists
    SharePointDataProvider.prototype.getLists = function () {
        // const listTemplateId: string = '171';
        // const queryString: string = `?$filter=BaseTemplate eq ${listTemplateId}`;
        // const queryUrl: string = this._listsUrl + queryString;
        var _this = this;
        return this._webPartContext.spHttpClient.get(this._listsUrl, sp_http_1.SPHttpClient.configurations.v1)
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



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MockDataProvider = (function () {
    function MockDataProvider() {
        this._lists = [
            this._createMockTaskList("1", "Basic List"),
            this._createMockTaskList("2", "Announcements List"),
            this._createMockTaskList("3", "News List"),
            this._createMockTaskList("4", "Directory List"),
        ];
    }
    Object.defineProperty(MockDataProvider.prototype, "webPartContext", {
        get: function () {
            return this._webPartContext;
        },
        // getters and Setters
        set: function (value) {
            this._webPartContext = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockDataProvider.prototype, "selectedList", {
        get: function () {
            return this._selectedList;
        },
        set: function (value) {
            this._selectedList = value;
        },
        enumerable: true,
        configurable: true
    });
    MockDataProvider.prototype.getLists = function () {
        var taskLists = this._lists;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(taskLists); }, 500);
        });
    };
    MockDataProvider.prototype._createMockTaskList = function (id, title) {
        var mockTaskList = {
            Id: id,
            Title: title
        };
        return mockTaskList;
    };
    return MockDataProvider;
}());
exports.default = MockDataProvider;



/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_59__;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_60__;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_61__;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sp_http_1 = __webpack_require__(55);
var ListItemFactory = (function () {
    function ListItemFactory() {
    }
    // private _listItems: IListItem[];
    ListItemFactory.prototype.getItems = function (requester, siteUrl, listName) {
        switch (listName) {
            case "GenericList":
                var items_1;
                // tslint:disable-next-line:max-line-length
                return requester.get(siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?$select=Title,Id,Modified,Created,Author/Title,Editor/Title&$expand=Author,Editor", sp_http_1.SPHttpClient.configurations.v1, {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (json) {
                    console.log(JSON.stringify(json.value));
                    return items_1 = json.value.map(function (v, i) { return ({
                        // key: v.id,
                        id: v.Id,
                        title: v.Title,
                        created: v.Created,
                        createdby: v.Author.Title,
                        modified: v.Modified,
                        modifiedby: v.Editor.Title
                    }); });
                });
            case "News":
                var newsitems_1;
                // tslint:disable-next-line:max-line-length
                return requester.get(siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?$select=Title,Id,Modified,Created,Created By,Modified By,newsheader,newsbody,expiryDate", sp_http_1.SPHttpClient.configurations.v1, {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (json) {
                    return newsitems_1 = json.value.map(function (v, i) { return ({
                        id: v.Id,
                        title: v.Title,
                        created: v.Created,
                        createdby: v.Author.Title,
                        modified: v.Modified,
                        modifiedby: v.Editor.Title,
                        newsheader: v.newsheader,
                        newsbody: v.newsbody,
                        expiryDate: v.expiryDate
                    }); });
                });
            case "Announcements":
                var announcementitems_1;
                return requester.get(siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?$select=Title,Id", sp_http_1.SPHttpClient.configurations.v1, {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (json) {
                    return announcementitems_1 = json.value.map(function (v, i) { return ({
                        id: v.Id,
                        title: v.Title,
                        created: v.Created,
                        createdby: v.Author.Title,
                        modified: v.Modified,
                        modifiedby: v.Editor.Title,
                        announcementBody: v.announcementBody,
                        expiryDate: v.expiryDate
                    }); });
                });
            case "Directory":
                var directoryitems_1;
                return requester.get(siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?$select=Title,Id", sp_http_1.SPHttpClient.configurations.v1, {
                    headers: {
                        "Accept": "application/json;odata=nometadata",
                        "odata-version": ""
                    }
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (json) {
                    return directoryitems_1 = json.value.map(function (v, i) { return ({
                        id: v.Id,
                        title: v.Title,
                        created: v.Created,
                        createdby: v.Author.Title,
                        modified: v.Modified,
                        modifiedby: v.Editor.Title,
                        firstName: v.firstName,
                        lastName: v.lastName,
                        mobileNumber: v.mobileNumber,
                        internalNumber: v.internalNumber
                    }); });
                });
            default:
                break;
        }
    };
    return ListItemFactory;
}());
exports.ListItemFactory = ListItemFactory;



/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(9);
var styleToClassName_1 = __webpack_require__(18);
/**
 * Registers a font face.
 * @public
 */
function fontFace(font) {
    Stylesheet_1.Stylesheet.getInstance().insertRule("@font-face{" + styleToClassName_1.serializeRuleEntries(font) + "}");
}
exports.fontFace = fontFace;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _vendorSettings;
function getVendorSettings() {
    if (!_vendorSettings) {
        var doc = typeof document !== 'undefined' ? document : undefined;
        var nav = typeof navigator !== 'undefined' ? navigator : undefined;
        var userAgent = nav ? nav.userAgent.toLowerCase() : undefined;
        if (!doc) {
            _vendorSettings = {
                isWebkit: true,
                isMoz: true,
                isOpera: true,
                isMs: true
            };
        }
        else {
            _vendorSettings = {
                isWebkit: !!(doc && 'WebkitAppearance' in doc.documentElement.style),
                isMoz: !!(userAgent && userAgent.indexOf('firefox') > -1),
                isOpera: !!(userAgent && userAgent.indexOf('opera') > -1),
                isMs: !!(nav && (/rv:11.0/i.test(nav.userAgent) || /Edge\/\d./i.test(navigator.userAgent)))
            };
        }
    }
    return _vendorSettings;
}
exports.getVendorSettings = getVendorSettings;
/**
 * Sets the vendor settings for prefixing and vendor specific operations.
 */
function setVendorSettings(vendorSettings) {
    _vendorSettings = vendorSettings;
}
exports.setVendorSettings = setVendorSettings;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stylesheet_1 = __webpack_require__(9);
var styleToClassName_1 = __webpack_require__(18);
/**
 * Registers keyframe definitions.
 *
 * @public
 */
function keyframes(timeline) {
    var stylesheet = Stylesheet_1.Stylesheet.getInstance();
    var name = stylesheet.getClassName();
    var rulesArray = [];
    for (var prop in timeline) {
        if (timeline.hasOwnProperty(prop)) {
            rulesArray.push(prop, '{', styleToClassName_1.serializeRuleEntries(timeline[prop]), '}');
        }
    }
    var rules = rulesArray.join('');
    stylesheet.insertRule("@keyframes " + name + "{" + rules + "}");
    // If needed later, we would add vendor prefixes here.
    return name;
}
exports.keyframes = keyframes;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mergeStyles_1 = __webpack_require__(34);
var concatStyleSets_1 = __webpack_require__(33);
/**
 * Allows you to pass in 1 or more sets of areas which will return a merged
 * set of classes.
 *
 * @public
 */
function mergeStyleSets() {
    var cssSets = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        cssSets[_i] = arguments[_i];
    }
    var classNameSet = {};
    var cssSet = cssSets[0];
    if (cssSet) {
        if (cssSets.length > 1) {
            cssSet = concatStyleSets_1.concatStyleSets.apply(void 0, cssSets);
        }
        for (var prop in cssSet) {
            if (cssSet.hasOwnProperty(prop)) {
                // tslint:disable-next-line:no-any
                classNameSet[prop] = mergeStyles_1.mergeStyles(cssSet[prop]);
            }
        }
    }
    return classNameSet;
}
exports.mergeStyleSets = mergeStyleSets;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function kebabRules(rulePairs, index) {
    rulePairs[index] = rulePairs[index].replace(/([A-Z])/g, '-$1').toLowerCase();
}
exports.kebabRules = kebabRules;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var getVendorSettings_1 = __webpack_require__(64);
var autoPrefixNames = {
    'user-select': 1
};
function prefixRules(rulePairs, index) {
    var vendorSettings = getVendorSettings_1.getVendorSettings();
    var name = rulePairs[index];
    if (autoPrefixNames[name]) {
        var value = rulePairs[index + 1];
        if (autoPrefixNames[name]) {
            if (vendorSettings.isWebkit) {
                rulePairs.push('-webkit-' + name, value);
            }
            if (vendorSettings.isMoz) {
                rulePairs.push('-moz-' + name, value);
            }
            if (vendorSettings.isMs) {
                rulePairs.push('-ms-' + name, value);
            }
            if (vendorSettings.isOpera) {
                rulePairs.push('-o-' + name, value);
            }
        }
    }
}
exports.prefixRules = prefixRules;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NON_PIXEL_NUMBER_PROPS = [
    'column-count',
    'font-weight',
    'flex-basis',
    'flex',
    'flex-grow',
    'flex-shrink',
    'opacity',
    'order',
    'z-index',
    'zoom'
];
function provideUnits(rulePairs, index) {
    var name = rulePairs[index];
    var value = rulePairs[index + 1];
    if (typeof value === 'number' &&
        NON_PIXEL_NUMBER_PROPS.indexOf(name) === -1) {
        rulePairs[index + 1] = value + "px";
    }
}
exports.provideUnits = provideUnits;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _nameReplacements = {
    'left': 'right',
    'right': 'left'
};
var _valueReplacements = {
    'w-resize': 'e-resize',
    'sw-resize': 'se-resize',
    'nw-resize': 'ne-resize'
};
var NO_FLIP = '@noflip';
var _rtl = getRTL();
function setRTL(isRTL) {
    _rtl = isRTL;
}
exports.setRTL = setRTL;
function getRTL() {
    if (_rtl === undefined) {
        _rtl = (typeof document !== 'undefined' &&
            !!document.documentElement &&
            document.documentElement.getAttribute('dir') === 'rtl');
    }
    return _rtl;
}
exports.getRTL = getRTL;
function rtlifyRules(rulePairs, index) {
    if (getRTL()) {
        var name_1 = rulePairs[index];
        var value = rulePairs[index + 1];
        if (value.indexOf(NO_FLIP) >= 0) {
            rulePairs[index + 1] = value.replace(/\s*(?:\/\*\s*)?\@noflip\b(?:\s*\*\/)?\s*?/g, '');
        }
        else if (name_1.indexOf('left') >= 0) {
            rulePairs[index] = name_1.replace('left', 'right');
        }
        else if (name_1.indexOf('right') >= 0) {
            rulePairs[index] = name_1.replace('right', 'left');
        }
        else if (String(value).indexOf('left') >= 0) {
            rulePairs[index + 1] = value.replace('left', 'right');
        }
        else if (String(value).indexOf('right') >= 0) {
            rulePairs[index + 1] = value.replace('right', 'left');
        }
        else if (_nameReplacements[name_1]) {
            rulePairs[index] = _nameReplacements[name_1];
        }
        else if (_valueReplacements[value]) {
            rulePairs[index + 1] = _valueReplacements[value];
        }
        else {
            switch (name_1) {
                case 'margin':
                case 'padding':
                    rulePairs[index + 1] = flipQuad(value);
                    break;
                case 'box-shadow':
                    rulePairs[index + 1] = negateNum(value, 0);
                    break;
            }
        }
    }
}
exports.rtlifyRules = rtlifyRules;
function negateNum(value, partIndex) {
    var parts = value.split(' ');
    var numberVal = parseInt(parts[partIndex], 10);
    parts[0] = parts[0].replace(String(numberVal), String(numberVal * -1));
    return parts.join(' ');
}
function flipQuad(value) {
    if (typeof value === 'string') {
        var parts = value.split(' ');
        if (parts.length === 4) {
            return parts[0] + " " + parts[3] + " " + parts[2] + " " + parts[1];
        }
    }
    return value;
}


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(20);
var index_2 = __webpack_require__(13);
exports.AnimationClassNames = index_1.buildClassMap(index_2.AnimationStyles);


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
var DefaultPalette_1 = __webpack_require__(19);
var index_2 = __webpack_require__(13);
exports.ColorClassNames = {};
for (var colorName in DefaultPalette_1.DefaultPalette) {
    if (DefaultPalette_1.DefaultPalette.hasOwnProperty(colorName)) {
        // Foreground color
        _defineGetter(exports.ColorClassNames, colorName, '', false, 'color');
        // Hover color
        _defineGetter(exports.ColorClassNames, colorName, 'Hover', true, 'color');
        // Background color
        _defineGetter(exports.ColorClassNames, colorName, 'Background', false, 'background');
        // Background hover
        _defineGetter(exports.ColorClassNames, colorName, 'BackgroundHover', true, 'background');
        // Border color
        _defineGetter(exports.ColorClassNames, colorName, 'Border', false, 'borderColor');
        // Border hover color
        _defineGetter(exports.ColorClassNames, colorName, 'BorderHover', true, 'borderColor');
    }
}
/**
 * Defines a getter for the given class configuration.
 */
function _defineGetter(obj, colorName, suffix, isHover, cssProperty) {
    Object.defineProperty(obj, colorName + suffix, {
        get: function () {
            // tslint:disable-next-line:no-any
            var style = (_a = {}, _a[cssProperty] = index_2.getTheme().palette[colorName], _a);
            return index_1.mergeStyles(isHover ? { selectors: { ':hover': style } } : style).toString();
            var _a;
        },
        enumerable: true,
        configurable: true
    });
}


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(20);
var index_2 = __webpack_require__(13);
exports.FontClassNames = index_1.buildClassMap(index_2.DefaultFontStyles);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AnimationClassNames_1 = __webpack_require__(71);
exports.AnimationClassNames = AnimationClassNames_1.AnimationClassNames;
var FontClassNames_1 = __webpack_require__(73);
exports.FontClassNames = FontClassNames_1.FontClassNames;
var ColorClassNames_1 = __webpack_require__(72);
exports.ColorClassNames = ColorClassNames_1.ColorClassNames;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(74), exports);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(4), exports);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
/* Register the keyframes */
var EASING_FUNCTION_1 = 'cubic-bezier(.1,.9,.2,1)';
var EASING_FUNCTION_2 = 'cubic-bezier(.1,.25,.75,.9)';
var DURATION_1 = '0.167s';
var DURATION_2 = '0.267s';
var DURATION_3 = '0.367s';
var DURATION_4 = '0.467s';
var FADE_IN = index_1.keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 }
});
var FADE_OUT = index_1.keyframes({
    from: { opacity: 1 },
    to: { opacity: 0 }
});
var SLIDE_RIGHT_IN10 = _createSlideInX(-10);
var SLIDE_RIGHT_IN20 = _createSlideInX(-20);
var SLIDE_RIGHT_IN40 = _createSlideInX(-40);
var SLIDE_RIGHT_IN400 = _createSlideInX(-400);
var SLIDE_LEFT_IN10 = _createSlideInX(10);
var SLIDE_LEFT_IN20 = _createSlideInX(20);
var SLIDE_LEFT_IN40 = _createSlideInX(40);
var SLIDE_LEFT_IN400 = _createSlideInX(400);
var SLIDE_UP_IN10 = _createSlideInY(10);
var SLIDE_UP_IN20 = _createSlideInY(20);
var SLIDE_DOWN_IN10 = _createSlideInY(-10);
var SLIDE_DOWN_IN20 = _createSlideInY(-20);
var SLIDE_RIGHT_OUT10 = _createSlideOutX(10);
var SLIDE_RIGHT_OUT20 = _createSlideOutX(20);
var SLIDE_RIGHT_OUT40 = _createSlideOutX(40);
var SLIDE_RIGHT_OUT400 = _createSlideOutX(400);
var SLIDE_LEFT_OUT10 = _createSlideOutX(-10);
var SLIDE_LEFT_OUT20 = _createSlideOutX(-20);
var SLIDE_LEFT_OUT40 = _createSlideOutX(-40);
var SLIDE_LEFT_OUT400 = _createSlideOutX(-400);
var SLIDE_UP_OUT10 = _createSlideOutY(-10);
var SLIDE_UP_OUT20 = _createSlideOutY(-20);
var SLIDE_DOWN_OUT10 = _createSlideOutY(10);
var SLIDE_DOWN_OUT20 = _createSlideOutY(20);
var SCALE_UP100 = index_1.keyframes({
    from: { transform: 'scale3d(.98,.98,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_DOWN98 = index_1.keyframes({
    from: { transform: 'scale3d(1,1,1)' },
    'top': { transform: 'scale3d(.98,.98,1)' },
});
var SCALE_DOWN100 = index_1.keyframes({
    from: { transform: 'scale3d(1.03,1.03,1)' },
    to: { transform: 'scale3d(1,1,1)' }
});
var SCALE_UP103 = index_1.keyframes({
    from: { transform: 'scale3d(1,1,1)' },
    to: { transform: 'scale3d(1.03,1.03,1)' }
});
var ROTATE90 = index_1.keyframes({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(90deg)' }
});
var ROTATE_N90 = index_1.keyframes({
    from: { transform: 'rotateZ(0deg)' },
    to: { transform: 'rotateZ(-90deg)' }
});
/**
 * All Fabric standard animations, exposed as json objects referencing predefined
 * keyframes. These objects can be mixed in with other class definitions.
 */
exports.AnimationStyles = {
    slideRightIn10: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideRightIn20: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightIn40: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideRightIn400: _createAnimation(FADE_IN + "," + SLIDE_RIGHT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn10: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN10, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn20: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN20, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn40: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN40, DURATION_3, EASING_FUNCTION_1),
    slideLeftIn400: _createAnimation(FADE_IN + "," + SLIDE_LEFT_IN400, DURATION_3, EASING_FUNCTION_1),
    slideUpIn10: _createAnimation(FADE_IN + "," + SLIDE_UP_IN10, DURATION_3, EASING_FUNCTION_1),
    slideUpIn20: _createAnimation(FADE_IN + "," + SLIDE_UP_IN20, DURATION_3, EASING_FUNCTION_1),
    slideDownIn10: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN10, DURATION_3, EASING_FUNCTION_1),
    slideDownIn20: _createAnimation(FADE_IN + "," + SLIDE_DOWN_IN20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut10: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideRightOut20: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideRightOut40: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideRightOut400: _createAnimation(FADE_OUT + "," + SLIDE_RIGHT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut10: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut20: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut40: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT40, DURATION_3, EASING_FUNCTION_1),
    slideLeftOut400: _createAnimation(FADE_OUT + "," + SLIDE_LEFT_OUT400, DURATION_3, EASING_FUNCTION_1),
    slideUpOut10: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideUpOut20: _createAnimation(FADE_OUT + "," + SLIDE_UP_OUT20, DURATION_3, EASING_FUNCTION_1),
    slideDownOut10: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT10, DURATION_3, EASING_FUNCTION_1),
    slideDownOut20: _createAnimation(FADE_OUT + "," + SLIDE_DOWN_OUT20, DURATION_3, EASING_FUNCTION_1),
    scaleUpIn100: _createAnimation(FADE_IN + "," + SCALE_UP100, DURATION_3, EASING_FUNCTION_1),
    scaleDownIn100: _createAnimation(FADE_IN + "," + SCALE_DOWN100, DURATION_3, EASING_FUNCTION_1),
    scaleUpOut103: _createAnimation(FADE_OUT + "," + SCALE_UP103, DURATION_1, EASING_FUNCTION_2),
    scaleDownOut98: _createAnimation(FADE_OUT + "," + SCALE_DOWN98, DURATION_1, EASING_FUNCTION_2),
    fadeIn100: _createAnimation(FADE_IN, DURATION_1, EASING_FUNCTION_2),
    fadeIn200: _createAnimation(FADE_IN, DURATION_2, EASING_FUNCTION_2),
    fadeIn400: _createAnimation(FADE_IN, DURATION_3, EASING_FUNCTION_2),
    fadeIn500: _createAnimation(FADE_IN, DURATION_4, EASING_FUNCTION_2),
    fadeOut100: _createAnimation(FADE_OUT, DURATION_1, EASING_FUNCTION_2),
    fadeOut200: _createAnimation(FADE_OUT, DURATION_2, EASING_FUNCTION_2),
    fadeOut400: _createAnimation(FADE_OUT, DURATION_3, EASING_FUNCTION_2),
    fadeOut500: _createAnimation(FADE_OUT, DURATION_4, EASING_FUNCTION_2),
    rotate90deg: _createAnimation(ROTATE90, '0.1s', EASING_FUNCTION_2),
    rotateN90deg: _createAnimation(ROTATE_N90, '0.1s', EASING_FUNCTION_2)
    // expandCollapse 100/200/400, delay 100/200
};
function _createAnimation(animationName, animationDuration, animationTimingFunction) {
    return {
        animationName: animationName,
        animationDuration: animationDuration,
        animationTimingFunction: animationTimingFunction,
        animationFillMode: 'both'
    };
}
function _createSlideInX(fromX) {
    return index_1.keyframes({
        from: { transform: "translate3d(" + fromX + "px,0,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideInY(fromY) {
    return index_1.keyframes({
        from: { transform: "translate3d(0," + fromY + "px,0)" },
        to: { transform: "translate3d(0,0,0)" }
    });
}
function _createSlideOutX(toX) {
    return index_1.keyframes({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(" + toX + "px,0,0)" }
    });
}
function _createSlideOutY(toY) {
    return index_1.keyframes({
        from: { transform: "translate3d(0,0,0)" },
        to: { transform: "translate3d(0," + toY + "px,0)" }
    });
}


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates a focus style which can be used to define an :after focus border.
 *
 * @param theme - The theme object to use.
 * @param inset - The number of pixels to inset the border.
 * @param color - The color for the border.
 * @param position - The positioning applied to the container. Must
 * be 'relative' or 'absolute' so that the focus border can live around it.
 * @returns The style object.
 */
function getFocusStyle(theme, inset, position) {
    if (inset === void 0) { inset = 0; }
    if (position === void 0) { position = 'relative'; }
    return {
        outline: 'transparent',
        position: position,
        selectors: {
            '::-moz-focus-inner': {
                border: '0'
            },
            '.ms-Fabric.is-focusVisible &:focus:after': {
                content: '""',
                position: 'absolute',
                left: inset + 1,
                top: inset + 1,
                bottom: inset + 1,
                right: inset + 1,
                border: '1px solid ' + theme.palette.white,
                outline: '1px solid ' + theme.palette.neutralSecondary,
                zIndex: 1
            }
        }
    };
}
exports.getFocusStyle = getFocusStyle;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.hiddenContentStyle = {
    position: 'absolute',
    width: 1,
    height: 1,
    margin: -1,
    padding: 0,
    border: 0,
    overflow: 'hidden'
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Customizations_1 = __webpack_require__(21);
var DefaultFontStyles_1 = __webpack_require__(35);
var DefaultPalette_1 = __webpack_require__(19);
var load_themed_styles_1 = __webpack_require__(82);
var _theme = {
    palette: DefaultPalette_1.DefaultPalette,
    semanticColors: _makeSemanticColorsFromPalette(DefaultPalette_1.DefaultPalette, false),
    fonts: DefaultFontStyles_1.DefaultFontStyles,
    isInverted: false
};
exports.ThemeSettingName = 'theme';
if (!Customizations_1.Customizations.getSettings([exports.ThemeSettingName]).theme) {
    var win = typeof window !== 'undefined' ? window : undefined;
    // tslint:disable:no-string-literal no-any
    if (win && win['FabricConfig'] && win['FabricConfig'].theme) {
        _theme = createTheme(win['FabricConfig'].theme);
    }
    // tslint:enable:no-string-literal no-any
    // Set the default theme.
    Customizations_1.Customizations.applySettings((_a = {}, _a[exports.ThemeSettingName] = _theme, _a));
}
/**
 * Gets the theme object.
 */
function getTheme() {
    return _theme;
}
exports.getTheme = getTheme;
/**
 * Applies the theme, while filling in missing slots.
 */
function loadTheme(theme) {
    _theme = createTheme(theme);
    // Invoke the legacy method of theming the page as well.
    load_themed_styles_1.loadTheme(tslib_1.__assign({}, _theme.palette, _theme.semanticColors));
    Customizations_1.Customizations.applySettings((_a = {}, _a[exports.ThemeSettingName] = _theme, _a));
    return _theme;
    var _a;
}
exports.loadTheme = loadTheme;
/**
 * Creates a custom theme definition which can be used with the Customizer.
 */
function createTheme(theme) {
    var newPalette = tslib_1.__assign({}, DefaultPalette_1.DefaultPalette, theme.palette);
    if (!theme.palette || !theme.palette.accent) {
        newPalette.accent = newPalette.themePrimary;
    }
    return {
        palette: newPalette,
        fonts: tslib_1.__assign({}, DefaultFontStyles_1.DefaultFontStyles, theme.fonts),
        semanticColors: tslib_1.__assign({}, _makeSemanticColorsFromPalette(newPalette, !!theme.isInverted), theme.semanticColors),
        isInverted: !!theme.isInverted
    };
}
exports.createTheme = createTheme;
// Generates all the semantic slot colors based on the Fabric palette.
// We'll use these as fallbacks for semantic slots that the passed in theme did not define.
function _makeSemanticColorsFromPalette(p, isInverted) {
    return {
        bodyBackground: p.white,
        bodyText: p.neutralPrimary,
        bodySubtext: p.neutralSecondary,
        bodyDivider: p.neutralLight,
        disabledBackground: p.neutralLighter,
        disabledText: p.neutralTertiaryAlt,
        disabledSubtext: p.neutralQuaternary,
        focusBorder: p.black,
        errorBackground: !isInverted ? 'rgba(232, 17, 35, .2)' : 'rgba(232, 17, 35, .5)',
        errorText: !isInverted ? p.redDark : '#ff5f5f',
        blockingBackground: !isInverted ? 'rgba(234, 67, 0, .2)' : 'rgba(234, 67, 0, .5)',
        warningBackground: !isInverted ? 'rgba(255, 185, 0, .2)' : 'rgba(255, 251, 0, .6)',
        warningHighlight: !isInverted ? '#ffb900' : '#fff100',
        successBackground: !isInverted ? 'rgba(186, 216, 10, .2)' : 'rgba(186, 216, 10, .4)',
        inputBorder: p.neutralTertiary,
        inputBorderHovered: p.neutralPrimary,
        inputBackgroundChecked: p.themePrimary,
        inputBackgroundCheckedHovered: p.themeDarkAlt,
        inputForegroundChecked: p.white,
        inputFocusBorderAlt: p.themePrimary,
        menuItemBackgroundHovered: p.neutralLighter,
        menuItemBackgroundChecked: p.neutralQuaternaryAlt,
        menuIcon: p.themePrimary,
        menuHeader: p.themePrimary,
        listBackground: p.white,
        listTextColor: p.neutralPrimary,
        listItemBackgroundHovered: p.neutralLighter,
        listItemBackgroundChecked: p.neutralLight,
        listItemBackgroundCheckedHovered: p.neutralQuaternaryAlt
    };
}
var _a;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
/**
 * Builds a class names object from a given map.
 *
 * @param styles - Map of unprocessed styles.
 * @returns Map of property name to class name.
 */
function buildClassMap(styles) {
    var classes = {};
    var _loop_1 = function (styleName) {
        if (styles.hasOwnProperty(styleName)) {
            var className_1;
            Object.defineProperty(classes, styleName, {
                get: function () {
                    if (className_1 === undefined) {
                        // tslint:disable-next-line:no-any
                        className_1 = index_1.mergeStyles(styles[styleName]).toString();
                    }
                    return className_1;
                },
                enumerable: true,
                configurable: true
            });
        }
    };
    for (var styleName in styles) {
        _loop_1(styleName);
    }
    return classes;
}
exports.buildClassMap = buildClassMap;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(4);
var icons_1 = __webpack_require__(36);
/**
 * Gets an icon classname. You should be able to add this classname to an I tag with no
 * additional classnames, and render the icon.
 *
 * @public
 */
function getIconClassName(name) {
    var className = '';
    var icon = icons_1.getIcon(name);
    if (icon) {
        className = index_1.mergeStyles(icon.subset.className, {
            selectors: {
                '::before': {
                    content: "\"" + icon.code + "\""
                }
            }
        });
    }
    return className;
}
exports.getIconClassName = getIconClassName;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var EventGroup_1 = __webpack_require__(14);
var scroll_1 = __webpack_require__(41);
var dom_1 = __webpack_require__(5);
var SCROLL_ITERATION_DELAY = 16;
var SCROLL_GUTTER_HEIGHT = 100;
var MAX_SCROLL_VELOCITY = 15;
/**
 * AutoScroll simply hooks up mouse events given a parent element, and scrolls the container
 * up/down depending on how close the mouse is to the top/bottom of the container.
 *
 * Once you don't want autoscroll any more, just dispose the helper and it will unhook events.
 *
 * @public
 */
var AutoScroll = (function () {
    function AutoScroll(element) {
        this._events = new EventGroup_1.EventGroup(this);
        this._scrollableParent = scroll_1.findScrollableParent(element);
        this._incrementScroll = this._incrementScroll.bind(this);
        this._scrollRect = dom_1.getRect(this._scrollableParent);
        // tslint:disable-next-line:no-any
        if (this._scrollableParent === window) {
            this._scrollableParent = document.body;
        }
        if (this._scrollableParent) {
            this._events.on(window, 'mousemove', this._onMouseMove, true);
            this._events.on(window, 'touchmove', this._onTouchMove, true);
        }
    }
    AutoScroll.prototype.dispose = function () {
        this._events.dispose();
        this._stopScroll();
    };
    AutoScroll.prototype._onMouseMove = function (ev) {
        this._computeScrollVelocity(ev.clientY);
    };
    AutoScroll.prototype._onTouchMove = function (ev) {
        if (ev.touches.length > 0) {
            this._computeScrollVelocity(ev.touches[0].clientY);
        }
    };
    AutoScroll.prototype._computeScrollVelocity = function (clientY) {
        if (!this._scrollRect) {
            return;
        }
        var scrollRectTop = this._scrollRect.top;
        var scrollClientBottom = scrollRectTop + this._scrollRect.height - SCROLL_GUTTER_HEIGHT;
        if (clientY < (scrollRectTop + SCROLL_GUTTER_HEIGHT)) {
            this._scrollVelocity = Math.max(-MAX_SCROLL_VELOCITY, -MAX_SCROLL_VELOCITY * ((SCROLL_GUTTER_HEIGHT - (clientY - scrollRectTop)) / SCROLL_GUTTER_HEIGHT));
        }
        else if (clientY > scrollClientBottom) {
            this._scrollVelocity = Math.min(MAX_SCROLL_VELOCITY, MAX_SCROLL_VELOCITY * ((clientY - scrollClientBottom) / SCROLL_GUTTER_HEIGHT));
        }
        else {
            this._scrollVelocity = 0;
        }
        if (this._scrollVelocity) {
            this._startScroll();
        }
        else {
            this._stopScroll();
        }
    };
    AutoScroll.prototype._startScroll = function () {
        if (!this._timeoutId) {
            this._incrementScroll();
        }
    };
    AutoScroll.prototype._incrementScroll = function () {
        if (this._scrollableParent) {
            this._scrollableParent.scrollTop += Math.round(this._scrollVelocity);
        }
        this._timeoutId = setTimeout(this._incrementScroll, SCROLL_ITERATION_DELAY);
    };
    AutoScroll.prototype._stopScroll = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
            delete this._timeoutId;
        }
    };
    return AutoScroll;
}());
exports.AutoScroll = AutoScroll;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var PropTypes = __webpack_require__(53);
var BaseComponent_1 = __webpack_require__(38);
/**
 * The Customizer component allows for default props to be mixed into components which
 * are decorated with the customizable() decorator. This enables injection scenarios like:
 *
 * 1. render svg icons instead of the icon font within all buttons
 * 2. inject a custom theme object into a component
 *
 * Props are provided via the settings prop, which should be a json map which contains 1 or more
 * name/value pairs representing injectable props.
 *
 * @public
 */
var Customizer = (function (_super) {
    tslib_1.__extends(Customizer, _super);
    // tslint:disable-next-line:no-any
    function Customizer(props, context) {
        var _this = _super.call(this, props) || this;
        _this.state = _this._getCustomizations(props, context);
        return _this;
    }
    Customizer.prototype.getChildContext = function () {
        return this.state;
    };
    // tslint:disable-next-line:no-any
    Customizer.prototype.componentWillReceiveProps = function (newProps, newContext) {
        this.setState(this._getCustomizations(newProps, newContext));
    };
    Customizer.prototype.render = function () {
        return React.Children.only(this.props.children);
    };
    Customizer.prototype._getCustomizations = function (props, context) {
        var _a = props.settings, settings = _a === void 0 ? {} : _a, _b = props.scopedSettings, scopedSettings = _b === void 0 ? {} : _b;
        var _c = context.customizations, customizations = _c === void 0 ? { settings: {}, scopedSettings: {} } : _c;
        var newScopedSettings = tslib_1.__assign({}, scopedSettings);
        for (var name_1 in customizations.scopedSettings) {
            if (customizations.scopedSettings.hasOwnProperty(name_1)) {
                newScopedSettings[name_1] = tslib_1.__assign({}, scopedSettings[name_1], customizations.scopedSettings[name_1]);
            }
        }
        return {
            customizations: {
                settings: tslib_1.__assign({}, settings, customizations.settings),
                scopedSettings: newScopedSettings
            }
        };
    };
    Customizer.contextTypes = {
        customizations: PropTypes.object
    };
    Customizer.childContextTypes = Customizer.contextTypes;
    return Customizer;
}(BaseComponent_1.BaseComponent));
exports.Customizer = Customizer;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
/**
 * Utility component for delaying the render of a child component after a given delay. This component
 * requires a single child component; don't pass in many components. Wrap multiple components in a DIV
 * if necessary.
 *
 * @public
 */
var DelayedRender = (function (_super) {
    tslib_1.__extends(DelayedRender, _super);
    function DelayedRender(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isRendered: false
        };
        return _this;
    }
    DelayedRender.prototype.componentDidMount = function () {
        var _this = this;
        var delay = this.props.delay;
        this._timeoutId = setTimeout(function () {
            _this.setState({
                isRendered: true
            });
        }, delay);
    };
    DelayedRender.prototype.componentWillUnmount = function () {
        if (this._timeoutId) {
            clearTimeout(this._timeoutId);
        }
    };
    DelayedRender.prototype.render = function () {
        return this.state.isRendered ? React.Children.only(this.props.children) : null;
    };
    // tslint:disable-next-line:typedef
    DelayedRender.defaultProps = {
        delay: 0
    };
    return DelayedRender;
}(React.Component));
exports.DelayedRender = DelayedRender;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
var RESET_INTERVAL = 3 * 60 * 1000; // auto reset every 3 minutes
/**
 * Performance helper class for measuring things.
 *
 * @public
 */
var FabricPerformance = (function () {
    function FabricPerformance() {
    }
    /**
     * Measures execution time of the given syncronous function. If the same logic is executed multiple times,
     * each individual measurement will be collected as well the overall numbers.
     * @param name - The name of this measurement
     * @param func - The logic to be measured for execution time
     */
    FabricPerformance.measure = function (name, func) {
        var start = now();
        func();
        var end = now();
        var measurement = FabricPerformance.summary[name] || {
            totalDuration: 0,
            count: 0,
            all: []
        };
        var duration = end - start;
        measurement.totalDuration += duration;
        measurement.count++;
        measurement.all.push({
            duration: duration,
            timeStamp: end
        });
        FabricPerformance.summary[name] = measurement;
    };
    FabricPerformance.reset = function () {
        FabricPerformance.summary = {};
        clearTimeout(FabricPerformance._timeoutId);
        FabricPerformance.setPeriodicReset();
    };
    FabricPerformance.setPeriodicReset = function () {
        FabricPerformance._timeoutId = setTimeout(function () { return FabricPerformance.reset(); }, RESET_INTERVAL);
    };
    FabricPerformance.summary = {};
    return FabricPerformance;
}());
exports.FabricPerformance = FabricPerformance;
FabricPerformance.setPeriodicReset();


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Rectangle helper class.
 *
 * @public
 */
var Rectangle = (function () {
    function Rectangle(left, right, top, bottom) {
        if (left === void 0) { left = 0; }
        if (right === void 0) { right = 0; }
        if (top === void 0) { top = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.top = top;
        this.bottom = bottom;
        this.left = left;
        this.right = right;
    }
    Object.defineProperty(Rectangle.prototype, "width", {
        /**
         * Calculated automatically by subtracting the right from left
         */
        get: function () {
            return this.right - this.left;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "height", {
        /**
         * Calculated automatically by subtracting the bottom from top.
         */
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Tests if another rect is approximately equal to this rect (within 4 decimal places.)
     */
    Rectangle.prototype.equals = function (rect) {
        // I'm fixing it to 4 decimal places because it allows enough precision and will handle cases when something should be rounded,
        // like .999999 should round to 1.
        return (parseFloat(this.top.toFixed(4)) === parseFloat(rect.top.toFixed(4)) &&
            parseFloat(this.bottom.toFixed(4)) === parseFloat(rect.bottom.toFixed(4)) &&
            parseFloat(this.left.toFixed(4)) === parseFloat(rect.left.toFixed(4)) &&
            parseFloat(this.right.toFixed(4)) === parseFloat(rect.right.toFixed(4)));
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper to find the index of an item within an array, using a callback to
 * determine the match.
 *
 * @public
 * @param array - Array to search.
 * @param cb - Callback which returns true on matches.
 */
function findIndex(array, cb) {
    var index = -1;
    for (var i = 0; array && i < array.length; i++) {
        if (cb(array[i], i)) {
            index = i;
            break;
        }
    }
    return index;
}
exports.findIndex = findIndex;
/**
 * Helper to find the first item within an array that satisfies the callback.
 * @param array - Array to search
 * @param cb - Callback which returns true on matches
 */
function find(array, cb) {
    var index = findIndex(array, cb);
    if (index < 0) {
        return undefined;
    }
    return array[index];
}
exports.find = find;
/**
 * Creates an array of a given size and helper method to populate.
 *
 * @public
 * @param size - Size of array.
 * @param getItem - Callback to populate given cell index.
 */
function createArray(size, getItem) {
    var array = [];
    for (var i = 0; i < size; i++) {
        array.push(getItem(i));
    }
    return array;
}
exports.createArray = createArray;
/**
 * Convert the given array to a matrix with columnCount number
 * of columns.
 *
 * @public
 * @param items - The array to convert
 * @param columnCount - The number of columns for the resulting matrix
 * @returns {any[][]} - A matrix of items
 */
function toMatrix(items, columnCount) {
    return items.reduce(function (rows, currentValue, index) {
        if (index % columnCount === 0) {
            rows.push([currentValue]);
        }
        else {
            rows[rows.length - 1].push(currentValue);
        }
        return rows;
    }, []);
}
exports.toMatrix = toMatrix;
/**
 * Given an array, it returns a new array that does not contain the item at the given index.
 * @param array - The array to operate on
 * @param index - The index of the element to remove
 */
function removeIndex(array, index) {
    return array.filter(function (_, i) { return index !== i; });
}
exports.removeIndex = removeIndex;
/**
 * Given an array, this function returns a new array where the element at a given index has been replaced.
 * @param array - The array to operate on
 * @param newElement - The element that will be placed in the new array
 * @param index - The index of the element that should be replaced
 */
function replaceElement(array, newElement, index) {
    var copy = array.slice();
    copy[index] = newElement;
    return copy;
}
exports.replaceElement = replaceElement;
/**
 * Given an array, this function returns a new array where an element has been inserted at the given index.
 * @param array - The array to operate on
 * @param index - The index where an element should be inserted
 * @param itemToAdd - The element to insert
 */
function addElementAtIndex(array, index, itemToAdd) {
    var copy = array.slice();
    copy.splice(index, 0, itemToAdd);
    return copy;
}
exports.addElementAtIndex = addElementAtIndex;
/**
 * Given an array where each element is of type T or T[], flatten it into an array of T
 * @param array - The array where each element can optionally also be an array
 */
function flatten(array) {
    var result = [];
    array.forEach(function (item) { return (result = result.concat(item)); });
    return result;
}
exports.flatten = flatten;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * AssertNever is a utility function that can be used for exhaustiveness checks in switch statements.
 *
 * @public
 */
function assertNever(x) {
    throw new Error('Unexpected object: ' + x);
}
exports.assertNever = assertNever;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Autobind is a utility for binding methods in a class. This simplifies tagging methods as being "bound" to the this pointer
 * so that they can be used in scenarios that simply require a function callback.
 */
// tslint:disable-next-line:no-any
function autobind(target, key, descriptor) {
    var fn = descriptor.value;
    var defining = false;
    return {
        configurable: true,
        get: function () {
            if (defining || (fn && this === fn.prototype) || this.hasOwnProperty(key)) {
                return fn;
            }
            // Bind method only once, and update the property to return the bound value from now on
            var fnBound = fn && fn.bind(this);
            defining = true;
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: fnBound
            });
            defining = false;
            return fnBound;
        },
        // tslint:disable-next-line:no-any
        set: function (newValue) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable: true,
                value: newValue
            });
        }
    };
}
exports.autobind = autobind;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Concatination helper, which can merge class names together. Skips over falsey values.
 *
 * @public
 */
function css() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var classes = [];
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        if (arg) {
            if (typeof arg === 'string') {
                classes.push(arg);
            }
            else if ((arg.hasOwnProperty('toString') && typeof (arg.toString) === 'function')) {
                classes.push(arg.toString());
            }
            else {
                // tslint:disable-next-line:no-any
                for (var key in arg) {
                    // tslint:disable-next-line:no-any
                    if (arg[key]) {
                        classes.push(key);
                    }
                }
            }
        }
    }
    return classes.join(' ');
}
exports.css = css;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var PropTypes = __webpack_require__(53);
var Customizations_1 = __webpack_require__(21);
function customizable(scope, fields
    // tslint:disable-next-line:no-any
) {
    // tslint:disable-next-line:no-shadowed-variable
    return function customizableFactory(
        // tslint:disable-next-line:no-any
        ComposedComponent
        // tslint:disable-next-line:no-any
    ) {
        return _a = (function (_super) {
                tslib_1.__extends(ComponentWithInjectedProps, _super);
                // tslint:disable-next-line:no-any
                function ComponentWithInjectedProps(props, context) {
                    var _this = _super.call(this, props, context) || this;
                    _this._onSettingChanged = _this._onSettingChanged.bind(_this);
                    return _this;
                }
                ComponentWithInjectedProps.prototype.componentDidMount = function () {
                    Customizations_1.Customizations.observe(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.componentWillUnmount = function () {
                    Customizations_1.Customizations.unobserve(this._onSettingChanged);
                };
                ComponentWithInjectedProps.prototype.render = function () {
                    var defaultProps = Customizations_1.Customizations.getSettings(fields, scope, this.context.customizations);
                    return (
                    // tslint:disable-next-line:no-any
                    React.createElement(ComposedComponent, tslib_1.__assign({}, defaultProps, this.props)));
                };
                ComponentWithInjectedProps.prototype._onSettingChanged = function () {
                    this.forceUpdate();
                };
                return ComponentWithInjectedProps;
            }(React.Component)),
            _a.displayName = 'Customized' + scope,
            _a.contextTypes = {
                customizations: PropTypes.object
            },
            _a;
        var _a;
    };
}
exports.customizable = customizable;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* tslint:disable:no-string-literal */
Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(5);
var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_VISIBLE_ATTRIBUTE = 'data-is-visible';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var FOCUSZONE_SUB_ATTRIBUTE = 'data-is-sub-focuszone';
/**
 * Gets the first focusable element.
 *
 * @public
 */
function getFirstFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getNextElement(rootElement, currentElement, true, false, false, includeElementsInFocusZones);
}
exports.getFirstFocusable = getFirstFocusable;
/**
 * Gets the last focusable element.
 *
 * @public
 */
function getLastFocusable(rootElement, currentElement, includeElementsInFocusZones) {
    return getPreviousElement(rootElement, currentElement, true, false, true, includeElementsInFocusZones);
}
exports.getLastFocusable = getLastFocusable;
/**
 * Attempts to focus the first focusable element that is a child or child's child of the rootElement.
 *
 * @public
 * @param rootElement - Element to start the search for a focusable child.
 * @returns True if focus was set, false if it was not.
 */
function focusFirstChild(rootElement) {
    var element = getNextElement(rootElement, rootElement, true, false, false, true);
    if (element) {
        element.focus();
        return true;
    }
    return false;
}
exports.focusFirstChild = focusFirstChild;
/**
 * Traverse to find the previous element.
 *
 * @public
 */
function getPreviousElement(rootElement, currentElement, checkNode, suppressParentTraversal, traverseChildren, includeElementsInFocusZones, allowFocusRoot) {
    if (!currentElement ||
        (!allowFocusRoot && currentElement === rootElement)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check its children.
    if (traverseChildren && isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getPreviousElement(rootElement, currentElement.lastElementChild, true, true, true, includeElementsInFocusZones, allowFocusRoot);
        if (childMatch) {
            return childMatch;
        }
    }
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    // Check its previous sibling.
    var siblingMatch = getPreviousElement(rootElement, currentElement.previousElementSibling, true, true, true, includeElementsInFocusZones, allowFocusRoot);
    if (siblingMatch) {
        return siblingMatch;
    }
    // Check its parent.
    if (!suppressParentTraversal) {
        return getPreviousElement(rootElement, currentElement.parentElement, true, false, false, includeElementsInFocusZones, allowFocusRoot);
    }
    return null;
}
exports.getPreviousElement = getPreviousElement;
/**
 * Traverse to find the next focusable element.
 *
 * @public
 */
function getNextElement(rootElement, currentElement, checkNode, suppressParentTraversal, suppressChildTraversal, includeElementsInFocusZones, allowFocusRoot) {
    if (!currentElement ||
        (currentElement === rootElement && suppressChildTraversal && !allowFocusRoot)) {
        return null;
    }
    var isCurrentElementVisible = isElementVisible(currentElement);
    // Check the current node, if it's not the first traversal.
    if (checkNode && isCurrentElementVisible && isElementTabbable(currentElement)) {
        return currentElement;
    }
    // Check its children.
    if (!suppressChildTraversal && isCurrentElementVisible &&
        (includeElementsInFocusZones || !(isElementFocusZone(currentElement) || isElementFocusSubZone(currentElement)))) {
        var childMatch = getNextElement(rootElement, currentElement.firstElementChild, true, true, false, includeElementsInFocusZones, allowFocusRoot);
        if (childMatch) {
            return childMatch;
        }
    }
    if (currentElement === rootElement) {
        return null;
    }
    // Check its sibling.
    var siblingMatch = getNextElement(rootElement, currentElement.nextElementSibling, true, true, false, includeElementsInFocusZones, allowFocusRoot);
    if (siblingMatch) {
        return siblingMatch;
    }
    if (!suppressParentTraversal) {
        return getNextElement(rootElement, currentElement.parentElement, false, false, true, includeElementsInFocusZones, allowFocusRoot);
    }
    return null;
}
exports.getNextElement = getNextElement;
/**
 * Determines if an element is visible.
 *
 * @public
 */
function isElementVisible(element) {
    // If the element is not valid, return false.
    if (!element || !element.getAttribute) {
        return false;
    }
    var visibilityAttribute = element.getAttribute(IS_VISIBLE_ATTRIBUTE);
    // If the element is explicitly marked with the visibility attribute, return that value as boolean.
    if (visibilityAttribute !== null && visibilityAttribute !== undefined) {
        return visibilityAttribute === 'true';
    }
    // Fallback to other methods of determining actual visibility.
    return (element.offsetHeight !== 0 ||
        element.offsetParent !== null ||
        // tslint:disable-next-line:no-any
        element.isVisible === true); // used as a workaround for testing.
}
exports.isElementVisible = isElementVisible;
/**
 * Determines if an element can receive focus.
 *
 * @public
 */
function isElementTabbable(element) {
    // If this element is null or is disabled, it is not considered tabbable.
    if (!element || element.disabled) {
        return false;
    }
    var tabIndex = 0;
    var tabIndexAttributeValue = null;
    if (element && element.getAttribute) {
        tabIndexAttributeValue = element.getAttribute('tabIndex');
        if (tabIndexAttributeValue) {
            tabIndex = parseInt(tabIndexAttributeValue, 10);
        }
    }
    var isFocusableAttribute = element.getAttribute ? element.getAttribute(IS_FOCUSABLE_ATTRIBUTE) : null;
    var isTabIndexSet = tabIndexAttributeValue !== null && tabIndex >= 0;
    return (!!element &&
        isFocusableAttribute !== 'false' &&
        (element.tagName === 'A' ||
            (element.tagName === 'BUTTON') ||
            (element.tagName === 'INPUT') ||
            (element.tagName === 'TEXTAREA') ||
            isFocusableAttribute === 'true' ||
            isTabIndexSet ||
            element.getAttribute && element.getAttribute('role') === 'button'));
}
exports.isElementTabbable = isElementTabbable;
/**
 * Determines if a given element is a focus zone.
 *
 * @public
 */
function isElementFocusZone(element) {
    return !!(element && element.getAttribute && !!element.getAttribute(FOCUSZONE_ID_ATTRIBUTE));
}
exports.isElementFocusZone = isElementFocusZone;
/**
 * Determines if a given element is a focus sub zone.
 *
 * @public
 */
function isElementFocusSubZone(element) {
    return !!(element && element.getAttribute && element.getAttribute(FOCUSZONE_SUB_ATTRIBUTE) === 'true');
}
exports.isElementFocusSubZone = isElementFocusSubZone;
/**
 * Determines if an element, or any of its children, contain focus.
 *
 * @public
 */
function doesElementContainFocus(element) {
    var document = dom_1.getDocument(element);
    var currentActiveElement = document && document.activeElement;
    if (currentActiveElement && dom_1.elementContains(element, currentActiveElement)) {
        return true;
    }
    return false;
}
exports.doesElementContainFocus = doesElementContainFocus;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var REACT_LIFECYCLE_EXCLUSIONS = [
    'setState',
    'render',
    'componentWillMount',
    'componentDidMount',
    'componentWillReceiveProps',
    'shouldComponentUpdate',
    'componentWillUpdate',
    'componentDidUpdate',
    'componentWillUnmount'
];
/**
 * Allows you to hoist methods, except those in an exclusion set from a source object into a destination object.
 *
 * @public
 * @param destination - The instance of the object to hoist the methods onto.
 * @param source - The instance of the object where the methods are hoisted from.
 * @param exclusions - (Optional) What methods to exclude from being hoisted.
 * @returns An array of names of methods that were hoisted.
 */
// tslint:disable-next-line:no-any
function hoistMethods(destination, source, exclusions) {
    if (exclusions === void 0) { exclusions = REACT_LIFECYCLE_EXCLUSIONS; }
    var hoisted = [];
    var _loop_1 = function (methodName) {
        if (typeof source[methodName] === 'function' &&
            destination[methodName] === undefined &&
            (!exclusions || exclusions.indexOf(methodName) === -1)) {
            hoisted.push(methodName);
            /* tslint:disable:no-function-expression */
            destination[methodName] = function () { source[methodName].apply(source, arguments); };
            /* tslint:enable */
        }
    };
    for (var methodName in source) {
        _loop_1(methodName);
    }
    return hoisted;
}
exports.hoistMethods = hoistMethods;
/**
 * Provides a method for convenience to unhoist hoisted methods.
 *
 * @public
 * @param source - The source object upon which methods were hoisted.
 * @param methodNames - An array of method names to unhoist.
 */
// tslint:disable-next-line:no-any
function unhoistMethods(source, methodNames) {
    methodNames
        .forEach(function (methodName) { return delete source[methodName]; });
}
exports.unhoistMethods = unhoistMethods;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(37), exports);
tslib_1.__exportStar(__webpack_require__(83), exports);
tslib_1.__exportStar(__webpack_require__(38), exports);
tslib_1.__exportStar(__webpack_require__(84), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(85), exports);
tslib_1.__exportStar(__webpack_require__(14), exports);
tslib_1.__exportStar(__webpack_require__(86), exports);
tslib_1.__exportStar(__webpack_require__(22), exports);
tslib_1.__exportStar(__webpack_require__(87), exports);
tslib_1.__exportStar(__webpack_require__(88), exports);
tslib_1.__exportStar(__webpack_require__(89), exports);
tslib_1.__exportStar(__webpack_require__(90), exports);
tslib_1.__exportStar(__webpack_require__(91), exports);
tslib_1.__exportStar(__webpack_require__(92), exports);
tslib_1.__exportStar(__webpack_require__(93), exports);
tslib_1.__exportStar(__webpack_require__(5), exports);
tslib_1.__exportStar(__webpack_require__(94), exports);
tslib_1.__exportStar(__webpack_require__(95), exports);
tslib_1.__exportStar(__webpack_require__(97), exports);
tslib_1.__exportStar(__webpack_require__(39), exports);
tslib_1.__exportStar(__webpack_require__(99), exports);
tslib_1.__exportStar(__webpack_require__(40), exports);
tslib_1.__exportStar(__webpack_require__(101), exports);
tslib_1.__exportStar(__webpack_require__(102), exports);
tslib_1.__exportStar(__webpack_require__(103), exports);
tslib_1.__exportStar(__webpack_require__(104), exports);
tslib_1.__exportStar(__webpack_require__(41), exports);
tslib_1.__exportStar(__webpack_require__(107), exports);
tslib_1.__exportStar(__webpack_require__(23), exports);
tslib_1.__exportStar(__webpack_require__(100), exports);


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Regular expression matching characters to ignore when calculating the initials.
 * The first part matches characters within parenthesis, including the parenthesis.
 * The second part matches special ASCII characters except space, plus some unicode special characters.
 */
var UNWANTED_CHARS_REGEX = /\([^)]*\)|[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g;
/** Regular expression matching one or more spaces. */
var MULTIPLE_WHITESPACES_REGEX = /\s+/g;
/**
 * Regular expression matching languages for which we currently don't support initials.
 * Arabic:   Arabic, Arabic Supplement, Arabic Extended-A.
 * Korean:   Hangul Jamo, Hangul Compatibility Jamo, Hangul Jamo Extended-A, Hangul Syllables, Hangul Jamo Extended-B.
 * Japanese: Hiragana, Katakana.
 * CJK:      CJK Unified Ideographs Extension A, CJK Unified Ideographs, CJK Compatibility Ideographs, CJK Unified Ideographs Extension B
 */
/* tslint:disable:max-line-length */
var UNSUPPORTED_TEXT_REGEX = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;
/* tslint:enable:max-line-length */
function getInitialsLatin(displayName, isRtl) {
    var initials = '';
    var splits = displayName.split(' ');
    if (splits.length === 2) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[1].charAt(0).toUpperCase();
    }
    else if (splits.length === 3) {
        initials += splits[0].charAt(0).toUpperCase();
        initials += splits[2].charAt(0).toUpperCase();
    }
    else if (splits.length !== 0) {
        initials += splits[0].charAt(0).toUpperCase();
    }
    if (isRtl && initials.length > 1) {
        return initials.charAt(1) + initials.charAt(0);
    }
    return initials;
}
function cleanupDisplayName(displayName) {
    displayName = displayName.replace(UNWANTED_CHARS_REGEX, '');
    displayName = displayName.replace(MULTIPLE_WHITESPACES_REGEX, ' ');
    displayName = displayName.trim();
    return displayName;
}
/**
 * Get (up to 2 characters) initials based on display name of the persona.
 *
 * @public
 */
function getInitials(displayName, isRtl) {
    if (!displayName) {
        return '';
    }
    displayName = cleanupDisplayName(displayName);
    if (UNSUPPORTED_TEXT_REGEX.test(displayName)) {
        return '';
    }
    return getInitialsLatin(displayName, isRtl);
}
exports.getInitials = getInitials;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fetches an item from local storage without throwing an exception
 * @param key The key of the item to fetch from local storage
 */
function getItem(key) {
    var result = null;
    try {
        result = window.localStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
exports.getItem = getItem;
/**
 * Inserts an item into local storage without throwing an exception
 * @param key The key of the item to add to local storage
 * @param data The data to put into local storage
 */
function setItem(key, data) {
    try {
        window.localStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
exports.setItem = setItem;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Determines the distance between two points.
 *
 * @public
 */
function getDistanceBetweenPoints(point1, point2) {
    var distance = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
    return distance;
}
exports.getDistanceBetweenPoints = getDistanceBetweenPoints;
/**
 * Produces a proportionally-scaled version of an input content size when fit to a bounding size.
 * Given a `contentSize` and a `boundsSize`, this function scales `contentSize` proportionally
 * using either `contain` or `cover` fit behaviors.
 * Use this function to pre-calculate the layout for the CSS `object-fit` and `background-fit` behaviors.
 * With `contain`, the output size must be the largest it can be while completely within the `boundsSize`.
 * With `cover`, the output size must be the smallest it can be while completely around the `boundsSize`.
 * By default, there is a `maxScale` value of 1, which prevents the `contentSize` from being scaled larger.
 *
 * @param options the options for the bounds fit operation
 */
function fitContentToBounds(options) {
    var contentSize = options.contentSize, boundsSize = options.boundsSize, _a = options.mode, mode = _a === void 0 ? 'contain' : _a, _b = options.maxScale, maxScale = _b === void 0 ? 1 : _b;
    var contentAspectRatio = contentSize.width / contentSize.height;
    var boundsAspectRatio = boundsSize.width / boundsSize.height;
    var scale;
    if (mode === 'contain' ? contentAspectRatio > boundsAspectRatio : contentAspectRatio < boundsAspectRatio) {
        scale = boundsSize.width / contentSize.width;
    }
    else {
        scale = boundsSize.height / contentSize.height;
    }
    var finalScale = Math.min(maxScale, scale);
    return {
        width: contentSize.width * finalScale,
        height: contentSize.height * finalScale
    };
}
exports.fitContentToBounds = fitContentToBounds;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _emptyObject = { empty: true };
var _dictionary = {};
var _weakMap = (typeof WeakMap === 'undefined') ? null : WeakMap;
/**
 *  Test utility for providing a custom weakmap.
 *
 * @internal
 * */
function setMemoizeWeakMap(weakMap) {
    _weakMap = weakMap;
}
exports.setMemoizeWeakMap = setMemoizeWeakMap;
/**
 * Memoize decorator to be used on class methods. Note that the "this" reference
 * will be inaccessible within a memoized method, given that a cached method's this
 * would not be instance specific.
 *
 * @public
 */
function memoize(target, key, descriptor) {
    // We bind to "null" to prevent people from inadvertently pulling values from "this",
    // rather than passing them in as input values which can be memoized.
    var fn = memoizeFunction(descriptor.value && descriptor.value.bind(null));
    return {
        configurable: true,
        get: function () {
            return fn;
        }
    };
}
exports.memoize = memoize;
/**
 * Memoizes a function; when you pass in the same parameters multiple times, it returns a cached result.
 * Be careful when passing in objects, you need to pass in the same INSTANCE for caching to work. Otherwise
 * it will grow the cache unnecessarily. Also avoid using default values that evaluate functions; passing in
 * undefined for a value and relying on a default function will execute it the first time, but will not
 * re-evaluate subsequent times which may have been unexpected.
 *
 * By default, the cache will reset after 100 permutations, to avoid abuse cases where the function is
 * unintendedly called with unique objects. Without a reset, the cache could grow infinitely, so we safeguard
 * by resetting. To override this behavior, pass a value of 0 to the maxCacheSize parameter.
 *
 * @public
 * @param cb - The function to memoize.
 * @param maxCacheSize - Max results to cache. If the cache exceeds this value, it will reset on the next call.
 * @returns A memoized version of the function.
 */
function memoizeFunction(cb, maxCacheSize) {
    if (maxCacheSize === void 0) { maxCacheSize = 100; }
    var rootNode;
    var cacheSize = 0;
    // Avoid breaking scenarios which don't have weak map.
    if (!_weakMap) {
        return cb;
    }
    // tslint:disable-next-line:no-function-expression
    return function memoizedFunction() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentNode = rootNode;
        if (rootNode === undefined || (maxCacheSize > 0 && cacheSize > maxCacheSize)) {
            rootNode = _createNode();
            cacheSize = 0;
        }
        currentNode = rootNode;
        // Traverse the tree until we find the match.
        for (var i = 0; i < args.length; i++) {
            var arg = _normalizeArg(args[i]);
            if (!currentNode.map.has(arg)) {
                currentNode.map.set(arg, _createNode());
            }
            currentNode = currentNode.map.get(arg);
        }
        if (!currentNode.hasOwnProperty('value')) {
            currentNode.value = cb.apply(void 0, args);
            cacheSize++;
        }
        return currentNode.value;
    };
}
exports.memoizeFunction = memoizeFunction;
function _normalizeArg(val) {
    if (!val) {
        return _emptyObject;
    }
    else if (typeof val === 'object') {
        return val;
    }
    else if (!_dictionary[val]) {
        _dictionary[val] = { val: val };
    }
    return _dictionary[val];
}
function _createNode() {
    return {
        map: _weakMap ? new _weakMap() : null
    };
}


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Detects whether an element's content has horizontal overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasHorizontalOverflow(element) {
    return element.clientWidth < element.scrollWidth;
}
exports.hasHorizontalOverflow = hasHorizontalOverflow;
/**
 * Detects whether an element's content has vertical overflow
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasVerticalOverflow(element) {
    return element.clientHeight < element.scrollHeight;
}
exports.hasVerticalOverflow = hasVerticalOverflow;
/**
 * Detects whether an element's content has overflow in any direction
 *
 * @public
 * @param element - Element to check for overflow
 * @returns True if element's content overflows
 */
function hasOverflow(element) {
    return hasHorizontalOverflow(element) || hasVerticalOverflow(element);
}
exports.hasOverflow = hasOverflow;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(40);
/**
 * An array of events that are allowed on every html element type.
 *
 * @public
 */
exports.baseElementEvents = [
    'onCopy',
    'onCut',
    'onPaste',
    'onCompositionEnd',
    'onCompositionStart',
    'onCompositionUpdate',
    'onFocus',
    'onFocusCapture',
    'onBlur',
    'onBlurCapture',
    'onChange',
    'onInput',
    'onSubmit',
    'onLoad',
    'onError',
    'onKeyDown',
    'onKeyDownCapture',
    'onKeyPress',
    'onKeyUp',
    'onAbort',
    'onCanPlay',
    'onCanPlayThrough',
    'onDurationChange',
    'onEmptied',
    'onEncrypted',
    'onEnded',
    'onLoadedData',
    'onLoadedMetadata',
    'onLoadStart',
    'onPause',
    'onPlay',
    'onPlaying',
    'onProgress',
    'onRateChange',
    'onSeeked',
    'onSeeking',
    'onStalled',
    'onSuspend',
    'onTimeUpdate',
    'onVolumeChange',
    'onWaiting',
    'onClick',
    'onClickCapture',
    'onContextMenu',
    'onDoubleClick',
    'onDrag',
    'onDragEnd',
    'onDragEnter',
    'onDragExit',
    'onDragLeave',
    'onDragOver',
    'onDragStart',
    'onDrop',
    'onMouseDown',
    'onMouseDownCapture',
    'onMouseEnter',
    'onMouseLeave',
    'onMouseMove',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseUpCapture',
    'onSelect',
    'onTouchCancel',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'onScroll',
    'onWheel'
];
/**
 * An array of element attributes which are allowed on every html element type.
 *
 * @public
 */
exports.baseElementProperties = [
    'defaultChecked',
    'defaultValue',
    'accept',
    'acceptCharset',
    'accessKey',
    'action',
    'allowFullScreen',
    'allowTransparency',
    'alt',
    'async',
    'autoComplete',
    'autoFocus',
    'autoPlay',
    'capture',
    'cellPadding',
    'cellSpacing',
    'charSet',
    'challenge',
    'checked',
    'children',
    'classID',
    'className',
    'cols',
    'colSpan',
    'content',
    'contentEditable',
    'contextMenu',
    'controls',
    'coords',
    'crossOrigin',
    'data',
    'dateTime',
    'default',
    'defer',
    'dir',
    'download',
    'draggable',
    'encType',
    'form',
    'formAction',
    'formEncType',
    'formMethod',
    'formNoValidate',
    'formTarget',
    'frameBorder',
    'headers',
    'height',
    'hidden',
    'high',
    'hrefLang',
    'htmlFor',
    'httpEquiv',
    'icon',
    'id',
    'inputMode',
    'integrity',
    'is',
    'keyParams',
    'keyType',
    'kind',
    'lang',
    'list',
    'loop',
    'low',
    'manifest',
    'marginHeight',
    'marginWidth',
    'max',
    'maxLength',
    'media',
    'mediaGroup',
    'method',
    'min',
    'minLength',
    'multiple',
    'muted',
    'name',
    'noValidate',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'poster',
    'preload',
    'radioGroup',
    'readOnly',
    'rel',
    'required',
    'role',
    'rows',
    'rowSpan',
    'sandbox',
    'scope',
    'scoped',
    'scrolling',
    'seamless',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'spellCheck',
    'src',
    'srcDoc',
    'srcLang',
    'srcSet',
    'start',
    'step',
    'style',
    'summary',
    'tabIndex',
    'title',
    'type',
    'useMap',
    'value',
    'width',
    'wmode',
    'wrap'
];
/**
 * An array of HTML element properties and events.
 *
 * @public
 */
exports.htmlElementProperties = exports.baseElementProperties.concat(exports.baseElementEvents);
/**
 * An array of A tag properties and events.
 *
 * @public
 */
exports.anchorProperties = exports.htmlElementProperties.concat([
    'href',
    'target'
]);
/**
 * An array of BUTTON tag properties and events.
 *
 * @public
 */
exports.buttonProperties = exports.htmlElementProperties.concat([
    'disabled'
]);
/**
 * An array of DIV tag properties and events.
 *
 * @public
 */
exports.divProperties = exports.htmlElementProperties.concat(['align', 'noWrap']);
/**
 * An array of INPUT tag properties and events.
 *
 * @public
 */
exports.inputProperties = exports.buttonProperties;
/**
 * An array of TEXTAREA tag properties and events.
 *
 * @public
 */
exports.textAreaProperties = exports.buttonProperties;
/**
 * An array of IMAGE tag properties and events.
 *
 * @public
 */
exports.imageProperties = exports.divProperties;
/**
 * Gets native supported props for an html element provided the allowance set. Use one of the property
 * sets defined (divProperties, buttonPropertes, etc) to filter out supported properties from a given
 * props set. Note that all data- and aria- prefixed attributes will be allowed.
 * NOTE: getNativeProps should always be applied first when adding props to a react component. The
 * non-native props should be applied second. This will prevent getNativeProps from overriding your custom props.
 * For example, if props passed to getNativeProps has an onClick function and getNativeProps is added to
 * the component after an onClick function is added, then the getNativeProps onClick will override it.
 *
 * @public
 * @param props - The unfiltered input props
 * @param allowedPropsNames-  The array of allowed propnames.
 * @returns The filtered props
 */
function getNativeProps(props, allowedPropNames, excludedPropNames) {
    return object_1.filteredAssign(function (propName) {
        return ((!excludedPropNames || excludedPropNames.indexOf(propName) < 0) && ((propName.indexOf('data-') === 0) ||
            (propName.indexOf('aria-') === 0) ||
            (allowedPropNames.indexOf(propName) >= 0)));
    }, {}, props);
}
exports.getNativeProps = getNativeProps;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _baseUrl = '';
/** Sets the current base url used for fetching images. */
function getResourceUrl(url) {
    return _baseUrl + url;
}
exports.getResourceUrl = getResourceUrl;
/** Gets the current base url used for fetching images. */
function setBaseUrl(baseUrl) {
    _baseUrl = baseUrl;
}
exports.setBaseUrl = setBaseUrl;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(5);
var sessionStorage_1 = __webpack_require__(106);
var RTL_LOCAL_STORAGE_KEY = 'isRTL';
// Default to undefined so that we initialize on first read.
var _isRTL;
/**
 * Gets the rtl state of the page (returns true if in rtl.)
 */
function getRTL() {
    if (_isRTL === undefined) {
        // Fabric supports persisting the RTL setting between page refreshes via session storage
        var savedRTL = sessionStorage_1.getItem(RTL_LOCAL_STORAGE_KEY);
        if (savedRTL !== null) {
            _isRTL = savedRTL === '1';
            setRTL(_isRTL);
        }
        var doc = dom_1.getDocument();
        if (_isRTL === undefined && doc) {
            _isRTL = doc.documentElement.getAttribute('dir') === 'rtl';
        }
    }
    return !!_isRTL;
}
exports.getRTL = getRTL;
/**
 * Sets the rtl state of the page (by adjusting the dir attribute of the html element.)
 */
function setRTL(isRTL, persistSetting) {
    if (persistSetting === void 0) { persistSetting = false; }
    var doc = dom_1.getDocument();
    if (doc) {
        doc.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    }
    if (persistSetting) {
        sessionStorage_1.setItem(RTL_LOCAL_STORAGE_KEY, isRTL ? '1' : '0');
    }
    _isRTL = isRTL;
}
exports.setRTL = setRTL;
/**
 * Returns the given key, but flips right/left arrows if necessary.
 */
function getRTLSafeKeyCode(key) {
    if (getRTL()) {
        if (key === 37 /* left */) {
            key = 39 /* right */;
        }
        else if (key === 39 /* right */) {
            key = 37 /* left */;
        }
    }
    return key;
}
exports.getRTLSafeKeyCode = getRTLSafeKeyCode;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(108);
load_themed_styles_1.loadStyles([{ "rawString": ".scrollDisabled_32722e3f{overflow:hidden !important}\n" }]);
exports.scrollDisabled = "scrollDisabled_32722e3f";


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Fetches an item from session storage without throwing an exception
 * @param key The key of the item to fetch from session storage
 */
function getItem(key) {
    var result = null;
    try {
        result = window.sessionStorage.getItem(key);
    }
    catch (e) {
        /* Eat the exception */
    }
    return result;
}
exports.getItem = getItem;
/**
 * Inserts an item into session storage without throwing an exception
 * @param key The key of the item to add to session storage
 * @param data The data to put into session storage
 */
function setItem(key, data) {
    try {
        window.sessionStorage.setItem(key, data);
    }
    catch (e) {
        /* Eat the exception */
    }
}
exports.setItem = setItem;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Regex that finds { and } so they can be removed on a lookup for string format
var FORMAT_ARGS_REGEX = /[\{\}]/g;
// Regex that finds {#} so it can be replaced by the arguments in string format
var FORMAT_REGEX = /\{\d+\}/g;
/**
 * String format method, used for scenarios where at runtime you
 * need to evaluate a formatted string given a tokenized string. This
 * usually only is needed in localization scenarios.

 * Example "I love {0} every {1}".format("CXP") will result in a Debug Exception.
 *
 * @public
 */
// tslint:disable-next-line:no-any
function format(s) {
    'use strict';
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var args = values;
    // Callback match function
    function replace_func(match) {
        // looks up in the args
        // tslint:disable-next-line:no-any
        var replacement = args[match.replace(FORMAT_ARGS_REGEX, '')];
        // catches undefined in nondebug and null in debug and nondebug
        if (replacement === null || replacement === undefined) {
            replacement = '';
        }
        return replacement;
    }
    return (s.replace(FORMAT_REGEX, replace_func));
}
exports.format = format;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// IE needs to inject styles using cssText. However, we need to evaluate this lazily, so this
// value will initialize as undefined, and later will be set once on first loadStyles injection.
var _injectStylesWithCssText;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
/** Maximum style text length, for supporting IE style restrictions. */
var MAX_STYLE_CONTENT_SIZE = 10000;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        if (_injectStylesWithCssText === undefined) {
            _injectStylesWithCssText = shouldUseCssText();
        }
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        _injectStylesWithCssText ?
            registerStylesIE(stylesArray, styleRecord) :
            registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @option: specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.type = 'text/css';
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
/**
 * Registers a set of style text, for IE 9 and below, which has a ~30 style element limit so we need
 * to register slightly differently.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStylesIE(styleArray, styleRecord) {
    var head = document.getElementsByTagName('head')[0];
    var registeredStyles = _themeState.registeredStyles;
    var lastStyleElement = _themeState.lastStyleElement;
    var stylesheet = lastStyleElement ? lastStyleElement.styleSheet : undefined;
    var lastStyleContent = stylesheet ? stylesheet.cssText : '';
    var lastRegisteredStyle = registeredStyles[registeredStyles.length - 1];
    var resolvedStyleText = resolveThemableArray(styleArray).styleString;
    if (!lastStyleElement || (lastStyleContent.length + resolvedStyleText.length) > MAX_STYLE_CONTENT_SIZE) {
        lastStyleElement = document.createElement('style');
        lastStyleElement.type = 'text/css';
        if (styleRecord) {
            head.replaceChild(lastStyleElement, styleRecord.styleElement);
            styleRecord.styleElement = lastStyleElement;
        }
        else {
            head.appendChild(lastStyleElement);
        }
        if (!styleRecord) {
            lastRegisteredStyle = {
                styleElement: lastStyleElement,
                themableStyle: styleArray
            };
            registeredStyles.push(lastRegisteredStyle);
        }
    }
    lastStyleElement.styleSheet.cssText += detokenize(resolvedStyleText);
    Array.prototype.push.apply(lastRegisteredStyle.themableStyle, styleArray); // concat in-place
    // Preserve the theme state.
    _themeState.lastStyleElement = lastStyleElement;
}
/**
 * Checks to see if styleSheet exists as a property off of a style element.
 * This will determine if style registration should be done via cssText (<= IE9) or not
 */
function shouldUseCssText() {
    var useCSSText = false;
    if (typeof document !== 'undefined') {
        var emptyStyle = document.createElement('style');
        emptyStyle.type = 'text/css';
        useCSSText = !!emptyStyle.styleSheet;
    }
    return useCSSText;
}


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)))

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(122), exports);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(125), exports);


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(146), exports);


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(149), exports);


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(154), exports);


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var Utilities_1 = __webpack_require__(2);
var Icon_1 = __webpack_require__(25);
var stylesImport = __webpack_require__(43);
var styles = stylesImport;
var Check = (function (_super) {
    tslib_1.__extends(Check, _super);
    function Check() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Check.prototype.shouldComponentUpdate = function (newProps) {
        return this.props.isChecked !== newProps.isChecked || this.props.checked !== newProps.checked;
    };
    Check.prototype.render = function () {
        var _a = this.props, isChecked = _a.isChecked, checked = _a.checked;
        isChecked = isChecked || checked;
        return (React.createElement("div", { className: Utilities_1.css('ms-Check', styles.root, (_b = {},
                _b["is-checked " + styles.rootIsChecked] = isChecked,
                _b)) },
            Icon_1.Icon({
                className: 'ms-Check-circle ' + styles.circle,
                iconName: 'CircleRing'
            }),
            Icon_1.Icon({
                className: 'ms-Check-check ' + styles.check,
                iconName: 'StatusCircleCheckmark'
            })));
        var _b;
    };
    Check.defaultProps = {
        isChecked: false
    };
    return Check;
}(Utilities_1.BaseComponent));
exports.Check = Check;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(115), exports);


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(8);
var Utilities_1 = __webpack_require__(2);
var DetailsList_Props_1 = __webpack_require__(16);
var FocusZone_1 = __webpack_require__(15);
var Icon_1 = __webpack_require__(25);
var Layer_1 = __webpack_require__(112);
var GroupSpacer_1 = __webpack_require__(11);
var GroupedList_1 = __webpack_require__(24);
var DetailsRowCheck_1 = __webpack_require__(27);
var checkStyles = __webpack_require__(28);
var interfaces_1 = __webpack_require__(6);
var stylesImport = __webpack_require__(118);
var styles = stylesImport;
var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button
var INNER_PADDING = 16;
var ISPADDED_WIDTH = 24;
var SelectAllVisibility;
(function (SelectAllVisibility) {
    SelectAllVisibility[SelectAllVisibility["none"] = 0] = "none";
    SelectAllVisibility[SelectAllVisibility["hidden"] = 1] = "hidden";
    SelectAllVisibility[SelectAllVisibility["visible"] = 2] = "visible";
})(SelectAllVisibility = exports.SelectAllVisibility || (exports.SelectAllVisibility = {}));
var DetailsHeader = (function (_super) {
    tslib_1.__extends(DetailsHeader, _super);
    function DetailsHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            columnResizeDetails: undefined,
            groupNestingDepth: _this.props.groupNestingDepth,
            isAllCollapsed: _this.props.isAllCollapsed
        };
        _this._onToggleCollapseAll = _this._onToggleCollapseAll.bind(_this);
        _this._onSelectAllClicked = _this._onSelectAllClicked.bind(_this);
        _this._id = Utilities_1.getId('header');
        return _this;
    }
    DetailsHeader.prototype.componentDidMount = function () {
        var selection = this.props.selection;
        this._events.on(selection, interfaces_1.SELECTION_CHANGE, this._onSelectionChanged);
        var rootElement = ReactDOM.findDOMNode(this.refs.root);
        // We need to use native on this to avoid MarqueeSelection from handling the event before us.
        this._events.on(rootElement, 'mousedown', this._onRootMouseDown);
        this._events.on(rootElement, 'keydown', this._onRootKeyDown);
    };
    DetailsHeader.prototype.componentWillReceiveProps = function (newProps) {
        var groupNestingDepth = this.state.groupNestingDepth;
        if (newProps.groupNestingDepth !== groupNestingDepth) {
            this.setState({ groupNestingDepth: newProps.groupNestingDepth });
        }
    };
    DetailsHeader.prototype.render = function () {
        var _this = this;
        var _a = this.props, columns = _a.columns, ariaLabel = _a.ariaLabel, ariaLabelForSelectAllCheckbox = _a.ariaLabelForSelectAllCheckbox, selectAllVisibility = _a.selectAllVisibility, ariaLabelForSelectionColumn = _a.ariaLabelForSelectionColumn;
        var _b = this.state, isAllSelected = _b.isAllSelected, columnResizeDetails = _b.columnResizeDetails, isSizing = _b.isSizing, groupNestingDepth = _b.groupNestingDepth, isAllCollapsed = _b.isAllCollapsed;
        var showCheckbox = selectAllVisibility !== SelectAllVisibility.none;
        var _c = this.props.onRenderColumnHeaderTooltip, onRenderColumnHeaderTooltip = _c === void 0 ? this._onRenderColumnHeaderTooltip : _c;
        return (React.createElement(FocusZone_1.FocusZone, { role: 'row', "aria-label": ariaLabel, className: Utilities_1.css('ms-DetailsHeader', styles.root, isAllSelected && ('is-allSelected ' + styles.rootIsAllSelected), (selectAllVisibility === SelectAllVisibility.hidden) && ('is-selectAllHidden ' + styles.rootIsSelectAllHidden), (!!columnResizeDetails && isSizing) && 'is-resizingColumn'), ref: 'root', onMouseMove: this._onRootMouseMove, "data-automationid": 'DetailsHeader', direction: FocusZone_1.FocusZoneDirection.horizontal },
            showCheckbox ? ([
                React.createElement("div", { key: '__checkbox', className: Utilities_1.css('ms-DetailsHeader-cell', 'ms-DetailsHeader-cellIsCheck', styles.cell, styles.cellIsCheck, checkStyles.owner, isAllSelected && checkStyles.isSelected), "aria-labelledby": this._id + "-check", onClick: this._onSelectAllClicked, "aria-colindex": 0, role: 'columnheader' }, onRenderColumnHeaderTooltip({
                    hostClassName: Utilities_1.css(styles.checkTooltip),
                    id: this._id + "-checkTooltip",
                    setAriaDescribedBy: false,
                    content: ariaLabelForSelectAllCheckbox,
                    children: (React.createElement(DetailsRowCheck_1.DetailsRowCheck, { id: this._id + "-check", "aria-label": ariaLabelForSelectionColumn, "aria-describedby": this._id + "-checkTooltip", selected: isAllSelected, anySelected: false, canSelect: true }))
                }, this._onRenderColumnHeaderTooltip)),
                ariaLabelForSelectAllCheckbox && !this.props.onRenderColumnHeaderTooltip ? (React.createElement("label", { key: '__checkboxLabel', id: this._id + "-checkTooltip", className: styles.accessibleLabel }, ariaLabelForSelectAllCheckbox)) : null
            ]) : null,
            groupNestingDepth > 0 && this.props.collapseAllVisibility === GroupedList_1.CollapseAllVisibility.visible ? (React.createElement("div", { className: Utilities_1.css('ms-DetailsHeader-cell', styles.cell), onClick: this._onToggleCollapseAll, "data-is-focusable": true },
                React.createElement(Icon_1.Icon, { className: Utilities_1.css('ms-DetailsHeader-collapseButton', styles.collapseButton, isAllCollapsed && ('is-collapsed ' + styles.collapseButtonIsCollapsed)), iconName: 'ChevronDown' }))) : (null),
            GroupSpacer_1.GroupSpacer({ count: groupNestingDepth - 1 }),
            columns.map(function (column, columnIndex) {
                return ([
                    React.createElement("div", { key: column.key, role: 'columnheader', "aria-sort": column.isSorted ? (column.isSortedDescending ? 'descending' : 'ascending') : 'none', "aria-disabled": column.columnActionsMode === DetailsList_Props_1.ColumnActionsMode.disabled, "aria-colindex": (showCheckbox ? 1 : 0) + columnIndex, className: Utilities_1.css('ms-DetailsHeader-cell', styles.cell, column.headerClassName, (column.columnActionsMode !== DetailsList_Props_1.ColumnActionsMode.disabled) && ('is-actionable ' + styles.cellIsActionable), !column.name && ('is-empty ' + styles.cellIsEmpty), (column.isSorted || column.isGrouped || column.isFiltered) && 'is-icon-visible', column.isPadded && styles.cellWrapperPadded), style: { width: column.calculatedWidth + INNER_PADDING + (column.isPadded ? ISPADDED_WIDTH : 0) }, "aria-haspopup": column.columnActionsMode === DetailsList_Props_1.ColumnActionsMode.hasDropdown, "data-automationid": 'ColumnsHeaderColumn', "data-item-key": column.key }, onRenderColumnHeaderTooltip({
                        hostClassName: Utilities_1.css(styles.cellTooltip),
                        id: _this._id + "-" + column.key + "-tooltip",
                        setAriaDescribedBy: false,
                        content: column.columnActionsMode !== DetailsList_Props_1.ColumnActionsMode.disabled ? column.ariaLabel : '',
                        children: (React.createElement("span", { id: _this._id + "-" + column.key, "aria-label": column.isIconOnly ? column.name : undefined, "aria-labelledby": column.isIconOnly ? undefined : _this._id + "-" + column.key + "-name ", className: Utilities_1.css('ms-DetailsHeader-cellTitle', styles.cellTitle), "data-is-focusable": column.columnActionsMode !== DetailsList_Props_1.ColumnActionsMode.disabled, role: column.columnActionsMode !== DetailsList_Props_1.ColumnActionsMode.disabled ? 'button' : undefined, "aria-describedby": _this._id + "-" + column.key + "-tooltip", onContextMenu: _this._onColumnContextMenu.bind(_this, column), onClick: _this._onColumnClick.bind(_this, column) },
                            React.createElement("span", { id: _this._id + "-" + column.key + "-name", className: Utilities_1.css('ms-DetailsHeader-cellName', styles.cellName, (_a = {},
                                    _a[styles.iconOnlyHeader] = column.isIconOnly,
                                    _a)) },
                                (column.iconName || column.iconClassName) && (React.createElement(Icon_1.Icon, { className: Utilities_1.css(styles.nearIcon, column.iconClassName), iconName: column.iconName })),
                                !column.isIconOnly ? column.name : undefined),
                            column.isFiltered && (React.createElement(Icon_1.Icon, { className: styles.nearIcon, iconName: 'Filter' })),
                            column.isSorted && (React.createElement(Icon_1.Icon, { className: Utilities_1.css(styles.nearIcon, styles.sortIcon), iconName: column.isSortedDescending ? 'SortDown' : 'SortUp' })),
                            column.isGrouped && (React.createElement(Icon_1.Icon, { className: styles.nearIcon, iconName: 'GroupedDescending' })),
                            column.columnActionsMode === DetailsList_Props_1.ColumnActionsMode.hasDropdown && !column.isIconOnly && (React.createElement(Icon_1.Icon, { className: Utilities_1.css('ms-DetailsHeader-filterChevron', styles.filterChevron), iconName: 'ChevronDown' }))))
                    }, _this._onRenderColumnHeaderTooltip)),
                    column.ariaLabel && !_this.props.onRenderColumnHeaderTooltip ? (React.createElement("label", { key: column.key + "_label", id: _this._id + "-" + column.key + "-tooltip", className: styles.accessibleLabel }, column.ariaLabel)) : null,
                    (column.isResizable) && _this._renderColumnSizer(columnIndex)
                ]);
                var _a;
            }),
            isSizing && (React.createElement(Layer_1.Layer, null,
                React.createElement("div", { className: Utilities_1.css(isSizing && styles.sizingOverlay), onMouseMove: this._onSizerMouseMove, onMouseUp: this._onSizerMouseUp })))));
    };
    /** Set focus to the active thing in the focus area. */
    DetailsHeader.prototype.focus = function () {
        return this.refs.root.focus();
    };
    DetailsHeader.prototype._renderColumnSizer = function (columnIndex) {
        var columns = this.props.columns;
        var column = this.props.columns[columnIndex];
        var columnResizeDetails = this.state.columnResizeDetails;
        return (React.createElement("div", { key: column.key + "_sizer", "aria-hidden": true, role: 'button', "data-is-focusable": false, onClick: stopPropagation, "data-sizer-index": columnIndex, onBlur: this._onSizerBlur, className: Utilities_1.css('ms-DetailsHeader-cellSizer', styles.cellSizer, columnIndex < columns.length - 1 ? styles.cellSizerStart : styles.cellSizerEnd, (_a = {},
                _a['is-resizing ' + styles.cellIsResizing] = columnResizeDetails && columnResizeDetails.columnIndex === columnIndex,
                _a)), onDoubleClick: this._onSizerDoubleClick.bind(this, columnIndex) }));
        var _a;
    };
    DetailsHeader.prototype._onRenderColumnHeaderTooltip = function (tooltipHostProps, defaultRender) {
        return (React.createElement("span", { className: tooltipHostProps.hostClassName }, tooltipHostProps.children));
    };
    /**
     * double click on the column sizer will auto ajust column width
     * to fit the longest content among current rendered rows.
     *
     * @private
     * @param {number} columnIndex (index of the column user double clicked)
     * @param {React.MouseEvent} ev (mouse double click event)
     */
    DetailsHeader.prototype._onSizerDoubleClick = function (columnIndex, ev) {
        var _a = this.props, onColumnAutoResized = _a.onColumnAutoResized, columns = _a.columns;
        if (onColumnAutoResized) {
            onColumnAutoResized(columns[columnIndex], columnIndex);
        }
    };
    /**
     * Called when the select all toggle is clicked.
     */
    DetailsHeader.prototype._onSelectAllClicked = function () {
        var selection = this.props.selection;
        selection.toggleAllSelected();
    };
    DetailsHeader.prototype._onRootMouseDown = function (ev) {
        var columnIndexAttr = ev.target.getAttribute('data-sizer-index');
        var columnIndex = Number(columnIndexAttr);
        var columns = this.props.columns;
        if (columnIndexAttr === null || ev.button !== MOUSEDOWN_PRIMARY_BUTTON) {
            // Ignore anything except the primary button.
            return;
        }
        this.setState({
            columnResizeDetails: {
                columnIndex: columnIndex,
                columnMinWidth: columns[columnIndex].calculatedWidth,
                originX: ev.clientX
            }
        });
        ev.preventDefault();
        ev.stopPropagation();
    };
    DetailsHeader.prototype._onRootMouseMove = function (ev) {
        var _a = this.state, columnResizeDetails = _a.columnResizeDetails, isSizing = _a.isSizing;
        if (columnResizeDetails && !isSizing && ev.clientX !== columnResizeDetails.originX) {
            this.setState({ isSizing: true });
        }
    };
    DetailsHeader.prototype._onRootKeyDown = function (ev) {
        var _a = this.state, columnResizeDetails = _a.columnResizeDetails, isSizing = _a.isSizing;
        var _b = this.props, columns = _b.columns, onColumnResized = _b.onColumnResized;
        var columnIndexAttr = ev.target.getAttribute('data-sizer-index');
        if (!columnIndexAttr || isSizing) {
            return;
        }
        var columnIndex = Number(columnIndexAttr);
        if (!columnResizeDetails) {
            if (ev.which === 13 /* enter */) {
                this.setState({
                    columnResizeDetails: {
                        columnIndex: columnIndex,
                        columnMinWidth: columns[columnIndex].calculatedWidth
                    }
                });
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
        else {
            var increment = void 0;
            if (ev.which === 13 /* enter */) {
                this.setState({
                    columnResizeDetails: undefined
                });
                ev.preventDefault();
                ev.stopPropagation();
            }
            else if (ev.which === 37 /* left */) {
                increment = Utilities_1.getRTL() ? 1 : -1;
            }
            else if (ev.which === 39 /* right */) {
                increment = Utilities_1.getRTL() ? -1 : 1;
            }
            if (increment) {
                if (!ev.shiftKey) {
                    increment *= 10;
                }
                this.setState({
                    columnResizeDetails: tslib_1.__assign({}, columnResizeDetails, { columnMinWidth: columnResizeDetails.columnMinWidth + increment })
                });
                if (onColumnResized) {
                    onColumnResized(columns[columnIndex], columnResizeDetails.columnMinWidth + increment);
                }
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    };
    /**
     * mouse move event handler in the header
     * it will set isSizing state to true when user clicked on the sizer and move the mouse.
     *
     * @private
     * @param {React.MouseEvent} ev (mouse move event)
     */
    DetailsHeader.prototype._onSizerMouseMove = function (ev) {
        var 
        // use buttons property here since ev.button in some edge case is not upding well during the move.
        // but firefox doesn't support it, so we set the default value when it is not defined.
        buttons = ev.buttons;
        var _a = this.props, onColumnIsSizingChanged = _a.onColumnIsSizingChanged, onColumnResized = _a.onColumnResized, columns = _a.columns;
        var columnResizeDetails = this.state.columnResizeDetails;
        if (buttons !== undefined && buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
            // cancel mouse down event and return early when the primary button is not pressed
            this._onSizerMouseUp(ev);
            return;
        }
        if (ev.clientX !== columnResizeDetails.originX) {
            if (onColumnIsSizingChanged) {
                onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], true);
            }
        }
        if (onColumnResized) {
            var movement = ev.clientX - columnResizeDetails.originX;
            if (Utilities_1.getRTL()) {
                movement = -movement;
            }
            onColumnResized(columns[columnResizeDetails.columnIndex], columnResizeDetails.columnMinWidth + movement);
        }
    };
    DetailsHeader.prototype._onSizerBlur = function (ev) {
        var columnResizeDetails = this.state.columnResizeDetails;
        if (columnResizeDetails) {
            this.setState({
                columnResizeDetails: undefined,
                isSizing: false
            });
        }
    };
    /**
     * mouse up event handler in the header
     * clear the resize related state.
     * This is to ensure we can catch double click event
     *
     * @private
     * @param {React.MouseEvent} ev (mouse up event)
     */
    DetailsHeader.prototype._onSizerMouseUp = function (ev) {
        var _a = this.props, columns = _a.columns, onColumnIsSizingChanged = _a.onColumnIsSizingChanged;
        var columnResizeDetails = this.state.columnResizeDetails;
        this.setState({
            columnResizeDetails: undefined,
            isSizing: false
        });
        if (onColumnIsSizingChanged) {
            onColumnIsSizingChanged(columns[columnResizeDetails.columnIndex], false);
        }
    };
    DetailsHeader.prototype._onSelectionChanged = function () {
        var isAllSelected = this.props.selection.isAllSelected();
        if (this.state.isAllSelected !== isAllSelected) {
            this.setState({
                isAllSelected: isAllSelected
            });
        }
    };
    DetailsHeader.prototype._onColumnClick = function (column, ev) {
        var onColumnClick = this.props.onColumnClick;
        if (column.onColumnClick) {
            column.onColumnClick(ev, column);
        }
        if (onColumnClick) {
            onColumnClick(ev, column);
        }
    };
    DetailsHeader.prototype._onColumnContextMenu = function (column, ev) {
        var onColumnContextMenu = this.props.onColumnContextMenu;
        if (column.onColumnContextMenu) {
            column.onColumnContextMenu(column, ev);
            ev.preventDefault();
        }
        if (onColumnContextMenu) {
            onColumnContextMenu(column, ev);
            ev.preventDefault();
        }
    };
    DetailsHeader.prototype._onToggleCollapseAll = function () {
        var onToggleCollapseAll = this.props.onToggleCollapseAll;
        var newCollapsed = !this.state.isAllCollapsed;
        this.setState({
            isAllCollapsed: newCollapsed
        });
        if (onToggleCollapseAll) {
            onToggleCollapseAll(newCollapsed);
        }
    };
    DetailsHeader.defaultProps = {
        selectAllVisibility: SelectAllVisibility.visible,
        collapseAllVisibility: GroupedList_1.CollapseAllVisibility.visible
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], DetailsHeader.prototype, "_onRenderColumnHeaderTooltip", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], DetailsHeader.prototype, "_onSelectAllClicked", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], DetailsHeader.prototype, "_onRootMouseDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], DetailsHeader.prototype, "_onRootMouseMove", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], DetailsHeader.prototype, "_onRootKeyDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], DetailsHeader.prototype, "_onSizerMouseMove", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], DetailsHeader.prototype, "_onSizerBlur", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], DetailsHeader.prototype, "_onSizerMouseUp", null);
    return DetailsHeader;
}(Utilities_1.BaseComponent));
exports.DetailsHeader = DetailsHeader;
function stopPropagation(ev) {
    ev.stopPropagation();
}


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(3);
load_themed_styles_1.loadStyles([{ "rawString": ".root_a189e471{display:inline-block;background:" }, { "theme": "white", "defaultValue": "#ffffff" }, { "rawString": ";position:relative;min-width:100%;vertical-align:top;height:32px;line-height:32px;white-space:nowrap;padding-bottom:1px;border-bottom:1px solid " }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": ";cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.root_a189e471.rootIsSelectAllHidden_a189e471 .cell_a189e471.cellIsCheck_a189e471{visibility:hidden}[dir='ltr'] .cellWrapperPadded_a189e471{padding-right:32px}[dir='rtl'] .cellWrapperPadded_a189e471{padding-left:32px}.cell_a189e471{font-size:12px;font-weight:400;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 8px;border:none;line-height:inherit;margin:0;height:32px;vertical-align:top;white-space:nowrap;text-overflow:ellipsis}.cell_a189e471::-moz-focus-inner{border:0}.cell_a189e471{outline:transparent}.cell_a189e471{position:relative}.ms-Fabric.is-focusVisible .cell_a189e471:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}[dir='ltr'] .cell_a189e471{text-align:left}[dir='rtl'] .cell_a189e471{text-align:right}.cell_a189e471.cellIsCheck_a189e471{position:relative;padding:0;margin:0}.cell_a189e471.cellIsActionable_a189e471:hover{color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": ";background:" }, { "theme": "neutralLighterAlt", "defaultValue": "#f8f8f8" }, { "rawString": "}.cell_a189e471.cellIsActionable_a189e471:active{background:" }, { "theme": "neutralLight", "defaultValue": "#eaeaea" }, { "rawString": "}.cell_a189e471.cellIsEmpty_a189e471{text-overflow:clip}.cellSizer_a189e471{display:inline-block;position:relative;cursor:ew-resize;bottom:0;top:0;margin:0 -8px;overflow:hidden;height:inherit;background:transparent;z-index:1;width:16px}.cellSizer_a189e471::-moz-focus-inner{border:0}.cellSizer_a189e471{outline:transparent}.cellSizer_a189e471:after{content:'';position:absolute;top:0;bottom:0;width:1px;background:" }, { "theme": "neutralTertiaryAlt", "defaultValue": "#c8c8c8" }, { "rawString": ";opacity:0;left:50%}.cellSizer_a189e471:focus:after,.cellSizer_a189e471:hover:after,.cellSizer_a189e471.cellIsResizing_a189e471:after{opacity:1;-webkit-transition:opacity .3s linear;transition:opacity .3s linear}.cellSizer_a189e471.cellIsResizing_a189e471:after{-webkit-box-shadow:0 0 5px 0 rgba(0,0,0,0.4);box-shadow:0 0 5px 0 rgba(0,0,0,0.4)}.collapseButton_a189e471{text-align:center;-webkit-transform:rotate(-180deg);transform:rotate(-180deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear, -webkit-transform .1s linear;width:20px;outline:0}.collapseButton_a189e471.collapseButtonIsCollapsed_a189e471{-webkit-transform:rotate(0deg);transform:rotate(0deg)}[dir='ltr'] .iconOnlyHeader_a189e471 .nearIcon_a189e471{padding-left:0}[dir='rtl'] .iconOnlyHeader_a189e471 .nearIcon_a189e471{padding-right:0}.nearIcon_a189e471{color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";opacity:1}[dir='ltr'] .nearIcon_a189e471{padding-left:8px}[dir='rtl'] .nearIcon_a189e471{padding-right:8px}.nearIcon_a189e471.sortIcon_a189e471{position:relative;top:1px}[dir='ltr'] .nearIcon_a189e471.sortIcon_a189e471{padding-left:4px}[dir='rtl'] .nearIcon_a189e471.sortIcon_a189e471{padding-right:4px}.cell_a189e471 .filterChevron_a189e471{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";vertical-align:middle}[dir='ltr'] .cell_a189e471 .filterChevron_a189e471{padding-left:4px}[dir='rtl'] .cell_a189e471 .filterChevron_a189e471{padding-right:4px}.cellTitle_a189e471{display:block;overflow:hidden;top:0;left:0;bottom:0;right:0;padding:0 8px}.cellTitle_a189e471::-moz-focus-inner{border:0}.cellTitle_a189e471{outline:transparent}.cellTitle_a189e471{position:absolute}.ms-Fabric.is-focusVisible .cellTitle_a189e471:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.ms-TooltipHost.checkTooltip_a189e471{display:block}.cellTooltip_a189e471{display:block;position:absolute;top:0;left:0;bottom:0;right:0}.sizingOverlay_a189e471{position:absolute;left:0;top:0;right:0;bottom:0;cursor:ew-resize;background:rgba(255,255,255,0)}@media screen and (-ms-high-contrast: active){.sizingOverlay_a189e471{background:transparent;-ms-high-contrast-adjust:none}}[dir='ltr'] .cell_a189e471 .collapseButton_a189e471{padding-right:0}[dir='rtl'] .cell_a189e471 .collapseButton_a189e471{padding-left:0}.accessibleLabel_a189e471{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}\n" }]);
exports.root = "root_a189e471";
exports.rootIsSelectAllHidden = "rootIsSelectAllHidden_a189e471";
exports.cell = "cell_a189e471";
exports.cellIsCheck = "cellIsCheck_a189e471";
exports.cellWrapperPadded = "cellWrapperPadded_a189e471";
exports.cellIsActionable = "cellIsActionable_a189e471";
exports.cellIsEmpty = "cellIsEmpty_a189e471";
exports.cellSizer = "cellSizer_a189e471";
exports.cellIsResizing = "cellIsResizing_a189e471";
exports.collapseButton = "collapseButton_a189e471";
exports.collapseButtonIsCollapsed = "collapseButtonIsCollapsed_a189e471";
exports.iconOnlyHeader = "iconOnlyHeader_a189e471";
exports.nearIcon = "nearIcon_a189e471";
exports.sortIcon = "sortIcon_a189e471";
exports.filterChevron = "filterChevron_a189e471";
exports.cellTitle = "cellTitle_a189e471";
exports.checkTooltip = "checkTooltip_a189e471";
exports.cellTooltip = "cellTooltip_a189e471";
exports.sizingOverlay = "sizingOverlay_a189e471";
exports.accessibleLabel = "accessibleLabel_a189e471";


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var stylesImport = __webpack_require__(120);
var Utilities_1 = __webpack_require__(2);
var DetailsList_Props_1 = __webpack_require__(16);
var DetailsHeader_1 = __webpack_require__(117);
var DetailsRow_1 = __webpack_require__(44);
var FocusZone_1 = __webpack_require__(15);
var index_1 = __webpack_require__(12);
var DragDropHelper_1 = __webpack_require__(157);
var GroupedList_1 = __webpack_require__(24);
var List_1 = __webpack_require__(26);
var withViewport_1 = __webpack_require__(156);
var styles = stylesImport;
var MIN_COLUMN_WIDTH = 100; // this is the global min width
var CHECKBOX_WIDTH = 40;
var GROUP_EXPAND_WIDTH = 36;
var DEFAULT_INNER_PADDING = 16;
var ISPADDED_WIDTH = 24;
var DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
var DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
var DetailsList = (function (_super) {
    tslib_1.__extends(DetailsList, _super);
    function DetailsList(props) {
        var _this = _super.call(this, props) || this;
        _this._activeRows = {};
        _this._columnOverrides = {};
        _this._onColumnIsSizingChanged = _this._onColumnIsSizingChanged.bind(_this);
        _this._onColumnResized = _this._onColumnResized.bind(_this);
        _this._onColumnAutoResized = _this._onColumnAutoResized.bind(_this);
        _this._onRowDidMount = _this._onRowDidMount.bind(_this);
        _this._onRowWillUnmount = _this._onRowWillUnmount.bind(_this);
        _this._onToggleCollapse = _this._onToggleCollapse.bind(_this);
        _this._onActiveRowChanged = _this._onActiveRowChanged.bind(_this);
        _this._onHeaderKeyDown = _this._onHeaderKeyDown.bind(_this);
        _this._onContentKeyDown = _this._onContentKeyDown.bind(_this);
        _this._onRenderCell = _this._onRenderCell.bind(_this);
        _this._onGroupExpandStateChanged = _this._onGroupExpandStateChanged.bind(_this);
        _this.state = {
            lastWidth: 0,
            adjustedColumns: _this._getAdjustedColumns(props),
            isSizing: false,
            isDropping: false,
            isCollapsed: props.groupProps && props.groupProps.isAllGroupsCollapsed,
            isSomeGroupExpanded: props.groupProps && !props.groupProps.isAllGroupsCollapsed
        };
        _this._selection = props.selection || new index_1.Selection({ onSelectionChanged: undefined, getKey: props.getKey });
        _this._selection.setItems(props.items, false);
        _this._dragDropHelper = props.dragDropEvents ? new DragDropHelper_1.DragDropHelper({
            selection: _this._selection,
            minimumPixelsForDrag: props.minimumPixelsForDrag
        }) : null;
        _this._initialFocusedIndex = props.initialFocusedIndex;
        return _this;
    }
    DetailsList.prototype.scrollToIndex = function (index, measureItem) {
        this._list && this._list.scrollToIndex(index, measureItem);
        this._groupedList && this._groupedList.scrollToIndex(index, measureItem);
    };
    DetailsList.prototype.componentWillUnmount = function () {
        if (this._dragDropHelper) {
            this._dragDropHelper.dispose();
        }
    };
    DetailsList.prototype.componentDidUpdate = function (prevProps, prevState) {
        if (this._initialFocusedIndex !== undefined) {
            var item = this.props.items[this._initialFocusedIndex];
            if (item) {
                var itemKey = this._getItemKey(item, this._initialFocusedIndex);
                var row = this._activeRows[itemKey];
                if (row) {
                    this._setFocusToRowIfPending(row);
                }
            }
        }
        if (this.props.onDidUpdate) {
            this.props.onDidUpdate(this);
        }
    };
    DetailsList.prototype.componentWillReceiveProps = function (newProps) {
        var _a = this.props, checkboxVisibility = _a.checkboxVisibility, items = _a.items, setKey = _a.setKey, selectionMode = _a.selectionMode, columns = _a.columns, viewport = _a.viewport;
        var shouldResetSelection = (newProps.setKey !== setKey) || newProps.setKey === undefined;
        var shouldForceUpdates = false;
        if (newProps.layoutMode !== this.props.layoutMode) {
            shouldForceUpdates = true;
        }
        if (shouldResetSelection) {
            this._initialFocusedIndex = newProps.initialFocusedIndex;
        }
        if (newProps.items !== items) {
            this._selection.setItems(newProps.items, shouldResetSelection);
        }
        if (newProps.checkboxVisibility !== checkboxVisibility ||
            newProps.columns !== columns ||
            newProps.viewport.width !== viewport.width) {
            shouldForceUpdates = true;
        }
        this._adjustColumns(newProps, true);
        if (newProps.selectionMode !== selectionMode) {
            shouldForceUpdates = true;
        }
        if (shouldForceUpdates) {
            this._forceListUpdates();
        }
    };
    DetailsList.prototype.render = function () {
        var _a = this.props, ariaLabelForListHeader = _a.ariaLabelForListHeader, ariaLabelForSelectAllCheckbox = _a.ariaLabelForSelectAllCheckbox, ariaLabelForSelectionColumn = _a.ariaLabelForSelectionColumn, className = _a.className, checkboxVisibility = _a.checkboxVisibility, compact = _a.compact, constrainMode = _a.constrainMode, dragDropEvents = _a.dragDropEvents, groups = _a.groups, groupProps = _a.groupProps, items = _a.items, isHeaderVisible = _a.isHeaderVisible, layoutMode = _a.layoutMode, onItemInvoked = _a.onItemInvoked, onItemContextMenu = _a.onItemContextMenu, onColumnHeaderClick = _a.onColumnHeaderClick, onColumnHeaderContextMenu = _a.onColumnHeaderContextMenu, selectionMode = _a.selectionMode, selectionPreservedOnEmptyClick = _a.selectionPreservedOnEmptyClick, ariaLabel = _a.ariaLabel, ariaLabelForGrid = _a.ariaLabelForGrid, rowElementEventMap = _a.rowElementEventMap, _b = _a.shouldApplyApplicationRole, shouldApplyApplicationRole = _b === void 0 ? false : _b, getKey = _a.getKey, listProps = _a.listProps, usePageCache = _a.usePageCache, onShouldVirtualize = _a.onShouldVirtualize;
        var _c = this.state, adjustedColumns = _c.adjustedColumns, isCollapsed = _c.isCollapsed, isSizing = _c.isSizing, isSomeGroupExpanded = _c.isSomeGroupExpanded;
        var _d = this, selection = _d._selection, dragDropHelper = _d._dragDropHelper;
        var groupNestingDepth = this._getGroupNestingDepth();
        var additionalListProps = tslib_1.__assign({ renderedWindowsAhead: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_AHEAD, renderedWindowsBehind: isSizing ? 0 : DEFAULT_RENDERED_WINDOWS_BEHIND, getKey: getKey }, listProps);
        var selectAllVisibility = DetailsHeader_1.SelectAllVisibility.none; // for SelectionMode.none
        if (selectionMode === index_1.SelectionMode.single) {
            selectAllVisibility = DetailsHeader_1.SelectAllVisibility.hidden;
        }
        if (selectionMode === index_1.SelectionMode.multiple) {
            // if isCollapsedGroupSelectVisible is false, disable select all when the list has all collapsed groups
            var isCollapsedGroupSelectVisible = groupProps && groupProps.headerProps && groupProps.headerProps.isCollapsedGroupSelectVisible;
            if (isCollapsedGroupSelectVisible === undefined) {
                isCollapsedGroupSelectVisible = true;
            }
            var isSelectAllVisible = isCollapsedGroupSelectVisible || !groups || isSomeGroupExpanded;
            selectAllVisibility = isSelectAllVisible ? DetailsHeader_1.SelectAllVisibility.visible : DetailsHeader_1.SelectAllVisibility.hidden;
        }
        if (checkboxVisibility === DetailsList_Props_1.CheckboxVisibility.hidden) {
            selectAllVisibility = DetailsHeader_1.SelectAllVisibility.none;
        }
        var _e = this.props.onRenderDetailsHeader, onRenderDetailsHeader = _e === void 0 ? this._onRenderDetailsHeader : _e;
        return (
        // If shouldApplyApplicationRole is true, role application will be applied to make arrow keys work
        // with JAWS.
        React.createElement("div", tslib_1.__assign({ ref: this._resolveRef('_root'), className: Utilities_1.css('ms-DetailsList', styles.root, className, (layoutMode === DetailsList_Props_1.DetailsListLayoutMode.fixedColumns) && 'is-fixed', (constrainMode === DetailsList_Props_1.ConstrainMode.horizontalConstrained) && ('is-horizontalConstrained ' + styles.rootIsHorizontalConstrained), !!compact && ('ms-DetailsList--Compact ' + styles.rootCompact)), "data-automationid": 'DetailsList', "data-is-scrollable": 'false', "aria-label": ariaLabel }, (shouldApplyApplicationRole ? { role: 'application' } : {})),
            React.createElement("div", { role: 'grid', "aria-label": ariaLabelForGrid, "aria-rowcount": (isHeaderVisible ? 1 : 0) + (items ? items.length : 0), "aria-colcount": (selectAllVisibility !== DetailsHeader_1.SelectAllVisibility.none ? 1 : 0) + (adjustedColumns ? adjustedColumns.length : 0), "aria-readonly": 'true' },
                React.createElement("div", { onKeyDown: this._onHeaderKeyDown, role: 'presentation' }, isHeaderVisible && onRenderDetailsHeader({
                    componentRef: this._resolveRef('_header'),
                    selectionMode: selectionMode,
                    layoutMode: layoutMode,
                    selection: selection,
                    columns: adjustedColumns,
                    onColumnClick: onColumnHeaderClick,
                    onColumnContextMenu: onColumnHeaderContextMenu,
                    onColumnResized: this._onColumnResized,
                    onColumnIsSizingChanged: this._onColumnIsSizingChanged,
                    onColumnAutoResized: this._onColumnAutoResized,
                    groupNestingDepth: groupNestingDepth,
                    isAllCollapsed: isCollapsed,
                    onToggleCollapseAll: this._onToggleCollapse,
                    ariaLabel: ariaLabelForListHeader,
                    ariaLabelForSelectAllCheckbox: ariaLabelForSelectAllCheckbox,
                    ariaLabelForSelectionColumn: ariaLabelForSelectionColumn,
                    selectAllVisibility: selectAllVisibility,
                    collapseAllVisibility: groupProps && groupProps.collapseAllVisibility
                }, this._onRenderDetailsHeader)),
                React.createElement("div", { onKeyDown: this._onContentKeyDown, role: 'presentation' },
                    React.createElement(FocusZone_1.FocusZone, { ref: this._resolveRef('_focusZone'), className: styles.focusZone, direction: FocusZone_1.FocusZoneDirection.vertical, isInnerZoneKeystroke: isRightArrow, onActiveElementChanged: this._onActiveRowChanged },
                        React.createElement(index_1.SelectionZone, { ref: this._resolveRef('_selectionZone'), selection: selection, selectionPreservedOnEmptyClick: selectionPreservedOnEmptyClick, selectionMode: selectionMode, onItemInvoked: onItemInvoked, onItemContextMenu: onItemContextMenu }, groups ? (React.createElement(GroupedList_1.GroupedList, { ref: this._resolveRef('_groupedList'), groups: groups, groupProps: groupProps, items: items, onRenderCell: this._onRenderCell, selection: selection, selectionMode: selectionMode, dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: rowElementEventMap, listProps: additionalListProps, onGroupExpandStateChanged: this._onGroupExpandStateChanged, usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize })) : (React.createElement(List_1.List, tslib_1.__assign({ ref: this._resolveRef('_list'), role: 'presentation', items: items, onRenderCell: this._onRenderListCell(0), usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize }, additionalListProps)))))))));
    };
    DetailsList.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this._forceListUpdates();
    };
    DetailsList.prototype._onRenderRow = function (props, defaultRender) {
        return React.createElement(DetailsRow_1.DetailsRow, tslib_1.__assign({}, props));
    };
    DetailsList.prototype._onRenderDetailsHeader = function (detailsHeaderProps, defaultRender) {
        return React.createElement(DetailsHeader_1.DetailsHeader, tslib_1.__assign({}, detailsHeaderProps));
    };
    DetailsList.prototype._onRenderListCell = function (nestingDepth) {
        var _this = this;
        return function (item, itemIndex) {
            return _this._onRenderCell(nestingDepth, item, itemIndex);
        };
    };
    DetailsList.prototype._onRenderCell = function (nestingDepth, item, index) {
        var _a = this.props, compact = _a.compact, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.rowElementEventMap, onRenderMissingItem = _a.onRenderMissingItem, onRenderItemColumn = _a.onRenderItemColumn, _b = _a.onRenderRow, onRenderRow = _b === void 0 ? this._onRenderRow : _b, selectionMode = _a.selectionMode, viewport = _a.viewport, checkboxVisibility = _a.checkboxVisibility, getRowAriaLabel = _a.getRowAriaLabel, checkButtonAriaLabel = _a.checkButtonAriaLabel, checkboxCellClassName = _a.checkboxCellClassName, groupProps = _a.groupProps;
        var collapseAllVisibility = groupProps && groupProps.collapseAllVisibility;
        var selection = this._selection;
        var dragDropHelper = this._dragDropHelper;
        var columns = this.state.adjustedColumns;
        if (!item) {
            if (onRenderMissingItem) {
                onRenderMissingItem(index);
            }
            return null;
        }
        return onRenderRow({
            item: item,
            itemIndex: index,
            compact: compact,
            columns: columns,
            groupNestingDepth: nestingDepth,
            selectionMode: selectionMode,
            selection: selection,
            onDidMount: this._onRowDidMount,
            onWillUnmount: this._onRowWillUnmount,
            onRenderItemColumn: onRenderItemColumn,
            eventsToRegister: eventsToRegister,
            dragDropEvents: dragDropEvents,
            dragDropHelper: dragDropHelper,
            viewport: viewport,
            checkboxVisibility: checkboxVisibility,
            collapseAllVisibility: collapseAllVisibility,
            getRowAriaLabel: getRowAriaLabel,
            checkButtonAriaLabel: checkButtonAriaLabel,
            checkboxCellClassName: checkboxCellClassName,
        }, this._onRenderRow);
    };
    DetailsList.prototype._onGroupExpandStateChanged = function (isSomeGroupExpanded) {
        this.setState({ isSomeGroupExpanded: isSomeGroupExpanded });
    };
    DetailsList.prototype._onColumnIsSizingChanged = function (column, isSizing) {
        this.setState({ isSizing: isSizing });
    };
    DetailsList.prototype._onHeaderKeyDown = function (ev) {
        if (ev.which === 40 /* down */) {
            if (this._focusZone && this._focusZone.focus()) {
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    };
    DetailsList.prototype._onContentKeyDown = function (ev) {
        if (ev.which === 38 /* up */ && !ev.altKey) {
            if (this._header && this._header.focus()) {
                ev.preventDefault();
                ev.stopPropagation();
            }
        }
    };
    DetailsList.prototype._getGroupNestingDepth = function () {
        var groups = this.props.groups;
        var level = 0;
        var groupsInLevel = groups;
        while (groupsInLevel && groupsInLevel.length > 0) {
            level++;
            groupsInLevel = groupsInLevel[0].children;
        }
        return level;
    };
    DetailsList.prototype._onRowDidMount = function (row) {
        var _a = row.props, item = _a.item, itemIndex = _a.itemIndex;
        var itemKey = this._getItemKey(item, itemIndex);
        this._activeRows[itemKey] = row; // this is used for column auto resize
        this._setFocusToRowIfPending(row);
        var onRowDidMount = this.props.onRowDidMount;
        if (onRowDidMount) {
            onRowDidMount(item, itemIndex);
        }
    };
    DetailsList.prototype._setFocusToRowIfPending = function (row) {
        var itemIndex = row.props.itemIndex;
        if (this._initialFocusedIndex !== undefined && itemIndex === this._initialFocusedIndex) {
            if (this._selectionZone) {
                this._selectionZone.ignoreNextFocus();
            }
            this._async.setTimeout(function () {
                row.focus();
            }, 0);
            delete this._initialFocusedIndex;
        }
    };
    DetailsList.prototype._onRowWillUnmount = function (row) {
        var onRowWillUnmount = this.props.onRowWillUnmount;
        var _a = row.props, item = _a.item, itemIndex = _a.itemIndex;
        var itemKey = this._getItemKey(item, itemIndex);
        delete this._activeRows[itemKey];
        if (onRowWillUnmount) {
            onRowWillUnmount(item, itemIndex);
        }
    };
    DetailsList.prototype._onToggleCollapse = function (collapsed) {
        this.setState({
            isCollapsed: collapsed
        });
        if (this._groupedList) {
            this._groupedList.toggleCollapseAll(collapsed);
        }
    };
    DetailsList.prototype._forceListUpdates = function () {
        if (this._groupedList) {
            this._groupedList.forceUpdate();
        }
        if (this._list) {
            this._list.forceUpdate();
        }
    };
    DetailsList.prototype._adjustColumns = function (newProps, forceUpdate) {
        var adjustedColumns = this._getAdjustedColumns(newProps, forceUpdate);
        var viewportWidth = this.props.viewport.width;
        if (adjustedColumns) {
            this.setState({
                adjustedColumns: adjustedColumns,
                lastWidth: viewportWidth,
            });
        }
    };
    /** Returns adjusted columns, given the viewport size and layout mode. */
    DetailsList.prototype._getAdjustedColumns = function (newProps, forceUpdate) {
        var _this = this;
        var newColumns = newProps.columns, newItems = newProps.items, layoutMode = newProps.layoutMode, selectionMode = newProps.selectionMode;
        var viewportWidth = newProps.viewport.width;
        var columns = this.props ? this.props.columns : [];
        var lastWidth = this.state ? this.state.lastWidth : -1;
        var lastSelectionMode = this.state ? this.state.lastSelectionMode : undefined;
        if (viewportWidth !== undefined) {
            if (!forceUpdate &&
                lastWidth === viewportWidth &&
                lastSelectionMode === selectionMode &&
                (!columns || newColumns === columns)) {
                return undefined;
            }
        }
        else {
            viewportWidth = this.props.viewport.width;
        }
        newColumns = newColumns || buildColumns(newItems, true);
        var adjustedColumns;
        if (layoutMode === DetailsList_Props_1.DetailsListLayoutMode.fixedColumns) {
            adjustedColumns = this._getFixedColumns(newColumns);
            // Preserve adjusted column calculated widths.
            adjustedColumns.forEach(function (column) {
                _this._rememberCalculatedWidth(column, column.calculatedWidth);
            });
        }
        else {
            adjustedColumns = this._getJustifiedColumns(newColumns, viewportWidth, newProps);
        }
        return adjustedColumns;
    };
    /** Builds a set of columns based on the given columns mixed with the current overrides. */
    DetailsList.prototype._getFixedColumns = function (newColumns) {
        var _this = this;
        return newColumns.map(function (column) {
            var newColumn = Utilities_1.assign({}, column, _this._columnOverrides[column.key]);
            if (!newColumn.calculatedWidth) {
                newColumn.calculatedWidth = newColumn.maxWidth || newColumn.minWidth || MIN_COLUMN_WIDTH;
            }
            return newColumn;
        });
    };
    /** Builds a set of columns to fix within the viewport width. */
    DetailsList.prototype._getJustifiedColumns = function (newColumns, viewportWidth, props) {
        var _this = this;
        var selectionMode = props.selectionMode, checkboxVisibility = props.checkboxVisibility, groups = props.groups;
        var outerPadding = DEFAULT_INNER_PADDING;
        var rowCheckWidth = (selectionMode !== index_1.SelectionMode.none && checkboxVisibility !== DetailsList_Props_1.CheckboxVisibility.hidden) ? CHECKBOX_WIDTH : 0;
        var groupExpandWidth = groups ? GROUP_EXPAND_WIDTH : 0;
        var totalWidth = 0; // offset because we have one less inner padding.
        var availableWidth = viewportWidth - (outerPadding + rowCheckWidth + groupExpandWidth);
        var adjustedColumns = newColumns.map(function (column, i) {
            var newColumn = Utilities_1.assign({}, column, {
                calculatedWidth: column.minWidth || MIN_COLUMN_WIDTH
            }, _this._columnOverrides[column.key]);
            totalWidth += newColumn.calculatedWidth + (i > 0 ? DEFAULT_INNER_PADDING : 0) + (column.isPadded ? ISPADDED_WIDTH : 0);
            return newColumn;
        });
        var lastIndex = adjustedColumns.length - 1;
        // Remove collapsable columns.
        while (lastIndex > -1 && totalWidth > availableWidth) {
            var column = adjustedColumns[lastIndex];
            if (column.isCollapsable) {
                totalWidth -= column.calculatedWidth + DEFAULT_INNER_PADDING;
                adjustedColumns.splice(lastIndex, 1);
            }
            lastIndex--;
        }
        // Then expand columns starting at the beginning, until we've filled the width.
        for (var i = 0; i < adjustedColumns.length && totalWidth < availableWidth; i++) {
            var column = adjustedColumns[i];
            var overrides = this._columnOverrides[column.key];
            if (overrides && overrides.calculatedWidth) {
                continue;
            }
            var maxWidth = column.maxWidth;
            var minWidth = column.minWidth || maxWidth || MIN_COLUMN_WIDTH;
            var spaceLeft = availableWidth - totalWidth;
            var increment = maxWidth ? Math.min(spaceLeft, maxWidth - minWidth) : spaceLeft;
            // Add remaining space to the last column.
            if (i === (adjustedColumns.length - 1)) {
                increment = spaceLeft;
            }
            column.calculatedWidth = column.calculatedWidth + increment;
            totalWidth += increment;
        }
        // Mark the last column as not resizable to avoid extra scrolling issues.
        if (adjustedColumns.length) {
            adjustedColumns[adjustedColumns.length - 1].isResizable = false;
        }
        return adjustedColumns;
    };
    DetailsList.prototype._onColumnResized = function (resizingColumn, newWidth) {
        var newCalculatedWidth = Math.max(resizingColumn.minWidth || MIN_COLUMN_WIDTH, newWidth);
        if (this.props.onColumnResize) {
            this.props.onColumnResize(resizingColumn, newCalculatedWidth);
        }
        this._rememberCalculatedWidth(resizingColumn, newCalculatedWidth);
        this._adjustColumns(this.props, true);
        this._forceListUpdates();
    };
    DetailsList.prototype._rememberCalculatedWidth = function (column, newCalculatedWidth) {
        var overrides = this._columnOverrides[column.key] = this._columnOverrides[column.key] || {};
        overrides.calculatedWidth = newCalculatedWidth;
    };
    /**
     * Callback function when double clicked on the details header column resizer
     * which will measure the column cells of all the active rows and resize the
     * column to the max cell width.
     *
     * @private
     * @param {IColumn} column (double clicked column definition)
     * @param {number} columnIndex (double clicked column index)
     * @todo min width 100 should be changed to const value and should be consistent with the value used on _onSizerMove method in DetailsHeader
     */
    DetailsList.prototype._onColumnAutoResized = function (column, columnIndex) {
        var _this = this;
        var max = 0;
        var count = 0;
        var totalCount = Object.keys(this._activeRows).length;
        for (var key in this._activeRows) {
            if (this._activeRows.hasOwnProperty(key)) {
                var currentRow = this._activeRows[key];
                currentRow.measureCell(columnIndex, function (width) {
                    max = Math.max(max, width);
                    count++;
                    if (count === totalCount) {
                        _this._onColumnResized(column, max);
                    }
                });
            }
        }
    };
    /**
     * Call back function when an element in FocusZone becomes active. It will transalate it into item
     * and call onActiveItemChanged callback if specified.
     *
     * @private
     * @param {el} row element that became active in Focus Zone
     * @param {ev} focus event from Focus Zone
     */
    DetailsList.prototype._onActiveRowChanged = function (el, ev) {
        var _a = this.props, items = _a.items, onActiveItemChanged = _a.onActiveItemChanged;
        if (!onActiveItemChanged || !el) {
            return;
        }
        var index = Number(el.getAttribute('data-item-index'));
        if (index >= 0) {
            onActiveItemChanged(items[index], index, ev);
        }
    };
    DetailsList.prototype._getItemKey = function (item, itemIndex) {
        var getKey = this.props.getKey;
        var itemKey = undefined;
        if (item) {
            itemKey = item.key;
        }
        if (getKey) {
            itemKey = getKey(item, itemIndex);
        }
        if (!itemKey) {
            itemKey = itemIndex;
        }
        return itemKey;
    };
    DetailsList.defaultProps = {
        layoutMode: DetailsList_Props_1.DetailsListLayoutMode.justified,
        selectionMode: index_1.SelectionMode.multiple,
        constrainMode: DetailsList_Props_1.ConstrainMode.horizontalConstrained,
        checkboxVisibility: DetailsList_Props_1.CheckboxVisibility.onHover,
        isHeaderVisible: true
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], DetailsList.prototype, "_onRenderRow", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], DetailsList.prototype, "_onRenderDetailsHeader", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], DetailsList.prototype, "_onRenderListCell", null);
    DetailsList = tslib_1.__decorate([
        withViewport_1.withViewport
    ], DetailsList);
    return DetailsList;
}(Utilities_1.BaseComponent));
exports.DetailsList = DetailsList;
function buildColumns(items, canResizeColumns, onColumnClick, sortedColumnKey, isSortedDescending, groupedColumnKey, isMultiline) {
    var columns = [];
    if (items && items.length) {
        var firstItem = items[0];
        var isFirstColumn = true;
        for (var propName in firstItem) {
            if (firstItem.hasOwnProperty(propName)) {
                columns.push({
                    key: propName,
                    name: propName,
                    fieldName: propName,
                    minWidth: MIN_COLUMN_WIDTH,
                    maxWidth: 300,
                    isCollapsable: !!columns.length,
                    isMultiline: (isMultiline === undefined) ? false : isMultiline,
                    isSorted: sortedColumnKey === propName,
                    isSortedDescending: !!isSortedDescending,
                    isRowHeader: false,
                    columnActionsMode: DetailsList_Props_1.ColumnActionsMode.clickable,
                    isResizable: canResizeColumns,
                    onColumnClick: onColumnClick,
                    isGrouped: groupedColumnKey === propName
                });
                isFirstColumn = false;
            }
        }
    }
    return columns;
}
exports.buildColumns = buildColumns;
function isRightArrow(event) {
    return event.which === Utilities_1.getRTLSafeKeyCode(39 /* right */);
}


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(3);
load_themed_styles_1.loadStyles([{ "rawString": ".root_29a8c17d{position:relative;font-size:12px;background:transparent;color:" }, { "theme": "neutralPrimary", "defaultValue": "#333333" }, { "rawString": "}.focusZone_29a8c17d{display:inline-block;vertical-align:top;min-width:100%;min-height:1px}.rootIsHorizontalConstrained_29a8c17d{overflow-x:auto;overflow-y:visible;-webkit-overflow-scrolling:touch}.root_29a8c17d .ms-List-cell{min-height:38px;word-break:break-word}.rootCompact_29a8c17d .ms-List-cell{min-height:32px}\n" }]);
exports.root = "root_29a8c17d";
exports.focusZone = "focusZone_29a8c17d";
exports.rootIsHorizontalConstrained = "rootIsHorizontalConstrained_29a8c17d";
exports.rootCompact = "rootCompact_29a8c17d";


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var Utilities_1 = __webpack_require__(2);
var stylesImport = __webpack_require__(45);
var styles = stylesImport;
var INNER_PADDING = 16; // Account for padding around the cell.
var ISPADDED_WIDTH = 24;
var DetailsRowFields = (function (_super) {
    tslib_1.__extends(DetailsRowFields, _super);
    function DetailsRowFields(props) {
        var _this = _super.call(this) || this;
        _this.state = _this._getState(props);
        return _this;
    }
    DetailsRowFields.prototype.componentWillReceiveProps = function (newProps) {
        this.setState(this._getState(newProps));
    };
    DetailsRowFields.prototype.render = function () {
        var _a = this.props, columns = _a.columns, columnStartIndex = _a.columnStartIndex;
        var cellContent = this.state.cellContent;
        return (React.createElement("div", { className: Utilities_1.css('ms-DetailsRow-fields', styles.fields), "data-automationid": 'DetailsRowFields', role: 'presentation' }, columns.map(function (column, columnIndex) { return (React.createElement("div", { key: columnIndex, role: column.isRowHeader ? 'rowheader' : 'gridcell', "aria-colindex": columnIndex + columnStartIndex, className: Utilities_1.css('ms-DetailsRow-cell', styles.cell, column.className, column.isMultiline && 'is-multiline', column.isRowHeader && styles.isRowHeader, column.isPadded && styles.isPadded, column.isMultiline && styles.isMultiline), style: { width: column.calculatedWidth + INNER_PADDING + (column.isPadded ? ISPADDED_WIDTH : 0) }, "data-automationid": 'DetailsRowCell', "data-automation-key": column.key }, cellContent[columnIndex])); })));
    };
    DetailsRowFields.prototype._getState = function (props) {
        var _this = this;
        var item = props.item, itemIndex = props.itemIndex, onRenderItemColumn = props.onRenderItemColumn;
        return {
            cellContent: props.columns.map(function (column) {
                var cellContent;
                try {
                    var render = column.onRender || onRenderItemColumn;
                    cellContent = render ? render(item, itemIndex, column) : _this._getCellText(item, column);
                }
                catch (e) { }
                return cellContent;
            })
        };
    };
    DetailsRowFields.prototype._getCellText = function (item, column) {
        var value = (item && column && column.fieldName) ? item[column.fieldName] : '';
        if (value === null || value === undefined) {
            value = '';
        }
        return value;
    };
    return DetailsRowFields;
}(Utilities_1.BaseComponent));
exports.DetailsRowFields = DetailsRowFields;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(47), exports);
tslib_1.__exportStar(__webpack_require__(119), exports);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(44), exports);
tslib_1.__exportStar(__webpack_require__(27), exports);


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = __webpack_require__(2);
var Styling_1 = __webpack_require__(10);
var inheritFont = { fontFamily: 'inherit' };
exports.getClassNames = Utilities_1.memoizeFunction(function (theme, className, isFocusVisible) {
    return {
        root: Styling_1.mergeStyles([
            'ms-Fabric',
            isFocusVisible && 'is-focusVisible',
            className,
            theme.fonts.medium,
            {
                color: theme.palette.neutralPrimary,
                selectors: {
                    '& button': inheritFont,
                    '& input': inheritFont,
                    '& textarea': inheritFont
                }
            }
        ])
    };
});


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var Utilities_1 = __webpack_require__(2);
var Fabric_classNames_1 = __webpack_require__(123);
var DIRECTIONAL_KEY_CODES = [
    38 /* up */,
    40 /* down */,
    37 /* left */,
    39 /* right */,
    36 /* home */,
    35 /* end */,
    9 /* tab */,
    33 /* pageUp */,
    34 /* pageDown */
];
// We will track the last focus visibility state so that if we tear down and recreate
// the Fabric component, we will use the last known value as the default.
var _lastIsFocusVisible = false;
// Ensure that the HTML element has a dir specified. This helps to ensure RTL/LTR macros in css for all components will work.
if (typeof (document) === 'object' && document.documentElement && !document.documentElement.getAttribute('dir')) {
    document.documentElement.setAttribute('dir', 'ltr');
}
var Fabric = (function (_super) {
    tslib_1.__extends(Fabric, _super);
    function Fabric() {
        var _this = _super.call(this) || this;
        _this.state = {
            isFocusVisible: _lastIsFocusVisible
        };
        return _this;
    }
    Fabric.prototype.componentDidMount = function () {
        this._events.on(document.body, 'mousedown', this._onMouseDown, true);
        this._events.on(document.body, 'keydown', this._onKeyDown, true);
    };
    Fabric.prototype.render = function () {
        var isFocusVisible = this.state.isFocusVisible;
        var className = this.props.className;
        var classNames = Fabric_classNames_1.getClassNames(this.props.theme, className, isFocusVisible);
        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
        return (React.createElement("div", tslib_1.__assign({}, divProps, { className: classNames.root, ref: this._resolveRef('_root') })));
    };
    Fabric.prototype._onMouseDown = function () {
        if (this.state.isFocusVisible) {
            this.setState({
                isFocusVisible: false
            });
            _lastIsFocusVisible = false;
        }
    };
    Fabric.prototype._onKeyDown = function (ev) {
        if (!this.state.isFocusVisible && DIRECTIONAL_KEY_CODES.indexOf(ev.which) > -1) {
            this.setState({
                isFocusVisible: true
            });
            _lastIsFocusVisible = true;
        }
    };
    Fabric = tslib_1.__decorate([
        Utilities_1.customizable('Fabric', ['theme'])
    ], Fabric);
    return Fabric;
}(Utilities_1.BaseComponent));
exports.Fabric = Fabric;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(124), exports);


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var FocusZone_Props_1 = __webpack_require__(46);
var Utilities_1 = __webpack_require__(2);
var IS_FOCUSABLE_ATTRIBUTE = 'data-is-focusable';
var IS_ENTER_DISABLED_ATTRIBUTE = 'data-disable-click-on-enter';
var FOCUSZONE_ID_ATTRIBUTE = 'data-focuszone-id';
var TABINDEX = 'tabindex';
var _allInstances = {};
var ALLOWED_INPUT_TYPES = ['text', 'number', 'password', 'email', 'tel', 'url', 'search'];
var FocusZone = (function (_super) {
    tslib_1.__extends(FocusZone, _super);
    function FocusZone(props) {
        var _this = _super.call(this, props) || this;
        _this._warnDeprecations({ rootProps: undefined });
        _this._id = Utilities_1.getId('FocusZone');
        _this._focusAlignment = {
            left: 0,
            top: 0
        };
        return _this;
    }
    FocusZone.prototype.componentDidMount = function () {
        _allInstances[this._id] = this;
        if (this._root) {
            var windowElement = this._root.ownerDocument.defaultView;
            var parentElement = Utilities_1.getParent(this._root);
            while (parentElement &&
                parentElement !== document.body &&
                parentElement.nodeType === 1) {
                if (Utilities_1.isElementFocusZone(parentElement)) {
                    this._isInnerZone = true;
                    break;
                }
                parentElement = Utilities_1.getParent(parentElement);
            }
            if (!this._isInnerZone) {
                this._events.on(windowElement, 'keydown', this._onKeyDownCapture, true);
            }
            // Assign initial tab indexes so that we can set initial focus as appropriate.
            this._updateTabIndexes();
            if (this.props.defaultActiveElement) {
                this._activeElement = Utilities_1.getDocument().querySelector(this.props.defaultActiveElement);
                this.focus();
            }
        }
    };
    FocusZone.prototype.componentWillUnmount = function () {
        delete _allInstances[this._id];
    };
    FocusZone.prototype.render = function () {
        var _a = this.props, rootProps = _a.rootProps, ariaDescribedBy = _a.ariaDescribedBy, ariaLabelledBy = _a.ariaLabelledBy, className = _a.className;
        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
        var Tag = this.props.elementType || 'div';
        return (React.createElement(Tag, tslib_1.__assign({ role: 'presentation' }, divProps, rootProps, { className: Utilities_1.css('ms-FocusZone', className), ref: this._resolveRef('_root'), "data-focuszone-id": this._id, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, onKeyDown: this._onKeyDown, onFocus: this._onFocus, onMouseDownCapture: this._onMouseDown }), this.props.children));
    };
    /**
     * Sets focus to the first tabbable item in the zone.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focus = function (forceIntoFirstElement) {
        if (forceIntoFirstElement === void 0) { forceIntoFirstElement = false; }
        if (this._root) {
            if (!forceIntoFirstElement && this._root.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' && this._isInnerZone) {
                var ownerZoneElement = this._getOwnerZone(this._root);
                if (ownerZoneElement !== this._root) {
                    var ownerZone = _allInstances[ownerZoneElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
                    return !!ownerZone && ownerZone.focusElement(this._root);
                }
                return false;
            }
            else if (this._activeElement && Utilities_1.elementContains(this._root, this._activeElement)
                && Utilities_1.isElementTabbable(this._activeElement)) {
                this._activeElement.focus();
                return true;
            }
            else {
                var firstChild = this._root.firstChild;
                return this.focusElement(Utilities_1.getNextElement(this._root, firstChild, true));
            }
        }
        return false;
    };
    /**
     * Sets focus to a specific child element within the zone. This can be used in conjunction with
     * onBeforeFocus to created delayed focus scenarios (like animate the scroll position to the correct
     * location and then focus.)
     * @param {HTMLElement} element The child element within the zone to focus.
     * @returns True if focus could be set to an active element, false if no operation was taken.
     */
    FocusZone.prototype.focusElement = function (element) {
        var onBeforeFocus = this.props.onBeforeFocus;
        if (onBeforeFocus && !onBeforeFocus(element)) {
            return false;
        }
        if (element) {
            this._setActiveElement(element);
            return true;
        }
        return false;
    };
    FocusZone.prototype._onFocus = function (ev) {
        var onActiveElementChanged = this.props.onActiveElementChanged;
        if (this._isImmediateDescendantOfZone(ev.target)) {
            this._activeElement = ev.target;
            this._setFocusAlignment(this._activeElement);
        }
        else {
            var parentElement = ev.target;
            while (parentElement && parentElement !== this._root) {
                if (Utilities_1.isElementTabbable(parentElement) && this._isImmediateDescendantOfZone(parentElement)) {
                    this._activeElement = parentElement;
                    break;
                }
                parentElement = Utilities_1.getParent(parentElement);
            }
        }
        if (onActiveElementChanged) {
            onActiveElementChanged(this._activeElement, ev);
        }
    };
    /**
     * Handle global tab presses so that we can patch tabindexes on the fly.
     */
    FocusZone.prototype._onKeyDownCapture = function (ev) {
        if (ev.which === 9 /* tab */) {
            this._updateTabIndexes();
        }
    };
    FocusZone.prototype._onMouseDown = function (ev) {
        var disabled = this.props.disabled;
        if (disabled) {
            return;
        }
        var target = ev.target;
        var path = [];
        while (target && target !== this._root) {
            path.push(target);
            target = Utilities_1.getParent(target);
        }
        while (path.length) {
            target = path.pop();
            if (target && Utilities_1.isElementTabbable(target)) {
                this._setActiveElement(target);
            }
            if (Utilities_1.isElementFocusZone(target)) {
                // Stop here since the focus zone will take care of its own children.
                break;
            }
        }
    };
    FocusZone.prototype._setActiveElement = function (element) {
        var previousActiveElement = this._activeElement;
        this._activeElement = element;
        if (previousActiveElement) {
            if (Utilities_1.isElementFocusZone(previousActiveElement)) {
                this._updateTabIndexes(previousActiveElement);
            }
            previousActiveElement.tabIndex = -1;
        }
        if (this._activeElement) {
            if (!this._focusAlignment) {
                this._setFocusAlignment(element, true, true);
            }
            this._activeElement.tabIndex = 0;
            this._activeElement.focus();
        }
    };
    /**
     * Handle the keystrokes.
     */
    FocusZone.prototype._onKeyDown = function (ev) {
        var _a = this.props, direction = _a.direction, disabled = _a.disabled, isInnerZoneKeystroke = _a.isInnerZoneKeystroke;
        if (disabled) {
            return;
        }
        if (document.activeElement === this._root && this._isInnerZone) {
            // If this element has focus, it is being controlled by a parent.
            // Ignore the keystroke.
            return;
        }
        if (this.props.onKeyDown) {
            this.props.onKeyDown(ev);
            if (ev.isDefaultPrevented()) {
                return;
            }
        }
        if (isInnerZoneKeystroke &&
            isInnerZoneKeystroke(ev) &&
            this._isImmediateDescendantOfZone(ev.target)) {
            // Try to focus
            var innerZone = this._getFirstInnerZone();
            if (innerZone) {
                if (!innerZone.focus(true)) {
                    return;
                }
            }
            else if (Utilities_1.isElementFocusSubZone(ev.target)) {
                if (!this.focusElement(Utilities_1.getNextElement(ev.target, ev.target.firstChild, true))) {
                    return;
                }
            }
            else {
                return;
            }
        }
        else if (ev.altKey) {
            return;
        }
        else {
            switch (ev.which) {
                case 32 /* space */:
                    if (this._tryInvokeClickForFocusable(ev.target)) {
                        break;
                    }
                    return;
                case 37 /* left */:
                    if (direction !== FocusZone_Props_1.FocusZoneDirection.vertical && this._moveFocusLeft()) {
                        break;
                    }
                    return;
                case 39 /* right */:
                    if (direction !== FocusZone_Props_1.FocusZoneDirection.vertical && this._moveFocusRight()) {
                        break;
                    }
                    return;
                case 38 /* up */:
                    if (direction !== FocusZone_Props_1.FocusZoneDirection.horizontal && this._moveFocusUp()) {
                        break;
                    }
                    return;
                case 40 /* down */:
                    if (direction !== FocusZone_Props_1.FocusZoneDirection.horizontal && this._moveFocusDown()) {
                        break;
                    }
                    return;
                case 36 /* home */:
                    if (this._isElementInput(ev.target) &&
                        !this._shouldInputLoseFocus(ev.target, false)) {
                        return false;
                    }
                    var firstChild = this._root.firstChild;
                    if (this.focusElement(Utilities_1.getNextElement(this._root, firstChild, true))) {
                        break;
                    }
                    return;
                case 35 /* end */:
                    if (this._isElementInput(ev.target) &&
                        !this._shouldInputLoseFocus(ev.target, true)) {
                        return false;
                    }
                    var lastChild = this._root.lastChild;
                    if (this.focusElement(Utilities_1.getPreviousElement(this._root, lastChild, true, true, true))) {
                        break;
                    }
                    return;
                case 13 /* enter */:
                    if (this._tryInvokeClickForFocusable(ev.target)) {
                        break;
                    }
                    return;
                default:
                    return;
            }
        }
        ev.preventDefault();
        ev.stopPropagation();
    };
    /**
     * Walk up the dom try to find a focusable element.
     */
    FocusZone.prototype._tryInvokeClickForFocusable = function (target) {
        if (target === this._root) {
            return false;
        }
        do {
            if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                return false;
            }
            if (this._isImmediateDescendantOfZone(target) &&
                target.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true' &&
                target.getAttribute(IS_ENTER_DISABLED_ATTRIBUTE) !== 'true') {
                Utilities_1.EventGroup.raise(target, 'click', null, true);
                return true;
            }
            target = Utilities_1.getParent(target);
        } while (target !== this._root);
        return false;
    };
    /**
     * Traverse to find first child zone.
     */
    FocusZone.prototype._getFirstInnerZone = function (rootElement) {
        rootElement = rootElement || this._activeElement || this._root;
        if (Utilities_1.isElementFocusZone(rootElement)) {
            return _allInstances[rootElement.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
        }
        var child = rootElement.firstElementChild;
        while (child) {
            if (Utilities_1.isElementFocusZone(child)) {
                return _allInstances[child.getAttribute(FOCUSZONE_ID_ATTRIBUTE)];
            }
            var match = this._getFirstInnerZone(child);
            if (match) {
                return match;
            }
            child = child.nextElementSibling;
        }
        return null;
    };
    FocusZone.prototype._moveFocus = function (isForward, getDistanceFromCenter, ev) {
        var element = this._activeElement;
        var candidateDistance = -1;
        var candidateElement = undefined;
        var changedFocus = false;
        var isBidirectional = this.props.direction === FocusZone_Props_1.FocusZoneDirection.bidirectional;
        if (!element) {
            return false;
        }
        if (this._isElementInput(element)) {
            if (!this._shouldInputLoseFocus(element, isForward)) {
                return false;
            }
        }
        var activeRect = isBidirectional ? element.getBoundingClientRect() : null;
        do {
            element = (isForward ?
                Utilities_1.getNextElement(this._root, element) :
                Utilities_1.getPreviousElement(this._root, element));
            if (isBidirectional) {
                if (element) {
                    var targetRect = element.getBoundingClientRect();
                    var elementDistance = getDistanceFromCenter(activeRect, targetRect);
                    if (elementDistance === -1 && candidateDistance === -1) {
                        candidateElement = element;
                        break;
                    }
                    if (elementDistance > -1 && (candidateDistance === -1 || elementDistance < candidateDistance)) {
                        candidateDistance = elementDistance;
                        candidateElement = element;
                    }
                    if (candidateDistance >= 0 && elementDistance < 0) {
                        break;
                    }
                }
            }
            else {
                candidateElement = element;
                break;
            }
        } while (element);
        // Focus the closest candidate
        if (candidateElement && candidateElement !== this._activeElement) {
            changedFocus = true;
            this.focusElement(candidateElement);
        }
        else if (this.props.isCircularNavigation) {
            if (isForward) {
                return this.focusElement(Utilities_1.getNextElement(this._root, this._root.firstElementChild, true));
            }
            else {
                return this.focusElement(Utilities_1.getPreviousElement(this._root, this._root.lastElementChild, true, true, true));
            }
        }
        return changedFocus;
    };
    FocusZone.prototype._moveFocusDown = function () {
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(true, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectBottom = Math.floor(activeRect.bottom);
            if (targetRectTop < activeRectBottom) {
                return 999999999;
            }
            if ((targetTop === -1 && targetRectTop >= activeRectBottom) ||
                (targetRectTop === targetTop)) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= (targetRect.left + targetRect.width)) {
                    distance = 0;
                }
                else {
                    distance = Math.abs((targetRect.left + (targetRect.width / 2)) - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusUp = function () {
        var targetTop = -1;
        var leftAlignment = this._focusAlignment.left;
        if (this._moveFocus(false, function (activeRect, targetRect) {
            var distance = -1;
            // ClientRect values can be floats that differ by very small fractions of a decimal.
            // If the difference between top and bottom are within a pixel then we should treat
            // them as equivalent by using Math.floor. For instance 5.2222 and 5.222221 should be equivalent,
            // but without Math.Floor they will be handled incorrectly.
            var targetRectBottom = Math.floor(targetRect.bottom);
            var targetRectTop = Math.floor(targetRect.top);
            var activeRectTop = Math.floor(activeRect.top);
            if (targetRectBottom > activeRectTop) {
                return 999999999;
            }
            if ((targetTop === -1 && targetRectBottom <= activeRectTop) ||
                (targetRectTop === targetTop)) {
                targetTop = targetRectTop;
                if (leftAlignment >= targetRect.left && leftAlignment <= (targetRect.left + targetRect.width)) {
                    distance = 0;
                }
                else {
                    distance = Math.abs((targetRect.left + (targetRect.width / 2)) - leftAlignment);
                }
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, false, true);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusLeft = function () {
        var _this = this;
        if (this._moveFocus(Utilities_1.getRTL(), function (activeRect, targetRect) {
            var distance = -1;
            if (targetRect.bottom > activeRect.top &&
                targetRect.right <= activeRect.right &&
                _this.props.direction !== FocusZone_Props_1.FocusZoneDirection.vertical) {
                distance = activeRect.right - targetRect.right;
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._moveFocusRight = function () {
        var _this = this;
        if (this._moveFocus(!Utilities_1.getRTL(), function (activeRect, targetRect) {
            var distance = -1;
            if (targetRect.top < activeRect.bottom &&
                targetRect.left >= activeRect.left &&
                _this.props.direction !== FocusZone_Props_1.FocusZoneDirection.vertical) {
                distance = targetRect.left - activeRect.left;
            }
            return distance;
        })) {
            this._setFocusAlignment(this._activeElement, true, false);
            return true;
        }
        return false;
    };
    FocusZone.prototype._setFocusAlignment = function (element, isHorizontal, isVertical) {
        if (this.props.direction === FocusZone_Props_1.FocusZoneDirection.bidirectional &&
            (!this._focusAlignment || isHorizontal || isVertical)) {
            var rect = element.getBoundingClientRect();
            var left = rect.left + (rect.width / 2);
            var top_1 = rect.top + (rect.height / 2);
            if (!this._focusAlignment) {
                this._focusAlignment = { left: left, top: top_1 };
            }
            if (isHorizontal) {
                this._focusAlignment.left = left;
            }
            if (isVertical) {
                this._focusAlignment.top = top_1;
            }
        }
    };
    FocusZone.prototype._isImmediateDescendantOfZone = function (element) {
        return this._getOwnerZone(element) === this._root;
    };
    FocusZone.prototype._getOwnerZone = function (element) {
        var parentElement = Utilities_1.getParent(element);
        while (parentElement && parentElement !== this._root && parentElement !== document.body) {
            if (Utilities_1.isElementFocusZone(parentElement)) {
                return parentElement;
            }
            parentElement = Utilities_1.getParent(parentElement);
        }
        return this._root;
    };
    FocusZone.prototype._updateTabIndexes = function (element) {
        if (!element) {
            element = this._root;
            if (this._activeElement && !Utilities_1.elementContains(element, this._activeElement)) {
                this._activeElement = null;
            }
        }
        // If active element changes state to disabled, set it to null.
        // Otherwise, we lose keyboard accessibility to other elements in focus zone.
        if (this._activeElement && !Utilities_1.isElementTabbable(this._activeElement)) {
            this._activeElement = null;
        }
        var childNodes = element.children;
        for (var childIndex = 0; childNodes && childIndex < childNodes.length; childIndex++) {
            var child = childNodes[childIndex];
            if (!Utilities_1.isElementFocusZone(child)) {
                // If the item is explicitly set to not be focusable then TABINDEX needs to be set to -1.
                if (child.getAttribute && child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'false') {
                    child.setAttribute(TABINDEX, '-1');
                }
                if (Utilities_1.isElementTabbable(child)) {
                    if (this.props.disabled) {
                        child.setAttribute(TABINDEX, '-1');
                    }
                    else if (!this._isInnerZone && (!this._activeElement || this._activeElement === child)) {
                        this._activeElement = child;
                        if (child.getAttribute(TABINDEX) !== '0') {
                            child.setAttribute(TABINDEX, '0');
                        }
                    }
                    else if (child.getAttribute(TABINDEX) !== '-1') {
                        child.setAttribute(TABINDEX, '-1');
                    }
                }
                else if (child.tagName === 'svg' && child.getAttribute('focusable') !== 'false') {
                    // Disgusting IE hack. Sad face.
                    child.setAttribute('focusable', 'false');
                }
            }
            else if (child.getAttribute(IS_FOCUSABLE_ATTRIBUTE) === 'true') {
                if (!this._isInnerZone && (!this._activeElement || this._activeElement === child)) {
                    this._activeElement = child;
                    if (child.getAttribute(TABINDEX) !== '0') {
                        child.setAttribute(TABINDEX, '0');
                    }
                }
                else if (child.getAttribute(TABINDEX) !== '-1') {
                    child.setAttribute(TABINDEX, '-1');
                }
            }
            this._updateTabIndexes(child);
        }
    };
    FocusZone.prototype._isElementInput = function (element) {
        if (element && element.tagName && (element.tagName.toLowerCase() === 'input' || element.tagName.toLowerCase() === 'textarea')) {
            return true;
        }
        return false;
    };
    FocusZone.prototype._shouldInputLoseFocus = function (element, isForward) {
        if (element &&
            element.type &&
            ALLOWED_INPUT_TYPES.indexOf(element.type.toLowerCase()) > -1) {
            var selectionStart = element.selectionStart;
            var selectionEnd = element.selectionEnd;
            var isRangeSelected = selectionStart !== selectionEnd;
            var inputValue = element.value;
            // We shouldn't lose focus in the following cases:
            // 1. There is range selected.
            // 2. When selection start is larger than 0 and it is backward.
            // 3. when selection start is not the end of lenght and it is forward.
            if (isRangeSelected ||
                (selectionStart > 0 && !isForward) ||
                (selectionStart !== inputValue.length && isForward)) {
                return false;
            }
        }
        return true;
    };
    FocusZone.defaultProps = {
        isCircularNavigation: false,
        direction: FocusZone_Props_1.FocusZoneDirection.bidirectional
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], FocusZone.prototype, "_onFocus", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], FocusZone.prototype, "_onMouseDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], FocusZone.prototype, "_onKeyDown", null);
    return FocusZone;
}(Utilities_1.BaseComponent));
exports.FocusZone = FocusZone;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(126), exports);
tslib_1.__exportStar(__webpack_require__(46), exports);


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var Utilities_1 = __webpack_require__(2);
var GroupSpacer_1 = __webpack_require__(11);
var stylesImport = __webpack_require__(129);
var styles = stylesImport;
var GroupFooter = (function (_super) {
    tslib_1.__extends(GroupFooter, _super);
    function GroupFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupFooter.prototype.render = function () {
        var _a = this.props, group = _a.group, groupLevel = _a.groupLevel, footerText = _a.footerText;
        if (group && footerText) {
            return (React.createElement("div", { className: Utilities_1.css('ms-groupFooter', styles.root) },
                GroupSpacer_1.GroupSpacer({ count: groupLevel }),
                footerText));
        }
        return null;
    };
    return GroupFooter;
}(Utilities_1.BaseComponent));
exports.GroupFooter = GroupFooter;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(3);
load_themed_styles_1.loadStyles([{ "rawString": ".root_1c9df479{position:relative;padding:5px 38px}.root_1c9df479 .ms-Link{font-size:12px}\n" }]);
exports.root = "root_1c9df479";


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var Utilities_1 = __webpack_require__(2);
var index_1 = __webpack_require__(12);
var Check_1 = __webpack_require__(42);
var Icon_1 = __webpack_require__(25);
var GroupSpacer_1 = __webpack_require__(11);
var Spinner_1 = __webpack_require__(114);
var FocusZone_1 = __webpack_require__(15);
var stylesImport = __webpack_require__(131);
var styles = stylesImport;
var GroupHeader = (function (_super) {
    tslib_1.__extends(GroupHeader, _super);
    function GroupHeader(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isCollapsed: (_this.props.group && _this.props.group.isCollapsed),
            isLoadingVisible: false
        };
        return _this;
    }
    GroupHeader.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.group) {
            var newCollapsed = newProps.group.isCollapsed;
            var isGroupLoading = newProps.headerProps && newProps.headerProps.isGroupLoading;
            var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(newProps.group);
            this.setState({
                isCollapsed: newCollapsed,
                isLoadingVisible: newLoadingVisible
            });
        }
    };
    GroupHeader.prototype.render = function () {
        var _a = this.props, group = _a.group, groupLevel = _a.groupLevel, viewport = _a.viewport, selectionMode = _a.selectionMode, loadingText = _a.loadingText, isSelected = _a.isSelected, selected = _a.selected, isCollapsedGroupSelectVisible = _a.isCollapsedGroupSelectVisible;
        var _b = this.state, isCollapsed = _b.isCollapsed, isLoadingVisible = _b.isLoadingVisible;
        if (isCollapsedGroupSelectVisible === undefined) {
            isCollapsedGroupSelectVisible = true;
        }
        var canSelectGroup = selectionMode === index_1.SelectionMode.multiple;
        var isSelectionCheckVisible = canSelectGroup && (isCollapsedGroupSelectVisible || !(group && group.isCollapsed));
        var currentlySelected = isSelected || selected;
        if (!group) {
            return null;
        }
        return (React.createElement("div", { className: Utilities_1.css('ms-GroupHeader', styles.root, (_c = {},
                _c['is-selected ' + styles.rootIsSelected] = currentlySelected,
                _c)), style: viewport ? { minWidth: viewport.width } : {}, onClick: this._onHeaderClick, "aria-label": group.ariaLabel || group.name, "data-is-focusable": true },
            React.createElement(FocusZone_1.FocusZone, { className: styles.groupHeaderContainer, direction: FocusZone_1.FocusZoneDirection.horizontal },
                isSelectionCheckVisible ? (React.createElement("button", { type: 'button', className: Utilities_1.css('ms-GroupHeader-check', styles.check), "data-selection-toggle": true, onClick: this._onToggleSelectGroupClick },
                    React.createElement(Check_1.Check, { checked: currentlySelected }))) : (selectionMode !== index_1.SelectionMode.none ? GroupSpacer_1.GroupSpacer({ count: 1 }) : null),
                GroupSpacer_1.GroupSpacer({ count: groupLevel }),
                React.createElement("div", { className: Utilities_1.css('ms-GroupHeader-dropIcon', styles.dropIcon) },
                    React.createElement(Icon_1.Icon, { iconName: 'Tag' })),
                React.createElement("button", { type: 'button', className: Utilities_1.css('ms-GroupHeader-expand', styles.expand), onClick: this._onToggleCollapse },
                    React.createElement(Icon_1.Icon, { className: Utilities_1.css(isCollapsed && ('is-collapsed ' + styles.expandIsCollapsed)), iconName: 'ChevronDown' })),
                React.createElement("div", { className: Utilities_1.css('ms-GroupHeader-title', styles.title) },
                    React.createElement("span", null, group.name),
                    React.createElement("span", { className: styles.headerCount },
                        "(",
                        group.count,
                        group.hasMoreData && '+',
                        ")")),
                React.createElement("div", { className: Utilities_1.css('ms-GroupHeader-loading', styles.loading, isLoadingVisible && ('is-loading ' + styles.loadingIsVisible)) },
                    React.createElement(Spinner_1.Spinner, { label: loadingText })))));
        var _c;
    };
    GroupHeader.prototype._onToggleCollapse = function (ev) {
        var _a = this.props, group = _a.group, onToggleCollapse = _a.onToggleCollapse, isGroupLoading = _a.isGroupLoading;
        var isCollapsed = this.state.isCollapsed;
        var newCollapsed = !isCollapsed;
        var newLoadingVisible = !newCollapsed && isGroupLoading && isGroupLoading(group);
        this.setState({
            isCollapsed: newCollapsed,
            isLoadingVisible: newLoadingVisible
        });
        if (onToggleCollapse) {
            onToggleCollapse(group);
        }
        ev.stopPropagation();
        ev.preventDefault();
    };
    GroupHeader.prototype._onToggleSelectGroupClick = function (ev) {
        var _a = this.props, onToggleSelectGroup = _a.onToggleSelectGroup, group = _a.group;
        if (onToggleSelectGroup) {
            onToggleSelectGroup(group);
        }
        ev.preventDefault();
        ev.stopPropagation();
    };
    GroupHeader.prototype._onHeaderClick = function () {
        var _a = this.props, group = _a.group, onGroupHeaderClick = _a.onGroupHeaderClick, onToggleSelectGroup = _a.onToggleSelectGroup;
        if (onGroupHeaderClick) {
            onGroupHeaderClick(group);
        }
        else if (onToggleSelectGroup) {
            onToggleSelectGroup(group);
        }
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], GroupHeader.prototype, "_onToggleCollapse", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], GroupHeader.prototype, "_onToggleSelectGroupClick", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], GroupHeader.prototype, "_onHeaderClick", null);
    return GroupHeader;
}(Utilities_1.BaseComponent));
exports.GroupHeader = GroupHeader;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(3);
load_themed_styles_1.loadStyles([{ "rawString": ".root_b75add52{cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.root_b75add52::-moz-focus-inner{border:0}.root_b75add52{outline:transparent}.root_b75add52{position:relative}.ms-Fabric.is-focusVisible .root_b75add52:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.root_b75add52:hover{background:" }, { "theme": "neutralLighter", "defaultValue": "#f4f4f4" }, { "rawString": "}.root_b75add52.rootIsSelected_b75add52{background:" }, { "theme": "neutralQuaternary", "defaultValue": "#d0d0d0" }, { "rawString": "}.root_b75add52.rootIsSelected_b75add52:hover{background:" }, { "theme": "neutralQuaternaryAlt", "defaultValue": "#dadada" }, { "rawString": "}.groupHeaderContainer_b75add52{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:40px}.check_b75add52,.expand_b75add52{cursor:default;background:none;border:none;font-size:20px}.check_b75add52::-moz-focus-inner,.expand_b75add52::-moz-focus-inner{border:0}.check_b75add52,.expand_b75add52{outline:transparent}.check_b75add52,.expand_b75add52{position:relative}.ms-Fabric.is-focusVisible .check_b75add52:focus:after,.ms-Fabric.is-focusVisible .expand_b75add52:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}.check_b75add52{opacity:0}.check_b75add52:focus{opacity:1}.root_b75add52:hover .check_b75add52,.root_b75add52.rootIsSelected_b75add52 .check_b75add52{opacity:1}.title_b75add52{font-size:21px;font-weight:100;cursor:pointer;outline:0}.headerCount_b75add52{padding:0px 4px}.expand_b75add52{width:36px;height:40px;color:" }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": ";padding-top:4px}.expand_b75add52 .ms-Icon{-webkit-transform:rotate(-180deg);transform:rotate(-180deg);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:-webkit-transform .1s linear;transition:-webkit-transform .1s linear;transition:transform .1s linear;transition:transform .1s linear, -webkit-transform .1s linear}.expand_b75add52 .ms-Icon.expandIsCollapsed_b75add52{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.loading_b75add52{visibility:hidden;opacity:0;-webkit-transition:visibility .367s,opacity .367s;transition:visibility .367s,opacity .367s}.loading_b75add52.loadingIsVisible_b75add52{visibility:visible;opacity:1}.dropIcon_b75add52{position:absolute;font-size:20px;color:" }, { "theme": "neutralSecondaryAlt", "defaultValue": "#767676" }, { "rawString": ";-webkit-transition:opacity .467s cubic-bezier(0.39, 0.575, 0.565, 1),-webkit-transform .267s cubic-bezier(0.6, -0.28, 0.735, 0.045);transition:opacity .467s cubic-bezier(0.39, 0.575, 0.565, 1),-webkit-transform .267s cubic-bezier(0.6, -0.28, 0.735, 0.045);transition:transform .267s cubic-bezier(0.6, -0.28, 0.735, 0.045),opacity .467s cubic-bezier(0.39, 0.575, 0.565, 1);transition:transform .267s cubic-bezier(0.6, -0.28, 0.735, 0.045),opacity .467s cubic-bezier(0.39, 0.575, 0.565, 1),-webkit-transform .267s cubic-bezier(0.6, -0.28, 0.735, 0.045);opacity:0;-webkit-transform:rotate(0.2deg) scale(0.65);transform:rotate(0.2deg) scale(0.65);-webkit-transform-origin:10px 10px;transform-origin:10px 10px}[dir='ltr'] .dropIcon_b75add52{left:-26px}[dir='rtl'] .dropIcon_b75add52{right:-26px}.dropIcon_b75add52 .ms-Icon--Tag{position:absolute}.ms-GroupedList-group.is-dropping>.root_b75add52 .dropIcon_b75add52{-webkit-transition:opacity .167s cubic-bezier(0.39, 0.575, 0.565, 1),-webkit-transform .467s cubic-bezier(0.075, 0.82, 0.165, 1);transition:opacity .167s cubic-bezier(0.39, 0.575, 0.565, 1),-webkit-transform .467s cubic-bezier(0.075, 0.82, 0.165, 1);transition:transform .467s cubic-bezier(0.075, 0.82, 0.165, 1),opacity .167s cubic-bezier(0.39, 0.575, 0.565, 1);transition:transform .467s cubic-bezier(0.075, 0.82, 0.165, 1),opacity .167s cubic-bezier(0.39, 0.575, 0.565, 1),-webkit-transform .467s cubic-bezier(0.075, 0.82, 0.165, 1);-webkit-transition-delay:.367s;transition-delay:.367s;opacity:1;-webkit-transform:rotate(0.2deg) scale(1);transform:rotate(0.2deg) scale(1)}.ms-GroupedList-group.is-dropping .check_b75add52{opacity:0}\n" }]);
exports.root = "root_b75add52";
exports.rootIsSelected = "rootIsSelected_b75add52";
exports.groupHeaderContainer = "groupHeaderContainer_b75add52";
exports.check = "check_b75add52";
exports.expand = "expand_b75add52";
exports.title = "title_b75add52";
exports.headerCount = "headerCount_b75add52";
exports.expandIsCollapsed = "expandIsCollapsed_b75add52";
exports.loading = "loading_b75add52";
exports.loadingIsVisible = "loadingIsVisible_b75add52";
exports.dropIcon = "dropIcon_b75add52";


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var Utilities_1 = __webpack_require__(2);
var Link_1 = __webpack_require__(113);
var GroupSpacer_1 = __webpack_require__(11);
var stylesImport = __webpack_require__(133);
var styles = stylesImport;
var GroupShowAll = (function (_super) {
    tslib_1.__extends(GroupShowAll, _super);
    function GroupShowAll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupShowAll.prototype.render = function () {
        var _a = this.props, group = _a.group, groupLevel = _a.groupLevel, showAllLinkText = _a.showAllLinkText;
        if (group) {
            return (React.createElement("div", { className: Utilities_1.css('ms-groupFooter', styles.root) },
                GroupSpacer_1.GroupSpacer({ count: groupLevel }),
                React.createElement(Link_1.Link, { onClick: this._onSummarizeClick }, showAllLinkText)));
        }
        return null;
    };
    GroupShowAll.prototype._onSummarizeClick = function (ev) {
        this.props.onToggleSummarize(this.props.group);
        ev.stopPropagation();
        ev.preventDefault();
    };
    GroupShowAll.defaultProps = {
        showAllLinkText: 'Show All'
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], GroupShowAll.prototype, "_onSummarizeClick", null);
    return GroupShowAll;
}(Utilities_1.BaseComponent));
exports.GroupShowAll = GroupShowAll;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(3);
load_themed_styles_1.loadStyles([{ "rawString": ".root_439697f8{position:relative;padding:10px 84px;cursor:pointer}.root_439697f8 .ms-Link{font-size:12px}\n" }]);
exports.root = "root_439697f8";


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(3);
load_themed_styles_1.loadStyles([{ "rawString": ".root_cfac23c8{display:inline-block}\n" }]);
exports.root = "root_cfac23c8";


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var Utilities_1 = __webpack_require__(2);
var GroupedListSection_1 = __webpack_require__(136);
var List_1 = __webpack_require__(26);
var index_1 = __webpack_require__(12);
var stylesImport = __webpack_require__(48);
var styles = stylesImport;
var GroupedList = (function (_super) {
    tslib_1.__extends(GroupedList, _super);
    function GroupedList(props) {
        var _this = _super.call(this, props) || this;
        _this._isSomeGroupExpanded = _this._computeIsSomeGroupExpanded(props.groups);
        _this.state = {
            lastWidth: 0,
            groups: props.groups
        };
        return _this;
    }
    GroupedList.prototype.scrollToIndex = function (index, measureItem) {
        this.refs.list && this.refs.list.scrollToIndex(index, measureItem);
    };
    GroupedList.prototype.componentWillReceiveProps = function (newProps) {
        var _a = this.props, groups = _a.groups, selectionMode = _a.selectionMode;
        var shouldForceUpdates = false;
        if (newProps.groups !== groups) {
            this.setState({ groups: newProps.groups });
            shouldForceUpdates = true;
        }
        if (newProps.selectionMode !== selectionMode) {
            shouldForceUpdates = true;
        }
        if (shouldForceUpdates) {
            this._forceListUpdates();
        }
    };
    GroupedList.prototype.render = function () {
        var _a = this.props, className = _a.className, usePageCache = _a.usePageCache, onShouldVirtualize = _a.onShouldVirtualize;
        var groups = this.state.groups;
        return (React.createElement("div", { ref: 'root', className: Utilities_1.css('ms-GroupedList', styles.root, className), "data-automationid": 'GroupedList', "data-is-scrollable": 'false', role: 'presentation' }, !groups ?
            this._renderGroup(null, 0) : (React.createElement(List_1.List, { ref: 'list', items: groups, onRenderCell: this._renderGroup, getItemCountForPage: this._returnOne, usePageCache: usePageCache, onShouldVirtualize: onShouldVirtualize }))));
    };
    GroupedList.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this._forceListUpdates();
    };
    GroupedList.prototype.toggleCollapseAll = function (allCollapsed) {
        var groups = this.state.groups;
        var groupProps = this.props.groupProps;
        var onToggleCollapseAll = groupProps && groupProps.onToggleCollapseAll;
        if (groups) {
            if (onToggleCollapseAll) {
                onToggleCollapseAll(allCollapsed);
            }
            for (var groupIndex = 0; groupIndex < groups.length; groupIndex++) {
                groups[groupIndex].isCollapsed = allCollapsed;
            }
            this._updateIsSomeGroupExpanded();
            this.forceUpdate();
        }
    };
    GroupedList.prototype._renderGroup = function (group, groupIndex) {
        var _a = this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, groupProps = _a.groupProps, items = _a.items, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selectionMode = _a.selectionMode, selection = _a.selection, viewport = _a.viewport;
        // override group header/footer props as needed
        var dividerProps = {
            onToggleSelectGroup: this._onToggleSelectGroup,
            onToggleCollapse: this._onToggleCollapse,
            onToggleSummarize: this._onToggleSummarize
        };
        var headerProps = Utilities_1.assign({}, groupProps.headerProps, dividerProps);
        var showAllProps = Utilities_1.assign({}, groupProps.showAllProps, dividerProps);
        var footerProps = Utilities_1.assign({}, groupProps.footerProps, dividerProps);
        var groupNestingDepth = this._getGroupNestingDepth();
        if (!groupProps.showEmptyGroups && group && group.count === 0) {
            return null;
        }
        return (React.createElement(GroupedListSection_1.GroupedListSection, { ref: 'group_' + groupIndex, key: this._getGroupKey(group, groupIndex), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: groupProps && groupProps.getGroupItemLimit, group: group, groupIndex: groupIndex, groupNestingDepth: groupNestingDepth, headerProps: headerProps, listProps: listProps, items: items, onRenderCell: onRenderCell, onRenderGroupHeader: groupProps.onRenderHeader, onRenderGroupShowAll: groupProps.onRenderShowAll, onRenderGroupFooter: groupProps.onRenderFooter, selectionMode: selectionMode, selection: selection, showAllProps: showAllProps, viewport: viewport }));
    };
    GroupedList.prototype._returnOne = function () {
        return 1;
    };
    GroupedList.prototype._getGroupKey = function (group, index) {
        return 'group-' + ((group && group.key) ? group.key : String(index));
    };
    GroupedList.prototype._getGroupNestingDepth = function () {
        var groups = this.state.groups;
        var level = 0;
        var groupsInLevel = groups;
        while (groupsInLevel && groupsInLevel.length > 0) {
            level++;
            groupsInLevel = groupsInLevel[0].children;
        }
        return level;
    };
    GroupedList.prototype._onToggleCollapse = function (group) {
        var groupProps = this.props.groupProps;
        var onToggleCollapse = groupProps && groupProps.headerProps && groupProps.headerProps.onToggleCollapse;
        if (group) {
            if (onToggleCollapse) {
                onToggleCollapse(group);
            }
            group.isCollapsed = !group.isCollapsed;
            this._updateIsSomeGroupExpanded();
            this.forceUpdate();
        }
    };
    GroupedList.prototype._onToggleSelectGroup = function (group) {
        if (group) {
            this.props.selection.toggleRangeSelected(group.startIndex, group.count);
        }
    };
    GroupedList.prototype._forceListUpdates = function (groups) {
        groups = groups || this.state.groups;
        var groupCount = groups ? groups.length : 1;
        if (this.refs.list) {
            this.refs.list.forceUpdate();
            for (var i = 0; i < groupCount; i++) {
                var group = this.refs.list.refs['group_' + String(i)];
                if (group) {
                    group.forceListUpdate();
                }
            }
        }
        else {
            var group = this.refs['group_' + String(0)];
            if (group) {
                group.forceListUpdate();
            }
        }
    };
    GroupedList.prototype._onToggleSummarize = function (group) {
        var groupProps = this.props.groupProps;
        var onToggleSummarize = groupProps && groupProps.showAllProps && groupProps.showAllProps.onToggleSummarize;
        if (onToggleSummarize) {
            onToggleSummarize(group);
        }
        else {
            if (group) {
                group.isShowingAll = !group.isShowingAll;
            }
            this.forceUpdate();
        }
    };
    GroupedList.prototype._computeIsSomeGroupExpanded = function (groups) {
        var _this = this;
        return !!(groups && groups.some(function (group) { return group.children ? _this._computeIsSomeGroupExpanded(group.children) : !group.isCollapsed; }));
    };
    GroupedList.prototype._updateIsSomeGroupExpanded = function () {
        var groups = this.state.groups;
        var onGroupExpandStateChanged = this.props.onGroupExpandStateChanged;
        var newIsSomeGroupExpanded = this._computeIsSomeGroupExpanded(groups);
        if (this._isSomeGroupExpanded !== newIsSomeGroupExpanded) {
            if (onGroupExpandStateChanged) {
                onGroupExpandStateChanged(newIsSomeGroupExpanded);
            }
            this._isSomeGroupExpanded = newIsSomeGroupExpanded;
        }
    };
    GroupedList.defaultProps = {
        selectionMode: index_1.SelectionMode.multiple,
        isHeaderVisible: true,
        groupProps: {}
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], GroupedList.prototype, "_renderGroup", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], GroupedList.prototype, "_onToggleCollapse", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], GroupedList.prototype, "_onToggleSelectGroup", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], GroupedList.prototype, "_onToggleSummarize", null);
    return GroupedList;
}(Utilities_1.BaseComponent));
exports.GroupedList = GroupedList;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var Utilities_1 = __webpack_require__(2);
var index_1 = __webpack_require__(12);
var GroupHeader_1 = __webpack_require__(130);
var GroupShowAll_1 = __webpack_require__(132);
var GroupFooter_1 = __webpack_require__(128);
var List_1 = __webpack_require__(26);
var Utilities_2 = __webpack_require__(2);
var stylesImport = __webpack_require__(48);
var styles = stylesImport;
var DEFAULT_DROPPING_CSS_CLASS = 'is-dropping';
var GroupedListSection = (function (_super) {
    tslib_1.__extends(GroupedListSection, _super);
    function GroupedListSection(props) {
        var _this = _super.call(this, props) || this;
        var selection = props.selection, group = props.group;
        _this._subGroups = {};
        _this.state = {
            isDropping: false,
            isSelected: (selection && group) ? selection.isRangeSelected(group.startIndex, group.count) : false
        };
        return _this;
    }
    GroupedListSection.prototype.componentDidMount = function () {
        var _a = this.props, dragDropHelper = _a.dragDropHelper, selection = _a.selection;
        if (dragDropHelper) {
            this._dragDropSubscription = dragDropHelper.subscribe(this.refs.root, this._events, this._getGroupDragDropOptions());
        }
        if (selection) {
            this._events.on(selection, index_1.SELECTION_CHANGE, this._onSelectionChange);
        }
    };
    GroupedListSection.prototype.componentWillUnmount = function () {
        if (this._dragDropSubscription) {
            this._dragDropSubscription.dispose();
        }
    };
    GroupedListSection.prototype.componentDidUpdate = function (previousProps) {
        if (this.props.group !== previousProps.group ||
            this.props.groupIndex !== previousProps.groupIndex ||
            this.props.dragDropHelper !== previousProps.dragDropHelper) {
            if (this._dragDropSubscription) {
                this._dragDropSubscription.dispose();
                delete this._dragDropSubscription;
            }
            if (this.props.dragDropHelper) {
                this._dragDropSubscription = this.props.dragDropHelper.subscribe(this.refs.root, this._events, this._getGroupDragDropOptions());
            }
        }
    };
    GroupedListSection.prototype.render = function () {
        var _a = this.props, getGroupItemLimit = _a.getGroupItemLimit, group = _a.group, groupIndex = _a.groupIndex, headerProps = _a.headerProps, showAllProps = _a.showAllProps, footerProps = _a.footerProps, viewport = _a.viewport, selectionMode = _a.selectionMode, _b = _a.onRenderGroupHeader, onRenderGroupHeader = _b === void 0 ? this._onRenderGroupHeader : _b, _c = _a.onRenderGroupShowAll, onRenderGroupShowAll = _c === void 0 ? this._onRenderGroupShowAll : _c, _d = _a.onRenderGroupFooter, onRenderGroupFooter = _d === void 0 ? this._onRenderGroupFooter : _d;
        var isSelected = this.state.isSelected;
        var renderCount = group && getGroupItemLimit ? getGroupItemLimit(group) : Infinity;
        var isShowAllVisible = group && !group.children && !group.isCollapsed && !group.isShowingAll &&
            (group.count > renderCount || group.hasMoreData);
        var hasNestedGroups = group && group.children && group.children.length > 0;
        var dividerProps = {
            group: group,
            groupIndex: groupIndex,
            groupLevel: group ? group.level : 0,
            isSelected: isSelected,
            viewport: viewport,
            selectionMode: selectionMode
        };
        var groupHeaderProps = Utilities_2.assign({}, headerProps, dividerProps);
        var groupShowAllProps = Utilities_2.assign({}, showAllProps, dividerProps);
        var groupFooterProps = Utilities_2.assign({}, footerProps, dividerProps);
        return (React.createElement("div", { ref: 'root', className: Utilities_2.css('ms-GroupedList-group', styles.group, this._getDroppingClassName()), role: 'presentation' },
            onRenderGroupHeader(groupHeaderProps, this._onRenderGroupHeader),
            group && group.isCollapsed ?
                null :
                (hasNestedGroups ?
                    (React.createElement(List_1.List, { ref: 'list', items: group.children, onRenderCell: this._renderSubGroup, getItemCountForPage: this._returnOne })) :
                    this._onRenderGroup(renderCount)),
            group && group.isCollapsed ?
                null :
                isShowAllVisible && onRenderGroupShowAll(groupShowAllProps, this._onRenderGroupShowAll),
            onRenderGroupFooter(groupFooterProps, this._onRenderGroupFooter)));
    };
    GroupedListSection.prototype.forceUpdate = function () {
        _super.prototype.forceUpdate.call(this);
        this.forceListUpdate();
    };
    GroupedListSection.prototype.forceListUpdate = function () {
        var group = this.props.group;
        if (this.refs.list) {
            this.refs.list.forceUpdate();
            if (group && group.children && group.children.length > 0) {
                var subGroupCount = group.children.length;
                for (var i = 0; i < subGroupCount; i++) {
                    var subGroup = this.refs.list.refs['subGroup_' + String(i)];
                    if (subGroup) {
                        subGroup.forceListUpdate();
                    }
                }
            }
        }
        else {
            var subGroup = this.refs['subGroup_' + String(0)];
            if (subGroup) {
                subGroup.forceListUpdate();
            }
        }
    };
    GroupedListSection.prototype._onRenderGroupHeader = function (props) {
        return React.createElement(GroupHeader_1.GroupHeader, tslib_1.__assign({}, props));
    };
    GroupedListSection.prototype._onRenderGroupShowAll = function (props) {
        return React.createElement(GroupShowAll_1.GroupShowAll, tslib_1.__assign({}, props));
    };
    GroupedListSection.prototype._onRenderGroupFooter = function (props) {
        return React.createElement(GroupFooter_1.GroupFooter, tslib_1.__assign({}, props));
    };
    GroupedListSection.prototype._onSelectionChange = function () {
        var _a = this.props, group = _a.group, selection = _a.selection;
        var isSelected = selection.isRangeSelected(group.startIndex, group.count);
        if (isSelected !== this.state.isSelected) {
            this.setState({ isSelected: isSelected });
        }
    };
    GroupedListSection.prototype._onRenderGroupCell = function (onRenderCell, groupNestingDepth) {
        return function (item, itemIndex) {
            return onRenderCell(groupNestingDepth, item, itemIndex);
        };
    };
    GroupedListSection.prototype._onRenderGroup = function (renderCount) {
        var _a = this.props, group = _a.group, items = _a.items, onRenderCell = _a.onRenderCell, listProps = _a.listProps, groupNestingDepth = _a.groupNestingDepth;
        var count = group ? group.count : items.length;
        var startIndex = group ? group.startIndex : 0;
        return (React.createElement(List_1.List, tslib_1.__assign({ items: items, onRenderCell: this._onRenderGroupCell(onRenderCell, groupNestingDepth), ref: 'list', renderCount: Math.min(count, renderCount), startIndex: startIndex }, listProps)));
    };
    GroupedListSection.prototype._renderSubGroup = function (subGroup, subGroupIndex) {
        var _a = this.props, dragDropEvents = _a.dragDropEvents, dragDropHelper = _a.dragDropHelper, eventsToRegister = _a.eventsToRegister, getGroupItemLimit = _a.getGroupItemLimit, groupNestingDepth = _a.groupNestingDepth, items = _a.items, headerProps = _a.headerProps, showAllProps = _a.showAllProps, footerProps = _a.footerProps, listProps = _a.listProps, onRenderCell = _a.onRenderCell, selection = _a.selection, selectionMode = _a.selectionMode, viewport = _a.viewport, onRenderGroupHeader = _a.onRenderGroupHeader, onRenderGroupShowAll = _a.onRenderGroupShowAll, onRenderGroupFooter = _a.onRenderGroupFooter;
        return (!subGroup || subGroup.count > 0) ? (React.createElement(GroupedListSection, { ref: 'subGroup_' + subGroupIndex, key: this._getGroupKey(subGroup, subGroupIndex), dragDropEvents: dragDropEvents, dragDropHelper: dragDropHelper, eventsToRegister: eventsToRegister, footerProps: footerProps, getGroupItemLimit: getGroupItemLimit, group: subGroup, groupIndex: subGroupIndex, groupNestingDepth: groupNestingDepth, headerProps: headerProps, items: items, listProps: listProps, onRenderCell: onRenderCell, selection: selection, selectionMode: selectionMode, showAllProps: showAllProps, viewport: viewport, onRenderGroupHeader: onRenderGroupHeader, onRenderGroupShowAll: onRenderGroupShowAll, onRenderGroupFooter: onRenderGroupFooter })) : null;
    };
    GroupedListSection.prototype._returnOne = function () {
        return 1;
    };
    GroupedListSection.prototype._getGroupKey = function (group, index) {
        return 'group-' + ((group && group.key) ? group.key : String(group.level) + String(index));
    };
    /**
     * collect all the data we need to enable drag/drop for a group
     */
    GroupedListSection.prototype._getGroupDragDropOptions = function () {
        var _a = this.props, group = _a.group, groupIndex = _a.groupIndex, dragDropEvents = _a.dragDropEvents, eventsToRegister = _a.eventsToRegister;
        var options = {
            eventMap: eventsToRegister,
            selectionIndex: -1,
            context: { data: group, index: groupIndex, isGroup: true },
            canDrag: function () { return false; },
            canDrop: dragDropEvents.canDrop,
            updateDropState: this._updateDroppingState
        };
        return options;
    };
    /**
     * update groupIsDropping state based on the input value, which is used to change style during drag and drop
     *
     * @private
     * @param {boolean} newValue (new isDropping state value)
     * @param {DragEvent} event (the event trigger dropping state change which can be dragenter, dragleave etc)
     */
    GroupedListSection.prototype._updateDroppingState = function (newIsDropping, event) {
        var isDropping = this.state.isDropping;
        var dragDropEvents = this.props.dragDropEvents;
        if (!isDropping) {
            if (dragDropEvents && dragDropEvents.onDragLeave) {
                dragDropEvents.onDragLeave(event, undefined);
            }
        }
        else {
            if (dragDropEvents && dragDropEvents.onDragEnter) {
                dragDropEvents.onDragEnter(event, undefined);
            }
        }
        if (isDropping !== newIsDropping) {
            this.setState({ isDropping: newIsDropping });
        }
    };
    /**
     * get the correct css class to reflect the dropping state for a given group
     *
     * If the group is the current drop target, return the default dropping class name
     * Otherwise, return '';
     *
     */
    GroupedListSection.prototype._getDroppingClassName = function () {
        var isDropping = this.state.isDropping;
        var group = this.props.group;
        isDropping = !!(group && isDropping);
        return Utilities_2.css(isDropping && DEFAULT_DROPPING_CSS_CLASS, isDropping && styles.groupIsDropping);
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], GroupedListSection.prototype, "_onRenderGroupHeader", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], GroupedListSection.prototype, "_onRenderGroupShowAll", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], GroupedListSection.prototype, "_onRenderGroupFooter", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], GroupedListSection.prototype, "_renderSubGroup", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], GroupedListSection.prototype, "_getGroupDragDropOptions", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], GroupedListSection.prototype, "_updateDroppingState", null);
    return GroupedListSection;
}(Utilities_1.BaseComponent));
exports.GroupedListSection = GroupedListSection;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(135), exports);
tslib_1.__exportStar(__webpack_require__(47), exports);


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Styling_1 = __webpack_require__(10);
var Utilities_1 = __webpack_require__(2);
exports.getClassNames = Utilities_1.memoizeFunction(function (customStyles) {
    return Styling_1.mergeStyleSets({
        root: {
            display: 'inline-block'
        },
        imageContainer: {
            overflow: 'hidden'
        }
    }, customStyles);
});


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable */
var React = __webpack_require__(1);
/* tslint:enable */
var Icon_Props_1 = __webpack_require__(49);
var Image_1 = __webpack_require__(142);
var Utilities_1 = __webpack_require__(2);
var Styling_1 = __webpack_require__(10);
var Icon_classNames_1 = __webpack_require__(138);
exports.Icon = function (props) {
    var ariaLabel = props.ariaLabel, className = props.className, styles = props.styles, iconName = props.iconName;
    var classNames = Icon_classNames_1.getClassNames(styles);
    if (props.iconType === Icon_Props_1.IconType.image || props.iconType === Icon_Props_1.IconType.Image) {
        var containerClassName = Utilities_1.css('ms-Icon', 'ms-Icon-imageContainer', classNames.root, classNames.imageContainer, className);
        return (React.createElement("div", { className: Utilities_1.css(containerClassName, classNames.root) },
            React.createElement(Image_1.Image, tslib_1.__assign({}, props.imageProps))));
    }
    else {
        var iconDefinition = Styling_1.getIcon(iconName) || {
            subset: {
                className: undefined
            },
            code: undefined
        };
        return (React.createElement("i", tslib_1.__assign({ "aria-label": ariaLabel }, (ariaLabel ? {} : {
            role: 'presentation',
            'aria-hidden': true,
            'data-icon-name': iconName,
        }), Utilities_1.getNativeProps(props, Utilities_1.htmlElementProperties), { className: Utilities_1.css('ms-Icon', // dangerous?
            iconDefinition.subset.className, classNames.root, props.className) }), iconDefinition.code));
    }
};


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(139), exports);
tslib_1.__exportStar(__webpack_require__(49), exports);


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The possible methods that can be used to fit the image.
 */
var ImageFit;
(function (ImageFit) {
    /**
     * The image is not scaled. The image is centered and cropped within the content box.
     */
    ImageFit[ImageFit["center"] = 0] = "center";
    /**
     * The image is scaled to maintain its aspect ratio while being fully contained within the frame. The image will
     * be centered horizontally and vertically within the frame. The space in the top and bottom or in the sides of
     * the frame will be empty depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["contain"] = 1] = "contain";
    /**
     * The image is scaled to maintain its aspect ratio while filling the frame. Portions of the image will be cropped from
     * the top and bottom, or from the sides, depending on the difference in aspect ratio between the image and the frame.
     */
    ImageFit[ImageFit["cover"] = 2] = "cover";
    /**
     * Neither the image nor the frame are scaled. If their sizes do not match, the image will either be cropped or the
     * frame will have empty space.
     */
    ImageFit[ImageFit["none"] = 3] = "none";
})(ImageFit = exports.ImageFit || (exports.ImageFit = {}));
/**
 * The cover style to be used on the image
 */
var ImageCoverStyle;
(function (ImageCoverStyle) {
    /**
     * The image will be shown at 100% height of container and the width will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["landscape"] = 0] = "landscape";
    /**
     * The image will be shown at 100% width of container and the height will be scaled accordingly
     */
    ImageCoverStyle[ImageCoverStyle["portrait"] = 1] = "portrait";
})(ImageCoverStyle = exports.ImageCoverStyle || (exports.ImageCoverStyle = {}));
var ImageLoadState;
(function (ImageLoadState) {
    /**
     * The image has not yet been loaded, and there is no error yet.
     */
    ImageLoadState[ImageLoadState["notLoaded"] = 0] = "notLoaded";
    /**
     * The image has been loaded successfully.
     */
    ImageLoadState[ImageLoadState["loaded"] = 1] = "loaded";
    /**
     * An error has been encountered while loading the image.
     */
    ImageLoadState[ImageLoadState["error"] = 2] = "error";
    /**
     * Deprecated at v1.3.6, to replace the src in case of errors, use onLoadingStateChange instead
     * and rerender the Image with a difference src.
     * @deprecated
     */
    ImageLoadState[ImageLoadState["errorLoaded"] = 3] = "errorLoaded";
})(ImageLoadState = exports.ImageLoadState || (exports.ImageLoadState = {}));


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
/* tslint:disable:no-unused-variable */
var React = __webpack_require__(1);
/* tslint:enable:no-unused-variable */
var Utilities_1 = __webpack_require__(2);
var Image_Props_1 = __webpack_require__(141);
var Styling_1 = __webpack_require__(10);
var stylesImport = __webpack_require__(143);
var styles = stylesImport;
exports.CoverStyleMap = (_a = {},
    _a[Image_Props_1.ImageCoverStyle.landscape] = 'ms-Image-image--landscape ' + styles.imageIsLandscape,
    _a[Image_Props_1.ImageCoverStyle.portrait] = 'ms-Image-image--portrait ' + styles.imageIsPortrait,
    _a);
exports.ImageFitMap = (_b = {},
    _b[Image_Props_1.ImageFit.center] = 'ms-Image-image--center ' + styles.imageIsCenter,
    _b[Image_Props_1.ImageFit.contain] = 'ms-Image-image--contain ' + styles.imageIsContain,
    _b[Image_Props_1.ImageFit.cover] = 'ms-Image-image--cover ' + styles.imageIsCover,
    _b[Image_Props_1.ImageFit.none] = 'ms-Image-image--none ' + styles.imageIsNone,
    _b);
var KEY_PREFIX = 'fabricImage';
var Image = (function (_super) {
    tslib_1.__extends(Image, _super);
    function Image(props) {
        var _this = _super.call(this, props) || this;
        // Make an initial assumption about the image layout until we can
        // check the rendered element. The value here only takes effect when
        // shouldStartVisible is true.
        _this._coverStyle = Image_Props_1.ImageCoverStyle.portrait;
        _this.state = {
            loadState: Image_Props_1.ImageLoadState.notLoaded
        };
        return _this;
    }
    Image.prototype.componentWillReceiveProps = function (nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({
                loadState: Image_Props_1.ImageLoadState.notLoaded
            });
        }
        else if (this.state.loadState === Image_Props_1.ImageLoadState.loaded) {
            this._computeCoverStyle(nextProps);
        }
    };
    Image.prototype.componentDidUpdate = function (prevProps, prevState) {
        this._checkImageLoaded();
        if (this.props.onLoadingStateChange
            && prevState.loadState !== this.state.loadState) {
            this.props.onLoadingStateChange(this.state.loadState);
        }
    };
    Image.prototype.render = function () {
        var imageProps = Utilities_1.getNativeProps(this.props, Utilities_1.imageProperties, ['width', 'height']);
        var _a = this.props, src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, shouldFadeIn = _a.shouldFadeIn, className = _a.className, imageFit = _a.imageFit, role = _a.role, maximizeFrame = _a.maximizeFrame;
        var loadState = this.state.loadState;
        var coverStyle = this.props.coverStyle !== undefined ? this.props.coverStyle : this._coverStyle;
        var loaded = loadState === Image_Props_1.ImageLoadState.loaded || (loadState === Image_Props_1.ImageLoadState.notLoaded && this.props.shouldStartVisible);
        // If image dimensions aren't specified, the natural size of the image is used.
        return (React.createElement("div", { className: Utilities_1.css('ms-Image', styles.root, className, (_b = {},
                _b['ms-Image--maximizeFrame ' + styles.rootIsMaximizeFrame] = maximizeFrame,
                _b)), style: { width: width, height: height }, ref: this._resolveRef('_frameElement') },
            React.createElement("img", tslib_1.__assign({}, imageProps, { onLoad: this._onImageLoaded, onError: this._onImageError, key: KEY_PREFIX + this.props.src || '', className: Utilities_1.css('ms-Image-image', styles.image, exports.CoverStyleMap[coverStyle], (imageFit !== undefined) && exports.ImageFitMap[imageFit], !loaded && 'is-notLoaded', loaded && 'is-loaded ' + styles.imageIsLoaded, shouldFadeIn && 'is-fadeIn', loadState === Image_Props_1.ImageLoadState.error && 'is-error', loaded && shouldFadeIn && Styling_1.AnimationClassNames.fadeIn400, (_c = {},
                    _c['ms-Image-image--scaleWidth ' + styles.imageIsScaleWidth] = (imageFit === undefined && !!width && !height),
                    _c['ms-Image-image--scaleHeight ' + styles.imageIsScaleHeight] = (imageFit === undefined && !width && !!height),
                    _c['ms-Image-image--scaleWidthHeight ' + styles.imageIsScaleWidthHeight] = (imageFit === undefined && !!width && !!height),
                    _c)), ref: this._resolveRef('_imageElement'), src: src, alt: alt, role: role }))));
        var _b, _c;
    };
    Image.prototype._onImageLoaded = function (ev) {
        var _a = this.props, src = _a.src, onLoad = _a.onLoad;
        if (onLoad) {
            onLoad(ev);
        }
        this._computeCoverStyle(this.props);
        if (src) {
            this.setState({
                loadState: Image_Props_1.ImageLoadState.loaded
            });
        }
    };
    Image.prototype._checkImageLoaded = function () {
        var src = this.props.src;
        var loadState = this.state.loadState;
        if (loadState === Image_Props_1.ImageLoadState.notLoaded) {
            // testing if naturalWidth and naturalHeight are greater than zero is better than checking
            // .complete, because .complete will also be set to true if the image breaks. However,
            // for some browsers, SVG images do not have a naturalWidth or naturalHeight, so fall back
            // to checking .complete for these images.
            var isLoaded = src && this._imageElement && (this._imageElement.naturalWidth > 0 && this._imageElement.naturalHeight > 0) ||
                (this._imageElement.complete && Image._svgRegex.test(src));
            if (isLoaded) {
                this._computeCoverStyle(this.props);
                this.setState({
                    loadState: Image_Props_1.ImageLoadState.loaded
                });
            }
        }
    };
    Image.prototype._computeCoverStyle = function (props) {
        var imageFit = props.imageFit, width = props.width, height = props.height;
        // Do not compute cover style if it was already specified in props
        if ((imageFit === Image_Props_1.ImageFit.cover || imageFit === Image_Props_1.ImageFit.contain) &&
            this.props.coverStyle === undefined &&
            this._imageElement) {
            // Determine the desired ratio using the width and height props.
            // If those props aren't available, measure measure the frame.
            var desiredRatio = void 0;
            if (!!width && !!height) {
                desiredRatio = width / height;
            }
            else {
                desiredRatio = this._frameElement.clientWidth / this._frameElement.clientHeight;
            }
            // Examine the source image to determine its original ratio.
            var naturalRatio = this._imageElement.naturalWidth / this._imageElement.naturalHeight;
            // Should we crop from the top or the sides?
            if (naturalRatio > desiredRatio) {
                this._coverStyle = Image_Props_1.ImageCoverStyle.landscape;
            }
            else {
                this._coverStyle = Image_Props_1.ImageCoverStyle.portrait;
            }
        }
    };
    Image.prototype._onImageError = function (ev) {
        if (this.props.onError) {
            this.props.onError(ev);
        }
        this.setState({
            loadState: Image_Props_1.ImageLoadState.error
        });
    };
    Image.defaultProps = {
        shouldFadeIn: true
    };
    Image._svgRegex = /\.svg$/i;
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Image.prototype, "_onImageLoaded", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Image.prototype, "_onImageError", null);
    return Image;
}(Utilities_1.BaseComponent));
exports.Image = Image;
var _a, _b;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(3);
load_themed_styles_1.loadStyles([{ "rawString": ".root_5c6d2bbb{overflow:hidden}.rootIsMaximizeFrame_5c6d2bbb{height:100%;width:100%}.image_5c6d2bbb{display:block;opacity:0}.image_5c6d2bbb.imageIsLoaded_5c6d2bbb{opacity:1}.imageIsCenter_5c6d2bbb,.imageIsContain_5c6d2bbb,.imageIsCover_5c6d2bbb{position:relative;top:50%}[dir='ltr'] .imageIsCenter_5c6d2bbb,[dir='ltr'] .imageIsContain_5c6d2bbb,[dir='ltr'] .imageIsCover_5c6d2bbb{left:50%}[dir='rtl'] .imageIsCenter_5c6d2bbb,[dir='rtl'] .imageIsContain_5c6d2bbb,[dir='rtl'] .imageIsCover_5c6d2bbb{right:50%}html[dir='ltr'] .imageIsCenter_5c6d2bbb,html[dir='ltr'] .imageIsContain_5c6d2bbb,html[dir='ltr'] .imageIsCover_5c6d2bbb{-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}html[dir='rtl'] .imageIsCenter_5c6d2bbb,html[dir='rtl'] .imageIsContain_5c6d2bbb,html[dir='rtl'] .imageIsCover_5c6d2bbb{-webkit-transform:translate(50%, -50%);transform:translate(50%, -50%)}.imageIsContain_5c6d2bbb.imageIsLandscape_5c6d2bbb{width:100%;height:auto}.imageIsContain_5c6d2bbb.imageIsPortrait_5c6d2bbb{height:100%;width:auto}.imageIsCover_5c6d2bbb.imageIsLandscape_5c6d2bbb{height:100%;width:auto}.imageIsCover_5c6d2bbb.imageIsPortrait_5c6d2bbb{width:100%;height:auto}.imageIsNone_5c6d2bbb{height:auto;width:auto}.imageIsScaleWidthHeight_5c6d2bbb{height:100%;width:100%}.imageIsScaleWidth_5c6d2bbb{height:auto;width:100%}.imageIsScaleHeight_5c6d2bbb{height:100%;width:auto}\n" }]);
exports.root = "root_5c6d2bbb";
exports.rootIsMaximizeFrame = "rootIsMaximizeFrame_5c6d2bbb";
exports.image = "image_5c6d2bbb";
exports.imageIsLoaded = "imageIsLoaded_5c6d2bbb";
exports.imageIsCenter = "imageIsCenter_5c6d2bbb";
exports.imageIsContain = "imageIsContain_5c6d2bbb";
exports.imageIsCover = "imageIsCover_5c6d2bbb";
exports.imageIsLandscape = "imageIsLandscape_5c6d2bbb";
exports.imageIsPortrait = "imageIsPortrait_5c6d2bbb";
exports.imageIsNone = "imageIsNone_5c6d2bbb";
exports.imageIsScaleWidthHeight = "imageIsScaleWidthHeight_5c6d2bbb";
exports.imageIsScaleWidth = "imageIsScaleWidth_5c6d2bbb";
exports.imageIsScaleHeight = "imageIsScaleHeight_5c6d2bbb";


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(3);
load_themed_styles_1.loadStyles([{ "rawString": ".rootIsFixed_f160923f{position:fixed;z-index:1000000;top:0;left:0;width:100vw;height:100vh;visibility:hidden}.content_f160923f{visibility:visible}\n" }]);
exports.rootIsFixed = "rootIsFixed_f160923f";
exports.content = "content_f160923f";


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var Utilities_1 = __webpack_require__(2);
var Layer_1 = __webpack_require__(50);
var LayerHost = (function (_super) {
    tslib_1.__extends(LayerHost, _super);
    function LayerHost() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerHost.prototype.shouldComponentUpdate = function () {
        return false;
    };
    LayerHost.prototype.componentDidMount = function () {
        Layer_1.Layer.notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.componentWillUnmount = function () {
        Layer_1.Layer.notifyHostChanged(this.props.id);
    };
    LayerHost.prototype.render = function () {
        return (React.createElement("div", tslib_1.__assign({}, this.props, { className: Utilities_1.css('ms-LayerHost', this.props.className) })));
    };
    return LayerHost;
}(Utilities_1.BaseComponent));
exports.LayerHost = LayerHost;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(50), exports);
tslib_1.__exportStar(__webpack_require__(145), exports);


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var Utilities_1 = __webpack_require__(2);
var stylesImport = __webpack_require__(148);
var styles = stylesImport;
var Link = (function (_super) {
    tslib_1.__extends(Link, _super);
    function Link() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Link.prototype.render = function () {
        var _a = this.props, disabled = _a.disabled, children = _a.children, className = _a.className, href = _a.href;
        return (href ? (React.createElement("a", tslib_1.__assign({}, Utilities_1.getNativeProps(this.props, Utilities_1.anchorProperties), { className: Utilities_1.css('ms-Link', styles.root, className, disabled && ('is-disabled ' + styles.isDisabled), !disabled && styles.isEnabled), onClick: this._onClick, ref: this._resolveRef('_link'), target: this.props.target }), children)) : (React.createElement("button", tslib_1.__assign({}, Utilities_1.getNativeProps(this.props, Utilities_1.buttonProperties), { className: Utilities_1.css('ms-Link', styles.root, className, disabled && ('is-disabled ' + styles.isDisabled)), onClick: this._onClick, ref: this._resolveRef('_link') }), children)));
    };
    Link.prototype.focus = function () {
        if (this._link) {
            this._link.focus();
        }
    };
    Link.prototype._onClick = function (ev) {
        var onClick = this.props.onClick;
        if (onClick) {
            onClick(ev);
        }
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], Link.prototype, "_onClick", null);
    return Link;
}(Utilities_1.BaseComponent));
exports.Link = Link;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(3);
load_themed_styles_1.loadStyles([{ "rawString": ".root_f4a82844{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";margin:0;overflow:inherit;padding:0;text-overflow:inherit}.isEnabled_f4a82844:hover,.isEnabled_f4a82844:focus{color:" }, { "theme": "themeDarker", "defaultValue": "#004578" }, { "rawString": "}.isEnabled_f4a82844:active{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": "}.isDisabled_f4a82844{color:" }, { "theme": "neutralTertiary", "defaultValue": "#a6a6a6" }, { "rawString": ";pointer-events:none;cursor:default}button.root_f4a82844{background:none;border:none;cursor:pointer;display:inline;font-size:inherit}button.root_f4a82844::-moz-focus-inner{border:0}button.root_f4a82844{outline:transparent}button.root_f4a82844{position:relative}.ms-Fabric.is-focusVisible button.root_f4a82844:focus:after{content:'';position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;border:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}html[dir='ltr'] button.root_f4a82844{text-align:left}html[dir='rtl'] button.root_f4a82844{text-align:right}@media screen and (-ms-high-contrast: active){button.root_f4a82844{color:Highlight}}a.root_f4a82844{text-decoration:none}.ms-Fabric.is-focusVisible a.root_f4a82844:focus{outline:1px solid " }, { "theme": "neutralSecondary", "defaultValue": "#666666" }, { "rawString": "}\n" }]);
exports.root = "root_f4a82844";
exports.isEnabled = "isEnabled_f4a82844";
exports.isDisabled = "isDisabled_f4a82844";


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(147), exports);


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var Utilities_1 = __webpack_require__(2);
var RESIZE_DELAY = 16;
var MIN_SCROLL_UPDATE_DELAY = 100;
var MAX_SCROLL_UPDATE_DELAY = 500;
var IDLE_DEBOUNCE_DELAY = 200;
var DEFAULT_ITEMS_PER_PAGE = 10;
var DEFAULT_PAGE_HEIGHT = 30;
var DEFAULT_RENDERED_WINDOWS_BEHIND = 2;
var DEFAULT_RENDERED_WINDOWS_AHEAD = 2;
var EMPTY_RECT = {
    top: -1,
    bottom: -1,
    left: -1,
    right: -1,
    width: 0,
    height: 0
};
// Naming expensive measures so that they're named in profiles.
var _measurePageRect = function (element) { return element.getBoundingClientRect(); };
var _measureSurfaceRect = _measurePageRect;
var _measureScrollRect = _measurePageRect;
/**
 * The List renders virtualized pages of items. Each page's item count is determined by the getItemCountForPage callback if
 * provided by the caller, or 10 as default. Each page's height is determined by the getPageHeight callback if provided by
 * the caller, or by cached measurements if available, or by a running average, or a default fallback.
 *
 * The algorithm for rendering pages works like this:
 *
 * 1. Predict visible pages based on "current measure data" (page heights, surface position, visible window)
 * 2. If changes are necessary, apply changes (add/remove pages)
 * 3. For pages that are added, measure the page heights if we need to using getBoundingClientRect
 * 4. If measurements don't match predictions, update measure data and goto step 1 asynchronously
 *
 * Measuring too frequently can pull performance down significantly. To compensate, we cache measured values so that
 * we can avoid re-measuring during operations that should not alter heights, like scrolling.
 *
 * To optimize glass rendering performance, onShouldVirtualize can be set. When onShouldVirtualize return false,
 * List will run in fast mode (not virtualized) to render all items without any measurements to improve page load time. And we
 * start doing measurements and rendering in virtualized mode when items grows larger than this threshold.
 *
 * However, certain operations can make measure data stale. For example, resizing the list, or passing in new props,
 * or forcing an update change cause pages to shrink/grow. When these operations occur, we increment a measureVersion
 * number, which we associate with cached measurements and use to determine if a remeasure should occur.
 */
var List = (function (_super) {
    tslib_1.__extends(List, _super);
    function List(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            pages: []
        };
        _this._estimatedPageHeight = 0;
        _this._totalEstimates = 0;
        _this._requiredWindowsAhead = 0;
        _this._requiredWindowsBehind = 0;
        // Track the measure version for everything.
        _this._measureVersion = 0;
        // Ensure that scrolls are lazy updated.
        _this._onAsyncScroll = _this._async.debounce(_this._onAsyncScroll, MIN_SCROLL_UPDATE_DELAY, {
            leading: false,
            maxWait: MAX_SCROLL_UPDATE_DELAY
        });
        _this._onAsyncIdle = _this._async.debounce(_this._onAsyncIdle, IDLE_DEBOUNCE_DELAY, {
            leading: false
        });
        _this._onAsyncResize = _this._async.debounce(_this._onAsyncResize, RESIZE_DELAY, {
            leading: false
        });
        _this._cachedPageHeights = {};
        _this._estimatedPageHeight = 0;
        _this._focusedIndex = -1;
        _this._scrollingToIndex = -1;
        _this._pageCache = {};
        return _this;
    }
    /**
     * Scroll to the given index. By default will bring the page the specified item is on into the view. If a callback
     * to measure the height of an individual item is specified, will only scroll to bring the specific item into view.
     *
     * Note: with items of variable height and no passed in `getPageHeight` method, the list might jump after scrolling
     * when windows before/ahead are being rendered, and the estimated height is replaced using actual elements.
     *
     * @param index Index of item to scroll to
     * @param measureItem Optional callback to measure the height of an individual item
     */
    List.prototype.scrollToIndex = function (index, measureItem) {
        var startIndex = this.props.startIndex;
        var renderCount = this._getRenderCount();
        var endIndex = startIndex + renderCount;
        var allowedRect = this._allowedRect;
        var scrollTop = 0;
        var itemsPerPage = 1;
        for (var itemIndex = startIndex; itemIndex < endIndex; itemIndex += itemsPerPage) {
            var pageSpecification = this._getPageSpecification(itemIndex, allowedRect);
            var pageHeight = pageSpecification.height;
            itemsPerPage = pageSpecification.itemCount;
            var requestedIndexIsInPage = itemIndex <= index && (itemIndex + itemsPerPage) > index;
            if (requestedIndexIsInPage) {
                // We have found the page. If the user provided a way to measure an individual item, we will try to scroll in just
                // the given item, otherwise we'll only bring the page into view
                if (measureItem) {
                    // Adjust for actual item position within page
                    var itemPositionWithinPage = index - itemIndex;
                    for (var itemIndexInPage = 0; itemIndexInPage < itemPositionWithinPage; ++itemIndexInPage) {
                        scrollTop += measureItem(itemIndex + itemIndexInPage);
                    }
                    var scrollBottom = scrollTop + measureItem(index);
                    var scrollRect = _measureScrollRect(this._scrollElement);
                    var scrollWindow = {
                        top: this._scrollElement.scrollTop,
                        bottom: this._scrollElement.scrollTop + scrollRect.height
                    };
                    var itemIsFullyVisible = scrollTop >= scrollWindow.top && scrollBottom <= scrollWindow.bottom;
                    if (itemIsFullyVisible) {
                        // Item is already visible, do nothing.
                        return;
                    }
                    var itemIsPartiallyAbove = scrollTop < scrollWindow.top;
                    var itemIsPartiallyBelow = scrollBottom > scrollWindow.bottom;
                    if (itemIsPartiallyAbove) {
                        // We will just scroll to 'scrollTop'
                        //  ______
                        // |Item  |   - scrollTop
                        // |  ____|_
                        // |_|____| | - scrollWindow.top
                        //   |      |
                        //   |______|
                    }
                    else if (itemIsPartiallyBelow) {
                        // Adjust scrollTop position to just bring in the element
                        //  ______   - scrollTop
                        // |      |
                        // |  ____|_  - scrollWindow.bottom
                        // |_|____| |
                        //   | Item |
                        //   |______| - scrollBottom
                        scrollTop = this._scrollElement.scrollTop + (scrollBottom - scrollWindow.bottom);
                    }
                }
                this._scrollElement.scrollTop = scrollTop;
                break;
            }
            scrollTop += pageHeight;
        }
    };
    List.prototype.componentDidMount = function () {
        this._updatePages();
        this._measureVersion++;
        this._scrollElement = Utilities_1.findScrollableParent(this.refs.root);
        this._events.on(window, 'resize', this._onAsyncResize);
        this._events.on(this.refs.root, 'focus', this._onFocus, true);
        if (this._scrollElement) {
            this._events.on(this._scrollElement, 'scroll', this._onScroll);
            this._events.on(this._scrollElement, 'scroll', this._onAsyncScroll);
        }
    };
    List.prototype.componentWillReceiveProps = function (newProps) {
        if (newProps.items !== this.props.items ||
            newProps.renderCount !== this.props.renderCount ||
            newProps.startIndex !== this.props.startIndex) {
            // We have received new items so we want to make sure that initially we only render a single window to
            // fill the currently visible rect, and then later render additional windows.
            this._resetRequiredWindows();
            this._requiredRect = null;
            this._measureVersion++;
            this._invalidatePageCache();
            this._updatePages(newProps);
        }
    };
    List.prototype.shouldComponentUpdate = function (newProps, newState) {
        var oldPages = this.state.pages;
        var newPages = newState.pages;
        var shouldComponentUpdate = false;
        if (newProps.items === this.props.items &&
            oldPages.length === newPages.length) {
            for (var i = 0; i < oldPages.length; i++) {
                var oldPage = oldPages[i];
                var newPage = newPages[i];
                if ((oldPage.key !== newPage.key ||
                    oldPage.itemCount !== newPage.itemCount)) {
                    shouldComponentUpdate = true;
                    break;
                }
            }
        }
        else {
            shouldComponentUpdate = true;
        }
        return shouldComponentUpdate;
    };
    List.prototype.forceUpdate = function () {
        this._invalidatePageCache();
        // Ensure that when the list is force updated we update the pages first before render.
        this._updateRenderRects(this.props, true);
        this._updatePages();
        this._measureVersion++;
        _super.prototype.forceUpdate.call(this);
    };
    List.prototype.render = function () {
        var _a = this.props, className = _a.className, role = _a.role;
        var _b = this.state.pages, pages = _b === void 0 ? [] : _b;
        var pageElements = [];
        var divProps = Utilities_1.getNativeProps(this.props, Utilities_1.divProperties);
        for (var _i = 0, pages_1 = pages; _i < pages_1.length; _i++) {
            var page = pages_1[_i];
            pageElements.push(this._renderPage(page));
        }
        // console.log(`Page elements ${pageElements.length}`);
        return (React.createElement("div", tslib_1.__assign({ ref: 'root' }, divProps, { role: (role === undefined) ? 'list' : role, className: Utilities_1.css('ms-List', className) }),
            React.createElement("div", { ref: 'surface', className: Utilities_1.css('ms-List-surface'), role: 'presentation' }, pageElements)));
    };
    List.prototype._shouldVirtualize = function (props) {
        if (props === void 0) { props = this.props; }
        var onShouldVirtualize = props.onShouldVirtualize;
        return !onShouldVirtualize || onShouldVirtualize(props);
    };
    /**
     * when props.items change or forceUpdate called, throw away cached pages
     */
    List.prototype._invalidatePageCache = function () {
        this._pageCache = {};
    };
    List.prototype._renderPage = function (page) {
        var usePageCache = this.props.usePageCache;
        var cachedPage;
        // if usePageCache is set and cached page element can be found, just return cached page
        if (usePageCache) {
            cachedPage = this._pageCache[page.key];
            if (cachedPage && cachedPage.pageElement) {
                return cachedPage.pageElement;
            }
        }
        var pageStyle = this._getPageStyle(page);
        var _a = this.props.onRenderPage, onRenderPage = _a === void 0 ? this._onRenderPage : _a;
        var pageElement = onRenderPage({
            page: page,
            className: Utilities_1.css('ms-List-page'),
            key: page.key,
            ref: page.key,
            style: pageStyle,
            role: 'presentation'
        }, this._onRenderPage);
        // cache the first page for now since it is re-rendered a lot times unncessarily.
        // todo: a more aggresive caching mechanism is to cache pages constaining the items not changed.
        // now we re-render pages too frequently, for example, props.items increased from 30 to 60, although the
        // first 30 items did not change, we still re-rendered all of them in this props.items change.
        if (usePageCache && page.startIndex === 0) {
            this._pageCache[page.key] = {
                page: page,
                pageElement: pageElement
            };
        }
        return pageElement;
    };
    /** Generate the style object for the page. */
    List.prototype._getPageStyle = function (page) {
        var getPageStyle = this.props.getPageStyle;
        return tslib_1.__assign({}, (getPageStyle ? getPageStyle(page) : {}), (!page.items ? {
            height: page.height
        } : {}));
    };
    List.prototype._onRenderPage = function (pageProps, defaultRender) {
        var _this = this;
        var _a = this.props, onRenderCell = _a.onRenderCell, role = _a.role;
        var _b = pageProps.page, items = _b.items, startIndex = _b.startIndex, divProps = tslib_1.__rest(pageProps, ["page"]);
        // only assign list item role if no role is assigned
        var cellRole = (role === undefined) ? 'listitem' : 'presentation';
        var cells = (items || []).map(function (item, offset) {
            var index = startIndex + offset;
            var itemKey = _this.props.getKey ?
                _this.props.getKey(item, index) :
                item && item.key;
            if (itemKey === null || itemKey === undefined) {
                itemKey = index;
            }
            return (React.createElement("div", { role: cellRole, className: Utilities_1.css('ms-List-cell'), key: itemKey, "data-list-index": index, "data-automationid": 'ListCell' }, onRenderCell && onRenderCell(item, index)));
        });
        return (React.createElement("div", tslib_1.__assign({}, divProps), cells));
    };
    /** Track the last item index focused so that we ensure we keep it rendered. */
    List.prototype._onFocus = function (ev) {
        var target = ev.target;
        while (target !== this.refs.surface) {
            var indexString = target.getAttribute('data-list-index');
            if (indexString) {
                this._focusedIndex = Number(indexString);
                break;
            }
            target = Utilities_1.getParent(target);
        }
    };
    /**
     * Called synchronously to reset the required render range to 0 on scrolling. After async scroll has executed,
     * we will call onAsyncIdle which will reset it back to it's correct value.
     */
    List.prototype._onScroll = function () {
        this._resetRequiredWindows();
    };
    List.prototype._resetRequiredWindows = function () {
        this._requiredWindowsAhead = 0;
        this._requiredWindowsBehind = 0;
    };
    /**
     * Debounced method to asynchronously update the visible region on a scroll event.
     */
    List.prototype._onAsyncScroll = function () {
        this._updateRenderRects();
        // Only update pages when the visible rect falls outside of the materialized rect.
        if (!this._materializedRect || !_isContainedWithin(this._requiredRect, this._materializedRect)) {
            this._updatePages();
        }
        else {
            // console.log('requiredRect contained in materialized', this._requiredRect, this._materializedRect);
        }
    };
    /**
     * This is an async debounced method that will try and increment the windows we render. If we can increment
     * either, we increase the amount we render and re-evaluate.
     */
    List.prototype._onAsyncIdle = function () {
        var _a = this.props, renderedWindowsAhead = _a.renderedWindowsAhead, renderedWindowsBehind = _a.renderedWindowsBehind;
        var _b = this, requiredWindowsAhead = _b._requiredWindowsAhead, requiredWindowsBehind = _b._requiredWindowsBehind;
        var windowsAhead = Math.min(renderedWindowsAhead, requiredWindowsAhead + 1);
        var windowsBehind = Math.min(renderedWindowsBehind, requiredWindowsBehind + 1);
        if (windowsAhead !== requiredWindowsAhead || windowsBehind !== requiredWindowsBehind) {
            // console.log('idling', windowsBehind, windowsAhead);
            this._requiredWindowsAhead = windowsAhead;
            this._requiredWindowsBehind = windowsBehind;
            this._updateRenderRects();
            this._updatePages();
        }
        if (renderedWindowsAhead > windowsAhead || renderedWindowsBehind > windowsBehind) {
            // Async increment on next tick.
            this._onAsyncIdle();
        }
    };
    List.prototype._onAsyncResize = function () {
        this.forceUpdate();
    };
    List.prototype._updatePages = function (props) {
        // console.log('updating pages');
        var _this = this;
        if (props === void 0) { props = this.props; }
        if (!this._requiredRect) {
            this._updateRenderRects(props);
        }
        var newListState = this._buildPages(props);
        var oldListPages = this.state.pages;
        this.setState(newListState, function () {
            // If measured version is invalid since we've updated the DOM
            var heightsChanged = _this._updatePageMeasurements(oldListPages, newListState.pages);
            // On first render, we should re-measure so that we don't get a visual glitch.
            if (heightsChanged) {
                _this._materializedRect = null;
                if (!_this._hasCompletedFirstRender) {
                    _this._hasCompletedFirstRender = true;
                    _this._updatePages(props);
                }
                else {
                    _this._onAsyncScroll();
                }
            }
            else {
                // Enqueue an idle bump.
                _this._onAsyncIdle();
            }
        });
    };
    List.prototype._updatePageMeasurements = function (oldPages, newPages) {
        var renderedIndexes = {};
        var heightChanged = false;
        // when not in virtualize mode, we render all the items without page measurement
        if (!this._shouldVirtualize()) {
            return heightChanged;
        }
        for (var i = 0; i < oldPages.length; i++) {
            var page = oldPages[i];
            if (page.items) {
                renderedIndexes[page.startIndex] = page;
            }
        }
        for (var i = 0; i < newPages.length; i++) {
            var page = newPages[i];
            if (page.items) {
                heightChanged = this._measurePage(page) || heightChanged;
                if (!renderedIndexes[page.startIndex]) {
                    this._onPageAdded(page);
                }
                else {
                    delete renderedIndexes[page.startIndex];
                }
            }
        }
        for (var index in renderedIndexes) {
            if (renderedIndexes.hasOwnProperty(index)) {
                this._onPageRemoved(renderedIndexes[index]);
            }
        }
        return heightChanged;
    };
    /**
     * Given a page, measure its dimensions, update cache.
     * @returns True if the height has changed.
     */
    List.prototype._measurePage = function (page) {
        var hasChangedHeight = false;
        var pageElement = this.refs[page.key];
        var cachedHeight = this._cachedPageHeights[page.startIndex];
        // console.log('   * measure attempt', page.startIndex, cachedHeight);
        if (pageElement && this._shouldVirtualize() && (!cachedHeight || cachedHeight.measureVersion !== this._measureVersion)) {
            var newClientRect = {
                width: pageElement.clientWidth,
                height: pageElement.clientHeight
            };
            if (newClientRect.height || newClientRect.width) {
                hasChangedHeight = page.height !== newClientRect.height;
                // console.warn(' *** expensive page measure', page.startIndex, page.height, newClientRect.height);
                page.height = newClientRect.height;
                this._cachedPageHeights[page.startIndex] = {
                    height: newClientRect.height,
                    measureVersion: this._measureVersion
                };
                this._estimatedPageHeight = Math.round(((this._estimatedPageHeight * this._totalEstimates) + newClientRect.height) /
                    (this._totalEstimates + 1));
                this._totalEstimates++;
            }
        }
        return hasChangedHeight;
    };
    /** Called when a page has been added to the DOM. */
    List.prototype._onPageAdded = function (page) {
        var onPageAdded = this.props.onPageAdded;
        // console.log('page added', page.startIndex, this.state.pages.map(page => page.key).join(', '));
        if (onPageAdded) {
            onPageAdded(page);
        }
    };
    /** Called when a page has been removed from the DOM. */
    List.prototype._onPageRemoved = function (page) {
        var onPageRemoved = this.props.onPageRemoved;
        // console.log('  --- page removed', page.startIndex, this.state.pages.map(page => page.key).join(', '));
        if (onPageRemoved) {
            onPageRemoved(page);
        }
    };
    /** Build up the pages that should be rendered. */
    List.prototype._buildPages = function (props) {
        var items = props.items, startIndex = props.startIndex, renderCount = props.renderCount, getPageHeight = props.getPageHeight;
        renderCount = this._getRenderCount(props);
        var materializedRect = tslib_1.__assign({}, EMPTY_RECT);
        var pages = [];
        var itemsPerPage = 1;
        var pageTop = 0;
        var currentSpacer = null;
        var focusedIndex = this._focusedIndex;
        var endIndex = startIndex + renderCount;
        var shouldVirtualize = this._shouldVirtualize(props);
        // First render is very important to track; when we render cells, we have no idea of estimated page height.
        // So we should default to rendering only the first page so that we can get information.
        // However if the user provides a measure function, let's just assume they know the right heights.
        var isFirstRender = this._estimatedPageHeight === 0 && !getPageHeight;
        var allowedRect = this._allowedRect;
        var _loop_1 = function (itemIndex) {
            var pageSpecification = this_1._getPageSpecification(itemIndex, allowedRect);
            var pageHeight = pageSpecification.height;
            var pageData = pageSpecification.data;
            itemsPerPage = pageSpecification.itemCount;
            var pageBottom = pageTop + pageHeight - 1;
            var isPageRendered = Utilities_1.findIndex(this_1.state.pages, function (page) { return !!page.items && page.startIndex === itemIndex; }) > -1;
            var isPageInAllowedRange = !allowedRect || pageBottom >= allowedRect.top && pageTop <= allowedRect.bottom;
            var isPageInRequiredRange = !this_1._requiredRect || pageBottom >= this_1._requiredRect.top && pageTop <= this_1._requiredRect.bottom;
            var isPageVisible = !isFirstRender && (isPageInRequiredRange || (isPageInAllowedRange && isPageRendered)) || !shouldVirtualize;
            var isPageFocused = focusedIndex >= itemIndex && focusedIndex < (itemIndex + itemsPerPage);
            var isFirstPage = itemIndex === startIndex;
            // console.log('building page', itemIndex, 'pageTop: ' + pageTop, 'inAllowed: ' + isPageInAllowedRange, 'inRequired: ' + isPageInRequiredRange);
            // Only render whats visible, focused, or first page,
            // or when running in fast rendering mode (not in virtualized mode), we render all current items in pages
            if (isPageVisible || isPageFocused || isFirstPage) {
                if (currentSpacer) {
                    pages.push(currentSpacer);
                    currentSpacer = null;
                }
                var itemsInPage = Math.min(itemsPerPage, endIndex - itemIndex);
                var newPage = this_1._createPage(undefined, items.slice(itemIndex, itemIndex + itemsInPage), itemIndex, undefined, undefined, pageData);
                newPage.top = pageTop;
                newPage.height = pageHeight;
                pages.push(newPage);
                if (isPageInRequiredRange && this_1._allowedRect) {
                    _mergeRect(materializedRect, {
                        top: pageTop,
                        bottom: pageBottom,
                        height: pageHeight,
                        left: allowedRect.left,
                        right: allowedRect.right,
                        width: allowedRect.width
                    });
                }
            }
            else {
                if (!currentSpacer) {
                    currentSpacer = this_1._createPage('spacer-' + itemIndex, undefined, itemIndex, 0, undefined, pageData);
                }
                currentSpacer.height = (currentSpacer.height || 0) + (pageBottom - pageTop) + 1;
                currentSpacer.itemCount += itemsPerPage;
            }
            pageTop += (pageBottom - pageTop + 1);
            // in virtualized mode, we render need to render first page then break and measure,
            // otherwise, we render all items without measurement to make rendering fast
            if (isFirstRender && shouldVirtualize) {
                return "break";
            }
        };
        var this_1 = this;
        for (var itemIndex = startIndex; itemIndex < endIndex; itemIndex += itemsPerPage) {
            var state_1 = _loop_1(itemIndex);
            if (state_1 === "break")
                break;
        }
        if (currentSpacer) {
            currentSpacer.key = 'spacer-end';
            pages.push(currentSpacer);
        }
        this._materializedRect = materializedRect;
        // console.log('materialized: ', materializedRect);
        return {
            pages: pages,
            measureVersion: this._measureVersion
        };
    };
    List.prototype._getPageSpecification = function (itemIndex, visibleRect) {
        var getPageSpecification = this.props.getPageSpecification;
        if (getPageSpecification) {
            var pageData = getPageSpecification(itemIndex, visibleRect);
            var _a = pageData.itemCount, itemCount = _a === void 0 ? this._getItemCountForPage(itemIndex, visibleRect) : _a;
            var _b = pageData.height, height = _b === void 0 ? this._getPageHeight(itemIndex, itemCount, visibleRect) : _b;
            return {
                itemCount: itemCount,
                height: height,
                data: pageData.data
            };
        }
        else {
            var itemCount = this._getItemCountForPage(itemIndex, visibleRect);
            return {
                itemCount: itemCount,
                height: this._getPageHeight(itemIndex, itemCount, visibleRect)
            };
        }
    };
    /**
     * Get the pixel height of a give page. Will use the props getPageHeight first, and if not provided, fallback to
     * cached height, or estimated page height, or default page height.
     */
    List.prototype._getPageHeight = function (itemIndex, itemsPerPage, visibleRect) {
        if (this.props.getPageHeight) {
            return this.props.getPageHeight(itemIndex, visibleRect);
        }
        else {
            var cachedHeight = (this._cachedPageHeights[itemIndex]);
            return cachedHeight ? cachedHeight.height : (this._estimatedPageHeight || DEFAULT_PAGE_HEIGHT);
        }
    };
    List.prototype._getItemCountForPage = function (itemIndex, visibileRect) {
        var itemsPerPage = this.props.getItemCountForPage ? this.props.getItemCountForPage(itemIndex, visibileRect) : DEFAULT_ITEMS_PER_PAGE;
        return itemsPerPage ? itemsPerPage : DEFAULT_ITEMS_PER_PAGE;
    };
    List.prototype._createPage = function (pageKey, items, startIndex, count, style, data) {
        if (startIndex === void 0) { startIndex = -1; }
        if (count === void 0) { count = items ? items.length : 0; }
        if (style === void 0) { style = {}; }
        if (data === void 0) { data = undefined; }
        pageKey = pageKey || ('page-' + startIndex);
        var cachedPage = this._pageCache[pageKey];
        if (cachedPage && cachedPage.page) {
            return cachedPage.page;
        }
        // Fill undefined cells because array.map will ignore undefined cells.
        if (items) {
            for (var i = 0; i < items.length; i++) {
                items[i] = items[i] || undefined;
            }
        }
        return {
            key: pageKey,
            startIndex: startIndex,
            itemCount: count,
            items: items,
            style: style || {},
            top: 0,
            height: 0,
            data: data
        };
    };
    List.prototype._getRenderCount = function (props) {
        var _a = props || this.props, items = _a.items, startIndex = _a.startIndex, renderCount = _a.renderCount;
        return (renderCount === undefined ? (items ? items.length - startIndex : 0) : renderCount);
    };
    /** Calculate the visible rect within the list where top: 0 and left: 0 is the top/left of the list. */
    List.prototype._updateRenderRects = function (props, forceUpdate) {
        props = props || this.props;
        var renderedWindowsAhead = props.renderedWindowsAhead, renderedWindowsBehind = props.renderedWindowsBehind;
        var pages = this.state.pages;
        // when not in virtualize mode, we render all items without measurement to optimize page rendering perf
        if (!this._shouldVirtualize()) {
            return;
        }
        var surfaceRect = this._surfaceRect;
        var scrollHeight = this._scrollElement && this._scrollElement.scrollHeight;
        var scrollTop = this._scrollElement ? this._scrollElement.scrollTop : 0;
        // WARNING: EXPENSIVE CALL! We need to know the surface top relative to the window.
        // This needs to be called to recalculate when new pages should be loaded.
        // We check to see how far we've scrolled and if it's further than a third of a page we run it again.
        if (forceUpdate ||
            !pages ||
            !this._surfaceRect ||
            !scrollHeight ||
            scrollHeight !== this._scrollHeight ||
            Math.abs(this._scrollTop - scrollTop) > this._estimatedPageHeight / 3) {
            surfaceRect = this._surfaceRect = _measureSurfaceRect(this.refs.surface);
            this._scrollTop = scrollTop;
        }
        // If the scroll height has changed, something in the container likely resized and
        // we should redo the page heights incase their content resized.
        if (forceUpdate ||
            !scrollHeight ||
            scrollHeight !== this._scrollHeight) {
            this._measureVersion++;
        }
        this._scrollHeight = scrollHeight;
        // If the surface is above the container top or below the container bottom, or if this is not the first
        // render return empty rect.
        // The first time the list gets rendered we need to calculate the rectangle. The width of the list is
        // used to calculate the width of the list items.
        var visibleTop = Math.max(0, -surfaceRect.top);
        var visibleRect = {
            top: visibleTop,
            left: surfaceRect.left,
            bottom: visibleTop + window.innerHeight,
            right: surfaceRect.right,
            width: surfaceRect.width,
            height: window.innerHeight
        };
        // The required/allowed rects are adjusted versions of the visible rect.
        this._requiredRect = _expandRect(visibleRect, this._requiredWindowsBehind, this._requiredWindowsAhead);
        this._allowedRect = _expandRect(visibleRect, renderedWindowsBehind, renderedWindowsAhead);
    };
    List.defaultProps = {
        startIndex: 0,
        onRenderCell: function (item, index, containsFocus) { return (React.createElement("div", null, (item && item.name) || '')); },
        renderedWindowsAhead: DEFAULT_RENDERED_WINDOWS_AHEAD,
        renderedWindowsBehind: DEFAULT_RENDERED_WINDOWS_BEHIND
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], List.prototype, "_onRenderPage", null);
    return List;
}(Utilities_1.BaseComponent));
exports.List = List;
function _expandRect(rect, pagesBefore, pagesAfter) {
    var top = rect.top - (pagesBefore * rect.height);
    var height = rect.height + ((pagesBefore + pagesAfter) * rect.height);
    return {
        top: top,
        bottom: top + height,
        height: height,
        left: rect.left,
        right: rect.right,
        width: rect.width
    };
}
function _isContainedWithin(innerRect, outerRect) {
    return (innerRect.top >= outerRect.top &&
        innerRect.left >= outerRect.left &&
        innerRect.bottom <= outerRect.bottom &&
        innerRect.right <= outerRect.right);
}
function _mergeRect(targetRect, newRect) {
    targetRect.top = (newRect.top < targetRect.top || targetRect.top === -1) ? newRect.top : targetRect.top;
    targetRect.left = (newRect.left < targetRect.left || targetRect.left === -1) ? newRect.left : targetRect.left;
    targetRect.bottom = (newRect.bottom > targetRect.bottom || targetRect.bottom === -1) ? newRect.bottom : targetRect.bottom;
    targetRect.right = (newRect.right > targetRect.right || targetRect.right === -1) ? newRect.right : targetRect.right;
    targetRect.width = targetRect.right - targetRect.left + 1;
    targetRect.height = targetRect.bottom - targetRect.top + 1;
    return targetRect;
}


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(150), exports);


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var Utilities_1 = __webpack_require__(2);
var Spinner_Props_1 = __webpack_require__(51);
var stylesImport = __webpack_require__(153);
var styles = stylesImport;
var Spinner = (function (_super) {
    tslib_1.__extends(Spinner, _super);
    function Spinner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spinner.prototype.render = function () {
        var _a = this.props, type = _a.type, size = _a.size, label = _a.label, className = _a.className, ariaLive = _a.ariaLive, ariaLabel = _a.ariaLabel; // TODO remove deprecated type property at >= 2.0.0
        var statusMessage = ariaLabel || label;
        return (React.createElement("div", { className: Utilities_1.css('ms-Spinner', styles.root, className) },
            React.createElement("div", { className: Utilities_1.css('ms-Spinner-circle', styles.circle, (_b = {},
                    _b['ms-Spinner--xSmall ' + styles.circleIsXSmall] = size === Spinner_Props_1.SpinnerSize.xSmall,
                    _b['ms-Spinner--small ' + styles.circleIsSmall] = size === Spinner_Props_1.SpinnerSize.small,
                    _b['ms-Spinner--medium ' + styles.circleIsMedium] = size === Spinner_Props_1.SpinnerSize.medium,
                    _b['ms-Spinner--large ' + styles.circleIsLarge] = size === Spinner_Props_1.SpinnerSize.large,
                    _b['ms-Spinner--normal ' + styles.circleIsTypeMedium] = type === Spinner_Props_1.SpinnerType.normal,
                    _b['ms-Spinner--large ' + styles.circleIsTypeLarge] = type === Spinner_Props_1.SpinnerType.large // TODO remove deprecated value at >= 2.0.0
                ,
                    _b)) }),
            label && React.createElement("div", { className: Utilities_1.css('ms-Spinner-label', styles.label) }, label),
            statusMessage &&
                React.createElement("div", { role: 'status', "aria-live": ariaLive },
                    React.createElement(Utilities_1.DelayedRender, null,
                        React.createElement("div", { className: styles.screenReaderOnly }, statusMessage)))));
        var _b;
    };
    Spinner.defaultProps = {
        size: Spinner_Props_1.SpinnerSize.medium,
        ariaLive: 'polite'
    };
    return Spinner;
}(Utilities_1.BaseComponent));
exports.Spinner = Spinner;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
var load_themed_styles_1 = __webpack_require__(3);
load_themed_styles_1.loadStyles([{ "rawString": "@-webkit-keyframes spinAnimation_3da8fbf8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinAnimation_3da8fbf8{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.root_3da8fbf8>.circle_3da8fbf8{margin:auto;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:50%;width:100%;height:100%;border:1.5px solid " }, { "theme": "themeLight", "defaultValue": "#c7e0f4" }, { "rawString": ";border-top-color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";-webkit-animation:spinAnimation_3da8fbf8 1.3s infinite cubic-bezier(0.53, 0.21, 0.29, 0.67);animation:spinAnimation_3da8fbf8 1.3s infinite cubic-bezier(0.53, 0.21, 0.29, 0.67)}.root_3da8fbf8>.circle_3da8fbf8.circleIsXSmall_3da8fbf8{width:12px;height:12px}.root_3da8fbf8>.circle_3da8fbf8.circleIsSmall_3da8fbf8{width:16px;height:16px}.root_3da8fbf8>.circle_3da8fbf8.circleIsTypeMedium_3da8fbf8,.root_3da8fbf8>.circle_3da8fbf8.circleIsMedium_3da8fbf8{width:20px;height:20px}.root_3da8fbf8>.circle_3da8fbf8.circleIsTypeLarge_3da8fbf8,.root_3da8fbf8>.circle_3da8fbf8.circleIsLarge_3da8fbf8{width:28px;height:28px}.root_3da8fbf8 .label_3da8fbf8{color:" }, { "theme": "themePrimary", "defaultValue": "#0078d7" }, { "rawString": ";margin-top:10px;text-align:center}.root_3da8fbf8 .screenReaderOnly_3da8fbf8{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}@media screen and (-ms-high-contrast: active){.root_3da8fbf8>.circle_3da8fbf8{border-top-style:none}}\n" }]);
exports.root = "root_3da8fbf8";
exports.circle = "circle_3da8fbf8";
exports.spinAnimation = "spinAnimation_3da8fbf8";
exports.circleIsXSmall = "circleIsXSmall_3da8fbf8";
exports.circleIsSmall = "circleIsSmall_3da8fbf8";
exports.circleIsTypeMedium = "circleIsTypeMedium_3da8fbf8";
exports.circleIsMedium = "circleIsMedium_3da8fbf8";
exports.circleIsTypeLarge = "circleIsTypeLarge_3da8fbf8";
exports.circleIsLarge = "circleIsLarge_3da8fbf8";
exports.label = "label_3da8fbf8";
exports.screenReaderOnly = "screenReaderOnly_3da8fbf8";


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(152), exports);
tslib_1.__exportStar(__webpack_require__(51), exports);


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utilities_1 = __webpack_require__(2);
var BaseDecorator = (function (_super) {
    tslib_1.__extends(BaseDecorator, _super);
    function BaseDecorator() {
        var _this = _super.call(this) || this;
        _this._shouldUpdateComponentRef = false;
        _this._updateComposedComponentRef = _this._updateComposedComponentRef.bind(_this);
        return _this;
    }
    /**
     * Updates the ref to the component composed by the decorator, which will also take care of hoisting
     * (and unhoisting as appropriate) methods from said component.
     *
     * Pass this method as the argument to the 'ref' property of the composed component.
     */
    BaseDecorator.prototype._updateComposedComponentRef = function (composedComponentInstance) {
        this._composedComponentInstance = composedComponentInstance;
        if (composedComponentInstance) {
            this._hoisted = Utilities_1.hoistMethods(this, composedComponentInstance);
        }
        else if (this._hoisted) {
            Utilities_1.unhoistMethods(this, this._hoisted);
        }
    };
    return BaseDecorator;
}(Utilities_1.BaseComponent));
exports.BaseDecorator = BaseDecorator;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var BaseDecorator_1 = __webpack_require__(155);
var Utilities_1 = __webpack_require__(2);
var RESIZE_DELAY = 500;
var MAX_RESIZE_ATTEMPTS = 3;
function withViewport(ComposedComponent) {
    return (function (_super) {
        tslib_1.__extends(WithViewportComponent, _super);
        function WithViewportComponent() {
            var _this = _super.call(this) || this;
            /* Note: using lambda here because decorators don't seem to work in decorators. */
            _this._updateViewport = function (withForceUpdate) {
                var viewport = _this.state.viewport;
                var viewportElement = _this.refs.root;
                var scrollElement = Utilities_1.findScrollableParent(viewportElement);
                var scrollRect = Utilities_1.getRect(scrollElement);
                var clientRect = Utilities_1.getRect(viewportElement);
                var updateComponent = function () {
                    if (withForceUpdate && _this._composedComponentInstance) {
                        _this._composedComponentInstance.forceUpdate();
                    }
                };
                var isSizeChanged = ((clientRect && clientRect.width) !== viewport.width ||
                    (scrollRect && scrollRect.height) !== viewport.height);
                if (isSizeChanged && _this._resizeAttempts < MAX_RESIZE_ATTEMPTS && clientRect && scrollRect) {
                    _this._resizeAttempts++;
                    _this.setState({
                        viewport: {
                            width: clientRect.width,
                            height: scrollRect.height
                        }
                    }, function () { _this._updateViewport(withForceUpdate); });
                }
                else {
                    _this._resizeAttempts = 0;
                    updateComponent();
                }
            };
            _this._resizeAttempts = 0;
            _this.state = {
                viewport: {
                    width: 0,
                    height: 0
                }
            };
            return _this;
        }
        WithViewportComponent.prototype.componentDidMount = function () {
            this._onAsyncResize = this._async.debounce(this._onAsyncResize, RESIZE_DELAY, {
                leading: false
            });
            this._events.on(window, 'resize', this._onAsyncResize);
            var skipViewportMeasures = this.props.skipViewportMeasures;
            if (!skipViewportMeasures) {
                this._updateViewport();
            }
        };
        WithViewportComponent.prototype.componentWillUnmount = function () {
            this._events.dispose();
        };
        WithViewportComponent.prototype.render = function () {
            var viewport = this.state.viewport;
            var skipViewportMeasures = this.props.skipViewportMeasures;
            var isViewportVisible = skipViewportMeasures || (viewport.width > 0 && viewport.height > 0);
            return (React.createElement("div", { className: 'ms-Viewport', ref: 'root', style: { minWidth: 1, minHeight: 1 } }, isViewportVisible && (React.createElement(ComposedComponent, tslib_1.__assign({ ref: this._updateComposedComponentRef, viewport: viewport }, this.props)))));
        };
        WithViewportComponent.prototype.forceUpdate = function () {
            this._updateViewport(true);
        };
        WithViewportComponent.prototype._onAsyncResize = function () {
            this._updateViewport();
        };
        return WithViewportComponent;
    }(BaseDecorator_1.BaseDecorator));
}
exports.withViewport = withViewport;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ReactDOM = __webpack_require__(8);
var Utilities_1 = __webpack_require__(2);
var DISTANCE_FOR_DRAG_SQUARED = 25; // the minimum mouse move distance to treat it as drag event
var MOUSEDOWN_PRIMARY_BUTTON = 0; // for mouse down event we are using ev.button property, 0 means left button
var MOUSEMOVE_PRIMARY_BUTTON = 1; // for mouse move event we are using ev.buttons property, 1 means left button
var DragDropHelper = (function () {
    function DragDropHelper(params) {
        this._selection = params.selection;
        this._dragEnterCounts = {};
        this._activeTargets = {};
        this._lastId = 0;
        this._distanceSquaredForDrag = typeof params.minimumPixelsForDrag === 'number' ?
            params.minimumPixelsForDrag * params.minimumPixelsForDrag : DISTANCE_FOR_DRAG_SQUARED;
        this._events = new Utilities_1.EventGroup(this);
        // clear drag data when mouse up, use capture event to ensure it will be run
        this._events.on(document.body, 'mouseup', this._onMouseUp.bind(this), true);
        this._events.on(document, 'mouseup', this._onDocumentMouseUp.bind(this), true);
    }
    DragDropHelper.prototype.dispose = function () {
        this._events.dispose();
    };
    DragDropHelper.prototype.subscribe = function (root, events, dragDropOptions) {
        var _this = this;
        var _a = dragDropOptions.key, key = _a === void 0 ? "" + ++this._lastId : _a;
        var handlers = [];
        var onDragStart;
        var onDragLeave;
        var onDragEnter;
        var onDragEnd;
        var onDrop;
        var onDragOver;
        var onMouseDown;
        var isDraggable;
        var isDroppable;
        var activeTarget;
        if (dragDropOptions && root) {
            var eventMap = dragDropOptions.eventMap, context_1 = dragDropOptions.context, updateDropState_1 = dragDropOptions.updateDropState;
            var dragDropTarget = {
                root: root,
                options: dragDropOptions,
                key: key
            };
            isDraggable = this._isDraggable(dragDropTarget);
            isDroppable = this._isDroppable(dragDropTarget);
            if (isDraggable || isDroppable) {
                if (eventMap) {
                    for (var _i = 0, eventMap_1 = eventMap; _i < eventMap_1.length; _i++) {
                        var event_1 = eventMap_1[_i];
                        var handler = {
                            callback: event_1.callback.bind(null, context_1),
                            eventName: event_1.eventName
                        };
                        handlers.push(handler);
                        this._events.on(root, handler.eventName, handler.callback);
                    }
                }
            }
            if (isDroppable) {
                // If the target is droppable, wire up global event listeners to track drop-related events.
                onDragLeave = function (event) {
                    if (!event.isHandled) {
                        event.isHandled = true;
                        _this._dragEnterCounts[key]--;
                        if (_this._dragEnterCounts[key] === 0) {
                            updateDropState_1(false /* isDropping */, event);
                        }
                    }
                };
                onDragEnter = function (event) {
                    event.preventDefault(); // needed for IE
                    if (!event.isHandled) {
                        event.isHandled = true;
                        _this._dragEnterCounts[key]++;
                        if (_this._dragEnterCounts[key] === 1) {
                            updateDropState_1(true /* isDropping */, event);
                        }
                    }
                };
                onDragEnd = function (event) {
                    _this._dragEnterCounts[key] = 0;
                    updateDropState_1(false /* isDropping */, event);
                };
                onDrop = function (event) {
                    _this._dragEnterCounts[key] = 0;
                    updateDropState_1(false /* isDropping */, event);
                    if (dragDropOptions.onDrop) {
                        dragDropOptions.onDrop(dragDropOptions.context.data, event);
                    }
                };
                onDragOver = function (event) {
                    event.preventDefault();
                };
                this._dragEnterCounts[key] = 0;
                // dragenter and dragleave will be fired when hover to the child element
                // but we only want to change state when enter or leave the current element
                // use the count to ensure it.
                events.on(root, 'dragenter', onDragEnter);
                events.on(root, 'dragleave', onDragLeave);
                events.on(root, 'dragend', onDragEnd);
                events.on(root, 'drop', onDrop);
                events.on(root, 'dragover', onDragOver);
            }
            if (isDraggable) {
                // If the target is draggable, wire up local event listeners for mouse events.
                onMouseDown = this._onMouseDown.bind(this, dragDropTarget);
                onDragEnd = this._onDragEnd.bind(this, dragDropTarget);
                // We need to add in data so that on Firefox we show the ghost element when dragging
                onDragStart = function (event) {
                    event.dataTransfer.setData('id', root.id);
                };
                events.on(root, 'dragstart', onDragStart);
                events.on(root, 'mousedown', onMouseDown);
                events.on(root, 'dragend', onDragEnd);
            }
            activeTarget = {
                target: dragDropTarget,
                dispose: function () {
                    if (_this._activeTargets[key] === activeTarget) {
                        delete _this._activeTargets[key];
                    }
                    if (root) {
                        for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
                            var handler = handlers_1[_i];
                            _this._events.off(root, handler.eventName, handler.callback);
                        }
                        if (isDroppable) {
                            events.off(root, 'dragenter', onDragEnter);
                            events.off(root, 'dragleave', onDragLeave);
                            events.off(root, 'dragend', onDragEnd);
                            events.off(root, 'dragover', onDragOver);
                            events.off(root, 'drop', onDrop);
                        }
                        if (isDraggable) {
                            events.off(root, 'dragstart', onDragStart);
                            events.off(root, 'mousedown', onMouseDown);
                            events.off(root, 'dragend', onDragEnd);
                        }
                    }
                }
            };
            this._activeTargets[key] = activeTarget;
        }
        return {
            key: key,
            dispose: function () {
                if (activeTarget) {
                    activeTarget.dispose();
                }
            }
        };
    };
    DragDropHelper.prototype.unsubscribe = function (root, key) {
        var activeTarget = this._activeTargets[key];
        if (activeTarget) {
            activeTarget.dispose();
        }
    };
    DragDropHelper.prototype._onDragEnd = function (target, event) {
        var options = target.options;
        if (options.onDragEnd) {
            options.onDragEnd(options.context.data, event);
        }
    };
    /**
     * clear drag data when mouse up on body
     */
    DragDropHelper.prototype._onMouseUp = function (event) {
        this._isDragging = false;
        if (this._dragData) {
            for (var _i = 0, _a = Object.keys(this._activeTargets); _i < _a.length; _i++) {
                var key = _a[_i];
                var activeTarget = this._activeTargets[key];
                if (activeTarget.target.root) {
                    this._events.off(activeTarget.target.root, 'mousemove');
                    this._events.off(activeTarget.target.root, 'mouseleave');
                }
            }
            if (this._dragData.dropTarget) {
                // raise dragleave event to let dropTarget know it need to remove dropping style
                Utilities_1.EventGroup.raise(this._dragData.dropTarget.root, 'dragleave');
                Utilities_1.EventGroup.raise(this._dragData.dropTarget.root, 'drop');
            }
        }
        this._dragData = null;
    };
    /**
     * clear drag data when mouse up outside of the document
     */
    DragDropHelper.prototype._onDocumentMouseUp = function (event) {
        if (event.target === document.documentElement) {
            this._onMouseUp(event);
        }
    };
    /**
     * when mouse move over a new drop target while dragging some items,
     * fire dragleave on the old target and fire dragenter to the new target
     * The target will handle style change on dragenter and dragleave events.
     */
    DragDropHelper.prototype._onMouseMove = function (target, event) {
        var 
        // use buttons property here since ev.button in some edge case is not updating well during the move.
        // but firefox doesn't support it, so we set the default value when it is not defined.
        _a = event.buttons, 
        // use buttons property here since ev.button in some edge case is not updating well during the move.
        // but firefox doesn't support it, so we set the default value when it is not defined.
        buttons = _a === void 0 ? MOUSEMOVE_PRIMARY_BUTTON : _a;
        if (this._dragData && buttons !== MOUSEMOVE_PRIMARY_BUTTON) {
            // cancel mouse down event and return early when the primary button is not pressed
            this._onMouseUp(event);
            return;
        }
        var root = target.root, options = target.options, key = target.key;
        if (this._isDragging) {
            if (this._isDroppable(target)) {
                // we can have nested drop targets in the DOM, like a folder inside a group. In that case, when we drag into
                // the inner target (folder), we first set dropTarget to the inner element. But the same event is bubbled to the
                // outer target too, and we need to prevent the outer one from taking over.
                // So, check if the last dropTarget is not a child of the current.
                if (this._dragData) {
                    if (this._dragData.dropTarget &&
                        this._dragData.dropTarget.key !== key &&
                        !this._isChild(root, this._dragData.dropTarget.root)) {
                        Utilities_1.EventGroup.raise(this._dragData.dropTarget.root, 'dragleave');
                        this._dragData.dropTarget = undefined;
                    }
                    if (!this._dragData.dropTarget) {
                        Utilities_1.EventGroup.raise(root, 'dragenter');
                        this._dragData.dropTarget = target;
                    }
                }
            }
        }
        else if (this._dragData) {
            if (this._isDraggable(target)) {
                var xDiff = this._dragData.clientX - event.clientX;
                var yDiff = this._dragData.clientY - event.clientY;
                if (xDiff * xDiff + yDiff * yDiff >= this._distanceSquaredForDrag) {
                    if (this._dragData.dragTarget) {
                        this._isDragging = true;
                        if (options.onDragStart) {
                            options.onDragStart(options.context.data, options.context.index, this._selection.getSelection(), event);
                        }
                    }
                }
            }
        }
    };
    /**
     * when mouse leave a target while dragging some items, fire dragleave to the target
     */
    DragDropHelper.prototype._onMouseLeave = function (target, event) {
        if (this._isDragging) {
            if (this._dragData && this._dragData.dropTarget && this._dragData.dropTarget.key === target.key) {
                Utilities_1.EventGroup.raise(target.root, 'dragleave');
                this._dragData.dropTarget = undefined;
            }
        }
    };
    /**
     * when mouse down on a draggable item, we start to track dragdata.
     */
    DragDropHelper.prototype._onMouseDown = function (target, event) {
        if (event.button !== MOUSEDOWN_PRIMARY_BUTTON) {
            // Ignore anything except the primary button.
            return;
        }
        if (this._isDraggable(target)) {
            this._dragData = {
                clientX: event.clientX,
                clientY: event.clientY,
                eventTarget: event.target,
                dragTarget: target
            };
            for (var _i = 0, _a = Object.keys(this._activeTargets); _i < _a.length; _i++) {
                var key = _a[_i];
                var activeTarget = this._activeTargets[key];
                if (activeTarget.target.root) {
                    this._events.on(activeTarget.target.root, 'mousemove', this._onMouseMove.bind(this, activeTarget.target));
                    this._events.on(activeTarget.target.root, 'mouseleave', this._onMouseLeave.bind(this, activeTarget.target));
                }
            }
        }
        else {
            this._dragData = null;
        }
    };
    /**
     * determine whether the child target is a descendant of the parent
     */
    DragDropHelper.prototype._isChild = function (parent, child) {
        var parentElement = ReactDOM.findDOMNode(parent);
        var childElement = ReactDOM.findDOMNode(child);
        while (childElement && childElement.parentElement) {
            if (childElement.parentElement === parentElement) {
                return true;
            }
            childElement = childElement.parentElement;
        }
        return false;
    };
    DragDropHelper.prototype._isDraggable = function (target) {
        var options = target.options;
        return !!(options.canDrag && options.canDrag(options.context.data));
    };
    DragDropHelper.prototype._isDroppable = function (target) {
        // TODO: take the drag item into consideration to prevent dragging an item into the same group
        var options = target.options;
        var dragContext = this._dragData && this._dragData.dragTarget ? this._dragData.dragTarget.options.context : undefined;
        return !!(options.canDrop && options.canDrop(options.context, dragContext));
    };
    return DragDropHelper;
}());
exports.DragDropHelper = DragDropHelper;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = __webpack_require__(6);
var Utilities_1 = __webpack_require__(2);
var Selection = (function () {
    function Selection(options) {
        if (options === void 0) { options = {}; }
        var onSelectionChanged = options.onSelectionChanged, getKey = options.getKey, _a = options.canSelectItem, canSelectItem = _a === void 0 ? function (item) { return true; } : _a, _b = options.selectionMode, selectionMode = _b === void 0 ? interfaces_1.SelectionMode.multiple : _b;
        this.mode = selectionMode;
        this._getKey = getKey || defaultGetKey;
        this._changeEventSuppressionCount = 0;
        this._exemptedCount = 0;
        this._anchoredIndex = 0;
        this._unselectableCount = 0;
        this._onSelectionChanged = onSelectionChanged;
        this._canSelectItem = canSelectItem;
        this.setItems([], true);
    }
    Selection.prototype.canSelectItem = function (item) {
        return this._canSelectItem(item);
    };
    Selection.prototype.getKey = function (item, index) {
        var key = this._getKey(item, index);
        return (typeof key === 'number' || key) ?
            "" + key :
            '';
    };
    Selection.prototype.setChangeEvents = function (isEnabled, suppressChange) {
        this._changeEventSuppressionCount += isEnabled ? -1 : 1;
        if (this._changeEventSuppressionCount === 0 && this._hasChanged) {
            this._hasChanged = false;
            if (!suppressChange) {
                this._change();
            }
        }
    };
    /**
     * Selection needs the items, call this method to set them. If the set
     * of items is the same, this will re-evaluate selection and index maps.
     * Otherwise, shouldClear should be set to true, so that selection is
     * cleared.
     */
    Selection.prototype.setItems = function (items, shouldClear) {
        if (shouldClear === void 0) { shouldClear = true; }
        var newKeyToIndexMap = {};
        var newUnselectableIndices = {};
        var hasSelectionChanged = false;
        this.setChangeEvents(false);
        // Reset the unselectable count.
        this._unselectableCount = 0;
        // Build lookup table for quick selection evaluation.
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item) {
                var key = this.getKey(item, i);
                if (key) {
                    newKeyToIndexMap[key] = i;
                }
            }
            newUnselectableIndices[i] = item && !this.canSelectItem(item);
            if (newUnselectableIndices[i]) {
                this._unselectableCount++;
            }
        }
        if (shouldClear) {
            this.setAllSelected(false);
        }
        // Check the exemption list for discrepencies.
        var newExemptedIndicies = {};
        for (var indexProperty in this._exemptedIndices) {
            if (this._exemptedIndices.hasOwnProperty(indexProperty)) {
                var index = Number(indexProperty);
                var item = this._items[index];
                var exemptKey = item ? this.getKey(item, Number(index)) : undefined;
                var newIndex = exemptKey ? newKeyToIndexMap[exemptKey] : index;
                if (newIndex === undefined) {
                    // We don't know the index of the item any more so it's either moved or removed.
                    // In this case we reset the entire selection.
                    this.setAllSelected(false);
                    break;
                }
                else {
                    // We know the new index of the item. update the existing exemption table.
                    newExemptedIndicies[newIndex] = true;
                    hasSelectionChanged = hasSelectionChanged || (newIndex !== index);
                }
            }
        }
        this._exemptedIndices = newExemptedIndicies;
        this._keyToIndexMap = newKeyToIndexMap;
        this._unselectableIndices = newUnselectableIndices;
        this._items = items || [];
        if (hasSelectionChanged) {
            this._change();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.getItems = function () {
        return this._items;
    };
    Selection.prototype.getSelection = function () {
        if (!this._selectedItems) {
            this._selectedItems = [];
            for (var i = 0; i < this._items.length; i++) {
                if (this.isIndexSelected(i)) {
                    this._selectedItems.push(this._items[i]);
                }
            }
        }
        return this._selectedItems;
    };
    Selection.prototype.getSelectedCount = function () {
        return this._isAllSelected ? (this._items.length - this._exemptedCount - this._unselectableCount) : (this._exemptedCount);
    };
    Selection.prototype.isRangeSelected = function (fromIndex, count) {
        if (count === 0) {
            return false;
        }
        var endIndex = fromIndex + count;
        for (var i = fromIndex; i < endIndex; i++) {
            if (!this.isIndexSelected(i)) {
                return false;
            }
        }
        return true;
    };
    Selection.prototype.isAllSelected = function () {
        var selectableCount = this._items.length - this._unselectableCount;
        // In single mode, we can only have a max of 1 item.
        if (this.mode === interfaces_1.SelectionMode.single) {
            selectableCount = Math.min(selectableCount, 1);
        }
        return ((this.count > 0) &&
            (this._isAllSelected && this._exemptedCount === 0) ||
            (!this._isAllSelected && (this._exemptedCount === selectableCount) && selectableCount > 0));
    };
    Selection.prototype.isKeySelected = function (key) {
        var index = this._keyToIndexMap[key];
        return this.isIndexSelected(index);
    };
    Selection.prototype.isIndexSelected = function (index) {
        return !!((this.count > 0) &&
            (this._isAllSelected && !this._exemptedIndices[index] && !this._unselectableIndices[index]) ||
            (!this._isAllSelected && this._exemptedIndices[index]));
    };
    Selection.prototype.setAllSelected = function (isAllSelected) {
        if (isAllSelected && this.mode !== interfaces_1.SelectionMode.multiple) {
            return;
        }
        var selectableCount = this._items ? (this._items.length - this._unselectableCount) : 0;
        if (selectableCount > 0 && (this._exemptedCount > 0 || isAllSelected !== this._isAllSelected)) {
            this._exemptedIndices = {};
            this._exemptedCount = 0;
            this._isAllSelected = isAllSelected;
            this._updateCount();
        }
    };
    Selection.prototype.setKeySelected = function (key, isSelected, shouldAnchor) {
        var index = this._keyToIndexMap[key];
        if (index >= 0) {
            this.setIndexSelected(index, isSelected, shouldAnchor);
        }
    };
    Selection.prototype.setIndexSelected = function (index, isSelected, shouldAnchor) {
        if (this.mode === interfaces_1.SelectionMode.none) {
            return;
        }
        // Clamp the index.
        index = Math.min(Math.max(0, index), this._items.length - 1);
        // No-op on out of bounds selections.
        if (index < 0 || index >= this._items.length) {
            return;
        }
        this.setChangeEvents(false);
        var isExempt = this._exemptedIndices[index];
        var hasChanged = false;
        var canSelect = !this._unselectableIndices[index];
        if (canSelect) {
            if (isSelected && this.mode === interfaces_1.SelectionMode.single) {
                // If this is single-select, the previous selection should be removed.
                this.setAllSelected(false);
            }
            // Determine if we need to remove the exemption.
            if (isExempt && ((isSelected && this._isAllSelected) ||
                (!isSelected && !this._isAllSelected))) {
                hasChanged = true;
                delete this._exemptedIndices[index];
                this._exemptedCount--;
            }
            // Determine if we need to add the exemption.
            if (!isExempt && ((isSelected && !this._isAllSelected) ||
                (!isSelected && this._isAllSelected))) {
                hasChanged = true;
                this._exemptedIndices[index] = true;
                this._exemptedCount++;
            }
            if (shouldAnchor) {
                this._anchoredIndex = index;
            }
        }
        if (hasChanged) {
            this._updateCount();
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.selectToKey = function (key, clearSelection) {
        this.selectToIndex(this._keyToIndexMap[key], clearSelection);
    };
    Selection.prototype.selectToIndex = function (index, clearSelection) {
        if (this.mode === interfaces_1.SelectionMode.none) {
            return;
        }
        if (this.mode === interfaces_1.SelectionMode.single) {
            this.setIndexSelected(index, true, true);
            return;
        }
        var anchorIndex = this._anchoredIndex || 0;
        var startIndex = Math.min(index, anchorIndex);
        var endIndex = Math.max(index, anchorIndex);
        this.setChangeEvents(false);
        if (clearSelection) {
            this.setAllSelected(false);
        }
        for (; startIndex <= endIndex; startIndex++) {
            this.setIndexSelected(startIndex, true, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype.toggleAllSelected = function () {
        this.setAllSelected(!this.isAllSelected());
    };
    Selection.prototype.toggleKeySelected = function (key) {
        this.setKeySelected(key, !this.isKeySelected(key), true);
    };
    Selection.prototype.toggleIndexSelected = function (index) {
        this.setIndexSelected(index, !this.isIndexSelected(index), true);
    };
    Selection.prototype.toggleRangeSelected = function (fromIndex, count) {
        if (this.mode === interfaces_1.SelectionMode.none) {
            return;
        }
        var isRangeSelected = this.isRangeSelected(fromIndex, count);
        var endIndex = fromIndex + count;
        if (this.mode === interfaces_1.SelectionMode.single && count > 1) {
            return;
        }
        this.setChangeEvents(false);
        for (var i = fromIndex; i < endIndex; i++) {
            this.setIndexSelected(i, !isRangeSelected, false);
        }
        this.setChangeEvents(true);
    };
    Selection.prototype._updateCount = function () {
        this.count = this.getSelectedCount();
        this._change();
    };
    Selection.prototype._change = function () {
        if (this._changeEventSuppressionCount === 0) {
            this._selectedItems = null;
            Utilities_1.EventGroup.raise(this, interfaces_1.SELECTION_CHANGE);
            if (this._onSelectionChanged) {
                this._onSelectionChanged();
            }
        }
        else {
            this._hasChanged = true;
        }
    };
    return Selection;
}());
exports.Selection = Selection;
function defaultGetKey(item, index) {
    return item && item.key ?
        item.key :
        "" + index;
}


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var React = __webpack_require__(1);
var Utilities_1 = __webpack_require__(2);
var SelectionLayout_1 = __webpack_require__(52);
var interfaces_1 = __webpack_require__(6);
// Selection definitions:
//
// Anchor index: the point from which a range selection starts.
// Focus index: the point from which layout movement originates from.
//
// These two can differ. Tests:
//
// If you start at index 5
// Shift click to index 10
//    The focus is 10, the anchor is 5.
// If you shift click at index 0
//    The anchor remains at 5, the items between 0 and 5 are selected and everything else is cleared.
// If you click index 8
//    The anchor and focus are set to 8.
var SELECTION_DISABLED_ATTRIBUTE_NAME = 'data-selection-disabled';
var SELECTION_INDEX_ATTRIBUTE_NAME = 'data-selection-index';
var SELECTION_TOGGLE_ATTRIBUTE_NAME = 'data-selection-toggle';
var SELECTION_INVOKE_ATTRIBUTE_NAME = 'data-selection-invoke';
var SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME = 'data-selection-all-toggle';
var SelectionZone = (function (_super) {
    tslib_1.__extends(SelectionZone, _super);
    function SelectionZone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectionZone.prototype.componentDidMount = function () {
        var win = Utilities_1.getWindow(this.refs.root);
        var scrollElement = Utilities_1.findScrollableParent(this.refs.root);
        // Track the latest modifier keys globally.
        this._events.on(win, 'keydown, keyup', this._updateModifiers, true);
        this._events.on(scrollElement, 'click', this._tryClearOnEmptyClick);
    };
    SelectionZone.prototype.render = function () {
        return (React.createElement("div", tslib_1.__assign({ className: 'ms-SelectionZone', ref: 'root', onKeyDown: this._onKeyDown, onMouseDown: this._onMouseDown, onKeyDownCapture: this._onKeyDownCapture, onClick: this._onClick, role: 'presentation', onDoubleClick: this._onDoubleClick, onContextMenu: this._onContextMenu }, {
            onMouseDownCapture: this._onMouseDownCapture,
            onFocusCapture: this._onFocus
        }), this.props.children));
    };
    /**
     * In some cases, the consuming scenario requires to set focus on a row without having SelectionZone
     * react to the event. Note that focus events in IE <= 11 will occur asynchronously after .focus() has
     * been called on an element, so we need a flag to store the idea that we will bypass the "next"
     * focus event that occurs. This method does that.
     */
    SelectionZone.prototype.ignoreNextFocus = function () {
        this._handleNextFocus(false);
    };
    SelectionZone.prototype._onMouseDownCapture = function (ev) {
        if (document.activeElement !== ev.target && !Utilities_1.elementContains(document.activeElement, ev.target)) {
            this.ignoreNextFocus();
        }
    };
    /**
     * When we focus an item, for single/multi select scenarios, we should try to select it immediately
     * as long as the focus did not originate from a mouse down/touch event. For those cases, we handle them
     * specially.
     */
    SelectionZone.prototype._onFocus = function (ev) {
        var target = ev.target;
        var selection = this.props.selection;
        var isToggleModifierPressed = this._isCtrlPressed || this._isMetaPressed;
        var selectionMode = this._getSelectionMode();
        if (this._shouldHandleFocus && selectionMode !== interfaces_1.SelectionMode.none) {
            var isToggle = this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME);
            var itemRoot = this._findItemRoot(target);
            if (!isToggle && itemRoot) {
                var index = this._getItemIndex(itemRoot);
                if (isToggleModifierPressed) {
                    // set anchor only.
                    selection.setIndexSelected(index, selection.isIndexSelected(index), true);
                }
                else {
                    if (this.props.isSelectedOnFocus) {
                        this._onItemSurfaceClick(ev, index);
                    }
                }
            }
        }
        this._handleNextFocus(false);
    };
    SelectionZone.prototype._onMouseDown = function (ev) {
        this._updateModifiers(ev);
        var target = ev.target;
        var itemRoot = this._findItemRoot(target);
        while (target !== this.refs.root) {
            if (this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
                break;
            }
            else if (itemRoot) {
                if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                    break;
                }
                else if (this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                    this._onInvokeMouseDown(ev, this._getItemIndex(itemRoot));
                    break;
                }
                else if (target === itemRoot) {
                    break;
                }
            }
            target = Utilities_1.getParent(target);
        }
    };
    SelectionZone.prototype._onClick = function (ev) {
        this._updateModifiers(ev);
        var target = ev.target;
        var itemRoot = this._findItemRoot(target);
        // No-op if selection is disabled
        if (this._isSelectionDisabled(target)) {
            return;
        }
        while (target !== this.refs.root) {
            if (this._hasAttribute(target, SELECTALL_TOGGLE_ALL_ATTRIBUTE_NAME)) {
                this._onToggleAllClick(ev);
                break;
            }
            else if (itemRoot) {
                var index = this._getItemIndex(itemRoot);
                if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                    if (this._isShiftPressed) {
                        this._onItemSurfaceClick(ev, index);
                    }
                    else {
                        this._onToggleClick(ev, index);
                    }
                    break;
                }
                else if (this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                    this._onInvokeClick(ev, index);
                    break;
                }
                else if (target === itemRoot) {
                    this._onItemSurfaceClick(ev, index);
                    break;
                }
            }
            target = Utilities_1.getParent(target);
        }
    };
    SelectionZone.prototype._onContextMenu = function (ev) {
        var target = ev.target;
        var _a = this.props, onItemContextMenu = _a.onItemContextMenu, selection = _a.selection;
        if (onItemContextMenu) {
            var itemRoot = this._findItemRoot(target);
            if (itemRoot) {
                var index = this._getItemIndex(itemRoot);
                var skipPreventDefault = onItemContextMenu(selection.getItems()[index], index, ev.nativeEvent);
                // In order to keep back compat, if the value here is undefined, then we should still
                // call preventDefault(). Only in the case where true is explicitly returned should
                // the call be skipped.
                if (!skipPreventDefault) {
                    ev.preventDefault();
                }
            }
        }
    };
    SelectionZone.prototype._isSelectionDisabled = function (target) {
        while (target !== this.refs.root) {
            if (this._hasAttribute(target, SELECTION_DISABLED_ATTRIBUTE_NAME)) {
                return true;
            }
            target = Utilities_1.getParent(target);
        }
        return false;
    };
    /**
     * In multi selection, if you double click within an item's root (but not within the invoke element or input elements),
     * we should execute the invoke handler.
     */
    SelectionZone.prototype._onDoubleClick = function (ev) {
        var target = ev.target;
        if (this._isSelectionDisabled(target)) {
            return;
        }
        var onItemInvoked = this.props.onItemInvoked;
        var itemRoot = this._findItemRoot(target);
        var selectionMode = this._getSelectionMode();
        if (itemRoot && onItemInvoked && selectionMode !== interfaces_1.SelectionMode.none && !this._isInputElement(target)) {
            var index = this._getItemIndex(itemRoot);
            while (target !== this.refs.root) {
                if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME) ||
                    this._hasAttribute(target, SELECTION_INVOKE_ATTRIBUTE_NAME)) {
                    break;
                }
                else if (target === itemRoot) {
                    this._onInvokeClick(ev, index);
                    break;
                }
                target = Utilities_1.getParent(target);
            }
            target = Utilities_1.getParent(target);
        }
    };
    SelectionZone.prototype._onKeyDownCapture = function (ev) {
        this._updateModifiers(ev);
        this._handleNextFocus(true);
    };
    SelectionZone.prototype._onKeyDown = function (ev) {
        this._updateModifiers(ev);
        var target = ev.target;
        if (this._isSelectionDisabled(target)) {
            return;
        }
        var selection = this.props.selection;
        var isSelectAllKey = ev.which === 65 /* a */ && (this._isCtrlPressed || this._isMetaPressed);
        var isClearSelectionKey = ev.which === 27 /* escape */;
        // Ignore key downs from input elements.
        if (this._isInputElement(target)) {
            // A key was pressed while an item in this zone was focused.
            return;
        }
        var selectionMode = this._getSelectionMode();
        // If ctrl-a is pressed, select all (if all are not already selected.)
        if (isSelectAllKey && selectionMode === interfaces_1.SelectionMode.multiple && !selection.isAllSelected()) {
            selection.setAllSelected(true);
            ev.stopPropagation();
            ev.preventDefault();
            return;
        }
        // If escape is pressed, clear selection (if any are selected.)
        if (isClearSelectionKey && selection.getSelectedCount() > 0) {
            selection.setAllSelected(false);
            ev.stopPropagation();
            ev.preventDefault();
            return;
        }
        var itemRoot = this._findItemRoot(target);
        // If a key was pressed within an item, we should treat "enters" as invokes and "space" as toggle
        if (itemRoot) {
            var index = this._getItemIndex(itemRoot);
            while (target !== this.refs.root) {
                if (this._hasAttribute(target, SELECTION_TOGGLE_ATTRIBUTE_NAME)) {
                    // For toggle elements, assuming they are rendered as buttons, they will generate a click event,
                    // so we can no-op for any keydowns in this case.
                    break;
                }
                else if ((ev.which === 13 /* enter */ || ev.which === 32 /* space */) &&
                    (target.tagName === 'BUTTON' || target.tagName === 'A' || target.tagName === 'INPUT')) {
                    return false;
                }
                else if (target === itemRoot) {
                    if (ev.which === 13 /* enter */) {
                        this._onInvokeClick(ev, index);
                        ev.preventDefault();
                        return;
                    }
                    else if (ev.which === 32 /* space */) {
                        this._onToggleClick(ev, index);
                        ev.preventDefault();
                        return;
                    }
                    break;
                }
                target = Utilities_1.getParent(target);
            }
        }
    };
    SelectionZone.prototype._onToggleAllClick = function (ev) {
        var selection = this.props.selection;
        var selectionMode = this._getSelectionMode();
        if (selectionMode === interfaces_1.SelectionMode.multiple) {
            selection.toggleAllSelected();
            ev.stopPropagation();
            ev.preventDefault();
        }
    };
    SelectionZone.prototype._onToggleClick = function (ev, index) {
        var selection = this.props.selection;
        var selectionMode = this._getSelectionMode();
        if (selectionMode === interfaces_1.SelectionMode.multiple) {
            selection.toggleIndexSelected(index);
        }
        else if (selectionMode === interfaces_1.SelectionMode.single) {
            var isSelected = selection.isIndexSelected(index);
            selection.setChangeEvents(false);
            selection.setAllSelected(false);
            selection.setIndexSelected(index, !isSelected, true);
            selection.setChangeEvents(true);
        }
        else {
            return;
        }
        ev.stopPropagation();
        // NOTE: ev.preventDefault is not called for toggle clicks, because this will kill the browser behavior
        // for checkboxes if you use a checkbox for the toggle.
    };
    SelectionZone.prototype._onInvokeClick = function (ev, index) {
        var _a = this.props, selection = _a.selection, onItemInvoked = _a.onItemInvoked;
        if (onItemInvoked) {
            onItemInvoked(selection.getItems()[index], index, ev.nativeEvent);
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    SelectionZone.prototype._onItemSurfaceClick = function (ev, index) {
        var selection = this.props.selection;
        var isToggleModifierPressed = this._isCtrlPressed || this._isMetaPressed;
        var selectionMode = this._getSelectionMode();
        if (selectionMode === interfaces_1.SelectionMode.multiple) {
            if (this._isShiftPressed) {
                selection.selectToIndex(index, !isToggleModifierPressed);
            }
            else if (isToggleModifierPressed) {
                selection.toggleIndexSelected(index);
            }
            else {
                this._clearAndSelectIndex(index);
            }
        }
        else if (selectionMode === interfaces_1.SelectionMode.single) {
            this._clearAndSelectIndex(index);
        }
    };
    SelectionZone.prototype._onInvokeMouseDown = function (ev, index) {
        var selection = this.props.selection;
        // Only do work if item is not selected.
        if (selection.isIndexSelected(index)) {
            return;
        }
        this._clearAndSelectIndex(index);
    };
    SelectionZone.prototype._tryClearOnEmptyClick = function (ev) {
        if (!this.props.selectionPreservedOnEmptyClick &&
            this._isNonHandledClick(ev.target)) {
            this.props.selection.setAllSelected(false);
        }
    };
    SelectionZone.prototype._clearAndSelectIndex = function (index) {
        var selection = this.props.selection;
        var isAlreadySingleSelected = selection.getSelectedCount() === 1 && selection.isIndexSelected(index);
        if (!isAlreadySingleSelected) {
            selection.setChangeEvents(false);
            selection.setAllSelected(false);
            selection.setIndexSelected(index, true, true);
            selection.setChangeEvents(true);
        }
    };
    /**
     * We need to track the modifier key states so that when focus events occur, which do not contain
     * modifier states in the Event object, we know how to behave.
     */
    SelectionZone.prototype._updateModifiers = function (ev) {
        this._isShiftPressed = ev.shiftKey;
        this._isCtrlPressed = ev.ctrlKey;
        this._isMetaPressed = ev.metaKey;
    };
    SelectionZone.prototype._findItemRoot = function (target) {
        var selection = this.props.selection;
        while (target !== this.refs.root) {
            var indexValue = target.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME);
            var index = Number(indexValue);
            if (indexValue !== null && index >= 0 && index < selection.getItems().length) {
                break;
            }
            target = Utilities_1.getParent(target);
        }
        if (target === this.refs.root) {
            return undefined;
        }
        return target;
    };
    SelectionZone.prototype._getItemIndex = function (itemRoot) {
        return Number(itemRoot.getAttribute(SELECTION_INDEX_ATTRIBUTE_NAME));
    };
    SelectionZone.prototype._hasAttribute = function (element, attributeName) {
        var isToggle = false;
        while (!isToggle && element !== this.refs.root) {
            isToggle = element.getAttribute(attributeName) === 'true';
            element = Utilities_1.getParent(element);
        }
        return isToggle;
    };
    SelectionZone.prototype._isInputElement = function (element) {
        return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA';
    };
    SelectionZone.prototype._isNonHandledClick = function (element) {
        var doc = Utilities_1.getDocument();
        if (doc && element) {
            while (element && element !== doc.documentElement) {
                if (Utilities_1.isElementTabbable(element)) {
                    return false;
                }
                element = Utilities_1.getParent(element);
            }
        }
        return true;
    };
    SelectionZone.prototype._handleNextFocus = function (handleFocus) {
        var _this = this;
        if (this._shouldHandleFocusTimeoutId) {
            this._async.clearTimeout(this._shouldHandleFocusTimeoutId);
            this._shouldHandleFocusTimeoutId = undefined;
        }
        this._shouldHandleFocus = handleFocus;
        if (handleFocus) {
            this._async.setTimeout(function () {
                _this._shouldHandleFocus = false;
            }, 100);
        }
    };
    SelectionZone.prototype._getSelectionMode = function () {
        var selection = this.props.selection;
        var _a = this.props.selectionMode, selectionMode = _a === void 0 ? selection ? selection.mode : interfaces_1.SelectionMode.none : _a;
        return selectionMode;
    };
    SelectionZone.defaultProps = {
        layout: new SelectionLayout_1.SelectionLayout(interfaces_1.SelectionDirection.vertical),
        isMultiSelectEnabled: true,
        isSelectedOnFocus: true,
        selectionMode: interfaces_1.SelectionMode.multiple
    };
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SelectionZone.prototype, "ignoreNextFocus", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SelectionZone.prototype, "_onMouseDownCapture", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SelectionZone.prototype, "_onFocus", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SelectionZone.prototype, "_onMouseDown", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SelectionZone.prototype, "_onClick", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SelectionZone.prototype, "_onContextMenu", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SelectionZone.prototype, "_onDoubleClick", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SelectionZone.prototype, "_onKeyDownCapture", null);
    tslib_1.__decorate([
        Utilities_1.autobind
    ], SelectionZone.prototype, "_onKeyDown", null);
    return SelectionZone;
}(Utilities_1.BaseComponent));
exports.SelectionZone = SelectionZone;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(31);
  var warning = __webpack_require__(54);
  var ReactPropTypesSecret = __webpack_require__(29);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(30);
var invariant = __webpack_require__(31);
var ReactPropTypesSecret = __webpack_require__(29);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(30);
var invariant = __webpack_require__(31);
var warning = __webpack_require__(54);
var assign = __webpack_require__(109);

var ReactPropTypesSecret = __webpack_require__(29);
var checkPropTypes = __webpack_require__(160);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDom = __webpack_require__(8);
var sp_core_library_1 = __webpack_require__(17);
var sp_webpart_base_1 = __webpack_require__(60);
var strings = __webpack_require__(61);
var FactoryMethod_1 = __webpack_require__(56);
var lodash = __webpack_require__(59);
var sp_core_library_2 = __webpack_require__(17);
var MockDataProvider_1 = __webpack_require__(58);
var SharepointDataProvider_1 = __webpack_require__(57);
var FactoryMethodWebPart = (function (_super) {
    __extends(FactoryMethodWebPart, _super);
    function FactoryMethodWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FactoryMethodWebPart.prototype.onInit = function () {
        var _this = this;
        this.context.statusRenderer.displayLoadingIndicator(this.domElement, "Todo");
        /*
        Create the appropriate data provider depending on where the web part is running.
        The DEBUG flag will ensure the mock data provider is not bundled with the web part when you package the
         solution for distribution, that is, using the --ship flag with the package-solution gulp command.
        */
        if (true && sp_core_library_2.Environment.type === sp_core_library_2.EnvironmentType.Local) {
            this._dataProvider = new MockDataProvider_1.default();
        }
        else {
            this._dataProvider = new SharepointDataProvider_1.default();
            this._dataProvider.webPartContext = this.context;
        }
        this.openPropertyPane = this.openPropertyPane.bind(this);
        /*
        Get the list of tasks lists from the current site and populate the property pane dropdown field with the values.
        */
        this.loadLists()
            .then(function () {
            /*
             If a list is already selected, then we would have stored the list Id in the associated web part property.
             So, check to see if we do have a selected list for the web part. If we do, then we set that as the selected list
             in the property pane dropdown field.
            */
            if (_this.properties.spListIndex) {
                _this.setSelectedList(_this.properties.spListIndex.toString());
                _this.context.statusRenderer.clearLoadingIndicator(_this.domElement);
            }
        });
        return _super.prototype.onInit.call(this);
    };
    // render method of the webpart, actually calls Component
    FactoryMethodWebPart.prototype.render = function () {
        var element = React.createElement(FactoryMethod_1.default, {
            spHttpClient: this.context.spHttpClient,
            siteUrl: this.context.pageContext.web.absoluteUrl,
            listName: this._dataProvider.selectedList === undefined ? "GenericList" : this._dataProvider.selectedList.Title,
            dataProvider: this._dataProvider,
            configureStartCallback: this.openPropertyPane
        });
        // reactDom.render(element, this.domElement);
        this._factorymethodContainerComponent = ReactDom.render(element, this.domElement);
    };
    // loads lists from the site and fill the dropdown.
    FactoryMethodWebPart.prototype.loadLists = function () {
        var _this = this;
        return this._dataProvider.getLists()
            .then(function (lists) {
            // disable dropdown field if there are no results from the server.
            _this._disableDropdown = lists.length === 0;
            if (lists.length !== 0) {
                _this._dropdownOptions = lists.map(function (list) {
                    return {
                        key: list.Id,
                        text: list.Title
                    };
                });
            }
        });
    };
    Object.defineProperty(FactoryMethodWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse("1.0");
        },
        enumerable: true,
        configurable: true
    });
    FactoryMethodWebPart.prototype.onPropertyPaneFieldChanged = function (propertyPath, oldValue, newValue) {
        /*
        Check the property path to see which property pane feld changed. If the property path matches the dropdown, then we set that list
        as the selected list for the web part.
        */
        if (propertyPath === "spListIndex") {
            this.setSelectedList(newValue);
        }
        /*
        Finally, tell property pane to re-render the web part.
        This is valid for reactive property pane.
        */
        _super.prototype.onPropertyPaneFieldChanged.call(this, propertyPath, oldValue, newValue);
    };
    // sets the selected list based on the selection from the dropdownlist
    FactoryMethodWebPart.prototype.setSelectedList = function (value) {
        var selectedIndex = lodash.findIndex(this._dropdownOptions, function (item) { return item.key === value; });
        var selectedDropDownOption = this._dropdownOptions[selectedIndex];
        if (selectedDropDownOption) {
            this._selectedList = {
                Title: selectedDropDownOption.text,
                Id: selectedDropDownOption.key.toString()
            };
            this._dataProvider.selectedList = this._selectedList;
        }
    };
    // we add fields dynamically to the property pane, in this case its only the list field which we will render
    FactoryMethodWebPart.prototype.getGroupFields = function () {
        var fields = [];
        // we add the options from the dropdownoptions variable that was populated during init to the dropdown here.
        fields.push(sp_webpart_base_1.PropertyPaneDropdown("spListIndex", {
            label: "Select a list",
            disabled: this._disableDropdown,
            options: this._dropdownOptions
        }));
        /*
        When we do not have any lists returned from the server, we disable the dropdown. If that is the case,
        we also add a label field displaying the appropriate message.
        */
        if (this._disableDropdown) {
            fields.push(sp_webpart_base_1.PropertyPaneLabel(null, {
                text: "Could not find tasks lists in your site. Create one or more tasks list and then try using the web part."
            }));
        }
        return fields;
    };
    FactoryMethodWebPart.prototype.openPropertyPane = function () {
        this.context.propertyPane.open();
    };
    FactoryMethodWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            /*
                            Instead of creating the fields here, we call a method that will return the set of property fields to render.
                            */
                            groupFields: this.getGroupFields()
                        }
                    ]
                }
            ]
        };
    };
    return FactoryMethodWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = FactoryMethodWebPart;



/***/ })
/******/ ])});;
//# sourceMappingURL=factory-method-web-part.js.map