import { Context } from '@midwayjs/koa'
import { VerifyService } from '../service/verify'
import { Controller, Get, Inject, Query } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'
import { GetCaptchaDTO } from '../dto/verify'

@ApiTags('Verify模块：验证相关')
@Controller('/api/verify')
export class SecurityController {
  @Inject()
  ctx: Context

  @Inject()
  verify: VerifyService

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
