const Controller = require("../core/controller");

class BizController extends Controller {
  async getCurrentUser() {
    const { ctx } = this;
    const user = await ctx.service.user.findById(ctx.currentUserId);
    const userService = ctx.service.user;

    ctx.success({
      ...userService.getUserInfoByModel(user),
      token: ctx.$header.authorization,
    });
  }

  async update() {
    const { ctx } = this;
    const body = ctx.$body;
    ctx.validate({
      username: { type: "string", required: false, max: 10, min: 2 },
      password: { type: "string", required: false, max: 16, min: 6 },
      email: { type: "string", required: false, max: 20, min: 6 },
      avatar: { type: "string", required: false, max: 100 },
      channelDescription: { type: "string", required: false, max: 100 },
    });
    ctx.validate({
      email: { type: "email", required: false },
    });
    const userService = ctx.service.user;
    const user = await userService.findById(ctx.currentUserId);

    if (!Object.keys(body).length) {
      return ctx.success(userService.getUserInfoByModel(user));
    }

    // 用户名重名校验
    if (body.username) {
      if (
        body.username === user.username ||
        (await userService.findByUsername(user.username))
      ) {
        return ctx.throw(422, "用户名已存在");
      }
    }

    // 邮箱重复校验
    if (body.email) {
      if (
        body.email === user.email ||
        (await userService.findByEmail(user.email))
      ) {
        return ctx.throw(422, "邮箱已存在");
      }
    }

    // 密码处理
    if (body.password) {
      body.password = await userService.encryptPassword(body.password);
    }

    const updatedUser = await userService.updateUser(body);
    return ctx.success(userService.getUserInfoByModel(updatedUser));
  }

  async getUser() {
    const { ctx } = this;
    ctx.validate(
      {
        userid: { type: "string", required: true },
      },
      ctx.params,
    );
    const user = await ctx.service.user.findById(ctx.params.userid)
    if(!user) {
      ctx.throw(422, "用户不存在")
    }
    const subscriptionRecord = await ctx.service.subscription.getSubscribeRecord(ctx.currentUserId, ctx.params.userid)
    ctx.success({
      ...ctx.service.user.getUserInfoByModel(user),
      isSubscribed: Boolean(subscriptionRecord)
    })
  }
}

module.exports = BizController;
