"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[7220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=d(n),p=a,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(7462),a=n(7294),o=n(6010),i=n(2389),s=n(7392),l=n(7094),d=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function h(e){var t;const{lazy:n,block:i,defaultValue:h,values:p,groupId:m,className:b}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),v=(0,s.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===h?h:h??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:S}=(0,l.U)(),[k,L]=(0,a.useState)(w),W=[],{blockElementScrollPositionUntilNextRender:O}=(0,d.o5)();if(null!=m){const e=y[m];null!=e&&e!==k&&g.some((t=>t.value===e))&&L(e)}const j=e=>{const t=e.currentTarget,n=W.indexOf(t),r=g[n].value;r!==k&&(O(t),L(r),null!=m&&S(m,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=W.indexOf(e.currentTarget)+1;n=W[t]??W[0];break}case"ArrowLeft":{const t=W.indexOf(e.currentTarget)-1;n=W[t]??W[W.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},b)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>W.push(e),onKeyDown:E,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":k===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function p(e){const t=(0,i.Z)();return a.createElement(h,(0,r.Z)({key:String(t)},e))}},4998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),o=n(5488),i=n(5162);const s={sidebar_position:5,id:"e-hash-set",title:"Hash Set",tags:["hash-set","word-ladder"]},l="Hash Set",d={unversionedId:"data-structures/e-hash-set",id:"data-structures/e-hash-set",title:"Hash Set",description:"- Understanding hash set",source:"@site/docs/data-structures/e-hash-set.md",sourceDirName:"data-structures",slug:"/data-structures/e-hash-set",permalink:"/dsa/docs/data-structures/e-hash-set",draft:!1,tags:[{label:"hash-set",permalink:"/dsa/docs/tags/hash-set"},{label:"word-ladder",permalink:"/dsa/docs/tags/word-ladder"}],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,id:"e-hash-set",title:"Hash Set",tags:["hash-set","word-ladder"]},sidebar:"docs",previous:{title:"Hash Table",permalink:"/dsa/docs/data-structures/d-hash-table"},next:{title:"Stacks",permalink:"/dsa/docs/data-structures/f-stacks"}},u={},c=[{value:"Problems related to hash set",id:"problems-related-to-hash-set",level:2},{value:"\u2197 See LeetCode Problem #127",id:"-see-leetcode-problem-127",level:3}],h={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hash-set"},"Hash Set"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understanding hash set"),(0,a.kt)("li",{parentName:"ul"},"Solved problems are presented in alphabetical order")),(0,a.kt)("h2",{id:"problems-related-to-hash-set"},"Problems related to hash set"),(0,a.kt)("details",null,(0,a.kt)("summary",null," Word Ladder (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-127"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/word-ladder/"},"\u2197 See LeetCode Problem #127")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'import java.util.List;\nimport java.util.Set;\nimport java.util.HashSet;\nimport java.util.Queue;\nimport java.util.LinkedList;\n\npublic class Solution {\n    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {\n\n        //  Approach from LC Discussions Post\n        //  Time Complexity: O(M^2 * N)\n        //  Space Complexity: O(M * N)\n\n        //  Declare a set to contain the words\n        //      from the given word list\n        Set<String> wordListSet = new HashSet<>(wordList);\n\n        //  Return 0 if the endWord is not in the wordListSet\n        if (!wordListSet.contains(endWord)) {\n            return 0;\n        }\n\n        //  Declare a queue for BFS\n        //      which gives the minimum distance required\n        Queue<String> bfsQueue = new LinkedList<>();\n        //  Initialize it with the beginWord\n        bfsQueue.add(beginWord);\n\n        //  Declare a set to keep track of visited words\n        Set<String> visitedWords = new HashSet<>();\n        //  Initialize it with the beginWord\n        visitedWords.add(beginWord);\n\n        //  Declare the length of the transformation sequence\n        //      and initialize it with 1\n        //      (since always has the beginWord)\n        int sequenceLength = 1;\n\n        //\n        while (!bfsQueue.isEmpty()) {\n            //  Store the original queueSize for current iteration\n            int queueSize = bfsQueue.size();\n            for (int i = 0; i < queueSize; i++) {\n                String currentWord = bfsQueue.poll();\n\n                if (currentWord.equals(endWord)) {\n                    return sequenceLength;\n                }\n\n                for (int j = 0; j < currentWord.length(); j++) {\n                    //  Iterate over all letters in the alphabet\n                    //      to replace one letter in the word,\n                    //      and check if it is present in the given word list\n                    for (char c = \'a\'; c <= \'z\'; c++) {\n                        char[] wordCharArray = currentWord.toCharArray();\n                        //  Replace a character in the current word\n                        //      defined as a character array\n                        wordCharArray[j] = c;\n\n                        //  Define a new word using the updated\n                        //      character array\n                        String newWord = new String(wordCharArray);\n\n                        //  If the new word is in the given list and\n                        //      has not already been visited,\n                        //      add it to the bfsQueue and\n                        //      visitedWords hash set\n                        if (wordListSet.contains(newWord) &&\n                                !visitedWords.contains(newWord)) {\n                            bfsQueue.add(newWord);\n                            visitedWords.add(newWord);\n                        }\n                    }\n                }\n            }\n            sequenceLength++;\n        }\n\n        //  Return 0 in absence of a sequence\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        // Example 1:\n        String beginWord1 = "hit";\n        String endWord1 = "cog";\n        List<String> wordList1 = List.of("hot","dot","dog","lot","log","cog");\n        //  O/P: 5\n\n        // Example 2:\n        String beginWord2 = "hit";\n        String endWord2 = "cog";\n        List<String> wordList2 = List.of("hot","dot","dog","lot","log");\n        //  O/P: 0\n\n        // Example 3:\n        String beginWord3 = "red";\n        String endWord3 = "tax";\n        List<String> wordList3 = List.of("ted","tex","red","tax","tad","den","rex","pee");\n        //  O/P: 4\n\n        System.out.println(ladderLength(beginWord1, endWord1, wordList1));\n        System.out.println(ladderLength(beginWord2, endWord2, wordList2));\n        System.out.println(ladderLength(beginWord3, endWord3, wordList3));\n    }\n}\n'))))))}p.isMDXComponent=!0}}]);