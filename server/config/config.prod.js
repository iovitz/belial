module.exports = () => {
  const config = (exports = {});

  config.cors = {
    origin: "http://localhost:8765",
    // cookie跨域配置
    credentials: true,
  };
  return {
    ...config,
  };
};
