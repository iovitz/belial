import { Context } from '@midwayjs/koa'
import { VerifyService } from '../service/verify'
import { Controller, Get, Inject, Query } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'
import { GetCaptchaDTO } from '../dto/verify'
import { ConfigService } from '../service/config'
import * as crypto from 'node:crypto'
import { Buffer } from 'node:buffer'

@ApiTags('Verify模块：验证相关')
@Controller('/api/verify')
export class SecurityController {
  @Inject()
  ctx: Context

  @Inject()
  verify: VerifyService

  @Inject()
  config: ConfigService

  @Get('/aes-public-key')
  async getAesPrivateKey() {
    const publicKey = this.config.get('AES_PUBLIC_KEY')
    const privateKey = this.config.get('AES_PRIVATE_KEY')
    const data = 'a123123.'
    const encrypted = crypto.publicEncrypt(
      {
        key: publicKey, // PEM 格式字符串
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, // 推荐 OAEP 填充
      },
      Buffer.from(data),
    )
    console.error(encrypted.toString('utf-8'))

    // 公钥解密
    const decrypted = crypto.privateDecrypt(
      {
        key: `${privateKey}`, // PEM 格式字符串
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      },
      encrypted, // 假设密文是 Base64
    )

    console.error(decrypted.toString()) // 输出: "Secret message"
    return this.config.get('AES_PUBLIC_KEY')
  }

  @Get('/code')
  async getSvgContent(@Query() query: GetCaptchaDTO) {
    const { id, svg } = await this.verify.getVerifyCode(
      query.type,
      query.width,
      query.height,
      4,
    )

    return {
      id,
      svg,
    }
  }
}
