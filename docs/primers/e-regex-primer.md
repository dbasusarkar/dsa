---
sidebar_position: 5 
id: regex-primer
# title: A Primer on Regular Expressions 
title: A Primer on Regex 
tags: [
    regular-expressions,
    regex,
    primer,
]
---

:::info

This page is part of a _**primer series**_ that also includes Java, Python, JavaScript (JS), and TypeScript. It is subject to continuous improvement.

:::

## Character Classes

|   Pattern             |   Description (matches...)                                                            |
|-----------------------|---------------------------------------------------------------------------------------|
|   \[abcde\]           |   any of a, b, c, d, and e                                                    |
|   \[^abcde\]          |   all but any of a, b, c, d, and e (^ means negation)                         |
|   \[a-e\]             |   any character in the reange, a-e                                            |
|   \[a-e\[w-z\]\]      |   any character in the range, a-e or w-z (union)                              |
|   \[a-e&&\[c-e\]\]    |   only common characters in both ranges: c-e (intersection)                   |
|   \[a-e&&\[^c-e\]\]   |   any character in the range a-e, but not in the range c-e: a-b (subtraction) |
|   .                   |   any character                                                               | 
|   \d                  |   any digit; equivalent to \[0-9\]                                            |
|   \D                  |   any character that is not a digit: equivalent to \[^0-9\]                   |
|   \s                  |   a space character                                                           |
|   \S                  |   any character that is not a space character: equivalent to \[^\s\]          |
|   \w                  |   a word character (alphanumeric/underscore): equivalent to \[a-zA-Z0-9_\]    |
|   \W                  |   any character that is not a word character: equivalent to \[^\w\]           |

## Boundary Patterns 

|   Pattern             |   Description (matches...)                                                            |
|-----------------------|---------------------------------------------------------------------------------------|
|   ^                   |   the beginning of a line                                                             |
|   $                   |   the end of a line                                                                   |
|   \A                  |   the beginning of the input                                                          |
|   \b                  |   the word boundary line                                                              |
|   \B                  |   the non-word boundary                                                               |
|   \G                  |   the end of the previous match                                                       |
|   \z                  |   the end of the input                                                                |
|   \Z                  |   the end of the input (if present, for the final terminator)                         |

## Quantifiers 

- Curly braces, {}, or symbols like *, ?, + are used to quantify the number of occurrences of a pattern.
- Options include: {specific number}, {minimum number, maximum number}, and {minimum number,}
- **\***    : {0,} (used to search for patterns that may occur any number of times, or may not be present)
- **?**     : {0,1} (used to search for patterns that may or may not be present)
- **\+**    : {1,} (used to search for patterns that may occur at least once or more times)
- Useful external link 1: [Quantifiers](https://docs.oracle.com/javase/tutorial/essential/regex/quant.html)
- Useful external link 2: [Symbols](https://devblogs.microsoft.com/scripting/regular-expressions-regex-basic-symbols/)
- Useful external link 3: [More symbols](https://www.codexpedia.com/regex/regex-symbol-list-and-regex-examples/)

## Logical Operators
|   Pattern             |   Description (matches...)                                                            |
|-----------------------|---------------------------------------------------------------------------------------|
|   x\|y                |   x or y                                                                              |
|   xy                  |   First x, then y                                                                     |

## Groups 

- Defined using (pattern)

|   Pattern             |   Description (matches...)                                                            |
|-----------------------|---------------------------------------------------------------------------------------|
|   (\w\d\w)            |   a group having a digit character in the middle of two word characters               |

## Backreferences  

- Added by putting \n at the end of a pattern where n is the group number

|   Pattern             |   Description (matches...)                                                            |
|-----------------------|---------------------------------------------------------------------------------------|
|   (\w\d\w)/\1         |   a group—having a digit character in the middle of 2 word characters—repeated twice  |