(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,B=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),K=new WeakMap;let ne=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(B&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=K.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&K.set(t,e))}return e}toString(){return this.cssText}};const de=n=>new ne(typeof n=="string"?n:n+"",void 0,W),he=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new ne(t,n,W)},pe=(n,e)=>{if(B)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=N.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}},F=B?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return de(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ue,defineProperty:fe,getOwnPropertyDescriptor:me,getOwnPropertyNames:$e,getOwnPropertySymbols:ge,getPrototypeOf:ve}=Object,$=globalThis,Z=$.trustedTypes,_e=Z?Z.emptyScript:"",z=$.reactiveElementPolyfillSupport,E=(n,e)=>n,H={toAttribute(n,e){switch(e){case Boolean:n=n?_e:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},V=(n,e)=>!ue(n,e),Q={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:V};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),$.litPropertyMetadata??($.litPropertyMetadata=new WeakMap);class y extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Q){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&fe(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=me(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const c=s==null?void 0:s.call(this);r.call(this,o),this.requestUpdate(e,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Q}static _$Ei(){if(this.hasOwnProperty(E("elementProperties")))return;const e=ve(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(E("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(E("properties"))){const t=this.properties,i=[...$e(t),...ge(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(F(s))}else e!==void 0&&t.push(F(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){var r;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:H).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var r;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),c=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:H;this._$Em=s,this[s]=c.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??V)(this[e],t))return;this.P(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(t)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EC(t,this[t]))),this._$EU()}updated(e){}firstUpdated(e){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[E("elementProperties")]=new Map,y[E("finalized")]=new Map,z==null||z({ReactiveElement:y}),($.reactiveElementVersions??($.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=globalThis,M=w.trustedTypes,G=M?M.createPolicy("lit-html",{createHTML:n=>n}):void 0,re="$lit$",m=`lit$${Math.random().toFixed(9).slice(2)}$`,oe="?"+m,ye=`<${oe}>`,_=document,P=()=>_.createComment(""),C=n=>n===null||typeof n!="object"&&typeof n!="function",J=Array.isArray,be=n=>J(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",L=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,Y=/>/g,g=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ee=/'/g,te=/"/g,ae=/^(?:script|style|textarea|title)$/i,Ae=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),j=Ae(1),b=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),se=new WeakMap,v=_.createTreeWalker(_,129);function ce(n,e){if(!J(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return G!==void 0?G.createHTML(e):e}const xe=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":e===3?"<math>":"",o=x;for(let c=0;c<t;c++){const a=n[c];let d,p,l=-1,u=0;for(;u<a.length&&(o.lastIndex=u,p=o.exec(a),p!==null);)u=o.lastIndex,o===x?p[1]==="!--"?o=X:p[1]!==void 0?o=Y:p[2]!==void 0?(ae.test(p[2])&&(s=RegExp("</"+p[2],"g")),o=g):p[3]!==void 0&&(o=g):o===g?p[0]===">"?(o=s??x,l=-1):p[1]===void 0?l=-2:(l=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?g:p[3]==='"'?te:ee):o===te||o===ee?o=g:o===X||o===Y?o=x:(o=g,s=void 0);const f=o===g&&n[c+1].startsWith("/>")?" ":"";r+=o===x?a+ye:l>=0?(i.push(d),a.slice(0,l)+re+a.slice(l)+m+f):a+m+(l===-2?c:f)}return[ce(n,r+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class O{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const c=e.length-1,a=this.parts,[d,p]=xe(e,t);if(this.el=O.createElement(d,i),v.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=v.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(re)){const u=p[o++],f=s.getAttribute(l).split(m),T=/([.?@])?(.*)/.exec(u);a.push({type:1,index:r,name:T[2],strings:f,ctor:T[1]==="."?we:T[1]==="?"?Se:T[1]==="@"?Pe:R}),s.removeAttribute(l)}else l.startsWith(m)&&(a.push({type:6,index:r}),s.removeAttribute(l));if(ae.test(s.tagName)){const l=s.textContent.split(m),u=l.length-1;if(u>0){s.textContent=M?M.emptyScript:"";for(let f=0;f<u;f++)s.append(l[f],P()),v.nextNode(),a.push({type:2,index:++r});s.append(l[u],P())}}}else if(s.nodeType===8)if(s.data===oe)a.push({type:2,index:r});else{let l=-1;for(;(l=s.data.indexOf(m,l+1))!==-1;)a.push({type:7,index:r}),l+=m.length-1}r++}}static createElement(e,t){const i=_.createElement("template");return i.innerHTML=e,i}}function A(n,e,t=n,i){var o,c;if(e===b)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const r=C(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=A(n,s._$AS(n,e.values),s,i)),e}class Ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??_).importNode(t,!0);v.currentNode=s;let r=v.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new k(r,r.nextSibling,this,e):a.type===1?d=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(d=new Ce(r,this,e)),this._$AV.push(d),a=i[++c]}o!==(a==null?void 0:a.index)&&(r=v.nextNode(),o++)}return v.currentNode=_,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class k{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),C(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==b&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):be(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&C(this._$AH)?this._$AA.nextSibling.data=e:this.T(_.createTextNode(e)),this._$AH=e}$(e){var r;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=O.createElement(ce(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(t);else{const o=new Ee(s,this),c=o.u(this.options);o.p(t),this.T(c),this._$AH=o}}_$AC(e){let t=se.get(e.strings);return t===void 0&&se.set(e.strings,t=new O(e)),t}k(e){J(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new k(this.O(P()),this.O(P()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=h}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=A(this,e,t,0),o=!C(e)||e!==this._$AH&&e!==b,o&&(this._$AH=e);else{const c=e;let a,d;for(e=r[0],a=0;a<r.length-1;a++)d=A(this,c[i+a],t,a),d===b&&(d=this._$AH[a]),o||(o=!C(d)||d!==this._$AH[a]),d===h?e=h:e!==h&&(e+=(d??"")+r[a+1]),this._$AH[a]=d}o&&!s&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class we extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}}class Se extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class Pe extends R{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??h)===b)return;const i=this._$AH,s=e===h&&i!==h||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==h&&(i===h||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ce{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}}const D=w.litHtmlPolyfillSupport;D==null||D(O,k),(w.litHtmlVersions??(w.litHtmlVersions=[])).push("3.2.1");const Oe=(n,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new k(e.insertBefore(P(),r),r,void 0,t??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let S=class extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return b}};var ie;S._$litElement$=!0,S.finalized=!0,(ie=globalThis.litElementHydrateSupport)==null||ie.call(globalThis,{LitElement:S});const I=globalThis.litElementPolyfillSupport;I==null||I({LitElement:S});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:V},Te=(n=ke,e,t)=>{const{kind:i,metadata:s}=t;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(t.name,n),i==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,n)},init(c){return c!==void 0&&this.P(o,void 0,n),c}}}if(i==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,n)}}throw Error("Unsupported decorator location: "+i)};function le(n){return(e,t)=>typeof t=="object"?Te(n,e,t):((i,s,r)=>{const o=s.hasOwnProperty(r);return s.constructor.createProperty(r,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,r):void 0})(n,e,t)}var Ne=Object.defineProperty,He=Object.getOwnPropertyDescriptor,q=(n,e,t,i)=>{for(var s=i>1?void 0:i?He(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(e,t,s):o(s))||s);return i&&s&&Ne(e,t,s),s};let U=class extends S{constructor(){super(...arguments),this.announcements=[{text:"Please verify your ID for Tax Information by 30th May",sender:"Adam Evanson"},{text:"R&D Expo is in 2 weeks!",sender:"Janine Bookk"},{text:"R&D Expo is in 2 weeks!",sender:"Janine Bookk"},{text:"Please verify your ID for Tax Information by 30th May",sender:"Adam Evanson"}],this.events=[{name:"Tim Cook",event:"Birthday",date:"Apr. 1st",color:"#b52950",icon:"🎂",image:"https://api.dicebear.com/9.x/avataaars/svg?seed=Aiden&radius=50&backgroundColor=b6e3f4,c0aede,ffdfbf"},{name:"Lucas Robinson",event:"New Joiner",date:"Apr. 1st",color:"#409163",icon:"👋",image:"https://api.dicebear.com/9.x/avataaars/svg?seed=Luis&radius=50&backgroundColor=b6e3f4,c0aede,ffdfbf"},{name:"Tim Cook",event:"Birthday",date:"Apr. 1st",color:"#b52950",icon:"🎂",image:"https://api.dicebear.com/9.x/avataaars/svg?seed=Aiden&radius=50&backgroundColor=b6e3f4,c0aede,ffdfbf"},{name:"Ava Davis",event:"Work Anniversary",date:"Apr. 1st",color:"#2f4b7f",icon:"🎉",image:"https://api.dicebear.com/9.x/avataaars/svg?seed=Nolan&radius=50&backgroundColor=b6e3f4,c0aede,ffdfbf"},{name:"Lucas Robinson",event:"New Joiner",date:"Apr. 1st",color:"#409163",icon:"👋",image:"https://api.dicebear.com/9.x/avataaars/svg?seed=Luis&radius=50&backgroundColor=b6e3f4,c0aede,ffdfbf"}]}render(){return j`
            <div class="hub">
                <!-- Announcements -->
                <div class="announcement-section">
                    <div class="section-title">📢 Announcements</div>
                    <div class="scrollable">
                        ${this.announcements.map(n=>j`
                                <div class="announcement-item">
                                    <div class="icon-container">
                                        <div class="announcement-icon">🗓️</div>
                                    </div>
                                    <div class="announcement-info">
                                        <div class="announcement-title"
                                            >${n.text} - Sent by
                                            ${n.sender}</span
                                        >
                                        <div>
                                          <a href="#" class="announcement-link">
                                            See More
                                          </a>
                                        </div>
                                    </div>
                                </div>
                            `)}
                    </div>
                </div>

                <!-- Events -->
                <div class="event-section">
                    <div class="section-title">🎉 Events</div>
                    <div class="scrollable">
                        ${this.events.map(n=>j`
                                <div class="event-item">
                                    <img
                                        src="${n.image}"
                                        alt="${n.name}"
                                        class="event-image"
                                    />
                                    <div class="event-info">
                                        <div class="event-details">
                                          <div class="event-name">${n.name}</div>
                                          <div class="event-badge-container">
                                              <div
                                                  class="event-badge"
                                                  style="background: ${n.color};"
                                                  >${n.event}</span>
                                              </div>
                                              <div class="event-date">
                                                  ${n.date}
                                              </div>
                                          </div>
                                        </div>
                                        <button class="button">
                                            ${n.icon}&nbsp;
                                            ${n.event==="New Joiner"?"Say Hello":"Wish"}
                                        </button>
                                  </div>
                            `)}
                    </div>
                </div>
            </div>
        `}};U.styles=he`
        :host {
            display: block;
            container-type: inline-size;
            container-name: hub-container;
            font-family: Arial, sans-serif;
        }

        .hub {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(max(300px, 0%), 1fr));
            gap: 16px;
        }

        .section-title {
            font-size: 12px;
            line-height: 1;
            text-align: left;
            color: #1a1b1d;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 6px;
        }

        .scrollable {
            flex-grow: 0;
            display: flex;
            flex-direction: column;
            gap: 8px;
            padding: 4px 8px;
            border-radius: 4px;
            max-height: 210px;
            overflow-y: auto;
        }

        .scrollable::-webkit-scrollbar {
            width: 0.25rem;
            height: 0.25rem;
            border-radius: 0.125rem;
        }

        .scrollable::-webkit-scrollbar-thumb {
            background: #8c8c8c;
            border-radius: 0.125rem;
        }

        .scrollable::-webkit-scrollbar-track {
            background: #f4f2f4;
        }

        /* Announcements */
        .announcement-section {
          background-color: #f9f9f9;
        }
          
        .announcement-item {
            flex-grow: 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 8px;
            padding: 8px;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .announcement-item:hover {
            background: #e8e8e8;
        }

        .icon-container {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .announcement-icon {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background: #d4eafa;
        }

        .announcement-info {
          display: flex;
          flex-direction: column;
          width: 80%;
        }

        .announcement-title {
            font-size: 12px;
            line-height: 1.5;
            color: #1a1b1d;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .announcement-link {
            font-size: 12px;
            color: #0173d1;
            text-decoration: none;
            line-height: 1;
        }

        .announcement-link:hover {
            text-decoration: underline;
        }

        /* Events */
        .event-item {
            flex-grow: 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: 8px;
            padding: 8px;
            border-radius: 4px;
            cursor: pointer;
            transition: background 0.3s;
        }

        .event-item:hover {
            background: #e8e8e8;
        }

        .event-image {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 10px;
        }

        .event-badge {
            font-size: 12px;
            padding: 4px 8px;
            border-radius: 12px;
            color: white;
            margin-right: 10px;
            white-space: nowrap;
        }

        .event-info {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex: 1;
        }

        .event-details {
            display: flex;
            flex-direction: column;
            gap: 6px;
        }

        .event-name {
            font-size: 12px;
            line-height: 1;
            color: #1a1b1d;
        }

        .event-badge-container {
            display: flex;
            align-items: center;
            gap: 4px;
        }

        .event-date {
            font-size: 12px;
            line-height: 1;
            color: #3e484d;
        }

        .button {
            background: none;
            border: 1px solid #ccc;
            padding: 6px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
        }

        .button:hover {
            background: #e1e1e1;
        }

        .event-section {
            container-type: inline-size;
            container-name: event-container;
            background-color: #f9f9f9;
        }

        /* Container Queries */
        @container hub-container (max-width: 650px) {
            .event-item {
                flex-direction: row;
                justify-content: space-between;
            }

            .button {
                font-size: 10px;
                padding: 4px 8px;
            }
        }

        @container hub-container (min-width: 651px) {
            .announcement-section {
                flex: 1;
                padding: 16px 8px 16px 16px;
                border-radius: 8px;
                
            }

            .event-section {
                flex: 1;
                padding: 16px 8px 16px 16px;
                border-radius: 8px;
            }
        }

        @container event-container (width <= 340px) {
            .event-badge-container {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    `;q([le({type:Array})],U.prototype,"announcements",2);q([le({type:Array})],U.prototype,"events",2);U=q([Ue("peoples-hub")],U);
