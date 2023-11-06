const Controller = require("../core/controller");

class SubscriptionController extends Controller {
  async subscribe() {
    const { ctx } = this;
    ctx.validate(
      {
        userid: { type: "string", required: true },
      },
      ctx.params,
    );
    const { userid } = ctx;
    const channelId = ctx.params.userid;
    if (userid === channelId) {
      ctx.throw(422, "用户不能订阅自己");
    }
    const res = await ctx.service.subscription.subscribe(userid, channelId);
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
    const { userid } = ctx;
    const channelId = ctx.params.userid;
    if (userid === channelId) {
      ctx.throw(422, "用户不能订阅自己");
    }
    const res = await ctx.service.subscription.unsubscribe(userid, channelId);
    ctx.success(res);
  }
}

module.exports = SubscriptionController;
