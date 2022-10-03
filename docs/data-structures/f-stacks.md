---
sidebar_position: 6
id: f-stacks
title: Stacks 
tags: [
    stacks,
    backspace-string-compare,
    basic-calculator, 
    evaluate-reverse-polish-notation,
    implement-queue-using-stacks, 
    largest-rectangle-in-histogram,
    min-stack,
    trapping-rain-water,
    valid-parentheses,
]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Stacks 

- Understanding stacks 
- Solved problems are presented in alphabetical order

## Problems related to stacks 

<details> 
<summary> Backspace String Compare </summary> 

### [↗ See LeetCode Problem #844](https://leetcode.com/problems/backspace-string-compare/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Deque;
import java.util.ArrayDeque;

public class Solution {
    static boolean backspaceCompare(String s, String t) {
        return build(s).equals(build(t));
    }

    static String build(String S) {

        //  Create a stack using ArrayDeque
        //  Code to interface (use Deque interface)
        //      and ArrayDeque class
        Deque<Character> resultStack = new ArrayDeque<>();

        for (char c : S.toCharArray()) {
           if (c != '#')
               resultStack.push(c);
           else if (!resultStack.isEmpty())
               resultStack.pop();
        }

        return String.valueOf(resultStack);
    }

    public static void main(String[] args) {
        // Example 1:
        String s1 = "ab#c";
        String t1 = "ad#c";
        //  O/P: true

        // Example 2:
        String s2 = "ab##";
        String t2 = "c#d#";
        //  O/P: true

        // Example 3:
        String s3 = "a#c";
        String t3 = "b";
        //  O/P: false

        System.out.println(backspaceCompare(s1,t1));
        System.out.println(backspaceCompare(s2,t2));
        System.out.println(backspaceCompare(s3,t3));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Basic Calculator </summary> 

### [↗ See LeetCode Problem #224](https://leetcode.com/problems/basic-calculator/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Deque;
import java.util.ArrayDeque;

public class Solution {
    public static int calculate(String s) {
        //  Initialize the current operand
        int currentOperand = 0;

        //  Initialize the current sign:
        //      1 for positive and -1 for negative
        int currentSign = 1;

        //  Initialize the result
        //      to updated as required
        //      before returning it at the end
        int result = 0;

        //  Declare a stack
        //      to store result and sign every time
        //      an open parenthesis is encountered
        //  Push result before pushing sign
        //      (done in separate statements)
        Deque<Integer> myStack = new ArrayDeque<>();

        //  Iterate over the entire length of the given string
        for (int i = 0; i < s.length(); i++) {
            //  Define a variable c to contain
            //      the current character
            char c = s.charAt(i);

            if (Character.isDigit(c)) {
                //  Update the current operand
                //  Always subtract character '0' since
                //      ASCII value of '0' is 48 and
                //      digit characters following '0'
                //      has correspoinding integer values added to 48
                currentOperand = currentOperand * 10 + (int) (c - '0');
            } else if (c == '+') {

                // Update the result by evaluating the
                //  current expression at the left
                result += currentSign * currentOperand;

                //  Reset the current sign to 1
                currentSign = 1;

                //  Reset the current operand to 0
                currentOperand = 0;

            } else if (c == '-') {
                result += currentSign * currentOperand;

                //  Update the current sign to -1
                currentSign = -1;

                //  Reset the current operand to 0
                currentOperand = 0;

            } else if (c == '(') {

                //  Needs to access currentSign first
                //      to deal with the final output
                //      following the evaluation of
                //      the expression inside the parentheses
                //  So, push result first to stack
                //      then, push the current sign to the same stack
                myStack.push(result);
                myStack.push(currentSign);

                 //  Reset the current sign to 1
                currentSign = 1;
                //  Reset the current result to 0
                result = 0;
            } else if (c == ')') {

                result +=  currentSign * currentOperand;

                //  Pop the sign from the top of the stack
                //      saved when its corresponding '('
                //      was encountered
                //  And, multiply the popped sign with the current result
                result *= myStack.pop();

                //  Pop the saved result from the top of the stack
                //  And, add the popped result with the current result
                result += myStack.pop();

                //  Reset the current operand to 0
                currentOperand = 0;
            }

        }

        return result + (currentSign * currentOperand);
    }

    public static void main(String[] args) {
        // Example 1:
        String s1 = "1 + 1";
        //  O/P: 2

        // Example 2:
        String s2 = " 2-1 + 2 ";
        //  O/P: 3

        // Example 3:
        String s3 = "(1+(4+5+2)-3)+(6+8)";
        //  O/P: 23

        System.out.println(calculate(s1));
        System.out.println(calculate(s2));
        System.out.println(calculate(s3));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Evaluate Reverse Polish Notation </summary> 

### [↗ See LeetCode Problem #150](https://leetcode.com/problems/evaluate-reverse-polish-notation/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.Deque;
import java.util.ArrayDeque;

public class Solution {
    public static int evalRPN(String[] tokens) {

        Deque<Integer> myStack = new ArrayDeque<>();

        for (String token : tokens) {

            if (!"[+-*/]".contains(token)) {
                myStack.push(Integer.valueOf(token));
                continue;
            }

            //  2nd number is popped first
            //      because stack
            int numberTwo = myStack.pop();
            int numberOne = myStack.pop();

            int output = 0;

            switch (token) {
                case "+":
                    output = numberOne + numberTwo;
                    break;

                case "-":
                    output = numberOne - numberTwo;
                    break;

                case "*":
                    output = numberOne * numberTwo;
                    break;

                case "/":
                    output = numberOne / numberTwo;
                    break;
            }

            myStack.push(output);
        }

        return myStack.pop();

    }

    public static void main (String[] args) {

        // Example 1:
        String[] tokens1 = {"2","1","+","3","*"};
        //  O/P: 9

        // Example 2:
        String[] tokens2 = {"4","13","5","/","+"};
        //  O/P: 6

        // Example 3:
        String[] tokens3 = {"10","6","9","3","+","-11","*","/","*","17","+","5","+"};
        //  O/P: 22

        System.out.println(evalRPN(tokens1));
        System.out.println(evalRPN(tokens2));
        System.out.println(evalRPN(tokens3));

    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Implement Queue Using Stacks </summary> 

### [↗ See LeetCode Problem #232](https://leetcode.com/problems/implement-queue-using-stacks/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
//import java.util.ArrayDeque;
//import java.util.Deque;
import java.util.Stack;

class MyQueue {

//    private Deque<Integer> stack1 = new ArrayDeque<>();
//    private Deque<Integer> stack2 = new ArrayDeque<>();
    private Stack<Integer> stack1 = new Stack<>();
    private Stack<Integer> stack2 = new Stack<>();
    private int topElement;
    public MyQueue() {

    }

    public void push(int x) {
        if (stack1.isEmpty()) {
            topElement = x;
        }
        stack1.push(x);
    }

    public int pop() {
        if (stack2.isEmpty()) {
            while (!stack1.isEmpty()) {
                stack2.push(stack1.pop());
            }
        }
        return stack2.pop();
    }

    public int peek() {
        if(!stack2.isEmpty()) {
            return stack2.peek();
        }
        return topElement;
    }

    public boolean empty() {
        return stack1.isEmpty() && stack2.isEmpty();
    }
}

public class Solution {
    public static void main(String[] args) {

        // Example 1:
        //Input
        //["MyQueue", "push", "push", "peek", "pop", "empty"]
        //[[], [1], [2], [], [], []]
        //  O/P: //[null, null, null, 1, 1, false]

        MyQueue myQueue = new MyQueue();
        myQueue.push(1);
        myQueue.push(2);
        System.out.println(myQueue.peek());
        System.out.println(myQueue.pop());
        System.out.println(myQueue.empty());
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Largest Rectangle in Histogram </summary> 

### [↗ See LeetCode Problem #84](https://leetcode.com/problems/largest-rectangle-in-histogram/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.ArrayDeque;
import java.util.Deque;

public class Solution {
    public static int largestRectangleArea(int[] heights) {
        //  Initialize largest area with 0
        int largestArea = 0;

        //  Creat a stack
        Deque<Integer> myStack = new ArrayDeque<>();
        //  Push -1 to the stack to help with out of bounds
        //      calculations
        myStack.push(-1);

        //  Iterate over all elements in the given heights array
        for (int i = 0; i < heights.length; i++) {
            //  Calculate and update largestArea if
            //      element on top of the stack
            //      is bigger than the current element
            while (myStack.peek() != -1 &&
                   heights[i] <= heights[myStack.peek()]) {
                //  current height/element
                int currentMaxHeight = heights[myStack.pop()];
                //  myStack.peek()—after myStack.pop() in line above—
                //      is left boundary
                //      and i is right boundary
                //      subtract -1 because 0-indexed
                int currentWidth = i - myStack.peek() - 1;

                largestArea = Math.max(largestArea,
                        currentMaxHeight * currentWidth);
            }

            myStack.push(i);
        }

        //  For the last element in the given heights array
        while (myStack.peek() != -1) {
            //  last height/element
            int currentMaxHeight = heights[myStack.pop()];
            //  myStack.peek()—after myStack.pop() in line above—
            //      is left boundary
            //      and heights.length is right boundary
            //      subtract -1 because 0-indexed
            int currentWidth = heights.length - myStack.peek() - 1;

            largestArea = Math.max(largestArea,
                    currentMaxHeight * currentWidth);

        }

        return largestArea;
    }

    public static void main(String[] args) {
        // Example 1:
        int[] heights1 = {2,1,5,6,2,3};
        //  O/P: 10

        // Example 2:
        int[] heights2 = {2,4};
        //  O/P: 4

        System.out.println(largestRectangleArea(heights1));
        System.out.println(largestRectangleArea(heights2));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Min Stack </summary> 

### [↗ See LeetCode Problem #155](https://leetcode.com/problems/min-stack/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Arrays;

public class Solution {
    private static Deque<Integer> myStack = new ArrayDeque<>();
    private static Deque<int[]> minimumStack = new ArrayDeque<>();

    public Solution() {

    }

    public static void push(int val) {
        myStack.push(val);

        if (minimumStack.isEmpty() ||
            val < minimumStack.peek()[0]) {
            minimumStack.push(new int[] {val, 1});
        } else if (val == minimumStack.peek()[0]) {
            minimumStack.peek()[1]++;
        }
    }

    public static void pop() {

        if (myStack.peek().equals(minimumStack.peek()[0])) {
            minimumStack.peek()[1]--;
        }

        if (minimumStack.peek()[1] == 0) {
            minimumStack.pop();
        }

        myStack.pop();
    }

    public static int top() {
        return myStack.peek();
    }

    public static int getMin() {
        return minimumStack.peek()[0];
    }

    public static void main(String[] args) {
        // Example 1:
        //Input
        //["MinStack","push","push","push","getMin","pop","top","getMin"]
        //[[],[-2],[0],[-3],[],[],[],[]]
        //Output
        //[null,null,null,null,-3,null,0,-2]

    //Explanation
    //MinStack minStack = new MinStack();
    //minStack.push(-2);
    //minStack.push(0);
    //minStack.push(-3);
    //minStack.getMin(); // return -3
    //minStack.pop();
    //minStack.top();    // return 0
    //minStack.getMin(); // return -2

       Solution minStack = new Solution();
       System.out.println(Arrays.toString(minStack.myStack.toArray()));

       minStack.push(-2);
       System.out.println(Arrays.toString(minStack.myStack.toArray()));

       minStack.push(0);
       System.out.println(Arrays.toString(minStack.myStack.toArray()));

       minStack.push(-3);
       System.out.println(Arrays.toString(minStack.myStack.toArray()));

       minStack.getMin();
       System.out.println(minStack.getMin());

       minStack.pop();

       minStack.top();
       System.out.println(minStack.top());

       minStack.getMin();
       System.out.println(minStack.getMin());

    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Trapping Rain Water </summary> 

### [↗ See LeetCode Problem #42](https://leetcode.com/problems/trapping-rain-water/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
public class Solution {
    public static int trap(int[] height) {
        int leftIndex = 0;
        int leftMax = 0;
        int rightIndex = height.length - 1;
        int rightMax = 0;
        int result = 0;

        //  Continue while left index stays smaller than
        //      the right index as the given height array is being traversed
        while (leftIndex < rightIndex) {
            //  Check if the height at the left index is greater than
            //      the height at right index
            if (height[leftIndex] < height[rightIndex]) {

                //  For true if condition, check if height at the left index
                //      is greater than or equal to leftMax height
                if (height[leftIndex] >= leftMax) {
                    // For true if condition, update leftMax
                    leftMax = height[leftIndex];
                } else {
                    result += leftMax - height[leftIndex];
                }
                //  Increase left index by 1
                leftIndex++;

            //  For false if condition, check if height at the right index
            //      is greater than or equal to rightMax height
            } else {
                 if (height[rightIndex] >= rightMax) {
                    // For true if condition, update rightMax
                    rightMax = height[rightIndex];
                 } else {
                    result += rightMax - height[rightIndex];
                 }
                 //  Decrease right index by 1
                 rightIndex--;
            }
        }

        return result;
    }

    public static void main(String[] args) {
        // Example 1:
        int[] height1 = {0,1,0,2,1,0,1,3,2,1,2,1};
        //Output: 6

        // Example 2:
        int[] height2 = {4,2,0,3,2,5};
        //  O/P: 9

        System.out.println(trap(height1));
        System.out.println(trap(height2));
    }
}
```

</TabItem>
</Tabs>

</details>

<details> 
<summary> Valid Parentheses </summary> 

### [↗ See LeetCode Problem #20](https://leetcode.com/problems/valid-parentheses/)

<Tabs>
<TabItem value="java" label="Java">

```java showLineNumbers
import java.util.HashMap;
import java.util.Stack;

class Solution {

     static boolean isValid(String s) {

         HashMap<Character, Character> mappings = new HashMap<>();
             mappings.put(')', '(');
             mappings.put(']', '[');
             mappings.put('}', '{');

        Stack<Character> myStack = new Stack<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (mappings.containsKey(c)) {
                char topElement = myStack.isEmpty() ? '#' : myStack.pop();

                if (topElement != mappings.get(c)) {
                    return false;
                }

            } else {
                myStack.push(c);
            }
        }
        return myStack.isEmpty();
    }

    public static void main(String[] args) {

        //Output: true
        String s1 = "()";

        //Output: true
        String s2 = "()[]{}";

        //Output: false
        String s3 = "(]";

        isValid(s1);
        System.out.println(isValid(s1));

    }
}
```

</TabItem>
</Tabs>

</details>