import { inject } from '@adonisjs/core'
import { ExceptionHandler, HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import { get } from 'lodash-es'

@inject()
export default class HttpExceptionHandler extends ExceptionHandler {
  protected debug = !app.inProduction

  protected ignoreStackStatuses = [401, 404]

  async handle(error: unknown, ctx: HttpContext) {
    const status = get(error, ['status'], 500)
    const message = get(error, ['message'], 'Server Error')
    ctx.response.status(status).send({
      success: false,
      message,
    })
  }

  /**
   * The method is used to report error to the logging service or
   * the third party error monitoring service.
   *
   * @note You should not attempt to send a response from this method.
   */
  async report(error: unknown, ctx: HttpContext) {
    const status = get(error, ['status'], 500)
    const message = get(error, ['message'], 'Server Error')
    if (this.ignoreStackStatuses.includes(status)) {
      ctx.tracer.error(`Error Response ${status} ${message}`)
      return
    }
    ctx.tracer.error(`Error Response ${status} ${message}`, error as Error)
    return super.report(error, ctx)
  }
}
