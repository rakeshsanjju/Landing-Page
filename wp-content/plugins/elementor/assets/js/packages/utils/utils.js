/*! For license information please see utils.js.LICENSE.txt */
!function(){"use strict";var e={d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{ElementorError:function(){return r},createError:function(){return n},ensureError:function(){return o},getSessionStorageItem:function(){return s},removeSessionStorageItem:function(){return u},setSessionStorageItem:function(){return c}});var r=class extends Error{context;code;constructor(e,{code:t,context:r=null,cause:n=null}){super(e,{cause:n}),this.context=r,this.code=t}},n=({code:e,message:t})=>class extends r{constructor({cause:r,context:n}={}){super(t,{cause:r,code:e,context:n})}},o=e=>{if(e instanceof Error)return e;let t,r=null;try{t=JSON.stringify(e)}catch(e){r=e,t="Unable to stringify the thrown value"}return new Error(`Unexpected non-error thrown: ${t}`,{cause:r})},s=e=>JSON.parse(sessionStorage.getItem(e)||"{}").item,c=(e,t)=>{sessionStorage.setItem(e,JSON.stringify({item:t}))},u=e=>{sessionStorage.removeItem(e)};(window.elementorV2=window.elementorV2||{}).utils=t}();