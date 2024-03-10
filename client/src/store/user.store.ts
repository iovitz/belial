import { IOInstance } from '@/common/io'
import { logger } from '@/common/logger'
import { get } from 'lodash'
import { action, makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import { UserInfo } from './types/user.types'

export class UserStore {
  userInfo: UserInfo = {}

  constructor() {
    makeAutoObservable(this)
    makePersistable(this, {
      name: '__user_store__',
      properties: ['userInfo'],
      storage: window.localStorage,
    }).then(
      action((store) => {
        logger.info('mobx presist store load success', store)
      }),
    )
  }

  get isLogged() {
    return !!get(this.userInfo, 'email')
  }

  async register(nickname: string, email: string, password: string, vcode: string) {
    const res = await IOInstance.request({
      method: 'post',
      url: '/auth/register',
      data: {
        username: nickname,
        email,
        password,
        vcode,
        field: 'login',
      },
    })
    this.userInfo = res.user
    logger.verbose('注册成功', res)
    return res
  }

  logout() {
    this.userInfo = {}
  }
}
