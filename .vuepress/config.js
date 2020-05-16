module.exports = {
  title: 'ACE-BLOG',
  base: '/vuepress/',
  description: 'Ace blog',
  themeConfig: {
    nav: [
      { text: '首页', link: '/', layouts: ['IndexLayout'] },
      { text: '博文', link: '/post/', layouts: ['PostLayout', 'Post', 'Tag', 'Topic'] },
      { text: '速查表', link: '/cheatsheet/', layouts: ['CheatSheetLayout', 'CheatSheet', 'Category'] },
      { text: '时间轴', link: '/timeline', layouts: ['TimelineLayout'] },
      { text: '关于', link: '/about', layouts: ['AboutLayout'] },
    ],
    dateFormat: 'YYYY-MM-DD',
    pwa: {
      serviceWorker: true,
      updatePopup: true
    },
    paginationComponent: 'Pagination',
    smoothScroll: true
  },
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-xxx'))
    }
  }
}
