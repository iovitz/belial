import User from '#models/user'

export class UserService {
  // Your code here
  getUserInfoById(id: string) {
    return User.find(id)
  }

  updateUserInfo(
    userId: string,
    userInfo: Partial<Pick<User, 'nickname' | 'avatar' | 'desc' | 'sex'>>,
  ) {
    return User.updateOrCreate({ id: userId }, userInfo)
  }
}
