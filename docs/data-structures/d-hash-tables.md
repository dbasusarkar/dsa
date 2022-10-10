---
sidebar_position: 4 
id: d-hash-tables
title: Hash Tables
tags: [
    hash-tables,
    ransom-note,
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Hash Tables

- Understanding hash tables 
- Solved problems are presented in alphabetical order

## Problems related to hash tables

<details> 
<summary> Ransom Note </summary> 

### [↗ See LeetCode Problem #383](https://leetcode.com/problems/ransom-note/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Map;
import java.util.HashMap;

public class Solution {
    static boolean canConstruct(String ransomNote, String magazine) {
        Map<Character, Integer> characterMap = new HashMap<>();

        for (int i = 0; i < magazine.length(); i++) {
            int characterCount = characterMap.getOrDefault(
                    magazine.charAt(i), 0);
            characterMap.put(magazine.charAt(i), characterCount + 1);
        }

        for (int i = 0; i < ransomNote.length(); i++) {

            int characterCount = characterMap.getOrDefault(
                    ransomNote.charAt(i), 0);

            if (characterCount == 0) {
                return false;
            }

            characterMap.put(ransomNote.charAt(i), characterCount - 1);
        }
        return true;
    }

    public static void main(String[] args) {
        // Example 1:
        String ransomNote1 = "a";
        String magazine1 = "b";
        //  O/P: false

        // Example 2:
        String ransomNote2 = "aa";
        String magazine2 = "ab";
        //  O/P: false

        // Example 3:
        String ransomNote3 = "aa";
        String magazine3 = "aab";
        //  O/P: true

        System.out.println(canConstruct(ransomNote1, magazine1));
        System.out.println(canConstruct(ransomNote2, magazine2));
        System.out.println(canConstruct(ransomNote3, magazine3));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Two Sum </summary>

### [↗ Two Sum](./a-arrays.md)

</details>

<details> 
<summary> Two Sum IV - Input is a BST </summary> 

### [↗ Two Sum IV - Input is a BST](../data-structures/i-binary-search-trees.md)

</details>
