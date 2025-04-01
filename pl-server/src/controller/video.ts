import { Context } from '@midwayjs/koa'
import { Body, Controller, Del, Get, Inject, Patch, Post, Query, UseGuard } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'
import { VideoService } from '../service/video'
import { CreateVideoDTO, IDQueryDTO } from './_dto'
import { ForbiddenError, NotFoundError } from '@midwayjs/core/dist/error/http'
import { AuthGuard } from '../guards/auth'
import { VideoPermissionGuard } from '../guards/video-permission'
import { VideoPermission } from '../decorator/video-permission'
import { EncryptService } from '../service/encrypt'

@ApiTags('Video Module')
@Controller('/api/video')
export class VideoController {
  @Inject()
  ctx: Context

  @Inject()
  encryptService: EncryptService

  @Inject()
  videoService: VideoService

  @Get(':id')
  async get(@Query() { id }: IDQueryDTO) {
    const video = await this.videoService.findOneBy({
      id: this.encryptService.genRandomId('vide'),
    })
    switch (video.status) {
      case 0:
        return video
      case 1:
        return this.ctx.throw(new NotFoundError('Video not found'))
      case 2:
        return this.ctx.throw(new ForbiddenError('video banned'))
      default:
        return this.ctx.throw('Unknown video status!')
    }
  }

  @Post()
  @VideoPermission('create')
  @UseGuard([AuthGuard, VideoPermissionGuard])
  async create(@Body() body: CreateVideoDTO) {
    const _video = await this.videoService.create({
      title: body.name,
    })
    return _video
  }

  @Patch(':id')
  @VideoPermission('update')
  @UseGuard([AuthGuard, VideoPermissionGuard])
  update() {

  }

  @Del(':id')
  @VideoPermission('delete')
  @UseGuard([AuthGuard, VideoPermissionGuard])
  delete() {

  }
}
