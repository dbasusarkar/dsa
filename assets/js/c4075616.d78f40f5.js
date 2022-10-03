"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[3556],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(b,o(o({ref:n},c),{},{components:t})):r.createElement(b,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),a=t(6010);const i="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),a=t(7294),i=t(6010),o=t(2389),l=t(7392),s=t(7094),d=t(2466);const c="tabList__CuJ",u="tabItem_LNqP";function p(e){var n;const{lazy:t,block:o,defaultValue:p,values:m,groupId:b,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),g=(0,l.l)(v,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===p?p:p??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,s.U)(),[T,S]=(0,a.useState)(w),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,d.o5)();if(null!=b){const e=y[b];null!=e&&e!==T&&v.some((n=>n.value===e))&&S(e)}const E=e=>{const n=e.currentTarget,t=N.indexOf(n),r=v[t].value;r!==T&&(O(n),S(r),null!=b&&k(b,String(r)))},x=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=N.indexOf(e.currentTarget)+1;t=N[n]??N[0];break}case"ArrowLeft":{const n=N.indexOf(e.currentTarget)-1;t=N[n]??N[N.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},h)},v.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>N.push(e),onKeyDown:x,onFocus:E,onClick:E},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":T===n})}),t??n)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function m(e){const n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},2445:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=t(7462),a=(t(7294),t(3905)),i=t(5488),o=t(5162);const l={sidebar_position:11,id:"l-tries",title:"Tries",tags:["tries","implement-trie-prefix-tree","word-break"]},s="Tries",d={unversionedId:"data-structures/l-tries",id:"data-structures/l-tries",title:"Tries",description:"- Understanding tries",source:"@site/docs/data-structures/l-tries.md",sourceDirName:"data-structures",slug:"/data-structures/l-tries",permalink:"/dsa/docs/data-structures/l-tries",draft:!1,tags:[{label:"tries",permalink:"/dsa/docs/tags/tries"},{label:"implement-trie-prefix-tree",permalink:"/dsa/docs/tags/implement-trie-prefix-tree"},{label:"word-break",permalink:"/dsa/docs/tags/word-break"}],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,id:"l-tries",title:"Tries",tags:["tries","implement-trie-prefix-tree","word-break"]},sidebar:"docs",previous:{title:"Graphs",permalink:"/dsa/docs/data-structures/k-graphs"},next:{title:"Algorithms",permalink:"/dsa/docs/category/algorithms"}},c={},u=[{value:"Problems related to tries",id:"problems-related-to-tries",level:2},{value:"\u2197 See LeetCode Problem #208",id:"-see-leetcode-problem-208",level:3},{value:"\u2197 See LeetCode Problem #139",id:"-see-leetcode-problem-139",level:3}],p={toc:u};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tries"},"Tries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understanding tries "),(0,a.kt)("li",{parentName:"ul"},"Solved problems are presented in alphabetical order")),(0,a.kt)("h2",{id:"problems-related-to-tries"},"Problems related to tries"),(0,a.kt)("details",null,(0,a.kt)("summary",null," Implement Trie (Prefix Tree) (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-208"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/implement-trie-prefix-tree/"},"\u2197 See LeetCode Problem #208")),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'public class Trie {\n    static class TrieNode {\n        //  Link nodes to root (parent):\n        //  Array of TrieNode type\n        private TrieNode[] children;\n\n        //  Number of childeren\n        //  # of children set to 26, because English alphabet\n        private final int N = 26;\n\n        //  Declare a boolean variable to mark the end of word\n        boolean isEndofWord;\n\n        //  Create no-argument constructor\n        public TrieNode () {\n            //  Set children as a TrieNode array\n            //      of size N\n            children = new TrieNode[N];\n        }\n\n        //  Create a TrieNode for a given character c\n        public void put (char c, TrieNode node) {\n            //  Always subtract the ASCII value of\n            //      character/letter \'a\' to set the starting index to 0\n            //  \'a\' has an integer value of 97\n            //  \'z\' has an integer value of 122\n            //  After subtracting \'a\',\n            //      a to z are indexed between 0 and 25\n            children[c - \'a\'] = node;\n        }\n\n        //  Check if a given character/letter is present\n        public boolean containsKey (char c) {\n            return children[c - \'a\'] != null;\n        }\n\n        //  Retrieve a node for a given character/letter\n        public TrieNode get (char c) {\n            return children[c - \'a\'];\n        }\n\n        //  Set the end of word to true\n        public void setEndofWord () {\n            isEndofWord = true;\n        }\n\n        //  Check if it is the end of word\n        public boolean isEndofWord () {\n            return isEndofWord;\n        }\n    }\n\n    private TrieNode root;\n\n    public Trie() {\n        root = new TrieNode();\n    }\n\n    public void insert (String word) {\n        TrieNode node = root;\n\n        for (int i = 0; i < word.length(); i++) {\n            char c = word.charAt(i);\n\n            //  Check if current node contains current letter (c)\n            //  If not, put a node at the current letter\n            if (!node.containsKey(c)) {\n                node.put(c, new TrieNode());\n            }\n\n            //  Update the current node\n            node = node.get(c);\n        }\n\n        node.isEndofWord = true;\n    }\n\n    public TrieNode searchHelper (String word) {\n        TrieNode node = root;\n        for (int i = 0; i < word.length(); i++) {\n            char c = word.charAt(i);\n            if (node.containsKey(c)) {\n                node = node.get(c);\n            } else {\n                return null;\n            }\n        }\n\n        return node;\n    }\n\n    public boolean search(String word) {\n        //  Search the given word\n        //      using the searchHelper method\n        //      and save the returned node\n        TrieNode node = searchHelper(word);\n\n       //   Check if the given word is present\n       //   and if isEndOfWord set to true\n        return node != null && node.isEndofWord;\n    }\n\n    public boolean startsWith(String prefix) {\n        //  Search the given prefix\n        //      using the searchHelper method\n        //      and save the returned node\n        TrieNode node = searchHelper(prefix);\n\n        //  Check if the given prefix is present\n        return node != null;\n    }\n\n    public static void main(String[] args) {\n        // Example 1:\n        //Input\n        //["Trie", "insert", "search", "search", "startsWith", "insert", "search"]\n        //[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]\n\n        Trie trie = new Trie();\n        //  O/P: null\n\n        trie.insert("apple");\n        //  O/P: null\n\n        System.out.println(trie.search("apple"));\n        //  O/P: true\n\n        System.out.println(trie.search("app"));\n        //  O/P: false\n\n        System.out.println(trie.startsWith("app"));\n        //  O/P: true\n\n        trie.insert("app");\n        //  O/P: null\n\n        System.out.println(trie.search("app"));\n        //  O/P: true\n\n    }\n}\n\n/**\n * Your Trie object will be instantiated and called as such:\n * Trie obj = new Trie();\n * obj.insert(word);\n * boolean param_2 = obj.search(word);\n * boolean param_3 = obj.startsWith(prefix);\n */\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Word Break (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-139"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/word-break/"},"\u2197 See LeetCode Problem #139")),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'import java.util.ArrayList;\nimport java.util.HashSet;\nimport java.util.List;\nimport java.util.Set;\n\npublic class Solution {\n    static boolean wordBreak(String s, List<String> wordDict) {\n\n        Set<String> wordDictSet = new HashSet<>(wordDict);\n\n        boolean[] dp = new boolean[s.length() + 1];\n        dp[0] = true;\n\n        for (int i = 1; i <= s.length(); i++) {\n            for (int j = 0; j < i; j++) {\n                if (dp[j] && wordDictSet.contains(s.substring(j,i))) {\n                    dp[i] = true;\n                    break;\n                }\n            }\n        }\n        return dp[s.length()];\n    }\n\n    public static void main(String[] args) {\n\n        // Example 1:\n        String s1 = "leetcode";\n//        List<String> wordDict1 = List.of("leet","code");\n        List<String> wordDict1 = new ArrayList<>();\n        wordDict1.add("leet");\n        wordDict1.add("code");\n        //  O/P: true\n\n        // Example 2:\n        String s2 = "applepenapple";\n        List<String> wordDict2 = List.of("apple","pen");\n//        List<String> wordDict2 = new ArrayList<>();\n//        wordDict2.add("apple");\n//        wordDict2.add("pen");\n        //  O/P: true\n\n        // Example 3:\n        String s3 = "catsandog";\n//        List<String> wordDict3 = List.of("cats", "dog", "sand", "and", "cat");\n        List<String> wordDict3 = new ArrayList<>();\n        wordDict3.add("cats");\n        wordDict3.add("dog");\n        wordDict3.add("sand");\n        wordDict3.add("and");\n        wordDict3.add("cat");\n        //  O/P: false\n\n        System.out.println(wordBreak(s1, wordDict1));\n        System.out.println(wordBreak(s2, wordDict2));\n        System.out.println(wordBreak(s3, wordDict3));\n\n    }\n}\n'))))))}m.isMDXComponent=!0}}]);