// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SIAKAD STIEAMA',
  tagline: 'Dokumentasi SIAKAD STIEAMA',
  url: 'https://docs.siakad.stieama.ac.id',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'stieama', // Usually your GitHub org/user name.
  projectName: 'siakad-docs', // Usually your repo name.

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
          editUrl:
            'https://github.com/jharrvis/siakad-docs/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/jharrvis/siakad-docs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'SIAKAD STIEAMA',
        logo: {
          alt: 'Panduan SIAKAD STIEAMA',
          src: 'img/logo-ama.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Panduan',
          },
          {to: '/blog', label: 'Update', position: 'left'},
          {
            href: 'https://github.com/jharrvis/siakad-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'SIAKAD STIEAMA',
                to: 'https://siakad.stieama.ac.id',
              },
              {
                label: 'Panduan SIAKAD',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Link STIEAMA',
            items: [
              {
                label: 'Website STIEAMA',
                href: 'https://stieama.ac.id',
              },
              {
                label: 'E-Learning STIEAMA',
                href: 'https://elearning.stieama.ac.id',
              },
              {
                label: 'Jurnal STIEAMA',
                href: 'https://jurnal.stieama.ac.id',
              },
            ],
          },
          {
            title: 'Update',
            items: [
              {
                label: 'Log Update SIAKAD',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/jharrvis/siakad-docs',
              },
            ],
          },
        ],
        copyright: `Hak Cipta © ${new Date().getFullYear()} STIEAMA - Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;