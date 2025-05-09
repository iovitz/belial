import User from '#models/user'

export class UserService {
  // Your code here
  getUserInfoById(id: string) {
    return User.find(id)
  }
}
