"use strict";(()=>{var ct=Object.create;var be=Object.defineProperty;var gt=Object.getOwnPropertyDescriptor;var xt=Object.getOwnPropertyNames;var At=Object.getPrototypeOf,yt=Object.prototype.hasOwnProperty;var G=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var bt=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of xt(t))!yt.call(e,s)&&s!==r&&be(e,s,{get:()=>t[s],enumerable:!(a=gt(t,s))||a.enumerable});return e};var he=(e,t,r)=>(r=e!=null?ct(At(e)):{},bt(t||!e||!e.__esModule?be(r,"default",{value:e,enumerable:!0}):r,e));var we=G((ko,ve)=>{"use strict";ve.exports=()=>{let e={};return e.promise=new Promise((t,r)=>{e.resolve=t,e.reject=r}),e}});var je=G((So,Te)=>{"use strict";var ht=we();function vt(e,t="maxAge"){let r,a,s,p=async()=>{if(r!==void 0)return;let x=async m=>{s=ht();let c=m[1][t]-Date.now();if(c<=0){e.delete(m[0]),s.resolve();return}return r=m[0],a=setTimeout(()=>{e.delete(m[0]),s&&s.resolve()},c),typeof a.unref=="function"&&a.unref(),s.promise};try{for(let m of e)await x(m)}catch{}r=void 0},g=()=>{r=void 0,a!==void 0&&(clearTimeout(a),a=void 0),s!==void 0&&(s.reject(void 0),s=void 0)},y=e.set.bind(e);return e.set=(x,m)=>{e.has(x)&&e.delete(x);let c=y(x,m);return r&&r===x&&g(),p(),c},p(),e}Te.exports=vt});var Se=G((Oo,ke)=>{"use strict";var wt=je(),me=class{constructor(t,r){if(this.maxAge=t,this[Symbol.toStringTag]="Map",this.data=new Map,wt(this.data),r)for(let[a,s]of r)this.set(a,s)}get size(){return this.data.size}clear(){this.data.clear()}delete(t){return this.data.delete(t)}has(t){return this.data.has(t)}get(t){let r=this.data.get(t);if(r)return r.data}set(t,r){return this.data.set(t,{maxAge:Date.now()+this.maxAge,data:r}),this}values(){return this.createIterator(t=>t[1].data)}keys(){return this.data.keys()}entries(){return this.createIterator(t=>[t[0],t[1].data])}forEach(t,r){for(let[a,s]of this.entries())t.apply(r,[s,a,this])}[Symbol.iterator](){return this.entries()}*createIterator(t){for(let r of this.data.entries())yield t(r)}};ke.exports=me});var Pe=G((de,Ce)=>{(function(e,t){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],t);else if(typeof de<"u")t(Ce);else{var r={exports:{}};t(r),e.browser=r.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:de,function(e){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let t="The message port closed before a response was received.",r=a=>{let s={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(s).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class p extends WeakMap{constructor(n,f=void 0){super(f),this.createItem=n}get(n){return this.has(n)||this.set(n,this.createItem(n)),super.get(n)}}let g=o=>o&&typeof o=="object"&&typeof o.then=="function",y=(o,n)=>(...f)=>{a.runtime.lastError?o.reject(new Error(a.runtime.lastError.message)):n.singleCallbackArg||f.length<=1&&n.singleCallbackArg!==!1?o.resolve(f[0]):o.resolve(f)},x=o=>o==1?"argument":"arguments",m=(o,n)=>function(l,...v){if(v.length<n.minArgs)throw new Error(`Expected at least ${n.minArgs} ${x(n.minArgs)} for ${o}(), got ${v.length}`);if(v.length>n.maxArgs)throw new Error(`Expected at most ${n.maxArgs} ${x(n.maxArgs)} for ${o}(), got ${v.length}`);return new Promise((O,P)=>{if(n.fallbackToNoCallback)try{l[o](...v,y({resolve:O,reject:P},n))}catch(i){console.warn(`${o} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,i),l[o](...v),n.fallbackToNoCallback=!1,n.noCallback=!0,O()}else n.noCallback?(l[o](...v),O()):l[o](...v,y({resolve:O,reject:P},n))})},c=(o,n,f)=>new Proxy(n,{apply(l,v,O){return f.call(v,o,...O)}}),A=Function.call.bind(Object.prototype.hasOwnProperty),b=(o,n={},f={})=>{let l=Object.create(null),v={has(P,i){return i in o||i in l},get(P,i,E){if(i in l)return l[i];if(!(i in o))return;let h=o[i];if(typeof h=="function")if(typeof n[i]=="function")h=c(o,o[i],n[i]);else if(A(f,i)){let F=m(i,f[i]);h=c(o,o[i],F)}else h=h.bind(o);else if(typeof h=="object"&&h!==null&&(A(n,i)||A(f,i)))h=b(h,n[i],f[i]);else if(A(f,"*"))h=b(h,n[i],f["*"]);else return Object.defineProperty(l,i,{configurable:!0,enumerable:!0,get(){return o[i]},set(F){o[i]=F}}),h;return l[i]=h,h},set(P,i,E,h){return i in l?l[i]=E:o[i]=E,!0},defineProperty(P,i,E){return Reflect.defineProperty(l,i,E)},deleteProperty(P,i){return Reflect.deleteProperty(l,i)}},O=Object.create(o);return new Proxy(O,v)},u=o=>({addListener(n,f,...l){n.addListener(o.get(f),...l)},hasListener(n,f){return n.hasListener(o.get(f))},removeListener(n,f){n.removeListener(o.get(f))}}),k=new p(o=>typeof o!="function"?o:function(f){let l=b(f,{},{getContent:{minArgs:0,maxArgs:0}});o(l)}),j=new p(o=>typeof o!="function"?o:function(f,l,v){let O=!1,P,i=new Promise(q=>{P=function(M){O=!0,q(M)}}),E;try{E=o(f,l,P)}catch(q){E=Promise.reject(q)}let h=E!==!0&&g(E);if(E!==!0&&!h&&!O)return!1;let F=q=>{q.then(M=>{v(M)},M=>{let fe;M&&(M instanceof Error||typeof M.message=="string")?fe=M.message:fe="An unexpected error occurred",v({__mozWebExtensionPolyfillReject__:!0,message:fe})}).catch(M=>{console.error("Failed to send onMessage rejected reply",M)})};return F(h?E:i),!0}),C=({reject:o,resolve:n},f)=>{a.runtime.lastError?a.runtime.lastError.message===t?n():o(new Error(a.runtime.lastError.message)):f&&f.__mozWebExtensionPolyfillReject__?o(new Error(f.message)):n(f)},S=(o,n,f,...l)=>{if(l.length<n.minArgs)throw new Error(`Expected at least ${n.minArgs} ${x(n.minArgs)} for ${o}(), got ${l.length}`);if(l.length>n.maxArgs)throw new Error(`Expected at most ${n.maxArgs} ${x(n.maxArgs)} for ${o}(), got ${l.length}`);return new Promise((v,O)=>{let P=C.bind(null,{resolve:v,reject:O});l.push(P),f.sendMessage(...l)})},I={devtools:{network:{onRequestFinished:u(k)}},runtime:{onMessage:u(j),onMessageExternal:u(j),sendMessage:S.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:S.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},$={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return s.privacy={network:{"*":$},services:{"*":$},websites:{"*":$}},b(a,I,s)};e.exports=r(chrome)}else e.exports=globalThis.browser})});var pt=he(Se());var K,Tt=new Uint8Array(16);function le(){if(!K&&(K=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!K))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return K(Tt)}var w=[];for(let e=0;e<256;++e)w.push((e+256).toString(16).slice(1));function Oe(e,t=0){return(w[e[t+0]]+w[e[t+1]]+w[e[t+2]]+w[e[t+3]]+"-"+w[e[t+4]]+w[e[t+5]]+"-"+w[e[t+6]]+w[e[t+7]]+"-"+w[e[t+8]]+w[e[t+9]]+"-"+w[e[t+10]]+w[e[t+11]]+w[e[t+12]]+w[e[t+13]]+w[e[t+14]]+w[e[t+15]]).toLowerCase()}var jt=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ue={randomUUID:jt};function kt(e,t,r){if(ue.randomUUID&&!t&&!e)return ue.randomUUID();e=e||{};let a=e.random||(e.rng||le)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,t){r=r||0;for(let s=0;s<16;++s)t[r+s]=a[s];return t}return Oe(a)}var D=kt;var B=he(Pe());async function Ee(e,t,r,a){return fetch(`https://chat.openai.com/backend-api${r}`,{method:t,headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(a)})}async function Ie(e,t){await Ee(e,"POST","/conversation/message_feedback",t)}async function pe(e,t,r){await Ee(e,"PATCH",`/conversation/${t}`,r)}function Me(e){let t,r,a,s,p,g,y;return x(),{feed:m,reset:x};function x(){t=!0,r="",a=0,s=-1,p=void 0,g=void 0,y=""}function m(A){r=r?r+A:A,t&&St(r)&&(r=r.slice(Ne.length)),t=!1;let b=r.length,u=0,k=!1;for(;u<b;){k&&(r[u]===`
`&&++u,k=!1);let j=-1,C=s,S;for(let I=a;j<0&&I<b;++I)S=r[I],S===":"&&C<0?C=I-u:S==="\r"?(k=!0,j=I-u):S===`
`&&(j=I-u);if(j<0){a=b-u,s=C;break}else a=0,s=-1;c(r,u,C,j),u+=j+1}u===b?r="":u>0&&(r=r.slice(u))}function c(A,b,u,k){if(k===0){y.length>0&&(e({type:"event",id:p,event:g||void 0,data:y.slice(0,-1)}),y="",p=void 0),g=void 0;return}let j=u<0,C=A.slice(b,b+(j?k:u)),S=0;j?S=k:A[b+u+1]===" "?S=u+2:S=u+1;let I=b+S,$=k-S,o=A.slice(I,I+$).toString();if(C==="data")y+=o?"".concat(o,`
`):`
`;else if(C==="event")g=o;else if(C==="id"&&!o.includes("\0"))p=o;else if(C==="retry"){let n=parseInt(o,10);Number.isNaN(n)||e({type:"reconnect-interval",value:n})}}}var Ne=[239,187,191];function St(e){return Ne.every((t,r)=>e.charCodeAt(r)===t)}var Ot=typeof global=="object"&&global&&global.Object===Object&&global,J=Ot;var Ct=typeof self=="object"&&self&&self.Object===Object&&self,Pt=J||Ct||Function("return this")(),T=Pt;var Et=T.Symbol,W=Et;var Be=Object.prototype,It=Be.hasOwnProperty,Mt=Be.toString,z=W?W.toStringTag:void 0;function Nt(e){var t=It.call(e,z),r=e[z];try{e[z]=void 0;var a=!0}catch{}var s=Mt.call(e);return a&&(t?e[z]=r:delete e[z]),s}var Re=Nt;var Bt=Object.prototype,Rt=Bt.toString;function _t(e){return Rt.call(e)}var _e=_t;var Lt="[object Null]",Ft="[object Undefined]",Le=W?W.toStringTag:void 0;function Dt(e){return e==null?e===void 0?Ft:Lt:Le&&Le in Object(e)?Re(e):_e(e)}var R=Dt;function Wt(e){return e!=null&&typeof e=="object"}var U=Wt;var Ut=Array.isArray,Fe=Ut;function $t(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var H=$t;var qt="[object AsyncFunction]",zt="[object Function]",Vt="[object GeneratorFunction]",Gt="[object Proxy]";function Kt(e){if(!H(e))return!1;var t=R(e);return t==zt||t==Vt||t==qt||t==Gt}var Q=Kt;var Jt=T["__core-js_shared__"],Z=Jt;var De=function(){var e=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function Ht(e){return!!De&&De in e}var We=Ht;var Qt=Function.prototype,Zt=Qt.toString;function Xt(e){if(e!=null){try{return Zt.call(e)}catch{}try{return e+""}catch{}}return""}var _=Xt;var Yt=/[\\^$.*+?()[\]{}|]/g,er=/^\[object .+?Constructor\]$/,tr=Function.prototype,rr=Object.prototype,or=tr.toString,ar=rr.hasOwnProperty,sr=RegExp("^"+or.call(ar).replace(Yt,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function nr(e){if(!H(e)||We(e))return!1;var t=Q(e)?sr:er;return t.test(_(e))}var Ue=nr;function ir(e,t){return e?.[t]}var $e=ir;function fr(e,t){var r=$e(e,t);return Ue(r)?r:void 0}var N=fr;var mr=N(T,"WeakMap"),X=mr;var lr=9007199254740991;function ur(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=lr}var Y=ur;function dr(e){return e!=null&&Y(e.length)&&!Q(e)}var qe=dr;var pr=Object.prototype;function cr(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||pr;return e===r}var ee=cr;var gr="[object Arguments]";function xr(e){return U(e)&&R(e)==gr}var ce=xr;var ze=Object.prototype,Ar=ze.hasOwnProperty,yr=ze.propertyIsEnumerable,br=ce(function(){return arguments}())?ce:function(e){return U(e)&&Ar.call(e,"callee")&&!yr.call(e,"callee")},Ve=br;function hr(){return!1}var Ge=hr;var He=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ke=He&&typeof module=="object"&&module&&!module.nodeType&&module,vr=Ke&&Ke.exports===He,Je=vr?T.Buffer:void 0,wr=Je?Je.isBuffer:void 0,Tr=wr||Ge,Qe=Tr;var jr="[object Arguments]",kr="[object Array]",Sr="[object Boolean]",Or="[object Date]",Cr="[object Error]",Pr="[object Function]",Er="[object Map]",Ir="[object Number]",Mr="[object Object]",Nr="[object RegExp]",Br="[object Set]",Rr="[object String]",_r="[object WeakMap]",Lr="[object ArrayBuffer]",Fr="[object DataView]",Dr="[object Float32Array]",Wr="[object Float64Array]",Ur="[object Int8Array]",$r="[object Int16Array]",qr="[object Int32Array]",zr="[object Uint8Array]",Vr="[object Uint8ClampedArray]",Gr="[object Uint16Array]",Kr="[object Uint32Array]",d={};d[Dr]=d[Wr]=d[Ur]=d[$r]=d[qr]=d[zr]=d[Vr]=d[Gr]=d[Kr]=!0;d[jr]=d[kr]=d[Lr]=d[Sr]=d[Fr]=d[Or]=d[Cr]=d[Pr]=d[Er]=d[Ir]=d[Mr]=d[Nr]=d[Br]=d[Rr]=d[_r]=!1;function Jr(e){return U(e)&&Y(e.length)&&!!d[R(e)]}var Ze=Jr;function Hr(e){return function(t){return e(t)}}var Xe=Hr;var Ye=typeof exports=="object"&&exports&&!exports.nodeType&&exports,V=Ye&&typeof module=="object"&&module&&!module.nodeType&&module,Qr=V&&V.exports===Ye,ge=Qr&&J.process,Zr=function(){try{var e=V&&V.require&&V.require("util").types;return e||ge&&ge.binding&&ge.binding("util")}catch{}}(),xe=Zr;var et=xe&&xe.isTypedArray,Xr=et?Xe(et):Ze,tt=Xr;function Yr(e,t){return function(r){return e(t(r))}}var rt=Yr;var eo=rt(Object.keys,Object),ot=eo;var to=Object.prototype,ro=to.hasOwnProperty;function oo(e){if(!ee(e))return ot(e);var t=[];for(var r in Object(e))ro.call(e,r)&&r!="constructor"&&t.push(r);return t}var at=oo;var ao=N(T,"Map"),te=ao;var so=N(T,"DataView"),re=so;var no=N(T,"Promise"),oe=no;var io=N(T,"Set"),ae=io;var st="[object Map]",fo="[object Object]",nt="[object Promise]",it="[object Set]",ft="[object WeakMap]",mt="[object DataView]",mo=_(re),lo=_(te),uo=_(oe),po=_(ae),co=_(X),L=R;(re&&L(new re(new ArrayBuffer(1)))!=mt||te&&L(new te)!=st||oe&&L(oe.resolve())!=nt||ae&&L(new ae)!=it||X&&L(new X)!=ft)&&(L=function(e){var t=R(e),r=t==fo?e.constructor:void 0,a=r?_(r):"";if(a)switch(a){case mo:return mt;case lo:return st;case uo:return nt;case po:return it;case co:return ft}return t});var lt=L;var go="[object Map]",xo="[object Set]",Ao=Object.prototype,yo=Ao.hasOwnProperty;function bo(e){if(e==null)return!0;if(qe(e)&&(Fe(e)||typeof e=="string"||typeof e.splice=="function"||Qe(e)||tt(e)||Ve(e)))return!e.length;var t=lt(e);if(t==go||t==xo)return!e.size;if(ee(e))return!at(e).length;for(var r in e)if(yo.call(e,r))return!1;return!0}var Ae=bo;async function*ut(e){let t=e.getReader();try{for(;;){let{done:r,value:a}=await t.read();if(r)return;yield a}}finally{t.releaseLock()}}async function ye(e,t){let{onMessage:r,...a}=t,s=await fetch(e,a);if(!s.ok){let g=await s.json().catch(()=>({}));throw new Error(Ae(g)?`${s.status} ${s.statusText}`:JSON.stringify(g))}let p=Me(g=>{g.type==="event"&&r(g.data)});for await(let g of ut(s.body)){let y=new TextDecoder().decode(g);p.feed(y)}}var se="accessToken",ne=new pt.default(10*1e3),dt=null;async function ie(){if(ne.get(se))return ne.get(se);let e=await fetch("https://chat.openai.com/api/auth/session");if(e.status===403)throw new Error("CLOUDFLARE");let t=await e.json().catch(()=>({}));if(!t.accessToken)throw new Error("UNAUTHORIZED");return ne.set(se,t.accessToken),t.accessToken}async function ho(e,t){let r=t.question,a,s=t.clearConversation;try{a=await ie()}catch(c){e.postMessage({error:c.message}),a=""}let p,g=()=>{console.log("clearConversation",s),s&&p&&pe(a,p,{is_visible:!1})},y=new AbortController;e.onDisconnect.addListener(()=>{y.abort(),g()});let x=D(),m={action:"next",messages:[{id:D(),role:"user",content:{content_type:"text",parts:[r]}}],model:"text-davinci-002-render",parent_message_id:x};if(t.conversationId||(dt=null),!s&&t.conversationId){m.conversation_id=t.conversationId;let c=await wo(t.conversationId);c.current_node&&(m.parent_message_id=dt=c.current_node)}await ye("https://chat.openai.com/backend-api/conversation",{method:"POST",signal:y.signal,headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify(m),onMessage(c){var u,k,j;if(c==="[DONE]"){e.postMessage({event:"DONE"}),g();return}if(!c.trim())return;let A;try{A=JSON.parse(c)}catch(C){}if(!A)return;let b=(j=(k=(u=A.message)==null?void 0:u.content)==null?void 0:k.parts)==null?void 0:j[0];p=A.conversation_id,b&&e.postMessage({text:b,messageId:A.message.id,conversationId:A.conversation_id})}})}async function vo(e,t){let r=await ie(),a,s=new AbortController,p,g=()=>{p&&pe(r,p,{is_visible:!1})};return new Promise((y,x)=>{ye("https://chat.openai.com/backend-api/conversation",{method:"POST",signal:s.signal,headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`},body:JSON.stringify(e),onMessage(m){if(m==="[DONE]"){t(a);return}a=JSON.parse(m),y(a)}}).catch(m=>x(m))})}async function wo(e){let t=await ie();return new Promise((r,a)=>{fetch("https://chat.openai.com/backend-api/conversation/"+e,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`}}).then(s=>{r(s.json())})})}async function To(e){return new Promise((t,r)=>{return t(1),!1;let a=D();vo({action:"next",messages:[{id:a,role:"user",content:{content_type:"text",parts:[e]}}],model:"text-davinci-002-render",parent_message_id:D()},s=>!1).then(s=>{s.question=e,t(s)})})}B.default.runtime.onConnect.addListener(e=>{e.onMessage.addListener(t=>{try{ho(e,t)}catch(r){console.error(r),e.postMessage({error:r.message}),ne.delete(se)}})});B.default.runtime.onMessage.addListener(async e=>{if(e.type==="FEEDBACK"){let t=await ie();await Ie(t,e.data)}else e.type==="OPEN_OPTIONS_PAGE"&&B.default.runtime.openOptionsPage()});B.default.runtime.onInstalled.addListener(async()=>{B.default.contextMenus.create({id:"question",title:'Question  "%s"',type:"normal",contexts:["selection"]})});B.default.contextMenus.onClicked.addListener((e,t)=>{let r=e.selectionText;e.selectionText&&To(e.selectionText).then(async function(a){let s=new URL(`https://chat.openai.com/chat/${a.conversation_id}`),p=await B.default.tabs.create({url:"https://chat.openai.com/chat",index:t?t.index+1:1});B.default.tabs.update(p.id,{active:!0});function g(y){function x(m){return new Promise(c=>{if(document.querySelector(m))return c(document.querySelector(m));let A=new MutationObserver(b=>{document.querySelector(m)&&(c(document.querySelector(m)),A.disconnect())});A.observe(document.body,{childList:!0,subtree:!0})})}x("a.items-center:nth-child(1)").then(m=>{document.querySelectorAll("a.items-center")[0].click(),x('textarea[data-id="root"]').then(c=>{c.value=y,document.querySelectorAll("button.absolute.p-1.rounded-md")[0].click()})})}B.default.scripting.executeScript({target:{tabId:p.id},func:g,args:[r]})})});})();