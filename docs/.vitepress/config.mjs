import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Astro Nova",
  description: "WIP",
  appearance: false,
  ignoreDeadLinks: true,
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => {
          return tag.toLowerCase().indexOf("sl-") === 0;
        }
      }
    }
  },
  head: [
    [
      'script',
      {
        async: true,
        src: 'https://cpwebassets.codepen.io/assets/embed/ei.js'
      }

    ],
    // [
    //   'script',
    //   {
    //     async: true,
    //     type: 'module',
    //     src: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.9.0/cdn/components/copy-button/copy-button.js'
    //   }
    // ],
    [
      'script',
      {
        async: true,
        type: 'module',
        src: 'https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.9.0/cdn/components/tooltip/tooltip.js'
      }

    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/installation.html' },
      { text: 'Foundations', link: '/foundations/index.html' },
      { text: 'Patterns', link: '/patterns/index.html' },
      { text: 'v0.0.1' }
    ],

    sidebar: {

      '/foundations': [
        {
          text: 'Foundations',
          items: [
            { text: 'Dimension', link: '/foundations/dimension' },
            { text: 'Spacing', link: '/foundations/spacing' },
            { text: 'Typography', link: '/foundations/typography' },
          ]
        }
      ]
    },
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // },
    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/RocketCommunicationsInc/astro' }
    // ],
    algolia: {
      appId: "6VY3VEO12D",
      apiKey: '2ede37922e51fc959e70c62b5ccc82cd',
      indexName: 'astro-design-tokens'
    }
  }
})
