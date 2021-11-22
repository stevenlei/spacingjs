import { PlaceholderType } from './type';

export function createPlaceholderElement(
  type: PlaceholderType,
  width: number,
  height: number,
  top: number,
  left: number,
  color: string,
): void {
  let placeholder: HTMLDivElement = document.createElement('div');
  placeholder.classList.add(`spacing-js-${type}-placeholder`);
  placeholder.style.border = `2px solid ${color}`;
  placeholder.style.position = 'fixed';
  placeholder.style.background = 'none';
  placeholder.style.borderRadius = '2px';
  placeholder.style.padding = '0';
  placeholder.style.margin = '0';
  placeholder.style.width = `${width - 2}px`;
  placeholder.style.height = `${height - 2}px`;
  placeholder.style.top = `${top - 1}px`;
  placeholder.style.left = `${left - 1}px`;
  placeholder.style.pointerEvents = 'none';
  placeholder.style.zIndex = '9999';
  placeholder.style.boxSizing = 'content-box';
  document.body.appendChild(placeholder);

  let dimension: HTMLSpanElement = document.createElement('span');
  dimension.style.background = color;
  dimension.style.position = 'fixed';
  dimension.style.display = 'inline-block';
  dimension.style.color = '#fff';
  dimension.style.padding = '2px 4px';
  dimension.style.fontSize = '10px';

  let arrow = '';

  let topOffset = top;

  if (top < 20) {
    if (top < 0) {
      topOffset = 0;
      arrow = '↑ '; // Top-Left corner is offscreen
    }
    dimension.style.borderRadius = '2px 0 2px 0';
  } else {
    dimension.style.transform = 'translateY(calc(-100% + 2px))';
    dimension.style.borderRadius = '2px 2px 0 0';
  }

  dimension.style.top = `${topOffset - 1}px`;
  dimension.style.left = `${left - 1}px`;
  dimension.innerText = `${arrow} ${Math.round(width)}px × ${Math.round(height)}px`;
  placeholder.appendChild(dimension);
}

export function clearPlaceholderElement(type: PlaceholderType): void {
  document.querySelector(`.spacing-js-${type}-placeholder`)?.remove();
}
