import { logger } from '@/common/logger'
import { action, makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'

export class UserStore {
  userInfo = {}

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
}
