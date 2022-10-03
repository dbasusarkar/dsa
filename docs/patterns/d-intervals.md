---
sidebar_position: 4 
id: d-intervals 
title: Intervals 
tags: [
    intervals,
    insert-interval,
    merge-intervals,
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Intervals 

- Understanding intervals 
- Solved problems are presented in alphabetical order

## Problems related to intervals 

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
