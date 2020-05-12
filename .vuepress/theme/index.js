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
          layout: 'Tag',
          itemlayout: 'Tag',
          pagination: {
            perPagePosts: 3
          }
        },
        {
          id: "topic",
          keys: ['topic', 'topics'],
          path: '/topic/',
          frontmatter: { title: '话题' },
          layout: 'Topic',
          itemlayout: 'Topic',
          pagination: {
            perPagePosts: 3
          }
        },
      ],
      sitemap: {
        hostname: 'https://ace520.github.io/vuepress'
      },
      comment: {
        service: 'vssue',
        owner: 'Ace520',
        repo: 'Ace Blog',
        clientId: 'Iv1.535c99f0a882ed45',
        clientSecret: '6ec379adea91d41358679a159e6688a258dff8a9',
      },
      feed: {
        canonical_base: 'https://ace520.github.io/vuepress'
      },
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
      before: info => `<div class="card"><div class="card-box"><div class="card-content"><div class="title">${info}</div>`,
      after: '</div></div></div>',
    }],
  ],
}
