import type { HttpContext } from '@adonisjs/core/http'
import { UserService } from '#services/user_service'
import { getUserInfoValidator, updateUserInfoValidator } from '#validators/user'
import { inject } from '@adonisjs/core'

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

  async updateUserInfo(ctx: HttpContext) {
    const body = await updateUserInfoValidator.validate(ctx.request.body())
    const { userId } = ctx
    const userInfo = await this.userService.updateUserInfo(userId, body)
    return userInfo
  }
}
