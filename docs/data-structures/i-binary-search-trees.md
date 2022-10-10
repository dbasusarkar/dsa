---
sidebar_position: 9 
id: i-binary-search-trees
title: Binary Search Trees
tags: [
    binary-search-trees, 
    kth-smallest-element-in-a-bst,
    lowest-common-ancestor-of-a-bst,
    two-sum-iv-input-is-a-bst,
    validate-binary-search-tree,
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Binary Search Trees

- Understanding binary search trees 
- Solved problems are presented in alphabetical order

## Problems related to binary search trees 

<details> 
<summary> Kth Smallest Element in a BST </summary> 

### [↗ See LeetCode Problem #230](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Deque;
import java.util.ArrayDeque;

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
    public static int kthSmallest(TreeNode root, int k) {

        if (root == null) {
            return -1;
        }

        Deque<TreeNode> myStack = new ArrayDeque<>();

        while (true) {
            while (root != null) {
                myStack.push(root);
                root = root.left;
            }

            root = myStack.pop();

            if (--k == 0) {
                return root.val;
            }

            root = root.right;
        }
    }

    public static void main(String[] args) {
        // Example 1:
        // Input: root = [3,1,4,null,2], k = 1

        //          3
        //        /   \
        //       1     4
        //        \
        //         2

        TreeNode lA2 = new TreeNode(2, null, null);
        TreeNode lA1 = new TreeNode(1, null, lA2);
        TreeNode rA1 = new TreeNode(4, null, null);
        TreeNode rootA1 = new TreeNode(3, lA1, rA1);
        int k1 = 1;
        //  O/P: 1

        System.out.println(kthSmallest(rootA1, k1));

        // Example 2:
        // Input: root = [5,3,6,2,4,null,null,1], k = 3

        //          5
        //        /   \
        //       3     6
        //     /  \
        //    2    4
        //   /
        //  1

        TreeNode lB3 = new TreeNode(1, null, null);
        TreeNode lB2 = new TreeNode(2, lB3, null);
        TreeNode rB2 = new TreeNode(4, null, null);
        TreeNode lB1 = new TreeNode(3, lB2, rB2);
        TreeNode rB1 = new TreeNode(6, null, null);
        TreeNode rootB1 = new TreeNode(5, lB1, rB1);
        int k2 = 3;
        System.out.println(kthSmallest(rootB1, k2));
        //  O/P: 3
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Lowest Common Ancestor of a Binary Search Tree </summary> 

### [↗ See LeetCode Problem #235](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
// Needs to implement TreeNode in the main method

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
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

//class Solution {
    static TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {

        TreeNode current = root;

        while (current != null) {

            if (p.val > current.val && q.val > current.val) {
                current = current.right;
            } else if (p.val < current.val && q.val < current.val) {
                current = current.left;
            } else {
                return current;
            }

        }

        return null;
    }

    public static void main(String[] args) {
        // Example 1:
        //
        //
        //Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
        //Output: 6
        //Explanation: The LCA of nodes 2 and 8 is 6.
        //
        //
        // Example 2:
        //
        //
        //Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
        //Output: 2
        //Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant
        //of itself according to the LCA definition.
        //
        //
        // Example 3:
        //
        //
        //Input: root = [2,1], p = 2, q = 1
        //Output: 2
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Two Sum IV - Input is a BST </summary> 

### [↗ See LeetCode Problem #653](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)

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
//class Solution {

    Map<Integer, Integer> hMap = new HashMap<>();
    int nodeCount = 0;
    boolean flag = false;

    public boolean findTarget(TreeNode root, int k) {
        recursionHelper(root, k);
        return flag;
    }

    private void recursionHelper(TreeNode root, int k) {

        if (root == null) {
            return;
        }

        this.hMap.put(root.val, nodeCount++);

        int complement = k - root.val;

        if (hMap.containsKey(complement) &&
                hMap.get(complement) != nodeCount - 1) {
            flag = true;
        }

        if (root.left != null) {
            recursionHelper(root.left, k);
        }

        if (root.right != null) {
            recursionHelper(root.right, k);
        }

    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example 1:
        //Input: root = [5,3,6,2,4,null,7], k = 9
        TreeNode root = new TreeNode(5);
        root.left = new TreeNode(3);
        root.right = new TreeNode(6);
        root.left.left = new TreeNode(2);
        root.left.right = new TreeNode(4);
        root.right.left = new TreeNode(7);

//        int k1 = 9;

//        System.out.println(solution.findTarget(root, k1));
        //Output: true

        // Example 2:
        //Input: root = [5,3,6,2,4,null,7], k = 28
        //  SAME as root in Example 1

        int k2 = 28;

        System.out.println(solution.findTarget(root, k2));
        //Output: false

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Validate Binary Search Tree </summary> 

### [↗ See LeetCode Problem #98](https://leetcode.com/problems/validate-binary-search-tree/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
//  Needs to implement Treenode
class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;

    TreeNode() {

    }

    TreeNode(int val) {
        this.val = val;
    }

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
     * int val;
     * TreeNode left;
     * TreeNode right;
     * TreeNode() {}
     * TreeNode(int val) { this.val = val; }
     * TreeNode(int val, TreeNode left, TreeNode right) {
     * this.val = val;
     * this.left = left;
     * this.right = right;
     * }
     * }
     */
//    class Solution {

    //  We use Integer instead of int as it supports a null value
    private static Integer prev;

    public boolean isValidBST(TreeNode root) {
        prev = null;
        return inorder(root);
    }

    private boolean inorder(TreeNode root) {

        if (root == null) {
            return true;
        }

        if (!inorder(root.left)) {
            return false;
        }

        if (prev != null && root.val <= prev) {
            return false;
        }

        prev = root.val;
        return inorder(root.right);

    }

    public static void main(String[] args) {

        // Example 1:
        //Input: root = [2,1,3]
        //Output: true

        // Example 2:
        //Input: root = [5,1,4,null,null,3,6]
        //Output: false
    }
}
```

</TabItem>
</Tabs>

</details>