(()=>{"use strict";var r,n,i,t={202:(r,n)=>{n.__esModule=!0,n.format=void 0,n.format=function(r){return""+i(r[0])+i(r[1])+i(r[2])};var i=function(r){return"".concat(t(r.shape).repeat(r.number+1)," ").concat(e(r.color)," ").concat(o(r.motif),"\n  ")},t=function(r){switch(r){case 1:return"O";case 2:return"⬦";case 0:return"S"}},e=function(r){switch(r){case 1:return"vert";case 2:return"rouge";case 0:return"violet"}},o=function(r){switch(r){case 2:return"full";case 1:return"stripe";case 0:return"transparent"}}},741:(r,n)=>{n.__esModule=!0,n.scrapCards=void 0;var i=function(r){var n;return null!==(n=r.firstChild.childElementCount-1)&&void 0!==n?n:0},t=function(r){var n=r.firstChild.firstChild.firstChild.getAttribute("href");if("#squiggle"===n)return 0;if("#oval"===n)return 1;if("#diamond"===n)return 2;throw new Error},e=function(r){var n=r.firstChild.firstChild.children[1].getAttribute("stroke");if("#800080"===n)return 0;if("#008002"===n)return 1;if("#ff0101"===n)return 2;throw new Error},o=function(r){return"transparent"===r.firstChild.firstChild.children[0].getAttribute("fill")?0:r.firstChild.firstChild.children[0].getAttribute("mask").includes("mask-stripe")?1:2};n.scrapCards=function(){return Array.from(document.querySelectorAll('div[style*="visibility: visible"]')).map((function(r){return{shape:t(r),number:i(r),motif:o(r),color:e(r)}}))}},909:function(r,n){var i=this&&this.__spreadArray||function(r,n,i){if(i||2===arguments.length)for(var t,e=0,o=n.length;e<o;e++)!t&&e in n||(t||(t=Array.prototype.slice.call(n,0,e)),t[e]=n[e]);return r.concat(t||Array.prototype.slice.call(n))};n.__esModule=!0,n.modulo3=n.findMissingDimension=n.findMissing=n.solve=void 0,n.solve=function(r){return t(r)((0,n.findMissing)(r[0],r[1]))?[r[0],r[1],(0,n.findMissing)(r[0],r[1])]:(0,n.solve)(e(r))};var t=function(r){return function(n){return r.some((function(r){return r.color===n.color&&r.motif===n.motif&&r.number===n.number&&r.shape===n.shape}))}};n.findMissing=function(r,i){return{color:(0,n.findMissingDimension)(r.color,i.color),motif:(0,n.findMissingDimension)(r.motif,i.motif),number:(0,n.findMissingDimension)(r.number,i.number),shape:(0,n.findMissingDimension)(r.shape,i.shape)}},n.findMissingDimension=function(r,i){return(0,n.modulo3)(3-(r+i))},n.modulo3=function(r){return(r%3+3)%3};var e=function(r){for(var n,t=i([],r,!0),e=t.length-1;e>0;e--){var o=Math.floor(Math.random()*(e+1));n=[t[o],t[e]],t[e]=n[0],t[o]=n[1]}return t}}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r].call(i.exports,i,i.exports,o),i.exports}r=o(202),n=o(741),i=o(909),console.log((0,r.format)((0,i.solve)((0,n.scrapCards)())))})();