
// Page Transition -------->

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).barba=n()}(this,(function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}function e(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t,n,r){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var i=new(Function.bind.apply(t,e));return r&&o(i,r.prototype),i}).apply(null,arguments)}function f(t){var n="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)})(t)}function s(t,n){try{var r=t()}catch(t){return n(t)}return r&&r.then?r.then(void 0,n):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c,a="2.9.7",h=function(){};!function(t){t[t.off=0]="off",t[t.error=1]="error",t[t.warning=2]="warning",t[t.info=3]="info",t[t.debug=4]="debug"}(c||(c={}));var v=c.off,l=function(){function t(t){this.t=t}t.getLevel=function(){return v},t.setLevel=function(t){return v=c[t]};var n=t.prototype;return n.error=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.error,c.error,n)},n.warn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.warn,c.warning,n)},n.info=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.info,c.info,n)},n.debug=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.log,c.debug,n)},n.i=function(n,r,e){r<=t.getLevel()&&n.apply(console,["["+this.t+"] "].concat(e))},t}(),d=O,m=E,p=g,w=x,b=T,y="/",P=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function g(t,n){for(var r,e=[],i=0,o=0,u="",f=n&&n.delimiter||y,s=n&&n.whitelist||void 0,c=!1;null!==(r=P.exec(t));){var a=r[0],h=r[1],v=r.index;if(u+=t.slice(o,v),o=v+a.length,h)u+=h[1],c=!0;else{var l="",d=r[2],m=r[3],p=r[4],w=r[5];if(!c&&u.length){var b=u.length-1,g=u[b];(!s||s.indexOf(g)>-1)&&(l=g,u=u.slice(0,b))}u&&(e.push(u),u="",c=!1);var E=m||p,x=l||f;e.push({name:d||i++,prefix:l,delimiter:x,optional:"?"===w||"*"===w,repeat:"+"===w||"*"===w,pattern:E?A(E):"[^"+k(x===f?x:x+f)+"]+?"})}}return(u||o<t.length)&&e.push(u+t.substr(o)),e}function E(t,n){return function(r,e){var i=t.exec(r);if(!i)return!1;for(var o=i[0],u=i.index,f={},s=e&&e.decode||decodeURIComponent,c=1;c<i.length;c++)if(void 0!==i[c]){var a=n[c-1];f[a.name]=a.repeat?i[c].split(a.delimiter).map((function(t){return s(t,a)})):s(i[c],a)}return{path:o,index:u,params:f}}}function x(t,n){for(var r=new Array(t.length),e=0;e<t.length;e++)"object"==typeof t[e]&&(r[e]=new RegExp("^(?:"+t[e].pattern+")$",R(n)));return function(n,e){for(var i="",o=e&&e.encode||encodeURIComponent,u=!e||!1!==e.validate,f=0;f<t.length;f++){var s=t[f];if("string"!=typeof s){var c,a=n?n[s.name]:void 0;if(Array.isArray(a)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===a.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<a.length;h++){if(c=o(a[h],s),u&&!r[f].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');i+=(0===h?s.prefix:s.delimiter)+c}}else if("string"!=typeof a&&"number"!=typeof a&&"boolean"!=typeof a){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}else{if(c=o(String(a),s),u&&!r[f].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');i+=s.prefix+c}}else i+=s}return i}}function k(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$/()])/g,"\\$1")}function R(t){return t&&t.sensitive?"":"i"}function T(t,n,r){for(var e=(r=r||{}).strict,i=!1!==r.start,o=!1!==r.end,u=r.delimiter||y,f=[].concat(r.endsWith||[]).map(k).concat("$").join("|"),s=i?"^":"",c=0;c<t.length;c++){var a=t[c];if("string"==typeof a)s+=k(a);else{var h=a.repeat?"(?:"+a.pattern+")(?:"+k(a.delimiter)+"(?:"+a.pattern+"))*":a.pattern;n&&n.push(a),s+=a.optional?a.prefix?"(?:"+k(a.prefix)+"("+h+"))?":"("+h+")?":k(a.prefix)+"("+h+")"}}if(o)e||(s+="(?:"+k(u)+")?"),s+="$"===f?"$":"(?="+f+")";else{var v=t[t.length-1],l="string"==typeof v?v[v.length-1]===u:void 0===v;e||(s+="(?:"+k(u)+"(?="+f+"))?"),l||(s+="(?="+k(u)+"|"+f+")")}return new RegExp(s,R(r))}function O(t,n,r){return t instanceof RegExp?function(t,n){if(!n)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var e=0;e<r.length;e++)n.push({name:e,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(t,n):Array.isArray(t)?function(t,n,r){for(var e=[],i=0;i<t.length;i++)e.push(O(t[i],n,r).source);return new RegExp("(?:"+e.join("|")+")",R(r))}(t,n,r):function(t,n,r){return T(g(t,r),n,r)}(t,n,r)}d.match=function(t,n){var r=[];return E(O(t,r,n),r)},d.regexpToFunction=m,d.parse=p,d.compile=function(t,n){return x(g(t,n),n)},d.tokensToFunction=w,d.tokensToRegExp=b;var S={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},j=new(function(){function t(){this.o=S,this.u=new DOMParser}var n=t.prototype;return n.toString=function(t){return t.outerHTML},n.toDocument=function(t){return this.u.parseFromString(t,"text/html")},n.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},n.getHtml=function(t){return void 0===t&&(t=document),this.toString(t.documentElement)},n.getWrapper=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},n.getContainer=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},n.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},n.addContainer=function(t,n){var r=this.getContainer();r?this.s(t,r):n.appendChild(t)},n.getNamespace=function(t){void 0===t&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},n.getHref=function(t){if(t.tagName&&"a"===t.tagName.toLowerCase()){if("string"==typeof t.href)return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},n.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var i=document.createElement("base");if(i.href=arguments[0],1===e)return i.href;var o=document.getElementsByTagName("head")[0];o.insertBefore(i,o.firstChild);for(var u,f=document.createElement("a"),s=1;s<e;s++)f.href=arguments[s],i.href=u=f.href;return o.removeChild(i),u},n.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},t}()),M=new(function(){function t(){this.h=[],this.v=-1}var e=t.prototype;return e.init=function(t,n){this.l="barba";var r={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(r),this.v=0;var e={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(e,"",t)},e.change=function(t,n,r){if(r&&r.state){var e=r.state,i=e.index;n=this.m(this.v-i),this.replace(e.states),this.v=i}else this.add(t,n);return n},e.add=function(t,n){var r=this.size,e=this.p(n),i={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=r;var o={from:this.l,index:r,states:[].concat(this.h)};switch(e){case"push":window.history&&window.history.pushState(o,"",t);break;case"replace":window.history&&window.history.replaceState(o,"",t)}},e.update=function(t,n){var e=n||this.v,i=r({},this.get(e),{},t);this.set(e,i)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",r=t,e=S.prefix+"-"+S.history;return r.hasAttribute&&r.hasAttribute(e)&&(n=r.getAttribute(e)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":0===t?"popstate":t>0?"back":"forward"},n(t,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),t}()),L=function(t,n){try{var r=function(){if(!n.next.html)return Promise.resolve(t).then((function(t){var r=n.next;if(t){var e=j.toElement(t);r.namespace=j.getNamespace(e),r.container=j.getContainer(e),r.html=t,M.update({ns:r.namespace});var i=j.toDocument(t);document.title=i.title}}))}();return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(t){return Promise.reject(t)}},$=d,_={__proto__:null,update:L,nextTick:function(){return new Promise((function(t){window.requestAnimationFrame(t)}))},pathToRegexp:$},q=function(){return window.location.origin},B=function(t){return void 0===t&&(t=window.location.href),U(t).port},U=function(t){var n,r=t.match(/:\d+/);if(null===r)/^http/.test(t)&&(n=80),/^https/.test(t)&&(n=443);else{var e=r[0].substring(1);n=parseInt(e,10)}var i,o=t.replace(q(),""),u={},f=o.indexOf("#");f>=0&&(i=o.slice(f+1),o=o.slice(0,f));var s=o.indexOf("?");return s>=0&&(u=D(o.slice(s+1)),o=o.slice(0,s)),{hash:i,path:o,port:n,query:u}},D=function(t){return t.split("&").reduce((function(t,n){var r=n.split("=");return t[r[0]]=r[1],t}),{})},F=function(t){return void 0===t&&(t=window.location.href),t.replace(/(\/#.*|\/|#.*)$/,"")},H={__proto__:null,getHref:function(){return window.location.href},getOrigin:q,getPort:B,getPath:function(t){return void 0===t&&(t=window.location.href),U(t).path},parse:U,parseQuery:D,clean:F};function I(t,n,r){return void 0===n&&(n=2e3),new Promise((function(e,i){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE)if(200===o.status)e(o.responseText);else if(o.status){var n={status:o.status,statusText:o.statusText};r(t,n),i(n)}},o.ontimeout=function(){var e=new Error("Timeout error ["+n+"]");r(t,e),i(e)},o.onerror=function(){var n=new Error("Fetch error");r(t,n),i(n)},o.open("GET",t),o.timeout=n,o.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),o.setRequestHeader("x-barba","yes"),o.send()}))}var C=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then};function N(t,n){return void 0===n&&(n={}),function(){for(var r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];var o=!1,u=new Promise((function(r,i){n.async=function(){return o=!0,function(t,n){t?i(t):r(n)}};var u=t.apply(n,e);o||(C(u)?u.then(r,i):r(u))}));return u}}var X=new(function(t){function n(){var n;return(n=t.call(this)||this).logger=new l("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}e(n,t);var r=n.prototype;return r.init=function(){var t=this;this.registered.clear(),this.all.forEach((function(n){t[n]||(t[n]=function(r,e){t.registered.has(n)||t.registered.set(n,new Set),t.registered.get(n).add({ctx:e||{},fn:r})})}))},r.do=function(t){for(var n=this,r=arguments.length,e=new Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i];if(this.registered.has(t)){var o=Promise.resolve();return this.registered.get(t).forEach((function(t){o=o.then((function(){return N(t.fn,t.ctx).apply(void 0,e)}))})),o.catch((function(r){n.logger.debug("Hook error ["+t+"]"),n.logger.error(r)}))}return Promise.resolve()},r.clear=function(){var t=this;this.all.forEach((function(n){delete t[n]})),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var t=[];this.registered.forEach((function(n,r){return t.push(r)})),this.logger.info("Registered hooks: "+t.join(","))},n}(h)),z=function(){function t(t){if(this.P=[],"boolean"==typeof t)this.g=t;else{var n=Array.isArray(t)?t:[t];this.P=n.map((function(t){return $(t)}))}}return t.prototype.checkHref=function(t){if("boolean"==typeof this.g)return this.g;var n=U(t).path;return this.P.some((function(t){return null!==t.exec(n)}))},t}(),G=function(t){function n(n){var r;return(r=t.call(this,n)||this).k=new Map,r}e(n,t);var i=n.prototype;return i.set=function(t,n,r){return this.k.set(t,{action:r,request:n}),{action:r,request:n}},i.get=function(t){return this.k.get(t)},i.getRequest=function(t){return this.k.get(t).request},i.getAction=function(t){return this.k.get(t).action},i.has=function(t){return!this.checkHref(t)&&this.k.has(t)},i.delete=function(t){return this.k.delete(t)},i.update=function(t,n){var e=r({},this.k.get(t),{},n);return this.k.set(t,e),e},n}(z),Q=function(){return!window.history.pushState},W=function(t){return!t.el||!t.href},J=function(t){var n=t.event;return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey},K=function(t){var n=t.el;return n.hasAttribute("target")&&"_blank"===n.target},V=function(t){var n=t.el;return void 0!==n.protocol&&window.location.protocol!==n.protocol||void 0!==n.hostname&&window.location.hostname!==n.hostname},Y=function(t){var n=t.el;return void 0!==n.port&&B()!==B(n.href)},Z=function(t){var n=t.el;return n.getAttribute&&"string"==typeof n.getAttribute("download")},tt=function(t){return t.el.hasAttribute(S.prefix+"-"+S.prevent)},nt=function(t){return Boolean(t.el.closest("["+S.prefix+"-"+S.prevent+'="all"]'))},rt=function(t){var n=t.href;return F(n)===F()&&B(n)===B()},et=function(t){function n(n){var r;return(r=t.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}e(n,t);var r=n.prototype;return r.init=function(){this.add("pushState",Q),this.add("exists",W),this.add("newTab",J),this.add("blank",K),this.add("corsDomain",V),this.add("corsPort",Y),this.add("download",Z),this.add("preventSelf",tt),this.add("preventAll",nt),this.add("sameUrl",rt,!1)},r.add=function(t,n,r){void 0===r&&(r=!0),this.tests.set(t,n),r&&this.suite.push(t)},r.run=function(t,n,r,e){return this.tests.get(t)({el:n,event:r,href:e})},r.checkLink=function(t,n,r){var e=this;return this.suite.some((function(i){return e.run(i,t,n,r)}))},n}(z),it=function(t){function n(r,e){var i;void 0===e&&(e="Barba error");for(var o=arguments.length,u=new Array(o>2?o-2:0),f=2;f<o;f++)u[f-2]=arguments[f];return(i=t.call.apply(t,[this].concat(u))||this).error=r,i.label=e,Error.captureStackTrace&&Error.captureStackTrace(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i),n),i.name="BarbaError",i}return e(n,t),n}(f(Error)),ot=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var n=t.prototype;return n.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},n.resolve=function(t,n){var r=this;void 0===n&&(n={});var e=n.once?this.once:this.page;e=e.filter(n.self?function(t){return t.name&&"self"===t.name}:function(t){return!t.name||"self"!==t.name});var i=new Map,o=e.find((function(e){var o=!0,u={};return!(!n.self||"self"!==e.name)||(r.A.reverse().forEach((function(n){o&&(o=r.R(e,n,t,u),e.from&&e.to&&(o=r.R(e,n,t,u,"from")&&r.R(e,n,t,u,"to")),e.from&&!e.to&&(o=r.R(e,n,t,u,"from")),!e.from&&e.to&&(o=r.R(e,n,t,u,"to")))})),i.set(e,u),o)})),u=i.get(o),f=[];if(f.push(n.once?"once":"page"),n.self&&f.push("self"),u){var s,c=[o];Object.keys(u).length>0&&c.push(u),(s=this.logger).info.apply(s,["Transition found ["+f.join(",")+"]"].concat(c))}else this.logger.info("No transition found ["+f.join(",")+"]");return o},n.update=function(){var t=this;this.all=this.all.map((function(n){return t.T(n)})).sort((function(t,n){return t.priority-n.priority})).reverse().map((function(t){return delete t.priority,t})),this.page=this.all.filter((function(t){return void 0!==t.leave||void 0!==t.enter})),this.once=this.all.filter((function(t){return void 0!==t.once}))},n.R=function(t,n,r,e,i){var o=!0,u=!1,f=t,s=n.name,c=s,a=s,h=s,v=i?f[i]:f,l="to"===i?r.next:r.current;if(i?v&&v[s]:v[s]){switch(n.type){case"strings":default:var d=Array.isArray(v[c])?v[c]:[v[c]];l[c]&&-1!==d.indexOf(l[c])&&(u=!0),-1===d.indexOf(l[c])&&(o=!1);break;case"object":var m=Array.isArray(v[a])?v[a]:[v[a]];l[a]?(l[a].name&&-1!==m.indexOf(l[a].name)&&(u=!0),-1===m.indexOf(l[a].name)&&(o=!1)):o=!1;break;case"function":v[h](r)?u=!0:o=!1}u&&(i?(e[i]=e[i]||{},e[i][s]=f[i][s]):e[s]=f[s])}return o},n.O=function(t,n,r){var e=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(e+=Math.pow(10,r),t.from&&t.from[n]&&(e+=1),t.to&&t.to[n]&&(e+=2)),e},n.T=function(t){var n=this;t.priority=0;var r=0;return this.A.forEach((function(e,i){r+=n.O(t,e.name,i+1)})),t.priority=r,t},t}(),ut=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.S=!1,this.store=new ot(t)}var r=t.prototype;return r.get=function(t,n){return this.store.resolve(t,n)},r.doOnce=function(t){var n=t.data,r=t.transition;try{var e=function(){i.S=!1},i=this,o=r||{};i.S=!0;var u=s((function(){return Promise.resolve(i.j("beforeOnce",n,o)).then((function(){return Promise.resolve(i.once(n,o)).then((function(){return Promise.resolve(i.j("afterOnce",n,o)).then((function(){}))}))}))}),(function(t){i.S=!1,i.logger.debug("Transition error [before/after/once]"),i.logger.error(t)}));return Promise.resolve(u&&u.then?u.then(e):e())}catch(t){return Promise.reject(t)}},r.doPage=function(t){var n=t.data,r=t.transition,e=t.page,i=t.wrapper;try{var o=function(t){if(u)return t;f.S=!1},u=!1,f=this,c=r||{},a=!0===c.sync||!1;f.S=!0;var h=s((function(){function t(){return Promise.resolve(f.j("before",n,c)).then((function(){var t=!1;function r(r){return t?r:Promise.resolve(f.remove(n)).then((function(){return Promise.resolve(f.j("after",n,c)).then((function(){}))}))}var o=function(){if(a)return s((function(){return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),f.enter(n,c)])).then((function(){return Promise.resolve(f.j("afterLeave",n,c)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [sync]")}));var r=function(r){return t?r:s((function(){var t=function(){if(!1!==o)return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(f.enter(n,c,o)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}();if(t&&t.then)return t.then((function(){}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/enter]")}))},o=!1,u=s((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),L(e,n)]).then((function(t){return t[0]}))).then((function(t){return o=t,Promise.resolve(f.j("afterLeave",n,c)).then((function(){}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/leave]")}));return u&&u.then?u.then(r):r(u)}();return o&&o.then?o.then(r):r(o)}))}var r=function(){if(a)return Promise.resolve(L(e,n)).then((function(){}))}();return r&&r.then?r.then(t):t()}),(function(t){if(f.S=!1,t.name&&"BarbaError"===t.name)throw f.logger.debug(t.label),f.logger.error(t.error),t;throw f.logger.debug("Transition error [page]"),f.logger.error(t),t}));return Promise.resolve(h&&h.then?h.then(o):o(h))}catch(t){return Promise.reject(t)}},r.once=function(t,n){try{return Promise.resolve(X.do("once",t,n)).then((function(){return n.once?N(n.once,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.leave=function(t,n){try{return Promise.resolve(X.do("leave",t,n)).then((function(){return n.leave?N(n.leave,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.enter=function(t,n,r){try{return Promise.resolve(X.do("enter",t,n)).then((function(){return n.enter?N(n.enter,n)(t,r):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.add=function(t,n){try{return j.addContainer(t.next.container,n),X.do("nextAdded",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.remove=function(t){try{return j.removeContainer(t.current.container),X.do("currentRemoved",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},r.j=function(t,n,r){try{return Promise.resolve(X.do(t,n,r)).then((function(){return r[t]?N(r[t],r)(n):Promise.resolve()}))}catch(t){return Promise.reject(t)}},n(t,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some((function(t){return"self"===t.name}))}},{key:"shouldWait",get:function(){return this.store.all.some((function(t){return t.to&&!t.to.route||t.sync}))}}]),t}(),ft=function(){function t(t){var n=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==t.length&&(t.forEach((function(t){n.byNamespace.set(t.namespace,t)})),this.names.forEach((function(t){X[t](n.L(t))})))}return t.prototype.L=function(t){var n=this;return function(r){var e=t.match(/enter/i)?r.next:r.current,i=n.byNamespace.get(e.namespace);return i&&i[t]?N(i[t],i)(r):Promise.resolve()}},t}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var n=this;do{if(n.matches(t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var st={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function t(){this.version=a,this.schemaPage=st,this.Logger=l,this.logger=new l("@barba/core"),this.plugins=[],this.hooks=X,this.dom=j,this.helpers=_,this.history=M,this.request=I,this.url=H}var e=t.prototype;return e.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):"function"==typeof t.install?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=void 0===t?{}:t,e=n.transitions,i=void 0===e?[]:e,o=n.views,u=void 0===o?[]:o,f=n.schema,s=void 0===f?S:f,c=n.requestError,a=n.timeout,h=void 0===a?2e3:a,v=n.cacheIgnore,d=void 0!==v&&v,m=n.prefetchIgnore,p=void 0!==m&&m,w=n.preventRunning,b=void 0!==w&&w,y=n.prevent,P=void 0===y?null:y,g=n.debug,E=n.logLevel;if(l.setLevel(!0===(void 0!==g&&g)?"debug":void 0===E?"off":E),this.logger.info(this.version),Object.keys(s).forEach((function(t){S[t]&&(S[t]=s[t])})),this.$=c,this.timeout=h,this.cacheIgnore=d,this.prefetchIgnore=p,this.preventRunning=b,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var x=this.data.current;if(!x.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new G(d),this.prevent=new et(p),this.transitions=new ut(i),this.views=new ft(u),null!==P){if("function"!=typeof P)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",P)}this.history.init(x.url.href,x.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach((function(t){return t.init()}));var k=this.data;k.trigger="barba",k.next=k.current,k.current=r({},this.schemaPage),this.hooks.do("ready",k),this.once(k),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,r){var e;if(void 0===n&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(e="popstate"===n?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,e)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then((function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then((function(){}))}var e=function(){if(n.transitions.hasOnce){var r=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:r,data:t})).then((function(){}))}}();return e&&e.then?e.then(r):r()}))}catch(t){return Promise.reject(t)}},e.page=function(t,n,e){try{var i=function(){var t=o.data;return Promise.resolve(o.hooks.do("page",t)).then((function(){var n=s((function(){var n=o.transitions.get(t,{once:!1,self:e});return Promise.resolve(o.transitions.doPage({data:t,page:u,transition:n,wrapper:o._})).then((function(){o.q()}))}),(function(){0===l.getLevel()&&o.force(t.current.url.href)}));if(n&&n.then)return n.then((function(){}))}))},o=this;o.data.next.url=r({href:t},o.url.parse(t)),o.data.trigger=n;var u=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,f=function(){if(o.transitions.shouldWait)return Promise.resolve(L(u,o.data)).then((function(){}))}();return Promise.resolve(f&&f.then?f.then(i):i())}catch(t){return Promise.reject(t)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];var i=r[0],o=r[1],u=this.cache.getAction(i);return this.cache.delete(i),!(this.$&&!1===this.$(t,u,i,o)||("click"===u&&this.force(i),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch((function(t){n.logger.error(t)})),"prefetch")},e.F=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,r=this.I(t);if(r){var e=this.dom.getHref(r);this.prevent.checkHref(e)||this.cache.has(e)||this.cache.set(e,this.request(e,this.timeout,this.onRequestError.bind(this,r)).catch((function(t){n.logger.error(t)})),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:r({href:t},this.url.parse(t))};this.C={current:n,next:r({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},n(t,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),t}())}));
//# sourceMappingURL=barba.umd.js.map

!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.anime=e()}(this,function(){"use strict";var n={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},e={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},r=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],t={CSS:{},springs:{}};function a(n,e,r){return Math.min(Math.max(n,e),r)}function o(n,e){return n.indexOf(e)>-1}function u(n,e){return n.apply(null,e)}var i={arr:function(n){return Array.isArray(n)},obj:function(n){return o(Object.prototype.toString.call(n),"Object")},pth:function(n){return i.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||i.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return i.hex(n)||i.rgb(n)||i.hsl(n)},key:function(r){return!n.hasOwnProperty(r)&&!e.hasOwnProperty(r)&&"targets"!==r&&"keyframes"!==r}};function c(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function s(n,e){var r=c(n),o=a(i.und(r[0])?1:r[0],.1,100),u=a(i.und(r[1])?100:r[1],.1,100),s=a(i.und(r[2])?10:r[2],.1,100),f=a(i.und(r[3])?0:r[3],.1,100),l=Math.sqrt(u/o),d=s/(2*Math.sqrt(u*o)),p=d<1?l*Math.sqrt(1-d*d):0,h=1,v=d<1?(d*l-f)/p:-f+l;function g(n){var r=e?e*n/1e3:n;return r=d<1?Math.exp(-r*d*l)*(h*Math.cos(p*r)+v*Math.sin(p*r)):(h+v*r)*Math.exp(-r*l),0===n||1===n?n:1-r}return e?g:function(){var e=t.springs[n];if(e)return e;for(var r=0,a=0;;)if(1===g(r+=1/6)){if(++a>=16)break}else a=0;var o=r*(1/6)*1e3;return t.springs[n]=o,o}}function f(n){return void 0===n&&(n=10),function(e){return Math.ceil(a(e,1e-6,1)*n)*(1/n)}}var l,d,p=function(){var n=11,e=1/(n-1);function r(n,e){return 1-3*e+3*n}function t(n,e){return 3*e-6*n}function a(n){return 3*n}function o(n,e,o){return((r(e,o)*n+t(e,o))*n+a(e))*n}function u(n,e,o){return 3*r(e,o)*n*n+2*t(e,o)*n+a(e)}return function(r,t,a,i){if(0<=r&&r<=1&&0<=a&&a<=1){var c=new Float32Array(n);if(r!==t||a!==i)for(var s=0;s<n;++s)c[s]=o(s*e,r,a);return function(n){return r===t&&a===i?n:0===n||1===n?n:o(f(n),t,i)}}function f(t){for(var i=0,s=1,f=n-1;s!==f&&c[s]<=t;++s)i+=e;var l=i+(t-c[--s])/(c[s+1]-c[s])*e,d=u(l,r,a);return d>=.001?function(n,e,r,t){for(var a=0;a<4;++a){var i=u(e,r,t);if(0===i)return e;e-=(o(e,r,t)-n)/i}return e}(t,l,r,a):0===d?l:function(n,e,r,t,a){for(var u,i,c=0;(u=o(i=e+(r-e)/2,t,a)-n)>0?r=i:e=i,Math.abs(u)>1e-7&&++c<10;);return i}(t,i,i+e,r,a)}}}(),h=(l={linear:function(){return function(n){return n}}},d={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,r=4;n<((e=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var r=a(n,1,10),t=a(e,.1,2);return function(n){return 0===n||1===n?n:-r*Math.pow(2,10*(n-1))*Math.sin((n-1-t/(2*Math.PI)*Math.asin(1/r))*(2*Math.PI)/t)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(n,e){d[n]=function(){return function(n){return Math.pow(n,e+2)}}}),Object.keys(d).forEach(function(n){var e=d[n];l["easeIn"+n]=e,l["easeOut"+n]=function(n,r){return function(t){return 1-e(n,r)(1-t)}},l["easeInOut"+n]=function(n,r){return function(t){return t<.5?e(n,r)(2*t)/2:1-e(n,r)(-2*t+2)/2}}}),l);function v(n,e){if(i.fnc(n))return n;var r=n.split("(")[0],t=h[r],a=c(n);switch(r){case"spring":return s(n,e);case"cubicBezier":return u(p,a);case"steps":return u(f,a);default:return u(t,a)}}function g(n){try{return document.querySelectorAll(n)}catch(n){return}}function m(n,e){for(var r=n.length,t=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<r;o++)if(o in n){var u=n[o];e.call(t,u,o,n)&&a.push(u)}return a}function y(n){return n.reduce(function(n,e){return n.concat(i.arr(e)?y(e):e)},[])}function b(n){return i.arr(n)?n:(i.str(n)&&(n=g(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function x(n,e){return n.some(function(n){return n===e})}function M(n){var e={};for(var r in n)e[r]=n[r];return e}function w(n,e){var r=M(n);for(var t in n)r[t]=e.hasOwnProperty(t)?e[t]:n[t];return r}function k(n,e){var r=M(n);for(var t in e)r[t]=i.und(n[t])?e[t]:n[t];return r}function O(n){return i.rgb(n)?(r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+r[1]+",1)":e:i.hex(n)?(t=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,r,t){return e+e+r+r+t+t}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),"rgba("+parseInt(a[1],16)+","+parseInt(a[2],16)+","+parseInt(a[3],16)+",1)"):i.hsl(n)?function(n){var e,r,t,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),o=parseInt(a[1],10)/360,u=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+6*(e-n)*r:r<.5?e:r<2/3?n+(e-n)*(2/3-r)*6:n}if(0==u)e=r=t=i;else{var f=i<.5?i*(1+u):i+u-i*u,l=2*i-f;e=s(l,f,o+1/3),r=s(l,f,o),t=s(l,f,o-1/3)}return"rgba("+255*e+","+255*r+","+255*t+","+c+")"}(n):void 0;var e,r,t,a}function C(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function B(n,e){return i.fnc(n)?n(e.target,e.id,e.total):n}function P(n,e){return n.getAttribute(e)}function I(n,e,r){if(x([r,"deg","rad","turn"],C(e)))return e;var a=t.CSS[e+r];if(!i.und(a))return a;var o=document.createElement(n.tagName),u=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;u.appendChild(o),o.style.position="absolute",o.style.width=100+r;var c=100/o.offsetWidth;u.removeChild(o);var s=c*parseFloat(e);return t.CSS[e+r]=s,s}function T(n,e,r){if(e in n.style){var t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(t)||"0";return r?I(n,a,r):a}}function D(n,e){return i.dom(n)&&!i.inp(n)&&(P(n,e)||i.svg(n)&&n[e])?"attribute":i.dom(n)&&x(r,e)?"transform":i.dom(n)&&"transform"!==e&&T(n,e)?"css":null!=n[e]?"object":void 0}function E(n){if(i.dom(n)){for(var e,r=n.style.transform||"",t=/(\w+)\(([^)]*)\)/g,a=new Map;e=t.exec(r);)a.set(e[1],e[2]);return a}}function F(n,e,r,t){var a,u=o(e,"scale")?1:0+(o(a=e,"translate")||"perspective"===a?"px":o(a,"rotate")||o(a,"skew")?"deg":void 0),i=E(n).get(e)||u;return r&&(r.transforms.list.set(e,i),r.transforms.last=e),t?I(n,i,t):i}function N(n,e,r,t){switch(D(n,e)){case"transform":return F(n,e,t,r);case"css":return T(n,e,r);case"attribute":return P(n,e);default:return n[e]||0}}function A(n,e){var r=/^(\*=|\+=|-=)/.exec(n);if(!r)return n;var t=C(n)||0,a=parseFloat(e),o=parseFloat(n.replace(r[0],""));switch(r[0][0]){case"+":return a+o+t;case"-":return a-o+t;case"*":return a*o+t}}function L(n,e){if(i.col(n))return O(n);if(/\s/g.test(n))return n;var r=C(n),t=r?n.substr(0,n.length-r.length):n;return e?t+e:t}function j(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function S(n){for(var e,r=n.points,t=0,a=0;a<r.numberOfItems;a++){var o=r.getItem(a);a>0&&(t+=j(e,o)),e=o}return t}function q(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return o=n,2*Math.PI*P(o,"r");case"rect":return 2*P(a=n,"width")+2*P(a,"height");case"line":return j({x:P(t=n,"x1"),y:P(t,"y1")},{x:P(t,"x2"),y:P(t,"y2")});case"polyline":return S(n);case"polygon":return r=(e=n).points,S(e)+j(r.getItem(r.numberOfItems-1),r.getItem(0))}var e,r,t,a,o}function $(n,e){var r=e||{},t=r.el||function(n){for(var e=n.parentNode;i.svg(e)&&i.svg(e.parentNode);)e=e.parentNode;return e}(n),a=t.getBoundingClientRect(),o=P(t,"viewBox"),u=a.width,c=a.height,s=r.viewBox||(o?o.split(" "):[0,0,u,c]);return{el:t,viewBox:s,x:s[0]/1,y:s[1]/1,w:u/s[2],h:c/s[3]}}function X(n,e){function r(r){void 0===r&&(r=0);var t=e+r>=1?e+r:0;return n.el.getPointAtLength(t)}var t=$(n.el,n.svg),a=r(),o=r(-1),u=r(1);switch(n.property){case"x":return(a.x-t.x)*t.w;case"y":return(a.y-t.y)*t.h;case"angle":return 180*Math.atan2(u.y-o.y,u.x-o.x)/Math.PI}}function Y(n,e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,t=L(i.pth(n)?n.totalLength:n,e)+"";return{original:t,numbers:t.match(r)?t.match(r).map(Number):[0],strings:i.str(n)||e?t.split(r):[]}}function Z(n){return m(n?y(i.arr(n)?n.map(b):b(n)):[],function(n,e,r){return r.indexOf(n)===e})}function Q(n){var e=Z(n);return e.map(function(n,r){return{target:n,id:r,total:e.length,transforms:{list:E(n)}}})}function V(n,e){var r=M(e);if(/^spring/.test(r.easing)&&(r.duration=s(r.easing)),i.arr(n)){var t=n.length;2===t&&!i.obj(n[0])?n={value:n}:i.fnc(e.duration)||(r.duration=e.duration/t)}var a=i.arr(n)?n:[n];return a.map(function(n,r){var t=i.obj(n)&&!i.pth(n)?n:{value:n};return i.und(t.delay)&&(t.delay=r?0:e.delay),i.und(t.endDelay)&&(t.endDelay=r===a.length-1?e.endDelay:0),t}).map(function(n){return k(n,r)})}function z(n,e){var r=[],t=e.keyframes;for(var a in t&&(e=k(function(n){for(var e=m(y(n.map(function(n){return Object.keys(n)})),function(n){return i.key(n)}).reduce(function(n,e){return n.indexOf(e)<0&&n.push(e),n},[]),r={},t=function(t){var a=e[t];r[a]=n.map(function(n){var e={};for(var r in n)i.key(r)?r==a&&(e.value=n[r]):e[r]=n[r];return e})},a=0;a<e.length;a++)t(a);return r}(t),e)),e)i.key(a)&&r.push({name:a,tweens:V(e[a],n)});return r}function H(n,e){var r;return n.tweens.map(function(t){var a=function(n,e){var r={};for(var t in n){var a=B(n[t],e);i.arr(a)&&1===(a=a.map(function(n){return B(n,e)})).length&&(a=a[0]),r[t]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(t,e),o=a.value,u=i.arr(o)?o[1]:o,c=C(u),s=N(e.target,n.name,c,e),f=r?r.to.original:s,l=i.arr(o)?o[0]:f,d=C(l)||C(s),p=c||d;return i.und(u)&&(u=f),a.from=Y(l,p),a.to=Y(A(u,l),p),a.start=r?r.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=v(a.easing,a.duration),a.isPath=i.pth(o),a.isColor=i.col(a.from.original),a.isColor&&(a.round=1),r=a,a})}var G={css:function(n,e,r){return n.style[e]=r},attribute:function(n,e,r){return n.setAttribute(e,r)},object:function(n,e,r){return n[e]=r},transform:function(n,e,r,t,a){if(t.list.set(e,r),e===t.last||a){var o="";t.list.forEach(function(n,e){o+=e+"("+n+") "}),n.style.transform=o}}};function R(n,e){Q(n).forEach(function(n){for(var r in e){var t=B(e[r],n),a=n.target,o=C(t),u=N(a,r,o,n),i=A(L(t,o||C(u)),u),c=D(a,r);G[c](a,r,i,n.transforms,!0)}})}function W(n,e){return m(y(n.map(function(n){return e.map(function(e){return function(n,e){var r=D(n.target,e.name);if(r){var t=H(e,n),a=t[t.length-1];return{type:r,property:e.name,animatable:n,tweens:t,duration:a.end,delay:t[0].delay,endDelay:a.endDelay}}}(n,e)})})),function(n){return!i.und(n)})}function J(n,e){var r=n.length,t=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=r?Math.max.apply(Math,n.map(function(n){return t(n)+n.duration})):e.duration,a.delay=r?Math.min.apply(Math,n.map(function(n){return t(n)+n.delay})):e.delay,a.endDelay=r?a.duration-Math.max.apply(Math,n.map(function(n){return t(n)+n.duration-n.endDelay})):e.endDelay,a}var K=0;var U,_=[],nn=[],en=function(){function n(){U=requestAnimationFrame(e)}function e(e){var r=_.length;if(r){for(var t=0;t<r;){var a=_[t];if(a.paused){var o=_.indexOf(a);o>-1&&(_.splice(o,1),r=_.length)}else a.tick(e);t++}n()}else U=cancelAnimationFrame(U)}return n}();function rn(r){void 0===r&&(r={});var t,o=0,u=0,i=0,c=0,s=null;function f(n){var e=window.Promise&&new Promise(function(n){return s=n});return n.finished=e,e}var l,d,p,h,v,g,y,b,x=(d=w(n,l=r),p=w(e,l),h=z(p,l),v=Q(l.targets),g=W(v,h),y=J(g,p),b=K,K++,k(d,{id:b,children:[],animatables:v,animations:g,duration:y.duration,delay:y.delay,endDelay:y.endDelay}));f(x);function M(){var n=x.direction;"alternate"!==n&&(x.direction="normal"!==n?"normal":"reverse"),x.reversed=!x.reversed,t.forEach(function(n){return n.reversed=x.reversed})}function O(n){return x.reversed?x.duration-n:n}function C(){o=0,u=O(x.currentTime)*(1/rn.speed)}function B(n,e){e&&e.seek(n-e.timelineOffset)}function P(n){for(var e=0,r=x.animations,t=r.length;e<t;){var o=r[e],u=o.animatable,i=o.tweens,c=i.length-1,s=i[c];c&&(s=m(i,function(e){return n<e.end})[0]||s);for(var f=a(n-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(f)?1:s.easing(f),d=s.to.strings,p=s.round,h=[],v=s.to.numbers.length,g=void 0,y=0;y<v;y++){var b=void 0,M=s.to.numbers[y],w=s.from.numbers[y]||0;b=s.isPath?X(s.value,l*M):w+l*(M-w),p&&(s.isColor&&y>2||(b=Math.round(b*p)/p)),h.push(b)}var k=d.length;if(k){g=d[0];for(var O=0;O<k;O++){d[O];var C=d[O+1],B=h[O];isNaN(B)||(g+=C?B+C:B+" ")}}else g=h[0];G[o.type](u.target,o.property,g,u.transforms),o.currentValue=g,e++}}function I(n){x[n]&&!x.passThrough&&x[n](x)}function T(n){var e=x.duration,r=x.delay,l=e-x.endDelay,d=O(n);x.progress=a(d/e*100,0,100),x.reversePlayback=d<x.currentTime,t&&function(n){if(x.reversePlayback)for(var e=c;e--;)B(n,t[e]);else for(var r=0;r<c;r++)B(n,t[r])}(d),!x.began&&x.currentTime>0&&(x.began=!0,I("begin")),!x.loopBegan&&x.currentTime>0&&(x.loopBegan=!0,I("loopBegin")),d<=r&&0!==x.currentTime&&P(0),(d>=l&&x.currentTime!==e||!e)&&P(e),d>r&&d<l?(x.changeBegan||(x.changeBegan=!0,x.changeCompleted=!1,I("changeBegin")),I("change"),P(d)):x.changeBegan&&(x.changeCompleted=!0,x.changeBegan=!1,I("changeComplete")),x.currentTime=a(d,0,e),x.began&&I("update"),n>=e&&(u=0,x.remaining&&!0!==x.remaining&&x.remaining--,x.remaining?(o=i,I("loopComplete"),x.loopBegan=!1,"alternate"===x.direction&&M()):(x.paused=!0,x.completed||(x.completed=!0,I("loopComplete"),I("complete"),!x.passThrough&&"Promise"in window&&(s(),f(x)))))}return x.reset=function(){var n=x.direction;x.passThrough=!1,x.currentTime=0,x.progress=0,x.paused=!0,x.began=!1,x.loopBegan=!1,x.changeBegan=!1,x.completed=!1,x.changeCompleted=!1,x.reversePlayback=!1,x.reversed="reverse"===n,x.remaining=x.loop,t=x.children;for(var e=c=t.length;e--;)x.children[e].reset();(x.reversed&&!0!==x.loop||"alternate"===n&&1===x.loop)&&x.remaining++,P(x.reversed?x.duration:0)},x.set=function(n,e){return R(n,e),x},x.tick=function(n){i=n,o||(o=i),T((i+(u-o))*rn.speed)},x.seek=function(n){T(O(n))},x.pause=function(){x.paused=!0,C()},x.play=function(){x.paused&&(x.completed&&x.reset(),x.paused=!1,_.push(x),C(),U||en())},x.reverse=function(){M(),x.completed=!x.reversed,C()},x.restart=function(){x.reset(),x.play()},x.reset(),x.autoplay&&x.play(),x}function tn(n,e){for(var r=e.length;r--;)x(n,e[r].animatable.target)&&e.splice(r,1)}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){document.hidden?(_.forEach(function(n){return n.pause()}),nn=_.slice(0),rn.running=_=[]):nn.forEach(function(n){return n.play()})}),rn.version="3.2.0",rn.speed=1,rn.running=_,rn.remove=function(n){for(var e=Z(n),r=_.length;r--;){var t=_[r],a=t.animations,o=t.children;tn(e,a);for(var u=o.length;u--;){var i=o[u],c=i.animations;tn(e,c),c.length||i.children.length||o.splice(u,1)}a.length||o.length||t.pause()}},rn.get=N,rn.set=R,rn.convertPx=I,rn.path=function(n,e){var r=i.str(n)?g(n)[0]:n,t=e||100;return function(n){return{property:n,el:r,svg:$(r),totalLength:q(r)*(t/100)}}},rn.setDashoffset=function(n){var e=q(n);return n.setAttribute("stroke-dasharray",e),e},rn.stagger=function(n,e){void 0===e&&(e={});var r=e.direction||"normal",t=e.easing?v(e.easing):null,a=e.grid,o=e.axis,u=e.from||0,c="first"===u,s="center"===u,f="last"===u,l=i.arr(n),d=l?parseFloat(n[0]):parseFloat(n),p=l?parseFloat(n[1]):0,h=C(l?n[1]:n)||0,g=e.start||0+(l?d:0),m=[],y=0;return function(n,e,i){if(c&&(u=0),s&&(u=(i-1)/2),f&&(u=i-1),!m.length){for(var v=0;v<i;v++){if(a){var b=s?(a[0]-1)/2:u%a[0],x=s?(a[1]-1)/2:Math.floor(u/a[0]),M=b-v%a[0],w=x-Math.floor(v/a[0]),k=Math.sqrt(M*M+w*w);"x"===o&&(k=-M),"y"===o&&(k=-w),m.push(k)}else m.push(Math.abs(u-v));y=Math.max.apply(Math,m)}t&&(m=m.map(function(n){return t(n/y)*y})),"reverse"===r&&(m=m.map(function(n){return o?n<0?-1*n:-n:Math.abs(y-n)}))}return g+(l?(p-d)/y:d)*(Math.round(100*m[e])/100)+h}},rn.timeline=function(n){void 0===n&&(n={});var r=rn(n);return r.duration=0,r.add=function(t,a){var o=_.indexOf(r),u=r.children;function c(n){n.passThrough=!0}o>-1&&_.splice(o,1);for(var s=0;s<u.length;s++)c(u[s]);var f=k(t,w(e,n));f.targets=f.targets||n.targets;var l=r.duration;f.autoplay=!1,f.direction=r.direction,f.timelineOffset=i.und(a)?l:A(a,l),c(r),r.seek(f.timelineOffset);var d=rn(f);c(d),u.push(d);var p=J(u,n);return r.delay=p.delay,r.endDelay=p.endDelay,r.duration=p.duration,r.seek(0),r.reset(),r.autoplay&&r.play(),r},r},rn.easing=v,rn.penner=h,rn.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n},rn});
function delay(n) {
    n = n || 2000
    // Keep official documentation wording, done -> resolve
    // and make it more concise
    return new Promise(resolve => {
        setTimeout(resolve, n)
    })
}


function pageTransition() {
    window.scrollTo(0, 0);
    anime({
        targets: '.loading-container li',
        scaleY: [
            {value: 1, easing: 'easeOutSine', duration: 500},
        ],
        delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
    });
}

function pageTransitionIn() {
    window.scrollTo(0, 0);
    anime({
        targets: '.loading-container li',
        scaleY: [
            {value: 0, easing: 'easeOutSine', duration: 500},
        ],
        delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
    });
}

function oncePageTransition() {
    anime({
        targets: '.loading-container li',
        scaleY: [
            {value: 0, easing: 'easeOutSine', duration: 500},
        ],
        delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
    });
}

// Function to animate the content of each page
function contentAnimation() {
    window.scrollTo(0, 0);
    var options = {
        draggable: true,
        contain: true,
        prevNextButtons: false,
        initialIndex: 1,
        pageDots: false
    };

    if (window.matchMedia('(max-width: 980px)').matches) {
        options.prevNextButtons = false;
        options.draggable = true;
        options.pageDots = true;
    }

    jQuery(".js-testimonials-carousel").flickity(options);

    var options = {
        draggable: false,
    };

    if (window.matchMedia('(max-width: 980px)').matches) {
        options.prevNextButtons = false;
        options.draggable = true;
    }

    jQuery(".js-slider").flickity(options);

    jQuery('a').each(function() {
        var a = new RegExp('/' + window.location.host + '/');
        if(!a.test(this.href)) {
            jQuery(this).click(function(event) {
                event.preventDefault();
                event.stopPropagation();
                window.open(this.href, '_blank');
            });
        }
    });

    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".js-lazy",
        load_delay: 0,
        threshold: 0,
        callback_loaded: function(el){
            jQuery(".flickity-enabled").flickity('resize');
        }
    });

    jQuery('.js-faq-toggle').click(function () {
        jQuery(this).parent().children('.c-faq__main').slideToggle();
        jQuery(this).children('.js-faq-plus-icon').toggleClass('is-open');
    });

    jQuery('[data-fancybox="gallery"]').fancybox({
        hideScrollbar: false,
    });

    jQuery('.js-add-ons-changelog-toggle').click(function () {
        jQuery(this).parent().toggleClass('is-open');
        jQuery(this).toggleClass('is-open');
        jQuery(this).children('.js-show-more-less').toggle();
    });
}


    /**
     * Accepts a target and root rect computes the intersection between then
     * following the algorithm in the spec.
     * TODO(philipwalton): at this time clip-path is not considered.
     * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
     * @param {Element} target The target DOM element
     * @param {Object} rootRect The bounding rect of the root after being
     *     expanded by the rootMargin value.
     * @return {?Object} The final intersection rect object or undefined if no
     *     intersection is found.
     * @private
     */
    IntersectionObserver.prototype._computeTargetAndRootIntersection =
        function(target, rootRect) {

            // If the element isn't displayed, an intersection can't happen.
            if (window.getComputedStyle(target).display == 'none') return;

            var targetRect = getBoundingClientRect(target);
            var intersectionRect = targetRect;
            var parent = getParentNode(target);
            var atRoot = false;

            while (!atRoot) {
                var parentRect = null;
                var parentComputedStyle = parent.nodeType == 1 ?
                    window.getComputedStyle(parent) : {};

                // If the parent isn't displayed, an intersection can't happen.
                if (parentComputedStyle.display == 'none') return;

                if (parent == this.root || parent == document) {
                    atRoot = true;
                    parentRect = rootRect;
                } else {
                    // If the element has a non-visible overflow, and it's not the <body>
                    // or <html> element, update the intersection rect.
                    // Note: <body> and <html> cannot be clipped to a rect that's not also
                    // the document rect, so no need to compute a new intersection.
                    if (parent != document.body &&
                        parent != document.documentElement &&
                        parentComputedStyle.overflow != 'visible') {
                        parentRect = getBoundingClientRect(parent);
                    }
                }

                // If either of the above conditionals set a new parentRect,
                // calculate new intersection data.
                if (parentRect) {
                    intersectionRect = computeRectIntersection(parentRect, intersectionRect);

                    if (!intersectionRect) break;
                }
                parent = getParentNode(parent);
            }
            return intersectionRect;
        };


    /**
     * Returns the root rect after being expanded by the rootMargin value.
     * @return {Object} The expanded root rect.
     * @private
     */
    IntersectionObserver.prototype._getRootRect = function() {
        var rootRect;
        if (this.root) {
            rootRect = getBoundingClientRect(this.root);
        } else {
            // Use <html>/<body> instead of window since scroll bars affect size.
            var html = document.documentElement;
            var body = document.body;
            rootRect = {
                top: 0,
                left: 0,
                right: html.clientWidth || body.clientWidth,
                width: html.clientWidth || body.clientWidth,
                bottom: html.clientHeight || body.clientHeight,
                height: html.clientHeight || body.clientHeight
            };
        }
        return this._expandRectByRootMargin(rootRect);
    };


    /**
     * Accepts a rect and expands it by the rootMargin value.
     * @param {Object} rect The rect object to expand.
     * @return {Object} The expanded rect.
     * @private
     */
    IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
        var margins = this._rootMarginValues.map(function(margin, i) {
            return margin.unit == 'px' ? margin.value :
                margin.value * (i % 2 ? rect.width : rect.height) / 100;
        });
        var newRect = {
            top: rect.top - margins[0],
            right: rect.right + margins[1],
            bottom: rect.bottom + margins[2],
            left: rect.left - margins[3]
        };
        newRect.width = newRect.right - newRect.left;
        newRect.height = newRect.bottom - newRect.top;

        return newRect;
    };


    /**
     * Accepts an old and new entry and returns true if at least one of the
     * threshold values has been crossed.
     * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
     *    particular target element or null if no previous entry exists.
     * @param {IntersectionObserverEntry} newEntry The current entry for a
     *    particular target element.
     * @return {boolean} Returns true if a any threshold has been crossed.
     * @private
     */
    IntersectionObserver.prototype._hasCrossedThreshold =
        function(oldEntry, newEntry) {

            // To make comparing easier, an entry that has a ratio of 0
            // but does not actually intersect is given a value of -1
            var oldRatio = oldEntry && oldEntry.isIntersecting ?
                oldEntry.intersectionRatio || 0 : -1;
            var newRatio = newEntry.isIntersecting ?
                newEntry.intersectionRatio || 0 : -1;

            // Ignore unchanged ratios
            if (oldRatio === newRatio) return;

            for (var i = 0; i < this.thresholds.length; i++) {
                var threshold = this.thresholds[i];

                // Return true if an entry matches a threshold or if the new ratio
                // and the old ratio are on the opposite sides of a threshold.
                if (threshold == oldRatio || threshold == newRatio ||
                    threshold < oldRatio !== threshold < newRatio) {
                    return true;
                }
            }
        };


    /**
     * Returns whether or not the root element is an element and is in the DOM.
     * @return {boolean} True if the root element is an element and is in the DOM.
     * @private
     */
    IntersectionObserver.prototype._rootIsInDom = function() {
        return !this.root || containsDeep(document, this.root);
    };


    /**
     * Returns whether or not the target element is a child of root.
     * @param {Element} target The target element to check.
     * @return {boolean} True if the target element is a child of root.
     * @private
     */
    IntersectionObserver.prototype._rootContainsTarget = function(target) {
        return containsDeep(this.root || document, target);
    };


    /**
     * Adds the instance to the global IntersectionObserver registry if it isn't
     * already present.
     * @private
     */
    IntersectionObserver.prototype._registerInstance = function() {
        if (registry.indexOf(this) < 0) {
            registry.push(this);
        }
    };


    /**
     * Removes the instance from the global IntersectionObserver registry.
     * @private
     */
    IntersectionObserver.prototype._unregisterInstance = function() {
        var index = registry.indexOf(this);
        if (index != -1) registry.splice(index, 1);
    };


    /**
     * Returns the result of the performance.now() method or null in browsers
     * that don't support the API.
     * @return {number} The elapsed time since the page was requested.
     */
    function now() {
        return window.performance && performance.now && performance.now();
    }


    /**
     * Throttles a function and delays its execution, so it's only called at most
     * once within a given time period.
     * @param {Function} fn The function to throttle.
     * @param {number} timeout The amount of time that must pass before the
     *     function can be called again.
     * @return {Function} The throttled function.
     */
    function throttle(fn, timeout) {
        var timer = null;
        return function () {
            if (!timer) {
                timer = setTimeout(function() {
                    fn();
                    timer = null;
                }, timeout);
            }
        };
    }


    /**
     * Adds an event handler to a DOM node ensuring cross-browser compatibility.
     * @param {Node} node The DOM node to add the event handler to.
     * @param {string} event The event name.
     * @param {Function} fn The event handler to add.
     * @param {boolean} opt_useCapture Optionally adds the even to the capture
     *     phase. Note: this only works in modern browsers.
     */
    function addEvent(node, event, fn, opt_useCapture) {
        if (typeof node.addEventListener == 'function') {
            node.addEventListener(event, fn, opt_useCapture || false);
        }
        else if (typeof node.attachEvent == 'function') {
            node.attachEvent('on' + event, fn);
        }
    }


    /**
     * Removes a previously added event handler from a DOM node.
     * @param {Node} node The DOM node to remove the event handler from.
     * @param {string} event The event name.
     * @param {Function} fn The event handler to remove.
     * @param {boolean} opt_useCapture If the event handler was added with this
     *     flag set to true, it should be set to true here in order to remove it.
     */
    function removeEvent(node, event, fn, opt_useCapture) {
        if (typeof node.removeEventListener == 'function') {
            node.removeEventListener(event, fn, opt_useCapture || false);
        }
        else if (typeof node.detatchEvent == 'function') {
            node.detatchEvent('on' + event, fn);
        }
    }


    /**
     * Returns the intersection between two rect objects.
     * @param {Object} rect1 The first rect.
     * @param {Object} rect2 The second rect.
     * @return {?Object} The intersection rect or undefined if no intersection
     *     is found.
     */
    function computeRectIntersection(rect1, rect2) {
        var top = Math.max(rect1.top, rect2.top);
        var bottom = Math.min(rect1.bottom, rect2.bottom);
        var left = Math.max(rect1.left, rect2.left);
        var right = Math.min(rect1.right, rect2.right);
        var width = right - left;
        var height = bottom - top;

        return (width >= 0 && height >= 0) && {
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            width: width,
            height: height
        };
    }


    /**
     * Shims the native getBoundingClientRect for compatibility with older IE.
     * @param {Element} el The element whose bounding rect to get.
     * @return {Object} The (possibly shimmed) rect of the element.
     */
    function getBoundingClientRect(el) {
        var rect;

        try {
            rect = el.getBoundingClientRect();
        } catch (err) {
            // Ignore Windows 7 IE11 "Unspecified error"
            // https://github.com/w3c/IntersectionObserver/pull/205
        }

        if (!rect) return getEmptyRect();

        // Older IE
        if (!(rect.width && rect.height)) {
            rect = {
                top: rect.top,
                right: rect.right,
                bottom: rect.bottom,
                left: rect.left,
                width: rect.right - rect.left,
                height: rect.bottom - rect.top
            };
        }
        return rect;
    }


    /**
     * Returns an empty rect object. An empty rect is returned when an element
     * is not in the DOM.
     * @return {Object} The empty rect.
     */
    function getEmptyRect() {
        return {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: 0,
            height: 0
        };
    }

    /**
     * Checks to see if a parent element contains a child element (including inside
     * shadow DOM).
     * @param {Node} parent The parent element.
     * @param {Node} child The child element.
     * @return {boolean} True if the parent node contains the child node.
     */
    function containsDeep(parent, child) {
        var node = child;
        while (node) {
            if (node == parent) return true;

            node = getParentNode(node);
        }
        return false;
    }


    /**
     * Gets the parent node of an element or its host element if the parent node
     * is a shadow root.
     * @param {Node} node The node whose parent to get.
     * @return {Node|null} The parent node or null if no parent exists.
     */
    function getParentNode(node) {
        var parent = node.parentNode;

        if (parent && parent.nodeType == 11 && parent.host) {
            // If the parent is a shadow root, return the host element.
            return parent.host;
        }
        return parent;
    }


// Exposes the constructors globally.
    window.IntersectionObserver = IntersectionObserver;
    window.IntersectionObserverEntry = IntersectionObserverEntry;

}(window, document));

function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LazyLoad=e()}(this,function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),r={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null,use_native:!1},a=function(t,e){var n,o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)};var i=function(t,e){return t.getAttribute("data-"+e)},s=function(t,e,n){var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)},c=function(t){return"true"===i(t,"was-processed")},l=function(t,e){return s(t,"ll-timeout",e)},u=function(t){return i(t,"ll-timeout")},d=function(t,e){t&&t(e)},f=function(t,e){t._loadingCount+=e,0===t._elements.length&&0===t._loadingCount&&d(t._settings.callback_finish)},_=function(t){for(var e,n=[],o=0;e=t.children[o];o+=1)"SOURCE"===e.tagName&&n.push(e);return n},v=function(t,e,n){n&&t.setAttribute(e,n)},g=function(t,e){v(t,"sizes",i(t,e.data_sizes)),v(t,"srcset",i(t,e.data_srcset)),v(t,"src",i(t,e.data_src))},m={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&_(n).forEach(function(t){g(t,e)});g(t,e)},IFRAME:function(t,e){v(t,"src",i(t,e.data_src))},VIDEO:function(t,e){_(t).forEach(function(t){v(t,"src",i(t,e.data_src))}),v(t,"src",i(t,e.data_src)),t.load()}},b=function(t,e){var n,o,r=e._settings,a=t.tagName,s=m[a];if(s)return s(t,r),f(e,1),void(e._elements=(n=e._elements,o=t,n.filter(function(t){return t!==o})));!function(t,e){var n=i(t,e.data_src),o=i(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),o&&(t.style.backgroundImage=o)}(t,r)},h=function(t,e){o?t.classList.add(e):t.className+=(t.className?" ":"")+e},p=function(t,e,n){t.addEventListener(e,n)},y=function(t,e,n){t.removeEventListener(e,n)},E=function(t,e,n){y(t,"load",e),y(t,"loadeddata",e),y(t,"error",n)},w=function(t,e,n){var r=n._settings,a=e?r.class_loaded:r.class_error,i=e?r.callback_loaded:r.callback_error,s=t.target;!function(t,e){o?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}(s,r.class_loading),h(s,a),d(i,s),f(n,-1)},I=function(t,e){var n=function n(r){w(r,!0,e),E(t,n,o)},o=function o(r){w(r,!1,e),E(t,n,o)};!function(t,e,n){p(t,"load",e),p(t,"loadeddata",e),p(t,"error",n)}(t,n,o)},k=["IMG","IFRAME","VIDEO"],A=function(t,e){var n=e._observer;z(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},L=function(t){var e=u(t);e&&(clearTimeout(e),l(t,null))},x=function(t,e){var n=e._settings.load_delay,o=u(t);o||(o=setTimeout(function(){A(t,e),L(t)},n),l(t,o))},z=function(t,e,n){var o=e._settings;!n&&c(t)||(k.indexOf(t.tagName)>-1&&(I(t,e),h(t,o.class_loading)),b(t,e),function(t){s(t,"was-processed","true")}(t),d(o.callback_reveal,t),d(o.callback_set,t))},O=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e){var n=e._settings;d(n.callback_enter,t),n.load_delay?x(t,e):A(t,e)}(e.target,t):function(t,e){var n=e._settings;d(n.callback_exit,t),n.load_delay&&L(t)}(e.target,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},N=["IMG","IFRAME"],C=function(t,e){return function(t){return t.filter(function(t){return!c(t)})}((n=t||function(t){return t.container.querySelectorAll(t.elements_selector)}(e),Array.prototype.slice.call(n)));var n},M=function(t,e){this._settings=function(t){return _extends({},r,t)}(t),this._loadingCount=0,O(this),this.update(e)};return M.prototype={update:function(t){var n,o=this,r=this._settings;(this._elements=C(t,r),!e&&this._observer)?(function(t){return t.use_native&&"loading"in HTMLImageElement.prototype}(r)&&((n=this)._elements.forEach(function(t){-1!==N.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),z(t,n))}),this._elements=C(t,r)),this._elements.forEach(function(t){o._observer.observe(t)})):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){z(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){A(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,o=0;n=e[o];o+=1)a(t,n);else a(t,e)}(M,window.lazyLoadOptions),M});
//# sourceMappingURL=lazyload.min.js.map



var lazyLoadInstance = new LazyLoad({
    elements_selector: ".js-lazy",
    load_delay: 0,
    threshold: 0,
    callback_loaded: function(el){
        jQuery(".flickity-enabled").flickity('resize');
    }
});
jQuery('a').each(function() {
    var a = new RegExp('/' + window.location.host + '/');
    if(!a.test(this.href)) {
        jQuery(this).click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            window.open(this.href, '_blank');
        });
    }
});
jQuery(document).ready(function () {
    jQuery('.c-header__nav-icon').click(function (e) {
        e.preventDefault();
        jQuery(this).toggleClass('js-open');
        jQuery('body').toggleClass('not-scroll');
        jQuery(".js-header").toggleClass('is-nav-open');
    });

    jQuery('.js-search-button').click(function (e) {
        e.preventDefault();
        jQuery('.js-search-box').show();
        jQuery(".c-header__menu-container").addClass('is-hide');
        jQuery(".c-header__cart").addClass('is-hide');
        jQuery(".js-search-button").addClass('is-hide-m');
    });


    jQuery('.js-close-search-button').click(function (e) {
        e.preventDefault();
        jQuery('.js-search-box').hide();
        jQuery(".c-header__menu-container").removeClass('is-hide')
        jQuery(".c-header__cart").removeClass('is-hide');
        jQuery(".js-search-button").removeClass('is-hide-m');
    });
});

jQuery(document).ready(function () {
// Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 32;
    var delta = 5;
    var navbarHeight = jQuery('.c-header').outerHeight();
    jQuery('.c-header').removeClass('nav-down').removeClass('nav-up');


    jQuery(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = jQuery(this).scrollTop();

        if (jQuery(this).scrollTop() === 0) {
            jQuery('.c-header').removeClass('nav-down').removeClass('nav-up');
            return;
        } else {

            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta)
                return;

            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                jQuery('.c-header').removeClass('nav-down').addClass('nav-up');
            } else {
                // Scroll Up
                if (st + jQuery(window).height() < jQuery(document).height()) {
                    jQuery('.c-header').removeClass('nav-up').addClass('nav-down');
                }
            }

            lastScrollTop = st;
        }
    }

    if (window.matchMedia('(max-width: 980px)').matches) {
        jQuery('.menu-item-has-children').click(function (e) {
            e.preventDefault();
            jQuery(this).children('.sub-menu').toggleClass('is-open');
            jQuery(this).toggleClass('is-submenu-open');
        });
    }
});

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
(function () {
    var container, button, menu, links, i, len;

    container = document.getElementById('site-navigation');
    if (!container) {
        return;
    }

    button = container.getElementsByTagName('button')[0];
    if ('undefined' === typeof button) {
        return;
    }

    menu = container.getElementsByTagName('ul')[0];

    // Hide menu toggle button if menu is empty and return early.
    if ('undefined' === typeof menu) {
        button.style.display = 'none';
        return;
    }

    menu.setAttribute('aria-expanded', 'false');
    if (-1 === menu.className.indexOf('nav-menu')) {
        menu.className += ' nav-menu';
    }

    button.onclick = function () {
        if (-1 !== container.className.indexOf('toggled')) {
            container.className = container.className.replace(' toggled', '');
            button.setAttribute('aria-expanded', 'false');
            menu.setAttribute('aria-expanded', 'false');
        } else {
            container.className += ' toggled';
            button.setAttribute('aria-expanded', 'true');
            menu.setAttribute('aria-expanded', 'true');
        }
    };

    // Get all the link elements within the menu.
    links = menu.getElementsByTagName('a');

    // Each time a menu link is focused or blurred, toggle focus.
    for (i = 0, len = links.length; i < len; i++) {
        links[i].addEventListener('focus', toggleFocus, true);
        links[i].addEventListener('blur', toggleFocus, true);
    }

    /**
     * Sets or removes .focus class on an element.
     */
    function toggleFocus() {
        var self = this;

        // Move up through the ancestors of the current link until we hit .nav-menu.
        while (-1 === self.className.indexOf('nav-menu')) {

            // On li elements toggle the class .focus.
            if ('li' === self.tagName.toLowerCase()) {
                if (-1 !== self.className.indexOf('focus')) {
                    self.className = self.className.replace(' focus', '');
                } else {
                    self.className += ' focus';
                }
            }

            self = self.parentElement;
        }
    }

    /**
     * Toggles `focus` class to allow submenu access on tablets.
     */
    ( function (container) {
        var touchStartFn, i,
            parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');

        if ('ontouchstart' in window) {
            touchStartFn = function (e) {
                var menuItem = this.parentNode, i;

                if (!menuItem.classList.contains('focus')) {
                    e.preventDefault();
                    for (i = 0; i < menuItem.parentNode.children.length; ++i) {
                        if (menuItem === menuItem.parentNode.children[i]) {
                            continue;
                        }
                        menuItem.parentNode.children[i].classList.remove('focus');
                    }
                    menuItem.classList.add('focus');
                } else {
                    menuItem.classList.remove('focus');
                }
            };

            for (i = 0; i < parentLink.length; ++i) {
                parentLink[i].addEventListener('touchstart', touchStartFn, false);
            }
        }
    }(container) );
})();

/**
 * SimpleBar.js - v4.2.3
 * Scrollbars, simpler.
 * https://grsmto.github.io/simplebar/
 *
 * Made by Adrien Denat from a fork by Jonathan Nicol
 * Under MIT License
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).SimpleBar=e()}(this,function(){"use strict";var t=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},e=function(t){try{return!!t()}catch(t){return!0}},i={}.toString,r=function(t){return i.call(t).slice(8,-1)},n="".split,s=e(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==r(t)?n.call(t,""):Object(t)}:Object,o=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},a=function(t){return Object(o(t))},l=Math.ceil,c=Math.floor,u=function(t){return isNaN(t=+t)?0:(t>0?c:l)(t)},h=Math.min,f=function(t){return t>0?h(u(t),9007199254740991):0},d=function(t){return"object"==typeof t?null!==t:"function"==typeof t},p=Array.isArray||function(t){return"Array"==r(t)},v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function g(t,e){return t(e={exports:{}},e.exports),e.exports}var b,m,y,x,E="object"==typeof window&&window&&window.Math==Math?window:"object"==typeof self&&self&&self.Math==Math?self:Function("return this")(),w=!e(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),O=E.document,_=d(O)&&d(O.createElement),S=!w&&!e(function(){return 7!=Object.defineProperty((t="div",_?O.createElement(t):{}),"a",{get:function(){return 7}}).a;var t}),L=function(t){if(!d(t))throw TypeError(String(t)+" is not an object");return t},A=function(t,e){if(!d(t))return t;var i,r;if(e&&"function"==typeof(i=t.toString)&&!d(r=i.call(t)))return r;if("function"==typeof(i=t.valueOf)&&!d(r=i.call(t)))return r;if(!e&&"function"==typeof(i=t.toString)&&!d(r=i.call(t)))return r;throw TypeError("Can't convert object to primitive value")},M=Object.defineProperty,k={f:w?M:function(t,e,i){if(L(t),e=A(e,!0),L(i),S)try{return M(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(t[e]=i.value),t}},W=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},T=w?function(t,e,i){return k.f(t,e,W(1,i))}:function(t,e,i){return t[e]=i,t},R=function(t,e){try{T(E,t,e)}catch(i){E[t]=e}return e},j=g(function(t){var e=E["__core-js_shared__"]||R("__core-js_shared__",{});(t.exports=function(t,i){return e[t]||(e[t]=void 0!==i?i:{})})("versions",[]).push({version:"3.0.1",mode:"global",copyright:"Â© 2019 Denis Pushkarev (zloirock.ru)"})}),C=0,N=Math.random(),z=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++C+N).toString(36))},D=!e(function(){return!String(Symbol())}),V=j("wks"),I=E.Symbol,B=function(t){return V[t]||(V[t]=D&&I[t]||(D?I:z)("Symbol."+t))},P=B("species"),H=function(t,e){var i;return p(t)&&("function"!=typeof(i=t.constructor)||i!==Array&&!p(i.prototype)?d(i)&&null===(i=i[P])&&(i=void 0):i=void 0),new(void 0===i?Array:i)(0===e?0:e)},F=function(e,i){var r=1==e,n=2==e,o=3==e,l=4==e,c=6==e,u=5==e||c,h=i||H;return function(i,d,p){for(var v,g,b=a(i),m=s(b),y=function(e,i,r){if(t(e),void 0===i)return e;switch(r){case 0:return function(){return e.call(i)};case 1:return function(t){return e.call(i,t)};case 2:return function(t,r){return e.call(i,t,r)};case 3:return function(t,r,n){return e.call(i,t,r,n)}}return function(){return e.apply(i,arguments)}}(d,p,3),x=f(m.length),E=0,w=r?h(i,x):n?h(i,0):void 0;x>E;E++)if((u||E in m)&&(g=y(v=m[E],E,b),e))if(r)w[E]=g;else if(g)switch(e){case 3:return!0;case 5:return v;case 6:return E;case 2:w.push(v)}else if(l)return!1;return c?-1:o||l?l:w}},q=B("species"),$={}.propertyIsEnumerable,Y=Object.getOwnPropertyDescriptor,X={f:Y&&!$.call({1:2},1)?function(t){var e=Y(this,t);return!!e&&e.enumerable}:$},G=function(t){return s(o(t))},K={}.hasOwnProperty,U=function(t,e){return K.call(t,e)},J=Object.getOwnPropertyDescriptor,Q={f:w?J:function(t,e){if(t=G(t),e=A(e,!0),S)try{return J(t,e)}catch(t){}if(U(t,e))return W(!X.f.call(t,e),t[e])}},Z=j("native-function-to-string",Function.toString),tt=E.WeakMap,et="function"==typeof tt&&/native code/.test(Z.call(tt)),it=j("keys"),rt={},nt=E.WeakMap;if(et){var st=new nt,ot=st.get,at=st.has,lt=st.set;b=function(t,e){return lt.call(st,t,e),e},m=function(t){return ot.call(st,t)||{}},y=function(t){return at.call(st,t)}}else{var ct=it[x="state"]||(it[x]=z(x));rt[ct]=!0,b=function(t,e){return T(t,ct,e),e},m=function(t){return U(t,ct)?t[ct]:{}},y=function(t){return U(t,ct)}}var ut,ht,ft={set:b,get:m,has:y,enforce:function(t){return y(t)?m(t):b(t,{})},getterFor:function(t){return function(e){var i;if(!d(e)||(i=m(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return i}}},dt=g(function(t){var e=ft.get,i=ft.enforce,r=String(Z).split("toString");j("inspectSource",function(t){return Z.call(t)}),(t.exports=function(t,e,n,s){var o=!!s&&!!s.unsafe,a=!!s&&!!s.enumerable,l=!!s&&!!s.noTargetGet;"function"==typeof n&&("string"!=typeof e||U(n,"name")||T(n,"name",e),i(n).source=r.join("string"==typeof e?e:"")),t!==E?(o?!l&&t[e]&&(a=!0):delete t[e],a?t[e]=n:T(t,e,n)):a?t[e]=n:R(e,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&e(this).source||Z.call(this)})}),pt=Math.max,vt=Math.min,gt=(ut=!1,function(t,e,i){var r,n=G(t),s=f(n.length),o=function(t,e){var i=u(t);return i<0?pt(i+e,0):vt(i,e)}(i,s);if(ut&&e!=e){for(;s>o;)if((r=n[o++])!=r)return!0}else for(;s>o;o++)if((ut||o in n)&&n[o]===e)return ut||o||0;return!ut&&-1}),bt=function(t,e){var i,r=G(t),n=0,s=[];for(i in r)!U(rt,i)&&U(r,i)&&s.push(i);for(;e.length>n;)U(r,i=e[n++])&&(~gt(s,i)||s.push(i));return s},mt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],yt=mt.concat("length","prototype"),xt={f:Object.getOwnPropertyNames||function(t){return bt(t,yt)}},Et={f:Object.getOwnPropertySymbols},wt=E.Reflect,Ot=wt&&wt.ownKeys||function(t){var e=xt.f(L(t)),i=Et.f;return i?e.concat(i(t)):e},_t=function(t,e){for(var i=Ot(e),r=k.f,n=Q.f,s=0;s<i.length;s++){var o=i[s];U(t,o)||r(t,o,n(e,o))}},St=/#|\.prototype\./,Lt=function(t,i){var r=Mt[At(t)];return r==Wt||r!=kt&&("function"==typeof i?e(i):!!i)},At=Lt.normalize=function(t){return String(t).replace(St,".").toLowerCase()},Mt=Lt.data={},kt=Lt.NATIVE="N",Wt=Lt.POLYFILL="P",Tt=Lt,Rt=Q.f,jt=function(t,e){var i,r,n,s,o,a=t.target,l=t.global,c=t.stat;if(i=l?E:c?E[a]||R(a,{}):(E[a]||{}).prototype)for(r in e){if(s=e[r],n=t.noTargetGet?(o=Rt(i,r))&&o.value:i[r],!Tt(l?r:a+(c?".":"#")+r,t.forced)&&void 0!==n){if(typeof s==typeof n)continue;_t(s,n)}(t.sham||n&&n.sham)&&T(s,"sham",!0),dt(i,r,s,t)}},Ct=F(2);jt({target:"Array",proto:!0,forced:!(ht="filter",!e(function(){var t=[];return(t.constructor={})[q]=function(){return{foo:1}},1!==t[ht](Boolean).foo}))},{filter:function(t){return Ct(this,t,arguments[1])}});var Nt=function(t,i){var r=[][t];return!r||!e(function(){r.call(null,i||function(){throw 1},1)})},zt=[].forEach,Dt=F(0),Vt=Nt("forEach")?function(t){return Dt(this,t,arguments[1])}:zt;jt({target:"Array",proto:!0,forced:[].forEach!=Vt},{forEach:Vt});jt({target:"Array",proto:!0,forced:Nt("reduce")},{reduce:function(e){return function(e,i,r,n,o){t(i);var l=a(e),c=s(l),u=f(l.length),h=o?u-1:0,d=o?-1:1;if(r<2)for(;;){if(h in c){n=c[h],h+=d;break}if(h+=d,o?h<0:u<=h)throw TypeError("Reduce of empty array with no initial value")}for(;o?h>=0:u>h;h+=d)h in c&&(n=i(n,c[h],h,l));return n}(this,e,arguments.length,arguments[1],!1)}});var It=k.f,Bt=Function.prototype,Pt=Bt.toString,Ht=/^\s*function ([^ (]*)/;!w||"name"in Bt||It(Bt,"name",{configurable:!0,get:function(){try{return Pt.call(this).match(Ht)[1]}catch(t){return""}}});var Ft=Object.keys||function(t){return bt(t,mt)},qt=Object.assign,$t=!qt||e(function(){var t={},e={},i=Symbol();return t[i]=7,"abcdefghijklmnopqrst".split("").forEach(function(t){e[t]=t}),7!=qt({},t)[i]||"abcdefghijklmnopqrst"!=Ft(qt({},e)).join("")})?function(t,e){for(var i=a(t),r=arguments.length,n=1,o=Et.f,l=X.f;r>n;)for(var c,u=s(arguments[n++]),h=o?Ft(u).concat(o(u)):Ft(u),f=h.length,d=0;f>d;)l.call(u,c=h[d++])&&(i[c]=u[c]);return i}:qt;jt({target:"Object",stat:!0,forced:Object.assign!==$t},{assign:$t});var Yt="\t\n\v\f\r  áš€â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff",Xt="["+Yt+"]",Gt=RegExp("^"+Xt+Xt+"*"),Kt=RegExp(Xt+Xt+"*$"),Ut=E.parseInt,Jt=/^[-+]?0[xX]/,Qt=8!==Ut(Yt+"08")||22!==Ut(Yt+"0x16")?function(t,e){var i=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(Gt,"")),2&e&&(t=t.replace(Kt,"")),t}(String(t),3);return Ut(i,e>>>0||(Jt.test(i)?16:10))}:Ut;jt({global:!0,forced:parseInt!=Qt},{parseInt:Qt});var Zt,te,ee=RegExp.prototype.exec,ie=String.prototype.replace,re=ee,ne=(Zt=/a/,te=/b*/g,ee.call(Zt,"a"),ee.call(te,"a"),0!==Zt.lastIndex||0!==te.lastIndex),se=void 0!==/()??/.exec("")[1];(ne||se)&&(re=function(t){var e,i,r,n,s=this;return se&&(i=new RegExp("^"+s.source+"$(?!\\s)",function(){var t=L(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}.call(s))),ne&&(e=s.lastIndex),r=ee.call(s,t),ne&&r&&(s.lastIndex=s.global?r.index+r[0].length:e),se&&r&&r.length>1&&ie.call(r[0],i,function(){for(n=1;n<arguments.length-2;n++)void 0===arguments[n]&&(r[n]=void 0)}),r});var oe=re;jt({target:"RegExp",proto:!0,forced:/./.exec!==oe},{exec:oe});var ae=function(t,e,i){return e+(i?function(t,e,i){var r,n,s=String(o(t)),a=u(e),l=s.length;return a<0||a>=l?i?"":void 0:(r=s.charCodeAt(a))<55296||r>56319||a+1===l||(n=s.charCodeAt(a+1))<56320||n>57343?i?s.charAt(a):r:i?s.slice(a,a+2):n-56320+(r-55296<<10)+65536}(t,e,!0).length:1)},le=function(t,e){var i=t.exec;if("function"==typeof i){var n=i.call(t,e);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return oe.call(t,e)},ce=B("species"),ue=!e(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),he=!e(function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}),fe=function(t,i,r,n){var s=B(t),o=!e(function(){var e={};return e[s]=function(){return 7},7!=""[t](e)}),a=o&&!e(function(){var e=!1,i=/a/;return i.exec=function(){return e=!0,null},"split"===t&&(i.constructor={},i.constructor[ce]=function(){return i}),i[s](""),!e});if(!o||!a||"replace"===t&&!ue||"split"===t&&!he){var l=/./[s],c=r(s,""[t],function(t,e,i,r,n){return e.exec===oe?o&&!n?{done:!0,value:l.call(e,i,r)}:{done:!0,value:t.call(i,e,r)}:{done:!1}}),u=c[0],h=c[1];dt(String.prototype,t,u),dt(RegExp.prototype,s,2==i?function(t,e){return h.call(t,this,e)}:function(t){return h.call(t,this)}),n&&T(RegExp.prototype[s],"sham",!0)}};fe("match",1,function(t,e,i){return[function(e){var i=o(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,i):new RegExp(e)[t](String(i))},function(t){var r=i(e,t,this);if(r.done)return r.value;var n=L(t),s=String(this);if(!n.global)return le(n,s);var o=n.unicode;n.lastIndex=0;for(var a,l=[],c=0;null!==(a=le(n,s));){var u=String(a[0]);l[c]=u,""===u&&(n.lastIndex=ae(s,f(n.lastIndex),o)),c++}return 0===c?null:l}]});var de=Math.max,pe=Math.min,ve=Math.floor,ge=/\$([$&`']|\d\d?|<[^>]*>)/g,be=/\$([$&`']|\d\d?)/g;fe("replace",2,function(t,e,i){return[function(i,r){var n=o(this),s=null==i?void 0:i[t];return void 0!==s?s.call(i,n,r):e.call(String(n),i,r)},function(t,n){var s=i(e,t,this,n);if(s.done)return s.value;var o=L(t),a=String(this),l="function"==typeof n;l||(n=String(n));var c=o.global;if(c){var h=o.unicode;o.lastIndex=0}for(var d=[];;){var p=le(o,a);if(null===p)break;if(d.push(p),!c)break;""===String(p[0])&&(o.lastIndex=ae(a,f(o.lastIndex),h))}for(var v,g="",b=0,m=0;m<d.length;m++){p=d[m];for(var y=String(p[0]),x=de(pe(u(p.index),a.length),0),E=[],w=1;w<p.length;w++)E.push(void 0===(v=p[w])?v:String(v));var O=p.groups;if(l){var _=[y].concat(E,x,a);void 0!==O&&_.push(O);var S=String(n.apply(void 0,_))}else S=r(y,a,x,E,O,n);x>=b&&(g+=a.slice(b,x)+S,b=x+y.length)}return g+a.slice(b)}];function r(t,i,r,n,s,o){var l=r+t.length,c=n.length,u=be;return void 0!==s&&(s=a(s),u=ge),e.call(o,u,function(e,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return i.slice(0,r);case"'":return i.slice(l);case"<":a=s[o.slice(1,-1)];break;default:var u=+o;if(0===u)return e;if(u>c){var h=ve(u/10);return 0===h?e:h<=c?void 0===n[h-1]?o.charAt(1):n[h-1]+o.charAt(1):e}a=n[u-1]}return void 0===a?"":a})}});for(var me in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var ye=E[me],xe=ye&&ye.prototype;if(xe&&xe.forEach!==Vt)try{T(xe,"forEach",Vt)}catch(t){xe.forEach=Vt}}var Ee="Expected a function",we=NaN,Oe="[object Symbol]",_e=/^\s+|\s+$/g,Se=/^[-+]0x[0-9a-f]+$/i,Le=/^0b[01]+$/i,Ae=/^0o[0-7]+$/i,Me=parseInt,ke="object"==typeof v&&v&&v.Object===Object&&v,We="object"==typeof self&&self&&self.Object===Object&&self,Te=ke||We||Function("return this")(),Re=Object.prototype.toString,je=Math.max,Ce=Math.min,Ne=function(){return Te.Date.now()};function ze(t,e,i){var r,n,s,o,a,l,c=0,u=!1,h=!1,f=!0;if("function"!=typeof t)throw new TypeError(Ee);function d(e){var i=r,s=n;return r=n=void 0,c=e,o=t.apply(s,i)}function p(t){var i=t-l;return void 0===l||i>=e||i<0||h&&t-c>=s}function v(){var t=Ne();if(p(t))return g(t);a=setTimeout(v,function(t){var i=e-(t-l);return h?Ce(i,s-(t-c)):i}(t))}function g(t){return a=void 0,f&&r?d(t):(r=n=void 0,o)}function b(){var t=Ne(),i=p(t);if(r=arguments,n=this,l=t,i){if(void 0===a)return function(t){return c=t,a=setTimeout(v,e),u?d(t):o}(l);if(h)return a=setTimeout(v,e),d(l)}return void 0===a&&(a=setTimeout(v,e)),o}return e=Ve(e)||0,De(i)&&(u=!!i.leading,s=(h="maxWait"in i)?je(Ve(i.maxWait)||0,e):s,f="trailing"in i?!!i.trailing:f),b.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=n=a=void 0},b.flush=function(){return void 0===a?o:g(Ne())},b}function De(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ve(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&Re.call(t)==Oe}(t))return we;if(De(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=De(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(_e,"");var i=Le.test(t);return i||Ae.test(t)?Me(t.slice(2),i?2:8):Se.test(t)?we:+t}var Ie=function(t,e,i){var r=!0,n=!0;if("function"!=typeof t)throw new TypeError(Ee);return De(i)&&(r="leading"in i?!!i.leading:r,n="trailing"in i?!!i.trailing:n),ze(t,e,{leading:r,maxWait:e,trailing:n})},Be="Expected a function",Pe=NaN,He="[object Symbol]",Fe=/^\s+|\s+$/g,qe=/^[-+]0x[0-9a-f]+$/i,$e=/^0b[01]+$/i,Ye=/^0o[0-7]+$/i,Xe=parseInt,Ge="object"==typeof v&&v&&v.Object===Object&&v,Ke="object"==typeof self&&self&&self.Object===Object&&self,Ue=Ge||Ke||Function("return this")(),Je=Object.prototype.toString,Qe=Math.max,Ze=Math.min,ti=function(){return Ue.Date.now()};function ei(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function ii(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&Je.call(t)==He}(t))return Pe;if(ei(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=ei(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Fe,"");var i=$e.test(t);return i||Ye.test(t)?Xe(t.slice(2),i?2:8):qe.test(t)?Pe:+t}var ri=function(t,e,i){var r,n,s,o,a,l,c=0,u=!1,h=!1,f=!0;if("function"!=typeof t)throw new TypeError(Be);function d(e){var i=r,s=n;return r=n=void 0,c=e,o=t.apply(s,i)}function p(t){var i=t-l;return void 0===l||i>=e||i<0||h&&t-c>=s}function v(){var t=ti();if(p(t))return g(t);a=setTimeout(v,function(t){var i=e-(t-l);return h?Ze(i,s-(t-c)):i}(t))}function g(t){return a=void 0,f&&r?d(t):(r=n=void 0,o)}function b(){var t=ti(),i=p(t);if(r=arguments,n=this,l=t,i){if(void 0===a)return function(t){return c=t,a=setTimeout(v,e),u?d(t):o}(l);if(h)return a=setTimeout(v,e),d(l)}return void 0===a&&(a=setTimeout(v,e)),o}return e=ii(e)||0,ei(i)&&(u=!!i.leading,s=(h="maxWait"in i)?Qe(ii(i.maxWait)||0,e):s,f="trailing"in i?!!i.trailing:f),b.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=n=a=void 0},b.flush=function(){return void 0===a?o:g(ti())},b},ni="Expected a function",si="__lodash_hash_undefined__",oi="[object Function]",ai="[object GeneratorFunction]",li=/^\[object .+?Constructor\]$/,ci="object"==typeof v&&v&&v.Object===Object&&v,ui="object"==typeof self&&self&&self.Object===Object&&self,hi=ci||ui||Function("return this")();var fi=Array.prototype,di=Function.prototype,pi=Object.prototype,vi=hi["__core-js_shared__"],gi=function(){var t=/[^.]+$/.exec(vi&&vi.keys&&vi.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),bi=di.toString,mi=pi.hasOwnProperty,yi=pi.toString,xi=RegExp("^"+bi.call(mi).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ei=fi.splice,wi=Wi(hi,"Map"),Oi=Wi(Object,"create");function _i(t){var e=-1,i=t?t.length:0;for(this.clear();++e<i;){var r=t[e];this.set(r[0],r[1])}}function Si(t){var e=-1,i=t?t.length:0;for(this.clear();++e<i;){var r=t[e];this.set(r[0],r[1])}}function Li(t){var e=-1,i=t?t.length:0;for(this.clear();++e<i;){var r=t[e];this.set(r[0],r[1])}}function Ai(t,e){for(var i,r,n=t.length;n--;)if((i=t[n][0])===(r=e)||i!=i&&r!=r)return n;return-1}function Mi(t){return!(!Ri(t)||(e=t,gi&&gi in e))&&(function(t){var e=Ri(t)?yi.call(t):"";return e==oi||e==ai}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?xi:li).test(function(t){if(null!=t){try{return bi.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function ki(t,e){var i,r,n=t.__data__;return("string"==(r=typeof(i=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==i:null===i)?n["string"==typeof e?"string":"hash"]:n.map}function Wi(t,e){var i=function(t,e){return null==t?void 0:t[e]}(t,e);return Mi(i)?i:void 0}function Ti(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(ni);var i=function(){var r=arguments,n=e?e.apply(this,r):r[0],s=i.cache;if(s.has(n))return s.get(n);var o=t.apply(this,r);return i.cache=s.set(n,o),o};return i.cache=new(Ti.Cache||Li),i}function Ri(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}_i.prototype.clear=function(){this.__data__=Oi?Oi(null):{}},_i.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},_i.prototype.get=function(t){var e=this.__data__;if(Oi){var i=e[t];return i===si?void 0:i}return mi.call(e,t)?e[t]:void 0},_i.prototype.has=function(t){var e=this.__data__;return Oi?void 0!==e[t]:mi.call(e,t)},_i.prototype.set=function(t,e){return this.__data__[t]=Oi&&void 0===e?si:e,this},Si.prototype.clear=function(){this.__data__=[]},Si.prototype.delete=function(t){var e=this.__data__,i=Ai(e,t);return!(i<0||(i==e.length-1?e.pop():Ei.call(e,i,1),0))},Si.prototype.get=function(t){var e=this.__data__,i=Ai(e,t);return i<0?void 0:e[i][1]},Si.prototype.has=function(t){return Ai(this.__data__,t)>-1},Si.prototype.set=function(t,e){var i=this.__data__,r=Ai(i,t);return r<0?i.push([t,e]):i[r][1]=e,this},Li.prototype.clear=function(){this.__data__={hash:new _i,map:new(wi||Si),string:new _i}},Li.prototype.delete=function(t){return ki(this,t).delete(t)},Li.prototype.get=function(t){return ki(this,t).get(t)},Li.prototype.has=function(t){return ki(this,t).has(t)},Li.prototype.set=function(t,e){return ki(this,t).set(t,e),this},Ti.Cache=Li;var ji=Ti,Ci=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var i=-1;return t.some(function(t,r){return t[0]===e&&(i=r,!0)}),i}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var i=t(this.__entries__,e),r=this.__entries__[i];return r&&r[1]},e.prototype.set=function(e,i){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=i:this.__entries__.push([e,i])},e.prototype.delete=function(e){var i=this.__entries__,r=t(i,e);~r&&i.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var i=0,r=this.__entries__;i<r.length;i++){var n=r[i];t.call(e,n[1],n[0])}},e}()}(),Ni="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,zi="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Di="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(zi):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)},Vi=2;var Ii=20,Bi=["top","right","bottom","left","width","height","size","weight"],Pi="undefined"!=typeof MutationObserver,Hi=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var i=!1,r=!1,n=0;function s(){i&&(i=!1,t()),r&&a()}function o(){Di(s)}function a(){var t=Date.now();if(i){if(t-n<Vi)return;r=!0}else i=!0,r=!1,setTimeout(o,e);n=t}return a}(this.refresh.bind(this),Ii)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,i=e.indexOf(t);~i&&e.splice(i,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},t.prototype.connect_=function(){Ni&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Pi?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){Ni&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,i=void 0===e?"":e;Bi.some(function(t){return!!~i.indexOf(t)})&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),Fi=function(t,e){for(var i=0,r=Object.keys(e);i<r.length;i++){var n=r[i];Object.defineProperty(t,n,{value:e[n],enumerable:!1,writable:!1,configurable:!0})}return t},qi=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||zi},$i=Ji(0,0,0,0);function Yi(t){return parseFloat(t)||0}function Xi(t){for(var e=[],i=1;i<arguments.length;i++)e[i-1]=arguments[i];return e.reduce(function(e,i){return e+Yi(t["border-"+i+"-width"])},0)}function Gi(t){var e=t.clientWidth,i=t.clientHeight;if(!e&&!i)return $i;var r=qi(t).getComputedStyle(t),n=function(t){for(var e={},i=0,r=["top","right","bottom","left"];i<r.length;i++){var n=r[i],s=t["padding-"+n];e[n]=Yi(s)}return e}(r),s=n.left+n.right,o=n.top+n.bottom,a=Yi(r.width),l=Yi(r.height);if("border-box"===r.boxSizing&&(Math.round(a+s)!==e&&(a-=Xi(r,"left","right")+s),Math.round(l+o)!==i&&(l-=Xi(r,"top","bottom")+o)),!function(t){return t===qi(t).document.documentElement}(t)){var c=Math.round(a+s)-e,u=Math.round(l+o)-i;1!==Math.abs(c)&&(a-=c),1!==Math.abs(u)&&(l-=u)}return Ji(n.left,n.top,a,l)}var Ki="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof qi(t).SVGGraphicsElement}:function(t){return t instanceof qi(t).SVGElement&&"function"==typeof t.getBBox};function Ui(t){return Ni?Ki(t)?function(t){var e=t.getBBox();return Ji(0,0,e.width,e.height)}(t):Gi(t):$i}function Ji(t,e,i,r){return{x:t,y:e,width:i,height:r}}var Qi=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Ji(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=Ui(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),Zi=function(){return function(t,e){var i,r,n,s,o,a,l,c=(r=(i=e).x,n=i.y,s=i.width,o=i.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,l=Object.create(a.prototype),Fi(l,{x:r,y:n,width:s,height:o,top:n,right:r+s,bottom:o+n,left:r}),l);Fi(this,{target:t,contentRect:c})}}(),tr=function(){function t(t,e,i){if(this.activeObservations_=[],this.observations_=new Ci,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=i}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof qi(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new Qi(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof qi(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(e){e.isActive()&&t.activeObservations_.push(e)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map(function(t){return new Zi(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),er="undefined"!=typeof WeakMap?new WeakMap:new Ci,ir=function(){return function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var i=Hi.getInstance(),r=new tr(e,i,this);er.set(this,r)}}();["observe","unobserve","disconnect"].forEach(function(t){ir.prototype[t]=function(){var e;return(e=er.get(this))[t].apply(e,arguments)}});var rr=void 0!==zi.ResizeObserver?zi.ResizeObserver:ir,nr=!("undefined"==typeof window||!window.document||!window.document.createElement);function sr(){if("undefined"==typeof document)return 0;var t=document.body,e=document.createElement("div"),i=e.style;i.position="fixed",i.left=0,i.visibility="hidden",i.overflowY="scroll",t.appendChild(e);var r=e.getBoundingClientRect().right;return t.removeChild(e),r}var or=function(){function t(e,i){var r=this;this.onScroll=function(){r.scrollXTicking||(window.requestAnimationFrame(r.scrollX),r.scrollXTicking=!0),r.scrollYTicking||(window.requestAnimationFrame(r.scrollY),r.scrollYTicking=!0)},this.scrollX=function(){r.axis.x.isOverflowing&&(r.showScrollbar("x"),r.positionScrollbar("x")),r.scrollXTicking=!1},this.scrollY=function(){r.axis.y.isOverflowing&&(r.showScrollbar("y"),r.positionScrollbar("y")),r.scrollYTicking=!1},this.onMouseEnter=function(){r.showScrollbar("x"),r.showScrollbar("y")},this.onMouseMove=function(t){r.mouseX=t.clientX,r.mouseY=t.clientY,(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&r.onMouseMoveForAxis("x"),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&r.onMouseMoveForAxis("y")},this.onMouseLeave=function(){r.onMouseMove.cancel(),(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&r.onMouseLeaveForAxis("x"),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&r.onMouseLeaveForAxis("y"),r.mouseX=-1,r.mouseY=-1},this.onWindowResize=function(){r.scrollbarWidth=sr(),r.hideNativeScrollbar()},this.hideScrollbars=function(){r.axis.x.track.rect=r.axis.x.track.el.getBoundingClientRect(),r.axis.y.track.rect=r.axis.y.track.el.getBoundingClientRect(),r.isWithinBounds(r.axis.y.track.rect)||(r.axis.y.scrollbar.el.classList.remove(r.classNames.visible),r.axis.y.isVisible=!1),r.isWithinBounds(r.axis.x.track.rect)||(r.axis.x.scrollbar.el.classList.remove(r.classNames.visible),r.axis.x.isVisible=!1)},this.onPointerEvent=function(t){var e,i;r.axis.x.scrollbar.rect=r.axis.x.scrollbar.el.getBoundingClientRect(),r.axis.y.scrollbar.rect=r.axis.y.scrollbar.el.getBoundingClientRect(),(r.axis.x.isOverflowing||r.axis.x.forceVisible)&&(i=r.isWithinBounds(r.axis.x.scrollbar.rect)),(r.axis.y.isOverflowing||r.axis.y.forceVisible)&&(e=r.isWithinBounds(r.axis.y.scrollbar.rect)),(e||i)&&(t.preventDefault(),t.stopPropagation(),"mousedown"===t.type&&(e&&r.onDragStart(t,"y"),i&&r.onDragStart(t,"x")))},this.drag=function(e){var i=r.axis[r.draggedAxis].track,n=i.rect[r.axis[r.draggedAxis].sizeAttr],s=r.axis[r.draggedAxis].scrollbar,o=r.contentWrapperEl[r.axis[r.draggedAxis].scrollSizeAttr],a=parseInt(r.elStyles[r.axis[r.draggedAxis].sizeAttr],10);e.preventDefault(),e.stopPropagation();var l=(("y"===r.draggedAxis?e.pageY:e.pageX)-i.rect[r.axis[r.draggedAxis].offsetAttr]-r.axis[r.draggedAxis].dragOffset)/(n-s.size)*(o-a);"x"===r.draggedAxis&&(l=r.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?l-(n+s.size):l,l=r.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-l:l),r.contentWrapperEl[r.axis[r.draggedAxis].scrollOffsetAttr]=l},this.onEndDrag=function(t){t.preventDefault(),t.stopPropagation(),r.el.classList.remove(r.classNames.dragging),document.removeEventListener("mousemove",r.drag,!0),document.removeEventListener("mouseup",r.onEndDrag,!0),r.removePreventClickId=window.setTimeout(function(){document.removeEventListener("click",r.preventClick,!0),document.removeEventListener("dblclick",r.preventClick,!0),r.removePreventClickId=null})},this.preventClick=function(t){t.preventDefault(),t.stopPropagation()},this.el=e,this.flashTimeout,this.contentEl,this.contentWrapperEl,this.offsetEl,this.maskEl,this.globalObserver,this.mutationObserver,this.resizeObserver,this.scrollbarWidth,this.minScrollbarWidth=20,this.options=Object.assign({},t.defaultOptions,i),this.classNames=Object.assign({},t.defaultOptions.classNames,this.options.classNames),this.isRtl,this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,isVisible:!1,forceVisible:!1,track:{},scrollbar:{}}},this.removePreventClickId=null,this.el.SimpleBar||(this.recalculate=Ie(this.recalculate.bind(this),64),this.onMouseMove=Ie(this.onMouseMove.bind(this),64),this.hideScrollbars=ri(this.hideScrollbars.bind(this),this.options.timeout),this.onWindowResize=ri(this.onWindowResize.bind(this),64,{leading:!0}),t.getRtlHelpers=ji(t.getRtlHelpers),this.init())}t.getRtlHelpers=function(){var e=document.createElement("div");e.innerHTML='<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';var i=e.firstElementChild;document.body.appendChild(i);var r=i.firstElementChild;i.scrollLeft=0;var n=t.getOffset(i),s=t.getOffset(r);i.scrollLeft=999;var o=t.getOffset(r);return{isRtlScrollingInverted:n.left!==s.left&&s.left-o.left!=0,isRtlScrollbarInverted:n.left!==s.left}},t.initHtmlApi=function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(function(e){e.forEach(function(e){Array.prototype.forEach.call(e.addedNodes,function(e){1===e.nodeType&&(e.hasAttribute("data-simplebar")?!e.SimpleBar&&new t(e,t.getElOptions(e)):Array.prototype.forEach.call(e.querySelectorAll("[data-simplebar]"),function(e){!e.SimpleBar&&new t(e,t.getElOptions(e))}))}),Array.prototype.forEach.call(e.removedNodes,function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?t.SimpleBar&&t.SimpleBar.unMount():Array.prototype.forEach.call(t.querySelectorAll("[data-simplebar]"),function(t){t.SimpleBar&&t.SimpleBar.unMount()}))})})}),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))},t.getElOptions=function(t){return Array.prototype.reduce.call(t.attributes,function(t,e){var i=e.name.match(/data-simplebar-(.+)/);if(i){var r=i[1].replace(/\W+(.)/g,function(t,e){return e.toUpperCase()});switch(e.value){case"true":t[r]=!0;break;case"false":t[r]=!1;break;case void 0:t[r]=!0;break;default:t[r]=e.value}}return t},{})},t.removeObserver=function(){this.globalObserver.disconnect()},t.initDOMLoadedElements=function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),Array.prototype.forEach.call(document.querySelectorAll("[data-simplebar]"),function(e){e.SimpleBar||new t(e,t.getElOptions(e))})},t.getOffset=function(t){var e=t.getBoundingClientRect();return{top:e.top+(window.pageYOffset||document.documentElement.scrollTop),left:e.left+(window.pageXOffset||document.documentElement.scrollLeft)}};var e=t.prototype;return e.init=function(){this.el.SimpleBar=this,nr&&(this.initDOM(),this.scrollbarWidth=sr(),this.recalculate(),this.initListeners())},e.initDOM=function(){var t=this;if(Array.prototype.filter.call(this.el.children,function(e){return e.classList.contains(t.classNames.wrapper)}).length)this.wrapperEl=this.el.querySelector("."+this.classNames.wrapper),this.contentWrapperEl=this.el.querySelector("."+this.classNames.contentWrapper),this.offsetEl=this.el.querySelector("."+this.classNames.offset),this.maskEl=this.el.querySelector("."+this.classNames.mask),this.contentEl=this.el.querySelector("."+this.classNames.contentEl),this.placeholderEl=this.el.querySelector("."+this.classNames.placeholder),this.heightAutoObserverWrapperEl=this.el.querySelector("."+this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl=this.el.querySelector("."+this.classNames.heightAutoObserverEl),this.axis.x.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.horizontal),this.axis.y.track.el=this.findChild(this.el,"."+this.classNames.track+"."+this.classNames.vertical);else{for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentWrapperEl.classList.add(this.classNames.contentWrapper),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.contentEl.classList.add(this.classNames.contentEl),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl)}if(!this.axis.x.track.el||!this.axis.y.track.el){var e=document.createElement("div"),i=document.createElement("div");e.classList.add(this.classNames.track),i.classList.add(this.classNames.scrollbar),e.appendChild(i),this.axis.x.track.el=e.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=e.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector("."+this.classNames.scrollbar),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector("."+this.classNames.scrollbar),this.options.autoHide||(this.axis.x.scrollbar.el.classList.add(this.classNames.visible),this.axis.y.scrollbar.el.classList.add(this.classNames.visible)),this.el.setAttribute("data-simplebar","init")},e.initListeners=function(){var t=this;this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach(function(e){t.el.addEventListener(e,t.onPointerEvent,!0)}),["touchstart","touchend","touchmove"].forEach(function(e){t.el.addEventListener(e,t.onPointerEvent,{capture:!0,passive:!0})}),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onWindowResize),this.resizeObserver=new rr(this.recalculate),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl)},e.recalculate=function(){var t=this.heightAutoObserverEl.offsetHeight<=1,e=this.heightAutoObserverEl.offsetWidth<=1;this.elStyles=window.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction,this.contentEl.style.padding=this.elStyles.paddingTop+" "+this.elStyles.paddingRight+" "+this.elStyles.paddingBottom+" "+this.elStyles.paddingLeft,this.wrapperEl.style.margin="-"+this.elStyles.paddingTop+" -"+this.elStyles.paddingRight+" -"+this.elStyles.paddingBottom+" -"+this.elStyles.paddingLeft,this.contentWrapperEl.style.height=t?"auto":"100%",this.placeholderEl.style.width=e?this.contentEl.offsetWidth+"px":"auto",this.placeholderEl.style.height=this.contentEl.scrollHeight+"px",this.axis.x.isOverflowing=this.contentWrapperEl.scrollWidth>this.contentWrapperEl.offsetWidth,this.axis.y.isOverflowing=this.contentWrapperEl.scrollHeight>this.contentWrapperEl.offsetHeight,this.axis.x.isOverflowing="hidden"!==this.elStyles.overflowX&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==this.elStyles.overflowY&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar(),this.axis.x.track.rect=this.axis.x.track.el.getBoundingClientRect(),this.axis.y.track.rect=this.axis.y.track.el.getBoundingClientRect(),this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el.style.width=this.axis.x.scrollbar.size+"px",this.axis.y.scrollbar.el.style.height=this.axis.y.scrollbar.size+"px",this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")},e.getScrollbarSize=function(t){void 0===t&&(t="y");var e,i=this.scrollbarWidth?this.contentWrapperEl[this.axis[t].scrollSizeAttr]:this.contentWrapperEl[this.axis[t].scrollSizeAttr]-this.minScrollbarWidth,r=this.axis[t].track.rect[this.axis[t].sizeAttr];if(this.axis[t].isOverflowing){var n=r/i;return e=Math.max(~~(n*r),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(e=Math.min(e,this.options.scrollbarMaxSize)),e}},e.positionScrollbar=function(e){void 0===e&&(e="y");var i=this.contentWrapperEl[this.axis[e].scrollSizeAttr],r=this.axis[e].track.rect[this.axis[e].sizeAttr],n=parseInt(this.elStyles[this.axis[e].sizeAttr],10),s=this.axis[e].scrollbar,o=this.contentWrapperEl[this.axis[e].scrollOffsetAttr],a=(o="x"===e&&this.isRtl&&t.getRtlHelpers().isRtlScrollingInverted?-o:o)/(i-n),l=~~((r-s.size)*a);l="x"===e&&this.isRtl&&t.getRtlHelpers().isRtlScrollbarInverted?l+(r-s.size):l,s.el.style.transform="x"===e?"translate3d("+l+"px, 0, 0)":"translate3d(0, "+l+"px, 0)"},e.toggleTrackVisibility=function(t){void 0===t&&(t="y");var e=this.axis[t].track.el,i=this.axis[t].scrollbar.el;this.axis[t].isOverflowing||this.axis[t].forceVisible?(e.style.visibility="visible",this.contentWrapperEl.style[this.axis[t].overflowAttr]="scroll"):(e.style.visibility="hidden",this.contentWrapperEl.style[this.axis[t].overflowAttr]="hidden"),this.axis[t].isOverflowing?i.style.display="block":i.style.display="none"},e.hideNativeScrollbar=function(){if(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-"+(this.scrollbarWidth||this.minScrollbarWidth)+"px":0,this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-"+(this.scrollbarWidth||this.minScrollbarWidth)+"px":0,!this.scrollbarWidth){var t=[this.isRtl?"paddingLeft":"paddingRight"];this.contentWrapperEl.style[t]=this.axis.y.isOverflowing||this.axis.y.forceVisible?this.minScrollbarWidth+"px":0,this.contentWrapperEl.style.paddingBottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?this.minScrollbarWidth+"px":0}},e.onMouseMoveForAxis=function(t){void 0===t&&(t="y"),this.axis[t].track.rect=this.axis[t].track.el.getBoundingClientRect(),this.axis[t].scrollbar.rect=this.axis[t].scrollbar.el.getBoundingClientRect(),this.isWithinBounds(this.axis[t].scrollbar.rect)?this.axis[t].scrollbar.el.classList.add(this.classNames.hover):this.axis[t].scrollbar.el.classList.remove(this.classNames.hover),this.isWithinBounds(this.axis[t].track.rect)?(this.showScrollbar(t),this.axis[t].track.el.classList.add(this.classNames.hover)):this.axis[t].track.el.classList.remove(this.classNames.hover)},e.onMouseLeaveForAxis=function(t){void 0===t&&(t="y"),this.axis[t].track.el.classList.remove(this.classNames.hover),this.axis[t].scrollbar.el.classList.remove(this.classNames.hover)},e.showScrollbar=function(t){void 0===t&&(t="y");var e=this.axis[t].scrollbar.el;this.axis[t].isVisible||(e.classList.add(this.classNames.visible),this.axis[t].isVisible=!0),this.options.autoHide&&this.hideScrollbars()},e.onDragStart=function(t,e){void 0===e&&(e="y");var i=this.axis[e].scrollbar.el,r="y"===e?t.pageY:t.pageX;this.axis[e].dragOffset=r-i.getBoundingClientRect()[this.axis[e].offsetAttr],this.draggedAxis=e,this.el.classList.add(this.classNames.dragging),document.addEventListener("mousemove",this.drag,!0),document.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(document.addEventListener("click",this.preventClick,!0),document.addEventListener("dblclick",this.preventClick,!0)):(window.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},e.getContentElement=function(){return this.contentEl},e.getScrollElement=function(){return this.contentWrapperEl},e.removeListeners=function(){var t=this;this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),["mousedown","click","dblclick"].forEach(function(e){t.el.removeEventListener(e,t.onPointerEvent,!0)}),["touchstart","touchend","touchmove"].forEach(function(e){t.el.removeEventListener(e,t.onPointerEvent,{capture:!0,passive:!0})}),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver.disconnect(),this.recalculate.cancel(),this.onMouseMove.cancel(),this.hideScrollbars.cancel(),this.onWindowResize.cancel()},e.unMount=function(){this.removeListeners(),this.el.SimpleBar=null},e.isChildNode=function(t){return null!==t&&(t===this.el||this.isChildNode(t.parentNode))},e.isWithinBounds=function(t){return this.mouseX>=t.left&&this.mouseX<=t.left+t.width&&this.mouseY>=t.top&&this.mouseY<=t.top+t.height},e.findChild=function(t,e){var i=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector;return Array.prototype.filter.call(t.children,function(t){return i.call(t,e)})[0]},t}();return or.defaultOptions={autoHide:!0,forceVisible:!1,classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging"},scrollbarMinSize:25,scrollbarMaxSize:0,timeout:1e3},nr&&or.initHtmlApi(),or});
var options = {
    draggable: false,
};

if (window.matchMedia('(max-width: 980px)').matches) {
    options.prevNextButtons = false;
    options.draggable = true;
}

jQuery(".js-slider").flickity(options);
var options = {
    draggable: true,
    contain: true,
    prevNextButtons: false,
    initialIndex: 1,
    pageDots: false
};

if (window.matchMedia('(max-width: 980px)').matches) {
    options.prevNextButtons = false;
    options.draggable = true;
    options.pageDots = true;
}

jQuery(".js-testimonials-carousel").flickity(options);
jQuery('input[name="variant-value-license"]').on('change', function () {
    jQuery('.js-purchase-btn').attr('href', jQuery(this).attr('data-link'));
    jQuery('.js-purchase-btn').removeClass('disabled');
});
