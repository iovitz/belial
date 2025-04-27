import { Body, Controller, Del, Get, Inject, Param, Post, Put, UseGuard } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'
import { UserFollowingGroupService } from '../service/following-group'
import { CreateGroupDTO, UpdateGroupDTO } from '../dto/following-group'
import { Context } from '@midwayjs/koa'
import { ConflictError } from '@midwayjs/core/dist/error/http'
import { AuthGuard } from '../guards/auth'
import { snowflakeIdGenerator } from '../shared/id'
import { ConfigService } from '../service/config'

@ApiTags('Following Group Module')
@UseGuard([AuthGuard])
@Controller('/api/following-group')
export class UserFollowingGroupController {
  @Inject()
  userFollowingGroupService: UserFollowingGroupService

  @Inject()
  configService: ConfigService

  @Inject()
  ctx: Context

  @Post('/', {
    summary: '创建分组',
    description: '创建用户分组',
  })
  async createGroup(@Body() body: CreateGroupDTO) {
    // 查看是否超过分组上限
    const existsGroupCount = await this.userFollowingGroupService.countBy({
      userId: this.ctx.userId,
    })
    if (existsGroupCount > this.configService.get('MAX_GROUP_NUMBER')) {
      this.ctx.throw(new ConflictError('分组数量已达上限'))
    }

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

  @Put('/:id', {
    summary: '更新分组',
    description: '更新分组信息',
  })
  async updateGroup(@Param('id') id: string, @Body() group: UpdateGroupDTO) {
    const result = await this.userFollowingGroupService.update({
      id,
      userId: this.ctx.userId,
    }, group)
    return result?.affected > 0
  }

  @Del('/:id', {
    summary: '删除分组',
    description: '删除一个分组',
  })
  async deleteGroup(@Param('id') id: string) {
    const result = await this.userFollowingGroupService.delete({
      id,
      userId: this.ctx.userId,
    })
    return result.affected > 0
  }

  @Get('/list', {
    summary: '获取全部关注列表',
    description: '获取全部关注列表',
  })
  async getGroups() {
    return this.userFollowingGroupService.findBy({
      userId: this.ctx.userId,
    })
  }
}
