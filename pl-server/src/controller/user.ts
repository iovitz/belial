import type { Context } from '@midwayjs/koa'
import type { UserService } from '../service/user'
import { Body, Controller, Get, Inject, Post, UseGuard } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'
import { GetUsersDTO } from '../dto/user'
import { In } from 'typeorm'
import { AuthGuard } from '../guards/auth'

@ApiTags('User用户数据')
@Controller('/api/user')
export class UserController {
  @Inject()
  ctx: Context

  @Inject()
  userService: UserService

  @Get('/owner_info')
  @UseGuard([AuthGuard])
  getOwnerInfo() {
    const { userId } = this.ctx
    return this.userService.findOne({
      where: {
        id: userId,
      },
    })
  }

  @Post('/get_users')
  getUsersInfo(@Body() body: GetUsersDTO) {
    return this.userService.findBy({
      id: In(body.userIds),
    })
  }
}
