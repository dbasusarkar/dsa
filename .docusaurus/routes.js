import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/dsa/blog',
    component: ComponentCreator('/dsa/blog', '7ea'),
    exact: true
  },
  {
    path: '/dsa/blog/archive',
    component: ComponentCreator('/dsa/blog/archive', '251'),
    exact: true
  },
  {
    path: '/dsa/blog/some-features',
    component: ComponentCreator('/dsa/blog/some-features', 'bf3'),
    exact: true
  },
  {
    path: '/dsa/blog/tags',
    component: ComponentCreator('/dsa/blog/tags', '1ca'),
    exact: true
  },
  {
    path: '/dsa/blog/tags/dsa',
    component: ComponentCreator('/dsa/blog/tags/dsa', 'aed'),
    exact: true
  },
  {
    path: '/dsa/blog/tags/features',
    component: ComponentCreator('/dsa/blog/tags/features', 'efe'),
    exact: true
  },
  {
    path: '/dsa/blog/tags/news',
    component: ComponentCreator('/dsa/blog/tags/news', 'd15'),
    exact: true
  },
  {
    path: '/dsa/blog/welcome',
    component: ComponentCreator('/dsa/blog/welcome', '47d'),
    exact: true
  },
  {
    path: '/dsa/docs/tags',
    component: ComponentCreator('/dsa/docs/tags', '7d3'),
    exact: true
  },
  {
    path: '/dsa/docs/tags/two-sum',
    component: ComponentCreator('/dsa/docs/tags/two-sum', 'afd'),
    exact: true
  },
  {
    path: '/dsa/markdown-page',
    component: ComponentCreator('/dsa/markdown-page', 'c92'),
    exact: true
  },
  {
    path: '/dsa/docs',
    component: ComponentCreator('/dsa/docs', '4ed'),
    routes: [
      {
        path: '/dsa/docs/algorithms/binary-search',
        component: ComponentCreator('/dsa/docs/algorithms/binary-search', '3de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/algorithms/recursion',
        component: ComponentCreator('/dsa/docs/algorithms/recursion', '690'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/big-o/big-o-algo',
        component: ComponentCreator('/dsa/docs/big-o/big-o-algo', '247'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/big-o/big-o-ds',
        component: ComponentCreator('/dsa/docs/big-o/big-o-ds', '4ab'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/big-o/big-o-intro',
        component: ComponentCreator('/dsa/docs/big-o/big-o-intro', '654'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/category/algorithms',
        component: ComponentCreator('/dsa/docs/category/algorithms', 'a0b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/category/big-o-notation',
        component: ComponentCreator('/dsa/docs/category/big-o-notation', 'bc4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/category/data-structures',
        component: ComponentCreator('/dsa/docs/category/data-structures', '4bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/category/patterns',
        component: ComponentCreator('/dsa/docs/category/patterns', '5b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/category/solved-problems',
        component: ComponentCreator('/dsa/docs/category/solved-problems', 'ece'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/data-structures/a-arrays',
        component: ComponentCreator('/dsa/docs/data-structures/a-arrays', '47c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/data-structures/b-strings',
        component: ComponentCreator('/dsa/docs/data-structures/b-strings', 'cb2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/data-structures/c-linked-lists',
        component: ComponentCreator('/dsa/docs/data-structures/c-linked-lists', '72f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/data-structures/d-hash-table',
        component: ComponentCreator('/dsa/docs/data-structures/d-hash-table', '2b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/data-structures/e-hash-set',
        component: ComponentCreator('/dsa/docs/data-structures/e-hash-set', '9d5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/data-structures/f-stacks',
        component: ComponentCreator('/dsa/docs/data-structures/f-stacks', '01a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/data-structures/g-queues',
        component: ComponentCreator('/dsa/docs/data-structures/g-queues', 'fbe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/data-structures/h-heaps',
        component: ComponentCreator('/dsa/docs/data-structures/h-heaps', '8b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/data-structures/i-binary-trees',
        component: ComponentCreator('/dsa/docs/data-structures/i-binary-trees', '32b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/data-structures/j-graphs',
        component: ComponentCreator('/dsa/docs/data-structures/j-graphs', '9c2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/data-structures/k-tries',
        component: ComponentCreator('/dsa/docs/data-structures/k-tries', '8bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/patterns/a-sliding-window',
        component: ComponentCreator('/dsa/docs/patterns/a-sliding-window', '130'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/patterns/c-two-pointers',
        component: ComponentCreator('/dsa/docs/patterns/c-two-pointers', 'e52'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/patterns/d-cyclic-sort',
        component: ComponentCreator('/dsa/docs/patterns/d-cyclic-sort', '3ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/patterns/dp',
        component: ComponentCreator('/dsa/docs/patterns/dp', 'fe8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dsa/docs/solved-problems/',
        component: ComponentCreator('/dsa/docs/solved-problems/', '9b8'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/dsa/',
    component: ComponentCreator('/dsa/', '2a9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
