import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

/**
 * Response formatter middleware
 */
export default class ResponseFormatterMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const { response } = ctx
    const output = await next()

    const originalResponse: unknown = response.getBody()

    if (response.getStatus() < 400) {
      if (response.getHeader('content-type') === 'text/html') {
        return output
      }
      response.ok({
        success: true,
        data: originalResponse,
      })
    }
    return output
  }
}
