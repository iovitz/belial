import type { Context } from '@midwayjs/koa'
import type { UserService } from '../service/user'
import { Controller, Inject } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'

@ApiTags('User用户数据')
@Controller('/api/user')
export class UserController {
  @Inject()
  ctx: Context

  @Inject()
  userService: UserService
}
