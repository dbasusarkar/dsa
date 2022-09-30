---
sidebar_position: 2 
---

# Big O—Popular Data Structures

Table below shows the average time complexities related to different operations for different data structures. Also, it includes corresponding (worst) space complexities.

|    Data Structure             |   Access  |   Search  |   Insertion   |   Deletion    |   Space   Complexity  |
|-------------------------------|-----------|-----------|---------------|---------------|-----------------------|
|   Array                       | $O(1)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$                |
|   Linked List                 | $O(n)$    | $O(n)$    | $O(1)$        | $O(1)$        | $O(n)$                |
|   Stack                       | $O(n)$    | $O(n)$    | $O(1)$        | $O(1)$        | $O(n)$                |
|   Queue                       | $O(n)$    | $O(n)$    | $O(1)$        | $O(1)$        | $O(n)$                |
|   Hash Table                  | -         | $O(1)$    | $O(1)$        | $O(1)$        | $O(n)$                |
|	Disjoint Set or Union-Find  | - | Find: **$O(\alpha({n}))$ | Union: **$O(\alpha({n}))$ | -   | $O(n)$       |

***More will be added.

** $O(\alpha({n}))$: Practically, $O(1)$. Here, $\alpha$ is known as the inverse Ackermann function. 
<!--
|	Trie                        | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$                |
|	Disjoint Set or Union-Find  | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$                |
|	B-Tree                      | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$                |
|	Red-Black Tree              | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$                |
-->

<!-- 
|   Data Structure              |   Time Complexity                                                                                             | Space Complexity  |
|-------------------------------|---------------------------------------------------------------------------------------------------------------|-------------------|
|                               |   Average                                             |   Worst                                               | Worst             |
|-------------------------------|---------------------------------------------------------------------------------------------------------------|-------------------|
|                               |   Access  |   Search  |   Insertion   |   Deletion    |   Access  |   Search  |   Insertion   |   Deletion    |                   | 
|-------------------------------|-----------|-----------|---------------|---------------|-----------|-----------|---------------|---------------|-------------------|
|   Array                       | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$            |
|   Linked List                 | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$            | 
|	Stack                       | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$            |
|	Queue                       | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$            |
|	Hash Table                  | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$            |
|	Trie                        | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$            |
|	Disjoint Set or Union-Find  | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$            |
|	B-Tree                      | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$            |
|	Red-Black Tree              | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$    | $O(n)$    | $O(n)$        | $O(n)$        | $O(n)$            | 
-->