import { Context } from '@midwayjs/koa'
import { VerifyService } from '../service/verify.service'
import { GetVerifyCodeDTO } from './security.dto'
import { Controller, Get, Inject, Query } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'
import { CookieKeys } from '../shared/constans/cookie.const'

@ApiTags('Security安全相关')
@Controller('/api/security')
export class SecurityController {
  @Inject()
  ctx: Context

  @Inject()
  verify: VerifyService

  @Get('/verify-code')
  async getSvgContent(@Query() query: GetVerifyCodeDTO) {
    const { data } = await this.verify.getVerifyCode(
      this.ctx.clientId,
      this.ctx.get(CookieKeys.UserAgent),
      query.type,
      query.width,
      query.height,
      4,
    )

    if (query.svg) {
      this.ctx.skipFormat = true
    }
    return data
  }
}
