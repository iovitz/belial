import { Body, Controller, Del, Get, Inject, Post, Query, UseGuard } from '@midwayjs/core'
import { ConflictError } from '@midwayjs/core/dist/error/http'
import { Context } from '@midwayjs/koa'
import { ApiTags } from '@midwayjs/swagger'
import { IdDTO } from '../dto/common'
import { AuthGuard } from '../guards/auth'
import { UserFollowingService } from '../service/following'
import { snowflakeIdGenerator } from '../shared/id'

@ApiTags('用户关注管理')
@UseGuard([AuthGuard])
@Controller('/api/following')
export class UserFollowingController {
  @Inject()
  ctx: Context

  @Inject()
  userFollowingService: UserFollowingService

  @Post('/')
  async following(@Body() body: IdDTO) {
    // 如果不存在就插入
    const existsFollowItem = await this.userFollowingService.findOneBy({
      followedId: body.id,
      followerId: this.ctx.userId,
    })

    if (existsFollowItem) {
      this.ctx.throw(new ConflictError('不能重复关注'))
    }

    await this.userFollowingService.insert({
      id: snowflakeIdGenerator.generate(),
      followedId: body.id,
      followerId: this.ctx.userId,
    })
    return true
  }

  @Del('/:id')
  async cancelFollowing(@Query('id') id: string) {
    const result = await this.userFollowingService.delete({
      followerId: this.ctx.userId,
      followedId: id,
    })
    return result.affected > 0
  }

  @Get('/list')
  async getFollowings(@Query('userId') userId: string) {
    // TODO 确定处理逻辑
  }
}
