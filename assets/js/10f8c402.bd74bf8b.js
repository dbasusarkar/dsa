"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[3208],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),i=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(m.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=i(a),d=l,b=c["".concat(m,".").concat(d)]||c[d]||p[d]||r;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),l=a(7294),r=a(6010),o=a(2389),s=a(7392),m=a(7094),i=a(2466);const u="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:a,block:o,defaultValue:c,values:d,groupId:b,className:v}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=d??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,s.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==k&&!y.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:w}=(0,m.U)(),[N,S]=(0,l.useState)(k),T=[],{blockElementScrollPositionUntilNextRender:x}=(0,i.o5)();if(null!=b){const e=f[b];null!=e&&e!==N&&y.some((t=>t.value===e))&&S(e)}const L=e=>{const t=e.currentTarget,a=T.indexOf(t),n=y[a].value;n!==N&&(x(t),S(n),null!=b&&w(b,String(n)))},j=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},v)},y.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:j,onFocus:L,onClick:L},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),a??t)}))),a?(0,l.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return l.createElement(c,(0,n.Z)({key:String(t)},e))}},3277:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),r=a(5488),o=a(5162);const s={sidebar_position:1,id:"a-arrays",title:"Arrays",tags:["arrays","two-sum"]},m="Arrays",i={unversionedId:"data-structures/a-arrays",id:"data-structures/a-arrays",title:"Arrays",description:"Best Time to Buy and Sell Stocks (Expand/Collapse)",source:"@site/docs/data-structures/a-arrays.md",sourceDirName:"data-structures",slug:"/data-structures/a-arrays",permalink:"/dsa/docs/data-structures/a-arrays",draft:!1,tags:[{label:"arrays",permalink:"/dsa/docs/tags/arrays"},{label:"two-sum",permalink:"/dsa/docs/tags/two-sum"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"a-arrays",title:"Arrays",tags:["arrays","two-sum"]},sidebar:"docs",previous:{title:"Data Structures",permalink:"/dsa/docs/category/data-structures"},next:{title:"Strings",permalink:"/dsa/docs/data-structures/b-strings"}},u={},p=[{value:"\u2049\ufe0f See LeetCode Problem #121",id:"\ufe0f-see-leetcode-problem-121",level:3},{value:"See LeetCode Problem #217",id:"see-leetcode-problem-217",level:3},{value:"See LeetCode Problem #57",id:"see-leetcode-problem-57",level:3},{value:"See LeetCode Problem #169",id:"see-leetcode-problem-169",level:3},{value:"See LeetCode Problem #1",id:"see-leetcode-problem-1",level:3},{value:"Problem statement from LeetCode",id:"problem-statement-from-leetcode",level:3},{value:"Problem statement from LeetCode",id:"problem-statement-from-leetcode-1",level:3},{value:"Problem statement from LeetCode",id:"problem-statement-from-leetcode-2",level:3},{value:"Problem statement from LeetCode",id:"problem-statement-from-leetcode-3",level:3},{value:"Problem statement from LeetCode",id:"problem-statement-from-leetcode-4",level:3},{value:"Problem statement from LeetCode",id:"problem-statement-from-leetcode-5",level:3},{value:"Problem statement from LeetCode",id:"problem-statement-from-leetcode-6",level:3},{value:"Problem statement from LeetCode",id:"problem-statement-from-leetcode-7",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"arrays"},"Arrays"),(0,l.kt)("details",null,(0,l.kt)("summary",null," Best Time to Buy and Sell Stocks (Expand/Collapse) "),(0,l.kt)("h3",{id:"\ufe0f-see-leetcode-problem-121"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"},"\u2049\ufe0f See LeetCode Problem #121")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Contains Duplicate (Expand/Collapse) "),(0,l.kt)("h3",{id:"see-leetcode-problem-217"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/contains-duplicate/"},"See LeetCode Problem #217")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Insert Interval (Expand/Collapse) "),(0,l.kt)("h3",{id:"see-leetcode-problem-57"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/insert-interval/"},"See LeetCode Problem #57")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Majority Element (Expand/Collapse) "),(0,l.kt)("h3",{id:"see-leetcode-problem-169"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/majority-element/"},"See LeetCode Problem #169")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Two Sum (Expand/Collapse) "),(0,l.kt)("h3",{id:"see-leetcode-problem-1"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/two-sum/"},"See LeetCode Problem #1")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"import java.util.Arrays;\nimport java.util.HashMap;\nimport java.util.Map;\n\npublic class Solution {\n\n//    //  Brute force approach\n//    public int[] twoSum(int[] nums, int target) {\n//        for (int i = 0; i < nums.length; i++) {\n//            for (int j = i + 1; j < nums.length; j++) {\n//                if (nums[j] == target - nums[i]) {\n//                    return new int[]{i, j};\n//              }\n//          }\n//        }\n//        return null;\n//    }\n\n    //  O(N) time complexity\n    //  2-pass HashMap\n//      static int[] twoSum(int[] nums, int target) {\n//          Map<Integer, Integer> hmap = new HashMap<>();\n//          for (int i = 0; i < nums.length; i++) {\n//              hmap.put(nums[i], i);\n//          }\n//\n//          for (int i = 0; i < nums.length; i++) {\n//              int complement = target - nums[i];\n//              if (hmap.containsKey(complement) && hmap.get(complement) != i) {\n//                  return new int[] {i, hmap.get(complement)};\n//              }\n//          }\n//          return null;\n//      }\n\n    //  O(N) time complexity\n    //  1-pass HashMap\n    static int[] twoSum(int[] nums, int target) {\n        Map<Integer, Integer> hmap = new HashMap<>();\n\n        for (int i = 0; i < nums.length; i++) {\n            int complement = target - nums[i];\n            if (hmap.containsKey(complement)) {\n                return new int[] {hmap.get(complement), i};\n            }\n            hmap.put(nums[i], i);\n        }\n        return null;\n    }\n\n    public static void main(String[] args) {\n        //Output: [0,1]\n        int[] nums1 = {2,7,11,15};\n        int target1 = 9;\n\n        //Output: [1,2]\n        int[] nums2 = {3,2,4};\n        int target2 = 6;\n\n        //Output: [0,1]\n        int[] nums3 = {3,3};\n        int target3 = 6;\n\n        System.out.println(Arrays.toString(twoSum(nums1, target1)));\n        System.out.println(Arrays.toString(twoSum(nums2, target2)));\n        System.out.println(Arrays.toString(twoSum(nums3, target3)));\n    }\n}\n"))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Problem Name 2 (Expand/Collapse) "),(0,l.kt)("h3",{id:"problem-statement-from-leetcode"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/two-sum/"},"Problem statement from LeetCode")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Problem Name 3 (Expand/Collapse) "),(0,l.kt)("h3",{id:"problem-statement-from-leetcode-1"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/two-sum/"},"Problem statement from LeetCode")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Problem Name 4 (Expand/Collapse) "),(0,l.kt)("h3",{id:"problem-statement-from-leetcode-2"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/two-sum/"},"Problem statement from LeetCode")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Problem Name 5 (Expand/Collapse) "),(0,l.kt)("h3",{id:"problem-statement-from-leetcode-3"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/two-sum/"},"Problem statement from LeetCode")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Problem Name 6 (Expand/Collapse) "),(0,l.kt)("h3",{id:"problem-statement-from-leetcode-4"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/two-sum/"},"Problem statement from LeetCode")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Problem Name 7 (Expand/Collapse) "),(0,l.kt)("h3",{id:"problem-statement-from-leetcode-5"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/two-sum/"},"Problem statement from LeetCode")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Problem Name 8 (Expand/Collapse) "),(0,l.kt)("h3",{id:"problem-statement-from-leetcode-6"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/two-sum/"},"Problem statement from LeetCode")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,l.kt)("details",null,(0,l.kt)("summary",null," Problem Name 9 (Expand/Collapse) "),(0,l.kt)("h3",{id:"problem-statement-from-leetcode-7"},(0,l.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/two-sum/"},"Problem statement from LeetCode")),(0,l.kt)(r.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))))}d.isMDXComponent=!0}}]);