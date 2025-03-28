import type { PromiseManager } from './middleware/promise-manager.middleware'
import type { CookieKeys } from './shared/constans/cookie.const'
import type * as second from '../.pilirc.json'
import '@midwayjs/koa'

declare global {
  type AppConfig = typeof second
}

declare module '@midwayjs/koa' {
  interface Context {
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
