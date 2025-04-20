const { TwitterSnowflake } = require('@sapphire/snowflake')
const svgCaptcha = require('svg-captcha')

/**
 * VerifyService
 *
 * @description :: Verify Service
 * @usage       :: VerifyService.[methodName]()
 */
const Service = {

  async createVerifyCode(
    type,
    width,
    height,
    length = 4,
  ) {
    const code = svgCaptcha.create({
      size: length, // 验证码长度
      ignoreChars: 'o01ijlaqf', // 忽略字符
      color: false, // 是否采用彩色字符串
      noise: Math.floor(Math.random() * 3), // 干扰线条
      width, // 图片宽
      height, // 图片长
      background: '#ffffff',
    })
    const verifyCode = await VerifyCode.create({
      id: TwitterSnowflake.generate().toString(),
      code: code.text,
      type,
      status: false,
    }).fetch()
    sails.log.info('generate verify code:', verifyCode.code)

    return {
      id: verifyCode.id,
      svg: code.data,
    }
  },

}

// For LSP
globalThis.VerifyService = Service

module.exports = Service
