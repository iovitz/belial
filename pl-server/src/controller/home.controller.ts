import type { Context } from '@midwayjs/koa'
import { Controller, Get, Inject } from '@midwayjs/core'
import { ApiOperation, ApiResponse, ApiTags } from '@midwayjs/swagger'
import { VideoPermission } from '../decorator/video-permission'

@ApiTags('Home 根路径请求')
@Controller()
export class HomeController {
  @Inject()
  ctx: Context

  @ApiOperation({
    description: '获取服务器运行状态',
  })
  @ApiResponse({
    status: 200,
    description: '服务器的运行状态',
  })
  @Get('/api/health')
  @VideoPermission(['read'])
  async home() {
    return {
      message: 'Hey Bro.',
    }
  }

  @Get('/')
  async getHome() {
    this.ctx.skipFormat = true
    this.ctx.set({
      'Cache-Control': 'no store',
    })
    return await this.ctx.render('index', {
      title: '噼哩噼哩',
    })
  }
}
