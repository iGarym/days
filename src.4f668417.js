parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Dpdk":[function(require,module,exports) {
var define;
var t;!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof t&&t.amd)t([],r);else{var n=r();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=2)}([function(t,e,r){window,t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=1)}([function(t,e,r){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.r(e),r.d(e,"g",function(){return o});var o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div";return function(){var r=document.createElement(e),o=function(t){return null!==t&&"object"===n(t)}(t)?t:{class:t};Object.keys(o).forEach(function(t){/^_/.test(t)?(_data[o[t]]=void 0,_watcher.on(o[t],function(e){r[t.slice(1)]=e})):/^\$/.test(t)?r.addEventListener(t.slice(1),function(e){o[t](_data,e)}):r.setAttribute(t,o[t])});for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];return a.forEach(function(t){!function(t){return t instanceof HTMLElement&&1===t.nodeType}(t)?"img"===e.toLowerCase()&&function(t){return"string"==typeof t||t instanceof String}(t)?r.setAttribute("src",t):r.innerText=t:r.appendChild(t)}),r}}},function(t,e,r){t.exports=r(0)}])},function(t,e,r){"use strict";r.r(e),r.d(e,"Flip",function(){return s});var n=r(0);function o(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=function(t,e){return(t>e?t:e).toString().length},u=function(t,e){return function(t){return t.split("").map(Number)}(function t(e,r){return e.length<r?t("0"+e,r):e}(t.toString(),e)).reverse()},s=function(){function t(e){var r=this,n=e.node,i=e.from,u=void 0===i?0:i,s=e.to,c=e.duration,f=void 0===c?.5:c,l=e.delay,p=e.easeFn,d=void 0===p?function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}:p,y=e.systemArr,h=void 0===y?o(Array(10).keys()):y,v=e.direct,b=void 0===v||v,m=e.separator,g=e.separateEvery,A=void 0===g?3:g;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.beforeArr=[],this.afterArr=[],this.ctnrArr=[],this.duration=1e3*f,this.systemArr=h,this.easeFn=d,this.from=u,this.to=s||0,this.node=n,this.direct=b,this.separator=m,this.separateEvery=A,this._initHTML(a(this.from,this.to)),void 0!==s&&(l?setTimeout(function(){return r.flipTo({to:r.to,direct:b})},1e3*l):this.flipTo({to:this.to,direct:b}))}return function(t,e,r){e&&i(t.prototype,e)}(t,[{key:"_initHTML",value:function(t){var e=this;this.node.classList.add("number-flip"),this.node.style.position="relative",this.node.style.overflow="hidden",o(Array(t).keys()).forEach(function(r){var i=Object(n.g)("ctnr ctnr".concat(r)).apply(void 0,o(e.systemArr.map(function(t){return Object(n.g)("digit")(t)})).concat([Object(n.g)("digit")(e.systemArr[0])]));if(i.style.position="relative",i.style.display="inline-block",i.style.verticalAlign="top",e.ctnrArr.unshift(i),e.node.appendChild(i),e.beforeArr.push(0),e.separator&&e.separateEvery&&r!==t-1&&(t-r)%e.separateEvery==1){var a=function(t){return"[object String]"===Object.prototype.toString.call(t)}(e.separator)?e.separator:e.separator.shift(),u=Object(n.g)("sprtr")(a);u.style.display="inline-block",e.node.appendChild(u)}}),this.height=this.ctnrArr[0].clientHeight/(this.systemArr.length+1),this.node.style.height=this.height+"px";for(var r=0,i=this.ctnrArr.length;r<i;r+=1)this._draw({digit:r,per:1,alter:~~(this.from/Math.pow(10,r))})}},{key:"_draw",value:function(t){var e=t.per,r=t.alter,n=t.digit,o=this.beforeArr[n],i="translateY(".concat(-((e*r+o)%10+10)%10*this.height,"px)");this.ctnrArr[n].style.webkitTransform=i,this.ctnrArr[n].style.transform=i}},{key:"flipTo",value:function(t){var e=this,r=t.to,n=t.duration,o=t.easeFn,i=t.direct,a=void 0===i||i,s=this.ctnrArr.length;this.beforeArr=u(this.from,s),this.afterArr=u(r,s);var c=function(t){for(var r=0,n=e.ctnrArr.length-1;n>=0;n-=1){var i=e.afterArr[n]-e.beforeArr[n];r+=i;var u=o||e.easeFn;e._draw({digit:n,per:u(t),alter:a?i:r}),r*=10}},f=performance.now(),l=1e3*n||this.duration;requestAnimationFrame(function t(n){var o=n-f;c(o/l),o<l?requestAnimationFrame(t):(e.from=r,c(1))})}}]),t}()},function(t,e,r){t.exports=r(1)}])});
},{}],"JeNM":[function(require,module,exports) {
"use strict";module.exports=function(){var r,t=Object.assign;return"function"==typeof t&&(t(r={foo:"raz"},{bar:"dwa"},{trzy:"trzy"}),r.foo+r.bar+r.trzy==="razdwatrzy")};
},{}],"LFDG":[function(require,module,exports) {
"use strict";module.exports=function(){try{return Object.keys("primitive"),!0}catch(t){return!1}};
},{}],"tKrM":[function(require,module,exports) {
"use strict";module.exports=function(){};
},{}],"w2kj":[function(require,module,exports) {
"use strict";var n=require("../function/noop")();module.exports=function(r){return r!==n&&null!==r};
},{"../function/noop":"tKrM"}],"2ryK":[function(require,module,exports) {
"use strict";var e=require("../is-value"),r=Object.keys;module.exports=function(t){return r(e(t)?Object(t):t)};
},{"../is-value":"w2kj"}],"aPFG":[function(require,module,exports) {
"use strict";module.exports=require("./is-implemented")()?Object.keys:require("./shim");
},{"./is-implemented":"LFDG","./shim":"2ryK"}],"MfWF":[function(require,module,exports) {
"use strict";var e=require("./is-value");module.exports=function(r){if(!e(r))throw new TypeError("Cannot use null or undefined");return r};
},{"./is-value":"w2kj"}],"6/9l":[function(require,module,exports) {
"use strict";var r=require("../keys"),e=require("../valid-value"),t=Math.max;module.exports=function(a,i){var o,u,c,n=t(arguments.length,2);for(a=Object(e(a)),c=function(r){try{a[r]=i[r]}catch(e){o||(o=e)}},u=1;u<n;++u)i=arguments[u],r(i).forEach(c);if(void 0!==o)throw o;return a};
},{"../keys":"aPFG","../valid-value":"MfWF"}],"YzU5":[function(require,module,exports) {
"use strict";module.exports=require("./is-implemented")()?Object.assign:require("./shim");
},{"./is-implemented":"JeNM","./shim":"6/9l"}],"zX91":[function(require,module,exports) {

"use strict";var r=require("./is-value"),e=Array.prototype.forEach,t=Object.create,c=function(r,e){var t;for(t in r)e[t]=r[t]};module.exports=function(n){var o=t(null);return e.call(arguments,function(e){r(e)&&c(Object(e),o)}),o};
},{"./is-value":"w2kj"}],"v6hd":[function(require,module,exports) {
"use strict";module.exports=function(t){return"function"==typeof t};
},{}],"2/jU":[function(require,module,exports) {
"use strict";var n="razdwatrzy";module.exports=function(){return"function"==typeof n.contains&&(!0===n.contains("dwa")&&!1===n.contains("foo"))};
},{}],"6PxJ":[function(require,module,exports) {
"use strict";var t=String.prototype.indexOf;module.exports=function(r){return t.call(this,r,arguments[1])>-1};
},{}],"vOo2":[function(require,module,exports) {
"use strict";module.exports=require("./is-implemented")()?String.prototype.contains:require("./shim");
},{"./is-implemented":"2/jU","./shim":"6PxJ"}],"SKLi":[function(require,module,exports) {
"use strict";var e,l=require("es5-ext/object/assign"),r=require("es5-ext/object/normalize-options"),n=require("es5-ext/object/is-callable"),t=require("es5-ext/string/#/contains");(e=module.exports=function(e,n){var i,u,a,o,c;return arguments.length<2||"string"!=typeof e?(o=n,n=e,e=null):o=arguments[2],null==e?(i=a=!0,u=!1):(i=t.call(e,"c"),u=t.call(e,"e"),a=t.call(e,"w")),c={value:n,configurable:i,enumerable:u,writable:a},o?l(r(o),c):c}).gs=function(e,i,u){var a,o,c,s;return"string"!=typeof e?(c=u,u=i,i=e,e=null):c=arguments[3],null==i?i=void 0:n(i)?null==u?u=void 0:n(u)||(c=u,u=void 0):(c=i,i=u=void 0),null==e?(a=!0,o=!1):(a=t.call(e,"c"),o=t.call(e,"e")),s={get:i,set:u,configurable:a,enumerable:o},c?l(r(c),s):s};
},{"es5-ext/object/assign":"YzU5","es5-ext/object/normalize-options":"zX91","es5-ext/object/is-callable":"v6hd","es5-ext/string/#/contains":"vOo2"}],"/zvQ":[function(require,module,exports) {
"use strict";module.exports=function(){var t=Math.sign;return"function"==typeof t&&(1===t(10)&&-1===t(-20))};
},{}],"uRgO":[function(require,module,exports) {
"use strict";module.exports=function(e){return e=Number(e),isNaN(e)||0===e?e:e>0?1:-1};
},{}],"rw99":[function(require,module,exports) {
"use strict";module.exports=require("./is-implemented")()?Math.sign:require("./shim");
},{"./is-implemented":"/zvQ","./shim":"uRgO"}],"WlB7":[function(require,module,exports) {
"use strict";var r=require("../math/sign"),t=Math.abs,e=Math.floor;module.exports=function(i){return isNaN(i)?0:0!==(i=Number(i))&&isFinite(i)?r(i)*e(t(i)):i};
},{"../math/sign":"rw99"}],"QE9g":[function(require,module,exports) {
"use strict";var o="foo";module.exports=function(){return"function"==typeof o.repeat&&"foofoo"===o.repeat(2)};
},{}],"Xxxp":[function(require,module,exports) {
"use strict";var r=require("../../../object/valid-value"),e=require("../../../number/to-integer");module.exports=function(t){var i,n=String(r(this));if((t=e(t))<0)throw new RangeError("Count must be >= 0");if(!isFinite(t))throw new RangeError("Count must be < ∞");for(i="";t;)t%2&&(i+=n),t>1&&(n+=n),t>>=1;return i};
},{"../../../object/valid-value":"MfWF","../../../number/to-integer":"WlB7"}],"QFCX":[function(require,module,exports) {
"use strict";module.exports=require("./is-implemented")()?String.prototype.repeat:require("./shim");
},{"./is-implemented":"QE9g","./shim":"Xxxp"}],"lWEw":[function(require,module,exports) {
"use strict";var e=require("../../number/to-integer"),r=require("../../object/valid-value"),t=require("./repeat"),i=Math.abs,a=Math.max;module.exports=function(u){var l=String(r(this)),n=l.length,s=arguments[1];return s=isNaN(s)?1:e(s),u=t.call(String(u),i(s)),s>=0?u.slice(0,a(0,s-n))+l:l+(n+s>=0?"":u.slice(s+n))};
},{"../../number/to-integer":"WlB7","../../object/valid-value":"MfWF","./repeat":"QFCX"}],"rRMm":[function(require,module,exports) {
"use strict";var e=require("./to-integer"),r=Math.max;module.exports=function(t){return r(0,e(t))};
},{"./to-integer":"WlB7"}],"yDXx":[function(require,module,exports) {
"use strict";var r=require("../../string/#/pad"),e=require("../to-pos-integer"),t=Number.prototype.toFixed;module.exports=function(i){var o;return i=e(i),o=e(arguments[1]),r.call(o?t.call(this,o):this,"0",i+(o?1+o:0))};
},{"../../string/#/pad":"lWEw","../to-pos-integer":"rRMm"}],"JTja":[function(require,module,exports) {
"use strict";var t=Object.prototype.toString,e=t.call(new Date);module.exports=function(a){return a&&!isNaN(a)&&(a instanceof Date||t.call(a)===e)||!1};
},{}],"2TEP":[function(require,module,exports) {
"use strict";var e=require("./is-date");module.exports=function(r){if(!e(r))throw new TypeError(r+" is not valid Date object");return r};
},{"./is-date":"JTja"}],"C1xW":[function(require,module,exports) {
"use strict";var e=Date.prototype.getMonth;module.exports=function(){switch(e.call(this)){case 1:return this.getFullYear()%4?28:29;case 3:case 5:case 8:case 10:return 30;default:return 31}};
},{}],"zKDZ":[function(require,module,exports) {
"use strict";var t=Date.prototype.getTime;module.exports=function(){return new Date(t.call(this))};
},{}],"3KOR":[function(require,module,exports) {
"use strict";var t=Date.prototype.setHours;module.exports=function(){return t.call(this,0,0,0,0),this};
},{}],"2JDA":[function(require,module,exports) {
"use strict";var t=require("./floor-day");module.exports=function(){return t.call(this).setDate(1),this};
},{"./floor-day":"3KOR"}],"D7iV":[function(require,module,exports) {
"use strict";var t=require("./floor-month");module.exports=function(){return t.call(this).setMonth(0),this};
},{"./floor-month":"2JDA"}],"yDMd":[function(require,module,exports) {
"use strict";var e=require("../object/is-callable"),r=require("../object/valid-value"),t=Function.prototype.call;module.exports=function(u){return u=Object(r(u)),function(c){var i=this;return r(i),(c=String(c)).replace(/%([a-zA-Z]+)|\\([\u0000-\uffff])/g,function(r,c,l){var n,a;if(l)return l;for(n=c;n&&!(a=u[n]);)n=n.slice(0,-1);return a?(e(a)&&(a=t.call(a,i)),a+c.slice(n.length)):r})}};
},{"../object/is-callable":"v6hd","../object/valid-value":"MfWF"}],"WuRO":[function(require,module,exports) {
"use strict";var t,i,e,n,s,r=require("d"),o=require("es5-ext/number/#/pad"),u=require("es5-ext/date/valid-date"),h=require("es5-ext/date/#/days-in-month"),l=require("es5-ext/date/#/copy"),a=require("es5-ext/date/#/floor-day"),c=require("es5-ext/date/#/floor-month"),f=require("es5-ext/date/#/floor-year"),g=require("es5-ext/number/to-integer"),m=require("es5-ext/number/to-pos-integer"),d=require("es5-ext/object/is-value"),S=Math.abs;t=require("es5-ext/string/format-method")({y:function(){return String(S(this.year))},m:function(){return o.call(S(this.month),2)},d:function(){return o.call(S(this.day),2)},H:function(){return o.call(S(this.hour),2)},M:function(){return o.call(S(this.minute),2)},S:function(){return o.call(S(this.second),2)},L:function(){return o.call(S(this.millisecond),3)},ms:function(){return String(S(this.months))},ds:function(){return String(S(this.days))},Hs:function(){return String(S(this.hours))},Ms:function(){return String(S(this.minutes))},Ss:function(){return String(S(this.seconds))},Ls:function(){return String(S(this.milliseconds))},sign:function(){return this.to<this.from?"-":""}}),s=function(t){return t.to<t.from?{to:t.from,from:t.to,sign:-1}:{to:t.to,from:t.from,sign:1}},(n=module.exports=function(t,i){if(!(this instanceof n))return new n(t,i);this.from=u(t),this.to=d(i)?u(i):new Date}).prototype=Object.create(Object.prototype,{valueOf:r(i=function(){return this.to-this.from}),millisecond:r.gs(function(){return this.milliseconds%1e3}),second:r.gs(function(){return this.seconds%60}),minute:r.gs(function(){return this.minutes%60}),hour:r.gs(function(){return this.hours%24}),day:r.gs(function(){var t=s(this),i=l.call(t.to);return i.setMonth(i.getMonth()-1),i=h.call(i),t.sign*((i-t.from.getDate()+t.to.getDate())%i-(t.from-a.call(l.call(t.from))>t.to-a.call(l.call(t.to))))}),month:r.gs(function(){var t=s(this);return t.sign*((12-t.from.getMonth()+t.to.getMonth())%12-(t.from-c.call(l.call(t.from))>t.to-c.call(l.call(t.to))))}),year:r.gs(e=function(){var t=s(this);return t.sign*(t.to.getFullYear()-t.from.getFullYear()-(t.from-f.call(l.call(t.from))>t.to-f.call(l.call(t.to))))}),milliseconds:r.gs(i,null),seconds:r.gs(function(){return g(this.valueOf()/1e3)}),minutes:r.gs(function(){return g(this.valueOf()/6e4)}),hours:r.gs(function(){return g(this.valueOf()/36e5)}),days:r.gs(function(){return g(this.valueOf()/864e5)}),months:r.gs(function(){var t=s(this);return t.sign*(12*(t.to.getFullYear()-t.from.getFullYear())+t.to.getMonth()-t.from.getMonth()-(t.from-c.call(l.call(t.from))>t.to-c.call(l.call(t.to))))}),years:r.gs(e),_resolveSign:r(function(t){return t&&this.to<this.from?"-":""}),_toStringDefaultDate:r(function(t,i,e){return!this.days&&t<0?this._resolveSign(e)+i:(t--<=0&&(i=S(e=this.day)+"d"+(i?" ":"")+i),!this.months&&t<0?this._resolveSign(e)+i:(t--<=0&&(i=S(e=this.month)+"m"+(i?" ":"")+i),(this.years||t>=0)&&(i=S(e=this.year)+"y"+(i?" ":"")+i),this._resolveSign(e)+i))}),_toStringDefault:r(function(t){var i,e="";return t--<=0&&(e+="."+o.call(S(i=this.millisecond),3)),!this.seconds&&t<0?this._resolveSign(i)+e:(t--<=0&&(i=this.second,e=(this.minutes?o.call(S(i),2):S(i))+e),!this.minutes&&t<0?this._resolveSign(i)+e:(t--<=0&&(i=this.minute,e=(this.hours||e?o.call(S(i),2):S(i))+(e?":":"")+e),!this.hours&&t<0?this._resolveSign(i)+e:(t--<=0&&(e=o.call(S(i=this.hour),2)+(e?":":"")+e),this._toStringDefaultDate(t,e,i))))}),_toString1:r(function(t){var i,e=[];return t--<=0&&e.unshift(S(i=this.millisecond)+"ms"),!this.seconds&&t<0?this._resolveSign(i)+e.join(" "):(t--<=0&&e.unshift(S(i=this.second)+"s"),!this.minutes&&t<0?this._resolveSign(i)+e.join(" "):(t--<=0&&e.unshift(S(i=this.minute)+"m"),!this.hours&&t<0?this._resolveSign(i)+e.join(" "):(t--<=0&&e.unshift(S(i=this.hour)+"h"),!this.days&&t<0?this._resolveSign(i)+e.join(" "):(t--<=0&&e.unshift(S(i=this.day)+"d"),!this.months&&t<0?this._resolveSign(i)+e.join(" "):(t--<=0&&e.unshift(S(i=this.month)+"m"),!this.years&&t<0?this._resolveSign(i)+e.join(" "):(e.unshift(S(i=this.year)+"y"),this._resolveSign(i)+e.join(" ")))))))}),toString:r(function(i){var e;return d(i)||(i=0),isNaN(i)?t.call(this,i):(i=Number(i),e=m(arguments[1]),1===i?this._toString1(e):this._toStringDefault(e))})});
},{"d":"SKLi","es5-ext/number/#/pad":"yDXx","es5-ext/date/valid-date":"2TEP","es5-ext/date/#/days-in-month":"C1xW","es5-ext/date/#/copy":"zKDZ","es5-ext/date/#/floor-day":"3KOR","es5-ext/date/#/floor-month":"2JDA","es5-ext/date/#/floor-year":"D7iV","es5-ext/number/to-integer":"WlB7","es5-ext/number/to-pos-integer":"rRMm","es5-ext/object/is-value":"w2kj","es5-ext/string/format-method":"yDMd"}],"9KIJ":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";var e=require("number-flip"),n=t(require("duration"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){var e=new Date,t=new n.default(i,e);c.forEach(function(e){var n=a[e];n&&n.flipTo({to:t[e]})}),setTimeout(function(){o()},1e3)}function u(){var e=Math.min(45,Math.round(window.screen.width/20));document.documentElement.style.fontSize="".concat(e,"px")}require("normalize.css"),require("./index.less");var i=new Date("2016-07-23 12:00:00"),a={},c=["day","days","hour","hours","minute","minutes","month","months","second","seconds","year","years"],s=function(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return Math.ceil(e/n).toString().replace(/\d/g,"9")}},d=function(){var e=(new Date-i)/1e3,n=s(e);return r({second:99,seconds:n(),minute:99,minutes:n(60),hour:99,hours:n(3600),day:99,days:n(86400),month:99,months:n(1036800),year:9},"year",9)},f=d();u(),c.forEach(function(n){var t=document.querySelector(".".concat(n));t&&(a[n]=new e.Flip({node:t,from:f[n],duration:.3}))}),o();
},{"number-flip":"Dpdk","duration":"WuRO","normalize.css":"9KIJ","./index.less":"9KIJ"}]},{},["H99C"], null)
//# sourceMappingURL=/days/src.4f668417.map