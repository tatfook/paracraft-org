'usestrict';
const egg = require('egg');
module.exports = class IndexController extends egg.Controller {
  async index() {
    await this.ctx.renderClient('index/index.js');
  }
};