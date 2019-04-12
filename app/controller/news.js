const Controller = require('egg').Controller;

class NewsController extends Controller {
  async list() {
    
    const newsList = await this.ctx.service.news.index();
    const dataList = {
      list: newsList
    };
    console.log(newsList)
    
    await this.ctx.render('news/list.tpl', dataList);
  }
}

module.exports = NewsController;
