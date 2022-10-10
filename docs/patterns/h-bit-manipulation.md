---
sidebar_position: 8 
id: h-bit-manipulation 
title: Bit Manipulation
tags: [
    bit-manipulation,
    add-binary,
    counting-bits,
    missing-number,
    number-of-1-bits,
    reverse-bits,
    single-number,
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Bit Manipulation 

- Understanding bit manipulation 
- Important concepts 
- Solved problems are presented in alphabetical order

## Important Concepts

### Binary Addition/Multiplication/Division

- Similar to decimal addition/multiplication/division

### Binary Subtraction

#### 1's and 2's Complement

- 1's complement means changing 1s to 0s and 0s to 1s.
    + 1's complement of $1110$: $0001$
- 2's complement means adding 1 to 1's complement
    + 2's complement of $1110$: $0001 + 1 = 0010$ 

<details> 
<summary> <b>Binary Subtraction Using 1's Complement</b> </summary> 

<!-- #### Binary Subtraction Using 1's Complement -->

- We can subtract B from A using 1's Complement using the following steps:
    1. Both A and B must have same number of bits to start with 
        + 0s can be added in the beginning to make the number of bits equal
    2. Find 1's complement of B
    3. Add A to 1's complement of B
    4. There are two possibilities following the addtion in the step above. 
        + \#1: We'll have 1 extra bit in addition to the total number of bits in A or B.
        + \#2: We'll have the same number of bits as in A or B
    5. In the case of one additional bit, we do the following
        + First, separate the most significant bit (MSB) from the rest of the number
        + MSB is generally the bit farthest to the left of a binary number
        + Second, add the MSB to the rest of the number to get our result
    6. In the case of the same number of bits, we do the following
        + First, take 1's complement of the number 
        + Second, add a negative sign in front of it to get our result
- Example 1: $A = 1000$ and $B = 1110$ 
    1. 1's complement of B: $0001$
    2. $1000 + 0001 = 1001$
    3. 1's complement of $1001$ = $0110$ 
    4. $A - B = -0110$
- Example 2: $A = 1110$ and $B = 1000$ 
    1. 1's complement of B: $0111$
    2. $1110 + 0111 = 10101$
    3. We have $1$ (MSB) and $0101$
    4. $0101 + 0001 = 0110$
    5. $A - B = 0110$

</details>

<details> 
<summary> <b>Binary Subtraction Using 2's Complement</b> </summary> 

- We can subtract B from A using 2's Complement using the following steps:
    1. Both A and B must have same number of bits to start with 
        + 0s can be added in the beginning to make the number of bits equal
    2. Find 2's complement of B
    3. Add A to 2's complement of B
    4. There are two possibilities following the addtion in the step above. 
        + \#1: We'll have 1 extra bit in addition to the total number of bits in A or B.
        + \#2: We'll have the same number of bits as in A or B
    5. In the case of one additional bit, we do the following
        + Separate the most significant bit (MSB) from the rest of the number
        + MSB is generally the bit farthest to the left of a binary number
        + The rest of the number (without the MSB) is our result
    6. In the case of the same number of bits, we do the following
        + First, take 2's complement of the number 
        + Second, add a negative sign in front of it to get our result
- Example 1: $A = 1000$ and $B = 1110$ 
    1. 2's complement of B: $0010$
    2. $1000 + 0010 = 1010$
    3. 2's complement of $1010$ = $0110$ 
    4. $A - B = -0110$
- Example 2: $A = 1110$ and $B = 1000$ 
    1. 2's complement of B: $1000$
    2. $1110 + 1000 = 10110$
    3. We have $1$ (MSB) and $0110$
    4. $A - B = 0110$

</details>

### Bitwise Operators

|   Operator    |   Symbol  | Description                                                                |
|---------------|-----------|----------------------------------------------------------------------------|
|   AND         |   **&**   |   0 & 1 or 0 & 0 is 0; 1 & 1 is 1                                          |
|   OR          |   **\|**  |   0 \| 1 or 1 \| 1 is 1; 0 \| 0 is 0                                       |
|   XOR         |   **^**   |   0^0 or 1^1 is 0; 0^1 is 1 (i.e., 1 for different bits, 0 for same bits)  |
|   NOT         |   **\~**  |   ~0 is a sequence of 1s and ~1 of 0s (i.e., 1 becomes 0 and 0 becomes 1)  |

### Bitwise Shift Operators

|   Operator   |    Description                                                                 |
|--------------|--------------------------------------------------------------------------------|
|   **<<**     |    Left shift: bits are shifted to the left, and empty spaces are filled by 0s |
|              |    Example: $11111 << 3 = 11000$                                                |
|   **>>**     |    Right shift: bits are shifted to the right, empty spaces are filled by 0s   |
|              |    Example: $11111 >> 3 = 00011$                                               |

### Frequently Encountered Results 

|   Result          |    Description                                                     |
|-------------------|--------------------------------------------------------------------|
|                                           **OR**                                       |
|   A \| A = A      |   To be added                                                      | 
|   A \| 0s = A     |   To be added                                                      | 
|   A \| 1s = 1s    |   To be added                                                      | 
|                                           **AND**                                      |
|   A & A = A       |   To be added                                                      | 
|   A & 0s = 0      |   To be added                                                      | 
|   A & 1s = A      |   To be added                                                      | 
|                                           **XOR**                                      |
|   A ^ A = 0       |   To be added                                                      | 
|   A ^ 0s = A      |   To be added                                                      | 
|   A ^ 1s = ~A     |   To be added                                                      |

## Problems related to bit manipulation 

<details> 
<summary> Add Binary </summary> 

### [↗ See LeetCode Problem #67](https://leetcode.com/problems/add-binary/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.math.BigInteger;

public class Solution {
    static String addBinary(String a, String b) {
        //  Approach 1: Might not be acceptable to the interviwer
//        return Integer.toBinaryString(
//                Integer.parseInt(a,2) + Integer.parseInt(b, 2));

        //  Approach 2: XOR a and b (to get respone without carry)
        //      AND a and b and then left shift by 1 (<< 1)
        //          (to get respone with carry)
        //      Set a = the respone without carry
        //      Set b = the respone with carry
        //      Continue while carry != 0

        BigInteger bigA = new BigInteger(a, 2);
        BigInteger bigB = new BigInteger(b, 2);

        BigInteger bigZero = new BigInteger("0", 2);

        BigInteger temp;
        BigInteger carry;

        while (bigB.compareTo(bigZero) != 0) {
            temp = bigA.xor(bigB);
            carry = bigA.and(bigB).shiftLeft(1);

            //  Update bigA
            bigA = temp;
            //  Update bigB
            bigB = carry;
        }

        return bigA.toString(2);
    }

    public static void main(String[] args) {
        // Example 1:
        String a1 = "11";
        String b1 = "1";
        //  O/P: "100"

        // Example 2:
         String a2 = "1010";
         String b2 = "1011";
        //  O/P: "10101"

        System.out.println(addBinary(a1, b1));
        System.out.println(addBinary(a2, b2));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Counting Bits </summary> 

### [↗ See LeetCode Problem #338](https://leetcode.com/problems/counting-bits/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Arrays;

public class Solution {
    static int[] countBits(int n) {

        int[] ans = new int[n + 1];

        for (int i = 1; i <= n; ++i) {

            //  i / 2 is i >> 1 (bit right shift operation)
            //  i % 2 is i & 1
            ans[i] = ans[i >> 1] + (i & 1);

        }

        return ans;
    }

    public static void main(String[] args) {

        // Example 1:
        int n1 = 2;
        //  O/P: [0,1,1]

        // Example 2:
        int n2 = 5;
        //  O/P: [0,1,1,2,1,2]

        // Example 3:
        int n3 = 55;

        System.out.println(Arrays.toString(countBits(n1)));
        System.out.println(Arrays.toString(countBits(n2)));
        System.out.println(Arrays.toString(countBits(n3)));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Missing Number </summary> 

### [↗ See LeetCode Problem #268](https://leetcode.com/problems/missing-number/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    static int missingNumber(int[] nums) {

        //  nums.length will always be in the given array
        //      but it won't appear as an index in the for loop
        int missing = nums.length;

        for (int i = 0; i < nums.length; i++) {
            missing ^= nums[i] ^ i;
        }

        return missing;
    }

    public static void main(String[] args) {

        // Example 1:
        int[] nums1 = {3, 0, 1};
        //  O/P: 2

        // Example 2:
        int[] nums2 = {0, 1};
        //  O/P: 2

        // Example 3:
        int[] nums3 = {9, 6, 4, 2, 3, 5, 7, 0, 1};
        //  O/P: 8

        // Example 4:
        int[] nums4 = {2, 0, 3};
        //  O/P: 2
        // 3^2^0^0^1^3^2

        System.out.println("Example 1: " + missingNumber(nums1));
        System.out.println("Example 2: " + missingNumber(nums2));
        System.out.println("Example 3: " + missingNumber(nums3));
        System.out.println("Example 4: " + missingNumber(nums4));

    }
 }
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Number of 1 Bits </summary> 

### [↗ See LeetCode Problem #191](https://leetcode.com/problems/number-of-1-bits/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    static int hammingWeight(int n) {
        int sum = 0;

        while (n != 0) {
            sum++;
            n = n & (n - 1);
//            n &= (n - 1);
        }

        return sum;
    }

    public static void main(String[] args) {

        // Example 1:
        int n1 = 0B00000000000000000000000000001011;
        //  O/P: 3

        // Example 2:
        int n2 = 0B00000000000000000000000010000000;
        //  O/P: 1

        //  Need to signed number issue
        // Example 3:
        //Input: n3 = 11111111111111111111111111111101
        //Output: 31

        System.out.println(hammingWeight(n1));
        System.out.println(Integer.toBinaryString(hammingWeight(n1)));
        System.out.println(hammingWeight(n2));
        System.out.println(Integer.toBinaryString(hammingWeight(n2)));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Reverse Bits </summary> 

### [↗ See LeetCode Problem #190](https://leetcode.com/problems/reverse-bits/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
// Doesn't work with negative signed integer

public class Solution {
    static int reverseBits(int n) {
        //   If n is 0 return 0
        if (n == 0) {
            return 0;
        }

        //   Initializing the result
        int result = 0;

        //   Loop through the given 32 bit (unsigned) integer
        for (int i = 0; i < 32; i++) {
            //  Bitwise leftshifting result
            result <<= 1;
            //  Adding 1 to result if & between righmost value of n
            //      and 1 is 1
            if ((n & 1) == 1) {
                result++;
            }

            //   Bitwise righshifting given n since the rightmost digit
            //       has been processed
            n >>= 1;
        }

        return result;

    }

    public static void main(String[] args) {

        // Example 1:
//        int n1 = 00000010100101000001111010011100;
        int n1 = 0B00000010100101000001111010011100;
        //  O/P: 964176192 (00111001011110000010100101000000)
        //                 (111001011110000010100101000000)

        // Example 2:
//        int n2 = 11111111111111111111111111111101;
        //  Wrong since left-most 1 represents negative
        //  int n2 = 0B11111111111111111111111111111101;
        //  First, flip 1's and 0's: to get 1's complement
        //  0B00000000000000000000000000000010;
        //  Then add 1: to get 2's complement
        //  0B00000000000000000000000000000011;
        //  So, we have:
//        long n2 = 0B00000000000000000000000000000011L;
        //  O/P: 3221225471 (10111111111111111111111111111111)

        System.out.println(reverseBits(n1));
        System.out.println(Integer.toBinaryString(reverseBits(n1)));
//        System.out.println(reverseBits(n2));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Single Number </summary> 

### [↗ See LeetCode Problem #136](https://leetcode.com/problems/single-number/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    static int singleNumber(int[] nums) {

        int result = 0;

        for (int i = 0; i < nums.length; i++) {
            result ^= nums[i];
        }

        return result;
    }

    public static void main(String[] args) {

        int[] nums1 = {2,2,1};
        //  O/P: 1

        int[] nums2 = {4,1,2,1,2};
        //  O/P: 4

        int[] nums3 = {1};
        //  O/P: 1

        System.out.println("Example 1: " + singleNumber(nums1));
        System.out.println("Example 2: " + singleNumber(nums2));
        System.out.println("Example 3: " + singleNumber(nums3));
    }
}
```

</TabItem>
</Tabs>

</details>
