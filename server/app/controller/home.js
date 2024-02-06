const Controller = require("../core/controller");

class BizController extends Controller {
  async getStatus() {
    const { ctx } = this;
    ctx.service.mail.sendMail("HAHAHAH");
    ctx.success("work");
  }
}

module.exports = BizController;
