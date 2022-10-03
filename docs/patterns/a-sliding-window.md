---
sidebar_position: 1 
id: a-sliding-window 
title: Sliding Window
tags: [
    sliding-window,
    sliding-window-maximum,
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Sliding Window

- Understanding sliding window 
- Solved problems are presented in alphabetical order

## Problems related to sliding window 

<details> 
<summary> Longest Substring Without Repeating Characters (Expand/Collapse) </summary> 

### [↗ Longest Substring Without Repeating Characters](../data-structures/b-strings.md)

</details>


<details> 
<summary> Minimum Window Substring (Expand/Collapse) </summary> 

### [↗ Minimum Window Substring](../data-structures/b-strings.md)


</details>

<details> 
<summary> Sliding Window Maximum (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #239](https://leetcode.com/problems/sliding-window-maximum/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.*;

 class MethodsToSolution {
    Deque<Integer> windowQueue = new ArrayDeque<>();
    //  Make nums available globally
    int[] nums;

    public void updatedWindowQueue(int index, int k) {

        //  Only keep the indexes of current sliding window
        if (!windowQueue.isEmpty() &&
                windowQueue.peekFirst() == index - k) {
            windowQueue.pollFirst();
        }

        //  Only keep the max value in the current sliding window
        while (!windowQueue.isEmpty() &&
                nums[index] > nums[windowQueue.peekLast()]) {
            windowQueue.pollLast();
        }
    }

    public int[] maxSlidingWindow(int[] nums, int k) {

        //  If either k or nums is zero
        //      return 0
        if (nums.length * k == 0) {
            return new int[0];
        }

        if (k == 1) {
            //  Returns the original list since
            //      the ONLY element is the max or min
            //      in the current window
            return nums;
        }

        //  Set nums to global nums
        this.nums = nums;
        int maximumIndex = 0;

        //  Initialize windowQueue
        for (int i = 0; i < k; i++) {
            updatedWindowQueue(i, k);
            windowQueue.offerLast(i);

            if (nums[i] > nums[maximumIndex]) {
                maximumIndex = i;
            }
        }

        //  Initialize result
        int[] result = new int[nums.length - k + 1];
        result[0] = nums[maximumIndex];

        //  Final Step
        for (int i = k; i < nums.length; i++) {
            updatedWindowQueue(i, k);
            windowQueue.offerLast(i);
            result[i - k + 1] = nums[windowQueue.peekFirst()];
        }

        return result;
    }

}

class Solution {
    public static void main(String[] args) {

        MethodsToSolution methodsToSolution = new MethodsToSolution();

        // Example 1:
        int[] nums1 = {1,3,-1,-3,5,3,6,7};
        int k1 = 3;
        //  O/P: [3,3,5,5,6,7]

        // Example 2:
        int[] nums2 = {1};
        int k2 = 1;
        //  O/P: [1]

        System.out.println(Arrays.toString(
                methodsToSolution.maxSlidingWindow(nums1, k1)));
        System.out.println(Arrays.toString(
                methodsToSolution.maxSlidingWindow(nums2, k2)));

    }
}
```

</TabItem>
</Tabs>

</details>