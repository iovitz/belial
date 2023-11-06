const path = require("path");

module.exports = (appInfo) => {
  const config = (exports = {});

  config.middleware = ["errorHandler"];

  // 需要进行jwt鉴权的路由前缀
  config.needAuthPrefixList = [];

  config.static = {
    prefix: "/",
    dir: path.join(appInfo.baseDir, "app/public"),
    dynamic: true,
    preload: false,
    maxAge: 31536000,
    buffer: true,
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.jwt = {
    secret: "06df3d59-8948-4783-821d-8481e721850a",
    expiresIn: "30d",
  };

  config.cluster = {
    listen: {
      port: 4321,
    },
  };

  config.io = {
    namespace: {
      "/": {
        connectionMiddleware: ["auth"],
        packetMiddleware: ["filter"],
      },
    },
  };

  exports.mongoose = {
    client: {
      url: "mongodb+srv://touyube:touyube@cluster0.jjabd.mongodb.net/touyube?retryWrites=true&w=majority",
      options: {},
      // mongoose global plugins, expected a function or an array of function and options
      plugins: [],
    },
  };
  return {
    ...config,
  };
};
