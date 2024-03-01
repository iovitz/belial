module.exports = () => {
  const config = (exports = {});

  config.cors = {
    origin: "*",
    // cookie跨域配置
    credentials: true,
  };
  return {
    ...config,
  };
};
