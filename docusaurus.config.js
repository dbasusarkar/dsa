// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Introduction to Data Structures and Algorithms',
  tagline: 'Concepts and Solved Problems',
  url: 'https://dbasusarkar.github.io',
  baseUrl: '/',
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

  plugins: ['@docusaurus/theme-live-codeblock'],
  themeConfig:
    // /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    /** @type {import('@docusaurus/theme-live-codeblock').ThemeConfig} */
    ({
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
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
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
                label: 'Data Structures',
                to: '/docs/intro',
              },
              {
                label: 'Algorithms',
                to: '/docs/intro',
              },
              {
                label: 'Patterns',
                to: '/docs/intro',
              },
              {
                label: 'Solved Problems',
                to: '/docs/intro',
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
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
