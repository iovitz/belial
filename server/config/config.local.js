module.exports = () => {
  const config = (exports = {});

  config.cors = {
    // 任何地址都可以访问
    // origin: "*",
    // 指定地址才可以访问
    origin: "http://localhost:8765",
    // cookie跨域配置
    credentials: true,
  };
  return {
    ...config,
  };
};
