// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Data Structures and Algorithms",
  tagline: 'A Very Practical Approach to Developing Problem Solving Skills',
  url: 'https://dbasusarkar.github.io',
  baseUrl: '/dsa/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dbasusarkar', // Usually your GitHub org/user name.
  projectName: 'dsa', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          // showReadingTime: true,
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  plugins: ['@docusaurus/theme-live-codeblock', require.resolve("@cmfcmf/docusaurus-search-local")],  

  // themes: ['@docusaurus/theme-search-algolia'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    // /** @type {import('@docusaurus/theme-live-codeblock').ThemeConfig} */
    ({
      /*
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',
      
        // Public API key: it is safe to commit it
        apiKey: 'YOUR_SEARCH_API_KEY',
      
        indexName: 'YOUR_INDEX_NAME',
      
        // Optional: see doc section below
        contextualSearch: true,
      
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
      
        // Optional: Algolia search parameters
        searchParameters: {},
      
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      
        //... other Algolia params
      },
      */
      prism: {
          theme: require('prism-react-renderer/themes/dracula'),
          // theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ['java', 'python',],
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
      navbar: {
        title: 'Data Structures and Algorithms',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon.ico',
        },
        items: [
          {
            to: '/docs/category/big-o-notation',
            label: 'Big O',
            position: 'left',
          },
          {
            to: '/docs/category/data-structures',
            label: 'DS',
            position: 'left',
          },
          {
            to: '/docs/category/algorithms',
            label: 'Algorithms',
            position: 'left',
          },
          {
            to: '/docs/category/patterns',
            label: 'Patterns',
            position: 'left',
          },
          {
            href: '/blog', 
            label: 'Blog', 
            position: 'right'
          },
          {
            href: 'https://github.com/dbasusarkar',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Internal Links',
            items: [
              {
                label: 'Big O',
                to: '/docs/category/big-o-notation',
              },
              {
                label: 'Data Structures',
                to: '/docs/category/data-structures',
              },
              {
                label: 'Algorithms',
                to: '/docs/category/algorithms',
              },
              {
                label: 'Patterns',
                to: '/docs/category/patterns',
              },
              {  
                label: 'Blog', 
                href: '/blog',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Personal Website',
                href: 'https://dbasusarkar.github.io',
              },
              {
                label: 'PGP/GPG Public Key',
                href: 'https://dbasusarkar.github.io/cheatsheets-tutorials-and-all-that-github/cheatsheets-tutorials-and-all-that-files/publickey.sci.comp@pm.me.asc',
              },
              {
                label: 'Keybase Public Profile',
                href: 'https://keybase.io/dbasusarkar',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Cheatsheets, Tutorials, & All That',
                href: 'https://dbasusarkar.github.io/cheatsheets-tutorials-and-all-that-github/cheatsheets-tutorials-and-all-that.html'
                // to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/dbasusarkar',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Debajyoti Basu Sarkar. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;
