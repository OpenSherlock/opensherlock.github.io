// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenSherlock',
  tagline: 'A cognitive system that anticipates and learns',
  favicon: 'img/cooperation.svg',

  url: 'https://opensherlock.github.io',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'opensherlock',
  projectName: 'opensherlock.github.io',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful metadata like html lang
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
          routeBasePath: '/',
          editUrl:
            'https://github.com/OpenSherlock/opensherlock.github.io/edit/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/opensherlock-social-card.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'OpenSherlock',
        logo: {
          alt: 'OpenSherlock',
          src: 'img/cooperation.svg',
        },
        items: [
          {
            to: 'introduction',
            position: 'left',
            label: 'Introduction',
          },
          {
            to: 'roadmap',
            position: 'left',
            label: 'Roadmap',
          },
          {
            to: 'collaboration',
            position: 'left',
            label: 'Collaboration',
          },
          {
            href: 'https://github.com/OpenSherlock',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} TopicQuests. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
