---
sidebar_position: 3 
id: c-linked-lists
title: Linked Lists
tags: [
    intersection-of-two-linked-lists,
    linked-lists,
    linked-list-cycle,
    lru-cache,
    merge-two-sorted-lists,
    middle-of-the-linked-list,
    palindrome-linked-list,
    reverse-linked-list,
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Linked Lists

- Understanding linked lists 
- Solved problems are presented in alphabetical order

## Problems related to strings 

<details> 
<summary> Intersection of Two Linked Lists (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #160](https://leetcode.com/problems/intersection-of-two-linked-lists/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
//  Needs to work on intersection of linked lists
class ListNode {
    int data;
    ListNode next;

    ListNode (int data) {
        this.data = data;
    }
}

public class Solution {
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
    static ListNode getIntersectionNode(ListNode headA, ListNode headB) {

        if (headA == null || headB == null) {
            return null;
        }

        ListNode a_pointer = headA;
        ListNode b_pointer = headB;

        while (a_pointer != b_pointer) {

            a_pointer = a_pointer == null ? headB : a_pointer.next;
            b_pointer = b_pointer == null ? headA : b_pointer.next;

        }

        return a_pointer;

    }

    public static void main(String[] args) {
        //Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2
        //, skipB = 3
        //Output: Intersected at '8'
        //Explanation: The intersected node's value is 8 (note that this must not be 0
        //if the two lists intersect).
        //From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [
        //5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3
        //nodes before the intersected node in B.
        //
        //
        // Example 2:
        //
        //
        //Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3,
        //skipB = 1
        //Output: Intersected at '2'
        //Explanation: The intersected node's value is 2 (note that this must not be 0
        //if the two lists intersect).
        //From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [
        //3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node
        //before the intersected node in B.
        //
        //
        // Example 3:
//        int[] listA = {2,6,4};
        int[] listA = {1,9,1,2,4};
//        int[] listB = {1,5};
        int[] listB = {3,2,4};
        //  O/P: No intersection

        ListNode head3A = new ListNode(listA[0]);
        ListNode current3A = head3A;

        for (int i = 1; i < listA.length; i++) {

            ListNode node = new ListNode(listA[i]);

            current3A.next = node;
            current3A = node;
        }

        ListNode head3B = new ListNode(listB[0]);
        ListNode current3B = head3B;

        for (int i = 1; i < listB.length; i++) {

            ListNode node = new ListNode(listB[i]);

            current3B.next = node;
            current3B = node;
        }

        System.out.println(getIntersectionNode(head3A,head3B));
   }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Linked List Cycle (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #141](https://leetcode.com/problems/linked-list-cycle/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
//  Needs work to make Linked list cycle

class ListNode {
    int data;
    ListNode next;

    ListNode (int data) {
        this.data = data;
    }
}

public class Solution {
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
    static boolean hasCycle(ListNode head) {

        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            if (fast == slow) {
                return true;
            }
        }

        return false;
    }

    public static void main(String[] args) {

        int[] head1Array = {3,2,0,-4};
        int pos1 = 1;
        //  O/P: true

        ListNode head1 = new ListNode(head1Array[0]);
        ListNode current1 = head1;
        ListNode startNode1 = new ListNode(head1Array[pos1]);

//        for (int i = 1; i < head1Array.length; i++) {
//
//            ListNode node = new ListNode(head1Array[i]);
//
//            current1.next = node;
//            current1 = node;
//        }
//
//        current1.next = new ListNode(head1Array[1]);

        int count1 = 1;
        while(current1.next != null) {
           if (count1 == pos1) {
               startNode1 = current1;
           }
           current1 = current1.next;
           count1++;
        }

        current1.next = startNode1;

        // Example 2:
        int[] head2Array = {1,2};
        //int pos2 = 0;
        //  O/P: true

        ListNode head2 = new ListNode(head2Array[0]);
        ListNode current2 = head2;

        for (int i = 1; i < head2Array.length; i++) {

            ListNode node = new ListNode(head2Array[i]);

            current2.next = node;
            current2 = node;
        }

        // Example 3:
        int[] head3Array = {1};
        //int pos3 = -1;
        //  O/P: false

        ListNode head3 = new ListNode(head3Array[0]);
        ListNode current3 = head3;

        for (int i = 1; i < head3Array.length; i++) {

            ListNode node = new ListNode(head3Array[i]);

            current3.next = node;
            current3 = node;
        }

        System.out.println("Example 1: " + hasCycle(head1));
        System.out.println("Example 2: " + hasCycle(head2));
        System.out.println("Example 3: " + hasCycle(head3));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> LRU Cache (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #146](https://leetcode.com/problems/lru-cache/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Map;
import java.util.HashMap;

class LRUCache {

    class DoublyLinkedNode {
        int key;
        int value;
        DoublyLinkedNode previousNode;
        DoublyLinkedNode nextNode;
    }

    private Map<Integer, DoublyLinkedNode> cacheMap = new HashMap<>();
    private int cacheSize;
    private int cacheCapacity;
    private DoublyLinkedNode head;
    private DoublyLinkedNode tail;

    //  Add node at the front but after the dummy head node
    private void addNode(DoublyLinkedNode node) {
        node.previousNode = head;
        node.nextNode = head.nextNode;

        head.nextNode.previousNode = node;
        head.nextNode = node;
    }

    private void removeNode(DoublyLinkedNode node) {
        DoublyLinkedNode previousNode = node.previousNode;
        DoublyLinkedNode nextNode = node.nextNode;

        previousNode.nextNode = nextNode;
        nextNode.previousNode = previousNode;
    }

    //  Move an existing node at the front but after the dummy head node
    private void moveToFront(DoublyLinkedNode node) {
        removeNode(node);
        addNode(node);
    }

    //  Remove the last node, which is an existing node
    //      right before the dummy tail
    private DoublyLinkedNode popEndNode() {
        DoublyLinkedNode endNode = tail.previousNode;
        removeNode(endNode);
        return endNode;
    }

    public LRUCache(int capacity) {
        this.cacheSize = 0;
        this.cacheCapacity = capacity;

        head = new DoublyLinkedNode();
        tail = new DoublyLinkedNode();

        head.nextNode = tail;
        tail.previousNode = head;
    }

    public int get(int key) {
        DoublyLinkedNode node = cacheMap.get(key);

        if (node == null) {
            return -1;
        }

        moveToFront(node);

        return node.value;
    }

    public void put(int key, int value) {
        DoublyLinkedNode node = cacheMap.get(key);

        if (node == null) {
            DoublyLinkedNode updatedNode = new DoublyLinkedNode();
            updatedNode.key = key;
            updatedNode.value = value;

            cacheMap.put(key, updatedNode);
            addNode(updatedNode);

            //  Increase the size the LRUCache by 1
            ++cacheSize;

            if (cacheSize > cacheCapacity) {
                DoublyLinkedNode endNode = popEndNode();
                cacheMap.remove(endNode.key);

                //  Decrease the size the LRUCache by 1
                --cacheSize;
            }
        } else {
            node.value = value;
            moveToFront(node);
        }
    }
}

class Solution {

    public static void main(String[] args) {

        // Example 1:
        //Input
        //["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
        //[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]

        LRUCache lruCache = new LRUCache(2);

        lruCache.put(1, 1);
        lruCache.put(2, 2);
        System.out.println(lruCache.get(1));

        lruCache.put(3, 3);
        System.out.println(lruCache.get(2));

        lruCache.put(4, 4);
        System.out.println(lruCache.get(1));
        System.out.println(lruCache.get(3));
        System.out.println(lruCache.get(4));

        //Output
        //[null, null, null, 1, null, -1, null, -1, 3, 4]
        //
        //Explanation
        //LRUCache lRUCache = new LRUCache(2);
        //lRUCache.put(1, 1); // cache is {1=1}
        //lRUCache.put(2, 2); // cache is {1=1, 2=2}
        //lRUCache.get(1);    // return 1
        //lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
        //lRUCache.get(2);    // returns -1 (not found)
        //lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
        //lRUCache.get(1);    // return -1 (not found)
        //lRUCache.get(3);    // return 3
        //lRUCache.get(4);    // return 4
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Merge Two Sorted Lists (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #21](https://leetcode.com/problems/merge-two-sorted-lists/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
class ListNode {
    int data;
    ListNode next;

    ListNode(int num) {
        this.data = num;
        this.next = null;
    }
}

public class Solution {
    /**
     * Definition for singly-linked list.
     * public class ListNode {
     * int val;
     * ListNode next;
     * ListNode() {}
     * ListNode(int val) { this.val = val; }
     * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
     * }
     */

    static ListNode merge(ListNode head1, ListNode head2) {

        ListNode mergedList;
        if (head1 == null) {
            return head2;
        }
        if (head2 == null) {
            return head1;
        }
        if (head1.data < head2.data) {
            //point to smaller element
            mergedList = head1;
            mergedList.next = merge(head1.next, head2);
        } else { //head1 is large, so pass h
            //point to smaller element
            mergedList = head2;
            //head2 is already considered
            //now process next node of head2
            mergedList.next = merge(head1, head2.next);
        }
        return mergedList;
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
        //  Example 1:
        //  Output: [1,1,2,3,4,4]
        //  Input: list1 = [1,2,4], list2 = [1,3,4]

//        int[] ex1data1 = {1,2,4};
        int[] ex1data1 = {2, 4, 5};
        ListNode head1ex1 = new ListNode(ex1data1[0]);
        ListNode current1Ex1 = head1ex1;

        for (int i = 1; i < ex1data1.length; i++) {
            ListNode node = new ListNode(ex1data1[i]);
            current1Ex1.next = node;
            current1Ex1 = node;
        }

        System.out.println("Ex1 (Head 1) - # of Nodes: " + countNodes(head1ex1));

//        int[] ex1data = {1,3,4};
        int[] ex1data2 = {3,4,6,7};
        ListNode head2ex1 = new ListNode(ex1data2[0]);
        ListNode current2Ex1 = head2ex1;

        for (int i = 1; i < ex1data2.length; i++) {
            ListNode node = new ListNode(ex1data2[i]);
            current2Ex1.next = node;
            current2Ex1 = node;
        }

        System.out.println("Ex1 (Head 2) - # of Nodes: " + countNodes(head2ex1));

        ListNode mergedListEx1 = merge(head1ex1, head2ex1);

        System.out.println("Ex1 (merged list) - # of Nodes: " + countNodes(mergedListEx1));
        System.out.println("Ex1 (merged list) - Head: " + mergedListEx1.data);
        System.out.println();

        int[] ex2data1 = {1, 3, 5, 9};
        ListNode head1ex2 = new ListNode(ex2data1[0]);
        ListNode current1Ex2 = head1ex2;

        for (int i = 1; i < ex2data1.length; i++) {
            ListNode node = new ListNode(ex2data1[i]);
            current1Ex2.next = node;
            current1Ex2 = node;
        }

        System.out.println("Ex2 (Head 1) - # of Nodes: " + countNodes(head1ex2));

        int[] ex2data2 = {2, 4, 5, 6, 10};
        ListNode head2ex2 = new ListNode(ex2data2[0]);
        ListNode current2Ex2 = head2ex2;

        for (int i = 1; i < ex2data2.length; i++) {
            ListNode node = new ListNode(ex2data2[i]);
            current2Ex2.next = node;
            current2Ex2 = node;
        }

        System.out.println("Ex2 (Head 2) - # of Nodes: " + countNodes(head2ex2));

        ListNode mergedListEx2 = merge(head1ex2, head2ex2);

        System.out.println("Ex2 (merged list) - # of Nodes: " + countNodes(mergedListEx2));
        System.out.println("Ex2 (merged list) - Head: " + mergedListEx2.data);

        //  Example 2:
        //  Output: []
        //  Input: list1 = [], list2 = []

        //  Example 3:
        //  Input: list1 = [], list2 = [0]
        //  Output: [0]

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Middle of the Linked List (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #876](https://leetcode.com/problems/middle-of-the-linked-list/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
class ListNode {
    int data;
    ListNode next;

    ListNode (int data) {
        this.data = data;
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

    static ListNode head;
    static ListNode tail;

//    static ListNode findMiddleNode(ListNode head) {
    static int findMiddleNode(ListNode head) {
        ListNode fast = head;
        ListNode slow = head;

        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }
//        return slow;
        return slow.data;
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
        //  Input: head = [1,2,3,4,5]
        //  Output: [3,4,5]

        int[] dataArray = {1, 2, 3, 4, 5};

        ListNode head = new ListNode(dataArray[0]);
        ListNode current = head;

        for (int i = 1; i < dataArray.length; i++) {

            ListNode node = new ListNode(dataArray[i]);

            current.next = node;
            current = node;
        }

        System.out.println(countNodes(head));
        System.out.println(findMiddleNode(head));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Palindrome Linked List (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #234](https://leetcode.com/problems/palindrome-linked-list/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    public static void main(String[] args) {
        System.out.println("Hello, world!");
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Remove Nth Node from End of List (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
class ListNode {
    int val;
    ListNode next;

    ListNode(int val) {
        this.val = val;
        this.next = null;
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

//    static ListNode removeNthFromEnd(ListNode head, int n) {
    static int removeNthFromEnd(ListNode head, int n) {

        ListNode dummy = new ListNode(0);
        dummy.next = head;

        ListNode first = dummy;
        ListNode second = dummy;

        for (int i = 1; i <= n + 1; i++) {
            first = first.next;
        }

        while (first != null) {
            first = first.next;
            second = second.next;
        }

        second.next = second.next.next;
//        return dummy.next;
        return dummy.next.val;
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

        //Input: head = [1,2,3,4,5], n = 2
        //Output: [1,2,3,5]

        int[] valArray = {1, 2, 3, 4, 5};
        int n = 2;

        ListNode head = new ListNode(valArray[0]);
        ListNode current = head;

        for (int i = 1; i < valArray.length; i++) {
            ListNode node = new ListNode(valArray[i]);
            current.next = node;
            current = node;
        }

        System.out.println(countNodes(head));
        System.out.println(removeNthFromEnd(head, n));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Reorder List (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #143](https://leetcode.com/problems/reorder-list/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
class ListNode {
    int data;
    ListNode next;

    ListNode(int data) {
        this.data = data;
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
    static void reorderList(ListNode head) {

        if (head == null) {
            return;
        }

        //  find the middle node
        //  middle node is =slow=
        ListNode slow = head;
        ListNode fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        //  reverse the second part of the list node in-place
        //  head of the reversed linked-list is =prev=
        ListNode prev = null;
        ListNode current = slow;

        while (current != null) {
            ListNode next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        //  merge two sorted lists
        ListNode first = head;
        ListNode second = prev;

        while (second.next != null) {
            ListNode next = first.next;
            first.next = second;
            first = next;

            next = second.next;
            second.next = first;
            second = next;
        }

        //  Output the head
        System.out.println(head.data);
    }

    public static void main(String[] args) {
        // Example 1:
        //Input: head = [1,2,3,4]
        //  O/P: [1,4,2,3]

        // Example 2:
        //Input: head = [1,2,3,4,5]
        //  O/P: [1,5,2,4,3]

        int[] dataArray1 = {1, 2, 3, 4};

        ListNode head1 = new ListNode(dataArray1[0]);
        ListNode current1 = head1;

        for (int i = 1; i < dataArray1.length; i++) {

            ListNode node = new ListNode(dataArray1[i]);

            current1.next = node;
            current1 = node;
        }

        int[] dataArray2 = {1, 2, 3, 4, 5};

        ListNode head2 = new ListNode(dataArray2[0]);
        ListNode current2 = head2;

        for (int i = 1; i < dataArray2.length; i++) {

            ListNode node = new ListNode(dataArray2[i]);

            current2.next = node;
            current2 = node;
        }

        reorderList(head1);
        reorderList(head2);
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Palindrome Linked List (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #234](https://leetcode.com/problems/palindrome-linked-list/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
class ListNode {
    int data;
    ListNode next;

    ListNode (int data) {
        this.data = data;
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

    static boolean isPalindrome(ListNode head) {

        if (head == null) {
            return true;
        }

        ListNode fast = head;
        ListNode slow = head;

        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        ListNode firstHalfHead = head;
        ListNode secondHalfHead = reverseLinkedList(slow.next);

        while (firstHalfHead != null && secondHalfHead != null){
//            if (firstHalfHead.val != secondHalfHead.val) {
            if (firstHalfHead.data != secondHalfHead.data) {
                return false;
            }

            firstHalfHead = firstHalfHead.next;
            secondHalfHead = secondHalfHead.next;

        }

        return true;

    }

    static private ListNode reverseLinkedList(ListNode head) {

        ListNode current = head;
        ListNode prev = null;

        while (current != null) {
            ListNode next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return prev;
    }

    public static void main(String[] args) {

        // Example 1:
        int[] head1Array = {1,2,2,1};
        //  O/P: true

        // Example 2:
        int[] head2Array = {1,2};
        //  O/P: false

        ListNode head1 = new ListNode(head1Array[0]);
        ListNode current1 = head1;

        for (int i = 1; i < head1Array.length; i++) {

            ListNode node = new ListNode(head1Array[i]);

            current1.next = node;
            current1 = node;
        }

        ListNode head2 = new ListNode(head1Array[0]);
        ListNode current2 = head2;

        for (int i = 1; i < head2Array.length; i++) {

            ListNode node = new ListNode(head2Array[i]);

            current2.next = node;
            current2 = node;
        }

        System.out.println("Example 1: " + isPalindrome(head1));
        System.out.println("Example 1: " + isPalindrome(head2));
    }

}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Reverse Linked List (Expand/Collapse) </summary> 

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