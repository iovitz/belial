import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import createHttpError from 'http-errors'

export default class ResponseFormatterMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    /**
     * Middleware logic goes here (before the next call)
     */
    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()

    if (!ctx.response.getStatus()) return

    const originalResponse = ctx.response.getBody()
    if (originalResponse instanceof createHttpError.HttpError) {
      ctx.response.json({
        success: false,
        msg: originalResponse.message,
      })
      ctx.response.status(originalResponse.status)
    } else {
      ctx.response.json({
        success: true,
        data: originalResponse,
      })
    }
    return output
  }
}
