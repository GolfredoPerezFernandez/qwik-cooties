import{G as f,H as g,I as y,J as h,L as k,M as p,N as O,O as b,Q as A}from"./q-5pApVt6g.js";import{$ as c,u as M,c as S,T as B,O as P,M as T,E as L,q as r,_ as l,H as $,w as q}from"./q-DXvOZ1vm.js";const R=f,C=async function({track:o,cleanup:a}){var v,w;const[n,s,d]=c(),m=o(()=>d.value),t=n.value;if(!t)return;const _=g(t),u=b(()=>{d.value=!1});if(window.addEventListener("keydown",u),m){const E=window.requestAnimationFrame;window.requestAnimationFrame=()=>42,y(t),h(t,{reserveScrollBarGap:!0}),window.requestAnimationFrame=E,(v=s.onShow$)==null||v.call(s),k(_)}else p(t),(w=s.onClose$)==null||w.call(s);a(()=>{O(_),window.removeEventListener("keydown",u)})},F=e=>{const[o,a,n]=c();a.alert===!0||a.closeOnBackdropClick===!1||A(o.value,e)&&(n.value=!1)},V=e=>{const[o]=c();return o(e)},I=e=>{M(r(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_6kc6yEJKobw"));const o=S(),{"bind:show":a}=e;return B(r(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_boBpVEMpnGQ",[o,e,a])),P("dialog",{...e,children:L($,null,3,"9p_0"),onClick$:r(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_rnAxN4ftyEs",[r(()=>l(()=>Promise.resolve().then(()=>i),void 0),"s_qbpjydAbzcE",[o,e,a])]),ref:o},{role:T(s=>s.alert===!0?"alertdialog":"dialog",[e],'p0.alert===true?"alertdialog":"dialog"')},0,"9p_1")},i=Object.freeze(Object.defineProperty({__proto__:null,_hW:q,s_6kc6yEJKobw:R,s_VXOY7yQNLIw:I,s_boBpVEMpnGQ:C,s_qbpjydAbzcE:F,s_rnAxN4ftyEs:V},Symbol.toStringTag,{value:"Module"}));export{q as _hW,R as s_6kc6yEJKobw,I as s_VXOY7yQNLIw,C as s_boBpVEMpnGQ,F as s_qbpjydAbzcE,V as s_rnAxN4ftyEs};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
