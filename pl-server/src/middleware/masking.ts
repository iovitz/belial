import type { IMiddleware } from '@midwayjs/core'
import type { Context, NextFunction } from '@midwayjs/koa'
import { Middleware } from '@midwayjs/core'

const MaskFields = [
  'password',
]

@Middleware()
export class MaskingMiddleware implements IMiddleware<Context, NextFunction> {
  resolve() {
    return (ctx: Context, next: NextFunction) => {
      const result = next()
      MaskFields.forEach((field) => {
        if (result[field] !== void 0) {
          ctx.logger.info(`Mask field: ${field}`)
          result[field] = void 0
        }
      })
      return result
    }
  }
}
