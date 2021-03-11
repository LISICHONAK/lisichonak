!function(){var t,e,n,r,o={4258:function(t,e,n){var r,o,i,u=n(9142);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.5+7f2b526d
 */i=function(){"use strict";function t(t){return"function"==typeof t}var e=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},r=0,o=void 0,i=void 0,s=function(t,e){v[r]=t,v[r+1]=e,2===(r+=2)&&(i?i(m):w())},a="undefined"!=typeof window?window:void 0,f=a||{},l=f.MutationObserver||f.WebKitMutationObserver,h="undefined"==typeof self&&void 0!==u&&"[object process]"==={}.toString.call(u),d="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel;function p(){var t=setTimeout;return function(){return t(m,1)}}var v=new Array(1e3);function m(){for(var t=0;t<r;t+=2)(0,v[t])(v[t+1]),v[t]=void 0,v[t+1]=void 0;r=0}var y,b,g,_,w=void 0;function T(t,e){var n=this,r=new this.constructor(S);void 0===r[E]&&D(r);var o=n._state;if(o){var i=arguments[o-1];s((function(){return q(o,r,i,n._result)}))}else N(n,r,t,e);return r}function A(t){if(t&&"object"===c(t)&&t.constructor===this)return t;var e=new this(S);return P(e,t),e}h?w=function(){return u.nextTick(m)}:l?(b=0,g=new l(m),_=document.createTextNode(""),g.observe(_,{characterData:!0}),w=function(){_.data=b=++b%2}):d?((y=new MessageChannel).port1.onmessage=m,w=function(){return y.port2.postMessage(0)}):w=void 0===a?function(){try{var t=Function("return this")().require("vertx");return void 0!==(o=t.runOnLoop||t.runOnContext)?function(){o(m)}:p()}catch(t){return p()}}():p();var E=Math.random().toString(36).substring(2);function S(){}var j=void 0,k={error:null};function C(t){try{return t.then}catch(t){return k.error=t,k}}function O(e,n,r){n.constructor===e.constructor&&r===T&&n.constructor.resolve===A?function(t,e){1===e._state?L(t,e._result):2===e._state?M(t,e._result):N(e,void 0,(function(e){return P(t,e)}),(function(e){return M(t,e)}))}(e,n):r===k?(M(e,k.error),k.error=null):void 0===r?L(e,n):t(r)?function(t,e,n){s((function(t){var r=!1,o=function(t,e,n,r){try{t.call(e,n,r)}catch(t){return t}}(n,e,(function(n){r||(r=!0,e!==n?P(t,n):L(t,n))}),(function(e){r||(r=!0,M(t,e))}),t._label);!r&&o&&(r=!0,M(t,o))}),t)}(e,n,r):L(e,n)}function P(t,e){var n,r;t===e?M(t,new TypeError("You cannot resolve a promise with itself")):(r=c(n=e),null===n||"object"!==r&&"function"!==r?L(t,e):O(t,e,C(e)))}function x(t){t._onerror&&t._onerror(t._result),F(t)}function L(t,e){t._state===j&&(t._result=e,t._state=1,0!==t._subscribers.length&&s(F,t))}function M(t,e){t._state===j&&(t._state=2,t._result=e,s(x,t))}function N(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+1]=n,o[i+2]=r,0===i&&t._state&&s(F,t)}function F(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,u=0;u<e.length;u+=3)r=e[u],o=e[u+n],r?q(n,r,o,i):o(i);t._subscribers.length=0}}function q(e,n,r,o){var i=t(r),u=void 0,c=void 0,s=void 0,a=void 0;if(i){if((u=function(t,e){try{return t(e)}catch(t){return k.error=t,k}}(r,o))===k?(a=!0,c=u.error,u.error=null):s=!0,n===u)return void M(n,new TypeError("A promises callback cannot return that same promise."))}else u=o,s=!0;n._state!==j||(i&&s?P(n,u):a?M(n,c):1===e?L(n,u):2===e&&M(n,u))}var B=0;function D(t){t[E]=B++,t._state=void 0,t._result=void 0,t._subscribers=[]}var Y=function(){function t(t,n){this._instanceConstructor=t,this.promise=new t(S),this.promise[E]||D(this.promise),e(n)?(this.length=n.length,this._remaining=n.length,this._result=new Array(this.length),0===this.length?L(this.promise,this._result):(this.length=this.length||0,this._enumerate(n),0===this._remaining&&L(this.promise,this._result))):M(this.promise,new Error("Array Methods must be provided an Array"))}return t.prototype._enumerate=function(t){for(var e=0;this._state===j&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===A){var o=C(t);if(o===T&&t._state!==j)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===K){var i=new n(S);O(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n((function(e){return e(t)})),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===j&&(this._remaining--,2===t?M(r,n):this._result[e]=n),0===this._remaining&&L(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;N(t,void 0,(function(t){return n._settledAt(1,e,t)}),(function(t){return n._settledAt(2,e,t)}))},t}(),K=function(){function e(t){this[E]=B++,this._result=this._state=void 0,this._subscribers=[],S!==t&&("function"!=typeof t&&function(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}(),this instanceof e?function(t,e){try{e((function(e){P(t,e)}),(function(e){M(t,e)}))}catch(e){M(t,e)}}(this,t):function(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}())}return e.prototype.catch=function(t){return this.then(null,t)},e.prototype.finally=function(e){var n=this,r=n.constructor;return t(e)?n.then((function(t){return r.resolve(e()).then((function(){return t}))}),(function(t){return r.resolve(e()).then((function(){throw t}))})):n.then(e,e)},e}();return K.prototype.then=T,K.all=function(t){return new Y(this,t).promise},K.race=function(t){var n=this;return e(t)?new n((function(e,r){for(var o=t.length,i=0;i<o;i++)n.resolve(t[i]).then(e,r)})):new n((function(t,e){return e(new TypeError("You must pass an array to race."))}))},K.resolve=A,K.reject=function(t){var e=new this(S);return M(e,t),e},K._setScheduler=function(t){i=t},K._setAsap=function(t){s=t},K._asap=s,K.polyfill=function(){var t=void 0;if(void 0!==n.g)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=K},K.Promise=K,K},"object"===c(e)?t.exports=i():void 0===(o="function"==typeof(r=i)?r.call(e,n,e,t):r)||(t.exports=o)},9142:function(t){var e,n,r=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(t){n=i}}();var c,s=[],a=!1,f=-1;function l(){a&&c&&(a=!1,c.length?s=c.concat(s):f=-1,s.length&&h())}function h(){if(!a){var t=u(l);a=!0;for(var e=s.length;e;){for(c=s,s=[];++f<e;)c&&c[f].run();f=-1,e=s.length}c=null,a=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function p(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new d(t,e)),1!==s.length||a||u(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},i={};function u(t){if(i[t])return i[t].exports;var e=i[t]={id:t,loaded:!1,exports:{}};return o[t].call(e.exports,e,e.exports,u),e.loaded=!0,e.exports}u.m=o,u.amdO={},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,{a:e}),e},u.d=function(t,e){for(var n in e)u.o(e,n)&&!u.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},u.f={},u.e=function(t){return Promise.all(Object.keys(u.f).reduce((function(e,n){return u.f[n](t,e),e}),[]))},u.u=function(t){return({429:"polyfills",592:"common",659:"account-nav-menu"}[t]||t)+".chunk."+{70:"c500c15081fa3eb2b4f4",429:"7e507d6e27a0c6017f1d",592:"5455cf7f560b481c258f",659:"3dfea44f1b3949cd85c2",849:"b4d5ddb99a4c2020c924",997:"a28ac3738e54677ed9b7"}[t]+".js"},u.miniCssF=function(t){return 354===t?"undefined/accountNavMenu.css":t+".chunk."+{70:"31d6cfe0d16ae931b73c",429:"31d6cfe0d16ae931b73c",592:"31d6cfe0d16ae931b73c",659:"a3f1d8fabaee70946323",849:"31d6cfe0d16ae931b73c",997:"31d6cfe0d16ae931b73c"}[t]+".css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t={},e="minecraft-net-coreapps:",u.l=function(n,r,o,i){if(t[n])t[n].push(r);else{var c,s;if(void 0!==o)for(var a=document.getElementsByTagName("script"),f=0;f<a.length;f++){var l=a[f];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==e+o){c=l;break}}c||(s=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.setAttribute("data-webpack",e+o),c.src=n),t[n]=[r];var h=function(e,r){c.onerror=c.onload=null,clearTimeout(d);var o=t[n];if(delete t[n],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(t){return t(r)})),e)return e(r)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=h.bind(null,c.onerror),c.onload=h.bind(null,c.onload),s&&document.head.appendChild(c)}},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},u.j=354,u.p="/profilejs/fc3f33ad3586f3b99286/",n=function(t){return new Promise((function(e,n){var r=u.miniCssF(t),o=u.p+r;if(function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(u=n[r]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(o===t||o===e))return u}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var u;if((o=(u=i[r]).getAttribute("data-href"))===t||o===e)return u}}(r,o))return e();!function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=u,s.request=c,o.parentNode.removeChild(o),r(s)}},o.href=e,document.head.appendChild(o)}(t,o,e,n)}))},r={354:0},u.f.miniCss=function(t,e){r[t]?e.push(r[t]):0!==r[t]&&{659:1}[t]&&e.push(r[t]=n(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))},function(){var t={354:0};u.f.j=function(e,n){var r=u.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=t[e]=[n,o]}));n.push(r[2]=o);var i=u.p+u.u(e),c=new Error;u.l(i,(function(n){if(u.o(t,e)&&(0!==(r=t[e])&&(t[e]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,r[1](c)}}),"chunk-"+e,e)}};var e=function(e,n){for(var r,o,i=n[0],c=n[1],s=n[2],a=0,f=[];a<i.length;a++)o=i[a],u.o(t,o)&&t[o]&&f.push(t[o][0]),t[o]=0;for(r in c)u.o(c,r)&&(u.m[r]=c[r]);for(s&&s(u),e&&e(n);f.length;)f.shift()()},n=self.webpackChunkminecraft_net_coreapps=self.webpackChunkminecraft_net_coreapps||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}(),function(){"use strict";"function"!=typeof window.Promise&&u(4258).polyfill(),u.e(659).then(u.bind(u,1979)),Promise.all([u.e(429),u.e(592),u.e(997),u.e(70),u.e(849)]).then(u.bind(u,6282))}()}();
//# sourceMappingURL=accountNavMenu.js.map