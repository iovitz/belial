import { Body, Controller, Del, Get, Inject, Param, Post, Put, Query, UseGuard } from '@midwayjs/core'
import { ApiBody, ApiParam, ApiTags } from '@midwayjs/swagger'
import { UserFollowingGroupService } from '../service/following-group'
import { CreateGroupDTO, UpdateGroupDTO } from '../dto/following-group'
import { Context } from '@midwayjs/koa'
import { ConflictError } from '@midwayjs/core/dist/error/http'
import { AuthGuard } from '../guards/auth'
import { snowflakeIdGenerator } from '../shared/id'

@ApiTags('Following Group Module')
@Controller('/api/following-group')
export class UserFollowingGroupController {
  @Inject()
  userFollowingGroupService: UserFollowingGroupService

  @Inject()
  ctx: Context

  @Post('/', {
    summary: '创建分组',
    description: '创建用户分组',
  })
  @UseGuard([AuthGuard])
  async createGroup(@Body() body: CreateGroupDTO) {
    const existsGroup = await this.userFollowingGroupService.findOne({
      where: {
        userId: this.ctx.userId,
        name: body.name,
      },
    })
    if (existsGroup) {
      throw new ConflictError('分组已经存在')
    }
    await this.userFollowingGroupService.insert({
      id: snowflakeIdGenerator.generate(),
      userId: this.ctx.userId,
      name: body.name,
      description: body.description,
    })

    return true
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
