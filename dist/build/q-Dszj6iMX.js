import{$ as s,x as f,P as _,c as b,T as g,O as I,M as r,q as n,_ as o,w as S}from"./q-DXvOZ1vm.js";import{i as u,j as v,k as O,C as E}from"./q-5pApVt6g.js";const L=function(){const[e,i]=s();!e.inputRef.value||!e.defaultLabel||e.inputRef.value.value===e.defaultLabel&&(i.value=!1)},m=t=>{const[e]=s();e.isListboxOpenSig.value=!0,e.highlightedIndexSig.value=-1;const i=t.target;e.inputValueSig.value=i.value},V=t=>{const[e]=s();if(t.key==="ArrowDown"){if(e.isListboxOpenSig.value){const i=u(e.highlightedIndexSig.value,e.filteredOptionsSig);e.highlightedIndexSig.value=i}else if(e.highlightedIndexSig.value===-1){const i=u(-1,e.filteredOptionsSig);e.highlightedIndexSig.value=i}e.isListboxOpenSig.value=!0}if(t.key==="ArrowUp"){const i=v(e.highlightedIndexSig.value,e.filteredOptionsSig);e.highlightedIndexSig.value=i}if(t.key==="Enter"){if(e.isListboxOpenSig.value=!1,e.selectedIndexSig.value=e.highlightedIndexSig.value,e.filteredOptionsSig.value[e.highlightedIndexSig.value].disabled)return;const i=t.target;i.value=e.filteredOptionsSig.value[e.highlightedIndexSig.value].label}if(t.key==="Home"){const i=u(-1,e.filteredOptionsSig);e.highlightedIndexSig.value=i}if(t.key==="End"){const i=v(e.filteredOptionsSig.value.length,e.filteredOptionsSig);e.highlightedIndexSig.value=i}t.key==="Escape"&&(e.isListboxOpenSig.value=!1)},P=function(){const[e]=s(),i=e.filteredOptionsSig.value.findIndex(({label:a})=>a===e.defaultLabel);i!==-1&&(e.highlightedIndexSig.value=i)},T=()=>{const[t,e]=s();(e.disableOnBlur??!1)||(t.isListboxOpenSig.value=!1)},y=t=>{const e=f(t,["disableOnBlur"]),i=_(E),a=e.id||`${i.localId}-input`,p=`${i.localId}-listbox`,h=b(!0),x=n(()=>o(()=>Promise.resolve().then(()=>l),void 0),"s_H0TYIoxEvN0",[i]),c=n(()=>o(()=>Promise.resolve().then(()=>l),void 0),"s_VbW6nXYoVV8",[i]);return g(n(()=>o(()=>Promise.resolve().then(()=>l),void 0),"s_0fw3VrSiM5I",[i,h])),g(n(()=>o(()=>Promise.resolve().then(()=>l),void 0),"s_to0vbTbWOHo",[i])),I("input",{...e,"aria-activedescendant":i.isListboxOpenSig.value?O(i.highlightedIndexSig,i.filteredOptionsSig,i.localId):"","aria-controls":p,id:a||e.id,onBlur$:[n(()=>o(()=>Promise.resolve().then(()=>l),void 0),"s_zwsk0Nv2s9M",[i,t]),e.onBlur$],onInput$:[x,e.onInput$],onKeyDown$:[c,e.onKeyDown$],ref:i.inputRef},{"aria-autocomplete":"list","aria-expanded":r(d=>d.isListboxOpenSig.value,[i],"p0.isListboxOpenSig.value"),"aria-haspopup":"listbox",role:"combobox",type:"text",value:r(d=>d.inputValueSig.value,[i],"p0.inputValueSig.value")},0,"XG_0")},l=Object.freeze(Object.defineProperty({__proto__:null,_hW:S,s_0fw3VrSiM5I:L,s_H0TYIoxEvN0:m,s_VbW6nXYoVV8:V,s_ZWi3j8rQMQU:y,s_to0vbTbWOHo:P,s_zwsk0Nv2s9M:T},Symbol.toStringTag,{value:"Module"}));export{S as _hW,L as s_0fw3VrSiM5I,m as s_H0TYIoxEvN0,V as s_VbW6nXYoVV8,y as s_ZWi3j8rQMQU,P as s_to0vbTbWOHo,T as s_zwsk0Nv2s9M};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
