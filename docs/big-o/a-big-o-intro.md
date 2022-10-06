---
sidebar_position: 1 
id: a-big-o-intro
title: Introduction to Big O Notation
tags:
    - big-o
    - intro 
---

# Introduction to Big O Notation

"O" of "Big O" is from “order,” which is related to the rate of growth—for example, of time or space. Big O complexity is an asymptotic property that describes the theoretical limits of time and space—required to execute a program following a specific approach—as the size of the input arguments tends to infinity. Time complexity is therefore a limiting behavior associated with the total runtime of a program. Likewise, space complexity is associated with the theoretical limit to space/memory required for its successful execution.

There are best cases, worst cases, average cases, and amortized situations. Both time and space complexities may be determined by the average cases. However, we should explicitly mention that we are considering an average case or an amortized situation.

It is important to note that we disregard the constants and non-dominant known terms when using the Big O notation. For example, $O(n + n + …)$ is considered to be the same as $O(n)$ or $O(3n)$ as $O(n)$. Also, $O(n^2 + 2n)$ is considered to be the same as $O(n^2)$ or $O(3n + \log{n})$ as $O(n)$.

![Big O Notation](./assets/big-o-figure.jpg)

## Time Complexity

In the practical sense, total runtime of a program depends on the sequential execution of statements in the code. Its final value is obtained by adding the times required by all the statements in the program.

Each statement is said to have a constant runtime complexity, $O(1)$, if its runtime is independent of the number of elements involved—for example, size of an input array or a string.

However, the runtime of a statement could be dependent on the size of the input arguments. In such a case, depending on the kind of operation being performed, the time complexity can be logarithmic, $O(\log{n})$, or linear logarithmic, $O(n \log{n})$, or linear, $O(n)$, or quadratic, $O(n^2)$, or polynomial, $O(n^m)$, or exponential, $O(m^n)$, or factorial, $O(n!)$.

## Space Complexity

Space complexity is usually dependent on the data structures—for example, arrays, linked lists, stacks, queues, heaps, hash tables (maps), hash sets, tree, graphs, etc.—being used by the statements in a program. Also, it may depend on the use of conditional statements, iterative approaches involving loops or nested loops (for, while, etc.), recursive approaches involving function and procedure calls, etc.