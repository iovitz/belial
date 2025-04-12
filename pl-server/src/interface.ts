import type { PromiseManager } from './middleware/promise-manager'
import type { CookieKeys } from './shared/constans/cookie.const'
import '@midwayjs/core'
import type { Video } from './models/video.entity'

/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number
}

declare global {
  type AppConfig = Record<string, any>
}

declare module '@midwayjs/core' {
  interface Context {
    video?: Video
    tracerId: string
    stime: bigint
    clientId: string
    skipFormat: boolean
    userId: string
    promiseManager: PromiseManager
    getCookie: (key: CookieKeys) => string | undefined
    setCookie: (key: CookieKeys, value: string) => void
  }
}
/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number
}
