import { Body, Controller, Del, Get, Inject, Post, Query } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'
import { UserFollowingService } from '../service/following'
import { UserFollowing } from '../models/user-following.entity'

@ApiTags('用户关注管理')
@Controller('/api/following')
export class UserFollowingController {
  @Inject()
  userFollowingService: UserFollowingService

  @Post('/')
  async createFollowing(@Body() following: UserFollowing) {
    return this.userFollowingService.create(following)
  }

  @Del('/:id')
  async deleteFollowing(@Query('id') id: string) {
    return this.userFollowingService.delete(id)
  }

  @Get('/list')
  async getFollowings(@Query('userId') userId: string) {
    return this.userFollowingService.findByUserId(userId)
  }
}
