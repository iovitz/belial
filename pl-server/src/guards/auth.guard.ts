import { Guard, IGuard } from '@midwayjs/core'
import { Context } from '@midwayjs/koa'

@Guard()
export class AuthGuard implements IGuard<Context> {
  async canActivate(context: Context, _supplierClz, _methodName: string): Promise<boolean> {
    if (!context.user) {
      return false
    }
    return true
  }
}
