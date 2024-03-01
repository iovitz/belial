const path = require("path");
const secretConfig = require("./config.secret");

module.exports = (appInfo) => {
  const config = (exports = {});

  // 需要进行jwt鉴权的路由前缀
  config.needAuthPrefixList = [];

  config.keys = 'b22db542-2691-47d9-997d-512a0c554d5b'

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
      url: secretConfig.mongoDBUrl,
      options: {},
      plugins: [],
    },
  };

  exports.session = {
    key: "__server_session__",
    maxAge: 30 * 24 * 3600 * 1000, // 1 天
    httpOnly: false,
    encrypt: false,
    renew: true,
    sameSite: "none",
  };

  config.gzipThreshold = 1000;

  return {
    ...secretConfig,
    ...config,
  };
};
