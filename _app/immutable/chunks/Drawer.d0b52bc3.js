import{s as E,B as k,f as p,a as S,g as D,h as g,d as v,c as b,j as _,K as y,i as A,v as z,y as I,D as q,E as C,F as V,J as j,o as B}from"./scheduler.e5d533cb.js";import{S as F,i as J,a as K,t as L}from"./index.3cab4bb4.js";function M(i){let e,n,d,c,r,l,u,m;const f=i[7].default,s=k(f,i,i[6],null);return{c(){e=p("aside"),n=p("div"),d=S(),c=p("div"),s&&s.c(),this.h()},l(t){e=D(t,"ASIDE",{class:!0,style:!0});var a=g(e);n=D(a,"DIV",{class:!0}),g(n).forEach(v),d=b(a),c=D(a,"DIV",{class:!0});var h=g(c);s&&s.l(h),h.forEach(v),a.forEach(v),this.h()},h(){_(n,"class","overlay svelte-1c92i6o"),_(c,"class",r="panel "+i[1]+" svelte-1c92i6o"),y(c,"size",i[2]),_(e,"class","drawer svelte-1c92i6o"),_(e,"style",i[3]),y(e,"open",i[0])},m(t,a){A(t,e,a),z(e,n),z(e,d),z(e,c),s&&s.m(c,null),l=!0,u||(m=I(n,"click",i[4]),u=!0)},p(t,[a]){s&&s.p&&(!l||a&64)&&q(s,f,t,t[6],l?V(f,t[6],a,null):C(t[6]),null),(!l||a&2&&r!==(r="panel "+t[1]+" svelte-1c92i6o"))&&_(c,"class",r),(!l||a&6)&&y(c,"size",t[2]),(!l||a&8)&&_(e,"style",t[3]),(!l||a&1)&&y(e,"open",t[0])},i(t){l||(K(s,t),l=!0)},o(t){L(s,t),l=!1},d(t){t&&v(e),s&&s.d(t),u=!1,m()}}}function G(i,e,n){let d,{$$slots:c={},$$scope:r}=e,{open:l=!1}=e,{duration:u=.2}=e,{placement:m="left"}=e,{size:f=null}=e,s=!1;const t=j();function a(o){if(s){const w=document.querySelector("body");w.style.overflow=o?"hidden":"auto"}}function h(){t("clickAway")}return B(()=>{s=!0,a(l)}),i.$$set=o=>{"open"in o&&n(0,l=o.open),"duration"in o&&n(5,u=o.duration),"placement"in o&&n(1,m=o.placement),"size"in o&&n(2,f=o.size),"$$scope"in o&&n(6,r=o.$$scope)},i.$$.update=()=>{i.$$.dirty&36&&n(3,d=`--duration: ${u}s; --size: ${f};`),i.$$.dirty&1&&a(l)},[l,m,f,d,h,u,r,c]}class O extends F{constructor(e){super(),J(this,e,G,M,E,{open:0,duration:5,placement:1,size:2})}}export{O as D};