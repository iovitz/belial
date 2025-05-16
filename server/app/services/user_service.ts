import User from '#models/user'
import createHttpError from 'http-errors'
import { pick } from 'lodash-es'

export class UserService {
  // Your code here
  async getUserInfoById(id: string) {
    const userRecord = await User.find(id)
    if (!userRecord) {
      throw createHttpError(404, 'User not found!')
    }
    return this.formatDataForResponse(userRecord)
  }

  formatDataForResponse(user: User) {
    return pick(user.toObject(), ['id', 'nickname', 'avatar', 'desc', 'sex'])
  }

  updateUserInfo(
    userId: string,
    userInfo: Partial<Pick<User, 'nickname' | 'avatar' | 'desc' | 'sex'>>,
  ) {
    return User.updateOrCreate({ id: userId }, userInfo)
  }
}
