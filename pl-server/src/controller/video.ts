import { Context } from '@midwayjs/koa'
import { Controller, Del, Get, Inject, Patch, Post, Query } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'
import { VideoService } from '../service/video'
import { IDQueryDTO } from './_dto'

@ApiTags('Video Module')
@Controller('/api/video')
export class VideoController {
  @Inject()
  ctx: Context

  @Inject()
  videoService: VideoService

  @Get(':id')
  async get(@Query() { id }: IDQueryDTO) {
    return this.videoService.findBy({
      id,
    })
  }

  @Post(':id')
  create() {

  }

  @Patch(':id')
  update() {

  }

  @Del(':id')
  delete() {

  }
}
