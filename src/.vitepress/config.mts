import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Upgrade IT!",
  description: "#Inspire Development",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples' },
      { text: 'Random', link: '/random' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/NiColtro' }
    ]
  }
})
