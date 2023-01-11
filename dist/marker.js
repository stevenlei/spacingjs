"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeMarks = exports.placeMark = void 0;
function createLine(width, height, top, left, text, border) {
    if (border === void 0) { border = 'none'; }
    var marker = document.createElement('span');
    marker.style.backgroundColor = 'red';
    marker.style.position = 'fixed';
    marker.classList.add("spacing-js-marker");
    marker.style.width = width + "px";
    marker.style.height = height + "px";
    if (border === 'x') {
        marker.style.borderLeft = '1px solid rgba(255, 255, 255, .8)';
        marker.style.borderRight = '1px solid rgba(255, 255, 255, .8)';
    }
    if (border === 'y') {
        marker.style.borderTop = '1px solid rgba(255, 255, 255, .8)';
        marker.style.borderBottom = '1px solid rgba(255, 255, 255, .8)';
    }
    marker.style.pointerEvents = 'none';
    marker.style.top = top + "px";
    marker.style.left = left + "px";
    marker.style.zIndex = '9998';
    marker.style.boxSizing = 'content-box';
    var value = document.createElement('span');
    value.classList.add("spacing-js-value");
    value.style.backgroundColor = 'red';
    value.style.color = 'white';
    value.style.fontSize = '10px';
    value.style.display = 'inline-block';
    value.style.fontFamily = 'Helvetica, sans-serif';
    value.style.fontWeight = 'bold';
    value.style.borderRadius = '20px';
    value.style.position = 'fixed';
    value.style.width = '42px';
    value.style.lineHeight = '15px';
    value.style.height = '16px';
    value.style.textAlign = 'center';
    value.style.zIndex = '10000';
    value.style.pointerEvents = 'none';
    value.innerText = text;
    value.style.boxSizing = 'content-box';
    if (border === 'x') {
        // Prevent the badge moved outside the screen
        var topOffset = top + height / 2 - 7;
        if (topOffset > document.documentElement.clientHeight - 20) {
            topOffset = document.documentElement.clientHeight - 20;
        }
        if (topOffset < 0) {
            topOffset = 6;
        }
        value.style.top = topOffset + "px";
        value.style.left = left + 6 + "px";
    }
    else if (border === 'y') {
        // Prevent the badge moved outside the screen
        var leftOffset = left + width / 2 - 20;
        if (leftOffset > document.documentElement.clientWidth - 48) {
            leftOffset = document.documentElement.clientWidth - 48;
        }
        if (leftOffset < 0) {
            leftOffset = 6;
        }
        value.style.top = top + 6 + "px";
        value.style.left = leftOffset + "px";
    }
    document.body.appendChild(marker);
    document.body.appendChild(value);
}
function placeMark(rect1, rect2, direction, value, edgeToEdge) {
    if (edgeToEdge === void 0) { edgeToEdge = false; }
    if (direction === 'top') {
        var width = 1;
        var height = Math.abs(rect1.top - rect2.top);
        var left = Math.floor((Math.min(rect1.right, rect2.right) + Math.max(rect1.left, rect2.left)) /
            2);
        var top_1 = Math.min(rect1.top, rect2.top);
        if (edgeToEdge) {
            if (rect1.top < rect2.top) {
                return;
            }
            // If not colliding
            if (rect1.right < rect2.left || rect1.left > rect2.right) {
                return;
            }
            height = Math.abs(rect2.bottom - rect1.top);
            top_1 = Math.min(rect2.bottom, rect1.top);
        }
        createLine(width, height, top_1, left, value, 'x');
    }
    else if (direction === 'left') {
        var width = Math.abs(rect1.left - rect2.left);
        var height = 1;
        var top_2 = Math.floor((Math.min(rect1.bottom, rect2.bottom) + Math.max(rect1.top, rect2.top)) /
            2);
        var left = Math.min(rect1.left, rect2.left);
        if (edgeToEdge) {
            if (rect1.left < rect2.left) {
                return;
            }
            // If not overlapping
            if (rect1.bottom < rect2.top || rect1.top > rect2.bottom) {
                return;
            }
            width = Math.abs(rect1.left - rect2.right);
            left = Math.min(rect2.right, rect1.left);
        }
        createLine(width, height, top_2, left, value, 'y');
    }
    else if (direction === 'right') {
        var width = Math.abs(rect1.right - rect2.right);
        var height = 1;
        var top_3 = Math.floor((Math.min(rect1.bottom, rect2.bottom) + Math.max(rect1.top, rect2.top)) /
            2);
        var left = Math.min(rect1.right, rect2.right);
        if (edgeToEdge) {
            if (rect1.left > rect2.right) {
                return;
            }
            // If not overlapping
            if (rect1.bottom < rect2.top || rect1.top > rect2.bottom) {
                return;
            }
            width = Math.abs(rect1.right - rect2.left);
        }
        createLine(width, height, top_3, left, value, 'y');
    }
    else if (direction === 'bottom') {
        var width = 1;
        var height = Math.abs(rect1.bottom - rect2.bottom);
        var top_4 = Math.min(rect1.bottom, rect2.bottom);
        var left = Math.floor((Math.min(rect1.right, rect2.right) + Math.max(rect1.left, rect2.left)) /
            2);
        if (edgeToEdge) {
            if (rect2.bottom < rect1.top) {
                return;
            }
            // If not overlapping
            if (rect1.right < rect2.left || rect1.left > rect2.right) {
                return;
            }
            height = Math.abs(rect1.bottom - rect2.top);
        }
        createLine(width, height, top_4, left, value, 'x');
    }
}
exports.placeMark = placeMark;
function removeMarks() {
    document
        .querySelectorAll('.spacing-js-marker')
        .forEach(function (element) {
        element.remove();
    });
    document
        .querySelectorAll('.spacing-js-value')
        .forEach(function (element) {
        element.remove();
    });
}
exports.removeMarks = removeMarks;
