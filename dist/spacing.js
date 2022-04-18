"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rect_1 = __importDefault(require("./rect"));
var placeholder_1 = require("./placeholder");
var marker_1 = require("./marker");
var active = false;
var hoveringElement = null;
var selectedElement;
var targetElement;
var delayedDismiss = false;
var delayedRef = null;
var Spacing = {
    start: function () {
        if (!document.body) {
            console.warn("Unable to initialise, document.body does not exist.");
            return;
        }
        window.addEventListener('keydown', keyDownHandler);
        window.addEventListener('keyup', keyUpHandler);
        window.addEventListener('mousemove', cursorMovedHandler);
    },
    stop: function () {
        window.removeEventListener('keydown', keyDownHandler);
        window.removeEventListener('keyup', keyUpHandler);
        window.removeEventListener('mousemove', cursorMovedHandler);
    }
};
function keyDownHandler(e) {
    if (delayedDismiss) {
        cleanUp();
        if (delayedRef) {
            clearTimeout(delayedRef);
            delayedRef = null;
        }
    }
    if (e.key === 'Alt' && !active) {
        e.preventDefault();
        active = true;
        setSelectedElement();
        preventPageScroll(true);
    }
    if (e.shiftKey)
        delayedDismiss = true;
}
function keyUpHandler(e) {
    if (e.key === 'Alt' && active) {
        active = false;
        delayedRef = setTimeout(function () {
            cleanUp();
        }, delayedDismiss ? 3000 : 0);
    }
}
function cleanUp() {
    (0, placeholder_1.clearPlaceholderElement)('selected');
    (0, placeholder_1.clearPlaceholderElement)('target');
    delayedDismiss = false;
    selectedElement = null;
    targetElement = null;
    (0, marker_1.removeMarks)();
    preventPageScroll(false);
}
function cursorMovedHandler(e) {
    if (e.composedPath) {
        // Use composedPath to detect the hovering element for supporting shadow DOM
        hoveringElement = e.composedPath()[0];
    }
    else {
        // Fallback if not support composedPath
        hoveringElement = e.target;
    }
    if (!active)
        return;
    setTargetElement().then(function () {
        if (selectedElement != null && targetElement != null) {
            // Do the calculation
            var selectedElementRect = selectedElement.getBoundingClientRect();
            var targetElementRect = targetElement.getBoundingClientRect();
            var selected = new rect_1.default(selectedElementRect);
            var target = new rect_1.default(targetElementRect);
            (0, marker_1.removeMarks)();
            var top_1, bottom = void 0, left = void 0, right = void 0, outside = void 0;
            if (selected.containing(target) ||
                selected.inside(target) ||
                selected.colliding(target)) {
                console.log("containing || inside || colliding");
                top_1 = Math.round(Math.abs(selectedElementRect.top - targetElementRect.top));
                bottom = Math.round(Math.abs(selectedElementRect.bottom - targetElementRect.bottom));
                left = Math.round(Math.abs(selectedElementRect.left - targetElementRect.left));
                right = Math.round(Math.abs(selectedElementRect.right - targetElementRect.right));
                outside = false;
            }
            else {
                console.log("outside");
                top_1 = Math.round(Math.abs(selectedElementRect.top - targetElementRect.bottom));
                bottom = Math.round(Math.abs(selectedElementRect.bottom - targetElementRect.top));
                left = Math.round(Math.abs(selectedElementRect.left - targetElementRect.right));
                right = Math.round(Math.abs(selectedElementRect.right - targetElementRect.left));
                outside = true;
            }
            (0, marker_1.placeMark)(selected, target, 'top', top_1 + "px", outside);
            (0, marker_1.placeMark)(selected, target, 'bottom', bottom + "px", outside);
            (0, marker_1.placeMark)(selected, target, 'left', left + "px", outside);
            (0, marker_1.placeMark)(selected, target, 'right', right + "px", outside);
        }
    });
}
function setSelectedElement() {
    if (hoveringElement && hoveringElement !== selectedElement) {
        selectedElement = hoveringElement;
        (0, placeholder_1.clearPlaceholderElement)('selected');
        var rect = selectedElement.getBoundingClientRect();
        (0, placeholder_1.createPlaceholderElement)('selected', rect.width, rect.height, rect.top, rect.left, "red");
    }
}
function setTargetElement() {
    return new Promise(function (resolve, reject) {
        if (active &&
            hoveringElement &&
            hoveringElement !== selectedElement &&
            hoveringElement !== targetElement) {
            targetElement = hoveringElement;
            (0, placeholder_1.clearPlaceholderElement)('target');
            var rect = targetElement.getBoundingClientRect();
            (0, placeholder_1.createPlaceholderElement)('target', rect.width, rect.height, rect.top, rect.left, 'blue');
            resolve();
        }
    });
}
function preventPageScroll(active) {
    if (active) {
        window.addEventListener('DOMMouseScroll', scrollingPreventDefault, false);
        window.addEventListener('wheel', scrollingPreventDefault, {
            passive: false,
        });
        window.addEventListener('mousewheel', scrollingPreventDefault, {
            passive: false,
        });
    }
    else {
        window.removeEventListener('DOMMouseScroll', scrollingPreventDefault);
        window.removeEventListener('wheel', scrollingPreventDefault);
        window.removeEventListener('mousewheel', scrollingPreventDefault);
    }
}
function scrollingPreventDefault(e) {
    e.preventDefault();
}
exports.default = Spacing;
