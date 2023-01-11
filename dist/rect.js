"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rect = /** @class */ (function () {
    function Rect(rect) {
        this.top = rect.top;
        this.left = rect.left;
        this.width = rect.width;
        this.height = rect.height;
        this.right = rect.right;
        this.bottom = rect.bottom;
    }
    Rect.prototype.colliding = function (other) {
        return !(this.top > other.bottom ||
            this.right < other.left ||
            this.bottom < other.top ||
            this.left > other.right);
    };
    Rect.prototype.containing = function (other) {
        return (this.left <= other.left &&
            other.left < this.width &&
            this.top <= other.top &&
            other.top < this.height);
    };
    Rect.prototype.inside = function (other) {
        return (other.top <= this.top &&
            this.top <= other.bottom &&
            other.top <= this.bottom &&
            this.bottom <= other.bottom &&
            other.left <= this.left &&
            this.left <= other.right &&
            other.left <= this.right &&
            this.right <= other.right);
    };
    return Rect;
}());
exports.default = Rect;
