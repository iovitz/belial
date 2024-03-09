import { makeAutoObservable } from 'mobx'
export class SettingStore {
  constructor() {
    makeAutoObservable(this)
  }
}

export const settingStore = new SettingStore()
