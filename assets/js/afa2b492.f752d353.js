"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[6248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(7294),a=n(6010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,s),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),i=n(6010),s=n(2389),o=n(7392),l=n(7094),u=n(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:n,block:s,defaultValue:p,values:d,groupId:b,className:h}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,o.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:S}=(0,l.U)(),[w,L]=(0,a.useState)(y),P=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==w&&f.some((t=>t.value===e))&&L(e)}const E=e=>{const t=e.currentTarget,n=P.indexOf(t),r=f[n].value;r!==w&&(x(t),L(r),null!=b&&S(b,String(r)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=P.indexOf(e.currentTarget)+1;n=P[t]??P[0];break}case"ArrowLeft":{const t=P.indexOf(e.currentTarget)-1;n=P[t]??P[P.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},h)},f.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>P.push(e),onKeyDown:O,onFocus:E,onClick:E},s,{className:(0,i.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function d(e){const t=(0,s.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},8346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var r=n(7462),a=(n(7294),n(3905)),i=n(5488),s=n(5162);const o={sidebar_position:3,id:"c-recursion",title:"Recursion",tags:["recursion","letter-combinations-of-a-phone-no","permutations","subsets"]},l="Recursion",u={unversionedId:"algorithms/c-recursion",id:"algorithms/c-recursion",title:"Recursion",description:"- Understanding recursion",source:"@site/docs/algorithms/c-recursion.mdx",sourceDirName:"algorithms",slug:"/algorithms/c-recursion",permalink:"/dsa/docs/algorithms/c-recursion",draft:!1,tags:[{label:"recursion",permalink:"/dsa/docs/tags/recursion"},{label:"letter-combinations-of-a-phone-no",permalink:"/dsa/docs/tags/letter-combinations-of-a-phone-no"},{label:"permutations",permalink:"/dsa/docs/tags/permutations"},{label:"subsets",permalink:"/dsa/docs/tags/subsets"}],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"c-recursion",title:"Recursion",tags:["recursion","letter-combinations-of-a-phone-no","permutations","subsets"]},sidebar:"docs",previous:{title:"Cyclic sort",permalink:"/dsa/docs/algorithms/b-cyclic-sort"},next:{title:"Backtracking",permalink:"/dsa/docs/algorithms/d-backtracking"}},c={},m=[{value:"Problems related to recursion",id:"problems-related-to-recursion",level:2},{value:"\u2197 See LeetCode Problem #17",id:"-see-leetcode-problem-17",level:3},{value:"\u2197 See LeetCode Problem #46",id:"-see-leetcode-problem-46",level:3},{value:"\u2197 See LeetCode Problem #78",id:"-see-leetcode-problem-78",level:3}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"recursion"},"Recursion"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understanding recursion"),(0,a.kt)("li",{parentName:"ul"},"Solved problems are presented in alphabetical order")),(0,a.kt)("h2",{id:"problems-related-to-recursion"},"Problems related to recursion"),(0,a.kt)("details",null,(0,a.kt)("summary",null," Letter Combinations of a Phone Number (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-17"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/"},"\u2197 See LeetCode Problem #17")),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Map;\n\npublic class Solution {\n    //  Decrlare a list of strings\n    //      to return all the letter combinations\n    //  Each element in the ArrayList =\n    //      a possible letter combination\n    private static List<String> resultList = new ArrayList<>();\n\n    //  Declare a hashmap\n    //      to store the letter combinations (strings, as values)\n    //      for correspoding digits (characters, as keys)\n    private static Map<Character, String> letterMap = Map.of(\n            \'2\', "abc",\n            \'3\', "def",\n            \'4\', "ghi",\n            \'5\', "jkl",\n            \'6\', "mno",\n            \'7\', "pqrs",\n            \'8\', "tuv",\n            \'9\', "wxyz"\n    );\n\n    //  Declare a string (to store a given digit)\n    //     that can be accessed from a helper function\n    private static String digitsString;\n\n    //  Create a helper function to make recursive calls and backtrack\n    private static void backtrackHelper(int index, StringBuilder combination) {\n\n        //  Backtrack to the loop immediately following the recursive method call\n        //      if a proper combination is found\n        //      (after adding the combination to the output list)\n        if (combination.length() == digitsString.length()) {\n            resultList.add(combination.toString());\n            return;\n        }\n\n        //  Declare and store letters from the letterMap\n        //      for a given key obtained from\n        //      getting the digit at a given index\n        String letters = letterMap.get(digitsString.charAt(index));\n\n        //  for-each loop to iterate through all the letters in\n        //      the string "letters"\n        for (char c : letters.toCharArray()) {\n            combination.append(c);\n\n            //  Make a recursive call\n            backtrackHelper(++index, combination);\n\n            //  Return back from inside the if loop with the condition:\n            //      (combination.length() == digitsString.length())\n            //  Backtrack by deleting the last character/letter\n            //      in the current combination\n            combination.deleteCharAt(combination.length() - 1);\n\n            //  Also, update the index to for backtracking\n            //      by subtracting 1 from the current index\n            index--;\n        }\n\n    }\n\n    public static List<String> letterCombinations(String digits) {\n        if (digits.length() == 0) {\n            return resultList;\n        }\n\n        digitsString = digits;\n        backtrackHelper(0, new StringBuilder());\n\n        return resultList;\n    }\n\n    public static void main(String[] args) {\n        // Example 1:\n        String digits1 = "23";\n        //  O/P: ["ad","ae","af","bd","be","bf","cd","ce","cf"]\n\n        // Example 2:\n        String digits2 = "";\n        //  O/P: []\n\n        // Example 3:\n        String digits3 = "2";\n        //  O/P: ["a","b","c"]\n\n        // Example 4:\n        String digits4 = "2345";\n        //  INCORRECT - O/P: ["ad","ae","af","bd","be","bf","cd","ce","cf"]\n\n//        System.out.println(letterCombinations(digits1));\n//        System.out.println(letterCombinations(digits2));\n//        System.out.println(letterCombinations(digits3));\n        System.out.println(letterCombinations(digits4));\n\n    }\n}\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Permutations (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-46"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/permutations/"},"\u2197 See LeetCode Problem #46")),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"import java.util.List;\nimport java.util.ArrayList;\nimport java.util.Deque;\nimport java.util.ArrayDeque;\n\npublic class Solution {\n    public static List<List<Integer>> permute(int[] nums) {\n\n        int leftIndex = 0;\n        int matchedIndex = 0;\n\n        List<Integer> matchedList = new ArrayList<>();\n        List <List<Integer>> resultLists = new ArrayList<>();\n                //  Output list of lists to be returned\n        List<List<Integer>> outputPermutations = new ArrayList<>();\n\n        //  Queue to create a list of all permutations\n        Deque<List<Integer>> allPermutations = new ArrayDeque<>();\n\n        //  Add (to the list of all permutations) an empty list first\n        allPermutations.add(new ArrayList<>());\n\n        for (int currentElement : nums) {\n\n            int sizeAllPermutations = allPermutations.size();\n\n            for (int i = 0; i < sizeAllPermutations; i++){\n                //  Remove and store that last (old) permutation\n                List<Integer> oldPermutation = allPermutations.poll();\n\n                //  Create new permutation\n                //  Add the currentElement at every index\n                for (int j = 0; j <= oldPermutation.size(); j++) {\n\n                    List<Integer> newPermutation = new ArrayList<>(oldPermutation);\n                    newPermutation.add(j, currentElement);\n\n                    if (newPermutation.size() == nums.length) {\n                       outputPermutations.add(newPermutation);\n                    } else {\n                        allPermutations.add(newPermutation);\n                    }\n\n                }\n\n            }\n\n        }\n\n        return outputPermutations;\n\n    }\n\n    public static void main(String[] args) {\n\n        // Example 1:\n        int[] nums1 = {1,2,3};\n        //  O/P: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\n\n        // Example 2:\n        int[] nums2 = {0,1};\n        //  O/P: [[0,1],[1,0]]\n\n        // Example 3:\n        int[] nums3 = {1};\n        //  O/P: [[1]]\n\n        System.out.println(permute(nums1));\n        System.out.println(permute(nums2));\n        System.out.println(permute(nums3));\n\n    }\n}\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Subsets (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-78"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/subsets/"},"\u2197 See LeetCode Problem #78")),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"import java.util.List;\nimport java.util.ArrayList;\n\npublic class Solution {\n    //Given an integer array nums of unique elements, return all possible subsets (\n    //the power set).\n    //\n    // The solution set must not contain duplicate subsets. Return the solution in\n    //any order.\n    //\n    //\n    // Example 1:\n    //\n    //\n    //Input: nums = [1,2,3]\n    //Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n    //\n    //\n    // Example 2:\n    //\n    //\n    //Input: nums = [0]\n    //Output: [[],[0]]\n    //\n    //\n    //\n    // Constraints:\n    //\n    //\n    // 1 <= nums.length <= 10\n    // -10 <= nums[i] <= 10\n    // All the numbers of nums are unique.\n    //\n    //\n    // Related Topics Array Backtracking Bit Manipulation \ud83d\udc4d 11734 \ud83d\udc4e 170\n\n\n//leetcode submit region begin(Prohibit modification and deletion)\n//class Solution {\n    public static List<List<Integer>> subsets(int[] nums) {\n\n        //  Using Breadth First Search approach\n\n        //  Declare the ouput set that is the set of all sets\n        List<List<Integer>> outputSet = new ArrayList<>();\n\n        //  Add an empty subset to the output list\n        outputSet.add(new ArrayList<>());\n\n        for (int currentElement : nums) {\n\n            //  Store the size of the current output set\n            int currentSize = outputSet.size();\n\n            //  Add the current element to the existing subsets\n            //      in the current output set\n            for (int i = 0; i < currentSize; i++) {\n\n                //  Declare the new subset created with current subset\n                //      element from the output set\n                List<Integer> newSubset =\n                        new ArrayList<>(outputSet.get(i));\n\n                //  Add the current element from the given array (nums)\n                //      to the new subset\n                newSubset.add(currentElement);\n\n                //  Add the new subset to the output list\n                outputSet.add(newSubset);\n\n            }\n\n        }\n\n        return outputSet;\n    }\n\n    public static void main (String[] args) {\n        // Example 1:\n        int[] nums1 = {1,2,3};\n        //  O/P: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\n\n        // Example 2:\n        int[] nums2 = {0};\n        //  O/P: [[],[0]]\n\n        System.out.println(subsets(nums1));\n        System.out.println(subsets(nums2));\n\n    }\n}\n"))))))}d.isMDXComponent=!0}}]);