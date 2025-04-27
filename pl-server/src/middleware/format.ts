import type { IMiddleware } from '@midwayjs/core'
import type { Context, NextFunction } from '@midwayjs/koa'
import { Middleware } from '@midwayjs/core'

@Middleware()
export class FormatMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      const data = await next()
      if (ctx.skipFormat) {
        return data
      }
      return {
        code: 0,
        data,
        message: 'success',
      }
    }
  }
}
