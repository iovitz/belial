import type { IMiddleware } from '@midwayjs/core'
import type { Application, Context, NextFunction } from '@midwayjs/koa'
import type { CookieKeys } from '../shared/constans/cookie.const'
import { App, Middleware } from '@midwayjs/core'

@Middleware()
export class UtilsMiddlware implements IMiddleware<Context, NextFunction> {
  @App()
  app: Application

  resolve() {
    return (ctx: Context, next: NextFunction) => {
      const signed = this.app.getConfig('session.signed')
      const httpOnly = this.app.getConfig('session.httpOnly')
      const overwrite = this.app.getConfig('session.overwrite')
      const sameSite = this.app.getConfig('session.sameSite')
      const maxAge = this.app.getConfig('session.maxAge')

      ctx.getCookie = function (key: CookieKeys) {
        return ctx.cookies.get(key, {
          // NOTICE: 存的时候如果为false，取也得是false，否则拿不到数据
          signed,
        })
      }

      ctx.setCookie = function (key: CookieKeys, value: string) {
        return ctx.cookies.set(key, value, {
          // NOTICE: 存的时候如果为false，取也得是false，否则拿不到数据
          signed,
          maxAge,
          sameSite,
          httpOnly, // 是否只用于http请求中获取
          overwrite, // 是否允许重写
        })
      }

      return next()
    }
  }
}
