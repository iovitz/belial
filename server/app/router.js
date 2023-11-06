"use strict";

module.exports = (app) => {
  const { router, controller, middleware } = app;
  const authMiddleware = middleware.auth();
  // const { io } = app;
  const { home, auth, user, subscription } = controller;

  // Socket.IO
  // io.route("chat", io.controller.chat.ping);

  // Rest API
  const homeRouter = router.namespace("/api");
  homeRouter.get("/status", home.getStatus);

  const authRouter = router.namespace("/api/auth");
  authRouter.post("/login/v1", auth.login);
  authRouter.post("/register/v1", auth.register);

  const userRouter = router.namespace("/api/user", authMiddleware);
  userRouter.get("/getCurrentUser", user.getCurrentUser);
  userRouter.post("/update", user.update);

  const subscriptionRouter = router.namespace(
    "/api/subscription",
    authMiddleware,
  );
  subscriptionRouter.post("/subscribe/:userid", subscription.subscribe);
  subscriptionRouter.post("/unsubscribe/:userid", subscription.unsubscribe);
};
