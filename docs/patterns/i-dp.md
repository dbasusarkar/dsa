---
sidebar_position: 9 
id: i-dp 
title: Dynamic Programming 
tags: [
    dp,
    climbing-stairs,
    coin-change,
    longest-common-subsequence,
    partition-equal-subset-sum,
    unique-paths,    
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Dynamic Programming

- Understanding dynamic programming 
- Solved problems are presented in alphabetical order

## Problems related to dynamic programming 

<details> 
<summary> Climbing Stairs </summary> 

### [↗ See LeetCode Problem #70](https://leetcode.com/problems/climbing-stairs/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
   static int climbingStairs (int n) {

        if (n == 0 || n == 1) return 1;

        int[] numWays = new int[n + 1];

        numWays[0] = 1;
        numWays[1] = 1;

        for (int i = 2; i <= n; i++) {
            numWays[i] = numWays[i -1] + numWays[i - 2];
        }

        return numWays[n];
    }

    public static void main(String[] args) {
        int n1 = 2;
        int n2 = 3;
        int n3 = 8;

//        climbingStairs(n1);
//        climbingStairs(n2);
//        climbingStairs(n3);

        System.out.println(climbingStairs(n1));
        System.out.println(climbingStairs(n2));
        System.out.println(climbingStairs(n3));
    }

}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Coin Change </summary> 

### [↗ See LeetCode Problem #322](https://leetcode.com/problems/coin-change/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Arrays;

public class Solution {
    static int coinChange(int[] coins, int amount) {

        //  Approach: Dynamic Programming - Bottom Up
        //  Iterative Solution

        //  Because going from 0 to amount
        int max = amount + 1;
        int[] dp = new int[max];
        Arrays.fill(dp, max);
        dp[0] = 0;

        for (int i = 1; i <= amount; i++) {
            for (int j = 0; j < coins.length; j++) {
                if (coins[j] <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }

    public static void main(String[] args) {
        // Example 1:
        int[] coins1 = {1, 2, 5};
        int amount1 = 11;
        //  O/P: 3

        // Example 2:
        int[] coins2 = {2};
        int amount2 = 3;
        //  O/P: -1

        // Example 3:
        int[] coins3 = {1};
        int amount3 = 0;
        //  O/P: 0

        System.out.println(coinChange(coins1, amount1));
        System.out.println(coinChange(coins2, amount2));
        System.out.println(coinChange(coins3, amount3));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Longest Common Subsequence </summary> 

### [↗ See LeetCode Problem #1143](https://leetcode.com/problems/longest-common-subsequence/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    static int longestCommonSubsequence(String text1, String text2) {

        //   Make a grid of 0's with text2.length() + 1 columns
        //      and text1.length() + 1 rows
        int[][] dpGrid = new int[text1.length() + 1][text2.length() + 1];

        //  Iterate up each column, starting from the last one
        for (int col = text2.length() - 1; col >=0; col--) {
            for (int row = text1.length() - 1; row >=0; row--) {
                //  If the corresponding characters for this cell are the same
                if (text1.charAt(row) == text2.charAt(col)) {
                    dpGrid[row][col] = 1 + dpGrid[row + 1][col + 1];
                    //  Otherwise they must be different
                } else {
                    dpGrid[row][col] = Math.max(dpGrid[row + 1][col],
                            dpGrid[row][col + 1]);
                }
            }
        }
        //  The original problem's answer is in dpGrid[0][0]. Return it.
        return dpGrid[0][0];
    }

    public static void main(String[] args) {
        // Example 1:
        String textA1 = "abcde";
        String textA2 = "ace";
        //  O/P: 3

        // Example 2:
        String textB1 = "abc";
        String textB2 = "abc";
        //  O/P: 3

        // Example 3:
        String textC1 = "abc";
        String textC2 = "def";
        //  O/P: 0

        System.out.println(longestCommonSubsequence(textA1, textA2));
        System.out.println(longestCommonSubsequence(textB1, textB2));
        System.out.println(longestCommonSubsequence(textC1, textC2));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Maximum Subarray </summary> 

### [↗ Maximum Subarray](../algorithms/e-greedy.mdx)

</details>

<details> 
<summary> Partition Equal Subset Sum </summary> 

### [↗ See LeetCode Problem #416](https://leetcode.com/problems/partition-equal-subset-sum/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    public static boolean canPartition(int[] nums) {
        //  Check for empty given array of integers (nums)
        //  If nums is empty return false
        if (nums.length == 0) {
            return false;
        }

        //  Declare numsLength to store the length of nums
        //      to make iteration for efficient
        int numsLength = nums.length;

        //  Declare and initialize an integer variable called totalSum
        int totalSum = 0;

        //  Iterate over the given array to find
        //      the total sum of its elements
        //      using a for loop
        for (int i = 0; i < numsLength; i++) {
            totalSum += nums[i];
        }

        //  Since two partitions of equal sum,
        //      totalSum cannot be odd.
        //  If totalSum is odd return false
        if (totalSum % 2 != 0) {
            return false;
        }

        //  Since two partitions of equal sum,
        //      the sum of all elements in each partition
        //      is equal to totalSum / 2.
        //  So, declare equalPartitionSum
        int equalPartitionSum = totalSum / 2;

        //  For memoization, dclare an array to contain boolean values
        boolean[] memo = new boolean[equalPartitionSum + 1];

        //  Set first element of memo to true
        //      since it's an array of sum and at
        //      sum = 0 when following bottom-up approach
        //      it's true
        memo[0] = true;

        //  Iterate over all elements in nums
        for (int num : nums) {
            for (int sum = equalPartitionSum; sum >= num; sum--) {
                //  Perform Bitwise OR operation (|=);
                //      assign memo[sum] the result of
                //      the Bitwise OR operation between
                //      memo[sum] and memo[sum - num]
                //  e.g., if memo[sum] = true or 1 and
                //         memo[sum - num] = false or 0
                //  memo[sum] |= memo[sum - num] gives
                //  memo[sum] = true or 1b;
                //  memo[sum]: dp case excluding current index
                //  memo[sum - sum]: dp case including current index
                //  So, memo[sum] || memo[sum - num] gives the result
                memo[sum] |= memo[sum - num];
            }
        }

        return memo[equalPartitionSum];
    }

    public static void main(String[] args) {
        // Example 1:
        int[] nums = {1,5,11,5};
        System.out.println(canPartition(nums));
        //  O/P: true

        // Example 2:
        nums = new int[] {1,2,3,5};
        System.out.println(canPartition(nums));
        //  O/P: false
    }

}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Unique Paths </summary> 

### [↗ See LeetCode Problem #62](https://leetcode.com/problems/unique-paths/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Arrays;

public class Solution {
    public static int uniquePaths(int m, int n) {
//        //  Approach 1: Brute-force recursive method
//        if (m == 1 || n == 1) {
//            return 1;
//        }
//        return uniquePaths(m - 1, n) + uniquePaths(m, n - 1);

        //  Approach 2: Dynamic Programming (optimized recursion)

        //  Declare 2D dp array/memo to store previous results
        //      so that these can be used later if
        //      the same cell (m, n) is encountered again
        //  m = row; n = column
        int[][] dp = new int[m][n];

        //  Set all cells to have a value of 1
        for (int[] array : dp) {
            Arrays.fill(array, 1);
        }

        //  Iterate over all cells following a top-down
        //      approach
        //  NOTE: both row and column starts at index 1
        //  dp[0][1] or dp[0][column] or dp[0][1] or dp[row][0]
        //      is 1 since all cells set to 1
        //      in the for-each loop above
        //  That is, number of paths = 1 for the first row/column
        for (int row = 1; row < m; row++) {
             for (int column = 1; column < n; column++) {
                 // dp [currentRow][currentColumn] is obtained adding
                 //     dp [previousRow][currentColumn] and
                 //     dp [currentRow][previousColumn]
                 dp [row][column] = dp [row - 1][column] + dp [row][column - 1];
             }
        }

        return dp[m - 1][n - 1];
    }

    public static void main(String[] args) {
        // Example 1:
        int m = 3;
        int n = 7;
        System.out.println(uniquePaths(m, n));
        //  O/P: 28

    // Example 2:
        m = 3;
        n = 2;
        System.out.println(uniquePaths(m, n));
        //  O/P: 3

    }
}
```

</TabItem>
</Tabs>

</details>
