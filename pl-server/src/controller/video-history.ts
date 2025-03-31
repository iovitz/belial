import { Context } from '@midwayjs/koa'
import { VerifyService } from '../service/verify'
import { Controller, Inject } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'

@ApiTags('Video History Module')
@Controller('/api/video-history')
export class VideoHistoryController {
  @Inject()
  ctx: Context

  @Inject()
  verify: VerifyService
}
