const Service = require("egg").Service;
const svgCaptcha = require("svg-captcha");

module.exports = class CodeService extends Service {
  getVerifyCode(type, width, height, length = 4) {
    const { data } = svgCaptcha.create({
      size: length, // 验证码长度
      ignoreChars: "o01il", // 忽略字符
      color: true, // 背景色
      noise: Math.floor(Math.random() * 5), // 干扰线条
      width, // 图片宽
      height, // 图片长
    });
    return data;
  }
};
