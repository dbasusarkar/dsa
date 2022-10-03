"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[7418],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>p});var a=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var o=a.createContext({}),c=function(n){var e=a.useContext(o),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},u=function(n){var e=c(n.components);return a.createElement(o.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,o=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),d=c(t),p=r,g=d["".concat(o,".").concat(p)]||d[p]||m[p]||i;return t?a.createElement(g,s(s({ref:e},u),{},{components:t})):a.createElement(g,s({ref:e},u))}));function p(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,s=new Array(i);s[0]=d;var l={};for(var o in e)hasOwnProperty.call(e,o)&&(l[o]=e[o]);l.originalType=n,l.mdxType="string"==typeof n?n:r,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(n,e,t)=>{t.d(e,{Z:()=>s});var a=t(7294),r=t(6010);const i="tabItem_Ymn6";function s(n){let{children:e,hidden:t,className:s}=n;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:t},e)}},5488:(n,e,t)=>{t.d(e,{Z:()=>p});var a=t(7462),r=t(7294),i=t(6010),s=t(2389),l=t(7392),o=t(7094),c=t(2466);const u="tabList__CuJ",m="tabItem_LNqP";function d(n){var e;const{lazy:t,block:s,defaultValue:d,values:p,groupId:g,className:h}=n,b=r.Children.map(n.children,(n=>{if((0,r.isValidElement)(n)&&"value"in n.props)return n;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??b.map((n=>{let{props:{value:e,label:t,attributes:a}}=n;return{value:e,label:t,attributes:a}})),S=(0,l.l)(f,((n,e)=>n.value===e.value));if(S.length>0)throw new Error(`Docusaurus error: Duplicate values "${S.map((n=>n.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(e=b.find((n=>n.props.default)))?void 0:e.props.value)??b[0].props.value;if(null!==v&&!f.some((n=>n.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((n=>n.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,o.U)(),[k,x]=(0,r.useState)(v),C=[],{blockElementScrollPositionUntilNextRender:L}=(0,c.o5)();if(null!=g){const n=w[g];null!=n&&n!==k&&f.some((e=>e.value===n))&&x(n)}const M=n=>{const e=n.currentTarget,t=C.indexOf(e),a=f[t].value;a!==k&&(L(e),x(a),null!=g&&y(g,String(a)))},E=n=>{var e;let t=null;switch(n.key){case"ArrowRight":{const e=C.indexOf(n.currentTarget)+1;t=C[e]??C[0];break}case"ArrowLeft":{const e=C.indexOf(n.currentTarget)-1;t=C[e]??C[C.length-1];break}}null==(e=t)||e.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},h)},f.map((n=>{let{value:e,label:t,attributes:s}=n;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===e?0:-1,"aria-selected":k===e,key:e,ref:n=>C.push(n),onKeyDown:E,onFocus:M,onClick:M},s,{className:(0,i.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":k===e})}),t??e)}))),t?(0,r.cloneElement)(b.filter((n=>n.props.value===k))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((n,e)=>(0,r.cloneElement)(n,{key:e,hidden:n.props.value!==k})))))}function p(n){const e=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(e)},n))}},1547:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=t(7462),r=(t(7294),t(3905)),i=t(5488),s=t(5162);const l={sidebar_position:2,id:"b-strings",title:"Strings",tags:["strings","find-all-anagrams-in-a-string","longest-palindrome","longest-palindromic-substring","longest-substring-without-repeating-characters","minimum-window-substring","string-to-integer-atoi","valid-anagram","valid-palindrome"]},o="Strings",c={unversionedId:"data-structures/b-strings",id:"data-structures/b-strings",title:"Strings",description:"- Understanding strings",source:"@site/docs/data-structures/b-strings.md",sourceDirName:"data-structures",slug:"/data-structures/b-strings",permalink:"/dsa/docs/data-structures/b-strings",draft:!1,tags:[{label:"strings",permalink:"/dsa/docs/tags/strings"},{label:"find-all-anagrams-in-a-string",permalink:"/dsa/docs/tags/find-all-anagrams-in-a-string"},{label:"longest-palindrome",permalink:"/dsa/docs/tags/longest-palindrome"},{label:"longest-palindromic-substring",permalink:"/dsa/docs/tags/longest-palindromic-substring"},{label:"longest-substring-without-repeating-characters",permalink:"/dsa/docs/tags/longest-substring-without-repeating-characters"},{label:"minimum-window-substring",permalink:"/dsa/docs/tags/minimum-window-substring"},{label:"string-to-integer-atoi",permalink:"/dsa/docs/tags/string-to-integer-atoi"},{label:"valid-anagram",permalink:"/dsa/docs/tags/valid-anagram"},{label:"valid-palindrome",permalink:"/dsa/docs/tags/valid-palindrome"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,id:"b-strings",title:"Strings",tags:["strings","find-all-anagrams-in-a-string","longest-palindrome","longest-palindromic-substring","longest-substring-without-repeating-characters","minimum-window-substring","string-to-integer-atoi","valid-anagram","valid-palindrome"]},sidebar:"docs",previous:{title:"Arrays",permalink:"/dsa/docs/data-structures/a-arrays"},next:{title:"Linked Lists",permalink:"/dsa/docs/data-structures/c-linked-lists"}},u={},m=[{value:"Problems related to strings",id:"problems-related-to-strings",level:2},{value:"\u2197 See LeetCode Problem #438",id:"-see-leetcode-problem-438",level:3},{value:"\u2197 See LeetCode Problem #49",id:"-see-leetcode-problem-49",level:3},{value:"\u2197 See LeetCode Problem #14",id:"-see-leetcode-problem-14",level:3},{value:"\u2197 See LeetCode Problem #409",id:"-see-leetcode-problem-409",level:3},{value:"\u2197 See LeetCode Problem #5",id:"-see-leetcode-problem-5",level:3},{value:"\u2197 See LeetCode Problem #3",id:"-see-leetcode-problem-3",level:3},{value:"\u2197 See LeetCode Problem #76",id:"-see-leetcode-problem-76",level:3},{value:"\u2197 See LeetCode Problem #8",id:"-see-leetcode-problem-8",level:3},{value:"\u2197 See LeetCode Problem #242",id:"-see-leetcode-problem-242",level:3},{value:"\u2197 See LeetCode Problem #125",id:"-see-leetcode-problem-125",level:3}],d={toc:m};function p(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"strings"},"Strings"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Understanding strings "),(0,r.kt)("li",{parentName:"ul"},"Solved problems are presented in alphabetical order")),(0,r.kt)("h2",{id:"problems-related-to-strings"},"Problems related to strings"),(0,r.kt)("details",null,(0,r.kt)("summary",null," Find All Anagrams in a String "),(0,r.kt)("h3",{id:"-see-leetcode-problem-438"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/find-all-anagrams-in-a-string/"},"\u2197 See LeetCode Problem #438")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'import java.util.List;\nimport java.util.ArrayList;\n\nimport java.util.Map;\nimport java.util.HashMap;\n\npublic class Solution {\n    public static List<Integer> findAnagrams(String s, String p) {\n        int leftIndex = 0;\n        int matchedCharacterCount = 0;\n        List<Integer> matchedIndices = new ArrayList<>();\n\n        Map<Character, Integer> pHMap = new HashMap<>();\n\n        for (char pCharacter : p.toCharArray()) {\n            pHMap.put(pCharacter,\n                    pHMap.getOrDefault (pCharacter,0) + 1);\n        }\n\n        for (int rightIndex = 0; rightIndex < s.length() ; rightIndex++) {\n            char rightCharacter = s.charAt(rightIndex);\n            if (pHMap.containsKey(rightCharacter)) {\n                pHMap.put(rightCharacter,\n                    pHMap.get(rightCharacter) - 1);\n                if (pHMap.get(rightCharacter) == 0) {\n                    matchedCharacterCount++;\n                }\n            }\n\n            //  If found an anagram\n            if (matchedCharacterCount == pHMap.size()) {\n                //  Add leftIndex as the starting index\n                //      of the anagram\n                matchedIndices.add(leftIndex);\n            }\n\n            if (rightIndex >= p.length() - 1) {\n                //  leftIndex++ in the following lines means\n                //      give character at leftIndex\n                //      and THEN, increase leftIndex by 1;\n                //      meaning, leftIndex = leftIndex + 1\n                char leftCharacter = s.charAt(leftIndex++);\n\n                if (pHMap.containsKey(leftCharacter)) {\n                    //  Check if leftCharacter is already matched\n                    if(pHMap.get(leftCharacter) == 0) {\n                        //  Decrease matched index by 1 since leftCharacter\n                        //      is being removed\n                        matchedCharacterCount--;\n                    }\n                    //  Put leftCharacter back for future matching\n                    pHMap.put(leftCharacter, pHMap.get(leftCharacter) + 1);\n                }\n            }\n        }\n        return matchedIndices;\n    }\n\n    public static void main(String[] args) {\n        // Example 1:\n        String s1 = "cbaebabacd";\n        String p1 = "abc";\n        //  O/P: [0,6]\n\n        // Example 2:\n        String s2 = "abab";\n        String p2 = "ab";\n        //  O/P: [0,1,2]\n\n        System.out.println(findAnagrams(s1, p1));\n        System.out.println(findAnagrams(s2, p2));\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null," Group Anagrams "),(0,r.kt)("h3",{id:"-see-leetcode-problem-49"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/group-anagrams/"},"\u2197 See LeetCode Problem #49")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'import java.util.*;\n\npublic class Solution {\n    static List<List<String>> groupAnagrams(String[] strs) {\n\n        //  Return empty list if given string array is empty\n        if (strs.length == 0) {\n            return new ArrayList<>();\n        }\n\n        //  Create HashMap to generate the required output\n        Map<String, List> hMap = new HashMap<>();\n\n        //  Create integer array of 26\n        //      to count the occurrence of each letter\n        int[] count = new int[26];\n\n        for (String s : strs) {\n            Arrays.fill(count, 0);\n            for (char c : s.toCharArray()) {\n                count[c - \'a\']++;\n            }\n\n            StringBuilder sBuilder = new StringBuilder("");\n\n            for (int i = 0; i < 26; i++) {\n                sBuilder.append(\'#\');\n                sBuilder.append(count[i]);\n            }\n\n            String hMapKey = sBuilder.toString();\n            if (!hMap.containsKey(hMapKey)){\n                hMap.put(hMapKey, new ArrayList<>());\n            }\n            hMap.get(hMapKey).add(s);\n        }\n\n        System.out.println(hMap.keySet());\n        System.out.println(hMap.values());\n        return new ArrayList(hMap.values());\n    }\n\n    public static void main(String[] args) {\n        // Example 1:\n        String[] strs1 = {"eat","tea","tan","ate","nat","bat"};\n        //  O/P: [["bat"],["nat","tan"],["ate","eat","tea"]]\n\n        // Example 2:\n        String[] strs2 = {""};\n        //  O/P: [[""]]\n\n        // Example 3:\n        String[] strs3 = {"a"};\n        //  O/P: [["a"]]\n\n        // Example 4:\n        String[] strs4 = {};\n        //  O/P: [["a"]]\n\n        System.out.println(groupAnagrams(strs1));\n        System.out.println(groupAnagrams(strs2));\n        System.out.println(groupAnagrams(strs3));\n        System.out.println(groupAnagrams(strs4));\n\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null," Longest Common Prefix "),(0,r.kt)("h3",{id:"-see-leetcode-problem-14"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/longest-common-prefix/"},"\u2197 See LeetCode Problem #14")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    static String longestCommonPrefix(String[] strs) {\n\n        if (strs == null || strs.length == 0) {\n            return "";\n        }\n\n        for (int i = 0; i < strs[0].length(); i++) {\n\n            for (int j = 1; j < strs.length; j++) {\n                if (i == strs[j].length() ||\n                        strs[j].charAt(i) != strs[0].charAt(i)) {\n                    return strs[0].substring(0,i);\n                }\n            }\n        }\n\n        return strs[0];\n    }\n\n    public static void main(String[] args) {\n        // Example 1:\n        String[] strs1 = {"flower","flow","flight"};\n        //  O/P: "fl"\n\n        // Example 2:\n        String[] strs2 = {"dog","racecar","car"};\n        //  O/P: ""\n\n        System.out.println(longestCommonPrefix(strs1));\n        System.out.println(longestCommonPrefix(strs2));\n\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null," Longest Palindrome "),(0,r.kt)("h3",{id:"-see-leetcode-problem-409"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/longest-palindrome/"},"\u2197 See LeetCode Problem #409")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'import java.util.Map;\nimport java.util.HashMap;\n\npublic class Solution {\n    static int longestPalindrome(String s) {\n                //  Approach #1 (Without HashSet)\n        //  result: lenght of the longest palindrome\n        int result = 0;\n        int[] characterCount = new int[128];\n\n        for (char c : s.toCharArray()) {\n            characterCount[c]++;\n        }\n\n        for (int countNumber : characterCount) {\n            //  Add total occurrences of paired character\n            //  Multiplied by 2 since both occurrences of the character\n            //      contribute to the length\n            result += countNumber / 2 * 2;\n        }\n\n        //  Find and add (if present) the central\n        //      unpaired charcter\n        if (result < s.length()) {\n            result++;\n        }\n\n        return result;\n\n        //  Approach #1 (With HashSet)\n//        if (s == null || s.length() < 1) {\n//            return 0;\n//        }\n//\n//        Set<Character> characterSet = new HashSet<>();\n//\n//        for (int i = 0; i < s.length(); i++) {\n//\n//            char c = s.charAt(i);\n//\n//            if (characterSet.contains(c)) {\n//                characterSet.remove(c);\n//            } else {\n//                characterSet.add(c);\n//            }\n//        }\n//\n//        if (characterSet.size() <= 1) {\n//            return s.length();\n//        }\n//\n//        //  Remove unpaired characters from s\n//        //  Add 1 to include the central unpaired character\n//        //  The if statement immediately above takes care of\n//        //     the case with only one unpaired character\n//        return s.length() - characterSet.size() + 1;\n    }\n\n    public static void main(String[] args) {\n\n        // Example 1:\n        String s1 = "abccccdd";\n        //Output: 7\n\n        // Example 2:\n        String s2 = "a";\n        //Output: 1\n\n        System.out.println(longestPalindrome(s1));\n        System.out.println(longestPalindrome(s2));\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null," Longest Palindromic Substring "),(0,r.kt)("h3",{id:"-see-leetcode-problem-5"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/longest-palindromic-substring/"},"\u2197 See LeetCode Problem #5")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    private static int centralExpansion(int left, int right, String s) {\n        while (left >= 0 && right < s.length() &&\n                s.charAt(left) == s.charAt(right)) {\n            left--;\n            right++;\n        }\n        //  "- 1" because index starts from "0"\n        return right - left - 1;\n    }\n\n    static String longestPalindrome(String s) {\n\n        if (s == null || s.length() < 1) {\n            return "";\n        }\n\n        int leftBoundary = 0;\n        int rightBoundary = 0;\n\n        for (int i = 0; i < s.length(); i++) {\n            //  For strings with odd length (example: "abcba")\n            int oddLength = centralExpansion(i, i, s);\n\n            //  For strings with even length (example: "abba")\n            int evenLength = centralExpansion(i, i + 1, s);\n\n            int maxLength = Math.max(oddLength, evenLength);\n\n            //  To deal with index out of bound cases\n            if (maxLength > rightBoundary - leftBoundary) {\n                //  Because, indices range between 0 and length - 1\n                //  Example: string.length() = 5\n                //      0, 1, 2, 3, 4\n                //      (5 - 1) / 2 = 2\n                //      5 / 2 = 2\n                //  Example: string.length() = 6\n                //      0, 1, 2, 3, 4, 5\n                //      (6 - 1) / 2 = 2\n                //      6 / 2 = 3\n                leftBoundary = i - (maxLength - 1) / 2;\n                rightBoundary = i + maxLength / 2;\n            }\n        }\n\n        //  return longest substring that begins with leftBoundary\n        //      and ends in rightBoundary (inclusive)\n        return s.substring(leftBoundary, rightBoundary + 1);\n    }\n\n    public static void main(String[] args) {\n        // Example 1:\n        String s1 = "babad";\n        //  O/P: "bab"\n\n        // Example 2:\n        String s2 = "cbbd";\n        //  O/P: "bb"\n\n        // Example 3:\n        String s3 = "eracecarluhgouwqzyufg";\n        //  O/P: "racecar"\n\n        System.out.println(longestPalindrome(s1));\n        System.out.println(longestPalindrome(s2));\n        System.out.println(longestPalindrome(s3));\n\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null," Longest Substring Without Repeating Characters "),(0,r.kt)("h3",{id:"-see-leetcode-problem-3"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/longest-substring-without-repeating-characters/"},"\u2197 See LeetCode Problem #3")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'import java.util.Map;\nimport java.util.HashMap;\n\npublic class Solution {\n    public static int lengthOfLongestSubstring(String s) {\n            //  Start of the sliding window\n        int windowStart = 0;\n\n        //  Length of the window\n        int windowSize = 0;\n\n        //  HashMap to store characer frequencies\n        Map<Character, Integer> characterFrequency = new HashMap<>();\n\n        //  i = windowEnd\n        for (int i = 0; i < s.length() ; i++) {\n\n            char rightCharacter = s.charAt(i);\n            if (characterFrequency.containsKey(rightCharacter)) {\n                windowStart = Math.max(windowStart,\n                        characterFrequency.get(rightCharacter) + 1);\n            }\n\n            characterFrequency.put(rightCharacter, i);\n\n            //  Updates the maximum length/size of the substring\n            windowSize = Math.max(windowSize, i - windowStart + 1);\n        }\n\n        return windowSize;\n    }\n\n    public static void main(String[] args) {\n\n        // Example 1:\n        String s1 = "abcabcbb";\n        //  O/P: 3\n\n        // Example 2:\n        String s2 = "bbbbb";\n        //  O/P: 1\n\n        // Example 3:\n        String s3 = "pwwkew";\n        //  O/P: 3\n\n        System.out.println(lengthOfLongestSubstring(s1));\n        System.out.println(lengthOfLongestSubstring(s2));\n        System.out.println(lengthOfLongestSubstring(s3));\n\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null," Minimum Window Substring "),(0,r.kt)("h3",{id:"-see-leetcode-problem-76"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/minimum-window-substring/"},"\u2197 See LeetCode Problem #76")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'import java.util.HashMap;\nimport java.util.Map;\n\npublic class Solution {\n    static String minWindow(String s, String t) {\n\n        if (s.length() == 0 || t.length() == 0){\n            return "";\n        }\n\n        int windowStart = 0;\n        int windowEnd;\n        int matchedCharacters = 0;\n        int substringStart = 0;\n        int minWindowSize = s.length() + 1; //  Smallest (maximum) impossible size\n\n        Map<Character, Integer> patternMap = new HashMap<>();\n\n//        t.chars().mapToObj(c -> (char) c)\n//                .forEach(c -> patternMap.put(\n//                        c, patternMap.getOrDefault(c, 0) + 1));\n\n        for (int i = 0; i < t.length(); i++) {\n            char ch = t.charAt(i);\n            patternMap.put(ch,\n                    patternMap.getOrDefault(ch, 0) + 1);\n        }\n\n        for (windowEnd = 0; windowEnd < s.length(); windowEnd++) {\n            //  Declare and store current character at index windowEnd\n            char rightChar = s.charAt(windowEnd);\n            if (patternMap.containsKey(rightChar)) {\n                patternMap.put(rightChar, patternMap.get(rightChar) - 1);\n                if (patternMap.get(rightChar) >= 0) {\n                    //  Increase the count of matched characters\n                    //      for every encounter of a matching character\n                    //  However, ignore if patternMap.get(key) < 0,\n                    //      which means the required number matches\n                    //      for that key/rightChr have already been accounted for\n                    matchedCharacters++;\n                }\n            }\n\n            while (matchedCharacters == t.length()) {\n\n                //  + 1 b/c 0-indexed\n//                int windowLength = windowEnd - windowStart + 1;\n\n                if (minWindowSize > windowEnd - windowStart + 1) {\n                    //  Update minimum window size if\n                    //      current (properly matching) window length is smaller\n                    minWindowSize = windowEnd - windowStart + 1;\n\n                    //  Store the current windowStart as the\n                    //      starting index of the required minimum window substring\n                    substringStart = windowStart;\n                }\n\n                //  Store the character at the start of the window\n                //      and, after that increase windowStart by 1\n                char leftChar = s.charAt(windowStart++);\n\n                //  Check if the character at the start of the window\n                //      is present in the pattern map\n                if (patternMap.containsKey(leftChar)) {\n\n                    //  If present, it has already been accounted for\n                    //      in matchedCharacters count\n                    //  So, if its current count is 0,\n                    //      remove it from the count of matchedCharacters\n                    //      by decreasing the value of matchedCharacters by 1\n                    if (patternMap.get(leftChar) == 0) {\n                        matchedCharacters--;\n                    }\n\n                    //  If patternMap.get(key/leftchar) is > (i.e. !=) 0 or just 0\n                    //     put it back in the pattern map by increasing the value by 1,\n                    //     since leftchar is moving out of the window\n                    //     in the following/next iteration\n                    patternMap.put(leftChar, patternMap.get(leftChar) + 1);\n                }\n            }\n        }\n\n        //  return empty string if minimum substring doesn\'t exist\n        //      (i.e. length of given string > minWindowSize) or\n        //      return the minimum window substring\n        return minWindowSize > s.length() ?\n                "" : s.substring(substringStart, substringStart + minWindowSize);\n\n    }\n\n    public static void main(String[] args) {\n\n        // Example 1:\n        String s1 = "ADOBECODEBANC";\n        String t1 = "ABC";\n        //  O/P: "BANC"\n\n        // Example 2:\n        String s2 = "a";\n        String t2 = "a";\n        //  O/P: "a"\n\n        // Example 3:\n        String s3 = "a";\n        String t3 = "aa";\n        //  O/P: ""\n\n        System.out.println("Example 1: " + minWindow(s1,t1));\n        System.out.println("Example 2: " + minWindow(s2,t2));\n        System.out.println("Example 3: " + minWindow(s3,t3));\n\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null," String to Integer (atoi) "),(0,r.kt)("h3",{id:"-see-leetcode-problem-8"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/string-to-integer-atoi/"},"\u2197 See LeetCode Problem #8")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"public class Solution {\n    public static int myAtoi(String s) {\n        //  Initialize the index\n        int index = 0;\n        //  Sign of the output/result\n        int sign = 1;\n        //  The output\n        int result = 0;\n\n        //  Skip all leading whitespaces\n        while (index < s.length() && s.charAt(index) == ' ') {\n            index++;\n        }\n\n        //  Now, check if positive or negative\n        //  First check if positive\n        if (index < s.length() && s.charAt(index) == '+') {\n            //  Keep sign positive\n            sign = 1;\n            //  Move on to next character\n            index++;\n        //  Then check if negative\n        } else if (index < s.length() && s.charAt(index) == '-') {\n            //  Make the sign negative\n            sign = -1;\n            //  Move on to next character\n            index++;\n        }\n\n        //  Move forward only next characters are digits\n        //      End the loop if not digits\n        while (index < s.length() &&\n                Character.isDigit(s.charAt(index))) {\n\n            //  ASCII character '0' has a value of 48\n            //      and '1' is 49 and so on...\n            int sDigit = s.charAt(index) - '0';\n\n            //  Check overflow and underflow\n            //  Check if result is out of 32-bit range\n            if ((result > Integer.MAX_VALUE / 10) ||\n                    //  Check if result is in 32-bit range\n                    (result == Integer.MAX_VALUE / 10 &&\n                            sDigit > Integer.MAX_VALUE % 10)) {\n                // return maximum or minimum 32-bit integer value\n                //     depending on if sign == 1 is true or false\n                return sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;\n            }\n\n            // Build the result using the current digit\n            result = 10 * result + sDigit;\n            // Increase index by 1 and move on to next loop\n            index++;\n        }\n        return sign * result;\n    }\n\n    public static void main(String[] args) {\n\n        // Example 1:\n        String s1 = \"42\";\n        //Output: 42\n\n        // Example 2:\n        String s2 = \"   -42\";\n        //Output: -42\n\n        // Example 3:\n        String s3 = \"4193 with words\";\n        //Output: 4193\n\n        System.out.println(myAtoi(s1));\n        System.out.println(myAtoi(s2));\n        System.out.println(myAtoi(s3));\n\n    }\n}\n"))))),(0,r.kt)("details",null,(0,r.kt)("summary",null," Valid Anagram "),(0,r.kt)("h3",{id:"-see-leetcode-problem-242"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/valid-anagram/"},"\u2197 See LeetCode Problem #242")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    static boolean isAnagram(String s, String t) {\n\n        if (s.length() != t.length()) {\n            return false;\n        }\n\n        java.util.Map<Character, Integer> sMap = new java.util.HashMap<>();\n\n        for (int i = 0; i < s.length(); i++) {\n            sMap.put(s.charAt(i), sMap.getOrDefault(s.charAt(i),0) + 1);\n            sMap.put(t.charAt(i), sMap.getOrDefault(t.charAt(i),0) - 1);\n        }\n\n        for (char c : sMap.keySet()) {\n            if (sMap.get(c) != 0) {\n                return false;\n            }\n        }\n\n        return true;\n    }\n\n    public static void main(String[] args) {\n        // Example 1:\n        String s1 = "anagram";\n        String t1 = "nagaram";\n        //  O/P: true\n\n        // Example 2:\n        String s2 = "rat";\n        String t2 = "car";\n        //  O/P: false\n\n        System.out.println("Example 1: " + isAnagram(s1,t1));\n        System.out.println("Example 2: " + isAnagram(s2,t2));\n\n    }\n}\n'))))),(0,r.kt)("details",null,(0,r.kt)("summary",null," Valid Palindrome "),(0,r.kt)("h3",{id:"-see-leetcode-problem-125"},(0,r.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/valid-palindrome/"},"\u2197 See LeetCode Problem #125")),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Solution {\n    static boolean isPalindrome(String s) {\n        for (int i = 0, j = s.length() - 1; i < j; i++, j--) {\n\n            while (i < j && !Character.isLetterOrDigit(s.charAt(i))) {\n                i++;\n            }\n\n            while (i < j && !Character.isLetterOrDigit(s.charAt(j))) {\n                j--;\n            }\n\n            if (Character.toLowerCase(s.charAt(i)) !=\n                    Character.toLowerCase(s.charAt(j))) {\n                return false;\n            }\n\n        }\n\n        return true;\n\n    }\n\n    public static void main(String[] args) {\n\n        // Example 1:\n        String s1 = "A man, a plan, a canal: Panama";\n        //  O/P: true\n\n        // Example 2:\n        String s2 = "race a car";\n        //  O/P: false\n\n        // Example 3:\n        String s3 = " ";\n        //  O/P: true\n\n        System.out.println(isPalindrome(s1));\n        System.out.println(isPalindrome(s2));\n        System.out.println(isPalindrome(s3));\n\n    }\n}\n'))))))}p.isMDXComponent=!0}}]);