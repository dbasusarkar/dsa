"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[2138],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,s),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(7462),n=r(7294),o=r(6010),s=r(2389),l=r(7392),i=r(7094),u=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:s,defaultValue:d,values:m,groupId:f,className:b}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=m??v.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),h=(0,l.l)(w,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!w.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:g}=(0,i.U)(),[T,O]=(0,n.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:P}=(0,u.o5)();if(null!=f){const e=k[f];null!=e&&e!==T&&w.some((t=>t.value===e))&&O(e)}const C=e=>{const t=e.currentTarget,r=E.indexOf(t),a=w[r].value;a!==T&&(P(t),O(a),null!=f&&g(f,String(a)))},N=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},b)},w.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>E.push(e),onKeyDown:N,onFocus:C,onClick:C},s,{className:(0,o.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":T===t})}),r??t)}))),r?(0,n.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,s.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},7223:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));r(5488),r(5162);const o={sidebar_position:2,id:"b-two-pointers",title:"Two Pointers",tags:["two-pointers"]},s="Two Pointers",l={unversionedId:"patterns/b-two-pointers",id:"patterns/b-two-pointers",title:"Two Pointers",description:"- Understanding two pointers",source:"@site/docs/patterns/b-two-pointers.md",sourceDirName:"patterns",slug:"/patterns/b-two-pointers",permalink:"/dsa/docs/patterns/b-two-pointers",draft:!1,tags:[{label:"two-pointers",permalink:"/dsa/docs/tags/two-pointers"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"b-two-pointers",title:"Two Pointers",tags:["two-pointers"]},sidebar:"docs",previous:{title:"Sliding Window",permalink:"/dsa/docs/patterns/a-sliding-window"},next:{title:"Fast and Slow Pointers",permalink:"/dsa/docs/patterns/c-fast-and-slow-pointers"}},i={},u=[{value:"Problems related to two pointers",id:"problems-related-to-two-pointers",level:2},{value:"\u2197 Container with Most Water",id:"-container-with-most-water",level:3},{value:"\u2197 Intersection of Two Linked Lists",id:"-intersection-of-two-linked-lists",level:3},{value:"\u2197 Sort Colors",id:"-sort-colors",level:3},{value:"\u2197 Squares of a Sorted Array",id:"-squares-of-a-sorted-array",level:3},{value:"\u2197 Trapping Rain Water",id:"-trapping-rain-water",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"two-pointers"},"Two Pointers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Understanding two pointers "),(0,n.kt)("li",{parentName:"ul"},"Solved problems are presented in alphabetical order")),(0,n.kt)("h2",{id:"problems-related-to-two-pointers"},"Problems related to two pointers"),(0,n.kt)("details",null,(0,n.kt)("summary",null," Container with Most Water (Expand/Collapse) "),(0,n.kt)("h3",{id:"-container-with-most-water"},(0,n.kt)("a",{parentName:"h3",href:"/dsa/docs/data-structures/a-arrays"},"\u2197 Container with Most Water"))),(0,n.kt)("details",null,(0,n.kt)("summary",null," Intersection of Two Linked Lists (Expand/Collapse) "),(0,n.kt)("h3",{id:"-intersection-of-two-linked-lists"},(0,n.kt)("a",{parentName:"h3",href:"/dsa/docs/data-structures/c-linked-lists"},"\u2197 Intersection of Two Linked Lists"))),(0,n.kt)("details",null,(0,n.kt)("summary",null," Sort Colors (Expand/Collapse) "),(0,n.kt)("h3",{id:"-sort-colors"},(0,n.kt)("a",{parentName:"h3",href:"/dsa/docs/data-structures/a-arrays"},"\u2197 Sort Colors"))),(0,n.kt)("details",null,(0,n.kt)("summary",null," Squares of a Sorted Array (Expand/Collapse) "),(0,n.kt)("h3",{id:"-squares-of-a-sorted-array"},(0,n.kt)("a",{parentName:"h3",href:"/dsa/docs/patterns/k-math"},"\u2197 Squares of a Sorted Array"))),(0,n.kt)("details",null,(0,n.kt)("summary",null," Trapping Rain Water (Expand/Collapse) "),(0,n.kt)("h3",{id:"-trapping-rain-water"},(0,n.kt)("a",{parentName:"h3",href:"/dsa/docs/data-structures/f-stacks"},"\u2197 Trapping Rain Water"))))}p.isMDXComponent=!0}}]);