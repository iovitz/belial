import { logger } from '@/common/logger/logger'
import { get } from 'lodash'
import { action, makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import { UserInfo } from './types/user.types'
import { LSUtils } from '@/common/storage/local-storage'
import { IOInstance } from '@/common/io/instance'

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
    LSUtils.setItem('__TOKEN__', `Bearer ${res.token}`)
    logger.verbose('注册成功', res)
    return res
  }

  logout() {
    this.userInfo = {}
    LSUtils.removeItem('__TOKEN__')
  }
}
