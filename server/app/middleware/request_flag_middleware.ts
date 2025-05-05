import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class RequestFlagMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    const query = ctx.request.qs()
    if (query.debug) {
      ctx.debug = true
    }

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}

declare module '@adonisjs/core/http' {
  interface HttpContext {
    debug?: boolean
  }
}
