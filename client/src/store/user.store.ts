import { makeAutoObservable } from 'mobx'

export class UserStore {
  name = 'zhangsan'

  age = 18

  constructor() {
    makeAutoObservable(this)
  }
}
