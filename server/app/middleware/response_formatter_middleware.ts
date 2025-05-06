import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { get } from 'lodash-es'

const SKIP_FORMAT_FLAG = Symbol('SKIP_FORMAT_FLAG')

export default class ResponseFormatterMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    ctx.skipFormat = () => {
      ctx[SKIP_FORMAT_FLAG] = true
    }
    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()

    if (!ctx.response.getStatus()) return

    const originalResponse = ctx.response.getBody()
    if (ctx[SKIP_FORMAT_FLAG]) {
      return output
    }
    if (originalResponse instanceof Error) {
      ctx.response.json({
        success: false,
        msg: originalResponse.message,
      })
      ctx.response.status(get(originalResponse, ['status'], 500))
    } else {
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
