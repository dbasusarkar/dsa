"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[7588],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(r),b=a,m=d["".concat(u,".").concat(b)]||d[b]||p[b]||s;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,l=new Array(s);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var i=2;i<s;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7462),a=r(7294),s=r(6010),l=r(2389),o=r(7392),u=r(7094),i=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:b,groupId:m,className:f}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=b??v.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,o.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,u.U)(),[w,E]=(0,a.useState)(g),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,i.o5)();if(null!=m){const e=k[m];null!=e&&e!==w&&h.some((t=>t.value===e))&&E(e)}const N=e=>{const t=e.currentTarget,r=P.indexOf(t),n=h[r].value;n!==w&&(T(t),E(n),null!=m&&O(m,String(n)))},j=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;r=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;r=P[t]??P[P.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},f)},h.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>P.push(e),onKeyDown:j,onFocus:N,onClick:N},l,{className:(0,s.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),r??t)}))),r?(0,a.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function b(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},4586:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));r(5488),r(5162);const s={sidebar_position:6,id:"f-subsets",title:"Subsets",tags:["subsets","permutations"]},l="Subsets",o={unversionedId:"patterns/f-subsets",id:"patterns/f-subsets",title:"Subsets",description:"- Understanding subsets",source:"@site/docs/patterns/f-subsets.md",sourceDirName:"patterns",slug:"/patterns/f-subsets",permalink:"/dsa/docs/patterns/f-subsets",draft:!1,tags:[{label:"subsets",permalink:"/dsa/docs/tags/subsets"},{label:"permutations",permalink:"/dsa/docs/tags/permutations"}],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,id:"f-subsets",title:"Subsets",tags:["subsets","permutations"]},sidebar:"docs",previous:{title:"Linked List Reversal",permalink:"/dsa/docs/patterns/e-linked-list-reversal"},next:{title:"Topological Sorting",permalink:"/dsa/docs/patterns/g-topological-sorting"}},u={},i=[{value:"Problems related to subsets",id:"problems-related-to-subsets",level:2},{value:"\u2197 Permutations",id:"-permutations",level:3},{value:"\u2197 Subsets",id:"-subsets",level:3}],c={toc:i};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"subsets"},"Subsets"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understanding subsets "),(0,a.kt)("li",{parentName:"ul"},"Solved problems are presented in alphabetical order")),(0,a.kt)("h2",{id:"problems-related-to-subsets"},"Problems related to subsets"),(0,a.kt)("details",null,(0,a.kt)("summary",null," Permutations (Expand/Collapse) "),(0,a.kt)("h3",{id:"-permutations"},(0,a.kt)("a",{parentName:"h3",href:"/dsa/docs/algorithms/c-recursion"},"\u2197 Permutations"))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Subsets (Expand/Collapse) "),(0,a.kt)("h3",{id:"-subsets"},(0,a.kt)("a",{parentName:"h3",href:"/dsa/docs/algorithms/c-recursion"},"\u2197 Subsets"))))}p.isMDXComponent=!0}}]);