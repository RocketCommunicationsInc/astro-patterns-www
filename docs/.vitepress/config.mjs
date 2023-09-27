import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Astro Nova",
  description: "WIP",
  appearance: false,
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Foundations', link: '/foundations.html' },
      { text: 'Patterns', link: '/patterns/index.html' },
      { text: 'v0.0.1' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

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
