---
sidebar_position: 9 
id: j-binary-trees
title: Binary Trees
tags: [
    binary-trees,
    balanced-binary-tree,
    binary-tree-level-order-traversal,
    construct-binary-tree-from-preorder-and-inorder-traversal,
    diameter-of-binary-tree,
    invert-binary-tree,
    maximum-depth-of-binary-tree, 
    same-tree,
    serialize-and-deserialize-binary-tree,
    subtree-of-another-tree,
    symmetric-tree,
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Binary Trees

- Understanding binary trees 
- Solved problems are presented in alphabetical order

## Problems related to binary trees 

<details> 
<summary> Balanced Binary Tree </summary> 

### [↗ See LeetCode Problem #110](https://leetcode.com/problems/balanced-binary-tree/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
//  Needs to implement TreeNode
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

//  Utility class to store information from recursive calls
final class TreeInfo {
    public final boolean balanced;
    public final int height;

    public TreeInfo (boolean balanced, int height){
        this.balanced = balanced;
        this.height = height;
    }
}

public class Solution {
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

    //  Return whether or not the tree at root is balanced while...
    //      also storing the tree's height in a reference varialbe
    private TreeInfo isBalancedTreeHelper(TreeNode root) {
        //  An empty tree is balanced and has height = -1
        if (root == null) {
            return new TreeInfo(true, -1);
        }

        //  Check subtree to see if they are balanced
        TreeInfo left = isBalancedTreeHelper(root.left);
        if (!left.balanced) {
            return new TreeInfo(false, -1);
        }

        //  Use the height obtained from the recursive calls to...
        //      determine if the current node is also balanced
        TreeInfo right = isBalancedTreeHelper(root.right);
        if (!right.balanced) {
            return new TreeInfo(false, -1);
        }

        if (java.lang.Math.abs(left.height - right.height) < 2) {
            return new TreeInfo(
                    true, java.lang.Math.max(left.height, right.height) + 1);
        }

        return new TreeInfo(false, -1);
    }

    public boolean isBalanced(TreeNode root) {

        return isBalancedTreeHelper(root).balanced;

    }

    public static void main(String[] args) {

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Binary Tree Level Order Traversal </summary> 

### [↗ See LeetCode Problem #102](https://leetcode.com/problems/binary-tree-level-order-traversal/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import com.sun.source.tree.Tree;

import java.util.Deque;
import java.util.ArrayDeque;
import java.util.List;
import java.util.ArrayList;

class TreeNode {

   int val;
   TreeNode left;
   TreeNode right;

    //   Empty constructor to allow empty TreeNode
    TreeNode () {
    }

   TreeNode (int val) {
      this.val = val;
   }

//   TreeNode (int val, TreeNode left, TreeNode right) {
//      this.val = val;
//      this.left = left;
//      this.right = right;
//   }
}

public class Solution {
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
    public static List<List<Integer>> levelOrder(TreeNode root) {

        List<List<Integer>> outputList = new ArrayList<>();

        if (root == null) {
            return outputList;
        }

        Deque<TreeNode> levelQueue = new ArrayDeque<>();
        levelQueue.offer(root);

        while (!levelQueue.isEmpty()) {
            int currentSize = levelQueue.size();

            List<Integer> currentList = new ArrayList<>();

            for (int i = 0; i < currentSize; i++) {
                TreeNode currentNode = levelQueue.poll();
                currentList.add(currentNode.val);

                if (currentNode.left != null) {
                    levelQueue.offer(currentNode.left);
                }

                if (currentNode.right != null) {
                    levelQueue.offer(currentNode.right);
                }
            }
            outputList.add(currentList);
        }

        return outputList;
    }

        public static void main (String[] ars) {

        //  Example 1
        TreeNode root1 = new TreeNode(3);
        root1.left = new TreeNode(9);
        root1.right = new TreeNode(20);
        root1.right.left = new TreeNode(15);
        root1.right.right = new TreeNode(7);
        //  O/P: [[3],[9,20],[15,7]]

        System.out.println(levelOrder(root1));
        System.out.println();

        //  Example 2
        TreeNode root2 = new TreeNode(1);
        //  O/P: [[1]]
        System.out.println(levelOrder(root2));
        System.out.println();

        //  [PROBLEMATIC] Example 3
        TreeNode root3 = new TreeNode();
        //  O/P: []
        System.out.println(levelOrder(root3));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Binary Tree Right Side View </summary> 

### [↗ See LeetCode Problem #199](https://leetcode.com/problems/binary-tree-right-side-view/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.List;
import java.util.ArrayList;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution {
   /**
     * --------------------*
     * Complexity Analysis
     * --------------------*
     * Time Complexity: O(n) where n is the number of nodes
     * Space Complexity: O(h) where h is the height of the tree;
     *                   however, it's O(n) in the worst case
     *                   (skewed tree)
     */

    /**
     * -----------------------------*
     * Approach: DFS Using Recursion
     * -----------------------------*
     */

    //  Declare and initialize an instance/member variable
    //      (an ArrayList) to be returned as the answer
    List<Integer> rightSideValues = new ArrayList<>();

    /**
     * @param  root             the root node of the given tree
     * @return rightSideValues  ArrayList with values corresponding to nodes
     *                              that can be seen from the right side
     */

    public List<Integer> rightSideView(TreeNode root) {
//        //  Check edge case
        if (root == null) {
            //  If the given roo node is null
            //      return rightSideValues as is (i.e. empty)
            return this.rightSideValues;
        }

        //  Call the helper method;
        //      start from the root level (hence level depth = 0)
        recursionHelper(root, 0);

        //  Return rightSideValues updated in the previous statement
        return rightSideValues;
    }

    /**
     * @param   root            the given root node
     * @param   levelDepth      the depth of the starting level
     */
    private void recursionHelper(TreeNode root, int levelDepth) {
        //  If you want to use the pre-increment operator on level depths
        //      declare two separate variables for left and right subtrees
//        int rightLevelDepth = levelDepth;
//        int leftLevelDepth = levelDepth;

        //  Update rightSideValues if its size has the same value
        //      as the depth of the current level
        if (this.rightSideValues.size() == levelDepth) {
            this.rightSideValues.add(root.val);
        }

        //  Call the recursionHelper FIRST on root.right b/c right side view
        //  If the current node/root has a right child (subtree)
        //      make a recursive call after (hence pre-increment operator)
        //      increasing the value of levelDepth by 1
        if (root.right != null) {
            recursionHelper(root.right, levelDepth + 1);
//            recursionHelper(root.right, ++rightLevelDepth);
        }

        //  If the current node/root has a left child (subtree)
        //      make a recursive call after (hence pre-increment operator)
        //      increasing the value of levelDepth by 1
        if (root.left != null) {
            recursionHelper(root.left, levelDepth + 1);
//            recursionHelper(root.left, ++leftLevelDepth);
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example 1:
        //Input: root = [1,2,3,null,5,null,4]
//        TreeNode root1 = new TreeNode(1);
//        root1.left = new TreeNode(2);
//        root1.right = new TreeNode(3);
//        root1.left.right = new TreeNode(5);
//        root1.right.right = new TreeNode(4);
//
//        System.out.println("Example 1: " + solution.rightSideView(root1));
        //  O/P: [1,3,4]

        System.out.println();
        // Example 2:
        //Input: root = [1,null,3]
        TreeNode root2 = new TreeNode(1);
        root2.right = new TreeNode(3);

        System.out.println("Example 2: " + solution.rightSideView(root2));
        //  O/P: [1,3]

        System.out.println();
        // Example 3:
//        //Input: root = []
//        TreeNode root3 = new TreeNode();
//
//        System.out.println("Example 3: " + solution.rightSideView(root3));
        //Output: []
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Construct Binary Tree from Preorder and Inorder Traversal </summary> 

### [↗ See LeetCode Problem #105](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Map;
import java.util.HashMap;

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution {
    /**
     * Definition for a binary tree node.
     * public class TreeNode {
     *     int val;
     *     TreeNode left;
     *     TreeNode right;
     *     TreeNode() {}
     *     TreeNode(int val) { this.val = val; }
     *     TreeNode(int val, TreeNode left, TreeNode right) {
     *         this.val = val;
     *         this.left = left;
     *         this.right = right;
     *     }
     * }
     */

    //  Recursive Approch
    //  Time Complexity: O(N)
    //  Space Complexity: O(N)

    //  Breaking down the probblem:
    //      we have int[] preorder and int[] inorder
    //      for the SAME binary tree
    //      we need the return the binary tree

    //  Preorder traversal means, traversing
    //      root node -> left node -> right node
    //  Inorder traversal means, traversing
    //      left node-> root node -> right node

    //  So, the very first element of int[] preorder
    //      is the root of the binary tree

    //  Since, int[] preorder and int[] inorder consist
    //      of UNIQUE values (see constraints), we can use
    //      a hashmap (hash table) to store the node values
    //      and corresponding indices from int[] inorder
    //      to find index the root node in int[] inorder.

    //   For inroder traversl:
    //      left node-> root node -> right node,
    //      so, we can use the root index in int[] inorder
    //      to find the left and right subtrees
    //      on its left and right sides

    //  Finally, to build the binary tree we can use
    //      recursion on left and right subtrees
    //  NOTE:   We will keep using int[] preorder
    //              to find the root nodes for subtress
    //          And, we will use the hashmap from int[] inorder
    //          to determine the right index of the left subtree
    //          and the left index of the right subtree
    //          using the index of the root node in each subtree

    //  Declare a global variable to store
    //      the root indices from int[] inorder
    //  And, initialize it with 0
    private int rootIndex;

    //  Declare a Map data structure to build a hash table
    //      to store the node values and corresponding indices
    //      from int[] inorder
    private Map<Integer, Integer> inorderTraversalMap;

    public TreeNode buildTree(int[] preorder, int[] inorder) {
        //  Initialize the rootIndex with 0
        rootIndex = 0;

        //  Build the hashmap as mentioned earlier
        inorderTraversalMap = new HashMap<>();
        for (int i = 0; i < inorder.length; i++) {
            //  key = node value
            //  value = index of node value
            inorderTraversalMap.put(inorder[i], i);
        }


        return recursiveHelper(preorder, rootIndex, preorder.length - 1);
    }

    public TreeNode recursiveHelper(int[] traversalArray,
                                    int leftIndex,
                                    int rightIndex) {

        //  Recursion base case: returns null if
        //      the left index in greater than the right index
        if (leftIndex > rightIndex) {
            return null;
        }

        //  Store the first element of the given preorder traversal array
        //       as the value of the root node
        //  rootIndex++: means FIRST apply rootIndex in the current statement
        //      and then increase its value by 1 (to be used for a later call)
        int nodeValue = traversalArray[rootIndex++];
        TreeNode root = new TreeNode(nodeValue);

        //  Recursively build the left subtree
        root.left = recursiveHelper(traversalArray,
                leftIndex,
                inorderTraversalMap.get(nodeValue) - 1);

        //  Recursively build the right subtree
        root.right = recursiveHelper(traversalArray,
                inorderTraversalMap.get(nodeValue) + 1,
                rightIndex);

        return root;
    }

    public static void main(String[] args) {

        Solution solution = new Solution();

        // Example 1:
        int[] preorder = {3,9,20,15,7};
        int [] inorder = {9,3,15,20,7};
        //  .val to print only the value of root node
        System.out.println(solution.buildTree(preorder, inorder).val);

        System.out.println("---");
        // Example 2:
        preorder = new int[] {-1};
        inorder = new int[] {-1};
        //  .val to print only the value of root node
        System.out.println(solution.buildTree(preorder, inorder).val);
    }
}
```

</TabItem>
</Tabs>

</details>


<details> 
<summary> Diameter of Binary Tree </summary> 

### [↗ See LeetCode Problem #543](https://leetcode.com/problems/diameter-of-binary-tree/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


public class Solution {
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
//class Solution {

    //  Global variable to store diameter
    static int d;

    //  Method to return the longest diameter
    static int diameterOfBinaryTree(TreeNode root) {

        d = 0;
        longestPath(root);
        return d;
    }

    //  Private method to implement the depth-first search
    //      to find the longest diameter
    static int longestPath(TreeNode root) {
        if (root == null) {
            return 0;
        }

        //  Recursively find the longest path in
        //      both left child and right child
        int leftPath = longestPath(root.left);
        int rightPath = longestPath(root.right);

        //  Update the diameter if leftPath + rightPath is
        //      greater than current diameter
        d = Math.max(d, leftPath + rightPath);

        //  Return the longest path between leftPath and rightPath
        //  Remember to add 1 for the path connecting the node and its parent
        return Math.max(leftPath, rightPath) + 1;
    }

    public static void main(String[] args) {

        // Example 1:
        int[] dataArray1 = {1,2,3,4,5};
        //  O/P: 3

        // Example 2:
        int[] dataArray2 = {1,2};
        //  O/P: 1

        TreeNode treeNode = new TreeNode();

    }

}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Invert Binary Tree </summary> 

### [↗ See LeetCode Problem #226](https://leetcode.com/problems/invert-binary-tree/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
 class TreeNode {
     int val;
     TreeNode left;
     TreeNode right;
     TreeNode() {}
     TreeNode(int val) { this.val = val; }
     TreeNode(int val, TreeNode left, TreeNode right) {
         this.val = val;
         this.left = left;
         this.right = right;
     }
 }

public class Solution {
    /**
     * Definition for a binary tree node.
     * public class TreeNode {
     *     int val;
     *     TreeNode left;
     *     TreeNode right;
     *     TreeNode() {}
     *     TreeNode(int val) { this.val = val; }
     *     TreeNode(int val, TreeNode left, TreeNode right) {
     *         this.val = val;
     *         this.left = left;
     *         this.right = right;
     *     }
     * }
     */
//    class Solution {
        static TreeNode invertTree(TreeNode root) {

            if (root == null) {
                return null;
            }

            TreeNode right = invertTree(root.right);
            TreeNode left = invertTree(root.left);

            root.left = right;
            root.right = left;

            return root;

        }

    public static void main(String[] args) {

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Lowest Common Ancestor of a Binary Tree </summary> 

### [↗ See LeetCode Problem #236](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

public class Solution {
   public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        //  Time Complexity: O(n)
        //  Space Complexity: O(1) when not considering the recursive call stack
        //                   O(h) when considering the recursive call stack
        //                      where h is the height of the tree

        //  Recursive Approach:
        //      High level Idea -
        //                  Step 1: Look for given nodes (p and q) following
        //                      left and right subtrees starting from the root;
        //                      use recursive calls
        //                  Step 2: If a node (p OR q) is found,
        //                          return not null to its parent node
        //                  Step 3: If no nodes found in a subtree returns null
        //                          to the parent node
        //                  Step 4: Check different possibilite using if
        //                          statements (see the code below)

        //  Base case
        if (root == null) {
            return null;
        }

        if (root == p || root == q) {
            return root;
        }

        //  Recursive calls to search the left subtree
        TreeNode leftNode = lowestCommonAncestor(root.left, p, q);

        //  Recursive calls to search the right subtree
        TreeNode rightNode = lowestCommonAncestor(root.right, p, q);

        //  If none of the left and right subtrees is null
        //      return root as the answer
        if (leftNode != null && rightNode != null) {
            return root;
        }

        //  If both of the left and right subtrees are null
        //      return null as the answer
        if (leftNode == null && rightNode == null) {
            return null;
        }

        //  If leftNode is null (and rightNode is not null)
        //      returns the rightNode as the answer,
        //  Or, if rightNode is null (and leftNode is not null)
        //      returns the leftNode as the answer,
        //  Since, we already tested other possibilities
        //      in the previous if statements
        return leftNode != null ? leftNode : rightNode;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example 1:
        //Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1

        //  Building the tree
        TreeNode root = new TreeNode(3);
        TreeNode p = root.left = new TreeNode(5);   //  Also given TreeNode p
        TreeNode q = root.right = new TreeNode(1);  //  Also given TreeNode q
        root.left.left = new TreeNode(6);
        root.left.right = new TreeNode(2);
        root.right.left = new TreeNode(0);
        root.right.right = new TreeNode(8);
        root.left.right.left = new TreeNode(7);
        root.left.right.right = new TreeNode(4);

        System.out.println(solution.lowestCommonAncestor(root, p, q).val);
        //  O/P: 3

        System.out.println("---");
        // Example 2:
        //Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
        //  Building the tree
        root = new TreeNode(3);
        p = root.left = new TreeNode(5);   //  Also given TreeNode p
        root.right = new TreeNode(1);  //  Also given TreeNode q
        root.left.left = new TreeNode(6);
        root.left.right = new TreeNode(2);
        root.right.left = new TreeNode(0);
        root.right.right = new TreeNode(8);
        root.left.right.left = new TreeNode(7);
        q = root.left.right.right = new TreeNode(4);
        System.out.println(solution.lowestCommonAncestor(root, p, q).val);
        //  O/P: 5

        System.out.println("---");
        // Example 3:
        //Input: root = [1,2], p = 1, q = 2
        //  Building the tree
        p = root = new TreeNode(1);//  Also given TreeNode p
        q = root.left = new TreeNode(2);  //  Also given TreeNode q
        System.out.println(solution.lowestCommonAncestor(root, p, q).val);
        //  O/P: 1
    }
}
```

</TabItem>
</Tabs>

</details>


<details> 
<summary> Maximum Depth of Binary Tree </summary> 

### [↗ See LeetCode Problem #104](https://leetcode.com/problems/maximum-depth-of-binary-tree/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
//  Needs to implement TreeNode
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution {
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
//class Solution {
    static int maxDepth(TreeNode root) {

        if (root == null) {
            return 0;
        } else {
            int leftHeight = maxDepth(root.left);
            int rightHeight = maxDepth(root.right);

            return java.lang.Math.max(leftHeight, rightHeight) + 1;
        }
    }

    public static void main(String[] args) {

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Same Tree </summary> 

### [↗ See LeetCode Problem #100](https://leetcode.com/problems/same-tree/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
//  Needs to implement tree

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
//class Solution {
    static boolean isSameTree(TreeNode p, TreeNode q) {
        if (p == null && q == null) {
            return true;
        } else if (p == null || q == null || p.val != q.val) {
            return false;
        }

        return  isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

    }

    public static void main(String[] args) {
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Serialize and Deserialize Binary Tree </summary> 

### [↗ See LeetCode Problem #297](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
//  Need to implement tree

import java.util.ArrayDeque;

//  Needs to implement TreeNode
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode(int x) { val = x; }
}

public class Solution {
    /**
     * Definition for a binary tree node.
     * public class TreeNode {
     * int val;
     * TreeNode left;
     * TreeNode right;
     * TreeNode(int x) { val = x; }
     * }
     */
    static class Codec {

        //  Postorder DFS follows: left -> right -> root
        public StringBuilder postorderDFS(TreeNode root,
                                          StringBuilder sBuilder) {

            if (root == null) {
                return sBuilder;
            }

            postorderDFS(root.left, sBuilder);
            postorderDFS(root.right, sBuilder);
            sBuilder.append(root.val);
            sBuilder.append(' ');

            return sBuilder;
        }

        // Encoding a tree to a single string
        public String serialize(TreeNode root) {

            StringBuilder sBuilder = postorderDFS(root, new StringBuilder());

            if (sBuilder.length() > 0) {
                sBuilder.deleteCharAt(sBuilder.length() - 1);
            }

            return sBuilder.toString();
        }

        public TreeNode deserializeHelper(Integer low,
                                          Integer high,
                                          ArrayDeque<Integer> arrayDeque) {
            if (arrayDeque.isEmpty()) {
                return null;
            }

            int val = arrayDeque.getLast();

            if (val < low || val > high) {
                return null;
            }

            arrayDeque.removeLast();
            TreeNode root = new TreeNode(val);
            root.right = deserializeHelper(val, high, arrayDeque);
            root.left = deserializeHelper(low, val, arrayDeque);
            return root;
        }

        // Decoding the encoded data to tree.
        public TreeNode deserialize(String data) {

            if (data.isEmpty()) {
                return null;
            }

            ArrayDeque<Integer> arrayDeque = new ArrayDeque<>();

            for (String string : data.split("\\s+")) {
                arrayDeque.add(Integer.valueOf(string));
            }

            return deserializeHelper(Integer.MIN_VALUE,
                    Integer.MAX_VALUE, arrayDeque);
        }
    }

    public static void main(String[] args) {

        // Example 1:
        int[] root1 = {2, 1, 3};
        //  O/P: [2,1,3]

        // Example 2:
        int[] root2 = {};
        //  O/P: []

    }
}

// Your Codec object will be instantiated and called as such:
// Codec ser = new Codec();
// Codec deser = new Codec();
// String tree = ser.serialize(root);
// TreeNode ans = deser.deserialize(tree);
// return ans;
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Subtree of Another Tree </summary> 

### [↗ See LeetCode Problem #572](https://leetcode.com/problems/subtree-of-another-tree/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
//  Needs to implement TreeNode

class TreeNode {
     int val;
     TreeNode left;
     TreeNode right;
     TreeNode() {}
     TreeNode(int val) { this.val = val; }
     TreeNode(int val, TreeNode left, TreeNode right) {
         this.val = val;
         this.left = left;
         this.right = right;
     }
 }

public class Solution {
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
//class Solution {
    static boolean isSubtree(TreeNode root, TreeNode subRoot) {

        if (subRoot == null) {
            return true;
        }

        if (root == null) {
            return false;
        }

        if (isSameTree(root, subRoot)){
            return true;
        }

        return (isSubtree(root.left, subRoot) ||
                isSubtree(root.right, subRoot));
    }

    private static boolean isSameTree(TreeNode root1, TreeNode root2) {
        if (root1 == null && root2 == null) {
            return true;
        }

        if (root1 == null || root2 == null || root1.val != root2.val) {
            return false;
        }

        return (isSameTree(root1.left, root2.left) &&
                isSameTree(root1.right, root2.right));

    }

    public static void main(String[] args) {

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Symmetric Tree </summary> 

### [↗ See LeetCode Problem #101](https://leetcode.com/problems/symmetric-tree/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
//  TreeNode needs to be implemented

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

public class Solution {
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
//class Solution {
    public boolean isSymmetric(TreeNode root) {
        return isMirror(root, root);
    }

    public boolean isMirror(TreeNode root1, TreeNode root2) {
        if (root1 == null && root2 == null) {
            return true;
        }
        if (root1 == null || root2 == null) {
            return false;
        }

        return (root1.val == root2.val)
                && isMirror(root1.left, root2.right)
                && isMirror(root1.right, root2.left);

    }

    public static void main(String[] args) {

    }
}
```

</TabItem>
</Tabs>

</details>