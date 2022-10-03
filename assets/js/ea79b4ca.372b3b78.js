"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[786],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>p});var a=t(7294);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,l=function(e,r){if(null==e)return{};var t,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=a.createContext({}),m=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=m(e.components);return a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,l=e.mdxType,n=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=m(t),p=l,b=c["".concat(i,".").concat(p)]||c[p]||u[p]||n;return t?a.createElement(b,s(s({ref:r},d),{},{components:t})):a.createElement(b,s({ref:r},d))}));function p(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var n=t.length,s=new Array(n);s[0]=c;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:l,s[1]=o;for(var m=2;m<n;m++)s[m]=t[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>s});var a=t(7294),l=t(6010);const n="tabItem_Ymn6";function s(e){let{children:r,hidden:t,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(n,s),hidden:t},r)}},5488:(e,r,t)=>{t.d(r,{Z:()=>p});var a=t(7462),l=t(7294),n=t(6010),s=t(2389),o=t(7392),i=t(7094),m=t(2466);const d="tabList__CuJ",u="tabItem_LNqP";function c(e){var r;const{lazy:t,block:s,defaultValue:c,values:p,groupId:b,className:y}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??v.map((e=>{let{props:{value:r,label:t,attributes:a}}=e;return{value:r,label:t,attributes:a}})),k=(0,o.l)(h,((e,r)=>e.value===r.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(r=v.find((e=>e.props.default)))?void 0:r.props.value)??v[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:T}=(0,i.U)(),[N,S]=(0,l.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,m.o5)();if(null!=b){const e=g[b];null!=e&&e!==N&&h.some((r=>r.value===e))&&S(e)}const j=e=>{const r=e.currentTarget,t=w.indexOf(r),a=h[t].value;a!==N&&(x(r),S(a),null!=b&&T(b,String(a)))},L=e=>{var r;let t=null;switch(e.key){case"ArrowRight":{const r=w.indexOf(e.currentTarget)+1;t=w[r]??w[0];break}case"ArrowLeft":{const r=w.indexOf(e.currentTarget)-1;t=w[r]??w[w.length-1];break}}null==(r=t)||r.focus()};return l.createElement("div",{className:(0,n.Z)("tabs-container",d)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":s},y)},h.map((e=>{let{value:r,label:t,attributes:s}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===r?0:-1,"aria-selected":N===r,key:r,ref:e=>w.push(e),onKeyDown:L,onFocus:j,onClick:j},s,{className:(0,n.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":N===r})}),t??r)}))),t?(0,l.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,r)=>(0,l.cloneElement)(e,{key:r,hidden:e.props.value!==N})))))}function p(e){const r=(0,s.Z)();return l.createElement(c,(0,a.Z)({key:String(r)},e))}},3757:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var a=t(7462),l=(t(7294),t(3905)),n=t(5488),s=t(5162);const o={sidebar_position:9,id:"j-binary-trees",title:"Binary Trees",tags:["binary-trees","balanced-binary-tree","binary-tree-level-order-traversal","construct-binary-tree-from-preorder-and-inorder-traversal","diameter-of-binary-tree","invert-binary-tree","maximum-depth-of-binary-tree","same-tree","serialize-and-deserialize-binary-tree","subtree-of-another-tree","symmetric-tree"]},i="Binary Trees",m={unversionedId:"data-structures/j-binary-trees",id:"data-structures/j-binary-trees",title:"Binary Trees",description:"- Understanding binary trees",source:"@site/docs/data-structures/j-binary-trees.md",sourceDirName:"data-structures",slug:"/data-structures/j-binary-trees",permalink:"/dsa/docs/data-structures/j-binary-trees",draft:!1,tags:[{label:"binary-trees",permalink:"/dsa/docs/tags/binary-trees"},{label:"balanced-binary-tree",permalink:"/dsa/docs/tags/balanced-binary-tree"},{label:"binary-tree-level-order-traversal",permalink:"/dsa/docs/tags/binary-tree-level-order-traversal"},{label:"construct-binary-tree-from-preorder-and-inorder-traversal",permalink:"/dsa/docs/tags/construct-binary-tree-from-preorder-and-inorder-traversal"},{label:"diameter-of-binary-tree",permalink:"/dsa/docs/tags/diameter-of-binary-tree"},{label:"invert-binary-tree",permalink:"/dsa/docs/tags/invert-binary-tree"},{label:"maximum-depth-of-binary-tree",permalink:"/dsa/docs/tags/maximum-depth-of-binary-tree"},{label:"same-tree",permalink:"/dsa/docs/tags/same-tree"},{label:"serialize-and-deserialize-binary-tree",permalink:"/dsa/docs/tags/serialize-and-deserialize-binary-tree"},{label:"subtree-of-another-tree",permalink:"/dsa/docs/tags/subtree-of-another-tree"},{label:"symmetric-tree",permalink:"/dsa/docs/tags/symmetric-tree"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,id:"j-binary-trees",title:"Binary Trees",tags:["binary-trees","balanced-binary-tree","binary-tree-level-order-traversal","construct-binary-tree-from-preorder-and-inorder-traversal","diameter-of-binary-tree","invert-binary-tree","maximum-depth-of-binary-tree","same-tree","serialize-and-deserialize-binary-tree","subtree-of-another-tree","symmetric-tree"]},sidebar:"docs",previous:{title:"Binary Search Trees",permalink:"/dsa/docs/data-structures/i-binary-search-trees"},next:{title:"Graphs",permalink:"/dsa/docs/data-structures/k-graphs"}},d={},u=[{value:"Problems related to binary trees",id:"problems-related-to-binary-trees",level:2},{value:"\u2197 See LeetCode Problem #110",id:"-see-leetcode-problem-110",level:3},{value:"\u2197 See LeetCode Problem #102",id:"-see-leetcode-problem-102",level:3},{value:"\u2197 See LeetCode Problem #105",id:"-see-leetcode-problem-105",level:3},{value:"\u2197 See LeetCode Problem #543",id:"-see-leetcode-problem-543",level:3},{value:"\u2197 See LeetCode Problem #226",id:"-see-leetcode-problem-226",level:3},{value:"\u2197 See LeetCode Problem #104",id:"-see-leetcode-problem-104",level:3},{value:"\u2197 See LeetCode Problem #100",id:"-see-leetcode-problem-100",level:3},{value:"\u2197 See LeetCode Problem #297",id:"-see-leetcode-problem-297",level:3},{value:"\u2197 See LeetCode Problem #572",id:"-see-leetcode-problem-572",level:3},{value:"\u2197 See LeetCode Problem #101",id:"-see-leetcode-problem-101",level:3}],c={toc:u};function p(e){let{components:r,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"binary-trees"},"Binary Trees"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Understanding binary trees "),(0,l.kt)("li",{parentName:"ul"},"Solved problems are presented in alphabetical order")),(0,l.kt)("h2",{id:"problems-related-to-binary-trees"},"Problems related to binary trees"),(0,l.kt)("details",null,(0,l.kt)("summary",null," Balanced Binary Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-110"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/balanced-binary-tree/"},"\u2197 See LeetCode Problem #110")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Binary Tree Level Order Traversal (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-102"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/binary-tree-level-order-traversal/"},"\u2197 See LeetCode Problem #102")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Construct Binary Tree from Preorder and Inorder Traversal (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-105"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"},"\u2197 See LeetCode Problem #105")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Diameter of Binary Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-543"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/diameter-of-binary-tree/"},"\u2197 See LeetCode Problem #543")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Invert Binary Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-226"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/invert-binary-tree/"},"\u2197 See LeetCode Problem #226")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Maximum Depth of Binary Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-104"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"},"\u2197 See LeetCode Problem #104")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Same Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-100"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/same-tree/"},"\u2197 See LeetCode Problem #100")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Serialize and Deserialize Binary Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-297"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"},"\u2197 See LeetCode Problem #297")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Subtree of Another Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-572"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/subtree-of-another-tree/"},"\u2197 See LeetCode Problem #572")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Symmetric Tree (Expand/Collapse) "),(0,l.kt)("h3",{id:"-see-leetcode-problem-101"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/symmetric-tree/"},"\u2197 See LeetCode Problem #101")),(0,l.kt)(n.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))))}p.isMDXComponent=!0}}]);