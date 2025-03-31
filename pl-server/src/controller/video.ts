import { Context } from '@midwayjs/koa'
import { Body, Controller, Del, Get, Inject, Patch, Post, Query } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'
import { VideoService } from '../service/video'
import { CreateVideoDTO, IDQueryDTO } from './_dto'
import { ForbiddenError, NotFoundError } from '@midwayjs/core/dist/error/http'

@ApiTags('Video Module')
@Controller('/api/video')
export class VideoController {
  @Inject()
  ctx: Context

  @Inject()
  videoService: VideoService

  @Get(':id')
  async get(@Query() { id }: IDQueryDTO) {
    const video = await this.videoService.findOneBy({
      id,
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

  @Post(':id')
  async create(@Body() body: CreateVideoDTO) {
    const _video = await this.videoService.create({
      title: body.name,
    })
  }

  @Patch(':id')
  update() {

  }

  @Del(':id')
  delete() {

  }
}
