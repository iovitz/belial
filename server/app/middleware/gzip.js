const isJSON = require("koa-is-json");
const zlib = require("zlib");

module.exports = ({ config }) => {
  const gzipThreshold = config.gzipThreshold;
  return async function (ctx, next) {
    await next();

    let body = ctx.body;
    if (!body) return;

    // 判断客户端是否支持gzip
    const acceptEncoding = ctx.header["accept-encoding"];
    if (acceptEncoding && !acceptEncoding.includes("gzip")) {
      return;
    }

    if (!gzipThreshold || ctx.length < gzipThreshold) return;

    if (isJSON(body)) body = JSON.stringify(body);

    // 设置 gzip body，修正响应头
    const stream = zlib.createGzip();
    stream.end(body);
    ctx.body = stream;
    ctx.set("Content-Encoding", "gzip");
  };
};
