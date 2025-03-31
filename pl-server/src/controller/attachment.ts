import { Context } from '@midwayjs/koa'
import { VerifyService } from '../service/verify'
import { Controller, Inject } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'

@ApiTags('Video Module')
@Controller('/api/attachment')
export class AttachmentController {
  @Inject()
  ctx: Context

  @Inject()
  verify: VerifyService
}
