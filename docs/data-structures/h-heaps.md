---
sidebar_position: 8
id: h-heaps
title: Heaps
tags: [
    heaps,
    find-median-from-data-stream,
    k-closest-point-to-origin,
    merge-k-sorted-lists,
    task-scheduler,
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Heaps 

- Understanding heaps 
- Solved problems are presented in alphabetical order

## Problems related to heaps 

<details> 
<summary> Find Median from Data Stream (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #295](https://leetcode.com/problems/find-median-from-data-stream/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Comparator;
import java.util.PriorityQueue;

public class Solution {
//class MedianFinder {

    //  maxHeap for upper half (w/ lower value) of the stream
    //      for example,
    //      9 8 7 6 5 4
    PriorityQueue<Integer> maxHeap = null;

    //  minHeap for lower half (w/ lower value) of the stream
    //      for example,
    //      10 11 12 13 14 15
    PriorityQueue<Integer> minHeap = null;

    //  Initialize the data structures
    public Solution () {
        minHeap = new PriorityQueue<>();
        maxHeap = new PriorityQueue<>(Comparator.reverseOrder());
    }

    public void addNum(int num) {
        minHeap.offer(num);
        maxHeap.offer(minHeap.poll());

        if (minHeap.size() < maxHeap.size()) {
            minHeap.offer(maxHeap.poll());
        }
    }

    public double findMedian() {
        if (minHeap.size() > maxHeap.size()) {
            return minHeap.peek();
        } else {
            return (minHeap.peek() + maxHeap.peek()) / 2.0;
        }
    }

    public static void main(String[] args) {

        // Example 1:
        //Input
        //["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
        //[[], [1], [2], [], [3], []]
        //Output
        //[null, null, null, 1.5, null, 2.0]

        //  Solution instead of MedianFinder since Solution is class name
        Solution medianFinder = new Solution();
        medianFinder.addNum(1);    // arr = [1]
        medianFinder.addNum(2);    // arr = [1, 2]
        medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
        System.out.println(medianFinder.findMedian());
        medianFinder.addNum(3);    // arr[1, 2, 3]
        medianFinder.findMedian(); // return 2.0
        System.out.println(medianFinder.findMedian());

    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder obj = new MedianFinder();
 * obj.addNum(num);
 * double param_2 = obj.findMedian();
 */
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> K Closest Points to Origin (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #973](https://leetcode.com/problems/k-closest-points-to-origin/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Queue;
import java.util.PriorityQueue;
import java.util.Arrays;

public class Solution {
    public static int[][] kClosest(int[][] points, int k) {

        //  Declare the output 2D array
        //  1st []: k number of rows
        //  2nd []: 2 colums
        int[][] result2DArray = new int[k][2];

        //  Declare maximum Heap with PriorityQueue Class
        //      using (x2 * x2) + (y2 * y2) - (x1 * x1) - (y1 * y1)
        //      instead of using
        //      sqrt((x2 * x2) + (y2 * y2)) - sqrt(((x1 * x1) + (y1 * y1))
        //      to compare the distances from origin
        Queue<int[]> maxHeap = new PriorityQueue<>((p1, p2) ->
                (p2[0] * p2[0]) + (p2[1] * p2[1])
                - (p1[0] * p1[0]) - (p1[1] * p1[1]));

        //  Add all points (as int arrays) to maxHeap
        //  Poll to remove all points if maxHeap has more
        //      than k points (of type int[]),
        //      which automatically removes points
        //      larger (hence maximum heap) distances
        //      from the heap data structure
        //   Since, maxHeap has maximum values on top
        for (int [] point : points) {
            maxHeap.offer(point);
            if (maxHeap.size() > k) {
                maxHeap.poll();
            }
        }

        //  Poll to save points in already defined
        //      result2DArray
        //  --k is precrement:
        //      it first decreases the k by 1 and then
        //      applies the decreased value as result2DArray index
        //      to store polled array at the decreased index
        //  k > 0: means the very last k = 1;
        //      so, the very last --k = 0;
        //      therefore, result2DArray fills from the end index
        //      to the start index
        while (k > 0) {
            result2DArray[--k] = maxHeap.poll();
        }

        return result2DArray;
    }

    public static void main(String[] args) {
        // Example 1:
        int[][] points1 = {{1,3},{-2,2}};
        int k1 = 1;
        //  O/P: [[-2,2]]

        // Example 2:
        int[][] points2 = {{3,3},{5,-1},{-2,4}};
        int k2 = 2;
        //  O/P: [[3,3],[-2,4]]

        System.out.println(Arrays.deepToString(kClosest(points1, k1)));
        System.out.println(Arrays.deepToString(kClosest(points2, k2)));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Merge k Sorted Lists (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #23](https://leetcode.com/problems/merge-k-sorted-lists/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Queue;

class ListNode {
//    int data;
    int val;
    ListNode next;

    ListNode (int data) {
//        this.data = data;
        this.val = data;
    }
}

public class Solution {
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
//class Solution {
//     static ListNode mergeKLists(ListNode[] lists) {
    static int mergeKLists(ListNode[] lists) {

        Comparator<ListNode> cmp;
        cmp = new Comparator<ListNode>() {
            @Override
            public int compare(ListNode o1, ListNode o2) {
                return o1.val - o2.val;
            }
        };

        Queue<ListNode> q = new PriorityQueue<ListNode>(cmp);

        for (ListNode l : lists) {
            if (l != null) {
                q.add(l);
            }
        }

        ListNode head = new ListNode(0);
        ListNode point = head;

        while (!q.isEmpty()) {
            point.next = q.poll();
            point = point.next;
            ListNode next = point.next;

            if (next != null) {
                q.add(next);
            }
        }

//        return head.next;
        return head.next.val;
    }

    public static void main(String[] args) {

        // Example 1:
        int[][] arrayLists = {{1,4,5},{1,3,4},{2,6}};
        //  O/P: [1,1,2,3,4,4,5,6]

        int[] dataArray1 = arrayLists[0];
        int[] dataArray2 = arrayLists[1];
        int[] dataArray3 = arrayLists[2];

        ListNode head1 = new ListNode(dataArray1[0]);
        ListNode current1 = head1;

        ListNode head2 = new ListNode(dataArray2[0]);
        ListNode current2 = head2;

        ListNode head3 = new ListNode(dataArray3[0]);
        ListNode current3 = head3;

        for (int i = 1; i < dataArray1.length; i++) {

            ListNode node = new ListNode(dataArray1[i]);

            current1.next = node;
            current1 = node;
        }

        for (int i = 1; i < dataArray2.length; i++) {

            ListNode node = new ListNode(dataArray1[i]);

            current2.next = node;
            current2 = node;
        }

        for (int i = 1; i < dataArray3.length; i++) {

            ListNode node = new ListNode(dataArray3[i]);

            current3.next = node;
            current3 = node;
        }

        ListNode[] lists = {head1, head2, head3};

        // Example 2:
//        int[] lists = []
        //  O/P: []

        // Example 3:
//        int[] lists = [[]]
        //  O/P: []

        System.out.println(mergeKLists(lists));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Task Scheduler (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #621](https://leetcode.com/problems/task-scheduler/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    public static int leastInterval(char[] tasks, int n) {
        //  There are two ways we need to consider
        //      to find the least number of units times
        //      that CPU will take to finish all the given tasks

        //  Way 1:  # of most repeating type(s) of task is NOT
        //          frequent enough to require idle CPU cycle.
        //          In this case length of tasks array gives the
        //          answer (required least number of unit times)

        //  Way 2:  # of most repeating type(s) of task IS
        //          frequent enough to require idle CPU cycle.
        //          In this case, the answer (required least number of unit times)
        //          is obtained using the following expression
        //          (1 + n) * (freqMax - 1) + numOfTasksWithFreqMax
        //          where n = cooldown period between two tasks of same type
        //                    given n units of time
        //          It works because 1 + n gives the time for each task
        //          (w/ max frequency) plus the cooling period
        //          So, 1 + n needs to be mulitplied by the (max frequency - 1)
        //          Then, we will need add all tasks that have max frequency
        //          Henc, 1 was subtracted from max frequency in the earlier calculation

        //  So, maximum of Way 1 and Way 2 is the required answer
        //  Because, idle CPU times should add to the length of tasks array
        //      if there aren't enough tasks to fill the idle CPU cycles

        //  Way 1
        int tasksLength = tasks.length;

        //  Way 2

        //  Declare the array with frequencies
        //  Intialize with 26 elements with default values of 0s
        //      for 26 uppercase English letters
        int[] frequenciesArray = new int[26];

        //  Build the array with frequencies
        for (char task : tasks) {
            //  Subtracting character 'A' from given
            //  task/character makes it 0-indexed
            //  Given, all tasks are given in uppercase letters
            frequenciesArray[task - 'A']++;
        }

        //  Find the maximum frequency from the array w/ frequencies
        //  Declare and initialize the maximum frequency
        int maxFrequency = 0;

        for (int frequency : frequenciesArray) {
            maxFrequency = Math.max(maxFrequency, frequency);
        }

        //  Count the number of task(s) w/ maxFrequency
        //  Declare and initialize the numMaxFrequencyTasks
        int  numMaxFrequencyTasks = 0;

        for (int frequency : frequenciesArray) {
            if (frequency == maxFrequency) {
                numMaxFrequencyTasks++;
            }
        }

        return Math.max(tasksLength,
                ((1 + n) * (maxFrequency - 1) + numMaxFrequencyTasks));
    }

    public static void main(String[] args) {
        // Example 1:
        char[] tasks1 = {'A','A','A','B','B','B'};
        int n1 = 2;
        //  O/P: 8

        // Example 2:
        char[] tasks2 = {'A','A','A','B','B','B'};
        int n2 = 0;
        //  O/P: 6

        // Example 3:
        char[] tasks3 = {'A','A','A','A','A','A','B','C','D','E','F','G'};
        int n3 = 2;
        //  O/P: 16

        System.out.println(leastInterval(tasks1, n1));
        System.out.println(leastInterval(tasks2, n2));
        System.out.println(leastInterval(tasks3, n3));

    }
}
```

</TabItem>
</Tabs>

</details>