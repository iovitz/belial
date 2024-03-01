"use strict";

module.exports = (app) => {
  const { router, controller, middleware } = app;
  // const { io } = app;
  const { home, auth, user, subscription, service } = controller;

  // Socket.IO
  // io.route("chat", io.controller.chat.ping);

  // 普通请求
  const homeRouter = router.namespace("/api");
  registerRouter(homeRouter, "get", "/status", home.getStatus);

  // 账号相关
  const authRouter = router.namespace("/api/auth");
  registerRouter(authRouter, "post", "/login", auth.login);
  registerRouter(authRouter, "post", "/register", auth.register);
  registerRouter(authRouter, "get", "/login_verify_code", auth.getLoginVerifyCode);

  // 用户信息
  const userRouter = router.namespace("/api/user");
  registerRouter(userRouter, "get", "/user/:userid", user.getUser);
  registerRouter(userRouter, "get", "/current_user", user.getCurrentUser, {
    auth: true,
  });
  registerRouter(userRouter, "patch", "/update", user.update, {
    auth: true,
  });

  // 订阅服务
  const subscriptionRouter = router.namespace("/api/subscription");
  registerRouter(subscriptionRouter, "post", "/subscribe/:userid", subscription.subscribe, {
    auth: true,
  });
  registerRouter(subscriptionRouter, "delete", "/subscribe/:userid", subscription.unsubscribe, {
    auth: true,
  });

  // 其他三方服务
  const serviceRouter = router.namespace("/api/service");
  registerRouter(serviceRouter, "get", "/createUploadVideo", service.createUploadVideo, {
    auth: true,
  });
  registerRouter(serviceRouter, "get", "/refreshUploadVideo", service.refreshUploadVideo, {
    auth: true,
  });

  function registerRouter(router, method, path, fn, config = {}) {
    const configMiddlewares = [];

    const frontMiddlewares = [middleware.gzip(app), middleware.errorHandler(app)];
    // 放在Auth之后的中间件
    const rearMiddlewares = [middleware.access(app)];

    config.auth && configMiddlewares.push(middleware.auth(app));

    const middlewares = [...frontMiddlewares, ...configMiddlewares, ...rearMiddlewares];

    router[method](path, ...middlewares, fn);
  }
};
