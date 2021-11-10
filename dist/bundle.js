/*!
 * Spacing.js v1.0.4
 * Copyright (c) 2021 Steven Lei
 * Released under the MIT License.
*/(()=>{"use strict";var t={r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function o(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.r(e);var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.top=e.top,this.left=e.left,this.width=e.width,this.height=e.height,this.right=e.right,this.bottom=e.bottom}var e,n,i;return e=t,(n=[{key:"colliding",value:function(t){return!(this.top>t.bottom||this.right<t.left||this.bottom<t.top||this.left>t.right)}},{key:"containing",value:function(t){return this.left<=t.left&&t.left<this.width&&this.top<=t.top&&t.top<this.height}},{key:"inside",value:function(t){return t.top<=this.top&&this.top<=t.bottom&&t.top<=this.bottom&&this.bottom<=t.bottom&&t.left<=this.left&&this.left<=t.right&&t.left<=this.right&&this.right<=t.right}}])&&o(e.prototype,n),i&&o(e,i),t}();function i(t,e,o,n,i,l){var r=document.createElement("div");r.classList.add("spacing-js-".concat(t,"-placeholder")),r.style.border="2px solid ".concat(l),r.style.position="fixed",r.style.background="none",r.style.borderRadius="2px",r.style.padding="0",r.style.margin="0",r.style.width="".concat(e-2,"px"),r.style.height="".concat(o-2,"px"),r.style.top="".concat(n-1,"px"),r.style.left="".concat(i-1,"px"),r.style.pointerEvents="none",r.style.zIndex="9999",r.style.boxSizing="content-box",document.body.appendChild(r)}function l(t){var e;null===(e=document.querySelector(".spacing-js-".concat(t,"-placeholder")))||void 0===e||e.remove()}function r(t,e,o,n,i){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"none",r=document.createElement("span");r.style.backgroundColor="red",r.style.position="fixed",r.classList.add("spacing-js-marker"),r.style.width="".concat(t,"px"),r.style.height="".concat(e,"px"),"x"===l&&(r.style.borderLeft="1px solid rgba(255, 255, 255, .8)",r.style.borderRight="1px solid rgba(255, 255, 255, .8)"),"y"===l&&(r.style.borderTop="1px solid rgba(255, 255, 255, .8)",r.style.borderBottom="1px solid rgba(255, 255, 255, .8)"),r.style.pointerEvents="none",r.style.top="".concat(o,"px"),r.style.left="".concat(n,"px"),r.style.zIndex="9998",r.style.boxSizing="content-box";var a=document.createElement("span");if(a.classList.add("spacing-js-value"),a.style.backgroundColor="red",a.style.color="white",a.style.fontSize="10px",a.style.display="inline-block",a.style.fontFamily="Helvetica, sans-serif",a.style.fontWeight="bold",a.style.borderRadius="20px",a.style.position="fixed",a.style.width="42px",a.style.lineHeight="15px",a.style.height="16px",a.style.textAlign="center",a.style.zIndex="10000",a.style.pointerEvents="none",a.innerText=i,a.style.boxSizing="content-box","x"===l){var s=o+e/2-7;s>document.documentElement.clientHeight-20&&(s=document.documentElement.clientHeight-20),s<0&&(s=6),a.style.top="".concat(s,"px"),a.style.left="".concat(n+6,"px")}else if("y"===l){var h=n+t/2-20;h>document.documentElement.clientWidth-48&&(h=document.documentElement.clientWidth-48),h<0&&(h=6),a.style.top="".concat(o+6,"px"),a.style.left="".concat(h,"px")}document.body.appendChild(r),document.body.appendChild(a)}function a(t,e,o,n){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if("top"===o){var l=1,a=Math.abs(t.top-e.top),s=Math.floor((Math.min(t.right,e.right)+Math.max(t.left,e.left))/2),h=Math.min(t.top,e.top);if(i){if(t.top<e.top)return;if(t.right<e.left||t.left>e.right)return;a=Math.abs(e.bottom-t.top),h=Math.min(e.bottom,t.top)}r(l,a,h,s,n,"x")}else if("left"===o){var c=Math.abs(t.left-e.left),d=1,f=Math.floor((Math.min(t.bottom,e.bottom)+Math.max(t.top,e.top))/2),u=Math.min(t.left,e.left);if(i){if(t.left<e.left)return;if(t.bottom<e.top||t.top>e.bottom)return;c=Math.abs(t.left-e.right),u=Math.min(e.right,t.left)}r(c,d,f,u,n,"y")}else if("right"===o){var p=Math.abs(t.right-e.right),m=1,b=Math.floor((Math.min(t.bottom,e.bottom)+Math.max(t.top,e.top))/2),g=Math.min(t.right,e.right);if(i){if(t.left>e.right)return;if(t.bottom<e.top||t.top>e.bottom)return;p=Math.abs(t.right-e.left)}r(p,m,b,g,n,"y")}else if("bottom"===o){var y=1,v=Math.abs(t.bottom-e.bottom),x=Math.min(t.bottom,e.bottom),M=Math.floor((Math.min(t.right,e.right)+Math.max(t.left,e.left))/2);if(i){if(e.bottom<t.top)return;if(t.right<e.left||t.left>e.right)return;v=Math.abs(t.bottom-e.top)}r(y,v,x,M,n,"x")}}function s(){document.querySelectorAll(".spacing-js-marker").forEach((function(t){t.remove()})),document.querySelectorAll(".spacing-js-value").forEach((function(t){t.remove()}))}var h,c,d,f=!1;function u(t){t?(d=document.body.style.overflow,document.body.style.overflow="hidden"):document.body.style.overflow=d}({start:function(){document.body?(window.addEventListener("keydown",(function(t){"Alt"===t.key&&(f=!0,function(){var t=document.querySelectorAll(":hover"),e=t[t.length-1];if(e!==h){h=e,l("selected");var o=h.getBoundingClientRect();i("selected",o.width,o.height,o.top,o.left,"red")}}(),u(!0))})),window.addEventListener("keyup",(function(t){f=!1,l("selected"),l("target"),h=null,c=null,s(),u(!1)})),window.addEventListener("mousemove",(function(t){new Promise((function(t,e){var o=document.querySelectorAll(":hover"),n=o[o.length-1];if(f&&n!==h&&n!==c){c=n,l("target");var r=c.getBoundingClientRect();i("target",r.width,r.height,r.top,r.left,"blue"),t()}})).then((function(){if(null!=h&&null!=c){var t,e,o,i,l,r=h.getBoundingClientRect(),d=c.getBoundingClientRect(),f=new n(r),u=new n(d);s(),f.containing(u)||f.inside(u)||f.colliding(u)?(t=Math.round(Math.abs(r.top-d.top)),e=Math.round(Math.abs(r.bottom-d.bottom)),o=Math.round(Math.abs(r.left-d.left)),i=Math.round(Math.abs(r.right-d.right)),l=!1):(t=Math.round(Math.abs(r.top-d.bottom)),e=Math.round(Math.abs(r.bottom-d.top)),o=Math.round(Math.abs(r.left-d.right)),i=Math.round(Math.abs(r.right-d.left)),l=!0),a(f,u,"top","".concat(t,"px"),l),a(f,u,"bottom","".concat(e,"px"),l),a(f,u,"left","".concat(o,"px"),l),a(f,u,"right","".concat(i,"px"),l)}}))}))):console.warn("Unable to initialise, document.body does not exist.")}}).start(),window.Spacing=e})();