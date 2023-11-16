const Controller = require("../core/controller");

class BizController extends Controller {
  async subscribe() {
    const { ctx } = this;
    ctx.validate(
      {
        userid: { type: "string", required: true },
      },
      ctx.params,
    );
    const { currentUserId } = ctx;
    const channelId = ctx.params.userid;
    if (currentUserId === channelId) {
      ctx.throw(422, "用户不能订阅自己");
    }
    const res = await ctx.service.subscription.subscribe(currentUserId, channelId);
    ctx.success(res);
  }

  async unsubscribe() {
    const { ctx } = this;
    ctx.validate(
      {
        userid: { type: "string", required: true },
      },
      ctx.params,
    );
    const { currentUserId } = ctx;
    const channelId = ctx.params.userid;
    if (currentUserId === channelId) {
      ctx.throw(422, "用户不能订阅自己");
    }
    const res = await ctx.service.subscription.unsubscribe(currentUserId, channelId);
    ctx.success(res);
  }
}

module.exports = BizController;
