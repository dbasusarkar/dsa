---
sidebar_position: 8 
id: h-bit-manipulation 
title: Bit Manipulation
tags: [bit-manipulation]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Bit Manipulation 

<details> 
<summary> Best Time to Buy and Sell Stocks (Expand/Collapse) </summary> 

### [⁉️ See LeetCode Problem #121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

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
<summary> Contains Duplicate (Expand/Collapse) </summary> 

### [See LeetCode Problem #217](https://leetcode.com/problems/contains-duplicate/)

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
<summary> Insert Interval (Expand/Collapse) </summary> 

### [See LeetCode Problem #57](https://leetcode.com/problems/insert-interval/)

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
<summary> Majority Element (Expand/Collapse) </summary> 

### [See LeetCode Problem #169](https://leetcode.com/problems/majority-element/)

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
<summary> Two Sum (Expand/Collapse) </summary> 

### [See LeetCode Problem #1](https://leetcode.com/problems/two-sum/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Solution {

//    //  Brute force approach
//    public int[] twoSum(int[] nums, int target) {
//        for (int i = 0; i < nums.length; i++) {
//            for (int j = i + 1; j < nums.length; j++) {
//                if (nums[j] == target - nums[i]) {
//                    return new int[]{i, j};
//              }
//          }
//        }
//        return null;
//    }

    //  O(N) time complexity
    //  2-pass HashMap
//      static int[] twoSum(int[] nums, int target) {
//          Map<Integer, Integer> hmap = new HashMap<>();
//          for (int i = 0; i < nums.length; i++) {
//              hmap.put(nums[i], i);
//          }
//
//          for (int i = 0; i < nums.length; i++) {
//              int complement = target - nums[i];
//              if (hmap.containsKey(complement) && hmap.get(complement) != i) {
//                  return new int[] {i, hmap.get(complement)};
//              }
//          }
//          return null;
//      }

    //  O(N) time complexity
    //  1-pass HashMap
    static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> hmap = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (hmap.containsKey(complement)) {
                return new int[] {hmap.get(complement), i};
            }
            hmap.put(nums[i], i);
        }
        return null;
    }

    public static void main(String[] args) {
        //Output: [0,1]
        int[] nums1 = {2,7,11,15};
        int target1 = 9;

        //Output: [1,2]
        int[] nums2 = {3,2,4};
        int target2 = 6;

        //Output: [0,1]
        int[] nums3 = {3,3};
        int target3 = 6;

        System.out.println(Arrays.toString(twoSum(nums1, target1)));
        System.out.println(Arrays.toString(twoSum(nums2, target2)));
        System.out.println(Arrays.toString(twoSum(nums3, target3)));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Problem Name 2 (Expand/Collapse) </summary> 

<!-- two_sum [***Grind75-Array-1/11, +++H-Array, +++M-HashTable] -->
### [Problem statement from LeetCode](https://leetcode.com/problems/two-sum/)

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
<summary> Problem Name 3 (Expand/Collapse) </summary> 

<!-- two_sum [***Grind75-Array-1/11, +++H-Array, +++M-HashTable] -->
### [Problem statement from LeetCode](https://leetcode.com/problems/two-sum/)

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
<summary> Problem Name 4 (Expand/Collapse) </summary> 

<!-- two_sum [***Grind75-Array-1/11, +++H-Array, +++M-HashTable] -->
### [Problem statement from LeetCode](https://leetcode.com/problems/two-sum/)

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
<summary> Problem Name 5 (Expand/Collapse) </summary> 

<!-- two_sum [***Grind75-Array-1/11, +++H-Array, +++M-HashTable] -->
### [Problem statement from LeetCode](https://leetcode.com/problems/two-sum/)

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
<summary> Problem Name 6 (Expand/Collapse) </summary> 

<!-- two_sum [***Grind75-Array-1/11, +++H-Array, +++M-HashTable] -->
### [Problem statement from LeetCode](https://leetcode.com/problems/two-sum/)

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
<summary> Problem Name 7 (Expand/Collapse) </summary> 

<!-- two_sum [***Grind75-Array-1/11, +++H-Array, +++M-HashTable] -->
### [Problem statement from LeetCode](https://leetcode.com/problems/two-sum/)

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
<summary> Problem Name 8 (Expand/Collapse) </summary> 

<!-- two_sum [***Grind75-Array-1/11, +++H-Array, +++M-HashTable] -->
### [Problem statement from LeetCode](https://leetcode.com/problems/two-sum/)

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
<summary> Problem Name 9 (Expand/Collapse) </summary> 

<!-- two_sum [***Grind75-Array-1/11, +++H-Array, +++M-HashTable] -->
### [Problem statement from LeetCode](https://leetcode.com/problems/two-sum/)

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
