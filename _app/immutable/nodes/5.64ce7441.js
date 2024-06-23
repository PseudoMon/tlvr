import{s as P,f as $,a as L,g as y,h as C,x as J,c as V,d as m,j as g,i as k,v as p,w as j,H as Q,l as O,m as A,n as R,r as Y,u as Z,K,y as _e,L as x,e as ee,G as ue,M as he,N as de,C as ve}from"../chunks/scheduler.9fda3323.js";import{S,i as F,b as N,d as U,m as G,a as w,t as I,e as T,g as W,c as X}from"../chunks/index.0d06ddaa.js";import{e as B,g as me,P as ge}from"../chunks/Photocard.163caf46.js";import{b as pe}from"../chunks/paths.d6d759f2.js";import{c as fe,L as be}from"../chunks/LangButtonBar.dc1800e0.js";function te(n,e,l){const t=n.slice();return t[1]=e[l],t}function ke(n){let e=n[1].toUpperCase()+"",l;return{c(){l=O(e)},l(t){l=A(t,e)},m(t,i){k(t,l,i)},p(t,i){i&1&&e!==(e=t[1].toUpperCase()+"")&&R(l,e)},d(t){t&&m(l)}}}function $e(n){let e;return{c(){e=O("CN REG")},l(l){e=A(l,"CN REG")},m(l,t){k(l,e,t)},p:j,d(l){l&&m(e)}}}function ye(n){let e;return{c(){e=O("OG")},l(l){e=A(l,"OG")},m(l,t){k(l,e,t)},p:j,d(l){l&&m(e)}}}function le(n){let e,l=n[0][n[1]].global+"",t,i;return{c(){e=O("("),t=O(l),i=O(")")},l(r){e=A(r,"("),t=A(r,l),i=A(r,")")},m(r,a){k(r,e,a),k(r,t,a),k(r,i,a)},p(r,a){a&1&&l!==(l=r[0][r[1]].global+"")&&R(t,l)},d(r){r&&(m(e),m(t),m(i))}}}function se(n){let e,l,t,i=n[0][n[1]].native+"",r,a,o;function f(s,_){return s[1]=="linkage"?ye:s[1]=="cn_topolect"?$e:ke}let u=f(n),c=u(n),h=n[0][n[1]].native!=n[0][n[1]].global&&le(n);return{c(){e=$("div"),c.c(),l=L(),t=$("div"),r=O(i),a=L(),h&&h.c(),o=L(),this.h()},l(s){e=y(s,"DIV",{class:!0});var _=C(e);c.l(_),_.forEach(m),l=V(s),t=y(s,"DIV",{class:!0});var d=C(t);r=A(d,i),a=V(d),h&&h.l(d),o=V(d),d.forEach(m),this.h()},h(){g(e,"class","label svelte-1nj7g2e"),g(t,"class","content svelte-1nj7g2e")},m(s,_){k(s,e,_),c.m(e,null),k(s,l,_),k(s,t,_),p(t,r),p(t,a),h&&h.m(t,null),p(t,o)},p(s,_){u===(u=f(s))&&c?c.p(s,_):(c.d(1),c=u(s),c&&(c.c(),c.m(e,null))),_&1&&i!==(i=s[0][s[1]].native+"")&&R(r,i),s[0][s[1]].native!=s[0][s[1]].global?h?h.p(s,_):(h=le(s),h.c(),h.m(t,o)):h&&(h.d(1),h=null)},d(s){s&&(m(e),m(l),m(t)),c.d(),h&&h.d()}}}function Ce(n){let e,l,t="Voice Credits",i,r=B(Object.keys(n[0])),a=[];for(let o=0;o<r.length;o+=1)a[o]=se(te(n,r,o));return{c(){e=$("div"),l=$("h2"),l.textContent=t,i=L();for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){e=y(o,"DIV",{class:!0});var f=C(e);l=y(f,"H2",{class:!0,"data-svelte-h":!0}),J(l)!=="svelte-1fy2wue"&&(l.textContent=t),i=V(f);for(let u=0;u<a.length;u+=1)a[u].l(f);f.forEach(m),this.h()},h(){g(l,"class","svelte-1nj7g2e"),g(e,"class","voiceinfo svelte-1nj7g2e")},m(o,f){k(o,e,f),p(e,l),p(e,i);for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(e,null)},p(o,[f]){if(f&1){r=B(Object.keys(o[0]));let u;for(u=0;u<r.length;u+=1){const c=te(o,r,u);a[u]?a[u].p(c,f):(a[u]=se(c),a[u].c(),a[u].m(e,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=r.length}},i:j,o:j,d(o){o&&m(e),Q(a,o)}}}function Ee(n,e,l){let{actors:t}=e;return n.$$set=i=>{"actors"in i&&l(0,t=i.actors)},[t]}class we extends S{constructor(e){super(),F(this,e,Ee,Ce,P,{actors:0})}}function Le(n){let e,l;return{c(){e=Y("svg"),l=Y("path"),this.h()},l(t){e=Z(t,"svg",{xmlns:!0,height:!0,viewBox:!0,class:!0});var i=C(e);l=Z(i,"path",{d:!0}),C(l).forEach(m),i.forEach(m),this.h()},h(){g(l,"d","M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"),g(e,"xmlns","http://www.w3.org/2000/svg"),g(e,"height","1em"),g(e,"viewBox","0 0 640 512"),g(e,"class","svelte-ygnzlb")},m(t,i){k(t,e,i),p(e,l)},p:j,i:j,o:j,d(t){t&&m(e)}}}class Ve extends S{constructor(e){super(),F(this,e,null,Le,P,{})}}function ne(n,e,l){const t=n.slice();return t[13]=e[l],t}function ae(n){let e,l=(Object.keys(n[4]).includes(n[13])?n[4][n[13]]:n[13].toUpperCase())+"",t,i,r;function a(){return n[7](n[13])}return{c(){e=$("button"),t=O(l),this.h()},l(o){e=y(o,"BUTTON",{class:!0});var f=C(e);t=A(f,l),f.forEach(m),this.h()},h(){g(e,"class","svelte-rp3e17"),K(e,"selected",n[2]===n[13])},m(o,f){k(o,e,f),p(e,t),i||(r=_e(e,"click",a),i=!0)},p(o,f){n=o,f&1&&l!==(l=(Object.keys(n[4]).includes(n[13])?n[4][n[13]]:n[13].toUpperCase())+"")&&R(t,l),f&5&&K(e,"selected",n[2]===n[13])},d(o){o&&m(e),i=!1,r()}}}function ie(n){let e,l,t,i;return{c(){e=$("audio"),l=$("a"),t=O("Download audio"),this.h()},l(r){e=y(r,"AUDIO",{src:!0,preload:!0,class:!0});var a=C(e);l=y(a,"A",{href:!0});var o=C(l);t=A(o,"Download audio"),o.forEach(m),a.forEach(m),this.h()},h(){g(l,"href",n[1]),e.controls=!0,x(e.src,i=n[1])||g(e,"src",i),g(e,"preload","auto"),g(e,"class","svelte-rp3e17")},m(r,a){k(r,e,a),p(e,l),p(l,t)},p(r,a){a&2&&g(l,"href",r[1]),a&2&&!x(e.src,i=r[1])&&g(e,"src",i)},d(r){r&&m(e)}}}function ze(n){let e,l,t,i,r,a;t=new Ve({});let o=B(n[0]),f=[];for(let c=0;c<o.length;c+=1)f[c]=ae(ne(n,o,c));let u=n[3]&&ie(n);return{c(){e=$("div"),l=$("div"),N(t.$$.fragment),i=L();for(let c=0;c<f.length;c+=1)f[c].c();r=L(),u&&u.c(),this.h()},l(c){e=y(c,"DIV",{class:!0});var h=C(e);l=y(h,"DIV",{class:!0});var s=C(l);U(t.$$.fragment,s),i=V(s);for(let _=0;_<f.length;_+=1)f[_].l(s);s.forEach(m),r=V(h),u&&u.l(h),h.forEach(m),this.h()},h(){g(l,"class","audio-selector svelte-rp3e17"),g(e,"class","audio-container svelte-rp3e17")},m(c,h){k(c,e,h),p(e,l),G(t,l,null),p(l,i);for(let s=0;s<f.length;s+=1)f[s]&&f[s].m(l,null);p(e,r),u&&u.m(e,null),a=!0},p(c,[h]){if(h&53){o=B(c[0]);let s;for(s=0;s<o.length;s+=1){const _=ne(c,o,s);f[s]?f[s].p(_,h):(f[s]=ae(_),f[s].c(),f[s].m(l,null))}for(;s<f.length;s+=1)f[s].d(1);f.length=o.length}c[3]?u?u.p(c,h):(u=ie(c),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i(c){a||(w(t.$$.fragment,c),a=!0)},o(c){I(t.$$.fragment,c),a=!1},d(c){c&&m(e),T(t),Q(f,c),u&&u.d()}}}const M="https://raw.githubusercontent.com/PseudoMon/arknights-audio/global-server-voices";function Ie(n,e,l){let{assetloc:t}=e,{availability:i=[]}=e;const r={jp:"voice",en:"voice_en",cn:"voice_cn",kr:"voice_kr"},a=["ita","cn_topolect"],o=["ger","rus"],f=["tachak","blitz","ash","rfrost"],u={cn_topolect:"CN REG",linkage:"OG"};function c(v){if(v===null)return null;if(Object.keys(r).includes(v))return`${M}/${r[s]}/${t}.mp3`;if(a.includes(v)){const b=t.replace("/",`_${v}/`);return`${M}/voice_custom/${b}.mp3`}else{if(o.includes(v))return`${M}/voice_custom/${t}.mp3`;if(v==="linkage"){if(f.some(b=>t.includes(b)))return`${M}/${r.jp}/${t}.mp3`;if(t.includes("ncdeer"))return`${M}/${r.cn}/${t}.mp3`;if(t.includes("palico"))return`${M}/${r.jp}/${t}.mp3`}}return null}let h,s=null,_;function d(v){if(v===s){l(2,s=null);return}l(2,s=v)}const q=v=>d(v);return n.$$set=v=>{"assetloc"in v&&l(6,t=v.assetloc),"availability"in v&&l(0,i=v.availability)},n.$$.update=()=>{n.$$.dirty&4&&l(1,h=c(s)),n.$$.dirty&6&&l(3,_=s&&h)},[i,h,s,_,u,d,t,q]}class je extends S{constructor(e){super(),F(this,e,Ie,ze,P,{assetloc:6,availability:0})}}function re(n){let e,l,t=n[0].title[n[2]]+"",i,r,a,o,f=n[0].text[n[2]]+"",u,c,h;return c=new je({props:{assetloc:n[0].asset,availability:n[1]}}),{c(){e=$("div"),l=$("h2"),i=O(t),r=L(),a=$("div"),o=new he(!1),u=L(),N(c.$$.fragment),this.h()},l(s){e=y(s,"DIV",{class:!0});var _=C(e);l=y(_,"H2",{class:!0});var d=C(l);i=A(d,t),d.forEach(m),r=V(_),a=y(_,"DIV",{});var q=C(a);o=de(q,!1),q.forEach(m),_.forEach(m),u=V(s),U(c.$$.fragment,s),this.h()},h(){g(l,"class","svelte-1uztwy5"),o.a=null,g(e,"class","voiceline svelte-1uztwy5"),K(e,"en",n[2]==="en")},m(s,_){k(s,e,_),p(e,l),p(l,i),p(e,r),p(e,a),o.m(f,a),k(s,u,_),G(c,s,_),h=!0},p(s,_){(!h||_&5)&&t!==(t=s[0].title[s[2]]+"")&&R(i,t),(!h||_&5)&&f!==(f=s[0].text[s[2]]+"")&&o.p(f),(!h||_&4)&&K(e,"en",s[2]==="en");const d={};_&1&&(d.assetloc=s[0].asset),_&2&&(d.availability=s[1]),c.$set(d)},i(s){h||(w(c.$$.fragment,s),h=!0)},o(s){I(c.$$.fragment,s),h=!1},d(s){s&&(m(e),m(u)),T(c,s)}}}function Oe(n){let e,l,t=n[0]&&re(n);return{c(){t&&t.c(),e=ee()},l(i){t&&t.l(i),e=ee()},m(i,r){t&&t.m(i,r),k(i,e,r),l=!0},p(i,[r]){i[0]?t?(t.p(i,r),r&1&&w(t,1)):(t=re(i),t.c(),w(t,1),t.m(e.parentNode,e)):t&&(W(),I(t,1,1,()=>{t=null}),X())},i(i){l||(w(t),l=!0)},o(i){I(t),l=!1},d(i){i&&m(e),t&&t.d(i)}}}function Ae(n,e,l){let t;ue(n,fe,a=>l(2,t=a));let{voicedata:i}=e,{availability:r=[]}=e;return n.$$set=a=>{"voicedata"in a&&l(0,i=a.voicedata),"availability"in a&&l(1,r=a.availability)},[i,r,t]}class De extends S{constructor(e){super(),F(this,e,Ae,Oe,P,{voicedata:0,availability:1})}}function oe(n,e,l){const t=n.slice();return t[3]=e[l],t}function qe(n){let e,l="Loading...";return{c(){e=$("h2"),e.textContent=l},l(t){e=y(t,"H2",{"data-svelte-h":!0}),J(e)!=="svelte-1ek26yc"&&(e.textContent=l)},m(t,i){k(t,e,i)},p:j,i:j,o:j,d(t){t&&m(e)}}}function He(n){let e,l,t,i="Operator File",r,a,o,f,u,c,h,s;o=new ge({props:{imgsrc:n[1],text:n[0].names[n[2]]}}),u=new we({props:{actors:n[0].actors}});let _=B(n[0].voices),d=[];for(let v=0;v<_.length;v+=1)d[v]=ce(oe(n,_,v));const q=v=>I(d[v],1,1,()=>{d[v]=null});return{c(){e=$("article"),l=$("div"),t=$("h1"),t.textContent=i,r=L(),a=$("section"),N(o.$$.fragment),f=L(),N(u.$$.fragment),c=L(),h=$("ol");for(let v=0;v<d.length;v+=1)d[v].c();this.h()},l(v){e=y(v,"ARTICLE",{class:!0});var b=C(e);l=y(b,"DIV",{class:!0});var z=C(l);t=y(z,"H1",{class:!0,"data-svelte-h":!0}),J(t)!=="svelte-14zp2hw"&&(t.textContent=i),r=V(z),a=y(z,"SECTION",{class:!0});var D=C(a);U(o.$$.fragment,D),f=V(D),U(u.$$.fragment,D),D.forEach(m),z.forEach(m),c=V(b),h=y(b,"OL",{class:!0});var E=C(h);for(let H=0;H<d.length;H+=1)d[H].l(E);E.forEach(m),b.forEach(m),this.h()},h(){g(t,"class","svelte-1kzqta4"),g(a,"class","basicinfo svelte-1kzqta4"),g(l,"class","leftcolumn svelte-1kzqta4"),g(h,"class","voicelines svelte-1kzqta4"),g(e,"class","charpage svelte-1kzqta4")},m(v,b){k(v,e,b),p(e,l),p(l,t),p(l,r),p(l,a),G(o,a,null),p(a,f),G(u,a,null),p(e,c),p(e,h);for(let z=0;z<d.length;z+=1)d[z]&&d[z].m(h,null);s=!0},p(v,b){const z={};b&2&&(z.imgsrc=v[1]),b&5&&(z.text=v[0].names[v[2]]),o.$set(z);const D={};if(b&1&&(D.actors=v[0].actors),u.$set(D),b&1){_=B(v[0].voices);let E;for(E=0;E<_.length;E+=1){const H=oe(v,_,E);d[E]?(d[E].p(H,b),w(d[E],1)):(d[E]=ce(H),d[E].c(),w(d[E],1),d[E].m(h,null))}for(W(),E=_.length;E<d.length;E+=1)q(E);X()}},i(v){if(!s){w(o.$$.fragment,v),w(u.$$.fragment,v);for(let b=0;b<_.length;b+=1)w(d[b]);s=!0}},o(v){I(o.$$.fragment,v),I(u.$$.fragment,v),d=d.filter(Boolean);for(let b=0;b<d.length;b+=1)I(d[b]);s=!1},d(v){v&&m(e),T(o),T(u),Q(d,v)}}}function ce(n){let e,l,t,i;return l=new De({props:{voicedata:n[3],availability:n[0].availability}}),{c(){e=$("li"),N(l.$$.fragment),t=L(),this.h()},l(r){e=y(r,"LI",{class:!0});var a=C(e);U(l.$$.fragment,a),t=V(a),a.forEach(m),this.h()},h(){g(e,"class","svelte-1kzqta4")},m(r,a){k(r,e,a),G(l,e,null),p(e,t),i=!0},p(r,a){const o={};a&1&&(o.voicedata=r[3]),a&1&&(o.availability=r[0].availability),l.$set(o)},i(r){i||(w(l.$$.fragment,r),i=!0)},o(r){I(l.$$.fragment,r),i=!1},d(r){r&&m(e),T(l)}}}function Me(n){let e,l,t,i,r,a,o,f;document.title=e=n[0].names.en+" - TLVR",i=new be({});const u=[He,qe],c=[];function h(s,_){return s[0]!==null?0:1}return a=h(n),o=c[a]=u[a](n),{c(){l=L(),t=$("main"),N(i.$$.fragment),r=L(),o.c(),this.h()},l(s){ve("svelte-1nn5esx",document.head).forEach(m),l=V(s),t=y(s,"MAIN",{class:!0});var d=C(t);U(i.$$.fragment,d),r=V(d),o.l(d),d.forEach(m),this.h()},h(){g(t,"class","svelte-1kzqta4")},m(s,_){k(s,l,_),k(s,t,_),G(i,t,null),p(t,r),c[a].m(t,null),f=!0},p(s,[_]){(!f||_&1)&&e!==(e=s[0].names.en+" - TLVR")&&(document.title=e);let d=a;a=h(s),a===d?c[a].p(s,_):(W(),I(c[d],1,1,()=>{c[d]=null}),X(),o=c[a],o?o.p(s,_):(o=c[a]=u[a](s),o.c()),w(o,1),o.m(t,null))},i(s){f||(w(i.$$.fragment,s),w(o),f=!0)},o(s){I(i.$$.fragment,s),I(o),f=!1},d(s){s&&(m(l),m(t)),T(i),c[a].d()}}}function Ne(n,e,l){let t;ue(n,fe,a=>l(2,t=a));let{data:i}=e,r;return n.$$set=a=>{"data"in a&&l(0,i=a.data)},n.$$.update=()=>{n.$$.dirty&1&&l(1,r=i===null?null:me(i.nameid,pe))},[i,r,t]}class Re extends S{constructor(e){super(),F(this,e,Ne,Me,P,{data:0})}}export{Re as component};
