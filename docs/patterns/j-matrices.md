---
sidebar_position: 11
id: j-matrices  
title: Matrices
tags: [
    matrices,
    spiral-matrix,    
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Matrices

- Understanding matrices 
- Solved problems are presented in alphabetical order

## Problems related to matrices 

<details> 
<summary> Flood Fill </summary> 

### [↗ Flood Fill](../data-structures/k-graphs.md)

</details>

<details> 
<summary> Spiral Matrix </summary> 

### [↗ See LeetCode Problem #54](https://leetcode.com/problems/spiral-matrix/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.List;
import java.util.ArrayList;

public class Solution {
    public static List<Integer> spiralOrder(int[][] matrix) {

        List<Integer> elementsSpiralOrder = new ArrayList<>();

        int topBoundary = 0;
        int leftBoundary = 0;
        //  matrix[0].length gives number of columns
        int rightBoundary = matrix[0].length - 1;
        //  matrix.length gives number of rows
        int bottomBoundary = matrix.length - 1;

        while (elementsSpiralOrder.size() <
                matrix.length * matrix[0].length) {
            //  Add elements in the top row (moving left to right)
            for (int i = leftBoundary; i <= rightBoundary; i++) {
                elementsSpiralOrder.add(matrix[topBoundary][i]);
            }

            //  Add elements in the right column (moving downwards)
            for (int i = topBoundary + 1; i <= bottomBoundary; i++) {
                elementsSpiralOrder.add(matrix[i][rightBoundary]);
            }

            //  Check topBoundary is not same as bottomBoundary
            if (topBoundary < bottomBoundary) {

                //  Add elements in the bottom row (moving right to left)
                for (int i = rightBoundary - 1; i >= leftBoundary; i--) {
                    elementsSpiralOrder.add(matrix[bottomBoundary][i]);
                }

            }

            //  Check rightBoundary is not same as leftBoundary
            if (leftBoundary < rightBoundary) {

                //  Add elements in the left column (moving upwards)
                //  i > topBoundary because
                //      topBoundary element has already been added
                //      unlike elements in the for loops above this for loop
                for (int i = bottomBoundary - 1; i > topBoundary; i--) {
                    elementsSpiralOrder.add(matrix[i][leftBoundary]);
                }
            }

            leftBoundary++;
            topBoundary++;
            rightBoundary--;
            bottomBoundary--;
        }

        return elementsSpiralOrder;

    }

    public static void main(String[] args) {

        // Example 1:
        int[][] matrix1 = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        //  O/P: [1,2,3,6,9,8,7,4,5]

        // Example 2:
        int[][] matrix2 = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};
        //  O/P: [1,2,3,4,8,12,11,10,9,5,6,7]

        System.out.println(spiralOrder(matrix1));
        System.out.println(spiralOrder(matrix2));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Word Search </summary> 

### [↗ Word Search](../data-structures/k-graphs.md)

</details>

