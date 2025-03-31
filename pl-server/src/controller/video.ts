import { Context } from '@midwayjs/koa'
import { VerifyService } from '../service/verify.service'
import { Controller, Inject } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'

@ApiTags('Video Module')
@Controller('/api/video')
export class VideoController {
  @Inject()
  ctx: Context

  @Inject()
  verify: VerifyService
}
