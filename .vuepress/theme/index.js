module.exports = {
  plugins: [
    ['@vuepress/blog', {
      directories: [
        {
          id: 'post',
          dirname: '_posts',
          path: '/post/',
          layout: 'PostLayout',
          itemLayout: 'Post',
          pagination: {
            perPagePosts: 2,
          },
        },
        {
          id: 'cheatsheet',
          dirname: '_cheatsheet',
          path: '/cheatsheet/',
          layout: 'CheatSheetLayout',
          itemLayout: 'CheatSheet',
          pagination: {
            perPagePosts: 2,
          },
        },
      ],
      frontmatters: [
        {
          id: "tag",
          keys: ['tag', 'tags'],
          path: '/tag/',
          frontmatter: { title: '标签' },
          pagination: {
            perPagePosts: 3
          }
        },
        {
          id: "topic",
          keys: ['topic', 'topics'],
          path: '/topic/',
          frontmatter: { title: '话题' },
          pagination: {
            perPagePosts: 3
          }
        },
      ]
    }],
    ['@vuepress/back-to-top'],
    ['@vuepress/last-updated'],
    ['@vuepress/nprogress'],
    ['vuepress-plugin-medium-zoom', {
      selector: 'img',
      delay: 1000,
      options: {
        margin: 24,
        background: '#BADA55',
        scrollOffset: 0,
      },
    }],
    ['vuepress-plugin-smooth-scroll'],
    ['vuepress-plugin-container', {
      type: 'card',
      before: info => `<div class="card"><div class="card-box"><p class="title">${info}</p>`,
      after: '</div></div>',
    }],
  ],
  markdown: {
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-xxx'))
    }
  }
}
