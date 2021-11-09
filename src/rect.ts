export default class Rect {
  top: number;
  left: number;
  width: number;
  height: number;
  right: number;
  bottom: number;

  constructor(rect: DOMRect) {
    this.top = rect.top;
    this.left = rect.left;
    this.width = rect.width;
    this.height = rect.height;
    this.right = rect.right;
    this.bottom = rect.bottom;
  }

  colliding(other: Rect) {
    return !(
      this.top > other.bottom ||
      this.right < other.left ||
      this.bottom < other.top ||
      this.left > other.right
    );
  }

  containing(other: Rect) {
    return (
      this.left <= other.left &&
      other.left < this.width &&
      this.top <= other.top &&
      other.top < this.height
    );
  }

  inside(other: Rect) {
    return (
      other.top <= this.top &&
      this.top <= other.bottom &&
      other.top <= this.bottom &&
      this.bottom <= other.bottom &&
      other.left <= this.left &&
      this.left <= other.right &&
      other.left <= this.right &&
      this.right <= other.right
    );
  }
}
