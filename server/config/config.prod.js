module.exports = () => {
  const config = (exports = {});

  config.cors = {
    origin: "http://localhost:8765",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH",
  };

  config.logger = {
    consoleLevel: "INFO",
    allowDebugAtProd: true,
  };

  return {
    ...config,
  };
};
