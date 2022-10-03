---
sidebar_position: 12
id: k-math
title: Math
tags: [
    math,
    palindrome-number,
    reverse-integer,
    roman-to-integer,
    squares-of-a-sorted-array,
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Math 

- Understanding math 
- Solved problems are presented in alphabetical order

## Problems related to math

<details> 
<summary> Palindrome Number (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #9](https://leetcode.com/problems/palindrome-number/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    static boolean isPalindrome(int x) {

        if (x < 0) {
            return false;
        }

        int tempX = x;
        int reversedX = 0;

        while (tempX > 0) {
            int remainderTempX = tempX % 10;
            reversedX = reversedX * 10 + remainderTempX;
            tempX = tempX / 10;
        }

        if (reversedX == x) {
            return true;
        } else {
            return false;
        }

    }

    public static void main(String[] args) {

        // Example 1:
        int x1 = 121;
        //  O/P: true

        // Example 2:
        int x2 = -121;
        //  O/P: false

        // Example 3:
        int x3 = 10;
        //  O/P: false

        System.out.println(isPalindrome(x1));
        System.out.println(isPalindrome(x2));
        System.out.println(isPalindrome(x3));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Reverse Integer (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #7](https://leetcode.com/problems/reverse-integer/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    static int reverse(int x) {

        //  Initialize the reversed integer to be built
        int reversedInt = 0;

        //  Check until given integer x is not 0,
        //      since x is divided by 10 in every step
        while (x != 0) {
            //  Find the remainder to pop the last digit
            int remainder = x % 10;
            //  Divide by 10 to get rid of the last digit
            x /= 10;

            //  Check overflow condition on the positive side
            if (reversedInt > Integer.MAX_VALUE / 10 ||
                    (reversedInt == Integer.MAX_VALUE / 10 &&
                            remainder > 7)) {
                return 0;
            }

            //  Check overflow condition on the negative side
            if (reversedInt < Integer.MIN_VALUE / 10 ||
                    (reversedInt == Integer.MIN_VALUE / 10 &&
                            remainder < -8)) {
                return 0;
            }

            //  Build the reversed integer
            reversedInt = reversedInt * 10 + remainder;
        }
        return reversedInt;
    }

    public static void main(String[] args) {
        // Example 1:
        int x1 = 123;
        //  O/P: 321

        // Example 2:
        int x2 = -123;
        //  O/P: -321

        // Example 3:
        int x3 = 120;
        //  O/P: 21

        System.out.println(reverse(x1));
        System.out.println(reverse(x2));
        System.out.println(reverse(x3));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Roman to Integer (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #13](https://leetcode.com/problems/roman-to-integer/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.HashMap;
import java.util.Map;

public class Solution {
    static int romanToInt(String s) {

        Map<String, Integer> valuesMap = new HashMap<>();

        valuesMap.put("M", 1000);
        valuesMap.put("D", 500);
        valuesMap.put("C", 100);
        valuesMap.put("L", 50);
        valuesMap.put("X", 10);
        valuesMap.put("V", 5);
        valuesMap.put("I", 1);

        int index = 0;
        int totalSum = 0;

        while (index < s.length()) {

            String currentSymbol = s.substring(index, index +1);
            int currentValue = valuesMap.get(currentSymbol);

            int nextValue = 0;

            if (index < s.length() - 1) {
                String nextSymbol = s.substring(index + 1, index + 2);
                nextValue = valuesMap.get(nextSymbol);
            }

            if (currentValue < nextValue) {
                totalSum += (nextValue - currentValue);
                index += 2;
            } else {
                totalSum += currentValue;
                index += 1;
            }
        }
       return totalSum;
    }

    public static void main(String[] args) {

        // Example 1:
        String s1 = "III";
        //  O/P: 3

        // Example 2:
        String s2 = "LVIII";
        //  O/P: 58

        // Example 3:
        String s3 = "MCMXCIV";
        //  O/P: 1994

        System.out.println(romanToInt(s1));
        System.out.println(romanToInt(s2));
        System.out.println(romanToInt(s3));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Squares of a Sorted Array (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #977](https://leetcode.com/problems/squares-of-a-sorted-array/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Arrays;

public class Solution {
    public static int[] sortedSquares(int[] nums) {
        int leftIndex = 0;
        int rightIndex = nums.length - 1;
        int[] squaredArray = new int[nums.length];

        for (int i = nums.length - 1; i >= 0; i--) {
            if (Math.abs(nums[leftIndex]) < Math.abs(nums[rightIndex])) {
                squaredArray[i] = nums[rightIndex] * nums[rightIndex];
                rightIndex--;
            } else {
               squaredArray[i] = nums[leftIndex] * nums[leftIndex];
               leftIndex++;
            }
        }

        return squaredArray;
    }

    public static void main(String[] args) {
        // Example 1:
        int[] nums1 = {-4,-1,0,3,10};
        //  O/P: [0,1,9,16,100]

        // Example 2:
        int[] nums2 = {-7,-3,2,3,11};
        //  O/P: [4,9,9,49,121]

        System.out.println(Arrays.toString(sortedSquares(nums1)));
        System.out.println(Arrays.toString(sortedSquares(nums2)));
    }
}
```

</TabItem>
</Tabs>

</details>