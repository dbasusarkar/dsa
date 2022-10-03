"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[9224],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),p=a,b=c["".concat(s,".").concat(p)]||c[p]||m[p]||o;return r?n.createElement(b,l(l({ref:t},d),{},{components:r})):n.createElement(b,l({ref:t},d))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(7462),a=r(7294),o=r(6010),l=r(2389),i=r(7392),s=r(7094),u=r(2466);const d="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:r,block:l,defaultValue:c,values:p,groupId:b,className:f}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??y.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),v=(0,i.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===c?c:c??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,s.U)(),[O,w]=(0,a.useState)(g),B=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==O&&h.some((t=>t.value===e))&&w(e)}const E=e=>{const t=e.currentTarget,r=B.indexOf(t),n=h[r].value;n!==O&&(j(t),w(n),null!=b&&x(b,String(n)))},T=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=B.indexOf(e.currentTarget)+1;r=B[t]??B[0];break}case"ArrowLeft":{const t=B.indexOf(e.currentTarget)-1;r=B[t]??B[B.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},f)},h.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>B.push(e),onKeyDown:T,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":O===t})}),r??t)}))),r?(0,a.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function p(e){const t=(0,l.Z)();return a.createElement(c,(0,n.Z)({key:String(t)},e))}},9976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=r(7462),a=(r(7294),r(3905)),o=r(5488),l=r(5162);const i={sidebar_position:11,id:"j-matrices",title:"Matrices",tags:["matrices","spiral-matrix"]},s="Matrices",u={unversionedId:"patterns/j-matrices",id:"patterns/j-matrices",title:"Matrices",description:"- Understanding matrices",source:"@site/docs/patterns/j-matrices.md",sourceDirName:"patterns",slug:"/patterns/j-matrices",permalink:"/dsa/docs/patterns/j-matrices",draft:!1,tags:[{label:"matrices",permalink:"/dsa/docs/tags/matrices"},{label:"spiral-matrix",permalink:"/dsa/docs/tags/spiral-matrix"}],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,id:"j-matrices",title:"Matrices",tags:["matrices","spiral-matrix"]},sidebar:"docs",previous:{title:"Dynamic Programming",permalink:"/dsa/docs/patterns/i-dp"},next:{title:"Math",permalink:"/dsa/docs/patterns/k-math"}},d={},m=[{value:"Problems related to matrices",id:"problems-related-to-matrices",level:2},{value:"\u2197 Flood Fill",id:"-flood-fill",level:3},{value:"\u2197 See LeetCode Problem #54",id:"-see-leetcode-problem-54",level:3}],c={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"matrices"},"Matrices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understanding matrices "),(0,a.kt)("li",{parentName:"ul"},"Solved problems are presented in alphabetical order")),(0,a.kt)("h2",{id:"problems-related-to-matrices"},"Problems related to matrices"),(0,a.kt)("details",null,(0,a.kt)("summary",null," Flood Fill (Expand/Collapse) "),(0,a.kt)("h3",{id:"-flood-fill"},(0,a.kt)("a",{parentName:"h3",href:"/dsa/docs/data-structures/k-graphs"},"\u2197 Flood Fill"))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Spiral Matrix (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-54"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/spiral-matrix/"},"\u2197 See LeetCode Problem #54")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"import java.util.List;\nimport java.util.ArrayList;\n\npublic class Solution {\n    public static List<Integer> spiralOrder(int[][] matrix) {\n\n        List<Integer> elementsSpiralOrder = new ArrayList<>();\n\n        int topBoundary = 0;\n        int leftBoundary = 0;\n        //  matrix[0].length gives number of columns\n        int rightBoundary = matrix[0].length - 1;\n        //  matrix.length gives number of rows\n        int bottomBoundary = matrix.length - 1;\n\n        while (elementsSpiralOrder.size() <\n                matrix.length * matrix[0].length) {\n            //  Add elements in the top row (moving left to right)\n            for (int i = leftBoundary; i <= rightBoundary; i++) {\n                elementsSpiralOrder.add(matrix[topBoundary][i]);\n            }\n\n            //  Add elements in the right column (moving downwards)\n            for (int i = topBoundary + 1; i <= bottomBoundary; i++) {\n                elementsSpiralOrder.add(matrix[i][rightBoundary]);\n            }\n\n            //  Check topBoundary is not same as bottomBoundary\n            if (topBoundary < bottomBoundary) {\n\n                //  Add elements in the bottom row (moving right to left)\n                for (int i = rightBoundary - 1; i >= leftBoundary; i--) {\n                    elementsSpiralOrder.add(matrix[bottomBoundary][i]);\n                }\n\n            }\n\n            //  Check rightBoundary is not same as leftBoundary\n            if (leftBoundary < rightBoundary) {\n\n                //  Add elements in the left column (moving upwards)\n                //  i > topBoundary because\n                //      topBoundary element has already been added\n                //      unlike elements in the for loops above this for loop\n                for (int i = bottomBoundary - 1; i > topBoundary; i--) {\n                    elementsSpiralOrder.add(matrix[i][leftBoundary]);\n                }\n            }\n\n            leftBoundary++;\n            topBoundary++;\n            rightBoundary--;\n            bottomBoundary--;\n        }\n\n        return elementsSpiralOrder;\n\n    }\n\n    public static void main(String[] args) {\n\n        // Example 1:\n        int[][] matrix1 = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};\n        //  O/P: [1,2,3,6,9,8,7,4,5]\n\n        // Example 2:\n        int[][] matrix2 = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};\n        //  O/P: [1,2,3,4,8,12,11,10,9,5,6,7]\n\n        System.out.println(spiralOrder(matrix1));\n        System.out.println(spiralOrder(matrix2));\n\n    }\n}\n"))))))}p.isMDXComponent=!0}}]);