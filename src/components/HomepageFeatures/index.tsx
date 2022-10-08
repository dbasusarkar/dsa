import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Big O Notation',
    Svg: require('@site/static/img/bigO.svg').default,
    description: (
      <>
        Big O comlexity including runtime and space complexities relevant to different data structures, algorithms, patterns, methods or techniques.
      </>
    ),
  },
  {
    title: 'Data Structures (DS)',
    Svg: require('@site/static/img/ds.svg').default,
    description: (
      <>
        All major data structures including arrays, linked lists, hash tables, hash sets, stacks, queues, heaps, trees, graphs, tries, disjoint set or union-find, etc.
      </>
    ),
  },
  {
    title: 'Algorithms',
    Svg: require('@site/static/img/algo.svg').default,
    description: (
      <>
        Most familiar algorithms including different sorting approaches, binary search, tree/graph breadth first search (BFS) and depth first search (DFS), etc.
      </>
    ),
  },
];

type FeatureItemTwo = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureListTwo: FeatureItem[] = [
  {
    title: 'Patterns',
    Svg: require('@site/static/img/patterns.svg').default,
    description: (
      <>
        All major patterns/approaches/methods/techniques including sliding window, matrix traversal, two pointers, fast and slow pointers, interval merging, cyclic sort, tree/graph BFS/DFS, binary search, bit manipulation, recursion, backtracking, greedy, dynamic programming, etc.
      </>
    ),
  },
  {
    title: 'Solved Problems',
    Svg: require('@site/static/img/sp.svg').default,
    description: (
      <>
        Solutions to 100+ problems (added more regularly) in Java. Python support will be added in the future. TypeScript and JavaScript may be supported in the remote future. 
      </>
    ),
  },
];


function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function FeatureTwo({title, Svg, description}: FeatureItemTwo) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          {FeatureListTwo.map((props, idx) => (
            <FeatureTwo key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
