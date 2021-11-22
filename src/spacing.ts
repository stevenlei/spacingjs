import Rect from './rect';
import {
  clearPlaceholderElement,
  createPlaceholderElement,
} from './placeholder';
import { placeMark, removeMarks } from './marker';

let active: boolean = false;
let hoveringElement: HTMLElement | null = null;
let selectedElement: HTMLElement | null;
let targetElement: HTMLElement | null;
let delayedDismiss: boolean = false;
let delayedRef: ReturnType<typeof setTimeout> | null = null;
import { Spacing as SpacingType } from './type';


const Spacing: SpacingType = {
  start() {
    if (!document.body) {
      console.warn(`Unable to initialise, document.body does not exist.`);
      return;
    }

    window.addEventListener('keydown', keyDownHandler);
    window.addEventListener('keyup', keyUpHandler);
    window.addEventListener('mousemove', cursorMovedHandler);
    window.addEventListener('mouseout',cursorLeaveHandler);
  },
};

function keyDownHandler(e: KeyboardEvent) {
  if (delayedDismiss) {
    cleanUp();
    if (delayedRef) {
      clearTimeout(delayedRef);
      delayedRef = null;
    }
  }

  if(!hoveringElement) return;

  if (e.key === 'Alt' && !active) {
    e.preventDefault();
    active = true;

    setSelectedElement();
    preventPageScroll(true);
  }

  if (e.shiftKey) delayedDismiss = true;
}

function keyUpHandler(e: KeyboardEvent) {
  if (e.key === 'Alt' && active) {
    delayedRef = setTimeout(
      () => {
        cleanUp();
      },
      delayedDismiss ? 3000 : 0
    );
  }
}

function cursorLeaveHandler(e: MouseEvent){
  let to = e.relatedTarget as HTMLElement;
      if (!to || to.nodeName == "HTML") {
        hoveringElement = null
        cleanUp();
      }
}

function cleanUp(): void {
  active = false;
  clearPlaceholderElement('selected');
  clearPlaceholderElement('target');

  delayedDismiss = false;

  selectedElement = null;
  targetElement = null;
  removeMarks();

  preventPageScroll(false);
}

function cursorMovedHandler(e: MouseEvent) {
  if (e.composedPath) {
    // Use composedPath to detect the hovering element for supporting shadow DOM
    hoveringElement = e.composedPath()[0] as HTMLElement;
  } else {
    // Fallback if not support composedPath
    hoveringElement = e.target as HTMLElement;
  }
  if (!active) return;

  setTargetElement().then(() => {
    if (selectedElement != null && targetElement != null) {
      // Do the calculation
      let selectedElementRect: DOMRect =
        selectedElement.getBoundingClientRect();
      let targetElementRect: DOMRect = targetElement.getBoundingClientRect();

      let selected: Rect = new Rect(selectedElementRect);
      let target: Rect = new Rect(targetElementRect);

      removeMarks();

      let top: number,
        bottom: number,
        left: number,
        right: number,
        outside: boolean;

      if (
        selected.containing(target) ||
        selected.inside(target) ||
        selected.colliding(target)
      ) {
        console.log(`containing || inside || colliding`);

        top = Math.round(
          Math.abs(selectedElementRect.top - targetElementRect.top)
        );
        bottom = Math.round(
          Math.abs(selectedElementRect.bottom - targetElementRect.bottom)
        );
        left = Math.round(
          Math.abs(selectedElementRect.left - targetElementRect.left)
        );
        right = Math.round(
          Math.abs(selectedElementRect.right - targetElementRect.right)
        );
        outside = false;
      } else {
        console.log(`outside`);

        top = Math.round(
          Math.abs(selectedElementRect.top - targetElementRect.bottom)
        );
        bottom = Math.round(
          Math.abs(selectedElementRect.bottom - targetElementRect.top)
        );
        left = Math.round(
          Math.abs(selectedElementRect.left - targetElementRect.right)
        );
        right = Math.round(
          Math.abs(selectedElementRect.right - targetElementRect.left)
        );
        outside = true;
      }

      placeMark(selected, target, 'top', `${top}px`, outside);
      placeMark(selected, target, 'bottom', `${bottom}px`, outside);
      placeMark(selected, target, 'left', `${left}px`, outside);
      placeMark(selected, target, 'right', `${right}px`, outside);
    }
  });
}

function setSelectedElement(): void {
  if (hoveringElement && hoveringElement !== selectedElement) {
    selectedElement = hoveringElement;
    clearPlaceholderElement('selected');

    let rect = selectedElement.getBoundingClientRect();
    
    createPlaceholderElement(
      'selected',
      rect.width,
      rect.height,
      rect.top,
      rect.left,
      `red`,
    );
  }
}

function setTargetElement(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (
      active &&
      hoveringElement &&
      hoveringElement !== selectedElement &&
      hoveringElement !== targetElement
    ) {
      targetElement = hoveringElement;

      clearPlaceholderElement('target');

      let rect = targetElement.getBoundingClientRect();

      createPlaceholderElement(
        'target',
        rect.width,
        rect.height,
        rect.top,
        rect.left,
        'blue',
      );
      resolve();
    }
  });
}

function preventPageScroll(active: boolean): void {
  if (active) {
    window.addEventListener('DOMMouseScroll', scrollingPreventDefault, false);
    window.addEventListener('wheel', scrollingPreventDefault, {
      passive: false,
    });
    window.addEventListener('mousewheel', scrollingPreventDefault, {
      passive: false,
    });
  } else {
    window.removeEventListener('DOMMouseScroll', scrollingPreventDefault);
    window.removeEventListener('wheel', scrollingPreventDefault);
    window.removeEventListener('mousewheel', scrollingPreventDefault);
  }
}

function scrollingPreventDefault(e: Event): void {
  e.preventDefault();
}

export default Spacing;
