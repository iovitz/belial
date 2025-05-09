import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import createHttpError from 'http-errors'

export default class BlockMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const ip = ctx.request.ip().replace('::ffff:', '')
    if (ip in []) {
      throw createHttpError[403]('Your IP address is blocked.')
    }

    /**
     * Call next method in the pipeline and return its output
     */
    const output = await next()
    return output
  }
}
