"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[5395],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(a),d=l,b=c["".concat(s,".").concat(d)]||c[d]||p[d]||r;return a?n.createElement(b,o(o({ref:t},m),{},{components:a})):n.createElement(b,o({ref:t},m))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),l=a(7294),r=a(6010),o=a(2389),i=a(7392),s=a(7094),u=a(2466);const m="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:a,block:o,defaultValue:c,values:d,groupId:b,className:v}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,i.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[w,T]=(0,l.useState)(k),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=b){const e=y[b];null!=e&&e!==w&&h.some((t=>t.value===e))&&T(e)}const C=e=>{const t=e.currentTarget,a=S.indexOf(t),n=h[a].value;n!==w&&(x(t),T(n),null!=b&&N(b,String(n)))},P=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;a=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;a=S[t]??S[S.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},v)},h.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>S.push(e),onKeyDown:P,onFocus:C,onClick:C},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,l.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,o.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},7061:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),r=a(5488),o=a(5162);const i={sidebar_position:8,id:"h-bit-manipulation",title:"Bit Manipulation",tags:["bit-manipulation","add-binary","counting-bits","missing-number","number-of-1-bits","reverse-bits","single-number"]},s="Bit Manipulation",u={unversionedId:"patterns/h-bit-manipulation",id:"patterns/h-bit-manipulation",title:"Bit Manipulation",description:"- Understanding bit manipulation",source:"@site/docs/patterns/h-bit-manipulation.md",sourceDirName:"patterns",slug:"/patterns/h-bit-manipulation",permalink:"/dsa/docs/patterns/h-bit-manipulation",draft:!1,tags:[{label:"bit-manipulation",permalink:"/dsa/docs/tags/bit-manipulation"},{label:"add-binary",permalink:"/dsa/docs/tags/add-binary"},{label:"counting-bits",permalink:"/dsa/docs/tags/counting-bits"},{label:"missing-number",permalink:"/dsa/docs/tags/missing-number"},{label:"number-of-1-bits",permalink:"/dsa/docs/tags/number-of-1-bits"},{label:"reverse-bits",permalink:"/dsa/docs/tags/reverse-bits"},{label:"single-number",permalink:"/dsa/docs/tags/single-number"}],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,id:"h-bit-manipulation",title:"Bit Manipulation",tags:["bit-manipulation","add-binary","counting-bits","missing-number","number-of-1-bits","reverse-bits","single-number"]},sidebar:"docs",previous:{title:"Topological Sorting",permalink:"/dsa/docs/patterns/g-topological-sorting"},next:{title:"Dynamic Programming",permalink:"/dsa/docs/patterns/i-dp"}},m={},p=[{value:"Problems related to bit manipulation",id:"problems-related-to-bit-manipulation",level:2},{value:"\u2197 See LeetCode Problem #67",id:"-see-leetcode-problem-67",level:3},{value:"\u2197 See LeetCode Problem #338",id:"-see-leetcode-problem-338",level:3},{value:"\u2197 See LeetCode Problem #268",id:"-see-leetcode-problem-268",level:3},{value:"\u2197 See LeetCode Problem #191",id:"-see-leetcode-problem-191",level:3},{value:"\u2197 See LeetCode Problem #190",id:"-see-leetcode-problem-190",level:3},{value:"\u2197 See LeetCode Problem #136",id:"-see-leetcode-problem-136",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"bit-manipulation"},"Bit Manipulation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Understanding bit manipulation "),(0,l.kt)("li",{parentName:"ul"},"Solved problems are presented in alphabetical order")),(0,l.kt)("h2",{id:"problems-related-to-bit-manipulation"},"Problems related to bit manipulation"),(0,l.kt)("details",null,(0,l.kt)("summary",null," Add Binary (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-67"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/add-binary/"},"\u2197 See LeetCode Problem #67")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Counting Bits (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-338"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/counting-bits/"},"\u2197 See LeetCode Problem #338")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Missing Number (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-268"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/missing-number/"},"\u2197 See LeetCode Problem #268")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Number of 1 Bits (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-191"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/number-of-1-bits/"},"\u2197 See LeetCode Problem #191")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Reverse Bits (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-190"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/reverse-bits/"},"\u2197 See LeetCode Problem #190")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Single Number (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-136"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/single-number/"},"\u2197 See LeetCode Problem #136")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))))}d.isMDXComponent=!0}}]);