import { Body, Controller, Inject, Post, UseGuard } from '@midwayjs/core'
import { Context } from '@midwayjs/socketio'
import { ApiTags } from '@midwayjs/swagger'
import { VideoPermission } from '../decorator/video-permission'
import { CreateTagDTO } from '../dto/video-tag'
import { AuthGuard } from '../guards/auth'
import { EncryptService } from '../service/encrypt'
import { VideoTagService } from '../service/video-tag'

@ApiTags('Video Tag')
@Controller('/api/video-tag')
export class VideoController {
  @Inject()
  ctx: Context

  @Inject()
  encryptService: EncryptService

  @Inject()
  videoTagService: VideoTagService

  @Post()
  @VideoPermission('create')
  @UseGuard([AuthGuard])
  async create(@Body() { name }: CreateTagDTO) {
    const existsTag = await this.videoTagService.findOneBy({
      name,
    })
    if (existsTag) {
      return true
    }
    const videoTag = this.videoTagService.create({
      id: this.encryptService.genRandomId('vtag'),
      name,
    })
    await this.videoTagService.save(videoTag)
    return true
  }
}
