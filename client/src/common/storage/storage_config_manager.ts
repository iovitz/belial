import { LSUtils } from './local-storage'

export const StorageConfig = {
  storageKey: '__APP_CONFIG__',
  getConfig(key: string) {
    try {
      const config = JSON.parse(LSUtils.getItem(this.storageKey)!)
      return config[key]
    } catch (e) {
      return null
    }
  },
}
