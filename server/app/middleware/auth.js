const jwt = require("jsonwebtoken");

module.exports = () => {
  return async function (ctx, next) {
    const { app } = ctx;
    // 获取token,如果没有传入token，则为空
    let token = ctx.headers.authorization ? ctx.headers.authorization : "";
    // Token格式为 Bearer XXXX，需要去除Token的Bearer前缀
    token = token.substring(7);
    // 解析token
    try {
      const tokenInfo = await jwt.verify(token, app.config.jwt.secret);
      ctx.currentUserId = tokenInfo.userid;
    } catch (e) {
      console.error("fail", e);
      throw {
        status: 401,
        code: 40001,
        message: "Unauthorized",
      };
    }
    await next();
  };
};
