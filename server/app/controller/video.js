const Controller = require("../core/controller");

class BizController extends Controller {
  async createVideo() {
    const { ctx } = this;
    ctx.success("work");
  }
}

module.exports = BizController;
