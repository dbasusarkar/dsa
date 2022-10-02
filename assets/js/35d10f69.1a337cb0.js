"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[7361],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=r.createContext({}),m=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=m(a),c=l,b=p["".concat(i,".").concat(c)]||p[c]||u[c]||n;return a?r.createElement(b,s(s({ref:t},d),{},{components:a})):r.createElement(b,s({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,s=new Array(n);s[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var m=2;m<n;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),l=a(6010);const n="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(n,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(7462),l=a(7294),n=a(6010),s=a(2389),o=a(7392),i=a(7094),m=a(2466);const d="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:a,block:s,defaultValue:p,values:c,groupId:b,className:y}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=c??v.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),k=(0,o.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:T}=(0,i.U)(),[N,S]=(0,l.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,m.o5)();if(null!=b){const e=g[b];null!=e&&e!==N&&h.some((t=>t.value===e))&&S(e)}const L=e=>{const t=e.currentTarget,a=w.indexOf(t),r=h[a].value;r!==N&&(x(t),S(r),null!=b&&T(b,String(r)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,n.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":s},y)},h.map((e=>{let{value:t,label:a,attributes:s}=e;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>w.push(e),onKeyDown:C,onFocus:L,onClick:L},s,{className:(0,n.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,l.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,s.Z)();return l.createElement(p,(0,r.Z)({key:String(t)},e))}},9210:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var r=a(7462),l=(a(7294),a(3905)),n=a(5488),s=a(5162);const o={sidebar_position:9,id:"i-binary-trees",title:"Binary-trees",tags:["binary-trees","balanced-binary-tree","binary-tree-level-order-traversal","diameter-of-binary-tree","invert-binary-tree","maximum-depth-of-binary-tree","same-tree","serialize-and-deserialize-binary-tree","subtree-of-another-tree","symmetric-tree"]},i="Binary Trees",m={unversionedId:"data-structures/i-binary-trees",id:"data-structures/i-binary-trees",title:"Binary-trees",description:"- Understanding binary trees",source:"@site/docs/data-structures/i-binary-trees.md",sourceDirName:"data-structures",slug:"/data-structures/i-binary-trees",permalink:"/dsa/docs/data-structures/i-binary-trees",draft:!1,tags:[{label:"binary-trees",permalink:"/dsa/docs/tags/binary-trees"},{label:"balanced-binary-tree",permalink:"/dsa/docs/tags/balanced-binary-tree"},{label:"binary-tree-level-order-traversal",permalink:"/dsa/docs/tags/binary-tree-level-order-traversal"},{label:"diameter-of-binary-tree",permalink:"/dsa/docs/tags/diameter-of-binary-tree"},{label:"invert-binary-tree",permalink:"/dsa/docs/tags/invert-binary-tree"},{label:"maximum-depth-of-binary-tree",permalink:"/dsa/docs/tags/maximum-depth-of-binary-tree"},{label:"same-tree",permalink:"/dsa/docs/tags/same-tree"},{label:"serialize-and-deserialize-binary-tree",permalink:"/dsa/docs/tags/serialize-and-deserialize-binary-tree"},{label:"subtree-of-another-tree",permalink:"/dsa/docs/tags/subtree-of-another-tree"},{label:"symmetric-tree",permalink:"/dsa/docs/tags/symmetric-tree"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,id:"i-binary-trees",title:"Binary-trees",tags:["binary-trees","balanced-binary-tree","binary-tree-level-order-traversal","diameter-of-binary-tree","invert-binary-tree","maximum-depth-of-binary-tree","same-tree","serialize-and-deserialize-binary-tree","subtree-of-another-tree","symmetric-tree"]},sidebar:"docs",previous:{title:"Heaps",permalink:"/dsa/docs/data-structures/h-heaps"},next:{title:"Graphs",permalink:"/dsa/docs/data-structures/j-graphs"}},d={},u=[{value:"Problems related to binary trees",id:"problems-related-to-binary-trees",level:2},{value:"\u2197 See LeetCode Problem #110",id:"-see-leetcode-problem-110",level:3},{value:"\u2197 See LeetCode Problem #102",id:"-see-leetcode-problem-102",level:3},{value:"\u2197 See LeetCode Problem #543",id:"-see-leetcode-problem-543",level:3},{value:"\u2197 See LeetCode Problem #226",id:"-see-leetcode-problem-226",level:3},{value:"\u2197 See LeetCode Problem #104",id:"-see-leetcode-problem-104",level:3},{value:"\u2197 See LeetCode Problem #100",id:"-see-leetcode-problem-100",level:3},{value:"\u2197 See LeetCode Problem #297",id:"-see-leetcode-problem-297",level:3},{value:"\u2197 See LeetCode Problem #572",id:"-see-leetcode-problem-572",level:3},{value:"\u2197 See LeetCode Problem #101",id:"-see-leetcode-problem-101",level:3}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"binary-trees"},"Binary Trees"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Understanding binary trees "),(0,l.kt)("li",{parentName:"ul"},"Solved problems are presented in alphabetical order")),(0,l.kt)("h2",{id:"problems-related-to-binary-trees"},"Problems related to binary trees"),(0,l.kt)("details",null,(0,l.kt)("summary",null," Balanced Binary Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-110"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/balanced-binary-tree/"},"\u2197 See LeetCode Problem #110")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Binary Tree Level Order Traversal (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-102"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/binary-tree-level-order-traversal/"},"\u2197 See LeetCode Problem #102")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Diameter of Binary Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-543"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/diameter-of-binary-tree/"},"\u2197 See LeetCode Problem #543")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Invert Binary Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-226"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/invert-binary-tree/"},"\u2197 See LeetCode Problem #226")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Maximum Depth of Binary Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-104"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"},"\u2197 See LeetCode Problem #104")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Same Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-100"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/same-tree/"},"\u2197 See LeetCode Problem #100")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Serialize and Deserialize Binary Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-297"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"},"\u2197 See LeetCode Problem #297")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Subtree of Another Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-572"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/subtree-of-another-tree/"},"\u2197 See LeetCode Problem #572")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Symmetric Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-101"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/symmetric-tree/"},"\u2197 See LeetCode Problem #101")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))))}c.isMDXComponent=!0}}]);