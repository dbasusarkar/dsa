---
sidebar_position: 5 
id: e-linked-list-reversal 
title: Linked List Reversal
tags: [
    linked-list-reversal,
    reverse-linked-list,
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Linked List Reversal

- Understanding linked list reversal 
- Solved problems are presented in alphabetical order

## Problems related to linked list reversal

<details> 
<summary> Reverse Linked List </summary> 

### [↗ See LeetCode Problem #206](https://leetcode.com/problems/reverse-linked-list/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
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

class ListNode {
    int data;
    ListNode next;

    ListNode(int data) {
        this.data = data;
        this.next = null;
    }
}

//class LinkedList {
//
//
//
//}

class Solution {

//    static ListNode reverseList(ListNode head) {
    static int reverseList(ListNode head) {

        ListNode prev = null;

        while (head != null) {
            ListNode next = head.next;
            head.next = prev;
            prev = head;
            head = next;
        }

//        return prev;
        return prev.data;
    }

    static int countNodes (ListNode head) {

        int count = 1;
        ListNode current = head;

        while (current.next != null){

            current = current.next;
            count++;

        }

        return count;
    }

    public static void main(String[] args) {

        int[] headArray = {1,2,3,4,5};

        ListNode head = new ListNode(headArray[0]);
        ListNode current = head;

        for (int i = 1; i < headArray.length; i++) {

            ListNode node = new ListNode(headArray[i]);
            current.next = node;
            current = node;

        }

//        ListNode nodeA = new ListNode(1);
//        ListNode nodeB = new ListNode(2);
//        ListNode nodeC = new ListNode(3);
//        ListNode nodeD = new ListNode(4);
//        ListNode nodeE = new ListNode(5);
//
//        nodeA.next = nodeB;
//        nodeB.next = nodeC;
//        nodeC.next = nodeD;
//        nodeD.next = nodeE;

        System.out.println(countNodes(head));
        System.out.println(reverseList(head));

//        System.out.println();
//        System.out.println(countNodes(nodeA));
//        System.out.println(reverseList(nodeA));

    }
}
```

</TabItem>
</Tabs>

</details>