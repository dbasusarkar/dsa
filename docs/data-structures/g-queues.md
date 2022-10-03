---
sidebar_position: 7
id: g-queues
title: Queues 
tags: [
    queues,
    design-hit-counter,    
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Queues 

- Understanding queues 
- Solved problems are presented in alphabetical order

## Problems related to queues 

<details> 
<summary> Design Hit Counter (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #362](https://leetcode.com/problems/design-hit-counter/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Queue;
import java.util.LinkedList;

//  Approach 2 REQUIRES Java 8
//import java.util.Deque;
//import java.util.ArrayDeque;
//import javafx.util.Pair; // Pair class REQUIRES Java 8

public class HitCounter {
    //  Declare hits queue as a private variable
    //      so that it remains accessible to all methods
    private Queue<Integer> hitsQueue = null;

    //  Initialize the queue here
    public HitCounter () {
        this.hitsQueue = new LinkedList<>();
    }

    //  Add a hit timestamp
    public void hit(int timestamp) {
        this.hitsQueue.offer(timestamp);
    }

    // Find the number of hits in last 300 s
    public int getHits(int timestamp) {
        while (!this.hitsQueue.isEmpty()) {
           int timeElapsed = timestamp - this.hitsQueue.peek();
           if (timeElapsed >= 300) {
               this.hitsQueue.poll();
           } else {
               break;
           }
        }
        return this.hitsQueue.size();
    }

    public static void main(String[] args) {
        // Example 1:
        //Input
        //["HitCounter", "hit", "hit", "hit", "getHits", "hit", "getHits", "getHits"]
        //[[], [1], [2], [3], [4], [300], [300], [301]]
        //Output
        //[null, null, null, null, 3, null, 4, 3]

        HitCounter hitCounter= new HitCounter();

        hitCounter.hit(1);
        hitCounter.hit(2);
        hitCounter.hit(3);

//        hitCounter.getHits(4);
        System.out.println(hitCounter.getHits(4));

        hitCounter.hit(300);

//        hitCounter.getHits(300);
        System.out.println(hitCounter.getHits(300));

//        hitCounter.getHits(301);
        System.out.println(hitCounter.getHits(301));

    }

}
/**
 * Your HitCounter object will be instantiated and called as such:
 * HitCounter obj = new HitCounter();
 * obj.hit(timestamp);
 * int param_2 = obj.getHits(timestamp);
 */
```

</TabItem>
</Tabs>

</details>