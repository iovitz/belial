import type { Context } from '@midwayjs/koa'
import { Controller, Get, Inject } from '@midwayjs/core'
import { ApiOperation, ApiResponse, ApiTags } from '@midwayjs/swagger'
import { GetStatusResponseDTO } from './home.dto'

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
    type: GetStatusResponseDTO,
  })
  @Get('/api/status')
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
