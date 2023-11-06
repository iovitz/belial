const Controller = require("../core/controller");

class HomeController extends Controller {
  async getStatus() {
    const { ctx } = this;

    ctx.success("work");
  }
}

module.exports = HomeController;
