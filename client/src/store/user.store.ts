import { makeAutoObservable } from 'mobx'

export class UserStore {
  constructor() {
    makeAutoObservable(this)
  }
}

export const userStore = new UserStore()
