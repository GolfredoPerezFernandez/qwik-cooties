import{g as h,h as f}from"./q-5pApVt6g.js";import{$ as v,c as t,a as m,b as S,O,E as b,H as w,q as x,_ as y}from"./q-DXvOZ1vm.js";const R=()=>{const[n,e]=v();if(!e.value)throw new Error("Qwik UI: There is no reference to the collapsible content element. Make sure to wrap the content in a <CollapsibleContent> component.");const o=h(e.value);o!==0&&(n.value=o),e.value.style.setProperty("--qwikui-collapsible-content-height",`${n.value}px`)},C=n=>{const{"bind:isOpen":e,id:o,defaultOpen:s,...r}=n,g=t(s??!1),p=e??g,u=t(),l=t(),d=t(!0),a=t(null),_=m(),c=o||_,i={isOpenSig:p,itemId:c,defaultOpen:s,triggerRef:u,contentRef:l,contentHeightSig:a,initialStateSig:d,getContentDimensions$:x(()=>y(()=>Promise.resolve().then(()=>E),void 0),"s_hlGwxyxA6Ro",[a,l])};return S(f,i),O("div",{"data-state":i.initialStateSig.value?"initial":i.isOpenSig.value?"open":"closed",id:c,...r,children:b(w,null,3,"0k_0")},null,0,"0k_1")},E=Object.freeze(Object.defineProperty({__proto__:null,s_hlGwxyxA6Ro:R,s_sfmJQTYRENw:C},Symbol.toStringTag,{value:"Module"}));export{R as s_hlGwxyxA6Ro,C as s_sfmJQTYRENw};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
