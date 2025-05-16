import User from '#models/user'
import { DaoService } from '#shared/dao'
import createHttpError from 'http-errors'

export class UserService extends DaoService<typeof User> {
  constructor() {
    super(User, {
      filterFields: ['id', 'nickname', 'avatar', 'desc', 'sex'],
    })
  }

  // Your code here
  async getUserInfoById(id: string) {
    const userRecord = await this.findById(id)
    if (!userRecord) {
      throw createHttpError(404, 'User not found!')
    }
    return this.formatDataForResponse(userRecord)
  }

  updateUserInfo(
    userId: string,
    userInfo: Partial<Pick<User, 'nickname' | 'avatar' | 'desc' | 'sex'>>,
  ) {
    return User.updateOrCreate({ id: userId }, userInfo)
  }
}
