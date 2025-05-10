import app from '@adonisjs/core/services/app'
import { HttpContext, ExceptionHandler } from '@adonisjs/core/http'
import { get } from 'lodash-es'
import { inject } from '@adonisjs/core'
import { TracerService } from '#services/tracer_service'

@inject()
export default class HttpExceptionHandler extends ExceptionHandler {
  constructor(private tracerService: TracerService) {
    super()
  }
  /**
   * In debug mode, the exception handler will display verbose errors
   * with pretty printed stack traces.
   */
  protected debug = !app.inProduction

  /**
   * The method is used for handling errors and returning
   * response to the client
   */
  async handle(error: unknown, ctx: HttpContext) {
    const status = get(error, ['status'], 500)
    const message = get(error, ['message'], 'Server Error')
    ctx.tracer.error(`Error Response ${status} ${message}`, error as Error)
    ctx.response.status(status).send({
      success: false,
      message: message,
    })
  }

  /**
   * The method is used to report error to the logging service or
   * the third party error monitoring service.
   *
   * @note You should not attempt to send a response from this method.
   */
  async report(error: unknown, ctx: HttpContext) {
    return super.report(error, ctx)
  }
}
