/*!
 * Spacing.js v1.0.7
 * Copyright (c) 2021 Steven Lei
 * Released under the MIT License.
*/
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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spacing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spacing */ \"./src/spacing.ts\");\n // Simple, Start.\n\n_spacing__WEBPACK_IMPORTED_MODULE_0__[\"default\"].start();\n\n//# sourceURL=webpack://Spacing/./src/index.ts?");

/***/ }),

/***/ "./src/marker.ts":
/*!***********************!*\
  !*** ./src/marker.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"placeMark\": () => (/* binding */ placeMark),\n/* harmony export */   \"removeMarks\": () => (/* binding */ removeMarks)\n/* harmony export */ });\nfunction createLine(width, height, top, left, text) {\n  var border = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'none';\n  var marker = document.createElement('span');\n  marker.style.backgroundColor = 'red';\n  marker.style.position = 'fixed';\n  marker.classList.add(\"spacing-js-marker\");\n  marker.style.width = \"\".concat(width, \"px\");\n  marker.style.height = \"\".concat(height, \"px\");\n\n  if (border === 'x') {\n    marker.style.borderLeft = '1px solid rgba(255, 255, 255, .8)';\n    marker.style.borderRight = '1px solid rgba(255, 255, 255, .8)';\n  }\n\n  if (border === 'y') {\n    marker.style.borderTop = '1px solid rgba(255, 255, 255, .8)';\n    marker.style.borderBottom = '1px solid rgba(255, 255, 255, .8)';\n  }\n\n  marker.style.pointerEvents = 'none';\n  marker.style.top = \"\".concat(top, \"px\");\n  marker.style.left = \"\".concat(left, \"px\");\n  marker.style.zIndex = '9998';\n  marker.style.boxSizing = 'content-box';\n  var value = document.createElement('span');\n  value.classList.add(\"spacing-js-value\");\n  value.style.backgroundColor = 'red';\n  value.style.color = 'white';\n  value.style.fontSize = '10px';\n  value.style.display = 'inline-block';\n  value.style.fontFamily = 'Helvetica, sans-serif';\n  value.style.fontWeight = 'bold';\n  value.style.borderRadius = '20px';\n  value.style.position = 'fixed';\n  value.style.width = '42px';\n  value.style.lineHeight = '15px';\n  value.style.height = '16px';\n  value.style.textAlign = 'center';\n  value.style.zIndex = '10000';\n  value.style.pointerEvents = 'none';\n  value.innerText = text;\n  value.style.boxSizing = 'content-box';\n\n  if (border === 'x') {\n    // Prevent the badge moved outside the screen\n    var topOffset = top + height / 2 - 7;\n\n    if (topOffset > document.documentElement.clientHeight - 20) {\n      topOffset = document.documentElement.clientHeight - 20;\n    }\n\n    if (topOffset < 0) {\n      topOffset = 6;\n    }\n\n    value.style.top = \"\".concat(topOffset, \"px\");\n    value.style.left = \"\".concat(left + 6, \"px\");\n  } else if (border === 'y') {\n    // Prevent the badge moved outside the screen\n    var leftOffset = left + width / 2 - 20;\n\n    if (leftOffset > document.documentElement.clientWidth - 48) {\n      leftOffset = document.documentElement.clientWidth - 48;\n    }\n\n    if (leftOffset < 0) {\n      leftOffset = 6;\n    }\n\n    value.style.top = \"\".concat(top + 6, \"px\");\n    value.style.left = \"\".concat(leftOffset, \"px\");\n  }\n\n  document.body.appendChild(marker);\n  document.body.appendChild(value);\n}\n\nfunction placeMark(rect1, rect2, direction, value) {\n  var edgeToEdge = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;\n\n  if (direction === 'top') {\n    var width = 1;\n    var height = Math.abs(rect1.top - rect2.top);\n    var left = Math.floor((Math.min(rect1.right, rect2.right) + Math.max(rect1.left, rect2.left)) / 2);\n    var top = Math.min(rect1.top, rect2.top);\n\n    if (edgeToEdge) {\n      if (rect1.top < rect2.top) {\n        return;\n      } // If not colliding\n\n\n      if (rect1.right < rect2.left || rect1.left > rect2.right) {\n        return;\n      }\n\n      height = Math.abs(rect2.bottom - rect1.top);\n      top = Math.min(rect2.bottom, rect1.top);\n    }\n\n    createLine(width, height, top, left, value, 'x');\n  } else if (direction === 'left') {\n    var _width = Math.abs(rect1.left - rect2.left);\n\n    var _height = 1;\n\n    var _top = Math.floor((Math.min(rect1.bottom, rect2.bottom) + Math.max(rect1.top, rect2.top)) / 2);\n\n    var _left = Math.min(rect1.left, rect2.left);\n\n    if (edgeToEdge) {\n      if (rect1.left < rect2.left) {\n        return;\n      } // If not overlapping\n\n\n      if (rect1.bottom < rect2.top || rect1.top > rect2.bottom) {\n        return;\n      }\n\n      _width = Math.abs(rect1.left - rect2.right);\n      _left = Math.min(rect2.right, rect1.left);\n    }\n\n    createLine(_width, _height, _top, _left, value, 'y');\n  } else if (direction === 'right') {\n    var _width2 = Math.abs(rect1.right - rect2.right);\n\n    var _height2 = 1;\n\n    var _top2 = Math.floor((Math.min(rect1.bottom, rect2.bottom) + Math.max(rect1.top, rect2.top)) / 2);\n\n    var _left2 = Math.min(rect1.right, rect2.right);\n\n    if (edgeToEdge) {\n      if (rect1.left > rect2.right) {\n        return;\n      } // If not overlapping\n\n\n      if (rect1.bottom < rect2.top || rect1.top > rect2.bottom) {\n        return;\n      }\n\n      _width2 = Math.abs(rect1.right - rect2.left);\n    }\n\n    createLine(_width2, _height2, _top2, _left2, value, 'y');\n  } else if (direction === 'bottom') {\n    var _width3 = 1;\n\n    var _height3 = Math.abs(rect1.bottom - rect2.bottom);\n\n    var _top3 = Math.min(rect1.bottom, rect2.bottom);\n\n    var _left3 = Math.floor((Math.min(rect1.right, rect2.right) + Math.max(rect1.left, rect2.left)) / 2);\n\n    if (edgeToEdge) {\n      if (rect2.bottom < rect1.top) {\n        return;\n      } // If not overlapping\n\n\n      if (rect1.right < rect2.left || rect1.left > rect2.right) {\n        return;\n      }\n\n      _height3 = Math.abs(rect1.bottom - rect2.top);\n    }\n\n    createLine(_width3, _height3, _top3, _left3, value, 'x');\n  }\n}\nfunction removeMarks() {\n  document.querySelectorAll('.spacing-js-marker').forEach(function (element) {\n    element.remove();\n  });\n  document.querySelectorAll('.spacing-js-value').forEach(function (element) {\n    element.remove();\n  });\n}\n\n//# sourceURL=webpack://Spacing/./src/marker.ts?");

/***/ }),

/***/ "./src/placeholder.ts":
/*!****************************!*\
  !*** ./src/placeholder.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPlaceholderElement\": () => (/* binding */ createPlaceholderElement),\n/* harmony export */   \"clearPlaceholderElement\": () => (/* binding */ clearPlaceholderElement)\n/* harmony export */ });\nfunction createPlaceholderElement(type, dom, color) {\n  var _dom$getBoundingClien = dom.getBoundingClientRect(),\n      width = _dom$getBoundingClien.width,\n      height = _dom$getBoundingClien.height,\n      top = _dom$getBoundingClien.top,\n      left = _dom$getBoundingClien.left;\n\n  var fontSize = window.getComputedStyle(dom).fontSize;\n  var placeholder = document.createElement('div');\n  placeholder.classList.add(\"spacing-js-\".concat(type, \"-placeholder\"));\n  placeholder.style.border = \"2px solid \".concat(color);\n  placeholder.style.position = 'fixed';\n  placeholder.style.background = 'none';\n  placeholder.style.borderRadius = '2px';\n  placeholder.style.padding = '0';\n  placeholder.style.margin = '0';\n  placeholder.style.width = \"\".concat(width - 2, \"px\");\n  placeholder.style.height = \"\".concat(height - 2, \"px\");\n  placeholder.style.top = \"\".concat(top - 1, \"px\");\n  placeholder.style.left = \"\".concat(left - 1, \"px\");\n  placeholder.style.pointerEvents = 'none';\n  placeholder.style.zIndex = '9999';\n  placeholder.style.boxSizing = 'content-box';\n  document.body.appendChild(placeholder);\n  var dimension = document.createElement('span');\n  dimension.style.background = color;\n  dimension.style.position = 'fixed';\n  dimension.style.display = 'inline-block';\n  dimension.style.color = '#fff';\n  dimension.style.padding = '2px 4px';\n  dimension.style.fontSize = '10px';\n  var arrow = '';\n  var topOffset = top;\n\n  if (top < 20) {\n    if (top < 0) {\n      topOffset = 0;\n      arrow = '↑ '; // Top-Left corner is offscreen\n    }\n\n    dimension.style.borderRadius = '2px 0 2px 0';\n  } else {\n    dimension.style.transform = 'translateY(calc(-100% + 2px))';\n    dimension.style.borderRadius = '2px 2px 0 0';\n  }\n\n  dimension.style.top = \"\".concat(topOffset - 1, \"px\");\n  dimension.style.left = \"\".concat(left - 1, \"px\");\n  dimension.innerText = \"\".concat(arrow, \" \").concat(Math.round(width), \"px \\xD7 \").concat(Math.round(height), \"px\\n                         \").concat(fontSize ? \"fontsize:\" + fontSize : '');\n  placeholder.appendChild(dimension);\n}\nfunction clearPlaceholderElement(type) {\n  var _document$querySelect;\n\n  (_document$querySelect = document.querySelector(\".spacing-js-\".concat(type, \"-placeholder\"))) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();\n}\n\n//# sourceURL=webpack://Spacing/./src/placeholder.ts?");

/***/ }),

/***/ "./src/rect.ts":
/*!*********************!*\
  !*** ./src/rect.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Rect)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Rect = /*#__PURE__*/function () {\n  function Rect(rect) {\n    _classCallCheck(this, Rect);\n\n    this.top = rect.top;\n    this.left = rect.left;\n    this.width = rect.width;\n    this.height = rect.height;\n    this.right = rect.right;\n    this.bottom = rect.bottom;\n  }\n\n  _createClass(Rect, [{\n    key: \"colliding\",\n    value: function colliding(other) {\n      return !(this.top > other.bottom || this.right < other.left || this.bottom < other.top || this.left > other.right);\n    }\n  }, {\n    key: \"containing\",\n    value: function containing(other) {\n      return this.left <= other.left && other.left < this.width && this.top <= other.top && other.top < this.height;\n    }\n  }, {\n    key: \"inside\",\n    value: function inside(other) {\n      return other.top <= this.top && this.top <= other.bottom && other.top <= this.bottom && this.bottom <= other.bottom && other.left <= this.left && this.left <= other.right && other.left <= this.right && this.right <= other.right;\n    }\n  }]);\n\n  return Rect;\n}();\n\n\n\n//# sourceURL=webpack://Spacing/./src/rect.ts?");

/***/ }),

/***/ "./src/spacing.ts":
/*!************************!*\
  !*** ./src/spacing.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rect */ \"./src/rect.ts\");\n/* harmony import */ var _placeholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeholder */ \"./src/placeholder.ts\");\n/* harmony import */ var _marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marker */ \"./src/marker.ts\");\n\n\n\nvar active = false;\nvar hoveringElement = null;\nvar selectedElement;\nvar targetElement;\nvar delayedDismiss = false;\nvar delayedRef = null;\nvar Spacing = {\n  start: function start() {\n    if (!document.body) {\n      console.warn(\"Unable to initialise, document.body does not exist.\");\n      return;\n    }\n\n    window.addEventListener('keydown', keyDownHandler);\n    window.addEventListener('keyup', keyUpHandler);\n    window.addEventListener('mousemove', cursorMovedHandler);\n    window.addEventListener('mouseout', cursorLeaveHandler);\n  }\n};\n\nfunction keyDownHandler(e) {\n  if (delayedDismiss) {\n    cleanUp();\n\n    if (delayedRef) {\n      clearTimeout(delayedRef);\n      delayedRef = null;\n    }\n  }\n\n  if (!hoveringElement) return;\n\n  if (e.key === 'Alt' && !active) {\n    e.preventDefault();\n    active = true;\n    setSelectedElement();\n    preventPageScroll(true);\n  }\n\n  if (e.shiftKey) delayedDismiss = true;\n}\n\nfunction keyUpHandler(e) {\n  if (e.key === 'Alt' && active) {\n    delayedRef = setTimeout(function () {\n      cleanUp();\n    }, delayedDismiss ? 3000 : 0);\n  }\n}\n\nfunction cursorLeaveHandler(e) {\n  var to = e.relatedTarget;\n\n  if (!to || to.nodeName == \"HTML\") {\n    hoveringElement = null;\n    cleanUp();\n  }\n}\n\nfunction cleanUp() {\n  active = false;\n  (0,_placeholder__WEBPACK_IMPORTED_MODULE_1__.clearPlaceholderElement)('selected');\n  (0,_placeholder__WEBPACK_IMPORTED_MODULE_1__.clearPlaceholderElement)('target');\n  delayedDismiss = false;\n  selectedElement = null;\n  targetElement = null;\n  (0,_marker__WEBPACK_IMPORTED_MODULE_2__.removeMarks)();\n  preventPageScroll(false);\n}\n\nfunction cursorMovedHandler(e) {\n  if (e.composedPath) {\n    // Use composedPath to detect the hovering element for supporting shadow DOM\n    hoveringElement = e.composedPath()[0];\n  } else {\n    // Fallback if not support composedPath\n    hoveringElement = e.target;\n  }\n\n  if (!active) return;\n  setTargetElement().then(function () {\n    if (selectedElement != null && targetElement != null) {\n      // Do the calculation\n      var selectedElementRect = selectedElement.getBoundingClientRect();\n      var targetElementRect = targetElement.getBoundingClientRect();\n      var selected = new _rect__WEBPACK_IMPORTED_MODULE_0__[\"default\"](selectedElementRect);\n      var target = new _rect__WEBPACK_IMPORTED_MODULE_0__[\"default\"](targetElementRect);\n      (0,_marker__WEBPACK_IMPORTED_MODULE_2__.removeMarks)();\n      var top, bottom, left, right, outside;\n\n      if (selected.containing(target) || selected.inside(target) || selected.colliding(target)) {\n        console.log(\"containing || inside || colliding\");\n        top = Math.round(Math.abs(selectedElementRect.top - targetElementRect.top));\n        bottom = Math.round(Math.abs(selectedElementRect.bottom - targetElementRect.bottom));\n        left = Math.round(Math.abs(selectedElementRect.left - targetElementRect.left));\n        right = Math.round(Math.abs(selectedElementRect.right - targetElementRect.right));\n        outside = false;\n      } else {\n        console.log(\"outside\");\n        top = Math.round(Math.abs(selectedElementRect.top - targetElementRect.bottom));\n        bottom = Math.round(Math.abs(selectedElementRect.bottom - targetElementRect.top));\n        left = Math.round(Math.abs(selectedElementRect.left - targetElementRect.right));\n        right = Math.round(Math.abs(selectedElementRect.right - targetElementRect.left));\n        outside = true;\n      }\n\n      (0,_marker__WEBPACK_IMPORTED_MODULE_2__.placeMark)(selected, target, 'top', \"\".concat(top, \"px\"), outside);\n      (0,_marker__WEBPACK_IMPORTED_MODULE_2__.placeMark)(selected, target, 'bottom', \"\".concat(bottom, \"px\"), outside);\n      (0,_marker__WEBPACK_IMPORTED_MODULE_2__.placeMark)(selected, target, 'left', \"\".concat(left, \"px\"), outside);\n      (0,_marker__WEBPACK_IMPORTED_MODULE_2__.placeMark)(selected, target, 'right', \"\".concat(right, \"px\"), outside);\n    }\n  });\n}\n\nfunction setSelectedElement() {\n  if (hoveringElement && hoveringElement !== selectedElement) {\n    selectedElement = hoveringElement;\n    (0,_placeholder__WEBPACK_IMPORTED_MODULE_1__.clearPlaceholderElement)('selected');\n    (0,_placeholder__WEBPACK_IMPORTED_MODULE_1__.createPlaceholderElement)('selected', selectedElement, \"red\");\n  }\n}\n\nfunction setTargetElement() {\n  return new Promise(function (resolve, reject) {\n    if (active && hoveringElement && hoveringElement !== selectedElement && hoveringElement !== targetElement) {\n      targetElement = hoveringElement;\n      (0,_placeholder__WEBPACK_IMPORTED_MODULE_1__.clearPlaceholderElement)('target');\n      (0,_placeholder__WEBPACK_IMPORTED_MODULE_1__.createPlaceholderElement)('target', targetElement, 'blue');\n      resolve();\n    }\n  });\n}\n\nfunction preventPageScroll(active) {\n  if (active) {\n    window.addEventListener('DOMMouseScroll', scrollingPreventDefault, false);\n    window.addEventListener('wheel', scrollingPreventDefault, {\n      passive: false\n    });\n    window.addEventListener('mousewheel', scrollingPreventDefault, {\n      passive: false\n    });\n  } else {\n    window.removeEventListener('DOMMouseScroll', scrollingPreventDefault);\n    window.removeEventListener('wheel', scrollingPreventDefault);\n    window.removeEventListener('mousewheel', scrollingPreventDefault);\n  }\n}\n\nfunction scrollingPreventDefault(e) {\n  e.preventDefault();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Spacing);\n\n//# sourceURL=webpack://Spacing/./src/spacing.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	window.Spacing = __webpack_exports__;
/******/ 	
/******/ })()
;