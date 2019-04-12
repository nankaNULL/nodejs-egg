const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, service } = this;
    // 调用 service 进行业务处理 // service.post.create(req);
    
    // ctx 上下文Context对象的实例
    // body 响应内容
    ctx.body = "Hello world"
    // status 响应状态码
    ctx.status = 201;
  }
}

module.exports = HomeController;