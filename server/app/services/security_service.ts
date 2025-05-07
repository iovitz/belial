import VerifyCode from '#models/verify_code'
import svgCaptcha from 'svg-captcha'
import { DbService } from './db_service.js'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import moment from 'moment'

@inject()
export class SecurityService {
  constructor(
    protected ctx: HttpContext,
    protected dbService: DbService
  ) {}

  async getVerifyCode(type: string, width: number, height: number, length = 4) {
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
      id: this.dbService.genBigIntID(),
      code: code.text,
      type,
    })
    this.ctx.logger.info('generate verify code:', verifyCode.code)

    return {
      id: verifyCode.id,
      svg: code.data,
    }
  }

  async checkVerifyCode(type: string, id: string, code: string) {
    // 从DB中获取验证码
    const verifyCodeRecord = await VerifyCode.find({
      id,
      type,
      status: false,
    })

    if (!verifyCodeRecord || code.toLowerCase() !== verifyCodeRecord.code.toLowerCase()) {
      this.ctx.logger.warn('验证码校验失败', {
        input: code.toLowerCase(),
        right: verifyCodeRecord?.code.toLowerCase(),
      })
      return false
    }

    // 判断验证码是不是30Min内下发的
    if (moment(verifyCodeRecord.createdAt).add(30, 'M') < moment(Date.now())) {
      this.ctx.logger.warn('验证码过期', verifyCodeRecord.createdAt)
      return false
    }

    if (code.toLowerCase() !== verifyCodeRecord.code.toLowerCase()) {
      this.ctx.logger.warn('验证码校验失败', {
        input: code.toLowerCase(),
        right: verifyCodeRecord.code.toLowerCase(),
      })
      return false
    }

    verifyCodeRecord.status = true
    await verifyCodeRecord.save()
    return true
  }
}
