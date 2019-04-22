exports.keys = "aaa";
exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.tpl': 'nunjucks'
  }
};
exports.middleware = [
  'robot'
];
exports.robot = {
  ua: [
    /Baiduspider/i,
  ]
}
