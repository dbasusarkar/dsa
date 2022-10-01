/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [
  //   {
  //     type: 'autogenerated', 
  //     dirName: '.'
  //   }
  // ],
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
  */
  docs: [
    {
      type: 'category',
      label: 'Big O Notation',
      link: {
        type: 'generated-index',
      },
      // collapsed: true,
      items: [
        'big-o/a-big-o-intro',
        'big-o/b-big-o-ds',
        'big-o/c-big-o-algo',
      ],
    },
    {
      type: 'category',
      label: 'Data Structures',
      link: {
        type: 'generated-index',
      },
      // collapsed: true,
      items: [
        'data-structures/a-arrays',
        'data-structures/b-strings',  
        'data-structures/c-linked-lists',
        'data-structures/d-hash-table',
        'data-structures/e-hash-set',
        'data-structures/f-stacks',
        'data-structures/g-queues',
        'data-structures/h-heaps',
        'data-structures/i-binary-trees',
        'data-structures/j-graphs',
        'data-structures/k-tries',
      ],
    },
    {
      type: 'category',
      label: 'Algorithms',
      link: {
        type: 'generated-index',
      },
      // collapsed: true,
      items: [
        'algorithms/a-binary-search',
        'algorithms/b-cyclic-sort',
        'algorithms/c-recursion',
      ],
    },
    {
      type: 'category',
      label: 'Patterns',
      link: {
        type: 'generated-index',
      },
      // collapsed: true,
      items: [
        'patterns/a-sliding-window',
        'patterns/b-two-pointers',
        'patterns/c-fast-and-slow-pointers',
        'patterns/d-intervals',
        'patterns/e-linked-list-reversal',
        'patterns/f-subsets',
        'patterns/g-topological-sorting',
        'patterns/h-bit-manipulation',
        'patterns/i-dp',
        'patterns/j-matrices',
        'patterns/k-math',
        'patterns/l-geometry',
      ],
    },
    'solved-problems',
  ],
  // api: [
  //   '<path-if-not-curren-dir/doc-name>',
  //   '<path-if-not-curren-dir/doc-name>',
  //   '<path-if-not-curren-dir/doc-name>',
  //   {
  //     type: 'autogenerated',
  //     dirName: 'api',
  //   },
  // ],
};    
module.exports = sidebars;
    