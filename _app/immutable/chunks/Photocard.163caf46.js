import{s as q,f as r,a as x,l as P,g as u,h as g,c as _,m as A,d as f,L as v,j as m,i as S,v as h,n as w,w as p}from"./scheduler.9fda3323.js";import{S as y,i as E}from"./index.0d06ddaa.js";function D(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function G(e,s){return`${s}/images/avatars/${e}.webp`}function I(e){let s,t,l,i,a,d;return{c(){s=r("div"),t=r("img"),i=x(),a=r("span"),d=P(e[1]),this.h()},l(c){s=u(c,"DIV",{class:!0});var n=g(s);t=u(n,"IMG",{src:!0,class:!0}),i=_(n),a=u(n,"SPAN",{class:!0});var o=g(a);d=A(o,e[1]),o.forEach(f),n.forEach(f),this.h()},h(){v(t.src,l=e[0])||m(t,"src",l),m(t,"class","svelte-1ydq0ho"),m(a,"class","svelte-1ydq0ho"),m(s,"class","photocard svelte-1ydq0ho")},m(c,n){S(c,s,n),h(s,t),h(s,i),h(s,a),h(a,d)},p(c,[n]){n&1&&!v(t.src,l=c[0])&&m(t,"src",l),n&2&&w(d,c[1])},i:p,o:p,d(c){c&&f(s)}}}function b(e,s,t){let{imgsrc:l}=s,{text:i}=s;return e.$$set=a=>{"imgsrc"in a&&t(0,l=a.imgsrc),"text"in a&&t(1,i=a.text)},[l,i]}class L extends y{constructor(s){super(),E(this,s,b,I,q,{imgsrc:0,text:1})}}export{L as P,D as e,G as g};