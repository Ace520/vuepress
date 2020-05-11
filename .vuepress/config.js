module.exports = {
  title: 'ACE-BLOG',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '博文', link: '/post/' },
      { text: '速查表', link: '/cheatsheet/' },
      { text: '时间轴', link: '/timeline' },
      { text: '关于', link: '/about' },
    ],
    dateFormat: 'YYYY-MM-DD',
    comment: {
      service: 'vssue',
      owner: 'You',
      repo: 'Your repo',
      clientId: 'Your clientId',
      clientSecret: 'Your clientSecret',
    },
    pwa: {
      serviceWorker: true,
      updatePopup: true
    },
    paginationComponent: 'Pagination',
    smoothScroll: true
  },
}
