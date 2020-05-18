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
    navConfig: {
      jumbotron: ['IndexLayout', 'AboutLayout'],
    },
    dateFormat: 'YYYY-MM-DD',
    pwa: {
      serviceWorker: true,
      updatePopup: true
    },
    paginationComponent: 'Pagination',
    smoothScroll: true,
    staticUrl: 'https://raw.githubusercontent.com/Ace520/vuepress/master/static/',
    projects: [
      {
        title: 'laravel-admin-vue',
        summary: 'Laravel-admin使用vue前后端分离版',
        img: 'https://cdn.pixabay.com/photo/2016/03/26/13/09/notebook-1280538_1280.jpg',
        url: 'https://laravel-admin.org/'
      },
      {
        title: 'Marvel Universe',
        summary: '漫威宇宙：更易于调用的漫威API',
        img: 'https://cdn.pixabay.com/photo/2019/05/31/02/08/iron-man-4241268_1280.jpg',
        url: 'https://developer.marvel.com/'
      }
    ]
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
