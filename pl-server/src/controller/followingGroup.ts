import { Body, Controller, Del, Get, Inject, Param, Post, Put, Query } from '@midwayjs/core'
import { ApiBody, ApiParam, ApiTags } from '@midwayjs/swagger'
import { UserFollowingGroupService } from '../service/followingGroup'
import { CreateGroupDTO, UpdateGroupDTO } from '../dto/followingGroup'
import { Context } from '@midwayjs/koa'

@ApiTags('关注分组管理')
@Controller('/api/followingGroup')
export class UserFollowingGroupController {
  @Inject()
  userFollowingGroupService: UserFollowingGroupService

  @Inject()
  ctx: Context

  @Post('/')
  @ApiBody({ description: '创建分组' })
  async createGroup(@Body() group: CreateGroupDTO) {
    return this.userFollowingGroupService.create({
      userId: this.ctx.user.id,
      name: group.name,
      description: group.description,
      followings: [],
    })
  }

  @Put('/:id')
  @ApiParam({ name: 'id', description: '分组ID' })
  @ApiBody({ description: '更新分组数据' })
  async updateGroup(@Param('id') id: number, @Body() group: UpdateGroupDTO) {
    return this.userFollowingGroupService.update(id, group)
  }

  @Del('/:id')
  @ApiParam({ name: 'id', description: '分组ID' })
  async deleteGroup(@Param('id') id: number) {
    return this.userFollowingGroupService.delete(id)
  }

  @Get('/list')
  async getGroups(@Query('userId') userId: string) {
    return this.userFollowingGroupService.findBy({
      id: userId,
    })
  }
}
