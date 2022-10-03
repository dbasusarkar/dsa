---
sidebar_position: 11
id: l-tries
title: Tries
tags: [
    tries,
    implement-trie-prefix-tree,
    word-break,
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Tries 

- Understanding tries 
- Solved problems are presented in alphabetical order

## Problems related to tries 

<details> 
<summary> Implement Trie (Prefix Tree) </summary> 

### [↗ See LeetCode Problem #208](https://leetcode.com/problems/implement-trie-prefix-tree/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Trie {
    static class TrieNode {
        //  Link nodes to root (parent):
        //  Array of TrieNode type
        private TrieNode[] children;

        //  Number of childeren
        //  # of children set to 26, because English alphabet
        private final int N = 26;

        //  Declare a boolean variable to mark the end of word
        boolean isEndofWord;

        //  Create no-argument constructor
        public TrieNode () {
            //  Set children as a TrieNode array
            //      of size N
            children = new TrieNode[N];
        }

        //  Create a TrieNode for a given character c
        public void put (char c, TrieNode node) {
            //  Always subtract the ASCII value of
            //      character/letter 'a' to set the starting index to 0
            //  'a' has an integer value of 97
            //  'z' has an integer value of 122
            //  After subtracting 'a',
            //      a to z are indexed between 0 and 25
            children[c - 'a'] = node;
        }

        //  Check if a given character/letter is present
        public boolean containsKey (char c) {
            return children[c - 'a'] != null;
        }

        //  Retrieve a node for a given character/letter
        public TrieNode get (char c) {
            return children[c - 'a'];
        }

        //  Set the end of word to true
        public void setEndofWord () {
            isEndofWord = true;
        }

        //  Check if it is the end of word
        public boolean isEndofWord () {
            return isEndofWord;
        }
    }

    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    public void insert (String word) {
        TrieNode node = root;

        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);

            //  Check if current node contains current letter (c)
            //  If not, put a node at the current letter
            if (!node.containsKey(c)) {
                node.put(c, new TrieNode());
            }

            //  Update the current node
            node = node.get(c);
        }

        node.isEndofWord = true;
    }

    public TrieNode searchHelper (String word) {
        TrieNode node = root;
        for (int i = 0; i < word.length(); i++) {
            char c = word.charAt(i);
            if (node.containsKey(c)) {
                node = node.get(c);
            } else {
                return null;
            }
        }

        return node;
    }

    public boolean search(String word) {
        //  Search the given word
        //      using the searchHelper method
        //      and save the returned node
        TrieNode node = searchHelper(word);

       //   Check if the given word is present
       //   and if isEndOfWord set to true
        return node != null && node.isEndofWord;
    }

    public boolean startsWith(String prefix) {
        //  Search the given prefix
        //      using the searchHelper method
        //      and save the returned node
        TrieNode node = searchHelper(prefix);

        //  Check if the given prefix is present
        return node != null;
    }

    public static void main(String[] args) {
        // Example 1:
        //Input
        //["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
        //[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]

        Trie trie = new Trie();
        //  O/P: null

        trie.insert("apple");
        //  O/P: null

        System.out.println(trie.search("apple"));
        //  O/P: true

        System.out.println(trie.search("app"));
        //  O/P: false

        System.out.println(trie.startsWith("app"));
        //  O/P: true

        trie.insert("app");
        //  O/P: null

        System.out.println(trie.search("app"));
        //  O/P: true

    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Word Break </summary> 

### [↗ See LeetCode Problem #139](https://leetcode.com/problems/word-break/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Solution {
    static boolean wordBreak(String s, List<String> wordDict) {

        Set<String> wordDictSet = new HashSet<>(wordDict);

        boolean[] dp = new boolean[s.length() + 1];
        dp[0] = true;

        for (int i = 1; i <= s.length(); i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && wordDictSet.contains(s.substring(j,i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        return dp[s.length()];
    }

    public static void main(String[] args) {

        // Example 1:
        String s1 = "leetcode";
//        List<String> wordDict1 = List.of("leet","code");
        List<String> wordDict1 = new ArrayList<>();
        wordDict1.add("leet");
        wordDict1.add("code");
        //  O/P: true

        // Example 2:
        String s2 = "applepenapple";
        List<String> wordDict2 = List.of("apple","pen");
//        List<String> wordDict2 = new ArrayList<>();
//        wordDict2.add("apple");
//        wordDict2.add("pen");
        //  O/P: true

        // Example 3:
        String s3 = "catsandog";
//        List<String> wordDict3 = List.of("cats", "dog", "sand", "and", "cat");
        List<String> wordDict3 = new ArrayList<>();
        wordDict3.add("cats");
        wordDict3.add("dog");
        wordDict3.add("sand");
        wordDict3.add("and");
        wordDict3.add("cat");
        //  O/P: false

        System.out.println(wordBreak(s1, wordDict1));
        System.out.println(wordBreak(s2, wordDict2));
        System.out.println(wordBreak(s3, wordDict3));

    }
}
```

</TabItem>
</Tabs>

</details>