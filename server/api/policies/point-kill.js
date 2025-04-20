module.exports = async function (req, res, next) {
  const { blockIps } = sails.config.custom
  // IP封禁 客户端IP封禁 客户端指纹封禁 UserID封禁
  if (blockIps && blockIps.includes(req.ip)) {
    return res.forbidden()
    // throw {
    //   code: 403,
    //   message: 'Access Denied: Your IP address is blocked due to suspicious activity.',
    // }
  }

  await next()
}
