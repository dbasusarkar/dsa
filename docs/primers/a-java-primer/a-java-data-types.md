---
sidebar_position: 2 
id: a-java-data-types
title: Java Data Types 
tags: [
    java, 
    data-types,
    primer,
]
---

| Data Type   | Size      | p/r           | Value                                                       |
|-------------|-----------|---------------|-------------------------------------------------------------|
| **boolean** | $1$ bit   | p (Primitive) | True or False                                               |
| byte        | $1$ byte  | p             | $-128$ to $127$                                             |
| short       | $2$ bytes | p             | $-32,768$ to $32,768$                                       |
| **int**     | $4$ bytes | p             | $-2$ billion to $2$ billion                                 |
| long        | $8$ bytes | p             | $-9$ quintillion to $9$ quintillion                         |
| float       | $4$ bytes | p             | Fractional number up to $6-7$ digits [ $2.718281f$ ]        |
| **double**  | $8$ bytes | p             | Fractional number up to $15$ digits [ $2.71828182845904$ ]  |
| **char**    | $2$ bytes | p             | Single character/letter/ASCII value [ 'a' ]                 |
| **string**  | varies    | r (Reference) | A sequence of characters ["Carpe diem"]                     |    

### Primitive vs. Reference Data Types

| **Primitive**      | **Reference**              |
|--------------------|----------------------------|
| Eight (8) types    | Unlimited and user defined |
| Stores data        | Stores and address         |
| Holds only 1 value | Holds more than one value  |
| Needs less memory  | Needs more memory          |
| Faster             | Slower                     |

<!-- ARCHIVED -->
<!-- Simply add Markdown files (or folders) to the `blog` directory. -->

<!-- Regular blog authors can be added to `authors.yml`. -->

<!-- The blog post date can be extracted from filenames, such as: -->

<!-- - `2019-05-30-welcome.md` -->
<!-- - `2019-05-30-welcome/index.md` -->

<!-- A blog post folder can be convenient to co-locate blog post images: -->

<!-- ![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg) -->

<!-- The blog supports tags as well! -->

<!-- **And if you don't want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config. -->