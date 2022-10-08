"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[6248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,b=d["".concat(l,".").concat(p)]||d[p]||m[p]||s;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(7462),a=n(7294),s=n(6010),o=n(2389),i=n(7392),l=n(7094),u=n(2466);const c="tabList__CuJ",m="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:p,groupId:b,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=p??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,i.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,l.U)(),[P,L]=(0,a.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:S}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==P&&v.some((t=>t.value===e))&&L(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),r=v[n].value;r!==P&&(S(t),L(r),null!=b&&w(b,String(r)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},h)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:P===t?0:-1,"aria-selected":P===t,key:t,ref:e=>T.push(e),onKeyDown:j,onFocus:O,onClick:O},o,{className:(0,s.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":P===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===P))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==P})))))}function p(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},8346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),s=n(5488),o=n(5162);const i={sidebar_position:3,id:"c-recursion",title:"Recursion",tags:["recursion","permutations","subsets"]},l="Recursion",u={unversionedId:"algorithms/c-recursion",id:"algorithms/c-recursion",title:"Recursion",description:"- Understanding recursion",source:"@site/docs/algorithms/c-recursion.mdx",sourceDirName:"algorithms",slug:"/algorithms/c-recursion",permalink:"/dsa/docs/algorithms/c-recursion",draft:!1,tags:[{label:"recursion",permalink:"/dsa/docs/tags/recursion"},{label:"permutations",permalink:"/dsa/docs/tags/permutations"},{label:"subsets",permalink:"/dsa/docs/tags/subsets"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"c-recursion",title:"Recursion",tags:["recursion","permutations","subsets"]},sidebar:"docs",previous:{title:"Cyclic sort",permalink:"/dsa/docs/algorithms/b-cyclic-sort"},next:{title:"Backtracking",permalink:"/dsa/docs/algorithms/d-backtracking"}},c={},m=[{value:"Problems related to recursion",id:"problems-related-to-recursion",level:2},{value:"\u2197 Binary Tree Right Side View",id:"-binary-tree-right-side-view",level:3},{value:"\u2197 Construct Binary Tree from Preorder and Inorder Traversal",id:"-construct-binary-tree-from-preorder-and-inorder-traversal",level:3},{value:"\u2197 Letter Combinations of a Phone Number",id:"-letter-combinations-of-a-phone-number",level:3},{value:"\u2197 Lowest Common Ancestor of a Binary Tree",id:"-lowest-common-ancestor-of-a-binary-tree",level:3},{value:"\u2197 See LeetCode Problem #46",id:"-see-leetcode-problem-46",level:3},{value:"\u2197 See LeetCode Problem #78",id:"-see-leetcode-problem-78",level:3}],d={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recursion"},"Recursion"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understanding recursion"),(0,a.kt)("li",{parentName:"ul"},"Solved problems are presented in alphabetical order")),(0,a.kt)("h2",{id:"problems-related-to-recursion"},"Problems related to recursion"),(0,a.kt)("details",null,(0,a.kt)("summary",null," Binary Tree Right Side View "),(0,a.kt)("h3",{id:"-binary-tree-right-side-view"},(0,a.kt)("a",{parentName:"h3",href:"/dsa/docs/data-structures/j-binary-trees"},"\u2197 Binary Tree Right Side View"))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Construct Binary Tree from Preorder and Inorder Traversal "),(0,a.kt)("h3",{id:"-construct-binary-tree-from-preorder-and-inorder-traversal"},(0,a.kt)("a",{parentName:"h3",href:"/dsa/docs/data-structures/j-binary-trees"},"\u2197 Construct Binary Tree from Preorder and Inorder Traversal"))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Letter Combinations of a Phone Number "),(0,a.kt)("h3",{id:"-letter-combinations-of-a-phone-number"},(0,a.kt)("a",{parentName:"h3",href:"/dsa/docs/algorithms/d-backtracking"},"\u2197 Letter Combinations of a Phone Number"))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Lowest Common Ancestor of a Binary Tree "),(0,a.kt)("h3",{id:"-lowest-common-ancestor-of-a-binary-tree"},(0,a.kt)("a",{parentName:"h3",href:"/dsa/docs/data-structures/j-binary-trees"},"\u2197 Lowest Common Ancestor of a Binary Tree"))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Permutations "),(0,a.kt)("h3",{id:"-see-leetcode-problem-46"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/permutations/"},"\u2197 See LeetCode Problem #46")),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Deque;\nimport java.util.ArrayDeque;\n\npublic class Solution {\n    public static List<List<Integer>> permute(int[] nums) {\n\n        int leftIndex = 0;\n        int matchedIndex = 0;\n\n        List<Integer> matchedList = new ArrayList<>();\n        List <List<Integer>> resultLists = new ArrayList<>();\n                //  Output list of lists to be returned\n        List<List<Integer>> outputPermutations = new ArrayList<>();\n\n        //  Queue to create a list of all permutations\n        Deque<List<Integer>> allPermutations = new ArrayDeque<>();\n\n        //  Add (to the list of all permutations) an empty list first\n        allPermutations.add(new ArrayList<>());\n\n        for (int currentElement : nums) {\n\n            int sizeAllPermutations = allPermutations.size();\n\n            for (int i = 0; i < sizeAllPermutations; i++){\n                //  Remove and store that last (old) permutation\n                List<Integer> oldPermutation = allPermutations.poll();\n\n                //  Create new permutation\n                //  Add the currentElement at every index\n                for (int j = 0; j <= oldPermutation.size(); j++) {\n\n                    List<Integer> newPermutation = new ArrayList<>(oldPermutation);\n                    newPermutation.add(j, currentElement);\n\n                    if (newPermutation.size() == nums.length) {\n                       outputPermutations.add(newPermutation);\n                    } else {\n                        allPermutations.add(newPermutation);\n                    }\n\n                }\n\n            }\n\n        }\n\n        return outputPermutations;\n\n    }\n\n    public static void main(String[] args) {\n\n        // Example 1:\n        int[] nums1 = {1,2,3};\n        //  O/P: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n\n        // Example 2:\n        int[] nums2 = {0,1};\n        //  O/P: [[0,1],[1,0]]\n\n        // Example 3:\n        int[] nums3 = {1};\n        //  O/P: [[1]]\n\n        System.out.println(permute(nums1));\n        System.out.println(permute(nums2));\n        System.out.println(permute(nums3));\n\n    }\n}\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Subsets "),(0,a.kt)("h3",{id:"-see-leetcode-problem-78"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/subsets/"},"\u2197 See LeetCode Problem #78")),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"import java.util.List;\nimport java.util.ArrayList;\n\npublic class Solution {\n    public static List<List<Integer>> subsets(int[] nums) {\n\n        //  Using Breadth First Search approach\n\n        //  Declare the ouput set that is the set of all sets\n        List<List<Integer>> outputSet = new ArrayList<>();\n\n        //  Add an empty subset to the output list\n        outputSet.add(new ArrayList<>());\n\n        for (int currentElement : nums) {\n\n            //  Store the size of the current output set\n            int currentSize = outputSet.size();\n\n            //  Add the current element to the existing subsets\n            //      in the current output set\n            for (int i = 0; i < currentSize; i++) {\n\n                //  Declare the new subset created with current subset\n                //      element from the output set\n                List<Integer> newSubset =\n                        new ArrayList<>(outputSet.get(i));\n\n                //  Add the current element from the given array (nums)\n                //      to the new subset\n                newSubset.add(currentElement);\n\n                //  Add the new subset to the output list\n                outputSet.add(newSubset);\n\n            }\n\n        }\n\n        return outputSet;\n    }\n\n    public static void main (String[] args) {\n        // Example 1:\n        int[] nums1 = {1,2,3};\n        //  O/P: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n\n        // Example 2:\n        int[] nums2 = {0};\n        //  O/P: [[],[0]]\n\n        System.out.println(subsets(nums1));\n        System.out.println(subsets(nums2));\n\n    }\n}\n"))))))}p.isMDXComponent=!0}}]);