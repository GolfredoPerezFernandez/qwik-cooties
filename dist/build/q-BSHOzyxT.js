import{$ as v,e as _,u as d,c as u,T as c,O as f,M as m,E as p,q as a,_ as s,H as g,w as P}from"./q-DXvOZ1vm.js";import{U as h,W as A,X as E,Y as y}from"./q-5pApVt6g.js";const S=async({track:e,cleanup:o})=>{const[t,n,i]=v();e(()=>i.value),t.value=!0;let l=document.querySelector("div[data-qwik-ui-popover-polyfill]");l||(l=document.createElement("div"),l.setAttribute("data-qwik-ui-popover-polyfill",""),document.body.appendChild(l)),n.value&&(l.appendChild(n.value),document.dispatchEvent(new CustomEvent("showpopover")),o(()=>n.value))},w=e=>{const[o,t]=v();t.value&&(e.newState==="open"&&t.value&&h(t.value,o.value),e.newState==="closed"&&A(t.value))},R=()=>{const[e]=v();if(e.value===0){e.value=1;return}},T=E,C=()=>{const[e,o]=v();o.ref&&(o.ref.value=e.value),e.value&&e.value.classList.contains(":popover-open")&&e.value.parentElement&&e.value.parentElement.appendChild(e.value)},O=e=>{_(),d(a(()=>s(()=>Promise.resolve().then(()=>r),void 0),"s_wA7PDs9Atyk"));const o=u(void 0),t=u(!1),n=u(2),i=u(!1);return n.value===1&&setTimeout(()=>i.value=!0,0),c(a(()=>s(()=>Promise.resolve().then(()=>r),void 0),"s_At9KNR8A2c4",[t,o,i])),f("div",{...e,children:[n.value===1&&p(y,null,3,"cz_0"),p(g,null,3,"cz_1")],"document:onPopPolyLoad$":a(()=>s(()=>Promise.resolve().then(()=>r),void 0),"s_dKmgBB0NgS8",[n]),onBeforeToggle$:[a(()=>s(()=>Promise.resolve().then(()=>r),void 0),"s_h36e6epP68Q",[t,o]),e.onBeforeToggle$],onToggle$:[a(()=>s(()=>Promise.resolve().then(()=>r),void 0),"s_CDZM5Wl1qYA",[o,e]),e.onToggle$],ref:o},{popover:m(l=>l.manual||l.popover==="manual"?"manual":"auto",[e],'p0.manual||p0.popover==="manual"?"manual":"auto"')},0,"cz_2")},r=Object.freeze(Object.defineProperty({__proto__:null,_hW:P,s_At9KNR8A2c4:S,s_CDZM5Wl1qYA:C,s_dKmgBB0NgS8:R,s_h36e6epP68Q:w,s_wA7PDs9Atyk:T,s_wlqYqvhd62w:O},Symbol.toStringTag,{value:"Module"}));export{P as _hW,S as s_At9KNR8A2c4,C as s_CDZM5Wl1qYA,R as s_dKmgBB0NgS8,w as s_h36e6epP68Q,T as s_wA7PDs9Atyk,O as s_wlqYqvhd62w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}