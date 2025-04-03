import { Context } from '@midwayjs/koa'
import { Body, Controller, Del, Get, Inject, Param, Patch, Post, UseGuard } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'
import { VideoService } from '../service/video'
import { ForbiddenError, NotFoundError } from '@midwayjs/core/dist/error/http'
import { AuthGuard } from '../guards/auth'
import { VideoPermissionGuard } from '../guards/video-permission'
import { VideoPermission } from '../decorator/video-permission'
import { EncryptService } from '../service/encrypt'
import { IDParamDTO } from '../dto/common'
import { CreateVideoDTO } from '../dto/video'

@ApiTags('Video Module')
@Controller('/api/video')
export class VideoController {
  @Inject()
  ctx: Context

  @Inject()
  encryptService: EncryptService

  @Inject()
  videoService: VideoService

  @Get('/:id')
  @VideoPermission('read')
  @UseGuard([AuthGuard, VideoPermissionGuard])
  async get(@Param() { id: _id }: IDParamDTO) {
    const { video } = this.ctx
    if (!video) {
      this.ctx.throw(new NotFoundError('Video not exists'))
    }
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
