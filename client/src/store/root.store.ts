import { UserStore } from './user.store'
import { SettingStore } from './config.store'

export class RootStore {
  public userStore = new UserStore()
  public settingStore = new SettingStore()
}
