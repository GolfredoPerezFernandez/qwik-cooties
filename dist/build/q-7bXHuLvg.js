import{$ as d,e as y,c,i as O,b as x,h as g,L as v,O as m,E as p,q as _,_ as u,H as S,w as P}from"./q-DXvOZ1vm.js";import{z as b,w as h,S as E,a3 as R,V as L}from"./q-5pApVt6g.js";const H=l=>{var n;const[e,s]=d(),o=l.target;e.isOpenSig.value===!0&&!((n=s.value)!=null&&n.contains(o))&&(e.isOpenSig.value=!1)},A=function({cleanup:e}){var i;const[s,o]=d();function n(t){t.preventDefault(),t.key==="Escape"&&(s.isOpenSig.value=!1)}(i=o.value)==null||i.addEventListener("keydown",n),e(()=>{var t;(t=o.value)==null||t.removeEventListener("keydown",n)})},B=(l,e)=>{b(l,e,{placement:"bottom",middleware:[h()]}).then(({x:s,y:o})=>{Object.assign(e.style,{left:`${s}px`,top:`${o}px`})})},V=async function({track:e}){const[s,o,n]=d(),i=e(()=>s.triggerRef.value),t=e(()=>s.listboxRef.value),r=e(()=>s.isOpenSig.value);!i||!t||(r===!0&&(t.style.visibility="hidden",await n(i,t),t.style.visibility="visible",o.value=!1,t==null||t.focus()),r===!1&&(i==null||i.focus()))},w=function({track:e}){const[s]=d(),o=e(()=>s.listboxRef.value);if(o){const n=Array.from(o.querySelectorAll('[role="option"]'));s.optionsStore.push(...n)}},I=l=>{y();const e=c(),s=O([]),o=c(""),n=c(!1),i=c(),t=c(),r=c(!0),a={optionsStore:s,selectedOptionSig:o,isOpenSig:n,triggerRef:i,listboxRef:t,isListboxHiddenSig:r};return x(E,a),g("click",_(()=>u(()=>Promise.resolve().then(()=>f),void 0),"s_COnj037onYs",[a,e])),v(_(()=>u(()=>Promise.resolve().then(()=>f),void 0),"s_pNx9pkBC1tI",[a,e])),v(_(()=>u(()=>Promise.resolve().then(()=>f),void 0),"s_N7H39giT6pA",[a,r,_(()=>u(()=>Promise.resolve().then(()=>f),void 0),"s_Bp5svGmsvFc")])),v(_(()=>u(()=>Promise.resolve().then(()=>f),void 0),"s_tytKysVfH9M",[a])),m("div",{ref:e,...l,children:[p(S,null,3,"Bs_0"),l.required?p(L,{children:p(R,null,3,"Bs_1")},1,"Bs_2"):null]},null,0,"Bs_3")},f=Object.freeze(Object.defineProperty({__proto__:null,_hW:P,s_1P8uqC3afXw:I,s_Bp5svGmsvFc:B,s_COnj037onYs:H,s_N7H39giT6pA:V,s_pNx9pkBC1tI:A,s_tytKysVfH9M:w},Symbol.toStringTag,{value:"Module"}));export{P as _hW,I as s_1P8uqC3afXw,B as s_Bp5svGmsvFc,H as s_COnj037onYs,V as s_N7H39giT6pA,A as s_pNx9pkBC1tI,w as s_tytKysVfH9M};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}