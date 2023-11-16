const Controller = require("../core/controller");

class BizController extends Controller {
  async login() {
    const { ctx } = this;
    ctx.validate({
      password: { type: "string", required: true, max: 16, min: 6 },
      email: { type: "string", required: true, max: 20, min: 6 },
    });
    ctx.validate({
      email: { type: "email", required: true },
    });
    const userService = this.service.user;
    const user = await userService
      .findByEmail(ctx.$body.email)
      .select("+password");
    if (!user) {
      return ctx.throw(422, "用户不存在");
    }
    if (
      !(await ctx.service.user.comparePassword(
        ctx.$body.password,
        user.password,
      ))
    ) {
      return ctx.throw(422, "邮箱或密码错误");
    }
    const token = userService.createToken({
      userid: user._id,
    });

    ctx.success({
      ...userService.getUserInfoByModel(user),
      token,
    });
  }

  async register() {
    const { ctx } = this;
    const body = ctx.$body;
    ctx.validate({
      username: { type: "string", required: true, max: 10, min: 2 },
      password: { type: "string", required: true, max: 16, min: 6 },
      email: { type: "string", required: true, max: 20, min: 6 },
    });
    ctx.validate({
      email: { type: "email", required: true },
    });
    const userService = this.service.user;
    if (await userService.findByUsername(body.username)) {
      return ctx.throw(422, "用户名已存在");
    }
    if (await userService.findByEmail(body.email)) {
      return ctx.throw(422, "邮箱已存在");
    }
    body.password = await userService.encryptPassword(body.password);
    const user = await userService.createUser(body);

    const token = userService.createToken({
      userid: user._id,
    });

    ctx.success({
      ...userService.getUserInfoByModel(user),
      token,
    });
  }
}

module.exports = BizController;
