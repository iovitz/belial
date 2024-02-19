const Controller = require("../core/controller");

class BizController extends Controller {
  async getStatus() {
    const { ctx } = this;
    console.log(ctx.session);
    // ctx.service.mail.sendMail("HAHAHAH");
    ctx.session.name = "zhangsan";
    ctx.success("work");
  }
}

module.exports = BizController;
