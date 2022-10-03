"use strict";(self.webpackChunkdsa=self.webpackChunkdsa||[]).push([[786],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(t),h=a,p=m["".concat(s,".").concat(h)]||m[h]||c[h]||l;return t?r.createElement(p,o(o({ref:n},u),{},{components:t})):r.createElement(p,o({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),a=t(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>h});var r=t(7462),a=t(7294),l=t(6010),o=t(2389),i=t(7392),s=t(7094),d=t(2466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var n;const{lazy:t,block:o,defaultValue:m,values:h,groupId:p,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=h??v.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),T=(0,i.l)(f,((e,n)=>e.value===n.value));if(T.length>0)throw new Error(`Docusaurus error: Duplicate values "${T.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===m?m:m??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==N&&!f.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,s.U)(),[k,S]=(0,a.useState)(N),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=p){const e=g[p];null!=e&&e!==k&&f.some((n=>n.value===e))&&S(e)}const L=e=>{const n=e.currentTarget,t=w.indexOf(n),r=f[t].value;r!==k&&(x(n),S(r),null!=p&&y(p,String(r)))},P=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},f.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===n?0:-1,"aria-selected":k===n,key:n,ref:e=>w.push(e),onKeyDown:P,onFocus:L,onClick:L},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":k===n})}),t??n)}))),t?(0,a.cloneElement)(v.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==k})))))}function h(e){const n=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},3757:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=t(7462),a=(t(7294),t(3905)),l=t(5488),o=t(5162);const i={sidebar_position:9,id:"j-binary-trees",title:"Binary Trees",tags:["binary-trees","balanced-binary-tree","binary-tree-level-order-traversal","construct-binary-tree-from-preorder-and-inorder-traversal","diameter-of-binary-tree","invert-binary-tree","maximum-depth-of-binary-tree","same-tree","serialize-and-deserialize-binary-tree","subtree-of-another-tree","symmetric-tree"]},s="Binary Trees",d={unversionedId:"data-structures/j-binary-trees",id:"data-structures/j-binary-trees",title:"Binary Trees",description:"- Understanding binary trees",source:"@site/docs/data-structures/j-binary-trees.md",sourceDirName:"data-structures",slug:"/data-structures/j-binary-trees",permalink:"/dsa/docs/data-structures/j-binary-trees",draft:!1,tags:[{label:"binary-trees",permalink:"/dsa/docs/tags/binary-trees"},{label:"balanced-binary-tree",permalink:"/dsa/docs/tags/balanced-binary-tree"},{label:"binary-tree-level-order-traversal",permalink:"/dsa/docs/tags/binary-tree-level-order-traversal"},{label:"construct-binary-tree-from-preorder-and-inorder-traversal",permalink:"/dsa/docs/tags/construct-binary-tree-from-preorder-and-inorder-traversal"},{label:"diameter-of-binary-tree",permalink:"/dsa/docs/tags/diameter-of-binary-tree"},{label:"invert-binary-tree",permalink:"/dsa/docs/tags/invert-binary-tree"},{label:"maximum-depth-of-binary-tree",permalink:"/dsa/docs/tags/maximum-depth-of-binary-tree"},{label:"same-tree",permalink:"/dsa/docs/tags/same-tree"},{label:"serialize-and-deserialize-binary-tree",permalink:"/dsa/docs/tags/serialize-and-deserialize-binary-tree"},{label:"subtree-of-another-tree",permalink:"/dsa/docs/tags/subtree-of-another-tree"},{label:"symmetric-tree",permalink:"/dsa/docs/tags/symmetric-tree"}],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,id:"j-binary-trees",title:"Binary Trees",tags:["binary-trees","balanced-binary-tree","binary-tree-level-order-traversal","construct-binary-tree-from-preorder-and-inorder-traversal","diameter-of-binary-tree","invert-binary-tree","maximum-depth-of-binary-tree","same-tree","serialize-and-deserialize-binary-tree","subtree-of-another-tree","symmetric-tree"]},sidebar:"docs",previous:{title:"Binary Search Trees",permalink:"/dsa/docs/data-structures/i-binary-search-trees"},next:{title:"Graphs",permalink:"/dsa/docs/data-structures/k-graphs"}},u={},c=[{value:"Problems related to binary trees",id:"problems-related-to-binary-trees",level:2},{value:"\u2197 See LeetCode Problem #110",id:"-see-leetcode-problem-110",level:3},{value:"\u2197 See LeetCode Problem #102",id:"-see-leetcode-problem-102",level:3},{value:"\u2197 See LeetCode Problem #105",id:"-see-leetcode-problem-105",level:3},{value:"\u2197 See LeetCode Problem #543",id:"-see-leetcode-problem-543",level:3},{value:"\u2197 See LeetCode Problem #226",id:"-see-leetcode-problem-226",level:3},{value:"\u2197 See LeetCode Problem #104",id:"-see-leetcode-problem-104",level:3},{value:"\u2197 See LeetCode Problem #100",id:"-see-leetcode-problem-100",level:3},{value:"\u2197 See LeetCode Problem #297",id:"-see-leetcode-problem-297",level:3},{value:"\u2197 See LeetCode Problem #572",id:"-see-leetcode-problem-572",level:3},{value:"\u2197 See LeetCode Problem #101",id:"-see-leetcode-problem-101",level:3}],m={toc:c};function h(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"binary-trees"},"Binary Trees"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Understanding binary trees "),(0,a.kt)("li",{parentName:"ul"},"Solved problems are presented in alphabetical order")),(0,a.kt)("h2",{id:"problems-related-to-binary-trees"},"Problems related to binary trees"),(0,a.kt)("details",null,(0,a.kt)("summary",null," Balanced Binary Tree (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-110"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/balanced-binary-tree/"},"\u2197 See LeetCode Problem #110")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"//  Needs to implement TreeNode\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\n//  Utility class to store information from recursive calls\nfinal class TreeInfo {\n    public final boolean balanced;\n    public final int height;\n\n    public TreeInfo (boolean balanced, int height){\n        this.balanced = balanced;\n        this.height = height;\n    }\n}\n\npublic class Solution {\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n\n    //  Return whether or not the tree at root is balanced while...\n    //      also storing the tree's height in a reference varialbe\n    private TreeInfo isBalancedTreeHelper(TreeNode root) {\n        //  An empty tree is balanced and has height = -1\n        if (root == null) {\n            return new TreeInfo(true, -1);\n        }\n\n        //  Check subtree to see if they are balanced\n        TreeInfo left = isBalancedTreeHelper(root.left);\n        if (!left.balanced) {\n            return new TreeInfo(false, -1);\n        }\n\n        //  Use the height obtained from the recursive calls to...\n        //      determine if the current node is also balanced\n        TreeInfo right = isBalancedTreeHelper(root.right);\n        if (!right.balanced) {\n            return new TreeInfo(false, -1);\n        }\n\n        if (java.lang.Math.abs(left.height - right.height) < 2) {\n            return new TreeInfo(\n                    true, java.lang.Math.max(left.height, right.height) + 1);\n        }\n\n        return new TreeInfo(false, -1);\n    }\n\n    public boolean isBalanced(TreeNode root) {\n\n        return isBalancedTreeHelper(root).balanced;\n\n    }\n\n    public static void main(String[] args) {\n\n    }\n}\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Binary Tree Level Order Traversal (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-102"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/binary-tree-level-order-traversal/"},"\u2197 See LeetCode Problem #102")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"import com.sun.source.tree.Tree;\n\nimport java.util.Deque;\nimport java.util.ArrayDeque;\nimport java.util.List;\nimport java.util.ArrayList;\n\nclass TreeNode {\n\n   int val;\n   TreeNode left;\n   TreeNode right;\n\n    //   Empty constructor to allow empty TreeNode\n    TreeNode () {\n    }\n\n   TreeNode (int val) {\n      this.val = val;\n   }\n\n//   TreeNode (int val, TreeNode left, TreeNode right) {\n//      this.val = val;\n//      this.left = left;\n//      this.right = right;\n//   }\n}\n\npublic class Solution {\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n    public static List<List<Integer>> levelOrder(TreeNode root) {\n\n        List<List<Integer>> outputList = new ArrayList<>();\n\n        if (root == null) {\n            return outputList;\n        }\n\n        Deque<TreeNode> levelQueue = new ArrayDeque<>();\n        levelQueue.offer(root);\n\n        while (!levelQueue.isEmpty()) {\n            int currentSize = levelQueue.size();\n\n            List<Integer> currentList = new ArrayList<>();\n\n            for (int i = 0; i < currentSize; i++) {\n                TreeNode currentNode = levelQueue.poll();\n                currentList.add(currentNode.val);\n\n                if (currentNode.left != null) {\n                    levelQueue.offer(currentNode.left);\n                }\n\n                if (currentNode.right != null) {\n                    levelQueue.offer(currentNode.right);\n                }\n            }\n            outputList.add(currentList);\n        }\n\n        return outputList;\n    }\n\n        public static void main (String[] ars) {\n\n        //  Example 1\n        TreeNode root1 = new TreeNode(3);\n        root1.left = new TreeNode(9);\n        root1.right = new TreeNode(20);\n        root1.right.left = new TreeNode(15);\n        root1.right.right = new TreeNode(7);\n        //  O/P: [[3],[9,20],[15,7]]\n\n        System.out.println(levelOrder(root1));\n        System.out.println();\n\n        //  Example 2\n        TreeNode root2 = new TreeNode(1);\n        //  O/P: [[1]]\n        System.out.println(levelOrder(root2));\n        System.out.println();\n\n        //  [PROBLEMATIC] Example 3\n        TreeNode root3 = new TreeNode();\n        //  O/P: []\n        System.out.println(levelOrder(root3));\n\n    }\n}\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Construct Binary Tree from Preorder and Inorder Traversal (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-105"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"},"\u2197 See LeetCode Problem #105")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},'// WILL BE UPDATED SOON!!!\npublic class Solution {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n'))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Diameter of Binary Tree (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-543"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/diameter-of-binary-tree/"},"\u2197 See LeetCode Problem #543")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"class TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\n\npublic class Solution {\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n//class Solution {\n\n    //  Global variable to store diameter\n    static int d;\n\n    //  Method to return the longest diameter\n    static int diameterOfBinaryTree(TreeNode root) {\n\n        d = 0;\n        longestPath(root);\n        return d;\n    }\n\n    //  Private method to implement the depth-first search\n    //      to find the longest diameter\n    static int longestPath(TreeNode root) {\n        if (root == null) {\n            return 0;\n        }\n\n        //  Recursively find the longest path in\n        //      both left child and right child\n        int leftPath = longestPath(root.left);\n        int rightPath = longestPath(root.right);\n\n        //  Update the diameter if leftPath + rightPath is\n        //      greater than current diameter\n        d = Math.max(d, leftPath + rightPath);\n\n        //  Return the longest path between leftPath and rightPath\n        //  Remember to add 1 for the path connecting the node and its parent\n        return Math.max(leftPath, rightPath) + 1;\n    }\n\n    public static void main(String[] args) {\n\n        // Example 1:\n        int[] dataArray1 = {1,2,3,4,5};\n        //  O/P: 3\n\n        // Example 2:\n        int[] dataArray2 = {1,2};\n        //  O/P: 1\n\n        TreeNode treeNode = new TreeNode();\n\n    }\n\n}\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Invert Binary Tree (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-226"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/invert-binary-tree/"},"\u2197 See LeetCode Problem #226")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0}," class TreeNode {\n     int val;\n     TreeNode left;\n     TreeNode right;\n     TreeNode() {}\n     TreeNode(int val) { this.val = val; }\n     TreeNode(int val, TreeNode left, TreeNode right) {\n         this.val = val;\n         this.left = left;\n         this.right = right;\n     }\n }\n\npublic class Solution {\n    /**\n     * Definition for a binary tree node.\n     * public class TreeNode {\n     *     int val;\n     *     TreeNode left;\n     *     TreeNode right;\n     *     TreeNode() {}\n     *     TreeNode(int val) { this.val = val; }\n     *     TreeNode(int val, TreeNode left, TreeNode right) {\n     *         this.val = val;\n     *         this.left = left;\n     *         this.right = right;\n     *     }\n     * }\n     */\n//    class Solution {\n        static TreeNode invertTree(TreeNode root) {\n\n            if (root == null) {\n                return null;\n            }\n\n            TreeNode right = invertTree(root.right);\n            TreeNode left = invertTree(root.left);\n\n            root.left = right;\n            root.right = left;\n\n            return root;\n\n        }\n\n    public static void main(String[] args) {\n\n    }\n}\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Maximum Depth of Binary Tree (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-104"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"},"\u2197 See LeetCode Problem #104")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"//  Needs to implement TreeNode\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\npublic class Solution {\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n//class Solution {\n    static int maxDepth(TreeNode root) {\n\n        if (root == null) {\n            return 0;\n        } else {\n            int leftHeight = maxDepth(root.left);\n            int rightHeight = maxDepth(root.right);\n\n            return java.lang.Math.max(leftHeight, rightHeight) + 1;\n        }\n    }\n\n    public static void main(String[] args) {\n\n    }\n}\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Same Tree (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-100"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/same-tree/"},"\u2197 See LeetCode Problem #100")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"//  Needs to implement tree\n\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\nclass Solution {\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n//class Solution {\n    static boolean isSameTree(TreeNode p, TreeNode q) {\n        if (p == null && q == null) {\n            return true;\n        } else if (p == null || q == null || p.val != q.val) {\n            return false;\n        }\n\n        return  isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\n\n    }\n\n    public static void main(String[] args) {\n    }\n}\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Serialize and Deserialize Binary Tree (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-297"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"},"\u2197 See LeetCode Problem #297")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"//  Need to implement tree\n\nimport java.util.ArrayDeque;\n\n//  Needs to implement TreeNode\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode(int x) { val = x; }\n}\n\npublic class Solution {\n    /**\n     * Definition for a binary tree node.\n     * public class TreeNode {\n     * int val;\n     * TreeNode left;\n     * TreeNode right;\n     * TreeNode(int x) { val = x; }\n     * }\n     */\n    static class Codec {\n\n        //  Postorder DFS follows: left -> right -> root\n        public StringBuilder postorderDFS(TreeNode root,\n                                          StringBuilder sBuilder) {\n\n            if (root == null) {\n                return sBuilder;\n            }\n\n            postorderDFS(root.left, sBuilder);\n            postorderDFS(root.right, sBuilder);\n            sBuilder.append(root.val);\n            sBuilder.append(' ');\n\n            return sBuilder;\n        }\n\n        // Encoding a tree to a single string\n        public String serialize(TreeNode root) {\n\n            StringBuilder sBuilder = postorderDFS(root, new StringBuilder());\n\n            if (sBuilder.length() > 0) {\n                sBuilder.deleteCharAt(sBuilder.length() - 1);\n            }\n\n            return sBuilder.toString();\n        }\n\n        public TreeNode deserializeHelper(Integer low,\n                                          Integer high,\n                                          ArrayDeque<Integer> arrayDeque) {\n            if (arrayDeque.isEmpty()) {\n                return null;\n            }\n\n            int val = arrayDeque.getLast();\n\n            if (val < low || val > high) {\n                return null;\n            }\n\n            arrayDeque.removeLast();\n            TreeNode root = new TreeNode(val);\n            root.right = deserializeHelper(val, high, arrayDeque);\n            root.left = deserializeHelper(low, val, arrayDeque);\n            return root;\n        }\n\n        // Decoding the encoded data to tree.\n        public TreeNode deserialize(String data) {\n\n            if (data.isEmpty()) {\n                return null;\n            }\n\n            ArrayDeque<Integer> arrayDeque = new ArrayDeque<>();\n\n            for (String string : data.split(\"\\\\s+\")) {\n                arrayDeque.add(Integer.valueOf(string));\n            }\n\n            return deserializeHelper(Integer.MIN_VALUE,\n                    Integer.MAX_VALUE, arrayDeque);\n        }\n    }\n\n    public static void main(String[] args) {\n\n        // Example 1:\n        int[] root1 = {2, 1, 3};\n        //  O/P: [2,1,3]\n\n        // Example 2:\n        int[] root2 = {};\n        //  O/P: []\n\n    }\n}\n\n// Your Codec object will be instantiated and called as such:\n// Codec ser = new Codec();\n// Codec deser = new Codec();\n// String tree = ser.serialize(root);\n// TreeNode ans = deser.deserialize(tree);\n// return ans;\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Subtree of Another Tree (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-572"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/subtree-of-another-tree/"},"\u2197 See LeetCode Problem #572")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"//  Needs to implement TreeNode\n\nclass TreeNode {\n     int val;\n     TreeNode left;\n     TreeNode right;\n     TreeNode() {}\n     TreeNode(int val) { this.val = val; }\n     TreeNode(int val, TreeNode left, TreeNode right) {\n         this.val = val;\n         this.left = left;\n         this.right = right;\n     }\n }\n\npublic class Solution {\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n//class Solution {\n    static boolean isSubtree(TreeNode root, TreeNode subRoot) {\n\n        if (subRoot == null) {\n            return true;\n        }\n\n        if (root == null) {\n            return false;\n        }\n\n        if (isSameTree(root, subRoot)){\n            return true;\n        }\n\n        return (isSubtree(root.left, subRoot) ||\n                isSubtree(root.right, subRoot));\n    }\n\n    private static boolean isSameTree(TreeNode root1, TreeNode root2) {\n        if (root1 == null && root2 == null) {\n            return true;\n        }\n\n        if (root1 == null || root2 == null || root1.val != root2.val) {\n            return false;\n        }\n\n        return (isSameTree(root1.left, root2.left) &&\n                isSameTree(root1.right, root2.right));\n\n    }\n\n    public static void main(String[] args) {\n\n    }\n}\n"))))),(0,a.kt)("details",null,(0,a.kt)("summary",null," Symmetric Tree (Expand/Collapse) "),(0,a.kt)("h3",{id:"-see-leetcode-problem-101"},(0,a.kt)("a",{parentName:"h3",href:"https://leetcode.com/problems/symmetric-tree/"},"\u2197 See LeetCode Problem #101")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:"showLineNumbers",showLineNumbers:!0},"//  TreeNode needs to be implemented\n\nclass TreeNode {\n    int val;\n    TreeNode left;\n    TreeNode right;\n    TreeNode() {}\n    TreeNode(int val) { this.val = val; }\n    TreeNode(int val, TreeNode left, TreeNode right) {\n        this.val = val;\n        this.left = left;\n        this.right = right;\n    }\n}\n\npublic class Solution {\n/**\n * Definition for a binary tree node.\n * public class TreeNode {\n *     int val;\n *     TreeNode left;\n *     TreeNode right;\n *     TreeNode() {}\n *     TreeNode(int val) { this.val = val; }\n *     TreeNode(int val, TreeNode left, TreeNode right) {\n *         this.val = val;\n *         this.left = left;\n *         this.right = right;\n *     }\n * }\n */\n//class Solution {\n    public boolean isSymmetric(TreeNode root) {\n        return isMirror(root, root);\n    }\n\n    public boolean isMirror(TreeNode root1, TreeNode root2) {\n        if (root1 == null && root2 == null) {\n            return true;\n        }\n        if (root1 == null || root2 == null) {\n            return false;\n        }\n\n        return (root1.val == root2.val)\n                && isMirror(root1.left, root2.right)\n                && isMirror(root1.right, root2.left);\n\n    }\n\n    public static void main(String[] args) {\n\n    }\n}\n"))))))}h.isMDXComponent=!0}}]);