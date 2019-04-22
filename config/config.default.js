module.exports = {
  keys: "aaa",
  view: {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    }
  },
  middleware: [
    'robot'
  ],
  robot: {
    ua: [
      /Baiduspider/i,
    ]
  }
}
