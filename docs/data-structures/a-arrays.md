---
sidebar_position: 1
id: a-arrays
title: Arrays 
tags: [
    arrays, 
    3sum,
    best-time-to-buy-and-sell-stocks,
    combination-sum,
    container-with-most-water,
    contains-duplicate,
    find-all-duplicates-in-an-array,
    insert-interval,
    majority-element,
    merge-intervals,
    product-of-array-except-self,
    sort-colors,
    the-employee-that-worked-on-the-longest-task,
    two-sum,
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Arrays

- Understanding arrays
- Solved problems are presented in alphabetical order

## Problems related to arrays

<details> 
<summary> Best Time to Buy and Sell Stocks </summary> 

### [↗ See LeetCode Problem #121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    static int maxProfit(int[] prices) {

//        int profit = 0;
//        int maxProfit = 0;
//
//
//        for (int i = 0; i < prices.length - 1; i++) {
//
//            for (int j = i + 1; j < prices.length; j++) {
//                profit = prices[j] - prices[i];
////                maxProfit = Math.max(profit, maxProfit);
//                if (profit > maxProfit) {
//                    maxProfit = profit;
//                }
//            }
//        }
        int minValue = Integer.MAX_VALUE;
        int maxProfit = 0;

        for (int i = 0; i < prices.length; i++) {
            if (prices[i] < minValue) {
                minValue = prices[i];
            } else if (prices[i] - minValue > maxProfit) {
                maxProfit = prices[i] - minValue;
            }
        }
        return maxProfit;
    }

    public static void main(String[] args) {
        int[] prices1 = {7,1,5,3,6,4};
        //  O/P: 5

        int[] prices2 = {7,6,4,3,1};
        //  O/P: 0

        System.out.println("Ex1: " + maxProfit(prices1));
        System.out.println("Ex2: " + maxProfit(prices2));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Combination Sum </summary> 

### [↗ See LeetCode Problem #39](https://leetcode.com/problems/combination-sum/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class Solution {
    private static void backtrackingMethod(
            int remainingTarget,
            LinkedList<Integer> currentCombination,
            int startIndex,
            int[] candidates,
            List<List<Integer>> outputList
    ) {

        if (remainingTarget == 0) {
            //  Make a deep copy the currentCombination
            //      and add it to the output list of lists
            outputList.add(new ArrayList<>(currentCombination));
            return;
        } else if (remainingTarget < 0) {
            return;
        }

        for (int i = startIndex; i < candidates.length; i++) {

            currentCombination.add(candidates[i]);
            backtrackingMethod(remainingTarget - candidates[i],
                    currentCombination,
                    i,
                    candidates,
                    outputList);

            currentCombination.removeLast();

        }

    }

    public static List<List<Integer>> combinationSum(int[] candidates, int target) {

        List<List<Integer>> outputList = new ArrayList<>();
        LinkedList<Integer> currentCombination = new LinkedList<>();

        backtrackingMethod(target,
                currentCombination,
                0,
                candidates,
                outputList);

        return outputList;

    }

    public static void main(String[] args) {
        // Example 1:
        int[] candidates1 = {2,3,6,7};
        int target1 = 7;
        //  O/P: [[2,2,3],[7]]

        // Example 2:
        int[] candidates2 = {2,3,5};
        int target2 = 8;
        //Output: [[2,2,2,2],[2,3,3],[3,5]]

        // Example 3:
        int[] candidates3 = {2};
        int target3 = 1;
        //Output: []

        System.out.println(combinationSum(candidates1, target1));
        System.out.println(combinationSum(candidates2, target2));
        System.out.println(combinationSum(candidates3, target3));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Container with Most Water </summary> 

### [↗ See LeetCode Problem #11](https://leetcode.com/problems/container-with-most-water/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    public static int maxArea(int[] height) {

        int leftBoundary = 0;
        int rightBoundary = height.length - 1;
        int maxAreaValue = 0;

        while (leftBoundary < rightBoundary) {

            int width = rightBoundary - leftBoundary;

            maxAreaValue = Math.max(maxAreaValue, Math.min(height[leftBoundary],
                    height[rightBoundary]) * width);

            if (height[leftBoundary] <= height[rightBoundary]) {
                leftBoundary++;
            } else {
                rightBoundary--;
            }

        }

        return maxAreaValue;
    }

    public static void main (String[] args) {

        // Example 1:
        int[] height1 = {1,8,6,2,5,4,8,3,7};
        //  O/P: 49

        // Example 2:
        int[] height2 = {1,1};
        //  O/P: 1

        System.out.println(maxArea(height1));
        System.out.println(maxArea(height2));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Contains Duplicate </summary> 

### [↗ See LeetCode Problem #217](https://leetcode.com/problems/contains-duplicate/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
//import java.util.HashSet;
//import java.util.Set;

public class Solution {
    static boolean containsDuplicate(int[] nums) {

        java.util.Set<Integer> mySet = new java.util.HashSet<>();

        for (int num : nums) {
            if (mySet.contains(num)) {
                return true;
            } else {
                mySet.add(num);
            }
        }

        return false;

    }

    public static void main(String[] args) {
        // Example 1:
         int[] nums1 = {1,2,3,1};
        //Output: true

        // Example 2:
         int[] nums2 = {1,2,3,4};
        //  O/P: false

        // Example 3:
         int[] nums3 = {1,1,1,3,3,4,3,2,4,2};
        //  O/P: true

        System.out.println(containsDuplicate(nums1));
        System.out.println(containsDuplicate(nums2));
        System.out.println(containsDuplicate(nums3));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Find All Duplicates in an Array </summary> 

### [↗ See LeetCode Problem #442](https://leetcode.com/problems/find-all-duplicates-in-an-array/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.List;
import java.util.ArrayList;
import java.util.Arrays;

public class Solution {
    public static List<Integer> findDuplicates(int[] nums) {

        int index = 0;

        while (index < nums.length) {
            if (nums[index] != nums[nums[index] - 1]) {
                swapElements(nums, index, nums[index] - 1);
            } else {
                index++;
            }
        }

        List<Integer> listOfDuplicates = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != i + 1) {
                listOfDuplicates.add(nums[i]);
            }
        }

        return listOfDuplicates;
    }

    private static void swapElements (int[] nums, int index, int correctedIndex) {

        int tempElement = nums[index];
        nums[index] = nums[correctedIndex];
        nums[correctedIndex] = tempElement;
    }

    public static void main (String[] args) {

        // Example 1:
        int[] nums1 = {4,3,2,7,8,2,3,1};
        //Output: [2,3]

        // Example 2:
        int[] nums2 = {1,1,2};
        //  O/P: [1]

        // Example 3:
        int[] nums3 = {1};
        //  O/P: []

        System.out.println(findDuplicates(nums1));
        System.out.println(findDuplicates(nums2));
        System.out.println(findDuplicates(nums3));
    }

}
```

</TabItem>
</Tabs>

</details>


<details> 
<summary> Insert Interval </summary> 

### [↗ See LeetCode Problem #57](https://leetcode.com/problems/insert-interval/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class Solution {
    public static int[][] insert(int[][] intervals, int[] newInterval) {

        LinkedList<int[]> mergedIntervals = new LinkedList<>();

        int[][] emptyIntervals = {{}};

        //  Check if given intervals is null or empty
        //  If true, return only list of intervals with newInterval
        if (intervals == null || Arrays.deepEquals(intervals, emptyIntervals)) {
            mergedIntervals.add(newInterval);
            return mergedIntervals.toArray(new int[mergedIntervals.size()][2]);
        }

        int newIntervalStart = newInterval[0];
        int newIntervalEnd = newInterval[1];

        int index = 0;

        //  Added all intervals with start of the intervals
        //      less than the end of the new interval
        while (index < intervals.length &&
                intervals[index][1] < newIntervalStart) {
            mergedIntervals.add(intervals[index++]);
        }

        int[] interval = new int[2];

        while (index < intervals.length &&
                intervals[index][0] <= newIntervalEnd) {
            newIntervalStart = Math.min(intervals[index][0], newIntervalStart);
            newIntervalEnd = Math.max(intervals[index][1], newIntervalEnd);
            index++;
        }

        interval[0] = newIntervalStart;
        interval[1] = newIntervalEnd;

        mergedIntervals.add(interval);

        //  Add all remaining intervals to the output list
        while (index < intervals.length) {
            mergedIntervals.add(intervals[index++]);
        }

        return mergedIntervals.toArray(new int[mergedIntervals.size()][2]);

    }

    public static void main (String[] args) {
        // Example 1:
        int[][] intervals1 = {{1,3},{6,9}};
        int[] newInterval1 = {2,5};
        //Output: [[1,5],[6,9]]

        // Example 2:
        int[][] intervals2 = {{1,2},{3,5},{6,7},{8,10},{12,16}};
        int[] newInterval2 = {4,8};
        //Output: [[1,2],[3,10],[12,16]]

        // Example 3:
        int[][] intervals3 = null;
        int[] newInterval3 = {4,8};

        // Example 4:
        int[][] intervals4 = {{}};
        int[] newInterval4 = {4,8};

        System.out.println(Arrays.deepToString(insert(intervals1, newInterval1)));
        System.out.println(Arrays.deepToString(insert(intervals2, newInterval2)));
        System.out.println(Arrays.deepToString(insert(intervals3, newInterval3)));
        System.out.println(Arrays.deepToString(insert(intervals4, newInterval4)));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Majority Element </summary> 

<!-- [LC# 169] majority_element [***Grind75-Array-3/11] -->
### [↗ See LeetCode Problem #169](https://leetcode.com/problems/majority-element/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Arrays;

public class Solution {
    static int majorityElement(int[] nums) {

//        //  Approach #1
//        Arrays.sort(nums);
//        return nums[nums.length/2];

        //  Approach #2
        //  Boyer-Moore Voting Algorithm

        int count = 0;
        Integer majorCandidate = null;

        for (int num : nums) {
            if (count == 0) {
                majorCandidate = num;
            }

            count += (num == majorCandidate) ? 1 : -1;

        }

        return majorCandidate;
    }

    public static void main(String[] args) {
        // Example 1:
        int[] nums1 = {3,2,3};
        //  O/P: 3
        //
        // Example 2:
        int[] nums2 = {2,2,1,1,1,2,2};
        //  O/P: 2

        System.out.println("Example 1: " + majorityElement(nums1));
        System.out.println("Example 2: " + majorityElement(nums2));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Merge Intervals </summary> 

### [↗ See LeetCode Problem #56](https://leetcode.com/problems/merge-intervals/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Arrays;
import java.util.LinkedList;

public class Solution {
    static int[][] merge(int[][] intervals) {

        //  Sort the given array based on the
        //      starting value of each interval
        Arrays.sort(intervals, (a,b) -> Integer.compare(a[0], b[0]));

        //  Create a new LinkedList to generate the output
        LinkedList<int[]> mergedList = new LinkedList<>();

        for (int[] interval : intervals) {
            if (mergedList.isEmpty() ||
                    //  Or, if the ending value of last interval is less
                    //      than the starting value of the current interval
                    mergedList.getLast()[1] < interval [0]) {
                mergedList.add(interval);
            } else {
                //  Update the ending value of the last interval
                mergedList.getLast()[1] =
                        //  The maximum of:
                        //      the ending value of the last interval and
                        //      the ending value of the current interval
                        Math.max(mergedList.getLast()[1], interval[1]);
            }
        }

        return mergedList.toArray(new int[mergedList.size()][]);
    }

    public static void main(String[] args) {

        // Example 1:
        int[][] intervals1 = {{1,3},{2,6},{8,10},{15,18}};
        //  O/P: [[1,6],[8,10],[15,18]]

        // Example 2:
        int[][] intervals2 = {{1,4},{4,5}};
        //  O/P: [[1,5]]

        System.out.println(Arrays.deepToString(merge(intervals1)));
        System.out.println(Arrays.deepToString(merge(intervals2)));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Product of Array Except Self </summary> 

### [↗ See LeetCode Problem #238](https://leetcode.com/problems/product-of-array-except-self/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Arrays;

public class Solution {
    static int[] productExceptSelf(int[] nums) {
        int[] result = new int[nums.length];

        result[0] = 1;
        int rightSide = 1;

        //  Find products of elements on the left side of index i
        //  At the end of the loop, only the last element of result
        //     (result[nums.length - 1]) has the correct element
        //  NOTE: loop doesn't update the first element of result
        for (int i = 1; i <= nums.length - 1; i++) {
            result[i] = nums[i - 1] * result[i - 1];
        }

        //  Multiply left-side products with the right-side products
        //      to get the desired result
        //  At the start of the loop,
        //     only result[nums.length] has the correct element
        //  NOTE: At the first step of the loop, the last element of result
        //      (result[nums.length - 1]) stays the same
        for (int i = nums.length - 1; i >= 0; i--) {
            result[i] = result[i] * rightSide;
            rightSide *= nums[i];
        }

        return result;
    }

    public static void main(String[] args) {

        // Example 1:
        int[] nums1 = {1, 2, 3, 4};
        //  O/P: [24,12,8,6]

        // Example 2:
        int[] nums2 = {-1, 1, 0, -3, 3};
        //  O/P: [0,0,9,0,0]

        System.out.println(Arrays.toString(productExceptSelf(nums1)));
        System.out.println(Arrays.toString(productExceptSelf(nums2)));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Sort Colors </summary> 

### [↗ See LeetCode Problem #75](https://leetcode.com/problems/sort-colors/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Arrays;

public class Solution {
    public static void sortColors(int[] nums) {
        int indexLow = 0;
        int indexHigh = nums.length - 1;

        for (int i = 0; i <= indexHigh;) {

            //  Make sure '0' has an index below indexLow
            if (nums[i] == 0) {
                swapElements(nums, i, indexLow);
                i++;
                indexLow++;
            //  Make sure '1' has an index between
            //      indexLow and indexHigh
            } else if (nums[i] == 1) {
                i++;
            //  Make sure '2' has an index above indexHigh
            } else {
                swapElements(nums, i, indexHigh);
                indexHigh--;
            }

        }

        System.out.println(Arrays.toString(nums));
    }

    private static void swapElements (int[] nums, int index, int newIndex) {
        int tempElement = nums[index];
        nums[index] = nums[newIndex];
        nums[newIndex] = tempElement;
    }

    public static void main(String[] args) {

        // Example 1:
        int[] nums1 = {2,0,2,1,1,0};
        //  O/P: [0,0,1,1,2,2]

        // Example 2:
        int[] nums2 = {2,0,1};
        // O/P: [0,1,2]

        sortColors(nums1);
        sortColors(nums2);
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> The Employee That Worked on the Longest Task </summary> 

### [↗ See LeetCode Problem #2432](https://leetcode.com/problems/the-employee-that-worked-on-the-longest-task/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    public int hardestWorker(int n, int[][] logs) {
        //  Declare the id to be returned and initialize it
        //       with the id from the first element of the given logs array
        //  It will be updated only if we find a new longest time
        //      or a smaller id with the same longest time
        int id = logs[0][0];

        //  Declare the longest time and initialize it with the
        //      leaveTime from the first elment of the given logs array;
        //      since, starting time is 0...
        int longestTime = logs[0][1];

        //  Iterate over all elements of the logs array
        for (int i = 1; i < logs.length; i++) {
            //  Store the duration of the current task
            int currentTime = logs[i][1] - logs[i - 1][1];
            //  Store the id of the current employee
            int currentID = logs[i][0];

            //  Update id/longestTime only if current longestTime
            //      is equal to or smaller than currentTime
            if (longestTime <= currentTime) {
                //  Updated the id with a smaller value only if
                //      longestTime is equal to the currentTime
                if (longestTime == currentTime) {
                    id = Math.min(id, currentID);
                } else {
                    //  Updated the longestTime
                    longestTime = Math.max(longestTime, currentTime);
                    //  Updated the id
                    id = currentID;
                }
            }

        }

        //  return the find value of the id
        return id;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example 1:
        int n = 10;
        int[] [] logs = new int[][] {{0,3},{2,5},{0,9},{1,15}};

        System.out.println(solution.hardestWorker(n, logs));
        //  O/P: 1

        System.out.println("---");
        // Example 2:
        n = 26;
        logs = new int[][] {{1,1},{3,7},{2,12},{7,17}};

        System.out.println(solution.hardestWorker(n, logs));
        //Output: 3

        System.out.println("---");
        // Example 3:
        n = 2;
        logs = new int[][] {{0,10},{1,20}};

        System.out.println(solution.hardestWorker(n, logs));
        //  O/P: 0
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Two Sum </summary> 

### [↗ See LeetCode Problem #1](https://leetcode.com/problems/two-sum/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Solution {

//    //  Brute force approach
//    public int[] twoSum(int[] nums, int target) {
//        for (int i = 0; i < nums.length; i++) {
//            for (int j = i + 1; j < nums.length; j++) {
//                if (nums[j] == target - nums[i]) {
//                    return new int[]{i, j};
//              }
//          }
//        }
//        return null;
//    }

    //  O(N) time complexity
    //  2-pass HashMap
//      static int[] twoSum(int[] nums, int target) {
//          Map<Integer, Integer> hmap = new HashMap<>();
//          for (int i = 0; i < nums.length; i++) {
//              hmap.put(nums[i], i);
//          }
//
//          for (int i = 0; i < nums.length; i++) {
//              int complement = target - nums[i];
//              if (hmap.containsKey(complement) && hmap.get(complement) != i) {
//                  return new int[] {i, hmap.get(complement)};
//              }
//          }
//          return null;
//      }

    //  O(N) time complexity
    //  1-pass HashMap
    static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> hmap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (hmap.containsKey(complement)) {
                return new int[] {hmap.get(complement), i};
            }
            hmap.put(nums[i], i);
        }
        return null;
    }

    public static void main(String[] args) {
        //Output: [0,1]
        int[] nums1 = {2,7,11,15};
        int target1 = 9;

        //Output: [1,2]
        int[] nums2 = {3,2,4};
        int target2 = 6;

        //Output: [0,1]
        int[] nums3 = {3,3};
        int target3 = 6;

        System.out.println(Arrays.toString(twoSum(nums1, target1)));
        System.out.println(Arrays.toString(twoSum(nums2, target2)));
        System.out.println(Arrays.toString(twoSum(nums3, target3)));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> 3Sum </summary> 

### [↗ See LeetCode Problem #15](https://leetcode.com/problems/3sum/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Solution {
    static List<List<Integer>> threeSum(int[] nums) {
        Arrays.sort(nums);
        List<List<Integer>> tripletList = new ArrayList<>();

        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            //  -nums[i] is the negative of one of the triplets that add up to zero
            //  Hence, -nums[i] should be equal to twoSum (sum of the remaining 2 triplets)
            //      calculated in the findTriplets method below
            findTriplets(nums, -nums[i], i + 1, tripletList);
        }
        return tripletList;
    }

    //  leftPointer < rightPointer
    static void findTriplets (int[] nums,
                             int twoSum,
                             int leftPointer,
                             List<List<Integer>> tripletList) {
        int rightPointer = nums.length - 1;

        while (leftPointer < rightPointer) {
            int currentSum = nums[leftPointer] + nums[rightPointer];
            if (currentSum == twoSum) {
                tripletList.add(List.of(-twoSum,
                        nums[leftPointer],
                        nums[rightPointer]));
                leftPointer++;
                rightPointer--;
                while (leftPointer < rightPointer &&
                        nums[leftPointer] == nums[leftPointer - 1]) {
                    leftPointer++;
                }
                while (leftPointer < rightPointer &&
                        nums[rightPointer] == nums[rightPointer + 1]) {
                    rightPointer--;
                }
            } else if (twoSum > currentSum) {
                //  Needs to increase currentSum
                leftPointer++;
            } else {
                //  Needs to decrease currentSum
                rightPointer--;
            }
        }
    }

    public static void main(String[] args) {

        // Example 1:
        int[] nums1 = {-1,0,1,2,-1,-4};
        //Output: [[-1,-1,2],[-1,0,1]]

        // Example 2:
        int[] nums2 = {0,1,1};
        //Output: []

        // Example 3:
        int[] nums3 = {0,0,0};
        //Output: [[0,0,0]]

        System.out.println(threeSum(nums1));
        System.out.println(threeSum(nums2));
        System.out.println(threeSum(nums3));

    }
}
```

</TabItem>
</Tabs>

</details>