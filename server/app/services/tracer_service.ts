import { inject } from '@adonisjs/core'
import l4j, { Logger } from 'log4js'

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
  private logger!: Logger

  setLogger(logger: Logger) {
    this.logger = logger
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

  debug(message: string, context?: LogContext) {
    this.logger.debug(message, context)
  }

  trace(message: string, context?: LogContext) {
    this.logger.trace(message, context)
  }

  child(name: string) {
    const logger = l4j.getLogger()
    logger.addContext('name', name)
    const newTracer = new TracerService()
    newTracer.setLogger(logger)
    return newTracer
  }
}
