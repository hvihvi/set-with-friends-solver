(()=>{"use strict";var r,t,i={741:(r,t)=>{t.__esModule=!0,t.scrapCards=void 0;var i=function(r){var t;return null!==(t=r.firstChild.childElementCount-1)&&void 0!==t?t:0},e=function(r){var t=r.firstChild.firstChild.firstChild.getAttribute("href");if("#squiggle"===t)return 0;if("#oval"===t)return 1;if("#diamond"===t)return 2;throw new Error},n=function(r){var t=r.firstChild.firstChild.children[1].getAttribute("stroke");if("#800080"===t)return 0;if("#008002"===t)return 1;if("#ff0101"===t)return 2;throw new Error},o=function(r){return"transparent"===r.firstChild.firstChild.children[0].getAttribute("fill")?0:r.firstChild.firstChild.children[0].getAttribute("mask").includes("mask-stripe")?1:2};t.scrapCards=function(){return Array.from(document.querySelectorAll('div[style*="visibility: visible"]')).map((function(r){return{shape:e(r),number:i(r),motif:o(r),color:n(r)}}))}},909:(r,t)=>{t.__esModule=!0,t.solve=void 0,t.solve=function(r){return[{color:1,motif:2,number:0,shape:1},{color:1,motif:2,number:0,shape:2},{color:1,motif:2,number:0,shape:0}]}}},e={};function n(r){var t=e[r];if(void 0!==t)return t.exports;var o=e[r]={exports:{}};return i[r](o,o.exports,n),o.exports}r=n(741),t=n(909),console.log((0,t.solve)((0,r.scrapCards)()))})();