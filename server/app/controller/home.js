const Controller = require("../core/controller");

class BizController extends Controller {
  async getStatus() {
    const { ctx } = this;
    ctx.success();
  }
}

module.exports = BizController;
