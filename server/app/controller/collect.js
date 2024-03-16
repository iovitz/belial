const Controller = require("../core/controller");

class BizController extends Controller {
  async collectPerformance() {
    const { ctx } = this;
    ctx.success("success");
  }
}

module.exports = BizController;
