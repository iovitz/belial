// import type { HttpContext } from '@adonisjs/core/http'

import User from '#models/user'

export default class UsersController {
  async getHello() {
    await User.create({
      name: 'zhangsan',
    })
    return 'hello, world'
  }
}
