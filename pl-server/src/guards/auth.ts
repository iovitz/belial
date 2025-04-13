import { Guard, IGuard, Inject } from '@midwayjs/core'
import { Context } from '@midwayjs/koa'
import { AuthService } from '../service/auth'
import { ConfigService } from '../service/config'
import { CookieKeys } from '../shared/constans/cookie.const'

@Guard()
export class AuthGuard implements IGuard<Context> {
  @Inject()
  authService: AuthService

  @Inject()
  configService: ConfigService

  async canActivate(ctx: Context, _supplierClz, _methodName: string): Promise<boolean> {
    const sessionId = ctx.getCookie(CookieKeys.Session)
    if (!sessionId) {
      return false
    }
    const userInfo = await this.authService.getUserBySessionId(sessionId)
    if (!userInfo) {
      return false
    }
    ctx.userId = userInfo.userId
    return true
  }
}
