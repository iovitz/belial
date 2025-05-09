import { UserService } from '#services/user_service'
import { getUserInfoValidator } from '#validators/user'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'

@inject()
export default class UsersController {
  constructor(private userService: UserService) {}

  async getOwnUserInfo(ctx: HttpContext) {
    const { userId } = ctx
    const userInfo = await this.userService.getUserInfoById(userId)
    return userInfo
  }

  async getUserInfo(ctx: HttpContext) {
    const params = await getUserInfoValidator.validate(ctx.request.params())

    // todo 需要好友关系才能查询
    const userInfo = await this.userService.getUserInfoById(params.userId)

    return userInfo
  }
}
