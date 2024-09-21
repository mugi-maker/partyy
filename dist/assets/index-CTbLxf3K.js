var Og=Object.defineProperty;var Fg=(s,e,t)=>e in s?Og(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var St=(s,e,t)=>Fg(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function ue(){}function vi(s,e){for(const t in e)s[t]=e[t];return s}function kg(s){return!!s&&(typeof s=="object"||typeof s=="function")&&typeof s.then=="function"}function lp(s){return s()}function Vh(){return Object.create(null)}function vr(s){s.forEach(lp)}function Sl(s){return typeof s=="function"}function ft(s,e){return s!=s?e==e:s!==e||s&&typeof s=="object"||typeof s=="function"}let Oa;function Hh(s,e){return s===e?!0:(Oa||(Oa=document.createElement("a")),Oa.href=e,s===Oa.href)}function zg(s){return Object.keys(s).length===0}function cp(s,...e){if(s==null){for(const n of e)n(void 0);return ue}const t=s.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function dn(s,e,t){s.$$.on_destroy.push(cp(e,t))}function Pn(s,e,t,n){if(s){const i=up(s,e,t,n);return s[0](i)}}function up(s,e,t,n){return s[1]&&n?vi(t.ctx.slice(),s[1](n(e))):t.ctx}function In(s,e,t,n){if(s[2]&&n){const i=s[2](n(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const r=[],a=Math.max(e.dirty.length,i.length);for(let o=0;o<a;o+=1)r[o]=e.dirty[o]|i[o];return r}return e.dirty|i}return e.dirty}function Dn(s,e,t,n,i,r){if(i){const a=up(e,t,n,r);s.p(a,i)}}function Ln(s){if(s.ctx.length>32){const e=[],t=s.ctx.length/32;for(let n=0;n<t;n++)e[n]=-1;return e}return-1}function Oo(s){const e={};for(const t in s)t[0]!=="$"&&(e[t]=s[t]);return e}function hr(s,e){const t={};e=new Set(e);for(const n in s)!e.has(n)&&n[0]!=="$"&&(t[n]=s[n]);return t}function Bg(s){return s&&Sl(s.destroy)?s.destroy:ue}function It(s,e){s.appendChild(e)}function oe(s,e,t){s.insertBefore(e,t||null)}function ae(s){s.parentNode&&s.parentNode.removeChild(s)}function Nu(s,e){for(let t=0;t<s.length;t+=1)s[t]&&s[t].d(e)}function qe(s){return document.createElement(s)}function Uu(s){return document.createTextNode(s)}function Oe(){return Uu(" ")}function Nn(){return Uu("")}function Ie(s,e,t){t==null?s.removeAttribute(e):s.getAttribute(e)!==t&&s.setAttribute(e,t)}function Vg(s){return Array.from(s.childNodes)}function On(s,e,t,n){t==null?s.style.removeProperty(e):s.style.setProperty(e,t,"")}let Kr;function pi(s){Kr=s}function Vi(){if(!Kr)throw new Error("Function called outside component initialization");return Kr}function Ma(s){Vi().$$.on_mount.push(s)}function vn(s){Vi().$$.on_destroy.push(s)}function qn(s,e){return Vi().$$.context.set(s,e),e}function zn(s){return Vi().$$.context.get(s)}const tr=[],En=[];let lr=[];const lu=[],hp=Promise.resolve();let cu=!1;function fp(){cu||(cu=!0,hp.then(Ou))}function Hg(){return fp(),hp}function uu(s){lr.push(s)}function xi(s){lu.push(s)}const gc=new Set;let Ds=0;function Ou(){if(Ds!==0)return;const s=Kr;do{try{for(;Ds<tr.length;){const e=tr[Ds];Ds++,pi(e),Gg(e.$$)}}catch(e){throw tr.length=0,Ds=0,e}for(pi(null),tr.length=0,Ds=0;En.length;)En.pop()();for(let e=0;e<lr.length;e+=1){const t=lr[e];gc.has(t)||(gc.add(t),t())}lr.length=0}while(tr.length);for(;lu.length;)lu.pop()();cu=!1,gc.clear(),pi(s)}function Gg(s){if(s.fragment!==null){s.update(),vr(s.before_update);const e=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,e),s.after_update.forEach(uu)}}function Wg(s){const e=[],t=[];lr.forEach(n=>s.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),lr=e}const Lo=new Set;let fs;function rn(){fs={r:0,c:[],p:fs}}function an(){fs.r||vr(fs.c),fs=fs.p}function G(s,e){s&&s.i&&(Lo.delete(s),s.i(e))}function Z(s,e,t,n){if(s&&s.o){if(Lo.has(s))return;Lo.add(s),fs.c.push(()=>{Lo.delete(s),n&&(t&&s.d(1),n())}),s.o(e)}else n&&n()}function xr(s,e){const t=e.token={};function n(i,r,a,o){if(e.token!==t)return;e.resolved=o;let l=e.ctx;a!==void 0&&(l=l.slice(),l[a]=o);const c=i&&(e.current=i)(l);let h=!1;e.block&&(e.blocks?e.blocks.forEach((u,f)=>{f!==r&&u&&(rn(),Z(u,1,1,()=>{e.blocks[f]===u&&(e.blocks[f]=null)}),an())}):e.block.d(1),c.c(),G(c,1),c.m(e.mount(),e.anchor),h=!0),e.block=c,e.blocks&&(e.blocks[r]=c),h&&Ou()}if(kg(s)){const i=Vi();if(s.then(r=>{pi(i),n(e.then,1,e.value,r),pi(null)},r=>{if(pi(i),n(e.catch,2,e.error,r),pi(null),!e.hasCatch)throw r}),e.current!==e.pending)return n(e.pending,0),!0}else{if(e.current!==e.then)return n(e.then,1,e.value,s),!0;e.resolved=s}}function yr(s,e,t){const n=e.slice(),{resolved:i}=s;s.current===s.then&&(n[s.value]=i),s.current===s.catch&&(n[s.error]=i),s.block.p(n,t)}function fr(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function dp(s,e){const t={},n={},i={$$scope:1};let r=s.length;for(;r--;){const a=s[r],o=e[r];if(o){for(const l in a)l in o||(n[l]=1);for(const l in o)i[l]||(t[l]=o[l],i[l]=1);s[r]=o}else for(const l in a)i[l]=1}for(const a in n)a in t||(t[a]=void 0);return t}function pp(s){return typeof s=="object"&&s!==null?s:{}}function yi(s,e,t){const n=s.$$.props[e];n!==void 0&&(s.$$.bound[n]=t,t(s.$$.ctx[n]))}function Me(s){s&&s.c()}function xe(s,e,t){const{fragment:n,after_update:i}=s.$$;n&&n.m(e,t),uu(()=>{const r=s.$$.on_mount.map(lp).filter(Sl);s.$$.on_destroy?s.$$.on_destroy.push(...r):vr(r),s.$$.on_mount=[]}),i.forEach(uu)}function ye(s,e){const t=s.$$;t.fragment!==null&&(Wg(t.after_update),vr(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Xg(s,e){s.$$.dirty[0]===-1&&(tr.push(s),fp(),s.$$.dirty.fill(0)),s.$$.dirty[e/31|0]|=1<<e%31}function pt(s,e,t,n,i,r,a=null,o=[-1]){const l=Kr;pi(s);const c=s.$$={fragment:null,ctx:[],props:r,update:ue,not_equal:i,bound:Vh(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Vh(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let h=!1;if(c.ctx=t?t(s,e.props||{},(u,f,...d)=>{const p=d.length?d[0]:f;return c.ctx&&i(c.ctx[u],c.ctx[u]=p)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](p),h&&Xg(s,u)),f}):[],c.update(),h=!0,vr(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const u=Vg(e.target);c.fragment&&c.fragment.l(u),u.forEach(ae)}else c.fragment&&c.fragment.c();e.intro&&G(s.$$.fragment),xe(s,e.target,e.anchor),Ou()}pi(l)}class mt{constructor(){St(this,"$$");St(this,"$$set")}$destroy(){ye(this,1),this.$destroy=ue}$on(e,t){if(!Sl(t))return ue;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!zg(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const $g="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($g);function Yg(s){let e;return{c(){e=qe("footer"),e.innerHTML=`<aside><svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> <p>CRINGE Web
        <br/>
       CRINGEST SIde of internet</p></aside> <nav><h6 class="footer-title">Social</h6> <div class="grid grid-flow-col gap-4"><a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a> <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a></div></nav>`,Ie(e,"class","footer bg-neutral text-neutral-content p-10 svelte-1i7crjl")},m(t,n){oe(t,e,n)},p:ue,i:ue,o:ue,d(t){t&&ae(e)}}}class qg extends mt{constructor(e){super(),pt(this,e,null,Yg,ft,{})}}const Ls=[];function mp(s,e){return{subscribe:Vt(s,e).subscribe}}function Vt(s,e=ue){let t;const n=new Set;function i(o){if(ft(s,o)&&(s=o,t)){const l=!Ls.length;for(const c of n)c[1](),Ls.push(c,s);if(l){for(let c=0;c<Ls.length;c+=2)Ls[c][0](Ls[c+1]);Ls.length=0}}}function r(o){i(o(s))}function a(o,l=ue){const c=[o,l];return n.add(c),n.size===1&&(t=e(i,r)||ue),o(s),()=>{n.delete(c),n.size===0&&t&&(t(),t=null)}}return{set:i,update:r,subscribe:a}}function Fu(s,e,t){const n=!Array.isArray(s),i=n?[s]:s;if(!i.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const r=e.length<2;return mp(t,(a,o)=>{let l=!1;const c=[];let h=0,u=ue;const f=()=>{if(h)return;u();const p=e(n?c[0]:c,a,o);r?a(p):u=Sl(p)?p:ue},d=i.map((p,_)=>cp(p,g=>{c[_]=g,h&=~(1<<_),l&&f()},()=>{h|=1<<_}));return l=!0,f(),function(){vr(d),u(),l=!1}})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="167",os={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gp=0,hu=1,_p=2,Zg=3,Jg=0,ku=1,wl=2,jn=3,Mi=0,Wt=1,$n=2,gi=0,_s=1,fu=2,du=3,pu=4,vp=5,ki=100,xp=101,yp=102,Mp=103,bp=104,Sp=200,wp=201,Tp=202,Ap=203,Fo=204,ko=205,Ep=206,Cp=207,Rp=208,Pp=209,Ip=210,Dp=211,Lp=212,Np=213,Up=214,Op=0,Fp=1,kp=2,Qr=3,zp=4,Bp=5,Vp=6,Hp=7,Sa=0,Gp=1,Wp=2,_i=0,Xp=1,$p=2,Yp=3,zu=4,qp=5,Zp=6,Jp=7,mu="attached",jp="detached",Tl=300,bi=301,zi=302,ea=303,ta=304,Mr=306,pn=1e3,tn=1001,na=1002,it=1003,Bu=1004,jg=1004,nr=1005,Kg=1005,kt=1006,Gr=1007,Qg=1007,Yn=1008,e0=1008,ei=1009,Vu=1010,Hu=1011,dr=1012,Al=1013,Si=1014,Ht=1015,Es=1016,El=1017,Cl=1018,Ms=1020,Gu=35902,Wu=1021,Xu=1022,Gt=1023,$u=1024,Yu=1025,vs=1026,bs=1027,Rl=1028,wa=1029,qu=1030,Pl=1031,t0=1032,Il=1033,Wr=33776,Xr=33777,$r=33778,Yr=33779,zo=35840,Bo=35841,Vo=35842,Ho=35843,Go=36196,Wo=37492,Xo=37496,$o=37808,Yo=37809,qo=37810,Zo=37811,Jo=37812,jo=37813,Ko=37814,Qo=37815,el=37816,tl=37817,nl=37818,il=37819,sl=37820,rl=37821,qr=36492,al=36494,ol=36495,Zu=36283,ll=36284,cl=36285,ul=36286,Kp=2200,Qp=2201,em=2202,ia=2300,hl=2301,No=2302,ds=2400,ps=2401,sa=2402,Dl=2500,Ju=2501,n0=0,i0=1,s0=2,tm=3200,ju=3201,r0=3202,a0=3203,Hi=0,nm=1,fi="",un="srgb",Ti="srgb-linear",Ll="display-p3",Ta="display-p3-linear",ra="linear",Mt="srgb",aa="rec709",oa="p3",o0=0,cs=7680,l0=7681,c0=7682,u0=7683,h0=34055,f0=34056,d0=5386,p0=512,m0=513,g0=514,_0=515,v0=516,x0=517,y0=518,gu=519,im=512,sm=513,rm=514,Ku=515,am=516,om=517,lm=518,cm=519,la=35044,M0=35048,b0=35040,S0=35045,w0=35049,T0=35041,A0=35046,E0=35050,C0=35042,R0="100",_u="300 es",Kn=2e3,ca=2001;class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gh=1234567;const xs=Math.PI/180,pr=180/Math.PI;function Tn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[s&255]+Kt[s>>8&255]+Kt[s>>16&255]+Kt[s>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function Qu(s,e){return(s%e+e)%e}function P0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function I0(s,e,t){return s!==e?(t-s)/(e-s):0}function Zr(s,e,t){return(1-t)*s+t*e}function D0(s,e,t,n){return Zr(s,e,1-Math.exp(-t*n))}function L0(s,e=1){return e-Math.abs(Qu(s,e*2)-e)}function N0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function U0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function O0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function F0(s,e){return s+Math.random()*(e-s)}function k0(s){return s*(.5-Math.random())}function z0(s){s!==void 0&&(Gh=s);let e=Gh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function B0(s){return s*xs}function V0(s){return s*pr}function H0(s){return(s&s-1)===0&&s!==0}function G0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function W0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function X0(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function hn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function tt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const fl={DEG2RAD:xs,RAD2DEG:pr,generateUUID:Tn,clamp:Dt,euclideanModulo:Qu,mapLinear:P0,inverseLerp:I0,lerp:Zr,damp:D0,pingpong:L0,smoothstep:N0,smootherstep:U0,randInt:O0,randFloat:F0,randFloatSpread:k0,seededRandom:z0,degToRad:B0,radToDeg:V0,isPowerOfTwo:H0,ceilPowerOfTwo:G0,floorPowerOfTwo:W0,setQuaternionFromProperEuler:X0,normalize:tt,denormalize:hn};class J{constructor(e=0,t=0){J.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,i,r,a,o,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],p=n[8],_=i[0],g=i[3],m=i[6],v=i[1],x=i[4],y=i[7],C=i[2],A=i[5],w=i[8];return r[0]=a*_+o*v+l*C,r[3]=a*g+o*x+l*A,r[6]=a*m+o*y+l*w,r[1]=c*_+h*v+u*C,r[4]=c*g+h*x+u*A,r[7]=c*m+h*y+u*w,r[2]=f*_+d*v+p*C,r[5]=f*g+d*x+p*A,r[8]=f*m+d*y+p*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,p=t*u+n*f+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(o*n-i*a)*_,e[3]=f*_,e[4]=(h*t-i*l)*_,e[5]=(i*r-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(_c.makeScale(e,t)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,t){return this.premultiply(_c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new et;function um(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const $0={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ir(s,e){return new $0[s](e)}function ua(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hm(){const s=ua("canvas");return s.style.display="block",s}const Wh={};function cr(s){s in Wh||(Wh[s]=!0,console.warn(s))}function Y0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Xh=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$h=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cr={[Ti]:{transfer:ra,primaries:aa,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[un]:{transfer:Mt,primaries:aa,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ta]:{transfer:ra,primaries:oa,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3($h),fromReference:s=>s.applyMatrix3(Xh)},[Ll]:{transfer:Mt,primaries:oa,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3($h),fromReference:s=>s.applyMatrix3(Xh).convertLinearToSRGB()}},q0=new Set([Ti,Ta]),ut={enabled:!0,_workingColorSpace:Ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!q0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Cr[e].toReference,i=Cr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Cr[s].primaries},getTransfer:function(s){return s===fi?ra:Cr[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Cr[e].luminanceCoefficients)}};function ur(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vc(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ns;class fm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=ua("canvas")),Ns.width=e.width,Ns.height=e.height;const n=Ns.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ua("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ur(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ur(t[n]/255)*255):t[n]=ur(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Z0=0;class ms{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z0++}),this.uuid=Tn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(xc(i[a].image)):r.push(xc(i[a]))}else r=xc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function xc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?fm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let J0=0;class Et extends ti{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=tn,i=tn,r=kt,a=Yn,o=Gt,l=ei,c=Et.DEFAULT_ANISOTROPY,h=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Tn(),this.name="",this.source=new ms(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new J(0,0),this.repeat=new J(1,1),this.center=new J(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pn:e.x=e.x-Math.floor(e.x);break;case tn:e.x=e.x<0?0:1;break;case na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pn:e.y=e.y-Math.floor(e.y);break;case tn:e.y=e.y<0?0:1;break;case na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Tl;Et.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,i=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(d+1)/2,C=(m+1)/2,A=(h+f)/4,w=(u+_)/4,D=(p+g)/4;return x>y&&x>C?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=w/n):y>C?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=D/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=w/r,i=D/r),this.set(n,i,r,t),this}let v=Math.sqrt((g-p)*(g-p)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(u-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dm extends ti{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Et(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ms(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends dm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nl extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class j0 extends Bn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Nl(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class eh extends Et{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=it,this.minFilter=it,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class K0 extends Bn{constructor(e=1,t=1,n=1,i={}){super(e,t,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new eh(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],d=r[a+1],p=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==p){let g=1-o;const m=l*f+c*d+h*p+u*_,v=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,m*v);g=Math.sin(g*A)/C,o=Math.sin(o*A)/C}const y=o*v;if(l=l*g+f*y,c=c*g+d*y,h=h*g+p*y,u=u*g+_*y,g===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-o*d,e[t+2]=c*p+h*d+o*f-l*u,e[t+3]=h*p-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),f=l(n/2),d=l(i/2),p=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new R,Yh=new nn;class fn{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fa.copy(n.boundingBox)),Fa.applyMatrix4(e.matrixWorld),this.union(Fa)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rr),ka.subVectors(this.max,Rr),Us.subVectors(e.a,Rr),Os.subVectors(e.b,Rr),Fs.subVectors(e.c,Rr),Ri.subVectors(Os,Us),Pi.subVectors(Fs,Os),qi.subVectors(Us,Fs);let t=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-qi.z,qi.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,qi.z,0,-qi.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-qi.y,qi.x,0];return!Mc(t,Us,Os,Fs,ka)||(t=[1,0,0,0,1,0,0,0,1],!Mc(t,Us,Os,Fs,ka))?!1:(za.crossVectors(Ri,Pi),t=[za.x,za.y,za.z],Mc(t,Us,Os,Fs,ka))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new R,new R,new R,new R,new R,new R,new R,new R],Hn=new R,Fa=new fn,Us=new R,Os=new R,Fs=new R,Ri=new R,Pi=new R,qi=new R,Rr=new R,ka=new R,za=new R,Zi=new R;function Mc(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Zi.fromArray(s,r);const o=i.x*Math.abs(Zi.x)+i.y*Math.abs(Zi.y)+i.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Q0=new fn,Pr=new R,bc=new R;class sn{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Q0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);const t=Pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Pr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(bc)),this.expandByPoint(Pr.copy(e.center).sub(bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new R,Sc=new R,Ba=new R,Ii=new R,wc=new R,Va=new R,Tc=new R;class Cs{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sc.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(Sc);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ba),o=Ii.dot(this.direction),l=-Ii.dot(Ba),c=Ii.lengthSq(),h=Math.abs(1-a*a);let u,f,d,p;if(h>0)if(u=a*l-o,f=a*o-l,p=r*h,u>=0)if(f>=-p)if(f<=p){const _=1/h;u*=_,f*=_,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Sc).addScaledVector(Ba,f),d}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),i=ai.dot(ai)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,i,r){wc.subVectors(t,e),Va.subVectors(n,e),Tc.crossVectors(wc,Va);let a=this.direction.dot(Tc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,e);const l=o*this.direction.dot(Va.crossVectors(Ii,Va));if(l<0)return null;const c=o*this.direction.dot(wc.cross(Ii));if(c<0||l+c>a)return null;const h=-o*Ii.dot(Tc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,n,i,r,a,o,l,c,h,u,f,d,p,_,g){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,f,d,p,_,g)}set(e,t,n,i,r,a,o,l,c,h,u,f,d,p,_,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f+_*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=_+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,p=c*h,_=c*u;t[0]=f-_*o,t[4]=-a*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=_-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,p=o*h,_=o*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=_-f*u,t[8]=p*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*l,d=a*c,p=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=a*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e_,e,t_)}lookAt(e,t,n){const i=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Di.crossVectors(n,bn),Di.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Di.crossVectors(n,bn)),Di.normalize(),Ha.crossVectors(bn,Di),i[0]=Di.x,i[4]=Ha.x,i[8]=bn.x,i[1]=Di.y,i[5]=Ha.y,i[9]=bn.y,i[2]=Di.z,i[6]=Ha.z,i[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],p=n[2],_=n[6],g=n[10],m=n[14],v=n[3],x=n[7],y=n[11],C=n[15],A=i[0],w=i[4],D=i[8],T=i[12],M=i[1],I=i[5],k=i[9],O=i[13],Y=i[2],j=i[6],W=i[10],F=i[14],$=i[3],ge=i[7],be=i[11],we=i[15];return r[0]=a*A+o*M+l*Y+c*$,r[4]=a*w+o*I+l*j+c*ge,r[8]=a*D+o*k+l*W+c*be,r[12]=a*T+o*O+l*F+c*we,r[1]=h*A+u*M+f*Y+d*$,r[5]=h*w+u*I+f*j+d*ge,r[9]=h*D+u*k+f*W+d*be,r[13]=h*T+u*O+f*F+d*we,r[2]=p*A+_*M+g*Y+m*$,r[6]=p*w+_*I+g*j+m*ge,r[10]=p*D+_*k+g*W+m*be,r[14]=p*T+_*O+g*F+m*we,r[3]=v*A+x*M+y*Y+C*$,r[7]=v*w+x*I+y*j+C*ge,r[11]=v*D+x*k+y*W+C*be,r[15]=v*T+x*O+y*F+C*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],_=e[7],g=e[11],m=e[15];return p*(+r*l*u-i*c*u-r*o*f+n*c*f+i*o*d-n*l*d)+_*(+t*l*d-t*c*f+r*a*f-i*a*d+i*c*h-r*l*h)+g*(+t*c*u-t*o*d-r*a*u+n*a*d+r*o*h-n*c*h)+m*(-i*o*h-t*l*u+t*o*f+i*a*u-n*a*f+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],_=e[13],g=e[14],m=e[15],v=u*g*c-_*f*c+_*l*d-o*g*d-u*l*m+o*f*m,x=p*f*c-h*g*c-p*l*d+a*g*d+h*l*m-a*f*m,y=h*_*c-p*u*c+p*o*d-a*_*d-h*o*m+a*u*m,C=p*u*l-h*_*l-p*o*f+a*_*f+h*o*g-a*u*g,A=t*v+n*x+i*y+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=v*w,e[1]=(_*f*r-u*g*r-_*i*d+n*g*d+u*i*m-n*f*m)*w,e[2]=(o*g*r-_*l*r+_*i*c-n*g*c-o*i*m+n*l*m)*w,e[3]=(u*l*r-o*f*r-u*i*c+n*f*c+o*i*d-n*l*d)*w,e[4]=x*w,e[5]=(h*g*r-p*f*r+p*i*d-t*g*d-h*i*m+t*f*m)*w,e[6]=(p*l*r-a*g*r-p*i*c+t*g*c+a*i*m-t*l*m)*w,e[7]=(a*f*r-h*l*r+h*i*c-t*f*c-a*i*d+t*l*d)*w,e[8]=y*w,e[9]=(p*u*r-h*_*r-p*n*d+t*_*d+h*n*m-t*u*m)*w,e[10]=(a*_*r-p*o*r+p*n*c-t*_*c-a*n*m+t*o*m)*w,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*d-t*o*d)*w,e[12]=C*w,e[13]=(h*_*i-p*u*i+p*n*f-t*_*f-h*n*g+t*u*g)*w,e[14]=(p*o*i-a*_*i-p*n*l+t*_*l+a*n*g-t*o*g)*w,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,p=r*u,_=a*h,g=a*u,m=o*u,v=l*c,x=l*h,y=l*u,C=n.x,A=n.y,w=n.z;return i[0]=(1-(_+m))*C,i[1]=(d+y)*C,i[2]=(p-x)*C,i[3]=0,i[4]=(d-y)*A,i[5]=(1-(f+m))*A,i[6]=(g+v)*A,i[7]=0,i[8]=(p+x)*w,i[9]=(g-v)*w,i[10]=(1-(f+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ks.set(i[0],i[1],i[2]).length();const a=ks.set(i[4],i[5],i[6]).length(),o=ks.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Gn.copy(this);const c=1/r,h=1/a,u=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=h,Gn.elements[5]*=h,Gn.elements[6]*=h,Gn.elements[8]*=u,Gn.elements[9]*=u,Gn.elements[10]*=u,t.setFromRotationMatrix(Gn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Kn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,p;if(o===Kn)d=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===ca)d=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Kn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*c,d=(n+i)*h;let p,_;if(o===Kn)p=(a+r)*u,_=-2*u;else if(o===ca)p=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ks=new R,Gn=new He,e_=new R(0,0,0),t_=new R(1,1,1),Di=new R,Ha=new R,bn=new R,qh=new He,Zh=new nn;class Cn{constructor(e=0,t=0,n=0,i=Cn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zh.setFromEuler(this),this.setFromQuaternion(Zh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cn.DEFAULT_ORDER="XYZ";class Ul{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n_=0;const Jh=new R,zs=new nn,oi=new He,Ga=new R,Ir=new R,i_=new R,s_=new nn,jh=new R(1,0,0),Kh=new R(0,1,0),Qh=new R(0,0,1),ef={type:"added"},r_={type:"removed"},Bs={type:"childadded",child:null},Ac={type:"childremoved",child:null};class ht extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new R,t=new Cn,n=new nn,i=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new et}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(jh,e)}rotateY(e){return this.rotateOnAxis(Kh,e)}rotateZ(e){return this.rotateOnAxis(Qh,e)}translateOnAxis(e,t){return Jh.copy(e).applyQuaternion(this.quaternion),this.position.add(Jh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jh,e)}translateY(e){return this.translateOnAxis(Kh,e)}translateZ(e){return this.translateOnAxis(Qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ga.copy(e):Ga.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Ir,Ga,this.up):oi.lookAt(Ga,Ir,this.up),this.quaternion.setFromRotationMatrix(oi),i&&(oi.extractRotation(i.matrixWorld),zs.setFromRotationMatrix(oi),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ef),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(r_),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ef),Bs.child=e,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,i_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,s_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new R(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new R,li=new R,Ec=new R,ci=new R,Vs=new R,Hs=new R,tf=new R,Cc=new R,Rc=new R,Pc=new R;class wn{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wn.subVectors(e,t),i.cross(Wn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Wn.subVectors(i,t),li.subVectors(n,t),Ec.subVectors(e,t);const a=Wn.dot(Wn),o=Wn.dot(li),l=Wn.dot(Ec),c=li.dot(li),h=li.dot(Ec),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,p=(a*h-o*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static isFrontFacing(e,t,n,i){return Wn.subVectors(n,t),li.subVectors(e,t),Wn.cross(li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Wn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return wn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Vs.subVectors(i,n),Hs.subVectors(r,n),Cc.subVectors(e,n);const l=Vs.dot(Cc),c=Hs.dot(Cc);if(l<=0&&c<=0)return t.copy(n);Rc.subVectors(e,i);const h=Vs.dot(Rc),u=Hs.dot(Rc);if(h>=0&&u<=h)return t.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Vs,a);Pc.subVectors(e,r);const d=Vs.dot(Pc),p=Hs.dot(Pc);if(p>=0&&d<=p)return t.copy(r);const _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Hs,o);const g=h*p-d*u;if(g<=0&&u-h>=0&&d-p>=0)return tf.subVectors(r,i),o=(u-h)/(u-h+(d-p)),t.copy(i).addScaledVector(tf,o);const m=1/(g+_+f);return a=_*m,o=f*m,t.copy(n).addScaledVector(Vs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Wa={h:0,s:0,l:0};function Ic(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Re{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Qu(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ic(a,r,e+1/3),this.g=Ic(a,r,e),this.b=Ic(a,r,e-1/3)}return ut.toWorkingColorSpace(this,i),this}setStyle(e,t=un){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const n=pm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=vc(e.r),this.g=vc(e.g),this.b=vc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return ut.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Dt(Qt.r*255,0,255))*65536+Math.round(Dt(Qt.g*255,0,255))*256+Math.round(Dt(Qt.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Qt.copy(this),t);const n=Qt.r,i=Qt.g,r=Qt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=un){ut.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,n=Qt.g,i=Qt.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Wa);const n=Zr(Li.h,Wa.h,t),i=Zr(Li.s,Wa.s,t),r=Zr(Li.l,Wa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Re;Re.NAMES=pm;let a_=0;class on extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=_s,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=ko,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fo&&(n.blendSrc=this.blendSrc),this.blendDst!==ko&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class ni extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const di=o_();function o_(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function gn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=Dt(s,-65504,65504),di.floatView[0]=s;const e=di.uint32View[0],t=e>>23&511;return di.baseTable[t]+((e&8388607)>>di.shiftTable[t])}function Vr(s){const e=s>>10;return di.uint32View[0]=di.mantissaTable[di.offsetTable[e]+(s&1023)]+di.exponentTable[e],di.floatView[0]}const l_={toHalfFloat:gn,fromHalfFloat:Vr},Ft=new R,Xa=new J;class ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=la,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return cr("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==la&&(e.usage=this.usage),e}}class c_ extends ot{constructor(e,t,n){super(new Int8Array(e),t,n)}}class u_ extends ot{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class h_ extends ot{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class f_ extends ot{constructor(e,t,n){super(new Int16Array(e),t,n)}}class th extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class d_ extends ot{constructor(e,t,n){super(new Int32Array(e),t,n)}}class nh extends ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class p_ extends ot{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Vr(this.array[e*this.itemSize]);return this.normalized&&(t=hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize]=gn(t),this}getY(e){let t=Vr(this.array[e*this.itemSize+1]);return this.normalized&&(t=hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+1]=gn(t),this}getZ(e){let t=Vr(this.array[e*this.itemSize+2]);return this.normalized&&(t=hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+2]=gn(t),this}getW(e){let t=Vr(this.array[e*this.itemSize+3]);return this.normalized&&(t=hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.array[e*this.itemSize+3]=gn(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.array[e+0]=gn(t),this.array[e+1]=gn(n),this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.array[e+0]=gn(t),this.array[e+1]=gn(n),this.array[e+2]=gn(i),this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.array[e+0]=gn(t),this.array[e+1]=gn(n),this.array[e+2]=gn(i),this.array[e+3]=gn(r),this}}class Ne extends ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let m_=0;const Fn=new He,Dc=new ht,Gs=new R,Sn=new fn,Dr=new fn,Yt=new R;class nt extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(um(e)?nh:th)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,n){return Fn.makeTranslation(e,t,n),this.applyMatrix4(Fn),this}scale(e,t,n){return Fn.makeScale(e,t,n),this.applyMatrix4(Fn),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ne(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(Sn.min,Dr.min),Sn.expandByPoint(Yt),Yt.addVectors(Sn.max,Dr.max),Sn.expandByPoint(Yt)):(Sn.expandByPoint(Dr.min),Sn.expandByPoint(Dr.max))}Sn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Yt.fromBufferAttribute(o,c),l&&(Gs.fromBufferAttribute(e,c),Yt.add(Gs)),i=Math.max(i,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ot(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new R,l[D]=new R;const c=new R,h=new R,u=new R,f=new J,d=new J,p=new J,_=new R,g=new R;function m(D,T,M){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),p.sub(f);const I=1/(d.x*p.y-p.x*d.y);isFinite(I)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(I),g.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(I),o[D].add(_),o[T].add(_),o[M].add(_),l[D].add(g),l[T].add(g),l[M].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,T=v.length;D<T;++D){const M=v[D],I=M.start,k=M.count;for(let O=I,Y=I+k;O<Y;O+=3)m(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new R,y=new R,C=new R,A=new R;function w(D){C.fromBufferAttribute(i,D),A.copy(C);const T=o[D];x.copy(T),x.sub(C.multiplyScalar(C.dot(T))).normalize(),y.crossVectors(A,T);const I=y.dot(l[D])<0?-1:1;a.setXYZW(D,x.x,x.y,x.z,I)}for(let D=0,T=v.length;D<T;++D){const M=v[D],I=M.start,k=M.count;for(let O=I,Y=I+k;O<Y;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new R,r=new R,a=new R,o=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*h;for(let m=0;m<h;m++)f[p++]=c[d++]}return new ot(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nf=new He,Ji=new Cs,$a=new sn,sf=new R,Ws=new R,Xs=new R,$s=new R,Lc=new R,Ya=new R,qa=new J,Za=new J,Ja=new J,rf=new R,af=new R,of=new R,ja=new R,Ka=new R;class wt extends ht{constructor(e=new nt,t=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ya.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Lc.fromBufferAttribute(u,e),a?Ya.addScaledVector(Lc,h):Ya.addScaledVector(Lc.sub(t),h))}t.add(Ya)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(r),Ji.copy(e.ray).recast(e.near),!($a.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere($a,sf)===null||Ji.origin.distanceToSquared(sf)>(e.far-e.near)**2))&&(nf.copy(r).invert(),Ji.copy(e.ray).applyMatrix4(nf),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),x=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,C=x;y<C;y+=3){const A=o.getX(y),w=o.getX(y+1),D=o.getX(y+2);i=Qa(this,m,e,n,c,h,u,A,w,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const v=o.getX(g),x=o.getX(g+1),y=o.getX(g+2);i=Qa(this,a,e,n,c,h,u,v,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){const g=f[p],m=a[g.materialIndex],v=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=v,C=x;y<C;y+=3){const A=y,w=y+1,D=y+2;i=Qa(this,m,e,n,c,h,u,A,w,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=p,m=_;g<m;g+=3){const v=g,x=g+1,y=g+2;i=Qa(this,a,e,n,c,h,u,v,x,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function g_(s,e,t,n,i,r,a,o){let l;if(e.side===Wt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===Mi,o),l===null)return null;Ka.copy(o),Ka.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ka);return c<t.near||c>t.far?null:{distance:c,point:Ka.clone(),object:s}}function Qa(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,Ws),s.getVertexPosition(l,Xs),s.getVertexPosition(c,$s);const h=g_(s,e,t,n,Ws,Xs,$s,ja);if(h){i&&(qa.fromBufferAttribute(i,o),Za.fromBufferAttribute(i,l),Ja.fromBufferAttribute(i,c),h.uv=wn.getInterpolation(ja,Ws,Xs,$s,qa,Za,Ja,new J)),r&&(qa.fromBufferAttribute(r,o),Za.fromBufferAttribute(r,l),Ja.fromBufferAttribute(r,c),h.uv1=wn.getInterpolation(ja,Ws,Xs,$s,qa,Za,Ja,new J)),a&&(rf.fromBufferAttribute(a,o),af.fromBufferAttribute(a,l),of.fromBufferAttribute(a,c),h.normal=wn.getInterpolation(ja,Ws,Xs,$s,rf,af,of,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new R,materialIndex:0};wn.getNormal(Ws,Xs,$s,u.normal),h.face=u}return h}class Gi extends nt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,r,4),p("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ne(c,3)),this.setAttribute("normal",new Ne(h,3)),this.setAttribute("uv",new Ne(u,2));function p(_,g,m,v,x,y,C,A,w,D,T){const M=y/w,I=C/D,k=y/2,O=C/2,Y=A/2,j=w+1,W=D+1;let F=0,$=0;const ge=new R;for(let be=0;be<W;be++){const we=be*I-O;for(let Ze=0;Ze<j;Ze++){const st=Ze*M-k;ge[_]=st*v,ge[g]=we*x,ge[m]=Y,c.push(ge.x,ge.y,ge.z),ge[_]=0,ge[g]=0,ge[m]=A>0?1:-1,h.push(ge.x,ge.y,ge.z),u.push(Ze/w),u.push(1-be/D),F+=1}}for(let be=0;be<D;be++)for(let we=0;we<w;we++){const Ze=f+we+j*be,st=f+we+j*(be+1),Q=f+(we+1)+j*(be+1),le=f+(we+1)+j*be;l.push(Ze,st,le),l.push(st,Q,le),$+=6}o.addGroup(d,$,T),d+=$,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function mr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function cn(s){const e={};for(let t=0;t<s.length;t++){const n=mr(s[t]);for(const i in n)e[i]=n[i]}return e}function __(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function mm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Ol={clone:mr,merge:cn};var v_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=v_,this.fragmentShader=x_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mr(e.uniforms),this.uniformsGroups=__(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Aa extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new R,lf=new J,cf=new J;class qt extends Aa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pr*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,lf,cf),t.subVectors(cf,lf)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ys=-90,qs=1;class ih extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new qt(Ys,qs,e,t);i.layers=this.layers,this.add(i);const r=new qt(Ys,qs,e,t);r.layers=this.layers,this.add(r);const a=new qt(Ys,qs,e,t);a.layers=this.layers,this.add(a);const o=new qt(Ys,qs,e,t);o.layers=this.layers,this.add(o);const l=new qt(Ys,qs,e,t);l.layers=this.layers,this.add(l);const c=new qt(Ys,qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Ea extends Et{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:bi,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sh extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ea(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:kt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Gi(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:gi});r.uniforms.tEquirect.value=t;const a=new wt(i,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=kt),new ih(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Nc=new R,y_=new R,M_=new et;class hi{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Nc.subVectors(n,t).cross(y_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Nc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||M_.getNormalMatrix(e),i=this.coplanarPoint(Nc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new sn,eo=new R;class Ca{constructor(e=new hi,t=new hi,n=new hi,i=new hi,r=new hi,a=new hi){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],p=i[9],_=i[10],g=i[11],m=i[12],v=i[13],x=i[14],y=i[15];if(n[0].setComponents(l-r,f-c,g-d,y-m).normalize(),n[1].setComponents(l+r,f+c,g+d,y+m).normalize(),n[2].setComponents(l+a,f+h,g+p,y+v).normalize(),n[3].setComponents(l-a,f-h,g-p,y-v).normalize(),n[4].setComponents(l-o,f-u,g-_,y-x).normalize(),t===Kn)n[5].setComponents(l+o,f+u,g+_,y+x).normalize();else if(t===ca)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(eo.x=i.normal.x>0?e.max.x:e.min.x,eo.y=i.normal.y>0?e.max.y:e.min.y,eo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(eo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gm(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function b_(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,f=l.updateRanges;if(s.bindBuffer(c,o),u.count===-1&&f.length===0&&s.bufferSubData(c,0,h),f.length!==0){for(let d=0,p=f.length;d<p;d++){const _=f[d];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class Wi extends nt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,f=t/l,d=[],p=[],_=[],g=[];for(let m=0;m<h;m++){const v=m*f-a;for(let x=0;x<c;x++){const y=x*u-r;p.push(y,-v,0),_.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const x=v+c*m,y=v+c*(m+1),C=v+1+c*(m+1),A=v+1+c*m;d.push(x,y,A),d.push(y,C,A)}this.setIndex(d),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.widthSegments,e.heightSegments)}}var S_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,C_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,D_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,L_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,N_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,O_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Z_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,J_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Q_="gl_FragColor = linearToOutputTexel( gl_FragColor );",ev=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,av=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ov=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_v=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Av=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ov=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Vv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Zv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ox=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_x=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Rx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Px=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ix=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ox=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Vx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$x=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ey=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:S_,alphahash_pars_fragment:w_,alphamap_fragment:T_,alphamap_pars_fragment:A_,alphatest_fragment:E_,alphatest_pars_fragment:C_,aomap_fragment:R_,aomap_pars_fragment:P_,batching_pars_vertex:I_,batching_vertex:D_,begin_vertex:L_,beginnormal_vertex:N_,bsdfs:U_,iridescence_fragment:O_,bumpmap_pars_fragment:F_,clipping_planes_fragment:k_,clipping_planes_pars_fragment:z_,clipping_planes_pars_vertex:B_,clipping_planes_vertex:V_,color_fragment:H_,color_pars_fragment:G_,color_pars_vertex:W_,color_vertex:X_,common:$_,cube_uv_reflection_fragment:Y_,defaultnormal_vertex:q_,displacementmap_pars_vertex:Z_,displacementmap_vertex:J_,emissivemap_fragment:j_,emissivemap_pars_fragment:K_,colorspace_fragment:Q_,colorspace_pars_fragment:ev,envmap_fragment:tv,envmap_common_pars_fragment:nv,envmap_pars_fragment:iv,envmap_pars_vertex:sv,envmap_physical_pars_fragment:mv,envmap_vertex:rv,fog_vertex:av,fog_pars_vertex:ov,fog_fragment:lv,fog_pars_fragment:cv,gradientmap_pars_fragment:uv,lightmap_pars_fragment:hv,lights_lambert_fragment:fv,lights_lambert_pars_fragment:dv,lights_pars_begin:pv,lights_toon_fragment:gv,lights_toon_pars_fragment:_v,lights_phong_fragment:vv,lights_phong_pars_fragment:xv,lights_physical_fragment:yv,lights_physical_pars_fragment:Mv,lights_fragment_begin:bv,lights_fragment_maps:Sv,lights_fragment_end:wv,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:Av,logdepthbuf_pars_vertex:Ev,logdepthbuf_vertex:Cv,map_fragment:Rv,map_pars_fragment:Pv,map_particle_fragment:Iv,map_particle_pars_fragment:Dv,metalnessmap_fragment:Lv,metalnessmap_pars_fragment:Nv,morphinstance_vertex:Uv,morphcolor_vertex:Ov,morphnormal_vertex:Fv,morphtarget_pars_vertex:kv,morphtarget_vertex:zv,normal_fragment_begin:Bv,normal_fragment_maps:Vv,normal_pars_fragment:Hv,normal_pars_vertex:Gv,normal_vertex:Wv,normalmap_pars_fragment:Xv,clearcoat_normal_fragment_begin:$v,clearcoat_normal_fragment_maps:Yv,clearcoat_pars_fragment:qv,iridescence_pars_fragment:Zv,opaque_fragment:Jv,packing:jv,premultiplied_alpha_fragment:Kv,project_vertex:Qv,dithering_fragment:ex,dithering_pars_fragment:tx,roughnessmap_fragment:nx,roughnessmap_pars_fragment:ix,shadowmap_pars_fragment:sx,shadowmap_pars_vertex:rx,shadowmap_vertex:ax,shadowmask_pars_fragment:ox,skinbase_vertex:lx,skinning_pars_vertex:cx,skinning_vertex:ux,skinnormal_vertex:hx,specularmap_fragment:fx,specularmap_pars_fragment:dx,tonemapping_fragment:px,tonemapping_pars_fragment:mx,transmission_fragment:gx,transmission_pars_fragment:_x,uv_pars_fragment:vx,uv_pars_vertex:xx,uv_vertex:yx,worldpos_vertex:Mx,background_vert:bx,background_frag:Sx,backgroundCube_vert:wx,backgroundCube_frag:Tx,cube_vert:Ax,cube_frag:Ex,depth_vert:Cx,depth_frag:Rx,distanceRGBA_vert:Px,distanceRGBA_frag:Ix,equirect_vert:Dx,equirect_frag:Lx,linedashed_vert:Nx,linedashed_frag:Ux,meshbasic_vert:Ox,meshbasic_frag:Fx,meshlambert_vert:kx,meshlambert_frag:zx,meshmatcap_vert:Bx,meshmatcap_frag:Vx,meshnormal_vert:Hx,meshnormal_frag:Gx,meshphong_vert:Wx,meshphong_frag:Xx,meshphysical_vert:$x,meshphysical_frag:Yx,meshtoon_vert:qx,meshtoon_frag:Zx,points_vert:Jx,points_frag:jx,shadow_vert:Kx,shadow_frag:Qx,sprite_vert:ey,sprite_frag:ty},Se={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new J(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new J(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},kn={basic:{uniforms:cn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:cn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:cn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:cn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:cn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:cn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:cn([Se.points,Se.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:cn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:cn([Se.common,Se.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:cn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:cn([Se.sprite,Se.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:cn([Se.common,Se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:cn([Se.lights,Se.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};kn.physical={uniforms:cn([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new J(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new J},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new J},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const to={r:0,b:0,g:0},Ki=new Cn,ny=new He;function iy(s,e,t,n,i,r,a){const o=new Re(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const y=p(v);y===null?m(o,l):y&&y.isColor&&(m(y,1),x=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,x){const y=p(x);y&&(y.isCubeTexture||y.mapping===Mr)?(h===void 0&&(h=new wt(new Gi(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:mr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ki.copy(x.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ny.makeRotationFromEuler(Ki)),h.material.toneMapped=ut.getTransfer(y.colorSpace)!==Mt,(u!==y||f!==y.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new wt(new Wi(2,2),new Rn({name:"BackgroundMaterial",uniforms:mr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ut.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,x){v.getRGB(to,mm(s)),n.buffers.color.setClear(to.r,to.g,to.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(o,l)},render:_,addToRenderList:g}}function sy(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(M,I,k,O,Y){let j=!1;const W=u(O,k,I);r!==W&&(r=W,c(r.object)),j=d(M,O,k,Y),j&&p(M,O,k,Y),Y!==null&&e.update(Y,s.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,y(M,I,k,O),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,I,k){const O=k.wireframe===!0;let Y=n[M.id];Y===void 0&&(Y={},n[M.id]=Y);let j=Y[I.id];j===void 0&&(j={},Y[I.id]=j);let W=j[O];return W===void 0&&(W=f(l()),j[O]=W),W}function f(M){const I=[],k=[],O=[];for(let Y=0;Y<t;Y++)I[Y]=0,k[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:O,object:M,attributes:{},index:null}}function d(M,I,k,O){const Y=r.attributes,j=I.attributes;let W=0;const F=k.getAttributes();for(const $ in F)if(F[$].location>=0){const be=Y[$];let we=j[$];if(we===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),be===void 0||be.attribute!==we||we&&be.data!==we.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function p(M,I,k,O){const Y={},j=I.attributes;let W=0;const F=k.getAttributes();for(const $ in F)if(F[$].location>=0){let be=j[$];be===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(be=M.instanceColor));const we={};we.attribute=be,be&&be.data&&(we.data=be.data),Y[$]=we,W++}r.attributes=Y,r.attributesNum=W,r.index=O}function _(){const M=r.newAttributes;for(let I=0,k=M.length;I<k;I++)M[I]=0}function g(M){m(M,0)}function m(M,I){const k=r.newAttributes,O=r.enabledAttributes,Y=r.attributeDivisors;k[M]=1,O[M]===0&&(s.enableVertexAttribArray(M),O[M]=1),Y[M]!==I&&(s.vertexAttribDivisor(M,I),Y[M]=I)}function v(){const M=r.newAttributes,I=r.enabledAttributes;for(let k=0,O=I.length;k<O;k++)I[k]!==M[k]&&(s.disableVertexAttribArray(k),I[k]=0)}function x(M,I,k,O,Y,j,W){W===!0?s.vertexAttribIPointer(M,I,k,Y,j):s.vertexAttribPointer(M,I,k,O,Y,j)}function y(M,I,k,O){_();const Y=O.attributes,j=k.getAttributes(),W=I.defaultAttributeValues;for(const F in j){const $=j[F];if($.location>=0){let ge=Y[F];if(ge===void 0&&(F==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),F==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ge!==void 0){const be=ge.normalized,we=ge.itemSize,Ze=e.get(ge);if(Ze===void 0)continue;const st=Ze.buffer,Q=Ze.type,le=Ze.bytesPerElement,Ee=Q===s.INT||Q===s.UNSIGNED_INT||ge.gpuType===Al;if(ge.isInterleavedBufferAttribute){const re=ge.data,ze=re.stride,Xe=ge.offset;if(re.isInstancedInterleavedBuffer){for(let Ve=0;Ve<$.locationSize;Ve++)m($.location+Ve,re.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ve=0;Ve<$.locationSize;Ve++)g($.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,st);for(let Ve=0;Ve<$.locationSize;Ve++)x($.location+Ve,we/$.locationSize,Q,be,ze*le,(Xe+we/$.locationSize*Ve)*le,Ee)}else{if(ge.isInstancedBufferAttribute){for(let re=0;re<$.locationSize;re++)m($.location+re,ge.meshPerAttribute);M.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let re=0;re<$.locationSize;re++)g($.location+re);s.bindBuffer(s.ARRAY_BUFFER,st);for(let re=0;re<$.locationSize;re++)x($.location+re,we/$.locationSize,Q,be,we*le,we/$.locationSize*re*le,Ee)}}else if(W!==void 0){const be=W[F];if(be!==void 0)switch(be.length){case 2:s.vertexAttrib2fv($.location,be);break;case 3:s.vertexAttrib3fv($.location,be);break;case 4:s.vertexAttrib4fv($.location,be);break;default:s.vertexAttrib1fv($.location,be)}}}}v()}function C(){D();for(const M in n){const I=n[M];for(const k in I){const O=I[k];for(const Y in O)h(O[Y].object),delete O[Y];delete I[k]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const k in I){const O=I[k];for(const Y in O)h(O[Y].object),delete O[Y];delete I[k]}delete n[M.id]}function w(M){for(const I in n){const k=n[I];if(k[M.id]===void 0)continue;const O=k[M.id];for(const Y in O)h(O[Y].object),delete O[Y];delete k[M.id]}}function D(){T(),a=!0,r!==i&&(r=i,c(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:v}}function ry(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)a(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];for(let _=0;_<f.length;_++)t.update(p,n,f[_])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ay(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Gt&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const w=A===Es&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ei&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ht&&!w)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),y=d>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:y,maxSamples:C}}function oy(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new hi,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{const v=r?0:n,x=v*4;let y=m.clippingState||null;l.value=y,y=h(p,f,x,d);for(let C=0;C!==x;++C)y[C]=t[C];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,p){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,p!==!0||g===null){const m=d+_*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,y=d;x!==_;++x,y+=4)a.copy(u[x]).applyMatrix4(v,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function ly(s){let e=new WeakMap;function t(a,o){return o===ea?a.mapping=bi:o===ta&&(a.mapping=zi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ea||o===ta)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new sh(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Fl extends Aa{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sr=4,uf=[.125,.215,.35,.446,.526,.582],hs=20,Uc=new Fl,hf=new Re;let Oc=null,Fc=0,kc=0,zc=!1;const us=(1+Math.sqrt(5))/2,Zs=1/us,ff=[new R(-us,Zs,0),new R(us,Zs,0),new R(-Zs,0,us),new R(Zs,0,us),new R(0,us,-Zs),new R(0,us,Zs),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)];class vu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Oc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oc,Fc,kc),this._renderer.xr.enabled=zc,e.scissorTest=!1,no(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bi||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Es,format:Gt,colorSpace:Ti,depthBuffer:!1},i=df(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=df(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cy(r)),this._blurMaterial=uy(r,e,t)}return i}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Uc)}_sceneToCubeUV(e,t,n,i){const o=new qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(hf),h.toneMapping=_i,h.autoClear=!1;const d=new ni({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),p=new wt(new Gi,d);let _=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,_=!0):(d.color.copy(hf),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):v===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;no(i,v*x,m>2?x:0,x,x),h.setRenderTarget(i),_&&h.render(p,o),h.render(e,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===bi||e.mapping===zi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pf());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;no(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Uc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ff[(i-r-1)%ff.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new wt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*hs-1),_=r/p,g=isFinite(r)?1+Math.floor(h*_):hs;g>hs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${hs}`);const m=[];let v=0;for(let w=0;w<hs;++w){const D=w/_,T=Math.exp(-D*D/2);m.push(T),w===0?v+=T:w<g&&(v+=2*T)}for(let w=0;w<m.length;w++)m[w]=m[w]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=p,f.mipInt.value=x-n;const y=this._sizeLods[i],C=3*y*(i>x-sr?i-x+sr:0),A=4*(this._cubeSize-y);no(t,C,A,3*y,2*y),l.setRenderTarget(t),l.render(u,Uc)}}function cy(s){const e=[],t=[],n=[];let i=s;const r=s-sr+1+uf.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-sr?l=uf[a-s+sr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,_=3,g=2,m=1,v=new Float32Array(_*p*d),x=new Float32Array(g*p*d),y=new Float32Array(m*p*d);for(let A=0;A<d;A++){const w=A%3*2/3-1,D=A>2?0:-1,T=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];v.set(T,_*p*A),x.set(f,g*p*A);const M=[A,A,A,A,A,A];y.set(M,m*p*A)}const C=new nt;C.setAttribute("position",new ot(v,_)),C.setAttribute("uv",new ot(x,g)),C.setAttribute("faceIndex",new ot(y,m)),e.push(C),i>sr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function df(s,e,t){const n=new Bn(s,e,t);return n.texture.mapping=Mr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function uy(s,e,t){const n=new Float32Array(hs),i=new R(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function pf(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function mf(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gi,depthTest:!1,depthWrite:!1})}function rh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function hy(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===ea||l===ta,h=l===bi||l===zi;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new vu(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new vu(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function fy(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&cr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function dy(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);for(const p in f.morphAttributes){const _=f.morphAttributes[p];for(let g=0,m=_.length;g<m;g++)e.remove(_[g])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const p in d){const _=d[p];for(let g=0,m=_.length;g<m;g++)e.update(_[g],s.ARRAY_BUFFER)}}function c(u){const f=[],d=u.index,p=u.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let x=0,y=v.length;x<y;x+=3){const C=v[x+0],A=v[x+1],w=v[x+2];f.push(C,A,A,w,w,C)}}else if(p!==void 0){const v=p.array;_=p.version;for(let x=0,y=v.length/3-1;x<y;x+=3){const C=x+0,A=x+1,w=x+2;f.push(C,A,A,w,w,C)}}else return;const g=new(um(f)?nh:th)(f,1);g.version=_;const m=r.get(u);m&&e.remove(m),r.set(u,g)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function py(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function c(f,d,p){p!==0&&(s.drawElementsInstanced(n,d,r,f*a,p),t.update(d,n,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,n,1)}function u(f,d,p,_){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/a,d[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,p);let m=0;for(let v=0;v<p;v++)m+=d[v];for(let v=0;v<_.length;v++)t.update(m,n,_[v])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function my(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function gy(s,e,t){const n=new WeakMap,i=new dt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var d=M;f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let C=o.attributes.position.count*y,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*A*4*u),D=new Nl(w,C,A,u);D.type=Ht,D.needsUpdate=!0;const T=y*4;for(let I=0;I<u;I++){const k=m[I],O=v[I],Y=x[I],j=C*A*4*I;for(let W=0;W<k.count;W++){const F=W*T;p===!0&&(i.fromBufferAttribute(k,W),w[j+F+0]=i.x,w[j+F+1]=i.y,w[j+F+2]=i.z,w[j+F+3]=0),_===!0&&(i.fromBufferAttribute(O,W),w[j+F+4]=i.x,w[j+F+5]=i.y,w[j+F+6]=i.z,w[j+F+7]=0),g===!0&&(i.fromBufferAttribute(Y,W),w[j+F+8]=i.x,w[j+F+9]=i.y,w[j+F+10]=i.z,w[j+F+11]=Y.itemSize===4?i.w:1)}}f={count:u,texture:D,size:new J(C,A)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const _=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function _y(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class ah extends Et{constructor(e,t,n,i,r,a,o,l,c,h=vs){if(h!==vs&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===vs&&(n=Si),n===void 0&&h===bs&&(n=Ms),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:it,this.minFilter=l!==void 0?l:it,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _m=new Et,gf=new ah(1,1),vm=new Nl,xm=new eh,ym=new Ea,_f=[],vf=[],xf=new Float32Array(16),yf=new Float32Array(9),Mf=new Float32Array(4);function br(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=_f[i];if(r===void 0&&(r=new Float32Array(i),_f[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Xt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function $t(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function kl(s,e){let t=vf[e];t===void 0&&(t=new Int32Array(e),vf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function vy(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function xy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2fv(this.addr,e),$t(t,e)}}function yy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;s.uniform3fv(this.addr,e),$t(t,e)}}function My(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4fv(this.addr,e),$t(t,e)}}function by(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;Mf.set(n),s.uniformMatrix2fv(this.addr,!1,Mf),$t(t,n)}}function Sy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;yf.set(n),s.uniformMatrix3fv(this.addr,!1,yf),$t(t,n)}}function wy(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Xt(t,n))return;xf.set(n),s.uniformMatrix4fv(this.addr,!1,xf),$t(t,n)}}function Ty(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Ay(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2iv(this.addr,e),$t(t,e)}}function Ey(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3iv(this.addr,e),$t(t,e)}}function Cy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4iv(this.addr,e),$t(t,e)}}function Ry(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Py(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;s.uniform2uiv(this.addr,e),$t(t,e)}}function Iy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;s.uniform3uiv(this.addr,e),$t(t,e)}}function Dy(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;s.uniform4uiv(this.addr,e),$t(t,e)}}function Ly(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(gf.compareFunction=Ku,r=gf):r=_m,t.setTexture2D(e||r,i)}function Ny(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||xm,i)}function Uy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ym,i)}function Oy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||vm,i)}function Fy(s){switch(s){case 5126:return vy;case 35664:return xy;case 35665:return yy;case 35666:return My;case 35674:return by;case 35675:return Sy;case 35676:return wy;case 5124:case 35670:return Ty;case 35667:case 35671:return Ay;case 35668:case 35672:return Ey;case 35669:case 35673:return Cy;case 5125:return Ry;case 36294:return Py;case 36295:return Iy;case 36296:return Dy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Ny;case 35680:case 36300:case 36308:case 36293:return Uy;case 36289:case 36303:case 36311:case 36292:return Oy}}function ky(s,e){s.uniform1fv(this.addr,e)}function zy(s,e){const t=br(e,this.size,2);s.uniform2fv(this.addr,t)}function By(s,e){const t=br(e,this.size,3);s.uniform3fv(this.addr,t)}function Vy(s,e){const t=br(e,this.size,4);s.uniform4fv(this.addr,t)}function Hy(s,e){const t=br(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Gy(s,e){const t=br(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Wy(s,e){const t=br(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Xy(s,e){s.uniform1iv(this.addr,e)}function $y(s,e){s.uniform2iv(this.addr,e)}function Yy(s,e){s.uniform3iv(this.addr,e)}function qy(s,e){s.uniform4iv(this.addr,e)}function Zy(s,e){s.uniform1uiv(this.addr,e)}function Jy(s,e){s.uniform2uiv(this.addr,e)}function jy(s,e){s.uniform3uiv(this.addr,e)}function Ky(s,e){s.uniform4uiv(this.addr,e)}function Qy(s,e,t){const n=this.cache,i=e.length,r=kl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||_m,r[a])}function e1(s,e,t){const n=this.cache,i=e.length,r=kl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||xm,r[a])}function t1(s,e,t){const n=this.cache,i=e.length,r=kl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||ym,r[a])}function n1(s,e,t){const n=this.cache,i=e.length,r=kl(t,i);Xt(n,r)||(s.uniform1iv(this.addr,r),$t(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||vm,r[a])}function i1(s){switch(s){case 5126:return ky;case 35664:return zy;case 35665:return By;case 35666:return Vy;case 35674:return Hy;case 35675:return Gy;case 35676:return Wy;case 5124:case 35670:return Xy;case 35667:case 35671:return $y;case 35668:case 35672:return Yy;case 35669:case 35673:return qy;case 5125:return Zy;case 36294:return Jy;case 36295:return jy;case 36296:return Ky;case 35678:case 36198:case 36298:case 36306:case 35682:return Qy;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}class s1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fy(t.type)}}class r1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i1(t.type)}}class a1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function bf(s,e){s.seq.push(e),s.map[e.id]=e}function o1(s,e,t){const n=s.name,i=n.length;for(Bc.lastIndex=0;;){const r=Bc.exec(n),a=Bc.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){bf(t,c===void 0?new s1(o,s,e):new r1(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new a1(o),bf(t,u)),t=u}}}class Uo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);o1(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Sf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const l1=37297;let c1=0;function u1(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function h1(s){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(s);let n;switch(e===t?n="":e===oa&&t===aa?n="LinearDisplayP3ToLinearSRGB":e===aa&&t===oa&&(n="LinearSRGBToLinearDisplayP3"),s){case Ti:case Ta:return[n,"LinearTransferOETF"];case un:case Ll:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function wf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+u1(s.getShaderSource(e),a)}else return i}function f1(s,e){const t=h1(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function d1(s,e){let t;switch(e){case Xp:t="Linear";break;case $p:t="Reinhard";break;case Yp:t="OptimizedCineon";break;case zu:t="ACESFilmic";break;case Zp:t="AgX";break;case Jp:t="Neutral";break;case qp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const io=new R;function p1(){ut.getLuminanceCoefficients(io);const s=io.x.toFixed(4),e=io.y.toFixed(4),t=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hr).join(`
`)}function g1(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _1(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Hr(s){return s!==""}function Tf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Af(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(s){return s.replace(v1,y1)}const x1=new Map;function y1(s,e){let t=Ge[e];if(t===void 0){const n=x1.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xu(t)}const M1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ef(s){return s.replace(M1,b1)}function b1(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Cf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ku?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===wl?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function w1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bi:case zi:e="ENVMAP_TYPE_CUBE";break;case Mr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zi:e="ENVMAP_MODE_REFRACTION";break}return e}function A1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Sa:e="ENVMAP_BLENDING_MULTIPLY";break;case Gp:e="ENVMAP_BLENDING_MIX";break;case Wp:e="ENVMAP_BLENDING_ADD";break}return e}function E1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function C1(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=S1(t),c=w1(t),h=T1(t),u=A1(t),f=E1(t),d=m1(t),p=g1(r),_=i.createProgram();let g,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Hr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Hr).join(`
`),m.length>0&&(m+=`
`)):(g=[Cf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hr).join(`
`),m=[Cf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?Ge.tonemapping_pars_fragment:"",t.toneMapping!==_i?d1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,f1("linearToOutputTexel",t.outputColorSpace),p1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hr).join(`
`)),a=xu(a),a=Tf(a,t),a=Af(a,t),o=xu(o),o=Tf(o,t),o=Af(o,t),a=Ef(a),o=Ef(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===_u?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_u?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=v+g+a,y=v+m+o,C=Sf(i,i.VERTEX_SHADER,x),A=Sf(i,i.FRAGMENT_SHADER,y);i.attachShader(_,C),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(I){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(C).trim(),Y=i.getShaderInfoLog(A).trim();let j=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,C,A);else{const F=wf(i,C,"vertex"),$=wf(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+F+`
`+$)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||Y==="")&&(W=!1);W&&(I.diagnostics={runnable:j,programLog:k,vertexShader:{log:O,prefix:g},fragmentShader:{log:Y,prefix:m}})}i.deleteShader(C),i.deleteShader(A),D=new Uo(i,_),T=_1(i,_)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,l1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=c1++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=A,this}let R1=0;class P1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new I1(e),t.set(e,n)),n}}class I1{constructor(e){this.id=R1++,this.code=e,this.usedTimes=0}}function D1(s,e,t,n,i,r,a){const o=new Ul,l=new P1,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function g(T,M,I,k,O){const Y=k.fog,j=O.geometry,W=T.isMeshStandardMaterial?k.environment:null,F=(T.isMeshStandardMaterial?t:e).get(T.envMap||W),$=F&&F.mapping===Mr?F.image.height:null,ge=p[T.type];T.precision!==null&&(d=i.getMaxPrecision(T.precision),d!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",d,"instead."));const be=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,we=be!==void 0?be.length:0;let Ze=0;j.morphAttributes.position!==void 0&&(Ze=1),j.morphAttributes.normal!==void 0&&(Ze=2),j.morphAttributes.color!==void 0&&(Ze=3);let st,Q,le,Ee;if(ge){const lt=kn[ge];st=lt.vertexShader,Q=lt.fragmentShader}else st=T.vertexShader,Q=T.fragmentShader,l.update(T),le=l.getVertexShaderID(T),Ee=l.getFragmentShaderID(T);const re=s.getRenderTarget(),ze=O.isInstancedMesh===!0,Xe=O.isBatchedMesh===!0,Ve=!!T.map,rt=!!T.matcap,P=!!F,he=!!T.aoMap,se=!!T.lightMap,_e=!!T.bumpMap,ee=!!T.normalMap,Fe=!!T.displacementMap,ve=!!T.emissiveMap,Te=!!T.metalnessMap,L=!!T.roughnessMap,S=T.anisotropy>0,B=T.clearcoat>0,ie=T.dispersion>0,te=T.iridescence>0,ne=T.sheen>0,De=T.transmission>0,pe=S&&!!T.anisotropyMap,K=B&&!!T.clearcoatMap,de=B&&!!T.clearcoatNormalMap,fe=B&&!!T.clearcoatRoughnessMap,Ae=te&&!!T.iridescenceMap,at=te&&!!T.iridescenceThicknessMap,$e=ne&&!!T.sheenColorMap,Pe=ne&&!!T.sheenRoughnessMap,Je=!!T.specularMap,Qe=!!T.specularColorMap,bt=!!T.specularIntensityMap,b=De&&!!T.transmissionMap,z=De&&!!T.thicknessMap,V=!!T.gradientMap,q=!!T.alphaMap,ce=T.alphaTest>0,ke=!!T.alphaHash,je=!!T.extensions;let Lt=_i;T.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Lt=s.toneMapping);const zt={shaderID:ge,shaderType:T.type,shaderName:T.name,vertexShader:st,fragmentShader:Q,defines:T.defines,customVertexShaderID:le,customFragmentShaderID:Ee,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:d,batching:Xe,batchingColor:Xe&&O._colorsTexture!==null,instancing:ze,instancingColor:ze&&O.instanceColor!==null,instancingMorph:ze&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:re===null?s.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Ti,alphaToCoverage:!!T.alphaToCoverage,map:Ve,matcap:rt,envMap:P,envMapMode:P&&F.mapping,envMapCubeUVHeight:$,aoMap:he,lightMap:se,bumpMap:_e,normalMap:ee,displacementMap:f&&Fe,emissiveMap:ve,normalMapObjectSpace:ee&&T.normalMapType===nm,normalMapTangentSpace:ee&&T.normalMapType===Hi,metalnessMap:Te,roughnessMap:L,anisotropy:S,anisotropyMap:pe,clearcoat:B,clearcoatMap:K,clearcoatNormalMap:de,clearcoatRoughnessMap:fe,dispersion:ie,iridescence:te,iridescenceMap:Ae,iridescenceThicknessMap:at,sheen:ne,sheenColorMap:$e,sheenRoughnessMap:Pe,specularMap:Je,specularColorMap:Qe,specularIntensityMap:bt,transmission:De,transmissionMap:b,thicknessMap:z,gradientMap:V,opaque:T.transparent===!1&&T.blending===_s&&T.alphaToCoverage===!1,alphaMap:q,alphaTest:ce,alphaHash:ke,combine:T.combine,mapUv:Ve&&_(T.map.channel),aoMapUv:he&&_(T.aoMap.channel),lightMapUv:se&&_(T.lightMap.channel),bumpMapUv:_e&&_(T.bumpMap.channel),normalMapUv:ee&&_(T.normalMap.channel),displacementMapUv:Fe&&_(T.displacementMap.channel),emissiveMapUv:ve&&_(T.emissiveMap.channel),metalnessMapUv:Te&&_(T.metalnessMap.channel),roughnessMapUv:L&&_(T.roughnessMap.channel),anisotropyMapUv:pe&&_(T.anisotropyMap.channel),clearcoatMapUv:K&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:at&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(T.sheenRoughnessMap.channel),specularMapUv:Je&&_(T.specularMap.channel),specularColorMapUv:Qe&&_(T.specularColorMap.channel),specularIntensityMapUv:bt&&_(T.specularIntensityMap.channel),transmissionMapUv:b&&_(T.transmissionMap.channel),thicknessMapUv:z&&_(T.thicknessMap.channel),alphaMapUv:q&&_(T.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ee||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!j.attributes.uv&&(Ve||q),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:O.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ze,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Ve&&T.map.isVideoTexture===!0&&ut.getTransfer(T.map.colorSpace)===Mt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===$n,flipSided:T.side===Wt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:je&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&T.extensions.multiDraw===!0||Xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return zt.vertexUv1s=c.has(1),zt.vertexUv2s=c.has(2),zt.vertexUv3s=c.has(3),c.clear(),zt}function m(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)M.push(I),M.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(v(M,T),x(M,T),M.push(s.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function v(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function x(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),T.push(o.mask)}function y(T){const M=p[T.type];let I;if(M){const k=kn[M];I=Ol.clone(k.uniforms)}else I=T.uniforms;return I}function C(T,M){let I;for(let k=0,O=h.length;k<O;k++){const Y=h[k];if(Y.cacheKey===M){I=Y,++I.usedTimes;break}}return I===void 0&&(I=new C1(s,M,T,r),h.push(I)),I}function A(T){if(--T.usedTimes===0){const M=h.indexOf(T);h[M]=h[h.length-1],h.pop(),T.destroy()}}function w(T){l.remove(T)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:D}}function L1(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function N1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Rf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Pf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,p,_,g){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:_,group:g},s[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=_,m.group=g),e++,m}function o(u,f,d,p,_,g){const m=a(u,f,d,p,_,g);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(u,f,d,p,_,g){const m=a(u,f,d,p,_,g);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||N1),n.length>1&&n.sort(f||Rf),i.length>1&&i.sort(f||Rf)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function U1(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Pf,s.set(n,[a])):i>=r.length?(a=new Pf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function O1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Re};break;case"SpotLight":t={position:new R,direction:new R,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function F1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new J,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let k1=0;function z1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function B1(s){const e=new O1,t=F1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);const i=new R,r=new He,a=new He;function o(c){let h=0,u=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,p=0,_=0,g=0,m=0,v=0,x=0,y=0,C=0,A=0,w=0;c.sort(z1);for(let T=0,M=c.length;T<M;T++){const I=c[T],k=I.color,O=I.intensity,Y=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*O,u+=k.g*O,f+=k.b*O;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],O);w++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const F=I.shadow,$=t.get(I);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,n.directionalShadow[d]=$,n.directionalShadowMap[d]=j,n.directionalShadowMatrix[d]=I.shadow.matrix,v++}n.directional[d]=W,d++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(k).multiplyScalar(O),W.distance=Y,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[_]=W;const F=I.shadow;if(I.map&&(n.spotLightMap[C]=I.map,C++,F.updateMatrices(I),I.castShadow&&A++),n.spotLightMatrix[_]=F.matrix,I.castShadow){const $=t.get(I);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=j,y++}_++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(k).multiplyScalar(O),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[g]=W,g++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const F=I.shadow,$=t.get(I);$.shadowIntensity=F.intensity,$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,$.shadowCameraNear=F.camera.near,$.shadowCameraFar=F.camera.far,n.pointShadow[p]=$,n.pointShadowMap[p]=j,n.pointShadowMatrix[p]=I.shadow.matrix,x++}n.point[p]=W,p++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(O),W.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[m]=W,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==d||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==g||D.hemiLength!==m||D.numDirectionalShadows!==v||D.numPointShadows!==x||D.numSpotShadows!==y||D.numSpotMaps!==C||D.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=y+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,D.directionalLength=d,D.pointLength=p,D.spotLength=_,D.rectAreaLength=g,D.hemiLength=m,D.numDirectionalShadows=v,D.numPointShadows=x,D.numSpotShadows=y,D.numSpotMaps=C,D.numLightProbes=w,n.version=k1++)}function l(c,h){let u=0,f=0,d=0,p=0,_=0;const g=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const x=c[m];if(x.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(x.isSpotLight){const y=n.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:n}}function If(s){const e=new B1(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function V1(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new If(s),e.set(i,[o])):r>=a.length?(o=new If(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class zl extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Bl extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function W1(s,e,t){let n=new Ca;const i=new J,r=new J,a=new dt,o=new zl({depthPacking:ju}),l=new Bl,c={},h=t.maxTextureSize,u={[Mi]:Wt,[Wt]:Mi,[$n]:$n},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new J},radius:{value:4}},vertexShader:H1,fragmentShader:G1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new nt;p.setAttribute("position",new ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wt(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let m=this.type;this.render=function(A,w,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;const T=s.getRenderTarget(),M=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),k=s.state;k.setBlending(gi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=m!==jn&&this.type===jn,Y=m===jn&&this.type!==jn;for(let j=0,W=A.length;j<W;j++){const F=A[j],$=F.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const ge=$.getFrameExtents();if(i.multiply(ge),r.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ge.x),i.x=r.x*ge.x,$.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ge.y),i.y=r.y*ge.y,$.mapSize.y=r.y)),$.map===null||O===!0||Y===!0){const we=this.type!==jn?{minFilter:it,magFilter:it}:{};$.map!==null&&$.map.dispose(),$.map=new Bn(i.x,i.y,we),$.map.texture.name=F.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const be=$.getViewportCount();for(let we=0;we<be;we++){const Ze=$.getViewport(we);a.set(r.x*Ze.x,r.y*Ze.y,r.x*Ze.z,r.y*Ze.w),k.viewport(a),$.updateMatrices(F,we),n=$.getFrustum(),y(w,D,$.camera,F,this.type)}$.isPointLightShadow!==!0&&this.type===jn&&v($,D),$.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(T,M,I)};function v(A,w){const D=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Bn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(w,null,D,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(w,null,D,d,_,null)}function x(A,w,D,T){let M=null;const I=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)M=I;else if(M=D.isPointLight===!0?l:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const k=M.uuid,O=w.uuid;let Y=c[k];Y===void 0&&(Y={},c[k]=Y);let j=Y[O];j===void 0&&(j=M.clone(),Y[O]=j,w.addEventListener("dispose",C)),M=j}if(M.visible=w.visible,M.wireframe=w.wireframe,T===jn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:u[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=s.properties.get(M);k.light=D}return M}function y(A,w,D,T,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===jn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const O=e.update(A),Y=A.material;if(Array.isArray(Y)){const j=O.groups;for(let W=0,F=j.length;W<F;W++){const $=j[W],ge=Y[$.materialIndex];if(ge&&ge.visible){const be=x(A,ge,T,M);A.onBeforeShadow(s,A,w,D,O,be,$),s.renderBufferDirect(D,null,O,be,A,$),A.onAfterShadow(s,A,w,D,O,be,$)}}}else if(Y.visible){const j=x(A,Y,T,M);A.onBeforeShadow(s,A,w,D,O,j,null),s.renderBufferDirect(D,null,O,j,A,null),A.onAfterShadow(s,A,w,D,O,j,null)}}const k=A.children;for(let O=0,Y=k.length;O<Y;O++)y(k[O],w,D,T,M)}function C(A){A.target.removeEventListener("dispose",C);for(const D in c){const T=c[D],M=A.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}function X1(s){function e(){let b=!1;const z=new dt;let V=null;const q=new dt(0,0,0,0);return{setMask:function(ce){V!==ce&&!b&&(s.colorMask(ce,ce,ce,ce),V=ce)},setLocked:function(ce){b=ce},setClear:function(ce,ke,je,Lt,zt){zt===!0&&(ce*=Lt,ke*=Lt,je*=Lt),z.set(ce,ke,je,Lt),q.equals(z)===!1&&(s.clearColor(ce,ke,je,Lt),q.copy(z))},reset:function(){b=!1,V=null,q.set(-1,0,0,0)}}}function t(){let b=!1,z=null,V=null,q=null;return{setTest:function(ce){ce?Ee(s.DEPTH_TEST):re(s.DEPTH_TEST)},setMask:function(ce){z!==ce&&!b&&(s.depthMask(ce),z=ce)},setFunc:function(ce){if(V!==ce){switch(ce){case Op:s.depthFunc(s.NEVER);break;case Fp:s.depthFunc(s.ALWAYS);break;case kp:s.depthFunc(s.LESS);break;case Qr:s.depthFunc(s.LEQUAL);break;case zp:s.depthFunc(s.EQUAL);break;case Bp:s.depthFunc(s.GEQUAL);break;case Vp:s.depthFunc(s.GREATER);break;case Hp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}V=ce}},setLocked:function(ce){b=ce},setClear:function(ce){q!==ce&&(s.clearDepth(ce),q=ce)},reset:function(){b=!1,z=null,V=null,q=null}}}function n(){let b=!1,z=null,V=null,q=null,ce=null,ke=null,je=null,Lt=null,zt=null;return{setTest:function(lt){b||(lt?Ee(s.STENCIL_TEST):re(s.STENCIL_TEST))},setMask:function(lt){z!==lt&&!b&&(s.stencilMask(lt),z=lt)},setFunc:function(lt,Bt,Ut){(V!==lt||q!==Bt||ce!==Ut)&&(s.stencilFunc(lt,Bt,Ut),V=lt,q=Bt,ce=Ut)},setOp:function(lt,Bt,Ut){(ke!==lt||je!==Bt||Lt!==Ut)&&(s.stencilOp(lt,Bt,Ut),ke=lt,je=Bt,Lt=Ut)},setLocked:function(lt){b=lt},setClear:function(lt){zt!==lt&&(s.clearStencil(lt),zt=lt)},reset:function(){b=!1,z=null,V=null,q=null,ce=null,ke=null,je=null,Lt=null,zt=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],d=null,p=!1,_=null,g=null,m=null,v=null,x=null,y=null,C=null,A=new Re(0,0,0),w=0,D=!1,T=null,M=null,I=null,k=null,O=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,W=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(F)[1]),j=W>=1):F.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),j=W>=2);let $=null,ge={};const be=s.getParameter(s.SCISSOR_BOX),we=s.getParameter(s.VIEWPORT),Ze=new dt().fromArray(be),st=new dt().fromArray(we);function Q(b,z,V,q){const ce=new Uint8Array(4),ke=s.createTexture();s.bindTexture(b,ke),s.texParameteri(b,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(b,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<V;je++)b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY?s.texImage3D(z,0,s.RGBA,1,1,q,0,s.RGBA,s.UNSIGNED_BYTE,ce):s.texImage2D(z+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return ke}const le={};le[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),le[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),le[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Ee(s.DEPTH_TEST),r.setFunc(Qr),_e(!1),ee(hu),Ee(s.CULL_FACE),he(gi);function Ee(b){c[b]!==!0&&(s.enable(b),c[b]=!0)}function re(b){c[b]!==!1&&(s.disable(b),c[b]=!1)}function ze(b,z){return h[b]!==z?(s.bindFramebuffer(b,z),h[b]=z,b===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=z),b===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=z),!0):!1}function Xe(b,z){let V=f,q=!1;if(b){V=u.get(z),V===void 0&&(V=[],u.set(z,V));const ce=b.textures;if(V.length!==ce.length||V[0]!==s.COLOR_ATTACHMENT0){for(let ke=0,je=ce.length;ke<je;ke++)V[ke]=s.COLOR_ATTACHMENT0+ke;V.length=ce.length,q=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,q=!0);q&&s.drawBuffers(V)}function Ve(b){return d!==b?(s.useProgram(b),d=b,!0):!1}const rt={[ki]:s.FUNC_ADD,[xp]:s.FUNC_SUBTRACT,[yp]:s.FUNC_REVERSE_SUBTRACT};rt[Mp]=s.MIN,rt[bp]=s.MAX;const P={[Sp]:s.ZERO,[wp]:s.ONE,[Tp]:s.SRC_COLOR,[Fo]:s.SRC_ALPHA,[Ip]:s.SRC_ALPHA_SATURATE,[Rp]:s.DST_COLOR,[Ep]:s.DST_ALPHA,[Ap]:s.ONE_MINUS_SRC_COLOR,[ko]:s.ONE_MINUS_SRC_ALPHA,[Pp]:s.ONE_MINUS_DST_COLOR,[Cp]:s.ONE_MINUS_DST_ALPHA,[Dp]:s.CONSTANT_COLOR,[Lp]:s.ONE_MINUS_CONSTANT_COLOR,[Np]:s.CONSTANT_ALPHA,[Up]:s.ONE_MINUS_CONSTANT_ALPHA};function he(b,z,V,q,ce,ke,je,Lt,zt,lt){if(b===gi){p===!0&&(re(s.BLEND),p=!1);return}if(p===!1&&(Ee(s.BLEND),p=!0),b!==vp){if(b!==_||lt!==D){if((g!==ki||x!==ki)&&(s.blendEquation(s.FUNC_ADD),g=ki,x=ki),lt)switch(b){case _s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fu:s.blendFunc(s.ONE,s.ONE);break;case du:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case _s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case fu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case du:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case pu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}m=null,v=null,y=null,C=null,A.set(0,0,0),w=0,_=b,D=lt}return}ce=ce||z,ke=ke||V,je=je||q,(z!==g||ce!==x)&&(s.blendEquationSeparate(rt[z],rt[ce]),g=z,x=ce),(V!==m||q!==v||ke!==y||je!==C)&&(s.blendFuncSeparate(P[V],P[q],P[ke],P[je]),m=V,v=q,y=ke,C=je),(Lt.equals(A)===!1||zt!==w)&&(s.blendColor(Lt.r,Lt.g,Lt.b,zt),A.copy(Lt),w=zt),_=b,D=!1}function se(b,z){b.side===$n?re(s.CULL_FACE):Ee(s.CULL_FACE);let V=b.side===Wt;z&&(V=!V),_e(V),b.blending===_s&&b.transparent===!1?he(gi):he(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),r.setFunc(b.depthFunc),r.setTest(b.depthTest),r.setMask(b.depthWrite),i.setMask(b.colorWrite);const q=b.stencilWrite;a.setTest(q),q&&(a.setMask(b.stencilWriteMask),a.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),a.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),ve(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):re(s.SAMPLE_ALPHA_TO_COVERAGE)}function _e(b){T!==b&&(b?s.frontFace(s.CW):s.frontFace(s.CCW),T=b)}function ee(b){b!==gp?(Ee(s.CULL_FACE),b!==M&&(b===hu?s.cullFace(s.BACK):b===_p?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):re(s.CULL_FACE),M=b}function Fe(b){b!==I&&(j&&s.lineWidth(b),I=b)}function ve(b,z,V){b?(Ee(s.POLYGON_OFFSET_FILL),(k!==z||O!==V)&&(s.polygonOffset(z,V),k=z,O=V)):re(s.POLYGON_OFFSET_FILL)}function Te(b){b?Ee(s.SCISSOR_TEST):re(s.SCISSOR_TEST)}function L(b){b===void 0&&(b=s.TEXTURE0+Y-1),$!==b&&(s.activeTexture(b),$=b)}function S(b,z,V){V===void 0&&($===null?V=s.TEXTURE0+Y-1:V=$);let q=ge[V];q===void 0&&(q={type:void 0,texture:void 0},ge[V]=q),(q.type!==b||q.texture!==z)&&($!==V&&(s.activeTexture(V),$=V),s.bindTexture(b,z||le[b]),q.type=b,q.texture=z)}function B(){const b=ge[$];b!==void 0&&b.type!==void 0&&(s.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function ie(){try{s.compressedTexImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ne(){try{s.texSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function De(){try{s.texSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function K(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function de(){try{s.texStorage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function fe(){try{s.texStorage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ae(){try{s.texImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function at(){try{s.texImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function $e(b){Ze.equals(b)===!1&&(s.scissor(b.x,b.y,b.z,b.w),Ze.copy(b))}function Pe(b){st.equals(b)===!1&&(s.viewport(b.x,b.y,b.z,b.w),st.copy(b))}function Je(b,z){let V=l.get(z);V===void 0&&(V=new WeakMap,l.set(z,V));let q=V.get(b);q===void 0&&(q=s.getUniformBlockIndex(z,b.name),V.set(b,q))}function Qe(b,z){const q=l.get(z).get(b);o.get(z)!==q&&(s.uniformBlockBinding(z,q,b.__bindingPointIndex),o.set(z,q))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},$=null,ge={},h={},u=new WeakMap,f=[],d=null,p=!1,_=null,g=null,m=null,v=null,x=null,y=null,C=null,A=new Re(0,0,0),w=0,D=!1,T=null,M=null,I=null,k=null,O=null,Ze.set(0,0,s.canvas.width,s.canvas.height),st.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:Ee,disable:re,bindFramebuffer:ze,drawBuffers:Xe,useProgram:Ve,setBlending:he,setMaterial:se,setFlipSided:_e,setCullFace:ee,setLineWidth:Fe,setPolygonOffset:ve,setScissorTest:Te,activeTexture:L,bindTexture:S,unbindTexture:B,compressedTexImage2D:ie,compressedTexImage3D:te,texImage2D:Ae,texImage3D:at,updateUBOMapping:Je,uniformBlockBinding:Qe,texStorage2D:de,texStorage3D:fe,texSubImage2D:ne,texSubImage3D:De,compressedTexSubImage2D:pe,compressedTexSubImage3D:K,scissor:$e,viewport:Pe,reset:bt}}function $1(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function Y1(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function q1(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function yu(s,e,t,n){const i=Z1(n);switch(t){case Wu:return s*e;case $u:return s*e;case Yu:return s*e*2;case Rl:return s*e/i.components*i.byteLength;case wa:return s*e/i.components*i.byteLength;case qu:return s*e*2/i.components*i.byteLength;case Pl:return s*e*2/i.components*i.byteLength;case Xu:return s*e*3/i.components*i.byteLength;case Gt:return s*e*4/i.components*i.byteLength;case Il:return s*e*4/i.components*i.byteLength;case Wr:case Xr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $r:case Yr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bo:case Ho:return Math.max(s,16)*Math.max(e,8)/4;case zo:case Vo:return Math.max(s,8)*Math.max(e,8)/2;case Go:case Wo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case qo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Zo:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Jo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case jo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ko:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Qo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case el:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case tl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case nl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case il:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case sl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case rl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case qr:case al:case ol:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Zu:case ll:return Math.ceil(s/4)*Math.ceil(e/4)*8;case cl:case ul:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Z1(s){switch(s){case ei:case Vu:return{byteLength:1,components:1};case dr:case Hu:case Es:return{byteLength:2,components:1};case El:case Cl:return{byteLength:2,components:4};case Si:case Al:case Ht:return{byteLength:4,components:1};case Gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}const J1={contain:$1,cover:Y1,fill:q1,getByteLength:yu};function j1(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new J,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,S){return d?new OffscreenCanvas(L,S):ua("canvas")}function _(L,S,B){let ie=1;const te=Te(L);if((te.width>B||te.height>B)&&(ie=B/Math.max(te.width,te.height)),ie<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ne=Math.floor(ie*te.width),De=Math.floor(ie*te.height);u===void 0&&(u=p(ne,De));const pe=S?p(ne,De):u;return pe.width=ne,pe.height=De,pe.getContext("2d").drawImage(L,0,0,ne,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ne+"x"+De+")."),pe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),L;return L}function g(L){return L.generateMipmaps&&L.minFilter!==it&&L.minFilter!==kt}function m(L){s.generateMipmap(L)}function v(L,S,B,ie,te=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ne=S;if(S===s.RED&&(B===s.FLOAT&&(ne=s.R32F),B===s.HALF_FLOAT&&(ne=s.R16F),B===s.UNSIGNED_BYTE&&(ne=s.R8)),S===s.RED_INTEGER&&(B===s.UNSIGNED_BYTE&&(ne=s.R8UI),B===s.UNSIGNED_SHORT&&(ne=s.R16UI),B===s.UNSIGNED_INT&&(ne=s.R32UI),B===s.BYTE&&(ne=s.R8I),B===s.SHORT&&(ne=s.R16I),B===s.INT&&(ne=s.R32I)),S===s.RG&&(B===s.FLOAT&&(ne=s.RG32F),B===s.HALF_FLOAT&&(ne=s.RG16F),B===s.UNSIGNED_BYTE&&(ne=s.RG8)),S===s.RG_INTEGER&&(B===s.UNSIGNED_BYTE&&(ne=s.RG8UI),B===s.UNSIGNED_SHORT&&(ne=s.RG16UI),B===s.UNSIGNED_INT&&(ne=s.RG32UI),B===s.BYTE&&(ne=s.RG8I),B===s.SHORT&&(ne=s.RG16I),B===s.INT&&(ne=s.RG32I)),S===s.RGB&&B===s.UNSIGNED_INT_5_9_9_9_REV&&(ne=s.RGB9_E5),S===s.RGBA){const De=te?ra:ut.getTransfer(ie);B===s.FLOAT&&(ne=s.RGBA32F),B===s.HALF_FLOAT&&(ne=s.RGBA16F),B===s.UNSIGNED_BYTE&&(ne=De===Mt?s.SRGB8_ALPHA8:s.RGBA8),B===s.UNSIGNED_SHORT_4_4_4_4&&(ne=s.RGBA4),B===s.UNSIGNED_SHORT_5_5_5_1&&(ne=s.RGB5_A1)}return(ne===s.R16F||ne===s.R32F||ne===s.RG16F||ne===s.RG32F||ne===s.RGBA16F||ne===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(L,S){let B;return L?S===null||S===Si||S===Ms?B=s.DEPTH24_STENCIL8:S===Ht?B=s.DEPTH32F_STENCIL8:S===dr&&(B=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Si||S===Ms?B=s.DEPTH_COMPONENT24:S===Ht?B=s.DEPTH_COMPONENT32F:S===dr&&(B=s.DEPTH_COMPONENT16),B}function y(L,S){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==it&&L.minFilter!==kt?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function C(L){const S=L.target;S.removeEventListener("dispose",C),w(S),S.isVideoTexture&&h.delete(S)}function A(L){const S=L.target;S.removeEventListener("dispose",A),T(S)}function w(L){const S=n.get(L);if(S.__webglInit===void 0)return;const B=L.source,ie=f.get(B);if(ie){const te=ie[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&D(L),Object.keys(ie).length===0&&f.delete(B)}n.remove(L)}function D(L){const S=n.get(L);s.deleteTexture(S.__webglTexture);const B=L.source,ie=f.get(B);delete ie[S.__cacheKey],a.memory.textures--}function T(L){const S=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(S.__webglFramebuffer[ie]))for(let te=0;te<S.__webglFramebuffer[ie].length;te++)s.deleteFramebuffer(S.__webglFramebuffer[ie][te]);else s.deleteFramebuffer(S.__webglFramebuffer[ie]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[ie])}else{if(Array.isArray(S.__webglFramebuffer))for(let ie=0;ie<S.__webglFramebuffer.length;ie++)s.deleteFramebuffer(S.__webglFramebuffer[ie]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ie=0;ie<S.__webglColorRenderbuffer.length;ie++)S.__webglColorRenderbuffer[ie]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[ie]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=L.textures;for(let ie=0,te=B.length;ie<te;ie++){const ne=n.get(B[ie]);ne.__webglTexture&&(s.deleteTexture(ne.__webglTexture),a.memory.textures--),n.remove(B[ie])}n.remove(L)}let M=0;function I(){M=0}function k(){const L=M;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),M+=1,L}function O(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function Y(L,S){const B=n.get(L);if(L.isVideoTexture&&Fe(L),L.isRenderTargetTexture===!1&&L.version>0&&B.__version!==L.version){const ie=L.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{st(B,L,S);return}}t.bindTexture(s.TEXTURE_2D,B.__webglTexture,s.TEXTURE0+S)}function j(L,S){const B=n.get(L);if(L.version>0&&B.__version!==L.version){st(B,L,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,B.__webglTexture,s.TEXTURE0+S)}function W(L,S){const B=n.get(L);if(L.version>0&&B.__version!==L.version){st(B,L,S);return}t.bindTexture(s.TEXTURE_3D,B.__webglTexture,s.TEXTURE0+S)}function F(L,S){const B=n.get(L);if(L.version>0&&B.__version!==L.version){Q(B,L,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+S)}const $={[pn]:s.REPEAT,[tn]:s.CLAMP_TO_EDGE,[na]:s.MIRRORED_REPEAT},ge={[it]:s.NEAREST,[Bu]:s.NEAREST_MIPMAP_NEAREST,[nr]:s.NEAREST_MIPMAP_LINEAR,[kt]:s.LINEAR,[Gr]:s.LINEAR_MIPMAP_NEAREST,[Yn]:s.LINEAR_MIPMAP_LINEAR},be={[im]:s.NEVER,[cm]:s.ALWAYS,[sm]:s.LESS,[Ku]:s.LEQUAL,[rm]:s.EQUAL,[lm]:s.GEQUAL,[am]:s.GREATER,[om]:s.NOTEQUAL};function we(L,S){if(S.type===Ht&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===kt||S.magFilter===Gr||S.magFilter===nr||S.magFilter===Yn||S.minFilter===kt||S.minFilter===Gr||S.minFilter===nr||S.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,$[S.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,$[S.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,$[S.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ge[S.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ge[S.minFilter]),S.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===it||S.minFilter!==nr&&S.minFilter!==Yn||S.type===Ht&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ze(L,S){let B=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",C));const ie=S.source;let te=f.get(ie);te===void 0&&(te={},f.set(ie,te));const ne=O(S);if(ne!==L.__cacheKey){te[ne]===void 0&&(te[ne]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,B=!0),te[ne].usedTimes++;const De=te[L.__cacheKey];De!==void 0&&(te[L.__cacheKey].usedTimes--,De.usedTimes===0&&D(S)),L.__cacheKey=ne,L.__webglTexture=te[ne].texture}return B}function st(L,S,B){let ie=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=s.TEXTURE_3D);const te=Ze(L,S),ne=S.source;t.bindTexture(ie,L.__webglTexture,s.TEXTURE0+B);const De=n.get(ne);if(ne.version!==De.__version||te===!0){t.activeTexture(s.TEXTURE0+B);const pe=ut.getPrimaries(ut.workingColorSpace),K=S.colorSpace===fi?null:ut.getPrimaries(S.colorSpace),de=S.colorSpace===fi||pe===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let fe=_(S.image,!1,i.maxTextureSize);fe=ve(S,fe);const Ae=r.convert(S.format,S.colorSpace),at=r.convert(S.type);let $e=v(S.internalFormat,Ae,at,S.colorSpace,S.isVideoTexture);we(ie,S);let Pe;const Je=S.mipmaps,Qe=S.isVideoTexture!==!0,bt=De.__version===void 0||te===!0,b=ne.dataReady,z=y(S,fe);if(S.isDepthTexture)$e=x(S.format===bs,S.type),bt&&(Qe?t.texStorage2D(s.TEXTURE_2D,1,$e,fe.width,fe.height):t.texImage2D(s.TEXTURE_2D,0,$e,fe.width,fe.height,0,Ae,at,null));else if(S.isDataTexture)if(Je.length>0){Qe&&bt&&t.texStorage2D(s.TEXTURE_2D,z,$e,Je[0].width,Je[0].height);for(let V=0,q=Je.length;V<q;V++)Pe=Je[V],Qe?b&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,Pe.width,Pe.height,Ae,at,Pe.data):t.texImage2D(s.TEXTURE_2D,V,$e,Pe.width,Pe.height,0,Ae,at,Pe.data);S.generateMipmaps=!1}else Qe?(bt&&t.texStorage2D(s.TEXTURE_2D,z,$e,fe.width,fe.height),b&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe.width,fe.height,Ae,at,fe.data)):t.texImage2D(s.TEXTURE_2D,0,$e,fe.width,fe.height,0,Ae,at,fe.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Qe&&bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,z,$e,Je[0].width,Je[0].height,fe.depth);for(let V=0,q=Je.length;V<q;V++)if(Pe=Je[V],S.format!==Gt)if(Ae!==null)if(Qe){if(b)if(S.layerUpdates.size>0){const ce=yu(Pe.width,Pe.height,S.format,S.type);for(const ke of S.layerUpdates){const je=Pe.data.subarray(ke*ce/Pe.data.BYTES_PER_ELEMENT,(ke+1)*ce/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,ke,Pe.width,Pe.height,1,Ae,je,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Pe.width,Pe.height,fe.depth,Ae,Pe.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,$e,Pe.width,Pe.height,fe.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?b&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,Pe.width,Pe.height,fe.depth,Ae,at,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,V,$e,Pe.width,Pe.height,fe.depth,0,Ae,at,Pe.data)}else{Qe&&bt&&t.texStorage2D(s.TEXTURE_2D,z,$e,Je[0].width,Je[0].height);for(let V=0,q=Je.length;V<q;V++)Pe=Je[V],S.format!==Gt?Ae!==null?Qe?b&&t.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,Pe.width,Pe.height,Ae,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,V,$e,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?b&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,Pe.width,Pe.height,Ae,at,Pe.data):t.texImage2D(s.TEXTURE_2D,V,$e,Pe.width,Pe.height,0,Ae,at,Pe.data)}else if(S.isDataArrayTexture)if(Qe){if(bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,z,$e,fe.width,fe.height,fe.depth),b)if(S.layerUpdates.size>0){const V=yu(fe.width,fe.height,S.format,S.type);for(const q of S.layerUpdates){const ce=fe.data.subarray(q*V/fe.data.BYTES_PER_ELEMENT,(q+1)*V/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,q,fe.width,fe.height,1,Ae,at,ce)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ae,at,fe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,$e,fe.width,fe.height,fe.depth,0,Ae,at,fe.data);else if(S.isData3DTexture)Qe?(bt&&t.texStorage3D(s.TEXTURE_3D,z,$e,fe.width,fe.height,fe.depth),b&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ae,at,fe.data)):t.texImage3D(s.TEXTURE_3D,0,$e,fe.width,fe.height,fe.depth,0,Ae,at,fe.data);else if(S.isFramebufferTexture){if(bt)if(Qe)t.texStorage2D(s.TEXTURE_2D,z,$e,fe.width,fe.height);else{let V=fe.width,q=fe.height;for(let ce=0;ce<z;ce++)t.texImage2D(s.TEXTURE_2D,ce,$e,V,q,0,Ae,at,null),V>>=1,q>>=1}}else if(Je.length>0){if(Qe&&bt){const V=Te(Je[0]);t.texStorage2D(s.TEXTURE_2D,z,$e,V.width,V.height)}for(let V=0,q=Je.length;V<q;V++)Pe=Je[V],Qe?b&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,Ae,at,Pe):t.texImage2D(s.TEXTURE_2D,V,$e,Ae,at,Pe);S.generateMipmaps=!1}else if(Qe){if(bt){const V=Te(fe);t.texStorage2D(s.TEXTURE_2D,z,$e,V.width,V.height)}b&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,at,fe)}else t.texImage2D(s.TEXTURE_2D,0,$e,Ae,at,fe);g(S)&&m(ie),De.__version=ne.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Q(L,S,B){if(S.image.length!==6)return;const ie=Ze(L,S),te=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+B);const ne=n.get(te);if(te.version!==ne.__version||ie===!0){t.activeTexture(s.TEXTURE0+B);const De=ut.getPrimaries(ut.workingColorSpace),pe=S.colorSpace===fi?null:ut.getPrimaries(S.colorSpace),K=S.colorSpace===fi||De===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);const de=S.isCompressedTexture||S.image[0].isCompressedTexture,fe=S.image[0]&&S.image[0].isDataTexture,Ae=[];for(let q=0;q<6;q++)!de&&!fe?Ae[q]=_(S.image[q],!0,i.maxCubemapSize):Ae[q]=fe?S.image[q].image:S.image[q],Ae[q]=ve(S,Ae[q]);const at=Ae[0],$e=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type),Je=v(S.internalFormat,$e,Pe,S.colorSpace),Qe=S.isVideoTexture!==!0,bt=ne.__version===void 0||ie===!0,b=te.dataReady;let z=y(S,at);we(s.TEXTURE_CUBE_MAP,S);let V;if(de){Qe&&bt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,z,Je,at.width,at.height);for(let q=0;q<6;q++){V=Ae[q].mipmaps;for(let ce=0;ce<V.length;ce++){const ke=V[ce];S.format!==Gt?$e!==null?Qe?b&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,0,0,ke.width,ke.height,$e,ke.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,Je,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?b&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,0,0,ke.width,ke.height,$e,Pe,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce,Je,ke.width,ke.height,0,$e,Pe,ke.data)}}}else{if(V=S.mipmaps,Qe&&bt){V.length>0&&z++;const q=Te(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,z,Je,q.width,q.height)}for(let q=0;q<6;q++)if(fe){Qe?b&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Ae[q].width,Ae[q].height,$e,Pe,Ae[q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Je,Ae[q].width,Ae[q].height,0,$e,Pe,Ae[q].data);for(let ce=0;ce<V.length;ce++){const je=V[ce].image[q].image;Qe?b&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,0,0,je.width,je.height,$e,Pe,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,Je,je.width,je.height,0,$e,Pe,je.data)}}else{Qe?b&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,$e,Pe,Ae[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Je,$e,Pe,Ae[q]);for(let ce=0;ce<V.length;ce++){const ke=V[ce];Qe?b&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,0,0,$e,Pe,ke.image[q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+q,ce+1,Je,$e,Pe,ke.image[q])}}}g(S)&&m(s.TEXTURE_CUBE_MAP),ne.__version=te.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function le(L,S,B,ie,te,ne){const De=r.convert(B.format,B.colorSpace),pe=r.convert(B.type),K=v(B.internalFormat,De,pe,B.colorSpace);if(!n.get(S).__hasExternalTextures){const fe=Math.max(1,S.width>>ne),Ae=Math.max(1,S.height>>ne);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,ne,K,fe,Ae,S.depth,0,De,pe,null):t.texImage2D(te,ne,K,fe,Ae,0,De,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ee(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,te,n.get(B).__webglTexture,0,_e(S)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ie,te,n.get(B).__webglTexture,ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(L,S,B){if(s.bindRenderbuffer(s.RENDERBUFFER,L),S.depthBuffer){const ie=S.depthTexture,te=ie&&ie.isDepthTexture?ie.type:null,ne=x(S.stencilBuffer,te),De=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=_e(S);ee(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe,ne,S.width,S.height):B?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,ne,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,ne,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,L)}else{const ie=S.textures;for(let te=0;te<ie.length;te++){const ne=ie[te],De=r.convert(ne.format,ne.colorSpace),pe=r.convert(ne.type),K=v(ne.internalFormat,De,pe,ne.colorSpace),de=_e(S);B&&ee(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,K,S.width,S.height):ee(S)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,K,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,K,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function re(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);const ie=n.get(S.depthTexture).__webglTexture,te=_e(S);if(S.depthTexture.format===vs)ee(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ie,0);else if(S.depthTexture.format===bs)ee(S)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0,te):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function ze(L){const S=n.get(L),B=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");re(S.__webglFramebuffer,L)}else if(B){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]=s.createRenderbuffer(),Ee(S.__webglDepthbuffer[ie],L,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Ee(S.__webglDepthbuffer,L,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(L,S,B){const ie=n.get(L);S!==void 0&&le(ie.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),B!==void 0&&ze(L)}function Ve(L){const S=L.texture,B=n.get(L),ie=n.get(S);L.addEventListener("dispose",A);const te=L.textures,ne=L.isWebGLCubeRenderTarget===!0,De=te.length>1;if(De||(ie.__webglTexture===void 0&&(ie.__webglTexture=s.createTexture()),ie.__version=S.version,a.memory.textures++),ne){B.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[pe]=[];for(let K=0;K<S.mipmaps.length;K++)B.__webglFramebuffer[pe][K]=s.createFramebuffer()}else B.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)B.__webglFramebuffer[pe]=s.createFramebuffer()}else B.__webglFramebuffer=s.createFramebuffer();if(De)for(let pe=0,K=te.length;pe<K;pe++){const de=n.get(te[pe]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),a.memory.textures++)}if(L.samples>0&&ee(L)===!1){B.__webglMultisampledFramebuffer=s.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pe=0;pe<te.length;pe++){const K=te[pe];B.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,B.__webglColorRenderbuffer[pe]);const de=r.convert(K.format,K.colorSpace),fe=r.convert(K.type),Ae=v(K.internalFormat,de,fe,K.colorSpace,L.isXRRenderTarget===!0),at=_e(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Ae,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,B.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(B.__webglDepthRenderbuffer=s.createRenderbuffer(),Ee(B.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ne){t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture),we(s.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)le(B.__webglFramebuffer[pe][K],L,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,K);else le(B.__webglFramebuffer[pe],L,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(S)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let pe=0,K=te.length;pe<K;pe++){const de=te[pe],fe=n.get(de);t.bindTexture(s.TEXTURE_2D,fe.__webglTexture),we(s.TEXTURE_2D,de),le(B.__webglFramebuffer,L,de,s.COLOR_ATTACHMENT0+pe,s.TEXTURE_2D,0),g(de)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,ie.__webglTexture),we(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let K=0;K<S.mipmaps.length;K++)le(B.__webglFramebuffer[K],L,S,s.COLOR_ATTACHMENT0,pe,K);else le(B.__webglFramebuffer,L,S,s.COLOR_ATTACHMENT0,pe,0);g(S)&&m(pe),t.unbindTexture()}L.depthBuffer&&ze(L)}function rt(L){const S=L.textures;for(let B=0,ie=S.length;B<ie;B++){const te=S[B];if(g(te)){const ne=L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,De=n.get(te).__webglTexture;t.bindTexture(ne,De),m(ne),t.unbindTexture()}}}const P=[],he=[];function se(L){if(L.samples>0){if(ee(L)===!1){const S=L.textures,B=L.width,ie=L.height;let te=s.COLOR_BUFFER_BIT;const ne=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=n.get(L),pe=S.length>1;if(pe)for(let K=0;K<S.length;K++)t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let K=0;K<S.length;K++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[K]);const de=n.get(S[K]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,de,0)}s.blitFramebuffer(0,0,B,ie,0,0,B,ie,te,s.NEAREST),l===!0&&(P.length=0,he.length=0,P.push(s.COLOR_ATTACHMENT0+K),L.depthBuffer&&L.resolveDepthBuffer===!1&&(P.push(ne),he.push(ne),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,he)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,P))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let K=0;K<S.length;K++){t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,De.__webglColorRenderbuffer[K]);const de=n.get(S[K]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.TEXTURE_2D,de,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const S=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function _e(L){return Math.min(i.maxSamples,L.samples)}function ee(L){const S=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Fe(L){const S=a.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function ve(L,S){const B=L.colorSpace,ie=L.format,te=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||B!==Ti&&B!==fi&&(ut.getTransfer(B)===Mt?(ie!==Gt||te!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Te(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=W,this.setTextureCube=F,this.rebindTextures=Xe,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ee}function Mm(s,e){function t(n,i=fi){let r;const a=ut.getTransfer(i);if(n===ei)return s.UNSIGNED_BYTE;if(n===El)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Cl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Vu)return s.BYTE;if(n===Hu)return s.SHORT;if(n===dr)return s.UNSIGNED_SHORT;if(n===Al)return s.INT;if(n===Si)return s.UNSIGNED_INT;if(n===Ht)return s.FLOAT;if(n===Es)return s.HALF_FLOAT;if(n===Wu)return s.ALPHA;if(n===Xu)return s.RGB;if(n===Gt)return s.RGBA;if(n===$u)return s.LUMINANCE;if(n===Yu)return s.LUMINANCE_ALPHA;if(n===vs)return s.DEPTH_COMPONENT;if(n===bs)return s.DEPTH_STENCIL;if(n===Rl)return s.RED;if(n===wa)return s.RED_INTEGER;if(n===qu)return s.RG;if(n===Pl)return s.RG_INTEGER;if(n===Il)return s.RGBA_INTEGER;if(n===Wr||n===Xr||n===$r||n===Yr)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zo||n===Bo||n===Vo||n===Ho)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===zo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Go||n===Wo||n===Xo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Go||n===Wo)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$o||n===Yo||n===qo||n===Zo||n===Jo||n===jo||n===Ko||n===Qo||n===el||n===tl||n===nl||n===il||n===sl||n===rl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$o)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Yo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qo)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===el)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===tl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===il)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rl)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qr||n===al||n===ol)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===qr)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===al)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zu||n===ll||n===cl||n===ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ms?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class bm extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rr extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K1={type:"move"};class Vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K1)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Q1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class tM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Et,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rn({vertexShader:Q1,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new Wi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nM extends ti{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const _=new tM,g=t.getContextAttributes();let m=null,v=null;const x=[],y=[],C=new J;let A=null;const w=new qt;w.layers.enable(1),w.viewport=new dt;const D=new qt;D.layers.enable(2),D.viewport=new dt;const T=[w,D],M=new bm;M.layers.enable(1),M.layers.enable(2);let I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let le=x[Q];return le===void 0&&(le=new Vc,x[Q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Q){let le=x[Q];return le===void 0&&(le=new Vc,x[Q]=le),le.getGripSpace()},this.getHand=function(Q){let le=x[Q];return le===void 0&&(le=new Vc,x[Q]=le),le.getHandSpace()};function O(Q){const le=y.indexOf(Q.inputSource);if(le===-1)return;const Ee=x[le];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,c||a),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function Y(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",j);for(let Q=0;Q<x.length;Q++){const le=y[Q];le!==null&&(y[Q]=null,x[Q].disconnect(le))}I=null,k=null,_.reset(),e.setRenderTarget(m),d=null,f=null,u=null,i=null,v=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0){const le={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Bn(d.framebufferWidth,d.framebufferHeight,{format:Gt,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let le=null,Ee=null,re=null;g.depth&&(re=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=g.stencil?bs:vs,Ee=g.stencil?Ms:Si);const ze={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(ze),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Bn(f.textureWidth,f.textureHeight,{format:Gt,type:ei,depthTexture:new ah(f.textureWidth,f.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j(Q){for(let le=0;le<Q.removed.length;le++){const Ee=Q.removed[le],re=y.indexOf(Ee);re>=0&&(y[re]=null,x[re].disconnect(Ee))}for(let le=0;le<Q.added.length;le++){const Ee=Q.added[le];let re=y.indexOf(Ee);if(re===-1){for(let Xe=0;Xe<x.length;Xe++)if(Xe>=y.length){y.push(Ee),re=Xe;break}else if(y[Xe]===null){y[Xe]=Ee,re=Xe;break}if(re===-1)break}const ze=x[re];ze&&ze.connect(Ee)}}const W=new R,F=new R;function $(Q,le,Ee){W.setFromMatrixPosition(le.matrixWorld),F.setFromMatrixPosition(Ee.matrixWorld);const re=W.distanceTo(F),ze=le.projectionMatrix.elements,Xe=Ee.projectionMatrix.elements,Ve=ze[14]/(ze[10]-1),rt=ze[14]/(ze[10]+1),P=(ze[9]+1)/ze[5],he=(ze[9]-1)/ze[5],se=(ze[8]-1)/ze[0],_e=(Xe[8]+1)/Xe[0],ee=Ve*se,Fe=Ve*_e,ve=re/(-se+_e),Te=ve*-se;le.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Te),Q.translateZ(ve),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const L=Ve+ve,S=rt+ve,B=ee-Te,ie=Fe+(re-Te),te=P*rt/S*L,ne=he*rt/S*L;Q.projectionMatrix.makePerspective(B,ie,te,ne,L,S),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function ge(Q,le){le===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(le.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;_.texture!==null&&(Q.near=_.depthNear,Q.far=_.depthFar),M.near=D.near=w.near=Q.near,M.far=D.far=w.far=Q.far,(I!==M.near||k!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),I=M.near,k=M.far,w.near=I,w.far=k,D.near=I,D.far=k,w.updateProjectionMatrix(),D.updateProjectionMatrix(),Q.updateProjectionMatrix());const le=Q.parent,Ee=M.cameras;ge(M,le);for(let re=0;re<Ee.length;re++)ge(Ee[re],le);Ee.length===2?$(M,w,D):M.projectionMatrix.copy(w.projectionMatrix),be(Q,M,le)};function be(Q,le,Ee){Ee===null?Q.matrix.copy(le.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(le.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=pr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let we=null;function Ze(Q,le){if(h=le.getViewerPose(c||a),p=le,h!==null){const Ee=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let re=!1;Ee.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let Xe=0;Xe<Ee.length;Xe++){const Ve=Ee[Xe];let rt=null;if(d!==null)rt=d.getViewport(Ve);else{const he=u.getViewSubImage(f,Ve);rt=he.viewport,Xe===0&&(e.setRenderTargetTextures(v,he.colorTexture,f.ignoreDepthValues?void 0:he.depthStencilTexture),e.setRenderTarget(v))}let P=T[Xe];P===void 0&&(P=new qt,P.layers.enable(Xe),P.viewport=new dt,T[Xe]=P),P.matrix.fromArray(Ve.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(Ve.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(rt.x,rt.y,rt.width,rt.height),Xe===0&&(M.matrix.copy(P.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(P)}const ze=i.enabledFeatures;if(ze&&ze.includes("depth-sensing")){const Xe=u.getDepthInformation(Ee[0]);Xe&&Xe.isValid&&Xe.texture&&_.init(e,Xe,i.renderState)}}for(let Ee=0;Ee<x.length;Ee++){const re=y[Ee],ze=x[Ee];re!==null&&ze!==void 0&&ze.update(re,le,c||a)}we&&we(Q,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),p=null}const st=new gm;st.setAnimationLoop(Ze),this.setAnimationLoop=function(Q){we=Q},this.dispose=function(){}}}const Qi=new Cn,iM=new He;function sM(s,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,mm(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,v,x,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Wt&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Wt&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=e.get(m),x=v.envMap,y=v.envMapRotation;x&&(g.envMap.value=x,Qi.copy(y),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),g.envMapRotation.value.setFromMatrix4(iM.makeRotationFromEuler(Qi)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Wt&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const v=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rM(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const y=x.program;n.uniformBlockBinding(v,y)}function c(v,x){let y=i[v.id];y===void 0&&(p(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",g));const C=x.program;n.updateUBOMapping(v,C);const A=e.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function h(v){const x=u();v.__bindingPointIndex=x;const y=s.createBuffer(),C=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,C,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=i[v.id],y=v.uniforms,C=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,w=y.length;A<w;A++){const D=Array.isArray(y[A])?y[A]:[y[A]];for(let T=0,M=D.length;T<M;T++){const I=D[T];if(d(I,A,T,C)===!0){const k=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let Y=0;for(let j=0;j<O.length;j++){const W=O[j],F=_(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,k+Y,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,Y),Y+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,x,y,C){const A=v.value,w=x+"_"+y;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const D=C[w];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return C[w]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function p(v){const x=v.uniforms;let y=0;const C=16;for(let w=0,D=x.length;w<D;w++){const T=Array.isArray(x[w])?x[w]:[x[w]];for(let M=0,I=T.length;M<I;M++){const k=T[M],O=Array.isArray(k.value)?k.value:[k.value];for(let Y=0,j=O.length;Y<j;Y++){const W=O[Y],F=_(W),$=y%C,ge=$%F.boundary,be=$+ge;y+=ge,be!==0&&C-be<F.storage&&(y+=C-be),k.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=F.storage}}}const A=y%C;return A>0&&(y+=C-A),v.__size=y,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function m(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},r={}}return{bind:l,update:c,dispose:m}}class Sm{constructor(e={}){const{canvas:t=hm(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),p=new Int32Array(4);let _=null,g=null;const m=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=un,this.toneMapping=_i,this.toneMappingExposure=1;const x=this;let y=!1,C=0,A=0,w=null,D=-1,T=null;const M=new dt,I=new dt;let k=null;const O=new Re(0);let Y=0,j=t.width,W=t.height,F=1,$=null,ge=null;const be=new dt(0,0,j,W),we=new dt(0,0,j,W);let Ze=!1;const st=new Ca;let Q=!1,le=!1;const Ee=new He,re=new R,ze=new dt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function rt(){return w===null?F:1}let P=n;function he(E,N){return t.getContext(E,N)}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ba}`),t.addEventListener("webglcontextlost",V,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",ce,!1),P===null){const N="webgl2";if(P=he(N,E),P===null)throw he(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let se,_e,ee,Fe,ve,Te,L,S,B,ie,te,ne,De,pe,K,de,fe,Ae,at,$e,Pe,Je,Qe,bt;function b(){se=new fy(P),se.init(),Je=new Mm(P,se),_e=new ay(P,se,e,Je),ee=new X1(P),Fe=new my(P),ve=new L1,Te=new j1(P,se,ee,ve,_e,Je,Fe),L=new ly(x),S=new hy(x),B=new b_(P),Qe=new sy(P,B),ie=new dy(P,B,Fe,Qe),te=new _y(P,ie,B,Fe),at=new gy(P,_e,Te),de=new oy(ve),ne=new D1(x,L,S,se,_e,Qe,de),De=new sM(x,ve),pe=new U1,K=new V1(se),Ae=new iy(x,L,S,ee,te,f,l),fe=new W1(x,te,_e),bt=new rM(P,Fe,_e,ee),$e=new ry(P,se,Fe),Pe=new py(P,se,Fe),Fe.programs=ne.programs,x.capabilities=_e,x.extensions=se,x.properties=ve,x.renderLists=pe,x.shadowMap=fe,x.state=ee,x.info=Fe}b();const z=new nM(x,P);this.xr=z,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(E){E!==void 0&&(F=E,this.setSize(j,W,!1))},this.getSize=function(E){return E.set(j,W)},this.setSize=function(E,N,H=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=E,W=N,t.width=Math.floor(E*F),t.height=Math.floor(N*F),H===!0&&(t.style.width=E+"px",t.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(j*F,W*F).floor()},this.setDrawingBufferSize=function(E,N,H){j=E,W=N,F=H,t.width=Math.floor(E*H),t.height=Math.floor(N*H),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(M)},this.getViewport=function(E){return E.copy(be)},this.setViewport=function(E,N,H,X){E.isVector4?be.set(E.x,E.y,E.z,E.w):be.set(E,N,H,X),ee.viewport(M.copy(be).multiplyScalar(F).round())},this.getScissor=function(E){return E.copy(we)},this.setScissor=function(E,N,H,X){E.isVector4?we.set(E.x,E.y,E.z,E.w):we.set(E,N,H,X),ee.scissor(I.copy(we).multiplyScalar(F).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(E){ee.setScissorTest(Ze=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){ge=E},this.getClearColor=function(E){return E.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(E=!0,N=!0,H=!0){let X=0;if(E){let U=!1;if(w!==null){const me=w.texture.format;U=me===Il||me===Pl||me===wa}if(U){const me=w.texture.type,Ce=me===ei||me===Si||me===dr||me===Ms||me===El||me===Cl,Le=Ae.getClearColor(),Ue=Ae.getClearAlpha(),Ye=Le.r,Ke=Le.g,We=Le.b;Ce?(d[0]=Ye,d[1]=Ke,d[2]=We,d[3]=Ue,P.clearBufferuiv(P.COLOR,0,d)):(p[0]=Ye,p[1]=Ke,p[2]=We,p[3]=Ue,P.clearBufferiv(P.COLOR,0,p))}else X|=P.COLOR_BUFFER_BIT}N&&(X|=P.DEPTH_BUFFER_BIT),H&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",V,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),pe.dispose(),K.dispose(),ve.dispose(),L.dispose(),S.dispose(),te.dispose(),Qe.dispose(),bt.dispose(),ne.dispose(),z.dispose(),z.removeEventListener("sessionstart",Ut),z.removeEventListener("sessionend",Ei),Zt.stop()};function V(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=Fe.autoReset,N=fe.enabled,H=fe.autoUpdate,X=fe.needsUpdate,U=fe.type;b(),Fe.autoReset=E,fe.enabled=N,fe.autoUpdate=H,fe.needsUpdate=X,fe.type=U}function ce(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ke(E){const N=E.target;N.removeEventListener("dispose",ke),je(N)}function je(E){Lt(E),ve.remove(E)}function Lt(E){const N=ve.get(E).programs;N!==void 0&&(N.forEach(function(H){ne.releaseProgram(H)}),E.isShaderMaterial&&ne.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,H,X,U,me){N===null&&(N=Xe);const Ce=U.isMesh&&U.matrixWorld.determinant()<0,Le=Dg(E,N,H,X,U);ee.setMaterial(X,Ce);let Ue=H.index,Ye=1;if(X.wireframe===!0){if(Ue=ie.getWireframeAttribute(H),Ue===void 0)return;Ye=2}const Ke=H.drawRange,We=H.attributes.position;let gt=Ke.start*Ye,Ct=(Ke.start+Ke.count)*Ye;me!==null&&(gt=Math.max(gt,me.start*Ye),Ct=Math.min(Ct,(me.start+me.count)*Ye)),Ue!==null?(gt=Math.max(gt,0),Ct=Math.min(Ct,Ue.count)):We!=null&&(gt=Math.max(gt,0),Ct=Math.min(Ct,We.count));const Rt=Ct-gt;if(Rt<0||Rt===1/0)return;Qe.setup(U,X,Le,H,Ue);let yn,_t=$e;if(Ue!==null&&(yn=B.get(Ue),_t=Pe,_t.setIndex(yn)),U.isMesh)X.wireframe===!0?(ee.setLineWidth(X.wireframeLinewidth*rt()),_t.setMode(P.LINES)):_t.setMode(P.TRIANGLES);else if(U.isLine){let Be=X.linewidth;Be===void 0&&(Be=1),ee.setLineWidth(Be*rt()),U.isLineSegments?_t.setMode(P.LINES):U.isLineLoop?_t.setMode(P.LINE_LOOP):_t.setMode(P.LINE_STRIP)}else U.isPoints?_t.setMode(P.POINTS):U.isSprite&&_t.setMode(P.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)_t.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))_t.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Be=U._multiDrawStarts,Jt=U._multiDrawCounts,vt=U._multiDrawCount,Vn=Ue?B.get(Ue).bytesPerElement:1,Is=ve.get(X).currentProgram.getUniforms();for(let Mn=0;Mn<vt;Mn++)Is.setValue(P,"_gl_DrawID",Mn),_t.render(Be[Mn]/Vn,Jt[Mn])}else if(U.isInstancedMesh)_t.renderInstances(gt,Rt,U.count);else if(H.isInstancedBufferGeometry){const Be=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Jt=Math.min(H.instanceCount,Be);_t.renderInstances(gt,Rt,Jt)}else _t.render(gt,Rt)};function zt(E,N,H){E.transparent===!0&&E.side===$n&&E.forceSinglePass===!1?(E.side=Wt,E.needsUpdate=!0,Ua(E,N,H),E.side=Mi,E.needsUpdate=!0,Ua(E,N,H),E.side=$n):Ua(E,N,H)}this.compile=function(E,N,H=null){H===null&&(H=E),g=K.get(H),g.init(N),v.push(g),H.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),E!==H&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights();const X=new Set;return E.traverse(function(U){const me=U.material;if(me)if(Array.isArray(me))for(let Ce=0;Ce<me.length;Ce++){const Le=me[Ce];zt(Le,H,U),X.add(Le)}else zt(me,H,U),X.add(me)}),v.pop(),g=null,X},this.compileAsync=function(E,N,H=null){const X=this.compile(E,N,H);return new Promise(U=>{function me(){if(X.forEach(function(Ce){ve.get(Ce).currentProgram.isReady()&&X.delete(Ce)}),X.size===0){U(E);return}setTimeout(me,10)}se.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let lt=null;function Bt(E){lt&&lt(E)}function Ut(){Zt.stop()}function Ei(){Zt.start()}const Zt=new gm;Zt.setAnimationLoop(Bt),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(E){lt=E,z.setAnimationLoop(E),E===null?Zt.stop():Zt.start()},z.addEventListener("sessionstart",Ut),z.addEventListener("sessionend",Ei),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(N),N=z.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,w),g=K.get(E,v.length),g.init(N),v.push(g),Ee.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),st.setFromProjectionMatrix(Ee),le=this.localClippingEnabled,Q=de.init(this.clippingPlanes,le),_=pe.get(E,m.length),_.init(),m.push(_),z.enabled===!0&&z.isPresenting===!0){const me=x.xr.getDepthSensingMesh();me!==null&&si(me,N,-1/0,x.sortObjects)}si(E,N,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort($,ge),Ve=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Ve&&Ae.addToRenderList(_,E),this.info.render.frame++,Q===!0&&de.beginShadows();const H=g.state.shadowsArray;fe.render(H,E,N),Q===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=_.opaque,U=_.transmissive;if(g.setupLights(),N.isArrayCamera){const me=N.cameras;if(U.length>0)for(let Ce=0,Le=me.length;Ce<Le;Ce++){const Ue=me[Ce];Er(X,U,E,Ue)}Ve&&Ae.render(E);for(let Ce=0,Le=me.length;Ce<Le;Ce++){const Ue=me[Ce];Yi(_,E,Ue,Ue.viewport)}}else U.length>0&&Er(X,U,E,N),Ve&&Ae.render(E),Yi(_,E,N);w!==null&&(Te.updateMultisampleRenderTarget(w),Te.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(x,E,N),Qe.resetDefaultState(),D=-1,T=null,v.pop(),v.length>0?(g=v[v.length-1],Q===!0&&de.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function si(E,N,H,X){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)g.pushLight(E),E.castShadow&&g.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||st.intersectsSprite(E)){X&&ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ee);const Ce=te.update(E),Le=E.material;Le.visible&&_.push(E,Ce,Le,H,ze.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||st.intersectsObject(E))){const Ce=te.update(E),Le=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ze.copy(E.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ze.copy(Ce.boundingSphere.center)),ze.applyMatrix4(E.matrixWorld).applyMatrix4(Ee)),Array.isArray(Le)){const Ue=Ce.groups;for(let Ye=0,Ke=Ue.length;Ye<Ke;Ye++){const We=Ue[Ye],gt=Le[We.materialIndex];gt&&gt.visible&&_.push(E,Ce,gt,H,ze.z,We)}}else Le.visible&&_.push(E,Ce,Le,H,ze.z,null)}}const me=E.children;for(let Ce=0,Le=me.length;Ce<Le;Ce++)si(me[Ce],N,H,X)}function Yi(E,N,H,X){const U=E.opaque,me=E.transmissive,Ce=E.transparent;g.setupLightsView(H),Q===!0&&de.setGlobalState(x.clippingPlanes,H),X&&ee.viewport(M.copy(X)),U.length>0&&Na(U,N,H),me.length>0&&Na(me,N,H),Ce.length>0&&Na(Ce,N,H),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Er(E,N,H,X){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[X.id]===void 0&&(g.state.transmissionRenderTarget[X.id]=new Bn(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Es:ei,minFilter:Yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const me=g.state.transmissionRenderTarget[X.id],Ce=X.viewport||M;me.setSize(Ce.z,Ce.w);const Le=x.getRenderTarget();x.setRenderTarget(me),x.getClearColor(O),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Ve&&Ae.render(H);const Ue=x.toneMapping;x.toneMapping=_i;const Ye=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),g.setupLightsView(X),Q===!0&&de.setGlobalState(x.clippingPlanes,X),Na(E,H,X),Te.updateMultisampleRenderTarget(me),Te.updateRenderTargetMipmap(me),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let We=0,gt=N.length;We<gt;We++){const Ct=N[We],Rt=Ct.object,yn=Ct.geometry,_t=Ct.material,Be=Ct.group;if(_t.side===$n&&Rt.layers.test(X.layers)){const Jt=_t.side;_t.side=Wt,_t.needsUpdate=!0,Fh(Rt,H,X,yn,_t,Be),_t.side=Jt,_t.needsUpdate=!0,Ke=!0}}Ke===!0&&(Te.updateMultisampleRenderTarget(me),Te.updateRenderTargetMipmap(me))}x.setRenderTarget(Le),x.setClearColor(O,Y),Ye!==void 0&&(X.viewport=Ye),x.toneMapping=Ue}function Na(E,N,H){const X=N.isScene===!0?N.overrideMaterial:null;for(let U=0,me=E.length;U<me;U++){const Ce=E[U],Le=Ce.object,Ue=Ce.geometry,Ye=X===null?Ce.material:X,Ke=Ce.group;Le.layers.test(H.layers)&&Fh(Le,N,H,Ue,Ye,Ke)}}function Fh(E,N,H,X,U,me){E.onBeforeRender(x,N,H,X,U,me),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.transparent===!0&&U.side===$n&&U.forceSinglePass===!1?(U.side=Wt,U.needsUpdate=!0,x.renderBufferDirect(H,N,X,U,E,me),U.side=Mi,U.needsUpdate=!0,x.renderBufferDirect(H,N,X,U,E,me),U.side=$n):x.renderBufferDirect(H,N,X,U,E,me),E.onAfterRender(x,N,H,X,U,me)}function Ua(E,N,H){N.isScene!==!0&&(N=Xe);const X=ve.get(E),U=g.state.lights,me=g.state.shadowsArray,Ce=U.state.version,Le=ne.getParameters(E,U.state,me,N,H),Ue=ne.getProgramCacheKey(Le);let Ye=X.programs;X.environment=E.isMeshStandardMaterial?N.environment:null,X.fog=N.fog,X.envMap=(E.isMeshStandardMaterial?S:L).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Ye===void 0&&(E.addEventListener("dispose",ke),Ye=new Map,X.programs=Ye);let Ke=Ye.get(Ue);if(Ke!==void 0){if(X.currentProgram===Ke&&X.lightsStateVersion===Ce)return zh(E,Le),Ke}else Le.uniforms=ne.getUniforms(E),E.onBeforeCompile(Le,x),Ke=ne.acquireProgram(Le,Ue),Ye.set(Ue,Ke),X.uniforms=Le.uniforms;const We=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(We.clippingPlanes=de.uniform),zh(E,Le),X.needsLights=Ng(E),X.lightsStateVersion=Ce,X.needsLights&&(We.ambientLightColor.value=U.state.ambient,We.lightProbe.value=U.state.probe,We.directionalLights.value=U.state.directional,We.directionalLightShadows.value=U.state.directionalShadow,We.spotLights.value=U.state.spot,We.spotLightShadows.value=U.state.spotShadow,We.rectAreaLights.value=U.state.rectArea,We.ltc_1.value=U.state.rectAreaLTC1,We.ltc_2.value=U.state.rectAreaLTC2,We.pointLights.value=U.state.point,We.pointLightShadows.value=U.state.pointShadow,We.hemisphereLights.value=U.state.hemi,We.directionalShadowMap.value=U.state.directionalShadowMap,We.directionalShadowMatrix.value=U.state.directionalShadowMatrix,We.spotShadowMap.value=U.state.spotShadowMap,We.spotLightMatrix.value=U.state.spotLightMatrix,We.spotLightMap.value=U.state.spotLightMap,We.pointShadowMap.value=U.state.pointShadowMap,We.pointShadowMatrix.value=U.state.pointShadowMatrix),X.currentProgram=Ke,X.uniformsList=null,Ke}function kh(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Uo.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function zh(E,N){const H=ve.get(E);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Dg(E,N,H,X,U){N.isScene!==!0&&(N=Xe),Te.resetTextureUnits();const me=N.fog,Ce=X.isMeshStandardMaterial?N.environment:null,Le=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ti,Ue=(X.isMeshStandardMaterial?S:L).get(X.envMap||Ce),Ye=X.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ke=!!H.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),We=!!H.morphAttributes.position,gt=!!H.morphAttributes.normal,Ct=!!H.morphAttributes.color;let Rt=_i;X.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Rt=x.toneMapping);const yn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,_t=yn!==void 0?yn.length:0,Be=ve.get(X),Jt=g.state.lights;if(Q===!0&&(le===!0||E!==T)){const Un=E===T&&X.id===D;de.setState(X,E,Un)}let vt=!1;X.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Jt.state.version||Be.outputColorSpace!==Le||U.isBatchedMesh&&Be.batching===!1||!U.isBatchedMesh&&Be.batching===!0||U.isBatchedMesh&&Be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Be.instancing===!1||!U.isInstancedMesh&&Be.instancing===!0||U.isSkinnedMesh&&Be.skinning===!1||!U.isSkinnedMesh&&Be.skinning===!0||U.isInstancedMesh&&Be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Be.instancingMorph===!1&&U.morphTexture!==null||Be.envMap!==Ue||X.fog===!0&&Be.fog!==me||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==de.numPlanes||Be.numIntersection!==de.numIntersection)||Be.vertexAlphas!==Ye||Be.vertexTangents!==Ke||Be.morphTargets!==We||Be.morphNormals!==gt||Be.morphColors!==Ct||Be.toneMapping!==Rt||Be.morphTargetsCount!==_t)&&(vt=!0):(vt=!0,Be.__version=X.version);let Vn=Be.currentProgram;vt===!0&&(Vn=Ua(X,N,U));let Is=!1,Mn=!1,dc=!1;const Ot=Vn.getUniforms(),Ci=Be.uniforms;if(ee.useProgram(Vn.program)&&(Is=!0,Mn=!0,dc=!0),X.id!==D&&(D=X.id,Mn=!0),Is||T!==E){Ot.setValue(P,"projectionMatrix",E.projectionMatrix),Ot.setValue(P,"viewMatrix",E.matrixWorldInverse);const Un=Ot.map.cameraPosition;Un!==void 0&&Un.setValue(P,re.setFromMatrixPosition(E.matrixWorld)),_e.logarithmicDepthBuffer&&Ot.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ot.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,Mn=!0,dc=!0)}if(U.isSkinnedMesh){Ot.setOptional(P,U,"bindMatrix"),Ot.setOptional(P,U,"bindMatrixInverse");const Un=U.skeleton;Un&&(Un.boneTexture===null&&Un.computeBoneTexture(),Ot.setValue(P,"boneTexture",Un.boneTexture,Te))}U.isBatchedMesh&&(Ot.setOptional(P,U,"batchingTexture"),Ot.setValue(P,"batchingTexture",U._matricesTexture,Te),Ot.setOptional(P,U,"batchingIdTexture"),Ot.setValue(P,"batchingIdTexture",U._indirectTexture,Te),Ot.setOptional(P,U,"batchingColorTexture"),U._colorsTexture!==null&&Ot.setValue(P,"batchingColorTexture",U._colorsTexture,Te));const pc=H.morphAttributes;if((pc.position!==void 0||pc.normal!==void 0||pc.color!==void 0)&&at.update(U,H,Vn),(Mn||Be.receiveShadow!==U.receiveShadow)&&(Be.receiveShadow=U.receiveShadow,Ot.setValue(P,"receiveShadow",U.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ci.envMap.value=Ue,Ci.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&N.environment!==null&&(Ci.envMapIntensity.value=N.environmentIntensity),Mn&&(Ot.setValue(P,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&Lg(Ci,dc),me&&X.fog===!0&&De.refreshFogUniforms(Ci,me),De.refreshMaterialUniforms(Ci,X,F,W,g.state.transmissionRenderTarget[E.id]),Uo.upload(P,kh(Be),Ci,Te)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Uo.upload(P,kh(Be),Ci,Te),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ot.setValue(P,"center",U.center),Ot.setValue(P,"modelViewMatrix",U.modelViewMatrix),Ot.setValue(P,"normalMatrix",U.normalMatrix),Ot.setValue(P,"modelMatrix",U.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Un=X.uniformsGroups;for(let mc=0,Ug=Un.length;mc<Ug;mc++){const Bh=Un[mc];bt.update(Bh,Vn),bt.bind(Bh,Vn)}}return Vn}function Lg(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Ng(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,N,H){ve.get(E.texture).__webglTexture=N,ve.get(E.depthTexture).__webglTexture=H;const X=ve.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=H===void 0,X.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const H=ve.get(E);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,H=0){w=E,C=N,A=H;let X=!0,U=null,me=!1,Ce=!1;if(E){const Ue=ve.get(E);Ue.__useDefaultFramebuffer!==void 0?(ee.bindFramebuffer(P.FRAMEBUFFER,null),X=!1):Ue.__webglFramebuffer===void 0?Te.setupRenderTarget(E):Ue.__hasExternalTextures&&Te.rebindTextures(E,ve.get(E.texture).__webglTexture,ve.get(E.depthTexture).__webglTexture);const Ye=E.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ce=!0);const Ke=ve.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ke[N])?U=Ke[N][H]:U=Ke[N],me=!0):E.samples>0&&Te.useMultisampledRTT(E)===!1?U=ve.get(E).__webglMultisampledFramebuffer:Array.isArray(Ke)?U=Ke[H]:U=Ke,M.copy(E.viewport),I.copy(E.scissor),k=E.scissorTest}else M.copy(be).multiplyScalar(F).floor(),I.copy(we).multiplyScalar(F).floor(),k=Ze;if(ee.bindFramebuffer(P.FRAMEBUFFER,U)&&X&&ee.drawBuffers(E,U),ee.viewport(M),ee.scissor(I),ee.setScissorTest(k),me){const Ue=ve.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ue.__webglTexture,H)}else if(Ce){const Ue=ve.get(E.texture),Ye=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ue.__webglTexture,H||0,Ye)}D=-1},this.readRenderTargetPixels=function(E,N,H,X,U,me,Ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){ee.bindFramebuffer(P.FRAMEBUFFER,Le);try{const Ue=E.texture,Ye=Ue.format,Ke=Ue.type;if(!_e.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-X&&H>=0&&H<=E.height-U&&P.readPixels(N,H,X,U,Je.convert(Ye),Je.convert(Ke),me)}finally{const Ue=w!==null?ve.get(w).__webglFramebuffer:null;ee.bindFramebuffer(P.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,N,H,X,U,me,Ce){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=ve.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){ee.bindFramebuffer(P.FRAMEBUFFER,Le);try{const Ue=E.texture,Ye=Ue.format,Ke=Ue.type;if(!_e.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-X&&H>=0&&H<=E.height-U){const We=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.bufferData(P.PIXEL_PACK_BUFFER,me.byteLength,P.STREAM_READ),P.readPixels(N,H,X,U,Je.convert(Ye),Je.convert(Ke),0),P.flush();const gt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await Y0(P,gt,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,We),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,me)}finally{P.deleteBuffer(We),P.deleteSync(gt)}return me}}finally{const Ue=w!==null?ve.get(w).__webglFramebuffer:null;ee.bindFramebuffer(P.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(E,N=null,H=0){E.isTexture!==!0&&(cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-H),U=Math.floor(E.image.width*X),me=Math.floor(E.image.height*X),Ce=N!==null?N.x:0,Le=N!==null?N.y:0;Te.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,Ce,Le,U,me),ee.unbindTexture()},this.copyTextureToTexture=function(E,N,H=null,X=null,U=0){E.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],N=arguments[2],U=arguments[3]||0,H=null);let me,Ce,Le,Ue,Ye,Ke;H!==null?(me=H.max.x-H.min.x,Ce=H.max.y-H.min.y,Le=H.min.x,Ue=H.min.y):(me=E.image.width,Ce=E.image.height,Le=0,Ue=0),X!==null?(Ye=X.x,Ke=X.y):(Ye=0,Ke=0);const We=Je.convert(N.format),gt=Je.convert(N.type);Te.setTexture2D(N,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Ct=P.getParameter(P.UNPACK_ROW_LENGTH),Rt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),yn=P.getParameter(P.UNPACK_SKIP_PIXELS),_t=P.getParameter(P.UNPACK_SKIP_ROWS),Be=P.getParameter(P.UNPACK_SKIP_IMAGES),Jt=E.isCompressedTexture?E.mipmaps[U]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Jt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Jt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Le),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ue),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,U,Ye,Ke,me,Ce,We,gt,Jt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,U,Ye,Ke,Jt.width,Jt.height,We,Jt.data):P.texSubImage2D(P.TEXTURE_2D,U,Ye,Ke,me,Ce,We,gt,Jt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ct),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,yn),P.pixelStorei(P.UNPACK_SKIP_ROWS,_t),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Be),U===0&&N.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ee.unbindTexture()},this.copyTextureToTexture3D=function(E,N,H=null,X=null,U=0){E.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,X=arguments[1]||null,E=arguments[2],N=arguments[3],U=arguments[4]||0);let me,Ce,Le,Ue,Ye,Ke,We,gt,Ct;const Rt=E.isCompressedTexture?E.mipmaps[U]:E.image;H!==null?(me=H.max.x-H.min.x,Ce=H.max.y-H.min.y,Le=H.max.z-H.min.z,Ue=H.min.x,Ye=H.min.y,Ke=H.min.z):(me=Rt.width,Ce=Rt.height,Le=Rt.depth,Ue=0,Ye=0,Ke=0),X!==null?(We=X.x,gt=X.y,Ct=X.z):(We=0,gt=0,Ct=0);const yn=Je.convert(N.format),_t=Je.convert(N.type);let Be;if(N.isData3DTexture)Te.setTexture3D(N,0),Be=P.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Te.setTexture2DArray(N,0),Be=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Jt=P.getParameter(P.UNPACK_ROW_LENGTH),vt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Vn=P.getParameter(P.UNPACK_SKIP_PIXELS),Is=P.getParameter(P.UNPACK_SKIP_ROWS),Mn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Rt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ue),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ye),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ke),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Be,U,We,gt,Ct,me,Ce,Le,yn,_t,Rt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(Be,U,We,gt,Ct,me,Ce,Le,yn,Rt.data):P.texSubImage3D(Be,U,We,gt,Ct,me,Ce,Le,yn,_t,Rt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Jt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,vt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Vn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Is),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Mn),U===0&&N.generateMipmaps&&P.generateMipmap(Be),ee.unbindTexture()},this.initRenderTarget=function(E){ve.get(E).__webglFramebuffer===void 0&&Te.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Te.setTextureCube(E,0):E.isData3DTexture?Te.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Te.setTexture2DArray(E,0):Te.setTexture2D(E,0),ee.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,ee.reset(),Qe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ll?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Ta?"display-p3":"srgb"}}class Vl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Re(e),this.density=t}clone(){return new Vl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Re(e),this.near=t,this.far=n}clone(){return new Hl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let Gl=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class Wl{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=la,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return cr("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new R;class Ss{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=tt(t,this.array),n=tt(n,this.array),i=tt(i,this.array),r=tt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ss(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class oh extends on{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Js;const Lr=new R,js=new R,Ks=new R,Qs=new J,Nr=new J,wm=new He,so=new R,Ur=new R,ro=new R,Df=new J,Hc=new J,Lf=new J;class Tm extends ht{constructor(e=new oh){if(super(),this.isSprite=!0,this.type="Sprite",Js===void 0){Js=new nt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wl(t,5);Js.setIndex([0,1,2,0,2,3]),Js.setAttribute("position",new Ss(n,3,0,!1)),Js.setAttribute("uv",new Ss(n,2,3,!1))}this.geometry=Js,this.material=e,this.center=new J(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),js.setFromMatrixScale(this.matrixWorld),wm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-Ks.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;ao(so.set(-.5,-.5,0),Ks,a,js,i,r),ao(Ur.set(.5,-.5,0),Ks,a,js,i,r),ao(ro.set(.5,.5,0),Ks,a,js,i,r),Df.set(0,0),Hc.set(1,0),Lf.set(1,1);let o=e.ray.intersectTriangle(so,Ur,ro,!1,Lr);if(o===null&&(ao(Ur.set(-.5,.5,0),Ks,a,js,i,r),Hc.set(0,1),o=e.ray.intersectTriangle(so,ro,Ur,!1,Lr),o===null))return;const l=e.ray.origin.distanceTo(Lr);l<e.near||l>e.far||t.push({distance:l,point:Lr.clone(),uv:wn.getInterpolation(Lr,so,Ur,ro,Df,Hc,Lf,new J),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ao(s,e,t,n,i,r){Qs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Nr.x=r*Qs.x-i*Qs.y,Nr.y=i*Qs.x+r*Qs.y):Nr.copy(Qs),s.copy(e),s.x+=Nr.x,s.y+=Nr.y,s.applyMatrix4(wm)}const oo=new R,Nf=new R;class Am extends ht{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,i=t.length;n<i;n++){const r=t[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const i=this.levels;let r;for(r=0;r<i.length&&!(t<i[r].distance);r++);return i.splice(r,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,i;for(n=1,i=t.length;n<i;n++){let r=t[n].distance;if(t[n].object.visible&&(r-=r*t[n].hysteresis),e<r)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){oo.setFromMatrixPosition(this.matrixWorld);const i=e.ray.origin.distanceTo(oo);this.getObjectForDistance(i).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){oo.setFromMatrixPosition(e.matrixWorld),Nf.setFromMatrixPosition(this.matrixWorld);const n=oo.distanceTo(Nf)/e.zoom;t[0].object.visible=!0;let i,r;for(i=1,r=t.length;i<r;i++){let a=t[i].distance;if(t[i].object.visible&&(a-=a*t[i].hysteresis),n>=a)t[i-1].object.visible=!1,t[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)t[i].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const a=n[i];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Uf=new R,Of=new dt,Ff=new dt,aM=new R,kf=new He,lo=new R,Gc=new sn,zf=new He,Wc=new Cs;class Em extends wt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=mu,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new fn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingBox.expandByPoint(lo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new sn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,lo),this.boundingSphere.expandByPoint(lo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gc.copy(this.boundingSphere),Gc.applyMatrix4(i),e.ray.intersectsSphere(Gc)!==!1&&(zf.copy(i).invert(),Wc.copy(e.ray).applyMatrix4(zf),!(this.boundingBox!==null&&Wc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===mu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Of.fromBufferAttribute(i.attributes.skinIndex,e),Ff.fromBufferAttribute(i.attributes.skinWeight,e),Uf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Ff.getComponent(r);if(a!==0){const o=Of.getComponent(r);kf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(aM.copy(Uf).applyMatrix4(kf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class lh extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}}class An extends Et{constructor(e=null,t=1,n=1,i,r,a,o,l,c=it,h=it,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bf=new He,oM=new He;class Xl{constructor(e=[],t=[]){this.uuid=Tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:oM;Bf.multiplyMatrices(o,t[r]),Bf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Xl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new An(t,e,e,Gt,Ht);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new lh),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ws extends ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const er=new He,Vf=new He,co=[],Hf=new fn,lM=new He,Or=new wt,Fr=new sn;class ch extends wt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ws(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,lM)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),Hf.copy(e.boundingBox).applyMatrix4(er),this.boundingBox.union(Hf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new sn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),Fr.copy(e.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Or.geometry=this.geometry,Or.material=this.material,Or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,er),Vf.multiplyMatrices(n,er),Or.matrixWorld=Vf,Or.raycast(e,co);for(let a=0,o=co.length;a<o;a++){const l=co[a];l.instanceId=r,l.object=this,t.push(l)}co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ws(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new An(new Float32Array(i*this.count),i,this.count,Rl,Ht));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function cM(s,e){return s.z-e.z}function uM(s,e){return e.z-s.z}class hM{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n){const i=this.pool,r=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1,index:-1});const a=i[this.index];r.push(a),this.index++,a.start=e.start,a.count=e.count,a.z=t,a.index=n}reset(){this.list.length=0,this.index=0}}const Ui=new He,Xc=new He,fM=new He,dM=new Re(1,1,1),Gf=new He,$c=new Ca,uo=new fn,es=new sn,kr=new R,Wf=new R,pM=new R,Yc=new hM,en=new wt,ho=[];function mM(s,e,t=0){const n=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let a=0;a<n;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*n);e.needsUpdate=!0}class Cm extends wt{get maxInstanceCount(){return this._maxInstanceCount}constructor(e,t,n=t*2,i){super(new nt,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawInfo=[],this._drawRanges=[],this._reservedRanges=[],this._bounds=[],this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new An(t,e,e,Gt,Ht);this._matricesTexture=n}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),n=new An(t,e,e,wa,Si);this._indirectTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxIndexCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new An(t,e,e,Gt,Ht);n.colorSpace=ut.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(n*l),u=new ot(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);t.setIndex(new ot(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=e.getAttribute(n),r=t.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fn);const e=this._geometryCount,t=this.boundingBox,n=this._drawInfo;t.makeEmpty();for(let i=0;i<e;i++){if(n[i].active===!1)continue;const r=n[i].geometryIndex;this.getMatrixAt(i,Ui),this.getBoundingBoxAt(r,uo).applyMatrix4(Ui),t.union(uo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sn);const e=this.boundingSphere,t=this._drawInfo;e.makeEmpty();for(let n=0,i=t.length;n<i;n++){if(t[n].active===!1)continue;const r=t[n].geometryIndex;this.getMatrixAt(n,Ui),this.getBoundingSphereAt(r,es).applyMatrix4(Ui),e.union(es)}}addInstance(e){if(this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");this._drawInfo.push({visible:!0,active:!0,geometryIndex:e});const t=this._drawInfo.length-1,n=this._matricesTexture,i=n.image.data;fM.toArray(i,t*16),n.needsUpdate=!0;const r=this._colorsTexture;return r&&(dM.toArray(r.image.data,t*4),r.needsUpdate=!0),t}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._drawInfo.length>=this._maxInstanceCount)throw new Error("BatchedMesh: Maximum item count reached.");const i={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let r=null;const a=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(r=a[a.length-1]),t===-1?i.vertexCount=e.getAttribute("position").count:i.vertexCount=t,r===null?i.vertexStart=0:i.vertexStart=r.vertexStart+r.vertexCount;const c=e.getIndex(),h=c!==null;if(h&&(n===-1?i.indexCount=c.count:i.indexCount=n,r===null?i.indexStart=0:i.indexStart=r.indexStart+r.indexCount),i.indexStart!==-1&&i.indexStart+i.indexCount>this._maxIndexCount||i.vertexStart+i.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const u=this._geometryCount;return this._geometryCount++,a.push(i),o.push({start:h?i.indexStart:i.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new fn,sphereInitialized:!1,sphere:new sn}),this.setGeometryAt(u,e),u}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(i&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.vertexCount;for(const d in n.attributes){const p=t.getAttribute(d),_=n.getAttribute(d);mM(p,_,l);const g=p.itemSize;for(let m=p.count,v=c;m<v;m++){const x=l+m;for(let y=0;y<g;y++)_.setComponent(x,y,0)}_.needsUpdate=!0,_.addUpdateRange(l*g,c*g)}if(i){const d=o.indexStart;for(let p=0;p<a.count;p++)r.setX(d+p,l+a.getX(p));for(let p=a.count,_=o.indexCount;p<_;p++)r.setX(d+p,l);r.needsUpdate=!0,r.addUpdateRange(d,o.indexCount)}const h=this._bounds[e];t.boundingBox!==null?(h.box.copy(t.boundingBox),h.boxInitialized=!0):h.boxInitialized=!1,t.boundingSphere!==null?(h.sphere.copy(t.boundingSphere),h.sphereInitialized=!0):h.sphereInitialized=!1;const u=this._drawRanges[e],f=t.getAttribute("position");return u.count=i?a.count:f.count,this._visibilityChanged=!0,e}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.box,r=this.geometry;if(n.boxInitialized===!1){i.makeEmpty();const a=r.index,o=r.attributes.position,l=this._drawRanges[e];for(let c=l.start,h=l.start+l.count;c<h;c++){let u=c;a&&(u=a.getX(u)),i.expandByPoint(kr.fromBufferAttribute(o,u))}n.boxInitialized=!0}return t.copy(i),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const n=this._bounds[e],i=n.sphere,r=this.geometry;if(n.sphereInitialized===!1){i.makeEmpty(),this.getBoundingBoxAt(e,uo),uo.getCenter(i.center);const a=r.index,o=r.attributes.position,l=this._drawRanges[e];let c=0;for(let h=l.start,u=l.start+l.count;h<u;h++){let f=h;a&&(f=a.getX(f)),kr.fromBufferAttribute(o,f),c=Math.max(c,i.center.distanceToSquared(kr))}i.radius=Math.sqrt(c),n.sphereInitialized=!0}return t.copy(i),t}setMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture,r=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?this:(t.toArray(r,e*16),i.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._drawInfo,i=this._matricesTexture.image.data;return e>=n.length||n[e].active===!1?null:t.fromArray(i,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._colorsTexture,i=this._colorsTexture.image.data,r=this._drawInfo;return e>=r.length||r[e].active===!1?this:(t.toArray(i,e*4),n.needsUpdate=!0,this)}getColorAt(e,t){const n=this._colorsTexture.image.data,i=this._drawInfo;return e>=i.length||i[e].active===!1?null:t.fromArray(n,e*4)}setVisibleAt(e,t){const n=this._drawInfo;return e>=n.length||n[e].active===!1||n[e].visible===t?this:(n[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._drawInfo;return e>=t.length||t[e].active===!1?!1:t[e].visible}raycast(e,t){const n=this._drawInfo,i=this._drawRanges,r=this.matrixWorld,a=this.geometry;en.material=this.material,en.geometry.index=a.index,en.geometry.attributes=a.attributes,en.geometry.boundingBox===null&&(en.geometry.boundingBox=new fn),en.geometry.boundingSphere===null&&(en.geometry.boundingSphere=new sn);for(let o=0,l=n.length;o<l;o++){if(!n[o].visible||!n[o].active)continue;const c=n[o].geometryIndex,h=i[c];en.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,en.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,en.geometry.boundingBox),this.getBoundingSphereAt(c,en.geometry.boundingSphere),en.raycast(e,ho);for(let u=0,f=ho.length;u<f;u++){const d=ho[u];d.object=this,d.batchId=o,t.push(d)}ho.length=0}en.material=null,en.geometry.index=null,en.geometry.attributes={},en.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._drawInfo=e._drawInfo.map(t=>({...t})),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=i.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._drawInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._drawRanges,f=this.perObjectFrustumCulled,d=this._indirectTexture,p=d.image.data;f&&(Gf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),$c.setFromProjectionMatrix(Gf,e.coordinateSystem));let _=0;if(this.sortObjects){Xc.copy(this.matrixWorld).invert(),kr.setFromMatrixPosition(n.matrixWorld).applyMatrix4(Xc),Wf.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(Xc);for(let v=0,x=l.length;v<x;v++)if(l[v].visible&&l[v].active){const y=l[v].geometryIndex;this.getMatrixAt(v,Ui),this.getBoundingSphereAt(y,es).applyMatrix4(Ui);let C=!1;if(f&&(C=!$c.intersectsSphere(es)),!C){const A=pM.subVectors(es.center,kr).dot(Wf);Yc.push(u[y],A,v)}}const g=Yc.list,m=this.customSort;m===null?g.sort(r.transparent?uM:cM):m.call(this,g,n);for(let v=0,x=g.length;v<x;v++){const y=g[v];c[_]=y.start*o,h[_]=y.count,p[_]=y.index,_++}Yc.reset()}else for(let g=0,m=l.length;g<m;g++)if(l[g].visible&&l[g].active){const v=l[g].geometryIndex;let x=!1;if(f&&(this.getMatrixAt(g,Ui),this.getBoundingSphereAt(v,es).applyMatrix4(Ui),x=!$c.intersectsSphere(es)),!x){const y=u[v];c[_]=y.start*o,h[_]=y.count,p[_]=g,_++}}d.needsUpdate=!0,this._multiDrawCount=_,this._visibilityChanged=!1}onBeforeShadow(e,t,n,i,r,a){this.onBeforeRender(e,null,i,r,a)}}class mn extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dl=new R,pl=new R,Xf=new He,zr=new Cs,fo=new sn,qc=new R,$f=new R;class Bi extends ht{constructor(e=new nt,t=new mn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)dl.fromBufferAttribute(t,i-1),pl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=dl.distanceTo(pl);e.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(i),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;Xf.copy(i).invert(),zr.copy(e.ray).applyMatrix4(Xf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=c){const m=h.getX(_),v=h.getX(_+1),x=po(this,e,zr,l,m,v);x&&t.push(x)}if(this.isLineLoop){const _=h.getX(p-1),g=h.getX(d),m=po(this,e,zr,l,_,g);m&&t.push(m)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,g=p-1;_<g;_+=c){const m=po(this,e,zr,l,_,_+1);m&&t.push(m)}if(this.isLineLoop){const _=po(this,e,zr,l,p-1,d);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function po(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(dl.fromBufferAttribute(a,i),pl.fromBufferAttribute(a,r),t.distanceSqToSegment(dl,pl,qc,$f)>n)return;qc.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(qc);if(!(l<e.near||l>e.far))return{distance:l,point:$f.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const Yf=new R,qf=new R;class ii extends Bi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Yf.fromBufferAttribute(t,i),qf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Yf.distanceTo(qf);e.setAttribute("lineDistance",new Ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rm extends Bi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class uh extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zf=new He,Mu=new Cs,mo=new sn,go=new R;class Pm extends ht{constructor(e=new nt,t=new uh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(i),mo.radius+=r,e.ray.intersectsSphere(mo)===!1)return;Zf.copy(i).invert(),Mu.copy(e.ray).applyMatrix4(Zf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=f,_=d;p<_;p++){const g=c.getX(p);go.fromBufferAttribute(u,g),Jf(go,g,l,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,_=d;p<_;p++)go.fromBufferAttribute(u,p),Jf(go,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Jf(s,e,t,n,i,r,a){const o=Mu.distanceSqToPoint(s);if(o<t){const l=new R;Mu.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class gM extends Et{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:kt,this.magFilter=r!==void 0?r:kt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class _M extends Et{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=it,this.minFilter=it,this.generateMipmaps=!1,this.needsUpdate=!0}}class $l extends Et{constructor(e,t,n,i,r,a,o,l,c,h,u,f){super(null,a,o,l,c,h,i,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class vM extends $l{constructor(e,t,n,i,r,a){super(e,t,n,r,a),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=tn,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xM extends $l{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,bi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class bu extends Et{constructor(e,t,n,i,r,a,o,l,c){super(e,t,n,i,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,d=(a-h)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),l=t||(a.isVector2?new J:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,i=[],r=[],a=[],o=new R,l=new He;for(let d=0;d<=e;d++){const p=d/e;i[d]=this.getTangentAt(p,new R)}r[0]=new R,a[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(Dt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Dt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],d*p)),a[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Yl extends Zn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new J){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Im extends Yl{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function hh(){let s=0,e=0,t=0,n=0;function i(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){i(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,i(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+n*o}}}const _o=new R,Zc=new hh,Jc=new hh,jc=new hh;class Dm extends Zn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new R){const n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=i[(o-1)%r]:(_o.subVectors(i[0],i[1]).add(i[0]),c=_o);const u=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(_o.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=_o),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),Zc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,_,g),Jc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,_,g),jc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(Zc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Jc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),jc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Zc.calc(l),Jc.calc(l),jc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new R().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jf(s,e,t,n,i){const r=(n-e)*.5,a=(i-t)*.5,o=s*s,l=s*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*s+t}function yM(s,e){const t=1-s;return t*t*e}function MM(s,e){return 2*(1-s)*s*e}function bM(s,e){return s*s*e}function Jr(s,e,t,n){return yM(s,e)+MM(s,t)+bM(s,n)}function SM(s,e){const t=1-s;return t*t*t*e}function wM(s,e){const t=1-s;return 3*t*t*s*e}function TM(s,e){return 3*(1-s)*s*s*e}function AM(s,e){return s*s*s*e}function jr(s,e,t,n,i){return SM(s,e)+wM(s,t)+TM(s,n)+AM(s,i)}class fh extends Zn{constructor(e=new J,t=new J,n=new J,i=new J){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new J){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(jr(e,i.x,r.x,a.x,o.x),jr(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lm extends Zn{constructor(e=new R,t=new R,n=new R,i=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(jr(e,i.x,r.x,a.x,o.x),jr(e,i.y,r.y,a.y,o.y),jr(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class dh extends Zn{constructor(e=new J,t=new J){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new J){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new J){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nm extends Zn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ph extends Zn{constructor(e=new J,t=new J,n=new J){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new J){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Jr(e,i.x,r.x,a.x),Jr(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mh extends Zn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Jr(e,i.x,r.x,a.x),Jr(e,i.y,r.y,a.y),Jr(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gh extends Zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new J){const n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,l=i[a===0?a:a-1],c=i[a],h=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(jf(o,l.x,c.x,h.x,u.x),jf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new J().fromArray(i))}return this}}var ml=Object.freeze({__proto__:null,ArcCurve:Im,CatmullRomCurve3:Dm,CubicBezierCurve:fh,CubicBezierCurve3:Lm,EllipseCurve:Yl,LineCurve:dh,LineCurve3:Nm,QuadraticBezierCurve:ph,QuadraticBezierCurve3:mh,SplineCurve:gh});class Um extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ml[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new ml[i.type]().fromJSON(i))}return this}}class ha extends Um{constructor(e){super(),this.type="Path",this.currentPoint=new J,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new dh(this.currentPoint.clone(),new J(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new ph(this.currentPoint.clone(),new J(e,t),new J(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){const o=new fh(this.currentPoint.clone(),new J(e,t),new J(n,i),new J(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new gh(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,a,o,l),this}absellipse(e,t,n,i,r,a,o,l){const c=new Yl(e,t,n,i,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ra extends nt{constructor(e=[new J(0,-.5),new J(.5,0),new J(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Dt(i,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new R,f=new J,d=new R,p=new R,_=new R;let g=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-g,d.z=m*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,d.x=m*1,d.y=-g,d.z=m*0,p.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(p)}for(let v=0;v<=t;v++){const x=n+v*h*i,y=Math.sin(x),C=Math.cos(x);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*y,u.y=e[A].y,u.z=e[A].x*C,a.push(u.x,u.y,u.z),f.x=v/t,f.y=A/(e.length-1),o.push(f.x,f.y);const w=l[3*A+0]*y,D=l[3*A+1],T=l[3*A+0]*C;c.push(w,D,T)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){const y=x+v*e.length,C=y,A=y+e.length,w=y+e.length+1,D=y+1;r.push(C,A,D),r.push(w,D,A)}this.setIndex(r),this.setAttribute("position",new Ne(a,3)),this.setAttribute("uv",new Ne(o,2)),this.setAttribute("normal",new Ne(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.points,e.segments,e.phiStart,e.phiLength)}}class ql extends Ra{constructor(e=1,t=1,n=4,i=8){const r=new ha;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new ql(e.radius,e.length,e.capSegments,e.radialSegments)}}class Zl extends nt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new R,h=new J;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ne(a,3)),this.setAttribute("normal",new Ne(o,3)),this.setAttribute("uv",new Ne(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Sr extends nt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let p=0;const _=[],g=n/2;let m=0;v(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(f,3)),this.setAttribute("uv",new Ne(d,2));function v(){const y=new R,C=new R;let A=0;const w=(t-e)/n;for(let D=0;D<=r;D++){const T=[],M=D/r,I=M*(t-e)+e;for(let k=0;k<=i;k++){const O=k/i,Y=O*l+o,j=Math.sin(Y),W=Math.cos(Y);C.x=I*j,C.y=-M*n+g,C.z=I*W,u.push(C.x,C.y,C.z),y.set(j,w,W).normalize(),f.push(y.x,y.y,y.z),d.push(O,1-M),T.push(p++)}_.push(T)}for(let D=0;D<i;D++)for(let T=0;T<r;T++){const M=_[T][D],I=_[T+1][D],k=_[T+1][D+1],O=_[T][D+1];h.push(M,I,O),h.push(I,k,O),A+=6}c.addGroup(m,A,0),m+=A}function x(y){const C=p,A=new J,w=new R;let D=0;const T=y===!0?e:t,M=y===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,g*M,0),f.push(0,M,0),d.push(.5,.5),p++;const I=p;for(let k=0;k<=i;k++){const Y=k/i*l+o,j=Math.cos(Y),W=Math.sin(Y);w.x=T*W,w.y=g*M,w.z=T*j,u.push(w.x,w.y,w.z),f.push(0,M,0),A.x=j*.5+.5,A.y=W*.5*M+.5,d.push(A.x,A.y),p++}for(let k=0;k<i;k++){const O=C+k,Y=I+k;y===!0?h.push(Y,Y+1,O):h.push(Y+1,Y,O),D+=3}c.addGroup(m,D,y===!0?1:2),m+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jl extends Sr{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Jl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Xi extends nt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),c(n),h(),this.setAttribute("position",new Ne(r,3)),this.setAttribute("normal",new Ne(r.slice(),3)),this.setAttribute("uv",new Ne(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new R,y=new R,C=new R;for(let A=0;A<t.length;A+=3)d(t[A+0],x),d(t[A+1],y),d(t[A+2],C),l(x,y,C,v)}function l(v,x,y,C){const A=C+1,w=[];for(let D=0;D<=A;D++){w[D]=[];const T=v.clone().lerp(y,D/A),M=x.clone().lerp(y,D/A),I=A-D;for(let k=0;k<=I;k++)k===0&&D===A?w[D][k]=T:w[D][k]=T.clone().lerp(M,k/I)}for(let D=0;D<A;D++)for(let T=0;T<2*(A-D)-1;T++){const M=Math.floor(T/2);T%2===0?(f(w[D][M+1]),f(w[D+1][M]),f(w[D][M])):(f(w[D][M+1]),f(w[D+1][M+1]),f(w[D+1][M]))}}function c(v){const x=new R;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(v),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const v=new R;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];const y=g(v)/2/Math.PI+.5,C=m(v)/Math.PI+.5;a.push(y,1-C)}p(),u()}function u(){for(let v=0;v<a.length;v+=6){const x=a[v+0],y=a[v+2],C=a[v+4],A=Math.max(x,y,C),w=Math.min(x,y,C);A>.9&&w<.1&&(x<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),C<.2&&(a[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,x){const y=v*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function p(){const v=new R,x=new R,y=new R,C=new R,A=new J,w=new J,D=new J;for(let T=0,M=0;T<r.length;T+=9,M+=6){v.set(r[T+0],r[T+1],r[T+2]),x.set(r[T+3],r[T+4],r[T+5]),y.set(r[T+6],r[T+7],r[T+8]),A.set(a[M+0],a[M+1]),w.set(a[M+2],a[M+3]),D.set(a[M+4],a[M+5]),C.copy(v).add(x).add(y).divideScalar(3);const I=g(C);_(A,M+0,v,I),_(w,M+2,x,I),_(D,M+4,y,I)}}function _(v,x,y,C){C<0&&v.x===1&&(a[x]=v.x-1),y.x===0&&y.z===0&&(a[x]=C/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.vertices,e.indices,e.radius,e.details)}}class jl extends Xi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jl(e.radius,e.detail)}}const vo=new R,xo=new R,Kc=new R,yo=new wn;class Om extends nt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),r=Math.cos(xs*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:g,c:m}=yo;if(_.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),yo.getNormal(Kc),u[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,u[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,u[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let v=0;v<3;v++){const x=(v+1)%3,y=u[v],C=u[x],A=yo[h[v]],w=yo[h[x]],D=`${y}_${C}`,T=`${C}_${y}`;T in f&&f[T]?(Kc.dot(f[T].normal)<=r&&(d.push(A.x,A.y,A.z),d.push(w.x,w.y,w.z)),f[T]=null):D in f||(f[D]={index0:c[v],index1:c[x],normal:Kc.clone()})}}for(const p in f)if(f[p]){const{index0:_,index1:g}=f[p];vo.fromBufferAttribute(o,_),xo.fromBufferAttribute(o,g),d.push(vo.x,vo.y,vo.z),d.push(xo.x,xo.y,xo.z)}this.setAttribute("position",new Ne(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ys extends ha{constructor(e){super(e),this.uuid=Tn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new ha().fromJSON(i))}return this}}const EM={triangulate:function(s,e,t=2){const n=e&&e.length,i=n?e[0]*t:s.length;let r=Fm(s,0,i,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(n&&(r=DM(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let p=t;p<i;p+=t)u=s[p],f=s[p+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return fa(r,a,t,o,l,d,0),a}};function Fm(s,e,t,n,i){let r,a;if(i===GM(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Kf(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Kf(r,s[r],s[r+1],a);return a&&Kl(a,a.next)&&(pa(a),a=a.next),a}function Ts(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Kl(t,t.next)||Tt(t.prev,t,t.next)===0)){if(pa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function fa(s,e,t,n,i,r,a){if(!s)return;!a&&r&&FM(s,n,i,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?RM(s,n,i,r):CM(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),pa(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=PM(Ts(s),e,t),fa(s,e,t,n,i,r,2)):a===2&&IM(s,e,t,n,i,r):fa(Ts(s),e,t,n,i,r,1);break}}}function CM(s){const e=s.prev,t=s,n=s.next;if(Tt(e,t,n)>=0)return!1;const i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let p=n.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&ar(i,o,r,l,a,c,p.x,p.y)&&Tt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function RM(s,e,t,n){const i=s.prev,r=s,a=s.next;if(Tt(i,r,a)>=0)return!1;const o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,p=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,m=Su(d,p,e,t,n),v=Su(_,g,e,t,n);let x=s.prevZ,y=s.nextZ;for(;x&&x.z>=m&&y&&y.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&ar(o,h,l,u,c,f,x.x,x.y)&&Tt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&ar(o,h,l,u,c,f,y.x,y.y)&&Tt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&ar(o,h,l,u,c,f,x.x,x.y)&&Tt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&ar(o,h,l,u,c,f,y.x,y.y)&&Tt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function PM(s,e,t){let n=s;do{const i=n.prev,r=n.next.next;!Kl(i,r)&&km(i,n,n.next,r)&&da(i,r)&&da(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),pa(n),pa(n.next),n=s=r),n=n.next}while(n!==s);return Ts(n)}function IM(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&BM(a,o)){let l=zm(a,o);a=Ts(a,a.next),l=Ts(l,l.next),fa(a,e,t,n,i,r,0),fa(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function DM(s,e,t,n){const i=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Fm(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(zM(c));for(i.sort(LM),r=0;r<i.length;r++)t=NM(i[r],t);return t}function LM(s,e){return s.x-e.x}function NM(s,e){const t=UM(s,e);if(!t)return e;const n=zm(t,s);return Ts(n,n.next),Ts(t,t.next)}function UM(s,e){let t=e,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;const o=i,l=i.x,c=i.y;let h=1/0,u;t=i;do r>=t.x&&t.x>=l&&r!==t.x&&ar(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),da(t,s)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&OM(i,t)))&&(i=t,h=u)),t=t.next;while(t!==o);return i}function OM(s,e){return Tt(s.prev,s,e.prev)<0&&Tt(e.next,s,s.next)<0}function FM(s,e,t,n){let i=s;do i.z===0&&(i.z=Su(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,kM(i)}function kM(s){let e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Su(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function zM(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function ar(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function BM(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!VM(s,e)&&(da(s,e)&&da(e,s)&&HM(s,e)&&(Tt(s.prev,s,e.prev)||Tt(s,e.prev,e))||Kl(s,e)&&Tt(s.prev,s,s.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Kl(s,e){return s.x===e.x&&s.y===e.y}function km(s,e,t,n){const i=bo(Tt(s,e,t)),r=bo(Tt(s,e,n)),a=bo(Tt(t,n,s)),o=bo(Tt(t,n,e));return!!(i!==r&&a!==o||i===0&&Mo(s,t,e)||r===0&&Mo(s,n,e)||a===0&&Mo(t,s,n)||o===0&&Mo(t,e,n))}function Mo(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function bo(s){return s>0?1:s<0?-1:0}function VM(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&km(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function da(s,e){return Tt(s.prev,s,s.next)<0?Tt(s,e,s.next)>=0&&Tt(s,s.prev,e)>=0:Tt(s,e,s.prev)<0||Tt(s,s.next,e)<0}function HM(s,e){let t=s,n=!1;const i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function zm(s,e){const t=new wu(s.i,s.x,s.y),n=new wu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Kf(s,e,t,n){const i=new wu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function pa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function wu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function GM(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class Qn{static area(e){const t=e.length;let n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return Qn.area(e)<0}static triangulateShape(e,t){const n=[],i=[],r=[];Qf(e),ed(n,e);let a=e.length;t.forEach(Qf);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,ed(n,t[l]);const o=EM.triangulate(n,i);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function Qf(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function ed(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Ql extends nt{constructor(e=new ys([new J(.5,.5),new J(-.5,.5),new J(-.5,-.5),new J(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ne(i,3)),this.setAttribute("uv",new Ne(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:WM;let x,y=!1,C,A,w,D;m&&(x=m.getSpacedPoints(h),y=!0,f=!1,C=m.computeFrenetFrames(h,!1),A=new R,w=new R,D=new R),f||(g=0,d=0,p=0,_=0);const T=o.extractPoints(c);let M=T.shape;const I=T.holes;if(!Qn.isClockWise(M)){M=M.reverse();for(let P=0,he=I.length;P<he;P++){const se=I[P];Qn.isClockWise(se)&&(I[P]=se.reverse())}}const O=Qn.triangulateShape(M,I),Y=M;for(let P=0,he=I.length;P<he;P++){const se=I[P];M=M.concat(se)}function j(P,he,se){return he||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(he,se)}const W=M.length,F=O.length;function $(P,he,se){let _e,ee,Fe;const ve=P.x-he.x,Te=P.y-he.y,L=se.x-P.x,S=se.y-P.y,B=ve*ve+Te*Te,ie=ve*S-Te*L;if(Math.abs(ie)>Number.EPSILON){const te=Math.sqrt(B),ne=Math.sqrt(L*L+S*S),De=he.x-Te/te,pe=he.y+ve/te,K=se.x-S/ne,de=se.y+L/ne,fe=((K-De)*S-(de-pe)*L)/(ve*S-Te*L);_e=De+ve*fe-P.x,ee=pe+Te*fe-P.y;const Ae=_e*_e+ee*ee;if(Ae<=2)return new J(_e,ee);Fe=Math.sqrt(Ae/2)}else{let te=!1;ve>Number.EPSILON?L>Number.EPSILON&&(te=!0):ve<-Number.EPSILON?L<-Number.EPSILON&&(te=!0):Math.sign(Te)===Math.sign(S)&&(te=!0),te?(_e=-Te,ee=ve,Fe=Math.sqrt(B)):(_e=ve,ee=Te,Fe=Math.sqrt(B/2))}return new J(_e/Fe,ee/Fe)}const ge=[];for(let P=0,he=Y.length,se=he-1,_e=P+1;P<he;P++,se++,_e++)se===he&&(se=0),_e===he&&(_e=0),ge[P]=$(Y[P],Y[se],Y[_e]);const be=[];let we,Ze=ge.concat();for(let P=0,he=I.length;P<he;P++){const se=I[P];we=[];for(let _e=0,ee=se.length,Fe=ee-1,ve=_e+1;_e<ee;_e++,Fe++,ve++)Fe===ee&&(Fe=0),ve===ee&&(ve=0),we[_e]=$(se[_e],se[Fe],se[ve]);be.push(we),Ze=Ze.concat(we)}for(let P=0;P<g;P++){const he=P/g,se=d*Math.cos(he*Math.PI/2),_e=p*Math.sin(he*Math.PI/2)+_;for(let ee=0,Fe=Y.length;ee<Fe;ee++){const ve=j(Y[ee],ge[ee],_e);re(ve.x,ve.y,-se)}for(let ee=0,Fe=I.length;ee<Fe;ee++){const ve=I[ee];we=be[ee];for(let Te=0,L=ve.length;Te<L;Te++){const S=j(ve[Te],we[Te],_e);re(S.x,S.y,-se)}}}const st=p+_;for(let P=0;P<W;P++){const he=f?j(M[P],Ze[P],st):M[P];y?(w.copy(C.normals[0]).multiplyScalar(he.x),A.copy(C.binormals[0]).multiplyScalar(he.y),D.copy(x[0]).add(w).add(A),re(D.x,D.y,D.z)):re(he.x,he.y,0)}for(let P=1;P<=h;P++)for(let he=0;he<W;he++){const se=f?j(M[he],Ze[he],st):M[he];y?(w.copy(C.normals[P]).multiplyScalar(se.x),A.copy(C.binormals[P]).multiplyScalar(se.y),D.copy(x[P]).add(w).add(A),re(D.x,D.y,D.z)):re(se.x,se.y,u/h*P)}for(let P=g-1;P>=0;P--){const he=P/g,se=d*Math.cos(he*Math.PI/2),_e=p*Math.sin(he*Math.PI/2)+_;for(let ee=0,Fe=Y.length;ee<Fe;ee++){const ve=j(Y[ee],ge[ee],_e);re(ve.x,ve.y,u+se)}for(let ee=0,Fe=I.length;ee<Fe;ee++){const ve=I[ee];we=be[ee];for(let Te=0,L=ve.length;Te<L;Te++){const S=j(ve[Te],we[Te],_e);y?re(S.x,S.y+x[h-1].y,x[h-1].x+se):re(S.x,S.y,u+se)}}}Q(),le();function Q(){const P=i.length/3;if(f){let he=0,se=W*he;for(let _e=0;_e<F;_e++){const ee=O[_e];ze(ee[2]+se,ee[1]+se,ee[0]+se)}he=h+g*2,se=W*he;for(let _e=0;_e<F;_e++){const ee=O[_e];ze(ee[0]+se,ee[1]+se,ee[2]+se)}}else{for(let he=0;he<F;he++){const se=O[he];ze(se[2],se[1],se[0])}for(let he=0;he<F;he++){const se=O[he];ze(se[0]+W*h,se[1]+W*h,se[2]+W*h)}}n.addGroup(P,i.length/3-P,0)}function le(){const P=i.length/3;let he=0;Ee(Y,he),he+=Y.length;for(let se=0,_e=I.length;se<_e;se++){const ee=I[se];Ee(ee,he),he+=ee.length}n.addGroup(P,i.length/3-P,1)}function Ee(P,he){let se=P.length;for(;--se>=0;){const _e=se;let ee=se-1;ee<0&&(ee=P.length-1);for(let Fe=0,ve=h+g*2;Fe<ve;Fe++){const Te=W*Fe,L=W*(Fe+1),S=he+_e+Te,B=he+ee+Te,ie=he+ee+L,te=he+_e+L;Xe(S,B,ie,te)}}}function re(P,he,se){l.push(P),l.push(he),l.push(se)}function ze(P,he,se){Ve(P),Ve(he),Ve(se);const _e=i.length/3,ee=v.generateTopUV(n,i,_e-3,_e-2,_e-1);rt(ee[0]),rt(ee[1]),rt(ee[2])}function Xe(P,he,se,_e){Ve(P),Ve(he),Ve(_e),Ve(he),Ve(se),Ve(_e);const ee=i.length/3,Fe=v.generateSideWallUV(n,i,ee-6,ee-3,ee-2,ee-1);rt(Fe[0]),rt(Fe[1]),rt(Fe[3]),rt(Fe[1]),rt(Fe[2]),rt(Fe[3])}function Ve(P){i.push(l[P*3+0]),i.push(l[P*3+1]),i.push(l[P*3+2])}function rt(P){r.push(P.x),r.push(P.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return XM(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ml[i.type]().fromJSON(i)),new Ql(n,e.options)}}const WM={generateTopUV:function(s,e,t,n,i){const r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new J(r,a),new J(o,l),new J(c,h)]},generateSideWallUV:function(s,e,t,n,i,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[i*3],d=e[i*3+1],p=e[i*3+2],_=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new J(a,1-l),new J(c,1-u),new J(f,1-p),new J(_,1-m)]:[new J(o,1-l),new J(h,1-u),new J(d,1-p),new J(g,1-m)]}};function XM(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ec extends Xi{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ec(e.radius,e.detail)}}class Pa extends Xi{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Pa(e.radius,e.detail)}}class tc extends nt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/i,d=new R,p=new J;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const m=r+g/n*a;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let _=0;_<i;_++){const g=_*(n+1);for(let m=0;m<n;m++){const v=m+g,x=v,y=v+n+1,C=v+n+2,A=v+1;o.push(x,y,A),o.push(y,C,A)}}this.setIndex(o),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class nc extends nt{constructor(e=new ys([new J(0,.5),new J(-.5,-.5),new J(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Ne(i,3)),this.setAttribute("normal",new Ne(r,3)),this.setAttribute("uv",new Ne(a,2));function c(h){const u=i.length/3,f=h.extractPoints(t);let d=f.shape;const p=f.holes;Qn.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,m=p.length;g<m;g++){const v=p[g];Qn.isClockWise(v)===!0&&(p[g]=v.reverse())}const _=Qn.triangulateShape(d,p);for(let g=0,m=p.length;g<m;g++){const v=p[g];d=d.concat(v)}for(let g=0,m=d.length;g<m;g++){const v=d[g];i.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let g=0,m=_.length;g<m;g++){const v=_[g],x=v[0]+u,y=v[1]+u,C=v[2]+u;n.push(x,y,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return $M(t,e)}static fromJSON(e,t){const n=[];for(let i=0,r=e.shapes.length;i<r;i++){const a=t[e.shapes[i]];n.push(a)}return new nc(n,e.curveSegments)}}function $M(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,n=s.length;t<n;t++){const i=s[t];e.shapes.push(i.uuid)}else e.shapes.push(s.uuid);return e}class Ia extends nt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new R,f=new R,d=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){const v=[],x=m/n;let y=0;m===0&&a===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const A=C/t;u.x=-e*Math.cos(i+A*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(i+A*r)*Math.sin(a+x*o),p.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),g.push(A+y,1-x),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){const x=h[m][v+1],y=h[m][v],C=h[m+1][v],A=h[m+1][v+1];(m!==0||a>0)&&d.push(x,y,A),(m!==n-1||l<Math.PI)&&d.push(y,C,A)}this.setIndex(d),this.setAttribute("position",new Ne(p,3)),this.setAttribute("normal",new Ne(_,3)),this.setAttribute("uv",new Ne(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ic extends Xi{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ic(e.radius,e.detail)}}class sc extends nt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let p=0;p<=i;p++){const _=p/i*r,g=d/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(_),u.y=(e+t*Math.cos(g))*Math.sin(_),u.z=t*Math.sin(g),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let p=1;p<=i;p++){const _=(i+1)*d+p-1,g=(i+1)*(d-1)+p-1,m=(i+1)*(d-1)+p,v=(i+1)*d+p;a.push(_,g,v),a.push(g,m,v)}this.setIndex(a),this.setAttribute("position",new Ne(o,3)),this.setAttribute("normal",new Ne(l,3)),this.setAttribute("uv",new Ne(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class rc extends nt{constructor(e=1,t=.4,n=64,i=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:r,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],h=[],u=new R,f=new R,d=new R,p=new R,_=new R,g=new R,m=new R;for(let x=0;x<=n;++x){const y=x/n*r*Math.PI*2;v(y,r,a,e,d),v(y+.01,r,a,e,p),g.subVectors(p,d),m.addVectors(p,d),_.crossVectors(g,m),m.crossVectors(_,g),_.normalize(),m.normalize();for(let C=0;C<=i;++C){const A=C/i*Math.PI*2,w=-t*Math.cos(A),D=t*Math.sin(A);u.x=d.x+(w*m.x+D*_.x),u.y=d.y+(w*m.y+D*_.y),u.z=d.z+(w*m.z+D*_.z),l.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(x/n),h.push(C/i)}}for(let x=1;x<=n;x++)for(let y=1;y<=i;y++){const C=(i+1)*(x-1)+(y-1),A=(i+1)*x+(y-1),w=(i+1)*x+y,D=(i+1)*(x-1)+y;o.push(C,A,D),o.push(A,w,D)}this.setIndex(o),this.setAttribute("position",new Ne(l,3)),this.setAttribute("normal",new Ne(c,3)),this.setAttribute("uv",new Ne(h,2));function v(x,y,C,A,w){const D=Math.cos(x),T=Math.sin(x),M=C/y*x,I=Math.cos(M);w.x=A*(2+I)*.5*D,w.y=A*(2+I)*T*.5,w.z=A*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class ac extends nt{constructor(e=new mh(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new R,l=new R,c=new J;let h=new R;const u=[],f=[],d=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new Ne(u,3)),this.setAttribute("normal",new Ne(f,3)),this.setAttribute("uv",new Ne(d,2));function _(){for(let x=0;x<t;x++)g(x);g(r===!1?t:0),v(),m()}function g(x){h=e.getPointAt(x/t,h);const y=a.normals[x],C=a.binormals[x];for(let A=0;A<=i;A++){const w=A/i*Math.PI*2,D=Math.sin(w),T=-Math.cos(w);l.x=T*y.x+D*C.x,l.y=T*y.y+D*C.y,l.z=T*y.z+D*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let x=1;x<=t;x++)for(let y=1;y<=i;y++){const C=(i+1)*(x-1)+(y-1),A=(i+1)*x+(y-1),w=(i+1)*x+y,D=(i+1)*(x-1)+y;p.push(C,A,D),p.push(A,w,D)}}function v(){for(let x=0;x<=t;x++)for(let y=0;y<=i;y++)c.x=x/t,c.y=y/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ac(new ml[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Bm extends nt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,i=new R,r=new R;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],f=u.start,d=u.count;for(let p=f,_=f+d;p<_;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),v=o.getX(p+(g+1)%3);i.fromBufferAttribute(a,m),r.fromBufferAttribute(a,v),td(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;i.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),td(i,r,n)===!0&&(t.push(i.x,i.y,i.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ne(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function td(s,e,t){const n=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,i=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(n)===!0||t.has(i)===!0?!1:(t.add(n),t.add(i),!0)}var nd=Object.freeze({__proto__:null,BoxGeometry:Gi,CapsuleGeometry:ql,CircleGeometry:Zl,ConeGeometry:Jl,CylinderGeometry:Sr,DodecahedronGeometry:jl,EdgesGeometry:Om,ExtrudeGeometry:Ql,IcosahedronGeometry:ec,LatheGeometry:Ra,OctahedronGeometry:Pa,PlaneGeometry:Wi,PolyhedronGeometry:Xi,RingGeometry:tc,ShapeGeometry:nc,SphereGeometry:Ia,TetrahedronGeometry:ic,TorusGeometry:sc,TorusKnotGeometry:rc,TubeGeometry:ac,WireframeGeometry:Bm});class Vm extends on{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Re(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Hm extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _h extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gm extends _h{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new J(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wm extends on{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Re(16777215),this.specular=new Re(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xm extends on{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Re(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class $m extends on{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Ym extends on{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Sa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qm extends on{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Re(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hi,this.normalScale=new J(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zm extends mn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function gs(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Jm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function jm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tu(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function vh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}function YM(s,e,t,n,i=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],f=[];for(let d=0;d<c.times.length;++d){const p=c.times[d]*i;if(!(p<t||p>=n)){u.push(c.times[d]);for(let _=0;_<h;++_)f.push(c.values[d*h+_])}}u.length!==0&&(c.times=gs(u,c.times.constructor),c.values=gs(f,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function qM(s,e=0,t=s,n=30){n<=0&&(n=30);const i=t.tracks.length,r=e/n;for(let a=0;a<i;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const p=o.times.length-1;let _;if(r<=o.times[0]){const m=h,v=u-h;_=o.values.slice(m,v)}else if(r>=o.times[p]){const m=p*u+h,v=m+u-h;_=o.values.slice(m,v)}else{const m=o.createInterpolant(),v=h,x=u-h;m.evaluate(r),_=m.resultBuffer.slice(v,x)}l==="quaternion"&&new nn().fromArray(_).normalize().conjugate().toArray(_);const g=c.times.length;for(let m=0;m<g;++m){const v=m*d+f;if(l==="quaternion")nn.multiplyQuaternionsFlat(c.values,v,_,0,c.values,v);else{const x=d-f*2;for(let y=0;y<x;++y)c.values[v+y]-=_[y]}}}return s.blendMode=Ju,s}const ZM={convertArray:gs,isTypedArray:Jm,getKeyframeOrder:jm,sortedArray:Tu,flattenJSON:vh,subclip:YM,makeClipAdditive:qM};class Da{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Km extends Da{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ds,endingEnd:ds}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ps:r=e,o=2*t-n;break;case sa:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ps:a=e,l=2*n-t;break;case sa:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),_=p*p,g=_*p,m=-f*g+2*f*_-f*p,v=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*p+1,x=(-1-d)*g+(1.5+d)*_+.5*p,y=d*g-d*_;for(let C=0;C!==o;++C)r[C]=m*a[h+C]+v*a[c+C]+x*a[l+C]+y*a[u+C];return r}}class xh extends Da{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}}class Qm extends Da{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Jn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Qm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Km(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ia:t=this.InterpolantFactoryMethodDiscrete;break;case hl:t=this.InterpolantFactoryMethodLinear;break;case No:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ia;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return No}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&Jm(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===No,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,f=u-n,d=u+n;for(let p=0;p!==n;++p){const _=t[u+p];if(_!==t[f+p]||_!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Jn.prototype.TimeBufferType=Float32Array;Jn.prototype.ValueBufferType=Float32Array;Jn.prototype.DefaultInterpolation=hl;class Rs extends Jn{constructor(e,t,n){super(e,t,n)}}Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=ia;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class yh extends Jn{}yh.prototype.ValueTypeName="color";class ma extends Jn{}ma.prototype.ValueTypeName="number";class eg extends Da{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)nn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class La extends Jn{InterpolantFactoryMethodLinear(e){return new eg(this.times,this.values,this.getValueSize(),e)}}La.prototype.ValueTypeName="quaternion";La.prototype.InterpolantFactoryMethodSmooth=void 0;class Ps extends Jn{constructor(e,t,n){super(e,t,n)}}Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=ia;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;class ga extends Jn{}ga.prototype.ValueTypeName="vector";class _a{constructor(e="",t=-1,n=[],i=Dl){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Tn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(jM(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Jn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=jm(l);l=Tu(l,1,h),c=Tu(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ma(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,p,_){if(d.length!==0){const g=[],m=[];vh(d,g,m,p),g.length!==0&&_.push(new u(f,g,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let _=0;_<f[p].morphTargets.length;_++)d[f[p].morphTargets[_]]=-1;for(const _ in d){const g=[],m=[];for(let v=0;v!==f[p].morphTargets.length;++v){const x=f[p];g.push(x.time),m.push(x.morphTarget===_?1:0)}i.push(new ma(".morphTargetInfluence["+_+"]",g,m))}l=d.length*a}else{const d=".bones["+t[u].name+"]";n(ga,d+".position",f,"pos",i),n(La,d+".quaternion",f,"rot",i),n(ga,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function JM(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ma;case"vector":case"vector2":case"vector3":case"vector4":return ga;case"color":return yh;case"quaternion":return La;case"bool":case"boolean":return Rs;case"string":return Ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function jM(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=JM(s.type);if(s.times===void 0){const t=[],n=[];vh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const mi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Mh{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}}const tg=new Mh;class xn{constructor(e){this.manager=e!==void 0?e:tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}xn.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class KM extends Error{constructor(e,t){super(e),this.response=t}}class wi extends xn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=mi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:i});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ui[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let _=0;const g=new ReadableStream({start(m){v();function v(){u.read().then(({done:x,value:y})=>{if(x)m.close();else{_+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let A=0,w=h.length;A<w;A++){const D=h[A];D.onProgress&&D.onProgress(C)}m.enqueue(y),v()}},x=>{m.error(x)})}}});return new Response(g)}else throw new KM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{mi.add(e,c);const h=ui[e];delete ui[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=ui[e];if(h===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class QM extends xn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new wi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=[];for(let n=0;n<e.length;n++){const i=_a.parse(e[n]);t.push(i)}return t}}class eb extends xn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=[],o=new $l,l=new wi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(e[u],function(f){const d=r.parse(f,!0);a[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=kt),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},n,i)}if(Array.isArray(e))for(let u=0,f=e.length;u<f;++u)h(u);else l.load(e,function(u){const f=r.parse(u,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let p=0;p<d;p++){a[p]={mipmaps:[]};for(let _=0;_<f.mipmapCount;_++)a[p].mipmaps.push(f.mipmaps[p*f.mipmapCount+_]),a[p].format=f.format,a[p].width=f.width,a[p].height=f.height}o.image=a}else o.image.width=f.width,o.image.height=f.height,o.mipmaps=f.mipmaps;f.mipmapCount===1&&(o.minFilter=kt),o.format=f.format,o.needsUpdate=!0,t&&t(o)},n,i);return o}}class gr extends xn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=mi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=ua("img");function l(){h(),mi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class tb extends xn{constructor(e){super(e)}load(e,t,n,i){const r=new Ea;r.colorSpace=un;const a=new gr(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,i)}for(let c=0;c<e.length;++c)l(c);return r}}class nb extends xn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new An,o=new wi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:tn,a.wrapT=c.wrapT!==void 0?c.wrapT:tn,a.magFilter=c.magFilter!==void 0?c.magFilter:kt,a.minFilter=c.minFilter!==void 0?c.minFilter:kt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Yn),c.mipmapCount===1&&(a.minFilter=kt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,i),a}}class bh extends xn{constructor(e){super(e)}load(e,t,n,i){const r=new Et,a=new gr(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class $i extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class ng extends $i{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Qc=new He,id=new R,sd=new R;class Sh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new J(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new J(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;id.setFromMatrixPosition(e.matrixWorld),t.position.copy(id),sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sd),t.updateMatrixWorld(),Qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ib extends Sh{constructor(){super(new qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=pr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ig extends $i{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ib}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const rd=new He,Br=new R,eu=new R;class sb extends Sh{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new J(4,2),this._viewportCount=6,this._viewports=[new dt(2,1,1,1),new dt(0,1,1,1),new dt(3,1,1,1),new dt(1,1,1,1),new dt(3,0,1,1),new dt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Br.setFromMatrixPosition(e.matrixWorld),n.position.copy(Br),eu.copy(n.position),eu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(eu),n.updateMatrixWorld(),i.makeTranslation(-Br.x,-Br.y,-Br.z),rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd)}}class sg extends $i{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rb extends Sh{constructor(){super(new Fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rg extends $i{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new rb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ag extends $i{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class og extends $i{constructor(e,t,n=10,i=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class lg{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new R)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*i),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*i)),t.addScaledVector(a[5],1.092548*(i*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(n*r)),t.addScaledVector(a[8],.546274*(n*n-i*i)),t}getIrradianceAt(e,t){const n=e.x,i=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*i),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*i),t.addScaledVector(a[5],2*.429043*i*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*n*r),t.addScaledVector(a[8],.429043*(n*n-i*i)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(e,t+i*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(e,t+i*3);return e}static getBasisAt(e,t){const n=e.x,i=e.y,r=e.z;t[0]=.282095,t[1]=.488603*i,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*i,t[5]=1.092548*i*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-i*i)}}class cg extends $i{constructor(e=new lg,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class oc extends xn{constructor(e){super(e),this.textures={}}load(e,t,n,i){const r=this,a=new wi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t=this.textures;function n(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const i=oc.createMaterialFromType(e.type);if(e.uuid!==void 0&&(i.uuid=e.uuid),e.name!==void 0&&(i.name=e.name),e.color!==void 0&&i.color!==void 0&&i.color.setHex(e.color),e.roughness!==void 0&&(i.roughness=e.roughness),e.metalness!==void 0&&(i.metalness=e.metalness),e.sheen!==void 0&&(i.sheen=e.sheen),e.sheenColor!==void 0&&(i.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(i.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&i.emissive!==void 0&&i.emissive.setHex(e.emissive),e.specular!==void 0&&i.specular!==void 0&&i.specular.setHex(e.specular),e.specularIntensity!==void 0&&(i.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&i.specularColor!==void 0&&i.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(i.shininess=e.shininess),e.clearcoat!==void 0&&(i.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(i.dispersion=e.dispersion),e.iridescence!==void 0&&(i.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(i.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(i.transmission=e.transmission),e.thickness!==void 0&&(i.thickness=e.thickness),e.attenuationDistance!==void 0&&(i.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&i.attenuationColor!==void 0&&i.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(i.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(i.fog=e.fog),e.flatShading!==void 0&&(i.flatShading=e.flatShading),e.blending!==void 0&&(i.blending=e.blending),e.combine!==void 0&&(i.combine=e.combine),e.side!==void 0&&(i.side=e.side),e.shadowSide!==void 0&&(i.shadowSide=e.shadowSide),e.opacity!==void 0&&(i.opacity=e.opacity),e.transparent!==void 0&&(i.transparent=e.transparent),e.alphaTest!==void 0&&(i.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(i.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(i.depthFunc=e.depthFunc),e.depthTest!==void 0&&(i.depthTest=e.depthTest),e.depthWrite!==void 0&&(i.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(i.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(i.blendSrc=e.blendSrc),e.blendDst!==void 0&&(i.blendDst=e.blendDst),e.blendEquation!==void 0&&(i.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(i.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(i.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(i.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&i.blendColor!==void 0&&i.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(i.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(i.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(i.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(i.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(i.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(i.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(i.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(i.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(i.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(i.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(i.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(i.rotation=e.rotation),e.linewidth!==void 0&&(i.linewidth=e.linewidth),e.dashSize!==void 0&&(i.dashSize=e.dashSize),e.gapSize!==void 0&&(i.gapSize=e.gapSize),e.scale!==void 0&&(i.scale=e.scale),e.polygonOffset!==void 0&&(i.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(i.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(i.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(i.dithering=e.dithering),e.alphaToCoverage!==void 0&&(i.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(i.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(i.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(i.visible=e.visible),e.toneMapped!==void 0&&(i.toneMapped=e.toneMapped),e.userData!==void 0&&(i.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?i.vertexColors=e.vertexColors>0:i.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(i.uniforms[r]={},a.type){case"t":i.uniforms[r].value=n(a.value);break;case"c":i.uniforms[r].value=new Re().setHex(a.value);break;case"v2":i.uniforms[r].value=new J().fromArray(a.value);break;case"v3":i.uniforms[r].value=new R().fromArray(a.value);break;case"v4":i.uniforms[r].value=new dt().fromArray(a.value);break;case"m3":i.uniforms[r].value=new et().fromArray(a.value);break;case"m4":i.uniforms[r].value=new He().fromArray(a.value);break;default:i.uniforms[r].value=a.value}}if(e.defines!==void 0&&(i.defines=e.defines),e.vertexShader!==void 0&&(i.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(i.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(i.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)i.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(i.lights=e.lights),e.clipping!==void 0&&(i.clipping=e.clipping),e.size!==void 0&&(i.size=e.size),e.sizeAttenuation!==void 0&&(i.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(i.map=n(e.map)),e.matcap!==void 0&&(i.matcap=n(e.matcap)),e.alphaMap!==void 0&&(i.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(i.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(i.bumpScale=e.bumpScale),e.normalMap!==void 0&&(i.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(i.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),i.normalScale=new J().fromArray(r)}return e.displacementMap!==void 0&&(i.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(i.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(i.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(i.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(i.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(i.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(i.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(i.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(i.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(i.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(i.envMap=n(e.envMap)),e.envMapRotation!==void 0&&i.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(i.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(i.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(i.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(i.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(i.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(i.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(i.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(i.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(i.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(i.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(i.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(i.clearcoatNormalScale=new J().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(i.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(i.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(i.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(i.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(i.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(i.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(i.sheenRoughnessMap=n(e.sheenRoughnessMap)),i}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Vm,SpriteMaterial:oh,RawShaderMaterial:Hm,ShaderMaterial:Rn,PointsMaterial:uh,MeshPhysicalMaterial:Gm,MeshStandardMaterial:_h,MeshPhongMaterial:Wm,MeshToonMaterial:Xm,MeshNormalMaterial:$m,MeshLambertMaterial:Ym,MeshDepthMaterial:zl,MeshDistanceMaterial:Bl,MeshBasicMaterial:ni,MeshMatcapMaterial:qm,LineDashedMaterial:Zm,LineBasicMaterial:mn,Material:on};return new t[e]}}class Au{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ug extends nt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class hg extends xn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new wi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){i?i(l):console.error(l),r.manager.itemError(e)}},n,i)}parse(e){const t={},n={};function i(d,p){if(t[p]!==void 0)return t[p];const g=d.interleavedBuffers[p],m=r(d,g.buffer),v=ir(g.type,m),x=new Wl(v,g.stride);return x.uuid=g.uuid,t[p]=x,x}function r(d,p){if(n[p]!==void 0)return n[p];const g=d.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const a=e.isInstancedBufferGeometry?new ug:new nt,o=e.data.index;if(o!==void 0){const d=ir(o.type,o.array);a.setIndex(new ot(d,1))}const l=e.data.attributes;for(const d in l){const p=l[d];let _;if(p.isInterleavedBufferAttribute){const g=i(e.data,p.data);_=new Ss(g,p.itemSize,p.offset,p.normalized)}else{const g=ir(p.type,p.array),m=p.isInstancedBufferAttribute?ws:ot;_=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),a.setAttribute(d,_)}const c=e.data.morphAttributes;if(c)for(const d in c){const p=c[d],_=[];for(let g=0,m=p.length;g<m;g++){const v=p[g];let x;if(v.isInterleavedBufferAttribute){const y=i(e.data,v.data);x=new Ss(y,v.itemSize,v.offset,v.normalized)}else{const y=ir(v.type,v.array);x=new ot(y,v.itemSize,v.normalized)}v.name!==void 0&&(x.name=v.name),_.push(x)}a.morphAttributes[d]=_}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let d=0,p=u.length;d!==p;++d){const _=u[d];a.addGroup(_.start,_.count,_.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const d=new R;f.center!==void 0&&d.fromArray(f.center),a.boundingSphere=new sn(d,f.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class ab extends xn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=this.path===""?Au.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new wi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){i!==void 0&&i(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},n,i)}async loadAsync(e,t){const n=this,i=this.path===""?Au.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||i;const r=new wi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,i),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,n),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(const f in a)if(a[f].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),i=this.parseGeometries(e.geometries,n),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,i,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,i=e.length;n<i;n++){const r=new ys().fromJSON(e[n]);t[r.uuid]=r}return t}parseSkeletons(e,t){const n={},i={};if(t.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new Xl().fromJSON(e[r],i);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const i=new hg;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=i.parse(l);break;default:l.type in nd?o=nd[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},i={};if(e!==void 0){const r=new oc;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const i=e[n],r=_a.parse(i);t[r.uuid]=r}return t}parseImages(e,t){const n=this,i={};let r;function a(l){return n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(h)}else return l.data?{data:ir(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Mh(t);r=new gr(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const u=e[c],f=u.url;if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const g=f[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?d.push(m):d.push(new An(m.data,m.width,m.height)))}i[u.uuid]=new ms(d)}else{const d=o(u.url);i[u.uuid]=new ms(d)}}}return i}async parseImagesAsync(e){const t=this,n={};let i;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await i.loadAsync(l)}else return a.data?{data:ir(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){i=new gr(this.manager),i.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=await r(d);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new An(p.data,p.width,p.height)))}n[l.uuid]=new ms(h)}else{const h=await r(l.url);n[l.uuid]=new ms(h)}}}return n}parseTextures(e,t){function n(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const i={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new Ea,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new An:h=new Et,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=n(o.mapping,ob)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=n(o.wrap[0],ad),h.wrapT=n(o.wrap[1],ad)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=n(o.minFilter,od)),o.magFilter!==void 0&&(h.magFilter=n(o.magFilter,od)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),i[o.uuid]=h}return i}parseObject(e,t,n,i,r){let a;function o(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function l(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let p=0,_=f.length;p<_;p++){const g=f[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),d.push(n[g])}return d}return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),n[f]}}function c(f){return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),i[f]}let h,u;switch(e.type){case"Scene":a=new Gl,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Re(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Hl(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Vl(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new qt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Fl(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new ag(e.color,e.intensity);break;case"DirectionalLight":a=new rg(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new sg(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new og(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new ig(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new ng(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new cg().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),a=new Em(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),a=new wt(h,u);break;case"InstancedMesh":h=o(e.geometry),u=l(e.material);const f=e.count,d=e.instanceMatrix,p=e.instanceColor;a=new ch(h,u,f),a.instanceMatrix=new ws(new Float32Array(d.array),16),p!==void 0&&(a.instanceColor=new ws(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=l(e.material),a=new Cm(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(_=>{const g=new fn;g.min.fromArray(_.boxMin),g.max.fromArray(_.boxMax);const m=new sn;return m.radius=_.sphereRadius,m.center.fromArray(_.sphereCenter),{boxInitialized:_.boxInitialized,box:g,sphereInitialized:_.sphereInitialized,sphere:m}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":a=new Am;break;case"Line":a=new Bi(o(e.geometry),l(e.material));break;case"LineLoop":a=new Rm(o(e.geometry),l(e.material));break;case"LineSegments":a=new ii(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Pm(o(e.geometry),l(e.material));break;case"Sprite":a=new Tm(l(e.material));break;case"Group":a=new rr;break;case"Bone":a=new lh;break;default:a=new ht}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)a.add(this.parseObject(f[d],t,n,i,r))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const p=f[d];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const p=f[d],_=a.getObjectByProperty("uuid",p.object);_!==void 0&&a.addLevel(_,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=t[n.skeleton];i===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const n=t.target,i=e.getObjectByProperty("uuid",n);i!==void 0?t.target=i:t.target=new ht}})}}const ob={UVMapping:Tl,CubeReflectionMapping:bi,CubeRefractionMapping:zi,EquirectangularReflectionMapping:ea,EquirectangularRefractionMapping:ta,CubeUVReflectionMapping:Mr},ad={RepeatWrapping:pn,ClampToEdgeWrapping:tn,MirroredRepeatWrapping:na},od={NearestFilter:it,NearestMipmapNearestFilter:Bu,NearestMipmapLinearFilter:nr,LinearFilter:kt,LinearMipmapNearestFilter:Gr,LinearMipmapLinearFilter:Yn};class lb extends xn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=mi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return mi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),mi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});mi.add(e,l),r.manager.itemStart(e)}}let So;class wh{static getContext(){return So===void 0&&(So=new(window.AudioContext||window.webkitAudioContext)),So}static setContext(e){So=e}}class cb extends xn{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new wi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);wh.getContext().decodeAudioData(c,function(u){t(u)}).catch(o)}catch(c){o(c)}},n,i);function o(l){i?i(l):console.error(l),r.manager.itemError(e)}}}const ld=new He,cd=new He,ts=new He;class ub{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new qt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new qt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,ts.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,a=t.near*Math.tan(xs*t.fov*.5)/t.zoom;let o,l;cd.elements[12]=-i,ld.elements[12]=i,o=-a*t.aspect+r,l=a*t.aspect+r,ts.elements[0]=2*t.near/(l-o),ts.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(ts),o=-a*t.aspect-r,l=a*t.aspect-r,ts.elements[0]=2*t.near/(l-o),ts.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(ts)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(cd),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(ld)}}class fg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ud(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ud();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ud(){return(typeof performance>"u"?Date:performance).now()}const ns=new R,hd=new nn,hb=new R,is=new R;class fb extends ht{constructor(){super(),this.type="AudioListener",this.context=wh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new fg}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ns,hd,hb),is.set(0,0,-1).applyQuaternion(hd),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(ns.x,i),t.positionY.linearRampToValueAtTime(ns.y,i),t.positionZ.linearRampToValueAtTime(ns.z,i),t.forwardX.linearRampToValueAtTime(is.x,i),t.forwardY.linearRampToValueAtTime(is.y,i),t.forwardZ.linearRampToValueAtTime(is.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(ns.x,ns.y,ns.z),t.setOrientation(is.x,is.y,is.z,n.x,n.y,n.z)}}class dg extends ht{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const ss=new R,fd=new nn,db=new R,rs=new R;class pb extends dg{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ss,fd,db),rs.set(0,0,1).applyQuaternion(fd);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(ss.x,n),t.positionY.linearRampToValueAtTime(ss.y,n),t.positionZ.linearRampToValueAtTime(ss.z,n),t.orientationX.linearRampToValueAtTime(rs.x,n),t.orientationY.linearRampToValueAtTime(rs.y,n),t.orientationZ.linearRampToValueAtTime(rs.z,n)}else t.setPosition(ss.x,ss.y,ss.z),t.setOrientation(rs.x,rs.y,rs.z)}}class mb{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class pg{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){nn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;nn.multiplyQuaternionsFlat(e,a,e,t,e,n),nn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const Th="\\[\\]\\.:\\/",gb=new RegExp("["+Th+"]","g"),Ah="[^"+Th+"]",_b="[^"+Th.replace("\\.","")+"]",vb=/((?:WC+[\/:])*)/.source.replace("WC",Ah),xb=/(WCOD+)?/.source.replace("WCOD",_b),yb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ah),Mb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ah),bb=new RegExp("^"+vb+xb+yb+Mb+"$"),Sb=["material","materials","bones","map"];class wb{constructor(e,t,n){const i=n||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ct{constructor(e,t,n){this.path=t,this.parsedPath=n||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,n):new ct(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gb,"")}static parseTrackName(e){const t=bb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Sb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=wb;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Tb{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Tn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,i=arguments.length;n!==i;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const f=arguments[h],d=f.uuid;let p=t[d];if(p===void 0){p=l++,t[d]=p,e.push(f);for(let _=0,g=a;_!==g;++_)r[_].push(new ct(f,n[_],i[_]))}else if(p<c){o=e[p];const _=--c,g=e[_];t[g.uuid]=p,e[p]=g,t[d]=_,e[_]=f;for(let m=0,v=a;m!==v;++m){const x=r[m],y=x[_];let C=x[p];x[p]=y,C===void 0&&(C=new ct(f,n[m],i[m])),x[_]=C}}else e[p]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const u=r++,f=e[u];t[f.uuid]=h,e[h]=f,t[c]=u,e[u]=l;for(let d=0,p=i;d!==p;++d){const _=n[d],g=_[u],m=_[h];_[h]=g,_[u]=m}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const f=--r,d=e[f],p=--a,_=e[p];t[d.uuid]=u,e[u]=d,t[_.uuid]=f,e[f]=_,e.pop();for(let g=0,m=i;g!==m;++g){const v=n[g],x=v[f],y=v[p];v[u]=x,v[f]=y,v.pop()}}else{const f=--a,d=e[f];f>0&&(t[d.uuid]=u),e[u]=d,e.pop();for(let p=0,_=i;p!==_;++p){const g=n[p];g[u]=g[f],g.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const n=this._bindingsIndicesByPath;let i=n[e];const r=this._bindings;if(i!==void 0)return r[i];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);i=r.length,n[e]=i,a.push(e),o.push(t),r.push(u);for(let f=h,d=l.length;f!==d;++f){const p=l[f];u[f]=new ct(p,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const i=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),r[n]=r[o],r.pop(),i[n]=i[o],i.pop()}}}class mg{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:ds,endingEnd:ds};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Qp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ju:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Dl:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===em;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Kp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ps,i.endingEnd=ps):(e?i.endingStart=this.zeroSlopeAtStart?ps:ds:i.endingStart=sa,t?i.endingEnd=this.zeroSlopeAtEnd?ps:ds:i.endingEnd=sa)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=n,this}}const Ab=new Float32Array(1);class Eb extends ti{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const f=i[u],d=f.name;let p=h[d];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;p=new pg(ct.create(n,d,_),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new xh(new Float32Array(2),new Float32Array(2),1,Ab),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?_a.findByName(i,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Dl),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new mg(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?_a.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Eh{constructor(e){this.value=e}clone(){return new Eh(this.value.clone===void 0?this.value:this.value.clone())}}let Cb=0;class Rb extends ti{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Cb++}),this.name="",this.usage=la,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,i=t.length;n<i;n++){const r=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class Pb extends Wl{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class Ib{constructor(e,t,n,i,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=i,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const dd=new He;class Db{constructor(e,t,n=0,i=1/0){this.ray=new Cs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ul,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return dd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(dd),this}intersectObject(e,t=!0,n=[]){return Eu(e,this,n,t),n.sort(pd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Eu(e[i],this,n,t);return n.sort(pd),n}}function pd(s,e){return s.distance-e.distance}function Eu(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Eu(r[a],e,t,!0)}}class Cu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Lb{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Ch{constructor(e,t,n,i){Ch.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=i,this}}const md=new J;class Nb{constructor(e=new J(1/0,1/0),t=new J(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=md.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,md).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gd=new R,wo=new R;class Ub{constructor(e=new R,t=new R){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){gd.subVectors(e,this.start),wo.subVectors(this.end,this.start);const n=wo.dot(wo);let r=wo.dot(gd)/n;return t&&(r=Dt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const _d=new R;class Ob extends ht{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new nt,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new Ne(i,3));const r=new mn({fog:!1,toneMapped:!1});this.cone=new ii(n,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),_d.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(_d),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Oi=new R,To=new He,tu=new He;class Fb extends ii{constructor(e){const t=gg(e),n=new nt,i=[],r=[],a=new Re(0,0,1),o=new Re(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}n.setAttribute("position",new Ne(i,3)),n.setAttribute("color",new Ne(r,3));const l=new mn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,i=n.getAttribute("position");tu.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(To.multiplyMatrices(tu,o.matrixWorld),Oi.setFromMatrixPosition(To),i.setXYZ(a,Oi.x,Oi.y,Oi.z),To.multiplyMatrices(tu,o.parent.matrixWorld),Oi.setFromMatrixPosition(To),i.setXYZ(a+1,Oi.x,Oi.y,Oi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function gg(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,gg(s.children[t]));return e}class kb extends wt{constructor(e,t,n){const i=new Ia(t,4,2),r=new ni({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const zb=new R,vd=new Re,xd=new Re;class Bb extends ht{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Pa(t);i.rotateY(Math.PI*.5),this.material=new ni({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),a=new Float32Array(r.count*3);i.setAttribute("color",new ot(a,3)),this.add(new wt(i,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");vd.copy(this.light.color),xd.copy(this.light.groundColor);for(let n=0,i=t.count;n<i;n++){const r=n<i/2?vd:xd;t.setXYZ(n,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(zb.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Vb extends ii{constructor(e=10,t=10,n=4473924,i=8947848){n=new Re(n),i=new Re(i);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,p=-o;f<=t;f++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const _=f===r?n:i;_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3,_.toArray(c,d),d+=3}const h=new nt;h.setAttribute("position",new Ne(l,3)),h.setAttribute("color",new Ne(c,3));const u=new mn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Hb extends ii{constructor(e=10,t=16,n=8,i=64,r=4473924,a=8947848){r=new Re(r),a=new Re(a);const o=[],l=[];if(t>1)for(let u=0;u<t;u++){const f=u/t*(Math.PI*2),d=Math.sin(f)*e,p=Math.cos(f)*e;o.push(0,0,0),o.push(d,0,p);const _=u&1?r:a;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let u=0;u<n;u++){const f=u&1?r:a,d=e-e/n*u;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d;o.push(g,0,m),l.push(f.r,f.g,f.b),_=(p+1)/i*(Math.PI*2),g=Math.sin(_)*d,m=Math.cos(_)*d,o.push(g,0,m),l.push(f.r,f.g,f.b)}}const c=new nt;c.setAttribute("position",new Ne(o,3)),c.setAttribute("color",new Ne(l,3));const h=new mn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const yd=new R,Ao=new R,Md=new R;class Gb extends ht{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new nt;i.setAttribute("position",new Ne([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new mn({fog:!1,toneMapped:!1});this.lightPlane=new Bi(i,r),this.add(this.lightPlane),i=new nt,i.setAttribute("position",new Ne([0,0,0,0,0,1],3)),this.targetLine=new Bi(i,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),yd.setFromMatrixPosition(this.light.matrixWorld),Ao.setFromMatrixPosition(this.light.target.matrixWorld),Md.subVectors(Ao,yd),this.lightPlane.lookAt(Ao),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ao),this.targetLine.scale.z=Md.length()}}const Eo=new R,Pt=new Aa;class Wb extends ii{constructor(e){const t=new nt,n=new mn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,_){l(p),l(_)}function l(p){i.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(i.length/3-1)}t.setAttribute("position",new Ne(i,3)),t.setAttribute("color",new Ne(r,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new Re(16755200),h=new Re(16711680),u=new Re(43775),f=new Re(16777215),d=new Re(3355443);this.setColors(c,h,u,f,d)}setColors(e,t,n,i,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,i.r,i.g,i.b),o.setXYZ(39,i.r,i.g,i.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;Pt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Nt("c",t,e,Pt,0,0,-1),Nt("t",t,e,Pt,0,0,1),Nt("n1",t,e,Pt,-n,-i,-1),Nt("n2",t,e,Pt,n,-i,-1),Nt("n3",t,e,Pt,-n,i,-1),Nt("n4",t,e,Pt,n,i,-1),Nt("f1",t,e,Pt,-n,-i,1),Nt("f2",t,e,Pt,n,-i,1),Nt("f3",t,e,Pt,-n,i,1),Nt("f4",t,e,Pt,n,i,1),Nt("u1",t,e,Pt,n*.7,i*1.1,-1),Nt("u2",t,e,Pt,-n*.7,i*1.1,-1),Nt("u3",t,e,Pt,0,i*2,-1),Nt("cf1",t,e,Pt,-n,0,1),Nt("cf2",t,e,Pt,n,0,1),Nt("cf3",t,e,Pt,0,-i,1),Nt("cf4",t,e,Pt,0,i,1),Nt("cn1",t,e,Pt,-n,0,-1),Nt("cn2",t,e,Pt,n,0,-1),Nt("cn3",t,e,Pt,0,-i,-1),Nt("cn4",t,e,Pt,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Nt(s,e,t,n,i,r,a){Eo.set(i,r,a).unproject(n);const o=e[s];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],Eo.x,Eo.y,Eo.z)}}const Co=new fn;class Xb extends ii{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(8*3),r=new nt;r.setIndex(new ot(n,1)),r.setAttribute("position",new ot(i,3)),super(r,new mn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Co.setFromObject(this.object),Co.isEmpty())return;const t=Co.min,n=Co.max,i=this.geometry.attributes.position,r=i.array;r[0]=n.x,r[1]=n.y,r[2]=n.z,r[3]=t.x,r[4]=n.y,r[5]=n.z,r[6]=t.x,r[7]=t.y,r[8]=n.z,r[9]=n.x,r[10]=t.y,r[11]=n.z,r[12]=n.x,r[13]=n.y,r[14]=t.z,r[15]=t.x,r[16]=n.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=n.x,r[22]=t.y,r[23]=t.z,i.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class $b extends ii{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new nt;r.setIndex(new ot(n,1)),r.setAttribute("position",new Ne(i,3)),super(r,new mn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Yb extends Bi{constructor(e,t=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new nt;a.setAttribute("position",new Ne(r,3)),a.computeBoundingSphere(),super(a,new mn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new nt;l.setAttribute("position",new Ne(o,3)),l.computeBoundingSphere(),this.add(new wt(l,new ni({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const bd=new R;let Ro,nu;class qb extends ht{constructor(e=new R(0,0,1),t=new R(0,0,0),n=1,i=16776960,r=n*.2,a=r*.2){super(),this.type="ArrowHelper",Ro===void 0&&(Ro=new nt,Ro.setAttribute("position",new Ne([0,0,0,0,1,0],3)),nu=new Sr(0,.5,1,5,1),nu.translate(0,-.5,0)),this.position.copy(t),this.line=new Bi(Ro,new mn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new wt(nu,new ni({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{bd.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(bd,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Zb extends ii{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new nt;i.setAttribute("position",new Ne(t,3)),i.setAttribute("color",new Ne(n,3));const r=new mn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Re,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Jb{constructor(){this.type="ShapePath",this.color=new Re,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new ha,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,r,a){return this.currentPath.bezierCurveTo(e,t,n,i,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const v=[];for(let x=0,y=m.length;x<y;x++){const C=m[x],A=new ys;A.curves=C.curves,v.push(A)}return v}function n(m,v){const x=v.length;let y=!1;for(let C=x-1,A=0;A<x;C=A++){let w=v[C],D=v[A],T=D.x-w.x,M=D.y-w.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(w=v[A],T=-T,D=v[C],M=-M),m.y<w.y||m.y>D.y)continue;if(m.y===w.y){if(m.x===w.x)return!0}else{const I=M*(m.x-w.x)-T*(m.y-w.y);if(I===0)return!0;if(I<0)continue;y=!y}}else{if(m.y!==w.y)continue;if(D.x<=m.x&&m.x<=w.x||w.x<=m.x&&m.x<=D.x)return!0}}return y}const i=Qn.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new ys,l.curves=o.curves,c.push(l),c;let h=!i(r[0].getPoints());h=e?!h:h;const u=[],f=[];let d=[],p=0,_;f[p]=void 0,d[p]=[];for(let m=0,v=r.length;m<v;m++)o=r[m],_=o.getPoints(),a=i(_),a=e?!a:a,a?(!h&&f[p]&&p++,f[p]={s:new ys,p:_},f[p].s.curves=o.curves,h&&p++,d[p]=[]):d[p].push({h:o,p:_[0]});if(!f[0])return t(r);if(f.length>1){let m=!1,v=0;for(let x=0,y=f.length;x<y;x++)u[x]=[];for(let x=0,y=f.length;x<y;x++){const C=d[x];for(let A=0;A<C.length;A++){const w=C[A];let D=!0;for(let T=0;T<f.length;T++)n(w.p,f[T].p)&&(x!==T&&v++,D?(D=!1,u[T].push(w)):m=!0);D&&u[x].push(w)}}v>0&&m===!1&&(d=u)}let g;for(let m=0,v=f.length;m<v;m++){l=f[m].s,c.push(l),g=d[m];for(let x=0,y=g.length;x<y;x++)l.holes.push(g[x].h)}return c}}class jb extends Bn{constructor(e=1,t=1,n=1,i={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...i,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);const Kb=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:zu,AddEquation:ki,AddOperation:Wp,AdditiveAnimationBlendMode:Ju,AdditiveBlending:fu,AgXToneMapping:Zp,AlphaFormat:Wu,AlwaysCompare:cm,AlwaysDepth:Fp,AlwaysStencilFunc:gu,AmbientLight:ag,AnimationAction:mg,AnimationClip:_a,AnimationLoader:QM,AnimationMixer:Eb,AnimationObjectGroup:Tb,AnimationUtils:ZM,ArcCurve:Im,ArrayCamera:bm,ArrowHelper:qb,AttachedBindMode:mu,Audio:dg,AudioAnalyser:mb,AudioContext:wh,AudioListener:fb,AudioLoader:cb,AxesHelper:Zb,BackSide:Wt,BasicDepthPacking:tm,BasicShadowMap:Jg,BatchedMesh:Cm,Bone:lh,BooleanKeyframeTrack:Rs,Box2:Nb,Box3:fn,Box3Helper:$b,BoxGeometry:Gi,BoxHelper:Xb,BufferAttribute:ot,BufferGeometry:nt,BufferGeometryLoader:hg,ByteType:Vu,Cache:mi,Camera:Aa,CameraHelper:Wb,CanvasTexture:bu,CapsuleGeometry:ql,CatmullRomCurve3:Dm,CineonToneMapping:Yp,CircleGeometry:Zl,ClampToEdgeWrapping:tn,Clock:fg,Color:Re,ColorKeyframeTrack:yh,ColorManagement:ut,CompressedArrayTexture:vM,CompressedCubeTexture:xM,CompressedTexture:$l,CompressedTextureLoader:eb,ConeGeometry:Jl,ConstantAlphaFactor:Np,ConstantColorFactor:Dp,CubeCamera:ih,CubeReflectionMapping:bi,CubeRefractionMapping:zi,CubeTexture:Ea,CubeTextureLoader:tb,CubeUVReflectionMapping:Mr,CubicBezierCurve:fh,CubicBezierCurve3:Lm,CubicInterpolant:Km,CullFaceBack:hu,CullFaceFront:_p,CullFaceFrontBack:Zg,CullFaceNone:gp,Curve:Zn,CurvePath:Um,CustomBlending:vp,CustomToneMapping:qp,CylinderGeometry:Sr,Cylindrical:Lb,Data3DTexture:eh,DataArrayTexture:Nl,DataTexture:An,DataTextureLoader:nb,DataUtils:l_,DecrementStencilOp:u0,DecrementWrapStencilOp:f0,DefaultLoadingManager:tg,DepthFormat:vs,DepthStencilFormat:bs,DepthTexture:ah,DetachedBindMode:jp,DirectionalLight:rg,DirectionalLightHelper:Gb,DiscreteInterpolant:Qm,DisplayP3ColorSpace:Ll,DodecahedronGeometry:jl,DoubleSide:$n,DstAlphaFactor:Ep,DstColorFactor:Rp,DynamicCopyUsage:E0,DynamicDrawUsage:M0,DynamicReadUsage:w0,EdgesGeometry:Om,EllipseCurve:Yl,EqualCompare:rm,EqualDepth:zp,EqualStencilFunc:g0,EquirectangularReflectionMapping:ea,EquirectangularRefractionMapping:ta,Euler:Cn,EventDispatcher:ti,ExtrudeGeometry:Ql,FileLoader:wi,Float16BufferAttribute:p_,Float32BufferAttribute:Ne,FloatType:Ht,Fog:Hl,FogExp2:Vl,FramebufferTexture:_M,FrontSide:Mi,Frustum:Ca,GLBufferAttribute:Ib,GLSL1:R0,GLSL3:_u,GreaterCompare:am,GreaterDepth:Vp,GreaterEqualCompare:lm,GreaterEqualDepth:Bp,GreaterEqualStencilFunc:y0,GreaterStencilFunc:v0,GridHelper:Vb,Group:rr,HalfFloatType:Es,HemisphereLight:ng,HemisphereLightHelper:Bb,IcosahedronGeometry:ec,ImageBitmapLoader:lb,ImageLoader:gr,ImageUtils:fm,IncrementStencilOp:c0,IncrementWrapStencilOp:h0,InstancedBufferAttribute:ws,InstancedBufferGeometry:ug,InstancedInterleavedBuffer:Pb,InstancedMesh:ch,Int16BufferAttribute:f_,Int32BufferAttribute:d_,Int8BufferAttribute:c_,IntType:Al,InterleavedBuffer:Wl,InterleavedBufferAttribute:Ss,Interpolant:Da,InterpolateDiscrete:ia,InterpolateLinear:hl,InterpolateSmooth:No,InvertStencilOp:d0,KeepStencilOp:cs,KeyframeTrack:Jn,LOD:Am,LatheGeometry:Ra,Layers:Ul,LessCompare:sm,LessDepth:kp,LessEqualCompare:Ku,LessEqualDepth:Qr,LessEqualStencilFunc:_0,LessStencilFunc:m0,Light:$i,LightProbe:cg,Line:Bi,Line3:Ub,LineBasicMaterial:mn,LineCurve:dh,LineCurve3:Nm,LineDashedMaterial:Zm,LineLoop:Rm,LineSegments:ii,LinearDisplayP3ColorSpace:Ta,LinearFilter:kt,LinearInterpolant:xh,LinearMipMapLinearFilter:e0,LinearMipMapNearestFilter:Qg,LinearMipmapLinearFilter:Yn,LinearMipmapNearestFilter:Gr,LinearSRGBColorSpace:Ti,LinearToneMapping:Xp,LinearTransfer:ra,Loader:xn,LoaderUtils:Au,LoadingManager:Mh,LoopOnce:Kp,LoopPingPong:em,LoopRepeat:Qp,LuminanceAlphaFormat:Yu,LuminanceFormat:$u,MOUSE:os,Material:on,MaterialLoader:oc,MathUtils:fl,Matrix2:Ch,Matrix3:et,Matrix4:He,MaxEquation:bp,Mesh:wt,MeshBasicMaterial:ni,MeshDepthMaterial:zl,MeshDistanceMaterial:Bl,MeshLambertMaterial:Ym,MeshMatcapMaterial:qm,MeshNormalMaterial:$m,MeshPhongMaterial:Wm,MeshPhysicalMaterial:Gm,MeshStandardMaterial:_h,MeshToonMaterial:Xm,MinEquation:Mp,MirroredRepeatWrapping:na,MixOperation:Gp,MultiplyBlending:pu,MultiplyOperation:Sa,NearestFilter:it,NearestMipMapLinearFilter:Kg,NearestMipMapNearestFilter:jg,NearestMipmapLinearFilter:nr,NearestMipmapNearestFilter:Bu,NeutralToneMapping:Jp,NeverCompare:im,NeverDepth:Op,NeverStencilFunc:p0,NoBlending:gi,NoColorSpace:fi,NoToneMapping:_i,NormalAnimationBlendMode:Dl,NormalBlending:_s,NotEqualCompare:om,NotEqualDepth:Hp,NotEqualStencilFunc:x0,NumberKeyframeTrack:ma,Object3D:ht,ObjectLoader:ab,ObjectSpaceNormalMap:nm,OctahedronGeometry:Pa,OneFactor:wp,OneMinusConstantAlphaFactor:Up,OneMinusConstantColorFactor:Lp,OneMinusDstAlphaFactor:Cp,OneMinusDstColorFactor:Pp,OneMinusSrcAlphaFactor:ko,OneMinusSrcColorFactor:Ap,OrthographicCamera:Fl,P3Primaries:oa,PCFShadowMap:ku,PCFSoftShadowMap:wl,PMREMGenerator:vu,Path:ha,PerspectiveCamera:qt,Plane:hi,PlaneGeometry:Wi,PlaneHelper:Yb,PointLight:sg,PointLightHelper:kb,Points:Pm,PointsMaterial:uh,PolarGridHelper:Hb,PolyhedronGeometry:Xi,PositionalAudio:pb,PropertyBinding:ct,PropertyMixer:pg,QuadraticBezierCurve:ph,QuadraticBezierCurve3:mh,Quaternion:nn,QuaternionKeyframeTrack:La,QuaternionLinearInterpolant:eg,RED_GREEN_RGTC2_Format:cl,RED_RGTC1_Format:Zu,REVISION:ba,RGBADepthPacking:ju,RGBAFormat:Gt,RGBAIntegerFormat:Il,RGBA_ASTC_10x10_Format:il,RGBA_ASTC_10x5_Format:el,RGBA_ASTC_10x6_Format:tl,RGBA_ASTC_10x8_Format:nl,RGBA_ASTC_12x10_Format:sl,RGBA_ASTC_12x12_Format:rl,RGBA_ASTC_4x4_Format:$o,RGBA_ASTC_5x4_Format:Yo,RGBA_ASTC_5x5_Format:qo,RGBA_ASTC_6x5_Format:Zo,RGBA_ASTC_6x6_Format:Jo,RGBA_ASTC_8x5_Format:jo,RGBA_ASTC_8x6_Format:Ko,RGBA_ASTC_8x8_Format:Qo,RGBA_BPTC_Format:qr,RGBA_ETC2_EAC_Format:Xo,RGBA_PVRTC_2BPPV1_Format:Ho,RGBA_PVRTC_4BPPV1_Format:Vo,RGBA_S3TC_DXT1_Format:Xr,RGBA_S3TC_DXT3_Format:$r,RGBA_S3TC_DXT5_Format:Yr,RGBDepthPacking:r0,RGBFormat:Xu,RGBIntegerFormat:t0,RGB_BPTC_SIGNED_Format:al,RGB_BPTC_UNSIGNED_Format:ol,RGB_ETC1_Format:Go,RGB_ETC2_Format:Wo,RGB_PVRTC_2BPPV1_Format:Bo,RGB_PVRTC_4BPPV1_Format:zo,RGB_S3TC_DXT1_Format:Wr,RGDepthPacking:a0,RGFormat:qu,RGIntegerFormat:Pl,RawShaderMaterial:Hm,Ray:Cs,Raycaster:Db,Rec709Primaries:aa,RectAreaLight:og,RedFormat:Rl,RedIntegerFormat:wa,ReinhardToneMapping:$p,RenderTarget:dm,RepeatWrapping:pn,ReplaceStencilOp:l0,ReverseSubtractEquation:yp,RingGeometry:tc,SIGNED_RED_GREEN_RGTC2_Format:ul,SIGNED_RED_RGTC1_Format:ll,SRGBColorSpace:un,SRGBTransfer:Mt,Scene:Gl,ShaderChunk:Ge,ShaderLib:kn,ShaderMaterial:Rn,ShadowMaterial:Vm,Shape:ys,ShapeGeometry:nc,ShapePath:Jb,ShapeUtils:Qn,ShortType:Hu,Skeleton:Xl,SkeletonHelper:Fb,SkinnedMesh:Em,Source:ms,Sphere:sn,SphereGeometry:Ia,Spherical:Cu,SphericalHarmonics3:lg,SplineCurve:gh,SpotLight:ig,SpotLightHelper:Ob,Sprite:Tm,SpriteMaterial:oh,SrcAlphaFactor:Fo,SrcAlphaSaturateFactor:Ip,SrcColorFactor:Tp,StaticCopyUsage:A0,StaticDrawUsage:la,StaticReadUsage:S0,StereoCamera:ub,StreamCopyUsage:C0,StreamDrawUsage:b0,StreamReadUsage:T0,StringKeyframeTrack:Ps,SubtractEquation:xp,SubtractiveBlending:du,TOUCH:ls,TangentSpaceNormalMap:Hi,TetrahedronGeometry:ic,Texture:Et,TextureLoader:bh,TextureUtils:J1,TorusGeometry:sc,TorusKnotGeometry:rc,Triangle:wn,TriangleFanDrawMode:s0,TriangleStripDrawMode:i0,TrianglesDrawMode:n0,TubeGeometry:ac,UVMapping:Tl,Uint16BufferAttribute:th,Uint32BufferAttribute:nh,Uint8BufferAttribute:u_,Uint8ClampedBufferAttribute:h_,Uniform:Eh,UniformsGroup:Rb,UniformsLib:Se,UniformsUtils:Ol,UnsignedByteType:ei,UnsignedInt248Type:Ms,UnsignedInt5999Type:Gu,UnsignedIntType:Si,UnsignedShort4444Type:El,UnsignedShort5551Type:Cl,UnsignedShortType:dr,VSMShadowMap:jn,Vector2:J,Vector3:R,Vector4:dt,VectorKeyframeTrack:ga,VideoTexture:gM,WebGL3DRenderTarget:K0,WebGLArrayRenderTarget:j0,WebGLCoordinateSystem:Kn,WebGLCubeRenderTarget:sh,WebGLMultipleRenderTargets:jb,WebGLRenderTarget:Bn,WebGLRenderer:Sm,WebGLUtils:Mm,WebGPUCoordinateSystem:ca,WireframeGeometry:Bm,WrapAroundEnding:sa,ZeroCurvatureEnding:ds,ZeroFactor:Sp,ZeroSlopeEnding:ps,ZeroStencilOp:o0,createCanvasElement:hm},Symbol.toStringTag,{value:"Module"}));function Qb(s){return{all:s=s||new Map,on:function(e,t){var n=s.get(e);n?n.push(t):s.set(e,[t])},off:function(e,t){var n=s.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var n=s.get(e);n&&n.slice().map(function(i){i(t)}),(n=s.get("*"))&&n.slice().map(function(i){i(e,t)})}}}class Fi{constructor(){St(this,"allVertices",{});St(this,"isolatedVertices",{});St(this,"connectedVertices",{});St(this,"sortedConnectedValues",[]);St(this,"needsSort",!1);St(this,"emitter",Qb());St(this,"emit",this.emitter.emit.bind(this.emitter));St(this,"on",this.emitter.on.bind(this.emitter));St(this,"off",this.emitter.off.bind(this.emitter));St(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,n){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let i=this.allVertices[e];i?i.value===void 0&&(i.value=t):(i={value:t,previous:new Set,next:new Set},this.allVertices[e]=i);const r=i.next.size>0||i.previous.size>0;if(!(n!=null&&n.after)&&!(n!=null&&n.before)&&!r){this.isolatedVertices[e]=i,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=i;if(n!=null&&n.after){const a=Array.isArray(n.after)?n.after:[n.after];a.forEach(o=>{i.previous.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.next.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[l]=this.allVertices[l])})}if(n!=null&&n.before){const a=Array.isArray(n.before)?n.before:[n.before];a.forEach(o=>{i.next.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.previous.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[l]=this.allVertices[l])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const i=this.connectedVertices[t];i&&(i.next.forEach(r=>{const a=this.connectedVertices[r];a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),i.previous.forEach(r=>{const a=this.connectedVertices[r];a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((n,i)=>{t.push(e(n,i))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(n=>{const i=this.isolatedVertices[n];i.value!==void 0&&e(i.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var a;const e=new Map,t=[],n=[],i=Reflect.ownKeys(this.connectedVertices).filter(o=>this.connectedVertices[o].value!==void 0);for(i.forEach(o=>{e.set(o,0)}),i.forEach(o=>{this.connectedVertices[o].next.forEach(c=>{this.connectedVertices[c]&&e.set(c,(e.get(c)||0)+1)})}),e.forEach((o,l)=>{o===0&&t.push(l)});t.length>0;){const o=t.shift();n.push(o);const l=i.find(c=>c===o);l&&((a=this.connectedVertices[l])==null||a.next.forEach(c=>{const h=(e.get(c)||0)-1;e.set(c,h),h===0&&t.push(c)}))}if(n.length!==i.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const r=o=>o!==void 0;this.sortedConnectedValues=n.map(o=>this.connectedVertices[o].value).filter(r),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class eS{constructor(e,t,n){St(this,"key");St(this,"stage");St(this,"callback");St(this,"runTask",!0);this.stage=e,this.key=t,this.callback=n}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class tS extends Fi{constructor(t,n,i){super();St(this,"key");St(this,"scheduler");St(this,"callback",(t,n)=>n());St(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=n,i&&(this.callback=i.bind(this))}get tasks(){return this.sortedVertices}createTask(t,n,i){const r=new eS(this,t,n);return this.add(t,r,i),r}getTask(t){return this.getValueByKey(t)}run(t){this.callback(t,n=>{this.forEachNode(i=>{i.run(n??t)})})}runWithTiming(t){const n={};return this.callback(t,i=>{this.forEachNode(r=>{const a=performance.now();r.run(i??t);const o=performance.now()-a;n[r.key]=o})}),n}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class nS extends Fi{constructor(t){super();St(this,"lastTime",performance.now());St(this,"clampDeltaTo",.1);St(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,n){const i=new tS(this,t,n==null?void 0:n.callback);return this.add(t,i,{after:n==null?void 0:n.after,before:n==null?void 0:n.before}),i}getStage(t){return this.getValueByKey(t)}run(t){const n=t-this.lastTime;this.forEachNode(i=>{i.run(Math.min(n/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const n=t-this.lastTime,i={},r=performance.now();return this.forEachNode(a=>{const o=performance.now(),l=a.runWithTiming(Math.min(n/1e3,this.clampDeltaTo)),c=performance.now()-o;i[a.key.toString()]={duration:c,tasks:l}}),{total:performance.now()-r,stages:i}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(n=>{if(n===void 0)throw new Error("Stage not found");return{key:n.key.toString(),tasks:t.tasks?n.getSchedule():void 0}})}}dispose(){this.clear()}}const _n=(s,e)=>{const t=Fu(s,r=>r);let n;const i=t.subscribe(async r=>{n&&n();const a=await e(r);a&&(n=a)});vn(()=>{i(),n&&n()})},Xn=s=>{const e=Vt(s),t={set:n=>{t.current=n,e.set(n)},subscribe:e.subscribe,update:n=>{const i=n(t.current);t.current=i,e.set(i)},current:s};return t},lc=new qt(75,0,.1,1e3);lc.position.z=5;lc.lookAt(0,0,0);const iS=()=>lc,sS=s=>{_n(s.size,e=>{if(s.camera.current===lc){const t=s.camera.current;t.aspect=e.width/e.height,t.updateProjectionMatrix(),s.invalidate()}})},rS=Symbol("use-legacy-frame-compatibility-context"),aS=()=>{const s={useFrameOrders:[],useRenderOrders:[]};return qn(rS,s),s},oS=s=>{const e={frameInvalidated:!0,advance:!1,autoInvalidations:new Set,resetFrameInvalidation:()=>{e.frameInvalidated=!1,e.advance=!1},dispose:async(c=!1)=>{await Hg(),!(!e.shouldDispose&&!c)&&(e.disposableObjects.forEach((h,u)=>{var f;(h===0||c)&&((f=u==null?void 0:u.dispose)==null||f.call(u),e.disposableObjects.delete(u))}),e.shouldDispose=!1)},collectDisposableObjects:(c,h)=>{const u=h??[];return c&&(c!=null&&c.dispose&&typeof c.dispose=="function"&&c.type!=="Scene"&&u.push(c),Object.entries(c).forEach(([f,d])=>{if(f==="parent"||f==="children"||typeof d!="object")return;const p=d;p!=null&&p.dispose&&e.collectDisposableObjects(p,u)})),u},addDisposableObjects:c=>{c.forEach(h=>{const u=e.disposableObjects.get(h);u?e.disposableObjects.set(h,u+1):e.disposableObjects.set(h,1)})},removeDisposableObjects:c=>{c.length!==0&&(c.forEach(h=>{const u=e.disposableObjects.get(h);u&&u>0&&e.disposableObjects.set(h,u-1)}),e.shouldDispose=!0)},disposableObjects:new Map,shouldDispose:!1},{useRenderOrders:t}=aS(),n=new nS,i=n.createStage(Symbol("threlte-main-stage")),r=n.createStage(Symbol("threlte-render-stage"),{after:i,callback(c,h){o.shouldRender()&&h()}}),a=r.createTask(Symbol("threlte-auto-render-task"),c=>{t.length>0||o.renderer.render(o.scene,o.camera.current)}),o={size:Fu([s.userSize,s.parentSize],([c,h])=>c||h),camera:Xn(iS()),scene:new Gl,renderer:void 0,invalidate:()=>{e.frameInvalidated=!0},advance:()=>{e.advance=!0},colorSpace:Xn(s.colorSpace),toneMapping:Xn(s.toneMapping),dpr:Xn(s.dpr),useLegacyLights:Xn(s.useLegacyLights),shadows:Xn(s.shadows),colorManagementEnabled:Xn(s.colorManagementEnabled),renderMode:Xn(s.renderMode),autoRender:Xn(s.autoRender),scheduler:n,mainStage:i,renderStage:r,autoRenderTask:a,shouldRender:()=>o.renderMode.current==="always"||o.renderMode.current==="on-demand"&&(e.frameInvalidated||e.autoInvalidations.size>0)||o.renderMode.current==="manual"&&e.advance};sS(o);const l=Xn({});return qn("threlte",o),qn("threlte-internal-context",e),qn("threlte-user-context",l),o},Rh=typeof window<"u",lS=()=>{const s=Xn({width:0,height:0});if(!Rh)return{parentSize:s,parentSizeAction:()=>{}};const e={childList:!0,subtree:!1,attributes:!1};let t;const n=o=>{i.disconnect(),r.disconnect(),i.observe(o),r.observe(o,e)},i=new ResizeObserver(([o])=>{const{width:l,height:c}=o.contentRect;l===s.current.width&&c===s.current.height||s.set({width:l,height:c})}),r=new MutationObserver(o=>{for(const l of o)for(const c of l.removedNodes)if(t===c&&t.parentElement){n(t.parentElement);return}}),a=o=>{t=o;const l=t.parentElement;l&&(s.set({width:l.clientWidth,height:l.clientHeight}),n(l))};return vn(()=>{i.disconnect(),r.disconnect()}),{parentSize:s,parentSizeAction:a}};function _g(s,e){const t=Vt(s);let n=s;const i=t.subscribe(o=>n=o);return vn(i),{...t,set:o=>{if((o==null?void 0:o.uuid)===(n==null?void 0:n.uuid))return;const l=n;t.set(o),e==null||e(o,l)},update:o=>{const l=o(n);if((l==null?void 0:l.uuid)===(n==null?void 0:n.uuid))return;const c=n;t.set(l),e==null||e(l,c)}}}const Ai=()=>{const s=zn("threlte");if(s===void 0)throw new Error("No Threlte context found, are you using this hook inside of <Canvas>?");return s},Ph=Symbol("threlte-hierarchical-parent-context"),Ih=()=>zn(Ph),cS=s=>qn(Ph,s),uS=s=>{const e=_g(s);return qn(Ph,e),e};function hS(s){let e;const t=s[7].default,n=Pn(t,s,s[6],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&64)&&Dn(n,t,i,i[6],e?In(t,i[6],r,null):Ln(i[6]),null)},i(i){e||(G(n,i),e=!0)},o(i){Z(n,i),e=!1},d(i){n&&n.d(i)}}}const fS=()=>({onChildMount:zn("threlte-hierarchical-object-on-mount"),onChildDestroy:zn("threlte-hierarchical-object-on-destroy")});function dS(s,e,t){var g;let n,{$$slots:i={},$$scope:r}=e,{object:a=void 0}=e,{onChildMount:o=void 0}=e;const l=m=>{o==null||o(m)};let{onChildDestroy:c=void 0}=e;const h=m=>{c==null||c(m)},{invalidate:u}=Ai(),f=Ih();dn(s,f,m=>t(5,n=m));let{parent:d=n}=e;const p=fS();a&&((g=p.onChildMount)==null||g.call(p,a),u());const _=_g(a,(m,v)=>{var x,y;v&&((x=p.onChildDestroy)==null||x.call(p,v),u()),m&&((y=p.onChildMount)==null||y.call(p,m),u())});return vn(()=>{var m;a&&((m=p.onChildDestroy)==null||m.call(p,a),u())}),qn("threlte-hierarchical-object-on-mount",l),qn("threlte-hierarchical-object-on-destroy",h),cS(_),s.$$set=m=>{"object"in m&&t(2,a=m.object),"onChildMount"in m&&t(3,o=m.onChildMount),"onChildDestroy"in m&&t(4,c=m.onChildDestroy),"parent"in m&&t(1,d=m.parent),"$$scope"in m&&t(6,r=m.$$scope)},s.$$.update=()=>{s.$$.dirty&32&&t(1,d=n),s.$$.dirty&4&&_.set(a)},[f,d,a,o,c,n,r,i]}class pS extends mt{constructor(e){super(),pt(this,e,dS,hS,ft,{object:2,onChildMount:3,onChildDestroy:4,parent:1})}}function mS(s){let e;const t=s[1].default,n=Pn(t,s,s[4],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16)&&Dn(n,t,i,i[4],e?In(t,i[4],r,null):Ln(i[4]),null)},i(i){e||(G(n,i),e=!0)},o(i){Z(n,i),e=!1},d(i){n&&n.d(i)}}}function gS(s){let e,t;return e=new pS({props:{object:s[0],onChildMount:s[2],onChildDestroy:s[3],$$slots:{default:[mS]},$$scope:{ctx:s}}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p(n,[i]){const r={};i&1&&(r.object=n[0]),i&1&&(r.onChildMount=n[2]),i&1&&(r.onChildDestroy=n[3]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function _S(s,e,t){let{$$slots:n={},$$scope:i}=e,{object:r}=e;const a=l=>r.add(l),o=l=>r.remove(l);return s.$$set=l=>{"object"in l&&t(0,r=l.object),"$$scope"in l&&t(4,i=l.$$scope)},[r,n,a,o,i]}class vg extends mt{constructor(e){super(),pt(this,e,_S,gS,ft,{object:0})}}const Sd=(s,e)=>{if(s===e)return!0;if(!s||!e)return!1;const t=s.length;if(e.length!==t)return!1;for(let n=0;n<t;n++)if(s[n]!==e[n])return!1;return!0},vS=()=>{qn("threlte-cache",[])},xS=()=>{const s=zn("threlte-cache");if(!s)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return{remember:(n,i)=>{for(const a of s)if(Sd(i,a.keys)){if(a.error)throw a.error;if(a.promise)return a.promise}const r={promise:n(),keys:i,value:void 0};return s.push(r),r.promise.catch(a=>{r.error=a}),r.promise},clear:n=>{const i=s.findIndex(r=>Sd(n,r.keys));i!==-1&&s.splice(i,1)}}},yS=ba.replace("dev",""),MS=Number.parseInt(yS),bS=s=>{const e=Vt(void 0),t=(n,i)=>{s.renderer=new Sm({powerPreference:"high-performance",canvas:n,antialias:!0,alpha:!0,...i}),e.set(s.renderer)};return _n([s.colorManagementEnabled],([n])=>{ut.enabled=n}),_n([e,s.colorSpace],([n,i])=>{n&&(n.outputColorSpace=i)}),_n([e,s.dpr],([n,i])=>{n==null||n.setPixelRatio(i)}),_n([e,s.size],([n,i])=>{var r;(r=n==null?void 0:n.xr)!=null&&r.isPresenting||n==null||n.setSize(i.width,i.height)}),_n([e,s.shadows],([n,i])=>{n&&(n.shadowMap.enabled=!!i,i&&i!==!0?n.shadowMap.type=i:i===!0&&(n.shadowMap.type=wl))}),_n([e,s.toneMapping],([n,i])=>{n&&(n.toneMapping=i)}),_n([e,s.useLegacyLights],([n,i])=>{n&&i&&(n.useLegacyLights=i)}),{createRenderer:t}},xg=()=>zn("threlte-internal-context");function wd(s){let e,t;return e=new vg({props:{object:s[0].scene,$$slots:{default:[SS]},$$scope:{ctx:s}}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p(n,i){const r={};i&131072&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function SS(s){let e;const t=s[15].default,n=Pn(t,s,s[17],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&131072)&&Dn(n,t,i,i[17],e?In(t,i[17],r,null):Ln(i[17]),null)},i(i){e||(G(n,i),e=!0)},o(i){Z(n,i),e=!1},d(i){n&&n.d(i)}}}function wS(s){let e,t,n,i,r=s[2]&&wd(s);return{c(){e=qe("canvas"),r&&r.c(),Ie(e,"class","svelte-o3oskp")},m(a,o){oe(a,e,o),r&&r.m(e,null),s[16](e),t=!0,n||(i=Bg(s[4].call(null,e)),n=!0)},p(a,[o]){a[2]?r?(r.p(a,o),o&4&&G(r,1)):(r=wd(a),r.c(),G(r,1),r.m(e,null)):r&&(rn(),Z(r,1,1,()=>{r=null}),an())},i(a){t||(G(r),t=!0)},o(a){Z(r),t=!1},d(a){a&&ae(e),r&&r.d(),s[16](null),n=!1,i()}}}function TS(s,e,t){let n,{$$slots:i={},$$scope:r}=e,{colorManagementEnabled:a=!0}=e,{colorSpace:o="srgb"}=e,{dpr:l=Rh?window.devicePixelRatio:1}=e,{renderMode:c="on-demand"}=e,{rendererParameters:h=void 0}=e,{shadows:u=wl}=e,{size:f=void 0}=e,{toneMapping:d=zu}=e,{useLegacyLights:p=!(MS>=155)}=e,{autoRender:_=!0}=e,g,m=Vt(!1);dn(s,m,M=>t(2,n=M));const v=Vt(f),{parentSize:x,parentSizeAction:y}=lS(),C=oS({colorManagementEnabled:a,colorSpace:o,dpr:l,renderMode:c,parentSize:x,autoRender:_,shadows:u,toneMapping:d,useLegacyLights:p,userSize:v}),A=xg(),w=C;_n([m,w.autoRender],([M,I])=>(M&&I?w.autoRenderTask.start():w.autoRenderTask.stop(),()=>{w.autoRenderTask.stop()})),vS();const{createRenderer:D}=bS(w);Ma(()=>{D(g,h),w.renderer.setAnimationLoop(M=>{A.dispose(),w.scheduler.run(M),A.resetFrameInvalidation()}),m.set(!0)}),vn(()=>{var M;A.dispose(!0),w.scheduler.dispose(),(M=w.renderer)==null||M.dispose()});function T(M){En[M?"unshift":"push"](()=>{g=M,t(1,g)})}return s.$$set=M=>{"colorManagementEnabled"in M&&t(5,a=M.colorManagementEnabled),"colorSpace"in M&&t(6,o=M.colorSpace),"dpr"in M&&t(7,l=M.dpr),"renderMode"in M&&t(8,c=M.renderMode),"rendererParameters"in M&&t(9,h=M.rendererParameters),"shadows"in M&&t(10,u=M.shadows),"size"in M&&t(11,f=M.size),"toneMapping"in M&&t(12,d=M.toneMapping),"useLegacyLights"in M&&t(13,p=M.useLegacyLights),"autoRender"in M&&t(14,_=M.autoRender),"$$scope"in M&&t(17,r=M.$$scope)},s.$$.update=()=>{s.$$.dirty&2048&&v.set(f),s.$$.dirty&64&&w.colorSpace.set(o),s.$$.dirty&128&&w.dpr.set(l),s.$$.dirty&256&&w.renderMode.set(c),s.$$.dirty&16384&&w.autoRender.set(_),s.$$.dirty&1024&&w.shadows.set(u),s.$$.dirty&4096&&w.toneMapping.set(d)},[w,g,n,m,y,a,o,l,c,h,u,f,d,p,_,i,T,r]}class Dh extends mt{constructor(e){super(),pt(this,e,TS,wS,ft,{colorManagementEnabled:5,colorSpace:6,dpr:7,renderMode:8,rendererParameters:9,shadows:10,size:11,toneMapping:12,useLegacyLights:13,autoRender:14,ctx:0})}get ctx(){return this.$$.ctx[0]}}function AS(s){let e;const t=s[9].default,n=Pn(t,s,s[8],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,[r]){n&&n.p&&(!e||r&256)&&Dn(n,t,i,i[8],e?In(t,i[8],r,null):Ln(i[8]),null)},i(i){e||(G(n,i),e=!0)},o(i){Z(n,i),e=!1},d(i){n&&n.d(i)}}}const Td="threlte-disposable-object-context";function ES(s,e,t){let n,i,{$$slots:r={},$$scope:a}=e;const{collectDisposableObjects:o,addDisposableObjects:l,removeDisposableObjects:c}=xg();let{object:h=void 0}=e,u=h,{dispose:f=void 0}=e;const d=zn(Td);dn(s,d,g=>t(7,i=g));const p=Vt(f??i??!0);dn(s,p,g=>t(6,n=g)),qn(Td,p);let _=n?o(h):[];return l(_),vn(()=>{c(_)}),s.$$set=g=>{"object"in g&&t(2,h=g.object),"dispose"in g&&t(3,f=g.dispose),"$$scope"in g&&t(8,a=g.$$scope)},s.$$.update=()=>{s.$$.dirty&136&&p.set(f??i??!0),s.$$.dirty&116&&h!==u&&(c(_),t(5,_=n?o(h):[]),l(_),t(4,u=h))},[d,p,h,f,u,_,n,i,a,r]}class CS extends mt{constructor(e){super(),pt(this,e,ES,AS,ft,{object:2,dispose:3})}}const RS=/^\s*class\s+/,PS=s=>typeof s!="function"?!1:RS.test(s.toString()),IS=s=>Array.isArray(s),Ad=(s,e)=>PS(s)?IS(e)?new s(...e):new s:s,DS=s=>"isObject3D"in s,Ed=s=>"dispose"in s,yg=(s,e)=>{if(e.includes(".")){const t=e.split("."),n=t.pop();for(let i=0;i<t.length;i+=1)s=s[t[i]];return{target:s,key:n}}else return{target:s,key:e}},iu=Symbol("initialValueBeforeAttach"),LS=()=>{const{invalidate:s}=Ai();let e=!1,t=iu,n,i,r;const a=(l,c,h)=>{if(o(),!h){const u=l;((u==null?void 0:u.isMaterial)||!1)&&(h="material"),((u==null?void 0:u.isBufferGeometry)||(u==null?void 0:u.isGeometry)||!1)&&(h="geometry")}if(h){if(typeof h=="function")n=h(c,l);else{const{target:u,key:f}=yg(c,h);t=u[f],u[f]=l,i=u,r=f}e=!0,s()}},o=()=>{e&&(n?(n(),n=void 0):i&&r&&t!==iu&&(i[r]=t,t=iu,i=void 0,r=void 0),e=!1,s())};return vn(()=>{o()}),{update:a}},NS=s=>s&&s.isCamera,Mg=s=>s&&s.isOrthographicCamera,bg=s=>s&&s.isPerspectiveCamera,US=s=>bg(s)||Mg(s),OS=()=>{const{invalidate:s,size:e,camera:t}=Ai();let n,i;vn(()=>{i==null||i()});const r=l=>{n&&(Mg(n)?(n.left=l.width/-2,n.right=l.width/2,n.top=l.height/2,n.bottom=l.height/-2,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()):bg(n)&&(n.aspect=l.width/l.height,n.updateProjectionMatrix(),n.updateMatrixWorld(),s()))};return{update:(l,c)=>{if(i==null||i(),c||!US(l)){n=void 0;return}n=l,i=e.subscribe(r)},makeDefaultCamera:(l,c)=>{!NS(l)||!c||(t.set(l),s())}}},Sg=()=>{const s=Vi(),e=(n,i)=>{const r=s.$$.callbacks[n];r&&r.forEach(a=>{a(i)})};return Object.defineProperty(e,"hasEventListener",{value:n=>!!s.$$.callbacks[n],enumerable:!0}),e},FS=()=>{const s=Sg(),e=[];let t,n=!1;const i=()=>{e.forEach(o=>o()),e.length=0,s("create",{ref:t,cleanup:o=>{e.push(o)}})},r=a=>{t=a,n&&i()};return Ma(()=>{i(),n=!0}),vn(()=>{e.forEach(a=>a())}),{updateRef:r}},Cd=s=>!!(s!=null&&s.addEventListener),kS=()=>{const s=Sg(),e=Vi(),t=l=>{l!=null&&l.type&&s(l.type,l)},n=(l,c)=>{Cd(l)&&c.forEach(h=>{l.removeEventListener(h,t)})},i=(l,c)=>{Cd(l)&&c.forEach(h=>{l.addEventListener(h,t)})},r=Vt(),a=Vt([]);return _n([r,a],([l,c])=>(i(l,c),()=>n(l,c))),Ma(()=>{a.set(Object.keys(e.$$.callbacks))}),{updateRef:l=>{r.set(l)}}},zS=s=>{const t=zn("threlte-plugin-context");if(!t)return;const n=Object.values(t).map(c=>c(s)).filter(Boolean),i=n.flatMap(c=>c.pluginProps??[]);let r=[];return vn(()=>{r.forEach(c=>c())}),{updateRef:c=>{r.forEach(h=>h()),r=[],n.forEach(h=>{var f;const u=(f=h.onRefChange)==null?void 0:f.call(h,c);u&&r.push(u)})},updateProps:c=>{n.forEach(h=>{var u;(u=h.onPropsChange)==null||u.call(h,c)})},updateRestProps:c=>{n.forEach(h=>{var u;(u=h.onRestPropsChange)==null||u.call(h,c)})},pluginsProps:i}},BS=new Set(["$$scope","$$slots","type","args","attach","instance"]),VS=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),HS=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,Rd=(s,e,t)=>{var n,i,r;return!Array.isArray(t)&&typeof t=="number"&&typeof((n=s[e])==null?void 0:n.setScalar)=="function"&&!((i=s[e])!=null&&i.isColor)?(a,o,l)=>{a[o].setScalar(l)}:typeof((r=s[e])==null?void 0:r.set)=="function"?Array.isArray(t)?(a,o,l)=>{a[o].set(...l)}:(a,o,l)=>{a[o].set(l)}:(a,o,l)=>{a[o]=l}},GS=()=>{const{invalidate:s}=Ai(),e=new Map,t=new Map,n=(r,a,o,l)=>{if(HS(o)){const u=e.get(a);if(u&&u.instance===r&&u.value===o)return;e.set(a,{instance:r,value:o})}const{key:c,target:h}=yg(r,a);if(o!=null){const u=t.get(a);if(u)u(h,c,o);else{const f=Rd(h,c,o);t.set(a,f),f(h,c,o)}}else Rd(h,c,o)(h,c,o);l.manualCamera||VS.has(c)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProps:(r,a,o)=>{var l;for(const c in a)!BS.has(c)&&!((l=o.pluginsProps)!=null&&l.includes(c))&&n(r,c,a[c],o),s()}}},WS=s=>({ref:s&2}),Pd=s=>({ref:s[1]}),XS=s=>({ref:s&2}),Id=s=>({ref:s[1]});function Dd(s){let e,t;return e=new CS({props:{object:s[1],dispose:s[0]}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&1&&(r.dispose=n[0]),e.$set(r)},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function $S(s){let e;const t=s[10].default,n=Pn(t,s,s[11],Pd);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&Dn(n,t,i,i[11],e?In(t,i[11],r,WS):Ln(i[11]),Pd)},i(i){e||(G(n,i),e=!0)},o(i){Z(n,i),e=!1},d(i){n&&n.d(i)}}}function YS(s){let e,t;return e=new vg({props:{object:s[1],$$slots:{default:[qS]},$$scope:{ctx:s}}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.object=n[1]),i&2050&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function qS(s){let e;const t=s[10].default,n=Pn(t,s,s[11],Id);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2050)&&Dn(n,t,i,i[11],e?In(t,i[11],r,XS):Ln(i[11]),Id)},i(i){e||(G(n,i),e=!0)},o(i){Z(n,i),e=!1},d(i){n&&n.d(i)}}}function ZS(s){let e=Ed(s[1]),t,n,i,r,a,o,l=e&&Dd(s);const c=[YS,$S],h=[];function u(f,d){return d&2&&(n=null),n==null&&(n=!!DS(f[1])),n?0:1}return i=u(s,-1),r=h[i]=c[i](s),{c(){l&&l.c(),t=Oe(),r.c(),a=Nn()},m(f,d){l&&l.m(f,d),oe(f,t,d),h[i].m(f,d),oe(f,a,d),o=!0},p(f,[d]){d&2&&(e=Ed(f[1])),e?l?(l.p(f,d),d&2&&G(l,1)):(l=Dd(f),l.c(),G(l,1),l.m(t.parentNode,t)):l&&(rn(),Z(l,1,1,()=>{l=null}),an());let p=i;i=u(f,d),i===p?h[i].p(f,d):(rn(),Z(h[p],1,1,()=>{h[p]=null}),an(),r=h[i],r?r.p(f,d):(r=h[i]=c[i](f),r.c()),G(r,1),r.m(a.parentNode,a))},i(f){o||(G(l),G(r),o=!0)},o(f){Z(l),Z(r),o=!1},d(f){f&&(ae(t),ae(a)),l&&l.d(f),h[i].d(f)}}}function JS(s,e,t){const n=["is","args","attach","manual","makeDefault","dispose","ref"];let i=hr(e,n),r,{$$slots:a={},$$scope:o}=e,{is:l}=e,{args:c=void 0}=e,{attach:h=void 0}=e,{manual:u=void 0}=e,{makeDefault:f=void 0}=e,{dispose:d=void 0}=e;const p=Ih();dn(s,p,I=>t(9,r=I));const _=FS();let g=Ad(l,c);_.updateRef(g);let m=!1;const v=()=>{if(!m){m=!0;return}t(1,g=Ad(l,c)),_.updateRef(g)};let{ref:x=g}=e;const y=uS(g),C=zS({ref:g,props:e}),A=(C==null?void 0:C.pluginsProps)??[],w=GS(),D=OS(),T=LS(),M=kS();return s.$$set=I=>{t(23,e=vi(vi({},e),Oo(I))),t(22,i=hr(e,n)),"is"in I&&t(4,l=I.is),"args"in I&&t(5,c=I.args),"attach"in I&&t(6,h=I.attach),"manual"in I&&t(7,u=I.manual),"makeDefault"in I&&t(8,f=I.makeDefault),"dispose"in I&&t(0,d=I.dispose),"ref"in I&&t(3,x=I.ref),"$$scope"in I&&t(11,o=I.$$scope)},s.$$.update=()=>{s.$$.dirty&48&&v(),s.$$.dirty&2&&t(3,x=g),s.$$.dirty&2&&y.set(g),w.updateProps(g,i,{manualCamera:u,pluginsProps:A}),s.$$.dirty&130&&D.update(g,u),s.$$.dirty&258&&D.makeDefaultCamera(g,f),s.$$.dirty&578&&T.update(g,r,h),s.$$.dirty&2&&M.updateRef(g),s.$$.dirty&2&&(C==null||C.updateRef(g)),C==null||C.updateProps(e),C==null||C.updateRestProps(i)},e=Oo(e),[d,g,p,x,l,c,h,u,f,r,a,o]}let wg=class extends mt{constructor(e){super(),pt(this,e,JS,ZS,ft,{is:4,args:5,attach:6,manual:7,makeDefault:8,dispose:0,ref:3})}};const jS={},KS=(s,e)=>{const t=jS[e]||Kb[e];if(!t)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return{...s,props:{...s.props,is:t}}},QS=s=>new Proxy(class{},{construct(e,[t]){const n=t;return new wg(KS(n,s))}}),xt=new Proxy(class{},{construct(s,[e]){const t=e;return new wg(t)},get(s,e){return QS(e)}});function wr(s,e,t){if(!Rh)return{task:void 0,start:()=>{},stop:()=>{},started:mp(!1)};let n,i,r;Fi.isKey(s)?(n=s,i=e,r=t):(n=Symbol("useTask"),i=s,r=e);const a=Ai();let o=a.mainStage;if(r){if(r.stage)if(Fi.isValue(r.stage))o=r.stage;else{const d=a.scheduler.getStage(r.stage);if(!d)throw new Error(`No stage found with key ${r.stage.toString()}`);o=d}else if(r.after)if(Array.isArray(r.after))for(let d=0;d<r.after.length;d++){const p=r.after[d];if(Fi.isValue(p)){o=p.stage;break}}else Fi.isValue(r.after)&&(o=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let d=0;d<r.before.length;d++){const p=r.before[d];if(Fi.isValue(p)){o=p.stage;break}}else Fi.isValue(r.before)&&(o=r.before.stage)}const{autoInvalidations:l}=zn("threlte-internal-context"),c=Vt(!1),h=o.createTask(n,i,r),u=()=>{c.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&l.add(i),h.start()},f=()=>{c.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&l.delete(i),h.stop()};return(r==null?void 0:r.autoStart)??!0?u():f(),vn(()=>{o&&o.removeTask(n)}),{task:h,start:u,stop:f,started:{subscribe:c.subscribe}}}function ew(s,e,t){const n=zn("threlte-user-context");if(!n)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(n.update(i=>(s in i||(i[s]=e),i)),n.current[s]):Fu(n,i=>i[s])}const su=s=>{const e=Vt(void 0),t=Vt(void 0);return s.then(n=>{e.set(n)}).catch(n=>{console.error("Error in asyncWritable:",n.message),t.set(n)}),Object.assign(Object.assign(s,e),{error:t,promise:s})};function tw(s,e){const{remember:t,clear:n}=xS();let i;const r=()=>{var c;const l=new s(...(e==null?void 0:e.args)??[]);return(c=e==null?void 0:e.extend)==null||c.call(e,l),l};return{load:(l,c)=>{const h=async u=>{var f;if(i||(i=r()),"loadAsync"in i){const d=await i.loadAsync(u,c==null?void 0:c.onProgress);return((f=c==null?void 0:c.transform)==null?void 0:f.call(c,d))??d}else return new Promise((d,p)=>{i.load(u,_=>{var g;return d(((g=c==null?void 0:c.transform)==null?void 0:g.call(c,_))??_)},_=>{var g;return(g=c==null?void 0:c.onProgress)==null?void 0:g.call(c,_)},p)})};if(Array.isArray(l)){const u=l.map(d=>t(()=>h(d),[s,d]));return su(Promise.all(u))}else if(typeof l=="string"){const u=t(()=>h(l),[s,l]);return su(u)}else{const u=Object.values(l).map(d=>t(()=>h(d),[s,d]));return su(Promise.all(u).then(d=>Object.fromEntries(Object.entries(l).map(([p],_)=>[p,d[_]]))))}},clear:l=>{Array.isArray(l)?l.forEach(c=>{n([s,c])}):typeof l=="string"?n([s,l]):Object.entries(l).forEach(([c,h])=>{n([s,c,h])})},loader:i}}const nw=()=>{const s=Vi(),e=Vt(void 0);return _n(e,t=>{t&&Object.entries(s.$$.callbacks).forEach(n=>{const[i,r]=n;i in t.$$.callbacks&&Array.isArray(t.$$.callbacks[i])?t.$$.callbacks[i].push(...r):t.$$.callbacks[i]=r})}),e},_r=(s,e)=>{const t=tw(bh,e),{renderer:n}=Ai();return t.load(s,{...e,transform:i=>{var r;return i.colorSpace=n.outputColorSpace,i.needsUpdate=!0,((r=e==null?void 0:e.transform)==null?void 0:r.call(e,i))??i}})};new R;new R;new R;const iw=()=>ew("threlte-controls",{orbitControls:Vt(void 0),trackballControls:Vt(void 0)}),Ld={type:"change"},ru={type:"start"},Nd={type:"end"},Po=new Cs,Ud=new hi,sw=Math.cos(70*fl.DEG2RAD);let rw=class extends ti{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.cursor=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:os.ROTATE,MIDDLE:os.DOLLY,RIGHT:os.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(b){b.addEventListener("keydown",K),this._domElementKeyEvents=b},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",K),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ld),n.update(),r=i.NONE},this.update=function(){const b=new R,z=new nn().setFromUnitVectors(e.up,new R(0,1,0)),V=z.clone().invert(),q=new R,ce=new nn,ke=new R,je=2*Math.PI;return function(zt=null){const lt=n.object.position;b.copy(lt).sub(n.target),b.applyQuaternion(z),o.setFromVector3(b),n.autoRotate&&r===i.NONE&&k(M(zt)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Bt=n.minAzimuthAngle,Ut=n.maxAzimuthAngle;isFinite(Bt)&&isFinite(Ut)&&(Bt<-Math.PI?Bt+=je:Bt>Math.PI&&(Bt-=je),Ut<-Math.PI?Ut+=je:Ut>Math.PI&&(Ut-=je),Bt<=Ut?o.theta=Math.max(Bt,Math.min(Ut,o.theta)):o.theta=o.theta>(Bt+Ut)/2?Math.max(Bt,o.theta):Math.min(Ut,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Ei=!1;if(n.zoomToCursor&&A||n.object.isOrthographicCamera)o.radius=be(o.radius);else{const Zt=o.radius;o.radius=be(o.radius*c),Ei=Zt!=o.radius}if(b.setFromSpherical(o),b.applyQuaternion(V),lt.copy(n.target).add(b),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&A){let Zt=null;if(n.object.isPerspectiveCamera){const si=b.length();Zt=be(si*c);const Yi=si-Zt;n.object.position.addScaledVector(y,Yi),n.object.updateMatrixWorld(),Ei=!!Yi}else if(n.object.isOrthographicCamera){const si=new R(C.x,C.y,0);si.unproject(n.object);const Yi=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ei=Yi!==n.object.zoom;const Er=new R(C.x,C.y,0);Er.unproject(n.object),n.object.position.sub(Er).add(si),n.object.updateMatrixWorld(),Zt=b.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Zt!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Zt).add(n.object.position):(Po.origin.copy(n.object.position),Po.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Po.direction))<sw?e.lookAt(n.target):(Ud.setFromNormalAndCoplanarPoint(n.object.up,n.target),Po.intersectPlane(Ud,n.target))))}else if(n.object.isOrthographicCamera){const Zt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Zt!==n.object.zoom&&(n.object.updateProjectionMatrix(),Ei=!0)}return c=1,A=!1,Ei||q.distanceToSquared(n.object.position)>a||8*(1-ce.dot(n.object.quaternion))>a||ke.distanceToSquared(n.target)>a?(n.dispatchEvent(Ld),q.copy(n.object.position),ce.copy(n.object.quaternion),ke.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ae),n.domElement.removeEventListener("pointerdown",Te),n.domElement.removeEventListener("pointercancel",S),n.domElement.removeEventListener("wheel",te),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",S),n.domElement.getRootNode().removeEventListener("keydown",De,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",K),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const a=1e-6,o=new Cu,l=new Cu;let c=1;const h=new R,u=new J,f=new J,d=new J,p=new J,_=new J,g=new J,m=new J,v=new J,x=new J,y=new R,C=new J;let A=!1;const w=[],D={};let T=!1;function M(b){return b!==null?2*Math.PI/60*n.autoRotateSpeed*b:2*Math.PI/60/60*n.autoRotateSpeed}function I(b){const z=Math.abs(b*.01);return Math.pow(.95,n.zoomSpeed*z)}function k(b){l.theta-=b}function O(b){l.phi-=b}const Y=function(){const b=new R;return function(V,q){b.setFromMatrixColumn(q,0),b.multiplyScalar(-V),h.add(b)}}(),j=function(){const b=new R;return function(V,q){n.screenSpacePanning===!0?b.setFromMatrixColumn(q,1):(b.setFromMatrixColumn(q,0),b.crossVectors(n.object.up,b)),b.multiplyScalar(V),h.add(b)}}(),W=function(){const b=new R;return function(V,q){const ce=n.domElement;if(n.object.isPerspectiveCamera){const ke=n.object.position;b.copy(ke).sub(n.target);let je=b.length();je*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*V*je/ce.clientHeight,n.object.matrix),j(2*q*je/ce.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(V*(n.object.right-n.object.left)/n.object.zoom/ce.clientWidth,n.object.matrix),j(q*(n.object.top-n.object.bottom)/n.object.zoom/ce.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(b){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(b){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=b:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ge(b,z){if(!n.zoomToCursor)return;A=!0;const V=n.domElement.getBoundingClientRect(),q=b-V.left,ce=z-V.top,ke=V.width,je=V.height;C.x=q/ke*2-1,C.y=-(ce/je)*2+1,y.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function be(b){return Math.max(n.minDistance,Math.min(n.maxDistance,b))}function we(b){u.set(b.clientX,b.clientY)}function Ze(b){ge(b.clientX,b.clientX),m.set(b.clientX,b.clientY)}function st(b){p.set(b.clientX,b.clientY)}function Q(b){f.set(b.clientX,b.clientY),d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const z=n.domElement;k(2*Math.PI*d.x/z.clientHeight),O(2*Math.PI*d.y/z.clientHeight),u.copy(f),n.update()}function le(b){v.set(b.clientX,b.clientY),x.subVectors(v,m),x.y>0?F(I(x.y)):x.y<0&&$(I(x.y)),m.copy(v),n.update()}function Ee(b){_.set(b.clientX,b.clientY),g.subVectors(_,p).multiplyScalar(n.panSpeed),W(g.x,g.y),p.copy(_),n.update()}function re(b){ge(b.clientX,b.clientY),b.deltaY<0?$(I(b.deltaY)):b.deltaY>0&&F(I(b.deltaY)),n.update()}function ze(b){let z=!1;switch(b.code){case n.keys.UP:b.ctrlKey||b.metaKey||b.shiftKey?O(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:b.ctrlKey||b.metaKey||b.shiftKey?O(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:b.ctrlKey||b.metaKey||b.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:b.ctrlKey||b.metaKey||b.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),z=!0;break}z&&(b.preventDefault(),n.update())}function Xe(b){if(w.length===1)u.set(b.pageX,b.pageY);else{const z=Qe(b),V=.5*(b.pageX+z.x),q=.5*(b.pageY+z.y);u.set(V,q)}}function Ve(b){if(w.length===1)p.set(b.pageX,b.pageY);else{const z=Qe(b),V=.5*(b.pageX+z.x),q=.5*(b.pageY+z.y);p.set(V,q)}}function rt(b){const z=Qe(b),V=b.pageX-z.x,q=b.pageY-z.y,ce=Math.sqrt(V*V+q*q);m.set(0,ce)}function P(b){n.enableZoom&&rt(b),n.enablePan&&Ve(b)}function he(b){n.enableZoom&&rt(b),n.enableRotate&&Xe(b)}function se(b){if(w.length==1)f.set(b.pageX,b.pageY);else{const V=Qe(b),q=.5*(b.pageX+V.x),ce=.5*(b.pageY+V.y);f.set(q,ce)}d.subVectors(f,u).multiplyScalar(n.rotateSpeed);const z=n.domElement;k(2*Math.PI*d.x/z.clientHeight),O(2*Math.PI*d.y/z.clientHeight),u.copy(f)}function _e(b){if(w.length===1)_.set(b.pageX,b.pageY);else{const z=Qe(b),V=.5*(b.pageX+z.x),q=.5*(b.pageY+z.y);_.set(V,q)}g.subVectors(_,p).multiplyScalar(n.panSpeed),W(g.x,g.y),p.copy(_)}function ee(b){const z=Qe(b),V=b.pageX-z.x,q=b.pageY-z.y,ce=Math.sqrt(V*V+q*q);v.set(0,ce),x.set(0,Math.pow(v.y/m.y,n.zoomSpeed)),F(x.y),m.copy(v);const ke=(b.pageX+z.x)*.5,je=(b.pageY+z.y)*.5;ge(ke,je)}function Fe(b){n.enableZoom&&ee(b),n.enablePan&&_e(b)}function ve(b){n.enableZoom&&ee(b),n.enableRotate&&se(b)}function Te(b){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(b.pointerId),n.domElement.addEventListener("pointermove",L),n.domElement.addEventListener("pointerup",S)),!Pe(b)&&(at(b),b.pointerType==="touch"?de(b):B(b)))}function L(b){n.enabled!==!1&&(b.pointerType==="touch"?fe(b):ie(b))}function S(b){switch($e(b),w.length){case 0:n.domElement.releasePointerCapture(b.pointerId),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",S),n.dispatchEvent(Nd),r=i.NONE;break;case 1:const z=w[0],V=D[z];de({pointerId:z,pageX:V.x,pageY:V.y});break}}function B(b){let z;switch(b.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case os.DOLLY:if(n.enableZoom===!1)return;Ze(b),r=i.DOLLY;break;case os.ROTATE:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enablePan===!1)return;st(b),r=i.PAN}else{if(n.enableRotate===!1)return;we(b),r=i.ROTATE}break;case os.PAN:if(b.ctrlKey||b.metaKey||b.shiftKey){if(n.enableRotate===!1)return;we(b),r=i.ROTATE}else{if(n.enablePan===!1)return;st(b),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ru)}function ie(b){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Q(b);break;case i.DOLLY:if(n.enableZoom===!1)return;le(b);break;case i.PAN:if(n.enablePan===!1)return;Ee(b);break}}function te(b){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(b.preventDefault(),n.dispatchEvent(ru),re(ne(b)),n.dispatchEvent(Nd))}function ne(b){const z=b.deltaMode,V={clientX:b.clientX,clientY:b.clientY,deltaY:b.deltaY};switch(z){case 1:V.deltaY*=16;break;case 2:V.deltaY*=100;break}return b.ctrlKey&&!T&&(V.deltaY*=10),V}function De(b){b.key==="Control"&&(T=!0,n.domElement.getRootNode().addEventListener("keyup",pe,{passive:!0,capture:!0}))}function pe(b){b.key==="Control"&&(T=!1,n.domElement.getRootNode().removeEventListener("keyup",pe,{passive:!0,capture:!0}))}function K(b){n.enabled===!1||n.enablePan===!1||ze(b)}function de(b){switch(Je(b),w.length){case 1:switch(n.touches.ONE){case ls.ROTATE:if(n.enableRotate===!1)return;Xe(b),r=i.TOUCH_ROTATE;break;case ls.PAN:if(n.enablePan===!1)return;Ve(b),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case ls.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;P(b),r=i.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;he(b),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(ru)}function fe(b){switch(Je(b),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;se(b),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;_e(b),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Fe(b),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(b),n.update();break;default:r=i.NONE}}function Ae(b){n.enabled!==!1&&b.preventDefault()}function at(b){w.push(b.pointerId)}function $e(b){delete D[b.pointerId];for(let z=0;z<w.length;z++)if(w[z]==b.pointerId){w.splice(z,1);return}}function Pe(b){for(let z=0;z<w.length;z++)if(w[z]==b.pointerId)return!0;return!1}function Je(b){let z=D[b.pointerId];z===void 0&&(z=new J,D[b.pointerId]=z),z.set(b.pageX,b.pageY)}function Qe(b){const z=b.pointerId===w[0]?w[1]:w[0];return D[z]}n.domElement.addEventListener("contextmenu",Ae),n.domElement.addEventListener("pointerdown",Te),n.domElement.addEventListener("pointercancel",S),n.domElement.addEventListener("wheel",te,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",De,{passive:!0,capture:!0}),this.update()}};const aw=s=>({ref:s&1}),Od=s=>({ref:s[0]});function ow(s){let e;const t=s[6].default,n=Pn(t,s,s[8],Od);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&257)&&Dn(n,t,i,i[8],e?In(t,i[8],r,aw):Ln(i[8]),Od)},i(i){e||(G(n,i),e=!0)},o(i){Z(n,i),e=!1},d(i){n&&n.d(i)}}}function lw(s){let e,t;const n=[{is:s[0]},s[5]];let i={$$slots:{default:[ow,({ref:r})=>({0:r}),({ref:r})=>r?1:0]},$$scope:{ctx:s}};for(let r=0;r<n.length;r+=1)i=vi(i,n[r]);return e=new xt({props:i}),s[7](e),e.$on("change",s[3]),{c(){Me(e.$$.fragment)},m(r,a){xe(e,r,a),t=!0},p(r,[a]){const o=a&33?dp(n,[a&1&&{is:r[0]},a&32&&pp(r[5])]):{};a&257&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){Z(e.$$.fragment,r),t=!1},d(r){s[7](null),ye(e,r)}}}function cw(s,e,t){const n=["ref"];let i=hr(e,n),r,a,{$$slots:o={},$$scope:l}=e;const c=Ih();dn(s,c,x=>t(9,r=x));const h=x=>x.isCamera,{renderer:u,invalidate:f}=Ai();if(!h(r))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const d=new rw(r,u.domElement),{start:p,stop:_}=wr(d.update,{autoStart:!1,autoInvalidate:!1}),g=nw();dn(s,g,x=>t(1,a=x));const{orbitControls:m}=iw();m.set(d),vn(()=>m.set(void 0));function v(x){En[x?"unshift":"push"](()=>{a=x,g.set(a)})}return s.$$set=x=>{e=vi(vi({},e),Oo(x)),t(5,i=hr(e,n)),"$$scope"in x&&t(8,l=x.$$scope)},s.$$.update=()=>{i.autoRotate||i.enableDamping?p():_()},[d,a,c,f,g,i,o,v,l]}class Lh extends mt{constructor(e){super(),pt(this,e,cw,lw,ft,{ref:0})}get ref(){return this.$$.ctx[0]}}new He;new He;new wt;`${Ge.logdepthbuf_pars_vertex}${Ge.fog_pars_vertex}${Ge.logdepthbuf_vertex}${Ge.fog_vertex}`;class cc extends wt{constructor(){const e=cc.SkyShader,t=new Rn({name:e.name,uniforms:Ol.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Wt,depthWrite:!1});super(new Gi(1,1,1),t),this.isSky=!0}}cc.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},up:{value:new R(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const uw=s=>({renderTarget:s&1}),Fd=s=>({sunPosition:s[2],renderTarget:s[0]});function hw(s){let e;const t=s[13].default,n=Pn(t,s,s[14],Fd);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&16385)&&Dn(n,t,i,i[14],e?In(t,i[14],r,uw):Ln(i[14]),Fd)},i(i){e||(G(n,i),e=!0)},o(i){Z(n,i),e=!1},d(i){n&&n.d(i)}}}function fw(s){let e,t;return e=new xt({props:{is:s[1],$$slots:{default:[hw]},$$scope:{ctx:s}}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p(n,[i]){const r={};i&16385&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function dw(s,e,t){let{$$slots:n={},$$scope:i}=e,{scale:r=1e3}=e,{turbidity:a=10}=e,{rayleigh:o=3}=e,{mieCoefficient:l=.005}=e,{mieDirectionalG:c=.7}=e,{elevation:h=2}=e,{azimuth:u=180}=e,{setEnvironment:f=!0}=e,{cubeMapSize:d=128}=e,{webGLRenderTargetOptions:p={}}=e;const _=new cc,g=new R,m=_.material.uniforms,{renderer:v,scene:x,invalidate:y}=Ai();let C,A;const w=()=>{t(0,C=new sh(d,{type:Es,generateMipmaps:!0,minFilter:Yn,...p})),A=new ih(1,1.1,C)},D=x.environment,{start:T,stop:M}=wr(()=>{_.scale.setScalar(r),m.turbidity.value=a,m.rayleigh.value=o,m.mieCoefficient.value=l,m.mieDirectionalG.value=c;const I=fl.degToRad(90-h),k=fl.degToRad(u);g.setFromSphericalCoords(1,I,k),m.sunPosition.value.copy(g),f&&((!C||!A)&&w(),A==null||A.update(v,_)),y(),M()},{autoStart:!1,autoInvalidate:!1});return vn(()=>{_.material.dispose(),x.environment=D;try{C==null||C.dispose()}catch(I){console.warn("Could not dispose renderTarget:",I)}}),s.$$set=I=>{"scale"in I&&t(3,r=I.scale),"turbidity"in I&&t(4,a=I.turbidity),"rayleigh"in I&&t(5,o=I.rayleigh),"mieCoefficient"in I&&t(6,l=I.mieCoefficient),"mieDirectionalG"in I&&t(7,c=I.mieDirectionalG),"elevation"in I&&t(8,h=I.elevation),"azimuth"in I&&t(9,u=I.azimuth),"setEnvironment"in I&&t(10,f=I.setEnvironment),"cubeMapSize"in I&&t(11,d=I.cubeMapSize),"webGLRenderTargetOptions"in I&&t(12,p=I.webGLRenderTargetOptions),"$$scope"in I&&t(14,i=I.$$scope)},s.$$.update=()=>{s.$$.dirty&1025&&(f&&C?(x.environment=C.texture,y()):f||(x.environment=D,y())),s.$$.dirty&1016&&T()},[C,_,g,r,a,o,l,c,h,u,f,d,p,n,i]}class Nh extends mt{constructor(e){super(),pt(this,e,dw,fw,ft,{scale:3,turbidity:4,rayleigh:5,mieCoefficient:6,mieDirectionalG:7,elevation:8,azimuth:9,setEnvironment:10,cubeMapSize:11,webGLRenderTargetOptions:12})}}`${Ge.tonemapping_fragment}${Ge.colorspace_fragment}`;`${Ge.tonemapping_fragment}${Ge.colorspace_fragment}`;const pw=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,mw=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,gw=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,_w=gw,vw=`
	${pw}
	${mw}
`;`${_w}${vw}${Ge.tonemapping_fragment}${Ge.colorspace_fragment}`;var xw=Object.defineProperty,yw=(s,e,t)=>e in s?xw(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,yt=(s,e,t)=>(yw(s,typeof e!="symbol"?e+"":e,t),t);const Tg=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Ru(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(n,i){let r=Ge[i];return r?Ru(r):n}return s.replace(e,t)}const jt=[];for(let s=0;s<256;s++)jt[s]=(s<16?"0":"")+s.toString(16);function Mw(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[s&255]+jt[s>>8&255]+jt[s>>16&255]+jt[s>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toUpperCase()}const as=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let n=arguments[e];if(n)for(let i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=n[i])}return s},bw=Date.now(),kd=new WeakMap,zd=new Map;let Sw=1e10;function gl(s,e){const t=Ew(e);let n=kd.get(s);if(n||kd.set(s,n=Object.create(null)),n[t])return new n[t];const i=`_onBeforeCompile${t}`,r=function(c,h){s.onBeforeCompile.call(this,c,h);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=zd[u];if(!f){const d=ww(this,c,e,t);f=zd[u]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,as(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-bw}}),this[i]&&this[i](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const h=Object.create(c,l);return Object.defineProperty(h,"baseMaterial",{value:s}),Object.defineProperty(h,"id",{value:Sw++}),h.uuid=Mw(),h.uniforms=as({},c.uniforms,e.uniforms),h.defines=as({},c.defines,e.defines),h.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",h.extensions=as({},c.extensions,e.extensions),h._listeners=void 0,h},l={constructor:{value:a},isDerivedMaterial:{value:!0},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[i]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(as(this.extensions,c.extensions),as(this.defines,c.defines),as(this.uniforms,Ol.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=gl(s.isDerivedMaterial?s.getDepthMaterial():new zl({depthPacking:ju}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=gl(s.isDerivedMaterial?s.getDistanceMaterial():new Bl,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:h}=this;c&&c.dispose(),h&&h.dispose(),s.dispose.call(this)}}};return n[t]=a,new a}function ww(s,{vertexShader:e,fragmentShader:t},n,i){let{vertexDefs:r,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:h,fragmentMainOutro:u,fragmentColorTransform:f,customRewriter:d,timeUniform:p}=n;if(r=r||"",a=a||"",o=o||"",c=c||"",h=h||"",u=u||"",(l||d)&&(e=Ru(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Ru(t)),d){let _=d({vertexShader:e,fragmentShader:t});e=_.vertexShader,t=_.fragmentShader}if(f){let _=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,g=>(_.push(g),"")),u=`${f}
${_.join(`
`)}
${u}`}if(p){const _=`
uniform float ${p};
`;r=_+r,c=_+c}return l&&(e=`vec3 troika_position_${i};
vec3 troika_normal_${i};
vec2 troika_uv_${i};
${e}
`,r=`${r}
void troikaVertexTransform${i}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${i} = vec3(position);
troika_normal_${i} = vec3(normal);
troika_uv_${i} = vec2(uv);
troikaVertexTransform${i}(troika_position_${i}, troika_normal_${i}, troika_uv_${i});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(_,g,m,v)=>/\battribute\s+vec[23]\s+$/.test(v.substr(0,m))?g:`troika_${g}_${i}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${i}`))),e=Bd(e,i,r,a,o),t=Bd(t,i,c,h,u),{vertexShader:e,fragmentShader:t}}function Bd(s,e,t,n,i){return(n||i||t)&&(s=s.replace(Tg,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${n}
  troikaOrigMain${e}();
  ${i}
}`),s}function Tw(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let Aw=0;const Vd=new Map;function Ew(s){const e=JSON.stringify(s,Tw);let t=Vd.get(e);return t==null&&Vd.set(e,t=++Aw),t}const Cw={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function Rw(s){let e=Cw[s.type];return e?kn[e]:s}function Hd(s){let e=/\buniform\s+(int|float|vec[234]|mat[34])\s+([A-Za-z_][\w]*)/g,t=Object.create(null),n;for(;(n=e.exec(s))!==null;)t[n[2]]=n[1];return t}function Pw(s){let e=[],t="";const n=gl(s,{chained:!0,customRewriter({vertexShader:r,fragmentShader:a}){let o=[],l=[],c=[],h=Hd(r),u=Hd(a);return e.forEach(f=>{let d=h[f],p=u[f];const _=d||p;if(_){const g=new RegExp(`\\buniform\\s+${_}\\s+${f}\\s*;`,"g"),m=new RegExp(`\\b${f}\\b`,"g"),v=`troika_attr_${f}`,x=`troika_vary_${f}`;if(o.push(`attribute ${_} ${v};`),d&&(r=r.replace(g,""),r=r.replace(m,v)),p){a=a.replace(g,""),a=a.replace(m,x);let y=`varying ${p} ${x};`;o.push(y),c.push(y),l.push(`${x} = ${v};`)}}}),r=`${o.join(`
`)}
${r.replace(Tg,`
$&
${l.join(`
`)}`)}`,c.length&&(a=`${c.join(`
`)}
${a}`),{vertexShader:r,fragmentShader:a}}});n.setUniformNames=function(r){e=r||[];const a=e.sort().join("|");a!==t&&(t=a,this.needsUpdate=!0)};const i=n.customProgramCacheKey();return n.customProgramCacheKey=function(){return i+"|"+t},n.isInstancedUniformsMaterial=!0,n}class Iw extends ch{constructor(e,t,n){super(e,t,n),this._maxCount=n,this._instancedUniformNames=[]}get geometry(){let e=this._derivedGeometry;const t=this._baseGeometry;return(!e||e.baseGeometry!==t)&&(e=this._derivedGeometry=Object.create(t),e.baseGeometry=t,e.attributes=Object.create(t.attributes),t.addEventListener("dispose",function(){e.dispose()})),e}set geometry(e){this._baseGeometry=e}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=new ni);return(!e||e.baseMaterial!==t)&&(e=this._derivedMaterial=Pw(t),t.addEventListener("dispose",function n(){t.removeEventListener("dispose",n),e.dispose()})),e.setUniformNames(this._instancedUniformNames),e}set material(e){if(Array.isArray(e))throw new Error("InstancedUniformsMesh does not support multiple materials");for(;e&&e.isInstancedUniformsMaterial;)e=e.baseMaterial;this._baseMaterial=e}get customDepthMaterial(){return this.material.getDepthMaterial()}get customDistanceMaterial(){return this.material.getDistanceMaterial()}setUniformAt(e,t,n){const i=this.geometry.attributes,r=`troika_attr_${e}`;let a=i[r];if(!a){const o=Dw(this._baseMaterial,e),l=Lw(o);if(a=i[r]=new ws(new Float32Array(l*this._maxCount),l),o!==null)for(let c=0;c<this._maxCount;c++)Gd(a,c,o);this._instancedUniformNames=[...this._instancedUniformNames,e]}Gd(a,t,n),a.needsUpdate=!0}unsetUniform(e){this.geometry.deleteAttribute(`troika_attr_${e}`),this._instancedUniformNames=this._instancedUniformNames.filter(t=>t!==e)}}function Gd(s,e,t){let n=s.itemSize;n===1?s.setX(e,t):n===2?s.setXY(e,t.x,t.y):n===3?t.isColor?s.setXYZ(e,t.r,t.g,t.b):s.setXYZ(e,t.x,t.y,t.z):n===4?s.setXYZW(e,t.x,t.y,t.z,t.w):t.toArray?t.toArray(s.array,e*n):s.set(t,e*n)}function Dw(s,e){let t=s.uniforms;return t&&t[e]||(t=Rw(s).uniforms,t&&t[e])?t[e].value:null}function Lw(s){return s==null?0:typeof s=="number"?1:s.isVector2?2:s.isVector3||s.isColor?3:s.isVector4||s.isQuaternion?4:s.elements?s.elements.length:Array.isArray(s)?s.length:0}const Nw=(s,e)=>{const t=s.split(`
`),n=/vMapUv|vAlphaMapUv|vNormalMapUv/g;return t.map(i=>!i.includes("varying")&&!i.includes("uniform")?i.replace(n,e):i).join(`
`)},Uw=(s,e)=>{const t={USE_UV:""};return e&&(t.TRI_GEOMETRY=""),gl(s,{defines:t,uniforms:{animationData:{value:null},animationDataSize:{value:0},billboarding:{value:0},flipX:{value:0},flipY:{value:0},spritesheetData:{value:null},dataSize:{value:new J(0,0)},tint:{value:new dt(0,0,0,0)}},vertexDefs:`
    uniform float billboarding;
    flat varying int vId;
    `,vertexMainOutro:`
    vId = gl_InstanceID;
    if(billboarding == 1.){
      vec3 instancePosition = vec3(instanceMatrix[3]);
      vec3 instanceScale = vec3(length(instanceMatrix[0]), length(instanceMatrix[1]), length(instanceMatrix[2]));

      vec3 cameraRight_worldspace = vec3(modelViewMatrix[0][0], modelViewMatrix[1][0], modelViewMatrix[2][0]);
      vec3 cameraUp_worldspace = vec3(modelViewMatrix[0][1], modelViewMatrix[1][1], modelViewMatrix[2][1]);

      vec3 vertexPosition_worldspace = instancePosition
        + cameraRight_worldspace * position.x * instanceScale.x
        + cameraUp_worldspace * position.y * instanceScale.y;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(vertexPosition_worldspace, 1.0);
    }
    `,customRewriter:({vertexShader:n,fragmentShader:i})=>(i=i.replace("void main() {",`void main() {
      float y = float(vId / animationDataSize) / float(animationDataSize);
      float x = mod(float(vId),float(animationDataSize)) / float(animationDataSize);

      float spritesheetFrameId = texture2D(animationData, vec2(x,y)).r;

			// x,y,w,h
			vec4 frameMeta = readData(spritesheetFrameId, 0.f);

			vec2 fSize = frameMeta.zw;
			vec2 fOffset = vec2(frameMeta.xy);

      vec2 transformedPlaneUv = vUv + vec2(0.,0.);

      // todo  == 1. caused a flickering bug. look into Precision/interpolation?
      if(flipX > 0.){
        transformedPlaneUv.x = 1. - transformedPlaneUv.x;
      }
      if(flipY > 0.){
        transformedPlaneUv.y = 1. - transformedPlaneUv.y;
      }

			vec2 spriteUv = fSize * transformedPlaneUv + fOffset ;

      #ifdef TRI_GEOMETRY
        // Shift UVs if mesh uses triangle geometry
        // TODO optimize ugly math
        if(vUv.y>0.5 || vUv.x<0.25 || vUv.x>0.75){
          discard;
        }

        vec2 zoomCenter = vec2(fSize.x * 0.5,0.) + fOffset;
        float zoomFactor = 2.;
        vec2 shiftedUV = spriteUv - zoomCenter;
        shiftedUV *= zoomFactor;
        shiftedUV += zoomCenter;
        spriteUv = shiftedUV;
      #endif



			`),i=`
			
			uniform sampler2D animationData;
      uniform int animationDataSize;
			uniform sampler2D spritesheetData;
      uniform float startTime;
			uniform float time;
			uniform float flipX;
			uniform float flipY;
			uniform vec2 dataSize;
      uniform vec4 tint;

      flat varying int vId;
			
			
			vec4 readData(float col, float row) {
				float wStep = 1.f / dataSize.x;
				float wHalfStep = wStep * 0.5f;
				float hStep = 1.f / dataSize.y;
				float hHalfStep = 1.f / dataSize.y * 0.5f;
				return texture2D(spritesheetData, vec2(col * wStep + wHalfStep, row * hStep + hHalfStep));
			}

      vec2 zoomUV(vec2 uv, vec2 zoomCenter, float zoomFactor) {
        // Shift UVs so that the zoom center is the origin
        vec2 shiftedUV = uv - zoomCenter;

        // Scale (zoom) the UV coordinates
        shiftedUV *= zoomFactor;

        // Shift back
        shiftedUV += zoomCenter;

        return shiftedUV;
    }
			
			${i}
			`,i=i.replace("vec4 sampledDiffuseColor = texture2D( map, vMapUv );",`
        vec4 sampledDiffuseColor = texture2D( map, vMapUv );
        if(tint.w == 1.){
          vec3 hue_term = 1.0 - min(abs(vec3(tint.x) - vec3(0,2.0,1.0)), 1.0);
          hue_term.x = 1.0 - dot(hue_term.yz, vec2(1));
          vec3 res = vec3(dot(sampledDiffuseColor.xyz, hue_term.xyz), dot(sampledDiffuseColor.xyz, hue_term.zxy), dot(sampledDiffuseColor.xyz, hue_term.yzx));
          res = mix(vec3(dot(res, vec3(0.2, 0.5, 0.3))), res, tint.y);
          res = res * tint.z;

          sampledDiffuseColor = vec4(res, sampledDiffuseColor.a);
        }

        // sampledDiffuseColor = vec4(texture2D(animationData, vUv).rgb, 1.);
      `),i=Nw(i,"spriteUv"),{vertexShader:n,fragmentShader:i})})},Ow=s=>{const e=[],t=[],n={},i=[],r=s.meta.size.w,a=s.meta.size.h,o=[s.meta.size.w,s.meta.size.h];for(const l in s.frames){const c=s.frames[l];e.push([c.frame.x/r,c.frame.y/a,c.frame.w/r,c.frame.h/a]),t.push(c.duration)}for(const l of s.meta.frameTags){n[l.name]=[];for(let c=l.from;c<=l.to;c++)n[l.name].push([c,t[c]]);i.push(n[l.name].length)}return{frames:e,animations:n,sheetSize:o,animationLengths:i}},Fw=s=>{const{frames:e,animationLengths:t,animations:n}=s,i=Math.max(e.length,t.length,...Object.values(n).map(d=>d.length)),r=2+Object.values(n).length,a=e.flat().concat(new Array((i-e.length)*4).fill(0)),o=t.map(d=>[d,0,0,0]).flat().concat(new Array((i-t.length)*4).fill(0)),l=[],c=new Map;for(let d=0;d<Object.keys(n).length;d++){const p=Object.keys(n)[d];c.set(p,d);const _=n[p].map(g=>[...g,0,0]).flat().concat(new Array((i-n[p].length)*4).fill(0));l.push(..._)}const h=[...a,...o,...l],u=new Float32Array(h);u.set(h);const f=new An(u,i,r,Gt,Ht);return f.type=Ht,f.minFilter=it,f.magFilter=it,f.wrapS=tn,f.wrapT=pn,f.needsUpdate=!0,{dataTexture:f,dataWidth:i,dataHeight:r,animMap:c}},kw=()=>{const s=new nt,e=new Float32Array([0,1,0,-1,-1,0,1,-1,0]);s.setAttribute("position",new ot(e,3));const t=new Float32Array([.5,1,0,0,1,0]);return s.setAttribute("uv",new ot(t,2)),s.computeVertexNormals(),s};class zw{constructor(e,t,n){this.variables=[],this.currentTextureIndex=0;let i=Ht;const r=new Gl,a=new Aa;a.position.z=1;const o={passThruTexture:{value:null}},l=u(d(),o),c=new wt(new Wi(2,2),l);r.add(c),this.setDataType=function(p){return i=p,this},this.addVariable=function(p,_,g){const m=this.createShaderMaterial(_),v={name:p,initialValueTexture:g,material:m,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:it,magFilter:it};return this.variables.push(v),v},this.setVariableDependencies=function(p,_){p.dependencies=_},this.init=function(){if(n.capabilities.isWebGL2===!1&&n.extensions.has("OES_texture_float")===!1)return"No OES_texture_float support for float textures.";if(n.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let p=0;p<this.variables.length;p++){const _=this.variables[p];_.renderTargets[0]=this.createRenderTarget(e,t,_.wrapS,_.wrapT,_.minFilter,_.magFilter),_.renderTargets[1]=this.createRenderTarget(e,t,_.wrapS,_.wrapT,_.minFilter,_.magFilter),this.renderTexture(_.initialValueTexture,_.renderTargets[0]),this.renderTexture(_.initialValueTexture,_.renderTargets[1]);const g=_.material,m=g.uniforms;if(_.dependencies!==null)for(let v=0;v<_.dependencies.length;v++){const x=_.dependencies[v];if(x.name!==_.name){let y=!1;for(let C=0;C<this.variables.length;C++)if(x.name===this.variables[C].name){y=!0;break}if(!y)return"Variable dependency not found. Variable="+_.name+", dependency="+x.name}m[x.name]={value:null},g.fragmentShader=`
uniform sampler2D `+x.name+`;
`+g.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const p=this.currentTextureIndex,_=this.currentTextureIndex===0?1:0;for(let g=0,m=this.variables.length;g<m;g++){const v=this.variables[g];if(v.dependencies!==null){const x=v.material.uniforms;for(let y=0,C=v.dependencies.length;y<C;y++){const A=v.dependencies[y];x[A.name].value=A.renderTargets[p].texture}}this.doRenderTarget(v.material,v.renderTargets[_])}this.currentTextureIndex=_},this.getCurrentRenderTarget=function(p){return p.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(p){return p.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){c.geometry.dispose(),c.material.dispose();const p=this.variables;for(let _=0;_<p.length;_++){const g=p[_];g.initialValueTexture&&g.initialValueTexture.dispose();const m=g.renderTargets;for(let v=0;v<m.length;v++)m[v].dispose()}};function h(p){p.defines.resolution="vec2( "+e.toFixed(1)+", "+t.toFixed(1)+" )"}this.addResolutionDefine=h;function u(p,_){_=_||{};const g=new Rn({name:"GPUComputationShader",uniforms:_,vertexShader:f(),fragmentShader:p});return h(g),g}this.createShaderMaterial=u,this.createRenderTarget=function(p,_,g,m,v,x){return p=p||e,_=_||t,g=g||tn,m=m||tn,v=v||it,x=x||it,new Bn(p,_,{wrapS:g,wrapT:m,minFilter:v,magFilter:x,format:Gt,type:i,depthBuffer:!1})},this.createTexture=function(){const p=new Float32Array(e*t*4),_=new An(p,e,t,Gt,Ht);return _.needsUpdate=!0,_},this.renderTexture=function(p,_){o.passThruTexture.value=p,this.doRenderTarget(l,_),o.passThruTexture.value=null},this.doRenderTarget=function(p,_){const g=n.getRenderTarget(),m=n.xr.enabled,v=n.shadowMap.autoUpdate;n.xr.enabled=!1,n.shadowMap.autoUpdate=!1,c.material=p,n.setRenderTarget(_),n.render(r,a),c.material=l,n.xr.enabled=m,n.shadowMap.autoUpdate=v,n.setRenderTarget(g)};function f(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function d(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const Bw=`
  #include <common>
  uniform sampler2D instructionsTexture;

  uniform sampler2D spritesheetData;
  uniform vec2 dataSize;
  uniform float fps;
  uniform float deltaTime;

  // read spritesheet metadata
  vec4 readData(float col, float row, sampler2D tex) {
    float wStep = 1.f / dataSize.x;
    float wHalfStep = wStep * 0.5f;
    float hStep = 1.f / dataSize.y;
    float hHalfStep = 1.f / dataSize.y * 0.5f;
    return texture2D(spritesheetData, vec2(col * wStep + wHalfStep, row * hStep + hHalfStep));
  }



  void main()	{

    // OUTPUT FROM THIS SHADER
    // progressValue.r - picked animation frame
    // progressValue.g - previous progress state (for pause, reverse & pingpong consistency)
    // progressValue.b - not used yet
    // progressValue.a - previous animationID

    vec2 cellSize = 1.0 / resolution.xy;
    vec2 uv = gl_FragCoord.xy * cellSize;


    vec4 progressValue = texture2D( progress, uv );

    vec4 instructions = texture2D( instructionsTexture, uv);

    // FREEZE FRAME - return to save calculations?
    if(instructions.a >=10.){
      progressValue.r = instructions.a - 10.;
      progressValue.a = instructions.x;
      progressValue.g = progressValue.g;
      gl_FragColor = progressValue;
      return;
    }


    progressValue.b = 0.;

    // todo shouldn't be rounding here, pick
    float animationId = round(instructions.x);

    float offset = instructions.g;

    float animLength = readData(animationId, 1.f, spritesheetData).r;
    float totalTime = animLength / fps;

    // new delta is % of animation
    float newProgress = deltaTime / totalTime;
    // add new delta to saved progress
    float frameTimedId = mod(progressValue.g + newProgress, 1.);
    // frameTimedId = 0.;
    // float frameTimedId = progressValue.g;
    // save for use in next frame



    float playMode = mod(instructions.b, 10.);

    // forward
    if(playMode == 0.){
      frameTimedId = progressValue.g + newProgress;
    }
    // reverse
    if(playMode == 1.){
      frameTimedId = progressValue.g - newProgress;
    }
    // 2 - pause - do nothing
    if(playMode == 2.){
      frameTimedId = progressValue.g;
    }

    // //todo pingpong
    // if(playMode == 3.){
    // }

    // loop (play once over 10.)
    if(instructions.b < 10.){
      frameTimedId = mod(frameTimedId, 1.);
    }

    // todo This could be optional and user would reset manually,
    // todo allowing for consistent movement across multiple animations
    // todo for example - running steps being syncec
    // start anim from beginning if animationID changes
    if(progressValue.a != instructions.x){
      frameTimedId = 0.;
    }

    float frameId = floor(animLength * frameTimedId);
    float spritesheetFrameId = readData(frameId, 2.f + animationId, spritesheetData).r;



    // Picked sprite frame that goes to material
    progressValue.r = spritesheetFrameId;

    progressValue.a = instructions.x;
    progressValue.g = frameTimedId;

    gl_FragColor = progressValue;
  }
`,Vw=(s=512)=>{const e=new Float32Array(s**2*4);for(let n=0;n<s**2*4;n++)e[n]=0;const t=new An(e,s,s,Gt,Ht);return t.minFilter=it,t.magFilter=it,t.wrapS=tn,t.wrapT=pn,t.needsUpdate=!0,t},Hw=s=>{if(s<=0)return 1;let e=1;for(;e<s;)e<<=1;return e},Gw=(s,e)=>{const t=Hw(Math.sqrt(e)),n=new zw(t,t,s),i=n.createTexture(),r=n.addVariable("progress",Bw,i),a=Vw(t);r.material.uniforms.instructionsTexture={value:a},r.material.uniforms.spritesheetData={value:null},r.material.uniforms.fps={value:0},r.material.uniforms.deltaTime={value:0},r.material.uniforms.dataSize={value:new J},n.setVariableDependencies(r,[r]);const o=n.init();o!==null&&console.error(o);let l=!1;return{gpuCompute:n,animationRunner:r,progressDataTexture:a,utils:{updateAnimationAt:(c,h)=>{const u=c*4;a.image.data[u]=h,l=!0},updateOffsetAt:(c,h)=>{const u=c*4;a.image.data[u+1]=h,l=!0},updatePlaymodeAt:(c,h)=>{const u=c*4;a.image.data[u+2]=h,l=!0},updateFrameAt:(c,h)=>{const u=c*4;a.image.data[u+3]=h+10,l=!0}},update:()=>{l&&(a.needsUpdate=!0,l=!1),n.compute()}}};class Ww{constructor(){yt(this,"_previousTime"),yt(this,"_currentTime"),yt(this,"_startTime"),yt(this,"_delta"),yt(this,"_elapsed"),yt(this,"_timescale"),yt(this,"_useFixedDelta"),yt(this,"_fixedDelta"),yt(this,"_usePageVisibilityAPI"),yt(this,"_pageVisibilityHandler"),this._previousTime=0,this._currentTime=0,this._startTime=au(),this._delta=0,this._elapsed=0,this._timescale=1,this._useFixedDelta=!1,this._fixedDelta=16.67,this._usePageVisibilityAPI=typeof document<"u"&&document.hidden!==void 0,this._usePageVisibilityAPI===!0&&(this._pageVisibilityHandler=Xw.bind(this),document.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disableFixedDelta(){return this._useFixedDelta=!1,this}dispose(){return this._usePageVisibilityAPI===!0&&document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this}enableFixedDelta(){return this._useFixedDelta=!0,this}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getFixedDelta(){return this._fixedDelta/1e3}getTimescale(){return this._timescale}reset(){return this._currentTime=au()-this._startTime,this}setFixedDelta(e){return this._fixedDelta=e*1e3,this}setTimescale(e){return this._timescale=e,this}update(){return this._useFixedDelta===!0?this._delta=this._fixedDelta:(this._previousTime=this._currentTime,this._currentTime=au()-this._startTime,this._delta=this._currentTime-this._previousTime),this._delta*=this._timescale,this._elapsed+=this._delta,this}}function au(){return(typeof performance>"u"?Date:performance).now()}function Xw(){document.hidden===!1&&this.reset()}const ou={FORWARD:0,REVERSE:1,PAUSE:2,PINGPONG:3};class $w extends Iw{constructor(e,t,n,i={geometry:"quad"}){let r;i.geometry||(i.geometry="quad"),i.geometry==="tri"&&(r=kw()),i.geometry==="quad"&&(r=new Wi(1,1)),i.geometry&&typeof i.geometry!="string"&&(r=i.geometry);const a=Uw(e,(i==null?void 0:i.geometry)==="tri");super(r,a,t),yt(this,"_spriteMaterial"),yt(this,"_spritesheet"),yt(this,"_animationMap"),yt(this,"_fps",15),yt(this,"_timer"),yt(this,"compute"),this.instanceMatrix.clearUpdateRanges(),this.instanceMatrix.addUpdateRange(0,t*16),this.instanceColor&&(this.instanceColor.clearUpdateRanges(),this.instanceColor.addUpdateRange(0,t*3)),this.compute=Gw(n,t),this._spriteMaterial=a,i.spritesheet&&this.updateSpritesheet(i.spritesheet),this._timer=new Ww,this._animationMap=new Map,this._spriteMaterial.uniforms.animationData.value=this.compute.gpuCompute.getCurrentRenderTarget(this.compute.animationRunner).texture,this._spriteMaterial.uniforms.animationDataSize.value=this.compute.progressDataTexture.image.width}updateSpritesheet(e){const{dataTexture:t,dataWidth:n,dataHeight:i,animMap:r}=Fw(e);this._spriteMaterial.uniforms.spritesheetData.value=t,this._spriteMaterial.uniforms.dataSize.value.x=n,this._spriteMaterial.uniforms.dataSize.value.y=i,this.compute.animationRunner.material.uniforms.dataSize.value=new J(n,i),this.compute.animationRunner.material.uniforms.spritesheetData.value=t,this._animationMap=r}get spritesheet(){return this._spritesheet}set spritesheet(e){this.updateSpritesheet(e),this._spritesheet=e}get animationMap(){return this._animationMap}get animation(){return{setAt:(e,t)=>{this.compute.utils.updateAnimationAt(e,this._animationMap.get(t)||0)}}}get frame(){return{setAt:(e,t,n)=>{var i;let r=t;n&&(r=(i=this.spritesheet)==null?void 0:i.animations[n][t][0]),this.compute.utils.updateFrameAt(e,r)},unsetAt:e=>{this.compute.utils.updateFrameAt(e,-10)},unsetAll:()=>{for(let e=0;e<this.count;e++)this.compute.utils.updateFrameAt(e,-10)}}}get playmode(){return{setAt:(e,t)=>{this.compute.utils.updatePlaymodeAt(e,ou[t])},setAll:e=>{for(let t=0;t<this.count;t++){const n=this.compute.progressDataTexture.image.data[t*4+2]>=10?10:0;this.compute.utils.updatePlaymodeAt(t,n+ou[e])}}}}get billboarding(){return{setAt:(e,t)=>{this.setUniformAt("billboarding",e,t?1:0)},setAll:e=>{this._spriteMaterial.uniforms.billboarding.value=e?1:0},unsetAll:()=>{this.unsetUniform("billboarding")}}}get offset(){return{setAt:(e,t)=>{this.compute.utils.updateOffsetAt(e,t)},randomizeAll:(e=1)=>{for(let t=0;t<this.count;t++)this.compute.utils.updateOffsetAt(t,Math.random()*e)}}}get loop(){return{setAt:(e,t)=>{const n=this.compute.progressDataTexture.image.data[e*4+2]%10;this.compute.utils.updatePlaymodeAt(e,n+(t?0:10))},setAll:e=>{for(let t=0;t<this.count;t++){const n=this.compute.progressDataTexture.image.data[t*4+2]%10;this.compute.utils.updatePlaymodeAt(t,n+(e?0:10))}}}}get flipX(){return{setAt:(e,t)=>{this.setUniformAt("flipX",e,t?1:0)},setGlobal:e=>{this._spriteMaterial.uniforms.flipX.value=e?1:0},unsetAll:()=>{this.unsetUniform("flipX")}}}get flipY(){return{setAt:(e,t)=>{this.setUniformAt("flipY",e,t?1:0)},setGlobal:e=>{this._spriteMaterial.uniforms.flipY.value=e?1:0},unsetAll:()=>{this.unsetUniform("flipY")}}}play(e,t=!0,n="FORWARD"){return{at:i=>{this.compute.utils.updateAnimationAt(i,this._animationMap.get(e)||0),this.compute.utils.updatePlaymodeAt(i,ou[n]+(t?0:10))}}}get hueShift(){const e=new dt;return{setGlobal:t=>{t?e.set(t.h,t.s,t.v,1):e.setW(0),this._spriteMaterial.uniforms.tint.value=e}}}get fps(){return this._fps}set fps(e){this._fps=e,this.compute.animationRunner.material.uniforms.fps.value=e}update(){this._timer.update();const e=this._timer.getDelta();this.compute.animationRunner.material.uniforms.deltaTime.value=e,this.compute.update()}}function Yw(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Uh={exports:{}};Uh.exports=uc;Uh.exports.default=uc;function uc(s,e,t){t=t||2;var n=e&&e.length,i=n?e[0]*t:s.length,r=Ag(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,l,c,h,u,f,d;if(n&&(r=Kw(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(var p=t;p<i;p+=t)u=s[p],f=s[p+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return va(r,a,t,o,l,d,0),a}function Ag(s,e,t,n,i){var r,a;if(i===Du(s,e,t,n)>0)for(r=e;r<t;r+=n)a=Wd(r,s[r],s[r+1],a);else for(r=t-n;r>=e;r-=n)a=Wd(r,s[r],s[r+1],a);return a&&hc(a,a.next)&&(ya(a),a=a.next),a}function As(s,e){if(!s)return s;e||(e=s);var t=s,n;do if(n=!1,!t.steiner&&(hc(t,t.next)||At(t.prev,t,t.next)===0)){if(ya(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function va(s,e,t,n,i,r,a){if(s){!a&&r&&iT(s,n,i,r);for(var o=s,l,c;s.prev!==s.next;){if(l=s.prev,c=s.next,r?Zw(s,n,i,r):qw(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),ya(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Jw(As(s),e,t),va(s,e,t,n,i,r,2)):a===2&&jw(s,e,t,n,i,r):va(As(s),e,t,n,i,r,1);break}}}}function qw(s){var e=s.prev,t=s,n=s.next;if(At(e,t,n)>=0)return!1;for(var i=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=i<r?i<a?i:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=i>r?i>a?i:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,p=n.next;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&or(i,o,r,l,a,c,p.x,p.y)&&At(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Zw(s,e,t,n){var i=s.prev,r=s,a=s.next;if(At(i,r,a)>=0)return!1;for(var o=i.x,l=r.x,c=a.x,h=i.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,p=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,g=h>u?h>f?h:f:u>f?u:f,m=Pu(d,p,e,t,n),v=Pu(_,g,e,t,n),x=s.prevZ,y=s.nextZ;x&&x.z>=m&&y&&y.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&or(o,h,l,u,c,f,x.x,x.y)&&At(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&or(o,h,l,u,c,f,y.x,y.y)&&At(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==a&&or(o,h,l,u,c,f,x.x,x.y)&&At(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=p&&y.y<=g&&y!==i&&y!==a&&or(o,h,l,u,c,f,y.x,y.y)&&At(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Jw(s,e,t){var n=s;do{var i=n.prev,r=n.next.next;!hc(i,r)&&Eg(i,n,n.next,r)&&xa(i,r)&&xa(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ya(n),ya(n.next),n=s=r),n=n.next}while(n!==s);return As(n)}function jw(s,e,t,n,i,r){var a=s;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&aT(a,o)){var l=Cg(a,o);a=As(a,a.next),l=As(l,l.next),va(a,e,t,n,i,r,0),va(l,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function Kw(s,e,t,n){var i=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:s.length,c=Ag(s,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(rT(c));for(i.sort(Qw),r=0;r<i.length;r++)t=eT(i[r],t);return t}function Qw(s,e){return s.x-e.x}function eT(s,e){var t=tT(s,e);if(!t)return e;var n=Cg(t,s);return As(n,n.next),As(t,t.next)}function tT(s,e){var t=e,n=s.x,i=s.y,r=-1/0,a;do{if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){var o=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=n&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===n))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,h=a.y,u=1/0,f;t=a;do n>=t.x&&t.x>=c&&n!==t.x&&or(i<h?n:r,i,c,h,i<h?r:n,i,t.x,t.y)&&(f=Math.abs(i-t.y)/(n-t.x),xa(t,s)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&nT(a,t)))&&(a=t,u=f)),t=t.next;while(t!==l);return a}function nT(s,e){return At(s.prev,s,e.prev)<0&&At(e.next,s,s.next)<0}function iT(s,e,t,n){var i=s;do i.z===0&&(i.z=Pu(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,sT(i)}function sT(s){var e,t,n,i,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,o--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,c*=2}while(a>1);return s}function Pu(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function rT(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function or(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function aT(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!oT(s,e)&&(xa(s,e)&&xa(e,s)&&lT(s,e)&&(At(s.prev,s,e.prev)||At(s,e.prev,e))||hc(s,e)&&At(s.prev,s,s.next)>0&&At(e.prev,e,e.next)>0)}function At(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function hc(s,e){return s.x===e.x&&s.y===e.y}function Eg(s,e,t,n){var i=Do(At(s,e,t)),r=Do(At(s,e,n)),a=Do(At(t,n,s)),o=Do(At(t,n,e));return!!(i!==r&&a!==o||i===0&&Io(s,t,e)||r===0&&Io(s,n,e)||a===0&&Io(t,s,n)||o===0&&Io(t,e,n))}function Io(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Do(s){return s>0?1:s<0?-1:0}function oT(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Eg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function xa(s,e){return At(s.prev,s,s.next)<0?At(s,e,s.next)>=0&&At(s,s.prev,e)>=0:At(s,e,s.prev)<0||At(s,s.next,e)<0}function lT(s,e){var t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Cg(s,e){var t=new Iu(s.i,s.x,s.y),n=new Iu(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wd(s,e,t,n){var i=new Iu(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ya(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Iu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}uc.deviation=function(s,e,t,n){var i=e&&e.length,r=i?e[0]*t:s.length,a=Math.abs(Du(s,0,r,t));if(i)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,h=o<l-1?e[o+1]*t:s.length;a-=Math.abs(Du(s,c,h,t))}var u=0;for(o=0;o<n.length;o+=3){var f=n[o]*t,d=n[o+1]*t,p=n[o+2]*t;u+=Math.abs((s[f]-s[p])*(s[d+1]-s[f+1])-(s[f]-s[d])*(s[p+1]-s[f+1]))}return a===0&&u===0?0:Math.abs((u-a)/a)};function Du(s,e,t,n){for(var i=0,r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}uc.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},n=0,i=0;i<s.length;i++){for(var r=0;r<s[i].length;r++)for(var a=0;a<e;a++)t.vertices.push(s[i][r][a]);i>0&&(n+=s[i-1].length,t.holes.push(n))}return t};var cT=Uh.exports;const uT=Yw(cT);new J;new J;function hT(s,e){var t=s%e,n=Math.floor(s/e);return[t,n]}function fT(s,e,t){for(var n=0,i=0;n<s.length;n+=e,i++)s.set(t([s[n],s[n+1]],i),n);return s}function dT(s,e,t,n){var i=t.x-n.x,r=s.x-e.x,a=t.y-n.y,o=s.y-e.y,l=r*a-o*i;if(l==0)throw new Error("Number of intersection points is zero or infinity.");var c=s.x*e.y-s.y*e.x,h=t.x*n.y-t.y*n.x,u=(c*i-r*h)/l,f=(c*a-o*h)/l,d={x:u,y:f};return d}function pT(s){for(var e=0,t=0,n=s.length;t<n;t++){var i=s[t].x,r=s[t==s.length-1?0:t+1].y,a=s[t==s.length-1?0:t+1].x,o=s[t].y;e+=i*r*.5,e-=a*o*.5}return Math.abs(e)}function mT([s,e,t]){return Math.abs((s.x*(e.y-t.y)+e.x*(t.y-s.y)+t.x*(s.y-e.y))/2)}function gT(s,e=8){const t=s.slice();let n=0;for(;t.length>e&&n<1e3;){n++;let i=1/0,r=null;for(let a=0;a<=t.length-1;a++){const o=t.length,l=[a,(a+1)%o,(a+2)%o,(a+3)%o],c=t[l[0]],h=t[l[1]],u=t[l[2]],f=t[l[3]];try{const d=dT(c,h,u,f),p=mT([d,h,u]);p<i&&(i=p,r={point:d,area:p,indicesToRemove:[l[1],l[2]]})}catch(d){console.log(d)}}if(r){const a=r.indicesToRemove[0],o=r.indicesToRemove[1];o>a?(t.splice(o,1),t.splice(a,1)):(t.splice(a,1),t.splice(o,1)),t.splice(Math.min(a,o),0,r.point)}}return t}var Lu;(s=>{function e(i){let r=i.slice();return r.sort(s.POINT_COMPARATOR),s.makeHullPresorted(r)}s.makeHull=e;function t(i){if(i.length<=1)return i.slice();let r=[];for(let o=0;o<i.length;o++){const l=i[o];for(;r.length>=2;){const c=r[r.length-1],h=r[r.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let o=i.length-1;o>=0;o--){const l=i[o];for(;a.length>=2;){const c=a[a.length-1],h=a[a.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}s.makeHullPresorted=t;function n(i,r){return i.x<r.x?-1:i.x>r.x?1:i.y<r.y?-1:i.y>r.y?1:0}s.POINT_COMPARATOR=n})(Lu||(Lu={}));function _T(s,e){const t=new Float32Array(s);for(let n=0;n<s;n++)t[n*3]=e[0],t[n*3+1]=e[1],t[n*3+2]=e[2];return t}function vT(s,e,t=()=>Math.random()){const n=e+1,i=new Float32Array(s.length/e*n);for(let r=0;r<s.length;r+=e){let a=r/e*n;i[a]=s[r],i[a+1]=s[r+1],i[a+2]=t(a)}return i}function xT(s){const e=new Float32Array(s.length*2);for(let t=0;t<s.length;t++)e[t*2]=s[t].x,e[t*2+1]=s[t].y;return e}function yT(s,e,t){const n=[],i=s%(e*4)/4,r=Math.floor(s/(e*4)),a=r-1,o=r+1,l=i-1,c=i+1;return a>=0?n.push(a*e+i):n.push(null),o<t?n.push(o*e+i):n.push(null),l>=0?n.push(r*e+l):n.push(null),c<e?n.push(r*e+c):n.push(null),n}const MT=s=>(...e)=>e[3]/255>0,bT={threshold:.01,slices:[1,1],indices:[0,0],scale:1,filter:MT};class ST{constructor(e,t,n){yt(this,"points",[]),yt(this,"data",{areaReduction:0}),yt(this,"debug",!0),yt(this,"index"),yt(this,"positions"),yt(this,"uv"),yt(this,"defaultSettings",bT),yt(this,"settings"),this.vertices=n,this.settings={...this.defaultSettings,...t};const{slices:i}=this.settings,r=wT("bvc-image",e.width,e.height);this.points=this.getPoints(e,r);let a=Lu.makeHull(this.points);const o=gT(a,n),l=o.map(f=>{let d=TT(f,[e.width,e.height],i);return d.y=-1*d.y,d}),{scale:c}=this.settings;this.data.areaReduction=1-pT(o)/(e.width/i[0]*(e.height/i[1]))*c;const h=xT(l),u=uT(h,null,2);this.positions=vT(h,2,()=>0),this.index=Uint32Array.from(u),this.uv=fT(h.slice(0),2,f=>{let d=f[0]+.5;d=d/this.settings.slices[0]+1/this.settings.slices[0]*this.settings.indices[0];let p=f[1]+.5;return p=p/this.settings.slices[1]+1-1/this.settings.slices[1]*(this.settings.indices[1]+1),[d,p]})}getImageData(e,t){const n=t.getContext("2d");n.drawImage(e,0,0);const[i,r]=this.settings.indices,[a,o]=this.settings.slices,l=t.width/a,c=t.height/o;return n.getImageData(l*i,c*r,l,c)}getPoints(e,t){const n=this.getImageData(e,t),i=n.data,r=[],a=this.settings.filter(this.settings.threshold),o=l=>l!==null&&a(i[l*4],i[l*4+1],i[l*4+2],i[l*4+3]);for(let l=0;l<i.length;l+=4)if(a(i[l+0],i[l+1],i[l+2],i[l+3])){if(yT(l,t.width,t.height).every(o))continue;const[c,h]=hT(l/4,n.width);r.push({x:c,y:h})}return r}}const wT=(s="debug-canvas",e,t)=>{const n=document.querySelector(`#${s}`)||document.createElement("canvas");return n.id=s,n.width=e,n.height=t,n.id=s,n},TT=(s,e,t)=>({x:(s.x-e[0]/(2*t[0]))/(e[0]/t[0]),y:(s.y-e[1]/(2*t[1]))/(e[1]/t[1])}),AT={threshold:.01,slices:[1,1],indices:[1,1]};class ET extends nt{constructor(e,t=8,n=.01,i=[1,1],r=[0,0]){super(),yt(this,"image"),yt(this,"vertices",8),yt(this,"settings",AT),this.vertices=t,this.settings={...this.settings,threshold:n,slices:i,indices:r},this.image="image"in e?e.image:e,this.build()}build(){const e=new ST(this.image,this.settings,this.vertices),t=e.positions.length,n=new ot(e.index,1),i=new ot(e.positions,3),r=new ot(_T(t,[0,0,1]),3),a=new ot(e.uv,2);this.userData.reduction=e.data.areaReduction,this.setIndex(n),this.setAttribute("position",i),this.setAttribute("normal",r),this.setAttribute("uv",a)}}const CT=()=>new RT;class RT{constructor(){yt(this,"animations"),this.animations=[]}add(e,t,n){const i={name:"",imageUrl:e};return Array.isArray(n)?i.multiAnimations=n:i.name=n,t.type=="rowColumn"&&(i.auto={type:"rowColumn",width:t.width,height:t.height}),t.type=="frameSize"&&(i.auto={type:"frameSize",width:t.width,height:t.height}),this.animations.push(i),this}async build(e={}){const t=new gr,n={frames:[],animations:{},sheetSize:[0,0],animationLengths:[]};let i=new Et;const r=[];let a=0,o=0;for(const _ of this.animations){const g=await t.loadAsync(_.imageUrl),m=g.width,v=g.height;a=Math.max(a,m),o+=v,r.push({img:g,w:m,h:v})}const l=document.createElement("canvas");l.width=a,l.height=o;const c=l.getContext("2d");let h=0;for(const{img:_,h:g}of r)c==null||c.drawImage(_,0,h,_.width,_.height),h+=g;i=new bu(l),i.needsUpdate=!0;let u=0,f=0,d=0,p=64;for(const _ of this.animations){const g=r[u];let m=0;if(_.auto){let v=0,x=0;_.auto.type=="frameSize"&&(x=g.w/_.auto.width,v=g.h/_.auto.height),_.auto.type=="rowColumn"&&(x=_.auto.width,v=_.auto.height);const y=g.w/x,C=g.h/v;m=v*x,_.multiAnimations||(n.animations[_.name]=[]);const A=new Map;for(let w=0;w<v;w++){d+=C;for(let D=0;D<x;D++){if(n.frames.push([g.w/x*D/a,1-d/o,y/a,C/o]),_.multiAnimations){const T=w*x+D;A.set(T,f)}else n.animations[_.name].push([f,1]);f++}}if(_.multiAnimations)for(const w of _.multiAnimations){n.animations[w.name]=[],n.animationLengths.push(w.frameRange[1]-w.frameRange[0]+1);for(let D=w.frameRange[0];D<=w.frameRange[1];D++)n.animations[w.name].push([A.get(D),1])}else n.animationLengths.push(m)}u++}if(i.matrixAutoUpdate=!1,i.generateMipmaps=!1,i.premultiplyAlpha=!1,i.wrapS=i.wrapT=pn,i.magFilter=i.minFilter=it,i.colorSpace=un,n.sheetSize=[a,o],e.makeSlimGeometry){const _=document.createElement("canvas");_.width=p,_.height=p;const g=_.getContext("2d"),m=a/p,v=o/p;for(let C=0;C<m;C++)for(let A=0;A<v;A++){const w=C*p,D=A*p;g==null||g.drawImage(l,w,D,p,p,0,0,p,p)}const x=new bu(_);x.magFilter=i.minFilter=it,x.colorSpace=un;const y=new ET(x,e.slimOptions?e.slimOptions.vertices:8,e.slimOptions?e.slimOptions.alphaThreshold:0);return{spritesheet:n,texture:i,geometry:y}}return{spritesheet:n,texture:i}}}function PT(s,e,t){const n=zn("instanced-sprite-ctx"),{updatePosition:i,sprite:r}=n;let{id:a=0}=e,{position:o=[0,0,0]}=e,{scale:l=[1,1]}=e,{animationName:c=void 0}=e,{playmode:h=void 0}=e,{billboarding:u=void 0}=e,{offset:f=void 0}=e,{loop:d=void 0}=e,{flipX:p=void 0}=e,{flipY:_=void 0}=e,{frameId:g=void 0}=e;return s.$$set=m=>{"id"in m&&t(0,a=m.id),"position"in m&&t(1,o=m.position),"scale"in m&&t(2,l=m.scale),"animationName"in m&&t(3,c=m.animationName),"playmode"in m&&t(4,h=m.playmode),"billboarding"in m&&t(5,u=m.billboarding),"offset"in m&&t(6,f=m.offset),"loop"in m&&t(7,d=m.loop),"flipX"in m&&t(8,p=m.flipX),"flipY"in m&&t(9,_=m.flipY),"frameId"in m&&t(10,g=m.frameId)},s.$$.update=()=>{s.$$.dirty&7&&o!==void 0&&i(a,o,l),s.$$.dirty&9&&c!==void 0&&r.animation.setAt(a,c),s.$$.dirty&17&&h!==void 0&&r.playmode.setAt(a,h),s.$$.dirty&33&&u!==void 0&&r.billboarding.setAt(a,u),s.$$.dirty&65&&f!==void 0&&r.offset.setAt(a,f),s.$$.dirty&129&&d!==void 0&&r.loop.setAt(a,d),s.$$.dirty&257&&p!==void 0&&r.flipX.setAt(a,p),s.$$.dirty&513&&_!==void 0&&r.flipY.setAt(a,_),s.$$.dirty&1033&&g!==void 0&&r.frame.setAt(a,g,c)},[a,o,l,c,h,u,f,d,p,_,g]}class Xd extends mt{constructor(e){super(),pt(this,e,PT,null,ft,{id:0,position:1,scale:2,animationName:3,playmode:4,billboarding:5,offset:6,loop:7,flipX:8,flipY:9,frameId:10})}}const IT=s=>({}),$d=s=>({Instance:s[3]});function DT(s){let e;const t=s[16].default,n=Pn(t,s,s[17],$d);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&131072)&&Dn(n,t,i,i[17],e?In(t,i[17],r,IT):Ln(i[17]),$d)},i(i){e||(G(n,i),e=!0)},o(i){Z(n,i),e=!1},d(i){n&&n.d(i)}}}function LT(s){let e,t;const n=[{is:s[0]},{frustumCulled:!1},s[4]];let i={$$slots:{default:[DT]},$$scope:{ctx:s}};for(let r=0;r<n.length;r+=1)i=vi(i,n[r]);return e=new xt({props:i}),{c(){Me(e.$$.fragment)},m(r,a){xe(e,r,a),t=!0},p(r,[a]){const o=a&17?dp(n,[a&1&&{is:r[0]},n[1],a&16&&pp(r[4])]):{};a&131072&&(o.$$scope={dirty:a,ctx:r}),e.$set(o)},i(r){t||(G(e.$$.fragment,r),t=!0)},o(r){Z(e.$$.fragment,r),t=!1},d(r){ye(e,r)}}}function NT(s,e,t){const n=["autoUpdate","baseMaterial","fps","billboarding","playmode","count","alphaTest","transparent","hueShift","randomPlaybackOffset","spritesheet","ref"];let i=hr(e,n),r,a,{$$slots:o={},$$scope:l}=e;new wt().material;let{autoUpdate:h=!0}=e,{baseMaterial:u=ni}=e,{fps:f=15}=e,{billboarding:d}=e,{playmode:p="FORWARD"}=e,{count:_=1e3}=e,{alphaTest:g=.1}=e,{transparent:m=!0}=e,{hueShift:v=void 0}=e,{randomPlaybackOffset:x=!1}=e,{spritesheet:y}=e;const C=new u({transparent:m,alphaTest:g,side:$n}),{renderer:A}=Ai();let{ref:w=new $w(C,_,A)}=e;const D=Vt(new Map),T=Vt(void 0);dn(s,T,F=>t(21,a=F)),_n([T],()=>{if(a===void 0){w.billboarding.unsetAll();return}else w.billboarding.setAll(a)});const M=Vt(void 0);dn(s,M,F=>t(20,r=F)),_n([M],()=>{if(r===void 0){w.playmode.setAll("PAUSE");return}else w.playmode.setAll(r)});const I=Vt(x);let k=!1;_n([I],([F])=>{if(k===!1&&F&&w.offset.randomizeAll(F===!0?100:F),k===!0&&!F)for(let $=0;$<_;$++)w.offset.setAt($,0);k=!!F});let O=!1;const Y=new He;qn("instanced-sprite-ctx",{sprite:w,count:_,animationMap:D,updatePosition:(F,$,ge=[1,1])=>{Y.makeScale(ge[0],ge[1],1),Y.setPosition(...$),w.setMatrixAt(F,Y),O=!0}}),wr(()=>{h&&w.update(),O&&(t(0,w.instanceMatrix.needsUpdate=!0,w),O=!1)});const W=new Proxy(Xd,{construct(F,[$]){return new Xd($)}});return s.$$set=F=>{e=vi(vi({},e),Oo(F)),t(4,i=hr(e,n)),"autoUpdate"in F&&t(5,h=F.autoUpdate),"baseMaterial"in F&&t(6,u=F.baseMaterial),"fps"in F&&t(7,f=F.fps),"billboarding"in F&&t(8,d=F.billboarding),"playmode"in F&&t(9,p=F.playmode),"count"in F&&t(10,_=F.count),"alphaTest"in F&&t(11,g=F.alphaTest),"transparent"in F&&t(12,m=F.transparent),"hueShift"in F&&t(13,v=F.hueShift),"randomPlaybackOffset"in F&&t(14,x=F.randomPlaybackOffset),"spritesheet"in F&&t(15,y=F.spritesheet),"ref"in F&&t(0,w=F.ref),"$$scope"in F&&t(17,l=F.$$scope)},s.$$.update=()=>{s.$$.dirty&32769&&y&&(t(0,w.spritesheet=y.spritesheet,w),D.set(w.animationMap),t(0,w.material.map=y.texture,w),t(0,w.material.needsUpdate=!0,w)),s.$$.dirty&2048&&t(0,w.material.alphaTest=g,w),s.$$.dirty&4096&&t(0,w.material.transparent=m,w),s.$$.dirty&128&&t(0,w.fps=f,w),s.$$.dirty&8193&&w.hueShift.setGlobal(v),s.$$.dirty&256&&T.set(d),s.$$.dirty&512&&M.set(p),s.$$.dirty&16384&&I.set(x)},[w,T,M,W,i,h,u,f,d,p,_,g,m,v,x,y,o,l]}class Tr extends mt{constructor(e){super(),pt(this,e,NT,LT,ft,{autoUpdate:5,baseMaterial:6,fps:7,billboarding:8,playmode:9,count:10,alphaTest:11,transparent:12,hueShift:13,randomPlaybackOffset:14,spritesheet:15,ref:0})}}const fc=()=>zn("instanced-sprite-ctx"),UT=s=>{const e=CT(),t=[];for(const{url:r,type:a,width:o,height:l,animations:c}of s){for(const h of c)t.push(h.name);e.add(r,{type:a,width:o,height:l},c)}return{spritesheet:e.build(),useInstancedSprite:fc}},OT=(s,e)=>{const t=new bh().load(e,i=>{i.matrixAutoUpdate=!1,i.generateMipmaps=!1,i.premultiplyAlpha=!1,i.wrapS=t.wrapT=pn,i.magFilter=t.minFilter=it,i.colorSpace=un,i.needsUpdate=!0});return(async()=>{const r=await(await fetch(s)).json();return{spritesheet:Ow(r),texture:t}})()},Ar={from:UT,fromAseprite:OT},Oh=Math.PI/180;let FT=class{constructor(e,t,n=30){this.random=Math.random,this.radius=e,this.cellSize=e/Math.SQRT2,this.maxCandidates=n,this.width=t[0],this.height=t[1],this.gridHeight=Math.ceil(this.height/this.cellSize),this.gridWidth=Math.ceil(this.width/this.cellSize),this.grid=new Array(this.gridHeight);for(let i=0;i<this.gridHeight;i++)this.grid[i]=[...new Array(this.gridWidth)].map(r=>0);this.points=[],this.spawnPoints=[],this.spawnPoints.push([this.width/2,this.height/2])}GeneratePoints(){for(;this.spawnPoints.length>0;){const e=Math.floor(this.random()*this.spawnPoints.length),t=this.spawnPoints[e];let n=!1;for(let i=0;i<this.maxCandidates;i++){const r=this.random()*Math.PI*2,a=[Math.sin(r),Math.cos(r)],o=Math.floor(this.random()*(this.radius+1))+this.radius,l=t.map((c,h)=>c+a[h]*o);if(this.IsValid(l)){this.points.push(l),this.spawnPoints.push(l);const c=Math.ceil(l[0]/this.cellSize)-1,h=Math.ceil(l[1]/this.cellSize)-1;this.grid[h][c]=this.points.length,n=!0;break}}n||this.spawnPoints.splice(e,1)}return this.points}IsValid(e){const t=e[0],n=e[1];if(t>=0&&t<this.width&&n>=0&&n<this.height){const i=Math.ceil(t/this.cellSize),r=Math.ceil(n/this.cellSize),a=Math.max(0,i-2),o=Math.min(i+2,this.gridWidth-1),l=Math.max(0,r-2),c=Math.min(r+2,this.gridHeight-1);for(let h=a;h<=o;h++)for(let u=l;u<=c;u++){const f=this.grid[u][h];if(f!=0){const d=e.map((_,g)=>_-this.points[f-1][g]);if(Math.pow(d[0],2)+Math.pow(d[1],2)<Math.pow(this.radius,2))return!1}}return!0}return!1}},kT=class extends FT{constructor(e,t,n=30,i){super(e,t,n),this.random=i,this.spawnPoints=[];const r=Math.floor(this.random()*this.width),a=Math.floor(this.random()*this.height);this.spawnPoints.push([r,a])}};const Rg=(s=100)=>{const e=(Math.random()-.5)*s*2,t=(Math.random()-.5)*s*2;return Math.sqrt(e**2+t**2)>s?Rg():{x:e,y:t}};function Yd(s,e,t){const n=s.slice();return n[11]=e[t][0],n[12]=e[t][1],n[14]=t,n}function zT(s){return{c:ue,m:ue,p:ue,i:ue,o:ue,d:ue}}function BT(s){let e,t,n;function i(a){s[5](a)}let r={count:s[3].length,autoUpdate:!1,playmode:"PAUSE",billboarding:s[0],spritesheet:s[9],castShadow:!0,$$slots:{default:[GT,({Instance:a})=>({10:a}),({Instance:a})=>a?1024:0]},$$scope:{ctx:s}};return s[1]!==void 0&&(r.ref=s[1]),e=new Tr({props:r}),En.push(()=>yi(e,"ref",i)),{c(){Me(e.$$.fragment)},m(a,o){xe(e,a,o),n=!0},p(a,o){const l={};o&1&&(l.billboarding=a[0]),o&32768&&(l.$$scope={dirty:o,ctx:a}),!t&&o&2&&(t=!0,l.ref=a[1],xi(()=>t=!1)),e.$set(l)},i(a){n||(G(e.$$.fragment,a),n=!0)},o(a){Z(e.$$.fragment,a),n=!1},d(a){ye(e,a)}}}function VT(s){let e,t;return e=new s[10]({props:{position:[s[11]-_l/2,1.5,s[12]-vl/2],id:s[14],scale:[3,3],frameId:Math.floor(Math.random()*24)}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p:ue,i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function HT(s){let e,t;return e=new s[10]({props:{position:[s[11]-_l/2,1.5,s[12]-vl/2],id:s[14],animationName:s[4](),scale:[3,3]}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p:ue,i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function qd(s){let e,t,n,i;const r=[HT,VT],a=[];function o(l,c){return l[14]<l[3].length/2?0:1}return e=o(s),t=a[e]=r[e](s),{c(){t.c(),n=Nn()},m(l,c){a[e].m(l,c),oe(l,n,c),i=!0},p(l,c){t.p(l,c)},i(l){i||(G(t),i=!0)},o(l){Z(t),i=!1},d(l){l&&ae(n),a[e].d(l)}}}function GT(s){let e,t,n=fr(s[3]),i=[];for(let a=0;a<n.length;a+=1)i[a]=qd(Yd(s,n,a));const r=a=>Z(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=Nn()},m(a,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,o);oe(a,e,o),t=!0},p(a,o){if(o&24){n=fr(a[3]);let l;for(l=0;l<n.length;l+=1){const c=Yd(a,n,l);i[l]?(i[l].p(c,o),G(i[l],1)):(i[l]=qd(c),i[l].c(),G(i[l],1),i[l].m(e.parentNode,e))}for(rn(),l=n.length;l<i.length;l+=1)r(l);an()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)G(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)Z(i[o]);t=!1},d(a){a&&ae(e),Nu(i,a)}}}function WT(s){return{c:ue,m:ue,p:ue,i:ue,o:ue,d:ue}}function XT(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!1,pending:WT,then:BT,catch:zT,value:9,blocks:[,,,]};return xr(s[2].spritesheet,n),{c(){e=Nn(),n.block.c()},m(i,r){oe(i,e,r),n.block.m(i,n.anchor=r),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(i,[r]){s=i,yr(n,s,r)},i(i){t||(G(n.block),t=!0)},o(i){for(let r=0;r<3;r+=1){const a=n.blocks[r];Z(a)}t=!1},d(i){i&&ae(e),n.block.d(i),n.token=null,n=null}}}const _l=600,vl=600,$T=11,YT=7,qT=3,ZT=107;function JT(s,e,t){let{billboarding:n=!0}=e;const i=[{url:"https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/jack/jack.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL2phY2svamFjay5wbmciLCJpYXQiOjE3MjUwMTc5NjYsImV4cCI6MTc1NjU1Mzk2Nn0.K3F91gMPC4eV8G3ueHeJ4ze2sxkjkdrLrm9O2_sgt_w&t=2024-08-30T11%3A39%3A18.966Z",type:"rowColumn",width:8,height:3,animations:[{name:"green_0",frameRange:[0,0]},{name:"green_1",frameRange:[1,1]},{name:"green_2",frameRange:[2,2]},{name:"green_3",frameRange:[3,3]},{name:"green_4",frameRange:[4,4]},{name:"green_5",frameRange:[5,5]},{name:"green_6",frameRange:[6,6]},{name:"green_7",frameRange:[7,7]},{name:"green_8",frameRange:[12,12]},{name:"green_9",frameRange:[13,13]},{name:"green_10",frameRange:[14,14]},{name:"green_11",frameRange:[15,15]},{name:"red_0",frameRange:[8,8]},{name:"red_1",frameRange:[9,9]},{name:"red_2",frameRange:[10,10]},{name:"red_3",frameRange:[11,11]},{name:"red_4",frameRange:[20,20]},{name:"red_5",frameRange:[21,21]},{name:"red_6",frameRange:[22,22]},{name:"red_7",frameRange:[23,23]},{name:"dead_0",frameRange:[16,16]},{name:"dead_1",frameRange:[17,17]},{name:"dead_2",frameRange:[18,18]},{name:"dead_3",frameRange:[19,19]}]}],r=Ar.from(i),o=new kT(4,[_l,vl],void 0,Math.random).GeneratePoints().filter(u=>Math.sqrt((u[0]-_l/2)**2+(u[1]-vl/2)**2)<ZT),l=()=>{const u=Math.random();return u>.97?`dead_${Math.floor(qT*Math.random())}`:u>.9?`red_${Math.floor(YT*Math.random())}`:`green_${Math.floor($T*Math.random())}`};let c;function h(u){c=u,t(1,c)}return s.$$set=u=>{"billboarding"in u&&t(0,n=u.billboarding)},s.$$.update=()=>{if(s.$$.dirty&2&&c){for(let u=0;u<o.length;u++)c.flipX.setAt(u,Math.random()>.6);c.update()}},[n,c,r,o,l,h]}let jT=class extends mt{constructor(e){super(),pt(this,e,JT,XT,ft,{billboarding:0})}};const KT=100;function QT(s){const{updatePosition:e,count:t,sprite:n}=fc(),i=Array.from({length:t}),r=Array.from({length:t});for(let h=0;h<t;h++){const u=Rg(KT);i[h]=u.x,r[h]=u.y}const a=[];for(let h=0;h<t;h++)a.push({action:"Run",timer:.1,velocity:[0,1]});const o=new J(0,0),l=h=>{const u=["Forward","Backward","Left","Right"],f=a[h],d=Math.abs(f.velocity[0]*2)>Math.abs(f.velocity[1])?2:0,p=f.velocity[0]>0?1:0,_=f.velocity[1]>0?0:1,g=d?p:_,m=u.slice(0+d,2+d);return`${f.action}${m[g]}`},c=h=>{for(let u=0;u<a.length;u++){const f=a[u];if(f.timer-=h,i[u]+=f.velocity[0]*h,r[u]+=f.velocity[1]*h,f.timer<0){const d=.6+(f.action==="Idle"?.3:0);f.action=Math.random()<d?"Run":"Idle",f.timer=5+Math.random()*5,f.action==="Run"&&(o.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(3),f.velocity=o.toArray());const p=l(u);f.action==="Idle"&&(f.velocity=[0,0]),n.animation.setAt(u,p)}}};return wr(h=>{c(h);for(let u=0;u<t;u++)e(u,[i[u]||0,.5,r[u]||0])}),[]}let eA=class extends mt{constructor(e){super(),pt(this,e,QT,null,ft,{})}};function tA(s){return{c:ue,m:ue,p:ue,i:ue,o:ue,d:ue}}function nA(s){let e,t;return e=new Tr({props:{spritesheet:s[3],count:1e3,playmode:"FORWARD",fps:s[1],billboarding:s[0],castShadow:!0,$$slots:{default:[iA]},$$scope:{ctx:s}}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.fps=n[1]),i&1&&(r.billboarding=n[0]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function iA(s){let e,t;return e=new eA({}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function sA(s){return{c:ue,m:ue,p:ue,i:ue,o:ue,d:ue}}function rA(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!1,pending:sA,then:nA,catch:tA,value:3,blocks:[,,,]};return xr(s[2],n),{c(){e=Nn(),n.block.c()},m(i,r){oe(i,e,r),n.block.m(i,n.anchor=r),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(i,[r]){s=i,yr(n,s,r)},i(i){t||(G(n.block),t=!0)},o(i){for(let r=0;r<3;r+=1){const a=n.blocks[r];Z(a)}t=!1},d(i){i&&ae(e),n.block.d(i),n.token=null,n=null}}}function aA(s,e,t){let{billboarding:n=!0}=e,{fps:i}=e;const r=Ar.fromAseprite("https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/COMMON/player.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL0NPTU1PTi9wbGF5ZXIuanNvbiIsImlhdCI6MTcyNTAxNTgyNSwiZXhwIjoxNzU2NTUxODI1fQ.hr-9kMbwTDdRLVrvSkK61k1dvfR4nb3KteCWz4vCnNE&t=2024-08-30T11%3A03%3A38.506Z","https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/COMMON/player.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL0NPTU1PTi9wbGF5ZXIucG5nIiwiaWF0IjoxNzI1MDE1NzI5LCJleHAiOjE3NTY1NTE3Mjl9.ODPZ3oHVE0-j2dTY1aJrCpv4GUzs0xAeuPjFVawlh84&t=2024-08-30T11%3A02%3A02.336Z");return s.$$set=a=>{"billboarding"in a&&t(0,n=a.billboarding),"fps"in a&&t(1,i=a.fps)},[n,i,r]}let oA=class extends mt{constructor(e){super(),pt(this,e,aA,rA,ft,{billboarding:0,fps:1})}};function Zd(s){let e,t;return e=new xt.Mesh({props:{"position.y":-20,"scale.y":.5,$$slots:{default:[lA]},$$scope:{ctx:s}}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p(n,i){const r={};i&132&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function lA(s){let e,t,n,i;return e=new xt.SphereGeometry({props:{args:[110]}}),n=new xt.MeshBasicMaterial({props:{map:s[2],side:Wt}}),{c(){Me(e.$$.fragment),t=Oe(),Me(n.$$.fragment)},m(r,a){xe(e,r,a),oe(r,t,a),xe(n,r,a),i=!0},p(r,a){const o={};a&4&&(o.map=r[2]),n.$set(o)},i(r){i||(G(e.$$.fragment,r),G(n.$$.fragment,r),i=!0)},o(r){Z(e.$$.fragment,r),Z(n.$$.fragment,r),i=!1},d(r){r&&ae(t),ye(e,r),ye(n,r)}}}function Jd(s){let e,t;return e=new xt.Mesh({props:{"rotation.x":-Oh*90,receiveShadow:!0,$$slots:{default:[cA]},$$scope:{ctx:s}}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p(n,i){const r={};i&136&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function cA(s){let e,t,n,i;return e=new xt.CircleGeometry({props:{args:[110]}}),n=new xt.MeshLambertMaterial({props:{map:s[3]}}),{c(){Me(e.$$.fragment),t=Oe(),Me(n.$$.fragment)},m(r,a){xe(e,r,a),oe(r,t,a),xe(n,r,a),i=!0},p(r,a){const o={};a&8&&(o.map=r[3]),n.$set(o)},i(r){i||(G(e.$$.fragment,r),G(n.$$.fragment,r),i=!0)},o(r){Z(e.$$.fragment,r),Z(n.$$.fragment,r),i=!1},d(r){r&&ae(t),ye(e,r),ye(n,r)}}}function uA(s){let e,t,n,i,r,a,o,l,c,h,u,f,d;const p=s[6].default,_=Pn(p,s,s[7],null);t=new oA({props:{billboarding:s[0],fps:s[1]}}),i=new jT({props:{billboarding:s[0]}});let g=s[2]&&Zd(s),m=s[3]&&Jd(s);return l=new Nh({props:{elevation:13.35}}),h=new xt.AmbientLight({props:{intensity:1}}),f=new xt.DirectionalLight({props:{"shadow.mapSize":[2048,2048],"shadow.camera.far":128,"shadow.camera.near":.01,"shadow.camera.left":-20,"shadow.camera.right":20,"shadow.camera.top":20,"shadow.camera.bottom":-20,"shadow.bias":-1e-4,"position.x":0,"position.y":50,"position.z":30,intensity:3,castShadow:!0}}),{c(){_&&_.c(),e=Oe(),Me(t.$$.fragment),n=Oe(),Me(i.$$.fragment),r=Oe(),g&&g.c(),a=Oe(),m&&m.c(),o=Oe(),Me(l.$$.fragment),c=Oe(),Me(h.$$.fragment),u=Oe(),Me(f.$$.fragment)},m(v,x){_&&_.m(v,x),oe(v,e,x),xe(t,v,x),oe(v,n,x),xe(i,v,x),oe(v,r,x),g&&g.m(v,x),oe(v,a,x),m&&m.m(v,x),oe(v,o,x),xe(l,v,x),oe(v,c,x),xe(h,v,x),oe(v,u,x),xe(f,v,x),d=!0},p(v,[x]){_&&_.p&&(!d||x&128)&&Dn(_,p,v,v[7],d?In(p,v[7],x,null):Ln(v[7]),null);const y={};x&1&&(y.billboarding=v[0]),x&2&&(y.fps=v[1]),t.$set(y);const C={};x&1&&(C.billboarding=v[0]),i.$set(C),v[2]?g?(g.p(v,x),x&4&&G(g,1)):(g=Zd(v),g.c(),G(g,1),g.m(a.parentNode,a)):g&&(rn(),Z(g,1,1,()=>{g=null}),an()),v[3]?m?(m.p(v,x),x&8&&G(m,1)):(m=Jd(v),m.c(),G(m,1),m.m(o.parentNode,o)):m&&(rn(),Z(m,1,1,()=>{m=null}),an())},i(v){d||(G(_,v),G(t.$$.fragment,v),G(i.$$.fragment,v),G(g),G(m),G(l.$$.fragment,v),G(h.$$.fragment,v),G(f.$$.fragment,v),d=!0)},o(v){Z(_,v),Z(t.$$.fragment,v),Z(i.$$.fragment,v),Z(g),Z(m),Z(l.$$.fragment,v),Z(h.$$.fragment,v),Z(f.$$.fragment,v),d=!1},d(v){v&&(ae(e),ae(n),ae(r),ae(a),ae(o),ae(c),ae(u)),_&&_.d(v),ye(t,v),ye(i,v),g&&g.d(v),m&&m.d(v),ye(l,v),ye(h,v),ye(f,v)}}}const hA="https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/jack/bgs.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL2phY2svYmdzLnBuZyIsImlhdCI6MTcyNTAxNjU1OCwiZXhwIjoxNzU2NTUyNTU4fQ.9BF3cPq6-c88Ow5eRhuDINTFdVGT7HtSb2SBvbLGt8U&t=2024-08-30T11%3A15%3A50.891Z",fA="https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/jack/gr.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL2phY2svZ3IucG5nIiwiaWF0IjoxNzI1MDE2NTM1LCJleHAiOjE3NTY1NTI1MzV9.C34yZn3caOzhvteCh1u6qEyaukEHpu5tLEjFIheuj0s&t=2024-08-30T11%3A15%3A28.407Z";function dA(s,e,t){let n,i,{$$slots:r={},$$scope:a}=e,{billboarding:o=!0}=e,{fps:l}=e;const c=_r(fA,{transform:u=>(u.wrapS=u.wrapT=pn,u.repeat.set(100,100),u.minFilter=it,u.magFilter=it,u.needsUpdate=!0,u)});dn(s,c,u=>t(3,i=u));const h=_r(hA,{transform:u=>(u.wrapS=u.wrapT=pn,u.repeat.set(10,2),u.minFilter=it,u.magFilter=it,u.needsUpdate=!0,u)});return dn(s,h,u=>t(2,n=u)),s.$$set=u=>{"billboarding"in u&&t(0,o=u.billboarding),"fps"in u&&t(1,l=u.fps),"$$scope"in u&&t(7,a=u.$$scope)},[o,l,n,i,c,h,r,a]}let pA=class extends mt{constructor(e){super(),pt(this,e,dA,uA,ft,{billboarding:0,fps:1})}},mA=class extends mt{constructor(e){super(),pt(this,e,null,null,ft,{})}};function gA(s){let e,t;return e=new Lh({}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function _A(s){let e,t,n,i;return e=new xt.PerspectiveCamera({props:{makeDefault:!0,fov:15,"position.z":-80,"position.y":10,"position.x":10,$$slots:{default:[gA]},$$scope:{ctx:s}}}),n=new pA({props:{billboarding:s[0],fps:s[1]}}),{c(){Me(e.$$.fragment),t=Oe(),Me(n.$$.fragment)},m(r,a){xe(e,r,a),oe(r,t,a),xe(n,r,a),i=!0},p(r,a){const o={};a&16&&(o.$$scope={dirty:a,ctx:r}),e.$set(o);const l={};a&1&&(l.billboarding=r[0]),a&2&&(l.fps=r[1]),n.$set(l)},i(r){i||(G(e.$$.fragment,r),G(n.$$.fragment,r),i=!0)},o(r){Z(e.$$.fragment,r),Z(n.$$.fragment,r),i=!1},d(r){r&&ae(t),ye(e,r),ye(n,r)}}}function vA(s){let e,t,n,i,r,a,o;t=new Dh({props:{$$slots:{default:[_A]},$$scope:{ctx:s}}});function l(u){s[2](u)}function c(u){s[3](u)}let h={};return s[0]!==void 0&&(h.billboarding=s[0]),s[1]!==void 0&&(h.fps=s[1]),i=new mA({props:h}),En.push(()=>yi(i,"billboarding",l)),En.push(()=>yi(i,"fps",c)),{c(){e=qe("div"),Me(t.$$.fragment),n=Oe(),Me(i.$$.fragment),Ie(e,"class","svelte-oc0e9i")},m(u,f){oe(u,e,f),xe(t,e,null),It(e,n),xe(i,e,null),o=!0},p(u,[f]){const d={};f&19&&(d.$$scope={dirty:f,ctx:u}),t.$set(d);const p={};!r&&f&1&&(r=!0,p.billboarding=u[0],xi(()=>r=!1)),!a&&f&2&&(a=!0,p.fps=u[1],xi(()=>a=!1)),i.$set(p)},i(u){o||(G(t.$$.fragment,u),G(i.$$.fragment,u),o=!0)},o(u){Z(t.$$.fragment,u),Z(i.$$.fragment,u),o=!1},d(u){u&&ae(e),ye(t),ye(i)}}}function xA(s,e,t){let n=!0,i=1;function r(o){n=o,t(0,n)}function a(o){i=o,t(1,i)}return[n,i,r,a]}class yA extends mt{constructor(e){super(),pt(this,e,xA,vA,ft,{})}}let MA=class{constructor(e,t,n=30){this.random=Math.random,this.radius=e,this.cellSize=e/Math.SQRT2,this.maxCandidates=n,this.width=t[0],this.height=t[1],this.gridHeight=Math.ceil(this.height/this.cellSize),this.gridWidth=Math.ceil(this.width/this.cellSize),this.grid=new Array(this.gridHeight);for(let i=0;i<this.gridHeight;i++)this.grid[i]=[...new Array(this.gridWidth)].map(r=>0);this.points=[],this.spawnPoints=[],this.spawnPoints.push([this.width/2,this.height/2])}GeneratePoints(){for(;this.spawnPoints.length>0;){const e=Math.floor(this.random()*this.spawnPoints.length),t=this.spawnPoints[e];let n=!1;for(let i=0;i<this.maxCandidates;i++){const r=this.random()*Math.PI*2,a=[Math.sin(r),Math.cos(r)],o=Math.floor(this.random()*(this.radius+1))+this.radius,l=t.map((c,h)=>c+a[h]*o);if(this.IsValid(l)){this.points.push(l),this.spawnPoints.push(l);const c=Math.ceil(l[0]/this.cellSize)-1,h=Math.ceil(l[1]/this.cellSize)-1;this.grid[h][c]=this.points.length,n=!0;break}}n||this.spawnPoints.splice(e,1)}return this.points}IsValid(e){const t=e[0],n=e[1];if(t>=0&&t<this.width&&n>=0&&n<this.height){const i=Math.ceil(t/this.cellSize),r=Math.ceil(n/this.cellSize),a=Math.max(0,i-2),o=Math.min(i+2,this.gridWidth-1),l=Math.max(0,r-2),c=Math.min(r+2,this.gridHeight-1);for(let h=a;h<=o;h++)for(let u=l;u<=c;u++){const f=this.grid[u][h];if(f!=0){const d=e.map((_,g)=>_-this.points[f-1][g]);if(Math.pow(d[0],2)+Math.pow(d[1],2)<Math.pow(this.radius,2))return!1}}return!0}return!1}},bA=class extends MA{constructor(e,t,n=30,i){super(e,t,n),this.random=i,this.spawnPoints=[];const r=Math.floor(this.random()*this.width),a=Math.floor(this.random()*this.height);this.spawnPoints.push([r,a])}};const Pg=(s=100)=>{const e=(Math.random()-.5)*s*2,t=(Math.random()-.5)*s*2;return Math.sqrt(e**2+t**2)>s?Pg():{x:e,y:t}};function jd(s,e,t){const n=s.slice();return n[11]=e[t][0],n[12]=e[t][1],n[14]=t,n}function SA(s){return{c:ue,m:ue,p:ue,i:ue,o:ue,d:ue}}function wA(s){let e,t,n;function i(a){s[5](a)}let r={count:s[3].length,autoUpdate:!1,playmode:"PAUSE",billboarding:s[0],spritesheet:s[9],castShadow:!0,$$slots:{default:[EA,({Instance:a})=>({10:a}),({Instance:a})=>a?1024:0]},$$scope:{ctx:s}};return s[1]!==void 0&&(r.ref=s[1]),e=new Tr({props:r}),En.push(()=>yi(e,"ref",i)),{c(){Me(e.$$.fragment)},m(a,o){xe(e,a,o),n=!0},p(a,o){const l={};o&1&&(l.billboarding=a[0]),o&32768&&(l.$$scope={dirty:o,ctx:a}),!t&&o&2&&(t=!0,l.ref=a[1],xi(()=>t=!1)),e.$set(l)},i(a){n||(G(e.$$.fragment,a),n=!0)},o(a){Z(e.$$.fragment,a),n=!1},d(a){ye(e,a)}}}function TA(s){let e,t;return e=new s[10]({props:{position:[s[11]-xl/2,1.5,s[12]-yl/2],id:s[14],scale:[3,3],frameId:Math.floor(Math.random()*24)}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p:ue,i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function AA(s){let e,t;return e=new s[10]({props:{position:[s[11]-xl/2,1.5,s[12]-yl/2],id:s[14],animationName:s[4](),scale:[3,3]}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p:ue,i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function Kd(s){let e,t,n,i;const r=[AA,TA],a=[];function o(l,c){return l[14]<l[3].length/2?0:1}return e=o(s),t=a[e]=r[e](s),{c(){t.c(),n=Nn()},m(l,c){a[e].m(l,c),oe(l,n,c),i=!0},p(l,c){t.p(l,c)},i(l){i||(G(t),i=!0)},o(l){Z(t),i=!1},d(l){l&&ae(n),a[e].d(l)}}}function EA(s){let e,t,n=fr(s[3]),i=[];for(let a=0;a<n.length;a+=1)i[a]=Kd(jd(s,n,a));const r=a=>Z(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=Nn()},m(a,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,o);oe(a,e,o),t=!0},p(a,o){if(o&24){n=fr(a[3]);let l;for(l=0;l<n.length;l+=1){const c=jd(a,n,l);i[l]?(i[l].p(c,o),G(i[l],1)):(i[l]=Kd(c),i[l].c(),G(i[l],1),i[l].m(e.parentNode,e))}for(rn(),l=n.length;l<i.length;l+=1)r(l);an()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)G(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)Z(i[o]);t=!1},d(a){a&&ae(e),Nu(i,a)}}}function CA(s){return{c:ue,m:ue,p:ue,i:ue,o:ue,d:ue}}function RA(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!1,pending:CA,then:wA,catch:SA,value:9,blocks:[,,,]};return xr(s[2].spritesheet,n),{c(){e=Nn(),n.block.c()},m(i,r){oe(i,e,r),n.block.m(i,n.anchor=r),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(i,[r]){s=i,yr(n,s,r)},i(i){t||(G(n.block),t=!0)},o(i){for(let r=0;r<3;r+=1){const a=n.blocks[r];Z(a)}t=!1},d(i){i&&ae(e),n.block.d(i),n.token=null,n=null}}}const xl=600,yl=600,PA=11,IA=7,DA=3,LA=107;function NA(s,e,t){let{billboarding:n=!0}=e;const i=[{url:"https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/scott/asset.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL3Njb3R0L2Fzc2V0LnBuZyIsImlhdCI6MTcyNTAxNjg0MiwiZXhwIjoxNzU2NTUyODQyfQ.v6yXOremE7JKTmYokhNZVVkBWum5YAmHprYtG4VKiu8&t=2024-08-30T11%3A20%3A34.986Z",type:"rowColumn",width:8,height:3,animations:[{name:"green_0",frameRange:[0,0]},{name:"green_1",frameRange:[1,1]},{name:"green_2",frameRange:[2,2]},{name:"green_3",frameRange:[3,3]},{name:"green_4",frameRange:[4,4]},{name:"green_5",frameRange:[5,5]},{name:"green_6",frameRange:[6,6]},{name:"green_7",frameRange:[7,7]},{name:"green_8",frameRange:[12,12]},{name:"green_9",frameRange:[13,13]},{name:"green_10",frameRange:[14,14]},{name:"green_11",frameRange:[15,15]},{name:"red_0",frameRange:[8,8]},{name:"red_1",frameRange:[9,9]},{name:"red_2",frameRange:[10,10]},{name:"red_3",frameRange:[11,11]},{name:"red_4",frameRange:[20,20]},{name:"red_5",frameRange:[21,21]},{name:"red_6",frameRange:[22,22]},{name:"red_7",frameRange:[23,23]},{name:"dead_0",frameRange:[16,16]},{name:"dead_1",frameRange:[17,17]},{name:"dead_2",frameRange:[18,18]},{name:"dead_3",frameRange:[19,19]}]}],r=Ar.from(i),o=new bA(4,[xl,yl],void 0,Math.random).GeneratePoints().filter(u=>Math.sqrt((u[0]-xl/2)**2+(u[1]-yl/2)**2)<LA),l=()=>{const u=Math.random();return u>.97?`dead_${Math.floor(DA*Math.random())}`:u>.9?`red_${Math.floor(IA*Math.random())}`:`green_${Math.floor(PA*Math.random())}`};let c;function h(u){c=u,t(1,c)}return s.$$set=u=>{"billboarding"in u&&t(0,n=u.billboarding)},s.$$.update=()=>{if(s.$$.dirty&2&&c){for(let u=0;u<o.length;u++)c.flipX.setAt(u,Math.random()>.6);c.update()}},[n,c,r,o,l,h]}let UA=class extends mt{constructor(e){super(),pt(this,e,NA,RA,ft,{billboarding:0})}};const OA=100;function FA(s){const{updatePosition:e,count:t,sprite:n}=fc(),i=Array.from({length:t}),r=Array.from({length:t});for(let h=0;h<t;h++){const u=Pg(OA);i[h]=u.x,r[h]=u.y}const a=[];for(let h=0;h<t;h++)a.push({action:"Run",timer:.1,velocity:[0,1]});const o=new J(0,0),l=h=>{const u=["Forward","Backward","Left","Right"],f=a[h],d=Math.abs(f.velocity[0]*2)>Math.abs(f.velocity[1])?2:0,p=f.velocity[0]>0?1:0,_=f.velocity[1]>0?0:1,g=d?p:_,m=u.slice(0+d,2+d);return`${f.action}${m[g]}`},c=h=>{for(let u=0;u<a.length;u++){const f=a[u];if(f.timer-=h,i[u]+=f.velocity[0]*h,r[u]+=f.velocity[1]*h,f.timer<0){const d=.6+(f.action==="Idle"?.3:0);f.action=Math.random()<d?"Run":"Idle",f.timer=5+Math.random()*5,f.action==="Run"&&(o.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(3),f.velocity=o.toArray());const p=l(u);f.action==="Idle"&&(f.velocity=[0,0]),n.animation.setAt(u,p)}}};return wr(h=>{c(h);for(let u=0;u<t;u++)e(u,[i[u]||0,.5,r[u]||0])}),[]}let kA=class extends mt{constructor(e){super(),pt(this,e,FA,null,ft,{})}};function zA(s){return{c:ue,m:ue,p:ue,i:ue,o:ue,d:ue}}function BA(s){let e,t;return e=new Tr({props:{spritesheet:s[3],count:1e3,playmode:"FORWARD",fps:s[1],billboarding:s[0],castShadow:!0,$$slots:{default:[VA]},$$scope:{ctx:s}}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.fps=n[1]),i&1&&(r.billboarding=n[0]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function VA(s){let e,t;return e=new kA({}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function HA(s){return{c:ue,m:ue,p:ue,i:ue,o:ue,d:ue}}function GA(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!1,pending:HA,then:BA,catch:zA,value:3,blocks:[,,,]};return xr(s[2],n),{c(){e=Nn(),n.block.c()},m(i,r){oe(i,e,r),n.block.m(i,n.anchor=r),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(i,[r]){s=i,yr(n,s,r)},i(i){t||(G(n.block),t=!0)},o(i){for(let r=0;r<3;r+=1){const a=n.blocks[r];Z(a)}t=!1},d(i){i&&ae(e),n.block.d(i),n.token=null,n=null}}}function WA(s,e,t){let{billboarding:n=!0}=e,{fps:i}=e;const r=Ar.fromAseprite("https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/COMMON/player.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL0NPTU1PTi9wbGF5ZXIuanNvbiIsImlhdCI6MTcyNTAxNTgyNSwiZXhwIjoxNzU2NTUxODI1fQ.hr-9kMbwTDdRLVrvSkK61k1dvfR4nb3KteCWz4vCnNE&t=2024-08-30T11%3A03%3A38.506Z","https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/COMMON/player.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL0NPTU1PTi9wbGF5ZXIucG5nIiwiaWF0IjoxNzI1MDE1NzI5LCJleHAiOjE3NTY1NTE3Mjl9.ODPZ3oHVE0-j2dTY1aJrCpv4GUzs0xAeuPjFVawlh84&t=2024-08-30T11%3A02%3A02.336Z");return s.$$set=a=>{"billboarding"in a&&t(0,n=a.billboarding),"fps"in a&&t(1,i=a.fps)},[n,i,r]}let XA=class extends mt{constructor(e){super(),pt(this,e,WA,GA,ft,{billboarding:0,fps:1})}};function Qd(s){let e,t;return e=new xt.Mesh({props:{"position.y":-10,"scale.y":.5,$$slots:{default:[$A]},$$scope:{ctx:s}}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p(n,i){const r={};i&132&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function $A(s){let e,t,n,i;return e=new xt.SphereGeometry({props:{args:[110]}}),n=new xt.MeshBasicMaterial({props:{map:s[2],side:Wt}}),{c(){Me(e.$$.fragment),t=Oe(),Me(n.$$.fragment)},m(r,a){xe(e,r,a),oe(r,t,a),xe(n,r,a),i=!0},p(r,a){const o={};a&4&&(o.map=r[2]),n.$set(o)},i(r){i||(G(e.$$.fragment,r),G(n.$$.fragment,r),i=!0)},o(r){Z(e.$$.fragment,r),Z(n.$$.fragment,r),i=!1},d(r){r&&ae(t),ye(e,r),ye(n,r)}}}function ep(s){let e,t;return e=new xt.Mesh({props:{"rotation.x":-Oh*90,receiveShadow:!0,$$slots:{default:[YA]},$$scope:{ctx:s}}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p(n,i){const r={};i&136&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function YA(s){let e,t,n,i;return e=new xt.CircleGeometry({props:{args:[110]}}),n=new xt.MeshLambertMaterial({props:{map:s[3]}}),{c(){Me(e.$$.fragment),t=Oe(),Me(n.$$.fragment)},m(r,a){xe(e,r,a),oe(r,t,a),xe(n,r,a),i=!0},p(r,a){const o={};a&8&&(o.map=r[3]),n.$set(o)},i(r){i||(G(e.$$.fragment,r),G(n.$$.fragment,r),i=!0)},o(r){Z(e.$$.fragment,r),Z(n.$$.fragment,r),i=!1},d(r){r&&ae(t),ye(e,r),ye(n,r)}}}function qA(s){let e,t,n,i,r,a,o,l,c,h,u,f,d;const p=s[6].default,_=Pn(p,s,s[7],null);t=new XA({props:{billboarding:s[0],fps:s[1]}}),i=new UA({props:{billboarding:s[0]}});let g=s[2]&&Qd(s),m=s[3]&&ep(s);return l=new Nh({props:{elevation:13.35}}),h=new xt.AmbientLight({props:{intensity:1}}),f=new xt.DirectionalLight({props:{"shadow.mapSize":[2048,2048],"shadow.camera.far":128,"shadow.camera.near":.01,"shadow.camera.left":-20,"shadow.camera.right":20,"shadow.camera.top":20,"shadow.camera.bottom":-20,"shadow.bias":-1e-4,"position.x":0,"position.y":50,"position.z":30,intensity:3,castShadow:!0}}),{c(){_&&_.c(),e=Oe(),Me(t.$$.fragment),n=Oe(),Me(i.$$.fragment),r=Oe(),g&&g.c(),a=Oe(),m&&m.c(),o=Oe(),Me(l.$$.fragment),c=Oe(),Me(h.$$.fragment),u=Oe(),Me(f.$$.fragment)},m(v,x){_&&_.m(v,x),oe(v,e,x),xe(t,v,x),oe(v,n,x),xe(i,v,x),oe(v,r,x),g&&g.m(v,x),oe(v,a,x),m&&m.m(v,x),oe(v,o,x),xe(l,v,x),oe(v,c,x),xe(h,v,x),oe(v,u,x),xe(f,v,x),d=!0},p(v,[x]){_&&_.p&&(!d||x&128)&&Dn(_,p,v,v[7],d?In(p,v[7],x,null):Ln(v[7]),null);const y={};x&1&&(y.billboarding=v[0]),x&2&&(y.fps=v[1]),t.$set(y);const C={};x&1&&(C.billboarding=v[0]),i.$set(C),v[2]?g?(g.p(v,x),x&4&&G(g,1)):(g=Qd(v),g.c(),G(g,1),g.m(a.parentNode,a)):g&&(rn(),Z(g,1,1,()=>{g=null}),an()),v[3]?m?(m.p(v,x),x&8&&G(m,1)):(m=ep(v),m.c(),G(m,1),m.m(o.parentNode,o)):m&&(rn(),Z(m,1,1,()=>{m=null}),an())},i(v){d||(G(_,v),G(t.$$.fragment,v),G(i.$$.fragment,v),G(g),G(m),G(l.$$.fragment,v),G(h.$$.fragment,v),G(f.$$.fragment,v),d=!0)},o(v){Z(_,v),Z(t.$$.fragment,v),Z(i.$$.fragment,v),Z(g),Z(m),Z(l.$$.fragment,v),Z(h.$$.fragment,v),Z(f.$$.fragment,v),d=!1},d(v){v&&(ae(e),ae(n),ae(r),ae(a),ae(o),ae(c),ae(u)),_&&_.d(v),ye(t,v),ye(i,v),g&&g.d(v),m&&m.d(v),ye(l,v),ye(h,v),ye(f,v)}}}const ZA="https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/scott/pixel-skyll.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL3Njb3R0L3BpeGVsLXNreWxsLnBuZyIsImlhdCI6MTcyNTAxNzgzMCwiZXhwIjoxNzU2NTUzODMwfQ.i1jyO3Zf0T8NjvVhRmWVHvcszZLSH3685gKV97mO-4M&t=2024-08-30T11%3A37%3A03.698Z",JA="https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/scott/ground.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL3Njb3R0L2dyb3VuZC5wbmciLCJpYXQiOjE3MjUwMTY5OTgsImV4cCI6MTc1NjU1Mjk5OH0._hQssG6XLOr6A26Ui8TCt1RAswx8qhcCMommfIdDgwM&t=2024-08-30T11%3A23%3A11.221Zs";function jA(s,e,t){let n,i,{$$slots:r={},$$scope:a}=e,{billboarding:o=!0}=e,{fps:l}=e;const c=_r(JA,{transform:u=>(u.wrapS=u.wrapT=pn,u.repeat.set(100,100),u.minFilter=it,u.magFilter=it,u.needsUpdate=!0,u)});dn(s,c,u=>t(3,i=u));const h=_r(ZA,{transform:u=>(u.wrapS=u.wrapT=pn,u.repeat.set(10,2),u.minFilter=it,u.magFilter=it,u.needsUpdate=!0,u)});return dn(s,h,u=>t(2,n=u)),s.$$set=u=>{"billboarding"in u&&t(0,o=u.billboarding),"fps"in u&&t(1,l=u.fps),"$$scope"in u&&t(7,a=u.$$scope)},[o,l,n,i,c,h,r,a]}let KA=class extends mt{constructor(e){super(),pt(this,e,jA,qA,ft,{billboarding:0,fps:1})}},QA=class extends mt{constructor(e){super(),pt(this,e,null,null,ft,{})}};function eE(s){let e,t;return e=new Lh({}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function tE(s){let e,t,n,i;return e=new xt.PerspectiveCamera({props:{makeDefault:!0,"position.z":-80,"position.y":10,"position.x":10,$$slots:{default:[eE]},$$scope:{ctx:s}}}),n=new KA({props:{billboarding:s[0],fps:s[1]}}),{c(){Me(e.$$.fragment),t=Oe(),Me(n.$$.fragment)},m(r,a){xe(e,r,a),oe(r,t,a),xe(n,r,a),i=!0},p(r,a){const o={};a&16&&(o.$$scope={dirty:a,ctx:r}),e.$set(o);const l={};a&1&&(l.billboarding=r[0]),a&2&&(l.fps=r[1]),n.$set(l)},i(r){i||(G(e.$$.fragment,r),G(n.$$.fragment,r),i=!0)},o(r){Z(e.$$.fragment,r),Z(n.$$.fragment,r),i=!1},d(r){r&&ae(t),ye(e,r),ye(n,r)}}}function nE(s){let e,t,n,i,r,a,o;t=new Dh({props:{$$slots:{default:[tE]},$$scope:{ctx:s}}});function l(u){s[2](u)}function c(u){s[3](u)}let h={};return s[0]!==void 0&&(h.billboarding=s[0]),s[1]!==void 0&&(h.fps=s[1]),i=new QA({props:h}),En.push(()=>yi(i,"billboarding",l)),En.push(()=>yi(i,"fps",c)),{c(){e=qe("div"),Me(t.$$.fragment),n=Oe(),Me(i.$$.fragment),Ie(e,"class","svelte-oc0e9i")},m(u,f){oe(u,e,f),xe(t,e,null),It(e,n),xe(i,e,null),o=!0},p(u,[f]){const d={};f&19&&(d.$$scope={dirty:f,ctx:u}),t.$set(d);const p={};!r&&f&1&&(r=!0,p.billboarding=u[0],xi(()=>r=!1)),!a&&f&2&&(a=!0,p.fps=u[1],xi(()=>a=!1)),i.$set(p)},i(u){o||(G(t.$$.fragment,u),G(i.$$.fragment,u),o=!0)},o(u){Z(t.$$.fragment,u),Z(i.$$.fragment,u),o=!1},d(u){u&&ae(e),ye(t),ye(i)}}}function iE(s,e,t){let n=!0,i=1;function r(o){n=o,t(0,n)}function a(o){i=o,t(1,i)}return[n,i,r,a]}class sE extends mt{constructor(e){super(),pt(this,e,iE,nE,ft,{})}}class rE{constructor(e,t,n=30){this.random=Math.random,this.radius=e,this.cellSize=e/Math.SQRT2,this.maxCandidates=n,this.width=t[0],this.height=t[1],this.gridHeight=Math.ceil(this.height/this.cellSize),this.gridWidth=Math.ceil(this.width/this.cellSize),this.grid=new Array(this.gridHeight);for(let i=0;i<this.gridHeight;i++)this.grid[i]=[...new Array(this.gridWidth)].map(r=>0);this.points=[],this.spawnPoints=[],this.spawnPoints.push([this.width/2,this.height/2])}GeneratePoints(){for(;this.spawnPoints.length>0;){const e=Math.floor(this.random()*this.spawnPoints.length),t=this.spawnPoints[e];let n=!1;for(let i=0;i<this.maxCandidates;i++){const r=this.random()*Math.PI*2,a=[Math.sin(r),Math.cos(r)],o=Math.floor(this.random()*(this.radius+1))+this.radius,l=t.map((c,h)=>c+a[h]*o);if(this.IsValid(l)){this.points.push(l),this.spawnPoints.push(l);const c=Math.ceil(l[0]/this.cellSize)-1,h=Math.ceil(l[1]/this.cellSize)-1;this.grid[h][c]=this.points.length,n=!0;break}}n||this.spawnPoints.splice(e,1)}return this.points}IsValid(e){const t=e[0],n=e[1];if(t>=0&&t<this.width&&n>=0&&n<this.height){const i=Math.ceil(t/this.cellSize),r=Math.ceil(n/this.cellSize),a=Math.max(0,i-2),o=Math.min(i+2,this.gridWidth-1),l=Math.max(0,r-2),c=Math.min(r+2,this.gridHeight-1);for(let h=a;h<=o;h++)for(let u=l;u<=c;u++){const f=this.grid[u][h];if(f!=0){const d=e.map((_,g)=>_-this.points[f-1][g]);if(Math.pow(d[0],2)+Math.pow(d[1],2)<Math.pow(this.radius,2))return!1}}return!0}return!1}}class aE extends rE{constructor(e,t,n=30,i){super(e,t,n),this.random=i,this.spawnPoints=[];const r=Math.floor(this.random()*this.width),a=Math.floor(this.random()*this.height);this.spawnPoints.push([r,a])}}const Ig=(s=100)=>{const e=(Math.random()-.5)*s*2,t=(Math.random()-.5)*s*2;return Math.sqrt(e**2+t**2)>s?Ig():{x:e,y:t}};function tp(s,e,t){const n=s.slice();return n[11]=e[t][0],n[12]=e[t][1],n[14]=t,n}function oE(s){return{c:ue,m:ue,p:ue,i:ue,o:ue,d:ue}}function lE(s){let e,t,n;function i(a){s[5](a)}let r={count:s[3].length,autoUpdate:!1,playmode:"PAUSE",billboarding:s[0],spritesheet:s[9],castShadow:!0,$$slots:{default:[hE,({Instance:a})=>({10:a}),({Instance:a})=>a?1024:0]},$$scope:{ctx:s}};return s[1]!==void 0&&(r.ref=s[1]),e=new Tr({props:r}),En.push(()=>yi(e,"ref",i)),{c(){Me(e.$$.fragment)},m(a,o){xe(e,a,o),n=!0},p(a,o){const l={};o&1&&(l.billboarding=a[0]),o&32768&&(l.$$scope={dirty:o,ctx:a}),!t&&o&2&&(t=!0,l.ref=a[1],xi(()=>t=!1)),e.$set(l)},i(a){n||(G(e.$$.fragment,a),n=!0)},o(a){Z(e.$$.fragment,a),n=!1},d(a){ye(e,a)}}}function cE(s){let e,t;return e=new s[10]({props:{position:[s[11]-Ml/2,1.5,s[12]-bl/2],id:s[14],scale:[3,3],frameId:Math.floor(Math.random()*24)}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p:ue,i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function uE(s){let e,t;return e=new s[10]({props:{position:[s[11]-Ml/2,1.5,s[12]-bl/2],id:s[14],animationName:s[4](),scale:[3,3]}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p:ue,i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function np(s){let e,t,n,i;const r=[uE,cE],a=[];function o(l,c){return l[14]<l[3].length/2?0:1}return e=o(s),t=a[e]=r[e](s),{c(){t.c(),n=Nn()},m(l,c){a[e].m(l,c),oe(l,n,c),i=!0},p(l,c){t.p(l,c)},i(l){i||(G(t),i=!0)},o(l){Z(t),i=!1},d(l){l&&ae(n),a[e].d(l)}}}function hE(s){let e,t,n=fr(s[3]),i=[];for(let a=0;a<n.length;a+=1)i[a]=np(tp(s,n,a));const r=a=>Z(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=Nn()},m(a,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,o);oe(a,e,o),t=!0},p(a,o){if(o&24){n=fr(a[3]);let l;for(l=0;l<n.length;l+=1){const c=tp(a,n,l);i[l]?(i[l].p(c,o),G(i[l],1)):(i[l]=np(c),i[l].c(),G(i[l],1),i[l].m(e.parentNode,e))}for(rn(),l=n.length;l<i.length;l+=1)r(l);an()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)G(i[o]);t=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)Z(i[o]);t=!1},d(a){a&&ae(e),Nu(i,a)}}}function fE(s){return{c:ue,m:ue,p:ue,i:ue,o:ue,d:ue}}function dE(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!1,pending:fE,then:lE,catch:oE,value:9,blocks:[,,,]};return xr(s[2].spritesheet,n),{c(){e=Nn(),n.block.c()},m(i,r){oe(i,e,r),n.block.m(i,n.anchor=r),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(i,[r]){s=i,yr(n,s,r)},i(i){t||(G(n.block),t=!0)},o(i){for(let r=0;r<3;r+=1){const a=n.blocks[r];Z(a)}t=!1},d(i){i&&ae(e),n.block.d(i),n.token=null,n=null}}}const Ml=600,bl=600,pE=11,mE=7,gE=3,_E=107;function vE(s,e,t){let{billboarding:n=!0}=e;const i=[{url:"https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/tyalor/trees-pixelart.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL3R5YWxvci90cmVlcy1waXhlbGFydC5wbmciLCJpYXQiOjE3MjUwMTQ3NTEsImV4cCI6MTc1NjU1MDc1MX0._IwwcbAieRexev8rui_7AWgjyeK7-VZVNS-Qyg7gj50&t=2024-08-30T10%3A45%3A44.247Z",type:"rowColumn",width:8,height:3,animations:[{name:"green_0",frameRange:[0,0]},{name:"green_1",frameRange:[1,1]},{name:"green_2",frameRange:[2,2]},{name:"green_3",frameRange:[3,3]},{name:"green_4",frameRange:[4,4]},{name:"green_5",frameRange:[5,5]},{name:"green_6",frameRange:[6,6]},{name:"green_7",frameRange:[7,7]},{name:"green_8",frameRange:[12,12]},{name:"green_9",frameRange:[13,13]},{name:"green_10",frameRange:[14,14]},{name:"green_11",frameRange:[15,15]},{name:"red_0",frameRange:[8,8]},{name:"red_1",frameRange:[9,9]},{name:"red_2",frameRange:[10,10]},{name:"red_3",frameRange:[11,11]},{name:"red_4",frameRange:[20,20]},{name:"red_5",frameRange:[21,21]},{name:"red_6",frameRange:[22,22]},{name:"red_7",frameRange:[23,23]},{name:"dead_0",frameRange:[16,16]},{name:"dead_1",frameRange:[17,17]},{name:"dead_2",frameRange:[18,18]},{name:"dead_3",frameRange:[19,19]}]}],r=Ar.from(i),o=new aE(4,[Ml,bl],void 0,Math.random).GeneratePoints().filter(u=>Math.sqrt((u[0]-Ml/2)**2+(u[1]-bl/2)**2)<_E),l=()=>{const u=Math.random();return u>.97?`dead_${Math.floor(gE*Math.random())}`:u>.9?`red_${Math.floor(mE*Math.random())}`:`green_${Math.floor(pE*Math.random())}`};let c;function h(u){c=u,t(1,c)}return s.$$set=u=>{"billboarding"in u&&t(0,n=u.billboarding)},s.$$.update=()=>{if(s.$$.dirty&2&&c){for(let u=0;u<o.length;u++)c.flipX.setAt(u,Math.random()>.6);c.update()}},[n,c,r,o,l,h]}class xE extends mt{constructor(e){super(),pt(this,e,vE,dE,ft,{billboarding:0})}}const yE=100;function ME(s){const{updatePosition:e,count:t,sprite:n}=fc(),i=Array.from({length:t}),r=Array.from({length:t});for(let h=0;h<t;h++){const u=Ig(yE);i[h]=u.x,r[h]=u.y}const a=[];for(let h=0;h<t;h++)a.push({action:"Run",timer:.1,velocity:[0,1]});const o=new J(0,0),l=h=>{const u=["Forward","Backward","Left","Right"],f=a[h],d=Math.abs(f.velocity[0]*2)>Math.abs(f.velocity[1])?2:0,p=f.velocity[0]>0?1:0,_=f.velocity[1]>0?0:1,g=d?p:_,m=u.slice(0+d,2+d);return`${f.action}${m[g]}`},c=h=>{for(let u=0;u<a.length;u++){const f=a[u];if(f.timer-=h,i[u]+=f.velocity[0]*h,r[u]+=f.velocity[1]*h,f.timer<0){const d=.6+(f.action==="Idle"?.3:0);f.action=Math.random()<d?"Run":"Idle",f.timer=5+Math.random()*5,f.action==="Run"&&(o.set(Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(3),f.velocity=o.toArray());const p=l(u);f.action==="Idle"&&(f.velocity=[0,0]),n.animation.setAt(u,p)}}};return wr(h=>{c(h);for(let u=0;u<t;u++)e(u,[i[u]||0,.5,r[u]||0])}),[]}class bE extends mt{constructor(e){super(),pt(this,e,ME,null,ft,{})}}function SE(s){return{c:ue,m:ue,p:ue,i:ue,o:ue,d:ue}}function wE(s){let e,t;return e=new Tr({props:{spritesheet:s[3],count:1e4,playmode:"FORWARD",fps:s[1],billboarding:s[0],castShadow:!0,$$slots:{default:[TE]},$$scope:{ctx:s}}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p(n,i){const r={};i&2&&(r.fps=n[1]),i&1&&(r.billboarding=n[0]),i&16&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function TE(s){let e,t;return e=new bE({}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function AE(s){return{c:ue,m:ue,p:ue,i:ue,o:ue,d:ue}}function EE(s){let e,t,n={ctx:s,current:null,token:null,hasCatch:!1,pending:AE,then:wE,catch:SE,value:3,blocks:[,,,]};return xr(s[2],n),{c(){e=Nn(),n.block.c()},m(i,r){oe(i,e,r),n.block.m(i,n.anchor=r),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(i,[r]){s=i,yr(n,s,r)},i(i){t||(G(n.block),t=!0)},o(i){for(let r=0;r<3;r+=1){const a=n.blocks[r];Z(a)}t=!1},d(i){i&&ae(e),n.block.d(i),n.token=null,n=null}}}function CE(s,e,t){let{billboarding:n=!0}=e,{fps:i}=e;const r=Ar.fromAseprite("https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/COMMON/player.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL0NPTU1PTi9wbGF5ZXIuanNvbiIsImlhdCI6MTcyNTAxNTgyNSwiZXhwIjoxNzU2NTUxODI1fQ.hr-9kMbwTDdRLVrvSkK61k1dvfR4nb3KteCWz4vCnNE&t=2024-08-30T11%3A03%3A38.506Z","https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/COMMON/player.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL0NPTU1PTi9wbGF5ZXIucG5nIiwiaWF0IjoxNzI1MDE1NzI5LCJleHAiOjE3NTY1NTE3Mjl9.ODPZ3oHVE0-j2dTY1aJrCpv4GUzs0xAeuPjFVawlh84&t=2024-08-30T11%3A02%3A02.336Z");return s.$$set=a=>{"billboarding"in a&&t(0,n=a.billboarding),"fps"in a&&t(1,i=a.fps)},[n,i,r]}class RE extends mt{constructor(e){super(),pt(this,e,CE,EE,ft,{billboarding:0,fps:1})}}function ip(s){let e,t;return e=new xt.Mesh({props:{"position.y":-10,"scale.y":.5,$$slots:{default:[PE]},$$scope:{ctx:s}}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p(n,i){const r={};i&132&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function PE(s){let e,t,n,i;return e=new xt.SphereGeometry({props:{args:[110]}}),n=new xt.MeshBasicMaterial({props:{map:s[2],side:Wt}}),{c(){Me(e.$$.fragment),t=Oe(),Me(n.$$.fragment)},m(r,a){xe(e,r,a),oe(r,t,a),xe(n,r,a),i=!0},p(r,a){const o={};a&4&&(o.map=r[2]),n.$set(o)},i(r){i||(G(e.$$.fragment,r),G(n.$$.fragment,r),i=!0)},o(r){Z(e.$$.fragment,r),Z(n.$$.fragment,r),i=!1},d(r){r&&ae(t),ye(e,r),ye(n,r)}}}function sp(s){let e,t;return e=new xt.Mesh({props:{"rotation.x":-Oh*90,receiveShadow:!0,$$slots:{default:[IE]},$$scope:{ctx:s}}}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},p(n,i){const r={};i&136&&(r.$$scope={dirty:i,ctx:n}),e.$set(r)},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function IE(s){let e,t,n,i;return e=new xt.CircleGeometry({props:{args:[110]}}),n=new xt.MeshLambertMaterial({props:{map:s[3]}}),{c(){Me(e.$$.fragment),t=Oe(),Me(n.$$.fragment)},m(r,a){xe(e,r,a),oe(r,t,a),xe(n,r,a),i=!0},p(r,a){const o={};a&8&&(o.map=r[3]),n.$set(o)},i(r){i||(G(e.$$.fragment,r),G(n.$$.fragment,r),i=!0)},o(r){Z(e.$$.fragment,r),Z(n.$$.fragment,r),i=!1},d(r){r&&ae(t),ye(e,r),ye(n,r)}}}function DE(s){let e,t,n,i,r,a,o,l,c,h,u,f,d;const p=s[6].default,_=Pn(p,s,s[7],null);t=new RE({props:{billboarding:s[0],fps:s[1]}}),i=new xE({props:{billboarding:s[0]}});let g=s[2]&&ip(s),m=s[3]&&sp(s);return l=new Nh({props:{elevation:13.35}}),h=new xt.AmbientLight({props:{intensity:1}}),f=new xt.DirectionalLight({props:{"shadow.mapSize":[2048,2048],"shadow.camera.far":128,"shadow.camera.near":.01,"shadow.camera.left":-20,"shadow.camera.right":20,"shadow.camera.top":20,"shadow.camera.bottom":-20,"shadow.bias":-1e-4,"position.x":0,"position.y":50,"position.z":30,intensity:3,castShadow:!0}}),{c(){_&&_.c(),e=Oe(),Me(t.$$.fragment),n=Oe(),Me(i.$$.fragment),r=Oe(),g&&g.c(),a=Oe(),m&&m.c(),o=Oe(),Me(l.$$.fragment),c=Oe(),Me(h.$$.fragment),u=Oe(),Me(f.$$.fragment)},m(v,x){_&&_.m(v,x),oe(v,e,x),xe(t,v,x),oe(v,n,x),xe(i,v,x),oe(v,r,x),g&&g.m(v,x),oe(v,a,x),m&&m.m(v,x),oe(v,o,x),xe(l,v,x),oe(v,c,x),xe(h,v,x),oe(v,u,x),xe(f,v,x),d=!0},p(v,[x]){_&&_.p&&(!d||x&128)&&Dn(_,p,v,v[7],d?In(p,v[7],x,null):Ln(v[7]),null);const y={};x&1&&(y.billboarding=v[0]),x&2&&(y.fps=v[1]),t.$set(y);const C={};x&1&&(C.billboarding=v[0]),i.$set(C),v[2]?g?(g.p(v,x),x&4&&G(g,1)):(g=ip(v),g.c(),G(g,1),g.m(a.parentNode,a)):g&&(rn(),Z(g,1,1,()=>{g=null}),an()),v[3]?m?(m.p(v,x),x&8&&G(m,1)):(m=sp(v),m.c(),G(m,1),m.m(o.parentNode,o)):m&&(rn(),Z(m,1,1,()=>{m=null}),an())},i(v){d||(G(_,v),G(t.$$.fragment,v),G(i.$$.fragment,v),G(g),G(m),G(l.$$.fragment,v),G(h.$$.fragment,v),G(f.$$.fragment,v),d=!0)},o(v){Z(_,v),Z(t.$$.fragment,v),Z(i.$$.fragment,v),Z(g),Z(m),Z(l.$$.fragment,v),Z(h.$$.fragment,v),Z(f.$$.fragment,v),d=!1},d(v){v&&(ae(e),ae(n),ae(r),ae(a),ae(o),ae(c),ae(u)),_&&_.d(v),ye(t,v),ye(i,v),g&&g.d(v),m&&m.d(v),ye(l,v),ye(h,v),ye(f,v)}}}const LE="https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/tyalor/pixel-sky.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL3R5YWxvci9waXhlbC1za3kucG5nIiwiaWF0IjoxNzI1MDE2MTIxLCJleHAiOjE3NTY1NTIxMjF9.nD2TSaPHvqBDN1I5ljeWIhXaGgtlP21pBJolacXORzk&t=2024-08-30T11%3A08%3A33.781Z",NE="https://kljuyenllyvqfgpjnfrz.supabase.co/storage/v1/object/sign/static%20assets/tyalor/grass.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzdGF0aWMgYXNzZXRzL3R5YWxvci9ncmFzcy5wbmciLCJpYXQiOjE3MjUwMTQ1NTUsImV4cCI6MTc1NjU1MDU1NX0.Sx49NC5hEN7S21vMweGug7wqAtCJTTybJZzJyq5Jy_0&t=2024-08-30T10%3A42%3A28.408Z";function UE(s,e,t){let n,i,{$$slots:r={},$$scope:a}=e,{billboarding:o=!0}=e,{fps:l}=e;const c=_r(NE,{transform:u=>(u.wrapS=u.wrapT=pn,u.repeat.set(100,100),u.minFilter=it,u.magFilter=it,u.needsUpdate=!0,u)});dn(s,c,u=>t(3,i=u));const h=_r(LE,{transform:u=>(u.wrapS=u.wrapT=pn,u.repeat.set(10,2),u.minFilter=it,u.magFilter=it,u.needsUpdate=!0,u)});return dn(s,h,u=>t(2,n=u)),s.$$set=u=>{"billboarding"in u&&t(0,o=u.billboarding),"fps"in u&&t(1,l=u.fps),"$$scope"in u&&t(7,a=u.$$scope)},[o,l,n,i,c,h,r,a]}class OE extends mt{constructor(e){super(),pt(this,e,UE,DE,ft,{billboarding:0,fps:1})}}class FE extends mt{constructor(e){super(),pt(this,e,null,null,ft,{})}}function kE(s){let e,t;return e=new Lh({}),{c(){Me(e.$$.fragment)},m(n,i){xe(e,n,i),t=!0},i(n){t||(G(e.$$.fragment,n),t=!0)},o(n){Z(e.$$.fragment,n),t=!1},d(n){ye(e,n)}}}function zE(s){let e,t,n,i;return e=new xt.PerspectiveCamera({props:{makeDefault:!0,"position.z":-80,"position.y":10,"position.x":10,$$slots:{default:[kE]},$$scope:{ctx:s}}}),n=new OE({props:{billboarding:s[0],fps:s[1]}}),{c(){Me(e.$$.fragment),t=Oe(),Me(n.$$.fragment)},m(r,a){xe(e,r,a),oe(r,t,a),xe(n,r,a),i=!0},p(r,a){const o={};a&16&&(o.$$scope={dirty:a,ctx:r}),e.$set(o);const l={};a&1&&(l.billboarding=r[0]),a&2&&(l.fps=r[1]),n.$set(l)},i(r){i||(G(e.$$.fragment,r),G(n.$$.fragment,r),i=!0)},o(r){Z(e.$$.fragment,r),Z(n.$$.fragment,r),i=!1},d(r){r&&ae(t),ye(e,r),ye(n,r)}}}function BE(s){let e,t,n,i,r,a,o,l;t=new Dh({props:{$$slots:{default:[zE]},$$scope:{ctx:s}}});function c(f){s[2](f)}function h(f){s[3](f)}let u={};return s[0]!==void 0&&(u.billboarding=s[0]),s[1]!==void 0&&(u.fps=s[1]),i=new FE({props:u}),En.push(()=>yi(i,"billboarding",c)),En.push(()=>yi(i,"fps",h)),{c(){e=qe("div"),Me(t.$$.fragment),n=Oe(),Me(i.$$.fragment),o=Uu(`\r
\r
\r
s`),Ie(e,"class","svelte-oc0e9i")},m(f,d){oe(f,e,d),xe(t,e,null),It(e,n),xe(i,e,null),oe(f,o,d),l=!0},p(f,[d]){const p={};d&19&&(p.$$scope={dirty:d,ctx:f}),t.$set(p);const _={};!r&&d&1&&(r=!0,_.billboarding=f[0],xi(()=>r=!1)),!a&&d&2&&(a=!0,_.fps=f[1],xi(()=>a=!1)),i.$set(_)},i(f){l||(G(t.$$.fragment,f),G(i.$$.fragment,f),l=!0)},o(f){Z(t.$$.fragment,f),Z(i.$$.fragment,f),l=!1},d(f){f&&(ae(e),ae(o)),ye(t),ye(i)}}}function VE(s,e,t){let n=!0,i=1;function r(o){n=o,t(0,n)}function a(o){i=o,t(1,i)}return[n,i,r,a]}class HE extends mt{constructor(e){super(),pt(this,e,VE,BE,ft,{})}}function rp(s){let e;const t=s[2].default,n=Pn(t,s,s[1],null);return{c(){n&&n.c()},m(i,r){n&&n.m(i,r),e=!0},p(i,r){n&&n.p&&(!e||r&2)&&Dn(n,t,i,i[1],e?In(t,i[1],r,null):Ln(i[1]),null)},i(i){e||(G(n,i),e=!0)},o(i){Z(n,i),e=!1},d(i){n&&n.d(i)}}}function GE(s){let e,t,n=s[0]&&rp(s);return{c(){e=qe("div"),n&&n.c(),Ie(e,"id","lazy-load-element")},m(i,r){oe(i,e,r),n&&n.m(e,null),t=!0},p(i,[r]){i[0]?n?(n.p(i,r),r&1&&G(n,1)):(n=rp(i),n.c(),G(n,1),n.m(e,null)):n&&(rn(),Z(n,1,1,()=>{n=null}),an())},i(i){t||(G(n),t=!0)},o(i){Z(n),t=!1},d(i){i&&ae(e),n&&n.d()}}}function WE(s,e,t){let{$$slots:n={},$$scope:i}=e,r=!1,a;function o(l){l.forEach(c=>{c.isIntersecting&&(t(0,r=!0),a.unobserve(c.target))})}return Ma(()=>{a=new IntersectionObserver(o,{threshold:.1});const l=document.getElementById("lazy-load-element");l&&a.observe(l)}),vn(()=>{a&&a.disconnect()}),s.$$set=l=>{"$$scope"in l&&t(1,i=l.$$scope)},[r,i,n]}class XE extends mt{constructor(e){super(),pt(this,e,WE,GE,ft,{})}}class $E extends mt{constructor(e){super(),pt(this,e,null,null,ft,{})}}function YE(s){let e;return{c(){e=qe("div"),e.innerHTML='<b class="svelte-10r3qge">mic<span class="svelte-10r3qge">hael</span>jac<span class="svelte-10r3qge">ks</span>on</b>',Ie(e,"class","logo svelte-10r3qge")},m(t,n){oe(t,e,n)},p:ue,i:ue,o:ue,d(t){t&&ae(e)}}}class qE extends mt{constructor(e){super(),pt(this,e,null,YE,ft,{})}}function ap(s){let e,t,n,i;return e=new $E({}),{c(){Me(e.$$.fragment),t=Oe(),n=qe("div"),n.innerHTML='<span class="loading loading-bars loading-lg svelte-182nkvl"></span> <br class="svelte-182nkvl"/><button class="btn btn-outline btn-warning svelte-182nkvl">english</button> <button class="btn btn-outline btn-warning svelte-182nkvl">spanish</button>',Ie(n,"class","loading-screen svelte-182nkvl")},m(r,a){xe(e,r,a),oe(r,t,a),oe(r,n,a),i=!0},i(r){i||(G(e.$$.fragment,r),i=!0)},o(r){Z(e.$$.fragment,r),i=!1},d(r){r&&(ae(t),ae(n)),ye(e,r)}}}function op(s){let e,t,n,i,r,a;return n=new XE({props:{$$slots:{default:[ZE]},$$scope:{ctx:s}}}),{c(){e=qe("div"),t=qe("div"),Me(n.$$.fragment),i=Oe(),r=qe("fotter"),Ie(t,"class","screen svelte-182nkvl"),Ie(e,"class","main svelte-182nkvl"),Ie(r,"class","svelte-182nkvl")},m(o,l){oe(o,e,l),It(e,t),xe(n,t,null),oe(o,i,l),oe(o,r,l),a=!0},i(o){a||(G(n.$$.fragment,o),a=!0)},o(o){Z(n.$$.fragment,o),a=!1},d(o){o&&(ae(e),ae(i),ae(r)),ye(n)}}}function ZE(s){let e,t,n,i,r,a,o,l,c,h,u,f,d,p,_,g,m,v,x,y,C,A,w,D,T,M,I,k,O,Y,j,W,F,$,ge,be,we,Ze,st,Q,le,Ee,re,ze,Xe,Ve,rt,P,he,se,_e,ee,Fe,ve,Te,L,S,B,ie,te,ne,De,pe;return d=new qE({}),g=new yA({}),ze=new sE({}),De=new HE({}),{c(){e=qe("div"),e.innerHTML='<div class="w-12 rounded-full svelte-182nkvl"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO_TDJvhFl1hMJhZ3u2oiUnurG8fSfhlFaQF82IysSsLCTwEardnrpfT_FyVhRnXY4MXk" class="svelte-182nkvl"/></div> ',t=qe("h1"),t.textContent="Michael Jackson",n=qe("h1"),n.textContent="1000 /3.3K Members",i=qe("progress"),r=Oe(),a=qe("div"),a.innerHTML='<input type="checkbox" class="checkbox svelte-182nkvl" id="Give-It-An-Id"/> <div class="svg-container svelte-182nkvl"><svg viewBox="0 0 24 24" class="svg-outline svelte-182nkvl" xmlns="http://www.w3.org/2000/svg"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" class="svelte-182nkvl"></path></svg> <svg viewBox="0 0 24 24" class="svg-filled svelte-182nkvl" xmlns="http://www.w3.org/2000/svg"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" class="svelte-182nkvl"></path></svg> <svg class="svg-celebrate svelte-182nkvl" width="100" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="10,10 20,20" class="svelte-182nkvl"></polygon><polygon points="10,50 20,50" class="svelte-182nkvl"></polygon><polygon points="20,80 30,70" class="svelte-182nkvl"></polygon><polygon points="90,10 80,20" class="svelte-182nkvl"></polygon><polygon points="90,50 80,50" class="svelte-182nkvl"></polygon><polygon points="80,80 70,70" class="svelte-182nkvl"></polygon></svg></div> <p class="svelte-182nkvl">3.5k</p>',o=Oe(),l=qe("br"),c=Oe(),h=qe("br"),u=qe("br"),f=Oe(),Me(d.$$.fragment),p=Oe(),_=qe("div"),Me(g.$$.fragment),m=Oe(),v=qe("br"),x=qe("br"),y=Oe(),C=qe("blockquote"),C.innerHTML='<div style="padding:16px;" class="svelte-182nkvl"><a href="https://www.instagram.com/reel/C-ssqjsSYKb/?utm_source=ig_embed&amp;utm_campaign=loading" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank" class="svelte-182nkvl"><div style="display: flex; flex-direction: row; align-items: center;" class="svelte-182nkvl"><div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;" class="svelte-182nkvl"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;" class="svelte-182nkvl"><div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;" class="svelte-182nkvl"></div> <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;" class="svelte-182nkvl"></div></div></div><div style="padding: 19% 0;" class="svelte-182nkvl"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;" class="svelte-182nkvl"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" class="svelte-182nkvl"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" class="svelte-182nkvl"><g transform="translate(-511.000000, -20.000000)" fill="#000000" class="svelte-182nkvl"><g class="svelte-182nkvl"><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631" class="svelte-182nkvl"></path></g></g></g></svg></div><div style="padding-top: 8px;" class="svelte-182nkvl"><div style="color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;" class="svelte-182nkvl">View this post on Instagram</div></div><div style="padding: 12.5% 0;" class="svelte-182nkvl"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;" class="svelte-182nkvl"><div class="svelte-182nkvl"><div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);" class="svelte-182nkvl"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;" class="svelte-182nkvl"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);" class="svelte-182nkvl"></div></div><div style="margin-left: 8px;" class="svelte-182nkvl"><div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;" class="svelte-182nkvl"></div> <div style="width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)" class="svelte-182nkvl"></div></div><div style="margin-left: auto;" class="svelte-182nkvl"><div style="width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);" class="svelte-182nkvl"></div> <div style="background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);" class="svelte-182nkvl"></div> <div style="width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);" class="svelte-182nkvl"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;" class="svelte-182nkvl"><div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;" class="svelte-182nkvl"></div> <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;" class="svelte-182nkvl"></div></div></a><p style="color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;" class="svelte-182nkvl"><a href="https://www.instagram.com/reel/C-ssqjsSYKb/?utm_source=ig_embed&amp;utm_campaign=loading" style="color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank" class="svelte-182nkvl">A post shared by +Aura (@plus_aura_moments)</a></p></div>',A=Oe(),w=qe("script"),w.innerHTML="",T=Oe(),M=qe("iframe"),k=Oe(),O=qe("div"),O.innerHTML='<div class="w-12 rounded-full svelte-182nkvl"><img src="https://www.dondeir.com/wp-content/uploads/2024/07/travis-scott-mexico-concierto.jpg" class="svelte-182nkvl"/></div> ',Y=qe("h1"),Y.textContent="Scott",j=qe("h1"),j.textContent="1000 /3.3K Members",W=qe("progress"),F=Oe(),$=qe("div"),$.innerHTML='<input type="checkbox" class="checkbox svelte-182nkvl" id="Give-It-An-Id"/> <div class="svg-container svelte-182nkvl"><svg viewBox="0 0 24 24" class="svg-outline svelte-182nkvl" xmlns="http://www.w3.org/2000/svg"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" class="svelte-182nkvl"></path></svg> <svg viewBox="0 0 24 24" class="svg-filled svelte-182nkvl" xmlns="http://www.w3.org/2000/svg"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" class="svelte-182nkvl"></path></svg> <svg class="svg-celebrate svelte-182nkvl" width="100" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="10,10 20,20" class="svelte-182nkvl"></polygon><polygon points="10,50 20,50" class="svelte-182nkvl"></polygon><polygon points="20,80 30,70" class="svelte-182nkvl"></polygon><polygon points="90,10 80,20" class="svelte-182nkvl"></polygon><polygon points="90,50 80,50" class="svelte-182nkvl"></polygon><polygon points="80,80 70,70" class="svelte-182nkvl"></polygon></svg></div> <p class="svelte-182nkvl">3.5k</p>',ge=Oe(),be=qe("br"),we=Oe(),Ze=qe("br"),st=qe("br"),Q=Oe(),le=qe("div"),le.innerHTML='<h1 class="fire svelte-182nkvl">Travis scott</h1>',Ee=Oe(),re=qe("div"),Me(ze.$$.fragment),Xe=qe("br"),Ve=qe("br"),rt=Oe(),P=qe("div"),P.innerHTML='<div class="w-12 rounded-full svelte-182nkvl"><img src="https://people.com/thmb/hGBx2o9so78bb7NZQ_WWPGhBU8c=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1045x501:1047x503)/Taylor-Swift-Reputation-081824-01-9c2cc19b358f42fbb8ae582b8e12c027.jpg" class="svelte-182nkvl"/></div> ',he=qe("h1"),he.textContent="SWIFT",se=qe("h1"),se.textContent="1000 /3.3K Members",_e=qe("progress"),ee=Oe(),Fe=qe("div"),Fe.innerHTML='<input type="checkbox" class="checkbox svelte-182nkvl" id="Give-It-An-Id"/> <div class="svg-container svelte-182nkvl"><svg viewBox="0 0 24 24" class="svg-outline svelte-182nkvl" xmlns="http://www.w3.org/2000/svg"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z" class="svelte-182nkvl"></path></svg> <svg viewBox="0 0 24 24" class="svg-filled svelte-182nkvl" xmlns="http://www.w3.org/2000/svg"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z" class="svelte-182nkvl"></path></svg> <svg class="svg-celebrate svelte-182nkvl" width="100" height="100" xmlns="http://www.w3.org/2000/svg"><polygon points="10,10 20,20" class="svelte-182nkvl"></polygon><polygon points="10,50 20,50" class="svelte-182nkvl"></polygon><polygon points="20,80 30,70" class="svelte-182nkvl"></polygon><polygon points="90,10 80,20" class="svelte-182nkvl"></polygon><polygon points="90,50 80,50" class="svelte-182nkvl"></polygon><polygon points="80,80 70,70" class="svelte-182nkvl"></polygon></svg></div> <p class="svelte-182nkvl">3.5k</p>',ve=Oe(),Te=qe("br"),L=Oe(),S=qe("br"),B=qe("br"),ie=Oe(),te=qe("div"),te.innerHTML='<p class="svelte-182nkvl"><a href="http://tuts.icomp.ir" class="svelte-182nkvl">TYLOR SWIFT</a></p>',ne=Oe(),Me(De.$$.fragment),Ie(e,"class","avatar svelte-182nkvl"),Ie(t,"class","namess svelte-182nkvl"),Ie(n,"class","info svelte-182nkvl"),Ie(i,"class","progress progress-success w-56 svelte-182nkvl"),i.value="10",Ie(i,"max","100"),Ie(a,"class","heart-container svelte-182nkvl"),Ie(a,"title","Like"),Ie(l,"class","svelte-182nkvl"),Ie(h,"class","svelte-182nkvl"),Ie(u,"class","svelte-182nkvl"),Ie(_,"class","aps svelte-182nkvl"),Ie(v,"class","svelte-182nkvl"),Ie(x,"class","svelte-182nkvl"),Ie(C,"class","instagram-media svelte-182nkvl"),Ie(C,"data-instgrm-captioned",""),Ie(C,"data-instgrm-permalink","https://www.instagram.com/reel/C-ssqjsSYKb/?utm_source=ig_embed&utm_campaign=loading"),Ie(C,"data-instgrm-version","14"),On(C,"background","#FFF"),On(C,"border","0"),On(C,"border-radius","3px"),On(C,"box-shadow","0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)"),On(C,"margin","1px"),On(C,"max-width","540px"),On(C,"min-width","326px"),On(C,"padding","0"),On(C,"width","99.375%"),On(C,"width","-webkit-calc(100% - 2px)"),On(C,"width","calc(100% - 2px)"),w.async=!0,Hh(w.src,D="//www.instagram.com/embed.js")||Ie(w,"src",D),Ie(w,"class","svelte-182nkvl"),On(M,"border-radius","12px"),Hh(M.src,I="https://open.spotify.com/embed/track/67smGwuPEtA6GAfeweAVNO?utm_source=generator")||Ie(M,"src",I),Ie(M,"width","90%"),Ie(M,"height","152"),Ie(M,"frameborder","0"),M.allowFullscreen="",Ie(M,"allow","autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"),Ie(M,"loading","lazy"),Ie(M,"class","svelte-182nkvl"),Ie(O,"class","avatar svelte-182nkvl"),Ie(Y,"class","namess svelte-182nkvl"),Ie(j,"class","info svelte-182nkvl"),Ie(W,"class","progress progress-success w-56 svelte-182nkvl"),W.value="10",Ie(W,"max","100"),Ie($,"class","heart-container svelte-182nkvl"),Ie($,"title","Like"),Ie(be,"class","svelte-182nkvl"),Ie(Ze,"class","svelte-182nkvl"),Ie(st,"class","svelte-182nkvl"),Ie(le,"class","svelte-182nkvl"),Ie(Xe,"class","svelte-182nkvl"),Ie(Ve,"class","svelte-182nkvl"),Ie(P,"class","avatar svelte-182nkvl"),Ie(he,"class","namess svelte-182nkvl"),Ie(se,"class","info svelte-182nkvl"),Ie(_e,"class","progress progress-success w-56 svelte-182nkvl"),_e.value="10",Ie(_e,"max","100"),Ie(Fe,"class","heart-container svelte-182nkvl"),Ie(Fe,"title","Like"),Ie(Te,"class","svelte-182nkvl"),Ie(S,"class","svelte-182nkvl"),Ie(B,"class","svelte-182nkvl"),Ie(te,"id","icomp-neon"),Ie(te,"class","svelte-182nkvl"),Ie(re,"class","aps svelte-182nkvl")},m(K,de){oe(K,e,de),oe(K,t,de),oe(K,n,de),oe(K,i,de),oe(K,r,de),oe(K,a,de),oe(K,o,de),oe(K,l,de),oe(K,c,de),oe(K,h,de),oe(K,u,de),oe(K,f,de),xe(d,K,de),oe(K,p,de),oe(K,_,de),xe(g,_,null),It(_,m),oe(K,v,de),oe(K,x,de),oe(K,y,de),oe(K,C,de),oe(K,A,de),oe(K,w,de),oe(K,T,de),oe(K,M,de),oe(K,k,de),oe(K,O,de),oe(K,Y,de),oe(K,j,de),oe(K,W,de),oe(K,F,de),oe(K,$,de),oe(K,ge,de),oe(K,be,de),oe(K,we,de),oe(K,Ze,de),oe(K,st,de),oe(K,Q,de),oe(K,le,de),oe(K,Ee,de),oe(K,re,de),xe(ze,re,null),It(re,Xe),It(re,Ve),It(re,rt),It(re,P),It(re,he),It(re,se),It(re,_e),It(re,ee),It(re,Fe),It(re,ve),It(re,Te),It(re,L),It(re,S),It(re,B),It(re,ie),It(re,te),It(re,ne),xe(De,re,null),pe=!0},p:ue,i(K){pe||(G(d.$$.fragment,K),G(g.$$.fragment,K),G(ze.$$.fragment,K),G(De.$$.fragment,K),pe=!0)},o(K){Z(d.$$.fragment,K),Z(g.$$.fragment,K),Z(ze.$$.fragment,K),Z(De.$$.fragment,K),pe=!1},d(K){K&&(ae(e),ae(t),ae(n),ae(i),ae(r),ae(a),ae(o),ae(l),ae(c),ae(h),ae(u),ae(f),ae(p),ae(_),ae(v),ae(x),ae(y),ae(C),ae(A),ae(w),ae(T),ae(M),ae(k),ae(O),ae(Y),ae(j),ae(W),ae(F),ae($),ae(ge),ae(be),ae(we),ae(Ze),ae(st),ae(Q),ae(le),ae(Ee),ae(re)),ye(d,K),ye(g),ye(ze),ye(De)}}}function JE(s){let e,t,n,i,r,a,o=!s[0]&&ap(),l=s[0]&&op(s);return r=new qg({}),{c(){e=qe("div"),e.innerHTML='<a class="btn btn-ghost text-xl svelte-182nkvl">CRINGE WEB</a>',t=Oe(),o&&o.c(),n=Oe(),l&&l.c(),i=Oe(),Me(r.$$.fragment),Ie(e,"class","navbar bg-base-100 svelte-182nkvl")},m(c,h){oe(c,e,h),oe(c,t,h),o&&o.m(c,h),oe(c,n,h),l&&l.m(c,h),oe(c,i,h),xe(r,c,h),a=!0},p(c,[h]){c[0]?o&&(rn(),Z(o,1,1,()=>{o=null}),an()):o?h&1&&G(o,1):(o=ap(),o.c(),G(o,1),o.m(n.parentNode,n)),c[0]?l?h&1&&G(l,1):(l=op(c),l.c(),G(l,1),l.m(i.parentNode,i)):l&&(rn(),Z(l,1,1,()=>{l=null}),an())},i(c){a||(G(o),G(l),G(r.$$.fragment,c),a=!0)},o(c){Z(o),Z(l),Z(r.$$.fragment,c),a=!1},d(c){c&&(ae(e),ae(t),ae(n),ae(i)),o&&o.d(c),l&&l.d(c),ye(r,c)}}}function jE(s,e,t){let n=!1;return Ma(()=>{setTimeout(()=>{t(0,n=!0)},3e3)}),[n]}class KE extends mt{constructor(e){super(),pt(this,e,jE,JE,ft,{})}}new KE({target:document.getElementById("app")});
