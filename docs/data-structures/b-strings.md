---
sidebar_position: 2
id: b-strings
title: Strings 
tags: [
    strings, 
    find-all-anagrams-in-a-string,
    longest-palindrome,
    longest-palindromic-substring, 
    longest-substring-without-repeating-characters, 
    minimum-window-substring,
    string-to-integer-atoi,
    valid-anagram,
    valid-palindrome,
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Strings

- Understanding strings 
- Solved problems are presented in alphabetical order
## Problems related to strings 

<details> 
<summary> Find All Anagrams in a String (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #438](https://leetcode.com/problems/find-all-anagrams-in-a-string/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.List;
import java.util.ArrayList;

import java.util.Map;
import java.util.HashMap;

public class Solution {
    public static List<Integer> findAnagrams(String s, String p) {
        int leftIndex = 0;
        int matchedCharacterCount = 0;
        List<Integer> matchedIndices = new ArrayList<>();

        Map<Character, Integer> pHMap = new HashMap<>();

        for (char pCharacter : p.toCharArray()) {
            pHMap.put(pCharacter,
                    pHMap.getOrDefault (pCharacter,0) + 1);
        }

        for (int rightIndex = 0; rightIndex < s.length() ; rightIndex++) {
            char rightCharacter = s.charAt(rightIndex);
            if (pHMap.containsKey(rightCharacter)) {
                pHMap.put(rightCharacter,
                    pHMap.get(rightCharacter) - 1);
                if (pHMap.get(rightCharacter) == 0) {
                    matchedCharacterCount++;
                }
            }

            //  If found an anagram
            if (matchedCharacterCount == pHMap.size()) {
                //  Add leftIndex as the starting index
                //      of the anagram
                matchedIndices.add(leftIndex);
            }

            if (rightIndex >= p.length() - 1) {
                //  leftIndex++ in the following lines means
                //      give character at leftIndex
                //      and THEN, increase leftIndex by 1;
                //      meaning, leftIndex = leftIndex + 1
                char leftCharacter = s.charAt(leftIndex++);

                if (pHMap.containsKey(leftCharacter)) {
                    //  Check if leftCharacter is already matched
                    if(pHMap.get(leftCharacter) == 0) {
                        //  Decrease matched index by 1 since leftCharacter
                        //      is being removed
                        matchedCharacterCount--;
                    }
                    //  Put leftCharacter back for future matching
                    pHMap.put(leftCharacter, pHMap.get(leftCharacter) + 1);
                }
            }
        }
        return matchedIndices;
    }

    public static void main(String[] args) {
        // Example 1:
        String s1 = "cbaebabacd";
        String p1 = "abc";
        //  O/P: [0,6]

        // Example 2:
        String s2 = "abab";
        String p2 = "ab";
        //  O/P: [0,1,2]

        System.out.println(findAnagrams(s1, p1));
        System.out.println(findAnagrams(s2, p2));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Group Anagrams (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #49](https://leetcode.com/problems/group-anagrams/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.*;

public class Solution {
    static List<List<String>> groupAnagrams(String[] strs) {

        //  Return empty list if given string array is empty
        if (strs.length == 0) {
            return new ArrayList<>();
        }

        //  Create HashMap to generate the required output
        Map<String, List> hMap = new HashMap<>();

        //  Create integer array of 26
        //      to count the occurrence of each letter
        int[] count = new int[26];

        for (String s : strs) {
            Arrays.fill(count, 0);
            for (char c : s.toCharArray()) {
                count[c - 'a']++;
            }

            StringBuilder sBuilder = new StringBuilder("");

            for (int i = 0; i < 26; i++) {
                sBuilder.append('#');
                sBuilder.append(count[i]);
            }

            String hMapKey = sBuilder.toString();
            if (!hMap.containsKey(hMapKey)){
                hMap.put(hMapKey, new ArrayList<>());
            }
            hMap.get(hMapKey).add(s);
        }

        System.out.println(hMap.keySet());
        System.out.println(hMap.values());
        return new ArrayList(hMap.values());
    }

    public static void main(String[] args) {
        // Example 1:
        String[] strs1 = {"eat","tea","tan","ate","nat","bat"};
        //  O/P: [["bat"],["nat","tan"],["ate","eat","tea"]]

        // Example 2:
        String[] strs2 = {""};
        //  O/P: [[""]]

        // Example 3:
        String[] strs3 = {"a"};
        //  O/P: [["a"]]

        // Example 4:
        String[] strs4 = {};
        //  O/P: [["a"]]

        System.out.println(groupAnagrams(strs1));
        System.out.println(groupAnagrams(strs2));
        System.out.println(groupAnagrams(strs3));
        System.out.println(groupAnagrams(strs4));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Longest Common Prefix (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #14](https://leetcode.com/problems/longest-common-prefix/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    static String longestCommonPrefix(String[] strs) {

        if (strs == null || strs.length == 0) {
            return "";
        }

        for (int i = 0; i < strs[0].length(); i++) {

            for (int j = 1; j < strs.length; j++) {
                if (i == strs[j].length() ||
                        strs[j].charAt(i) != strs[0].charAt(i)) {
                    return strs[0].substring(0,i);
                }
            }
        }

        return strs[0];
    }

    public static void main(String[] args) {
        // Example 1:
        String[] strs1 = {"flower","flow","flight"};
        //  O/P: "fl"

        // Example 2:
        String[] strs2 = {"dog","racecar","car"};
        //  O/P: ""

        System.out.println(longestCommonPrefix(strs1));
        System.out.println(longestCommonPrefix(strs2));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Longest Palindrome (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #409](https://leetcode.com/problems/longest-palindrome/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Map;
import java.util.HashMap;

public class Solution {
    static int longestPalindrome(String s) {
                //  Approach #1 (Without HashSet)
        //  result: lenght of the longest palindrome
        int result = 0;
        int[] characterCount = new int[128];

        for (char c : s.toCharArray()) {
            characterCount[c]++;
        }

        for (int countNumber : characterCount) {
            //  Add total occurrences of paired character
            //  Multiplied by 2 since both occurrences of the character
            //      contribute to the length
            result += countNumber / 2 * 2;
        }

        //  Find and add (if present) the central
        //      unpaired charcter
        if (result < s.length()) {
            result++;
        }

        return result;

        //  Approach #1 (With HashSet)
//        if (s == null || s.length() < 1) {
//            return 0;
//        }
//
//        Set<Character> characterSet = new HashSet<>();
//
//        for (int i = 0; i < s.length(); i++) {
//
//            char c = s.charAt(i);
//
//            if (characterSet.contains(c)) {
//                characterSet.remove(c);
//            } else {
//                characterSet.add(c);
//            }
//        }
//
//        if (characterSet.size() <= 1) {
//            return s.length();
//        }
//
//        //  Remove unpaired characters from s
//        //  Add 1 to include the central unpaired character
//        //  The if statement immediately above takes care of
//        //     the case with only one unpaired character
//        return s.length() - characterSet.size() + 1;
    }

    public static void main(String[] args) {

        // Example 1:
        String s1 = "abccccdd";
        //Output: 7

        // Example 2:
        String s2 = "a";
        //Output: 1

        System.out.println(longestPalindrome(s1));
        System.out.println(longestPalindrome(s2));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Longest Palindromic Substring (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #5](https://leetcode.com/problems/longest-palindromic-substring/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    private static int centralExpansion(int left, int right, String s) {
        while (left >= 0 && right < s.length() &&
                s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        //  "- 1" because index starts from "0"
        return right - left - 1;
    }

    static String longestPalindrome(String s) {

        if (s == null || s.length() < 1) {
            return "";
        }

        int leftBoundary = 0;
        int rightBoundary = 0;

        for (int i = 0; i < s.length(); i++) {
            //  For strings with odd length (example: "abcba")
            int oddLength = centralExpansion(i, i, s);

            //  For strings with even length (example: "abba")
            int evenLength = centralExpansion(i, i + 1, s);

            int maxLength = Math.max(oddLength, evenLength);

            //  To deal with index out of bound cases
            if (maxLength > rightBoundary - leftBoundary) {
                //  Because, indices range between 0 and length - 1
                //  Example: string.length() = 5
                //      0, 1, 2, 3, 4
                //      (5 - 1) / 2 = 2
                //      5 / 2 = 2
                //  Example: string.length() = 6
                //      0, 1, 2, 3, 4, 5
                //      (6 - 1) / 2 = 2
                //      6 / 2 = 3
                leftBoundary = i - (maxLength - 1) / 2;
                rightBoundary = i + maxLength / 2;
            }
        }

        //  return longest substring that begins with leftBoundary
        //      and ends in rightBoundary (inclusive)
        return s.substring(leftBoundary, rightBoundary + 1);
    }

    public static void main(String[] args) {
        // Example 1:
        String s1 = "babad";
        //  O/P: "bab"

        // Example 2:
        String s2 = "cbbd";
        //  O/P: "bb"

        // Example 3:
        String s3 = "eracecarluhgouwqzyufg";
        //  O/P: "racecar"

        System.out.println(longestPalindrome(s1));
        System.out.println(longestPalindrome(s2));
        System.out.println(longestPalindrome(s3));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Longest Substring Without Repeating Characters (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #3](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Map;
import java.util.HashMap;

public class Solution {
    public static int lengthOfLongestSubstring(String s) {
            //  Start of the sliding window
        int windowStart = 0;

        //  Length of the window
        int windowSize = 0;

        //  HashMap to store characer frequencies
        Map<Character, Integer> characterFrequency = new HashMap<>();

        //  i = windowEnd
        for (int i = 0; i < s.length() ; i++) {

            char rightCharacter = s.charAt(i);
            if (characterFrequency.containsKey(rightCharacter)) {
                windowStart = Math.max(windowStart,
                        characterFrequency.get(rightCharacter) + 1);
            }

            characterFrequency.put(rightCharacter, i);

            //  Updates the maximum length/size of the substring
            windowSize = Math.max(windowSize, i - windowStart + 1);
        }

        return windowSize;
    }

    public static void main(String[] args) {

        // Example 1:
        String s1 = "abcabcbb";
        //  O/P: 3

        // Example 2:
        String s2 = "bbbbb";
        //  O/P: 1

        // Example 3:
        String s3 = "pwwkew";
        //  O/P: 3

        System.out.println(lengthOfLongestSubstring(s1));
        System.out.println(lengthOfLongestSubstring(s2));
        System.out.println(lengthOfLongestSubstring(s3));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Minimum Window Substring (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #76](https://leetcode.com/problems/minimum-window-substring/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.HashMap;
import java.util.Map;

public class Solution {
    static String minWindow(String s, String t) {

        if (s.length() == 0 || t.length() == 0){
            return "";
        }

        int windowStart = 0;
        int windowEnd;
        int matchedCharacters = 0;
        int substringStart = 0;
        int minWindowSize = s.length() + 1; //  Smallest (maximum) impossible size

        Map<Character, Integer> patternMap = new HashMap<>();

//        t.chars().mapToObj(c -> (char) c)
//                .forEach(c -> patternMap.put(
//                        c, patternMap.getOrDefault(c, 0) + 1));

        for (int i = 0; i < t.length(); i++) {
            char ch = t.charAt(i);
            patternMap.put(ch,
                    patternMap.getOrDefault(ch, 0) + 1);
        }

        for (windowEnd = 0; windowEnd < s.length(); windowEnd++) {
            //  Declare and store current character at index windowEnd
            char rightChar = s.charAt(windowEnd);
            if (patternMap.containsKey(rightChar)) {
                patternMap.put(rightChar, patternMap.get(rightChar) - 1);
                if (patternMap.get(rightChar) >= 0) {
                    //  Increase the count of matched characters
                    //      for every encounter of a matching character
                    //  However, ignore if patternMap.get(key) < 0,
                    //      which means the required number matches
                    //      for that key/rightChr have already been accounted for
                    matchedCharacters++;
                }
            }

            while (matchedCharacters == t.length()) {

                //  + 1 b/c 0-indexed
//                int windowLength = windowEnd - windowStart + 1;

                if (minWindowSize > windowEnd - windowStart + 1) {
                    //  Update minimum window size if
                    //      current (properly matching) window length is smaller
                    minWindowSize = windowEnd - windowStart + 1;

                    //  Store the current windowStart as the
                    //      starting index of the required minimum window substring
                    substringStart = windowStart;
                }

                //  Store the character at the start of the window
                //      and, after that increase windowStart by 1
                char leftChar = s.charAt(windowStart++);

                //  Check if the character at the start of the window
                //      is present in the pattern map
                if (patternMap.containsKey(leftChar)) {

                    //  If present, it has already been accounted for
                    //      in matchedCharacters count
                    //  So, if its current count is 0,
                    //      remove it from the count of matchedCharacters
                    //      by decreasing the value of matchedCharacters by 1
                    if (patternMap.get(leftChar) == 0) {
                        matchedCharacters--;
                    }

                    //  If patternMap.get(key/leftchar) is > (i.e. !=) 0 or just 0
                    //     put it back in the pattern map by increasing the value by 1,
                    //     since leftchar is moving out of the window
                    //     in the following/next iteration
                    patternMap.put(leftChar, patternMap.get(leftChar) + 1);
                }
            }
        }

        //  return empty string if minimum substring doesn't exist
        //      (i.e. length of given string > minWindowSize) or
        //      return the minimum window substring
        return minWindowSize > s.length() ?
                "" : s.substring(substringStart, substringStart + minWindowSize);

    }

    public static void main(String[] args) {

        // Example 1:
        String s1 = "ADOBECODEBANC";
        String t1 = "ABC";
        //  O/P: "BANC"

        // Example 2:
        String s2 = "a";
        String t2 = "a";
        //  O/P: "a"

        // Example 3:
        String s3 = "a";
        String t3 = "aa";
        //  O/P: ""

        System.out.println("Example 1: " + minWindow(s1,t1));
        System.out.println("Example 2: " + minWindow(s2,t2));
        System.out.println("Example 3: " + minWindow(s3,t3));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> String to Integer (atoi) (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #8](https://leetcode.com/problems/string-to-integer-atoi/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    public static int myAtoi(String s) {
        //  Initialize the index
        int index = 0;
        //  Sign of the output/result
        int sign = 1;
        //  The output
        int result = 0;

        //  Skip all leading whitespaces
        while (index < s.length() && s.charAt(index) == ' ') {
            index++;
        }

        //  Now, check if positive or negative
        //  First check if positive
        if (index < s.length() && s.charAt(index) == '+') {
            //  Keep sign positive
            sign = 1;
            //  Move on to next character
            index++;
        //  Then check if negative
        } else if (index < s.length() && s.charAt(index) == '-') {
            //  Make the sign negative
            sign = -1;
            //  Move on to next character
            index++;
        }

        //  Move forward only next characters are digits
        //      End the loop if not digits
        while (index < s.length() &&
                Character.isDigit(s.charAt(index))) {

            //  ASCII character '0' has a value of 48
            //      and '1' is 49 and so on...
            int sDigit = s.charAt(index) - '0';

            //  Check overflow and underflow
            //  Check if result is out of 32-bit range
            if ((result > Integer.MAX_VALUE / 10) ||
                    //  Check if result is in 32-bit range
                    (result == Integer.MAX_VALUE / 10 &&
                            sDigit > Integer.MAX_VALUE % 10)) {
                // return maximum or minimum 32-bit integer value
                //     depending on if sign == 1 is true or false
                return sign == 1 ? Integer.MAX_VALUE : Integer.MIN_VALUE;
            }

            // Build the result using the current digit
            result = 10 * result + sDigit;
            // Increase index by 1 and move on to next loop
            index++;
        }
        return sign * result;
    }

    public static void main(String[] args) {

        // Example 1:
        String s1 = "42";
        //Output: 42

        // Example 2:
        String s2 = "   -42";
        //Output: -42

        // Example 3:
        String s3 = "4193 with words";
        //Output: 4193

        System.out.println(myAtoi(s1));
        System.out.println(myAtoi(s2));
        System.out.println(myAtoi(s3));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Valid Anagram (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #242](https://leetcode.com/problems/valid-anagram/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    static boolean isAnagram(String s, String t) {

        if (s.length() != t.length()) {
            return false;
        }

        java.util.Map<Character, Integer> sMap = new java.util.HashMap<>();

        for (int i = 0; i < s.length(); i++) {
            sMap.put(s.charAt(i), sMap.getOrDefault(s.charAt(i),0) + 1);
            sMap.put(t.charAt(i), sMap.getOrDefault(t.charAt(i),0) - 1);
        }

        for (char c : sMap.keySet()) {
            if (sMap.get(c) != 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        // Example 1:
        String s1 = "anagram";
        String t1 = "nagaram";
        //  O/P: true

        // Example 2:
        String s2 = "rat";
        String t2 = "car";
        //  O/P: false

        System.out.println("Example 1: " + isAnagram(s1,t1));
        System.out.println("Example 2: " + isAnagram(s2,t2));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Valid Palindrome (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #125](https://leetcode.com/problems/valid-palindrome/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    static boolean isPalindrome(String s) {
        for (int i = 0, j = s.length() - 1; i < j; i++, j--) {

            while (i < j && !Character.isLetterOrDigit(s.charAt(i))) {
                i++;
            }

            while (i < j && !Character.isLetterOrDigit(s.charAt(j))) {
                j--;
            }

            if (Character.toLowerCase(s.charAt(i)) !=
                    Character.toLowerCase(s.charAt(j))) {
                return false;
            }

        }

        return true;

    }

    public static void main(String[] args) {

        // Example 1:
        String s1 = "A man, a plan, a canal: Panama";
        //  O/P: true

        // Example 2:
        String s2 = "race a car";
        //  O/P: false

        // Example 3:
        String s3 = " ";
        //  O/P: true

        System.out.println(isPalindrome(s1));
        System.out.println(isPalindrome(s2));
        System.out.println(isPalindrome(s3));

    }
}
```

</TabItem>
</Tabs>

</details>
