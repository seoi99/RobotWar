!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n=class{constructor(t){this.ctx=t,this.image=new Image,this.w=60,this.h=60,this.FrameNum=1,this.canvasWidth=500,this.canvasHeight=500,this.x=200,this.y=200,this.dx=1,this.dy=1,this.draw=this.draw.bind(this)}draw(){this.image.src=`./asset/robot/Idle (${this.FrameNum}).png`,this.ctx.drawImage(this.image,this.x,this.y,this.w,this.h),this.FrameNum++,this.FrameNum>10&&(this.FrameNum=1),requestAnimationFrame(this.draw)}action(){}};document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("MyCanvas");t.width=500,t.height=500;const e=t.getContext("2d");new n(e).draw()})}]);
//# sourceMappingURL=bundle.js.map