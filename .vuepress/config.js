module.exports = {
  base: '/vuepress/',
  title: 'vuepress',
  description: 'vuepress',
  themeConfig: {
    smoothScroll: true
  },
  plugins: [
    [
      'vuepress-plugin-container',
      {
        type: 'card',
        before: info => `<div class="card"><div class="card-box"><p class="title">${info}</p>`,
        after: '</div></div>',
      },
    ],
  ]
}