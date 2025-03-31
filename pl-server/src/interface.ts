import type { PromiseManager } from './middleware/promise-manager'
import type { CookieKeys } from './shared/constans/cookie.const'
import '@midwayjs/koa'

declare global {
  type AppConfig = Record<string, any>
}

declare module '@midwayjs/koa' {
  interface Context {
    user?: {
      id: string
    }
    tracerId: string
    stime: bigint
    clientId: string
    skipFormat: boolean
    userId: string
    promiseManager: PromiseManager
    getCookie: (key: CookieKeys) => string | undefined
    setCookie: (key: CookieKeys, value: string) => void
    getCostNs: () => string
  }
}
/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number
}
