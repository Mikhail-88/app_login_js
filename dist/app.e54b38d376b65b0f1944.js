!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=362)}({131:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},132:function(e,t,n){"use strict";var r=n(14);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))})))})),i=a.join("&")}if(i){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},133:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},134:function(e,t,n){"use strict";(function(t){var r=n(14),o=n(351),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n(135)),s),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(i)})),e.exports=c}).call(this,n(350))},135:function(e,t,n){"use strict";var r=n(14),o=n(352),i=n(132),a=n(354),s=n(357),c=n(358),u=n(136);e.exports=function(e){return new Promise((function(t,f){var l=e.data,d=e.headers;r.isFormData(l)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password||"";d.Authorization="Basic "+btoa(m+":"+h)}var v=a(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in p?s(p.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:n,config:e,request:p};o(t,f,r),p=null}},p.onabort=function(){p&&(f(u("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){f(u("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(u(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var g=n(359),y=(e.withCredentials||c(v))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){void 0===l&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),f(e),p=null)})),void 0===l&&(l=null),p.send(l)}))}},136:function(e,t,n){"use strict";var r=n(353);e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},137:function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],a=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(i,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])})),r.forEach(a,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}));var s=o.concat(i).concat(a),c=Object.keys(t).filter((function(e){return-1===s.indexOf(e)}));return r.forEach(c,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},138:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},139:function(e,t,n){e.exports=n(345)},14:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=n(131),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function s(e){return void 0===e}function c(e){return null!==e&&"object"===r(e)}function u(e){return"[object Function]"===i.call(e)}function f(e,t){if(null!=e)if("object"!==r(e)&&(e=[e]),a(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:c,isUndefined:s,isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return c(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:f,merge:function e(){var t={};function n(n,o){"object"===r(t[o])&&"object"===r(n)?t[o]=e(t[o],n):t[o]=n}for(var o=0,i=arguments.length;o<i;o++)f(arguments[o],n);return t},deepMerge:function e(){var t={};function n(n,o){"object"===r(t[o])&&"object"===r(n)?t[o]=e(t[o],n):"object"===r(n)?t[o]=e({},n):t[o]=n}for(var o=0,i=arguments.length;o<i;o++)f(arguments[o],n);return t},extend:function(e,t,n){return f(t,(function(t,r){e[r]=n&&"function"==typeof t?o(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},343:function(e,t,n){},344:function(e,t,n){},345:function(e,t,n){"use strict";var r=n(14),o=n(131),i=n(346),a=n(137);function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(n(134));c.Axios=i,c.create=function(e){return s(a(c.defaults,e))},c.Cancel=n(138),c.CancelToken=n(360),c.isCancel=n(133),c.all=function(e){return Promise.all(e)},c.spread=n(361),e.exports=c,e.exports.default=c},346:function(e,t,n){"use strict";var r=n(14),o=n(132),i=n(347),a=n(348),s=n(137);function c(e){this.defaults=e,this.interceptors={request:new i,response:new i}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[a,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=c},347:function(e,t,n){"use strict";var r=n(14);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},348:function(e,t,n){"use strict";var r=n(14),o=n(349),i=n(133),a=n(134);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},349:function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},350:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c,u=[],f=!1,l=-1;function d(){f&&c&&(f=!1,c.length?u=c.concat(u):l=-1,u.length&&p())}function p(){if(!f){var e=s(d);f=!0;for(var t=u.length;t;){for(c=u,u=[];++l<t;)c&&c[l].run();l=-1,t=u.length}c=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||f||s(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},351:function(e,t,n){"use strict";var r=n(14);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},352:function(e,t,n){"use strict";var r=n(136);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},353:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},354:function(e,t,n){"use strict";var r=n(355),o=n(356);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},355:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},356:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},357:function(e,t,n){"use strict";var r=n(14),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}})),a):a}},358:function(e,t,n){"use strict";var r=n(14);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},359:function(e,t,n){"use strict";var r=n(14);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},360:function(e,t,n){"use strict";var r=n(138);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},361:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},362:function(e,t,n){"use strict";n.r(t);n(343),n(344);var r={navTab:document.getElementById("nav-tab"),tabLogin:document.getElementById("tab-login"),tabRegister:document.getElementById("tab-register"),loginContent:document.querySelector(".login-content"),registerContent:document.querySelector(".register-content"),formLogin:document.forms.loginForm,inputEmail:document.getElementById("emailLog"),inputPassword:document.getElementById("passwordLog"),formReg:document.forms.registerForm,inputRegEmail:document.getElementById("email"),inputRegPassword:document.getElementById("password"),nickname:document.getElementById("nickname"),first_name:document.getElementById("first_name"),last_name:document.getElementById("last_name"),phone:document.getElementById("phone"),country:document.getElementById("country"),city:document.getElementById("city"),date_of_birth:document.getElementById("date_of_birth"),gender:document.querySelector(".custom-select"),loginBlock:document.querySelector(".login-page-wrapp"),newsBlock:document.querySelector(".news_section"),formNews:document.forms.newsControls,btnExit:document.getElementById("btnExit")},o={email:/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/,password:/^[0-9a-zA-Z]{8,}$/,nickname:/^[a-zA-Z]{3,}$/,first_name:/^[a-zA-Z]{3,}$/,last_name:/^[a-zA-Z]{3,}$/,phone:/^\d{10}$/,country:/^[a-zA-Z]{2,}$/,city:/^[a-zA-Z]{2,}$/};var i=function(e){var t=e.dataset.required;return!o[t]||o[t].test(e.value)};function a(e){var t=e.parentElement,n=function(e){return'\n    <div class="invalid-feedback">'.concat(e,"</div>\n  ")}(e.dataset.invalidMessage||"Invalid text");e.classList.add("is-invalid"),t.insertAdjacentHTML("beforeend",n)}var s=n(139),c={apiUrl:"https://mlp-demo.herokuapp.com/api/public"};function u(e){if(!e.url.includes("auth")){var t=localStorage.getItem("my_app_token");e.headers["x-access-token"]=t}return e}function f(e){if(e.config.url.includes("login")){var t=e.data.token;localStorage.setItem("my_app_token",t)}return e}function l(e){return e.data}function d(e){return console.dir(e),Promise.reject(e)}var p=n.n(s).a.create({baseURL:c.apiUrl,headers:{"Content-Type":"application/json"}});!function(e){e.interceptors.request.use(u),e.interceptors.response.use(f),e.interceptors.response.use(l,d)}(p);var m=p;function h(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){h(i,r,o,a,s,"next",e)}function s(e){h(i,r,o,a,s,"throw",e)}a(void 0)}))}}function g(e,t){return y.apply(this,arguments)}function y(){return(y=v(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.post("/auth/login",JSON.stringify({email:t,password:n}));case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function b(e){return w.apply(this,arguments)}function w(){return(w=v(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.post("/auth/signup",JSON.stringify(t));case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",Promise.reject(e.t0));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function x(){return document.querySelector(".notify-container")}function E(e,t,n){return'\n    <div class="alert '.concat(t,'" data-index="').concat(n,'">').concat(e,"</div>\n  ")}function S(){return document.querySelectorAll(".notify-container .alert").length}function R(){document.body.insertAdjacentHTML("afterbegin",'\n    <div class="notify-container" style="position: fixed; top: 20px; left: 20px; z-index: 9;"></div>\n  ')}function T(e){var t;(t=void 0===e?document.querySelector(".notify-container .alert"):document.querySelector('.notify-container .alert[data-index="'.concat(e,'"]')))?x().removeChild(t):console.warn("Alert not found")}var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.msg,n=void 0===t?"Info message":t,r=e.className,o=void 0===r?"alert-info":r,i=e.timeout,a=void 0===i?5e3:i;x()||R();var s=S(),c=E(n,o,s),u=x();u.insertAdjacentHTML("beforeend",c),setTimeout((function(){return T(s)}),a)};function L(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function A(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){L(i,r,o,a,s,"next",e)}function s(e){L(i,r,o,a,s,"throw",e)}a(void 0)}))}}var k,C,_=(k="ba8620836f104b76bbdaad87e85482d0",C="https://newsapi.org/v2",{topHeadlines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ua";return A(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(C,"/top-headlines?country=").concat(e,"&category=technology&apiKey=").concat(k));case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:return t.prev=10,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",Promise.reject(t.t0));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},everything:function(e){return A(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(C,"/everything?q=").concat(e,"&apiKey=").concat(k));case 3:return n=t.sent,t.next=6,n.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:return t.prev=10,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",Promise.reject(t.t0));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()}});function N(){document.body.insertAdjacentHTML("afterbegin",'\n    <div class="progress">\n      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>\n    </div>\n  ')}function B(){var e=document.querySelector(".progress");e&&e.remove()}var O=function(e){var t=document.querySelector(".news-container");t.children.length&&function(e){var t=e.lastElementChild;for(;t;)e.removeChild(t),t=e.lastElementChild}(t);var n="";e.forEach((function(e){var t,r,o,i,a,s=(r=(t=e).urlToImage,o=t.title,i=t.url,a=t.description,'\n    <div class="card">\n      <img src="'.concat(r||"https://stockpictures.io/wp-content/uploads/2020/01/image-not-found-big-768x432.png",'" class="card-img-top" alt="img">\n      <div class="card-body">\n        <h5 class="card-title">').concat(o||"",'</h5>\n        <p class="card-text">').concat(a||"",'</p>\n      <a href="').concat(i,'" class="btn btn-info" target="_blank">Read more</a>\n      </div>\n    </div>\n  '));n+=s})),t.insertAdjacentHTML("beforeend",'\n    <div class="news_wrapper">'.concat(n,"</div>\n  "))};function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function q(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function I(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){q(i,r,o,a,s,"next",e)}function s(e){q(i,r,o,a,s,"throw",e)}a(void 0)}))}}var U=r.navTab,D=r.tabLogin,z=r.tabRegister,M=r.loginContent,H=r.registerContent,F=r.formLogin,$=r.inputEmail,Z=r.inputPassword,J=r.formReg,X=r.date_of_birth,K=r.gender,V=r.loginBlock,G=r.newsBlock,Q=r.formNews,W=r.btnExit,Y=[$,Z],ee=[r.inputRegEmail,r.inputRegPassword,r.nickname,r.first_name,r.last_name,r.phone,r.country,r.city],te=Q.elements["country-news"],ne=Q.elements.search;function re(){var e=te.value,t=ne.value;t?(N(),_.everything(t).then((function(e){if(B(),!e.articles.length)return j({msg:"Nothing found for this request.",className:"alert-danger"}),void(ne.value="");O(e.articles),ne.value=""})).catch((function(e){j({msg:"Something wrong... ".concat(e),className:"alert-danger"}),B()}))):(N(),_.topHeadlines(e).then((function(e){B(),O(e.articles)})).catch((function(e){j({msg:"Something wrong... ".concat(e),className:"alert-danger"}),B()})))}function oe(){return(oe=I(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Y.every((function(e){var t=i(e);return t||a(e),t}))){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,N(),e.next=7,g($.value,Z.value);case 7:B(),F.reset(),j({msg:"Login success.",className:"alert-success"}),V.style.display="none",G.style.display="block",re(),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(3),j({msg:"No user found. Please, register.",className:"alert-danger"}),B(),F.reset();case 20:case"end":return e.stop()}}),e,null,[[3,15]])})))).apply(this,arguments)}function ie(){return(ie=I(regeneratorRuntime.mark((function e(){var t,n,r,o,s,c,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee.every((function(e){var t=i(e);return t||a(e),t}))){e.next=3;break}return e.abrupt("return");case 3:return t={},ee.forEach((function(e){t[e.id]=e.value})),t.gender_orientation=K.value,n=X.value.split("-"),r=P(n,3),o=r[0],s=r[1],c=r[2],t.date_of_birth_day=c,t.date_of_birth_month=s,t.date_of_birth_year=o,e.prev=10,N(),e.next=14,b(t);case 14:u=e.sent,B(),J.reset(),j({msg:"".concat(u.message),className:"alert-success"}),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(10),j({msg:"Register faild",className:"alert-danger"});case 23:case"end":return e.stop()}}),e,null,[[10,20]])})))).apply(this,arguments)}[].concat(Y,ee).forEach((function(e){return e.addEventListener("focus",(function(){return n=(t=e).parentElement,void((r=n.querySelector(".invalid-feedback"))&&(t.classList.remove("is-invalid"),n.removeChild(r)));var t,n,r}))})),W.addEventListener("click",(function(){G.style.display="none",V.style.display="flex"})),U.addEventListener("click",(function(e){e.preventDefault(),"tab-login"===e.target.id?(H.classList.add("hidden-form"),M.classList.remove("hidden-form"),D.classList.add("color"),z.classList.remove("color")):"tab-register"===e.target.id&&(M.classList.add("hidden-form"),H.classList.remove("hidden-form"),D.classList.remove("color"),z.classList.add("color"))})),F.addEventListener("submit",(function(e){e.preventDefault(),function(){oe.apply(this,arguments)}()})),J.addEventListener("submit",(function(e){e.preventDefault(),function(){ie.apply(this,arguments)}()})),Q.addEventListener("submit",(function(e){e.preventDefault(),re()}))}});