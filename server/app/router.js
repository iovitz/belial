"use strict";

module.exports = (app) => {
  const { router, controller, middleware } = app;
  const authMiddleware = middleware.auth();
  // const { io } = app;
  const { home, auth, user, subscription, service } = controller;

  // Socket.IO
  // io.route("chat", io.controller.chat.ping);

  // Rest API
  const homeRouter = router.namespace("/api");

  homeRouter.get("/status", home.getStatus);

  const authRouter = router.namespace("/api/auth");
  authRouter.post("/login/v1", auth.login);
  authRouter.post("/register/v1", auth.register);

  const userRouter = router.namespace("/api/user");
  userRouter.get("/getUser/:userid", user.getUser);
  userRouter.get("/getCurrentUser", authMiddleware, user.getCurrentUser);
  userRouter.patch("/update", authMiddleware, user.update);

  const subscriptionRouter = router.namespace("/api/subscription", authMiddleware);
  subscriptionRouter.post("/subscribe/:userid", subscription.subscribe);
  subscriptionRouter.delete("/subscribe/:userid", subscription.unsubscribe);

  const serviceRouter = router.namespace("/api/service", authMiddleware);
  serviceRouter.get("/createUploadVideo", service.createUploadVideo);
  serviceRouter.get("/refreshUploadVideo", service.refreshUploadVideo);
};
