(function () {
    'use strict';

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$4=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$4=Symbol();class s$7{constructor(t,s){if(s!==e$4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){return t$4&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const n$4=new Map,o$5=t=>{let o=n$4.get(t);return void 0===o&&n$4.set(t,o=new s$7(t,e$4)),o},r$3=t=>o$5("string"==typeof t?t:t+""),S$2=(e,s)=>{t$4?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style");s.textContent=t.cssText,e.appendChild(s);}));},u$2=t$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$6,e$3,h$3,r$2;const o$4={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$3=(t,i)=>i!==t&&(i==i||t==t),l$6={attribute:!0,type:String,converter:o$4,reflect:!1,hasChanged:n$3};class a$3 extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u();}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e));})),t}static createProperty(t,i=l$6){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const h=this[t];this[i]=e,this.requestUpdate(t,h,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$6}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(u$2(i));}else void 0!==i&&s.push(u$2(i));return s}static Πp(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1);}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$2(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0);}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t));}attributeChangedCallback(t,i,s){this.K(t,s);}Πj(t,i,s=l$6){var e,h;const r=this.constructor.Πp(t,s);if(void 0!==r&&!0===s.reflect){const n=(null!==(h=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==h?h:o$4.toAttribute)(i,s.type);this.Πh=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this.Πh=null;}}K(t,i){var s,e,h;const r=this.constructor,n=r.Πm.get(t);if(void 0!==n&&this.Πh!==n){const t=r.getPropertyOptions(n),l=t.converter,a=null!==(h=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==h?h:o$4.fromAttribute;this.Πh=n,this[n]=a(i,t.type),this.Πh=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$3)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq());}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo;}catch(t){Promise.reject(t);}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$();}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s);}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}Π$(){this.L=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return !0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$();}updated(t){}firstUpdated(t){}}a$3.finalized=!0,a$3.elementProperties=new Map,a$3.elementStyles=[],a$3.shadowRootOptions={mode:"open"},null===(e$3=(s$6=globalThis).reactiveElementPlatformSupport)||void 0===e$3||e$3.call(s$6,{ReactiveElement:a$3}),(null!==(h$3=(r$2=globalThis).reactiveElementVersions)&&void 0!==h$3?h$3:r$2.reactiveElementVersions=[]).push("1.0.0-rc.2");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t$3,i$4,s$5,e$2;const o$3=globalThis.trustedTypes,l$5=o$3?o$3.createPolicy("lit-html",{createHTML:t=>t}):void 0,n$2=`lit$${(Math.random()+"").slice(9)}$`,h$2="?"+n$2,r$1=`<${h$2}>`,u$1=document,c$1=(t="")=>u$1.createComment(t),d$3=t=>null===t||"object"!=typeof t&&"function"!=typeof t,v$1=Array.isArray,a$2=t=>{var i;return v$1(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},f$3=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_$1=/-->/g,m$1=/>/g,p$1=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,$$1=/'/g,g$1=/"/g,y$1=/^(?:script|style|textarea)$/i,b$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),T$1=b$1(1),w$1=Symbol.for("lit-noChange"),A$1=Symbol.for("lit-nothing"),P$1=new WeakMap,V$1=(t,i,s)=>{var e,o;const l=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let n=l._$litPart$;if(void 0===n){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;l._$litPart$=n=new C$1(i.insertBefore(c$1(),t),t,void 0,s);}return n.I(t),n},E$1=u$1.createTreeWalker(u$1,129,null,!1),M$1=(t,i)=>{const s=t.length-1,e=[];let o,h=2===i?"<svg>":"",u=f$3;for(let i=0;i<s;i++){const s=t[i];let l,c,d=-1,v=0;for(;v<s.length&&(u.lastIndex=v,c=u.exec(s),null!==c);)v=u.lastIndex,u===f$3?"!--"===c[1]?u=_$1:void 0!==c[1]?u=m$1:void 0!==c[2]?(y$1.test(c[2])&&(o=RegExp("</"+c[2],"g")),u=p$1):void 0!==c[3]&&(u=p$1):u===p$1?">"===c[0]?(u=null!=o?o:f$3,d=-1):void 0===c[1]?d=-2:(d=u.lastIndex-c[2].length,l=c[1],u=void 0===c[3]?p$1:'"'===c[3]?g$1:$$1):u===g$1||u===$$1?u=p$1:u===_$1||u===m$1?u=f$3:(u=p$1,o=void 0);const a=u===p$1&&t[i+1].startsWith("/>")?" ":"";h+=u===f$3?s+r$1:d>=0?(e.push(l),s.slice(0,d)+"$lit$"+s.slice(d)+n$2+a):s+n$2+(-2===d?(e.push(void 0),i):a);}const c=h+(t[s]||"<?>")+(2===i?"</svg>":"");return [void 0!==l$5?l$5.createHTML(c):c,e]};class N$1{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let l=0,r=0;const u=t.length-1,d=this.parts,[v,a]=M$1(t,i);if(this.el=N$1.createElement(v,s),E$1.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(e=E$1.nextNode())&&d.length<u;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(n$2)){const s=a[r++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(n$2),i=/([.?@])?(.*)/.exec(s);d.push({type:1,index:l,name:i[2],strings:t,ctor:"."===i[1]?I$1:"?"===i[1]?L$1:"@"===i[1]?R$1:H$2});}else d.push({type:6,index:l});}for(const i of t)e.removeAttribute(i);}if(y$1.test(e.tagName)){const t=e.textContent.split(n$2),i=t.length-1;if(i>0){e.textContent=o$3?o$3.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],c$1()),E$1.nextNode(),d.push({type:2,index:++l});e.append(t[i],c$1());}}}else if(8===e.nodeType)if(e.data===h$2)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=e.data.indexOf(n$2,t+1));)d.push({type:7,index:l}),t+=n$2.length-1;}l++;}}static createElement(t,i){const s=u$1.createElement("template");return s.innerHTML=t,s}}function S$1(t,i,s=t,e){var o,l,n,h;if(i===w$1)return i;let r=void 0!==e?null===(o=s.Σi)||void 0===o?void 0:o[e]:s.Σo;const u=d$3(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(l=null==r?void 0:r.O)||void 0===l||l.call(r,!1),void 0===u?r=void 0:(r=new u(t),r.T(t,s,e)),void 0!==e?(null!==(n=(h=s).Σi)&&void 0!==n?n:h.Σi=[])[e]=r:s.Σo=r),void 0!==r&&(i=S$1(t,r.S(t,i.values),r,e)),i}class k$1{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i;}u(t){var i;const{el:{content:s},parts:e}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:u$1).importNode(s,!0);E$1.currentNode=o;let l=E$1.nextNode(),n=0,h=0,r=e[0];for(;void 0!==r;){if(n===r.index){let i;2===r.type?i=new C$1(l,l.nextSibling,this,t):1===r.type?i=new r.ctor(l,r.name,r.strings,this,t):6===r.type&&(i=new z$1(l,this,t)),this.l.push(i),r=e[++h];}n!==(null==r?void 0:r.index)&&(l=E$1.nextNode(),n++);}return o}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++;}}class C$1{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e;}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t);}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=S$1(this,t,i),d$3(t)?t===A$1||null==t||""===t?(this.H!==A$1&&this.R(),this.H=A$1):t!==this.H&&t!==w$1&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):a$2(t)?this.g(t):this.m(t);}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t));}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(u$1.createTextNode(t)),this.H=t;}_(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=N$1.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(s);else {const t=new k$1(o,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t;}}C(t){let i=P$1.get(t.strings);return void 0===i&&P$1.set(t.strings,i=new N$1(t)),i}g(t){v$1(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const o of t)e===i.length?i.push(s=new C$1(this.k(c$1()),this.k(c$1()),this,this.options)):s=i[e],s.I(o),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e);}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i;}}}class H$2{constructor(t,i,s,e,o){this.type=1,this.H=A$1,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(A$1),this.strings=s):this.H=A$1;}get tagName(){return this.element.tagName}I(t,i=this,s,e){const o=this.strings;let l=!1;if(void 0===o)t=S$1(this,t,i,0),l=!d$3(t)||t!==this.H&&t!==w$1,l&&(this.H=t);else {const e=t;let n,h;for(t=o[0],n=0;n<o.length-1;n++)h=S$1(this,e[s+n],i,n),h===w$1&&(h=this.H[n]),l||(l=!d$3(h)||h!==this.H[n]),h===A$1?t=A$1:t!==A$1&&(t+=(null!=h?h:"")+o[n+1]),this.H[n]=h;}l&&!e&&this.W(t);}W(t){t===A$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class I$1 extends H$2{constructor(){super(...arguments),this.type=3;}W(t){this.element[this.name]=t===A$1?void 0:t;}}class L$1 extends H$2{constructor(){super(...arguments),this.type=4;}W(t){t&&t!==A$1?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name);}}class R$1 extends H$2{constructor(){super(...arguments),this.type=5;}I(t,i=this){var s;if((t=null!==(s=S$1(this,t,i,0))&&void 0!==s?s:A$1)===w$1)return;const e=this.H,o=t===A$1&&e!==A$1||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,l=t!==A$1&&(e===A$1||o);o&&this.element.removeEventListener(this.name,this,e),l&&this.element.addEventListener(this.name,this,t),this.H=t;}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t);}}class z$1{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s;}I(t){S$1(this,t);}}null===(i$4=(t$3=globalThis).litHtmlPlatformSupport)||void 0===i$4||i$4.call(t$3,N$1,C$1),(null!==(s$5=(e$2=globalThis).litHtmlVersions)&&void 0!==s$5?s$5:e$2.litHtmlVersions=[]).push("2.0.0-rc.3");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var i$3,l$4,o$2,s$4,n$1,a$1;(null!==(i$3=(a$1=globalThis).litElementVersions)&&void 0!==i$3?i$3:a$1.litElementVersions=[]).push("3.0.0-rc.2");class h$1 extends a$3{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0;}createRenderRoot(){var t,e;const r=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=r.firstChild),r}update(t){const r=this.render();super.update(t),this.Φt=V$1(r,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1);}render(){return w$1}}h$1.finalized=!0,h$1._$litElement$=!0,null===(o$2=(l$4=globalThis).litElementHydrateSupport)||void 0===o$2||o$2.call(l$4,{LitElement:h$1}),null===(n$1=(s$4=globalThis).litElementPlatformSupport)||void 0===n$1||n$1.call(s$4,{LitElement:h$1});

    class ComponentBase extends h$1 {
        constructor() {
            super();
        }

        createRenderRoot() { 
            return this; 
        }
    }

    class HeaderView extends ComponentBase {
      static get properties() {
        return {
          theme: { type: String },
          version: { type: String }
        };
      }

      constructor() {
        super();
        this.theme = localStorage.getItem("theme");
        this.version = "";
        this.setTheme(this.theme);
      }

      async firstUpdated() {
          this.version = await this.getVersion();
      }

      render() {
        return T$1`
      <style>
        #header {
          width: 100%;
          padding: var(--sl-spacing-x-small) 0;
          box-shadow: var(--sl-shadow-x-small);
          margin-bottom: var(--sl-spacing-large);
          text-align: center;
        }

        #header-title {
          font-size: var(--sl-font-size-xx-large);
          margin-top: 10px;
        }

        a {
          display: inline-block;
          text-decoration: none;
          color: var(--sl-color-primary-700);
          padding: var(--sl-spacing-large);
          padding-top: 0;
        }

        a:visited {
          color: var(--sl-color-primary-700);
        }

        a:hover {
          color: var(--sl-color-primary-400);
        }

        .theme-mode-button::part(base) {
          padding: 0;
        }
      </style>
      <div id="header">
        <pwa-install-button>
          <sl-button type="default" size="small">
            <sl-icon slot="prefix" library="ionicons" name="download"></sl-icon>
            Install
          </sl-button>
        </pwa-install-button>
        <pwa-update-available>
          <sl-button type="default" size="small">
            <sl-icon slot="prefix" library="ionicons" name="sync"></sl-icon>
            Update
          </sl-button>
        </pwa-update-available>
        <span id="version">${this.version}</span>
        <br />
        <h1 id="header-title">todo-list-demo ${this.renderThemeButton()}</h1>        
        <a href="${document.baseURI}" @click="${this.closeDrawer}"> Home </a>
        <a href="${document.baseURI}about" @click="${this.closeDrawer}">
          About
        </a>
      </div>
    `;
      }

      async getVersion() {
        return await fetch(document.baseURI + "config.json")
          .then(res => res.json())
          .then(config => config.version);
      }

      renderThemeButton() {
        if (this.theme === "dark") {
          return T$1`<sl-icon-button
        class="theme-mode-button"
        library="ionicons"
        name="moon-outline"
        @click="${(e) => this.setTheme("light")}"
      ></sl-icon-button>`;
        } else {
          return T$1`<sl-icon-button
        class="theme-mode-button"
        library="ionicons"
        name="moon"
        @click="${(e) => this.setTheme("dark")}"
      ></sl-icon-button>`;
        }
      }

      setTheme(theme) {
        this.theme = theme;

        if (this.theme === "dark") {
          document.querySelector("body").classList.add("sl-theme-dark");
        } else {
          document.querySelector("body").classList.remove("sl-theme-dark");
        }

        localStorage.setItem("theme", this.theme);
      }
    }

    customElements.define("header-view", HeaderView);

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$2={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i$2=t=>(...i)=>({_$litDirective$:t,values:i});class s$3{constructor(t){}T(t,i,s){this.Σdt=t,this.M=i,this.Σct=s;}S(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}

    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const d$2=o=>void 0===o.strings,s$2={},f$2=(o,t=s$2)=>o.H=t;

    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const l$3=i$2(class extends s$3{constructor(r){if(super(r),r.type!==t$2.PROPERTY&&r.type!==t$2.ATTRIBUTE&&r.type!==t$2.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!d$2(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t]){if(t===w$1||t===A$1)return t;const o=i.element,l=i.name;if(i.type===t$2.PROPERTY){if(t===o[l])return w$1}else if(i.type===t$2.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(l))return w$1}else if(i.type===t$2.ATTRIBUTE&&o.getAttribute(l)===t+"")return w$1;return f$2(i),t}});

    class HomeView extends ComponentBase {
      static get properties() {
        return {
          todoItems: { type: Array },
          newTodoItem: { type: String },
          activeTodoItem: { type: Object },
          todoItemToDelete: { type: Object },
          todoItemToDeleteElement: { type: Object },
        };
      }

      constructor() {
        super();
        let existingTodoItems = JSON.parse(localStorage.getItem("todoItems"));
        if (existingTodoItems != null) {
          this.todoItems = existingTodoItems;
        } else {
          this.todoItems = [];
        }
        this.newTodoItem = "";
        this.todoItemToDelete = null;
        this.todoItemToDeleteElement = null;
      }

      render() {
        return T$1` <style>
        #new-todo-item {
          width: 100%;
          max-width: 1000px;
          padding: 0 var(--sl-spacing-medium);
          margin: var(--sl-spacing-large) auto;
        }

        #new-todo-item input {
          text-align: center;
        }

        .todo-item-cards {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 var(--sl-spacing-medium);
          margin-bottom: var(--sl-spacing-x-small);
        }

        .todo-item-card {
          margin-top: var(--sl-spacing-x-small);
          padding: var(--sl-spacing-x-large);
          box-shadow: var(--sl-shadow-medium);
        }

        .todo-item-card-text {
          padding-left: var(--sl-spacing-medium);
          display: inline-block;
          vertical-align: top;
          line-height: 30px;
          width: calc(100% - 150px);
          word-wrap: break-word;
        }

        .todo-item-card-delete-button {
          float: right;
          font-size: 30px;
        }

        .todo-item-card-delete-button::part(base) {
          padding: 0;
        }

        .todo-item-card-done-button {
          font-size: 30px;
        }

        .todo-item-card-done-button::part(base) {
          padding: 0;
        }

        .todo-item-card-done > .todo-item-card-text {
          color: var(--sl-color-gray-300);
          text-decoration: line-through;
        }
      </style>
      <sl-input
        type="text"
        id="new-todo-item"
        placeholder="Enter todo item"
        help-text="Press enter to add todo item."
        .value="${l$3(this.newTodoItem)}"
        @keyup="${this.inputNewTodoItem}"
      ></sl-input>
      <sl-details
        class="todo-item-cards todo-item-cards-open"
        summary="Open todos (${this.getOpenTodoItems().length})"
        open
      >
        ${this.renderTodoItems()}
      </sl-details>
      <sl-details class="todo-item-cards" 
                  summary="Todos done (${this.getDoneTodoItems().length})" 
                  open>
        ${this.renderTodoItemsDone()}
      </sl-details>
      <sl-dialog label="Are you sure?" id="todo-item-dialog">
        Do you want to delete
        ${this.todoItemToDelete != null
        ? '"' + this.todoItemToDelete.name + '"'
        : ""}?
        <sl-button slot="footer" type="primary" @click="${this.deleteTodoItem}"
          >Yes</sl-button
        >
      </sl-dialog>`;
      }

      renderTodoItems() {
        return this.getOpenTodoItems().map(
          (i) => T$1`
          <div class="todo-item-card animate__animated animate__bounceInRight">
            ${this.renderTodoItemContent(i)}
          </div>
        `
        );
      }

      renderTodoItemContent(todoItem) {
        if (this.activeTodoItem == todoItem) {
          return T$1`<sl-input
        class="todo-item-input-update"
        help-text="Press enter to save change, press escape to cancel change."
        value="${todoItem.name}"
        @keyup="${this.saveUpdatedText}"
      ></sl-input> `;
        } else {
          return T$1` ${this.renderTodoIcons(todoItem)}
        <span
          class="todo-item-card-text"
          @click="${(e) => this.changeToInputField(todoItem)}"
          >${todoItem.name}</span
        >
        ${this.renderTodoButtons(todoItem)}`;
        }
      }

      saveUpdatedText(event) {
        if (event.key === "Enter") {
          this.activeTodoItem.name = event.target.value;
          this.activeTodoItem = null;
          this.requestUpdate();
          this.saveTodoList();
        } else if (event.key === "Escape") {
          this.activeTodoItem = null;
          this.requestUpdate();
        }
      }

      changeToInputField(todoItem) {
        this.activeTodoItem = todoItem;
        this.requestUpdate();
        let self = this;
        setTimeout(function () {
          self.querySelector(".todo-item-input-update").focus();
        }, 150);
      }

      renderTodoItemsDone() {
        return this.getDoneTodoItems().map(
            (i) => T$1`
          <div
            class="todo-item-card todo-item-card-done animate__animated animate__bounceInRight"
          >
            ${this.renderTodoIcons(i)}
            <span class="todo-item-card-text">${i.name}</span>
            ${this.renderTodoButtons(i)}
          </div>
        `
          );
      }

      renderTodoIcons(todoItem) {
        if (!todoItem.done) {
          return T$1`<sl-icon-button
        class="todo-item-card-done-button"
        library="ionicons"
        name="ellipse-outline"
        @click="${(e) => this.changeTodoStatus(todoItem, true)}"
      >
      </sl-icon-button>`;
        } else {
          return T$1`<sl-icon-button
        class="todo-item-card-done-button"
        library="ionicons"
        name="checkmark-circle-outline"
        @click="${(e) => this.changeTodoStatus(todoItem, false)}"
      >
      </sl-icon-button>`;
        }
      }

      renderTodoButtons(todoItem) {
        return T$1`<sl-icon-button
      class="todo-item-card-delete-button"
      library="ionicons"
      name="trash-outline"
      @click="${(e) => this.openDeleteTodoItemDialog(e, todoItem)}"
    >
    </sl-icon-button>`;
      }

      openDeleteTodoItemDialog(e, todoItem) {
        let dialog = this.querySelector("#todo-item-dialog");
        this.todoItemToDelete = todoItem;
        this.todoItemToDeleteElement = e.target.closest(".todo-item-card");
        dialog.show();
      }

      deleteTodoItem() {
        this.todoItemToDeleteElement.classList.add(
          "animate__animated",
          "animate__zoomOut"
        );
        let self = this;
        setTimeout(function () {
          let dialog = self.querySelector("#todo-item-dialog");
          dialog.hide();
          self.requestUpdate();
          let index = self.todoItems.indexOf(self.todoItemToDelete);
          if (index > -1) {
            self.todoItems.splice(index, 1);
            self.todoItemToDeleteElement.classList.remove(
              "animate__animated",
              "animate__zoomOut"
            );
            self.requestUpdate();
          }
          self.saveTodoList();
        }, 300);
      }

      changeTodoStatus(todoItem, done) {
        todoItem.done = done;
        this.requestUpdate();
        this.saveTodoList();
      }

      inputNewTodoItem(event) {
        if (event.key === "Enter") {
          this.todoItems.push({
            name: event.target.value,
            done: false,
            createdAt: new Date(),
          });
          this.requestUpdate();
          this.newTodoItem = "";
          this.saveTodoList();
        }
      }

      saveTodoList() {
        localStorage.setItem("todoItems", JSON.stringify(this.todoItems));
      }

      getOpenTodoItems() {
        return this.todoItems
          .filter((i) => i.done == false)
          .sort(function compare(a, b) {
            var dateA = new Date(a.createdAt);
            var dateB = new Date(b.createdAt);
            return dateA - dateB;
          })
      }

      getDoneTodoItems() {
        return this.todoItems
          .filter((i) => i.done == true)
          .sort(function compare(a, b) {
            var dateA = new Date(a.createdAt);
            var dateB = new Date(b.createdAt);
            return dateA - dateB;
          })
      }
    }

    customElements.define("home-view", HomeView);

    class AboutView extends ComponentBase {
      render() {
        return T$1`
      <style>
        #about {
          width: 100%;
          padding: var(--sl-spacing-x-small) 0;
          margin-bottom: var(--sl-spacing-large);
          text-align: center;
        }
      </style>
      <div id="about">
        <h1>About</h1>
        <p>Demo todo-list with basic javascript/es6!</p>
      </div>
    `;
      }
    }

    customElements.define("about-view", AboutView);

    // src/internal/offset.ts
    function getOffset(element, parent) {
      return {
        top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
        left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
      };
    }

    // src/internal/scroll.ts
    var locks = new Set();
    function lockBodyScrolling(lockingEl) {
      locks.add(lockingEl);
      document.body.classList.add("sl-scroll-lock");
    }
    function unlockBodyScrolling(lockingEl) {
      locks.delete(lockingEl);
      if (locks.size === 0) {
        document.body.classList.remove("sl-scroll-lock");
      }
    }
    function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
      const offset = getOffset(element, container);
      const offsetTop = offset.top + container.scrollTop;
      const offsetLeft = offset.left + container.scrollLeft;
      const minX = container.scrollLeft;
      const maxX = container.scrollLeft + container.offsetWidth;
      const minY = container.scrollTop;
      const maxY = container.scrollTop + container.offsetHeight;
      if (direction === "horizontal" || direction === "both") {
        if (offsetLeft < minX) {
          container.scrollTo({ left: offsetLeft, behavior });
        } else if (offsetLeft + element.clientWidth > maxX) {
          container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
        }
      }
      if (direction === "vertical" || direction === "both") {
        if (offsetTop < minY) {
          container.scrollTo({ top: offsetTop, behavior });
        } else if (offsetTop + element.clientHeight > maxY) {
          container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
        }
      }
    }

    // src/internal/focus-visible.ts
    var listeners = new WeakMap();
    function observe(el) {
      const keys = ["Tab", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "End", "PageDown", "PageUp"];
      const is = (event) => {
        if (keys.includes(event.key)) {
          el.classList.add("focus-visible");
        }
      };
      const isNot = () => el.classList.remove("focus-visible");
      listeners.set(el, { is, isNot });
      el.addEventListener("keydown", is);
      el.addEventListener("keyup", is);
      el.addEventListener("mousedown", isNot);
      el.addEventListener("mousedown", isNot);
    }
    function unobserve(el) {
      const { is, isNot } = listeners.get(el);
      el.classList.remove("focus-visible");
      el.removeEventListener("keydown", is);
      el.removeEventListener("keyup", is);
      el.removeEventListener("mousedown", isNot);
      el.removeEventListener("mousedown", isNot);
    }
    var focusVisible = {
      observe,
      unobserve
    };

    // src/internal/watch.ts
    function watch(propName, options) {
      return (protoOrDescriptor, name) => {
        const { update } = protoOrDescriptor;
        options = Object.assign({ waitUntilFirstUpdate: false }, options);
        protoOrDescriptor.update = function(changedProps) {
          if (changedProps.has(propName)) {
            const oldValue = changedProps.get(propName);
            const newValue = this[propName];
            if (oldValue !== newValue) {
              if (!(options == null ? void 0 : options.waitUntilFirstUpdate) || this.hasUpdated) {
                this[name].call(this, oldValue, newValue);
              }
            }
          }
          update.call(this, changedProps);
        };
      };
    }

    // node_modules/lit-html/directive.js
    var t$1 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
    var i$1 = (t2) => (...i2) => ({ _$litDirective$: t2, values: i2 });
    var s$1 = class {
      constructor(t2) {
      }
      T(t2, i2, s2) {
        this.\u03A3dt = t2, this.M = i2, this.\u03A3ct = s2;
      }
      S(t2, i2) {
        return this.update(t2, i2);
      }
      update(t2, i2) {
        return this.render(...i2);
      }
    };
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */

    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __defProps = Object.defineProperties;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __spreadValues = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
    var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
    var __commonJS = (cb, mod) => function __require() {
      return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __reExport = (target, module, desc) => {
      if (module && typeof module === "object" || typeof module === "function") {
        for (let key of __getOwnPropNames(module))
          if (!__hasOwnProp.call(target, key) && key !== "default")
            __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
      }
      return target;
    };
    var __toModule = (module) => {
      return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
    };
    var __decorateClass = (decorators, target, key, kind) => {
      var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
      for (var i = decorators.length - 1, decorator; i >= 0; i--)
        if (decorator = decorators[i])
          result = (kind ? decorator(target, key, result) : decorator(result)) || result;
      if (kind && result)
        __defProp(target, key, result);
      return result;
    };

    // node_modules/lit-html/lit-html.js
    var t;
    var i;
    var s;
    var e$1;
    var o$1 = globalThis.trustedTypes;
    var l$2 = o$1 ? o$1.createPolicy("lit-html", { createHTML: (t4) => t4 }) : void 0;
    var n = `lit$${(Math.random() + "").slice(9)}$`;
    var h = "?" + n;
    var r = `<${h}>`;
    var u = document;
    var c = (t4 = "") => u.createComment(t4);
    var d$1 = (t4) => t4 === null || typeof t4 != "object" && typeof t4 != "function";
    var v = Array.isArray;
    var a = (t4) => {
      var i5;
      return v(t4) || typeof ((i5 = t4) === null || i5 === void 0 ? void 0 : i5[Symbol.iterator]) == "function";
    };
    var f$1 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
    var _ = /-->/g;
    var m = />/g;
    var p = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
    var $ = /'/g;
    var g = /"/g;
    var y = /^(?:script|style|textarea)$/i;
    var b = (t4) => (i5, ...s5) => ({ _$litType$: t4, strings: i5, values: s5 });
    var T = b(1);
    var w = Symbol.for("lit-noChange");
    var A = Symbol.for("lit-nothing");
    var P = new WeakMap();
    var V = (t4, i5, s5) => {
      var e6, o7;
      const l4 = (e6 = s5 == null ? void 0 : s5.renderBefore) !== null && e6 !== void 0 ? e6 : i5;
      let n7 = l4._$litPart$;
      if (n7 === void 0) {
        const t5 = (o7 = s5 == null ? void 0 : s5.renderBefore) !== null && o7 !== void 0 ? o7 : null;
        l4._$litPart$ = n7 = new C(i5.insertBefore(c(), t5), t5, void 0, s5);
      }
      return n7.I(t4), n7;
    };
    var E = u.createTreeWalker(u, 129, null, false);
    var M = (t4, i5) => {
      const s5 = t4.length - 1, e6 = [];
      let o7, h4 = i5 === 2 ? "<svg>" : "", u3 = f$1;
      for (let i6 = 0; i6 < s5; i6++) {
        const s6 = t4[i6];
        let l4, c3, d2 = -1, v2 = 0;
        for (; v2 < s6.length && (u3.lastIndex = v2, c3 = u3.exec(s6), c3 !== null); )
          v2 = u3.lastIndex, u3 === f$1 ? c3[1] === "!--" ? u3 = _ : c3[1] !== void 0 ? u3 = m : c3[2] !== void 0 ? (y.test(c3[2]) && (o7 = RegExp("</" + c3[2], "g")), u3 = p) : c3[3] !== void 0 && (u3 = p) : u3 === p ? c3[0] === ">" ? (u3 = o7 != null ? o7 : f$1, d2 = -1) : c3[1] === void 0 ? d2 = -2 : (d2 = u3.lastIndex - c3[2].length, l4 = c3[1], u3 = c3[3] === void 0 ? p : c3[3] === '"' ? g : $) : u3 === g || u3 === $ ? u3 = p : u3 === _ || u3 === m ? u3 = f$1 : (u3 = p, o7 = void 0);
        const a4 = u3 === p && t4[i6 + 1].startsWith("/>") ? " " : "";
        h4 += u3 === f$1 ? s6 + r : d2 >= 0 ? (e6.push(l4), s6.slice(0, d2) + "$lit$" + s6.slice(d2) + n + a4) : s6 + n + (d2 === -2 ? (e6.push(void 0), i6) : a4);
      }
      const c2 = h4 + (t4[s5] || "<?>") + (i5 === 2 ? "</svg>" : "");
      return [l$2 !== void 0 ? l$2.createHTML(c2) : c2, e6];
    };
    var N = class {
      constructor({ strings: t4, _$litType$: i5 }, s5) {
        let e6;
        this.parts = [];
        let l4 = 0, r5 = 0;
        const u3 = t4.length - 1, d2 = this.parts, [v2, a4] = M(t4, i5);
        if (this.el = N.createElement(v2, s5), E.currentNode = this.el.content, i5 === 2) {
          const t5 = this.el.content, i6 = t5.firstChild;
          i6.remove(), t5.append(...i6.childNodes);
        }
        for (; (e6 = E.nextNode()) !== null && d2.length < u3; ) {
          if (e6.nodeType === 1) {
            if (e6.hasAttributes()) {
              const t5 = [];
              for (const i6 of e6.getAttributeNames())
                if (i6.endsWith("$lit$") || i6.startsWith(n)) {
                  const s6 = a4[r5++];
                  if (t5.push(i6), s6 !== void 0) {
                    const t6 = e6.getAttribute(s6.toLowerCase() + "$lit$").split(n), i7 = /([.?@])?(.*)/.exec(s6);
                    d2.push({ type: 1, index: l4, name: i7[2], strings: t6, ctor: i7[1] === "." ? I : i7[1] === "?" ? L : i7[1] === "@" ? R : H$1 });
                  } else
                    d2.push({ type: 6, index: l4 });
                }
              for (const i6 of t5)
                e6.removeAttribute(i6);
            }
            if (y.test(e6.tagName)) {
              const t5 = e6.textContent.split(n), i6 = t5.length - 1;
              if (i6 > 0) {
                e6.textContent = o$1 ? o$1.emptyScript : "";
                for (let s6 = 0; s6 < i6; s6++)
                  e6.append(t5[s6], c()), E.nextNode(), d2.push({ type: 2, index: ++l4 });
                e6.append(t5[i6], c());
              }
            }
          } else if (e6.nodeType === 8)
            if (e6.data === h)
              d2.push({ type: 2, index: l4 });
            else {
              let t5 = -1;
              for (; (t5 = e6.data.indexOf(n, t5 + 1)) !== -1; )
                d2.push({ type: 7, index: l4 }), t5 += n.length - 1;
            }
          l4++;
        }
      }
      static createElement(t4, i5) {
        const s5 = u.createElement("template");
        return s5.innerHTML = t4, s5;
      }
    };
    function S(t4, i5, s5 = t4, e6) {
      var o7, l4, n7, h4;
      if (i5 === w)
        return i5;
      let r5 = e6 !== void 0 ? (o7 = s5.\u03A3i) === null || o7 === void 0 ? void 0 : o7[e6] : s5.\u03A3o;
      const u3 = d$1(i5) ? void 0 : i5._$litDirective$;
      return (r5 == null ? void 0 : r5.constructor) !== u3 && ((l4 = r5 == null ? void 0 : r5.O) === null || l4 === void 0 || l4.call(r5, false), u3 === void 0 ? r5 = void 0 : (r5 = new u3(t4), r5.T(t4, s5, e6)), e6 !== void 0 ? ((n7 = (h4 = s5).\u03A3i) !== null && n7 !== void 0 ? n7 : h4.\u03A3i = [])[e6] = r5 : s5.\u03A3o = r5), r5 !== void 0 && (i5 = S(t4, r5.S(t4, i5.values), r5, e6)), i5;
    }
    var k = class {
      constructor(t4, i5) {
        this.l = [], this.N = void 0, this.D = t4, this.M = i5;
      }
      u(t4) {
        var i5;
        const { el: { content: s5 }, parts: e6 } = this.D, o7 = ((i5 = t4 == null ? void 0 : t4.creationScope) !== null && i5 !== void 0 ? i5 : u).importNode(s5, true);
        E.currentNode = o7;
        let l4 = E.nextNode(), n7 = 0, h4 = 0, r5 = e6[0];
        for (; r5 !== void 0; ) {
          if (n7 === r5.index) {
            let i6;
            r5.type === 2 ? i6 = new C(l4, l4.nextSibling, this, t4) : r5.type === 1 ? i6 = new r5.ctor(l4, r5.name, r5.strings, this, t4) : r5.type === 6 && (i6 = new z(l4, this, t4)), this.l.push(i6), r5 = e6[++h4];
          }
          n7 !== (r5 == null ? void 0 : r5.index) && (l4 = E.nextNode(), n7++);
        }
        return o7;
      }
      v(t4) {
        let i5 = 0;
        for (const s5 of this.l)
          s5 !== void 0 && (s5.strings !== void 0 ? (s5.I(t4, s5, i5), i5 += s5.strings.length - 2) : s5.I(t4[i5])), i5++;
      }
    };
    var C = class {
      constructor(t4, i5, s5, e6) {
        this.type = 2, this.N = void 0, this.A = t4, this.B = i5, this.M = s5, this.options = e6;
      }
      setConnected(t4) {
        var i5;
        (i5 = this.P) === null || i5 === void 0 || i5.call(this, t4);
      }
      get parentNode() {
        return this.A.parentNode;
      }
      get startNode() {
        return this.A;
      }
      get endNode() {
        return this.B;
      }
      I(t4, i5 = this) {
        t4 = S(this, t4, i5), d$1(t4) ? t4 === A || t4 == null || t4 === "" ? (this.H !== A && this.R(), this.H = A) : t4 !== this.H && t4 !== w && this.m(t4) : t4._$litType$ !== void 0 ? this._(t4) : t4.nodeType !== void 0 ? this.$(t4) : a(t4) ? this.g(t4) : this.m(t4);
      }
      k(t4, i5 = this.B) {
        return this.A.parentNode.insertBefore(t4, i5);
      }
      $(t4) {
        this.H !== t4 && (this.R(), this.H = this.k(t4));
      }
      m(t4) {
        const i5 = this.A.nextSibling;
        i5 !== null && i5.nodeType === 3 && (this.B === null ? i5.nextSibling === null : i5 === this.B.previousSibling) ? i5.data = t4 : this.$(u.createTextNode(t4)), this.H = t4;
      }
      _(t4) {
        var i5;
        const { values: s5, _$litType$: e6 } = t4, o7 = typeof e6 == "number" ? this.C(t4) : (e6.el === void 0 && (e6.el = N.createElement(e6.h, this.options)), e6);
        if (((i5 = this.H) === null || i5 === void 0 ? void 0 : i5.D) === o7)
          this.H.v(s5);
        else {
          const t5 = new k(o7, this), i6 = t5.u(this.options);
          t5.v(s5), this.$(i6), this.H = t5;
        }
      }
      C(t4) {
        let i5 = P.get(t4.strings);
        return i5 === void 0 && P.set(t4.strings, i5 = new N(t4)), i5;
      }
      g(t4) {
        v(this.H) || (this.H = [], this.R());
        const i5 = this.H;
        let s5, e6 = 0;
        for (const o7 of t4)
          e6 === i5.length ? i5.push(s5 = new C(this.k(c()), this.k(c()), this, this.options)) : s5 = i5[e6], s5.I(o7), e6++;
        e6 < i5.length && (this.R(s5 && s5.B.nextSibling, e6), i5.length = e6);
      }
      R(t4 = this.A.nextSibling, i5) {
        var s5;
        for ((s5 = this.P) === null || s5 === void 0 || s5.call(this, false, true, i5); t4 && t4 !== this.B; ) {
          const i6 = t4.nextSibling;
          t4.remove(), t4 = i6;
        }
      }
    };
    var H$1 = class {
      constructor(t4, i5, s5, e6, o7) {
        this.type = 1, this.H = A, this.N = void 0, this.V = void 0, this.element = t4, this.name = i5, this.M = e6, this.options = o7, s5.length > 2 || s5[0] !== "" || s5[1] !== "" ? (this.H = Array(s5.length - 1).fill(A), this.strings = s5) : this.H = A;
      }
      get tagName() {
        return this.element.tagName;
      }
      I(t4, i5 = this, s5, e6) {
        const o7 = this.strings;
        let l4 = false;
        if (o7 === void 0)
          t4 = S(this, t4, i5, 0), l4 = !d$1(t4) || t4 !== this.H && t4 !== w, l4 && (this.H = t4);
        else {
          const e7 = t4;
          let n7, h4;
          for (t4 = o7[0], n7 = 0; n7 < o7.length - 1; n7++)
            h4 = S(this, e7[s5 + n7], i5, n7), h4 === w && (h4 = this.H[n7]), l4 || (l4 = !d$1(h4) || h4 !== this.H[n7]), h4 === A ? t4 = A : t4 !== A && (t4 += (h4 != null ? h4 : "") + o7[n7 + 1]), this.H[n7] = h4;
        }
        l4 && !e6 && this.W(t4);
      }
      W(t4) {
        t4 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t4 != null ? t4 : "");
      }
    };
    var I = class extends H$1 {
      constructor() {
        super(...arguments), this.type = 3;
      }
      W(t4) {
        this.element[this.name] = t4 === A ? void 0 : t4;
      }
    };
    var L = class extends H$1 {
      constructor() {
        super(...arguments), this.type = 4;
      }
      W(t4) {
        t4 && t4 !== A ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
      }
    };
    var R = class extends H$1 {
      constructor() {
        super(...arguments), this.type = 5;
      }
      I(t4, i5 = this) {
        var s5;
        if ((t4 = (s5 = S(this, t4, i5, 0)) !== null && s5 !== void 0 ? s5 : A) === w)
          return;
        const e6 = this.H, o7 = t4 === A && e6 !== A || t4.capture !== e6.capture || t4.once !== e6.once || t4.passive !== e6.passive, l4 = t4 !== A && (e6 === A || o7);
        o7 && this.element.removeEventListener(this.name, this, e6), l4 && this.element.addEventListener(this.name, this, t4), this.H = t4;
      }
      handleEvent(t4) {
        var i5, s5;
        typeof this.H == "function" ? this.H.call((s5 = (i5 = this.options) === null || i5 === void 0 ? void 0 : i5.host) !== null && s5 !== void 0 ? s5 : this.element, t4) : this.H.handleEvent(t4);
      }
    };
    var z = class {
      constructor(t4, i5, s5) {
        this.element = t4, this.type = 6, this.N = void 0, this.V = void 0, this.M = i5, this.options = s5;
      }
      I(t4) {
        S(this, t4);
      }
    };
    (i = (t = globalThis).litHtmlPlatformSupport) === null || i === void 0 || i.call(t, N, C), ((s = (e$1 = globalThis).litHtmlVersions) !== null && s !== void 0 ? s : e$1.litHtmlVersions = []).push("2.0.0-rc.3");

    // node_modules/@lit/reactive-element/css-tag.js
    var t2$1 = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
    var e2 = Symbol();
    var s2$1 = class {
      constructor(t4, s5) {
        if (s5 !== e2)
          throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t4;
      }
      get styleSheet() {
        return t2$1 && this.t === void 0 && (this.t = new CSSStyleSheet(), this.t.replaceSync(this.cssText)), this.t;
      }
      toString() {
        return this.cssText;
      }
    };
    var n2$1 = new Map();
    var o2$1 = (t4) => {
      let o7 = n2$1.get(t4);
      return o7 === void 0 && n2$1.set(t4, o7 = new s2$1(t4, e2)), o7;
    };
    var r2 = (t4) => o2$1(typeof t4 == "string" ? t4 : t4 + "");
    var i2$1 = (t4, ...e6) => {
      const n7 = t4.length === 1 ? t4[0] : e6.reduce((e7, n8, o7) => e7 + ((t5) => {
        if (t5 instanceof s2$1)
          return t5.cssText;
        if (typeof t5 == "number")
          return t5;
        throw Error("Value passed to 'css' function must be a 'css' function result: " + t5 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
      })(n8) + t4[o7 + 1], t4[0]);
      return o2$1(n7);
    };
    var S2 = (e6, s5) => {
      t2$1 ? e6.adoptedStyleSheets = s5.map((t4) => t4 instanceof CSSStyleSheet ? t4 : t4.styleSheet) : s5.forEach((t4) => {
        const s6 = document.createElement("style");
        s6.textContent = t4.cssText, e6.appendChild(s6);
      });
    };
    var u2 = t2$1 ? (t4) => t4 : (t4) => t4 instanceof CSSStyleSheet ? ((t5) => {
      let e6 = "";
      for (const s5 of t5.cssRules)
        e6 += s5.cssText;
      return r2(e6);
    })(t4) : t4;

    // node_modules/@lit/reactive-element/reactive-element.js
    var s3;
    var e3;
    var h2;
    var r3;
    var o3 = { toAttribute(t4, i5) {
      switch (i5) {
        case Boolean:
          t4 = t4 ? "" : null;
          break;
        case Object:
        case Array:
          t4 = t4 == null ? t4 : JSON.stringify(t4);
      }
      return t4;
    }, fromAttribute(t4, i5) {
      let s5 = t4;
      switch (i5) {
        case Boolean:
          s5 = t4 !== null;
          break;
        case Number:
          s5 = t4 === null ? null : Number(t4);
          break;
        case Object:
        case Array:
          try {
            s5 = JSON.parse(t4);
          } catch (t5) {
            s5 = null;
          }
      }
      return s5;
    } };
    var n3 = (t4, i5) => i5 !== t4 && (i5 == i5 || t4 == t4);
    var l2 = { attribute: true, type: String, converter: o3, reflect: false, hasChanged: n3 };
    var a2 = class extends HTMLElement {
      constructor() {
        super(), this.\u03A0i = new Map(), this.\u03A0o = void 0, this.\u03A0l = void 0, this.isUpdatePending = false, this.hasUpdated = false, this.\u03A0h = null, this.u();
      }
      static addInitializer(t4) {
        var i5;
        (i5 = this.v) !== null && i5 !== void 0 || (this.v = []), this.v.push(t4);
      }
      static get observedAttributes() {
        this.finalize();
        const t4 = [];
        return this.elementProperties.forEach((i5, s5) => {
          const e6 = this.\u03A0p(s5, i5);
          e6 !== void 0 && (this.\u03A0m.set(e6, s5), t4.push(e6));
        }), t4;
      }
      static createProperty(t4, i5 = l2) {
        if (i5.state && (i5.attribute = false), this.finalize(), this.elementProperties.set(t4, i5), !i5.noAccessor && !this.prototype.hasOwnProperty(t4)) {
          const s5 = typeof t4 == "symbol" ? Symbol() : "__" + t4, e6 = this.getPropertyDescriptor(t4, s5, i5);
          e6 !== void 0 && Object.defineProperty(this.prototype, t4, e6);
        }
      }
      static getPropertyDescriptor(t4, i5, s5) {
        return { get() {
          return this[i5];
        }, set(e6) {
          const h4 = this[t4];
          this[i5] = e6, this.requestUpdate(t4, h4, s5);
        }, configurable: true, enumerable: true };
      }
      static getPropertyOptions(t4) {
        return this.elementProperties.get(t4) || l2;
      }
      static finalize() {
        if (this.hasOwnProperty("finalized"))
          return false;
        this.finalized = true;
        const t4 = Object.getPrototypeOf(this);
        if (t4.finalize(), this.elementProperties = new Map(t4.elementProperties), this.\u03A0m = new Map(), this.hasOwnProperty("properties")) {
          const t5 = this.properties, i5 = [...Object.getOwnPropertyNames(t5), ...Object.getOwnPropertySymbols(t5)];
          for (const s5 of i5)
            this.createProperty(s5, t5[s5]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), true;
      }
      static finalizeStyles(i5) {
        const s5 = [];
        if (Array.isArray(i5)) {
          const e6 = new Set(i5.flat(1 / 0).reverse());
          for (const i6 of e6)
            s5.unshift(u2(i6));
        } else
          i5 !== void 0 && s5.push(u2(i5));
        return s5;
      }
      static \u03A0p(t4, i5) {
        const s5 = i5.attribute;
        return s5 === false ? void 0 : typeof s5 == "string" ? s5 : typeof t4 == "string" ? t4.toLowerCase() : void 0;
      }
      u() {
        var t4;
        this.\u03A0g = new Promise((t5) => this.enableUpdating = t5), this.L = new Map(), this.\u03A0_(), this.requestUpdate(), (t4 = this.constructor.v) === null || t4 === void 0 || t4.forEach((t5) => t5(this));
      }
      addController(t4) {
        var i5, s5;
        ((i5 = this.\u03A0U) !== null && i5 !== void 0 ? i5 : this.\u03A0U = []).push(t4), this.renderRoot !== void 0 && this.isConnected && ((s5 = t4.hostConnected) === null || s5 === void 0 || s5.call(t4));
      }
      removeController(t4) {
        var i5;
        (i5 = this.\u03A0U) === null || i5 === void 0 || i5.splice(this.\u03A0U.indexOf(t4) >>> 0, 1);
      }
      \u03A0_() {
        this.constructor.elementProperties.forEach((t4, i5) => {
          this.hasOwnProperty(i5) && (this.\u03A0i.set(i5, this[i5]), delete this[i5]);
        });
      }
      createRenderRoot() {
        var t4;
        const s5 = (t4 = this.shadowRoot) !== null && t4 !== void 0 ? t4 : this.attachShadow(this.constructor.shadowRootOptions);
        return S2(s5, this.constructor.elementStyles), s5;
      }
      connectedCallback() {
        var t4;
        this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t4 = this.\u03A0U) === null || t4 === void 0 || t4.forEach((t5) => {
          var i5;
          return (i5 = t5.hostConnected) === null || i5 === void 0 ? void 0 : i5.call(t5);
        }), this.\u03A0l && (this.\u03A0l(), this.\u03A0o = this.\u03A0l = void 0);
      }
      enableUpdating(t4) {
      }
      disconnectedCallback() {
        var t4;
        (t4 = this.\u03A0U) === null || t4 === void 0 || t4.forEach((t5) => {
          var i5;
          return (i5 = t5.hostDisconnected) === null || i5 === void 0 ? void 0 : i5.call(t5);
        }), this.\u03A0o = new Promise((t5) => this.\u03A0l = t5);
      }
      attributeChangedCallback(t4, i5, s5) {
        this.K(t4, s5);
      }
      \u03A0j(t4, i5, s5 = l2) {
        var e6, h4;
        const r5 = this.constructor.\u03A0p(t4, s5);
        if (r5 !== void 0 && s5.reflect === true) {
          const n7 = ((h4 = (e6 = s5.converter) === null || e6 === void 0 ? void 0 : e6.toAttribute) !== null && h4 !== void 0 ? h4 : o3.toAttribute)(i5, s5.type);
          this.\u03A0h = t4, n7 == null ? this.removeAttribute(r5) : this.setAttribute(r5, n7), this.\u03A0h = null;
        }
      }
      K(t4, i5) {
        var s5, e6, h4;
        const r5 = this.constructor, n7 = r5.\u03A0m.get(t4);
        if (n7 !== void 0 && this.\u03A0h !== n7) {
          const t5 = r5.getPropertyOptions(n7), l4 = t5.converter, a4 = (h4 = (e6 = (s5 = l4) === null || s5 === void 0 ? void 0 : s5.fromAttribute) !== null && e6 !== void 0 ? e6 : typeof l4 == "function" ? l4 : null) !== null && h4 !== void 0 ? h4 : o3.fromAttribute;
          this.\u03A0h = n7, this[n7] = a4(i5, t5.type), this.\u03A0h = null;
        }
      }
      requestUpdate(t4, i5, s5) {
        let e6 = true;
        t4 !== void 0 && (((s5 = s5 || this.constructor.getPropertyOptions(t4)).hasChanged || n3)(this[t4], i5) ? (this.L.has(t4) || this.L.set(t4, i5), s5.reflect === true && this.\u03A0h !== t4 && (this.\u03A0k === void 0 && (this.\u03A0k = new Map()), this.\u03A0k.set(t4, s5))) : e6 = false), !this.isUpdatePending && e6 && (this.\u03A0g = this.\u03A0q());
      }
      async \u03A0q() {
        this.isUpdatePending = true;
        try {
          for (await this.\u03A0g; this.\u03A0o; )
            await this.\u03A0o;
        } catch (t5) {
          Promise.reject(t5);
        }
        const t4 = this.performUpdate();
        return t4 != null && await t4, !this.isUpdatePending;
      }
      performUpdate() {
        var t4;
        if (!this.isUpdatePending)
          return;
        this.hasUpdated, this.\u03A0i && (this.\u03A0i.forEach((t5, i6) => this[i6] = t5), this.\u03A0i = void 0);
        let i5 = false;
        const s5 = this.L;
        try {
          i5 = this.shouldUpdate(s5), i5 ? (this.willUpdate(s5), (t4 = this.\u03A0U) === null || t4 === void 0 || t4.forEach((t5) => {
            var i6;
            return (i6 = t5.hostUpdate) === null || i6 === void 0 ? void 0 : i6.call(t5);
          }), this.update(s5)) : this.\u03A0$();
        } catch (t5) {
          throw i5 = false, this.\u03A0$(), t5;
        }
        i5 && this.E(s5);
      }
      willUpdate(t4) {
      }
      E(t4) {
        var i5;
        (i5 = this.\u03A0U) === null || i5 === void 0 || i5.forEach((t5) => {
          var i6;
          return (i6 = t5.hostUpdated) === null || i6 === void 0 ? void 0 : i6.call(t5);
        }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t4)), this.updated(t4);
      }
      \u03A0$() {
        this.L = new Map(), this.isUpdatePending = false;
      }
      get updateComplete() {
        return this.getUpdateComplete();
      }
      getUpdateComplete() {
        return this.\u03A0g;
      }
      shouldUpdate(t4) {
        return true;
      }
      update(t4) {
        this.\u03A0k !== void 0 && (this.\u03A0k.forEach((t5, i5) => this.\u03A0j(i5, this[i5], t5)), this.\u03A0k = void 0), this.\u03A0$();
      }
      updated(t4) {
      }
      firstUpdated(t4) {
      }
    };
    a2.finalized = true, a2.elementProperties = new Map(), a2.elementStyles = [], a2.shadowRootOptions = { mode: "open" }, (e3 = (s3 = globalThis).reactiveElementPlatformSupport) === null || e3 === void 0 || e3.call(s3, { ReactiveElement: a2 }), ((h2 = (r3 = globalThis).reactiveElementVersions) !== null && h2 !== void 0 ? h2 : r3.reactiveElementVersions = []).push("1.0.0-rc.2");

    // node_modules/lit-element/lit-element.js
    var i3;
    var l3;
    var o4;
    var s4;
    var n4;
    var a3;
    ((i3 = (a3 = globalThis).litElementVersions) !== null && i3 !== void 0 ? i3 : a3.litElementVersions = []).push("3.0.0-rc.2");
    var h3 = class extends a2 {
      constructor() {
        super(...arguments), this.renderOptions = { host: this }, this.\u03A6t = void 0;
      }
      createRenderRoot() {
        var t4, e6;
        const r5 = super.createRenderRoot();
        return (t4 = (e6 = this.renderOptions).renderBefore) !== null && t4 !== void 0 || (e6.renderBefore = r5.firstChild), r5;
      }
      update(t4) {
        const r5 = this.render();
        super.update(t4), this.\u03A6t = V(r5, this.renderRoot, this.renderOptions);
      }
      connectedCallback() {
        var t4;
        super.connectedCallback(), (t4 = this.\u03A6t) === null || t4 === void 0 || t4.setConnected(true);
      }
      disconnectedCallback() {
        var t4;
        super.disconnectedCallback(), (t4 = this.\u03A6t) === null || t4 === void 0 || t4.setConnected(false);
      }
      render() {
        return w;
      }
    };
    h3.finalized = true, h3._$litElement$ = true, (o4 = (l3 = globalThis).litElementHydrateSupport) === null || o4 === void 0 || o4.call(l3, { LitElement: h3 }), (n4 = (s4 = globalThis).litElementPlatformSupport) === null || n4 === void 0 || n4.call(s4, { LitElement: h3 });

    // node_modules/@lit/reactive-element/decorators/custom-element.js
    var n5 = (n7) => (e6) => typeof e6 == "function" ? ((n8, e7) => (window.customElements.define(n8, e7), e7))(n7, e6) : ((n8, e7) => {
      const { kind: t4, elements: i5 } = e7;
      return { kind: t4, elements: i5, finisher(e8) {
        window.customElements.define(n8, e8);
      } };
    })(n7, e6);

    // node_modules/@lit/reactive-element/decorators/property.js
    var i4 = (i5, e6) => e6.kind === "method" && e6.descriptor && !("value" in e6.descriptor) ? __spreadProps(__spreadValues({}, e6), { finisher(n7) {
      n7.createProperty(e6.key, i5);
    } }) : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: e6.key, initializer() {
      typeof e6.initializer == "function" && (this[e6.key] = e6.initializer.call(this));
    }, finisher(n7) {
      n7.createProperty(e6.key, i5);
    } };
    function e4(e6) {
      return (n7, t4) => t4 !== void 0 ? ((i5, e7, n8) => {
        e7.constructor.createProperty(n8, i5);
      })(e6, n7, t4) : i4(e6, n7);
    }

    // node_modules/@lit/reactive-element/decorators/state.js
    function r4(r5) {
      return e4(__spreadProps(__spreadValues({}, r5), { state: true, attribute: false }));
    }

    // node_modules/@lit/reactive-element/decorators/base.js
    var o5 = ({ finisher: e6, descriptor: t4 }) => (o7, n7) => {
      var r5;
      if (n7 === void 0) {
        const n8 = (r5 = o7.originalKey) !== null && r5 !== void 0 ? r5 : o7.key, i5 = t4 != null ? { kind: "method", placement: "prototype", key: n8, descriptor: t4(o7.key) } : __spreadProps(__spreadValues({}, o7), { key: n8 });
        return e6 != null && (i5.finisher = function(t5) {
          e6(t5, n8);
        }), i5;
      }
      {
        const r6 = o7.constructor;
        t4 !== void 0 && Object.defineProperty(o7, n7, t4(n7)), e6 == null || e6(r6, n7);
      }
    };

    // node_modules/@lit/reactive-element/decorators/query.js
    function o6(o7, r5) {
      return o5({ descriptor: (t4) => {
        const i5 = { get() {
          var t5;
          return (t5 = this.renderRoot) === null || t5 === void 0 ? void 0 : t5.querySelector(o7);
        }, enumerable: true, configurable: true };
        if (r5) {
          const r6 = typeof t4 == "symbol" ? Symbol() : "__" + t4;
          i5.get = function() {
            var t5;
            return this[r6] === void 0 && (this[r6] = (t5 = this.renderRoot) === null || t5 === void 0 ? void 0 : t5.querySelector(o7)), this[r6];
          };
        }
        return i5;
      } });
    }

    // node_modules/@lit/reactive-element/decorators/query-async.js
    function e5(e6) {
      return o5({ descriptor: (r5) => ({ async get() {
        var r6;
        return await this.updateComplete, (r6 = this.renderRoot) === null || r6 === void 0 ? void 0 : r6.querySelector(e6);
      }, enumerable: true, configurable: true }) });
    }
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */

    // node_modules/lit-html/directives/class-map.js
    var e = i$1(class extends s$1 {
      constructor(t2) {
        var s2;
        if (super(t2), t2.type !== t$1.ATTRIBUTE || t2.name !== "class" || ((s2 = t2.strings) === null || s2 === void 0 ? void 0 : s2.length) > 2)
          throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
      }
      render(t2) {
        return Object.keys(t2).filter((s2) => t2[s2]).join(" ");
      }
      update(s2, [r]) {
        if (this.bt === void 0) {
          this.bt = new Set();
          for (const t2 in r)
            r[t2] && this.bt.add(t2);
          return this.render(r);
        }
        const i2 = s2.element.classList;
        this.bt.forEach((t2) => {
          t2 in r || (i2.remove(t2), this.bt.delete(t2));
        });
        for (const t2 in r) {
          const s3 = !!r[t2];
          s3 !== this.bt.has(t2) && (s3 ? (i2.add(t2), this.bt.add(t2)) : (i2.remove(t2), this.bt.delete(t2)));
        }
        return w;
      }
    });
    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */

    // src/internal/event.ts
    function emit(el, name, options) {
      const event = new CustomEvent(name, Object.assign({
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {}
      }, options));
      el.dispatchEvent(event);
      return event;
    }
    function waitForEvent(el, eventName) {
      return new Promise((resolve) => {
        function done(event) {
          if (event.target === el) {
            el.removeEventListener(eventName, done);
            resolve();
          }
        }
        el.addEventListener(eventName, done);
      });
    }

    // src/styles/component.styles.ts
    var component_styles_default = i2$1`
  :host {
    position: relative;
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;

    // src/components/tab-group/tab-group.styles.ts
    var tab_group_styles_default = i2$1`
  ${component_styles_default}

  :host {
    --tabs-border-color: var(--sl-color-gray-200);

    display: block;
  }

  .tab-group {
    display: flex;
    border: solid 1px transparent;
    border-radius: 0;
  }

  .tab-group .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group .tab-group__indicator {
    position: absolute;
    left: 0;
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) width ease;
  }

  /* Remove the focus ring when the user isn't interacting with a keyboard */
  .tab-group:not(.focus-visible) ::slotted(sl-tab) {
    --focus-ring: none;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid 2px var(--tabs-border-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: -2px;
    border-bottom: solid 2px var(--sl-color-primary-500);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid 2px var(--tabs-border-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * 2px);
    border-top: solid 2px var(--sl-color-primary-500);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-right: solid 2px var(--tabs-border-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * 2px);
    border-right: solid 2px var(--sl-color-primary-500);
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid 2px var(--tabs-border-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * 2px);
    border-left: solid 2px var(--sl-color-primary-500);
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }
`;

    // src/components/tab-group/tab-group.ts
    var SlTabGroup = class extends h3 {
      constructor() {
        super(...arguments);
        this.tabs = [];
        this.panels = [];
        this.hasScrollControls = false;
        this.placement = "top";
        this.activation = "auto";
        this.noScrollControls = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.resizeObserver = new ResizeObserver(() => {
          this.preventIndicatorTransition();
          this.repositionIndicator();
          this.updateScrollControls();
        });
        this.mutationObserver = new MutationObserver((mutations) => {
          if (mutations.some((m) => !["aria-labelledby", "aria-controls"].includes(m.attributeName))) {
            setTimeout(() => this.setAriaLabels());
          }
          if (mutations.some((m) => m.attributeName === "disabled")) {
            this.syncTabsAndPanels();
          }
        });
        this.updateComplete.then(() => {
          this.syncTabsAndPanels();
          this.mutationObserver.observe(this, { attributes: true, childList: true, subtree: true });
          this.resizeObserver.observe(this.nav);
          focusVisible.observe(this.tabGroup);
          const intersectionObserver = new IntersectionObserver((entries, observer) => {
            if (entries[0].intersectionRatio > 0) {
              this.setAriaLabels();
              this.setActiveTab(this.getActiveTab() || this.tabs[0], { emitEvents: false });
              observer.unobserve(entries[0].target);
            }
          });
          intersectionObserver.observe(this.tabGroup);
        });
      }
      disconnectedCallback() {
        this.mutationObserver.disconnect();
        this.resizeObserver.unobserve(this.nav);
        focusVisible.unobserve(this.tabGroup);
      }
      show(panel) {
        const tab = this.tabs.find((el) => el.panel === panel);
        if (tab) {
          this.setActiveTab(tab, { scrollBehavior: "smooth" });
        }
      }
      getAllTabs(includeDisabled = false) {
        const slot = this.shadowRoot.querySelector('slot[name="nav"]');
        return [...slot.assignedElements()].filter((el) => {
          return includeDisabled ? el.tagName.toLowerCase() === "sl-tab" : el.tagName.toLowerCase() === "sl-tab" && !el.disabled;
        });
      }
      getAllPanels() {
        const slot = this.body.querySelector("slot");
        return [...slot.assignedElements()].filter((el) => el.tagName.toLowerCase() === "sl-tab-panel");
      }
      getActiveTab() {
        return this.tabs.find((el) => el.active);
      }
      handleClick(event) {
        const target = event.target;
        const tab = target.closest("sl-tab");
        const tabGroup = tab == null ? void 0 : tab.closest("sl-tab-group");
        if (tabGroup !== this) {
          return;
        }
        if (tab) {
          this.setActiveTab(tab, { scrollBehavior: "smooth" });
        }
      }
      handleKeyDown(event) {
        const target = event.target;
        const tab = target.closest("sl-tab");
        const tabGroup = tab == null ? void 0 : tab.closest("sl-tab-group");
        if (tabGroup !== this) {
          return;
        }
        if (["Enter", " "].includes(event.key)) {
          if (tab) {
            this.setActiveTab(tab, { scrollBehavior: "smooth" });
            event.preventDefault();
          }
        }
        if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
          const activeEl = document.activeElement;
          if (activeEl && activeEl.tagName.toLowerCase() === "sl-tab") {
            let index = this.tabs.indexOf(activeEl);
            if (event.key === "Home") {
              index = 0;
            } else if (event.key === "End") {
              index = this.tabs.length - 1;
            } else if (event.key === "ArrowLeft") {
              index = Math.max(0, index - 1);
            } else if (event.key === "ArrowRight") {
              index = Math.min(this.tabs.length - 1, index + 1);
            }
            this.tabs[index].focus({ preventScroll: true });
            if (this.activation === "auto") {
              this.setActiveTab(this.tabs[index], { scrollBehavior: "smooth" });
            }
            if (["top", "bottom"].includes(this.placement)) {
              scrollIntoView(this.tabs[index], this.nav, "horizontal");
            }
            event.preventDefault();
          }
        }
      }
      handleScrollToStart() {
        this.nav.scroll({
          left: this.nav.scrollLeft - this.nav.clientWidth,
          behavior: "smooth"
        });
      }
      handleScrollToEnd() {
        this.nav.scroll({
          left: this.nav.scrollLeft + this.nav.clientWidth,
          behavior: "smooth"
        });
      }
      updateScrollControls() {
        if (this.nav) {
          if (this.noScrollControls) {
            this.hasScrollControls = false;
          } else {
            this.hasScrollControls = ["top", "bottom"].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth;
          }
        }
      }
      setActiveTab(tab, options) {
        options = Object.assign({
          emitEvents: true,
          scrollBehavior: "auto"
        }, options);
        if (tab && tab !== this.activeTab && !tab.disabled) {
          const previousTab = this.activeTab;
          this.activeTab = tab;
          this.tabs.map((el) => el.active = el === this.activeTab);
          this.panels.map((el) => el.active = el.name === this.activeTab.panel);
          this.syncIndicator();
          if (["top", "bottom"].includes(this.placement)) {
            scrollIntoView(this.activeTab, this.nav, "horizontal", options.scrollBehavior);
          }
          if (options.emitEvents) {
            if (previousTab) {
              emit(this, "sl-tab-hide", { detail: { name: previousTab.panel } });
            }
            emit(this, "sl-tab-show", { detail: { name: this.activeTab.panel } });
          }
        }
      }
      setAriaLabels() {
        this.tabs.map((tab) => {
          const panel = this.panels.find((el) => el.name === tab.panel);
          if (panel) {
            tab.setAttribute("aria-controls", panel.getAttribute("id"));
            panel.setAttribute("aria-labelledby", tab.getAttribute("id"));
          }
        });
      }
      syncIndicator() {
        if (this.indicator) {
          const tab = this.getActiveTab();
          if (tab) {
            this.indicator.style.display = "block";
            this.repositionIndicator();
          } else {
            this.indicator.style.display = "none";
            return;
          }
        }
      }
      repositionIndicator() {
        const currentTab = this.getActiveTab();
        if (!currentTab) {
          return;
        }
        const width = currentTab.clientWidth;
        const height = currentTab.clientHeight;
        const offset = getOffset(currentTab, this.nav);
        const offsetTop = offset.top + this.nav.scrollTop;
        const offsetLeft = offset.left + this.nav.scrollLeft;
        switch (this.placement) {
          case "top":
          case "bottom":
            this.indicator.style.width = `${width}px`;
            this.indicator.style.height = "auto";
            this.indicator.style.transform = `translateX(${offsetLeft}px)`;
            break;
          case "start":
          case "end":
            this.indicator.style.width = "auto";
            this.indicator.style.height = `${height}px`;
            this.indicator.style.transform = `translateY(${offsetTop}px)`;
            break;
        }
      }
      preventIndicatorTransition() {
        const transitionValue = this.indicator.style.transition;
        this.indicator.style.transition = "none";
        requestAnimationFrame(() => {
          this.indicator.style.transition = transitionValue;
        });
      }
      syncTabsAndPanels() {
        this.tabs = this.getAllTabs();
        this.panels = this.getAllPanels();
        this.syncIndicator();
      }
      render() {
        return T`
      <div
        part="base"
        class=${e({
      "tab-group": true,
      "tab-group--top": this.placement === "top",
      "tab-group--bottom": this.placement === "bottom",
      "tab-group--start": this.placement === "start",
      "tab-group--end": this.placement === "end",
      "tab-group--has-scroll-controls": this.hasScrollControls
    })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container">
          ${this.hasScrollControls ? T`
                <sl-icon-button
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  exportparts="base:scroll-button"
                  name="chevron-left"
                  library="system"
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              ` : ""}

          <div part="nav" class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls ? T`
                <sl-icon-button
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  exportparts="base:scroll-button"
                  name="chevron-right"
                  library="system"
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              ` : ""}
        </div>

        <div part="body" class="tab-group__body">
          <slot @slotchange=${this.syncTabsAndPanels}></slot>
        </div>
      </div>
    `;
      }
    };
    SlTabGroup.styles = tab_group_styles_default;
    __decorateClass([
      o6(".tab-group")
    ], SlTabGroup.prototype, "tabGroup", 2);
    __decorateClass([
      o6(".tab-group__body")
    ], SlTabGroup.prototype, "body", 2);
    __decorateClass([
      o6(".tab-group__nav")
    ], SlTabGroup.prototype, "nav", 2);
    __decorateClass([
      o6(".tab-group__indicator")
    ], SlTabGroup.prototype, "indicator", 2);
    __decorateClass([
      r4()
    ], SlTabGroup.prototype, "hasScrollControls", 2);
    __decorateClass([
      e4()
    ], SlTabGroup.prototype, "placement", 2);
    __decorateClass([
      e4()
    ], SlTabGroup.prototype, "activation", 2);
    __decorateClass([
      e4({ attribute: "no-scroll-controls", type: Boolean })
    ], SlTabGroup.prototype, "noScrollControls", 2);
    __decorateClass([
      watch("noScrollControls")
    ], SlTabGroup.prototype, "updateScrollControls", 1);
    __decorateClass([
      watch("placement")
    ], SlTabGroup.prototype, "syncIndicator", 1);
    SlTabGroup = __decorateClass([
      n5("sl-tab-group")
    ], SlTabGroup);

    // src/components/tab-panel/tab-panel.styles.ts
    var tab_panel_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: block;
  }

  .tab-panel {
    border: solid 1px transparent;
    padding: 20px 20px;
  }
`;

    // src/components/tab-panel/tab-panel.ts
    var id$d = 0;
    var SlTabPanel = class extends h3 {
      constructor() {
        super(...arguments);
        this.componentId = `tab-panel-${++id$d}`;
        this.name = "";
        this.active = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.id = this.id || this.componentId;
      }
      render() {
        this.style.display = this.active ? "block" : "none";
        return T`
      <div
        part="base"
        class="tab-panel"
        role="tabpanel"
        aria-selected=${this.active ? "true" : "false"}
        aria-hidden=${this.active ? "false" : "true"}
      >
        <slot></slot>
      </div>
    `;
      }
    };
    SlTabPanel.styles = tab_panel_styles_default;
    __decorateClass([
      e4()
    ], SlTabPanel.prototype, "name", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlTabPanel.prototype, "active", 2);
    SlTabPanel = __decorateClass([
      n5("sl-tab-panel")
    ], SlTabPanel);

    // node_modules/lit-html/directives/if-defined.js
    var l$1 = (l2) => l2 != null ? l2 : A;
    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */

    // src/internal/form-control.ts
    var renderFormControl = (props, input) => {
      const hasLabel = props.label ? true : !!props.hasLabelSlot;
      const hasHelpText = props.helpText ? true : !!props.hasHelpTextSlot;
      return T`
    <div
      part="form-control"
      class=${e({
    "form-control": true,
    "form-control--small": props.size === "small",
    "form-control--medium": props.size === "medium",
    "form-control--large": props.size === "large",
    "form-control--has-label": hasLabel,
    "form-control--has-help-text": hasHelpText
  })}
    >
      <label
        part="label"
        id=${l$1(props.labelId)}
        class="form-control__label"
        for=${props.inputId}
        aria-hidden=${hasLabel ? "false" : "true"}
        @click=${(event) => props.onLabelClick ? props.onLabelClick(event) : null}
      >
        <slot name="label">${props.label}</slot>
      </label>

      <div class="form-control__input">${T`${input}`}</div>

      <div
        part="help-text"
        id=${l$1(props.helpTextId)}
        class="form-control__help-text"
        aria-hidden=${hasHelpText ? "false" : "true"}
      >
        <slot name="help-text">${props.helpText}</slot>
      </div>
    </div>
  `;
    };
    function getLabelledBy(props) {
      const labelledBy = [
        props.label || props.hasLabelSlot ? props.labelId : "",
        props.helpText || props.hasHelpTextSlot ? props.helpTextId : ""
      ].filter((val) => val);
      return labelledBy.join(" ") || void 0;
    }

    // src/styles/form-control.styles.ts
    var form_control_styles_default = i2$1`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-xxx-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--sl-spacing-xxx-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }
`;

    // node_modules/lit-html/directive-helpers.js
    var d = (o) => o.strings === void 0;
    var s2 = {};
    var f = (o, t2 = s2) => o.H = t2;

    // node_modules/lit-html/directives/live.js
    var l = i$1(class extends s$1 {
      constructor(r) {
        if (super(r), r.type !== t$1.PROPERTY && r.type !== t$1.ATTRIBUTE && r.type !== t$1.BOOLEAN_ATTRIBUTE)
          throw Error("The `live` directive is not allowed on child or event bindings");
        if (!d(r))
          throw Error("`live` bindings can only contain a single expression");
      }
      render(r) {
        return r;
      }
      update(i2, [t2]) {
        if (t2 === w || t2 === A)
          return t2;
        const o = i2.element, l2 = i2.name;
        if (i2.type === t$1.PROPERTY) {
          if (t2 === o[l2])
            return w;
        } else if (i2.type === t$1.BOOLEAN_ATTRIBUTE) {
          if (!!t2 === o.hasAttribute(l2))
            return w;
        } else if (i2.type === t$1.ATTRIBUTE && o.getAttribute(l2) === t2 + "")
          return w;
        return f(i2), t2;
      }
    });
    /**
     * @license
     * Copyright 2020 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */

    // src/internal/slot.ts
    function getTextContent(slot) {
      const nodes = slot ? slot.assignedNodes({ flatten: true }) : [];
      let text = "";
      [...nodes].map((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          text += node.textContent;
        }
      });
      return text;
    }
    function hasSlot(el, name) {
      if (name) {
        return el.querySelector(`:scope > [slot="${name}"]`) !== null;
      }
      return [...el.childNodes].some((node) => {
        if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") {
          return true;
        }
        if (node.nodeType === node.ELEMENT_NODE) {
          const el2 = node;
          if (!el2.hasAttribute("slot")) {
            return true;
          }
        }
        return false;
      });
    }

    // src/components/textarea/textarea.styles.ts
    var textarea_styles_default = i2$1`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: text;
  }

  .textarea:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
    color: var(--sl-input-color-focus);
  }

  .textarea.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
  }
`;

    // src/components/textarea/textarea.ts
    var id$c = 0;
    var SlTextarea = class extends h3 {
      constructor() {
        super(...arguments);
        this.inputId = `textarea-${++id$c}`;
        this.helpTextId = `textarea-help-text-${id$c}`;
        this.labelId = `textarea-label-${id$c}`;
        this.hasFocus = false;
        this.hasHelpTextSlot = false;
        this.hasLabelSlot = false;
        this.size = "medium";
        this.value = "";
        this.helpText = "";
        this.rows = 4;
        this.resize = "vertical";
        this.disabled = false;
        this.readonly = false;
        this.required = false;
        this.invalid = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.handleSlotChange = this.handleSlotChange.bind(this);
        this.resizeObserver = new ResizeObserver(() => this.setTextareaHeight());
        this.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
        this.handleSlotChange();
        this.updateComplete.then(() => {
          this.setTextareaHeight();
          this.resizeObserver.observe(this.input);
        });
      }
      firstUpdated() {
        this.invalid = !this.input.checkValidity();
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this.resizeObserver.unobserve(this.input);
        this.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
      }
      focus(options) {
        this.input.focus(options);
      }
      blur() {
        this.input.blur();
      }
      select() {
        return this.input.select();
      }
      scrollPosition(position) {
        if (position) {
          if (typeof position.top === "number")
            this.input.scrollTop = position.top;
          if (typeof position.left === "number")
            this.input.scrollLeft = position.left;
          return;
        }
        return {
          top: this.input.scrollTop,
          left: this.input.scrollTop
        };
      }
      setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
        return this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
      }
      setRangeText(replacement, start, end, selectMode = "preserve") {
        this.input.setRangeText(replacement, start, end, selectMode);
        if (this.value !== this.input.value) {
          this.value = this.input.value;
          emit(this, "sl-input");
        }
        if (this.value !== this.input.value) {
          this.value = this.input.value;
          this.setTextareaHeight();
          emit(this, "sl-input");
          emit(this, "sl-change");
        }
      }
      reportValidity() {
        return this.input.reportValidity();
      }
      setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
      }
      handleBlur() {
        this.hasFocus = false;
        emit(this, "sl-blur");
      }
      handleChange() {
        this.value = this.input.value;
        this.setTextareaHeight();
        emit(this, "sl-change");
      }
      handleDisabledChange() {
        if (this.input) {
          this.input.disabled = this.disabled;
          this.invalid = !this.input.checkValidity();
        }
      }
      handleFocus() {
        this.hasFocus = true;
        emit(this, "sl-focus");
      }
      handleInput() {
        this.value = this.input.value;
        this.setTextareaHeight();
        emit(this, "sl-input");
      }
      handleRowsChange() {
        this.setTextareaHeight();
      }
      handleSlotChange() {
        this.hasHelpTextSlot = hasSlot(this, "help-text");
        this.hasLabelSlot = hasSlot(this, "label");
      }
      handleValueChange() {
        if (this.input) {
          this.invalid = !this.input.checkValidity();
        }
      }
      setTextareaHeight() {
        if (this.input) {
          if (this.resize === "auto") {
            this.input.style.height = "auto";
            this.input.style.height = this.input.scrollHeight + "px";
          } else {
            this.input.style.height = void 0;
          }
        }
      }
      render() {
        return renderFormControl({
          inputId: this.inputId,
          label: this.label,
          labelId: this.labelId,
          hasLabelSlot: this.hasLabelSlot,
          helpTextId: this.helpTextId,
          helpText: this.helpText,
          hasHelpTextSlot: this.hasHelpTextSlot,
          size: this.size
        }, T`
        <div
          part="base"
          class=${e({
      textarea: true,
      "textarea--small": this.size === "small",
      "textarea--medium": this.size === "medium",
      "textarea--large": this.size === "large",
      "textarea--disabled": this.disabled,
      "textarea--focused": this.hasFocus,
      "textarea--empty": this.value.length === 0,
      "textarea--invalid": this.invalid,
      "textarea--resize-none": this.resize === "none",
      "textarea--resize-vertical": this.resize === "vertical",
      "textarea--resize-auto": this.resize === "auto"
    })}
        >
          <textarea
            part="textarea"
            id=${this.inputId}
            class="textarea__control"
            name=${l$1(this.name)}
            .value=${l(this.value)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            placeholder=${l$1(this.placeholder)}
            rows=${l$1(this.rows)}
            minlength=${l$1(this.minlength)}
            maxlength=${l$1(this.maxlength)}
            autocapitalize=${l$1(this.autocapitalize)}
            autocorrect=${l$1(this.autocorrect)}
            ?autofocus=${this.autofocus}
            spellcheck=${l$1(this.spellcheck)}
            inputmode=${l$1(this.inputmode)}
            aria-labelledby=${l$1(getLabelledBy({
      label: this.label,
      labelId: this.labelId,
      hasLabelSlot: this.hasLabelSlot,
      helpText: this.helpText,
      helpTextId: this.helpTextId,
      hasHelpTextSlot: this.hasHelpTextSlot
    }))}
            @change=${this.handleChange}
            @input=${this.handleInput}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          ></textarea>
        </div>
      `);
      }
    };
    SlTextarea.styles = textarea_styles_default;
    __decorateClass([
      o6(".textarea__control")
    ], SlTextarea.prototype, "input", 2);
    __decorateClass([
      r4()
    ], SlTextarea.prototype, "hasFocus", 2);
    __decorateClass([
      r4()
    ], SlTextarea.prototype, "hasHelpTextSlot", 2);
    __decorateClass([
      r4()
    ], SlTextarea.prototype, "hasLabelSlot", 2);
    __decorateClass([
      e4({ reflect: true })
    ], SlTextarea.prototype, "size", 2);
    __decorateClass([
      e4()
    ], SlTextarea.prototype, "name", 2);
    __decorateClass([
      e4()
    ], SlTextarea.prototype, "value", 2);
    __decorateClass([
      e4()
    ], SlTextarea.prototype, "label", 2);
    __decorateClass([
      e4({ attribute: "help-text" })
    ], SlTextarea.prototype, "helpText", 2);
    __decorateClass([
      e4()
    ], SlTextarea.prototype, "placeholder", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlTextarea.prototype, "rows", 2);
    __decorateClass([
      e4()
    ], SlTextarea.prototype, "resize", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlTextarea.prototype, "disabled", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlTextarea.prototype, "readonly", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlTextarea.prototype, "minlength", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlTextarea.prototype, "maxlength", 2);
    __decorateClass([
      e4()
    ], SlTextarea.prototype, "pattern", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlTextarea.prototype, "required", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlTextarea.prototype, "invalid", 2);
    __decorateClass([
      e4()
    ], SlTextarea.prototype, "autocapitalize", 2);
    __decorateClass([
      e4()
    ], SlTextarea.prototype, "autocorrect", 2);
    __decorateClass([
      e4()
    ], SlTextarea.prototype, "autocomplete", 2);
    __decorateClass([
      e4({ type: Boolean })
    ], SlTextarea.prototype, "autofocus", 2);
    __decorateClass([
      e4({ type: Boolean })
    ], SlTextarea.prototype, "spellcheck", 2);
    __decorateClass([
      e4()
    ], SlTextarea.prototype, "inputmode", 2);
    __decorateClass([
      watch("disabled")
    ], SlTextarea.prototype, "handleDisabledChange", 1);
    __decorateClass([
      watch("rows")
    ], SlTextarea.prototype, "handleRowsChange", 1);
    __decorateClass([
      watch("helpText"),
      watch("label")
    ], SlTextarea.prototype, "handleSlotChange", 1);
    __decorateClass([
      watch("value")
    ], SlTextarea.prototype, "handleValueChange", 1);
    SlTextarea = __decorateClass([
      n5("sl-textarea")
    ], SlTextarea);

    // node_modules/@popperjs/core/dist/esm/dom-utils/getBoundingClientRect.js
    function getBoundingClientRect(element) {
      var rect = element.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        x: rect.left,
        y: rect.top
      };
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/getWindow.js
    function getWindow(node) {
      if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
      }
      return node;
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/getWindowScroll.js
    function getWindowScroll(node) {
      var win = getWindow(node);
      var scrollLeft = win.pageXOffset;
      var scrollTop = win.pageYOffset;
      return {
        scrollLeft,
        scrollTop
      };
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/instanceOf.js
    function isElement(node) {
      var OwnElement = getWindow(node).Element;
      return node instanceof OwnElement || node instanceof Element;
    }
    function isHTMLElement(node) {
      var OwnElement = getWindow(node).HTMLElement;
      return node instanceof OwnElement || node instanceof HTMLElement;
    }
    function isShadowRoot(node) {
      if (typeof ShadowRoot === "undefined") {
        return false;
      }
      var OwnElement = getWindow(node).ShadowRoot;
      return node instanceof OwnElement || node instanceof ShadowRoot;
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/getHTMLElementScroll.js
    function getHTMLElementScroll(element) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/getNodeScroll.js
    function getNodeScroll(node) {
      if (node === getWindow(node) || !isHTMLElement(node)) {
        return getWindowScroll(node);
      } else {
        return getHTMLElementScroll(node);
      }
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/getNodeName.js
    function getNodeName(element) {
      return element ? (element.nodeName || "").toLowerCase() : null;
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/getDocumentElement.js
    function getDocumentElement(element) {
      return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/getWindowScrollBarX.js
    function getWindowScrollBarX(element) {
      return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/getComputedStyle.js
    function getComputedStyle$1(element) {
      return getWindow(element).getComputedStyle(element);
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/isScrollParent.js
    function isScrollParent(element) {
      var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
      return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/getCompositeRect.js
    function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
      if (isFixed === void 0) {
        isFixed = false;
      }
      var documentElement = getDocumentElement(offsetParent);
      var rect = getBoundingClientRect(elementOrVirtualElement);
      var isOffsetParentAnElement = isHTMLElement(offsetParent);
      var scroll = {
        scrollLeft: 0,
        scrollTop: 0
      };
      var offsets = {
        x: 0,
        y: 0
      };
      if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) {
          scroll = getNodeScroll(offsetParent);
        }
        if (isHTMLElement(offsetParent)) {
          offsets = getBoundingClientRect(offsetParent);
          offsets.x += offsetParent.clientLeft;
          offsets.y += offsetParent.clientTop;
        } else if (documentElement) {
          offsets.x = getWindowScrollBarX(documentElement);
        }
      }
      return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
      };
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/getLayoutRect.js
    function getLayoutRect(element) {
      return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight
      };
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/getParentNode.js
    function getParentNode(element) {
      if (getNodeName(element) === "html") {
        return element;
      }
      return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/getScrollParent.js
    function getScrollParent(node) {
      if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
        return node.ownerDocument.body;
      }
      if (isHTMLElement(node) && isScrollParent(node)) {
        return node;
      }
      return getScrollParent(getParentNode(node));
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/listScrollParents.js
    function listScrollParents(element, list) {
      var _element$ownerDocumen;
      if (list === void 0) {
        list = [];
      }
      var scrollParent = getScrollParent(element);
      var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
      var win = getWindow(scrollParent);
      var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
      var updatedList = list.concat(target);
      return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/isTableElement.js
    function isTableElement(element) {
      return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/getOffsetParent.js
    function getTrueOffsetParent(element) {
      if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
        return null;
      }
      return element.offsetParent;
    }
    function getContainingBlock(element) {
      var isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
      var currentNode = getParentNode(element);
      while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
        var css = getComputedStyle$1(currentNode);
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].includes(css.willChange) || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
          return currentNode;
        } else {
          currentNode = currentNode.parentNode;
        }
      }
      return null;
    }
    function getOffsetParent(element) {
      var window2 = getWindow(element);
      var offsetParent = getTrueOffsetParent(element);
      while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
        offsetParent = getTrueOffsetParent(offsetParent);
      }
      if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
        return window2;
      }
      return offsetParent || getContainingBlock(element) || window2;
    }

    // node_modules/@popperjs/core/dist/esm/enums.js
    var top = "top";
    var bottom = "bottom";
    var right = "right";
    var left = "left";
    var auto = "auto";
    var basePlacements = [top, bottom, right, left];
    var start = "start";
    var end = "end";
    var clippingParents = "clippingParents";
    var viewport = "viewport";
    var popper = "popper";
    var reference = "reference";
    var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
      return acc.concat([placement + "-" + start, placement + "-" + end]);
    }, []);
    var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
      return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
    }, []);
    var beforeRead = "beforeRead";
    var read = "read";
    var afterRead = "afterRead";
    var beforeMain = "beforeMain";
    var main = "main";
    var afterMain = "afterMain";
    var beforeWrite = "beforeWrite";
    var write = "write";
    var afterWrite = "afterWrite";
    var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

    // node_modules/@popperjs/core/dist/esm/utils/orderModifiers.js
    function order(modifiers) {
      var map = new Map();
      var visited = new Set();
      var result = [];
      modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
      });
      function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
          if (!visited.has(dep)) {
            var depModifier = map.get(dep);
            if (depModifier) {
              sort(depModifier);
            }
          }
        });
        result.push(modifier);
      }
      modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) {
          sort(modifier);
        }
      });
      return result;
    }
    function orderModifiers(modifiers) {
      var orderedModifiers = order(modifiers);
      return modifierPhases.reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
          return modifier.phase === phase;
        }));
      }, []);
    }

    // node_modules/@popperjs/core/dist/esm/utils/debounce.js
    function debounce(fn2) {
      var pending;
      return function() {
        if (!pending) {
          pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
              pending = void 0;
              resolve(fn2());
            });
          });
        }
        return pending;
      };
    }

    // node_modules/@popperjs/core/dist/esm/utils/getBasePlacement.js
    function getBasePlacement(placement) {
      return placement.split("-")[0];
    }

    // node_modules/@popperjs/core/dist/esm/utils/mergeByName.js
    function mergeByName(modifiers) {
      var merged = modifiers.reduce(function(merged2, current) {
        var existing = merged2[current.name];
        merged2[current.name] = existing ? Object.assign({}, existing, current, {
          options: Object.assign({}, existing.options, current.options),
          data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged2;
      }, {});
      return Object.keys(merged).map(function(key) {
        return merged[key];
      });
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/getViewportRect.js
    function getViewportRect(element) {
      var win = getWindow(element);
      var html = getDocumentElement(element);
      var visualViewport = win.visualViewport;
      var width = html.clientWidth;
      var height = html.clientHeight;
      var x = 0;
      var y = 0;
      if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
          x = visualViewport.offsetLeft;
          y = visualViewport.offsetTop;
        }
      }
      return {
        width,
        height,
        x: x + getWindowScrollBarX(element),
        y
      };
    }

    // node_modules/@popperjs/core/dist/esm/utils/math.js
    var max = Math.max;
    var min = Math.min;
    var round = Math.round;

    // node_modules/@popperjs/core/dist/esm/dom-utils/getDocumentRect.js
    function getDocumentRect(element) {
      var _element$ownerDocumen;
      var html = getDocumentElement(element);
      var winScroll = getWindowScroll(element);
      var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
      var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
      var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
      var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
      var y = -winScroll.scrollTop;
      if (getComputedStyle$1(body || html).direction === "rtl") {
        x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
      }
      return {
        width,
        height,
        x,
        y
      };
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/contains.js
    function contains(parent, child) {
      var rootNode = child.getRootNode && child.getRootNode();
      if (parent.contains(child)) {
        return true;
      } else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;
        do {
          if (next && parent.isSameNode(next)) {
            return true;
          }
          next = next.parentNode || next.host;
        } while (next);
      }
      return false;
    }

    // node_modules/@popperjs/core/dist/esm/utils/rectToClientRect.js
    function rectToClientRect(rect) {
      return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
      });
    }

    // node_modules/@popperjs/core/dist/esm/dom-utils/getClippingRect.js
    function getInnerBoundingClientRect(element) {
      var rect = getBoundingClientRect(element);
      rect.top = rect.top + element.clientTop;
      rect.left = rect.left + element.clientLeft;
      rect.bottom = rect.top + element.clientHeight;
      rect.right = rect.left + element.clientWidth;
      rect.width = element.clientWidth;
      rect.height = element.clientHeight;
      rect.x = rect.left;
      rect.y = rect.top;
      return rect;
    }
    function getClientRectFromMixedType(element, clippingParent) {
      return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
    }
    function getClippingParents(element) {
      var clippingParents2 = listScrollParents(getParentNode(element));
      var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
      var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
      if (!isElement(clipperElement)) {
        return [];
      }
      return clippingParents2.filter(function(clippingParent) {
        return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
      });
    }
    function getClippingRect(element, boundary, rootBoundary) {
      var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
      var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
      var firstClippingParent = clippingParents2[0];
      var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent);
        accRect.top = max(rect.top, accRect.top);
        accRect.right = min(rect.right, accRect.right);
        accRect.bottom = min(rect.bottom, accRect.bottom);
        accRect.left = max(rect.left, accRect.left);
        return accRect;
      }, getClientRectFromMixedType(element, firstClippingParent));
      clippingRect.width = clippingRect.right - clippingRect.left;
      clippingRect.height = clippingRect.bottom - clippingRect.top;
      clippingRect.x = clippingRect.left;
      clippingRect.y = clippingRect.top;
      return clippingRect;
    }

    // node_modules/@popperjs/core/dist/esm/utils/getVariation.js
    function getVariation(placement) {
      return placement.split("-")[1];
    }

    // node_modules/@popperjs/core/dist/esm/utils/getMainAxisFromPlacement.js
    function getMainAxisFromPlacement(placement) {
      return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
    }

    // node_modules/@popperjs/core/dist/esm/utils/computeOffsets.js
    function computeOffsets(_ref) {
      var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
      var basePlacement = placement ? getBasePlacement(placement) : null;
      var variation = placement ? getVariation(placement) : null;
      var commonX = reference2.x + reference2.width / 2 - element.width / 2;
      var commonY = reference2.y + reference2.height / 2 - element.height / 2;
      var offsets;
      switch (basePlacement) {
        case top:
          offsets = {
            x: commonX,
            y: reference2.y - element.height
          };
          break;
        case bottom:
          offsets = {
            x: commonX,
            y: reference2.y + reference2.height
          };
          break;
        case right:
          offsets = {
            x: reference2.x + reference2.width,
            y: commonY
          };
          break;
        case left:
          offsets = {
            x: reference2.x - element.width,
            y: commonY
          };
          break;
        default:
          offsets = {
            x: reference2.x,
            y: reference2.y
          };
      }
      var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
      if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch (variation) {
          case start:
            offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
            break;
          case end:
            offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
            break;
        }
      }
      return offsets;
    }

    // node_modules/@popperjs/core/dist/esm/utils/getFreshSideObject.js
    function getFreshSideObject() {
      return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      };
    }

    // node_modules/@popperjs/core/dist/esm/utils/mergePaddingObject.js
    function mergePaddingObject(paddingObject) {
      return Object.assign({}, getFreshSideObject(), paddingObject);
    }

    // node_modules/@popperjs/core/dist/esm/utils/expandToHashMap.js
    function expandToHashMap(value, keys) {
      return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
      }, {});
    }

    // node_modules/@popperjs/core/dist/esm/utils/detectOverflow.js
    function detectOverflow(state, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
      var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      var altContext = elementContext === popper ? reference : popper;
      var referenceElement = state.elements.reference;
      var popperRect = state.rects.popper;
      var element = state.elements[altBoundary ? altContext : elementContext];
      var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
      var referenceClientRect = getBoundingClientRect(referenceElement);
      var popperOffsets2 = computeOffsets({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement
      });
      var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
      var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
      var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
      };
      var offsetData = state.modifiersData.offset;
      if (elementContext === popper && offsetData) {
        var offset2 = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
          var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
          var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
          overflowOffsets[key] += offset2[axis] * multiply;
        });
      }
      return overflowOffsets;
    }

    // node_modules/@popperjs/core/dist/esm/createPopper.js
    var DEFAULT_OPTIONS = {
      placement: "bottom",
      modifiers: [],
      strategy: "absolute"
    };
    function areValidElements() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
      });
    }
    function popperGenerator(generatorOptions) {
      if (generatorOptions === void 0) {
        generatorOptions = {};
      }
      var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
      return function createPopper2(reference2, popper2, options) {
        if (options === void 0) {
          options = defaultOptions;
        }
        var state = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
          modifiersData: {},
          elements: {
            reference: reference2,
            popper: popper2
          },
          attributes: {},
          styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
          state,
          setOptions: function setOptions(options2) {
            cleanupModifierEffects();
            state.options = Object.assign({}, defaultOptions, state.options, options2);
            state.scrollParents = {
              reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
              popper: listScrollParents(popper2)
            };
            var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
            state.orderedModifiers = orderedModifiers.filter(function(m) {
              return m.enabled;
            });
            runModifierEffects();
            return instance.update();
          },
          forceUpdate: function forceUpdate() {
            if (isDestroyed) {
              return;
            }
            var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
            if (!areValidElements(reference3, popper3)) {
              return;
            }
            state.rects = {
              reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
              popper: getLayoutRect(popper3)
            };
            state.reset = false;
            state.placement = state.options.placement;
            state.orderedModifiers.forEach(function(modifier) {
              return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
            });
            for (var index = 0; index < state.orderedModifiers.length; index++) {
              if (state.reset === true) {
                state.reset = false;
                index = -1;
                continue;
              }
              var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
              if (typeof fn2 === "function") {
                state = fn2({
                  state,
                  options: _options,
                  name,
                  instance
                }) || state;
              }
            }
          },
          update: debounce(function() {
            return new Promise(function(resolve) {
              instance.forceUpdate();
              resolve(state);
            });
          }),
          destroy: function destroy() {
            cleanupModifierEffects();
            isDestroyed = true;
          }
        };
        if (!areValidElements(reference2, popper2)) {
          return instance;
        }
        instance.setOptions(options).then(function(state2) {
          if (!isDestroyed && options.onFirstUpdate) {
            options.onFirstUpdate(state2);
          }
        });
        function runModifierEffects() {
          state.orderedModifiers.forEach(function(_ref3) {
            var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect4 = _ref3.effect;
            if (typeof effect4 === "function") {
              var cleanupFn = effect4({
                state,
                name,
                instance,
                options: options2
              });
              var noopFn = function noopFn2() {
              };
              effectCleanupFns.push(cleanupFn || noopFn);
            }
          });
        }
        function cleanupModifierEffects() {
          effectCleanupFns.forEach(function(fn2) {
            return fn2();
          });
          effectCleanupFns = [];
        }
        return instance;
      };
    }

    // node_modules/@popperjs/core/dist/esm/modifiers/eventListeners.js
    var passive = {
      passive: true
    };
    function effect(_ref) {
      var state = _ref.state, instance = _ref.instance, options = _ref.options;
      var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
      var window2 = getWindow(state.elements.popper);
      var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
      if (scroll) {
        scrollParents.forEach(function(scrollParent) {
          scrollParent.addEventListener("scroll", instance.update, passive);
        });
      }
      if (resize) {
        window2.addEventListener("resize", instance.update, passive);
      }
      return function() {
        if (scroll) {
          scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
          });
        }
        if (resize) {
          window2.removeEventListener("resize", instance.update, passive);
        }
      };
    }
    var eventListeners_default = {
      name: "eventListeners",
      enabled: true,
      phase: "write",
      fn: function fn() {
      },
      effect,
      data: {}
    };

    // node_modules/@popperjs/core/dist/esm/modifiers/popperOffsets.js
    function popperOffsets(_ref) {
      var state = _ref.state, name = _ref.name;
      state.modifiersData[name] = computeOffsets({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
      });
    }
    var popperOffsets_default = {
      name: "popperOffsets",
      enabled: true,
      phase: "read",
      fn: popperOffsets,
      data: {}
    };

    // node_modules/@popperjs/core/dist/esm/modifiers/computeStyles.js
    var unsetSides = {
      top: "auto",
      right: "auto",
      bottom: "auto",
      left: "auto"
    };
    function roundOffsetsByDPR(_ref) {
      var x = _ref.x, y = _ref.y;
      var win = window;
      var dpr = win.devicePixelRatio || 1;
      return {
        x: round(round(x * dpr) / dpr) || 0,
        y: round(round(y * dpr) / dpr) || 0
      };
    }
    function mapToStyles(_ref2) {
      var _Object$assign2;
      var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets;
      var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
      var hasX = offsets.hasOwnProperty("x");
      var hasY = offsets.hasOwnProperty("y");
      var sideX = left;
      var sideY = top;
      var win = window;
      if (adaptive) {
        var offsetParent = getOffsetParent(popper2);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === getWindow(popper2)) {
          offsetParent = getDocumentElement(popper2);
          if (getComputedStyle$1(offsetParent).position !== "static") {
            heightProp = "scrollHeight";
            widthProp = "scrollWidth";
          }
        }
        if (placement === top) {
          sideY = bottom;
          y -= offsetParent[heightProp] - popperRect.height;
          y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === left) {
          sideX = right;
          x -= offsetParent[widthProp] - popperRect.width;
          x *= gpuAcceleration ? 1 : -1;
        }
      }
      var commonStyles = Object.assign({
        position
      }, adaptive && unsetSides);
      if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
      }
      return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
    }
    function computeStyles(_ref4) {
      var state = _ref4.state, options = _ref4.options;
      var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
      var commonStyles = {
        placement: getBasePlacement(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration
      };
      if (state.modifiersData.popperOffsets != null) {
        state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.popperOffsets,
          position: state.options.strategy,
          adaptive,
          roundOffsets
        })));
      }
      if (state.modifiersData.arrow != null) {
        state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
          offsets: state.modifiersData.arrow,
          position: "absolute",
          adaptive: false,
          roundOffsets
        })));
      }
      state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
      });
    }
    var computeStyles_default = {
      name: "computeStyles",
      enabled: true,
      phase: "beforeWrite",
      fn: computeStyles,
      data: {}
    };

    // node_modules/@popperjs/core/dist/esm/modifiers/applyStyles.js
    function applyStyles(_ref) {
      var state = _ref.state;
      Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name];
        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name2) {
          var value = attributes[name2];
          if (value === false) {
            element.removeAttribute(name2);
          } else {
            element.setAttribute(name2, value === true ? "" : value);
          }
        });
      });
    }
    function effect2(_ref2) {
      var state = _ref2.state;
      var initialStyles = {
        popper: {
          position: state.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      Object.assign(state.elements.popper.style, initialStyles.popper);
      state.styles = initialStyles;
      if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
      }
      return function() {
        Object.keys(state.elements).forEach(function(name) {
          var element = state.elements[name];
          var attributes = state.attributes[name] || {};
          var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
          var style = styleProperties.reduce(function(style2, property) {
            style2[property] = "";
            return style2;
          }, {});
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function(attribute) {
            element.removeAttribute(attribute);
          });
        });
      };
    }
    var applyStyles_default = {
      name: "applyStyles",
      enabled: true,
      phase: "write",
      fn: applyStyles,
      effect: effect2,
      requires: ["computeStyles"]
    };

    // node_modules/@popperjs/core/dist/esm/modifiers/offset.js
    function distanceAndSkiddingToXY(placement, rects, offset2) {
      var basePlacement = getBasePlacement(placement);
      var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
      var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
        placement
      })) : offset2, skidding = _ref[0], distance = _ref[1];
      skidding = skidding || 0;
      distance = (distance || 0) * invertDistance;
      return [left, right].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
      } : {
        x: skidding,
        y: distance
      };
    }
    function offset(_ref2) {
      var state = _ref2.state, options = _ref2.options, name = _ref2.name;
      var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
      var data = placements.reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
        return acc;
      }, {});
      var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
      if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
      }
      state.modifiersData[name] = data;
    }
    var offset_default = {
      name: "offset",
      enabled: true,
      phase: "main",
      requires: ["popperOffsets"],
      fn: offset
    };

    // node_modules/@popperjs/core/dist/esm/utils/getOppositePlacement.js
    var hash = {
      left: "right",
      right: "left",
      bottom: "top",
      top: "bottom"
    };
    function getOppositePlacement(placement) {
      return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
      });
    }

    // node_modules/@popperjs/core/dist/esm/utils/getOppositeVariationPlacement.js
    var hash2 = {
      start: "end",
      end: "start"
    };
    function getOppositeVariationPlacement(placement) {
      return placement.replace(/start|end/g, function(matched) {
        return hash2[matched];
      });
    }

    // node_modules/@popperjs/core/dist/esm/utils/computeAutoPlacement.js
    function computeAutoPlacement(state, options) {
      if (options === void 0) {
        options = {};
      }
      var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
      var variation = getVariation(placement);
      var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
        return getVariation(placement2) === variation;
      }) : basePlacements;
      var allowedPlacements = placements2.filter(function(placement2) {
        return allowedAutoPlacements.indexOf(placement2) >= 0;
      });
      if (allowedPlacements.length === 0) {
        allowedPlacements = placements2;
      }
      var overflows = allowedPlacements.reduce(function(acc, placement2) {
        acc[placement2] = detectOverflow(state, {
          placement: placement2,
          boundary,
          rootBoundary,
          padding
        })[getBasePlacement(placement2)];
        return acc;
      }, {});
      return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
      });
    }

    // node_modules/@popperjs/core/dist/esm/modifiers/flip.js
    function getExpandedFallbackPlacements(placement) {
      if (getBasePlacement(placement) === auto) {
        return [];
      }
      var oppositePlacement = getOppositePlacement(placement);
      return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
    }
    function flip$1(_ref) {
      var state = _ref.state, options = _ref.options, name = _ref.name;
      if (state.modifiersData[name]._skip) {
        return;
      }
      var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
      var preferredPlacement = state.options.placement;
      var basePlacement = getBasePlacement(preferredPlacement);
      var isBasePlacement = basePlacement === preferredPlacement;
      var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
      var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
        return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
          placement: placement2,
          boundary,
          rootBoundary,
          padding,
          flipVariations,
          allowedAutoPlacements
        }) : placement2);
      }, []);
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var checksMap = new Map();
      var makeFallbackChecks = true;
      var firstFittingPlacement = placements2[0];
      for (var i = 0; i < placements2.length; i++) {
        var placement = placements2[i];
        var _basePlacement = getBasePlacement(placement);
        var isStartVariation = getVariation(placement) === start;
        var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = detectOverflow(state, {
          placement,
          boundary,
          rootBoundary,
          altBoundary,
          padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
        if (referenceRect[len] > popperRect[len]) {
          mainVariationSide = getOppositePlacement(mainVariationSide);
        }
        var altVariationSide = getOppositePlacement(mainVariationSide);
        var checks = [];
        if (checkMainAxis) {
          checks.push(overflow[_basePlacement] <= 0);
        }
        if (checkAltAxis) {
          checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        }
        if (checks.every(function(check) {
          return check;
        })) {
          firstFittingPlacement = placement;
          makeFallbackChecks = false;
          break;
        }
        checksMap.set(placement, checks);
      }
      if (makeFallbackChecks) {
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop2(_i2) {
          var fittingPlacement = placements2.find(function(placement2) {
            var checks2 = checksMap.get(placement2);
            if (checks2) {
              return checks2.slice(0, _i2).every(function(check) {
                return check;
              });
            }
          });
          if (fittingPlacement) {
            firstFittingPlacement = fittingPlacement;
            return "break";
          }
        };
        for (var _i = numberOfChecks; _i > 0; _i--) {
          var _ret = _loop(_i);
          if (_ret === "break")
            break;
        }
      }
      if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
      }
    }
    var flip_default = {
      name: "flip",
      enabled: true,
      phase: "main",
      fn: flip$1,
      requiresIfExists: ["offset"],
      data: {
        _skip: false
      }
    };

    // node_modules/@popperjs/core/dist/esm/utils/getAltAxis.js
    function getAltAxis(axis) {
      return axis === "x" ? "y" : "x";
    }

    // node_modules/@popperjs/core/dist/esm/utils/within.js
    function within(min2, value, max2) {
      return max(min2, min(value, max2));
    }

    // node_modules/@popperjs/core/dist/esm/modifiers/preventOverflow.js
    function preventOverflow(_ref) {
      var state = _ref.state, options = _ref.options, name = _ref.name;
      var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
      var overflow = detectOverflow(state, {
        boundary,
        rootBoundary,
        padding,
        altBoundary
      });
      var basePlacement = getBasePlacement(state.placement);
      var variation = getVariation(state.placement);
      var isBasePlacement = !variation;
      var mainAxis = getMainAxisFromPlacement(basePlacement);
      var altAxis = getAltAxis(mainAxis);
      var popperOffsets2 = state.modifiersData.popperOffsets;
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
      })) : tetherOffset;
      var data = {
        x: 0,
        y: 0
      };
      if (!popperOffsets2) {
        return;
      }
      if (checkMainAxis || checkAltAxis) {
        var mainSide = mainAxis === "y" ? top : left;
        var altSide = mainAxis === "y" ? bottom : right;
        var len = mainAxis === "y" ? "height" : "width";
        var offset2 = popperOffsets2[mainAxis];
        var min2 = popperOffsets2[mainAxis] + overflow[mainSide];
        var max2 = popperOffsets2[mainAxis] - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
          width: 0,
          height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide];
        var arrowLen = within(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
        var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
        var tetherMin = popperOffsets2[mainAxis] + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = popperOffsets2[mainAxis] + maxOffset - offsetModifierValue;
        if (checkMainAxis) {
          var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
          popperOffsets2[mainAxis] = preventedOffset;
          data[mainAxis] = preventedOffset - offset2;
        }
        if (checkAltAxis) {
          var _mainSide = mainAxis === "x" ? top : left;
          var _altSide = mainAxis === "x" ? bottom : right;
          var _offset = popperOffsets2[altAxis];
          var _min = _offset + overflow[_mainSide];
          var _max = _offset - overflow[_altSide];
          var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);
          popperOffsets2[altAxis] = _preventedOffset;
          data[altAxis] = _preventedOffset - _offset;
        }
      }
      state.modifiersData[name] = data;
    }
    var preventOverflow_default = {
      name: "preventOverflow",
      enabled: true,
      phase: "main",
      fn: preventOverflow,
      requiresIfExists: ["offset"]
    };

    // node_modules/@popperjs/core/dist/esm/modifiers/arrow.js
    var toPaddingObject = function toPaddingObject2(padding, state) {
      padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
      })) : padding;
      return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    };
    function arrow(_ref) {
      var _state$modifiersData$;
      var state = _ref.state, name = _ref.name, options = _ref.options;
      var arrowElement = state.elements.arrow;
      var popperOffsets2 = state.modifiersData.popperOffsets;
      var basePlacement = getBasePlacement(state.placement);
      var axis = getMainAxisFromPlacement(basePlacement);
      var isVertical = [left, right].indexOf(basePlacement) >= 0;
      var len = isVertical ? "height" : "width";
      if (!arrowElement || !popperOffsets2) {
        return;
      }
      var paddingObject = toPaddingObject(options.padding, state);
      var arrowRect = getLayoutRect(arrowElement);
      var minProp = axis === "y" ? top : left;
      var maxProp = axis === "y" ? bottom : right;
      var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
      var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
      var arrowOffsetParent = getOffsetParent(arrowElement);
      var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
      var centerToReference = endDiff / 2 - startDiff / 2;
      var min2 = paddingObject[minProp];
      var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
      var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
      var offset2 = within(min2, center, max2);
      var axisProp = axis;
      state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
    }
    function effect3(_ref2) {
      var state = _ref2.state, options = _ref2.options;
      var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
      if (arrowElement == null) {
        return;
      }
      if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) {
          return;
        }
      }
      if (!contains(state.elements.popper, arrowElement)) {
        return;
      }
      state.elements.arrow = arrowElement;
    }
    var arrow_default = {
      name: "arrow",
      enabled: true,
      phase: "main",
      fn: arrow,
      effect: effect3,
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"]
    };

    // node_modules/@popperjs/core/dist/esm/modifiers/hide.js
    function getSideOffsets(overflow, rect, preventedOffsets) {
      if (preventedOffsets === void 0) {
        preventedOffsets = {
          x: 0,
          y: 0
        };
      }
      return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
      };
    }
    function isAnySideFullyClipped(overflow) {
      return [top, right, bottom, left].some(function(side) {
        return overflow[side] >= 0;
      });
    }
    function hide(_ref) {
      var state = _ref.state, name = _ref.name;
      var referenceRect = state.rects.reference;
      var popperRect = state.rects.popper;
      var preventedOffsets = state.modifiersData.preventOverflow;
      var referenceOverflow = detectOverflow(state, {
        elementContext: "reference"
      });
      var popperAltOverflow = detectOverflow(state, {
        altBoundary: true
      });
      var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
      var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
      var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
      var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
      state.modifiersData[name] = {
        referenceClippingOffsets,
        popperEscapeOffsets,
        isReferenceHidden,
        hasPopperEscaped
      };
      state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
      });
    }
    var hide_default = {
      name: "hide",
      enabled: true,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: hide
    };

    // node_modules/@popperjs/core/dist/esm/popper.js
    var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
    var createPopper = /* @__PURE__ */ popperGenerator({
      defaultModifiers
    });

    // src/internal/animate.ts
    function animateTo(el, keyframes, options) {
      return new Promise(async (resolve) => {
        if ((options == null ? void 0 : options.duration) === Infinity) {
          throw new Error("Promise-based animations must be finite.");
        }
        const animation = el.animate(keyframes, __spreadProps(__spreadValues({}, options), {
          duration: prefersReducedMotion() ? 0 : options.duration
        }));
        animation.addEventListener("cancel", resolve, { once: true });
        animation.addEventListener("finish", resolve, { once: true });
      });
    }
    function parseDuration(delay) {
      delay = (delay + "").toLowerCase();
      if (delay.indexOf("ms") > -1) {
        return parseFloat(delay);
      }
      if (delay.indexOf("s") > -1) {
        return parseFloat(delay) * 1e3;
      }
      return parseFloat(delay);
    }
    function prefersReducedMotion() {
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");
      return query == null ? void 0 : query.matches;
    }
    function stopAnimations(el) {
      return Promise.all(el.getAnimations().map((animation) => {
        return new Promise((resolve) => {
          const handleAnimationEvent = requestAnimationFrame(resolve);
          animation.addEventListener("cancel", () => handleAnimationEvent, { once: true });
          animation.addEventListener("finish", () => handleAnimationEvent, { once: true });
          animation.cancel();
        });
      }));
    }
    function shimKeyframesHeightAuto(keyframes, calculatedHeight) {
      return keyframes.map((keyframe) => Object.assign({}, keyframe, {
        height: keyframe.height === "auto" ? `${calculatedHeight}px` : keyframe.height
      }));
    }

    // src/utilities/animation-registry.ts
    var defaultAnimationRegistry = new Map();
    var customAnimationRegistry = new WeakMap();
    function ensureAnimation(animation) {
      return animation != null ? animation : { keyframes: [], options: { duration: 0 } };
    }
    function setDefaultAnimation(animationName, animation) {
      defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
    }
    function getAnimation(el, animationName) {
      const customAnimation = customAnimationRegistry.get(el);
      if (customAnimation && customAnimation[animationName]) {
        return customAnimation[animationName];
      }
      const defaultAnimation = defaultAnimationRegistry.get(animationName);
      if (defaultAnimation) {
        return defaultAnimation;
      }
      return {
        keyframes: [],
        options: { duration: 0 }
      };
    }

    // src/components/tooltip/tooltip.styles.ts
    var tooltip_styles_default = i2$1`
  ${component_styles_default}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip-positioner {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    pointer-events: none;
  }

  .tooltip {
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
  }

  .tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
  }

  .tooltip-positioner[data-popper-placement^='top'] .tooltip {
    transform-origin: bottom;
  }

  .tooltip-positioner[data-popper-placement^='bottom'] .tooltip {
    transform-origin: top;
  }

  .tooltip-positioner[data-popper-placement^='left'] .tooltip {
    transform-origin: right;
  }

  .tooltip-positioner[data-popper-placement^='right'] .tooltip {
    transform-origin: left;
  }

  /* Arrow + bottom */
  .tooltip-positioner[data-popper-placement^='bottom'] .tooltip:after {
    bottom: 100%;
    left: calc(50% - var(--sl-tooltip-arrow-size));
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='bottom-start'] .tooltip:after {
    left: var(--sl-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='bottom-end'] .tooltip:after {
    right: var(--sl-tooltip-arrow-start-end-offset);
    left: auto;
  }

  /* Arrow + top */
  .tooltip-positioner[data-popper-placement^='top'] .tooltip:after {
    top: 100%;
    left: calc(50% - var(--sl-tooltip-arrow-size));
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='top-start'] .tooltip:after {
    left: var(--sl-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='top-end'] .tooltip:after {
    right: var(--sl-tooltip-arrow-start-end-offset);
    left: auto;
  }

  /* Arrow + left */
  .tooltip-positioner[data-popper-placement^='left'] .tooltip:after {
    top: calc(50% - var(--sl-tooltip-arrow-size));
    left: 100%;
    border-left: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-top: var(--sl-tooltip-arrow-size) solid transparent;
    border-bottom: var(--sl-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='left-start'] .tooltip:after {
    top: var(--sl-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='left-end'] .tooltip:after {
    top: auto;
    bottom: var(--sl-tooltip-arrow-start-end-offset);
  }

  /* Arrow + right */
  .tooltip-positioner[data-popper-placement^='right'] .tooltip:after {
    top: calc(50% - var(--sl-tooltip-arrow-size));
    right: 100%;
    border-right: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-top: var(--sl-tooltip-arrow-size) solid transparent;
    border-bottom: var(--sl-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='right-start'] .tooltip:after {
    top: var(--sl-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='right-end'] .tooltip:after {
    top: auto;
    bottom: var(--sl-tooltip-arrow-start-end-offset);
  }
`;

    // src/components/tooltip/tooltip.ts
    var id$b = 0;
    var SlTooltip = class extends h3 {
      constructor() {
        super(...arguments);
        this.componentId = `tooltip-${++id$b}`;
        this.content = "";
        this.placement = "top";
        this.disabled = false;
        this.distance = 10;
        this.open = false;
        this.skidding = 0;
        this.trigger = "hover focus";
      }
      connectedCallback() {
        super.connectedCallback();
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.updateComplete.then(() => {
          this.addEventListener("blur", this.handleBlur, true);
          this.addEventListener("focus", this.handleFocus, true);
          this.addEventListener("click", this.handleClick);
          this.addEventListener("keydown", this.handleKeyDown);
          this.addEventListener("mouseover", this.handleMouseOver);
          this.addEventListener("mouseout", this.handleMouseOut);
          this.target = this.getTarget();
          this.syncOptions();
        });
      }
      firstUpdated() {
        this.tooltip.hidden = !this.open;
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("blur", this.handleBlur, true);
        this.removeEventListener("focus", this.handleFocus, true);
        this.removeEventListener("click", this.handleClick);
        this.removeEventListener("keydown", this.handleKeyDown);
        this.removeEventListener("mouseover", this.handleMouseOver);
        this.removeEventListener("mouseout", this.handleMouseOut);
        if (this.popover) {
          this.popover.destroy();
        }
      }
      async show() {
        if (this.open) {
          return;
        }
        this.open = true;
        return waitForEvent(this, "sl-after-show");
      }
      async hide() {
        if (!this.open) {
          return;
        }
        this.open = false;
        return waitForEvent(this, "sl-after-hide");
      }
      getTarget() {
        const target = [...this.children].find((el) => el.tagName.toLowerCase() !== "style" && el.getAttribute("slot") !== "content");
        if (!target) {
          throw new Error("Invalid tooltip target: no child element was found.");
        }
        return target;
      }
      handleBlur() {
        if (this.hasTrigger("focus")) {
          this.hide();
        }
      }
      handleClick() {
        if (this.hasTrigger("click")) {
          this.open ? this.hide() : this.show();
        }
      }
      handleFocus() {
        if (this.hasTrigger("focus")) {
          this.show();
        }
      }
      handleKeyDown(event) {
        if (this.open && event.key === "Escape") {
          event.stopPropagation();
          this.hide();
        }
      }
      handleMouseOver() {
        if (this.hasTrigger("hover")) {
          const delay = parseDuration(getComputedStyle(this).getPropertyValue("--show-delay"));
          clearTimeout(this.hoverTimeout);
          this.hoverTimeout = setTimeout(() => this.show(), delay);
        }
      }
      handleMouseOut() {
        if (this.hasTrigger("hover")) {
          const delay = parseDuration(getComputedStyle(this).getPropertyValue("--hide-delay"));
          clearTimeout(this.hoverTimeout);
          this.hoverTimeout = setTimeout(() => this.hide(), delay);
        }
      }
      async handleOpenChange() {
        if (this.disabled) {
          return;
        }
        if (this.open) {
          emit(this, "sl-show");
          await stopAnimations(this.tooltip);
          if (this.popover) {
            this.popover.destroy();
          }
          this.popover = createPopper(this.target, this.positioner, {
            placement: this.placement,
            strategy: "absolute",
            modifiers: [
              {
                name: "flip",
                options: {
                  boundary: "viewport"
                }
              },
              {
                name: "offset",
                options: {
                  offset: [this.skidding, this.distance]
                }
              }
            ]
          });
          this.tooltip.hidden = false;
          const { keyframes, options } = getAnimation(this, "tooltip.show");
          await animateTo(this.tooltip, keyframes, options);
          emit(this, "sl-after-show");
        } else {
          emit(this, "sl-hide");
          await stopAnimations(this.tooltip);
          const { keyframes, options } = getAnimation(this, "tooltip.hide");
          await animateTo(this.tooltip, keyframes, options);
          this.tooltip.hidden = true;
          if (this.popover) {
            this.popover.destroy();
          }
          emit(this, "sl-after-hide");
        }
      }
      handleOptionsChange() {
        this.syncOptions();
      }
      handleDisabledChange() {
        if (this.disabled && this.open) {
          this.hide();
        }
      }
      handleSlotChange() {
        const oldTarget = this.target;
        const newTarget = this.getTarget();
        if (newTarget !== oldTarget) {
          if (oldTarget) {
            oldTarget.removeAttribute("aria-describedby");
          }
          newTarget.setAttribute("aria-describedby", this.componentId);
        }
      }
      hasTrigger(triggerType) {
        const triggers = this.trigger.split(" ");
        return triggers.includes(triggerType);
      }
      syncOptions() {
        if (this.popover) {
          this.popover.setOptions({
            placement: this.placement,
            strategy: "absolute",
            modifiers: [
              {
                name: "flip",
                options: {
                  boundary: "viewport"
                }
              },
              {
                name: "offset",
                options: {
                  offset: [this.skidding, this.distance]
                }
              }
            ]
          });
        }
      }
      render() {
        return T`
      <slot @slotchange=${this.handleSlotChange}></slot>

      <div class="tooltip-positioner">
        <div
          part="base"
          id=${this.componentId}
          class=${e({
      tooltip: true,
      "tooltip--open": this.open
    })}
          role="tooltip"
          aria-hidden=${this.open ? "false" : "true"}
        >
          <slot name="content">${this.content}</slot>
        </div>
      </div>
    `;
      }
    };
    SlTooltip.styles = tooltip_styles_default;
    __decorateClass([
      o6(".tooltip-positioner")
    ], SlTooltip.prototype, "positioner", 2);
    __decorateClass([
      o6(".tooltip")
    ], SlTooltip.prototype, "tooltip", 2);
    __decorateClass([
      e4()
    ], SlTooltip.prototype, "content", 2);
    __decorateClass([
      e4()
    ], SlTooltip.prototype, "placement", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlTooltip.prototype, "disabled", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlTooltip.prototype, "distance", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlTooltip.prototype, "open", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlTooltip.prototype, "skidding", 2);
    __decorateClass([
      e4()
    ], SlTooltip.prototype, "trigger", 2);
    __decorateClass([
      watch("open", { waitUntilFirstUpdate: true })
    ], SlTooltip.prototype, "handleOpenChange", 1);
    __decorateClass([
      watch("placement"),
      watch("distance"),
      watch("skidding")
    ], SlTooltip.prototype, "handleOptionsChange", 1);
    __decorateClass([
      watch("disabled")
    ], SlTooltip.prototype, "handleDisabledChange", 1);
    SlTooltip = __decorateClass([
      n5("sl-tooltip")
    ], SlTooltip);
    setDefaultAnimation("tooltip.show", {
      keyframes: [
        { opacity: 0, transform: "scale(0.8)" },
        { opacity: 1, transform: "scale(1)" }
      ],
      options: { duration: 150, easing: "ease" }
    });
    setDefaultAnimation("tooltip.hide", {
      keyframes: [
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0, transform: "scale(0.8)" }
      ],
      options: { duration: 150, easing: "ease" }
    });

    // src/components/relative-time/relative-time.ts
    var SlRelativeTime = class extends h3 {
      constructor() {
        super(...arguments);
        this.isoTime = "";
        this.relativeTime = "";
        this.titleTime = "";
        this.format = "long";
        this.numeric = "auto";
        this.sync = false;
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        clearTimeout(this.updateTimeout);
      }
      updateTime() {
        const now = new Date();
        const date = new Date(this.date);
        if (isNaN(date.getMilliseconds())) {
          this.relativeTime = "";
          this.isoTime = "";
          return;
        }
        const diff = +date - +now;
        const availableUnits = [
          { max: 276e4, value: 6e4, unit: "minute" },
          { max: 72e6, value: 36e5, unit: "hour" },
          { max: 5184e5, value: 864e5, unit: "day" },
          { max: 24192e5, value: 6048e5, unit: "week" },
          { max: 28512e6, value: 2592e6, unit: "month" },
          { max: Infinity, value: 31536e6, unit: "year" }
        ];
        const { unit, value } = availableUnits.find((unit2) => Math.abs(diff) < unit2.max);
        this.isoTime = date.toISOString();
        this.titleTime = new Intl.DateTimeFormat(this.locale, {
          month: "long",
          year: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          timeZoneName: "short"
        }).format(date);
        this.relativeTime = new Intl.RelativeTimeFormat(this.locale, {
          numeric: this.numeric,
          style: this.format
        }).format(Math.round(diff / value), unit);
        clearTimeout(this.updateTimeout);
        if (this.sync) {
          const getTimeUntilNextUnit = (unit2) => {
            const units = { second: 1e3, minute: 6e4, hour: 36e5, day: 864e5 };
            const value2 = units[unit2];
            return value2 - now.getTime() % value2;
          };
          let nextInterval;
          if (unit === "minute") {
            nextInterval = getTimeUntilNextUnit("second");
          } else if (unit === "hour") {
            nextInterval = getTimeUntilNextUnit("minute");
          } else if (unit === "day") {
            nextInterval = getTimeUntilNextUnit("hour");
          } else {
            nextInterval = getTimeUntilNextUnit("day");
          }
          this.updateTimeout = setTimeout(() => this.updateTime(), nextInterval);
        }
      }
      render() {
        return T` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `;
      }
    };
    __decorateClass([
      r4()
    ], SlRelativeTime.prototype, "isoTime", 2);
    __decorateClass([
      r4()
    ], SlRelativeTime.prototype, "relativeTime", 2);
    __decorateClass([
      r4()
    ], SlRelativeTime.prototype, "titleTime", 2);
    __decorateClass([
      e4()
    ], SlRelativeTime.prototype, "date", 2);
    __decorateClass([
      e4()
    ], SlRelativeTime.prototype, "locale", 2);
    __decorateClass([
      e4()
    ], SlRelativeTime.prototype, "format", 2);
    __decorateClass([
      e4()
    ], SlRelativeTime.prototype, "numeric", 2);
    __decorateClass([
      e4({ type: Boolean })
    ], SlRelativeTime.prototype, "sync", 2);
    __decorateClass([
      watch("date"),
      watch("locale"),
      watch("format"),
      watch("numeric"),
      watch("sync")
    ], SlRelativeTime.prototype, "updateTime", 1);
    SlRelativeTime = __decorateClass([
      n5("sl-relative-time")
    ], SlRelativeTime);

    // src/components/resize-observer/resize-observer.styles.ts
    var resize_observer_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: contents;
  }
`;

    // src/components/resize-observer/resize-observer.ts
    var SlResizeObserver = class extends h3 {
      constructor() {
        super(...arguments);
        this.observedElements = [];
      }
      connectedCallback() {
        super.connectedCallback();
        this.resizeObserver = new ResizeObserver((entries) => {
          emit(this, "sl-resize", { detail: { entries } });
        });
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this.resizeObserver.disconnect();
      }
      handleSlotChange() {
        const slot = this.shadowRoot.querySelector("slot");
        const elements = slot.assignedElements({ flatten: true });
        this.observedElements.map((el) => this.resizeObserver.unobserve(el));
        this.observedElements = [];
        elements.map((el) => {
          this.resizeObserver.observe(el);
          this.observedElements.push(el);
        });
      }
      render() {
        return T` <slot @slotchange=${this.handleSlotChange}></slot> `;
      }
    };
    SlResizeObserver.styles = resize_observer_styles_default;
    SlResizeObserver = __decorateClass([
      n5("sl-resize-observer")
    ], SlResizeObserver);

    // src/components/responsive-media/responsive-media.styles.ts
    var responsive_media_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: block;
  }

  .responsive-media {
    position: relative;
  }

  .responsive-media ::slotted(*) {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }

  .responsive-media--cover ::slotted(embed),
  .responsive-media--cover ::slotted(iframe),
  .responsive-media--cover ::slotted(img),
  .responsive-media--cover ::slotted(video) {
    object-fit: cover !important;
  }

  .responsive-media--contain ::slotted(embed),
  .responsive-media--contain ::slotted(iframe),
  .responsive-media--contain ::slotted(img),
  .responsive-media--contain ::slotted(video) {
    object-fit: contain !important;
  }
`;

    // src/components/responsive-media/responsive-media.ts
    var SlResponsiveMedia = class extends h3 {
      constructor() {
        super(...arguments);
        this.aspectRatio = "16:9";
        this.fit = "cover";
      }
      render() {
        const split = this.aspectRatio.split(":");
        const x = parseInt(split[0]);
        const y = parseInt(split[1]);
        const paddingBottom = x && y ? `${y / x * 100}%` : "0";
        return T`
      <div
        class=${e({
      "responsive-media": true,
      "responsive-media--cover": this.fit === "cover",
      "responsive-media--contain": this.fit === "contain"
    })}
        style="padding-bottom: ${paddingBottom}"
      >
        <slot></slot>
      </div>
    `;
      }
    };
    SlResponsiveMedia.styles = responsive_media_styles_default;
    __decorateClass([
      e4({ attribute: "aspect-ratio" })
    ], SlResponsiveMedia.prototype, "aspectRatio", 2);
    __decorateClass([
      e4()
    ], SlResponsiveMedia.prototype, "fit", 2);
    SlResponsiveMedia = __decorateClass([
      n5("sl-responsive-media")
    ], SlResponsiveMedia);

    // src/components/select/select.styles.ts
    var select_styles_default = i2$1`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    --focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);

    display: block;
  }

  .select {
    display: block;
  }

  .select__box {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .select:not(.select--disabled) .select__box:hover {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
    color: var(--sl-input-color-hover);
  }

  .select.select--focused:not(.select--disabled) .select__box {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: var(--focus-ring);
    outline: none;
    color: var(--sl-input-color-focus);
  }

  .select--disabled .select__box {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--disabled .select__tags,
  .select--disabled .select__clear {
    pointer-events: none;
  }

  .select__label {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .select__clear {
    flex: 0 0 auto;
  }

  .select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--sl-transition-medium) transform ease;
  }

  .select--open .select__icon {
    transform: rotate(-180deg);
  }

  /* Placeholder */
  .select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color);
  }

  .select--disabled.select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Tags */
  .select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-left: var(--sl-spacing-xx-small);
  }

  /* Hidden input (for form control validation to show) */
  .select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .select--small .select__box {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
  }

  .select--small .select__label {
    margin: 0 var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-right: var(--sl-input-spacing-small);
  }

  .select--small .select__icon {
    margin-right: var(--sl-input-spacing-small);
  }

  .select--small .select__tags {
    padding-bottom: 2px;
  }

  .select--small .select__tags sl-tag {
    padding-top: 2px;
  }

  .select--small .select__tags sl-tag:not(:last-of-type) {
    margin-right: var(--sl-spacing-xx-small);
  }

  .select--small.select--has-tags .select__label {
    margin-left: 0;
  }

  /* Medium */
  .select--medium .select__box {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
  }

  .select--medium .select__label {
    margin: 0 var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-right: var(--sl-input-spacing-medium);
  }

  .select--medium .select__icon {
    margin-right: var(--sl-input-spacing-medium);
  }

  .select--medium .select__tags {
    padding-bottom: 3px;
  }

  .select--medium .select__tags sl-tag {
    padding-top: 3px;
  }

  .select--medium .select__tags sl-tag:not(:last-of-type) {
    margin-right: var(--sl-spacing-xx-small);
  }

  .select--medium.select--has-tags .select__label {
    margin-left: 0;
  }

  /* Large */
  .select--large .select__box {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
  }

  .select--large .select__label {
    margin: 0 var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-right: var(--sl-input-spacing-large);
  }

  .select--large .select__icon {
    margin-right: var(--sl-input-spacing-large);
  }

  .select--large .select__tags {
    padding-bottom: 4px;
  }
  .select--large .select__tags sl-tag {
    padding-top: 4px;
  }

  .select--large .select__tags sl-tag:not(:last-of-type) {
    margin-right: var(--sl-spacing-xx-small);
  }

  .select--large.select--has-tags .select__label {
    margin-left: 0;
  }

  /*
   * Pill modifier
   */
  .select--pill.select--small .select__box {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__box {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__box {
    border-radius: var(--sl-input-height-large);
  }
`;

    // src/components/select/select.ts
    var id$a = 0;
    var SlSelect = class extends h3 {
      constructor() {
        super(...arguments);
        this.inputId = `select-${++id$a}`;
        this.helpTextId = `select-help-text-${id$a}`;
        this.labelId = `select-label-${id$a}`;
        this.hasFocus = false;
        this.hasHelpTextSlot = false;
        this.hasLabelSlot = false;
        this.isOpen = false;
        this.displayLabel = "";
        this.displayTags = [];
        this.multiple = false;
        this.maxTagsVisible = 3;
        this.disabled = false;
        this.name = "";
        this.placeholder = "";
        this.size = "medium";
        this.hoist = false;
        this.value = "";
        this.pill = false;
        this.required = false;
        this.clearable = false;
        this.invalid = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.handleSlotChange = this.handleSlotChange.bind(this);
        this.resizeObserver = new ResizeObserver(() => this.resizeMenu());
        this.updateComplete.then(() => {
          this.resizeObserver.observe(this);
          this.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
          this.syncItemsFromValue();
        });
      }
      firstUpdated() {
        this.invalid = !this.input.checkValidity();
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this.resizeObserver.unobserve(this);
        this.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
      }
      reportValidity() {
        return this.input.reportValidity();
      }
      setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
      }
      getItemLabel(item) {
        const slot = item.shadowRoot.querySelector("slot:not([name])");
        return getTextContent(slot);
      }
      getItems() {
        return [...this.querySelectorAll("sl-menu-item")];
      }
      getValueAsArray() {
        if (this.multiple && this.value === "") {
          return [];
        }
        return Array.isArray(this.value) ? this.value : [this.value];
      }
      handleBlur() {
        if (!this.isOpen) {
          this.hasFocus = false;
          emit(this, "sl-blur");
        }
      }
      handleClearClick(event) {
        event.stopPropagation();
        this.value = this.multiple ? [] : "";
        emit(this, "sl-clear");
        this.syncItemsFromValue();
      }
      handleDisabledChange() {
        if (this.disabled && this.isOpen) {
          this.dropdown.hide();
        }
        if (this.input) {
          this.input.disabled = this.disabled;
          this.invalid = !this.input.checkValidity();
        }
      }
      handleFocus() {
        if (!this.hasFocus) {
          this.hasFocus = true;
          emit(this, "sl-focus");
        }
      }
      handleKeyDown(event) {
        const target = event.target;
        const items = this.getItems();
        const firstItem = items[0];
        const lastItem = items[items.length - 1];
        if (target.tagName.toLowerCase() === "sl-tag") {
          return;
        }
        if (event.key === "Tab") {
          if (this.isOpen) {
            this.dropdown.hide();
          }
          return;
        }
        if (["ArrowDown", "ArrowUp"].includes(event.key)) {
          event.preventDefault();
          if (!this.isOpen) {
            this.dropdown.show();
          }
          if (event.key === "ArrowDown" && firstItem) {
            this.menu.setCurrentItem(firstItem);
            firstItem.focus();
            return;
          }
          if (event.key === "ArrowUp" && lastItem) {
            this.menu.setCurrentItem(lastItem);
            lastItem.focus();
            return;
          }
        }
        if (!this.isOpen && event.key.length === 1) {
          event.stopPropagation();
          event.preventDefault();
          this.dropdown.show();
          this.menu.typeToSelect(event.key);
        }
      }
      handleLabelClick() {
        var _a;
        const box = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".select__box");
        box.focus();
      }
      handleMenuSelect(event) {
        const item = event.detail.item;
        if (this.multiple) {
          this.value = this.value.includes(item.value) ? this.value.filter((v) => v !== item.value) : [...this.value, item.value];
        } else {
          this.value = item.value;
        }
        this.syncItemsFromValue();
      }
      handleMenuShow() {
        this.resizeMenu();
        this.isOpen = true;
      }
      handleMenuHide() {
        this.isOpen = false;
        this.box.focus();
      }
      handleMultipleChange() {
        const value = this.getValueAsArray();
        this.value = this.multiple ? value : value[0] || "";
        this.syncItemsFromValue();
      }
      async handleSlotChange() {
        this.hasHelpTextSlot = hasSlot(this, "help-text");
        this.hasLabelSlot = hasSlot(this, "label");
        const items = this.getItems();
        await Promise.all(items.map((item) => item.render)).then(() => this.syncItemsFromValue());
      }
      handleTagInteraction(event) {
        const path = event.composedPath();
        const clearButton = path.find((el) => {
          if (el instanceof HTMLElement) {
            const element = el;
            return element.classList.contains("tag__clear");
          }
          return false;
        });
        if (clearButton) {
          event.stopPropagation();
        }
      }
      async handleValueChange() {
        this.syncItemsFromValue();
        await this.updateComplete;
        this.invalid = !this.input.checkValidity();
        emit(this, "sl-change");
      }
      resizeMenu() {
        var _a;
        const box = (_a = this.shadowRoot) == null ? void 0 : _a.querySelector(".select__box");
        this.menu.style.width = `${box.clientWidth}px`;
        if (this.dropdown) {
          this.dropdown.reposition();
        }
      }
      syncItemsFromValue() {
        const items = this.getItems();
        const value = this.getValueAsArray();
        items.map((item) => item.checked = value.includes(item.value));
        if (this.multiple) {
          const checkedItems = items.filter((item) => value.includes(item.value));
          this.displayLabel = checkedItems[0] ? this.getItemLabel(checkedItems[0]) : "";
          this.displayTags = checkedItems.map((item) => {
            return T`
          <sl-tag
            exportparts="base:tag"
            type="info"
            size=${this.size}
            ?pill=${this.pill}
            clearable
            @click=${this.handleTagInteraction}
            @keydown=${this.handleTagInteraction}
            @sl-clear=${(event) => {
          event.stopPropagation();
          if (!this.disabled) {
            item.checked = false;
            this.syncValueFromItems();
          }
        }}
          >
            ${this.getItemLabel(item)}
          </sl-tag>
        `;
          });
          if (this.maxTagsVisible > 0 && this.displayTags.length > this.maxTagsVisible) {
            const total = this.displayTags.length;
            this.displayLabel = "";
            this.displayTags = this.displayTags.slice(0, this.maxTagsVisible);
            this.displayTags.push(T`
          <sl-tag exportparts="base:tag" type="info" size=${this.size}> +${total - this.maxTagsVisible} </sl-tag>
        `);
          }
        } else {
          const checkedItem = items.filter((item) => item.value === value[0])[0];
          this.displayLabel = checkedItem ? this.getItemLabel(checkedItem) : "";
          this.displayTags = [];
        }
      }
      syncValueFromItems() {
        const items = this.getItems();
        const checkedItems = items.filter((item) => item.checked);
        const checkedValues = checkedItems.map((item) => item.value);
        if (this.multiple) {
          this.value = this.value.filter((val) => checkedValues.includes(val));
        } else {
          this.value = checkedValues.length > 0 ? checkedValues[0] : "";
        }
      }
      render() {
        var _a;
        const hasSelection = this.multiple ? this.value.length > 0 : this.value !== "";
        return renderFormControl({
          inputId: this.inputId,
          label: this.label,
          labelId: this.labelId,
          hasLabelSlot: this.hasLabelSlot,
          helpTextId: this.helpTextId,
          helpText: this.helpText,
          hasHelpTextSlot: this.hasHelpTextSlot,
          size: this.size,
          onLabelClick: () => this.handleLabelClick()
        }, T`
        <sl-dropdown
          part="base"
          .hoist=${this.hoist}
          .stayOpenOnSelect=${this.multiple}
          .containingElement=${this}
          ?disabled=${this.disabled}
          class=${e({
      select: true,
      "select--open": this.isOpen,
      "select--empty": ((_a = this.value) == null ? void 0 : _a.length) === 0,
      "select--focused": this.hasFocus,
      "select--clearable": this.clearable,
      "select--disabled": this.disabled,
      "select--multiple": this.multiple,
      "select--has-tags": this.multiple && this.displayTags.length > 0,
      "select--placeholder-visible": this.displayLabel === "",
      "select--small": this.size === "small",
      "select--medium": this.size === "medium",
      "select--large": this.size === "large",
      "select--pill": this.pill,
      "select--invalid": this.invalid
    })}
          @sl-show=${this.handleMenuShow}
          @sl-hide=${this.handleMenuHide}
        >
          <div
            slot="trigger"
            id=${this.inputId}
            class="select__box"
            role="combobox"
            aria-labelledby=${l$1(getLabelledBy({
      label: this.label,
      labelId: this.labelId,
      hasLabelSlot: this.hasLabelSlot,
      helpText: this.helpText,
      helpTextId: this.helpTextId,
      hasHelpTextSlot: this.hasHelpTextSlot
    }))}
            aria-haspopup="true"
            aria-expanded=${this.isOpen ? "true" : "false"}
            tabindex=${this.disabled ? "-1" : "0"}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          >
            <div class="select__label">
              ${this.displayTags.length ? T` <span part="tags" class="select__tags"> ${this.displayTags} </span> ` : this.displayLabel || this.placeholder}
            </div>

            ${this.clearable && hasSelection ? T`
                  <sl-icon-button
                    exportparts="base:clear-button"
                    class="select__clear"
                    name="x-circle"
                    library="system"
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  ></sl-icon-button>
                ` : ""}

            <span part="icon" class="select__icon" aria-hidden="true">
              <sl-icon name="chevron-down" library="system"></sl-icon>
            </span>

            <!-- The hidden input tricks the browser's built-in validation so it works as expected. We use an input
            instead of a select because, otherwise, iOS will show a list of options during validation. -->
            <input
              class="select__hidden-select"
              aria-hidden="true"
              ?required=${this.required}
              .value=${hasSelection ? "1" : ""}
              tabindex="-1"
            />
          </div>

          <sl-menu part="menu" class="select__menu" @sl-select=${this.handleMenuSelect}>
            <slot @slotchange=${this.handleSlotChange}></slot>
          </sl-menu>
        </sl-dropdown>
      `);
      }
    };
    SlSelect.styles = select_styles_default;
    __decorateClass([
      o6(".select")
    ], SlSelect.prototype, "dropdown", 2);
    __decorateClass([
      o6(".select__box")
    ], SlSelect.prototype, "box", 2);
    __decorateClass([
      o6(".select__hidden-select")
    ], SlSelect.prototype, "input", 2);
    __decorateClass([
      o6(".select__menu")
    ], SlSelect.prototype, "menu", 2);
    __decorateClass([
      r4()
    ], SlSelect.prototype, "hasFocus", 2);
    __decorateClass([
      r4()
    ], SlSelect.prototype, "hasHelpTextSlot", 2);
    __decorateClass([
      r4()
    ], SlSelect.prototype, "hasLabelSlot", 2);
    __decorateClass([
      r4()
    ], SlSelect.prototype, "isOpen", 2);
    __decorateClass([
      r4()
    ], SlSelect.prototype, "displayLabel", 2);
    __decorateClass([
      r4()
    ], SlSelect.prototype, "displayTags", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlSelect.prototype, "multiple", 2);
    __decorateClass([
      e4({ attribute: "max-tags-visible", type: Number })
    ], SlSelect.prototype, "maxTagsVisible", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlSelect.prototype, "disabled", 2);
    __decorateClass([
      e4()
    ], SlSelect.prototype, "name", 2);
    __decorateClass([
      e4()
    ], SlSelect.prototype, "placeholder", 2);
    __decorateClass([
      e4()
    ], SlSelect.prototype, "size", 2);
    __decorateClass([
      e4({ type: Boolean })
    ], SlSelect.prototype, "hoist", 2);
    __decorateClass([
      e4()
    ], SlSelect.prototype, "value", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlSelect.prototype, "pill", 2);
    __decorateClass([
      e4()
    ], SlSelect.prototype, "label", 2);
    __decorateClass([
      e4({ attribute: "help-text" })
    ], SlSelect.prototype, "helpText", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlSelect.prototype, "required", 2);
    __decorateClass([
      e4({ type: Boolean })
    ], SlSelect.prototype, "clearable", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlSelect.prototype, "invalid", 2);
    __decorateClass([
      watch("disabled")
    ], SlSelect.prototype, "handleDisabledChange", 1);
    __decorateClass([
      watch("multiple")
    ], SlSelect.prototype, "handleMultipleChange", 1);
    __decorateClass([
      watch("helpText"),
      watch("label")
    ], SlSelect.prototype, "handleSlotChange", 1);
    __decorateClass([
      watch("value", { waitUntilFirstUpdate: true })
    ], SlSelect.prototype, "handleValueChange", 1);
    SlSelect = __decorateClass([
      n5("sl-select")
    ], SlSelect);

    // src/components/tag/tag.styles.ts
    var tag_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__clear::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Type modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-700);
  }

  .tag--success {
    background-color: var(--sl-color-success-100);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-700);
  }

  .tag--info {
    background-color: var(--sl-color-info-100);
    border-color: var(--sl-color-info-200);
    color: var(--sl-color-info-700);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-100);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-700);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-100);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-700);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--small .tag__clear {
    margin-left: var(--sl-spacing-xx-small);
    margin-right: calc(-1 * var(--sl-spacing-xxx-small));
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag__clear {
    margin-left: var(--sl-spacing-xx-small);
    margin-right: calc(-1 * var(--sl-spacing-xx-small));
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__clear {
    margin-left: var(--sl-spacing-xx-small);
    margin-right: calc(-1 * var(--sl-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;

    // src/components/tag/tag.ts
    var SlTag = class extends h3 {
      constructor() {
        super(...arguments);
        this.type = "primary";
        this.size = "medium";
        this.pill = false;
        this.clearable = false;
      }
      handleClearClick() {
        emit(this, "sl-clear");
      }
      render() {
        return T`
      <span
        part="base"
        class=${e({
      tag: true,
      "tag--primary": this.type === "primary",
      "tag--success": this.type === "success",
      "tag--info": this.type === "info",
      "tag--warning": this.type === "warning",
      "tag--danger": this.type === "danger",
      "tag--text": this.type === "text",
      "tag--small": this.size === "small",
      "tag--medium": this.size === "medium",
      "tag--large": this.size === "large",
      "tag--pill": this.pill,
      "tag--clearable": this.clearable
    })}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.clearable ? T`
              <sl-icon-button
                exportparts="base:clear-button"
                name="x"
                library="system"
                class="tag__clear"
                @click=${this.handleClearClick}
              ></sl-icon-button>
            ` : ""}
      </span>
    `;
      }
    };
    SlTag.styles = tag_styles_default;
    __decorateClass([
      e4({ reflect: true })
    ], SlTag.prototype, "type", 2);
    __decorateClass([
      e4({ reflect: true })
    ], SlTag.prototype, "size", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlTag.prototype, "pill", 2);
    __decorateClass([
      e4({ type: Boolean })
    ], SlTag.prototype, "clearable", 2);
    SlTag = __decorateClass([
      n5("sl-tag")
    ], SlTag);

    // src/components/skeleton/skeleton.styles.ts
    var skeleton_styles_default = i2$1`
  ${component_styles_default}

  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-gray-200);
    --sheen-color: var(--sl-color-gray-100);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;

    // src/components/skeleton/skeleton.ts
    var SlSkeleton = class extends h3 {
      constructor() {
        super(...arguments);
        this.effect = "sheen";
      }
      render() {
        return T`
      <div
        part="base"
        class=${e({
      skeleton: true,
      "skeleton--pulse": this.effect === "pulse",
      "skeleton--sheen": this.effect === "sheen"
    })}
        aria-busy="true"
        aria-live="polite"
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `;
      }
    };
    SlSkeleton.styles = skeleton_styles_default;
    __decorateClass([
      e4()
    ], SlSkeleton.prototype, "effect", 2);
    SlSkeleton = __decorateClass([
      n5("sl-skeleton")
    ], SlSkeleton);

    // src/components/switch/switch.styles.ts
    var switch_styles_default = i2$1`
  ${component_styles_default}

  :host {
    --height: var(--sl-toggle-size);
    --thumb-size: calc(var(--sl-toggle-size) + 4px);
    --width: calc(var(--height) * 2);

    display: inline-block;
  }

  .switch {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-gray-300);
    border: solid var(--sl-input-border-width) var(--sl-color-gray-300);
    border-radius: var(--height);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-white);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    transform: translateX(calc(var(--width) / -2 + var(--thumb-size) / 2 - (var(--thumb-size) - var(--height)) / 2));
    transition: var(--sl-transition-fast) transform ease, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color, var(--sl-transition-fast) box-shadow;
  }

  .switch__control input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-gray-200);
    border-color: var(--sl-color-gray-200);
  }
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-white);
    border-color: var(--sl-input-border-color);
  }

  /* Focus */
  .switch.switch--focused:not(.switch--checked):not(.switch--disabled) .switch__control {
    background-color: var(--sl-color-gray-200);
    border-color: var(--sl-color-gray-200);
  }

  .switch.switch--focused:not(.switch--checked):not(.switch--disabled) .switch__control .switch__thumb {
    background-color: var(--sl-color-white);
    border-color: var(--sl-color-primary-500);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }
  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-white);
    border-color: var(--sl-color-primary-500);
    transform: translateX(calc(var(--width) / 2 - var(--thumb-size) / 2 + (var(--thumb-size) - var(--height)) / 2));
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-400);
    border-color: var(--sl-color-primary-400);
  }
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-white);
    border-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled).switch--focused .switch__control {
    background-color: var(--sl-color-primary-400);
    border-color: var(--sl-color-primary-400);
  }

  .switch.switch--checked:not(.switch--disabled).switch--focused .switch__control .switch__thumb {
    background-color: var(--sl-color-white);
    border-color: var(--sl-color-primary-500);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    line-height: var(--height);
    margin-left: 0.5em;
    user-select: none;
  }
`;

    // src/components/switch/switch.ts
    var id$9 = 0;
    var SlSwitch = class extends h3 {
      constructor() {
        super(...arguments);
        this.switchId = `switch-${++id$9}`;
        this.labelId = `switch-label-${id$9}`;
        this.hasFocus = false;
        this.disabled = false;
        this.required = false;
        this.checked = false;
        this.invalid = false;
      }
      firstUpdated() {
        this.invalid = !this.input.checkValidity();
      }
      click() {
        this.input.click();
      }
      focus(options) {
        this.input.focus(options);
      }
      blur() {
        this.input.blur();
      }
      reportValidity() {
        return this.input.reportValidity();
      }
      setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
      }
      handleBlur() {
        this.hasFocus = false;
        emit(this, "sl-blur");
      }
      handleCheckedChange() {
        if (this.input) {
          this.input.checked = this.checked;
          this.invalid = !this.input.checkValidity();
          emit(this, "sl-change");
        }
      }
      handleClick() {
        this.checked = !this.checked;
      }
      handleDisabledChange() {
        if (this.input) {
          this.input.disabled = this.disabled;
          this.invalid = !this.input.checkValidity();
        }
      }
      handleFocus() {
        this.hasFocus = true;
        emit(this, "sl-focus");
      }
      handleKeyDown(event) {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          this.checked = false;
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          this.checked = true;
        }
      }
      handleMouseDown(event) {
        event.preventDefault();
        this.input.focus();
      }
      render() {
        return T`
      <label
        part="base"
        for=${this.switchId}
        class=${e({
      switch: true,
      "switch--checked": this.checked,
      "switch--disabled": this.disabled,
      "switch--focused": this.hasFocus
    })}
        @mousedown=${this.handleMouseDown}
      >
        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>

          <input
            id=${this.switchId}
            type="checkbox"
            name=${l$1(this.name)}
            value=${l$1(this.value)}
            .checked=${l(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? "true" : "false"}
            aria-labelledby=${this.labelId}
            @click=${this.handleClick}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />
        </span>

        <span part="label" id=${this.labelId} class="switch__label">
          <slot></slot>
        </span>
      </label>
    `;
      }
    };
    SlSwitch.styles = switch_styles_default;
    __decorateClass([
      o6('input[type="checkbox"]')
    ], SlSwitch.prototype, "input", 2);
    __decorateClass([
      r4()
    ], SlSwitch.prototype, "hasFocus", 2);
    __decorateClass([
      e4()
    ], SlSwitch.prototype, "name", 2);
    __decorateClass([
      e4()
    ], SlSwitch.prototype, "value", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlSwitch.prototype, "disabled", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlSwitch.prototype, "required", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlSwitch.prototype, "checked", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlSwitch.prototype, "invalid", 2);
    __decorateClass([
      watch("checked")
    ], SlSwitch.prototype, "handleCheckedChange", 1);
    __decorateClass([
      watch("disabled")
    ], SlSwitch.prototype, "handleDisabledChange", 1);
    SlSwitch = __decorateClass([
      n5("sl-switch")
    ], SlSwitch);

    // src/components/tab/tab.styles.ts
    var tab_styles_default = i2$1`
  ${component_styles_default}

  :host {
    --focus-ring: inset 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);

    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: 4px;
    color: var(--sl-color-gray-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    cursor: pointer;
    transition: var(--transition-speed) box-shadow, var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-500);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus:not(.tab--disabled) {
    color: var(--sl-color-primary-500);
    box-shadow: var(--focus-ring);
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-500);
  }

  .tab.tab--closable {
    padding-right: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-large);
    margin-left: var(--sl-spacing-xx-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-xxx-small);
  }
`;

    // src/components/tab/tab.ts
    var id$8 = 0;
    var SlTab = class extends h3 {
      constructor() {
        super(...arguments);
        this.componentId = `tab-${++id$8}`;
        this.panel = "";
        this.active = false;
        this.closable = false;
        this.disabled = false;
      }
      focus(options) {
        this.tab.focus(options);
      }
      blur() {
        this.tab.blur();
      }
      handleCloseClick() {
        emit(this, "sl-close");
      }
      render() {
        this.id = this.id || this.componentId;
        return T`
      <div
        part="base"
        class=${e({
      tab: true,
      "tab--active": this.active,
      "tab--closable": this.closable,
      "tab--disabled": this.disabled
    })}
        role="tab"
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-selected=${this.active ? "true" : "false"}
        tabindex=${this.disabled || !this.active ? "-1" : "0"}
      >
        <slot></slot>
        ${this.closable ? T`
              <sl-icon-button
                name="x"
                library="system"
                exportparts="base:close-button"
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
                aria-hidden="true"
              ></sl-icon-button>
            ` : ""}
      </div>
    `;
      }
    };
    SlTab.styles = tab_styles_default;
    __decorateClass([
      o6(".tab")
    ], SlTab.prototype, "tab", 2);
    __decorateClass([
      e4()
    ], SlTab.prototype, "panel", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlTab.prototype, "active", 2);
    __decorateClass([
      e4({ type: Boolean })
    ], SlTab.prototype, "closable", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlTab.prototype, "disabled", 2);
    SlTab = __decorateClass([
      n5("sl-tab")
    ], SlTab);

    // src/components/menu-label/menu-label.styles.ts
    var menu_label_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu-label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-gray-400);
    padding: var(--sl-spacing-xx-small) var(--sl-spacing-x-large);
    user-select: none;
  }
`;

    // src/components/menu-label/menu-label.ts
    var SlMenuLabel = class extends h3 {
      render() {
        return T`
      <div part="base" class="menu-label">
        <slot></slot>
      </div>
    `;
      }
    };
    SlMenuLabel.styles = menu_label_styles_default;
    SlMenuLabel = __decorateClass([
      n5("sl-menu-label")
    ], SlMenuLabel);

    // node_modules/lit-html/directives/style-map.js
    var i2 = i$1(class extends s$1 {
      constructor(t2) {
        var e;
        if (super(t2), t2.type !== t$1.ATTRIBUTE || t2.name !== "style" || ((e = t2.strings) === null || e === void 0 ? void 0 : e.length) > 2)
          throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
      }
      render(t2) {
        return Object.keys(t2).reduce((e, r) => {
          const s2 = t2[r];
          return s2 == null ? e : e + `${r = r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s2};`;
        }, "");
      }
      update(e, [r]) {
        const { style: s2 } = e.element;
        if (this.St === void 0) {
          this.St = new Set();
          for (const t2 in r)
            this.St.add(t2);
          return this.render(r);
        }
        this.St.forEach((t2) => {
          r[t2] == null && (this.St.delete(t2), t2.includes("-") ? s2.removeProperty(t2) : s2[t2] = "");
        });
        for (const t2 in r) {
          const e2 = r[t2];
          e2 != null && (this.St.add(t2), t2.includes("-") ? s2.setProperty(t2, e2) : s2[t2] = e2);
        }
        return w;
      }
    });
    /**
     * @license
     * Copyright 2018 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */

    // src/components/progress-bar/progress-bar.styles.ts
    var progress_bar_styles_default = i2$1`
  ${component_styles_default}

  :host {
    --height: 16px;
    --track-color: var(--sl-color-gray-200);
    --indicator-color: var(--sl-color-primary-500);
    --label-color: var(--sl-color-white);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }
`;

    // src/components/progress-bar/progress-bar.ts
    var SlProgressBar = class extends h3 {
      constructor() {
        super(...arguments);
        this.percentage = 0;
        this.indeterminate = false;
      }
      render() {
        return T`
      <div
        part="base"
        class=${e({
      "progress-bar": true,
      "progress-bar--indeterminate": this.indeterminate
    })}
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.indeterminate ? "" : this.percentage}"
      >
        <div part="indicator" class="progress-bar__indicator" style=${i2({ width: this.percentage + "%" })}>
          ${!this.indeterminate ? T`
                <span part="label" class="progress-bar__label">
                  <slot></slot>
                </span>
              ` : ""}
        </div>
      </div>
    `;
      }
    };
    SlProgressBar.styles = progress_bar_styles_default;
    __decorateClass([
      e4({ type: Number, reflect: true })
    ], SlProgressBar.prototype, "percentage", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlProgressBar.prototype, "indeterminate", 2);
    SlProgressBar = __decorateClass([
      n5("sl-progress-bar")
    ], SlProgressBar);

    // src/components/progress-ring/progress-ring.styles.ts
    var progress_ring_styles_default = i2$1`
  ${component_styles_default}

  :host {
    --track-color: var(--sl-color-gray-200);
    --indicator-color: var(--sl-color-primary-500);

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
  }

  .progress-ring__track {
    stroke: var(--track-color);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    transition: 0.35s stroke-dashoffset, 0.35s stroke;
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
  }
`;

    // src/components/progress-ring/progress-ring.ts
    var SlProgressRing = class extends h3 {
      constructor() {
        super(...arguments);
        this.size = 128;
        this.strokeWidth = 4;
      }
      firstUpdated() {
        this.updateProgress();
      }
      updateProgress() {
        const radius = this.indicator.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - this.percentage / 100 * circumference;
        this.indicator.style.strokeDasharray = `${circumference} ${circumference}`;
        this.indicator.style.strokeDashoffset = `${offset}`;
      }
      render() {
        return T`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.percentage}"
      >
        <svg class="progress-ring__image" width=${this.size} height=${this.size}>
          <circle
            class="progress-ring__track"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            fill="transparent"
            r=${this.size / 2 - this.strokeWidth * 2}
            cx=${this.size / 2}
            cy=${this.size / 2}
          ></circle>

          <circle
            class="progress-ring__indicator"
            stroke-width="${this.strokeWidth}"
            stroke-linecap="round"
            fill="transparent"
            r=${this.size / 2 - this.strokeWidth * 2}
            cx=${this.size / 2}
            cy=${this.size / 2}
          ></circle>
        </svg>

        <span part="label" class="progress-ring__label">
          <slot></slot>
        </span>
      </div>
    `;
      }
    };
    SlProgressRing.styles = progress_ring_styles_default;
    __decorateClass([
      o6(".progress-ring__indicator")
    ], SlProgressRing.prototype, "indicator", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlProgressRing.prototype, "size", 2);
    __decorateClass([
      e4({ attribute: "stroke-width", type: Number })
    ], SlProgressRing.prototype, "strokeWidth", 2);
    __decorateClass([
      e4({ type: Number, reflect: true })
    ], SlProgressRing.prototype, "percentage", 2);
    __decorateClass([
      watch("percentage", { waitUntilFirstUpdate: true })
    ], SlProgressRing.prototype, "updateProgress", 1);
    SlProgressRing = __decorateClass([
      n5("sl-progress-ring")
    ], SlProgressRing);

    var G = null;
    var H = class {
    };
    H.render = function(w, B) {
      G(w, B);
    };
    self.QrCreator = H;
    (function(w) {
      function B(t, c, a, e2) {
        var b = {}, h2 = w(a, c);
        h2.u(t);
        h2.J();
        e2 = e2 || 0;
        var r = h2.h(), d = h2.h() + 2 * e2;
        b.text = t;
        b.level = c;
        b.version = a;
        b.O = d;
        b.a = function(b2, a2) {
          b2 -= e2;
          a2 -= e2;
          return 0 > b2 || b2 >= r || 0 > a2 || a2 >= r ? false : h2.a(b2, a2);
        };
        return b;
      }
      function C(t, c, a, e2, b, h2, r, d, g, x) {
        function u(b2, a2, f, c2, d2, r2, g2) {
          b2 ? (t.lineTo(a2 + r2, f + g2), t.arcTo(a2, f, c2, d2, h2)) : t.lineTo(a2, f);
        }
        r ? t.moveTo(c + h2, a) : t.moveTo(c, a);
        u(d, e2, a, e2, b, -h2, 0);
        u(g, e2, b, c, b, 0, -h2);
        u(x, c, b, c, a, h2, 0);
        u(r, c, a, e2, a, 0, h2);
      }
      function z(t, c, a, e2, b, h2, r, d, g, x) {
        function u(b2, a2, c2, d2) {
          t.moveTo(b2 + c2, a2);
          t.lineTo(b2, a2);
          t.lineTo(b2, a2 + d2);
          t.arcTo(b2, a2, b2 + c2, a2, h2);
        }
        r && u(c, a, h2, h2);
        d && u(e2, a, -h2, h2);
        g && u(e2, b, -h2, -h2);
        x && u(c, b, h2, -h2);
      }
      function A(t, c) {
        var a = c.fill;
        if (typeof a === "string")
          t.fillStyle = a;
        else {
          var e2 = a.type, b = a.colorStops;
          a = a.position.map((b2) => Math.round(b2 * c.size));
          if (e2 === "linear-gradient")
            var h2 = t.createLinearGradient.apply(t, a);
          else if (e2 === "radial-gradient")
            h2 = t.createRadialGradient.apply(t, a);
          else
            throw Error("Unsupported fill");
          b.forEach(([b2, a2]) => {
            h2.addColorStop(b2, a2);
          });
          t.fillStyle = h2;
        }
      }
      function y(t, c) {
        a: {
          var a = c.text, e2 = c.v, b = c.N, h2 = c.K, r = c.P;
          b = Math.max(1, b || 1);
          for (h2 = Math.min(40, h2 || 40); b <= h2; b += 1)
            try {
              var d = B(a, e2, b, r);
              break a;
            } catch (J) {
            }
          d = void 0;
        }
        if (!d)
          return null;
        a = t.getContext("2d");
        c.background && (a.fillStyle = c.background, a.fillRect(c.left, c.top, c.size, c.size));
        e2 = d.O;
        h2 = c.size / e2;
        a.beginPath();
        for (r = 0; r < e2; r += 1)
          for (b = 0; b < e2; b += 1) {
            var g = a, x = c.left + b * h2, u = c.top + r * h2, p = r, q = b, f = d.a, k = x + h2, m = u + h2, D = p - 1, E = p + 1, n2 = q - 1, l = q + 1, y2 = Math.floor(Math.min(0.5, Math.max(0, c.R)) * h2), v2 = f(p, q), I = f(D, n2), w2 = f(D, q);
            D = f(D, l);
            var F = f(p, l);
            l = f(E, l);
            q = f(E, q);
            E = f(E, n2);
            p = f(p, n2);
            x = Math.round(x);
            u = Math.round(u);
            k = Math.round(k);
            m = Math.round(m);
            v2 ? C(g, x, u, k, m, y2, !w2 && !p, !w2 && !F, !q && !F, !q && !p) : z(g, x, u, k, m, y2, w2 && p && I, w2 && F && D, q && F && l, q && p && E);
          }
        A(a, c);
        a.fill();
        return t;
      }
      var v = { minVersion: 1, maxVersion: 40, ecLevel: "L", left: 0, top: 0, size: 200, fill: "#000", background: null, text: "no text", radius: 0.5, quiet: 0 };
      G = function(t, c) {
        var a = {};
        Object.assign(a, v, t);
        a.N = a.minVersion;
        a.K = a.maxVersion;
        a.v = a.ecLevel;
        a.left = a.left;
        a.top = a.top;
        a.size = a.size;
        a.fill = a.fill;
        a.background = a.background;
        a.text = a.text;
        a.R = a.radius;
        a.P = a.quiet;
        if (c instanceof HTMLCanvasElement) {
          if (c.width !== a.size || c.height !== a.size)
            c.width = a.size, c.height = a.size;
          c.getContext("2d").clearRect(0, 0, c.width, c.height);
          y(c, a);
        } else
          t = document.createElement("canvas"), t.width = a.size, t.height = a.size, a = y(t, a), c.appendChild(a);
      };
    })(function() {
      function w(c) {
        var a = C.s(c);
        return { S: function() {
          return 4;
        }, b: function() {
          return a.length;
        }, write: function(c2) {
          for (var b = 0; b < a.length; b += 1)
            c2.put(a[b], 8);
        } };
      }
      function B() {
        var c = [], a = 0, e2 = {
          B: function() {
            return c;
          },
          c: function(b) {
            return (c[Math.floor(b / 8)] >>> 7 - b % 8 & 1) == 1;
          },
          put: function(b, h2) {
            for (var a2 = 0; a2 < h2; a2 += 1)
              e2.m((b >>> h2 - a2 - 1 & 1) == 1);
          },
          f: function() {
            return a;
          },
          m: function(b) {
            var h2 = Math.floor(a / 8);
            c.length <= h2 && c.push(0);
            b && (c[h2] |= 128 >>> a % 8);
            a += 1;
          }
        };
        return e2;
      }
      function C(c, a) {
        function e2(b2, h3) {
          for (var a2 = -1; 7 >= a2; a2 += 1)
            if (!(-1 >= b2 + a2 || d <= b2 + a2))
              for (var c2 = -1; 7 >= c2; c2 += 1)
                -1 >= h3 + c2 || d <= h3 + c2 || (r[b2 + a2][h3 + c2] = 0 <= a2 && 6 >= a2 && (c2 == 0 || c2 == 6) || 0 <= c2 && 6 >= c2 && (a2 == 0 || a2 == 6) || 2 <= a2 && 4 >= a2 && 2 <= c2 && 4 >= c2 ? true : false);
        }
        function b(b2, a2) {
          for (var f = d = 4 * c + 17, k = Array(f), m = 0; m < f; m += 1) {
            k[m] = Array(f);
            for (var p = 0; p < f; p += 1)
              k[m][p] = null;
          }
          r = k;
          e2(0, 0);
          e2(d - 7, 0);
          e2(0, d - 7);
          f = y.G(c);
          for (k = 0; k < f.length; k += 1)
            for (m = 0; m < f.length; m += 1) {
              p = f[k];
              var q = f[m];
              if (r[p][q] == null)
                for (var n2 = -2; 2 >= n2; n2 += 1)
                  for (var l = -2; 2 >= l; l += 1)
                    r[p + n2][q + l] = n2 == -2 || n2 == 2 || l == -2 || l == 2 || n2 == 0 && l == 0;
            }
          for (f = 8; f < d - 8; f += 1)
            r[f][6] == null && (r[f][6] = f % 2 == 0);
          for (f = 8; f < d - 8; f += 1)
            r[6][f] == null && (r[6][f] = f % 2 == 0);
          f = y.w(h2 << 3 | a2);
          for (k = 0; 15 > k; k += 1)
            m = !b2 && (f >> k & 1) == 1, r[6 > k ? k : 8 > k ? k + 1 : d - 15 + k][8] = m, r[8][8 > k ? d - k - 1 : 9 > k ? 15 - k : 14 - k] = m;
          r[d - 8][8] = !b2;
          if (7 <= c) {
            f = y.A(c);
            for (k = 0; 18 > k; k += 1)
              m = !b2 && (f >> k & 1) == 1, r[Math.floor(k / 3)][k % 3 + d - 8 - 3] = m;
            for (k = 0; 18 > k; k += 1)
              m = !b2 && (f >> k & 1) == 1, r[k % 3 + d - 8 - 3][Math.floor(k / 3)] = m;
          }
          if (g == null) {
            b2 = t.I(c, h2);
            f = B();
            for (k = 0; k < x.length; k += 1)
              m = x[k], f.put(4, 4), f.put(m.b(), y.f(4, c)), m.write(f);
            for (k = m = 0; k < b2.length; k += 1)
              m += b2[k].j;
            if (f.f() > 8 * m)
              throw Error("code length overflow. (" + f.f() + ">" + 8 * m + ")");
            for (f.f() + 4 <= 8 * m && f.put(0, 4); f.f() % 8 != 0; )
              f.m(false);
            for (; !(f.f() >= 8 * m); ) {
              f.put(236, 8);
              if (f.f() >= 8 * m)
                break;
              f.put(17, 8);
            }
            var u2 = 0;
            m = k = 0;
            p = Array(b2.length);
            q = Array(b2.length);
            for (n2 = 0; n2 < b2.length; n2 += 1) {
              var v2 = b2[n2].j, w2 = b2[n2].o - v2;
              k = Math.max(k, v2);
              m = Math.max(m, w2);
              p[n2] = Array(v2);
              for (l = 0; l < p[n2].length; l += 1)
                p[n2][l] = 255 & f.B()[l + u2];
              u2 += v2;
              l = y.C(w2);
              v2 = z(p[n2], l.b() - 1).l(l);
              q[n2] = Array(l.b() - 1);
              for (l = 0; l < q[n2].length; l += 1)
                w2 = l + v2.b() - q[n2].length, q[n2][l] = 0 <= w2 ? v2.c(w2) : 0;
            }
            for (l = f = 0; l < b2.length; l += 1)
              f += b2[l].o;
            f = Array(f);
            for (l = u2 = 0; l < k; l += 1)
              for (n2 = 0; n2 < b2.length; n2 += 1)
                l < p[n2].length && (f[u2] = p[n2][l], u2 += 1);
            for (l = 0; l < m; l += 1)
              for (n2 = 0; n2 < b2.length; n2 += 1)
                l < q[n2].length && (f[u2] = q[n2][l], u2 += 1);
            g = f;
          }
          b2 = g;
          f = -1;
          k = d - 1;
          m = 7;
          p = 0;
          a2 = y.F(a2);
          for (q = d - 1; 0 < q; q -= 2)
            for (q == 6 && --q; ; ) {
              for (n2 = 0; 2 > n2; n2 += 1)
                r[k][q - n2] == null && (l = false, p < b2.length && (l = (b2[p] >>> m & 1) == 1), a2(k, q - n2) && (l = !l), r[k][q - n2] = l, --m, m == -1 && (p += 1, m = 7));
              k += f;
              if (0 > k || d <= k) {
                k -= f;
                f = -f;
                break;
              }
            }
        }
        var h2 = A[a], r = null, d = 0, g = null, x = [], u = { u: function(b2) {
          b2 = w(b2);
          x.push(b2);
          g = null;
        }, a: function(b2, a2) {
          if (0 > b2 || d <= b2 || 0 > a2 || d <= a2)
            throw Error(b2 + "," + a2);
          return r[b2][a2];
        }, h: function() {
          return d;
        }, J: function() {
          for (var a2 = 0, h3 = 0, c2 = 0; 8 > c2; c2 += 1) {
            b(true, c2);
            var d2 = y.D(u);
            if (c2 == 0 || a2 > d2)
              a2 = d2, h3 = c2;
          }
          b(false, h3);
        } };
        return u;
      }
      function z(c, a) {
        if (typeof c.length == "undefined")
          throw Error(c.length + "/" + a);
        var e2 = function() {
          for (var b2 = 0; b2 < c.length && c[b2] == 0; )
            b2 += 1;
          for (var r = Array(c.length - b2 + a), d = 0; d < c.length - b2; d += 1)
            r[d] = c[d + b2];
          return r;
        }(), b = { c: function(b2) {
          return e2[b2];
        }, b: function() {
          return e2.length;
        }, multiply: function(a2) {
          for (var h2 = Array(b.b() + a2.b() - 1), c2 = 0; c2 < b.b(); c2 += 1)
            for (var g = 0; g < a2.b(); g += 1)
              h2[c2 + g] ^= v.i(v.g(b.c(c2)) + v.g(a2.c(g)));
          return z(h2, 0);
        }, l: function(a2) {
          if (0 > b.b() - a2.b())
            return b;
          for (var c2 = v.g(b.c(0)) - v.g(a2.c(0)), h2 = Array(b.b()), g = 0; g < b.b(); g += 1)
            h2[g] = b.c(g);
          for (g = 0; g < a2.b(); g += 1)
            h2[g] ^= v.i(v.g(a2.c(g)) + c2);
          return z(h2, 0).l(a2);
        } };
        return b;
      }
      C.s = function(c) {
        for (var a = [], e2 = 0; e2 < c.length; e2++) {
          var b = c.charCodeAt(e2);
          128 > b ? a.push(b) : 2048 > b ? a.push(192 | b >> 6, 128 | b & 63) : 55296 > b || 57344 <= b ? a.push(224 | b >> 12, 128 | b >> 6 & 63, 128 | b & 63) : (e2++, b = 65536 + ((b & 1023) << 10 | c.charCodeAt(e2) & 1023), a.push(240 | b >> 18, 128 | b >> 12 & 63, 128 | b >> 6 & 63, 128 | b & 63));
        }
        return a;
      };
      var A = { L: 1, M: 0, Q: 3, H: 2 }, y = function() {
        function c(b) {
          for (var a2 = 0; b != 0; )
            a2 += 1, b >>>= 1;
          return a2;
        }
        var a = [
          [],
          [6, 18],
          [6, 22],
          [6, 26],
          [6, 30],
          [6, 34],
          [6, 22, 38],
          [6, 24, 42],
          [6, 26, 46],
          [6, 28, 50],
          [6, 30, 54],
          [6, 32, 58],
          [6, 34, 62],
          [6, 26, 46, 66],
          [6, 26, 48, 70],
          [6, 26, 50, 74],
          [6, 30, 54, 78],
          [6, 30, 56, 82],
          [6, 30, 58, 86],
          [6, 34, 62, 90],
          [6, 28, 50, 72, 94],
          [6, 26, 50, 74, 98],
          [6, 30, 54, 78, 102],
          [6, 28, 54, 80, 106],
          [6, 32, 58, 84, 110],
          [6, 30, 58, 86, 114],
          [6, 34, 62, 90, 118],
          [6, 26, 50, 74, 98, 122],
          [6, 30, 54, 78, 102, 126],
          [6, 26, 52, 78, 104, 130],
          [6, 30, 56, 82, 108, 134],
          [6, 34, 60, 86, 112, 138],
          [6, 30, 58, 86, 114, 142],
          [6, 34, 62, 90, 118, 146],
          [6, 30, 54, 78, 102, 126, 150],
          [6, 24, 50, 76, 102, 128, 154],
          [6, 28, 54, 80, 106, 132, 158],
          [6, 32, 58, 84, 110, 136, 162],
          [6, 26, 54, 82, 110, 138, 166],
          [6, 30, 58, 86, 114, 142, 170]
        ], e2 = { w: function(b) {
          for (var a2 = b << 10; 0 <= c(a2) - c(1335); )
            a2 ^= 1335 << c(a2) - c(1335);
          return (b << 10 | a2) ^ 21522;
        }, A: function(b) {
          for (var a2 = b << 12; 0 <= c(a2) - c(7973); )
            a2 ^= 7973 << c(a2) - c(7973);
          return b << 12 | a2;
        }, G: function(b) {
          return a[b - 1];
        }, F: function(b) {
          switch (b) {
            case 0:
              return function(b2, a2) {
                return (b2 + a2) % 2 == 0;
              };
            case 1:
              return function(b2) {
                return b2 % 2 == 0;
              };
            case 2:
              return function(b2, a2) {
                return a2 % 3 == 0;
              };
            case 3:
              return function(b2, a2) {
                return (b2 + a2) % 3 == 0;
              };
            case 4:
              return function(b2, a2) {
                return (Math.floor(b2 / 2) + Math.floor(a2 / 3)) % 2 == 0;
              };
            case 5:
              return function(b2, a2) {
                return b2 * a2 % 2 + b2 * a2 % 3 == 0;
              };
            case 6:
              return function(b2, a2) {
                return (b2 * a2 % 2 + b2 * a2 % 3) % 2 == 0;
              };
            case 7:
              return function(b2, a2) {
                return (b2 * a2 % 3 + (b2 + a2) % 2) % 2 == 0;
              };
            default:
              throw Error("bad maskPattern:" + b);
          }
        }, C: function(b) {
          for (var a2 = z([1], 0), c2 = 0; c2 < b; c2 += 1)
            a2 = a2.multiply(z([1, v.i(c2)], 0));
          return a2;
        }, f: function(b, a2) {
          if (b != 4 || 1 > a2 || 40 < a2)
            throw Error("mode: " + b + "; type: " + a2);
          return 10 > a2 ? 8 : 16;
        }, D: function(b) {
          for (var a2 = b.h(), c2 = 0, d = 0; d < a2; d += 1)
            for (var g = 0; g < a2; g += 1) {
              for (var e3 = 0, t2 = b.a(d, g), p = -1; 1 >= p; p += 1)
                if (!(0 > d + p || a2 <= d + p))
                  for (var q = -1; 1 >= q; q += 1)
                    0 > g + q || a2 <= g + q || (p != 0 || q != 0) && t2 == b.a(d + p, g + q) && (e3 += 1);
              5 < e3 && (c2 += 3 + e3 - 5);
            }
          for (d = 0; d < a2 - 1; d += 1)
            for (g = 0; g < a2 - 1; g += 1)
              if (e3 = 0, b.a(d, g) && (e3 += 1), b.a(d + 1, g) && (e3 += 1), b.a(d, g + 1) && (e3 += 1), b.a(d + 1, g + 1) && (e3 += 1), e3 == 0 || e3 == 4)
                c2 += 3;
          for (d = 0; d < a2; d += 1)
            for (g = 0; g < a2 - 6; g += 1)
              b.a(d, g) && !b.a(d, g + 1) && b.a(d, g + 2) && b.a(d, g + 3) && b.a(d, g + 4) && !b.a(d, g + 5) && b.a(d, g + 6) && (c2 += 40);
          for (g = 0; g < a2; g += 1)
            for (d = 0; d < a2 - 6; d += 1)
              b.a(d, g) && !b.a(d + 1, g) && b.a(d + 2, g) && b.a(d + 3, g) && b.a(d + 4, g) && !b.a(d + 5, g) && b.a(d + 6, g) && (c2 += 40);
          for (g = e3 = 0; g < a2; g += 1)
            for (d = 0; d < a2; d += 1)
              b.a(d, g) && (e3 += 1);
          return c2 += Math.abs(100 * e3 / a2 / a2 - 50) / 5 * 10;
        } };
        return e2;
      }(), v = function() {
        for (var c = Array(256), a = Array(256), e2 = 0; 8 > e2; e2 += 1)
          c[e2] = 1 << e2;
        for (e2 = 8; 256 > e2; e2 += 1)
          c[e2] = c[e2 - 4] ^ c[e2 - 5] ^ c[e2 - 6] ^ c[e2 - 8];
        for (e2 = 0; 255 > e2; e2 += 1)
          a[c[e2]] = e2;
        return { g: function(b) {
          if (1 > b)
            throw Error("glog(" + b + ")");
          return a[b];
        }, i: function(b) {
          for (; 0 > b; )
            b += 255;
          for (; 256 <= b; )
            b -= 255;
          return c[b];
        } };
      }(), t = function() {
        function c(b, c2) {
          switch (c2) {
            case A.L:
              return a[4 * (b - 1)];
            case A.M:
              return a[4 * (b - 1) + 1];
            case A.Q:
              return a[4 * (b - 1) + 2];
            case A.H:
              return a[4 * (b - 1) + 3];
          }
        }
        var a = [
          [1, 26, 19],
          [1, 26, 16],
          [1, 26, 13],
          [1, 26, 9],
          [1, 44, 34],
          [1, 44, 28],
          [1, 44, 22],
          [1, 44, 16],
          [1, 70, 55],
          [1, 70, 44],
          [2, 35, 17],
          [2, 35, 13],
          [1, 100, 80],
          [2, 50, 32],
          [2, 50, 24],
          [4, 25, 9],
          [1, 134, 108],
          [2, 67, 43],
          [2, 33, 15, 2, 34, 16],
          [2, 33, 11, 2, 34, 12],
          [2, 86, 68],
          [4, 43, 27],
          [4, 43, 19],
          [4, 43, 15],
          [2, 98, 78],
          [4, 49, 31],
          [2, 32, 14, 4, 33, 15],
          [4, 39, 13, 1, 40, 14],
          [2, 121, 97],
          [2, 60, 38, 2, 61, 39],
          [4, 40, 18, 2, 41, 19],
          [4, 40, 14, 2, 41, 15],
          [2, 146, 116],
          [
            3,
            58,
            36,
            2,
            59,
            37
          ],
          [4, 36, 16, 4, 37, 17],
          [4, 36, 12, 4, 37, 13],
          [2, 86, 68, 2, 87, 69],
          [4, 69, 43, 1, 70, 44],
          [6, 43, 19, 2, 44, 20],
          [6, 43, 15, 2, 44, 16],
          [4, 101, 81],
          [1, 80, 50, 4, 81, 51],
          [4, 50, 22, 4, 51, 23],
          [3, 36, 12, 8, 37, 13],
          [2, 116, 92, 2, 117, 93],
          [6, 58, 36, 2, 59, 37],
          [4, 46, 20, 6, 47, 21],
          [7, 42, 14, 4, 43, 15],
          [4, 133, 107],
          [8, 59, 37, 1, 60, 38],
          [8, 44, 20, 4, 45, 21],
          [12, 33, 11, 4, 34, 12],
          [3, 145, 115, 1, 146, 116],
          [4, 64, 40, 5, 65, 41],
          [11, 36, 16, 5, 37, 17],
          [11, 36, 12, 5, 37, 13],
          [5, 109, 87, 1, 110, 88],
          [5, 65, 41, 5, 66, 42],
          [5, 54, 24, 7, 55, 25],
          [11, 36, 12, 7, 37, 13],
          [5, 122, 98, 1, 123, 99],
          [
            7,
            73,
            45,
            3,
            74,
            46
          ],
          [15, 43, 19, 2, 44, 20],
          [3, 45, 15, 13, 46, 16],
          [1, 135, 107, 5, 136, 108],
          [10, 74, 46, 1, 75, 47],
          [1, 50, 22, 15, 51, 23],
          [2, 42, 14, 17, 43, 15],
          [5, 150, 120, 1, 151, 121],
          [9, 69, 43, 4, 70, 44],
          [17, 50, 22, 1, 51, 23],
          [2, 42, 14, 19, 43, 15],
          [3, 141, 113, 4, 142, 114],
          [3, 70, 44, 11, 71, 45],
          [17, 47, 21, 4, 48, 22],
          [9, 39, 13, 16, 40, 14],
          [3, 135, 107, 5, 136, 108],
          [3, 67, 41, 13, 68, 42],
          [15, 54, 24, 5, 55, 25],
          [15, 43, 15, 10, 44, 16],
          [4, 144, 116, 4, 145, 117],
          [17, 68, 42],
          [17, 50, 22, 6, 51, 23],
          [19, 46, 16, 6, 47, 17],
          [2, 139, 111, 7, 140, 112],
          [17, 74, 46],
          [7, 54, 24, 16, 55, 25],
          [34, 37, 13],
          [
            4,
            151,
            121,
            5,
            152,
            122
          ],
          [4, 75, 47, 14, 76, 48],
          [11, 54, 24, 14, 55, 25],
          [16, 45, 15, 14, 46, 16],
          [6, 147, 117, 4, 148, 118],
          [6, 73, 45, 14, 74, 46],
          [11, 54, 24, 16, 55, 25],
          [30, 46, 16, 2, 47, 17],
          [8, 132, 106, 4, 133, 107],
          [8, 75, 47, 13, 76, 48],
          [7, 54, 24, 22, 55, 25],
          [22, 45, 15, 13, 46, 16],
          [10, 142, 114, 2, 143, 115],
          [19, 74, 46, 4, 75, 47],
          [28, 50, 22, 6, 51, 23],
          [33, 46, 16, 4, 47, 17],
          [8, 152, 122, 4, 153, 123],
          [22, 73, 45, 3, 74, 46],
          [8, 53, 23, 26, 54, 24],
          [12, 45, 15, 28, 46, 16],
          [3, 147, 117, 10, 148, 118],
          [3, 73, 45, 23, 74, 46],
          [4, 54, 24, 31, 55, 25],
          [11, 45, 15, 31, 46, 16],
          [7, 146, 116, 7, 147, 117],
          [21, 73, 45, 7, 74, 46],
          [1, 53, 23, 37, 54, 24],
          [19, 45, 15, 26, 46, 16],
          [5, 145, 115, 10, 146, 116],
          [19, 75, 47, 10, 76, 48],
          [15, 54, 24, 25, 55, 25],
          [23, 45, 15, 25, 46, 16],
          [13, 145, 115, 3, 146, 116],
          [2, 74, 46, 29, 75, 47],
          [42, 54, 24, 1, 55, 25],
          [23, 45, 15, 28, 46, 16],
          [17, 145, 115],
          [10, 74, 46, 23, 75, 47],
          [10, 54, 24, 35, 55, 25],
          [19, 45, 15, 35, 46, 16],
          [17, 145, 115, 1, 146, 116],
          [14, 74, 46, 21, 75, 47],
          [29, 54, 24, 19, 55, 25],
          [11, 45, 15, 46, 46, 16],
          [13, 145, 115, 6, 146, 116],
          [14, 74, 46, 23, 75, 47],
          [44, 54, 24, 7, 55, 25],
          [59, 46, 16, 1, 47, 17],
          [12, 151, 121, 7, 152, 122],
          [12, 75, 47, 26, 76, 48],
          [39, 54, 24, 14, 55, 25],
          [22, 45, 15, 41, 46, 16],
          [6, 151, 121, 14, 152, 122],
          [6, 75, 47, 34, 76, 48],
          [46, 54, 24, 10, 55, 25],
          [2, 45, 15, 64, 46, 16],
          [17, 152, 122, 4, 153, 123],
          [29, 74, 46, 14, 75, 47],
          [49, 54, 24, 10, 55, 25],
          [24, 45, 15, 46, 46, 16],
          [4, 152, 122, 18, 153, 123],
          [13, 74, 46, 32, 75, 47],
          [48, 54, 24, 14, 55, 25],
          [42, 45, 15, 32, 46, 16],
          [20, 147, 117, 4, 148, 118],
          [40, 75, 47, 7, 76, 48],
          [43, 54, 24, 22, 55, 25],
          [10, 45, 15, 67, 46, 16],
          [19, 148, 118, 6, 149, 119],
          [18, 75, 47, 31, 76, 48],
          [34, 54, 24, 34, 55, 25],
          [20, 45, 15, 61, 46, 16]
        ], e2 = { I: function(b, a2) {
          var e3 = c(b, a2);
          if (typeof e3 == "undefined")
            throw Error("bad rs block @ typeNumber:" + b + "/errorCorrectLevel:" + a2);
          b = e3.length / 3;
          a2 = [];
          for (var d = 0; d < b; d += 1)
            for (var g = e3[3 * d], h2 = e3[3 * d + 1], t2 = e3[3 * d + 2], p = 0; p < g; p += 1) {
              var q = t2, f = {};
              f.o = h2;
              f.j = q;
              a2.push(f);
            }
          return a2;
        } };
        return e2;
      }();
      return C;
    }());
    var qr_creator_es6_min_default = QrCreator;

    // src/components/qr-code/qr-code.styles.ts
    var qr_code_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .qr-code {
    position: relative;
  }

  canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

    // src/components/qr-code/qr-code.ts
    var SlQrCode = class extends h3 {
      constructor() {
        super(...arguments);
        this.value = "";
        this.label = "";
        this.size = 128;
        this.fill = "#000";
        this.background = "#fff";
        this.radius = 0;
        this.errorCorrection = "H";
      }
      firstUpdated() {
        this.generate();
      }
      generate() {
        if (!this.hasUpdated) {
          return;
        }
        qr_creator_es6_min_default.render({
          text: this.value,
          radius: this.radius,
          ecLevel: this.errorCorrection,
          fill: this.fill,
          background: this.background === "transparent" ? null : this.background,
          size: this.size * 2
        }, this.canvas);
      }
      render() {
        return T`
      <div
        class="qr-code"
        part="base"
        style=${i2({
      width: `${this.size}px`,
      height: `${this.size}px`
    })}
      >
        <canvas role="img" aria-label=${this.label || this.value}></canvas>
      </div>
    `;
      }
    };
    SlQrCode.styles = qr_code_styles_default;
    __decorateClass([
      o6("canvas")
    ], SlQrCode.prototype, "canvas", 2);
    __decorateClass([
      e4()
    ], SlQrCode.prototype, "value", 2);
    __decorateClass([
      e4()
    ], SlQrCode.prototype, "label", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlQrCode.prototype, "size", 2);
    __decorateClass([
      e4()
    ], SlQrCode.prototype, "fill", 2);
    __decorateClass([
      e4()
    ], SlQrCode.prototype, "background", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlQrCode.prototype, "radius", 2);
    __decorateClass([
      e4({ attribute: "error-correction" })
    ], SlQrCode.prototype, "errorCorrection", 2);
    __decorateClass([
      watch("background"),
      watch("errorCorrection"),
      watch("fill"),
      watch("radius"),
      watch("size"),
      watch("value")
    ], SlQrCode.prototype, "generate", 1);
    SlQrCode = __decorateClass([
      n5("sl-qr-code")
    ], SlQrCode);

    // src/components/radio/radio.styles.ts
    var radio_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .radio {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .radio__icon svg {
    width: 100%;
    height: 100%;
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .radio__control input[type='radio'] {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .radio.radio--focused:not(.radio--checked):not(.radio--disabled) .radio__control {
    border-color: var(--sl-input-border-color-focus);
    background-color: var(--sl-input-background-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-white);
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-400);
    background-color: var(--sl-color-primary-400);
  }

  /* Checked + focus */
  .radio.radio--checked:not(.radio--disabled).radio--focused .radio__control {
    border-color: var(--sl-color-primary-400);
    background-color: var(--sl-color-primary-400);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    line-height: var(--sl-toggle-size);
    margin-left: 0.5em;
    user-select: none;
  }
`;

    // src/components/radio/radio.ts
    var id$7 = 0;
    var SlRadio = class extends h3 {
      constructor() {
        super(...arguments);
        this.inputId = `radio-${++id$7}`;
        this.labelId = `radio-label-${id$7}`;
        this.hasFocus = false;
        this.disabled = false;
        this.checked = false;
        this.invalid = false;
      }
      click() {
        this.input.click();
      }
      focus(options) {
        this.input.focus(options);
      }
      blur() {
        this.input.blur();
      }
      reportValidity() {
        return this.input.reportValidity();
      }
      setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
      }
      getAllRadios() {
        const radioGroup = this.closest("sl-radio-group");
        if (!radioGroup) {
          return [];
        }
        return [...radioGroup.querySelectorAll("sl-radio")].filter((radio) => radio.name === this.name);
      }
      getSiblingRadios() {
        return this.getAllRadios().filter((radio) => radio !== this);
      }
      handleBlur() {
        this.hasFocus = false;
        emit(this, "sl-blur");
      }
      handleCheckedChange() {
        if (this.checked) {
          this.getSiblingRadios().map((radio) => radio.checked = false);
        }
        emit(this, "sl-change");
      }
      handleClick() {
        this.checked = true;
      }
      handleDisabledChange() {
        if (this.input) {
          this.input.disabled = this.disabled;
          this.invalid = !this.input.checkValidity();
        }
      }
      handleFocus() {
        this.hasFocus = true;
        emit(this, "sl-focus");
      }
      handleKeyDown(event) {
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
          const radios = this.getAllRadios().filter((radio) => !radio.disabled);
          const incr = ["ArrowUp", "ArrowLeft"].includes(event.key) ? -1 : 1;
          let index = radios.indexOf(this) + incr;
          if (index < 0)
            index = radios.length - 1;
          if (index > radios.length - 1)
            index = 0;
          this.getAllRadios().map((radio) => radio.checked = false);
          radios[index].focus();
          radios[index].checked = true;
          event.preventDefault();
        }
      }
      handleMouseDown(event) {
        event.preventDefault();
        this.input.focus();
      }
      render() {
        return T`
      <label
        part="base"
        class=${e({
      radio: true,
      "radio--checked": this.checked,
      "radio--disabled": this.disabled,
      "radio--focused": this.hasFocus
    })}
        for=${this.inputId}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <span part="control" class="radio__control">
          <span part="checked-icon" class="radio__icon">
            <svg viewBox="0 0 16 16">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g fill="currentColor">
                  <circle cx="8" cy="8" r="3.42857143"></circle>
                </g>
              </g>
            </svg>
          </span>

          <input
            id=${this.inputId}
            type="radio"
            name=${l$1(this.name)}
            value=${l$1(this.value)}
            .checked=${l(this.checked)}
            .disabled=${this.disabled}
            aria-checked=${this.checked ? "true" : "false"}
            aria-disabled=${this.disabled ? "true" : "false"}
            aria-labelledby=${this.labelId}
            @click=${this.handleClick}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />
        </span>

        <span part="label" id=${this.labelId} class="radio__label">
          <slot></slot>
        </span>
      </label>
    `;
      }
    };
    SlRadio.styles = radio_styles_default;
    __decorateClass([
      o6('input[type="radio"]')
    ], SlRadio.prototype, "input", 2);
    __decorateClass([
      r4()
    ], SlRadio.prototype, "hasFocus", 2);
    __decorateClass([
      e4()
    ], SlRadio.prototype, "name", 2);
    __decorateClass([
      e4()
    ], SlRadio.prototype, "value", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlRadio.prototype, "disabled", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlRadio.prototype, "checked", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlRadio.prototype, "invalid", 2);
    __decorateClass([
      watch("checked", { waitUntilFirstUpdate: true })
    ], SlRadio.prototype, "handleCheckedChange", 1);
    __decorateClass([
      watch("disabled")
    ], SlRadio.prototype, "handleDisabledChange", 1);
    SlRadio = __decorateClass([
      n5("sl-radio")
    ], SlRadio);

    // src/components/radio-group/radio-group.styles.ts
    var radio_group_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: block;
  }

  .radio-group {
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-large);
    padding-top: var(--sl-spacing-x-small);
  }

  .radio-group .radio-group__label {
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    padding: 0 var(--sl-spacing-xx-small);
  }

  ::slotted(sl-radio:not(:last-of-type)) {
    display: block;
    margin-bottom: var(--sl-spacing-xx-small);
  }

  .radio-group--no-fieldset {
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  .radio-group--no-fieldset .radio-group__label {
    position: absolute;
    width: 0;
    height: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }
`;

    // src/components/radio-group/radio-group.ts
    var SlRadioGroup = class extends h3 {
      constructor() {
        super(...arguments);
        this.label = "";
        this.noFieldset = false;
      }
      handleFocusIn() {
        const checkedRadio = [...this.defaultSlot.assignedElements({ flatten: true })].find((el) => el.tagName.toLowerCase() === "sl-radio" && el.checked);
        if (checkedRadio) {
          checkedRadio.focus();
        }
      }
      render() {
        return T`
      <fieldset
        part="base"
        class=${e({
      "radio-group": true,
      "radio-group--no-fieldset": this.noFieldset
    })}
        role="radiogroup"
        @focusin=${this.handleFocusIn}
      >
        <legend part="label" class="radio-group__label">
          <slot name="label">${this.label}</slot>
        </legend>
        <slot></slot>
      </fieldset>
    `;
      }
    };
    SlRadioGroup.styles = radio_group_styles_default;
    __decorateClass([
      o6("slot:not([name])")
    ], SlRadioGroup.prototype, "defaultSlot", 2);
    __decorateClass([
      e4()
    ], SlRadioGroup.prototype, "label", 2);
    __decorateClass([
      e4({ type: Boolean, attribute: "no-fieldset" })
    ], SlRadioGroup.prototype, "noFieldset", 2);
    SlRadioGroup = __decorateClass([
      n5("sl-radio-group")
    ], SlRadioGroup);

    // src/components/range/range.styles.ts
    var range_styles_default = i2$1`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    --thumb-size: 20px;
    --tooltip-offset-y: 10px;
    --track-color: var(--sl-color-gray-200);
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    -webkit-appearance: none;
    width: 100%;
    height: var(--sl-input-height-medium);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-500);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-500);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:not(:disabled)::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-400);
    border-color: var(--sl-color-primary-400);
  }

  .range__control:not(:disabled):focus::-webkit-slider-thumb {
    background-color: var(--sl-color-primary-400);
    border-color: var(--sl-color-primary-400);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  .range__control:not(:disabled)::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow, var(--sl-transition-fast) transform;
    cursor: pointer;
  }

  .range__control:not(:disabled)::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-400);
    border-color: var(--sl-color-primary-400);
  }

  .range__control:not(:disabled):focus::-moz-range-thumb {
    background-color: var(--sl-color-primary-400);
    border-color: var(--sl-color-primary-400);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  .range__control:not(:disabled)::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 1px;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    margin-left: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset-y));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset-y));
  }
  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }
`;

    // src/components/range/range.ts
    var id$6 = 0;
    var SlRange = class extends h3 {
      constructor() {
        super(...arguments);
        this.inputId = `input-${++id$6}`;
        this.helpTextId = `input-help-text-${id$6}`;
        this.labelId = `input-label-${id$6}`;
        this.hasFocus = false;
        this.hasHelpTextSlot = false;
        this.hasLabelSlot = false;
        this.hasTooltip = false;
        this.name = "";
        this.value = 0;
        this.label = "";
        this.helpText = "";
        this.disabled = false;
        this.invalid = false;
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.tooltip = "top";
        this.tooltipFormatter = (value) => value.toString();
      }
      connectedCallback() {
        super.connectedCallback();
        this.handleSlotChange = this.handleSlotChange;
        this.resizeObserver = new ResizeObserver(() => this.syncTooltip());
        this.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
        if (this.value === void 0 || this.value === null)
          this.value = this.min;
        if (this.value < this.min)
          this.value = this.min;
        if (this.value > this.max)
          this.value = this.max;
        this.handleSlotChange();
        this.updateComplete.then(() => {
          this.syncTooltip();
          this.resizeObserver.observe(this.input);
        });
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this.resizeObserver.unobserve(this.input);
        this.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
      }
      focus(options) {
        this.input.focus(options);
      }
      blur() {
        this.input.blur();
      }
      setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
      }
      handleInput() {
        this.value = Number(this.input.value);
        emit(this, "sl-change");
        requestAnimationFrame(() => this.syncTooltip());
      }
      handleBlur() {
        this.hasFocus = false;
        this.hasTooltip = false;
        emit(this, "sl-blur");
      }
      handleDisabledChange() {
        if (this.input) {
          this.input.disabled = this.disabled;
          this.invalid = !this.input.checkValidity();
        }
      }
      handleFocus() {
        this.hasFocus = true;
        this.hasTooltip = true;
        emit(this, "sl-focus");
      }
      handleSlotChange() {
        this.hasHelpTextSlot = hasSlot(this, "help-text");
        this.hasLabelSlot = hasSlot(this, "label");
      }
      handleThumbDragStart() {
        this.hasTooltip = true;
      }
      handleThumbDragEnd() {
        this.hasTooltip = false;
      }
      syncTooltip() {
        if (this.tooltip !== "none") {
          const percent = Math.max(0, (this.value - this.min) / (this.max - this.min));
          const inputWidth = this.input.offsetWidth;
          const tooltipWidth = this.output.offsetWidth;
          const thumbSize = getComputedStyle(this.input).getPropertyValue("--thumb-size");
          const x = `calc(${inputWidth * percent}px - calc(calc(${percent} * ${thumbSize}) - calc(${thumbSize} / 2)))`;
          this.output.style.transform = `translateX(${x})`;
          this.output.style.marginLeft = `-${tooltipWidth / 2}px`;
        }
      }
      render() {
        return renderFormControl({
          inputId: this.inputId,
          label: this.label,
          labelId: this.labelId,
          hasLabelSlot: this.hasLabelSlot,
          helpTextId: this.helpTextId,
          helpText: this.helpText,
          hasHelpTextSlot: this.hasHelpTextSlot,
          size: "medium"
        }, T`
        <div
          part="base"
          class=${e({
      range: true,
      "range--disabled": this.disabled,
      "range--focused": this.hasFocus,
      "range--tooltip-visible": this.hasTooltip,
      "range--tooltip-top": this.tooltip === "top",
      "range--tooltip-bottom": this.tooltip === "bottom"
    })}
          @mousedown=${this.handleThumbDragStart}
          @mouseup=${this.handleThumbDragEnd}
          @touchstart=${this.handleThumbDragStart}
          @touchend=${this.handleThumbDragEnd}
        >
          <input
            part="input"
            type="range"
            class="range__control"
            name=${l$1(this.name)}
            ?disabled=${this.disabled}
            min=${l$1(this.min)}
            max=${l$1(this.max)}
            step=${l$1(this.step)}
            .value=${l(String(this.value))}
            aria-labelledby=${l$1(getLabelledBy({
      label: this.label,
      labelId: this.labelId,
      hasLabelSlot: this.hasLabelSlot,
      helpText: this.helpText,
      helpTextId: this.helpTextId,
      hasHelpTextSlot: this.hasHelpTextSlot
    }))}
            @input=${this.handleInput}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          />
          ${this.tooltip !== "none" ? T` <output part="tooltip" class="range__tooltip"> ${this.tooltipFormatter(this.value)} </output> ` : ""}
        </div>
      `);
      }
    };
    SlRange.styles = range_styles_default;
    __decorateClass([
      o6(".range__control")
    ], SlRange.prototype, "input", 2);
    __decorateClass([
      o6(".range__tooltip")
    ], SlRange.prototype, "output", 2);
    __decorateClass([
      r4()
    ], SlRange.prototype, "hasFocus", 2);
    __decorateClass([
      r4()
    ], SlRange.prototype, "hasHelpTextSlot", 2);
    __decorateClass([
      r4()
    ], SlRange.prototype, "hasLabelSlot", 2);
    __decorateClass([
      r4()
    ], SlRange.prototype, "hasTooltip", 2);
    __decorateClass([
      e4()
    ], SlRange.prototype, "name", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlRange.prototype, "value", 2);
    __decorateClass([
      e4()
    ], SlRange.prototype, "label", 2);
    __decorateClass([
      e4({ attribute: "help-text" })
    ], SlRange.prototype, "helpText", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlRange.prototype, "disabled", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlRange.prototype, "invalid", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlRange.prototype, "min", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlRange.prototype, "max", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlRange.prototype, "step", 2);
    __decorateClass([
      e4()
    ], SlRange.prototype, "tooltip", 2);
    __decorateClass([
      e4({ attribute: false })
    ], SlRange.prototype, "tooltipFormatter", 2);
    __decorateClass([
      watch("disabled")
    ], SlRange.prototype, "handleDisabledChange", 1);
    __decorateClass([
      watch("label"),
      watch("helpText")
    ], SlRange.prototype, "handleSlotChange", 1);
    SlRange = __decorateClass([
      n5("sl-range")
    ], SlRange);

    // src/internal/math.ts
    function clamp(value, min, max) {
      if (value < min)
        return min;
      if (value > max)
        return max;
      return value;
    }

    // src/utilities/base-path.ts
    var basePath = "";
    function setBasePath(path) {
      basePath = path;
    }
    function getBasePath() {
      return basePath.replace(/\/$/, "");
    }
    var scripts = [...document.getElementsByTagName("script")];
    var configScript = scripts.find((script) => script.hasAttribute("data-shoelace"));
    if (configScript) {
      setBasePath(configScript.getAttribute("data-shoelace"));
    } else {
      const fallbackScript = scripts.find((s) => /shoelace(\.min)?\.js$/.test(s.src));
      let path = "";
      if (fallbackScript) {
        path = fallbackScript.getAttribute("src");
      }
      setBasePath(path.split("/").slice(0, -1).join("/"));
    }

    // src/components/icon/library.default.ts
    var library = {
      name: "default",
      resolver: (name) => `${getBasePath()}/assets/icons/${name}.svg`
    };
    var library_default_default = library;

    // src/components/icon/library.system.ts
    var icons = {
      check: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
    </svg>
  `,
      "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
      "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
      "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
      eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
      "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
      "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
  `,
      "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
      "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
      x: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
      "x-circle": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `
    };
    var systemLibrary = {
      name: "system",
      resolver: (name) => {
        if (icons[name]) {
          return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
        } else {
          return "";
        }
      }
    };
    var library_system_default = systemLibrary;

    // src/components/icon/library.ts
    var registry = [library_default_default, library_system_default];
    var watchedIcons = [];
    function watchIcon(icon) {
      watchedIcons.push(icon);
    }
    function unwatchIcon(icon) {
      watchedIcons = watchedIcons.filter((el) => el !== icon);
    }
    function getIconLibrary(name) {
      return registry.filter((lib) => lib.name === name)[0];
    }
    function registerIconLibrary(name, options) {
      unregisterIconLibrary(name);
      registry.push({
        name,
        resolver: options.resolver,
        mutator: options.mutator
      });
      watchedIcons.map((icon) => {
        if (icon.library === name) {
          icon.redraw();
        }
      });
    }
    function unregisterIconLibrary(name) {
      registry = registry.filter((lib) => lib.name !== name);
    }

    // src/components/icon/request.ts
    var iconFiles = new Map();
    var requestIcon = (url) => {
      if (iconFiles.has(url)) {
        return iconFiles.get(url);
      } else {
        const request = fetch(url).then(async (response) => {
          if (response.ok) {
            const div = document.createElement("div");
            div.innerHTML = await response.text();
            const svg = div.firstElementChild;
            return {
              ok: response.ok,
              status: response.status,
              svg: svg && svg.tagName.toLowerCase() === "svg" ? svg.outerHTML : ""
            };
          } else {
            return {
              ok: response.ok,
              status: response.status,
              svg: null
            };
          }
        });
        iconFiles.set(url, request);
        return request;
      }
    };

    // node_modules/lit-html/directives/unsafe-html.js
    var n2 = class extends s$1 {
      constructor(i3) {
        if (super(i3), this.vt = A, i3.type !== t$1.CHILD)
          throw Error(this.constructor.directiveName + "() can only be used in child bindings");
      }
      render(r2) {
        if (r2 === A)
          return this.Vt = void 0, this.vt = r2;
        if (r2 === w)
          return r2;
        if (typeof r2 != "string")
          throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (r2 === this.vt)
          return this.Vt;
        this.vt = r2;
        const s2 = [r2];
        return s2.raw = s2, this.Vt = { _$litType$: this.constructor.resultType, strings: s2, values: [] };
      }
    };
    n2.directiveName = "unsafeHTML", n2.resultType = 1;
    var o = i$1(n2);

    // node_modules/lit-html/directives/unsafe-svg.js
    var t2 = class extends n2 {
    };
    t2.directiveName = "unsafeSVG", t2.resultType = 2;
    var o2 = i$1(t2);

    // src/components/icon/icon.styles.ts
    var icon_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;

    // src/components/icon/icon.ts
    var parser = new DOMParser();
    var SlIcon = class extends h3 {
      constructor() {
        super(...arguments);
        this.svg = "";
        this.library = "default";
      }
      connectedCallback() {
        super.connectedCallback();
        watchIcon(this);
      }
      firstUpdated() {
        this.setIcon();
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        unwatchIcon(this);
      }
      getLabel() {
        let label = "";
        if (this.label) {
          label = this.label;
        } else if (this.name) {
          label = this.name.replace(/-/g, " ");
        } else if (this.src) {
          label = this.src.replace(/.*\//, "").replace(/-/g, " ").replace(/\.svg/i, "");
        }
        return label;
      }
      getUrl() {
        const library = getIconLibrary(this.library);
        if (this.name && library) {
          return library.resolver(this.name);
        } else {
          return this.src;
        }
      }
      redraw() {
        this.setIcon();
      }
      async setIcon() {
        const library = getIconLibrary(this.library);
        const url = this.getUrl();
        if (url) {
          try {
            const file = await requestIcon(url);
            if (url !== this.getUrl()) {
              return;
            } else if (file.ok) {
              const doc = parser.parseFromString(file.svg, "text/html");
              const svgEl = doc.body.querySelector("svg");
              if (svgEl) {
                if (library && library.mutator) {
                  library.mutator(svgEl);
                }
                this.svg = svgEl.outerHTML;
                emit(this, "sl-load");
              } else {
                this.svg = "";
                emit(this, "sl-error", { detail: { status: file.status } });
              }
            } else {
              this.svg = "";
              emit(this, "sl-error", { detail: { status: file.status } });
            }
          } catch (e2) {
            emit(this, "sl-error", { detail: { status: -1 } });
          }
        } else if (this.svg) {
          this.svg = "";
        }
      }
      handleChange() {
        this.setIcon();
      }
      render() {
        return T` <div part="base" class="icon" role="img" aria-label=${this.getLabel()}>${o2(this.svg)}</div>`;
      }
    };
    SlIcon.styles = icon_styles_default;
    __decorateClass([
      r4()
    ], SlIcon.prototype, "svg", 2);
    __decorateClass([
      e4()
    ], SlIcon.prototype, "name", 2);
    __decorateClass([
      e4()
    ], SlIcon.prototype, "src", 2);
    __decorateClass([
      e4()
    ], SlIcon.prototype, "label", 2);
    __decorateClass([
      e4()
    ], SlIcon.prototype, "library", 2);
    __decorateClass([
      watch("name"),
      watch("src"),
      watch("library")
    ], SlIcon.prototype, "setIcon", 1);
    SlIcon = __decorateClass([
      n5("sl-icon")
    ], SlIcon);
    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */

    // src/components/rating/rating.styles.ts
    var rating_styles_default = i2$1`
  ${component_styles_default}

  :host {
    --symbol-color: var(--sl-color-gray-300);
    --symbol-color-active: #ffbe00;
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-xxx-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating.focus-visible:focus {
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbols--indicator {
    position: absolute;
    top: 0;
    left: 0;
    color: var(--symbol-color-active);
    pointer-events: none;
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) transform;
  }

  .rating__symbol--hover {
    transform: scale(1.2);
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover .rating--readonly .rating__symbol--hover {
    transform: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }
`;

    // src/components/rating/rating.ts
    var SlRating = class extends h3 {
      constructor() {
        super(...arguments);
        this.hoverValue = 0;
        this.isHovering = false;
        this.value = 0;
        this.max = 5;
        this.precision = 1;
        this.readonly = false;
        this.disabled = false;
        this.getSymbol = (value) => '<sl-icon name="star-fill" library="system"></sl-icon>';
      }
      focus(options) {
        this.rating.focus(options);
      }
      blur() {
        this.rating.blur();
      }
      connectedCallback() {
        super.connectedCallback();
        this.updateComplete.then(() => focusVisible.observe(this.rating));
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        focusVisible.unobserve(this.rating);
      }
      getValueFromMousePosition(event) {
        return this.getValueFromXCoordinate(event.clientX);
      }
      getValueFromTouchPosition(event) {
        return this.getValueFromXCoordinate(event.touches[0].clientX);
      }
      getValueFromXCoordinate(coordinate) {
        const containerLeft = this.rating.getBoundingClientRect().left;
        const containerWidth = this.rating.getBoundingClientRect().width;
        return clamp(this.roundToPrecision((coordinate - containerLeft) / containerWidth * this.max, this.precision), 0, this.max);
      }
      handleClick(event) {
        this.setValue(this.getValueFromMousePosition(event));
      }
      setValue(newValue) {
        if (this.disabled || this.readonly) {
          return;
        }
        this.value = newValue === this.value ? 0 : newValue;
        this.isHovering = false;
      }
      handleKeyDown(event) {
        if (this.disabled || this.readonly) {
          return;
        }
        if (event.key === "ArrowLeft") {
          const decrement = event.shiftKey ? 1 : this.precision;
          this.value = Math.max(0, this.value - decrement);
          event.preventDefault();
        }
        if (event.key === "ArrowRight") {
          const increment = event.shiftKey ? 1 : this.precision;
          this.value = Math.min(this.max, this.value + increment);
          event.preventDefault();
        }
        if (event.key === "Home") {
          this.value = 0;
          event.preventDefault();
        }
        if (event.key === "End") {
          this.value = this.max;
          event.preventDefault();
        }
      }
      handleMouseEnter() {
        this.isHovering = true;
      }
      handleMouseMove(event) {
        this.hoverValue = this.getValueFromMousePosition(event);
      }
      handleMouseLeave() {
        this.isHovering = false;
      }
      handleTouchStart(event) {
        this.hoverValue = this.getValueFromTouchPosition(event);
        event.preventDefault();
      }
      handleTouchMove(event) {
        this.isHovering = true;
        this.hoverValue = this.getValueFromTouchPosition(event);
      }
      handleTouchEnd(event) {
        this.isHovering = false;
        this.setValue(this.hoverValue);
        event.preventDefault();
      }
      handleValueChange() {
        emit(this, "sl-change");
      }
      roundToPrecision(numberToRound, precision = 0.5) {
        const multiplier = 1 / precision;
        return Math.ceil(numberToRound * multiplier) / multiplier;
      }
      render() {
        const counter = Array.from(Array(this.max).keys());
        let displayValue = 0;
        if (this.disabled || this.readonly) {
          displayValue = this.value;
        } else {
          displayValue = this.isHovering ? this.hoverValue : this.value;
        }
        return T`
      <div
        part="base"
        class=${e({
      rating: true,
      "rating--readonly": this.readonly,
      "rating--disabled": this.disabled
    })}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-readonly=${this.readonly ? "true" : "false"}
        aria-value=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled ? "-1" : "0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols rating__symbols--inactive">
          ${counter.map((index) => {
      return T`
              <span
                class=${e({
        rating__symbol: true,
        "rating__symbol--hover": this.isHovering && Math.ceil(displayValue) === index + 1
      })}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${o(this.getSymbol(index + 1))}
              </span>
            `;
    })}
        </span>

        <span class="rating__symbols rating__symbols--indicator">
          ${counter.map((index) => {
      return T`
              <span
                class=${e({
        rating__symbol: true,
        "rating__symbol--hover": this.isHovering && Math.ceil(displayValue) === index + 1
      })}
                style=${i2({
        clipPath: displayValue > index + 1 ? "none" : `inset(0 ${100 - (displayValue - index) / 1 * 100}% 0 0)`
      })}
                role="presentation"
              >
                ${o(this.getSymbol(index + 1))}
              </span>
            `;
    })}
        </span>
      </div>
    `;
      }
    };
    SlRating.styles = rating_styles_default;
    __decorateClass([
      o6(".rating")
    ], SlRating.prototype, "rating", 2);
    __decorateClass([
      r4()
    ], SlRating.prototype, "hoverValue", 2);
    __decorateClass([
      r4()
    ], SlRating.prototype, "isHovering", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlRating.prototype, "value", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlRating.prototype, "max", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlRating.prototype, "precision", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlRating.prototype, "readonly", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlRating.prototype, "disabled", 2);
    __decorateClass([
      e4()
    ], SlRating.prototype, "getSymbol", 2);
    __decorateClass([
      watch("value", { waitUntilFirstUpdate: true })
    ], SlRating.prototype, "handleValueChange", 1);
    SlRating = __decorateClass([
      n5("sl-rating")
    ], SlRating);

    // src/components/image-comparer/image-comparer.styles.ts
    var image_comparer_styles_default = i2$1`
  ${component_styles_default}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    pointer-events: none;
  }

  .image-comparer__before ::slotted(img),
  .image-comparer__after ::slotted(img),
  .image-comparer__before ::slotted(svg),
  .image-comparer__after ::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-white);
    transform: translateX(calc(var(--divider-width) / -2));
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-white);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-gray-500);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus {
    outline: none;
    box-shadow: 0 0 0 1px var(--sl-color-primary-500),
      0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }
`;

    // src/components/image-comparer/image-comparer.ts
    var SlImageComparer = class extends h3 {
      constructor() {
        super(...arguments);
        this.position = 50;
      }
      handleDrag(event) {
        const { width } = this.base.getBoundingClientRect();
        function drag(event2, container, onMove) {
          const move = (event3) => {
            const dims = container.getBoundingClientRect();
            const defaultView = container.ownerDocument.defaultView;
            const offsetX = dims.left + defaultView.pageXOffset;
            const offsetY = dims.top + defaultView.pageYOffset;
            const x = (event3.changedTouches ? event3.changedTouches[0].pageX : event3.pageX) - offsetX;
            const y = (event3.changedTouches ? event3.changedTouches[0].pageY : event3.pageY) - offsetY;
            onMove(x, y);
          };
          move(event2);
          const stop = () => {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("touchmove", move);
            document.removeEventListener("mouseup", stop);
            document.removeEventListener("touchend", stop);
          };
          document.addEventListener("mousemove", move);
          document.addEventListener("touchmove", move);
          document.addEventListener("mouseup", stop);
          document.addEventListener("touchend", stop);
        }
        this.handle.focus();
        event.preventDefault();
        drag(event, this.base, (x) => {
          this.position = Number(clamp(x / width * 100, 0, 100).toFixed(2));
        });
      }
      handleKeyDown(event) {
        if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
          const incr = event.shiftKey ? 10 : 1;
          let newPosition = this.position;
          event.preventDefault();
          if (event.key === "ArrowLeft")
            newPosition = newPosition - incr;
          if (event.key === "ArrowRight")
            newPosition = newPosition + incr;
          if (event.key === "Home")
            newPosition = 0;
          if (event.key === "End")
            newPosition = 100;
          newPosition = clamp(newPosition, 0, 100);
          this.position = newPosition;
        }
      }
      handlePositionChange() {
        emit(this, "sl-change");
      }
      render() {
        return T`
      <div part="base" class="image-comparer" @keydown=${this.handleKeyDown}>
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${i2({ clipPath: `inset(0 ${100 - this.position}% 0 0)` })}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${i2({ left: this.position + "%" })}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            tabindex="0"
          >
            <slot name="handle-icon">
              <sl-icon class="image-comparer__handle-icon" name="grip-vertical" library="system"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `;
      }
    };
    SlImageComparer.styles = image_comparer_styles_default;
    __decorateClass([
      o6(".image-comparer")
    ], SlImageComparer.prototype, "base", 2);
    __decorateClass([
      o6(".image-comparer__handle")
    ], SlImageComparer.prototype, "handle", 2);
    __decorateClass([
      e4({ type: Number, reflect: true })
    ], SlImageComparer.prototype, "position", 2);
    __decorateClass([
      watch("position", { waitUntilFirstUpdate: true })
    ], SlImageComparer.prototype, "handlePositionChange", 1);
    SlImageComparer = __decorateClass([
      n5("sl-image-comparer")
    ], SlImageComparer);

    // src/components/include/request.ts
    var includeFiles = new Map();
    var requestInclude = async (src, mode = "cors") => {
      if (includeFiles.has(src)) {
        return includeFiles.get(src);
      } else {
        const request = fetch(src, { mode }).then(async (response) => {
          return {
            ok: response.ok,
            status: response.status,
            html: await response.text()
          };
        });
        includeFiles.set(src, request);
        return request;
      }
    };

    // src/components/include/include.styles.ts
    var include_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: block;
  }
`;

    // src/components/include/include.ts
    var SlInclude = class extends h3 {
      constructor() {
        super(...arguments);
        this.mode = "cors";
        this.allowScripts = false;
      }
      executeScript(script) {
        const newScript = document.createElement("script");
        [...script.attributes].map((attr) => newScript.setAttribute(attr.name, attr.value));
        newScript.textContent = script.textContent;
        script.parentNode.replaceChild(newScript, script);
      }
      async handleSrcChange() {
        try {
          const src = this.src;
          const file = await requestInclude(src, this.mode);
          if (src !== this.src) {
            return;
          }
          if (!file) {
            return;
          }
          if (!file.ok) {
            emit(this, "sl-error", { detail: { status: file.status } });
            return;
          }
          this.innerHTML = file.html;
          if (this.allowScripts) {
            [...this.querySelectorAll("script")].map((script) => this.executeScript(script));
          }
          emit(this, "sl-load");
        } catch (e2) {
          emit(this, "sl-error", { detail: { status: -1 } });
        }
      }
      render() {
        return T`<slot></slot>`;
      }
    };
    SlInclude.styles = include_styles_default;
    __decorateClass([
      e4()
    ], SlInclude.prototype, "src", 2);
    __decorateClass([
      e4()
    ], SlInclude.prototype, "mode", 2);
    __decorateClass([
      e4({ attribute: "allow-scripts", type: Boolean })
    ], SlInclude.prototype, "allowScripts", 2);
    __decorateClass([
      watch("src")
    ], SlInclude.prototype, "handleSrcChange", 1);
    SlInclude = __decorateClass([
      n5("sl-include")
    ], SlInclude);

    // src/components/menu/menu.styles.ts
    var menu_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu {
    padding: var(--sl-spacing-x-small) 0;
  }
  .menu:focus {
    outline: none;
  }
`;

    // src/components/menu/menu.ts
    var SlMenu = class extends h3 {
      constructor() {
        super(...arguments);
        this.typeToSelectString = "";
      }
      getAllItems(options = { includeDisabled: true }) {
        return [...this.defaultSlot.assignedElements({ flatten: true })].filter((el) => {
          if (el.getAttribute("role") !== "menuitem") {
            return false;
          }
          if (!(options == null ? void 0 : options.includeDisabled) && el.disabled) {
            return false;
          }
          return true;
        });
      }
      getCurrentItem() {
        return this.getAllItems({ includeDisabled: false }).find((i2) => i2.getAttribute("tabindex") === "0");
      }
      setCurrentItem(item) {
        const items = this.getAllItems({ includeDisabled: false });
        let activeItem = item.disabled ? items[0] : item;
        items.map((i2) => i2.setAttribute("tabindex", i2 === activeItem ? "0" : "-1"));
      }
      typeToSelect(key) {
        const items = this.getAllItems({ includeDisabled: false });
        clearTimeout(this.typeToSelectTimeout);
        this.typeToSelectTimeout = setTimeout(() => this.typeToSelectString = "", 750);
        this.typeToSelectString += key.toLowerCase();
        for (const item of items) {
          const slot = item.shadowRoot.querySelector("slot:not([name])");
          const label = getTextContent(slot).toLowerCase().trim();
          if (label.substring(0, this.typeToSelectString.length) === this.typeToSelectString) {
            item.focus();
            break;
          }
        }
      }
      handleClick(event) {
        const target = event.target;
        const item = target.closest("sl-menu-item");
        if (item && !item.disabled) {
          emit(this, "sl-select", { detail: { item } });
        }
      }
      handleKeyDown(event) {
        if (event.key === "Enter") {
          const item = this.getCurrentItem();
          event.preventDefault();
          if (item) {
            item.click();
          }
        }
        if (event.key === " ") {
          event.preventDefault();
        }
        if (["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) {
          const items = this.getAllItems({ includeDisabled: false });
          const activeItem = this.getCurrentItem();
          let index = activeItem ? items.indexOf(activeItem) : 0;
          if (items.length) {
            event.preventDefault();
            if (event.key === "ArrowDown") {
              index++;
            } else if (event.key === "ArrowUp") {
              index--;
            } else if (event.key === "Home") {
              index = 0;
            } else if (event.key === "End") {
              index = items.length - 1;
            }
            if (index < 0)
              index = 0;
            if (index > items.length - 1)
              index = items.length - 1;
            this.setCurrentItem(items[index]);
            items[index].focus();
            return;
          }
        }
        this.typeToSelect(event.key);
      }
      handleMouseDown(event) {
        const target = event.target;
        if (target.getAttribute("role") === "menuitem") {
          this.setCurrentItem(target);
          target.focus();
        }
      }
      handleSlotChange() {
        const items = this.getAllItems({ includeDisabled: false });
        if (items.length) {
          this.setCurrentItem(items[0]);
        }
      }
      render() {
        return T`
      <div
        part="base"
        class="menu"
        role="menu"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
      }
    };
    SlMenu.styles = menu_styles_default;
    __decorateClass([
      o6(".menu")
    ], SlMenu.prototype, "menu", 2);
    __decorateClass([
      o6("slot")
    ], SlMenu.prototype, "defaultSlot", 2);
    SlMenu = __decorateClass([
      n5("sl-menu")
    ], SlMenu);

    // src/components/menu-divider/menu-divider.styles.ts
    var menu_divider_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu-divider {
    border-top: solid 1px var(--sl-panel-border-color);
    margin: var(--sl-spacing-x-small) 0;
  }
`;

    // src/components/menu-divider/menu-divider.ts
    var SlMenuDivider = class extends h3 {
      render() {
        return T` <div part="base" class="menu-divider" role="separator" aria-hidden="true"></div> `;
      }
    };
    SlMenuDivider.styles = menu_divider_styles_default;
    SlMenuDivider = __decorateClass([
      n5("sl-menu-divider")
    ], SlMenuDivider);

    // src/components/menu-item/menu-item.styles.ts
    var menu_item_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    text-align: left;
    color: var(--sl-color-gray-700);
    padding: var(--sl-spacing-xx-small) var(--sl-spacing-x-large);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }
  .menu-item.menu-item--disabled {
    outline: none;
    color: var(--sl-color-gray-400);
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-right: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-left: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(:focus:not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-500);
    color: var(--sl-color-white);
  }

  .menu-item .menu-item__check {
    display: flex;
    position: absolute;
    left: 0.5em;
    top: calc(50% - 0.5em);
    visibility: hidden;
    align-items: center;
    font-size: inherit;
  }

  .menu-item--checked .menu-item__check {
    visibility: visible;
  }
`;

    // src/components/menu-item/menu-item.ts
    var SlMenuItem = class extends h3 {
      constructor() {
        super(...arguments);
        this.checked = false;
        this.value = "";
        this.disabled = false;
      }
      firstUpdated() {
        this.setAttribute("role", "menuitem");
      }
      handleCheckedChange() {
        this.setAttribute("aria-checked", String(this.checked));
      }
      handleDisabledChange() {
        this.setAttribute("aria-disabled", String(this.disabled));
      }
      render() {
        return T`
      <div
        part="base"
        class=${e({
      "menu-item": true,
      "menu-item--checked": this.checked,
      "menu-item--disabled": this.disabled
    })}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>
      </div>
    `;
      }
    };
    SlMenuItem.styles = menu_item_styles_default;
    __decorateClass([
      o6(".menu-item")
    ], SlMenuItem.prototype, "menuItem", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlMenuItem.prototype, "checked", 2);
    __decorateClass([
      e4()
    ], SlMenuItem.prototype, "value", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlMenuItem.prototype, "disabled", 2);
    __decorateClass([
      watch("checked")
    ], SlMenuItem.prototype, "handleCheckedChange", 1);
    __decorateClass([
      watch("disabled")
    ], SlMenuItem.prototype, "handleDisabledChange", 1);
    SlMenuItem = __decorateClass([
      n5("sl-menu-item")
    ], SlMenuItem);

    // src/internal/number.ts
    function formatBytes(bytes, options) {
      options = Object.assign({
        unit: "bytes",
        locale: void 0
      }, options);
      const byteUnits = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
      const bitUnits = ["b", "kbit", "Mbit", "Gbit", "Tbit", "Pbit", "Ebit", "Zbit", "Ybit"];
      const units = options.unit === "bytes" ? byteUnits : bitUnits;
      const isNegative = bytes < 0;
      bytes = Math.abs(bytes);
      if (bytes === 0)
        return "0 B";
      const i = Math.min(Math.floor(Math.log10(bytes) / 3), units.length - 1);
      const num = Number((bytes / Math.pow(1e3, i)).toPrecision(3));
      const numString = num.toLocaleString(options.locale);
      const prefix = isNegative ? "-" : "";
      return `${prefix}${numString} ${units[i]}`;
    }

    // src/components/format-bytes/format-bytes.ts
    var SlFormatBytes = class extends h3 {
      constructor() {
        super(...arguments);
        this.value = 0;
        this.unit = "bytes";
      }
      render() {
        return formatBytes(this.value, {
          unit: this.unit,
          locale: this.locale
        });
      }
    };
    __decorateClass([
      e4({ type: Number })
    ], SlFormatBytes.prototype, "value", 2);
    __decorateClass([
      e4()
    ], SlFormatBytes.prototype, "unit", 2);
    __decorateClass([
      e4()
    ], SlFormatBytes.prototype, "locale", 2);
    SlFormatBytes = __decorateClass([
      n5("sl-format-bytes")
    ], SlFormatBytes);

    // src/components/format-date/format-date.ts
    var SlFormatDate = class extends h3 {
      constructor() {
        super(...arguments);
        this.date = new Date();
        this.hourFormat = "auto";
      }
      render() {
        const date = new Date(this.date);
        const hour12 = this.hourFormat === "auto" ? void 0 : this.hourFormat === "12";
        if (isNaN(date.getMilliseconds())) {
          return;
        }
        return new Intl.DateTimeFormat(this.locale, {
          weekday: this.weekday,
          era: this.era,
          year: this.year,
          month: this.month,
          day: this.day,
          hour: this.hour,
          minute: this.minute,
          second: this.second,
          timeZoneName: this.timeZoneName,
          timeZone: this.timeZone,
          hour12
        }).format(date);
      }
    };
    __decorateClass([
      e4()
    ], SlFormatDate.prototype, "date", 2);
    __decorateClass([
      e4()
    ], SlFormatDate.prototype, "locale", 2);
    __decorateClass([
      e4()
    ], SlFormatDate.prototype, "weekday", 2);
    __decorateClass([
      e4()
    ], SlFormatDate.prototype, "era", 2);
    __decorateClass([
      e4()
    ], SlFormatDate.prototype, "year", 2);
    __decorateClass([
      e4()
    ], SlFormatDate.prototype, "month", 2);
    __decorateClass([
      e4()
    ], SlFormatDate.prototype, "day", 2);
    __decorateClass([
      e4()
    ], SlFormatDate.prototype, "hour", 2);
    __decorateClass([
      e4()
    ], SlFormatDate.prototype, "minute", 2);
    __decorateClass([
      e4()
    ], SlFormatDate.prototype, "second", 2);
    __decorateClass([
      e4({ attribute: "time-zone-name" })
    ], SlFormatDate.prototype, "timeZoneName", 2);
    __decorateClass([
      e4({ attribute: "time-zone" })
    ], SlFormatDate.prototype, "timeZone", 2);
    __decorateClass([
      e4({ attribute: "hour-format" })
    ], SlFormatDate.prototype, "hourFormat", 2);
    SlFormatDate = __decorateClass([
      n5("sl-format-date")
    ], SlFormatDate);

    // src/components/format-number/format-number.ts
    var SlFormatNumber = class extends h3 {
      constructor() {
        super(...arguments);
        this.value = 0;
        this.type = "decimal";
        this.noGrouping = false;
        this.currency = "USD";
        this.currencyDisplay = "symbol";
      }
      render() {
        if (isNaN(this.value)) {
          return "";
        }
        return new Intl.NumberFormat(this.locale, {
          style: this.type,
          currency: this.currency,
          currencyDisplay: this.currencyDisplay,
          useGrouping: !this.noGrouping,
          minimumIntegerDigits: this.minimumIntegerDigits,
          minimumFractionDigits: this.minimumFractionDigits,
          maximumFractionDigits: this.maximumFractionDigits,
          minimumSignificantDigits: this.minimumSignificantDigits,
          maximumSignificantDigits: this.maximumSignificantDigits
        }).format(this.value);
      }
    };
    __decorateClass([
      e4({ type: Number })
    ], SlFormatNumber.prototype, "value", 2);
    __decorateClass([
      e4()
    ], SlFormatNumber.prototype, "locale", 2);
    __decorateClass([
      e4()
    ], SlFormatNumber.prototype, "type", 2);
    __decorateClass([
      e4({ attribute: "no-grouping", type: Boolean })
    ], SlFormatNumber.prototype, "noGrouping", 2);
    __decorateClass([
      e4()
    ], SlFormatNumber.prototype, "currency", 2);
    __decorateClass([
      e4({ attribute: "currency-display" })
    ], SlFormatNumber.prototype, "currencyDisplay", 2);
    __decorateClass([
      e4({ attribute: "minimum-integer-digits", type: Number })
    ], SlFormatNumber.prototype, "minimumIntegerDigits", 2);
    __decorateClass([
      e4({ attribute: "minimum-fraction-digits", type: Number })
    ], SlFormatNumber.prototype, "minimumFractionDigits", 2);
    __decorateClass([
      e4({ attribute: "maximum-fraction-digits", type: Number })
    ], SlFormatNumber.prototype, "maximumFractionDigits", 2);
    __decorateClass([
      e4({ attribute: "minimum-significant-digits", type: Number })
    ], SlFormatNumber.prototype, "minimumSignificantDigits", 2);
    __decorateClass([
      e4({ attribute: "maximum-significant-digits", type: Number })
    ], SlFormatNumber.prototype, "maximumSignificantDigits", 2);
    SlFormatNumber = __decorateClass([
      n5("sl-format-number")
    ], SlFormatNumber);

    // src/components/card/card.styles.ts
    var card_styles_default = i2$1`
  ${component_styles_default}

  :host {
    --border-color: var(--sl-color-gray-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-color-white);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image ::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card__body {
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;

    // src/components/card/card.ts
    var SlCard = class extends h3 {
      constructor() {
        super(...arguments);
        this.hasFooter = false;
        this.hasImage = false;
        this.hasHeader = false;
      }
      handleSlotChange() {
        this.hasFooter = hasSlot(this, "footer");
        this.hasImage = hasSlot(this, "image");
        this.hasHeader = hasSlot(this, "header");
      }
      render() {
        return T`
      <div
        part="base"
        class=${e({
      card: true,
      "card--has-footer": this.hasFooter,
      "card--has-image": this.hasImage,
      "card--has-header": this.hasHeader
    })}
      >
        <div part="image" class="card__image">
          <slot name="image" @slotchange=${this.handleSlotChange}></slot>
        </div>

        <div part="header" class="card__header">
          <slot name="header" @slotchange=${this.handleSlotChange}></slot>
        </div>

        <div part="body" class="card__body">
          <slot></slot>
        </div>

        <div part="footer" class="card__footer">
          <slot name="footer" @slotchange=${this.handleSlotChange}></slot>
        </div>
      </div>
    `;
      }
    };
    SlCard.styles = card_styles_default;
    __decorateClass([
      r4()
    ], SlCard.prototype, "hasFooter", 2);
    __decorateClass([
      r4()
    ], SlCard.prototype, "hasImage", 2);
    __decorateClass([
      r4()
    ], SlCard.prototype, "hasHeader", 2);
    SlCard = __decorateClass([
      n5("sl-card")
    ], SlCard);

    // src/components/checkbox/checkbox.styles.ts
    var checkbox_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .checkbox {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-white);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__control input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__control .checkbox__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .checkbox__control .checkbox__icon svg {
    width: 100%;
    height: 100%;
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox.checkbox--focused:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control {
    border-color: var(--sl-input-border-color-focus);
    background-color: var(--sl-input-background-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-400);
    background-color: var(--sl-color-primary-400);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled).checkbox--focused .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled).checkbox--focused .checkbox__control {
    border-color: var(--sl-color-primary-400);
    background-color: var(--sl-color-primary-400);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    line-height: var(--sl-toggle-size);
    margin-left: 0.5em;
    user-select: none;
  }
`;

    // src/components/checkbox/checkbox.ts
    var id$5 = 0;
    var SlCheckbox = class extends h3 {
      constructor() {
        super(...arguments);
        this.inputId = `checkbox-${++id$5}`;
        this.labelId = `checkbox-label-${id$5}`;
        this.hasFocus = false;
        this.disabled = false;
        this.required = false;
        this.checked = false;
        this.indeterminate = false;
        this.invalid = false;
      }
      firstUpdated() {
        this.invalid = !this.input.checkValidity();
      }
      click() {
        this.input.click();
      }
      focus(options) {
        this.input.focus(options);
      }
      blur() {
        this.input.blur();
      }
      reportValidity() {
        return this.input.reportValidity();
      }
      setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
      }
      handleClick() {
        this.checked = !this.checked;
        this.indeterminate = false;
      }
      handleBlur() {
        this.hasFocus = false;
        emit(this, "sl-blur");
      }
      handleDisabledChange() {
        if (this.input) {
          this.input.disabled = this.disabled;
          this.invalid = !this.input.checkValidity();
        }
      }
      handleFocus() {
        this.hasFocus = true;
        emit(this, "sl-focus");
      }
      handleLabelMouseDown(event) {
        event.preventDefault();
        this.input.focus();
      }
      handleStateChange() {
        this.invalid = !this.input.checkValidity();
        emit(this, "sl-change");
      }
      render() {
        return T`
      <label
        part="base"
        class=${e({
      checkbox: true,
      "checkbox--checked": this.checked,
      "checkbox--disabled": this.disabled,
      "checkbox--focused": this.hasFocus,
      "checkbox--indeterminate": this.indeterminate
    })}
        for=${this.inputId}
        @mousedown=${this.handleLabelMouseDown}
      >
        <span part="control" class="checkbox__control">
          ${this.checked ? T`
                <span part="checked-icon" class="checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(3.428571, 3.428571)">
                          <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                          <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              ` : ""}
          ${!this.checked && this.indeterminate ? T`
                <span part="indeterminate-icon" class="checkbox__icon">
                  <svg viewBox="0 0 16 16">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                      <g stroke="currentColor" stroke-width="2">
                        <g transform="translate(2.285714, 6.857143)">
                          <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
              ` : ""}

          <input
            id=${this.inputId}
            type="checkbox"
            name=${l$1(this.name)}
            value=${l$1(this.value)}
            .indeterminate=${l(this.indeterminate)}
            .checked=${l(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="checkbox"
            aria-checked=${this.checked ? "true" : "false"}
            aria-labelledby=${this.labelId}
            @click=${this.handleClick}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />
        </span>

        <span part="label" id=${this.labelId} class="checkbox__label">
          <slot></slot>
        </span>
      </label>
    `;
      }
    };
    SlCheckbox.styles = checkbox_styles_default;
    __decorateClass([
      o6('input[type="checkbox"]')
    ], SlCheckbox.prototype, "input", 2);
    __decorateClass([
      r4()
    ], SlCheckbox.prototype, "hasFocus", 2);
    __decorateClass([
      e4()
    ], SlCheckbox.prototype, "name", 2);
    __decorateClass([
      e4()
    ], SlCheckbox.prototype, "value", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlCheckbox.prototype, "disabled", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlCheckbox.prototype, "required", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlCheckbox.prototype, "checked", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlCheckbox.prototype, "indeterminate", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlCheckbox.prototype, "invalid", 2);
    __decorateClass([
      watch("disabled")
    ], SlCheckbox.prototype, "handleDisabledChange", 1);
    __decorateClass([
      watch("checked", { waitUntilFirstUpdate: true }),
      watch("indeterminate", { waitUntilFirstUpdate: true })
    ], SlCheckbox.prototype, "handleStateChange", 1);
    SlCheckbox = __decorateClass([
      n5("sl-checkbox")
    ], SlCheckbox);

    // node_modules/color-name/index.js
    var require_color_name = __commonJS({
      "node_modules/color-name/index.js"(exports, module) {
        module.exports = {
          "aliceblue": [240, 248, 255],
          "antiquewhite": [250, 235, 215],
          "aqua": [0, 255, 255],
          "aquamarine": [127, 255, 212],
          "azure": [240, 255, 255],
          "beige": [245, 245, 220],
          "bisque": [255, 228, 196],
          "black": [0, 0, 0],
          "blanchedalmond": [255, 235, 205],
          "blue": [0, 0, 255],
          "blueviolet": [138, 43, 226],
          "brown": [165, 42, 42],
          "burlywood": [222, 184, 135],
          "cadetblue": [95, 158, 160],
          "chartreuse": [127, 255, 0],
          "chocolate": [210, 105, 30],
          "coral": [255, 127, 80],
          "cornflowerblue": [100, 149, 237],
          "cornsilk": [255, 248, 220],
          "crimson": [220, 20, 60],
          "cyan": [0, 255, 255],
          "darkblue": [0, 0, 139],
          "darkcyan": [0, 139, 139],
          "darkgoldenrod": [184, 134, 11],
          "darkgray": [169, 169, 169],
          "darkgreen": [0, 100, 0],
          "darkgrey": [169, 169, 169],
          "darkkhaki": [189, 183, 107],
          "darkmagenta": [139, 0, 139],
          "darkolivegreen": [85, 107, 47],
          "darkorange": [255, 140, 0],
          "darkorchid": [153, 50, 204],
          "darkred": [139, 0, 0],
          "darksalmon": [233, 150, 122],
          "darkseagreen": [143, 188, 143],
          "darkslateblue": [72, 61, 139],
          "darkslategray": [47, 79, 79],
          "darkslategrey": [47, 79, 79],
          "darkturquoise": [0, 206, 209],
          "darkviolet": [148, 0, 211],
          "deeppink": [255, 20, 147],
          "deepskyblue": [0, 191, 255],
          "dimgray": [105, 105, 105],
          "dimgrey": [105, 105, 105],
          "dodgerblue": [30, 144, 255],
          "firebrick": [178, 34, 34],
          "floralwhite": [255, 250, 240],
          "forestgreen": [34, 139, 34],
          "fuchsia": [255, 0, 255],
          "gainsboro": [220, 220, 220],
          "ghostwhite": [248, 248, 255],
          "gold": [255, 215, 0],
          "goldenrod": [218, 165, 32],
          "gray": [128, 128, 128],
          "green": [0, 128, 0],
          "greenyellow": [173, 255, 47],
          "grey": [128, 128, 128],
          "honeydew": [240, 255, 240],
          "hotpink": [255, 105, 180],
          "indianred": [205, 92, 92],
          "indigo": [75, 0, 130],
          "ivory": [255, 255, 240],
          "khaki": [240, 230, 140],
          "lavender": [230, 230, 250],
          "lavenderblush": [255, 240, 245],
          "lawngreen": [124, 252, 0],
          "lemonchiffon": [255, 250, 205],
          "lightblue": [173, 216, 230],
          "lightcoral": [240, 128, 128],
          "lightcyan": [224, 255, 255],
          "lightgoldenrodyellow": [250, 250, 210],
          "lightgray": [211, 211, 211],
          "lightgreen": [144, 238, 144],
          "lightgrey": [211, 211, 211],
          "lightpink": [255, 182, 193],
          "lightsalmon": [255, 160, 122],
          "lightseagreen": [32, 178, 170],
          "lightskyblue": [135, 206, 250],
          "lightslategray": [119, 136, 153],
          "lightslategrey": [119, 136, 153],
          "lightsteelblue": [176, 196, 222],
          "lightyellow": [255, 255, 224],
          "lime": [0, 255, 0],
          "limegreen": [50, 205, 50],
          "linen": [250, 240, 230],
          "magenta": [255, 0, 255],
          "maroon": [128, 0, 0],
          "mediumaquamarine": [102, 205, 170],
          "mediumblue": [0, 0, 205],
          "mediumorchid": [186, 85, 211],
          "mediumpurple": [147, 112, 219],
          "mediumseagreen": [60, 179, 113],
          "mediumslateblue": [123, 104, 238],
          "mediumspringgreen": [0, 250, 154],
          "mediumturquoise": [72, 209, 204],
          "mediumvioletred": [199, 21, 133],
          "midnightblue": [25, 25, 112],
          "mintcream": [245, 255, 250],
          "mistyrose": [255, 228, 225],
          "moccasin": [255, 228, 181],
          "navajowhite": [255, 222, 173],
          "navy": [0, 0, 128],
          "oldlace": [253, 245, 230],
          "olive": [128, 128, 0],
          "olivedrab": [107, 142, 35],
          "orange": [255, 165, 0],
          "orangered": [255, 69, 0],
          "orchid": [218, 112, 214],
          "palegoldenrod": [238, 232, 170],
          "palegreen": [152, 251, 152],
          "paleturquoise": [175, 238, 238],
          "palevioletred": [219, 112, 147],
          "papayawhip": [255, 239, 213],
          "peachpuff": [255, 218, 185],
          "peru": [205, 133, 63],
          "pink": [255, 192, 203],
          "plum": [221, 160, 221],
          "powderblue": [176, 224, 230],
          "purple": [128, 0, 128],
          "rebeccapurple": [102, 51, 153],
          "red": [255, 0, 0],
          "rosybrown": [188, 143, 143],
          "royalblue": [65, 105, 225],
          "saddlebrown": [139, 69, 19],
          "salmon": [250, 128, 114],
          "sandybrown": [244, 164, 96],
          "seagreen": [46, 139, 87],
          "seashell": [255, 245, 238],
          "sienna": [160, 82, 45],
          "silver": [192, 192, 192],
          "skyblue": [135, 206, 235],
          "slateblue": [106, 90, 205],
          "slategray": [112, 128, 144],
          "slategrey": [112, 128, 144],
          "snow": [255, 250, 250],
          "springgreen": [0, 255, 127],
          "steelblue": [70, 130, 180],
          "tan": [210, 180, 140],
          "teal": [0, 128, 128],
          "thistle": [216, 191, 216],
          "tomato": [255, 99, 71],
          "turquoise": [64, 224, 208],
          "violet": [238, 130, 238],
          "wheat": [245, 222, 179],
          "white": [255, 255, 255],
          "whitesmoke": [245, 245, 245],
          "yellow": [255, 255, 0],
          "yellowgreen": [154, 205, 50]
        };
      }
    });

    // node_modules/is-arrayish/index.js
    var require_is_arrayish = __commonJS({
      "node_modules/is-arrayish/index.js"(exports, module) {
        module.exports = function isArrayish(obj) {
          if (!obj || typeof obj === "string") {
            return false;
          }
          return obj instanceof Array || Array.isArray(obj) || obj.length >= 0 && (obj.splice instanceof Function || Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== "String");
        };
      }
    });

    // node_modules/simple-swizzle/index.js
    var require_simple_swizzle = __commonJS({
      "node_modules/simple-swizzle/index.js"(exports, module) {
        var isArrayish = require_is_arrayish();
        var concat = Array.prototype.concat;
        var slice = Array.prototype.slice;
        var swizzle = module.exports = function swizzle2(args) {
          var results = [];
          for (var i3 = 0, len = args.length; i3 < len; i3++) {
            var arg = args[i3];
            if (isArrayish(arg)) {
              results = concat.call(results, slice.call(arg));
            } else {
              results.push(arg);
            }
          }
          return results;
        };
        swizzle.wrap = function(fn) {
          return function() {
            return fn(swizzle(arguments));
          };
        };
      }
    });

    // node_modules/color-string/index.js
    var require_color_string = __commonJS({
      "node_modules/color-string/index.js"(exports, module) {
        var colorNames = require_color_name();
        var swizzle = require_simple_swizzle();
        var reverseNames = {};
        for (var name in colorNames) {
          if (colorNames.hasOwnProperty(name)) {
            reverseNames[colorNames[name]] = name;
          }
        }
        var cs = module.exports = {
          to: {},
          get: {}
        };
        cs.get = function(string) {
          var prefix = string.substring(0, 3).toLowerCase();
          var val;
          var model;
          switch (prefix) {
            case "hsl":
              val = cs.get.hsl(string);
              model = "hsl";
              break;
            case "hwb":
              val = cs.get.hwb(string);
              model = "hwb";
              break;
            default:
              val = cs.get.rgb(string);
              model = "rgb";
              break;
          }
          if (!val) {
            return null;
          }
          return { model, value: val };
        };
        cs.get.rgb = function(string) {
          if (!string) {
            return null;
          }
          var abbr = /^#([a-f0-9]{3,4})$/i;
          var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
          var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
          var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
          var keyword = /(\D+)/;
          var rgb = [0, 0, 0, 1];
          var match;
          var i3;
          var hexAlpha;
          if (match = string.match(hex)) {
            hexAlpha = match[2];
            match = match[1];
            for (i3 = 0; i3 < 3; i3++) {
              var i22 = i3 * 2;
              rgb[i3] = parseInt(match.slice(i22, i22 + 2), 16);
            }
            if (hexAlpha) {
              rgb[3] = parseInt(hexAlpha, 16) / 255;
            }
          } else if (match = string.match(abbr)) {
            match = match[1];
            hexAlpha = match[3];
            for (i3 = 0; i3 < 3; i3++) {
              rgb[i3] = parseInt(match[i3] + match[i3], 16);
            }
            if (hexAlpha) {
              rgb[3] = parseInt(hexAlpha + hexAlpha, 16) / 255;
            }
          } else if (match = string.match(rgba)) {
            for (i3 = 0; i3 < 3; i3++) {
              rgb[i3] = parseInt(match[i3 + 1], 0);
            }
            if (match[4]) {
              rgb[3] = parseFloat(match[4]);
            }
          } else if (match = string.match(per)) {
            for (i3 = 0; i3 < 3; i3++) {
              rgb[i3] = Math.round(parseFloat(match[i3 + 1]) * 2.55);
            }
            if (match[4]) {
              rgb[3] = parseFloat(match[4]);
            }
          } else if (match = string.match(keyword)) {
            if (match[1] === "transparent") {
              return [0, 0, 0, 0];
            }
            rgb = colorNames[match[1]];
            if (!rgb) {
              return null;
            }
            rgb[3] = 1;
            return rgb;
          } else {
            return null;
          }
          for (i3 = 0; i3 < 3; i3++) {
            rgb[i3] = clamp2(rgb[i3], 0, 255);
          }
          rgb[3] = clamp2(rgb[3], 0, 1);
          return rgb;
        };
        cs.get.hsl = function(string) {
          if (!string) {
            return null;
          }
          var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
          var match = string.match(hsl);
          if (match) {
            var alpha = parseFloat(match[4]);
            var h2 = (parseFloat(match[1]) + 360) % 360;
            var s = clamp2(parseFloat(match[2]), 0, 100);
            var l3 = clamp2(parseFloat(match[3]), 0, 100);
            var a = clamp2(isNaN(alpha) ? 1 : alpha, 0, 1);
            return [h2, s, l3, a];
          }
          return null;
        };
        cs.get.hwb = function(string) {
          if (!string) {
            return null;
          }
          var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
          var match = string.match(hwb);
          if (match) {
            var alpha = parseFloat(match[4]);
            var h2 = (parseFloat(match[1]) % 360 + 360) % 360;
            var w = clamp2(parseFloat(match[2]), 0, 100);
            var b = clamp2(parseFloat(match[3]), 0, 100);
            var a = clamp2(isNaN(alpha) ? 1 : alpha, 0, 1);
            return [h2, w, b, a];
          }
          return null;
        };
        cs.to.hex = function() {
          var rgba = swizzle(arguments);
          return "#" + hexDouble(rgba[0]) + hexDouble(rgba[1]) + hexDouble(rgba[2]) + (rgba[3] < 1 ? hexDouble(Math.round(rgba[3] * 255)) : "");
        };
        cs.to.rgb = function() {
          var rgba = swizzle(arguments);
          return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ")" : "rgba(" + Math.round(rgba[0]) + ", " + Math.round(rgba[1]) + ", " + Math.round(rgba[2]) + ", " + rgba[3] + ")";
        };
        cs.to.rgb.percent = function() {
          var rgba = swizzle(arguments);
          var r2 = Math.round(rgba[0] / 255 * 100);
          var g = Math.round(rgba[1] / 255 * 100);
          var b = Math.round(rgba[2] / 255 * 100);
          return rgba.length < 4 || rgba[3] === 1 ? "rgb(" + r2 + "%, " + g + "%, " + b + "%)" : "rgba(" + r2 + "%, " + g + "%, " + b + "%, " + rgba[3] + ")";
        };
        cs.to.hsl = function() {
          var hsla = swizzle(arguments);
          return hsla.length < 4 || hsla[3] === 1 ? "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)" : "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + hsla[3] + ")";
        };
        cs.to.hwb = function() {
          var hwba = swizzle(arguments);
          var a = "";
          if (hwba.length >= 4 && hwba[3] !== 1) {
            a = ", " + hwba[3];
          }
          return "hwb(" + hwba[0] + ", " + hwba[1] + "%, " + hwba[2] + "%" + a + ")";
        };
        cs.to.keyword = function(rgb) {
          return reverseNames[rgb.slice(0, 3)];
        };
        function clamp2(num, min, max) {
          return Math.min(Math.max(min, num), max);
        }
        function hexDouble(num) {
          var str = num.toString(16).toUpperCase();
          return str.length < 2 ? "0" + str : str;
        }
      }
    });

    // node_modules/color-convert/conversions.js
    var require_conversions = __commonJS({
      "node_modules/color-convert/conversions.js"(exports, module) {
        var cssKeywords = require_color_name();
        var reverseKeywords = {};
        for (var key in cssKeywords) {
          if (cssKeywords.hasOwnProperty(key)) {
            reverseKeywords[cssKeywords[key]] = key;
          }
        }
        var convert = module.exports = {
          rgb: { channels: 3, labels: "rgb" },
          hsl: { channels: 3, labels: "hsl" },
          hsv: { channels: 3, labels: "hsv" },
          hwb: { channels: 3, labels: "hwb" },
          cmyk: { channels: 4, labels: "cmyk" },
          xyz: { channels: 3, labels: "xyz" },
          lab: { channels: 3, labels: "lab" },
          lch: { channels: 3, labels: "lch" },
          hex: { channels: 1, labels: ["hex"] },
          keyword: { channels: 1, labels: ["keyword"] },
          ansi16: { channels: 1, labels: ["ansi16"] },
          ansi256: { channels: 1, labels: ["ansi256"] },
          hcg: { channels: 3, labels: ["h", "c", "g"] },
          apple: { channels: 3, labels: ["r16", "g16", "b16"] },
          gray: { channels: 1, labels: ["gray"] }
        };
        for (var model in convert) {
          if (convert.hasOwnProperty(model)) {
            if (!("channels" in convert[model])) {
              throw new Error("missing channels property: " + model);
            }
            if (!("labels" in convert[model])) {
              throw new Error("missing channel labels property: " + model);
            }
            if (convert[model].labels.length !== convert[model].channels) {
              throw new Error("channel and label counts mismatch: " + model);
            }
            channels = convert[model].channels;
            labels = convert[model].labels;
            delete convert[model].channels;
            delete convert[model].labels;
            Object.defineProperty(convert[model], "channels", { value: channels });
            Object.defineProperty(convert[model], "labels", { value: labels });
          }
        }
        var channels;
        var labels;
        convert.rgb.hsl = function(rgb) {
          var r2 = rgb[0] / 255;
          var g = rgb[1] / 255;
          var b = rgb[2] / 255;
          var min = Math.min(r2, g, b);
          var max = Math.max(r2, g, b);
          var delta = max - min;
          var h2;
          var s;
          var l3;
          if (max === min) {
            h2 = 0;
          } else if (r2 === max) {
            h2 = (g - b) / delta;
          } else if (g === max) {
            h2 = 2 + (b - r2) / delta;
          } else if (b === max) {
            h2 = 4 + (r2 - g) / delta;
          }
          h2 = Math.min(h2 * 60, 360);
          if (h2 < 0) {
            h2 += 360;
          }
          l3 = (min + max) / 2;
          if (max === min) {
            s = 0;
          } else if (l3 <= 0.5) {
            s = delta / (max + min);
          } else {
            s = delta / (2 - max - min);
          }
          return [h2, s * 100, l3 * 100];
        };
        convert.rgb.hsv = function(rgb) {
          var rdif;
          var gdif;
          var bdif;
          var h2;
          var s;
          var r2 = rgb[0] / 255;
          var g = rgb[1] / 255;
          var b = rgb[2] / 255;
          var v = Math.max(r2, g, b);
          var diff = v - Math.min(r2, g, b);
          var diffc = function(c) {
            return (v - c) / 6 / diff + 1 / 2;
          };
          if (diff === 0) {
            h2 = s = 0;
          } else {
            s = diff / v;
            rdif = diffc(r2);
            gdif = diffc(g);
            bdif = diffc(b);
            if (r2 === v) {
              h2 = bdif - gdif;
            } else if (g === v) {
              h2 = 1 / 3 + rdif - bdif;
            } else if (b === v) {
              h2 = 2 / 3 + gdif - rdif;
            }
            if (h2 < 0) {
              h2 += 1;
            } else if (h2 > 1) {
              h2 -= 1;
            }
          }
          return [
            h2 * 360,
            s * 100,
            v * 100
          ];
        };
        convert.rgb.hwb = function(rgb) {
          var r2 = rgb[0];
          var g = rgb[1];
          var b = rgb[2];
          var h2 = convert.rgb.hsl(rgb)[0];
          var w = 1 / 255 * Math.min(r2, Math.min(g, b));
          b = 1 - 1 / 255 * Math.max(r2, Math.max(g, b));
          return [h2, w * 100, b * 100];
        };
        convert.rgb.cmyk = function(rgb) {
          var r2 = rgb[0] / 255;
          var g = rgb[1] / 255;
          var b = rgb[2] / 255;
          var c;
          var m;
          var y;
          var k;
          k = Math.min(1 - r2, 1 - g, 1 - b);
          c = (1 - r2 - k) / (1 - k) || 0;
          m = (1 - g - k) / (1 - k) || 0;
          y = (1 - b - k) / (1 - k) || 0;
          return [c * 100, m * 100, y * 100, k * 100];
        };
        function comparativeDistance(x, y) {
          return Math.pow(x[0] - y[0], 2) + Math.pow(x[1] - y[1], 2) + Math.pow(x[2] - y[2], 2);
        }
        convert.rgb.keyword = function(rgb) {
          var reversed = reverseKeywords[rgb];
          if (reversed) {
            return reversed;
          }
          var currentClosestDistance = Infinity;
          var currentClosestKeyword;
          for (var keyword in cssKeywords) {
            if (cssKeywords.hasOwnProperty(keyword)) {
              var value = cssKeywords[keyword];
              var distance = comparativeDistance(rgb, value);
              if (distance < currentClosestDistance) {
                currentClosestDistance = distance;
                currentClosestKeyword = keyword;
              }
            }
          }
          return currentClosestKeyword;
        };
        convert.keyword.rgb = function(keyword) {
          return cssKeywords[keyword];
        };
        convert.rgb.xyz = function(rgb) {
          var r2 = rgb[0] / 255;
          var g = rgb[1] / 255;
          var b = rgb[2] / 255;
          r2 = r2 > 0.04045 ? Math.pow((r2 + 0.055) / 1.055, 2.4) : r2 / 12.92;
          g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
          b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;
          var x = r2 * 0.4124 + g * 0.3576 + b * 0.1805;
          var y = r2 * 0.2126 + g * 0.7152 + b * 0.0722;
          var z = r2 * 0.0193 + g * 0.1192 + b * 0.9505;
          return [x * 100, y * 100, z * 100];
        };
        convert.rgb.lab = function(rgb) {
          var xyz = convert.rgb.xyz(rgb);
          var x = xyz[0];
          var y = xyz[1];
          var z = xyz[2];
          var l3;
          var a;
          var b;
          x /= 95.047;
          y /= 100;
          z /= 108.883;
          x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
          y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
          z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
          l3 = 116 * y - 16;
          a = 500 * (x - y);
          b = 200 * (y - z);
          return [l3, a, b];
        };
        convert.hsl.rgb = function(hsl) {
          var h2 = hsl[0] / 360;
          var s = hsl[1] / 100;
          var l3 = hsl[2] / 100;
          var t1;
          var t2;
          var t3;
          var rgb;
          var val;
          if (s === 0) {
            val = l3 * 255;
            return [val, val, val];
          }
          if (l3 < 0.5) {
            t2 = l3 * (1 + s);
          } else {
            t2 = l3 + s - l3 * s;
          }
          t1 = 2 * l3 - t2;
          rgb = [0, 0, 0];
          for (var i3 = 0; i3 < 3; i3++) {
            t3 = h2 + 1 / 3 * -(i3 - 1);
            if (t3 < 0) {
              t3++;
            }
            if (t3 > 1) {
              t3--;
            }
            if (6 * t3 < 1) {
              val = t1 + (t2 - t1) * 6 * t3;
            } else if (2 * t3 < 1) {
              val = t2;
            } else if (3 * t3 < 2) {
              val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
            } else {
              val = t1;
            }
            rgb[i3] = val * 255;
          }
          return rgb;
        };
        convert.hsl.hsv = function(hsl) {
          var h2 = hsl[0];
          var s = hsl[1] / 100;
          var l3 = hsl[2] / 100;
          var smin = s;
          var lmin = Math.max(l3, 0.01);
          var sv;
          var v;
          l3 *= 2;
          s *= l3 <= 1 ? l3 : 2 - l3;
          smin *= lmin <= 1 ? lmin : 2 - lmin;
          v = (l3 + s) / 2;
          sv = l3 === 0 ? 2 * smin / (lmin + smin) : 2 * s / (l3 + s);
          return [h2, sv * 100, v * 100];
        };
        convert.hsv.rgb = function(hsv) {
          var h2 = hsv[0] / 60;
          var s = hsv[1] / 100;
          var v = hsv[2] / 100;
          var hi = Math.floor(h2) % 6;
          var f = h2 - Math.floor(h2);
          var p = 255 * v * (1 - s);
          var q = 255 * v * (1 - s * f);
          var t = 255 * v * (1 - s * (1 - f));
          v *= 255;
          switch (hi) {
            case 0:
              return [v, t, p];
            case 1:
              return [q, v, p];
            case 2:
              return [p, v, t];
            case 3:
              return [p, q, v];
            case 4:
              return [t, p, v];
            case 5:
              return [v, p, q];
          }
        };
        convert.hsv.hsl = function(hsv) {
          var h2 = hsv[0];
          var s = hsv[1] / 100;
          var v = hsv[2] / 100;
          var vmin = Math.max(v, 0.01);
          var lmin;
          var sl;
          var l3;
          l3 = (2 - s) * v;
          lmin = (2 - s) * vmin;
          sl = s * vmin;
          sl /= lmin <= 1 ? lmin : 2 - lmin;
          sl = sl || 0;
          l3 /= 2;
          return [h2, sl * 100, l3 * 100];
        };
        convert.hwb.rgb = function(hwb) {
          var h2 = hwb[0] / 360;
          var wh = hwb[1] / 100;
          var bl = hwb[2] / 100;
          var ratio = wh + bl;
          var i3;
          var v;
          var f;
          var n2;
          if (ratio > 1) {
            wh /= ratio;
            bl /= ratio;
          }
          i3 = Math.floor(6 * h2);
          v = 1 - bl;
          f = 6 * h2 - i3;
          if ((i3 & 1) !== 0) {
            f = 1 - f;
          }
          n2 = wh + f * (v - wh);
          var r2;
          var g;
          var b;
          switch (i3) {
            default:
            case 6:
            case 0:
              r2 = v;
              g = n2;
              b = wh;
              break;
            case 1:
              r2 = n2;
              g = v;
              b = wh;
              break;
            case 2:
              r2 = wh;
              g = v;
              b = n2;
              break;
            case 3:
              r2 = wh;
              g = n2;
              b = v;
              break;
            case 4:
              r2 = n2;
              g = wh;
              b = v;
              break;
            case 5:
              r2 = v;
              g = wh;
              b = n2;
              break;
          }
          return [r2 * 255, g * 255, b * 255];
        };
        convert.cmyk.rgb = function(cmyk) {
          var c = cmyk[0] / 100;
          var m = cmyk[1] / 100;
          var y = cmyk[2] / 100;
          var k = cmyk[3] / 100;
          var r2;
          var g;
          var b;
          r2 = 1 - Math.min(1, c * (1 - k) + k);
          g = 1 - Math.min(1, m * (1 - k) + k);
          b = 1 - Math.min(1, y * (1 - k) + k);
          return [r2 * 255, g * 255, b * 255];
        };
        convert.xyz.rgb = function(xyz) {
          var x = xyz[0] / 100;
          var y = xyz[1] / 100;
          var z = xyz[2] / 100;
          var r2;
          var g;
          var b;
          r2 = x * 3.2406 + y * -1.5372 + z * -0.4986;
          g = x * -0.9689 + y * 1.8758 + z * 0.0415;
          b = x * 0.0557 + y * -0.204 + z * 1.057;
          r2 = r2 > 31308e-7 ? 1.055 * Math.pow(r2, 1 / 2.4) - 0.055 : r2 * 12.92;
          g = g > 31308e-7 ? 1.055 * Math.pow(g, 1 / 2.4) - 0.055 : g * 12.92;
          b = b > 31308e-7 ? 1.055 * Math.pow(b, 1 / 2.4) - 0.055 : b * 12.92;
          r2 = Math.min(Math.max(0, r2), 1);
          g = Math.min(Math.max(0, g), 1);
          b = Math.min(Math.max(0, b), 1);
          return [r2 * 255, g * 255, b * 255];
        };
        convert.xyz.lab = function(xyz) {
          var x = xyz[0];
          var y = xyz[1];
          var z = xyz[2];
          var l3;
          var a;
          var b;
          x /= 95.047;
          y /= 100;
          z /= 108.883;
          x = x > 8856e-6 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
          y = y > 8856e-6 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
          z = z > 8856e-6 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;
          l3 = 116 * y - 16;
          a = 500 * (x - y);
          b = 200 * (y - z);
          return [l3, a, b];
        };
        convert.lab.xyz = function(lab) {
          var l3 = lab[0];
          var a = lab[1];
          var b = lab[2];
          var x;
          var y;
          var z;
          y = (l3 + 16) / 116;
          x = a / 500 + y;
          z = y - b / 200;
          var y2 = Math.pow(y, 3);
          var x2 = Math.pow(x, 3);
          var z2 = Math.pow(z, 3);
          y = y2 > 8856e-6 ? y2 : (y - 16 / 116) / 7.787;
          x = x2 > 8856e-6 ? x2 : (x - 16 / 116) / 7.787;
          z = z2 > 8856e-6 ? z2 : (z - 16 / 116) / 7.787;
          x *= 95.047;
          y *= 100;
          z *= 108.883;
          return [x, y, z];
        };
        convert.lab.lch = function(lab) {
          var l3 = lab[0];
          var a = lab[1];
          var b = lab[2];
          var hr;
          var h2;
          var c;
          hr = Math.atan2(b, a);
          h2 = hr * 360 / 2 / Math.PI;
          if (h2 < 0) {
            h2 += 360;
          }
          c = Math.sqrt(a * a + b * b);
          return [l3, c, h2];
        };
        convert.lch.lab = function(lch) {
          var l3 = lch[0];
          var c = lch[1];
          var h2 = lch[2];
          var a;
          var b;
          var hr;
          hr = h2 / 360 * 2 * Math.PI;
          a = c * Math.cos(hr);
          b = c * Math.sin(hr);
          return [l3, a, b];
        };
        convert.rgb.ansi16 = function(args) {
          var r2 = args[0];
          var g = args[1];
          var b = args[2];
          var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2];
          value = Math.round(value / 50);
          if (value === 0) {
            return 30;
          }
          var ansi = 30 + (Math.round(b / 255) << 2 | Math.round(g / 255) << 1 | Math.round(r2 / 255));
          if (value === 2) {
            ansi += 60;
          }
          return ansi;
        };
        convert.hsv.ansi16 = function(args) {
          return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
        };
        convert.rgb.ansi256 = function(args) {
          var r2 = args[0];
          var g = args[1];
          var b = args[2];
          if (r2 === g && g === b) {
            if (r2 < 8) {
              return 16;
            }
            if (r2 > 248) {
              return 231;
            }
            return Math.round((r2 - 8) / 247 * 24) + 232;
          }
          var ansi = 16 + 36 * Math.round(r2 / 255 * 5) + 6 * Math.round(g / 255 * 5) + Math.round(b / 255 * 5);
          return ansi;
        };
        convert.ansi16.rgb = function(args) {
          var color2 = args % 10;
          if (color2 === 0 || color2 === 7) {
            if (args > 50) {
              color2 += 3.5;
            }
            color2 = color2 / 10.5 * 255;
            return [color2, color2, color2];
          }
          var mult = (~~(args > 50) + 1) * 0.5;
          var r2 = (color2 & 1) * mult * 255;
          var g = (color2 >> 1 & 1) * mult * 255;
          var b = (color2 >> 2 & 1) * mult * 255;
          return [r2, g, b];
        };
        convert.ansi256.rgb = function(args) {
          if (args >= 232) {
            var c = (args - 232) * 10 + 8;
            return [c, c, c];
          }
          args -= 16;
          var rem;
          var r2 = Math.floor(args / 36) / 5 * 255;
          var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
          var b = rem % 6 / 5 * 255;
          return [r2, g, b];
        };
        convert.rgb.hex = function(args) {
          var integer = ((Math.round(args[0]) & 255) << 16) + ((Math.round(args[1]) & 255) << 8) + (Math.round(args[2]) & 255);
          var string = integer.toString(16).toUpperCase();
          return "000000".substring(string.length) + string;
        };
        convert.hex.rgb = function(args) {
          var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
          if (!match) {
            return [0, 0, 0];
          }
          var colorString = match[0];
          if (match[0].length === 3) {
            colorString = colorString.split("").map(function(char) {
              return char + char;
            }).join("");
          }
          var integer = parseInt(colorString, 16);
          var r2 = integer >> 16 & 255;
          var g = integer >> 8 & 255;
          var b = integer & 255;
          return [r2, g, b];
        };
        convert.rgb.hcg = function(rgb) {
          var r2 = rgb[0] / 255;
          var g = rgb[1] / 255;
          var b = rgb[2] / 255;
          var max = Math.max(Math.max(r2, g), b);
          var min = Math.min(Math.min(r2, g), b);
          var chroma = max - min;
          var grayscale;
          var hue;
          if (chroma < 1) {
            grayscale = min / (1 - chroma);
          } else {
            grayscale = 0;
          }
          if (chroma <= 0) {
            hue = 0;
          } else if (max === r2) {
            hue = (g - b) / chroma % 6;
          } else if (max === g) {
            hue = 2 + (b - r2) / chroma;
          } else {
            hue = 4 + (r2 - g) / chroma + 4;
          }
          hue /= 6;
          hue %= 1;
          return [hue * 360, chroma * 100, grayscale * 100];
        };
        convert.hsl.hcg = function(hsl) {
          var s = hsl[1] / 100;
          var l3 = hsl[2] / 100;
          var c = 1;
          var f = 0;
          if (l3 < 0.5) {
            c = 2 * s * l3;
          } else {
            c = 2 * s * (1 - l3);
          }
          if (c < 1) {
            f = (l3 - 0.5 * c) / (1 - c);
          }
          return [hsl[0], c * 100, f * 100];
        };
        convert.hsv.hcg = function(hsv) {
          var s = hsv[1] / 100;
          var v = hsv[2] / 100;
          var c = s * v;
          var f = 0;
          if (c < 1) {
            f = (v - c) / (1 - c);
          }
          return [hsv[0], c * 100, f * 100];
        };
        convert.hcg.rgb = function(hcg) {
          var h2 = hcg[0] / 360;
          var c = hcg[1] / 100;
          var g = hcg[2] / 100;
          if (c === 0) {
            return [g * 255, g * 255, g * 255];
          }
          var pure = [0, 0, 0];
          var hi = h2 % 1 * 6;
          var v = hi % 1;
          var w = 1 - v;
          var mg = 0;
          switch (Math.floor(hi)) {
            case 0:
              pure[0] = 1;
              pure[1] = v;
              pure[2] = 0;
              break;
            case 1:
              pure[0] = w;
              pure[1] = 1;
              pure[2] = 0;
              break;
            case 2:
              pure[0] = 0;
              pure[1] = 1;
              pure[2] = v;
              break;
            case 3:
              pure[0] = 0;
              pure[1] = w;
              pure[2] = 1;
              break;
            case 4:
              pure[0] = v;
              pure[1] = 0;
              pure[2] = 1;
              break;
            default:
              pure[0] = 1;
              pure[1] = 0;
              pure[2] = w;
          }
          mg = (1 - c) * g;
          return [
            (c * pure[0] + mg) * 255,
            (c * pure[1] + mg) * 255,
            (c * pure[2] + mg) * 255
          ];
        };
        convert.hcg.hsv = function(hcg) {
          var c = hcg[1] / 100;
          var g = hcg[2] / 100;
          var v = c + g * (1 - c);
          var f = 0;
          if (v > 0) {
            f = c / v;
          }
          return [hcg[0], f * 100, v * 100];
        };
        convert.hcg.hsl = function(hcg) {
          var c = hcg[1] / 100;
          var g = hcg[2] / 100;
          var l3 = g * (1 - c) + 0.5 * c;
          var s = 0;
          if (l3 > 0 && l3 < 0.5) {
            s = c / (2 * l3);
          } else if (l3 >= 0.5 && l3 < 1) {
            s = c / (2 * (1 - l3));
          }
          return [hcg[0], s * 100, l3 * 100];
        };
        convert.hcg.hwb = function(hcg) {
          var c = hcg[1] / 100;
          var g = hcg[2] / 100;
          var v = c + g * (1 - c);
          return [hcg[0], (v - c) * 100, (1 - v) * 100];
        };
        convert.hwb.hcg = function(hwb) {
          var w = hwb[1] / 100;
          var b = hwb[2] / 100;
          var v = 1 - b;
          var c = v - w;
          var g = 0;
          if (c < 1) {
            g = (v - c) / (1 - c);
          }
          return [hwb[0], c * 100, g * 100];
        };
        convert.apple.rgb = function(apple) {
          return [apple[0] / 65535 * 255, apple[1] / 65535 * 255, apple[2] / 65535 * 255];
        };
        convert.rgb.apple = function(rgb) {
          return [rgb[0] / 255 * 65535, rgb[1] / 255 * 65535, rgb[2] / 255 * 65535];
        };
        convert.gray.rgb = function(args) {
          return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];
        };
        convert.gray.hsl = convert.gray.hsv = function(args) {
          return [0, 0, args[0]];
        };
        convert.gray.hwb = function(gray) {
          return [0, 100, gray[0]];
        };
        convert.gray.cmyk = function(gray) {
          return [0, 0, 0, gray[0]];
        };
        convert.gray.lab = function(gray) {
          return [gray[0], 0, 0];
        };
        convert.gray.hex = function(gray) {
          var val = Math.round(gray[0] / 100 * 255) & 255;
          var integer = (val << 16) + (val << 8) + val;
          var string = integer.toString(16).toUpperCase();
          return "000000".substring(string.length) + string;
        };
        convert.rgb.gray = function(rgb) {
          var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
          return [val / 255 * 100];
        };
      }
    });

    // node_modules/color-convert/route.js
    var require_route = __commonJS({
      "node_modules/color-convert/route.js"(exports, module) {
        var conversions = require_conversions();
        function buildGraph() {
          var graph = {};
          var models = Object.keys(conversions);
          for (var len = models.length, i3 = 0; i3 < len; i3++) {
            graph[models[i3]] = {
              distance: -1,
              parent: null
            };
          }
          return graph;
        }
        function deriveBFS(fromModel) {
          var graph = buildGraph();
          var queue = [fromModel];
          graph[fromModel].distance = 0;
          while (queue.length) {
            var current = queue.pop();
            var adjacents = Object.keys(conversions[current]);
            for (var len = adjacents.length, i3 = 0; i3 < len; i3++) {
              var adjacent = adjacents[i3];
              var node = graph[adjacent];
              if (node.distance === -1) {
                node.distance = graph[current].distance + 1;
                node.parent = current;
                queue.unshift(adjacent);
              }
            }
          }
          return graph;
        }
        function link(from, to) {
          return function(args) {
            return to(from(args));
          };
        }
        function wrapConversion(toModel, graph) {
          var path = [graph[toModel].parent, toModel];
          var fn = conversions[graph[toModel].parent][toModel];
          var cur = graph[toModel].parent;
          while (graph[cur].parent) {
            path.unshift(graph[cur].parent);
            fn = link(conversions[graph[cur].parent][cur], fn);
            cur = graph[cur].parent;
          }
          fn.conversion = path;
          return fn;
        }
        module.exports = function(fromModel) {
          var graph = deriveBFS(fromModel);
          var conversion = {};
          var models = Object.keys(graph);
          for (var len = models.length, i3 = 0; i3 < len; i3++) {
            var toModel = models[i3];
            var node = graph[toModel];
            if (node.parent === null) {
              continue;
            }
            conversion[toModel] = wrapConversion(toModel, graph);
          }
          return conversion;
        };
      }
    });

    // node_modules/color-convert/index.js
    var require_color_convert = __commonJS({
      "node_modules/color-convert/index.js"(exports, module) {
        var conversions = require_conversions();
        var route = require_route();
        var convert = {};
        var models = Object.keys(conversions);
        function wrapRaw(fn) {
          var wrappedFn = function(args) {
            if (args === void 0 || args === null) {
              return args;
            }
            if (arguments.length > 1) {
              args = Array.prototype.slice.call(arguments);
            }
            return fn(args);
          };
          if ("conversion" in fn) {
            wrappedFn.conversion = fn.conversion;
          }
          return wrappedFn;
        }
        function wrapRounded(fn) {
          var wrappedFn = function(args) {
            if (args === void 0 || args === null) {
              return args;
            }
            if (arguments.length > 1) {
              args = Array.prototype.slice.call(arguments);
            }
            var result = fn(args);
            if (typeof result === "object") {
              for (var len = result.length, i3 = 0; i3 < len; i3++) {
                result[i3] = Math.round(result[i3]);
              }
            }
            return result;
          };
          if ("conversion" in fn) {
            wrappedFn.conversion = fn.conversion;
          }
          return wrappedFn;
        }
        models.forEach(function(fromModel) {
          convert[fromModel] = {};
          Object.defineProperty(convert[fromModel], "channels", { value: conversions[fromModel].channels });
          Object.defineProperty(convert[fromModel], "labels", { value: conversions[fromModel].labels });
          var routes = route(fromModel);
          var routeModels = Object.keys(routes);
          routeModels.forEach(function(toModel) {
            var fn = routes[toModel];
            convert[fromModel][toModel] = wrapRounded(fn);
            convert[fromModel][toModel].raw = wrapRaw(fn);
          });
        });
        module.exports = convert;
      }
    });

    // node_modules/color/index.js
    var require_color = __commonJS({
      "node_modules/color/index.js"(exports, module) {
        var colorString = require_color_string();
        var convert = require_color_convert();
        var _slice = [].slice;
        var skippedModels = [
          "keyword",
          "gray",
          "hex"
        ];
        var hashedModelKeys = {};
        Object.keys(convert).forEach(function(model) {
          hashedModelKeys[_slice.call(convert[model].labels).sort().join("")] = model;
        });
        var limiters = {};
        function Color(obj, model) {
          if (!(this instanceof Color)) {
            return new Color(obj, model);
          }
          if (model && model in skippedModels) {
            model = null;
          }
          if (model && !(model in convert)) {
            throw new Error("Unknown model: " + model);
          }
          var i3;
          var channels;
          if (obj == null) {
            this.model = "rgb";
            this.color = [0, 0, 0];
            this.valpha = 1;
          } else if (obj instanceof Color) {
            this.model = obj.model;
            this.color = obj.color.slice();
            this.valpha = obj.valpha;
          } else if (typeof obj === "string") {
            var result = colorString.get(obj);
            if (result === null) {
              throw new Error("Unable to parse color from string: " + obj);
            }
            this.model = result.model;
            channels = convert[this.model].channels;
            this.color = result.value.slice(0, channels);
            this.valpha = typeof result.value[channels] === "number" ? result.value[channels] : 1;
          } else if (obj.length) {
            this.model = model || "rgb";
            channels = convert[this.model].channels;
            var newArr = _slice.call(obj, 0, channels);
            this.color = zeroArray(newArr, channels);
            this.valpha = typeof obj[channels] === "number" ? obj[channels] : 1;
          } else if (typeof obj === "number") {
            obj &= 16777215;
            this.model = "rgb";
            this.color = [
              obj >> 16 & 255,
              obj >> 8 & 255,
              obj & 255
            ];
            this.valpha = 1;
          } else {
            this.valpha = 1;
            var keys = Object.keys(obj);
            if ("alpha" in obj) {
              keys.splice(keys.indexOf("alpha"), 1);
              this.valpha = typeof obj.alpha === "number" ? obj.alpha : 0;
            }
            var hashedKeys = keys.sort().join("");
            if (!(hashedKeys in hashedModelKeys)) {
              throw new Error("Unable to parse color from object: " + JSON.stringify(obj));
            }
            this.model = hashedModelKeys[hashedKeys];
            var labels = convert[this.model].labels;
            var color2 = [];
            for (i3 = 0; i3 < labels.length; i3++) {
              color2.push(obj[labels[i3]]);
            }
            this.color = zeroArray(color2);
          }
          if (limiters[this.model]) {
            channels = convert[this.model].channels;
            for (i3 = 0; i3 < channels; i3++) {
              var limit = limiters[this.model][i3];
              if (limit) {
                this.color[i3] = limit(this.color[i3]);
              }
            }
          }
          this.valpha = Math.max(0, Math.min(1, this.valpha));
          if (Object.freeze) {
            Object.freeze(this);
          }
        }
        Color.prototype = {
          toString: function() {
            return this.string();
          },
          toJSON: function() {
            return this[this.model]();
          },
          string: function(places) {
            var self = this.model in colorString.to ? this : this.rgb();
            self = self.round(typeof places === "number" ? places : 1);
            var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
            return colorString.to[self.model](args);
          },
          percentString: function(places) {
            var self = this.rgb().round(typeof places === "number" ? places : 1);
            var args = self.valpha === 1 ? self.color : self.color.concat(this.valpha);
            return colorString.to.rgb.percent(args);
          },
          array: function() {
            return this.valpha === 1 ? this.color.slice() : this.color.concat(this.valpha);
          },
          object: function() {
            var result = {};
            var channels = convert[this.model].channels;
            var labels = convert[this.model].labels;
            for (var i3 = 0; i3 < channels; i3++) {
              result[labels[i3]] = this.color[i3];
            }
            if (this.valpha !== 1) {
              result.alpha = this.valpha;
            }
            return result;
          },
          unitArray: function() {
            var rgb = this.rgb().color;
            rgb[0] /= 255;
            rgb[1] /= 255;
            rgb[2] /= 255;
            if (this.valpha !== 1) {
              rgb.push(this.valpha);
            }
            return rgb;
          },
          unitObject: function() {
            var rgb = this.rgb().object();
            rgb.r /= 255;
            rgb.g /= 255;
            rgb.b /= 255;
            if (this.valpha !== 1) {
              rgb.alpha = this.valpha;
            }
            return rgb;
          },
          round: function(places) {
            places = Math.max(places || 0, 0);
            return new Color(this.color.map(roundToPlace(places)).concat(this.valpha), this.model);
          },
          alpha: function(val) {
            if (arguments.length) {
              return new Color(this.color.concat(Math.max(0, Math.min(1, val))), this.model);
            }
            return this.valpha;
          },
          red: getset("rgb", 0, maxfn(255)),
          green: getset("rgb", 1, maxfn(255)),
          blue: getset("rgb", 2, maxfn(255)),
          hue: getset(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function(val) {
            return (val % 360 + 360) % 360;
          }),
          saturationl: getset("hsl", 1, maxfn(100)),
          lightness: getset("hsl", 2, maxfn(100)),
          saturationv: getset("hsv", 1, maxfn(100)),
          value: getset("hsv", 2, maxfn(100)),
          chroma: getset("hcg", 1, maxfn(100)),
          gray: getset("hcg", 2, maxfn(100)),
          white: getset("hwb", 1, maxfn(100)),
          wblack: getset("hwb", 2, maxfn(100)),
          cyan: getset("cmyk", 0, maxfn(100)),
          magenta: getset("cmyk", 1, maxfn(100)),
          yellow: getset("cmyk", 2, maxfn(100)),
          black: getset("cmyk", 3, maxfn(100)),
          x: getset("xyz", 0, maxfn(100)),
          y: getset("xyz", 1, maxfn(100)),
          z: getset("xyz", 2, maxfn(100)),
          l: getset("lab", 0, maxfn(100)),
          a: getset("lab", 1),
          b: getset("lab", 2),
          keyword: function(val) {
            if (arguments.length) {
              return new Color(val);
            }
            return convert[this.model].keyword(this.color);
          },
          hex: function(val) {
            if (arguments.length) {
              return new Color(val);
            }
            return colorString.to.hex(this.rgb().round().color);
          },
          rgbNumber: function() {
            var rgb = this.rgb().color;
            return (rgb[0] & 255) << 16 | (rgb[1] & 255) << 8 | rgb[2] & 255;
          },
          luminosity: function() {
            var rgb = this.rgb().color;
            var lum = [];
            for (var i3 = 0; i3 < rgb.length; i3++) {
              var chan = rgb[i3] / 255;
              lum[i3] = chan <= 0.03928 ? chan / 12.92 : Math.pow((chan + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
          },
          contrast: function(color2) {
            var lum1 = this.luminosity();
            var lum2 = color2.luminosity();
            if (lum1 > lum2) {
              return (lum1 + 0.05) / (lum2 + 0.05);
            }
            return (lum2 + 0.05) / (lum1 + 0.05);
          },
          level: function(color2) {
            var contrastRatio = this.contrast(color2);
            if (contrastRatio >= 7.1) {
              return "AAA";
            }
            return contrastRatio >= 4.5 ? "AA" : "";
          },
          isDark: function() {
            var rgb = this.rgb().color;
            var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1e3;
            return yiq < 128;
          },
          isLight: function() {
            return !this.isDark();
          },
          negate: function() {
            var rgb = this.rgb();
            for (var i3 = 0; i3 < 3; i3++) {
              rgb.color[i3] = 255 - rgb.color[i3];
            }
            return rgb;
          },
          lighten: function(ratio) {
            var hsl = this.hsl();
            hsl.color[2] += hsl.color[2] * ratio;
            return hsl;
          },
          darken: function(ratio) {
            var hsl = this.hsl();
            hsl.color[2] -= hsl.color[2] * ratio;
            return hsl;
          },
          saturate: function(ratio) {
            var hsl = this.hsl();
            hsl.color[1] += hsl.color[1] * ratio;
            return hsl;
          },
          desaturate: function(ratio) {
            var hsl = this.hsl();
            hsl.color[1] -= hsl.color[1] * ratio;
            return hsl;
          },
          whiten: function(ratio) {
            var hwb = this.hwb();
            hwb.color[1] += hwb.color[1] * ratio;
            return hwb;
          },
          blacken: function(ratio) {
            var hwb = this.hwb();
            hwb.color[2] += hwb.color[2] * ratio;
            return hwb;
          },
          grayscale: function() {
            var rgb = this.rgb().color;
            var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
            return Color.rgb(val, val, val);
          },
          fade: function(ratio) {
            return this.alpha(this.valpha - this.valpha * ratio);
          },
          opaquer: function(ratio) {
            return this.alpha(this.valpha + this.valpha * ratio);
          },
          rotate: function(degrees) {
            var hsl = this.hsl();
            var hue = hsl.color[0];
            hue = (hue + degrees) % 360;
            hue = hue < 0 ? 360 + hue : hue;
            hsl.color[0] = hue;
            return hsl;
          },
          mix: function(mixinColor, weight) {
            if (!mixinColor || !mixinColor.rgb) {
              throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + typeof mixinColor);
            }
            var color1 = mixinColor.rgb();
            var color2 = this.rgb();
            var p = weight === void 0 ? 0.5 : weight;
            var w = 2 * p - 1;
            var a = color1.alpha() - color2.alpha();
            var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2;
            var w2 = 1 - w1;
            return Color.rgb(w1 * color1.red() + w2 * color2.red(), w1 * color1.green() + w2 * color2.green(), w1 * color1.blue() + w2 * color2.blue(), color1.alpha() * p + color2.alpha() * (1 - p));
          }
        };
        Object.keys(convert).forEach(function(model) {
          if (skippedModels.indexOf(model) !== -1) {
            return;
          }
          var channels = convert[model].channels;
          Color.prototype[model] = function() {
            if (this.model === model) {
              return new Color(this);
            }
            if (arguments.length) {
              return new Color(arguments, model);
            }
            var newAlpha = typeof arguments[channels] === "number" ? channels : this.valpha;
            return new Color(assertArray(convert[this.model][model].raw(this.color)).concat(newAlpha), model);
          };
          Color[model] = function(color2) {
            if (typeof color2 === "number") {
              color2 = zeroArray(_slice.call(arguments), channels);
            }
            return new Color(color2, model);
          };
        });
        function roundTo(num, places) {
          return Number(num.toFixed(places));
        }
        function roundToPlace(places) {
          return function(num) {
            return roundTo(num, places);
          };
        }
        function getset(model, channel, modifier) {
          model = Array.isArray(model) ? model : [model];
          model.forEach(function(m) {
            (limiters[m] || (limiters[m] = []))[channel] = modifier;
          });
          model = model[0];
          return function(val) {
            var result;
            if (arguments.length) {
              if (modifier) {
                val = modifier(val);
              }
              result = this[model]();
              result.color[channel] = val;
              return result;
            }
            result = this[model]().color[channel];
            if (modifier) {
              result = modifier(result);
            }
            return result;
          };
        }
        function maxfn(max) {
          return function(v) {
            return Math.max(0, Math.min(max, v));
          };
        }
        function assertArray(val) {
          return Array.isArray(val) ? val : [val];
        }
        function zeroArray(arr, length) {
          for (var i3 = 0; i3 < length; i3++) {
            if (typeof arr[i3] !== "number") {
              arr[i3] = 0;
            }
          }
          return arr;
        }
        module.exports = Color;
      }
    });

    // src/components/color-picker/color-picker.ts
    var import_color = __toModule(require_color());

    // src/components/color-picker/color-picker.styles.ts
    var color_picker_styles_default = i2$1`
  ${component_styles_default}

  :host {
    --grid-width: 260px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 12px;
    --slider-handle-size: 14px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
  }

  .color-picker--inline {
    border: solid 1px var(--sl-panel-border-color);
    box-shadow: var(--sl-shadow-small);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(
        to bottom,
        hsl(0, 0%, 100%) 0%,
        hsla(0, 0%, 100%, 0) 50%,
        hsla(0, 0%, 0%, 0) 50%,
        hsl(0, 0%, 0%) 100%
      ),
      linear-gradient(to right, hsl(0, 0%, 50%) 0%, hsla(0, 0%, 50%, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
  }

  .color-picker__grid-handle:focus {
    outline: none;
    box-shadow: 0 0 0 1px var(--sl-color-primary-500),
      0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus {
    outline: none;
    box-shadow: 0 0 0 1px var(--sl-color-primary-500),
      0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha {
    .color-picker__alpha-gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
    }
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 3.125rem;
    height: var(--sl-input-height-small);
    border: none;
    border-radius: var(--sl-input-border-radius-small);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus {
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
    outline: none;
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__copy-feedback {
    width: calc(var(--sl-input-height-small) / 2);
    height: calc(var(--sl-input-height-small) / 2);
    color: white;
    background-color: var(--sl-color-gray-900);
    border-radius: var(--sl-border-radius-circle);
    opacity: 0;
  }

  .color-picker__copy-feedback.color-picker__copy-feedback--visible {
    animation: copied 1s;
  }

  @keyframes copied {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }

    30% {
      transform: scale(1.2);
      opacity: 1;
    }

    70% {
      transform: scale(1.2);
      opacity: 1;
    }

    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button {
    min-width: 3.125rem;
    max-width: 3.125rem;
    font-size: 1rem;
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 6px;
    justify-items: center;
    border-top: solid 1px var(--sl-color-gray-200);
    padding: var(--sl-spacing-small);
  }

  .color-picker__swatch {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: 2px;
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus {
    outline: none;
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, #eee 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #eee 75%), linear-gradient(45deg, transparent 75%, #eee 75%),
      linear-gradient(45deg, #eee 25%, transparent 25%);
    background-size: 10px 10px;
    background-position: 0 0, 0 0, -5px -5px, 5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: var(--sl-transition-fast) box-shadow;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);
    transition: inherit;
  }

  .color-dropdown__trigger:focus {
    outline: none;
  }

  .color-dropdown__trigger:focus:not(.color-dropdown__trigger--disabled) {
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
    outline: none;
  }

  .color-dropdown__trigger:focus:not(.color-dropdown__trigger--disabled):before {
    box-shadow: inset 0 0 0 1px var(--sl-color-primary-500);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

    // src/components/color-picker/color-picker.ts
    var SlColorPicker = class extends h3 {
      constructor() {
        super(...arguments);
        this.isSafeValue = false;
        this.inputValue = "";
        this.hue = 0;
        this.saturation = 100;
        this.lightness = 100;
        this.alpha = 100;
        this.showCopyFeedback = false;
        this.value = "#ffffff";
        this.format = "hex";
        this.inline = false;
        this.size = "medium";
        this.noFormatToggle = false;
        this.name = "";
        this.disabled = false;
        this.invalid = false;
        this.hoist = false;
        this.opacity = false;
        this.uppercase = false;
        this.swatches = [
          "#d0021b",
          "#f5a623",
          "#f8e71c",
          "#8b572a",
          "#7ed321",
          "#417505",
          "#bd10e0",
          "#9013fe",
          "#4a90e2",
          "#50e3c2",
          "#b8e986",
          "#000",
          "#444",
          "#888",
          "#ccc",
          "#fff"
        ];
      }
      connectedCallback() {
        super.connectedCallback();
        if (!this.setColor(this.value)) {
          this.setColor(`#ffff`);
        }
        this.inputValue = this.value;
        this.lastValueEmitted = this.value;
        this.syncValues();
      }
      getFormattedValue(format = "hex") {
        const currentColor = this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha / 100})`);
        if (!currentColor) {
          return "";
        }
        switch (format) {
          case "hex":
            return currentColor.hex;
          case "hexa":
            return currentColor.hexa;
          case "rgb":
            return currentColor.rgb.string;
          case "rgba":
            return currentColor.rgba.string;
          case "hsl":
            return currentColor.hsl.string;
          case "hsla":
            return currentColor.hsla.string;
          default:
            return "";
        }
      }
      reportValidity() {
        if (!this.inline && this.input.invalid) {
          return new Promise((resolve) => {
            this.dropdown.addEventListener("sl-after-show", () => {
              this.input.reportValidity();
              resolve();
            }, { once: true });
            this.dropdown.show();
          });
        } else {
          return this.input.reportValidity();
        }
      }
      setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = this.input.invalid;
      }
      handleCopy() {
        this.input.select();
        document.execCommand("copy");
        this.previewButton.focus();
        this.showCopyFeedback = true;
        this.previewButton.addEventListener("animationend", () => this.showCopyFeedback = false, { once: true });
      }
      handleFormatToggle() {
        const formats = ["hex", "rgb", "hsl"];
        const nextIndex = (formats.indexOf(this.format) + 1) % formats.length;
        this.format = formats[nextIndex];
      }
      handleAlphaDrag(event) {
        const container = this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha");
        const handle = container.querySelector(".color-picker__slider-handle");
        const { width } = container.getBoundingClientRect();
        handle.focus();
        event.preventDefault();
        this.handleDrag(event, container, (x) => {
          this.alpha = clamp(x / width * 100, 0, 100);
          this.syncValues();
        });
      }
      handleHueDrag(event) {
        const container = this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue");
        const handle = container.querySelector(".color-picker__slider-handle");
        const { width } = container.getBoundingClientRect();
        handle.focus();
        event.preventDefault();
        this.handleDrag(event, container, (x) => {
          this.hue = clamp(x / width * 360, 0, 360);
          this.syncValues();
        });
      }
      handleGridDrag(event) {
        const grid = this.shadowRoot.querySelector(".color-picker__grid");
        const handle = grid.querySelector(".color-picker__grid-handle");
        const { width, height } = grid.getBoundingClientRect();
        handle.focus();
        event.preventDefault();
        this.handleDrag(event, grid, (x, y) => {
          this.saturation = clamp(x / width * 100, 0, 100);
          this.lightness = clamp(100 - y / height * 100, 0, 100);
          this.syncValues();
        });
      }
      handleDrag(event, container, onMove) {
        if (this.disabled) {
          return;
        }
        const move = (event2) => {
          const dims = container.getBoundingClientRect();
          const defaultView = container.ownerDocument.defaultView;
          const offsetX = dims.left + defaultView.pageXOffset;
          const offsetY = dims.top + defaultView.pageYOffset;
          const x = (event2.changedTouches ? event2.changedTouches[0].pageX : event2.pageX) - offsetX;
          const y = (event2.changedTouches ? event2.changedTouches[0].pageY : event2.pageY) - offsetY;
          onMove(x, y);
        };
        move(event);
        const stop = () => {
          document.removeEventListener("mousemove", move);
          document.removeEventListener("touchmove", move);
          document.removeEventListener("mouseup", stop);
          document.removeEventListener("touchend", stop);
        };
        document.addEventListener("mousemove", move);
        document.addEventListener("touchmove", move);
        document.addEventListener("mouseup", stop);
        document.addEventListener("touchend", stop);
      }
      handleAlphaKeyDown(event) {
        const increment = event.shiftKey ? 10 : 1;
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          this.alpha = clamp(this.alpha - increment, 0, 100);
          this.syncValues();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          this.alpha = clamp(this.alpha + increment, 0, 100);
          this.syncValues();
        }
        if (event.key === "Home") {
          event.preventDefault();
          this.alpha = 0;
          this.syncValues();
        }
        if (event.key === "End") {
          event.preventDefault();
          this.alpha = 100;
          this.syncValues();
        }
      }
      handleHueKeyDown(event) {
        const increment = event.shiftKey ? 10 : 1;
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          this.hue = clamp(this.hue - increment, 0, 360);
          this.syncValues();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          this.hue = clamp(this.hue + increment, 0, 360);
          this.syncValues();
        }
        if (event.key === "Home") {
          event.preventDefault();
          this.hue = 0;
          this.syncValues();
        }
        if (event.key === "End") {
          event.preventDefault();
          this.hue = 360;
          this.syncValues();
        }
      }
      handleGridKeyDown(event) {
        const increment = event.shiftKey ? 10 : 1;
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          this.saturation = clamp(this.saturation - increment, 0, 100);
          this.syncValues();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          this.saturation = clamp(this.saturation + increment, 0, 100);
          this.syncValues();
        }
        if (event.key === "ArrowUp") {
          event.preventDefault();
          this.lightness = clamp(this.lightness + increment, 0, 100);
          this.syncValues();
        }
        if (event.key === "ArrowDown") {
          event.preventDefault();
          this.lightness = clamp(this.lightness - increment, 0, 100);
          this.syncValues();
        }
      }
      handleInputChange(event) {
        const target = event.target;
        this.setColor(target.value);
        target.value = this.value;
        event.stopPropagation();
      }
      handleInputKeyDown(event) {
        if (event.key === "Enter") {
          this.setColor(this.input.value);
          this.input.value = this.value;
          setTimeout(() => this.input.select());
        }
      }
      handleDropdownAfterHide() {
        this.showCopyFeedback = false;
      }
      normalizeColorString(colorString) {
        if (/rgba?/i.test(colorString)) {
          const rgba = colorString.replace(/[^\d.%]/g, " ").split(" ").map((val) => val.trim()).filter((val) => val.length);
          if (rgba.length < 4) {
            rgba[3] = "1";
          }
          if (rgba[3].indexOf("%") > -1) {
            rgba[3] = (Number(rgba[3].replace(/%/g, "")) / 100).toString();
          }
          return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})`;
        }
        if (/hsla?/i.test(colorString)) {
          const hsla = colorString.replace(/[^\d.%]/g, " ").split(" ").map((val) => val.trim()).filter((val) => val.length);
          if (hsla.length < 4) {
            hsla[3] = "1";
          }
          if (hsla[3].indexOf("%") > -1) {
            hsla[3] = (Number(hsla[3].replace(/%/g, "")) / 100).toString();
          }
          return `hsla(${hsla[0]}, ${hsla[1]}, ${hsla[2]}, ${hsla[3]})`;
        }
        if (/^[0-9a-f]+$/i.test(colorString)) {
          return `#${colorString}`;
        }
        return colorString;
      }
      parseColor(colorString) {
        function toHex(value) {
          const hex2 = Math.round(value).toString(16);
          return hex2.length === 1 ? `0${hex2}` : hex2;
        }
        let parsed;
        colorString = this.normalizeColorString(colorString);
        try {
          parsed = (0, import_color.default)(colorString);
        } catch (e3) {
          return false;
        }
        const hsl = {
          h: parsed.hsl().color[0],
          s: parsed.hsl().color[1],
          l: parsed.hsl().color[2],
          a: parsed.hsl().valpha
        };
        const rgb = {
          r: parsed.rgb().color[0],
          g: parsed.rgb().color[1],
          b: parsed.rgb().color[2],
          a: parsed.rgb().valpha
        };
        const hex = {
          r: toHex(parsed.rgb().color[0]),
          g: toHex(parsed.rgb().color[1]),
          b: toHex(parsed.rgb().color[2]),
          a: toHex(parsed.rgb().valpha * 255)
        };
        return {
          hsl: {
            h: hsl.h,
            s: hsl.s,
            l: hsl.l,
            string: this.setLetterCase(`hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`)
          },
          hsla: {
            h: hsl.h,
            s: hsl.s,
            l: hsl.l,
            a: hsl.a,
            string: this.setLetterCase(`hsla(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%, ${Number(hsl.a.toFixed(2).toString())})`)
          },
          rgb: {
            r: rgb.r,
            g: rgb.g,
            b: rgb.b,
            string: this.setLetterCase(`rgb(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)})`)
          },
          rgba: {
            r: rgb.r,
            g: rgb.g,
            b: rgb.b,
            a: rgb.a,
            string: this.setLetterCase(`rgba(${Math.round(rgb.r)}, ${Math.round(rgb.g)}, ${Math.round(rgb.b)}, ${Number(rgb.a.toFixed(2).toString())})`)
          },
          hex: this.setLetterCase(`#${hex.r}${hex.g}${hex.b}`),
          hexa: this.setLetterCase(`#${hex.r}${hex.g}${hex.b}${hex.a}`)
        };
      }
      setColor(colorString) {
        const newColor = this.parseColor(colorString);
        if (!newColor) {
          return false;
        }
        this.hue = newColor.hsla.h;
        this.saturation = newColor.hsla.s;
        this.lightness = newColor.hsla.l;
        this.alpha = this.opacity ? newColor.hsla.a * 100 : 100;
        this.syncValues();
        return true;
      }
      setLetterCase(string) {
        if (typeof string !== "string")
          return "";
        return this.uppercase ? string.toUpperCase() : string.toLowerCase();
      }
      async syncValues() {
        const currentColor = this.parseColor(`hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.alpha / 100})`);
        if (!currentColor) {
          return;
        }
        if (this.format === "hsl") {
          this.inputValue = this.opacity ? currentColor.hsla.string : currentColor.hsl.string;
        } else if (this.format === "rgb") {
          this.inputValue = this.opacity ? currentColor.rgba.string : currentColor.rgb.string;
        } else {
          this.inputValue = this.opacity ? currentColor.hexa : currentColor.hex;
        }
        this.isSafeValue = true;
        this.value = this.inputValue;
        await this.updateComplete;
        this.isSafeValue = false;
      }
      handleFormatChange() {
        this.syncValues();
      }
      handleOpacityChange() {
        this.alpha = 100;
      }
      handleValueChange(oldValue, newValue) {
        if (!this.isSafeValue) {
          const newColor = this.parseColor(newValue);
          if (newColor) {
            this.inputValue = this.value;
            this.hue = newColor.hsla.h;
            this.saturation = newColor.hsla.s;
            this.lightness = newColor.hsla.l;
            this.alpha = newColor.hsla.a * 100;
          } else {
            this.inputValue = oldValue;
          }
        }
        if (this.value !== this.lastValueEmitted) {
          emit(this, "sl-change");
          this.lastValueEmitted = this.value;
        }
      }
      render() {
        const x = this.saturation;
        const y = 100 - this.lightness;
        const colorPicker = T`
      <div
        part="base"
        class=${e({
      "color-picker": true,
      "color-picker--inline": this.inline,
      "color-picker--disabled": this.disabled
    })}
        aria-disabled=${this.disabled ? "true" : "false"}
      >
        <div
          part="grid"
          class="color-picker__grid"
          style=${i2({ backgroundColor: `hsl(${this.hue}deg, 100%, 50%)` })}
          @mousedown=${this.handleGridDrag}
          @touchstart=${this.handleGridDrag}
        >
          <span
            part="grid-handle"
            class="color-picker__grid-handle"
            style=${i2({
      top: `${y}%`,
      left: `${x}%`,
      backgroundColor: `hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%)`
    })}
            role="slider"
            aria-label="HSL"
            aria-valuetext=${`hsl(${Math.round(this.hue)}, ${Math.round(this.saturation)}%, ${Math.round(this.lightness)}%)`}
            tabindex=${l$1(this.disabled ? void 0 : "0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @mousedown=${this.handleHueDrag}
              @touchstart=${this.handleHueDrag}
            >
              <span
                part="slider-handle"
                class="color-picker__slider-handle"
                style=${i2({
      left: `${this.hue === 0 ? 0 : 100 / (360 / this.hue)}%`
    })}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${Math.round(this.hue)}
                tabindex=${l$1(this.disabled ? void 0 : "0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity ? T`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @mousedown="${this.handleAlphaDrag}"
                    @touchstart="${this.handleAlphaDrag}"
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${i2({
      backgroundImage: `linear-gradient(
                          to right,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, 0%) 0%,
                          hsl(${this.hue}deg, ${this.saturation}%, ${this.lightness}%) 100%
                        )`
    })}
                    ></div>
                    <span
                      part="slider-handle"
                      class="color-picker__slider-handle"
                      style=${i2({
      left: `${this.alpha}%`
    })}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${l$1(this.disabled ? void 0 : "0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                ` : ""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            style=${i2({
      "--preview-color": `hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha / 100})`
    })}
            @click=${this.handleCopy}
          >
            <sl-icon
              name="check"
              library="system"
              class=${e({
      "color-picker__copy-feedback": true,
      "color-picker__copy-feedback--visible": this.showCopyFeedback,
      "color-picker__copy-feedback--dark": this.lightness > 50
    })}
            ></sl-icon>
          </button>
        </div>

        <div class="color-picker__user-input">
          <sl-input
            part="input"
            size="small"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            .value=${l(this.inputValue)}
            ?disabled=${this.disabled}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
          ></sl-input>

          ${!this.noFormatToggle ? T`
                <sl-button exportparts="base:format-button" size="small" @click=${this.handleFormatToggle}>
                  ${this.setLetterCase(this.format)}
                </sl-button>
              ` : ""}
        </div>

        ${this.swatches ? T`
              <div part="swatches" class="color-picker__swatches">
                ${this.swatches.map((swatch) => {
      return T`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${l$1(this.disabled ? void 0 : "0")}
                      role="button"
                      aria-label=${swatch}
                      @click=${() => !this.disabled && this.setColor(swatch)}
                      @keydown=${(event) => !this.disabled && event.key === "Enter" && this.setColor(swatch)}
                    >
                      <div class="color-picker__swatch-color" style=${i2({ backgroundColor: swatch })}></div>
                    </div>
                  `;
    })}
              </div>
            ` : ""}
      </div>
    `;
        if (this.inline) {
          return colorPicker;
        }
        return T`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled ? "true" : "false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleDropdownAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${e({
      "color-dropdown__trigger": true,
      "color-dropdown__trigger--disabled": this.disabled,
      "color-dropdown__trigger--small": this.size === "small",
      "color-dropdown__trigger--medium": this.size === "medium",
      "color-dropdown__trigger--large": this.size === "large",
      "color-picker__transparent-bg": true
    })}
          style=${i2({
      color: `hsla(${this.hue}deg, ${this.saturation}%, ${this.lightness}%, ${this.alpha / 100})`
    })}
          type="button"
        ></button>
        ${colorPicker}
      </sl-dropdown>
    `;
      }
    };
    SlColorPicker.styles = color_picker_styles_default;
    __decorateClass([
      o6('[part="input"]')
    ], SlColorPicker.prototype, "input", 2);
    __decorateClass([
      o6('[part="preview"]')
    ], SlColorPicker.prototype, "previewButton", 2);
    __decorateClass([
      o6(".color-dropdown")
    ], SlColorPicker.prototype, "dropdown", 2);
    __decorateClass([
      r4()
    ], SlColorPicker.prototype, "inputValue", 2);
    __decorateClass([
      r4()
    ], SlColorPicker.prototype, "hue", 2);
    __decorateClass([
      r4()
    ], SlColorPicker.prototype, "saturation", 2);
    __decorateClass([
      r4()
    ], SlColorPicker.prototype, "lightness", 2);
    __decorateClass([
      r4()
    ], SlColorPicker.prototype, "alpha", 2);
    __decorateClass([
      r4()
    ], SlColorPicker.prototype, "showCopyFeedback", 2);
    __decorateClass([
      e4()
    ], SlColorPicker.prototype, "value", 2);
    __decorateClass([
      e4()
    ], SlColorPicker.prototype, "format", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlColorPicker.prototype, "inline", 2);
    __decorateClass([
      e4()
    ], SlColorPicker.prototype, "size", 2);
    __decorateClass([
      e4({ attribute: "no-format-toggle", type: Boolean })
    ], SlColorPicker.prototype, "noFormatToggle", 2);
    __decorateClass([
      e4()
    ], SlColorPicker.prototype, "name", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlColorPicker.prototype, "disabled", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlColorPicker.prototype, "invalid", 2);
    __decorateClass([
      e4({ type: Boolean })
    ], SlColorPicker.prototype, "hoist", 2);
    __decorateClass([
      e4({ type: Boolean })
    ], SlColorPicker.prototype, "opacity", 2);
    __decorateClass([
      e4({ type: Boolean })
    ], SlColorPicker.prototype, "uppercase", 2);
    __decorateClass([
      e4({ attribute: false })
    ], SlColorPicker.prototype, "swatches", 2);
    __decorateClass([
      watch("format")
    ], SlColorPicker.prototype, "handleFormatChange", 1);
    __decorateClass([
      watch("opacity")
    ], SlColorPicker.prototype, "handleOpacityChange", 1);
    __decorateClass([
      watch("value")
    ], SlColorPicker.prototype, "handleValueChange", 1);
    SlColorPicker = __decorateClass([
      n5("sl-color-picker")
    ], SlColorPicker);

    // src/components/input/input.styles.ts
    var input_styles_default = i2$1`
  ${component_styles_default}
  ${form_control_styles_default}

  :host {
    --focus-ring: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: text;
  }

  .input:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: var(--focus-ring);
  }

  .input.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    margin: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    margin-right: var(--sl-input-spacing-small);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    margin: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    margin-right: var(--sl-input-spacing-medium);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    margin: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    margin-right: var(--sl-input-spacing-large);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-left: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-right: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }
`;

    // src/components/input/input.ts
    var id$4 = 0;
    var SlInput = class extends h3 {
      constructor() {
        super(...arguments);
        this.inputId = `input-${++id$4}`;
        this.helpTextId = `input-help-text-${id$4}`;
        this.labelId = `input-label-${id$4}`;
        this.hasFocus = false;
        this.hasHelpTextSlot = false;
        this.hasLabelSlot = false;
        this.isPasswordVisible = false;
        this.type = "text";
        this.size = "medium";
        this.value = "";
        this.pill = false;
        this.helpText = "";
        this.clearable = false;
        this.togglePassword = false;
        this.disabled = false;
        this.readonly = false;
        this.required = false;
        this.invalid = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.handleSlotChange = this.handleSlotChange.bind(this);
        this.shadowRoot.addEventListener("slotchange", this.handleSlotChange);
      }
      firstUpdated() {
        this.invalid = !this.input.checkValidity();
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this.shadowRoot.removeEventListener("slotchange", this.handleSlotChange);
      }
      focus(options) {
        this.input.focus(options);
      }
      blur() {
        this.input.blur();
      }
      select() {
        return this.input.select();
      }
      setSelectionRange(selectionStart, selectionEnd, selectionDirection = "none") {
        return this.input.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
      }
      setRangeText(replacement, start, end, selectMode = "preserve") {
        this.input.setRangeText(replacement, start, end, selectMode);
        if (this.value !== this.input.value) {
          this.value = this.input.value;
          emit(this, "sl-input");
          emit(this, "sl-change");
        }
      }
      reportValidity() {
        return this.input.reportValidity();
      }
      setCustomValidity(message) {
        this.input.setCustomValidity(message);
        this.invalid = !this.input.checkValidity();
      }
      handleBlur() {
        this.hasFocus = false;
        emit(this, "sl-blur");
      }
      handleChange() {
        this.value = this.input.value;
        emit(this, "sl-change");
      }
      handleClearClick(event) {
        this.value = "";
        emit(this, "sl-clear");
        emit(this, "sl-input");
        emit(this, "sl-change");
        this.input.focus();
        event.stopPropagation();
      }
      handleDisabledChange() {
        if (this.input) {
          this.input.disabled = this.disabled;
          this.invalid = !this.input.checkValidity();
        }
      }
      handleFocus() {
        this.hasFocus = true;
        emit(this, "sl-focus");
      }
      handleInput() {
        this.value = this.input.value;
        emit(this, "sl-input");
      }
      handleInvalid() {
        this.invalid = true;
      }
      handlePasswordToggle() {
        this.isPasswordVisible = !this.isPasswordVisible;
      }
      handleSlotChange() {
        this.hasHelpTextSlot = hasSlot(this, "help-text");
        this.hasLabelSlot = hasSlot(this, "label");
      }
      handleValueChange() {
        if (this.input) {
          this.invalid = !this.input.checkValidity();
        }
      }
      render() {
        return renderFormControl({
          inputId: this.inputId,
          label: this.label,
          labelId: this.labelId,
          hasLabelSlot: this.hasLabelSlot,
          helpTextId: this.helpTextId,
          helpText: this.helpText,
          hasHelpTextSlot: this.hasHelpTextSlot,
          size: this.size
        }, T`
        <div
          part="base"
          class=${e({
      input: true,
      "input--small": this.size === "small",
      "input--medium": this.size === "medium",
      "input--large": this.size === "large",
      "input--pill": this.pill,
      "input--disabled": this.disabled,
      "input--focused": this.hasFocus,
      "input--empty": this.value.length === 0,
      "input--invalid": this.invalid
    })}
        >
          <span part="prefix" class="input__prefix">
            <slot name="prefix"></slot>
          </span>

          <input
            part="input"
            id=${this.inputId}
            class="input__control"
            type=${this.type === "password" && this.isPasswordVisible ? "text" : this.type}
            name=${l$1(this.name)}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            placeholder=${l$1(this.placeholder)}
            minlength=${l$1(this.minlength)}
            maxlength=${l$1(this.maxlength)}
            min=${l$1(this.min)}
            max=${l$1(this.max)}
            step=${l$1(this.step)}
            .value=${l(this.value)}
            autocapitalize=${l$1(this.autocapitalize)}
            autocomplete=${l$1(this.autocomplete)}
            autocorrect=${l$1(this.autocorrect)}
            ?autofocus=${this.autofocus}
            spellcheck=${l$1(this.spellcheck)}
            pattern=${l$1(this.pattern)}
            inputmode=${l$1(this.inputmode)}
            aria-labelledby=${l$1(getLabelledBy({
      label: this.label,
      labelId: this.labelId,
      hasLabelSlot: this.hasLabelSlot,
      helpText: this.helpText,
      helpTextId: this.helpTextId,
      hasHelpTextSlot: this.hasHelpTextSlot
    }))}
            aria-invalid=${this.invalid ? "true" : "false"}
            @change=${this.handleChange}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          />

          ${this.clearable && this.value.length > 0 ? T`
                <button
                  part="clear-button"
                  class="input__clear"
                  type="button"
                  @click=${this.handleClearClick}
                  tabindex="-1"
                >
                  <slot name="clear-icon">
                    <sl-icon name="x-circle" library="system"></sl-icon>
                  </slot>
                </button>
              ` : ""}
          ${this.togglePassword ? T`
                <button
                  part="password-toggle-button"
                  class="input__password-toggle"
                  type="button"
                  @click=${this.handlePasswordToggle}
                  tabindex="-1"
                >
                  ${this.isPasswordVisible ? T`
                        <slot name="show-password-icon">
                          <sl-icon name="eye-slash" library="system"></sl-icon>
                        </slot>
                      ` : T`
                        <slot name="hide-password-icon">
                          ${" "}
                          <sl-icon name="eye" library="system"></sl-icon>
                        </slot>
                      `}
                </button>
              ` : ""}

          <span part="suffix" class="input__suffix">
            <slot name="suffix"></slot>
          </span>
        </div>
      `);
      }
    };
    SlInput.styles = input_styles_default;
    __decorateClass([
      o6(".input__control")
    ], SlInput.prototype, "input", 2);
    __decorateClass([
      r4()
    ], SlInput.prototype, "hasFocus", 2);
    __decorateClass([
      r4()
    ], SlInput.prototype, "hasHelpTextSlot", 2);
    __decorateClass([
      r4()
    ], SlInput.prototype, "hasLabelSlot", 2);
    __decorateClass([
      r4()
    ], SlInput.prototype, "isPasswordVisible", 2);
    __decorateClass([
      e4({ reflect: true })
    ], SlInput.prototype, "type", 2);
    __decorateClass([
      e4({ reflect: true })
    ], SlInput.prototype, "size", 2);
    __decorateClass([
      e4()
    ], SlInput.prototype, "name", 2);
    __decorateClass([
      e4()
    ], SlInput.prototype, "value", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlInput.prototype, "pill", 2);
    __decorateClass([
      e4()
    ], SlInput.prototype, "label", 2);
    __decorateClass([
      e4({ attribute: "help-text" })
    ], SlInput.prototype, "helpText", 2);
    __decorateClass([
      e4({ type: Boolean })
    ], SlInput.prototype, "clearable", 2);
    __decorateClass([
      e4({ attribute: "toggle-password", type: Boolean })
    ], SlInput.prototype, "togglePassword", 2);
    __decorateClass([
      e4()
    ], SlInput.prototype, "placeholder", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlInput.prototype, "disabled", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlInput.prototype, "readonly", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlInput.prototype, "minlength", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlInput.prototype, "maxlength", 2);
    __decorateClass([
      e4()
    ], SlInput.prototype, "min", 2);
    __decorateClass([
      e4()
    ], SlInput.prototype, "max", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlInput.prototype, "step", 2);
    __decorateClass([
      e4()
    ], SlInput.prototype, "pattern", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlInput.prototype, "required", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlInput.prototype, "invalid", 2);
    __decorateClass([
      e4()
    ], SlInput.prototype, "autocapitalize", 2);
    __decorateClass([
      e4()
    ], SlInput.prototype, "autocorrect", 2);
    __decorateClass([
      e4()
    ], SlInput.prototype, "autocomplete", 2);
    __decorateClass([
      e4({ type: Boolean })
    ], SlInput.prototype, "autofocus", 2);
    __decorateClass([
      e4({ type: Boolean })
    ], SlInput.prototype, "spellcheck", 2);
    __decorateClass([
      e4()
    ], SlInput.prototype, "inputmode", 2);
    __decorateClass([
      watch("disabled")
    ], SlInput.prototype, "handleDisabledChange", 1);
    __decorateClass([
      watch("helpText"),
      watch("label")
    ], SlInput.prototype, "handleSlotChange", 1);
    __decorateClass([
      watch("value")
    ], SlInput.prototype, "handleValueChange", 1);
    SlInput = __decorateClass([
      n5("sl-input")
    ], SlInput);

    // src/components/details/details.styles.ts
    var details_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-gray-200);
    border-radius: var(--sl-border-radius-medium);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header:focus {
    outline: none;
  }

  .focus-visible .details__header:focus {
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) transform ease;
  }

  .details--open .details__summary-icon {
    transform: rotate(90deg);
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    padding: var(--sl-spacing-medium);
  }
`;

    // src/components/details/details.ts
    var id$3 = 0;
    var SlDetails = class extends h3 {
      constructor() {
        super(...arguments);
        this.componentId = `details-${++id$3}`;
        this.open = false;
        this.disabled = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.updateComplete.then(() => focusVisible.observe(this.details));
      }
      firstUpdated() {
        this.body.hidden = !this.open;
        this.body.style.height = this.open ? "auto" : "0";
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        focusVisible.unobserve(this.details);
      }
      async show() {
        if (this.open) {
          return;
        }
        this.open = true;
        return waitForEvent(this, "sl-after-show");
      }
      async hide() {
        if (!this.open) {
          return;
        }
        this.open = false;
        return waitForEvent(this, "sl-after-hide");
      }
      handleSummaryClick() {
        if (!this.disabled) {
          this.open ? this.hide() : this.show();
          this.header.focus();
        }
      }
      handleSummaryKeyDown(event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          this.open ? this.hide() : this.show();
        }
        if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
          event.preventDefault();
          this.hide();
        }
        if (event.key === "ArrowDown" || event.key === "ArrowRight") {
          event.preventDefault();
          this.show();
        }
      }
      async handleOpenChange() {
        if (this.open) {
          emit(this, "sl-show");
          await stopAnimations(this);
          this.body.hidden = false;
          const { keyframes, options } = getAnimation(this, "details.show");
          await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
          this.body.style.height = "auto";
          emit(this, "sl-after-show");
        } else {
          emit(this, "sl-hide");
          await stopAnimations(this);
          const { keyframes, options } = getAnimation(this, "details.hide");
          await animateTo(this.body, shimKeyframesHeightAuto(keyframes, this.body.scrollHeight), options);
          this.body.hidden = true;
          this.body.style.height = "auto";
          emit(this, "sl-after-hide");
        }
      }
      render() {
        return T`
      <div
        part="base"
        class=${e({
      details: true,
      "details--open": this.open,
      "details--disabled": this.disabled
    })}
      >
        <header
          part="header"
          id=${`${this.componentId}-header`}
          class="details__header"
          role="button"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls=${`${this.componentId}-content`}
          aria-disabled=${this.disabled ? "true" : "false"}
          tabindex=${this.disabled ? "-1" : "0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <div part="summary" class="details__summary">
            <slot name="summary">${this.summary}</slot>
          </div>

          <span part="summary-icon" class="details__summary-icon">
            <sl-icon name="chevron-right" library="system"></sl-icon>
          </span>
        </header>

        <div class="details__body">
          <div
            part="content"
            id=${`${this.componentId}-content`}
            class="details__content"
            role="region"
            aria-labelledby=${`${this.componentId}-header`}
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `;
      }
    };
    SlDetails.styles = details_styles_default;
    __decorateClass([
      o6(".details")
    ], SlDetails.prototype, "details", 2);
    __decorateClass([
      o6(".details__header")
    ], SlDetails.prototype, "header", 2);
    __decorateClass([
      o6(".details__body")
    ], SlDetails.prototype, "body", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlDetails.prototype, "open", 2);
    __decorateClass([
      e4()
    ], SlDetails.prototype, "summary", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlDetails.prototype, "disabled", 2);
    __decorateClass([
      watch("open", { waitUntilFirstUpdate: true })
    ], SlDetails.prototype, "handleOpenChange", 1);
    SlDetails = __decorateClass([
      n5("sl-details")
    ], SlDetails);
    setDefaultAnimation("details.show", {
      keyframes: [
        { height: "0", opacity: "0" },
        { height: "auto", opacity: "1" }
      ],
      options: { duration: 250, easing: "linear" }
    });
    setDefaultAnimation("details.hide", {
      keyframes: [
        { height: "auto", opacity: "1" },
        { height: "0", opacity: "0" }
      ],
      options: { duration: 250, easing: "linear" }
    });

    // src/internal/tabbable.ts
    function isTabbable(el) {
      const tag = el.tagName.toLowerCase();
      if (el.getAttribute("tabindex") === "-1") {
        return false;
      }
      if (el.hasAttribute("disabled")) {
        return false;
      }
      if (el.hasAttribute("aria-disabled") && el.getAttribute("aria-disabled") !== "false") {
        return false;
      }
      if (tag === "input" && el.getAttribute("type") === "radio" && !el.hasAttribute("checked")) {
        return false;
      }
      if (!el.offsetParent) {
        return false;
      }
      if (window.getComputedStyle(el).visibility === "hidden") {
        return false;
      }
      if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) {
        return true;
      }
      if (el.hasAttribute("tabindex")) {
        return true;
      }
      if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") {
        return true;
      }
      return ["button", "input", "select", "textarea", "a", "audio", "video", "summary"].includes(tag);
    }
    function getTabbableBoundary(root) {
      const allElements = [];
      function walk(el) {
        if (el instanceof HTMLElement) {
          allElements.push(el);
          if (el.shadowRoot && el.shadowRoot.mode === "open") {
            walk(el.shadowRoot);
          }
        }
        [...el.querySelectorAll("*")].map((e) => walk(e));
      }
      walk(root);
      const start = allElements.find((el) => isTabbable(el)) || null;
      const end = allElements.reverse().find((el) => isTabbable(el)) || null;
      return { start, end };
    }

    // src/internal/support.ts
    function isPreventScrollSupported() {
      let supported = false;
      document.createElement("div").focus({
        get preventScroll() {
          supported = true;
          return false;
        }
      });
      return supported;
    }

    // src/internal/modal.ts
    var activeModals = [];
    var Modal = class {
      constructor(element) {
        this.tabDirection = "forward";
        this.element = element;
        this.handleFocusIn = this.handleFocusIn.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
      }
      activate() {
        activeModals.push(this.element);
        document.addEventListener("focusin", this.handleFocusIn);
        document.addEventListener("keydown", this.handleKeyDown);
      }
      deactivate() {
        activeModals = activeModals.filter((modal) => modal !== this.element);
        document.removeEventListener("focusin", this.handleFocusIn);
        document.removeEventListener("keydown", this.handleKeyDown);
      }
      isActive() {
        return activeModals[activeModals.length - 1] === this.element;
      }
      handleFocusIn(event) {
        const path = event.composedPath();
        if (this.isActive() && !path.includes(this.element)) {
          const { start, end } = getTabbableBoundary(this.element);
          const target = this.tabDirection === "forward" ? start : end;
          if (typeof (target == null ? void 0 : target.focus) === "function") {
            target.focus({ preventScroll: true });
          }
        }
      }
      handleKeyDown(event) {
        if (event.key === "Tab" && event.shiftKey) {
          this.tabDirection = "backward";
          setTimeout(() => this.tabDirection = "forward");
        }
      }
    };
    var modal_default = Modal;

    // src/components/dialog/dialog.styles.ts
    var dialog_styles_default = i2$1`
  ${component_styles_default}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-xx-large));
    max-height: calc(100% - var(--sl-spacing-xx-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-left: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }
`;

    // src/components/dialog/dialog.ts
    var hasPreventScroll$1 = isPreventScrollSupported();
    var id$2 = 0;
    var SlDialog = class extends h3 {
      constructor() {
        super(...arguments);
        this.componentId = `dialog-${++id$2}`;
        this.hasFooter = false;
        this.open = false;
        this.label = "";
        this.noHeader = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.modal = new modal_default(this);
        this.handleSlotChange();
      }
      firstUpdated() {
        this.dialog.hidden = !this.open;
        if (this.open) {
          this.modal.activate();
          lockBodyScrolling(this);
        }
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        unlockBodyScrolling(this);
      }
      async show() {
        if (this.open) {
          return;
        }
        this.open = true;
        return waitForEvent(this, "sl-after-show");
      }
      async hide() {
        if (!this.open) {
          return;
        }
        this.open = false;
        return waitForEvent(this, "sl-after-hide");
      }
      requestClose() {
        const slRequestClose = emit(this, "sl-request-close", { cancelable: true });
        if (slRequestClose.defaultPrevented) {
          const animation = getAnimation(this, "dialog.denyClose");
          animateTo(this.panel, animation.keyframes, animation.options);
          return;
        }
        this.hide();
      }
      handleKeyDown(event) {
        if (event.key === "Escape") {
          event.stopPropagation();
          this.requestClose();
        }
      }
      async handleOpenChange() {
        if (this.open) {
          emit(this, "sl-show");
          this.originalTrigger = document.activeElement;
          this.modal.activate();
          lockBodyScrolling(this);
          await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
          this.dialog.hidden = false;
          if (hasPreventScroll$1) {
            const slInitialFocus = emit(this, "sl-initial-focus", { cancelable: true });
            if (!slInitialFocus.defaultPrevented) {
              this.panel.focus({ preventScroll: true });
            }
          }
          const panelAnimation = getAnimation(this, "dialog.show");
          const overlayAnimation = getAnimation(this, "dialog.overlay.show");
          await Promise.all([
            animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
            animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
          ]);
          if (!hasPreventScroll$1) {
            const slInitialFocus = emit(this, "sl-initial-focus", { cancelable: true });
            if (!slInitialFocus.defaultPrevented) {
              this.panel.focus({ preventScroll: true });
            }
          }
          emit(this, "sl-after-show");
        } else {
          emit(this, "sl-hide");
          this.modal.deactivate();
          await Promise.all([stopAnimations(this.dialog), stopAnimations(this.overlay)]);
          const panelAnimation = getAnimation(this, "dialog.hide");
          const overlayAnimation = getAnimation(this, "dialog.overlay.hide");
          await Promise.all([
            animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
            animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
          ]);
          this.dialog.hidden = true;
          unlockBodyScrolling(this);
          const trigger = this.originalTrigger;
          if (trigger && typeof trigger.focus === "function") {
            setTimeout(() => trigger.focus());
          }
          emit(this, "sl-after-hide");
        }
      }
      handleSlotChange() {
        this.hasFooter = hasSlot(this, "footer");
      }
      render() {
        return T`
      <div
        part="base"
        class=${e({
      dialog: true,
      "dialog--open": this.open,
      "dialog--has-footer": this.hasFooter
    })}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${this.requestClose} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${l$1(this.noHeader ? this.label : void 0)}
          aria-labelledby=${l$1(!this.noHeader ? `${this.componentId}-title` : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? T`
                <header part="header" class="dialog__header">
                  <span part="title" class="dialog__title" id=${`${this.componentId}-title`}>
                    <slot name="label"> ${this.label || String.fromCharCode(65279)} </slot>
                  </span>
                  <sl-icon-button
                    exportparts="base:close-button"
                    class="dialog__close"
                    name="x"
                    library="system"
                    @click="${this.requestClose}"
                  ></sl-icon-button>
                </header>
              ` : ""}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer" @slotchange=${this.handleSlotChange}></slot>
          </footer>
        </div>
      </div>
    `;
      }
    };
    SlDialog.styles = dialog_styles_default;
    __decorateClass([
      o6(".dialog")
    ], SlDialog.prototype, "dialog", 2);
    __decorateClass([
      o6(".dialog__panel")
    ], SlDialog.prototype, "panel", 2);
    __decorateClass([
      o6(".dialog__overlay")
    ], SlDialog.prototype, "overlay", 2);
    __decorateClass([
      r4()
    ], SlDialog.prototype, "hasFooter", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlDialog.prototype, "open", 2);
    __decorateClass([
      e4({ reflect: true })
    ], SlDialog.prototype, "label", 2);
    __decorateClass([
      e4({ attribute: "no-header", type: Boolean, reflect: true })
    ], SlDialog.prototype, "noHeader", 2);
    __decorateClass([
      watch("open", { waitUntilFirstUpdate: true })
    ], SlDialog.prototype, "handleOpenChange", 1);
    SlDialog = __decorateClass([
      n5("sl-dialog")
    ], SlDialog);
    setDefaultAnimation("dialog.show", {
      keyframes: [
        { opacity: 0, transform: "scale(0.8)" },
        { opacity: 1, transform: "scale(1)" }
      ],
      options: { duration: 250, easing: "ease" }
    });
    setDefaultAnimation("dialog.hide", {
      keyframes: [
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0, transform: "scale(0.8)" }
      ],
      options: { duration: 250, easing: "ease" }
    });
    setDefaultAnimation("dialog.denyClose", {
      keyframes: [{ transform: "scale(1)" }, { transform: "scale(1.02)" }, { transform: "scale(1)" }],
      options: { duration: 250 }
    });
    setDefaultAnimation("dialog.overlay.show", {
      keyframes: [{ opacity: 0 }, { opacity: 1 }],
      options: { duration: 250 }
    });
    setDefaultAnimation("dialog.overlay.hide", {
      keyframes: [{ opacity: 1 }, { opacity: 0 }],
      options: { duration: 250 }
    });

    // src/internal/string.ts
    function uppercaseFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // src/components/drawer/drawer.styles.ts
    var drawer_styles_default = i2$1`
  ${component_styles_default}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    transition: var(--sl-transition-medium) transform;
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
  }

  .drawer__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .drawer__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-right: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    position: absolute;
  }
`;

    // src/components/drawer/drawer.ts
    var hasPreventScroll = isPreventScrollSupported();
    var id$1 = 0;
    var SlDrawer = class extends h3 {
      constructor() {
        super(...arguments);
        this.componentId = `drawer-${++id$1}`;
        this.hasFooter = false;
        this.open = false;
        this.label = "";
        this.placement = "end";
        this.contained = false;
        this.noHeader = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.modal = new modal_default(this);
        this.handleSlotChange();
      }
      firstUpdated() {
        this.drawer.hidden = !this.open;
        if (this.open && !this.contained) {
          this.modal.activate();
          lockBodyScrolling(this);
        }
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        unlockBodyScrolling(this);
      }
      async show() {
        if (this.open) {
          return;
        }
        this.open = true;
        return waitForEvent(this, "sl-after-show");
      }
      async hide() {
        if (!this.open) {
          return;
        }
        this.open = false;
        return waitForEvent(this, "sl-after-hide");
      }
      requestClose() {
        const slRequestClose = emit(this, "sl-request-close", { cancelable: true });
        if (slRequestClose.defaultPrevented) {
          const animation = getAnimation(this, "drawer.denyClose");
          animateTo(this.panel, animation.keyframes, animation.options);
          return;
        }
        this.hide();
      }
      handleKeyDown(event) {
        if (event.key === "Escape") {
          event.stopPropagation();
          this.requestClose();
        }
      }
      async handleOpenChange() {
        if (this.open) {
          emit(this, "sl-show");
          this.originalTrigger = document.activeElement;
          if (!this.contained) {
            this.modal.activate();
            lockBodyScrolling(this);
          }
          await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
          this.drawer.hidden = false;
          if (hasPreventScroll) {
            const slInitialFocus = emit(this, "sl-initial-focus", { cancelable: true });
            if (!slInitialFocus.defaultPrevented) {
              this.panel.focus({ preventScroll: true });
            }
          }
          const panelAnimation = getAnimation(this, `drawer.show${uppercaseFirstLetter(this.placement)}`);
          const overlayAnimation = getAnimation(this, "drawer.overlay.show");
          await Promise.all([
            animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
            animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
          ]);
          if (!hasPreventScroll) {
            const slInitialFocus = emit(this, "sl-initial-focus", { cancelable: true });
            if (!slInitialFocus.defaultPrevented) {
              this.panel.focus({ preventScroll: true });
            }
          }
          emit(this, "sl-after-show");
        } else {
          emit(this, "sl-hide");
          this.modal.deactivate();
          unlockBodyScrolling(this);
          await Promise.all([stopAnimations(this.drawer), stopAnimations(this.overlay)]);
          const panelAnimation = getAnimation(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`);
          const overlayAnimation = getAnimation(this, "drawer.overlay.hide");
          await Promise.all([
            animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
            animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
          ]);
          this.drawer.hidden = true;
          const trigger = this.originalTrigger;
          if (trigger && typeof trigger.focus === "function") {
            setTimeout(() => trigger.focus());
          }
          emit(this, "sl-after-hide");
        }
      }
      handleSlotChange() {
        this.hasFooter = hasSlot(this, "footer");
      }
      render() {
        return T`
      <div
        part="base"
        class=${e({
      drawer: true,
      "drawer--open": this.open,
      "drawer--top": this.placement === "top",
      "drawer--end": this.placement === "end",
      "drawer--bottom": this.placement === "bottom",
      "drawer--start": this.placement === "start",
      "drawer--contained": this.contained,
      "drawer--fixed": !this.contained,
      "drawer--has-footer": this.hasFooter
    })}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="drawer__overlay" @click=${this.requestClose} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${l$1(this.noHeader ? this.label : void 0)}
          aria-labelledby=${l$1(!this.noHeader ? `${this.componentId}-title` : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? T`
                <header part="header" class="drawer__header">
                  <span part="title" class="drawer__title" id=${`${this.componentId}-title`}>
                    <!-- If there's no label, use an invisible character to prevent the heading from collapsing -->
                    <slot name="label"> ${this.label || String.fromCharCode(65279)} </slot>
                  </span>
                  <sl-icon-button
                    exportparts="base:close-button"
                    class="drawer__close"
                    name="x"
                    library="system"
                    @click=${this.requestClose}
                  ></sl-icon-button>
                </header>
              ` : ""}

          <div part="body" class="drawer__body">
            <slot></slot>
          </div>

          <footer part="footer" class="drawer__footer">
            <slot name="footer" @slotchange=${this.handleSlotChange}></slot>
          </footer>
        </div>
      </div>
    `;
      }
    };
    SlDrawer.styles = drawer_styles_default;
    __decorateClass([
      o6(".drawer")
    ], SlDrawer.prototype, "drawer", 2);
    __decorateClass([
      o6(".drawer__panel")
    ], SlDrawer.prototype, "panel", 2);
    __decorateClass([
      o6(".drawer__overlay")
    ], SlDrawer.prototype, "overlay", 2);
    __decorateClass([
      r4()
    ], SlDrawer.prototype, "hasFooter", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlDrawer.prototype, "open", 2);
    __decorateClass([
      e4({ reflect: true })
    ], SlDrawer.prototype, "label", 2);
    __decorateClass([
      e4({ reflect: true })
    ], SlDrawer.prototype, "placement", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlDrawer.prototype, "contained", 2);
    __decorateClass([
      e4({ attribute: "no-header", type: Boolean, reflect: true })
    ], SlDrawer.prototype, "noHeader", 2);
    __decorateClass([
      watch("open", { waitUntilFirstUpdate: true })
    ], SlDrawer.prototype, "handleOpenChange", 1);
    SlDrawer = __decorateClass([
      n5("sl-drawer")
    ], SlDrawer);
    setDefaultAnimation("drawer.showTop", {
      keyframes: [
        { opacity: 0, transform: "translateY(-100%)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      options: { duration: 250, easing: "ease" }
    });
    setDefaultAnimation("drawer.hideTop", {
      keyframes: [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(-100%)" }
      ],
      options: { duration: 250, easing: "ease" }
    });
    setDefaultAnimation("drawer.showEnd", {
      keyframes: [
        { opacity: 0, transform: "translateX(100%)" },
        { opacity: 1, transform: "translateX(0)" }
      ],
      options: { duration: 250, easing: "ease" }
    });
    setDefaultAnimation("drawer.hideEnd", {
      keyframes: [
        { opacity: 1, transform: "translateX(0)" },
        { opacity: 0, transform: "translateX(100%)" }
      ],
      options: { duration: 250, easing: "ease" }
    });
    setDefaultAnimation("drawer.showBottom", {
      keyframes: [
        { opacity: 0, transform: "translateY(100%)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      options: { duration: 250, easing: "ease" }
    });
    setDefaultAnimation("drawer.hideBottom", {
      keyframes: [
        { opacity: 1, transform: "translateY(0)" },
        { opacity: 0, transform: "translateY(100%)" }
      ],
      options: { duration: 250, easing: "ease" }
    });
    setDefaultAnimation("drawer.showStart", {
      keyframes: [
        { opacity: 0, transform: "translateX(-100%)" },
        { opacity: 1, transform: "translateX(0)" }
      ],
      options: { duration: 250, easing: "ease" }
    });
    setDefaultAnimation("drawer.hideStart", {
      keyframes: [
        { opacity: 1, transform: "translateX(0)" },
        { opacity: 0, transform: "translateX(-100%)" }
      ],
      options: { duration: 250, easing: "ease" }
    });
    setDefaultAnimation("drawer.denyClose", {
      keyframes: [{ transform: "scale(1)" }, { transform: "scale(1.01)" }, { transform: "scale(1)" }],
      options: { duration: 250 }
    });
    setDefaultAnimation("drawer.overlay.show", {
      keyframes: [{ opacity: 0 }, { opacity: 1 }],
      options: { duration: 250 }
    });
    setDefaultAnimation("drawer.overlay.hide", {
      keyframes: [{ opacity: 1 }, { opacity: 0 }],
      options: { duration: 250 }
    });

    // src/components/dropdown/dropdown.styles.ts
    var dropdown_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .dropdown {
    position: relative;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__positioner {
    position: absolute;
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown__panel {
    max-height: 75vh;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border: solid 1px var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-large);
    overflow: auto;
    overscroll-behavior: none;
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  .dropdown__positioner[data-popper-placement^='top'] .dropdown__panel {
    transform-origin: bottom;
  }

  .dropdown__positioner[data-popper-placement^='bottom'] .dropdown__panel {
    transform-origin: top;
  }

  .dropdown__positioner[data-popper-placement^='left'] .dropdown__panel {
    transform-origin: right;
  }

  .dropdown__positioner[data-popper-placement^='right'] .dropdown__panel {
    transform-origin: left;
  }
`;

    // src/components/dropdown/dropdown.ts
    var id = 0;
    var SlDropdown = class extends h3 {
      constructor() {
        super(...arguments);
        this.componentId = `dropdown-${++id}`;
        this.open = false;
        this.placement = "bottom-start";
        this.disabled = false;
        this.stayOpenOnSelect = false;
        this.distance = 2;
        this.skidding = 0;
        this.hoist = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.handleMenuItemActivate = this.handleMenuItemActivate.bind(this);
        this.handlePanelSelect = this.handlePanelSelect.bind(this);
        this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
        this.handleDocumentMouseDown = this.handleDocumentMouseDown.bind(this);
        if (!this.containingElement) {
          this.containingElement = this;
        }
        this.updateComplete.then(() => {
          this.popover = createPopper(this.trigger, this.positioner, {
            placement: this.placement,
            strategy: this.hoist ? "fixed" : "absolute",
            modifiers: [
              {
                name: "flip",
                options: {
                  boundary: "viewport"
                }
              },
              {
                name: "offset",
                options: {
                  offset: [this.skidding, this.distance]
                }
              }
            ]
          });
        });
      }
      firstUpdated() {
        this.panel.hidden = !this.open;
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this.hide();
        this.popover.destroy();
      }
      focusOnTrigger() {
        const slot = this.trigger.querySelector("slot");
        const trigger = slot.assignedElements({ flatten: true })[0];
        if (trigger && typeof trigger.focus === "function") {
          trigger.focus();
        }
      }
      getMenu() {
        const slot = this.panel.querySelector("slot");
        return slot.assignedElements({ flatten: true }).filter((el) => el.tagName.toLowerCase() === "sl-menu")[0];
      }
      handleDocumentKeyDown(event) {
        var _a;
        if (event.key === "Escape") {
          this.hide();
          this.focusOnTrigger();
          return;
        }
        if (event.key === "Tab") {
          if (this.open && ((_a = document.activeElement) == null ? void 0 : _a.tagName.toLowerCase()) === "sl-menu-item") {
            event.preventDefault();
            this.hide();
            this.focusOnTrigger();
            return;
          }
          setTimeout(() => {
            var _a2, _b;
            const activeElement = this.containingElement.getRootNode() instanceof ShadowRoot ? (_b = (_a2 = document.activeElement) == null ? void 0 : _a2.shadowRoot) == null ? void 0 : _b.activeElement : document.activeElement;
            if ((activeElement == null ? void 0 : activeElement.closest(this.containingElement.tagName.toLowerCase())) !== this.containingElement) {
              this.hide();
              return;
            }
          });
        }
      }
      handleDocumentMouseDown(event) {
        const path = event.composedPath();
        if (!path.includes(this.containingElement)) {
          this.hide();
          return;
        }
      }
      handleMenuItemActivate(event) {
        const item = event.target;
        scrollIntoView(item, this.panel);
      }
      handlePanelSelect(event) {
        const target = event.target;
        if (!this.stayOpenOnSelect && target.tagName.toLowerCase() === "sl-menu") {
          this.hide();
          this.focusOnTrigger();
        }
      }
      handlePopoverOptionsChange() {
        if (this.popover) {
          this.popover.setOptions({
            placement: this.placement,
            strategy: this.hoist ? "fixed" : "absolute",
            modifiers: [
              {
                name: "flip",
                options: {
                  boundary: "viewport"
                }
              },
              {
                name: "offset",
                options: {
                  offset: [this.skidding, this.distance]
                }
              }
            ]
          });
        }
      }
      handleTriggerClick() {
        this.open ? this.hide() : this.show();
      }
      handleTriggerKeyDown(event) {
        const menu = this.getMenu();
        const menuItems = menu ? [...menu.querySelectorAll("sl-menu-item")] : [];
        const firstMenuItem = menuItems[0];
        const lastMenuItem = menuItems[menuItems.length - 1];
        if (event.key === "Escape") {
          this.focusOnTrigger();
          this.hide();
          return;
        }
        if ([" ", "Enter"].includes(event.key)) {
          event.preventDefault();
          this.open ? this.hide() : this.show();
          return;
        }
        if (["ArrowDown", "ArrowUp"].includes(event.key)) {
          event.preventDefault();
          if (!this.open) {
            this.show();
          }
          if (event.key === "ArrowDown" && firstMenuItem) {
            const menu2 = this.getMenu();
            menu2.setCurrentItem(firstMenuItem);
            firstMenuItem.focus();
            return;
          }
          if (event.key === "ArrowUp" && lastMenuItem) {
            menu.setCurrentItem(lastMenuItem);
            lastMenuItem.focus();
            return;
          }
        }
        const ignoredKeys = ["Tab", "Shift", "Meta", "Ctrl", "Alt"];
        if (this.open && menu && !ignoredKeys.includes(event.key)) {
          menu.typeToSelect(event.key);
          return;
        }
      }
      handleTriggerKeyUp(event) {
        if (event.key === " ") {
          event.preventDefault();
        }
      }
      handleTriggerSlotChange() {
        this.updateAccessibleTrigger();
      }
      updateAccessibleTrigger() {
        if (this.trigger) {
          const slot = this.trigger.querySelector("slot");
          const assignedElements = slot.assignedElements({ flatten: true });
          const accessibleTrigger = assignedElements.find((el) => getTabbableBoundary(el).start);
          if (accessibleTrigger) {
            accessibleTrigger.setAttribute("aria-haspopup", "true");
            accessibleTrigger.setAttribute("aria-expanded", this.open ? "true" : "false");
          }
        }
      }
      async show() {
        if (this.open) {
          return;
        }
        this.open = true;
        return waitForEvent(this, "sl-after-show");
      }
      async hide() {
        if (!this.open) {
          return;
        }
        this.open = false;
        return waitForEvent(this, "sl-after-hide");
      }
      reposition() {
        if (!this.open) {
          return;
        }
        this.popover.update();
      }
      async handleOpenChange() {
        if (this.disabled) {
          return;
        }
        this.updateAccessibleTrigger();
        if (this.open) {
          emit(this, "sl-show");
          this.panel.addEventListener("sl-activate", this.handleMenuItemActivate);
          this.panel.addEventListener("sl-select", this.handlePanelSelect);
          document.addEventListener("keydown", this.handleDocumentKeyDown);
          document.addEventListener("mousedown", this.handleDocumentMouseDown);
          await stopAnimations(this);
          this.popover.update();
          this.panel.hidden = false;
          const { keyframes, options } = getAnimation(this, "dropdown.show");
          await animateTo(this.panel, keyframes, options);
          emit(this, "sl-after-show");
        } else {
          emit(this, "sl-hide");
          this.panel.removeEventListener("sl-activate", this.handleMenuItemActivate);
          this.panel.removeEventListener("sl-select", this.handlePanelSelect);
          document.removeEventListener("keydown", this.handleDocumentKeyDown);
          document.removeEventListener("mousedown", this.handleDocumentMouseDown);
          await stopAnimations(this);
          const { keyframes, options } = getAnimation(this, "dropdown.hide");
          await animateTo(this.panel, keyframes, options);
          this.panel.hidden = true;
          emit(this, "sl-after-hide");
        }
      }
      render() {
        return T`
      <div
        part="base"
        id=${this.componentId}
        class=${e({
      dropdown: true,
      "dropdown--open": this.open
    })}
      >
        <span
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <!-- Position the panel with a wrapper since the popover makes use of translate. This let's us add animations
        on the panel without interfering with the position. -->
        <div class="dropdown__positioner">
          <div
            part="panel"
            class="dropdown__panel"
            role="menu"
            aria-hidden=${this.open ? "false" : "true"}
            aria-labelledby=${this.componentId}
          >
            <slot></slot>
          </div>
        </div>
      </div>
    `;
      }
    };
    SlDropdown.styles = dropdown_styles_default;
    __decorateClass([
      o6(".dropdown__trigger")
    ], SlDropdown.prototype, "trigger", 2);
    __decorateClass([
      o6(".dropdown__panel")
    ], SlDropdown.prototype, "panel", 2);
    __decorateClass([
      o6(".dropdown__positioner")
    ], SlDropdown.prototype, "positioner", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlDropdown.prototype, "open", 2);
    __decorateClass([
      e4()
    ], SlDropdown.prototype, "placement", 2);
    __decorateClass([
      e4({ type: Boolean })
    ], SlDropdown.prototype, "disabled", 2);
    __decorateClass([
      e4({ attribute: "stay-open-on-select", type: Boolean, reflect: true })
    ], SlDropdown.prototype, "stayOpenOnSelect", 2);
    __decorateClass([
      e4({ attribute: false })
    ], SlDropdown.prototype, "containingElement", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlDropdown.prototype, "distance", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlDropdown.prototype, "skidding", 2);
    __decorateClass([
      e4({ type: Boolean })
    ], SlDropdown.prototype, "hoist", 2);
    __decorateClass([
      watch("distance"),
      watch("hoist"),
      watch("placement"),
      watch("skidding")
    ], SlDropdown.prototype, "handlePopoverOptionsChange", 1);
    __decorateClass([
      watch("open", { waitUntilFirstUpdate: true })
    ], SlDropdown.prototype, "handleOpenChange", 1);
    SlDropdown = __decorateClass([
      n5("sl-dropdown")
    ], SlDropdown);
    setDefaultAnimation("dropdown.show", {
      keyframes: [
        { opacity: 0, transform: "scale(0.9)" },
        { opacity: 1, transform: "scale(1)" }
      ],
      options: { duration: 150, easing: "ease" }
    });
    setDefaultAnimation("dropdown.hide", {
      keyframes: [
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0, transform: "scale(0.9)" }
      ],
      options: { duration: 150, easing: "ease" }
    });

    // src/components/form/form.styles.ts
    var form_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: block;
  }
`;

    // src/components/form/form.ts
    var SlForm = class extends h3 {
      constructor() {
        super(...arguments);
        this.novalidate = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.formControls = [
          {
            tag: "button",
            serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null,
            click: (event) => {
              const target = event.target;
              if (target.type === "submit") {
                this.submit();
              }
            }
          },
          {
            tag: "input",
            serialize: (el, formData) => {
              if (!el.name || el.disabled) {
                return;
              }
              if ((el.type === "checkbox" || el.type === "radio") && !el.checked) {
                return;
              }
              if (el.type === "file") {
                [...el.files].map((file) => formData.append(el.name, file));
                return;
              }
              formData.append(el.name, el.value);
            },
            click: (event) => {
              const target = event.target;
              if (target.type === "submit") {
                this.submit();
              }
            },
            keyDown: (event) => {
              const target = event.target;
              if (event.key === "Enter" && !event.defaultPrevented && !["checkbox", "file", "radio"].includes(target.type)) {
                this.submit();
              }
            }
          },
          {
            tag: "select",
            serialize: (el, formData) => {
              if (el.name && !el.disabled) {
                if (el.multiple) {
                  const selectedOptions = [...el.querySelectorAll("option:checked")];
                  if (selectedOptions.length) {
                    selectedOptions.map((option) => formData.append(el.name, option.value));
                  } else {
                    formData.append(el.name, "");
                  }
                } else {
                  formData.append(el.name, el.value);
                }
              }
            }
          },
          {
            tag: "sl-button",
            serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null,
            click: (event) => {
              const target = event.target;
              if (target.submit) {
                this.submit();
              }
            }
          },
          {
            tag: "sl-checkbox",
            serialize: (el, formData) => el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null
          },
          {
            tag: "sl-color-picker",
            serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null
          },
          {
            tag: "sl-input",
            serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null,
            keyDown: (event) => {
              if (event.key === "Enter" && !event.defaultPrevented) {
                this.submit();
              }
            }
          },
          {
            tag: "sl-radio",
            serialize: (el, formData) => el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null
          },
          {
            tag: "sl-range",
            serialize: (el, formData) => {
              if (el.name && !el.disabled) {
                formData.append(el.name, el.value + "");
              }
            }
          },
          {
            tag: "sl-select",
            serialize: (el, formData) => {
              if (el.name && !el.disabled) {
                if (el.multiple) {
                  const selectedOptions = [...el.value];
                  if (selectedOptions.length) {
                    selectedOptions.map((value) => formData.append(el.name, value));
                  } else {
                    formData.append(el.name, "");
                  }
                } else {
                  formData.append(el.name, el.value + "");
                }
              }
            }
          },
          {
            tag: "sl-switch",
            serialize: (el, formData) => el.name && el.checked && !el.disabled ? formData.append(el.name, el.value) : null
          },
          {
            tag: "sl-textarea",
            serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null
          },
          {
            tag: "textarea",
            serialize: (el, formData) => el.name && !el.disabled ? formData.append(el.name, el.value) : null
          }
        ];
      }
      getFormData() {
        const formData = new FormData();
        const formControls = this.getFormControls();
        formControls.map((el) => this.serializeElement(el, formData));
        return formData;
      }
      getFormControls() {
        const slot = this.form.querySelector("slot");
        const tags = this.formControls.map((control) => control.tag);
        return slot.assignedElements({ flatten: true }).reduce((all, el) => all.concat(el, [...el.querySelectorAll("*")]), []).filter((el) => tags.includes(el.tagName.toLowerCase()));
      }
      submit() {
        const formData = this.getFormData();
        const formControls = this.getFormControls();
        const formControlsThatReport = formControls.filter((el) => typeof el.reportValidity === "function");
        if (!this.novalidate) {
          for (const el of formControlsThatReport) {
            const isValid = el.reportValidity();
            if (!isValid) {
              return false;
            }
          }
        }
        emit(this, "sl-submit", { detail: { formData, formControls } });
        return true;
      }
      handleClick(event) {
        const target = event.target;
        const tag = target.tagName.toLowerCase();
        for (const formControl of this.formControls) {
          if (formControl.tag === tag && formControl.click) {
            formControl.click(event);
          }
        }
      }
      handleKeyDown(event) {
        const target = event.target;
        const tag = target.tagName.toLowerCase();
        for (const formControl of this.formControls) {
          if (formControl.tag === tag && formControl.keyDown) {
            formControl.keyDown(event);
          }
        }
      }
      serializeElement(el, formData) {
        const tag = el.tagName.toLowerCase();
        for (const formControl of this.formControls) {
          if (formControl.tag === tag) {
            return formControl.serialize(el, formData);
          }
        }
        return null;
      }
      render() {
        return T`
      <div part="base" class="form" role="form" @click=${this.handleClick} @keydown=${this.handleKeyDown}>
        <slot></slot>
      </div>
    `;
      }
    };
    SlForm.styles = form_styles_default;
    __decorateClass([
      o6(".form")
    ], SlForm.prototype, "form", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlForm.prototype, "novalidate", 2);
    SlForm = __decorateClass([
      n5("sl-form")
    ], SlForm);

    // src/components/alert/alert.styles.ts
    var alert_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-color-white);
    border: solid 1px var(--sl-color-gray-200);
    border-top-width: 3px;
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--box-shadow);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-gray-700);
    margin: inherit;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
  }

  .alert__icon ::slotted(*) {
    margin-left: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-500);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-500);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-500);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-500);
  }

  .alert--info {
    border-top-color: var(--sl-color-info-500);
  }

  .alert--info .alert__icon {
    color: var(--sl-color-info-500);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-500);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-500);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-500);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-500);
  }

  .alert__message {
    flex: 1 1 auto;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-right: var(--sl-spacing-medium);
  }
`;

    // src/components/alert/alert.ts
    var toastStack = Object.assign(document.createElement("div"), { className: "sl-toast-stack" });
    var SlAlert = class extends h3 {
      constructor() {
        super(...arguments);
        this.open = false;
        this.closable = false;
        this.type = "primary";
        this.duration = Infinity;
      }
      firstUpdated() {
        this.base.hidden = !this.open;
      }
      async show() {
        if (this.open) {
          return;
        }
        this.open = true;
        return waitForEvent(this, "sl-after-show");
      }
      async hide() {
        if (!this.open) {
          return;
        }
        this.open = false;
        return waitForEvent(this, "sl-after-hide");
      }
      async toast() {
        return new Promise((resolve) => {
          if (!toastStack.parentElement) {
            document.body.append(toastStack);
          }
          toastStack.appendChild(this);
          requestAnimationFrame(() => {
            this.clientWidth;
            this.show();
          });
          this.addEventListener("sl-after-hide", () => {
            toastStack.removeChild(this);
            resolve();
            if (!toastStack.querySelector("sl-alert")) {
              toastStack.remove();
            }
          }, { once: true });
        });
      }
      restartAutoHide() {
        clearTimeout(this.autoHideTimeout);
        if (this.open && this.duration < Infinity) {
          this.autoHideTimeout = setTimeout(() => this.hide(), this.duration);
        }
      }
      handleCloseClick() {
        this.hide();
      }
      handleMouseMove() {
        this.restartAutoHide();
      }
      async handleOpenChange() {
        if (this.open) {
          emit(this, "sl-show");
          if (this.duration < Infinity) {
            this.restartAutoHide();
          }
          await stopAnimations(this.base);
          this.base.hidden = false;
          const { keyframes, options } = getAnimation(this, "alert.show");
          await animateTo(this.base, keyframes, options);
          emit(this, "sl-after-show");
        } else {
          emit(this, "sl-hide");
          clearTimeout(this.autoHideTimeout);
          await stopAnimations(this.base);
          const { keyframes, options } = getAnimation(this, "alert.hide");
          await animateTo(this.base, keyframes, options);
          this.base.hidden = true;
          emit(this, "sl-after-hide");
        }
      }
      handleDurationChange() {
        this.restartAutoHide();
      }
      render() {
        return T`
      <div
        part="base"
        class=${e({
      alert: true,
      "alert--open": this.open,
      "alert--closable": this.closable,
      "alert--primary": this.type === "primary",
      "alert--success": this.type === "success",
      "alert--info": this.type === "info",
      "alert--warning": this.type === "warning",
      "alert--danger": this.type === "danger"
    })}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open ? "false" : "true"}
        @mousemove=${this.handleMouseMove}
      >
        <span part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </span>

        <span part="message" class="alert__message">
          <slot></slot>
        </span>

        ${this.closable ? T`
              <span class="alert__close">
                <sl-icon-button
                  exportparts="base:close-button"
                  name="x"
                  library="system"
                  @click=${this.handleCloseClick}
                ></sl-icon-button>
              </span>
            ` : ""}
      </div>
    `;
      }
    };
    SlAlert.styles = alert_styles_default;
    __decorateClass([
      o6('[part="base"]')
    ], SlAlert.prototype, "base", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlAlert.prototype, "open", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlAlert.prototype, "closable", 2);
    __decorateClass([
      e4({ reflect: true })
    ], SlAlert.prototype, "type", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlAlert.prototype, "duration", 2);
    __decorateClass([
      watch("open", { waitUntilFirstUpdate: true })
    ], SlAlert.prototype, "handleOpenChange", 1);
    __decorateClass([
      watch("duration")
    ], SlAlert.prototype, "handleDurationChange", 1);
    SlAlert = __decorateClass([
      n5("sl-alert")
    ], SlAlert);
    setDefaultAnimation("alert.show", {
      keyframes: [
        { opacity: 0, transform: "scale(0.8)" },
        { opacity: 1, transform: "scale(1)" }
      ],
      options: { duration: 250, easing: "ease" }
    });
    setDefaultAnimation("alert.hide", {
      keyframes: [
        { opacity: 1, transform: "scale(1)" },
        { opacity: 0, transform: "scale(0.8)" }
      ],
      options: { duration: 250, easing: "ease" }
    });

    // src/components/icon-button/icon-button.styles.ts
    var icon_button_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: var(--sl-color-gray-500);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--sl-color-primary-500);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .focus-visible.icon-button:focus {
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }
`;

    // src/components/icon-button/icon-button.ts
    var SlIconButton = class extends h3 {
      constructor() {
        super(...arguments);
        this.label = "";
        this.disabled = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.updateComplete.then(() => focusVisible.observe(this.button));
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        focusVisible.unobserve(this.button);
      }
      render() {
        return T`
      <button
        part="base"
        class=${e({
      "icon-button": true,
      "icon-button--disabled": this.disabled
    })}
        ?disabled=${this.disabled}
        type="button"
        aria-label=${this.label}
      >
        <sl-icon
          name=${l$1(this.name)}
          library=${l$1(this.library)}
          src=${l$1(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </button>
    `;
      }
    };
    SlIconButton.styles = icon_button_styles_default;
    __decorateClass([
      o6("button")
    ], SlIconButton.prototype, "button", 2);
    __decorateClass([
      e4()
    ], SlIconButton.prototype, "name", 2);
    __decorateClass([
      e4()
    ], SlIconButton.prototype, "library", 2);
    __decorateClass([
      e4()
    ], SlIconButton.prototype, "src", 2);
    __decorateClass([
      e4()
    ], SlIconButton.prototype, "label", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlIconButton.prototype, "disabled", 2);
    SlIconButton = __decorateClass([
      n5("sl-icon-button")
    ], SlIconButton);

    // src/components/avatar/avatar.styles.ts
    var avatar_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-gray-300);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-white);
    overflow: hidden;
    user-select: none;
    vertical-align: middle;
  }

  .avatar--circle {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

    // src/components/avatar/avatar.ts
    var SlAvatar = class extends h3 {
      constructor() {
        super(...arguments);
        this.hasError = false;
        this.shape = "circle";
      }
      render() {
        return T`
      <div
        part="base"
        class=${e({
      avatar: true,
      "avatar--circle": this.shape === "circle",
      "avatar--rounded": this.shape === "rounded",
      "avatar--square": this.shape === "square"
    })}
        aria-label=${this.alt}
      >
        ${this.initials ? T` <div part="initials" class="avatar__initials">${this.initials}</div> ` : T`
              <div part="icon" class="avatar__icon">
                <slot name="icon">
                  <sl-icon name="person-fill" library="system"></sl-icon>
                </slot>
              </div>
            `}
        ${this.image && !this.hasError ? T`
              <img part="image" class="avatar__image" src="${this.image}" @error="${() => this.hasError = true}" />
            ` : ""}
      </div>
    `;
      }
    };
    SlAvatar.styles = avatar_styles_default;
    __decorateClass([
      r4()
    ], SlAvatar.prototype, "hasError", 2);
    __decorateClass([
      e4()
    ], SlAvatar.prototype, "image", 2);
    __decorateClass([
      e4()
    ], SlAvatar.prototype, "alt", 2);
    __decorateClass([
      e4()
    ], SlAvatar.prototype, "initials", 2);
    __decorateClass([
      e4({ reflect: true })
    ], SlAvatar.prototype, "shape", 2);
    SlAvatar = __decorateClass([
      n5("sl-avatar")
    ], SlAvatar);

    // src/components/badge/badge.styles.ts
    var badge_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--sl-font-size-x-small);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    white-space: nowrap;
    padding: 3px 6px;
    user-select: none;
    cursor: inherit;
  }

  /* Type modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-500);
    color: var(--sl-color-primary-text);
  }

  .badge--success {
    background-color: var(--sl-color-success-500);
    color: var(--sl-color-success-text);
  }

  .badge--info {
    background-color: var(--sl-color-info-500);
    color: var(--sl-color-info-text);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-500);
    color: var(--sl-color-warning-text);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-500);
    color: var(--sl-color-danger-text);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-500);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-500);
  }

  .badge--pulse.badge--info {
    --pulse-color: var(--sl-color-info-500);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-500);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-500);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;

    // src/components/badge/badge.ts
    var SlBadge = class extends h3 {
      constructor() {
        super(...arguments);
        this.type = "primary";
        this.pill = false;
        this.pulse = false;
      }
      render() {
        return T`
      <span
        part="base"
        class=${e({
      badge: true,
      "badge--primary": this.type === "primary",
      "badge--success": this.type === "success",
      "badge--info": this.type === "info",
      "badge--warning": this.type === "warning",
      "badge--danger": this.type === "danger",
      "badge--pill": this.pill,
      "badge--pulse": this.pulse
    })}
        role="status"
      >
        <slot></slot>
      </span>
    `;
      }
    };
    SlBadge.styles = badge_styles_default;
    __decorateClass([
      e4({ reflect: true })
    ], SlBadge.prototype, "type", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlBadge.prototype, "pill", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlBadge.prototype, "pulse", 2);
    SlBadge = __decorateClass([
      n5("sl-badge")
    ], SlBadge);

    // node_modules/@shoelace-style/animations/dist/index.js
    var dist_exports = {};
    __export(dist_exports, {
      backInDown: () => backInDown,
      backInLeft: () => backInLeft,
      backInRight: () => backInRight,
      backInUp: () => backInUp,
      backOutDown: () => backOutDown,
      backOutLeft: () => backOutLeft,
      backOutRight: () => backOutRight,
      backOutUp: () => backOutUp,
      bounce: () => bounce,
      bounceIn: () => bounceIn,
      bounceInDown: () => bounceInDown,
      bounceInLeft: () => bounceInLeft,
      bounceInRight: () => bounceInRight,
      bounceInUp: () => bounceInUp,
      bounceOut: () => bounceOut,
      bounceOutDown: () => bounceOutDown,
      bounceOutLeft: () => bounceOutLeft,
      bounceOutRight: () => bounceOutRight,
      bounceOutUp: () => bounceOutUp,
      easings: () => easings,
      fadeIn: () => fadeIn,
      fadeInBottomLeft: () => fadeInBottomLeft,
      fadeInBottomRight: () => fadeInBottomRight,
      fadeInDown: () => fadeInDown,
      fadeInDownBig: () => fadeInDownBig,
      fadeInLeft: () => fadeInLeft,
      fadeInLeftBig: () => fadeInLeftBig,
      fadeInRight: () => fadeInRight,
      fadeInRightBig: () => fadeInRightBig,
      fadeInTopLeft: () => fadeInTopLeft,
      fadeInTopRight: () => fadeInTopRight,
      fadeInUp: () => fadeInUp,
      fadeInUpBig: () => fadeInUpBig,
      fadeOut: () => fadeOut,
      fadeOutBottomLeft: () => fadeOutBottomLeft,
      fadeOutBottomRight: () => fadeOutBottomRight,
      fadeOutDown: () => fadeOutDown,
      fadeOutDownBig: () => fadeOutDownBig,
      fadeOutLeft: () => fadeOutLeft,
      fadeOutLeftBig: () => fadeOutLeftBig,
      fadeOutRight: () => fadeOutRight,
      fadeOutRightBig: () => fadeOutRightBig,
      fadeOutTopLeft: () => fadeOutTopLeft,
      fadeOutTopRight: () => fadeOutTopRight,
      fadeOutUp: () => fadeOutUp,
      fadeOutUpBig: () => fadeOutUpBig,
      flash: () => flash,
      flip: () => flip,
      flipInX: () => flipInX,
      flipInY: () => flipInY,
      flipOutX: () => flipOutX,
      flipOutY: () => flipOutY,
      headShake: () => headShake,
      heartBeat: () => heartBeat,
      hinge: () => hinge,
      jackInTheBox: () => jackInTheBox,
      jello: () => jello,
      lightSpeedInLeft: () => lightSpeedInLeft,
      lightSpeedInRight: () => lightSpeedInRight,
      lightSpeedOutLeft: () => lightSpeedOutLeft,
      lightSpeedOutRight: () => lightSpeedOutRight,
      pulse: () => pulse,
      rollIn: () => rollIn,
      rollOut: () => rollOut,
      rotateIn: () => rotateIn,
      rotateInDownLeft: () => rotateInDownLeft,
      rotateInDownRight: () => rotateInDownRight,
      rotateInUpLeft: () => rotateInUpLeft,
      rotateInUpRight: () => rotateInUpRight,
      rotateOut: () => rotateOut,
      rotateOutDownLeft: () => rotateOutDownLeft,
      rotateOutDownRight: () => rotateOutDownRight,
      rotateOutUpLeft: () => rotateOutUpLeft,
      rotateOutUpRight: () => rotateOutUpRight,
      rubberBand: () => rubberBand,
      shake: () => shake,
      shakeX: () => shakeX,
      shakeY: () => shakeY,
      slideInDown: () => slideInDown,
      slideInLeft: () => slideInLeft,
      slideInRight: () => slideInRight,
      slideInUp: () => slideInUp,
      slideOutDown: () => slideOutDown,
      slideOutLeft: () => slideOutLeft,
      slideOutRight: () => slideOutRight,
      slideOutUp: () => slideOutUp,
      swing: () => swing,
      tada: () => tada,
      wobble: () => wobble,
      zoomIn: () => zoomIn,
      zoomInDown: () => zoomInDown,
      zoomInLeft: () => zoomInLeft,
      zoomInRight: () => zoomInRight,
      zoomInUp: () => zoomInUp,
      zoomOut: () => zoomOut,
      zoomOutDown: () => zoomOutDown,
      zoomOutLeft: () => zoomOutLeft,
      zoomOutRight: () => zoomOutRight,
      zoomOutUp: () => zoomOutUp
    });

    // node_modules/@shoelace-style/animations/dist/attention_seekers/bounce.js
    var bounce = [
      { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" },
      { offset: 0.2, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" },
      { offset: 0.4, easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)", transform: "translate3d(0, -30px, 0) scaleY(1.1)" },
      { offset: 0.43, easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)", transform: "translate3d(0, -30px, 0) scaleY(1.1)" },
      { offset: 0.53, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" },
      { offset: 0.7, easing: "cubic-bezier(0.755, 0.05, 0.855, 0.06)", transform: "translate3d(0, -15px, 0) scaleY(1.05)" },
      {
        offset: 0.8,
        "transition-timing-function": "cubic-bezier(0.215, 0.61, 0.355, 1)",
        transform: "translate3d(0, 0, 0) scaleY(0.95)"
      },
      { offset: 0.9, transform: "translate3d(0, -4px, 0) scaleY(1.02)" },
      { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)", transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/attention_seekers/flash.js
    var flash = [
      { offset: 0, opacity: "1" },
      { offset: 0.25, opacity: "0" },
      { offset: 0.5, opacity: "1" },
      { offset: 0.75, opacity: "0" },
      { offset: 1, opacity: "1" }
    ];

    // node_modules/@shoelace-style/animations/dist/attention_seekers/headShake.js
    var headShake = [
      { offset: 0, transform: "translateX(0)" },
      { offset: 0.065, transform: "translateX(-6px) rotateY(-9deg)" },
      { offset: 0.185, transform: "translateX(5px) rotateY(7deg)" },
      { offset: 0.315, transform: "translateX(-3px) rotateY(-5deg)" },
      { offset: 0.435, transform: "translateX(2px) rotateY(3deg)" },
      { offset: 0.5, transform: "translateX(0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/attention_seekers/heartBeat.js
    var heartBeat = [
      { offset: 0, transform: "scale(1)" },
      { offset: 0.14, transform: "scale(1.3)" },
      { offset: 0.28, transform: "scale(1)" },
      { offset: 0.42, transform: "scale(1.3)" },
      { offset: 0.7, transform: "scale(1)" }
    ];

    // node_modules/@shoelace-style/animations/dist/attention_seekers/jello.js
    var jello = [
      { offset: 0, transform: "translate3d(0, 0, 0)" },
      { offset: 0.111, transform: "translate3d(0, 0, 0)" },
      { offset: 0.222, transform: "skewX(-12.5deg) skewY(-12.5deg)" },
      { offset: 0.33299999999999996, transform: "skewX(6.25deg) skewY(6.25deg)" },
      { offset: 0.444, transform: "skewX(-3.125deg) skewY(-3.125deg)" },
      { offset: 0.555, transform: "skewX(1.5625deg) skewY(1.5625deg)" },
      { offset: 0.6659999999999999, transform: "skewX(-0.78125deg) skewY(-0.78125deg)" },
      { offset: 0.777, transform: "skewX(0.390625deg) skewY(0.390625deg)" },
      { offset: 0.888, transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)" },
      { offset: 1, transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/attention_seekers/pulse.js
    var pulse = [
      { offset: 0, transform: "scale3d(1, 1, 1)" },
      { offset: 0.5, transform: "scale3d(1.05, 1.05, 1.05)" },
      { offset: 1, transform: "scale3d(1, 1, 1)" }
    ];

    // node_modules/@shoelace-style/animations/dist/attention_seekers/rubberBand.js
    var rubberBand = [
      { offset: 0, transform: "scale3d(1, 1, 1)" },
      { offset: 0.3, transform: "scale3d(1.25, 0.75, 1)" },
      { offset: 0.4, transform: "scale3d(0.75, 1.25, 1)" },
      { offset: 0.5, transform: "scale3d(1.15, 0.85, 1)" },
      { offset: 0.65, transform: "scale3d(0.95, 1.05, 1)" },
      { offset: 0.75, transform: "scale3d(1.05, 0.95, 1)" },
      { offset: 1, transform: "scale3d(1, 1, 1)" }
    ];

    // node_modules/@shoelace-style/animations/dist/attention_seekers/shake.js
    var shake = [
      { offset: 0, transform: "translate3d(0, 0, 0)" },
      { offset: 0.1, transform: "translate3d(-10px, 0, 0)" },
      { offset: 0.2, transform: "translate3d(10px, 0, 0)" },
      { offset: 0.3, transform: "translate3d(-10px, 0, 0)" },
      { offset: 0.4, transform: "translate3d(10px, 0, 0)" },
      { offset: 0.5, transform: "translate3d(-10px, 0, 0)" },
      { offset: 0.6, transform: "translate3d(10px, 0, 0)" },
      { offset: 0.7, transform: "translate3d(-10px, 0, 0)" },
      { offset: 0.8, transform: "translate3d(10px, 0, 0)" },
      { offset: 0.9, transform: "translate3d(-10px, 0, 0)" },
      { offset: 1, transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/attention_seekers/shakeX.js
    var shakeX = [
      { offset: 0, transform: "translate3d(0, 0, 0)" },
      { offset: 0.1, transform: "translate3d(-10px, 0, 0)" },
      { offset: 0.2, transform: "translate3d(10px, 0, 0)" },
      { offset: 0.3, transform: "translate3d(-10px, 0, 0)" },
      { offset: 0.4, transform: "translate3d(10px, 0, 0)" },
      { offset: 0.5, transform: "translate3d(-10px, 0, 0)" },
      { offset: 0.6, transform: "translate3d(10px, 0, 0)" },
      { offset: 0.7, transform: "translate3d(-10px, 0, 0)" },
      { offset: 0.8, transform: "translate3d(10px, 0, 0)" },
      { offset: 0.9, transform: "translate3d(-10px, 0, 0)" },
      { offset: 1, transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/attention_seekers/shakeY.js
    var shakeY = [
      { offset: 0, transform: "translate3d(0, 0, 0)" },
      { offset: 0.1, transform: "translate3d(0, -10px, 0)" },
      { offset: 0.2, transform: "translate3d(0, 10px, 0)" },
      { offset: 0.3, transform: "translate3d(0, -10px, 0)" },
      { offset: 0.4, transform: "translate3d(0, 10px, 0)" },
      { offset: 0.5, transform: "translate3d(0, -10px, 0)" },
      { offset: 0.6, transform: "translate3d(0, 10px, 0)" },
      { offset: 0.7, transform: "translate3d(0, -10px, 0)" },
      { offset: 0.8, transform: "translate3d(0, 10px, 0)" },
      { offset: 0.9, transform: "translate3d(0, -10px, 0)" },
      { offset: 1, transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/attention_seekers/swing.js
    var swing = [
      { offset: 0.2, transform: "rotate3d(0, 0, 1, 15deg)" },
      { offset: 0.4, transform: "rotate3d(0, 0, 1, -10deg)" },
      { offset: 0.6, transform: "rotate3d(0, 0, 1, 5deg)" },
      { offset: 0.8, transform: "rotate3d(0, 0, 1, -5deg)" },
      { offset: 1, transform: "rotate3d(0, 0, 1, 0deg)" }
    ];

    // node_modules/@shoelace-style/animations/dist/attention_seekers/tada.js
    var tada = [
      { offset: 0, transform: "scale3d(1, 1, 1)" },
      { offset: 0.1, transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)" },
      { offset: 0.2, transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)" },
      { offset: 0.3, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
      { offset: 0.4, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)" },
      { offset: 0.5, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
      { offset: 0.6, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)" },
      { offset: 0.7, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
      { offset: 0.8, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)" },
      { offset: 0.9, transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
      { offset: 1, transform: "scale3d(1, 1, 1)" }
    ];

    // node_modules/@shoelace-style/animations/dist/attention_seekers/wobble.js
    var wobble = [
      { offset: 0, transform: "translate3d(0, 0, 0)" },
      { offset: 0.15, transform: "translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)" },
      { offset: 0.3, transform: "translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)" },
      { offset: 0.45, transform: "translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)" },
      { offset: 0.6, transform: "translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)" },
      { offset: 0.75, transform: "translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)" },
      { offset: 1, transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/back_entrances/backInDown.js
    var backInDown = [
      { offset: 0, transform: "translateY(-1200px) scale(0.7)", opacity: "0.7" },
      { offset: 0.8, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
      { offset: 1, transform: "scale(1)", opacity: "1" }
    ];

    // node_modules/@shoelace-style/animations/dist/back_entrances/backInLeft.js
    var backInLeft = [
      { offset: 0, transform: "translateX(-2000px) scale(0.7)", opacity: "0.7" },
      { offset: 0.8, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
      { offset: 1, transform: "scale(1)", opacity: "1" }
    ];

    // node_modules/@shoelace-style/animations/dist/back_entrances/backInRight.js
    var backInRight = [
      { offset: 0, transform: "translateX(2000px) scale(0.7)", opacity: "0.7" },
      { offset: 0.8, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
      { offset: 1, transform: "scale(1)", opacity: "1" }
    ];

    // node_modules/@shoelace-style/animations/dist/back_entrances/backInUp.js
    var backInUp = [
      { offset: 0, transform: "translateY(1200px) scale(0.7)", opacity: "0.7" },
      { offset: 0.8, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
      { offset: 1, transform: "scale(1)", opacity: "1" }
    ];

    // node_modules/@shoelace-style/animations/dist/back_exits/backOutDown.js
    var backOutDown = [
      { offset: 0, transform: "scale(1)", opacity: "1" },
      { offset: 0.2, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
      { offset: 1, transform: "translateY(700px) scale(0.7)", opacity: "0.7" }
    ];

    // node_modules/@shoelace-style/animations/dist/back_exits/backOutLeft.js
    var backOutLeft = [
      { offset: 0, transform: "scale(1)", opacity: "1" },
      { offset: 0.2, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
      { offset: 1, transform: "translateX(-2000px) scale(0.7)", opacity: "0.7" }
    ];

    // node_modules/@shoelace-style/animations/dist/back_exits/backOutRight.js
    var backOutRight = [
      { offset: 0, transform: "scale(1)", opacity: "1" },
      { offset: 0.2, transform: "translateX(0px) scale(0.7)", opacity: "0.7" },
      { offset: 1, transform: "translateX(2000px) scale(0.7)", opacity: "0.7" }
    ];

    // node_modules/@shoelace-style/animations/dist/back_exits/backOutUp.js
    var backOutUp = [
      { offset: 0, transform: "scale(1)", opacity: "1" },
      { offset: 0.2, transform: "translateY(0px) scale(0.7)", opacity: "0.7" },
      { offset: 1, transform: "translateY(-700px) scale(0.7)", opacity: "0.7" }
    ];

    // node_modules/@shoelace-style/animations/dist/bouncing_entrances/bounceIn.js
    var bounceIn = [
      { offset: 0, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
      { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.2, transform: "scale3d(1.1, 1.1, 1.1)" },
      { offset: 0.2, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.4, transform: "scale3d(0.9, 0.9, 0.9)" },
      { offset: 0.4, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.6, opacity: "1", transform: "scale3d(1.03, 1.03, 1.03)" },
      { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.8, transform: "scale3d(0.97, 0.97, 0.97)" },
      { offset: 0.8, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 1, opacity: "1", transform: "scale3d(1, 1, 1)" },
      { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
    ];

    // node_modules/@shoelace-style/animations/dist/bouncing_entrances/bounceInDown.js
    var bounceInDown = [
      { offset: 0, opacity: "0", transform: "translate3d(0, -3000px, 0) scaleY(3)" },
      { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.6, opacity: "1", transform: "translate3d(0, 25px, 0) scaleY(0.9)" },
      { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.75, transform: "translate3d(0, -10px, 0) scaleY(0.95)" },
      { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.9, transform: "translate3d(0, 5px, 0) scaleY(0.985)" },
      { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 1, transform: "translate3d(0, 0, 0)" },
      { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
    ];

    // node_modules/@shoelace-style/animations/dist/bouncing_entrances/bounceInLeft.js
    var bounceInLeft = [
      { offset: 0, opacity: "0", transform: "translate3d(-3000px, 0, 0) scaleX(3)" },
      { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.6, opacity: "1", transform: "translate3d(25px, 0, 0) scaleX(1)" },
      { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.75, transform: "translate3d(-10px, 0, 0) scaleX(0.98)" },
      { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.9, transform: "translate3d(5px, 0, 0) scaleX(0.995)" },
      { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 1, transform: "translate3d(0, 0, 0)" },
      { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
    ];

    // node_modules/@shoelace-style/animations/dist/bouncing_entrances/bounceInRight.js
    var bounceInRight = [
      { offset: 0, opacity: "0", transform: "translate3d(3000px, 0, 0) scaleX(3)" },
      { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.6, opacity: "1", transform: "translate3d(-25px, 0, 0) scaleX(1)" },
      { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.75, transform: "translate3d(10px, 0, 0) scaleX(0.98)" },
      { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.9, transform: "translate3d(-5px, 0, 0) scaleX(0.995)" },
      { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 1, transform: "translate3d(0, 0, 0)" },
      { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
    ];

    // node_modules/@shoelace-style/animations/dist/bouncing_entrances/bounceInUp.js
    var bounceInUp = [
      { offset: 0, opacity: "0", transform: "translate3d(0, 3000px, 0) scaleY(5)" },
      { offset: 0, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.6, opacity: "1", transform: "translate3d(0, -20px, 0) scaleY(0.9)" },
      { offset: 0.6, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.75, transform: "translate3d(0, 10px, 0) scaleY(0.95)" },
      { offset: 0.75, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 0.9, transform: "translate3d(0, -5px, 0) scaleY(0.985)" },
      { offset: 0.9, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" },
      { offset: 1, transform: "translate3d(0, 0, 0)" },
      { offset: 1, easing: "cubic-bezier(0.215, 0.61, 0.355, 1)" }
    ];

    // node_modules/@shoelace-style/animations/dist/bouncing_exits/bounceOut.js
    var bounceOut = [
      { offset: 0.2, transform: "scale3d(0.9, 0.9, 0.9)" },
      { offset: 0.5, opacity: "1", transform: "scale3d(1.1, 1.1, 1.1)" },
      { offset: 0.55, opacity: "1", transform: "scale3d(1.1, 1.1, 1.1)" },
      { offset: 1, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" }
    ];

    // node_modules/@shoelace-style/animations/dist/bouncing_exits/bounceOutDown.js
    var bounceOutDown = [
      { offset: 0.2, transform: "translate3d(0, 10px, 0) scaleY(0.985)" },
      { offset: 0.4, opacity: "1", transform: "translate3d(0, -20px, 0) scaleY(0.9)" },
      { offset: 0.45, opacity: "1", transform: "translate3d(0, -20px, 0) scaleY(0.9)" },
      { offset: 1, opacity: "0", transform: "translate3d(0, 2000px, 0) scaleY(3)" }
    ];

    // node_modules/@shoelace-style/animations/dist/bouncing_exits/bounceOutLeft.js
    var bounceOutLeft = [
      { offset: 0.2, opacity: "1", transform: "translate3d(20px, 0, 0) scaleX(0.9)" },
      { offset: 1, opacity: "0", transform: "translate3d(-2000px, 0, 0) scaleX(2)" }
    ];

    // node_modules/@shoelace-style/animations/dist/bouncing_exits/bounceOutRight.js
    var bounceOutRight = [
      { offset: 0.2, opacity: "1", transform: "translate3d(-20px, 0, 0) scaleX(0.9)" },
      { offset: 1, opacity: "0", transform: "translate3d(2000px, 0, 0) scaleX(2)" }
    ];

    // node_modules/@shoelace-style/animations/dist/bouncing_exits/bounceOutUp.js
    var bounceOutUp = [
      { offset: 0.2, transform: "translate3d(0, -10px, 0) scaleY(0.985)" },
      { offset: 0.4, opacity: "1", transform: "translate3d(0, 20px, 0) scaleY(0.9)" },
      { offset: 0.45, opacity: "1", transform: "translate3d(0, 20px, 0) scaleY(0.9)" },
      { offset: 1, opacity: "0", transform: "translate3d(0, -2000px, 0) scaleY(3)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_entrances/fadeIn.js
    var fadeIn = [
      { offset: 0, opacity: "0" },
      { offset: 1, opacity: "1" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInBottomLeft.js
    var fadeInBottomLeft = [
      { offset: 0, opacity: "0", transform: "translate3d(-100%, 100%, 0)" },
      { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInBottomRight.js
    var fadeInBottomRight = [
      { offset: 0, opacity: "0", transform: "translate3d(100%, 100%, 0)" },
      { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInDown.js
    var fadeInDown = [
      { offset: 0, opacity: "0", transform: "translate3d(0, -100%, 0)" },
      { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInDownBig.js
    var fadeInDownBig = [
      { offset: 0, opacity: "0", transform: "translate3d(0, -2000px, 0)" },
      { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInLeft.js
    var fadeInLeft = [
      { offset: 0, opacity: "0", transform: "translate3d(-100%, 0, 0)" },
      { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInLeftBig.js
    var fadeInLeftBig = [
      { offset: 0, opacity: "0", transform: "translate3d(-2000px, 0, 0)" },
      { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInRight.js
    var fadeInRight = [
      { offset: 0, opacity: "0", transform: "translate3d(100%, 0, 0)" },
      { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInRightBig.js
    var fadeInRightBig = [
      { offset: 0, opacity: "0", transform: "translate3d(2000px, 0, 0)" },
      { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInTopLeft.js
    var fadeInTopLeft = [
      { offset: 0, opacity: "0", transform: "translate3d(-100%, -100%, 0)" },
      { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInTopRight.js
    var fadeInTopRight = [
      { offset: 0, opacity: "0", transform: "translate3d(100%, -100%, 0)" },
      { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInUp.js
    var fadeInUp = [
      { offset: 0, opacity: "0", transform: "translate3d(0, 100%, 0)" },
      { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_entrances/fadeInUpBig.js
    var fadeInUpBig = [
      { offset: 0, opacity: "0", transform: "translate3d(0, 2000px, 0)" },
      { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_exits/fadeOut.js
    var fadeOut = [
      { offset: 0, opacity: "1" },
      { offset: 1, opacity: "0" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutBottomLeft.js
    var fadeOutBottomLeft = [
      { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
      { offset: 1, opacity: "0", transform: "translate3d(-100%, 100%, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutBottomRight.js
    var fadeOutBottomRight = [
      { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
      { offset: 1, opacity: "0", transform: "translate3d(100%, 100%, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutDown.js
    var fadeOutDown = [
      { offset: 0, opacity: "1" },
      { offset: 1, opacity: "0", transform: "translate3d(0, 100%, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutDownBig.js
    var fadeOutDownBig = [
      { offset: 0, opacity: "1" },
      { offset: 1, opacity: "0", transform: "translate3d(0, 2000px, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutLeft.js
    var fadeOutLeft = [
      { offset: 0, opacity: "1" },
      { offset: 1, opacity: "0", transform: "translate3d(-100%, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutLeftBig.js
    var fadeOutLeftBig = [
      { offset: 0, opacity: "1" },
      { offset: 1, opacity: "0", transform: "translate3d(-2000px, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutRight.js
    var fadeOutRight = [
      { offset: 0, opacity: "1" },
      { offset: 1, opacity: "0", transform: "translate3d(100%, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutRightBig.js
    var fadeOutRightBig = [
      { offset: 0, opacity: "1" },
      { offset: 1, opacity: "0", transform: "translate3d(2000px, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutTopLeft.js
    var fadeOutTopLeft = [
      { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
      { offset: 1, opacity: "0", transform: "translate3d(-100%, -100%, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutTopRight.js
    var fadeOutTopRight = [
      { offset: 0, opacity: "1", transform: "translate3d(0, 0, 0)" },
      { offset: 1, opacity: "0", transform: "translate3d(100%, -100%, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutUp.js
    var fadeOutUp = [
      { offset: 0, opacity: "1" },
      { offset: 1, opacity: "0", transform: "translate3d(0, -100%, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/fading_exits/fadeOutUpBig.js
    var fadeOutUpBig = [
      { offset: 0, opacity: "1" },
      { offset: 1, opacity: "0", transform: "translate3d(0, -2000px, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/flippers/flip.js
    var flip = [
      {
        offset: 0,
        transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",
        easing: "ease-out"
      },
      {
        offset: 0.4,
        transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -190deg)",
        easing: "ease-out"
      },
      {
        offset: 0.5,
        transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)\n      rotate3d(0, 1, 0, -170deg)",
        easing: "ease-in"
      },
      {
        offset: 0.8,
        transform: "perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)\n      rotate3d(0, 1, 0, 0deg)",
        easing: "ease-in"
      },
      {
        offset: 1,
        transform: "perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",
        easing: "ease-in"
      }
    ];

    // node_modules/@shoelace-style/animations/dist/flippers/flipInX.js
    var flipInX = [
      { offset: 0, transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)", easing: "ease-in", opacity: "0" },
      { offset: 0.4, transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)", easing: "ease-in" },
      { offset: 0.6, transform: "perspective(400px) rotate3d(1, 0, 0, 10deg)", opacity: "1" },
      { offset: 0.8, transform: "perspective(400px) rotate3d(1, 0, 0, -5deg)" },
      { offset: 1, transform: "perspective(400px)" }
    ];

    // node_modules/@shoelace-style/animations/dist/flippers/flipInY.js
    var flipInY = [
      { offset: 0, transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)", easing: "ease-in", opacity: "0" },
      { offset: 0.4, transform: "perspective(400px) rotate3d(0, 1, 0, -20deg)", easing: "ease-in" },
      { offset: 0.6, transform: "perspective(400px) rotate3d(0, 1, 0, 10deg)", opacity: "1" },
      { offset: 0.8, transform: "perspective(400px) rotate3d(0, 1, 0, -5deg)" },
      { offset: 1, transform: "perspective(400px)" }
    ];

    // node_modules/@shoelace-style/animations/dist/flippers/flipOutX.js
    var flipOutX = [
      { offset: 0, transform: "perspective(400px)" },
      { offset: 0.3, transform: "perspective(400px) rotate3d(1, 0, 0, -20deg)", opacity: "1" },
      { offset: 1, transform: "perspective(400px) rotate3d(1, 0, 0, 90deg)", opacity: "0" }
    ];

    // node_modules/@shoelace-style/animations/dist/flippers/flipOutY.js
    var flipOutY = [
      { offset: 0, transform: "perspective(400px)" },
      { offset: 0.3, transform: "perspective(400px) rotate3d(0, 1, 0, -15deg)", opacity: "1" },
      { offset: 1, transform: "perspective(400px) rotate3d(0, 1, 0, 90deg)", opacity: "0" }
    ];

    // node_modules/@shoelace-style/animations/dist/lightspeed/lightSpeedInLeft.js
    var lightSpeedInLeft = [
      { offset: 0, transform: "translate3d(-100%, 0, 0) skewX(30deg)", opacity: "0" },
      { offset: 0.6, transform: "skewX(-20deg)", opacity: "1" },
      { offset: 0.8, transform: "skewX(5deg)" },
      { offset: 1, transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/lightspeed/lightSpeedInRight.js
    var lightSpeedInRight = [
      { offset: 0, transform: "translate3d(100%, 0, 0) skewX(-30deg)", opacity: "0" },
      { offset: 0.6, transform: "skewX(20deg)", opacity: "1" },
      { offset: 0.8, transform: "skewX(-5deg)" },
      { offset: 1, transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/lightspeed/lightSpeedOutLeft.js
    var lightSpeedOutLeft = [
      { offset: 0, opacity: "1" },
      { offset: 1, transform: "translate3d(-100%, 0, 0) skewX(-30deg)", opacity: "0" }
    ];

    // node_modules/@shoelace-style/animations/dist/lightspeed/lightSpeedOutRight.js
    var lightSpeedOutRight = [
      { offset: 0, opacity: "1" },
      { offset: 1, transform: "translate3d(100%, 0, 0) skewX(30deg)", opacity: "0" }
    ];

    // node_modules/@shoelace-style/animations/dist/rotating_entrances/rotateIn.js
    var rotateIn = [
      { offset: 0, transform: "rotate3d(0, 0, 1, -200deg)", opacity: "0" },
      { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
    ];

    // node_modules/@shoelace-style/animations/dist/rotating_entrances/rotateInDownLeft.js
    var rotateInDownLeft = [
      { offset: 0, transform: "rotate3d(0, 0, 1, -45deg)", opacity: "0" },
      { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
    ];

    // node_modules/@shoelace-style/animations/dist/rotating_entrances/rotateInDownRight.js
    var rotateInDownRight = [
      { offset: 0, transform: "rotate3d(0, 0, 1, 45deg)", opacity: "0" },
      { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
    ];

    // node_modules/@shoelace-style/animations/dist/rotating_entrances/rotateInUpLeft.js
    var rotateInUpLeft = [
      { offset: 0, transform: "rotate3d(0, 0, 1, 45deg)", opacity: "0" },
      { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
    ];

    // node_modules/@shoelace-style/animations/dist/rotating_entrances/rotateInUpRight.js
    var rotateInUpRight = [
      { offset: 0, transform: "rotate3d(0, 0, 1, -90deg)", opacity: "0" },
      { offset: 1, transform: "translate3d(0, 0, 0)", opacity: "1" }
    ];

    // node_modules/@shoelace-style/animations/dist/rotating_exits/rotateOut.js
    var rotateOut = [
      { offset: 0, opacity: "1" },
      { offset: 1, transform: "rotate3d(0, 0, 1, 200deg)", opacity: "0" }
    ];

    // node_modules/@shoelace-style/animations/dist/rotating_exits/rotateOutDownLeft.js
    var rotateOutDownLeft = [
      { offset: 0, opacity: "1" },
      { offset: 1, transform: "rotate3d(0, 0, 1, 45deg)", opacity: "0" }
    ];

    // node_modules/@shoelace-style/animations/dist/rotating_exits/rotateOutDownRight.js
    var rotateOutDownRight = [
      { offset: 0, opacity: "1" },
      { offset: 1, transform: "rotate3d(0, 0, 1, -45deg)", opacity: "0" }
    ];

    // node_modules/@shoelace-style/animations/dist/rotating_exits/rotateOutUpLeft.js
    var rotateOutUpLeft = [
      { offset: 0, opacity: "1" },
      { offset: 1, transform: "rotate3d(0, 0, 1, -45deg)", opacity: "0" }
    ];

    // node_modules/@shoelace-style/animations/dist/rotating_exits/rotateOutUpRight.js
    var rotateOutUpRight = [
      { offset: 0, opacity: "1" },
      { offset: 1, transform: "rotate3d(0, 0, 1, 90deg)", opacity: "0" }
    ];

    // node_modules/@shoelace-style/animations/dist/sliding_entrances/slideInDown.js
    var slideInDown = [
      { offset: 0, transform: "translate3d(0, -100%, 0)", visibility: "visible" },
      { offset: 1, transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/sliding_entrances/slideInLeft.js
    var slideInLeft = [
      { offset: 0, transform: "translate3d(-100%, 0, 0)", visibility: "visible" },
      { offset: 1, transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/sliding_entrances/slideInRight.js
    var slideInRight = [
      { offset: 0, transform: "translate3d(100%, 0, 0)", visibility: "visible" },
      { offset: 1, transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/sliding_entrances/slideInUp.js
    var slideInUp = [
      { offset: 0, transform: "translate3d(0, 100%, 0)", visibility: "visible" },
      { offset: 1, transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/sliding_exits/slideOutDown.js
    var slideOutDown = [
      { offset: 0, transform: "translate3d(0, 0, 0)" },
      { offset: 1, visibility: "hidden", transform: "translate3d(0, 100%, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/sliding_exits/slideOutLeft.js
    var slideOutLeft = [
      { offset: 0, transform: "translate3d(0, 0, 0)" },
      { offset: 1, visibility: "hidden", transform: "translate3d(-100%, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/sliding_exits/slideOutRight.js
    var slideOutRight = [
      { offset: 0, transform: "translate3d(0, 0, 0)" },
      { offset: 1, visibility: "hidden", transform: "translate3d(100%, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/sliding_exits/slideOutUp.js
    var slideOutUp = [
      { offset: 0, transform: "translate3d(0, 0, 0)" },
      { offset: 1, visibility: "hidden", transform: "translate3d(0, -100%, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/specials/hinge.js
    var hinge = [
      { offset: 0, easing: "ease-in-out" },
      { offset: 0.2, transform: "rotate3d(0, 0, 1, 80deg)", easing: "ease-in-out" },
      { offset: 0.4, transform: "rotate3d(0, 0, 1, 60deg)", easing: "ease-in-out", opacity: "1" },
      { offset: 0.6, transform: "rotate3d(0, 0, 1, 80deg)", easing: "ease-in-out" },
      { offset: 0.8, transform: "rotate3d(0, 0, 1, 60deg)", easing: "ease-in-out", opacity: "1" },
      { offset: 1, transform: "translate3d(0, 700px, 0)", opacity: "0" }
    ];

    // node_modules/@shoelace-style/animations/dist/specials/jackInTheBox.js
    var jackInTheBox = [
      { offset: 0, opacity: "0", transform: "scale(0.1) rotate(30deg)", "transform-origin": "center bottom" },
      { offset: 0.5, transform: "rotate(-10deg)" },
      { offset: 0.7, transform: "rotate(3deg)" },
      { offset: 1, opacity: "1", transform: "scale(1)" }
    ];

    // node_modules/@shoelace-style/animations/dist/specials/rollIn.js
    var rollIn = [
      { offset: 0, opacity: "0", transform: "translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)" },
      { offset: 1, opacity: "1", transform: "translate3d(0, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/specials/rollOut.js
    var rollOut = [
      { offset: 0, opacity: "1" },
      { offset: 1, opacity: "0", transform: "translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)" }
    ];

    // node_modules/@shoelace-style/animations/dist/zooming_entrances/zoomIn.js
    var zoomIn = [
      { offset: 0, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
      { offset: 0.5, opacity: "1" }
    ];

    // node_modules/@shoelace-style/animations/dist/zooming_entrances/zoomInDown.js
    var zoomInDown = [
      {
        offset: 0,
        opacity: "0",
        transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",
        easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
      },
      {
        offset: 0.6,
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
        easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
      }
    ];

    // node_modules/@shoelace-style/animations/dist/zooming_entrances/zoomInLeft.js
    var zoomInLeft = [
      {
        offset: 0,
        opacity: "0",
        transform: "scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",
        easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
      },
      {
        offset: 0.6,
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",
        easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
      }
    ];

    // node_modules/@shoelace-style/animations/dist/zooming_entrances/zoomInRight.js
    var zoomInRight = [
      {
        offset: 0,
        opacity: "0",
        transform: "scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",
        easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
      },
      {
        offset: 0.6,
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",
        easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
      }
    ];

    // node_modules/@shoelace-style/animations/dist/zooming_entrances/zoomInUp.js
    var zoomInUp = [
      {
        offset: 0,
        opacity: "0",
        transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",
        easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
      },
      {
        offset: 0.6,
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
        easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
      }
    ];

    // node_modules/@shoelace-style/animations/dist/zooming_exits/zoomOut.js
    var zoomOut = [
      { offset: 0, opacity: "1" },
      { offset: 0.5, opacity: "0", transform: "scale3d(0.3, 0.3, 0.3)" },
      { offset: 1, opacity: "0" }
    ];

    // node_modules/@shoelace-style/animations/dist/zooming_exits/zoomOutDown.js
    var zoomOutDown = [
      {
        offset: 0.4,
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",
        easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
      },
      {
        offset: 1,
        opacity: "0",
        transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",
        easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
      }
    ];

    // node_modules/@shoelace-style/animations/dist/zooming_exits/zoomOutLeft.js
    var zoomOutLeft = [
      { offset: 0.4, opacity: "1", transform: "scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)" },
      { offset: 1, opacity: "0", transform: "scale(0.1) translate3d(-2000px, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/zooming_exits/zoomOutRight.js
    var zoomOutRight = [
      { offset: 0.4, opacity: "1", transform: "scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)" },
      { offset: 1, opacity: "0", transform: "scale(0.1) translate3d(2000px, 0, 0)" }
    ];

    // node_modules/@shoelace-style/animations/dist/zooming_exits/zoomOutUp.js
    var zoomOutUp = [
      {
        offset: 0.4,
        opacity: "1",
        transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
        easing: "cubic-bezier(0.55, 0.055, 0.675, 0.19)"
      },
      {
        offset: 1,
        opacity: "0",
        transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",
        easing: "cubic-bezier(0.175, 0.885, 0.32, 1)"
      }
    ];

    // node_modules/@shoelace-style/animations/dist/easings/easings.js
    var easings = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      easeInSine: "cubic-bezier(0.47, 0, 0.745, 0.715)",
      easeOutSine: "cubic-bezier(0.39, 0.575, 0.565, 1)",
      easeInOutSine: "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
      easeInQuad: "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
      easeOutQuad: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      easeInOutQuad: "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
      easeInCubic: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
      easeOutCubic: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      easeInOutCubic: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      easeInQuart: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
      easeOutQuart: "cubic-bezier(0.165, 0.84, 0.44, 1)",
      easeInOutQuart: "cubic-bezier(0.77, 0, 0.175, 1)",
      easeInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
      easeOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
      easeInOutQuint: "cubic-bezier(0.86, 0, 0.07, 1)",
      easeInExpo: "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
      easeOutExpo: "cubic-bezier(0.19, 1, 0.22, 1)",
      easeInOutExpo: "cubic-bezier(1, 0, 0, 1)",
      easeInCirc: "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
      easeOutCirc: "cubic-bezier(0.075, 0.82, 0.165, 1)",
      easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
      easeInBack: "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
      easeOutBack: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      easeInOutBack: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
    };

    // src/components/animation/animation.styles.ts
    var animation_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: contents;
  }
`;

    // src/components/animation/animation.ts
    var SlAnimation = class extends h3 {
      constructor() {
        super(...arguments);
        this.hasStarted = false;
        this.name = "none";
        this.play = false;
        this.delay = 0;
        this.direction = "normal";
        this.duration = 1e3;
        this.easing = "linear";
        this.endDelay = 0;
        this.fill = "auto";
        this.iterations = Infinity;
        this.iterationStart = 0;
        this.playbackRate = 1;
      }
      get currentTime() {
        var _a;
        return ((_a = this.animation) == null ? void 0 : _a.currentTime) || 0;
      }
      set currentTime(time) {
        if (this.animation) {
          this.animation.currentTime = time;
        }
      }
      connectedCallback() {
        super.connectedCallback();
        this.createAnimation();
        this.handleAnimationCancel = this.handleAnimationCancel.bind(this);
        this.handleAnimationFinish = this.handleAnimationFinish.bind(this);
      }
      disconnectedCallback() {
        super.disconnectedCallback();
        this.destroyAnimation();
      }
      async handleAnimationChange() {
        if (!this.hasUpdated) {
          return;
        }
        this.createAnimation();
      }
      handleAnimationFinish() {
        this.play = false;
        this.hasStarted = false;
        emit(this, "sl-finish");
      }
      handleAnimationCancel() {
        this.play = false;
        this.hasStarted = false;
        emit(this, "sl-cancel");
      }
      handlePlayChange() {
        if (this.animation) {
          if (this.play && !this.hasStarted) {
            this.hasStarted = true;
            emit(this, "sl-start");
          }
          this.play ? this.animation.play() : this.animation.pause();
          return true;
        } else {
          return false;
        }
      }
      handlePlaybackRateChange() {
        if (this.animation) {
          this.animation.playbackRate = this.playbackRate;
        }
      }
      handleSlotChange() {
        this.destroyAnimation();
        this.createAnimation();
      }
      async createAnimation() {
        const easing = dist_exports.easings[this.easing] || this.easing;
        const keyframes = this.keyframes ? this.keyframes : dist_exports[this.name];
        const slot = await this.defaultSlot;
        const element = slot.assignedElements()[0];
        if (!element) {
          return false;
        }
        this.destroyAnimation();
        this.animation = element.animate(keyframes, {
          delay: this.delay,
          direction: this.direction,
          duration: this.duration,
          easing,
          endDelay: this.endDelay,
          fill: this.fill,
          iterationStart: this.iterationStart,
          iterations: this.iterations
        });
        this.animation.playbackRate = this.playbackRate;
        this.animation.addEventListener("cancel", this.handleAnimationCancel);
        this.animation.addEventListener("finish", this.handleAnimationFinish);
        if (this.play) {
          this.hasStarted = true;
          emit(this, "sl-start");
        } else {
          this.animation.pause();
        }
        return true;
      }
      destroyAnimation() {
        if (this.animation) {
          this.animation.cancel();
          this.animation.removeEventListener("cancel", this.handleAnimationCancel);
          this.animation.removeEventListener("finish", this.handleAnimationFinish);
          this.hasStarted = false;
        }
      }
      cancel() {
        try {
          this.animation.cancel();
        } catch (e3) {
        }
      }
      finish() {
        try {
          this.animation.finish();
        } catch (e3) {
        }
      }
      render() {
        return T` <slot @slotchange=${this.handleSlotChange}></slot> `;
      }
    };
    SlAnimation.styles = animation_styles_default;
    __decorateClass([
      e5("slot")
    ], SlAnimation.prototype, "defaultSlot", 2);
    __decorateClass([
      e4()
    ], SlAnimation.prototype, "name", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlAnimation.prototype, "play", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlAnimation.prototype, "delay", 2);
    __decorateClass([
      e4()
    ], SlAnimation.prototype, "direction", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlAnimation.prototype, "duration", 2);
    __decorateClass([
      e4()
    ], SlAnimation.prototype, "easing", 2);
    __decorateClass([
      e4({ attribute: "end-delay", type: Number })
    ], SlAnimation.prototype, "endDelay", 2);
    __decorateClass([
      e4()
    ], SlAnimation.prototype, "fill", 2);
    __decorateClass([
      e4({ type: Number })
    ], SlAnimation.prototype, "iterations", 2);
    __decorateClass([
      e4({ attribute: "iteration-start", type: Number })
    ], SlAnimation.prototype, "iterationStart", 2);
    __decorateClass([
      e4({ attribute: false })
    ], SlAnimation.prototype, "keyframes", 2);
    __decorateClass([
      e4({ attribute: "playback-rate", type: Number })
    ], SlAnimation.prototype, "playbackRate", 2);
    __decorateClass([
      watch("name"),
      watch("delay"),
      watch("direction"),
      watch("duration"),
      watch("easing"),
      watch("endDelay"),
      watch("fill"),
      watch("iterations"),
      watch("iterationsStart"),
      watch("keyframes")
    ], SlAnimation.prototype, "handleAnimationChange", 1);
    __decorateClass([
      watch("play")
    ], SlAnimation.prototype, "handlePlayChange", 1);
    __decorateClass([
      watch("playbackRate")
    ], SlAnimation.prototype, "handlePlaybackRateChange", 1);
    SlAnimation = __decorateClass([
      n5("sl-animation")
    ], SlAnimation);

    // src/components/button/button.styles.ts
    var button_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: inline-block;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-fast) background-color, var(--sl-transition-fast) color,
      var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button.button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button.button--disabled * {
    pointer-events: none;
  }

  /* Clicks on icons shouldn't prevent the button from gaining focus */
  .button::slotted(sl-icon) {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button.button--default {
    background-color: var(--sl-color-white);
    border-color: var(--sl-color-gray-300);
    color: var(--sl-color-gray-600);
  }

  .button.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-600);
  }

  .button.button--default:focus:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-600);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  .button.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button.button--primary {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-primary-text);
  }

  .button.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-400);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-text);
  }

  .button.button--primary:focus:not(.button--disabled) {
    background-color: var(--sl-color-primary-400);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-text);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  .button.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-primary-text);
  }

  /* Success */
  .button.button--success {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-success-text);
  }

  .button.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-400);
    border-color: var(--sl-color-success-400);
    color: var(--sl-color-success-text);
  }

  .button.button--success:focus:not(.button--disabled) {
    background-color: var(--sl-color-success-400);
    border-color: var(--sl-color-success-400);
    color: var(--sl-color-success-text);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-success);
  }

  .button.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-success-text);
  }

  /* Info */
  .button.button--info {
    background-color: var(--sl-color-info-500);
    border-color: var(--sl-color-info-500);
    color: var(--sl-color-info-text);
  }

  .button.button--info:hover:not(.button--disabled) {
    background-color: var(--sl-color-info-400);
    border-color: var(--sl-color-info-400);
    color: var(--sl-color-info-text);
  }

  .button.button--info:focus:not(.button--disabled) {
    background-color: var(--sl-color-info-400);
    border-color: var(--sl-color-info-400);
    color: var(--sl-color-info-text);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-info);
  }

  .button.button--info:active:not(.button--disabled) {
    background-color: var(--sl-color-info-500);
    border-color: var(--sl-color-info-500);
    color: var(--sl-color-info-text);
  }

  /* Warning */
  .button.button--warning {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-warning-text);
  }
  .button.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-400);
    border-color: var(--sl-color-warning-400);
    color: var(--sl-color-warning-text);
  }

  .button.button--warning:focus:not(.button--disabled) {
    background-color: var(--sl-color-warning-400);
    border-color: var(--sl-color-warning-400);
    color: var(--sl-color-warning-text);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-warning);
  }

  .button.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-warning-text);
  }

  /* Danger */
  .button.button--danger {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-danger-text);
  }

  .button.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-400);
    border-color: var(--sl-color-danger-400);
    color: var(--sl-color-danger-text);
  }

  .button.button--danger:focus:not(.button--disabled) {
    background-color: var(--sl-color-danger-400);
    border-color: var(--sl-color-danger-400);
    color: var(--sl-color-danger-text);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-danger);
  }

  .button.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-danger-text);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-400);
  }

  .button--text:focus:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-400);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-focus-ring-color-primary);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-right: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first) .button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last) .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-left: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, [type='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: solid 1px #fff4;
    mix-blend-mode: lighten;
  }

  /* Bump focused buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus) {
    z-index: 2;
  }
`;

    // src/components/button/button.ts
    var SlButton = class extends h3 {
      constructor() {
        super(...arguments);
        this.hasFocus = false;
        this.hasLabel = false;
        this.hasPrefix = false;
        this.hasSuffix = false;
        this.type = "default";
        this.size = "medium";
        this.caret = false;
        this.disabled = false;
        this.loading = false;
        this.pill = false;
        this.circle = false;
        this.submit = false;
      }
      connectedCallback() {
        super.connectedCallback();
        this.handleSlotChange();
      }
      click() {
        this.button.click();
      }
      focus(options) {
        this.button.focus(options);
      }
      blur() {
        this.button.blur();
      }
      handleSlotChange() {
        this.hasLabel = hasSlot(this);
        this.hasPrefix = hasSlot(this, "prefix");
        this.hasSuffix = hasSlot(this, "suffix");
      }
      handleBlur() {
        this.hasFocus = false;
        emit(this, "sl-blur");
      }
      handleFocus() {
        this.hasFocus = true;
        emit(this, "sl-focus");
      }
      handleClick(event) {
        if (this.disabled || this.loading) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
      render() {
        const isLink = this.href ? true : false;
        const interior = T`
      <span part="prefix" class="button__prefix">
        <slot @slotchange=${this.handleSlotChange} name="prefix"></slot>
      </span>
      <span part="label" class="button__label">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </span>
      <span part="suffix" class="button__suffix">
        <slot @slotchange=${this.handleSlotChange} name="suffix"></slot>
      </span>
      ${this.caret ? T`
            <span part="caret" class="button__caret">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          ` : ""}
      ${this.loading ? T`<sl-spinner></sl-spinner>` : ""}
    `;
        const button = T`
      <button
        part="base"
        class=${e({
      button: true,
      "button--default": this.type === "default",
      "button--primary": this.type === "primary",
      "button--success": this.type === "success",
      "button--info": this.type === "info",
      "button--warning": this.type === "warning",
      "button--danger": this.type === "danger",
      "button--text": this.type === "text",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--pill": this.pill,
      "button--has-label": this.hasLabel,
      "button--has-prefix": this.hasPrefix,
      "button--has-suffix": this.hasSuffix
    })}
        ?disabled=${this.disabled}
        type=${this.submit ? "submit" : "button"}
        name=${l$1(this.name)}
        value=${l$1(this.value)}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        ${interior}
      </button>
    `;
        const link = T`
      <a
        ref=${(el) => this.button = el}
        part="base"
        class=${e({
      button: true,
      "button--default": this.type === "default",
      "button--primary": this.type === "primary",
      "button--success": this.type === "success",
      "button--info": this.type === "info",
      "button--warning": this.type === "warning",
      "button--danger": this.type === "danger",
      "button--text": this.type === "text",
      "button--small": this.size === "small",
      "button--medium": this.size === "medium",
      "button--large": this.size === "large",
      "button--caret": this.caret,
      "button--circle": this.circle,
      "button--disabled": this.disabled,
      "button--focused": this.hasFocus,
      "button--loading": this.loading,
      "button--pill": this.pill,
      "button--has-label": this.hasLabel,
      "button--has-prefix": this.hasPrefix,
      "button--has-suffix": this.hasSuffix
    })}
        href=${l$1(this.href)}
        target=${l$1(this.target)}
        download=${l$1(this.download)}
        rel=${l$1(this.target ? "noreferrer noopener" : void 0)}
        role="button"
        aria-disabled=${this.disabled ? "true" : "false"}
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        ${interior}
      </a>
    `;
        return isLink ? link : button;
      }
    };
    SlButton.styles = button_styles_default;
    __decorateClass([
      o6(".button")
    ], SlButton.prototype, "button", 2);
    __decorateClass([
      r4()
    ], SlButton.prototype, "hasFocus", 2);
    __decorateClass([
      r4()
    ], SlButton.prototype, "hasLabel", 2);
    __decorateClass([
      r4()
    ], SlButton.prototype, "hasPrefix", 2);
    __decorateClass([
      r4()
    ], SlButton.prototype, "hasSuffix", 2);
    __decorateClass([
      e4({ reflect: true })
    ], SlButton.prototype, "type", 2);
    __decorateClass([
      e4({ reflect: true })
    ], SlButton.prototype, "size", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlButton.prototype, "caret", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlButton.prototype, "disabled", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlButton.prototype, "loading", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlButton.prototype, "pill", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlButton.prototype, "circle", 2);
    __decorateClass([
      e4({ type: Boolean, reflect: true })
    ], SlButton.prototype, "submit", 2);
    __decorateClass([
      e4()
    ], SlButton.prototype, "name", 2);
    __decorateClass([
      e4()
    ], SlButton.prototype, "value", 2);
    __decorateClass([
      e4()
    ], SlButton.prototype, "href", 2);
    __decorateClass([
      e4()
    ], SlButton.prototype, "target", 2);
    __decorateClass([
      e4()
    ], SlButton.prototype, "download", 2);
    SlButton = __decorateClass([
      n5("sl-button")
    ], SlButton);

    // src/components/spinner/spinner.styles.ts
    var spinner_styles_default = i2$1`
  ${component_styles_default}

  :host {
    --track-color: #0d131e20;
    --indicator-color: var(--sl-color-primary-500);
    --stroke-width: 2px;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    border-radius: 50%;
    border: solid var(--stroke-width) var(--track-color);
    border-top-color: var(--indicator-color);
    border-right-color: var(--indicator-color);
    animation: 1s linear infinite spin;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

    // src/components/spinner/spinner.ts
    var SlSpinner = class extends h3 {
      render() {
        return T` <span part="base" class="spinner" aria-busy="true" aria-live="polite"></span> `;
      }
    };
    SlSpinner.styles = spinner_styles_default;
    SlSpinner = __decorateClass([
      n5("sl-spinner")
    ], SlSpinner);

    // src/components/button-group/button-group.styles.ts
    var button_group_styles_default = i2$1`
  ${component_styles_default}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;

    // src/components/button-group/button-group.ts
    var SlButtonGroup = class extends h3 {
      constructor() {
        super(...arguments);
        this.label = "";
      }
      handleFocus(event) {
        const button = findButton(event.target);
        button == null ? void 0 : button.classList.add("sl-button-group__button--focus");
      }
      handleBlur(event) {
        const button = findButton(event.target);
        button == null ? void 0 : button.classList.remove("sl-button-group__button--focus");
      }
      handleMouseOver(event) {
        const button = findButton(event.target);
        button == null ? void 0 : button.classList.add("sl-button-group__button--hover");
      }
      handleMouseOut(event) {
        const button = findButton(event.target);
        button == null ? void 0 : button.classList.remove("sl-button-group__button--hover");
      }
      handleSlotChange() {
        const slottedElements = [...this.defaultSlot.assignedElements({ flatten: true })];
        slottedElements.map((el) => {
          const index = slottedElements.indexOf(el);
          const button = findButton(el);
          if (button) {
            button.classList.add("sl-button-group__button");
            button.classList.toggle("sl-button-group__button--first", index === 0);
            button.classList.toggle("sl-button-group__button--inner", index > 0 && index < slottedElements.length - 1);
            button.classList.toggle("sl-button-group__button--last", index === slottedElements.length - 1);
          }
        });
      }
      render() {
        return T`
      <div
        part="base"
        class="button-group"
        role="group"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
      }
    };
    SlButtonGroup.styles = button_group_styles_default;
    __decorateClass([
      o6("slot")
    ], SlButtonGroup.prototype, "defaultSlot", 2);
    __decorateClass([
      e4()
    ], SlButtonGroup.prototype, "label", 2);
    SlButtonGroup = __decorateClass([
      n5("sl-button-group")
    ], SlButtonGroup);
    function findButton(el) {
      return el.tagName.toLowerCase() === "sl-button" ? el : el.querySelector("sl-button");
    }

    window.____pwa_install_button_deferred_prompt = {};
    window.____pwa_install_button_installable = null;

    window.addEventListener('beforeinstallprompt', e => {
      window.____pwa_install_button_installable = true;
      window.____pwa_install_button_deferred_prompt = e;
    });

    class PwaInstallButton extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `<slot><button>Install</button></slot>`;
      }

      connectedCallback() {
        this.setAttribute('hidden', '');
        this.addEventListener('click', this._handlePrompt.bind(this));

        window.addEventListener('beforeinstallprompt', e => {
          e.preventDefault();
          window.____pwa_install_button_deferred_prompt = e;
          this.removeAttribute('hidden');
          this.dispatchEvent(new CustomEvent('pwa-installable', { detail: true }));
        });

        if (window.____pwa_install_button_installable) {
          this.removeAttribute('hidden');
        }
      }

      async _handlePrompt(e) {
        e.preventDefault();
        window.____pwa_install_button_deferred_prompt.prompt();
        const { outcome } = await window.____pwa_install_button_deferred_prompt.userChoice;
        if (outcome === 'accepted') {
          this.dispatchEvent(new CustomEvent('pwa-installed', { detail: true }));
          this.setAttribute('hidden', '');
          window.____pwa_install_button_deferred_prompt = null;
        } else {
          this.dispatchEvent(new CustomEvent('pwa-installed', { detail: false }));
        }
      }
    }

    customElements.define('pwa-install-button', PwaInstallButton);

    class PwaUpdateAvailable extends HTMLElement {
      constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `<slot><button>New update available!</button></slot>`;
        this._refreshing = false;
      }

      async connectedCallback() {
        this.setAttribute('hidden', '');
        this.addEventListener('click', this._postMessage.bind(this));

        if ('serviceWorker' in navigator) {
          const reg = await navigator.serviceWorker.getRegistration();
          if (reg) {
            reg.addEventListener('updatefound', () => {
              this._newWorker = reg.installing;
              this._newWorker.addEventListener('statechange', () => {
                if (this._newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  this.dispatchEvent(new CustomEvent('pwa-update-available', { detail: true }));
                  this.removeAttribute('hidden');
                }
              });
            });

            if (reg.waiting && navigator.serviceWorker.controller) {
              this.dispatchEvent(new CustomEvent('pwa-update-available', { detail: true }));
              this._newWorker = reg.waiting;
              this.removeAttribute('hidden');
            }
          }

          navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (this._refreshing) return;
            window.location.reload();
            this._refreshing = true;
          });
        }
      }

      _postMessage(e) {
        e.preventDefault();
        this._newWorker.postMessage({ type: 'SKIP_WAITING' });
      }
    }

    customElements.define('pwa-update-available', PwaUpdateAvailable);

    function toArray(objectOrArray) {
      objectOrArray = objectOrArray || [];
      return Array.isArray(objectOrArray) ? objectOrArray : [objectOrArray];
    }

    function log(msg) {
      return `[Vaadin.Router] ${msg}`;
    }

    function logValue(value) {
      if (typeof value !== 'object') {
        return String(value);
      }

      const stringType = Object.prototype.toString.call(value).match(/ (.*)\]$/)[1];
      if (stringType === 'Object' || stringType === 'Array') {
        return `${stringType} ${JSON.stringify(value)}`;
      } else {
        return stringType;
      }
    }

    const MODULE = 'module';
    const NOMODULE = 'nomodule';
    const bundleKeys = [MODULE, NOMODULE];

    function ensureBundle(src) {
      if (!src.match(/.+\.[m]?js$/)) {
        throw new Error(
          log(`Unsupported type for bundle "${src}": .js or .mjs expected.`)
        );
      }
    }

    function ensureRoute(route) {
      if (!route || !isString(route.path)) {
        throw new Error(
          log(`Expected route config to be an object with a "path" string property, or an array of such objects`)
        );
      }

      const bundle = route.bundle;

      const stringKeys = ['component', 'redirect', 'bundle'];
      if (
        !isFunction(route.action) &&
        !Array.isArray(route.children) &&
        !isFunction(route.children) &&
        !isObject(bundle) &&
        !stringKeys.some(key => isString(route[key]))
      ) {
        throw new Error(
          log(
            `Expected route config "${route.path}" to include either "${stringKeys.join('", "')}" ` +
            `or "action" function but none found.`
          )
        );
      }

      if (bundle) {
        if (isString(bundle)) {
          ensureBundle(bundle);
        } else if (!bundleKeys.some(key => key in bundle)) {
          throw new Error(
            log('Expected route bundle to include either "' + NOMODULE + '" or "' + MODULE + '" keys, or both')
          );
        } else {
          bundleKeys.forEach(key => key in bundle && ensureBundle(bundle[key]));
        }
      }

      if (route.redirect) {
        ['bundle', 'component'].forEach(overriddenProp => {
          if (overriddenProp in route) {
            console.warn(
              log(
                `Route config "${route.path}" has both "redirect" and "${overriddenProp}" properties, ` +
                `and "redirect" will always override the latter. Did you mean to only use "${overriddenProp}"?`
              )
            );
          }
        });
      }
    }

    function ensureRoutes(routes) {
      toArray(routes).forEach(route => ensureRoute(route));
    }

    function loadScript(src, key) {
      let script = document.head.querySelector('script[src="' + src + '"][async]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('src', src);
        if (key === MODULE) {
          script.setAttribute('type', MODULE);
        } else if (key === NOMODULE) {
          script.setAttribute(NOMODULE, '');
        }
        script.async = true;
      }
      return new Promise((resolve, reject) => {
        script.onreadystatechange = script.onload = e => {
          script.__dynamicImportLoaded = true;
          resolve(e);
        };
        script.onerror = e => {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
          reject(e);
        };
        if (script.parentNode === null) {
          document.head.appendChild(script);
        } else if (script.__dynamicImportLoaded) {
          resolve();
        }
      });
    }

    function loadBundle(bundle) {
      if (isString(bundle)) {
        return loadScript(bundle);
      } else {
        return Promise.race(
          bundleKeys
            .filter(key => key in bundle)
            .map(key => loadScript(bundle[key], key))
        );
      }
    }

    function fireRouterEvent(type, detail) {
      return !window.dispatchEvent(new CustomEvent(
        `vaadin-router-${type}`,
        {cancelable: type === 'go', detail}
      ));
    }

    function isObject(o) {
      // guard against null passing the typeof check
      return typeof o === 'object' && !!o;
    }

    function isFunction(f) {
      return typeof f === 'function';
    }

    function isString(s) {
      return typeof s === 'string';
    }

    function getNotFoundError(context) {
      const error = new Error(log(`Page not found (${context.pathname})`));
      error.context = context;
      error.code = 404;
      return error;
    }

    const notFoundResult = new (class NotFoundResult {})();

    /* istanbul ignore next: coverage is calculated in Chrome, this code is for IE */
    function getAnchorOrigin(anchor) {
      // IE11: on HTTP and HTTPS the default port is not included into
      // window.location.origin, so won't include it here either.
      const port = anchor.port;
      const protocol = anchor.protocol;
      const defaultHttp = protocol === 'http:' && port === '80';
      const defaultHttps = protocol === 'https:' && port === '443';
      const host = (defaultHttp || defaultHttps)
        ? anchor.hostname // does not include the port number (e.g. www.example.org)
        : anchor.host; // does include the port number (e.g. www.example.org:80)
      return `${protocol}//${host}`;
    }

    // The list of checks is not complete:
    //  - SVG support is missing
    //  - the 'rel' attribute is not considered
    function vaadinRouterGlobalClickHandler(event) {
      // ignore the click if the default action is prevented
      if (event.defaultPrevented) {
        return;
      }

      // ignore the click if not with the primary mouse button
      if (event.button !== 0) {
        return;
      }

      // ignore the click if a modifier key is pressed
      if (event.shiftKey || event.ctrlKey || event.altKey || event.metaKey) {
        return;
      }

      // find the <a> element that the click is at (or within)
      let anchor = event.target;
      const path = event.composedPath
        ? event.composedPath()
        : (event.path || []);

      // FIXME(web-padawan): `Symbol.iterator` used by webcomponentsjs is broken for arrays
      // example to check: `for...of` loop here throws the "Not yet implemented" error
      for (let i = 0; i < path.length; i++) {
        const target = path[i];
        if (target.nodeName && target.nodeName.toLowerCase() === 'a') {
          anchor = target;
          break;
        }
      }

      while (anchor && anchor.nodeName.toLowerCase() !== 'a') {
        anchor = anchor.parentNode;
      }

      // ignore the click if not at an <a> element
      if (!anchor || anchor.nodeName.toLowerCase() !== 'a') {
        return;
      }

      // ignore the click if the <a> element has a non-default target
      if (anchor.target && anchor.target.toLowerCase() !== '_self') {
        return;
      }

      // ignore the click if the <a> element has the 'download' attribute
      if (anchor.hasAttribute('download')) {
        return;
      }

      // ignore the click if the <a> element has the 'router-ignore' attribute
      if (anchor.hasAttribute('router-ignore')) {
        return;
      }

      // ignore the click if the target URL is a fragment on the current page
      if (anchor.pathname === window.location.pathname && anchor.hash !== '') {
        return;
      }

      // ignore the click if the target is external to the app
      // In IE11 HTMLAnchorElement does not have the `origin` property
      const origin = anchor.origin || getAnchorOrigin(anchor);
      if (origin !== window.location.origin) {
        return;
      }

      // if none of the above, convert the click into a navigation event
      const {pathname, search, hash} = anchor;
      if (fireRouterEvent('go', {pathname, search, hash})) {
        event.preventDefault();
        // for a click event, the scroll is reset to the top position.
        if (event && event.type === 'click') {
          window.scrollTo(0, 0);
        }
      }
    }

    /**
     * A navigation trigger for Vaadin Router that translated clicks on `<a>` links
     * into Vaadin Router navigation events.
     *
     * Only regular clicks on in-app links are translated (primary mouse button, no
     * modifier keys, the target href is within the app's URL space).
     *
     * @memberOf Router.NavigationTrigger
     * @type {NavigationTrigger}
     */
    const CLICK = {
      activate() {
        window.document.addEventListener('click', vaadinRouterGlobalClickHandler);
      },

      inactivate() {
        window.document.removeEventListener('click', vaadinRouterGlobalClickHandler);
      }
    };

    // PopStateEvent constructor shim
    const isIE = /Trident/.test(navigator.userAgent);

    /* istanbul ignore next: coverage is calculated in Chrome, this code is for IE */
    if (isIE && !isFunction(window.PopStateEvent)) {
      window.PopStateEvent = function(inType, params) {
        params = params || {};
        var e = document.createEvent('Event');
        e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
        e.state = params.state || null;
        return e;
      };
      window.PopStateEvent.prototype = window.Event.prototype;
    }

    function vaadinRouterGlobalPopstateHandler(event) {
      if (event.state === 'vaadin-router-ignore') {
        return;
      }
      const {pathname, search, hash} = window.location;
      fireRouterEvent('go', {pathname, search, hash});
    }

    /**
     * A navigation trigger for Vaadin Router that translates popstate events into
     * Vaadin Router navigation events.
     *
     * @memberOf Router.NavigationTrigger
     * @type {NavigationTrigger}
     */
    const POPSTATE = {
      activate() {
        window.addEventListener('popstate', vaadinRouterGlobalPopstateHandler);
      },

      inactivate() {
        window.removeEventListener('popstate', vaadinRouterGlobalPopstateHandler);
      }
    };

    /**
     * Expose `pathToRegexp`.
     */
    var pathToRegexp_1 = pathToRegexp;
    var parse_1 = parse;
    var compile_1 = compile;
    var tokensToFunction_1 = tokensToFunction;
    var tokensToRegExp_1 = tokensToRegExp;

    /**
     * Default configs.
     */
    var DEFAULT_DELIMITER = '/';
    var DEFAULT_DELIMITERS = './';

    /**
     * The main path matching regexp utility.
     *
     * @type {RegExp}
     */
    var PATH_REGEXP = new RegExp([
      // Match escaped characters that would otherwise appear in future matches.
      // This allows the user to escape special characters that won't transform.
      '(\\\\.)',
      // Match Express-style parameters and un-named parameters with a prefix
      // and optional suffixes. Matches appear as:
      //
      // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
      // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
      '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
    ].join('|'), 'g');

    /**
     * Parse a string for the raw tokens.
     *
     * @param  {string}  str
     * @param  {Object=} options
     * @return {!Array}
     */
    function parse (str, options) {
      var tokens = [];
      var key = 0;
      var index = 0;
      var path = '';
      var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER;
      var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS;
      var pathEscaped = false;
      var res;

      while ((res = PATH_REGEXP.exec(str)) !== null) {
        var m = res[0];
        var escaped = res[1];
        var offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;

        // Ignore already escaped sequences.
        if (escaped) {
          path += escaped[1];
          pathEscaped = true;
          continue
        }

        var prev = '';
        var next = str[index];
        var name = res[2];
        var capture = res[3];
        var group = res[4];
        var modifier = res[5];

        if (!pathEscaped && path.length) {
          var k = path.length - 1;

          if (delimiters.indexOf(path[k]) > -1) {
            prev = path[k];
            path = path.slice(0, k);
          }
        }

        // Push the current path onto the tokens.
        if (path) {
          tokens.push(path);
          path = '';
          pathEscaped = false;
        }

        var partial = prev !== '' && next !== undefined && next !== prev;
        var repeat = modifier === '+' || modifier === '*';
        var optional = modifier === '?' || modifier === '*';
        var delimiter = prev || defaultDelimiter;
        var pattern = capture || group;

        tokens.push({
          name: name || key++,
          prefix: prev,
          delimiter: delimiter,
          optional: optional,
          repeat: repeat,
          partial: partial,
          pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
        });
      }

      // Push any remaining characters.
      if (path || index < str.length) {
        tokens.push(path + str.substr(index));
      }

      return tokens
    }

    /**
     * Compile a string to a template function for the path.
     *
     * @param  {string}             str
     * @param  {Object=}            options
     * @return {!function(Object=, Object=)}
     */
    function compile (str, options) {
      return tokensToFunction(parse(str, options))
    }

    /**
     * Expose a method for transforming tokens into the path function.
     */
    function tokensToFunction (tokens) {
      // Compile all the tokens into regexps.
      var matches = new Array(tokens.length);

      // Compile all the patterns before compilation.
      for (var i = 0; i < tokens.length; i++) {
        if (typeof tokens[i] === 'object') {
          matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
        }
      }

      return function (data, options) {
        var path = '';
        var encode = (options && options.encode) || encodeURIComponent;

        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i];

          if (typeof token === 'string') {
            path += token;
            continue
          }

          var value = data ? data[token.name] : undefined;
          var segment;

          if (Array.isArray(value)) {
            if (!token.repeat) {
              throw new TypeError('Expected "' + token.name + '" to not repeat, but got array')
            }

            if (value.length === 0) {
              if (token.optional) continue

              throw new TypeError('Expected "' + token.name + '" to not be empty')
            }

            for (var j = 0; j < value.length; j++) {
              segment = encode(value[j], token);

              if (!matches[i].test(segment)) {
                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"')
              }

              path += (j === 0 ? token.prefix : token.delimiter) + segment;
            }

            continue
          }

          if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
            segment = encode(String(value), token);

            if (!matches[i].test(segment)) {
              throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"')
            }

            path += token.prefix + segment;
            continue
          }

          if (token.optional) {
            // Prepend partial segment prefixes.
            if (token.partial) path += token.prefix;

            continue
          }

          throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'))
        }

        return path
      }
    }

    /**
     * Escape a regular expression string.
     *
     * @param  {string} str
     * @return {string}
     */
    function escapeString (str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
    }

    /**
     * Escape the capturing group by escaping special characters and meaning.
     *
     * @param  {string} group
     * @return {string}
     */
    function escapeGroup (group) {
      return group.replace(/([=!:$/()])/g, '\\$1')
    }

    /**
     * Get the flags for a regexp from the options.
     *
     * @param  {Object} options
     * @return {string}
     */
    function flags (options) {
      return options && options.sensitive ? '' : 'i'
    }

    /**
     * Pull out keys from a regexp.
     *
     * @param  {!RegExp} path
     * @param  {Array=}  keys
     * @return {!RegExp}
     */
    function regexpToRegexp (path, keys) {
      if (!keys) return path

      // Use a negative lookahead to match only capturing groups.
      var groups = path.source.match(/\((?!\?)/g);

      if (groups) {
        for (var i = 0; i < groups.length; i++) {
          keys.push({
            name: i,
            prefix: null,
            delimiter: null,
            optional: false,
            repeat: false,
            partial: false,
            pattern: null
          });
        }
      }

      return path
    }

    /**
     * Transform an array into a regexp.
     *
     * @param  {!Array}  path
     * @param  {Array=}  keys
     * @param  {Object=} options
     * @return {!RegExp}
     */
    function arrayToRegexp (path, keys, options) {
      var parts = [];

      for (var i = 0; i < path.length; i++) {
        parts.push(pathToRegexp(path[i], keys, options).source);
      }

      return new RegExp('(?:' + parts.join('|') + ')', flags(options))
    }

    /**
     * Create a path regexp from string input.
     *
     * @param  {string}  path
     * @param  {Array=}  keys
     * @param  {Object=} options
     * @return {!RegExp}
     */
    function stringToRegexp (path, keys, options) {
      return tokensToRegExp(parse(path, options), keys, options)
    }

    /**
     * Expose a function for taking tokens and returning a RegExp.
     *
     * @param  {!Array}  tokens
     * @param  {Array=}  keys
     * @param  {Object=} options
     * @return {!RegExp}
     */
    function tokensToRegExp (tokens, keys, options) {
      options = options || {};

      var strict = options.strict;
      var start = options.start !== false;
      var end = options.end !== false;
      var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
      var delimiters = options.delimiters || DEFAULT_DELIMITERS;
      var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
      var route = start ? '^' : '';
      var isEndDelimited = tokens.length === 0;

      // Iterate over the tokens and create our regexp string.
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          route += escapeString(token);
          isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
        } else {
          var capture = token.repeat
            ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*'
            : token.pattern;

          if (keys) keys.push(token);

          if (token.optional) {
            if (token.partial) {
              route += escapeString(token.prefix) + '(' + capture + ')?';
            } else {
              route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?';
            }
          } else {
            route += escapeString(token.prefix) + '(' + capture + ')';
          }
        }
      }

      if (end) {
        if (!strict) route += '(?:' + delimiter + ')?';

        route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
      } else {
        if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?';
        if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')';
      }

      return new RegExp(route, flags(options))
    }

    /**
     * Normalize the given path string, returning a regular expression.
     *
     * An empty array can be passed in for the keys, which will hold the
     * placeholder key descriptions. For example, using `/user/:id`, `keys` will
     * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
     *
     * @param  {(string|RegExp|Array)} path
     * @param  {Array=}                keys
     * @param  {Object=}               options
     * @return {!RegExp}
     */
    function pathToRegexp (path, keys, options) {
      if (path instanceof RegExp) {
        return regexpToRegexp(path, keys)
      }

      if (Array.isArray(path)) {
        return arrayToRegexp(/** @type {!Array} */ (path), keys, options)
      }

      return stringToRegexp(/** @type {string} */ (path), keys, options)
    }
    pathToRegexp_1.parse = parse_1;
    pathToRegexp_1.compile = compile_1;
    pathToRegexp_1.tokensToFunction = tokensToFunction_1;
    pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

    /**
     * Universal Router (https://www.kriasoft.com/universal-router/)
     *
     * Copyright (c) 2015-present Kriasoft.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */

    const {hasOwnProperty} = Object.prototype;
    const cache = new Map();
    // see https://github.com/pillarjs/path-to-regexp/issues/148
    cache.set('|false', {
      keys: [],
      pattern: /(?:)/
    });

    function decodeParam(val) {
      try {
        return decodeURIComponent(val);
      } catch (err) {
        return val;
      }
    }

    function matchPath(routepath, path, exact, parentKeys, parentParams) {
      exact = !!exact;
      const cacheKey = `${routepath}|${exact}`;
      let regexp = cache.get(cacheKey);

      if (!regexp) {
        const keys = [];
        regexp = {
          keys,
          pattern: pathToRegexp_1(routepath, keys, {
            end: exact,
            strict: routepath === ''
          }),
        };
        cache.set(cacheKey, regexp);
      }

      const m = regexp.pattern.exec(path);
      if (!m) {
        return null;
      }

      const params = Object.assign({}, parentParams);

      for (let i = 1; i < m.length; i++) {
        const key = regexp.keys[i - 1];
        const prop = key.name;
        const value = m[i];
        if (value !== undefined || !hasOwnProperty.call(params, prop)) {
          if (key.repeat) {
            params[prop] = value ? value.split(key.delimiter).map(decodeParam) : [];
          } else {
            params[prop] = value ? decodeParam(value) : value;
          }
        }
      }

      return {
        path: m[0],
        keys: (parentKeys || []).concat(regexp.keys),
        params,
      };
    }

    /**
     * Universal Router (https://www.kriasoft.com/universal-router/)
     *
     * Copyright (c) 2015-present Kriasoft.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */

    /**
     * Traverses the routes tree and matches its nodes to the given pathname from
     * the root down to the leaves. Each match consumes a part of the pathname and
     * the matching process continues for as long as there is a matching child
     * route for the remaining part of the pathname.
     *
     * The returned value is a lazily evaluated iterator.
     *
     * The leading "/" in a route path matters only for the root of the routes
     * tree (or if all parent routes are ""). In all other cases a leading "/" in
     * a child route path has no significance.
     *
     * The trailing "/" in a _route path_ matters only for the leaves of the
     * routes tree. A leaf route with a trailing "/" matches only a pathname that
     * also has a trailing "/".
     *
     * The trailing "/" in a route path does not affect matching of child routes
     * in any way.
     *
     * The trailing "/" in a _pathname_ generally does not matter (except for
     * the case of leaf nodes described above).
     *
     * The "" and "/" routes have special treatment:
     *  1. as a single route
     *     the "" and "/" routes match only the "" and "/" pathnames respectively
     *  2. as a parent in the routes tree
     *     the "" route matches any pathname without consuming any part of it
     *     the "/" route matches any absolute pathname consuming its leading "/"
     *  3. as a leaf in the routes tree
     *     the "" and "/" routes match only if the entire pathname is consumed by
     *         the parent routes chain. In this case "" and "/" are equivalent.
     *  4. several directly nested "" or "/" routes
     *     - directly nested "" or "/" routes are 'squashed' (i.e. nesting two
     *       "/" routes does not require a double "/" in the pathname to match)
     *     - if there are only "" in the parent routes chain, no part of the
     *       pathname is consumed, and the leading "/" in the child routes' paths
     *       remains significant
     *
     * Side effect:
     *   - the routes tree { path: '' } matches only the '' pathname
     *   - the routes tree { path: '', children: [ { path: '' } ] } matches any
     *     pathname (for the tree root)
     *
     * Prefix matching can be enabled also by `children: true`.
     */
    function matchRoute(route, pathname, ignoreLeadingSlash, parentKeys, parentParams) {
      let match;
      let childMatches;
      let childIndex = 0;
      let routepath = route.path || '';
      if (routepath.charAt(0) === '/') {
        if (ignoreLeadingSlash) {
          routepath = routepath.substr(1);
        }
        ignoreLeadingSlash = true;
      }

      return {
        next(routeToSkip) {
          if (route === routeToSkip) {
            return {done: true};
          }

          const children = route.__children = route.__children || route.children;

          if (!match) {
            match = matchPath(routepath, pathname, !children, parentKeys, parentParams);

            if (match) {
              return {
                done: false,
                value: {
                  route,
                  keys: match.keys,
                  params: match.params,
                  path: match.path
                },
              };
            }
          }

          if (match && children) {
            while (childIndex < children.length) {
              if (!childMatches) {
                const childRoute = children[childIndex];
                childRoute.parent = route;

                let matchedLength = match.path.length;
                if (matchedLength > 0 && pathname.charAt(matchedLength) === '/') {
                  matchedLength += 1;
                }

                childMatches = matchRoute(
                  childRoute,
                  pathname.substr(matchedLength),
                  ignoreLeadingSlash,
                  match.keys,
                  match.params
                );
              }

              const childMatch = childMatches.next(routeToSkip);
              if (!childMatch.done) {
                return {
                  done: false,
                  value: childMatch.value,
                };
              }

              childMatches = null;
              childIndex++;
            }
          }

          return {done: true};
        },
      };
    }

    /**
     * Universal Router (https://www.kriasoft.com/universal-router/)
     *
     * Copyright (c) 2015-present Kriasoft.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */

    function resolveRoute(context) {
      if (isFunction(context.route.action)) {
        return context.route.action(context);
      }
      return undefined;
    }

    /**
     * Universal Router (https://www.kriasoft.com/universal-router/)
     *
     * Copyright (c) 2015-present Kriasoft.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */

    function isChildRoute(parentRoute, childRoute) {
      let route = childRoute;
      while (route) {
        route = route.parent;
        if (route === parentRoute) {
          return true;
        }
      }
      return false;
    }

    function generateErrorMessage(currentContext) {
      let errorMessage = `Path '${currentContext.pathname}' is not properly resolved due to an error.`;
      const routePath = (currentContext.route || {}).path;
      if (routePath) {
        errorMessage += ` Resolution had failed on route: '${routePath}'`;
      }
      return errorMessage;
    }

    function updateChainForRoute(context, match) {
      const {route, path} = match;

      if (route && !route.__synthetic) {
        const item = {path, route};
        if (!context.chain) {
          context.chain = [];
        } else {
          // Discard old items
          if (route.parent) {
            let i = context.chain.length;
            while (i-- && context.chain[i].route && context.chain[i].route !== route.parent) {
              context.chain.pop();
            }
          }
        }
        context.chain.push(item);
      }
    }

    /**
     */
    class Resolver {
      constructor(routes, options = {}) {
        if (Object(routes) !== routes) {
          throw new TypeError('Invalid routes');
        }

        this.baseUrl = options.baseUrl || '';
        this.errorHandler = options.errorHandler;
        this.resolveRoute = options.resolveRoute || resolveRoute;
        this.context = Object.assign({resolver: this}, options.context);
        this.root = Array.isArray(routes) ? {path: '', __children: routes, parent: null, __synthetic: true} : routes;
        this.root.parent = null;
      }

      /**
       * Returns the current list of routes (as a shallow copy). Adding / removing
       * routes to / from the returned array does not affect the routing config,
       * but modifying the route objects does.
       *
       * @return {!Array<!Router.Route>}
       */
      getRoutes() {
        return [...this.root.__children];
      }

      /**
       * Sets the routing config (replacing the existing one).
       *
       * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
       *    (the array is shallow copied)
       */
      setRoutes(routes) {
        ensureRoutes(routes);
        const newRoutes = [...toArray(routes)];
        this.root.__children = newRoutes;
      }

      /**
       * Appends one or several routes to the routing config and returns the
       * effective routing config after the operation.
       *
       * @param {!Array<!Router.Route>|!Router.Route} routes a single route or an array of those
       *    (the array is shallow copied)
       * @return {!Array<!Router.Route>}
       * @protected
       */
      addRoutes(routes) {
        ensureRoutes(routes);
        this.root.__children.push(...toArray(routes));
        return this.getRoutes();
      }

      /**
       * Removes all existing routes from the routing config.
       */
      removeRoutes() {
        this.setRoutes([]);
      }

      /**
       * Asynchronously resolves the given pathname, i.e. finds all routes matching
       * the pathname and tries resolving them one after another in the order they
       * are listed in the routes config until the first non-null result.
       *
       * Returns a promise that is fulfilled with the return value of an object that consists of the first
       * route handler result that returns something other than `null` or `undefined` and context used to get this result.
       *
       * If no route handlers return a non-null result, or if no route matches the
       * given pathname the returned promise is rejected with a 'page not found'
       * `Error`.
       *
       * @param {!string|!{pathname: !string}} pathnameOrContext the pathname to
       *    resolve or a context object with a `pathname` property and other
       *    properties to pass to the route resolver functions.
       * @return {!Promise<any>}
       */
      resolve(pathnameOrContext) {
        const context = Object.assign(
          {},
          this.context,
          isString(pathnameOrContext) ? {pathname: pathnameOrContext} : pathnameOrContext
        );
        const match = matchRoute(
          this.root,
          this.__normalizePathname(context.pathname),
          this.baseUrl
        );
        const resolve = this.resolveRoute;
        let matches = null;
        let nextMatches = null;
        let currentContext = context;

        function next(resume, parent = matches.value.route, prevResult) {
          const routeToSkip = prevResult === null && matches.value.route;
          matches = nextMatches || match.next(routeToSkip);
          nextMatches = null;

          if (!resume) {
            if (matches.done || !isChildRoute(parent, matches.value.route)) {
              nextMatches = matches;
              return Promise.resolve(notFoundResult);
            }
          }

          if (matches.done) {
            return Promise.reject(getNotFoundError(context));
          }

          currentContext = Object.assign(
            currentContext
              ? {chain: (currentContext.chain ? currentContext.chain.slice(0) : [])}
              : {},
            context,
            matches.value
          );
          updateChainForRoute(currentContext, matches.value);

          return Promise.resolve(resolve(currentContext)).then(resolution => {
            if (resolution !== null && resolution !== undefined && resolution !== notFoundResult) {
              currentContext.result = resolution.result || resolution;
              return currentContext;
            }
            return next(resume, parent, resolution);
          });
        }

        context.next = next;

        return Promise.resolve()
          .then(() => next(true, this.root))
          .catch((error) => {
            const errorMessage = generateErrorMessage(currentContext);
            if (!error) {
              error = new Error(errorMessage);
            } else {
              console.warn(errorMessage);
            }
            error.context = error.context || currentContext;
            // DOMException has its own code which is read-only
            if (!(error instanceof DOMException)) {
              error.code = error.code || 500;
            }
            if (this.errorHandler) {
              currentContext.result = this.errorHandler(error);
              return currentContext;
            }
            throw error;
          });
      }

      /**
       * URL constructor polyfill hook. Creates and returns an URL instance.
       */
      static __createUrl(url, base) {
        return new URL(url, base);
      }

      /**
       * If the baseUrl property is set, transforms the baseUrl and returns the full
       * actual `base` string for using in the `new URL(path, base);` and for
       * prepernding the paths with. The returned base ends with a trailing slash.
       *
       * Otherwise, returns empty string.
       */
      get __effectiveBaseUrl() {
        return this.baseUrl
          ? this.constructor.__createUrl(
            this.baseUrl,
            document.baseURI || document.URL
          ).href.replace(/[^\/]*$/, '')
          : '';
      }

      /**
       * If the baseUrl is set, matches the pathname with the router’s baseUrl,
       * and returns the local pathname with the baseUrl stripped out.
       *
       * If the pathname does not match the baseUrl, returns undefined.
       *
       * If the `baseUrl` is not set, returns the unmodified pathname argument.
       */
      __normalizePathname(pathname) {
        if (!this.baseUrl) {
          // No base URL, no need to transform the pathname.
          return pathname;
        }

        const base = this.__effectiveBaseUrl;
        const normalizedUrl = this.constructor.__createUrl(pathname, base).href;
        if (normalizedUrl.slice(0, base.length) === base) {
          return normalizedUrl.slice(base.length);
        }
      }
    }

    Resolver.pathToRegexp = pathToRegexp_1;

    /**
     * Universal Router (https://www.kriasoft.com/universal-router/)
     *
     * Copyright (c) 2015-present Kriasoft.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE.txt file in the root directory of this source tree.
     */

    const {pathToRegexp: pathToRegexp$1} = Resolver;
    const cache$1 = new Map();

    function cacheRoutes(routesByName, route, routes) {
      const name = route.name || route.component;
      if (name) {
        if (routesByName.has(name)) {
          routesByName.get(name).push(route);
        } else {
          routesByName.set(name, [route]);
        }
      }

      if (Array.isArray(routes)) {
        for (let i = 0; i < routes.length; i++) {
          const childRoute = routes[i];
          childRoute.parent = route;
          cacheRoutes(routesByName, childRoute, childRoute.__children || childRoute.children);
        }
      }
    }

    function getRouteByName(routesByName, routeName) {
      const routes = routesByName.get(routeName);
      if (routes && routes.length > 1) {
        throw new Error(
          `Duplicate route with name "${routeName}".`
          + ` Try seting unique 'name' route properties.`
        );
      }
      return routes && routes[0];
    }

    function getRoutePath(route) {
      let path = route.path;
      path = Array.isArray(path) ? path[0] : path;
      return path !== undefined ? path : '';
    }

    function generateUrls(router, options = {}) {
      if (!(router instanceof Resolver)) {
        throw new TypeError('An instance of Resolver is expected');
      }

      const routesByName = new Map();

      return (routeName, params) => {
        let route = getRouteByName(routesByName, routeName);
        if (!route) {
          routesByName.clear(); // clear cache
          cacheRoutes(routesByName, router.root, router.root.__children);

          route = getRouteByName(routesByName, routeName);
          if (!route) {
            throw new Error(`Route "${routeName}" not found`);
          }
        }

        let regexp = cache$1.get(route.fullPath);
        if (!regexp) {
          let fullPath = getRoutePath(route);
          let rt = route.parent;
          while (rt) {
            const path = getRoutePath(rt);
            if (path) {
              fullPath = path.replace(/\/$/, '') + '/' + fullPath.replace(/^\//, '');
            }
            rt = rt.parent;
          }
          const tokens = pathToRegexp$1.parse(fullPath);
          const toPath = pathToRegexp$1.tokensToFunction(tokens);
          const keys = Object.create(null);
          for (let i = 0; i < tokens.length; i++) {
            if (!isString(tokens[i])) {
              keys[tokens[i].name] = true;
            }
          }
          regexp = {toPath, keys};
          cache$1.set(fullPath, regexp);
          route.fullPath = fullPath;
        }

        let url = regexp.toPath(params, options) || '/';

        if (options.stringifyQueryParams && params) {
          const queryParams = {};
          const keys = Object.keys(params);
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (!regexp.keys[key]) {
              queryParams[key] = params[key];
            }
          }
          const query = options.stringifyQueryParams(queryParams);
          if (query) {
            url += query.charAt(0) === '?' ? query : `?${query}`;
          }
        }

        return url;
      };
    }

    /**
     * @typedef NavigationTrigger
     * @type {object}
     * @property {function()} activate
     * @property {function()} inactivate
     */

    /** @type {Array<NavigationTrigger>} */
    let triggers = [];

    function setNavigationTriggers(newTriggers) {
      triggers.forEach(trigger => trigger.inactivate());

      newTriggers.forEach(trigger => trigger.activate());

      triggers = newTriggers;
    }

    const willAnimate = elem => {
      const name = getComputedStyle(elem).getPropertyValue('animation-name');
      return name && name !== 'none';
    };

    const waitForAnimation = (elem, cb) => {
      const listener = () => {
        elem.removeEventListener('animationend', listener);
        cb();
      };
      elem.addEventListener('animationend', listener);
    };

    function animate(elem, className) {
      elem.classList.add(className);

      return new Promise(resolve => {
        if (willAnimate(elem)) {
          const rect = elem.getBoundingClientRect();
          const size = `height: ${rect.bottom - rect.top}px; width: ${rect.right - rect.left}px`;
          elem.setAttribute('style', `position: absolute; ${size}`);
          waitForAnimation(elem, () => {
            elem.classList.remove(className);
            elem.removeAttribute('style');
            resolve();
          });
        } else {
          elem.classList.remove(className);
          resolve();
        }
      });
    }

    const MAX_REDIRECT_COUNT = 256;

    function isResultNotEmpty(result) {
      return result !== null && result !== undefined;
    }

    function copyContextWithoutNext(context) {
      const copy = Object.assign({}, context);
      delete copy.next;
      return copy;
    }

    function createLocation({pathname = '', search = '', hash = '', chain = [], params = {}, redirectFrom, resolver}, route) {
      const routes = chain.map(item => item.route);
      return {
        baseUrl: resolver && resolver.baseUrl || '',
        pathname,
        search,
        hash,
        routes,
        route: route || routes.length && routes[routes.length - 1] || null,
        params,
        redirectFrom,
        getUrl: (userParams = {}) => getPathnameForRouter(
          Router.pathToRegexp.compile(
            getMatchedPath(routes)
          )(Object.assign({}, params, userParams)),
          resolver
        )
      };
    }

    function createRedirect(context, pathname) {
      const params = Object.assign({}, context.params);
      return {
        redirect: {
          pathname,
          from: context.pathname,
          params
        }
      };
    }

    function renderElement(context, element) {
      element.location = createLocation(context);
      const index = context.chain.map(item => item.route).indexOf(context.route);
      context.chain[index].element = element;
      return element;
    }

    function runCallbackIfPossible(callback, args, thisArg) {
      if (isFunction(callback)) {
        return callback.apply(thisArg, args);
      }
    }

    function amend(amendmentFunction, args, element) {
      return amendmentResult => {
        if (amendmentResult && (amendmentResult.cancel || amendmentResult.redirect)) {
          return amendmentResult;
        }

        if (element) {
          return runCallbackIfPossible(element[amendmentFunction], args, element);
        }
      };
    }

    function processNewChildren(newChildren, route) {
      if (!Array.isArray(newChildren) && !isObject(newChildren)) {
        throw new Error(
          log(
            `Incorrect "children" value for the route ${route.path}: expected array or object, but got ${newChildren}`
          )
        );
      }

      route.__children = [];
      const childRoutes = toArray(newChildren);
      for (let i = 0; i < childRoutes.length; i++) {
        ensureRoute(childRoutes[i]);
        route.__children.push(childRoutes[i]);
      }
    }

    function removeDomNodes(nodes) {
      if (nodes && nodes.length) {
        const parent = nodes[0].parentNode;
        for (let i = 0; i < nodes.length; i++) {
          parent.removeChild(nodes[i]);
        }
      }
    }

    function getPathnameForRouter(pathname, router) {
      const base = router.__effectiveBaseUrl;
      return base
        ? router.constructor.__createUrl(pathname.replace(/^\//, ''), base).pathname
        : pathname;
    }

    function getMatchedPath(chain) {
      return chain.map(item => item.path).reduce((a, b) => {
        if (b.length) {
          return a.replace(/\/$/, '') + '/' + b.replace(/^\//, '');
        }
        return a;
      }, '');
    }

    /**
     * A simple client-side router for single-page applications. It uses
     * express-style middleware and has a first-class support for Web Components and
     * lazy-loading. Works great in Polymer and non-Polymer apps.
     *
     * Use `new Router(outlet, options)` to create a new Router instance.
     *
     * * The `outlet` parameter is a reference to the DOM node to render
     *   the content into.
     *
     * * The `options` parameter is an optional object with options. The following
     *   keys are supported:
     *   * `baseUrl` — the initial value for [
     *     the `baseUrl` property
     *   ](#/classes/Router#property-baseUrl)
     *
     * The Router instance is automatically subscribed to navigation events
     * on `window`.
     *
     * See [Live Examples](#/classes/Router/demos/demo/index.html) for the detailed usage demo and code snippets.
     *
     * See also detailed API docs for the following methods, for the advanced usage:
     *
     * * [setOutlet](#/classes/Router#method-setOutlet) – should be used to configure the outlet.
     * * [setTriggers](#/classes/Router#method-setTriggers) – should be used to configure the navigation events.
     * * [setRoutes](#/classes/Router#method-setRoutes) – should be used to configure the routes.
     *
     * Only `setRoutes` has to be called manually, others are automatically invoked when creating a new instance.
     *
     * @extends Resolver
     * @demo demo/index.html
     * @summary JavaScript class that renders different DOM content depending on
     *    a given path. It can re-render when triggered or automatically on
     *    'popstate' and / or 'click' events.
     */
    class Router extends Resolver {

      /**
       * Creates a new Router instance with a given outlet, and
       * automatically subscribes it to navigation events on the `window`.
       * Using a constructor argument or a setter for outlet is equivalent:
       *
       * ```
       * const router = new Router();
       * router.setOutlet(outlet);
       * ```
       * @param {?Node=} outlet
       * @param {?RouterOptions=} options
       */
      constructor(outlet, options) {
        const baseElement = document.head.querySelector('base');
        const baseHref = baseElement && baseElement.getAttribute('href');
        super([], Object.assign({
          // Default options
          baseUrl: baseHref && Resolver.__createUrl(baseHref, document.URL).pathname.replace(/[^\/]*$/, '')
        }, options));

        this.resolveRoute = context => this.__resolveRoute(context);

        const triggers = Router.NavigationTrigger;
        Router.setTriggers.apply(Router, Object.keys(triggers).map(key => triggers[key]));

        /**
         * The base URL for all routes in the router instance. By default,
         * if the base element exists in the `<head>`, vaadin-router
         * takes the `<base href>` attribute value, resolves against current `document.URL`
         * and gets the `pathname` from the result.
         *
         * @public
         * @type {string}
         */
        this.baseUrl;

        /**
         * A promise that is settled after the current render cycle completes. If
         * there is no render cycle in progress the promise is immediately settled
         * with the last render cycle result.
         *
         * @public
         * @type {!Promise<!RouterLocation>}
         */
        this.ready;
        this.ready = Promise.resolve(outlet);

        /**
         * Contains read-only information about the current router location:
         * pathname, active routes, parameters. See the
         * [Location type declaration](#/classes/RouterLocation)
         * for more details.
         *
         * @public
         * @type {!RouterLocation}
         */
        this.location;
        this.location = createLocation({resolver: this});

        this.__lastStartedRenderId = 0;
        this.__navigationEventHandler = this.__onNavigationEvent.bind(this);
        this.setOutlet(outlet);
        this.subscribe();
        // Using WeakMap instead of WeakSet because WeakSet is not supported by IE11
        this.__createdByRouter = new WeakMap();
        this.__addedByRouter = new WeakMap();
      }

      __resolveRoute(context) {
        const route = context.route;

        let callbacks = Promise.resolve();

        if (isFunction(route.children)) {
          callbacks = callbacks
            .then(() => route.children(copyContextWithoutNext(context)))
            .then(children => {
              // The route.children() callback might have re-written the
              // route.children property instead of returning a value
              if (!isResultNotEmpty(children) && !isFunction(route.children)) {
                children = route.children;
              }
              processNewChildren(children, route);
            });
        }

        const commands = {
          redirect: path => createRedirect(context, path),
          component: (component) => {
            const element = document.createElement(component);
            this.__createdByRouter.set(element, true);
            return element;
          }
        };

        return callbacks
          .then(() => {
            if (this.__isLatestRender(context)) {
              return runCallbackIfPossible(route.action, [context, commands], route);
            }
          })
          .then(result => {
            if (isResultNotEmpty(result)) {
              // Actions like `() => import('my-view.js')` are not expected to
              // end the resolution, despite the result is not empty. Checking
              // the result with a whitelist of values that end the resolution.
              if (result instanceof HTMLElement ||
                  result.redirect ||
                  result === notFoundResult) {
                return result;
              }
            }

            if (isString(route.redirect)) {
              return commands.redirect(route.redirect);
            }

            if (route.bundle) {
              return loadBundle(route.bundle)
                .then(() => {}, () => {
                  throw new Error(log(`Bundle not found: ${route.bundle}. Check if the file name is correct`));
                });
            }
          })
          .then(result => {
            if (isResultNotEmpty(result)) {
              return result;
            }
            if (isString(route.component)) {
              return commands.component(route.component);
            }
          });
      }

      /**
       * Sets the router outlet (the DOM node where the content for the current
       * route is inserted). Any content pre-existing in the router outlet is
       * removed at the end of each render pass.
       *
       * NOTE: this method is automatically invoked first time when creating a new Router instance.
       *
       * @param {?Node} outlet the DOM node where the content for the current route
       *     is inserted.
       */
      setOutlet(outlet) {
        if (outlet) {
          this.__ensureOutlet(outlet);
        }
        this.__outlet = outlet;
      }

      /**
       * Returns the current router outlet. The initial value is `undefined`.
       *
       * @return {?Node} the current router outlet (or `undefined`)
       */
      getOutlet() {
        return this.__outlet;
      }

      /**
       * Sets the routing config (replacing the existing one) and triggers a
       * navigation event so that the router outlet is refreshed according to the
       * current `window.location` and the new routing config.
       *
       * Each route object may have the following properties, listed here in the processing order:
       * * `path` – the route path (relative to the parent route if any) in the
       * [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
       *
       * * `children` – an array of nested routes or a function that provides this
       * array at the render time. The function can be synchronous or asynchronous:
       * in the latter case the render is delayed until the returned promise is
       * resolved. The `children` function is executed every time when this route is
       * being rendered. This allows for dynamic route structures (e.g. backend-defined),
       * but it might have a performance impact as well. In order to avoid calling
       * the function on subsequent renders, you can override the `children` property
       * of the route object and save the calculated array there
       * (via `context.route.children = [ route1, route2, ...];`).
       * Parent routes are fully resolved before resolving the children. Children
       * 'path' values are relative to the parent ones.
       *
       * * `action` – the action that is executed before the route is resolved.
       * The value for this property should be a function, accepting `context`
       * and `commands` parameters described below. If present, this function is
       * always invoked first, disregarding of the other properties' presence.
       * The action can return a result directly or within a `Promise`, which
       * resolves to the result. If the action result is an `HTMLElement` instance,
       * a `commands.component(name)` result, a `commands.redirect(path)` result,
       * or a `context.next()` result, the current route resolution is finished,
       * and other route config properties are ignored.
       * See also **Route Actions** section in [Live Examples](#/classes/Router/demos/demo/index.html).
       *
       * * `redirect` – other route's path to redirect to. Passes all route parameters to the redirect target.
       * The target route should also be defined.
       * See also **Redirects** section in [Live Examples](#/classes/Router/demos/demo/index.html).
       *
       * * `bundle` – string containing the path to `.js` or `.mjs` bundle to load before resolving the route,
       * or the object with "module" and "nomodule" keys referring to different bundles.
       * Each bundle is only loaded once. If "module" and "nomodule" are set, only one bundle is loaded,
       * depending on whether the browser supports ES modules or not.
       * The property is ignored when either an `action` returns the result or `redirect` property is present.
       * Any error, e.g. 404 while loading bundle will cause route resolution to throw.
       * See also **Code Splitting** section in [Live Examples](#/classes/Router/demos/demo/index.html).
       *
       * * `component` – the tag name of the Web Component to resolve the route to.
       * The property is ignored when either an `action` returns the result or `redirect` property is present.
       * If route contains the `component` property (or an action that return a component)
       * and its child route also contains the `component` property, child route's component
       * will be rendered as a light dom child of a parent component.
       *
       * * `name` – the string name of the route to use in the
       * [`router.urlForName(name, params)`](#/classes/Router#method-urlForName)
       * navigation helper method.
       *
       * For any route function (`action`, `children`) defined, the corresponding `route` object is available inside the callback
       * through the `this` reference. If you need to access it, make sure you define the callback as a non-arrow function
       * because arrow functions do not have their own `this` reference.
       *
       * `context` object that is passed to `action` function holds the following properties:
       * * `context.pathname` – string with the pathname being resolved
       *
       * * `context.search` – search query string
       *
       * * `context.hash` – hash string
       *
       * * `context.params` – object with route parameters
       *
       * * `context.route` – object that holds the route that is currently being rendered.
       *
       * * `context.next()` – function for asynchronously getting the next route
       * contents from the resolution chain (if any)
       *
       * `commands` object that is passed to `action` function has
       * the following methods:
       *
       * * `commands.redirect(path)` – function that creates a redirect data
       * for the path specified.
       *
       * * `commands.component(component)` – function that creates a new HTMLElement
       * with current context. Note: the component created by this function is reused if visiting the same path twice in row.
       *
       *
       * @param {!Array<!Route>|!Route} routes a single route or an array of those
       * @param {?boolean} skipRender configure the router but skip rendering the
       *     route corresponding to the current `window.location` values
       *
       * @return {!Promise<!Node>}
       */
      setRoutes(routes, skipRender = false) {
        this.__previousContext = undefined;
        this.__urlForName = undefined;
        super.setRoutes(routes);
        if (!skipRender) {
          this.__onNavigationEvent();
        }
        return this.ready;
      }

      /**
       * Asynchronously resolves the given pathname and renders the resolved route
       * component into the router outlet. If no router outlet is set at the time of
       * calling this method, or at the time when the route resolution is completed,
       * a `TypeError` is thrown.
       *
       * Returns a promise that is fulfilled with the router outlet DOM Node after
       * the route component is created and inserted into the router outlet, or
       * rejected if no route matches the given path.
       *
       * If another render pass is started before the previous one is completed, the
       * result of the previous render pass is ignored.
       *
       * @param {!string|!{pathname: !string, search: ?string, hash: ?string}} pathnameOrContext
       *    the pathname to render or a context object with a `pathname` property,
       *    optional `search` and `hash` properties, and other properties
       *    to pass to the resolver.
       * @param {boolean=} shouldUpdateHistory
       *    update browser history with the rendered location
       * @return {!Promise<!Node>}
       */
      render(pathnameOrContext, shouldUpdateHistory) {
        const renderId = ++this.__lastStartedRenderId;
        const context = Object.assign(
          {
            search: '',
            hash: ''
          },
          isString(pathnameOrContext)
            ? {pathname: pathnameOrContext}
            : pathnameOrContext,
          {
            __renderId: renderId
          }
        );

        // Find the first route that resolves to a non-empty result
        this.ready = this.resolve(context)

          // Process the result of this.resolve() and handle all special commands:
          // (redirect / prevent / component). If the result is a 'component',
          // then go deeper and build the entire chain of nested components matching
          // the pathname. Also call all 'on before' callbacks along the way.
          .then(context => this.__fullyResolveChain(context))

          .then(context => {
            if (this.__isLatestRender(context)) {
              const previousContext = this.__previousContext;

              // Check if the render was prevented and make an early return in that case
              if (context === previousContext) {
                // Replace the history with the previous context
                // to make sure the URL stays the same.
                this.__updateBrowserHistory(previousContext, true);
                return this.location;
              }

              this.location = createLocation(context);

              if (shouldUpdateHistory) {
                // Replace only if first render redirects, so that we don’t leave
                // the redirecting record in the history
                this.__updateBrowserHistory(context, renderId === 1);
              }

              fireRouterEvent('location-changed', {router: this, location: this.location});

              // Skip detaching/re-attaching there are no render changes
              if (context.__skipAttach) {
                this.__copyUnchangedElements(context, previousContext);
                this.__previousContext = context;
                return this.location;
              }

              this.__addAppearingContent(context, previousContext);
              const animationDone = this.__animateIfNeeded(context);

              this.__runOnAfterEnterCallbacks(context);
              this.__runOnAfterLeaveCallbacks(context, previousContext);

              return animationDone.then(() => {
                if (this.__isLatestRender(context)) {
                  // If there is another render pass started after this one,
                  // the 'disappearing content' would be removed when the other
                  // render pass calls `this.__addAppearingContent()`
                  this.__removeDisappearingContent();

                  this.__previousContext = context;
                  return this.location;
                }
              });
            }
          })
          .catch(error => {
            if (renderId === this.__lastStartedRenderId) {
              if (shouldUpdateHistory) {
                this.__updateBrowserHistory(context);
              }
              removeDomNodes(this.__outlet && this.__outlet.children);
              this.location = createLocation(Object.assign(context, {resolver: this}));
              fireRouterEvent('error', Object.assign({router: this, error}, context));
              throw error;
            }
          });
        return this.ready;
      }

      // `topOfTheChainContextBeforeRedirects` is a context coming from Resolver.resolve().
      // It would contain a 'redirect' route or the first 'component' route that
      // matched the pathname. There might be more child 'component' routes to be
      // resolved and added into the chain. This method would find and add them.
      // `contextBeforeRedirects` is the context containing such a child component
      // route. It's only necessary when this method is called recursively (otherwise
      // it's the same as the 'top of the chain' context).
      //
      // Apart from building the chain of child components, this method would also
      // handle 'redirect' routes, call 'onBefore' callbacks and handle 'prevent'
      // and 'redirect' callback results.
      __fullyResolveChain(topOfTheChainContextBeforeRedirects,
        contextBeforeRedirects = topOfTheChainContextBeforeRedirects) {
        return this.__findComponentContextAfterAllRedirects(contextBeforeRedirects)
          // `contextAfterRedirects` is always a context with an `HTMLElement` result
          // In other cases the promise gets rejected and .then() is not called
          .then(contextAfterRedirects => {
            const redirectsHappened = contextAfterRedirects !== contextBeforeRedirects;
            const topOfTheChainContextAfterRedirects =
              redirectsHappened ? contextAfterRedirects : topOfTheChainContextBeforeRedirects;

            const matchedPath = getPathnameForRouter(
              getMatchedPath(contextAfterRedirects.chain),
              contextAfterRedirects.resolver
            );
            const isFound = (matchedPath === contextAfterRedirects.pathname);

            // Recursive method to try matching more child and sibling routes
            const findNextContextIfAny = (context, parent = context.route, prevResult) => {
              return context.next(undefined, parent, prevResult).then(nextContext => {
                if (nextContext === null || nextContext === notFoundResult) {
                  // Next context is not found in children, ...
                  if (isFound) {
                    // ...but original context is already fully matching - use it
                    return context;
                  } else if (parent.parent !== null) {
                    // ...and there is no full match yet - step up to check siblings
                    return findNextContextIfAny(context, parent.parent, nextContext);
                  } else {
                    return nextContext;
                  }
                }

                return nextContext;
              });
            };

            return findNextContextIfAny(contextAfterRedirects).then(nextContext => {
              if (nextContext === null || nextContext === notFoundResult) {
                throw getNotFoundError(topOfTheChainContextAfterRedirects);
              }

              return nextContext
              && nextContext !== notFoundResult
              && nextContext !== contextAfterRedirects
                ? this.__fullyResolveChain(topOfTheChainContextAfterRedirects, nextContext)
                : this.__amendWithOnBeforeCallbacks(contextAfterRedirects);
            });
          });
      }

      __findComponentContextAfterAllRedirects(context) {
        const result = context.result;
        if (result instanceof HTMLElement) {
          renderElement(context, result);
          return Promise.resolve(context);
        } else if (result.redirect) {
          return this.__redirect(result.redirect, context.__redirectCount, context.__renderId)
            .then(context => this.__findComponentContextAfterAllRedirects(context));
        } else if (result instanceof Error) {
          return Promise.reject(result);
        } else {
          return Promise.reject(
            new Error(
              log(
                `Invalid route resolution result for path "${context.pathname}". ` +
                `Expected redirect object or HTML element, but got: "${logValue(result)}". ` +
                `Double check the action return value for the route.`
              )
            ));
        }
      }

      __amendWithOnBeforeCallbacks(contextWithFullChain) {
        return this.__runOnBeforeCallbacks(contextWithFullChain).then(amendedContext => {
          if (amendedContext === this.__previousContext || amendedContext === contextWithFullChain) {
            return amendedContext;
          }
          return this.__fullyResolveChain(amendedContext);
        });
      }

      __runOnBeforeCallbacks(newContext) {
        const previousContext = this.__previousContext || {};
        const previousChain = previousContext.chain || [];
        const newChain = newContext.chain;

        let callbacks = Promise.resolve();
        const prevent = () => ({cancel: true});
        const redirect = (pathname) => createRedirect(newContext, pathname);

        newContext.__divergedChainIndex = 0;
        newContext.__skipAttach = false;
        if (previousChain.length) {
          for (let i = 0; i < Math.min(previousChain.length, newChain.length); i = ++newContext.__divergedChainIndex) {
            if (previousChain[i].route !== newChain[i].route
              || previousChain[i].path !== newChain[i].path && previousChain[i].element !== newChain[i].element
              || !this.__isReusableElement(previousChain[i].element, newChain[i].element)) {
              break;
            }
          }

          // Skip re-attaching and notifications if element and chain do not change
          newContext.__skipAttach =
            // Same route chain
            newChain.length === previousChain.length && newContext.__divergedChainIndex == newChain.length &&
            // Same element
            this.__isReusableElement(newContext.result, previousContext.result);

          if (newContext.__skipAttach) {
            // execute onBeforeLeave for changed segment element when skipping attach
            for (let i = newChain.length - 1; i >= 0; i--) {
              callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, {prevent}, previousChain[i]);
            }
            // execute onBeforeEnter for changed segment element when skipping attach
            for (let i = 0; i < newChain.length; i++) {
              callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, {prevent, redirect}, newChain[i]);
              previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
            }

          } else {
            // execute onBeforeLeave when NOT skipping attach
            for (let i = previousChain.length - 1; i >= newContext.__divergedChainIndex; i--) {
              callbacks = this.__runOnBeforeLeaveCallbacks(callbacks, newContext, {prevent}, previousChain[i]);
            }
          }
        }
        // execute onBeforeEnter when NOT skipping attach
        if (!newContext.__skipAttach) {
          for (let i = 0; i < newChain.length; i++) {
            if (i < newContext.__divergedChainIndex) {
              if (i < previousChain.length && previousChain[i].element) {
                previousChain[i].element.location = createLocation(newContext, previousChain[i].route);
              }
            } else {
              callbacks = this.__runOnBeforeEnterCallbacks(callbacks, newContext, {prevent, redirect}, newChain[i]);
              if (newChain[i].element) {
                newChain[i].element.location = createLocation(newContext, newChain[i].route);
              }
            }
          }
        }
        return callbacks.then(amendmentResult => {
          if (amendmentResult) {
            if (amendmentResult.cancel) {
              this.__previousContext.__renderId = newContext.__renderId;
              return this.__previousContext;
            }
            if (amendmentResult.redirect) {
              return this.__redirect(amendmentResult.redirect, newContext.__redirectCount, newContext.__renderId);
            }
          }
          return newContext;
        });
      }

      __runOnBeforeLeaveCallbacks(callbacks, newContext, commands, chainElement) {
        const location = createLocation(newContext);
        return callbacks.then(result => {
          if (this.__isLatestRender(newContext)) {
            const afterLeaveFunction = amend('onBeforeLeave', [location, commands, this], chainElement.element);
            return afterLeaveFunction(result);
          }
        }).then(result => {
          if (!(result || {}).redirect) {
            return result;
          }
        });
      }

      __runOnBeforeEnterCallbacks(callbacks, newContext, commands, chainElement) {
        const location = createLocation(newContext, chainElement.route);
        return callbacks.then(result => {
          if (this.__isLatestRender(newContext)) {
            const beforeEnterFunction = amend('onBeforeEnter', [location, commands, this], chainElement.element);
            return beforeEnterFunction(result);
          }
        });
      }

      __isReusableElement(element, otherElement) {
        if (element && otherElement) {
          return this.__createdByRouter.get(element) && this.__createdByRouter.get(otherElement)
            ? element.localName === otherElement.localName
            : element === otherElement;
        }
        return false;
      }

      __isLatestRender(context) {
        return context.__renderId === this.__lastStartedRenderId;
      }

      __redirect(redirectData, counter, renderId) {
        if (counter > MAX_REDIRECT_COUNT) {
          throw new Error(log(`Too many redirects when rendering ${redirectData.from}`));
        }

        return this.resolve({
          pathname: this.urlForPath(
            redirectData.pathname,
            redirectData.params
          ),
          redirectFrom: redirectData.from,
          __redirectCount: (counter || 0) + 1,
          __renderId: renderId
        });
      }

      __ensureOutlet(outlet = this.__outlet) {
        if (!(outlet instanceof Node)) {
          throw new TypeError(log(`Expected router outlet to be a valid DOM Node (but got ${outlet})`));
        }
      }

      __updateBrowserHistory({pathname, search = '', hash = ''}, replace) {
        if (window.location.pathname !== pathname
            || window.location.search !== search
            || window.location.hash !== hash
        ) {
          const changeState = replace ? 'replaceState' : 'pushState';
          window.history[changeState](null, document.title, pathname + search + hash);
          window.dispatchEvent(new PopStateEvent('popstate', {state: 'vaadin-router-ignore'}));
        }
      }

      __copyUnchangedElements(context, previousContext) {
        // Find the deepest common parent between the last and the new component
        // chains. Update references for the unchanged elements in the new chain
        let deepestCommonParent = this.__outlet;
        for (let i = 0; i < context.__divergedChainIndex; i++) {
          const unchangedElement = previousContext && previousContext.chain[i].element;
          if (unchangedElement) {
            if (unchangedElement.parentNode === deepestCommonParent) {
              context.chain[i].element = unchangedElement;
              deepestCommonParent = unchangedElement;
            } else {
              break;
            }
          }
        }
        return deepestCommonParent;
      }

      __addAppearingContent(context, previousContext) {
        this.__ensureOutlet();

        // If the previous 'entering' animation has not completed yet,
        // stop it and remove that content from the DOM before adding new one.
        this.__removeAppearingContent();

        // Copy reusable elements from the previousContext to current
        const deepestCommonParent = this.__copyUnchangedElements(context, previousContext);

        // Keep two lists of DOM elements:
        //  - those that should be removed once the transition animation is over
        //  - and those that should remain
        this.__appearingContent = [];
        this.__disappearingContent = Array
          .from(deepestCommonParent.children)
          .filter(
            // Only remove layout content that was added by router
            e => this.__addedByRouter.get(e) &&
            // Do not remove the result element to avoid flickering
            e !== context.result);

        // Add new elements (starting after the deepest common parent) to the DOM.
        // That way only the components that are actually different between the two
        // locations are added to the DOM (and those that are common remain in the
        // DOM without first removing and then adding them again).
        let parentElement = deepestCommonParent;
        for (let i = context.__divergedChainIndex; i < context.chain.length; i++) {
          const elementToAdd = context.chain[i].element;
          if (elementToAdd) {
            parentElement.appendChild(elementToAdd);
            this.__addedByRouter.set(elementToAdd, true);
            if (parentElement === deepestCommonParent) {
              this.__appearingContent.push(elementToAdd);
            }
            parentElement = elementToAdd;
          }
        }
      }

      __removeDisappearingContent() {
        if (this.__disappearingContent) {
          removeDomNodes(this.__disappearingContent);
        }
        this.__disappearingContent = null;
        this.__appearingContent = null;
      }

      __removeAppearingContent() {
        if (this.__disappearingContent && this.__appearingContent) {
          removeDomNodes(this.__appearingContent);
          this.__disappearingContent = null;
          this.__appearingContent = null;
        }
      }

      __runOnAfterLeaveCallbacks(currentContext, targetContext) {
        if (!targetContext) {
          return;
        }

        // REVERSE iteration: from Z to A
        for (let i = targetContext.chain.length - 1; i >= currentContext.__divergedChainIndex; i--) {
          if (!this.__isLatestRender(currentContext)) {
            break;
          }
          const currentComponent = targetContext.chain[i].element;
          if (!currentComponent) {
            continue;
          }
          try {
            const location = createLocation(currentContext);
            runCallbackIfPossible(
              currentComponent.onAfterLeave,
              [location, {}, targetContext.resolver],
              currentComponent);
          } finally {
            if (this.__disappearingContent.indexOf(currentComponent) > -1) {
              removeDomNodes(currentComponent.children);
            }
          }
        }
      }

      __runOnAfterEnterCallbacks(currentContext) {
        // forward iteration: from A to Z
        for (let i = currentContext.__divergedChainIndex; i < currentContext.chain.length; i++) {
          if (!this.__isLatestRender(currentContext)) {
            break;
          }
          const currentComponent = currentContext.chain[i].element || {};
          const location = createLocation(currentContext, currentContext.chain[i].route);
          runCallbackIfPossible(
            currentComponent.onAfterEnter,
            [location, {}, currentContext.resolver],
            currentComponent);
        }
      }

      __animateIfNeeded(context) {
        const from = (this.__disappearingContent || [])[0];
        const to = (this.__appearingContent || [])[0];
        const promises = [];

        const chain = context.chain;
        let config;
        for (let i = chain.length; i > 0; i--) {
          if (chain[i - 1].route.animate) {
            config = chain[i - 1].route.animate;
            break;
          }
        }

        if (from && to && config) {
          const leave = isObject(config) && config.leave || 'leaving';
          const enter = isObject(config) && config.enter || 'entering';
          promises.push(animate(from, leave));
          promises.push(animate(to, enter));
        }

        return Promise.all(promises).then(() => context);
      }

      /**
       * Subscribes this instance to navigation events on the `window`.
       *
       * NOTE: beware of resource leaks. For as long as a router instance is
       * subscribed to navigation events, it won't be garbage collected.
       */
      subscribe() {
        window.addEventListener('vaadin-router-go', this.__navigationEventHandler);
      }

      /**
       * Removes the subscription to navigation events created in the `subscribe()`
       * method.
       */
      unsubscribe() {
        window.removeEventListener('vaadin-router-go', this.__navigationEventHandler);
      }

      __onNavigationEvent(event) {
        const {pathname, search, hash} = event ? event.detail : window.location;
        if (isString(this.__normalizePathname(pathname))) {
          if (event && event.preventDefault) {
            event.preventDefault();
          }
          this.render({pathname, search, hash}, true);
        }
      }

      /**
       * Configures what triggers Router navigation events:
       *  - `POPSTATE`: popstate events on the current `window`
       *  - `CLICK`: click events on `<a>` links leading to the current page
       *
       * This method is invoked with the pre-configured values when creating a new Router instance.
       * By default, both `POPSTATE` and `CLICK` are enabled. This setup is expected to cover most of the use cases.
       *
       * See the `router-config.js` for the default navigation triggers config. Based on it, you can
       * create the own one and only import the triggers you need, instead of pulling in all the code,
       * e.g. if you want to handle `click` differently.
       *
       * See also **Navigation Triggers** section in [Live Examples](#/classes/Router/demos/demo/index.html).
       *
       * @param {...NavigationTrigger} triggers
       */
      static setTriggers(...triggers) {
        setNavigationTriggers(triggers);
      }

      /**
       * Generates a URL for the route with the given name, optionally performing
       * substitution of parameters.
       *
       * The route is searched in all the Router instances subscribed to
       * navigation events.
       *
       * **Note:** For child route names, only array children are considered.
       * It is not possible to generate URLs using a name for routes set with
       * a children function.
       *
       * @function urlForName
       * @param {!string} name the route name or the route’s `component` name.
       * @param {Params=} params Optional object with route path parameters.
       * Named parameters are passed by name (`params[name] = value`), unnamed
       * parameters are passed by index (`params[index] = value`).
       *
       * @return {string}
       */
      urlForName(name, params) {
        if (!this.__urlForName) {
          this.__urlForName = generateUrls(this);
        }
        return getPathnameForRouter(
          this.__urlForName(name, params),
          this
        );
      }

      /**
       * Generates a URL for the given route path, optionally performing
       * substitution of parameters.
       *
       * @param {!string} path string route path declared in [express.js syntax](https://expressjs.com/en/guide/routing.html#route-paths").
       * @param {Params=} params Optional object with route path parameters.
       * Named parameters are passed by name (`params[name] = value`), unnamed
       * parameters are passed by index (`params[index] = value`).
       *
       * @return {string}
       */
      urlForPath(path, params) {
        return getPathnameForRouter(
          Router.pathToRegexp.compile(path)(params),
          this
        );
      }

      /**
       * Triggers navigation to a new path. Returns a boolean without waiting until
       * the navigation is complete. Returns `true` if at least one `Router`
       * has handled the navigation (was subscribed and had `baseUrl` matching
       * the `path` argument), otherwise returns `false`.
       *
       * @param {!string|!{pathname: !string, search: (string|undefined), hash: (string|undefined)}} path
       *   a new in-app path string, or an URL-like object with `pathname`
       *   string property, and optional `search` and `hash` string properties.
       * @return {boolean}
       */
      static go(path) {
        const {pathname, search, hash} = isString(path)
          ? this.__createUrl(path, 'http://a') // some base to omit origin
          : path;
        return fireRouterEvent('go', {pathname, search, hash});
      }
    }

    const DEV_MODE_CODE_REGEXP =
      /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;

    const FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;

    function isMinified() {
      function test() {
        /** vaadin-dev-mode:start
        return false;
        vaadin-dev-mode:end **/
        return true;
      }
      return uncommentAndRun(test);
    }

    function isDevelopmentMode() {
      try {
        if (isForcedDevelopmentMode()) {
          return true;
        }

        if (!isLocalhost()) {
          return false;
        }

        if (FlowClients) {
          return !isFlowProductionMode();
        }

        return !isMinified();
      } catch (e) {
        // Some error in this code, assume production so no further actions will be taken
        return false;
      }
    }

    function isForcedDevelopmentMode() {
      return localStorage.getItem("vaadin.developmentmode.force");
    }

    function isLocalhost() {
      return (["localhost","127.0.0.1"].indexOf(window.location.hostname) >= 0);
    }

    function isFlowProductionMode() {
      if (FlowClients) {
        const productionModeApps = Object.keys(FlowClients)
          .map(key => FlowClients[key])
          .filter(client => client.productionMode);
        if (productionModeApps.length > 0) {
          return true;
        }
      }
      return false;
    }

    function uncommentAndRun(callback, args) {
      if (typeof callback !== 'function') {
        return;
      }

      const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());
      if (match) {
        try {
          // requires CSP: script-src 'unsafe-eval'
          callback = new Function(match[1]);
        } catch (e) {
          // eat the exception
          console.log('vaadin-development-mode-detector: uncommentAndRun() failed', e);
        }
      }

      return callback(args);
    }

    // A guard against polymer-modulizer removing the window.Vaadin
    // initialization above.
    window['Vaadin'] = window['Vaadin'] || {};

    /**
     * Inspects the source code of the given `callback` function for
     * specially-marked _commented_ code. If such commented code is found in the
     * callback source, uncomments and runs that code instead of the callback
     * itself. Otherwise runs the callback as is.
     *
     * The optional arguments are passed into the callback / uncommented code,
     * the result is returned.
     *
     * See the `isMinified()` function source code in this file for an example.
     *
     */
    const runIfDevelopmentMode = function(callback, args) {
      if (window.Vaadin.developmentMode) {
        return uncommentAndRun(callback, args);
      }
    };

    if (window.Vaadin.developmentMode === undefined) {
      window.Vaadin.developmentMode = isDevelopmentMode();
    }

    /* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */

    function maybeGatherAndSendStats() {
      /** vaadin-dev-mode:start
      (function () {
    'use strict';

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    var classCallCheck = function (instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };

    var createClass = function () {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    var getPolymerVersion = function getPolymerVersion() {
      return window.Polymer && window.Polymer.version;
    };

    var StatisticsGatherer = function () {
      function StatisticsGatherer(logger) {
        classCallCheck(this, StatisticsGatherer);

        this.now = new Date().getTime();
        this.logger = logger;
      }

      createClass(StatisticsGatherer, [{
        key: 'frameworkVersionDetectors',
        value: function frameworkVersionDetectors() {
          return {
            'Flow': function Flow() {
              if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
                var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
                  return window.Vaadin.Flow.clients[key];
                }).filter(function (client) {
                  return client.getVersionInfo;
                }).map(function (client) {
                  return client.getVersionInfo().flow;
                });
                if (flowVersions.length > 0) {
                  return flowVersions[0];
                }
              }
            },
            'Vaadin Framework': function VaadinFramework() {
              if (window.vaadin && window.vaadin.clients) {
                var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
                  return client.getVersionInfo;
                }).map(function (client) {
                  return client.getVersionInfo().vaadinVersion;
                });
                if (frameworkVersions.length > 0) {
                  return frameworkVersions[0];
                }
              }
            },
            'AngularJs': function AngularJs() {
              if (window.angular && window.angular.version && window.angular.version) {
                return window.angular.version.full;
              }
            },
            'Angular': function Angular() {
              if (window.ng) {
                var tags = document.querySelectorAll("[ng-version]");
                if (tags.length > 0) {
                  return tags[0].getAttribute("ng-version");
                }
                return "Unknown";
              }
            },
            'Backbone.js': function BackboneJs() {
              if (window.Backbone) {
                return window.Backbone.VERSION;
              }
            },
            'React': function React() {
              var reactSelector = '[data-reactroot], [data-reactid]';
              if (!!document.querySelector(reactSelector)) {
                // React does not publish the version by default
                return "unknown";
              }
            },
            'Ember': function Ember() {
              if (window.Em && window.Em.VERSION) {
                return window.Em.VERSION;
              } else if (window.Ember && window.Ember.VERSION) {
                return window.Ember.VERSION;
              }
            },
            'jQuery': function (_jQuery) {
              function jQuery() {
                return _jQuery.apply(this, arguments);
              }

              jQuery.toString = function () {
                return _jQuery.toString();
              };

              return jQuery;
            }(function () {
              if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
                return jQuery.prototype.jquery;
              }
            }),
            'Polymer': function Polymer() {
              var version = getPolymerVersion();
              if (version) {
                return version;
              }
            },
            'LitElement': function LitElement() {
              var version = window.litElementVersions && window.litElementVersions[0];
              if (version) {
                return version;
              }
            },
            'LitHtml': function LitHtml() {
              var version = window.litHtmlVersions && window.litHtmlVersions[0];
              if (version) {
                return version;
              }
            },
            'Vue.js': function VueJs() {
              if (window.Vue) {
                return window.Vue.version;
              }
            }
          };
        }
      }, {
        key: 'getUsedVaadinElements',
        value: function getUsedVaadinElements(elements) {
          var version = getPolymerVersion();
          var elementClasses = void 0;
          // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
          // Check all locations calling the method getEntries() in
          // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
          // Currently it is only used by BootstrapHandler.
          if (version && version.indexOf('2') === 0) {
            // Polymer 2: components classes are stored in window.Vaadin
            elementClasses = Object.keys(window.Vaadin).map(function (c) {
              return window.Vaadin[c];
            }).filter(function (c) {
              return c.is;
            });
          } else {
            // Polymer 3: components classes are stored in window.Vaadin.registrations
            elementClasses = window.Vaadin.registrations || [];
          }
          elementClasses.forEach(function (klass) {
            var version = klass.version ? klass.version : "0.0.0";
            elements[klass.is] = { version: version };
          });
        }
      }, {
        key: 'getUsedVaadinThemes',
        value: function getUsedVaadinThemes(themes) {
          ['Lumo', 'Material'].forEach(function (themeName) {
            var theme;
            var version = getPolymerVersion();
            if (version && version.indexOf('2') === 0) {
              // Polymer 2: themes are stored in window.Vaadin
              theme = window.Vaadin[themeName];
            } else {
              // Polymer 3: themes are stored in custom element registry
              theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
            }
            if (theme && theme.version) {
              themes[themeName] = { version: theme.version };
            }
          });
        }
      }, {
        key: 'getFrameworks',
        value: function getFrameworks(frameworks) {
          var detectors = this.frameworkVersionDetectors();
          Object.keys(detectors).forEach(function (framework) {
            var detector = detectors[framework];
            try {
              var version = detector();
              if (version) {
                frameworks[framework] = { version: version };
              }
            } catch (e) {}
          });
        }
      }, {
        key: 'gather',
        value: function gather(storage) {
          var storedStats = storage.read();
          var gatheredStats = {};
          var types = ["elements", "frameworks", "themes"];

          types.forEach(function (type) {
            gatheredStats[type] = {};
            if (!storedStats[type]) {
              storedStats[type] = {};
            }
          });

          var previousStats = JSON.stringify(storedStats);

          this.getUsedVaadinElements(gatheredStats.elements);
          this.getFrameworks(gatheredStats.frameworks);
          this.getUsedVaadinThemes(gatheredStats.themes);

          var now = this.now;
          types.forEach(function (type) {
            var keys = Object.keys(gatheredStats[type]);
            keys.forEach(function (key) {
              if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
                storedStats[type][key] = { firstUsed: now };
              }
              // Discards any previously logged version number
              storedStats[type][key].version = gatheredStats[type][key].version;
              storedStats[type][key].lastUsed = now;
            });
          });

          var newStats = JSON.stringify(storedStats);
          storage.write(newStats);
          if (newStats != previousStats && Object.keys(storedStats).length > 0) {
            this.logger.debug("New stats: " + newStats);
          }
        }
      }]);
      return StatisticsGatherer;
    }();

    var StatisticsStorage = function () {
      function StatisticsStorage(key) {
        classCallCheck(this, StatisticsStorage);

        this.key = key;
      }

      createClass(StatisticsStorage, [{
        key: 'read',
        value: function read() {
          var localStorageStatsString = localStorage.getItem(this.key);
          try {
            return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
          } catch (e) {
            return {};
          }
        }
      }, {
        key: 'write',
        value: function write(data) {
          localStorage.setItem(this.key, data);
        }
      }, {
        key: 'clear',
        value: function clear() {
          localStorage.removeItem(this.key);
        }
      }, {
        key: 'isEmpty',
        value: function isEmpty() {
          var storedStats = this.read();
          var empty = true;
          Object.keys(storedStats).forEach(function (key) {
            if (Object.keys(storedStats[key]).length > 0) {
              empty = false;
            }
          });

          return empty;
        }
      }]);
      return StatisticsStorage;
    }();

    var StatisticsSender = function () {
      function StatisticsSender(url, logger) {
        classCallCheck(this, StatisticsSender);

        this.url = url;
        this.logger = logger;
      }

      createClass(StatisticsSender, [{
        key: 'send',
        value: function send(data, errorHandler) {
          var logger = this.logger;

          if (navigator.onLine === false) {
            logger.debug("Offline, can't send");
            errorHandler();
            return;
          }
          logger.debug("Sending data to " + this.url);

          var req = new XMLHttpRequest();
          req.withCredentials = true;
          req.addEventListener("load", function () {
            // Stats sent, nothing more to do
            logger.debug("Response: " + req.responseText);
          });
          req.addEventListener("error", function () {
            logger.debug("Send failed");
            errorHandler();
          });
          req.addEventListener("abort", function () {
            logger.debug("Send aborted");
            errorHandler();
          });
          req.open("POST", this.url);
          req.setRequestHeader("Content-Type", "application/json");
          req.send(data);
        }
      }]);
      return StatisticsSender;
    }();

    var StatisticsLogger = function () {
      function StatisticsLogger(id) {
        classCallCheck(this, StatisticsLogger);

        this.id = id;
      }

      createClass(StatisticsLogger, [{
        key: '_isDebug',
        value: function _isDebug() {
          return localStorage.getItem("vaadin." + this.id + ".debug");
        }
      }, {
        key: 'debug',
        value: function debug(msg) {
          if (this._isDebug()) {
            console.info(this.id + ": " + msg);
          }
        }
      }]);
      return StatisticsLogger;
    }();

    var UsageStatistics = function () {
      function UsageStatistics() {
        classCallCheck(this, UsageStatistics);

        this.now = new Date();
        this.timeNow = this.now.getTime();
        this.gatherDelay = 10; // Delay between loading this file and gathering stats
        this.initialDelay = 24 * 60 * 60;

        this.logger = new StatisticsLogger("statistics");
        this.storage = new StatisticsStorage("vaadin.statistics.basket");
        this.gatherer = new StatisticsGatherer(this.logger);
        this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
      }

      createClass(UsageStatistics, [{
        key: 'maybeGatherAndSend',
        value: function maybeGatherAndSend() {
          var _this = this;

          if (localStorage.getItem(UsageStatistics.optOutKey)) {
            return;
          }
          this.gatherer.gather(this.storage);
          setTimeout(function () {
            _this.maybeSend();
          }, this.gatherDelay * 1000);
        }
      }, {
        key: 'lottery',
        value: function lottery() {
          return true;
        }
      }, {
        key: 'currentMonth',
        value: function currentMonth() {
          return this.now.getYear() * 12 + this.now.getMonth();
        }
      }, {
        key: 'maybeSend',
        value: function maybeSend() {
          var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
          var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));

          if (!firstUse) {
            // Use a grace period to avoid interfering with tests, incognito mode etc
            firstUse = this.timeNow;
            localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
          }

          if (this.timeNow < firstUse + this.initialDelay * 1000) {
            this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
            return;
          }
          if (this.currentMonth() <= monthProcessed) {
            this.logger.debug("This month has already been processed");
            return;
          }
          localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
          // Use random sampling
          if (this.lottery()) {
            this.logger.debug("Congratulations, we have a winner!");
          } else {
            this.logger.debug("Sorry, no stats from you this time");
            return;
          }

          this.send();
        }
      }, {
        key: 'send',
        value: function send() {
          // Ensure we have the latest data
          this.gatherer.gather(this.storage);

          // Read, send and clean up
          var data = this.storage.read();
          data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
          data["usageStatisticsVersion"] = UsageStatistics.version;
          var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
          var self = this;
          this.sender.send(info + JSON.stringify(data), function () {
            // Revert the 'month processed' flag
            localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
          });
        }
      }], [{
        key: 'version',
        get: function get$1() {
          return '2.1.0';
        }
      }, {
        key: 'firstUseKey',
        get: function get$1() {
          return 'vaadin.statistics.firstuse';
        }
      }, {
        key: 'monthProcessedKey',
        get: function get$1() {
          return 'vaadin.statistics.monthProcessed';
        }
      }, {
        key: 'optOutKey',
        get: function get$1() {
          return 'vaadin.statistics.optout';
        }
      }]);
      return UsageStatistics;
    }();

    try {
      window.Vaadin = window.Vaadin || {};
      window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
      window.Vaadin.usageStatsChecker.maybeGatherAndSend();
    } catch (e) {
      // Intentionally ignored as this is not a problem in the app being developed
    }

    }());

      vaadin-dev-mode:end **/
    }

    const usageStatistics = function() {
      if (typeof runIfDevelopmentMode === 'function') {
        return runIfDevelopmentMode(maybeGatherAndSendStats);
      }
    };

    window.Vaadin = window.Vaadin || {};
    window.Vaadin.registrations = window.Vaadin.registrations || [];

    window.Vaadin.registrations.push({
      is: '@vaadin/router',
      version: '1.7.4',
    });

    usageStatistics();

    Router.NavigationTrigger = {POPSTATE, CLICK};

    registerIconLibrary('ionicons', {
      resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
      mutator: svg => {
        svg.setAttribute('fill', 'currentColor');
        svg.setAttribute('stroke', 'currentColor');
        [...svg.querySelectorAll('.ionicon-fill-none')].forEach(el => el.setAttribute('fill', 'none'));
        [...svg.querySelectorAll('.ionicon-stroke-width')].forEach(el => el.setAttribute('stroke-width', '32px'));
      }
    });

    const router = new Router(document.querySelector('main'));
    router.setRoutes([
      {
        path: '/',
        component: 'home-view'
      },
      {
        path: '/about',
        component: 'about-view'
      }
    ]);

    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function() {
        navigator.serviceWorker
          .register(document.baseURI + "serviceWorker.js")
          .then(res => console.log("service worker registered"))
          .catch(err => console.log("service worker not registered", err));
      });
    }

}());
//# sourceMappingURL=bundle.js.map
