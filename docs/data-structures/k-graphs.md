---
sidebar_position: 10
id: k-graphs
title: Graphs 
tags: [
    graphs,
    disjoint-set,
    union-find,
    accounts-merge,
    alien-dictionary,
    clone-graph,
    course-schedule,
    flood-fill,
    number-of-islands,
    rotting-oranges,
    word-ladder,
    01-matrix,
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Graphs 

- Understanding graphs 
- Solved problems are presented in alphabetical order

## Problems related to graphs 

<details> 
<summary> Accounts Merge (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #721](https://leetcode.com/problems/accounts-merge/)

### 🏷 disjoint-set

### 🏷 union-find

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Map;
import java.util.HashMap;
import java.util.List;
import java.util.ArrayList;
import java.util.TreeSet;

public class Solution {
    public static List<List<String>> accountsMerge(List<List<String>> accounts) {

        //  Approach #1: Using Disjoint Set or Union-Find Data Structure
        /* *** *** *** *** *** Approach #1 Starts *** *** *** *** */

        //  Declare a HashMap to store the names as values
        //      correspoding to the first email in each list as the key
        Map<String, String> emailsToNames = new HashMap<>();

        //  Declare a HashMap to set all emails (keys)
        //      as their own parents/roots (values)
        Map<String, String> emailsToParentEmails = new HashMap<>();

        //  Declare a HashMap to store the combined list of all emails
        //      using union between email lists (hence TreeSet as values)
        Map<String, TreeSet<String>> emailToEmailUnions = new HashMap<>();

        //  Iterate over the lists of accounts to update
        //      the emailsToNames and emailsToParentEmails maps
        for (List<String> a : accounts) {
            //  Also, iterate over all emails in each account
            //  Index starts from 1 to skip the name
            for (int email = 1; email < a.size(); email++) {
                //  Map all emails (keys) to the name (value)
                emailsToNames.put(a.get(email), a.get(0));
                //  Map each email as its own parent/root
                emailsToParentEmails.put(a.get(email), a.get(email));
            }
        }

        //  Iterate over the lists of accounts to agin update
        //      emailsToParentEmails map
        for (List<String> a : accounts) {
            //  Find the parent of the first email in the current list
            String parentEmail = find(a.get(1), emailsToParentEmails);
            //  Also, iterate over all emails in each account
            //  Index starts from 2 to skip the name
            //      and the first email in the given list
            for (int email = 2; email < a.size(); email++) {
                //  Set current parentEmail as the value
                //      (parent) of all remaining emails (keys)
                emailsToParentEmails.put(
                        //  Use the find method
                        //      to find the parents of all remaining emails
                        //      in the current list/account
                        find(a.get(email), emailsToParentEmails),
                        parentEmail);
            }
        }

        //  Iterate over the lists of accounts to perform
        //      unions between email lists using TreeSet
        //      (TreeSet to list emails in sorted order)
        for(List<String> a : accounts) {
            //  Find the parent of the first email in the current list
            String parentEmail = find(a.get(1), emailsToParentEmails);
            //  Check if the emailToEmailUnions map already has the
            //      parentEmail as a key, if not put it in the map
            //      along with a new empty TreeSet as the value
            if(!emailToEmailUnions.containsKey(parentEmail)) {
                emailToEmailUnions.put(parentEmail, new TreeSet<>());
            }
            //  Iterate over all emails in the current list/account
            for (int email = 1; email < a.size(); email++) {
                //  Get access to the newly created or already existing TreeSet
                //      passed on as a value corresponding to the parentEmail
                //      key in the emailToEmailUnions map,
                //      and add the current email to this TreeSet
                //      to build the mergedAccounts list only with emails
                emailToEmailUnions.get(parentEmail).add(a.get(email));
            }
        }

        //  Declare a list of lists to store all the merged accounts
        List<List<String>> mergedAccountsList = new ArrayList<>();

        //  Iterate over all keys from the emailToEmailUnions map
        for (String email: emailToEmailUnions.keySet()) {
            //  Declare a new list and initialize with the TreeSet
            //      obtained using emailToEmailUnions.get(email)
            List<String> mergedAccounts = new ArrayList<>(emailToEmailUnions.get(email));

            //  Add the name (from the emailsToNames map)
            //      corresponding to the current email
            //      as the first element of the merged accounts list
            mergedAccounts.add(0, emailsToNames.get(email));
            //  Add the current list of merged accounts
            //      to the output list of lists
            mergedAccountsList.add(mergedAccounts);
        }
        //  return the list of merged accounts
        return mergedAccountsList;
    }

     //  Implement the find method to find
     //     the parent email of a given email from a given list
    private static String find(String email, Map<String, String> map) {
        //  Using a ternary operation that checks the equality
        //      between the given emailsToParentEmails map
        //          and the given string
        //      return the given string if conditon true
        //      or make recursive calls to the same find method
        //          if conditon false
        return map.get(email) == email ? email : find(map.get(email), map);
    }
    /* *** *** *** *** *** Approach #1 Ends *** *** *** *** *** */

    public static void main(String[] args) {

        // Example 1:
        List<List<String>> accounts = List.of (
                List.of("John","johnsmith@mail.com","john_newyork@mail.com"),
                List.of("John","johnsmith@mail.com","john00@mail.com"),
                List.of("Mary","mary@mail.com"),
                List.of("John","johnnybravo@mail.com")
        );

        System.out.println(accountsMerge(accounts));
        //Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.
        //com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]

        System.out.println("-------------------");
        // Example 2:
        accounts = List.of (
                List.of("Gabe","Gabe0@m.co","Gabe3@m.co","Gabe1@m.co"),
                List.of("Kevin","Kevin3@m.co","Kevin5@m.co","Kevin0@m.co"),
                List.of("Ethan","Ethan5@m.co","Ethan4@m.co","Ethan0@m.co"),
                List.of("Hanzo","Hanzo3@m.co","Hanzo1@m.co","Hanzo0@m.co"),
                List.of("Fern","Fern5@m.co","Fern1@m.co","Fern0@m.co")
        );

        System.out.println(accountsMerge(accounts));
        //Output: [["Ethan","Ethan0@m.co","Ethan4@m.co","Ethan5@m.co"],["Gabe","Gabe0@m.
        //co","Gabe1@m.co","Gabe3@m.co"],["Hanzo","Hanzo0@m.co","Hanzo1@m.co","Hanzo3@m.
        //co"],["Kevin","Kevin0@m.co","Kevin3@m.co","Kevin5@m.co"],["Fern","Fern0@m.co",
        //"Fern1@m.co","Fern5@m.co"]]
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Alien Dictionary (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #269](https://leetcode.com/problems/alien-dictionary/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

public class Solution {
        private static Map<Character, List<Character>> reverseAdjListMap =
                new HashMap<>();

        private static Map<Character, Boolean> seenMap = new HashMap<>();

        private static StringBuilder result = new StringBuilder();

        static String alienOrder(String[] words) {

            //   Step 0: Put all unique letters into reverseAdjListMap as keys
            for (String word : words) {
                for (char c : word.toCharArray()) {
                    reverseAdjListMap.putIfAbsent(c, new ArrayList<>());
                }
            }

            //  Step 1: Find all edges and add reverse edges to reverseAdjListMap
            for (int i = 0; i < words.length - 1; i++) {

                String word1 = words[i];
                String word2 = words[i + 1];

                // Check that word2 is not a prefix of word1.
                if (word1.length() > word2.length() && word1.startsWith(word2)) {
                    return "";
                }

                //  Find the first non-match and insert the corresponding relation
                for (int j = 0; j < java.lang.Math.min(word1.length(), word2.length());
                     j++){
                    if (word1.charAt(j) != word2.charAt(j)) {
                        reverseAdjListMap.get(word2.charAt(j)).add(word1.charAt(j));
                        break;
                    }
                }
            }

            // Step 2: DFS to build up the result
            for (Character c : reverseAdjListMap.keySet()) {
                boolean flag = dfs(c);
                if (!flag) return "";
            }

            return result.toString();
        }

        //   Return true if and only if no cycles detected
        private static boolean dfs (Character c) {
            if (seenMap.containsKey(c)) {
                //  If this node was grey (false), a cycle was detected
                return seenMap.get(c);
            }
            seenMap.put(c, false);

            for (Character next : reverseAdjListMap.get(c)) {
                boolean flag = dfs(next);
                if (!flag) return false;
            }
            seenMap.put(c, true);

            result.append(c);
            return true;
        }

    public static void main(String[] args) {

        // Example 1:
        String[] words1 = {"wrt","wrf","er","ett","rftt"};
        //  O/P: "wertf"

        // Example 2:
        String[] words2 = {"z","x"};
        //  O/P: "zx"

        // Example 3:
        String[] words3 = {"z","x","z"};
        //  O/P: ""

        System.out.println(alienOrder(words1));
//        System.out.println(alienOrder(words2));
//        System.out.println(alienOrder(words3));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Clone Graph (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #133](https://leetcode.com/problems/clone-graph/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
// Needs to implement to toString method to see output
// cloneGraph method works

import java.util.*;

class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }

    public Node(ArrayList<Node> _neighbors) {
        neighbors = _neighbors;
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}

class Solution {
/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

//class Solution {
    public static Node cloneGraph(Node node) {
        if (node == null) {
            return node;
        }

        //  HashMap/HashTable to map given (graph) node to the
        //      cloned node as value
        //  To avoid cycles and keep track of visited node
        Map<Node, Node> visitedNodes = new HashMap<>();

        //  Create a queue to make use a FIFO data structure
        Queue<Node> bfsQueue = new LinkedList<>();

        //  Add the given node as the first element of
        //      the queue
        bfsQueue.offer(node);

        //  Add the given node as key, AND
        //      its clone as value
        visitedNodes.put(node, new Node(node.val, new ArrayList<>()));

        //  while loop for BFS
        while (!bfsQueue.isEmpty()) {

            //  Remove and save the current node from the front
            //      REMEMBER: First In First Out
            Node currentNode = bfsQueue.poll();

            //  Loop through all the neighbors
            //     of the current node
            for (Node currentNeighbor : currentNode.neighbors) {
                //  Check if the map of visited nodes is empty
                if (!visitedNodes.containsKey(currentNeighbor)) {
                    //  If map not empty, add the current neighbor
                    //      (and its clone) of the current node to the map
                    visitedNodes.put(currentNeighbor,
                            new Node(currentNeighbor.val, new ArrayList<>()));

                    //  And, add current neighbor the queue
                    bfsQueue.offer(currentNeighbor);
                }

                //  Update the cloned neighbors' list
                //      using the current node
                visitedNodes.get(currentNode).neighbors.add(
                        visitedNodes.get(currentNeighbor));
            }
        }

        //  Return the cloned node from the visitedNode map,
        //      which is the value associated with the given node
        //      put as key
        return visitedNodes.get(node);
    }

    public static void main(String[] args) {

        Node node1 = new Node(1, new ArrayList<>());
        Node node2 = new Node(2, new ArrayList<>());
        Node node3 = new Node(3, new ArrayList<>());
        Node node4 = new Node(4, new ArrayList<>());
        // Example 1:
        // Input: adjList = [[2,4],[1,3],[2,4],[1,3]];
        //  O/P: [[2,4],[1,3],[2,4],[1,3]]

        node1.neighbors.add(node2);
        node1.neighbors.add(node4);
        node2.neighbors.add(node1);
        node2.neighbors.add(node3);
        node3.neighbors.add(node2);
        node3.neighbors.add(node4);
        node4.neighbors.add(node1);
        node4.neighbors.add(node3);

        System.out.println(cloneGraph(node1).val);
        System.out.println(cloneGraph(node1).neighbors.get(0).val);
        System.out.println(cloneGraph(node1).neighbors.get(1).val);

        // Example 2:
        //Input: adjList = [[]]
        //  O/P: [[]]

        Node nodeb1 = new Node(new ArrayList<>());
        System.out.println(cloneGraph(nodeb1).val);

        // Example 3:
        //Input: adjList = []
        //  O/P: []

        Node nodec1 = new Node();
        System.out.println(cloneGraph(nodec1).val);

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Course Schedule (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #207](https://leetcode.com/problems/course-schedule/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.*;

public class Solution {
    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        List<Integer> sortedCourses = new ArrayList<>();
        if (numCourses <= 0) {
            return true;
        }

        //  Store nodes and (corresponing) counts of incoming edges
        Map<Integer, Integer> incomingDegree = new HashMap<>();

        //  Create Map to build an adjaceny list
        Map<Integer, List<Integer>> adjacencyListMap = new HashMap<>();

        for (int courseNode = 0; courseNode < numCourses; courseNode++) {
            incomingDegree.put(courseNode, 0);
            adjacencyListMap.put(courseNode, new ArrayList<>());
        }

        for (int courseNode = 0; courseNode < prerequisites.length;
             courseNode++) {
            int parentClass = prerequisites[courseNode][0];
            int childClass = prerequisites[courseNode][1];
            //  add childClass (prerequisite class) to the
            //      value given as a ArrayList corresponding
            //      to the parentClass marked as the key
            adjacencyListMap.get(parentClass).add(childClass);
            incomingDegree.put(childClass, incomingDegree.get(childClass) + 1);
        }

        //  Create a queue to add source nodes,
        //     meaning nodes with 0 child/incomingDegree
        Queue<Integer> nodeSources = new LinkedList<>();

        for (Map.Entry<Integer, Integer> eSet : incomingDegree.entrySet()) {
            if (eSet.getValue() == 0) {
               nodeSources.add(eSet.getKey());
            }
        }

        //  Add the source nodes to the sortedCourses ArrayList
        while (!nodeSources.isEmpty()) {
            int courseNode = nodeSources.poll();
            sortedCourses.add(courseNode);

            //  Decrease the courseNode's child/children's
            //      incomingDegree map

            //  Create the list of children nodes from the
            //      adjacencyListMap
            List<Integer> childrenNodes = adjacencyListMap.get(courseNode);
            for (int childNode : childrenNodes) {
                incomingDegree.put(childNode,
                        incomingDegree.get(childNode) - 1);
                if (incomingDegree.get(childNode) == 0){
                    nodeSources.add(childNode);
                }
            }
        }

        if (sortedCourses.size() == numCourses) {
            return true;
        } else {
             return false;
        }

    }

    public static void main(String[] args) {
        // Example 1:
        int numCourses1 = 2;
        int[][] prerequisites1 = {{1,0}};
        //  O/P: true

        // Example 2:
        int numCourses2 = 2;
        int[][] prerequisites2 = {{1,0},{0,1}};
        //  O/P: false

        // Example 3:
        int numCourses3 = 0;
        int[][] prerequisites3 = {{}};
        //  O/P: false

        System.out.println(canFinish(numCourses1, prerequisites1));
        System.out.println(canFinish(numCourses2, prerequisites2));
        System.out.println(canFinish(numCourses3, prerequisites3));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Flood Fill (Expand/Collapse) </summary>  
    
### [↗ See LeetCode Problem #733](https://leetcode.com/problems/flood-fill/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Arrays;

public class Solution {
    static int[][] floodFill(int[][] image, int sr, int sc, int color) {

        //  Optional, renaming the color to be used to replace
        //      the existing color of the starting cell
        int newColor = color;

        //  Naming color of the starting cell
        //  Since, color of the starting cell is to be replaced
        //      calling it oldColor
        int oldColor = image[sr][sc];

        if (oldColor != newColor) {
            floodFillDFSHelper(image, sr, sc, oldColor, newColor);
        }

        return image;
    }

    private static void floodFillDFSHelper(int[][] image,
                                           int sr, int sc,
                                           int oldColor,
                                           int newColor) {

        //  image.length: gives number of rows---row symbol: sr
        //  image[0].length: gives number of columns---column symbol: sc
        if (sr < 0 || sr >= image.length ||
                sc < 0 || sc >= image[0].length) {
            //  Since the conditions above do not represent
            //      a valid cell
            //  return statement is optional
            //      goes back to the caller method
            return;
        }

        //  Checks if the current cell has the same color
        //      as the original color of the starting cell
        if (image[sr][sc] != oldColor) {
            //  return statement is optional
            //      goes back to the caller method
            return;
        }

        image[sr][sc] = newColor;

        //  4-directional recursion calls
        //  Vertical or Horizontal
        //  NOT diagonal

        //  Vertical Move: Up
        floodFillDFSHelper(image, sr + 1, sc, oldColor, newColor);
         //  Vertical Move: Down
        floodFillDFSHelper(image, sr - 1, sc, oldColor, newColor);
        //  Horizontal Move: Right
        floodFillDFSHelper(image, sr, sc + 1, oldColor, newColor);
        //  Horizontal Move: Left
        floodFillDFSHelper(image, sr, sc - 1, oldColor, newColor);

    }

    public static void main(String[] args) {

        // Example 1:
        int[][] image1 = {{1,1,1},{1,1,0},{1,0,1}};
        int sr1 = 1;
        int sc1 = 1;
        int color1 = 2;
        //  O/P: [[2,2,2],[2,2,0],[2,0,1]]

        // Example 2:
        int[][] image2 = {{0,0,0},{0,0,0}};
        int sr2 = 0;
        int sc2 = 0;
        int color2 = 0;
        //  O/P: [[0,0,0],[0,0,0]]

        System.out.println(Arrays.deepToString(floodFill(image1, sr1, sc1, color1)));
        System.out.println(Arrays.deepToString(floodFill(image2, sr2, sc2, color2)));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Number of Islands (Expand/Collapse) </summary>  

### [↗ See LeetCode Problem #200](https://leetcode.com/problems/number-of-islands/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    private static void visitedIslandsBFS(char[][] grid, int r, int c) {
        Queue<int[]> visitedLands = new LinkedList<>();
        visitedLands.add(new int[] {r, c});

        while (!visitedLands.isEmpty()) {
            int row = visitedLands.peek()[0];
            int column = visitedLands.peek()[1];

            //  Queue is FIFO:
            //      first in first out
            visitedLands.remove();

            //  Check for valid cells
            if (row < 0 || row >= grid.length ||
                column < 0 || column >= grid[0].length) {
                continue;
            }
            //  Check for water
            if (grid[row][column] == '0') {
                continue;
            }

            //  Mark as visited Land: switching land to water
            grid[row][column] = '0';

            //  Add adjacent cells horizontally or vertically
            visitedLands.add(new int[] {row - 1, column }); //  move up 1 cell
            visitedLands.add(new int[] {row + 1, column });  //  move down 1 cell
            visitedLands.add(new int[] {row, column - 1});  //  move left 1 cell
            visitedLands.add(new int[] {row, column + 1});  //  move right 1 cell
        }
    }

    public static int numIslands(char[][] grid) {

        if (grid == null || grid.length == 0) {
            return 0;
        }

        int numberOfIslands = 0;

        //   rowLength = grid.length;
        for (int rowNum = 0; rowNum < grid.length; rowNum++) {
            //  columnLength = grid[0].length;
            for (int columnNum = 0; columnNum < grid[0].length; columnNum++) {
                if (grid[rowNum][columnNum] == '1') {
                    numberOfIslands++;
                    visitedIslandsBFS(grid, rowNum, columnNum);
                }
            }
        }
        return numberOfIslands;
    }

    public static void main(String[] args) {
        // Example 1:
        char[][] grid1 = {
                            {'1','1','1','1','0'},
                            {'1','1','0','1','0'},
                            {'1','1','0','0','0'},
                            {'0','0','0','0','0'}
                        };
        //  O/P: 1

        // Example 2:
        char[][] grid2 = {
                            {'1','1','0','0','0'},
                            {'1','1','0','0','0'},
                            {'0','0','1','0','0'},
                            {'0','0','0','1','1'}
                        };
        //  O/P: 3

        System.out.println(numIslands(grid1));
        System.out.println(numIslands(grid2));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Rotting Oranges (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #994](https://leetcode.com/problems/rotting-oranges/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.LinkedList;
import java.util.Queue;

public class Solution {
    public static int orangesRotting(int[][] grid) {
        //  If grid is null or empty return 0
        //      since there are no fresh orange
        //      and no time is elapsed
        if (grid == null || grid.length == 0) {
            return 0;
        }

        //  row indexed from top to bottom
        int bottomBoundary = grid.length;

        //  column indexed from left to right
        int rightBoundary = grid[0].length;

        //  Declare a queue to store the (row, column)
        //      coordinates of all the rotten oranges
        Queue<int[]> bfsQueue = new LinkedList<>();

        //  Declare and initialize a variable
        //      to count all the fresh oranges
        int freshCount = 0;

        //  Iterate over all the grid points/cells
        //      to find and store the rotten oranges
        //      in a queue
        for (int i = 0; i < bottomBoundary; i++) {
            for (int j = 0; j < rightBoundary; j++) {
                if (grid[i][j] == 2) {
                    bfsQueue.offer(new int[] {i, j});
                } else if (grid[i][j] == 1) {
                    //  If fresh increae the count of
                    //      fresh oranges by 1
                    freshCount++;
                }
            }
        }

        //  If there are no fresh oranges even
        //      at the beginning, return 0
        if (freshCount == 0) {
            return 0;
        }

        //  Declare and initialize a variable
        //      to count elapsed time
        int timeCount = 0;

        //  Declare and define a 2D array to
        //      mark boundary of each BFS step
        //
        //      {-1, 0} : out of bound (row) cell/point
        //      {0, 1}  : right cell/point
        //      {1, 0}  : lower cell/point
        //      {0, -1} : out of bound (column) cell/point
        int[][] directions = {{-1, 0}, {0, 1}, {1, 0}, {0, -1}};

        //  Iterate over all entries in the bfsQueue
        //      to check the number of fresh oranges
        //      and elapsed time until the bfsQueue is empty
        while (!bfsQueue.isEmpty()) {
            //  Increase the timeCound by 1
            timeCount++;

            //  Store the size of bfsQueue
            //      efficient time management
            //      and keeping the current size unchanged
            int queueSize = bfsQueue.size();

            //  Iterate over all bfsQueue entries
            //      one step at a time
            for (int i = 0; i < queueSize; i++) {
                //  Remove and store the current cell/point
                int[] currentCell = bfsQueue.poll();

                //  Update the current cell consider
                //      for possible directions
                for (int[] direction : directions ) {
                    int newRow = currentCell[0] + direction[0];
                    int newColumn = currentCell[1] + direction[1];

                    //  Ignore/continue if
                    //      newRow/newColumn is out of bound
                    //      or, cell is empty
                    //      or, orange at the new cell is already rotten
                    if (newRow < 0 || newColumn < 0     ||
                        newRow >= bottomBoundary        ||
                        newColumn >= rightBoundary      ||
                        grid[newRow][newColumn] == 0    ||
                        grid[newRow][newColumn] == 2) {
                        continue;
                    }

                    //  Mark the new cell as rotten
                    grid[newRow][newColumn] = 2;

                    //  Add the new cell in the queue
                    bfsQueue.offer(new int[] {newRow, newColumn});

                    //  Decrease the count of fresh oranges
                    freshCount--;
                }
            }
        }
        //  Using a ternary operator return
        //      -1 if there are still fresh oranges remaining
        //      or, elapsed time if there are no rotten oranges
        //      remaining (in latter case decrease timeCount by 1
        //      since, timeCount is increased at the very beginning
        //      of the iteration (at timestep 0)
        return freshCount == 0 ? timeCount - 1 : -1;
    }

    public static void main(String[] args) {
        // Example 1:
        int[][] grid1 = {{2,1,1},{1,1,0},{0,1,1}};
        //  O/P: 4

        // Example 2:
        int[][] grid2 = {{2,1,1},{0,1,1},{1,0,1}};
        //  O/P: -1

        // Example 3:
        int[][] grid3 = {{0,2}};
        //  O/P: 0

        System.out.println(orangesRotting(grid1));
        System.out.println(orangesRotting(grid2));
        System.out.println(orangesRotting(grid3));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Word Ladder (Expand/Collapse) </summary> 

### [↗ Word Ladder](./e-hash-set.md)

</details>

<details> 
<summary> 01 Matrix (Expand/Collapse) </summary> 

### [↗ See LeetCode Problem #542](https://leetcode.com/problems/01-matrix/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Arrays;

public class Solution {
    public static int[][] updateMatrix(int[][] mat) {

        if (mat.length == 0 || mat[0].length == 0) {
            return mat;
        }

        int[][] distMatrix = new int[mat.length][mat[0].length];

        //  Set Integer.MAX_VALUE / 2 as cell values
        //      Divided by 2 to avoid Integer Overflow
        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat[0].length; j++) {
                distMatrix[i][j] = Integer.MAX_VALUE / 2;
            }
        }

        //  Left & Top/Up
        //  From top to bottom and left to right
        //  To check left and top directions
        for (int i = 0; i < mat.length; i++) {
            for (int j = 0; j < mat[0].length; j++) {
                if (mat[i][j] == 0) {
                    distMatrix[i][j] = 0;
                } else {
                    if (i > 0) {
                        distMatrix[i][j] = Math.min(
                                distMatrix[i][j],
                                distMatrix[i - 1][j]) + 1;
                    }

                    if (j > 0) {
                        distMatrix[i][j] = Math.min(
                                distMatrix[i][j],
                                distMatrix[i][j - 1]) + 1;
                    }
                }
            }
        }

        //  Down/Bottom & Right
        //  From Bottom to top and right to left
        //  To check right and bottom directions
        for (int i = mat.length - 1; i >=0 ; i--) {
            for (int j = mat[0].length - 1; j >=0 ; j--) {
                if (i < mat.length - 1) {
                    distMatrix[i][j] = Math.min (
                            distMatrix[i][j],
                            distMatrix[i + 1][j]) + 1;
                }

                if (j < mat[0].length - 1) {
                    distMatrix[i][j] = Math.min (
                            distMatrix[i][j],
                            distMatrix[i][j + 1]) + 1;
                }
            }
        }

        return distMatrix;
    }

    public static void main(String[] args) {
        // Example 1:
        int[][] mat1 = {{0,0,0},{0,1,0},{0,0,0}};
        //Output: [[0,0,0],[0,1,0],[0,0,0]]

        // Example 2:
        int[][] mat2 = {{0,0,0},{0,1,0},{1,1,1}};
        //Output: [[0,0,0],[0,1,0],[1,2,1]]

        // Example 3A:
        int[][] mat3a = {{0},{0},{0}};
        //Output: [[0],[0],[0]]

        // Example 3B:
        int[][] mat3b = {{0},{1},{0}};
        //Output: [[0],[1],[0]]

        // Example 4:
        int[][] mat4 = {{0,0,0}};
        //Output: [[0],[0],[0]]

        // Example 5:
        int[][] mat5 = {{0}};
        //Output: [[0]]

        // Example 6:
        int[][] mat6 = {{}};
        //Output: [[]]

        // Example 6:
        int[][] mat7 = {{1,1,0,0,1,0,0,1,1,0},
                        {1,0,0,1,0,1,1,1,1,1},
                        {1,1,1,0,0,1,1,1,1,0},
                        {0,1,1,1,0,1,1,1,1,1},
                        {0,0,1,1,1,1,1,1,1,0},
                        {1,1,1,1,1,1,0,1,1,1},
                        {0,1,1,1,1,1,1,0,0,1},
                        {1,1,1,1,1,0,0,1,1,1},
                        {0,1,0,1,1,0,1,1,1,1},
                        {1,1,1,0,1,0,1,1,1,1}};

        //  Time Complexity: O(r*c)
        //  Space Complexity: O(1)

        System.out.println(Arrays.deepToString(updateMatrix(mat1)));
        System.out.println(Arrays.deepToString(updateMatrix(mat2)));
        System.out.println(Arrays.deepToString(updateMatrix(mat3a)));
        System.out.println(Arrays.deepToString(updateMatrix(mat3b)));
        System.out.println(Arrays.deepToString(updateMatrix(mat4)));
        System.out.println(Arrays.deepToString(updateMatrix(mat5)));
        System.out.println(Arrays.deepToString(updateMatrix(mat6)));
        System.out.println(Arrays.deepToString(updateMatrix(mat7)));

    }
}
```

</TabItem>
</Tabs>

</details>