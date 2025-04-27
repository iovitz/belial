import { Provide, Scope, ScopeEnum } from '@midwayjs/core'
import { appConfig } from '../config/rc-config'

@Provide()
@Scope(ScopeEnum.Request, { allowDowngrade: true })
export class ConfigService {
  private config = appConfig

  get(key: keyof AppConfig) {
    return this.config[key]
  }

  getOrThrow(key: keyof AppConfig) {
    if (this.config[key] === void 0) {
      throw new Error('Cannot get config')
    }
    return this.config[key]
  }
}
