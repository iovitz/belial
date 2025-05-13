import { rootLogger } from '#shared/logger/index'
import { inject } from '@adonisjs/core'
import { Logger } from 'winston'

export type LogContext =
  | string
  | Error
  | {
    tracerId?: string
    error?: Error
    [key: string]: unknown
  }

@inject()
export class TracerService {
  private static appLogger = rootLogger.child({
    scope: 'APP',
  })

  private logger!: Logger

  setScope(scope: string) {
    this.logger = TracerService.appLogger.child({
      scope,
    })
  }

  error(message: string, context?: LogContext) {
    this.logger.error(message, context)
  }

  warn(message: string, context?: LogContext) {
    this.logger.warn(message, context)
  }

  info(message: string, context?: LogContext) {
    this.logger.info(message, context)
  }

  /**
   * @deprecated 使用 `tracer.info` 替代，这个方法只给NestJS内部调用
   * @param message
   * @param context
   */
  log(message: string, context?: LogContext) {
    this.logger.info(message, context)
  }

  verbose(message: string, context?: LogContext) {
    this.logger.verbose(message, context)
  }

  debug(message: string, context?: LogContext) {
    this.logger.debug(message, context)
  }

  child(scope: string) {
    const tracerService = new TracerService()
    tracerService.setScope(scope)
    return tracerService
  }
}
