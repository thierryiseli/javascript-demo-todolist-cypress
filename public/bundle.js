!function(e){"use strict";class t extends e.LitElement{static get styles(){return e.css`
            .title {
                font-size: 30px;
                text-decoration: underline;
            }
        `}render(){return e.html`
            <h1 class="title">
                Todolist works!
            </h1>
        `}}customElements.define("home-view",t);class n extends e.LitElement{static get styles(){return e.css`
            .title {
                font-size: 30px;
                text-decoration: underline;
            }
        `}render(){return e.html`
            <h1 class="title">
                About
            </h1>
        `}}customElements.define("about-view",n);class r extends e.LitElement{static get styles(){return e.css``}render(){return e.html`
            <a href="/">Home</a>
            <a href="/about">About</a>
        `}}function o(e){return e=e||[],Array.isArray(e)?e:[e]}function i(e){return`[Vaadin.Router] ${e}`}customElements.define("header-view",r);const a="module",s="nomodule",c=[a,s];function l(e){if(!e.match(/.+\.[m]?js$/))throw new Error(i(`Unsupported type for bundle "${e}": .js or .mjs expected.`))}function h(e){if(!e||!m(e.path))throw new Error(i('Expected route config to be an object with a "path" string property, or an array of such objects'));const t=e.bundle,n=["component","redirect","bundle"];if(!(f(e.action)||Array.isArray(e.children)||f(e.children)||_(t)||n.some((t=>m(e[t])))))throw new Error(i(`Expected route config "${e.path}" to include either "${n.join('", "')}" or "action" function but none found.`));if(t)if(m(t))l(t);else{if(!c.some((e=>e in t)))throw new Error(i('Expected route bundle to include either "nomodule" or "module" keys, or both'));c.forEach((e=>e in t&&l(t[e])))}e.redirect&&["bundle","component"].forEach((t=>{t in e&&console.warn(i(`Route config "${e.path}" has both "redirect" and "${t}" properties, and "redirect" will always override the latter. Did you mean to only use "${t}"?`))}))}function u(e){o(e).forEach((e=>h(e)))}function d(e,t){let n=document.head.querySelector('script[src="'+e+'"][async]');return n||(n=document.createElement("script"),n.setAttribute("src",e),t===a?n.setAttribute("type",a):t===s&&n.setAttribute(s,""),n.async=!0),new Promise(((e,t)=>{n.onreadystatechange=n.onload=t=>{n.__dynamicImportLoaded=!0,e(t)},n.onerror=e=>{n.parentNode&&n.parentNode.removeChild(n),t(e)},null===n.parentNode?document.head.appendChild(n):n.__dynamicImportLoaded&&e()}))}function p(e,t){return!window.dispatchEvent(new CustomEvent(`vaadin-router-${e}`,{cancelable:"go"===e,detail:t}))}function _(e){return"object"==typeof e&&!!e}function f(e){return"function"==typeof e}function m(e){return"string"==typeof e}function g(e){const t=new Error(i(`Page not found (${e.pathname})`));return t.context=e,t.code=404,t}const v=new class{};function w(e){if(e.defaultPrevented)return;if(0!==e.button)return;if(e.shiftKey||e.ctrlKey||e.altKey||e.metaKey)return;let t=e.target;const n=e.composedPath?e.composedPath():e.path||[];for(let e=0;e<n.length;e++){const r=n[e];if(r.nodeName&&"a"===r.nodeName.toLowerCase()){t=r;break}}for(;t&&"a"!==t.nodeName.toLowerCase();)t=t.parentNode;if(!t||"a"!==t.nodeName.toLowerCase())return;if(t.target&&"_self"!==t.target.toLowerCase())return;if(t.hasAttribute("download"))return;if(t.hasAttribute("router-ignore"))return;if(t.pathname===window.location.pathname&&""!==t.hash)return;if((t.origin||function(e){const t=e.port,n=e.protocol;return`${n}//${"http:"===n&&"80"===t||"https:"===n&&"443"===t?e.hostname:e.host}`}(t))!==window.location.origin)return;const{pathname:r,search:o,hash:i}=t;p("go",{pathname:r,search:o,hash:i})&&(e.preventDefault(),e&&"click"===e.type&&window.scrollTo(0,0))}const y={activate(){window.document.addEventListener("click",w)},inactivate(){window.document.removeEventListener("click",w)}};function b(e){if("vaadin-router-ignore"===e.state)return;const{pathname:t,search:n,hash:r}=window.location;p("go",{pathname:t,search:n,hash:r})}/Trident/.test(navigator.userAgent)&&!f(window.PopStateEvent)&&(window.PopStateEvent=function(e,t){t=t||{};var n=document.createEvent("Event");return n.initEvent(e,Boolean(t.bubbles),Boolean(t.cancelable)),n.state=t.state||null,n},window.PopStateEvent.prototype=window.Event.prototype);const E={activate(){window.addEventListener("popstate",b)},inactivate(){window.removeEventListener("popstate",b)}};var x=U,C=$,R=function(e,t){return L($(e,t))},A=L,O=B,k=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function $(e,t){for(var n,r=[],o=0,i=0,a="",s=t&&t.delimiter||"/",c=t&&t.delimiters||"./",l=!1;null!==(n=k.exec(e));){var h=n[0],u=n[1],d=n.index;if(a+=e.slice(i,d),i=d+h.length,u)a+=u[1],l=!0;else{var p="",_=e[i],f=n[2],m=n[3],g=n[4],v=n[5];if(!l&&a.length){var w=a.length-1;c.indexOf(a[w])>-1&&(p=a[w],a=a.slice(0,w))}a&&(r.push(a),a="",l=!1);var y=""!==p&&void 0!==_&&_!==p,b="+"===v||"*"===v,E="?"===v||"*"===v,x=p||s,C=m||g;r.push({name:f||o++,prefix:p,delimiter:x,optional:E,repeat:b,partial:y,pattern:C?j(C):"[^"+P(x)+"]+?"})}}return(a||i<e.length)&&r.push(a+e.substr(i)),r}function L(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=r&&r.encode||encodeURIComponent,a=0;a<e.length;a++){var s=e[a];if("string"!=typeof s){var c,l=n?n[s.name]:void 0;if(Array.isArray(l)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===l.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(c=i(l[h],s),!t[a].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');o+=(0===h?s.prefix:s.delimiter)+c}}else if("string"!=typeof l&&"number"!=typeof l&&"boolean"!=typeof l){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"));s.partial&&(o+=s.prefix)}else{if(c=i(String(l),s),!t[a].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');o+=s.prefix+c}}else o+=s}return o}}function P(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function j(e){return e.replace(/([=!:$/()])/g,"\\$1")}function I(e){return e&&e.sensitive?"":"i"}function B(e,t,n){for(var r=(n=n||{}).strict,o=!1!==n.start,i=!1!==n.end,a=P(n.delimiter||"/"),s=n.delimiters||"./",c=[].concat(n.endsWith||[]).map(P).concat("$").join("|"),l=o?"^":"",h=0===e.length,u=0;u<e.length;u++){var d=e[u];if("string"==typeof d)l+=P(d),h=u===e.length-1&&s.indexOf(d[d.length-1])>-1;else{var p=d.repeat?"(?:"+d.pattern+")(?:"+P(d.delimiter)+"(?:"+d.pattern+"))*":d.pattern;t&&t.push(d),d.optional?d.partial?l+=P(d.prefix)+"("+p+")?":l+="(?:"+P(d.prefix)+"("+p+"))?":l+=P(d.prefix)+"("+p+")"}}return i?(r||(l+="(?:"+a+")?"),l+="$"===c?"$":"(?="+c+")"):(r||(l+="(?:"+a+"(?="+c+"))?"),h||(l+="(?="+a+"|"+c+")")),new RegExp(l,I(n))}function U(e,t,n){return e instanceof RegExp?function(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}(e,t):Array.isArray(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(U(e[o],t,n).source);return new RegExp("(?:"+r.join("|")+")",I(n))}(e,t,n):function(e,t,n){return B($(e,n),t,n)}(e,t,n)}x.parse=C,x.compile=R,x.tokensToFunction=A,x.tokensToRegExp=O;const{hasOwnProperty:T}=Object.prototype,N=new Map;function S(e){try{return decodeURIComponent(e)}catch(t){return e}}function F(e,t,n,r,o){let i,a,s=0,c=e.path||"";return"/"===c.charAt(0)&&(n&&(c=c.substr(1)),n=!0),{next(l){if(e===l)return{done:!0};const h=e.__children=e.__children||e.children;if(!i&&(i=function(e,t,n,r,o){const i=`${e}|${n=!!n}`;let a=N.get(i);if(!a){const t=[];a={keys:t,pattern:x(e,t,{end:n,strict:""===e})},N.set(i,a)}const s=a.pattern.exec(t);if(!s)return null;const c=Object.assign({},o);for(let e=1;e<s.length;e++){const t=a.keys[e-1],n=t.name,r=s[e];void 0===r&&T.call(c,n)||(t.repeat?c[n]=r?r.split(t.delimiter).map(S):[]:c[n]=r?S(r):r)}return{path:s[0],keys:(r||[]).concat(a.keys),params:c}}(c,t,!h,r,o),i))return{done:!1,value:{route:e,keys:i.keys,params:i.params,path:i.path}};if(i&&h)for(;s<h.length;){if(!a){const r=h[s];r.parent=e;let o=i.path.length;o>0&&"/"===t.charAt(o)&&(o+=1),a=F(r,t.substr(o),n,i.keys,i.params)}const r=a.next(l);if(!r.done)return{done:!1,value:r.value};a=null,s++}return{done:!0}}}}function H(e){if(f(e.route.action))return e.route.action(e)}N.set("|false",{keys:[],pattern:/(?:)/});class M{constructor(e,t={}){if(Object(e)!==e)throw new TypeError("Invalid routes");this.baseUrl=t.baseUrl||"",this.errorHandler=t.errorHandler,this.resolveRoute=t.resolveRoute||H,this.context=Object.assign({resolver:this},t.context),this.root=Array.isArray(e)?{path:"",__children:e,parent:null,__synthetic:!0}:e,this.root.parent=null}getRoutes(){return[...this.root.__children]}setRoutes(e){u(e);const t=[...o(e)];this.root.__children=t}addRoutes(e){return u(e),this.root.__children.push(...o(e)),this.getRoutes()}removeRoutes(){this.setRoutes([])}resolve(e){const t=Object.assign({},this.context,m(e)?{pathname:e}:e),n=F(this.root,this.__normalizePathname(t.pathname),this.baseUrl),r=this.resolveRoute;let o=null,i=null,a=t;function s(e,c=o.value.route,l){const h=null===l&&o.value.route;return o=i||n.next(h),i=null,e||!o.done&&function(e,t){let n=t;for(;n;)if(n=n.parent,n===e)return!0;return!1}(c,o.value.route)?o.done?Promise.reject(g(t)):(a=Object.assign(a?{chain:a.chain?a.chain.slice(0):[]}:{},t,o.value),function(e,t){const{route:n,path:r}=t;if(n&&!n.__synthetic){const t={path:r,route:n};if(e.chain){if(n.parent){let t=e.chain.length;for(;t--&&e.chain[t].route&&e.chain[t].route!==n.parent;)e.chain.pop()}}else e.chain=[];e.chain.push(t)}}(a,o.value),Promise.resolve(r(a)).then((t=>null!=t&&t!==v?(a.result=t.result||t,a):s(e,c,t)))):(i=o,Promise.resolve(v))}return t.next=s,Promise.resolve().then((()=>s(!0,this.root))).catch((e=>{const t=function(e){let t=`Path '${e.pathname}' is not properly resolved due to an error.`;const n=(e.route||{}).path;return n&&(t+=` Resolution had failed on route: '${n}'`),t}(a);if(e?console.warn(t):e=new Error(t),e.context=e.context||a,e instanceof DOMException||(e.code=e.code||500),this.errorHandler)return a.result=this.errorHandler(e),a;throw e}))}static __createUrl(e,t){return new URL(e,t)}get __effectiveBaseUrl(){return this.baseUrl?this.constructor.__createUrl(this.baseUrl,document.baseURI||document.URL).href.replace(/[^\/]*$/,""):""}__normalizePathname(e){if(!this.baseUrl)return e;const t=this.__effectiveBaseUrl,n=this.constructor.__createUrl(e,t).href;return n.slice(0,t.length)===t?n.slice(t.length):void 0}}M.pathToRegexp=x;const{pathToRegexp:V}=M,D=new Map;function z(e,t,n){const r=t.name||t.component;if(r&&(e.has(r)?e.get(r).push(t):e.set(r,[t])),Array.isArray(n))for(let r=0;r<n.length;r++){const o=n[r];o.parent=t,z(e,o,o.__children||o.children)}}function K(e,t){const n=e.get(t);if(n&&n.length>1)throw new Error(`Duplicate route with name "${t}". Try seting unique 'name' route properties.`);return n&&n[0]}function W(e){let t=e.path;return t=Array.isArray(t)?t[0]:t,void 0!==t?t:""}function q(e,t={}){if(!(e instanceof M))throw new TypeError("An instance of Resolver is expected");const n=new Map;return(r,o)=>{let i=K(n,r);if(!i&&(n.clear(),z(n,e.root,e.root.__children),i=K(n,r),!i))throw new Error(`Route "${r}" not found`);let a=D.get(i.fullPath);if(!a){let e=W(i),t=i.parent;for(;t;){const n=W(t);n&&(e=n.replace(/\/$/,"")+"/"+e.replace(/^\//,"")),t=t.parent}const n=V.parse(e),r=V.tokensToFunction(n),o=Object.create(null);for(let e=0;e<n.length;e++)m(n[e])||(o[n[e].name]=!0);a={toPath:r,keys:o},D.set(e,a),i.fullPath=e}let s=a.toPath(o,t)||"/";if(t.stringifyQueryParams&&o){const e={},n=Object.keys(o);for(let t=0;t<n.length;t++){const r=n[t];a.keys[r]||(e[r]=o[r])}const r=t.stringifyQueryParams(e);r&&(s+="?"===r.charAt(0)?r:`?${r}`)}return s}}let Q=[];function J(e){Q.forEach((e=>e.inactivate())),e.forEach((e=>e.activate())),Q=e}function G(e,t){return e.classList.add(t),new Promise((n=>{if((e=>{const t=getComputedStyle(e).getPropertyValue("animation-name");return t&&"none"!==t})(e)){const r=e.getBoundingClientRect(),o=`height: ${r.bottom-r.top}px; width: ${r.right-r.left}px`;e.setAttribute("style",`position: absolute; ${o}`),((e,t)=>{const n=()=>{e.removeEventListener("animationend",n),t()};e.addEventListener("animationend",n)})(e,(()=>{e.classList.remove(t),e.removeAttribute("style"),n()}))}else e.classList.remove(t),n()}))}function X(e){return null!=e}function Y({pathname:e="",search:t="",hash:n="",chain:r=[],params:o={},redirectFrom:i,resolver:a},s){const c=r.map((e=>e.route));return{baseUrl:a&&a.baseUrl||"",pathname:e,search:t,hash:n,routes:c,route:s||c.length&&c[c.length-1]||null,params:o,redirectFrom:i,getUrl:(e={})=>re(ie.pathToRegexp.compile(oe(c))(Object.assign({},o,e)),a)}}function Z(e,t){const n=Object.assign({},e.params);return{redirect:{pathname:t,from:e.pathname,params:n}}}function ee(e,t,n){if(f(e))return e.apply(n,t)}function te(e,t,n){return r=>r&&(r.cancel||r.redirect)?r:n?ee(n[e],t,n):void 0}function ne(e){if(e&&e.length){const t=e[0].parentNode;for(let n=0;n<e.length;n++)t.removeChild(e[n])}}function re(e,t){const n=t.__effectiveBaseUrl;return n?t.constructor.__createUrl(e.replace(/^\//,""),n).pathname:e}function oe(e){return e.map((e=>e.path)).reduce(((e,t)=>t.length?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):e),"")}class ie extends M{constructor(e,t){const n=document.head.querySelector("base"),r=n&&n.getAttribute("href");super([],Object.assign({baseUrl:r&&M.__createUrl(r,document.URL).pathname.replace(/[^\/]*$/,"")},t)),this.resolveRoute=e=>this.__resolveRoute(e);const o=ie.NavigationTrigger;ie.setTriggers.apply(ie,Object.keys(o).map((e=>o[e]))),this.baseUrl,this.ready,this.ready=Promise.resolve(e),this.location,this.location=Y({resolver:this}),this.__lastStartedRenderId=0,this.__navigationEventHandler=this.__onNavigationEvent.bind(this),this.setOutlet(e),this.subscribe(),this.__createdByRouter=new WeakMap,this.__addedByRouter=new WeakMap}__resolveRoute(e){const t=e.route;let n=Promise.resolve();f(t.children)&&(n=n.then((()=>t.children(function(e){const t=Object.assign({},e);return delete t.next,t}(e)))).then((e=>{X(e)||f(t.children)||(e=t.children),function(e,t){if(!Array.isArray(e)&&!_(e))throw new Error(i(`Incorrect "children" value for the route ${t.path}: expected array or object, but got ${e}`));t.__children=[];const n=o(e);for(let e=0;e<n.length;e++)h(n[e]),t.__children.push(n[e])}(e,t)})));const r={redirect:t=>Z(e,t),component:e=>{const t=document.createElement(e);return this.__createdByRouter.set(t,!0),t}};return n.then((()=>{if(this.__isLatestRender(e))return ee(t.action,[e,r],t)})).then((e=>{return X(e)&&(e instanceof HTMLElement||e.redirect||e===v)?e:m(t.redirect)?r.redirect(t.redirect):t.bundle?(n=t.bundle,m(n)?d(n):Promise.race(c.filter((e=>e in n)).map((e=>d(n[e],e))))).then((()=>{}),(()=>{throw new Error(i(`Bundle not found: ${t.bundle}. Check if the file name is correct`))})):void 0;var n})).then((e=>X(e)?e:m(t.component)?r.component(t.component):void 0))}setOutlet(e){e&&this.__ensureOutlet(e),this.__outlet=e}getOutlet(){return this.__outlet}setRoutes(e,t=!1){return this.__previousContext=void 0,this.__urlForName=void 0,super.setRoutes(e),t||this.__onNavigationEvent(),this.ready}render(e,t){const n=++this.__lastStartedRenderId,r=Object.assign({search:"",hash:""},m(e)?{pathname:e}:e,{__renderId:n});return this.ready=this.resolve(r).then((e=>this.__fullyResolveChain(e))).then((e=>{if(this.__isLatestRender(e)){const r=this.__previousContext;if(e===r)return this.__updateBrowserHistory(r,!0),this.location;if(this.location=Y(e),t&&this.__updateBrowserHistory(e,1===n),p("location-changed",{router:this,location:this.location}),e.__skipAttach)return this.__copyUnchangedElements(e,r),this.__previousContext=e,this.location;this.__addAppearingContent(e,r);const o=this.__animateIfNeeded(e);return this.__runOnAfterEnterCallbacks(e),this.__runOnAfterLeaveCallbacks(e,r),o.then((()=>{if(this.__isLatestRender(e))return this.__removeDisappearingContent(),this.__previousContext=e,this.location}))}})).catch((e=>{if(n===this.__lastStartedRenderId)throw t&&this.__updateBrowserHistory(r),ne(this.__outlet&&this.__outlet.children),this.location=Y(Object.assign(r,{resolver:this})),p("error",Object.assign({router:this,error:e},r)),e})),this.ready}__fullyResolveChain(e,t=e){return this.__findComponentContextAfterAllRedirects(t).then((n=>{const r=n!==t?n:e,o=re(oe(n.chain),n.resolver)===n.pathname,i=(e,t=e.route,n)=>e.next(void 0,t,n).then((n=>null===n||n===v?o?e:null!==t.parent?i(e,t.parent,n):n:n));return i(n).then((e=>{if(null===e||e===v)throw g(r);return e&&e!==v&&e!==n?this.__fullyResolveChain(r,e):this.__amendWithOnBeforeCallbacks(n)}))}))}__findComponentContextAfterAllRedirects(e){const t=e.result;return t instanceof HTMLElement?(function(e,t){t.location=Y(e);const n=e.chain.map((e=>e.route)).indexOf(e.route);e.chain[n].element=t}(e,t),Promise.resolve(e)):t.redirect?this.__redirect(t.redirect,e.__redirectCount,e.__renderId).then((e=>this.__findComponentContextAfterAllRedirects(e))):t instanceof Error?Promise.reject(t):Promise.reject(new Error(i(`Invalid route resolution result for path "${e.pathname}". Expected redirect object or HTML element, but got: "${function(e){if("object"!=typeof e)return String(e);const t=Object.prototype.toString.call(e).match(/ (.*)\]$/)[1];return"Object"===t||"Array"===t?`${t} ${JSON.stringify(e)}`:t}(t)}". Double check the action return value for the route.`)))}__amendWithOnBeforeCallbacks(e){return this.__runOnBeforeCallbacks(e).then((t=>t===this.__previousContext||t===e?t:this.__fullyResolveChain(t)))}__runOnBeforeCallbacks(e){const t=this.__previousContext||{},n=t.chain||[],r=e.chain;let o=Promise.resolve();const i=()=>({cancel:!0}),a=t=>Z(e,t);if(e.__divergedChainIndex=0,e.__skipAttach=!1,n.length){for(let t=0;t<Math.min(n.length,r.length)&&(n[t].route===r[t].route&&(n[t].path===r[t].path||n[t].element===r[t].element)&&this.__isReusableElement(n[t].element,r[t].element));t=++e.__divergedChainIndex);if(e.__skipAttach=r.length===n.length&&e.__divergedChainIndex==r.length&&this.__isReusableElement(e.result,t.result),e.__skipAttach){for(let t=r.length-1;t>=0;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[t]);for(let t=0;t<r.length;t++)o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:a},r[t]),n[t].element.location=Y(e,n[t].route)}else for(let t=n.length-1;t>=e.__divergedChainIndex;t--)o=this.__runOnBeforeLeaveCallbacks(o,e,{prevent:i},n[t])}if(!e.__skipAttach)for(let t=0;t<r.length;t++)t<e.__divergedChainIndex?t<n.length&&n[t].element&&(n[t].element.location=Y(e,n[t].route)):(o=this.__runOnBeforeEnterCallbacks(o,e,{prevent:i,redirect:a},r[t]),r[t].element&&(r[t].element.location=Y(e,r[t].route)));return o.then((t=>{if(t){if(t.cancel)return this.__previousContext.__renderId=e.__renderId,this.__previousContext;if(t.redirect)return this.__redirect(t.redirect,e.__redirectCount,e.__renderId)}return e}))}__runOnBeforeLeaveCallbacks(e,t,n,r){const o=Y(t);return e.then((e=>{if(this.__isLatestRender(t)){return te("onBeforeLeave",[o,n,this],r.element)(e)}})).then((e=>{if(!(e||{}).redirect)return e}))}__runOnBeforeEnterCallbacks(e,t,n,r){const o=Y(t,r.route);return e.then((e=>{if(this.__isLatestRender(t)){return te("onBeforeEnter",[o,n,this],r.element)(e)}}))}__isReusableElement(e,t){return!(!e||!t)&&(this.__createdByRouter.get(e)&&this.__createdByRouter.get(t)?e.localName===t.localName:e===t)}__isLatestRender(e){return e.__renderId===this.__lastStartedRenderId}__redirect(e,t,n){if(t>256)throw new Error(i(`Too many redirects when rendering ${e.from}`));return this.resolve({pathname:this.urlForPath(e.pathname,e.params),redirectFrom:e.from,__redirectCount:(t||0)+1,__renderId:n})}__ensureOutlet(e=this.__outlet){if(!(e instanceof Node))throw new TypeError(i(`Expected router outlet to be a valid DOM Node (but got ${e})`))}__updateBrowserHistory({pathname:e,search:t="",hash:n=""},r){if(window.location.pathname!==e||window.location.search!==t||window.location.hash!==n){const o=r?"replaceState":"pushState";window.history[o](null,document.title,e+t+n),window.dispatchEvent(new PopStateEvent("popstate",{state:"vaadin-router-ignore"}))}}__copyUnchangedElements(e,t){let n=this.__outlet;for(let r=0;r<e.__divergedChainIndex;r++){const o=t&&t.chain[r].element;if(o){if(o.parentNode!==n)break;e.chain[r].element=o,n=o}}return n}__addAppearingContent(e,t){this.__ensureOutlet(),this.__removeAppearingContent();const n=this.__copyUnchangedElements(e,t);this.__appearingContent=[],this.__disappearingContent=Array.from(n.children).filter((t=>this.__addedByRouter.get(t)&&t!==e.result));let r=n;for(let t=e.__divergedChainIndex;t<e.chain.length;t++){const o=e.chain[t].element;o&&(r.appendChild(o),this.__addedByRouter.set(o,!0),r===n&&this.__appearingContent.push(o),r=o)}}__removeDisappearingContent(){this.__disappearingContent&&ne(this.__disappearingContent),this.__disappearingContent=null,this.__appearingContent=null}__removeAppearingContent(){this.__disappearingContent&&this.__appearingContent&&(ne(this.__appearingContent),this.__disappearingContent=null,this.__appearingContent=null)}__runOnAfterLeaveCallbacks(e,t){if(t)for(let n=t.chain.length-1;n>=e.__divergedChainIndex&&this.__isLatestRender(e);n--){const r=t.chain[n].element;if(r)try{const n=Y(e);ee(r.onAfterLeave,[n,{},t.resolver],r)}finally{this.__disappearingContent.indexOf(r)>-1&&ne(r.children)}}}__runOnAfterEnterCallbacks(e){for(let t=e.__divergedChainIndex;t<e.chain.length&&this.__isLatestRender(e);t++){const n=e.chain[t].element||{},r=Y(e,e.chain[t].route);ee(n.onAfterEnter,[r,{},e.resolver],n)}}__animateIfNeeded(e){const t=(this.__disappearingContent||[])[0],n=(this.__appearingContent||[])[0],r=[],o=e.chain;let i;for(let e=o.length;e>0;e--)if(o[e-1].route.animate){i=o[e-1].route.animate;break}if(t&&n&&i){const e=_(i)&&i.leave||"leaving",o=_(i)&&i.enter||"entering";r.push(G(t,e)),r.push(G(n,o))}return Promise.all(r).then((()=>e))}subscribe(){window.addEventListener("vaadin-router-go",this.__navigationEventHandler)}unsubscribe(){window.removeEventListener("vaadin-router-go",this.__navigationEventHandler)}__onNavigationEvent(e){const{pathname:t,search:n,hash:r}=e?e.detail:window.location;m(this.__normalizePathname(t))&&(e&&e.preventDefault&&e.preventDefault(),this.render({pathname:t,search:n,hash:r},!0))}static setTriggers(...e){J(e)}urlForName(e,t){return this.__urlForName||(this.__urlForName=q(this)),re(this.__urlForName(e,t),this)}urlForPath(e,t){return re(ie.pathToRegexp.compile(e)(t),this)}static go(e){const{pathname:t,search:n,hash:r}=m(e)?this.__createUrl(e,"http://a"):e;return p("go",{pathname:t,search:n,hash:r})}}const ae=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,se=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function ce(e,t){if("function"!=typeof e)return;const n=ae.exec(e.toString());if(n)try{e=new Function(n[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}window.Vaadin=window.Vaadin||{};const le=function(e,t){if(window.Vaadin.developmentMode)return ce(e,t)};function he(){}void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(se?!(se&&Object.keys(se).map((e=>se[e])).filter((e=>e.productionMode)).length>0):!ce((function(){return!0})))}catch(e){return!1}}());window.Vaadin=window.Vaadin||{},window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.registrations.push({is:"@vaadin/router",version:"1.7.4"}),le(he),ie.NavigationTrigger={POPSTATE:E,CLICK:y};new ie(document.querySelector("main")).setRoutes([{path:"/",component:"home-view"},{path:"/about",component:"about-view"}])}(litElement);
//# sourceMappingURL=bundle.js.map
