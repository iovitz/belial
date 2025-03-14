import type { Context } from 'node:vm'
import type { Repository } from 'typeorm'
import { Inject, Provide } from '@midwayjs/core'
import { InjectEntityModel } from '@midwayjs/typeorm'
import * as dayjs from 'dayjs'
import * as svgCaptcha from 'svg-captcha'
import { VerifyCode } from '../models/verify-code.sqlite'

@Provide()
export class VerifyService {
  @Inject()
  private ctx: Context

  @InjectEntityModel(VerifyCode)
  private verifyCode: Repository<VerifyCode>

  async getVerifyCode(
    clientId: string,
    ua: string,
    type: string,
    width: number,
    height: number,
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
    const verifyCode = new VerifyCode()
    verifyCode.code = code.text
    verifyCode.ua = ua
    verifyCode.type = type
    verifyCode.clientId = clientId

    await this.verifyCode.save(verifyCode)
    return code
  }

  async checkVerifyCode(
    clientId: string,
    ua: string,
    type: string,
    text: string,
  ) {
    // 从DB中获取验证码
    const codeModel = await this.verifyCode.findOne({
      where: {
        clientId,
        ua,
        type,
      },
    })

    // 判断验证码是不是30Min内下发的
    if (dayjs(codeModel.createdAt).add(30, 'M') < dayjs(Date.now())) {
      this.ctx.logger.warn('验证码过期', codeModel.createdAt)
      return false
    }

    if (text.toLowerCase() !== codeModel.code.toLowerCase()) {
      this.ctx.logger.warn('验证码校验失败', {
        input: text.toLowerCase(),
        right: codeModel.code.toLowerCase(),
      })
      return false
    }

    await this.verifyCode.save(codeModel)
    return true
  }
}
