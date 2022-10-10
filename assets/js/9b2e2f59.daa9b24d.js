"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[7817],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return t?r.createElement(h,o(o({ref:n},d),{},{components:t})):r.createElement(h,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),a=t(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(7462),a=t(7294),l=t(6010),o=t(2389),i=t(7392),s=t(7094),u=t(2466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var n;const{lazy:t,block:o,defaultValue:p,values:m,groupId:h,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??v.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),T=(0,i.l)(f,((e,n)=>e.value===n.value));if(T.length>0)throw new Error(`Docusaurus error: Duplicate values "${T.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===p?p:p??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,s.U)(),[k,w]=(0,a.useState)(N),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=h){const e=g[h];null!=e&&e!==k&&f.some((n=>n.value===e))&&w(e)}const O=e=>{const n=e.currentTarget,t=S.indexOf(n),r=f[t].value;r!==k&&(x(n),w(r),null!=h&&y(h,String(r)))},E=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=S.indexOf(e.currentTarget)+1;t=S[n]??S[0];break}case"ArrowLeft":{const n=S.indexOf(e.currentTarget)-1;t=S[n]??S[S.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},f.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:e=>S.push(e),onKeyDown:E,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":k===n})}),t??n)}))),t?(0,a.cloneElement)(v.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==k})))))}function m(e){const n=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},8215:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=t(7462),a=(t(7294),t(3905)),l=t(5488),o=t(5162);const i={sidebar_position:9,id:"i-binary-search-trees",title:"Binary Search Trees",tags:["binary-search-trees","kth-smallest-element-in-a-bst","lowest-common-ancestor-of-a-bst","two-sum-iv-input-is-a-bst","validate-binary-search-tree"]},s="Binary Search Trees",u={unversionedId:"data-structures/i-binary-search-trees",id:"data-structures/i-binary-search-trees",title:"Binary Search Trees",description:"- Understanding binary search trees",source:"@site/docs/data-structures/i-binary-search-trees.md",sourceDirName:"data-structures",slug:"/data-structures/i-binary-search-trees",permalink:"/dsa/docs/data-structures/i-binary-search-trees",draft:!1,tags:[{label:"binary-search-trees",permalink:"/dsa/docs/tags/binary-search-trees"},{label:"kth-smallest-element-in-a-bst",permalink:"/dsa/docs/tags/kth-smallest-element-in-a-bst"},{label:"lowest-common-ancestor-of-a-bst",permalink:"/dsa/docs/tags/lowest-common-ancestor-of-a-bst"},{label:"two-sum-iv-input-is-a-bst",permalink:"/dsa/docs/tags/two-sum-iv-input-is-a-bst"},{label:"validate-binary-search-tree",permalink:"/dsa/docs/tags/validate-binary-search-tree"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,id:"i-binary-search-trees",title:"Binary Search Trees",tags:["binary-search-trees","kth-smallest-element-in-a-bst","lowest-common-ancestor-of-a-bst","two-sum-iv-input-is-a-bst","validate-binary-search-tree"]},sidebar:"docs",previous:{title:"Heaps",permalink:"/dsa/docs/data-structures/h-heaps"},next:{title:"Binary Trees",permalink:"/dsa/docs/data-structures/j-binary-trees"}},d={},c=[{value:"Problems related to binary search trees",id:"problems-related-to-binary-search-trees",level:2},{value:"\u2197 See LeetCode Problem #230",id:"-see-leetcode-problem-230",level:3},{value:"\u2197 See LeetCode Problem #235",id:"-see-leetcode-problem-235",level:3},{value:"\u2197 See LeetCode Problem #653",id:"-see-leetcode-problem-653",level:3},{value:"\u2197 See LeetCode Problem #98",id:"-see-leetcode-problem-98",level:3}],p={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"binary-search-trees"},"Binary Search Trees"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understanding binary search trees "),(0,a.kt)("li",{parentName:"ul"},"Solved problems are presented in alphabetical order")),(0,a.kt)("h2",{id:"problems-related-to-binary-search-trees"},"Problems related to binary search trees"),(0,a.kt)("details",null,(0,a.kt)("summary",null," Kth Smallest Element in a BST "),(0,a.kt)("h3",{id:"-see-leetcode-problem-230"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/"},"\u2197 See LeetCode Problem #230")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"import java.util.Deque;\nimport java.util.ArrayDeque;\n\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\npublic class Solution {\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n//class Solution {\n    public static int kthSmallest(TreeNode root, int k) {\n\n        if (root == null) {\n            return -1;\n        }\n\n        Deque<TreeNode> myStack = new ArrayDeque<>();\n\n        while (true) {\n            while (root != null) {\n                myStack.push(root);\n                root = root.left;\n            }\n\n            root = myStack.pop();\n\n            if (--k == 0) {\n                return root.val;\n            }\n\n            root = root.right;\n        }\n    }\n\n    public static void main(String[] args) {\n        // Example 1:\n        // Input: root = [3,1,4,null,2], k = 1\n\n        //          3\n        //        /   \\\n        //       1     4\n        //        \\\n        //         2\n\n        TreeNode lA2 = new TreeNode(2, null, null);\n        TreeNode lA1 = new TreeNode(1, null, lA2);\n        TreeNode rA1 = new TreeNode(4, null, null);\n        TreeNode rootA1 = new TreeNode(3, lA1, rA1);\n        int k1 = 1;\n        //  O/P: 1\n\n        System.out.println(kthSmallest(rootA1, k1));\n\n        // Example 2:\n        // Input: root = [5,3,6,2,4,null,null,1], k = 3\n\n        //          5\n        //        /   \\\n        //       3     6\n        //     /  \\\n        //    2    4\n        //   /\n        //  1\n\n        TreeNode lB3 = new TreeNode(1, null, null);\n        TreeNode lB2 = new TreeNode(2, lB3, null);\n        TreeNode rB2 = new TreeNode(4, null, null);\n        TreeNode lB1 = new TreeNode(3, lB2, rB2);\n        TreeNode rB1 = new TreeNode(6, null, null);\n        TreeNode rootB1 = new TreeNode(5, lB1, rB1);\n        int k2 = 3;\n        System.out.println(kthSmallest(rootB1, k2));\n        //  O/P: 3\n    }\n}\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Lowest Common Ancestor of a Binary Search Tree "),(0,a.kt)("h3",{id:"-see-leetcode-problem-235"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"},"\u2197 See LeetCode Problem #235")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"// Needs to implement TreeNode in the main method\n\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode(int x) { val = x; }\n}\n\npublic class Solution {\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode(int x) { val = x; }\n * }\n */\n\n//class Solution {\n    static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\n\n        TreeNode current = root;\n\n        while (current != null) {\n\n            if (p.val > current.val && q.val > current.val) {\n                current = current.right;\n            } else if (p.val < current.val && q.val < current.val) {\n                current = current.left;\n            } else {\n                return current;\n            }\n\n        }\n\n        return null;\n    }\n\n    public static void main(String[] args) {\n        // Example 1:\n        //\n        //\n        //Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8\n        //Output: 6\n        //Explanation: The LCA of nodes 2 and 8 is 6.\n        //\n        //\n        // Example 2:\n        //\n        //\n        //Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4\n        //Output: 2\n        //Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant\n        //of itself according to the LCA definition.\n        //\n        //\n        // Example 3:\n        //\n        //\n        //Input: root = [2,1], p = 2, q = 1\n        //Output: 2\n    }\n}\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Two Sum IV - Input is a BST "),(0,a.kt)("h3",{id:"-see-leetcode-problem-653"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/two-sum-iv-input-is-a-bst/"},"\u2197 See LeetCode Problem #653")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"import java.util.Map;\nimport java.util.HashMap;\n\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\npublic class Solution {\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n//class Solution {\n\n    Map<Integer, Integer> hMap = new HashMap<>();\n    int nodeCount = 0;\n    boolean flag = false;\n\n    public boolean findTarget(TreeNode root, int k) {\n        recursionHelper(root, k);\n        return flag;\n    }\n\n    private void recursionHelper(TreeNode root, int k) {\n\n        if (root == null) {\n            return;\n        }\n\n        this.hMap.put(root.val, nodeCount++);\n\n        int complement = k - root.val;\n\n        if (hMap.containsKey(complement) &&\n                hMap.get(complement) != nodeCount - 1) {\n            flag = true;\n        }\n\n        if (root.left != null) {\n            recursionHelper(root.left, k);\n        }\n\n        if (root.right != null) {\n            recursionHelper(root.right, k);\n        }\n\n    }\n\n    public static void main(String[] args) {\n        Solution solution = new Solution();\n\n        // Example 1:\n        //Input: root = [5,3,6,2,4,null,7], k = 9\n        TreeNode root = new TreeNode(5);\n        root.left = new TreeNode(3);\n        root.right = new TreeNode(6);\n        root.left.left = new TreeNode(2);\n        root.left.right = new TreeNode(4);\n        root.right.left = new TreeNode(7);\n\n//        int k1 = 9;\n\n//        System.out.println(solution.findTarget(root, k1));\n        //Output: true\n\n        // Example 2:\n        //Input: root = [5,3,6,2,4,null,7], k = 28\n        //  SAME as root in Example 1\n\n        int k2 = 28;\n\n        System.out.println(solution.findTarget(root, k2));\n        //Output: false\n\n    }\n}\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Validate Binary Search Tree "),(0,a.kt)("h3",{id:"-see-leetcode-problem-98"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/validate-binary-search-tree/"},"\u2197 See LeetCode Problem #98")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"//  Needs to implement Treenode\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n\n    TreeNode() {\n\n    }\n\n    TreeNode(int val) {\n        this.val = val;\n    }\n\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\npublic class Solution {\n    /**\n     * Definition for a binary tree node.\n     * public class TreeNode {\n     * int val;\n     * TreeNode left;\n     * TreeNode right;\n     * TreeNode() {}\n     * TreeNode(int val) { this.val = val; }\n     * TreeNode(int val, TreeNode left, TreeNode right) {\n     * this.val = val;\n     * this.left = left;\n     * this.right = right;\n     * }\n     * }\n     */\n//    class Solution {\n\n    //  We use Integer instead of int as it supports a null value\n    private static Integer prev;\n\n    public boolean isValidBST(TreeNode root) {\n        prev = null;\n        return inorder(root);\n    }\n\n    private boolean inorder(TreeNode root) {\n\n        if (root == null) {\n            return true;\n        }\n\n        if (!inorder(root.left)) {\n            return false;\n        }\n\n        if (prev != null && root.val <= prev) {\n            return false;\n        }\n\n        prev = root.val;\n        return inorder(root.right);\n\n    }\n\n    public static void main(String[] args) {\n\n        // Example 1:\n        //Input: root = [2,1,3]\n        //Output: true\n\n        // Example 2:\n        //Input: root = [5,1,4,null,null,3,6]\n        //Output: false\n    }\n}\n"))))))}m.isMDXComponent=!0}}]);