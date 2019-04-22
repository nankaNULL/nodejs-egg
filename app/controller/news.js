const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    
    const newsList = await this.ctx.service.news.index();
    const dataList = {
      list: newsList
    };
    // this.logger.info(newsList);
    // this.logger.info(this.ctx.request)
    await this.ctx.render('news/list.tpl', dataList);
  }
}

module.exports = NewsController;
