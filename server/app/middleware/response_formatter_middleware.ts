import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { get } from 'lodash-es'

const SKIP_FORMAT_FLAG = Symbol('SKIP_FORMAT_FLAG')
/**
 * Response formatter middleware
 */
export default class ResponseFormatterMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const output = await next()

    const originalResponse: unknown = ctx.response.getBody()

    if (ctx[SKIP_FORMAT_FLAG]) {
      return output
    }
    if (ctx.response.getStatus() < 400) {
      ctx.response.json({
        success: true,
        data: originalResponse,
      })
    }
    return output
  }
}

declare module '@adonisjs/core/http' {
  interface HttpContext {
    skipFormat: () => void
    [SKIP_FORMAT_FLAG]?: boolean
  }
}
