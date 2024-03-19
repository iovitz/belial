const Service = require("egg").Service;
const moment = require("moment");
const svgCaptcha = require("svg-captcha");

module.exports = class CodeService extends Service {
  getVerifyCode(width, height, length = 4) {
    return svgCaptcha.create({
      size: length, // 验证码长度
      ignoreChars: "o01il", // 忽略字符
      color: true, // 背景色
      noise: Math.floor(Math.random() * 5), // 干扰线条
      width, // 图片宽
      height, // 图片长
    });
  }

  checkVerifyCode(field, text) {
    // 获取验证码
    const { ctx } = this;
    const code = ctx.session[`#c_${field}`] ?? "";
    const codeTime = ctx.session[`#t_${field}`] ?? "";
    if (moment(codeTime).add(30, "M") < moment(Date.now())) {
      return ctx.throw(422, "验证码过期");
    }
    if (text.toLowerCase() !== code.toLowerCase()) {
      return ctx.throw(422, "验证码错误");
    }
    delete ctx.session[`#c_${field}`];
    delete ctx.session[`#t_${field}`];
    return true;
  }
};
