module.exports = () => {
  return async function (ctx, next) {
    // todo: 通过IP做限制
    const { ip, currentUserId } = ctx;
    console.log(ip, currentUserId);
    await next();
  };
};
