"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[6418],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||s;return t?r.createElement(b,l(l({ref:n},u),{},{components:t})):r.createElement(b,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,l=new Array(s);l[0]=p;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<s;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(7294),a=t(6010);const s="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,l),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(7462),a=t(7294),s=t(6010),l=t(2389),i=t(7392),o=t(7094),c=t(2466);const u="tabList__CuJ",m="tabItem_LNqP";function p(e){var n;const{lazy:t,block:l,defaultValue:p,values:d,groupId:b,className:y}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??g.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),f=(0,i.l)(v,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,o.U)(),[w,O]=(0,a.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:S}=(0,c.o5)();if(null!=b){const e=k[b];null!=e&&e!==w&&v.some((n=>n.value===e))&&O(e)}const N=e=>{const n=e.currentTarget,t=E.indexOf(n),r=v[t].value;r!==w&&(S(n),O(r),null!=b&&x(b,String(r)))},T=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},y)},v.map((e=>{let{value:n,label:t,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>E.push(e),onKeyDown:T,onFocus:N,onClick:N},l,{className:(0,s.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":w===n})}),t??n)}))),t?(0,a.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function d(e){const n=(0,l.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=t(7462),a=(t(7294),t(3905)),s=t(5488),l=t(5162);const i={sidebar_position:2,id:"b-cyclic-sort",title:"Cyclic sort",tags:["cyclic-sort","missing-number","separate-1s-and-0s"]},o="Cyclic Sort",c={unversionedId:"algorithms/b-cyclic-sort",id:"algorithms/b-cyclic-sort",title:"Cyclic sort",description:"- Understanding cyclic sort",source:"@site/docs/algorithms/b-cyclic-sort.mdx",sourceDirName:"algorithms",slug:"/algorithms/b-cyclic-sort",permalink:"/dsa/docs/algorithms/b-cyclic-sort",draft:!1,tags:[{label:"cyclic-sort",permalink:"/dsa/docs/tags/cyclic-sort"},{label:"missing-number",permalink:"/dsa/docs/tags/missing-number"},{label:"separate-1s-and-0s",permalink:"/dsa/docs/tags/separate-1-s-and-0-s"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"b-cyclic-sort",title:"Cyclic sort",tags:["cyclic-sort","missing-number","separate-1s-and-0s"]},sidebar:"docs",previous:{title:"Binary Search",permalink:"/dsa/docs/algorithms/a-binary-search"},next:{title:"Recursion",permalink:"/dsa/docs/algorithms/c-recursion"}},u={},m=[{value:"Problems related to cyclic sort",id:"problems-related-to-cyclic-sort",level:2},{value:"\ufe0f\u2197 See LeetCode Problem #268",id:"\ufe0f-see-leetcode-problem-268",level:3},{value:"Problem Statement in the Code Block",id:"problem-statement-in-the-code-block",level:3}],p={toc:m};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cyclic-sort"},"Cyclic Sort"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understanding cyclic sort"),(0,a.kt)("li",{parentName:"ul"},"Solved problems are presented in alphabetical order")),(0,a.kt)("h2",{id:"problems-related-to-cyclic-sort"},"Problems related to cyclic sort"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"  Missing Number (Expand/Collapse) "),(0,a.kt)("h3",{id:"\ufe0f-see-leetcode-problem-268"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/missing-number/"},"\ufe0f\u2197 See LeetCode Problem #268")),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    //  Solved using the binary approach\n    //  Cyclic sorting can/will be added at a later time\n    static int missingNumber(int[] nums) {\n\n        //  nums.length will always be in the given array\n        //      but it won\'t appear as an index in the for loop\n        int missing = nums.length;\n\n        for (int i = 0; i < nums.length; i++) {\n            missing ^= nums[i] ^ i;\n        }\n\n        return missing;\n    }\n\n    public static void main(String[] args) {\n\n        // Example 1:\n        int[] nums1 = {3, 0, 1};\n        //  O/P: 2\n\n        // Example 2:\n        int[] nums2 = {0, 1};\n        //  O/P: 2\n\n        // Example 3:\n        int[] nums3 = {9, 6, 4, 2, 3, 5, 7, 0, 1};\n        //  O/P: 8\n\n        // Example 4:\n        int[] nums4 = {2, 0, 3};\n        //  O/P: 2\n        // 3^2^0^0^1^3^2\n\n        System.out.println("Example 1: " + missingNumber(nums1));\n        System.out.println("Example 2: " + missingNumber(nums2));\n        System.out.println("Example 3: " + missingNumber(nums3));\n        System.out.println("Example 4: " + missingNumber(nums4));\n\n    }\n }\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Separate 1s and 0s (Expand/Collapse) "),(0,a.kt)("h3",{id:"problem-statement-in-the-code-block"},"Problem Statement in the Code Block"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"import java.util.Arrays;\n\npublic class Solution {\n\n    /*  Problem Statement:\n    *   Given an array of 0s and 1s in random order. Separate 0s on the\n    *   left side and 1s on right side of the array. \n    */\n\n    public static int[] separate1sAndOs (int[] nums) {\n\n        int zeroIndex = 0;\n        int oneIndex = nums.length - 1;\n\n        while (zeroIndex < oneIndex) {\n            if (nums[zeroIndex] == 1) {\n                if (nums[oneIndex] != 1) {\n                    swapElements(nums, zeroIndex, oneIndex);\n                }\n                oneIndex--;\n            } else {\n                zeroIndex++;\n            }\n        }\n\n        return nums;\n    }\n\n    private static void swapElements (int[] nums, int index, int newIndex) {\n\n        int tempElement = nums[index];\n        nums[index] = nums[newIndex];\n        nums[newIndex] = tempElement;\n\n    }\n\n    public static void main(String[] args) {\n\n        int[] array1 = { 0, 1, 0, 1, 1, 1 };\n        int[] array2 = { 0, 1, 0, 1, 1, 1, 0, 0};\n        int[] array3 = {0};\n        int[] array4 = {1};\n        int[] array5 = {};\n\n        System.out.println(Arrays.toString(separate1sAndOs(array1)));\n        System.out.println(Arrays.toString(separate1sAndOs(array2)));\n        System.out.println(Arrays.toString(separate1sAndOs(array3)));\n        System.out.println(Arrays.toString(separate1sAndOs(array4)));\n        System.out.println(Arrays.toString(separate1sAndOs(array5)));\n\n    }\n}\n"))))))}d.isMDXComponent=!0}}]);