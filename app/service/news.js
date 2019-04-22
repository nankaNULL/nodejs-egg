const Service = require('egg').Service;

class NewsService extends Service {
  async index() {
    const { ctx } = this
    const result = await ctx.curl('https://registry.npm.taobao.org/egg/latest', {
        dataType: 'json',
        timeout: 3000
    })
    const { status, headers, data: {maintainers} } = result;
    // this.logger.info(this.ctx.query)
    this.logger.info(this.ctx.request.body)
    return maintainers;
  }
}

module.exports = NewsService;