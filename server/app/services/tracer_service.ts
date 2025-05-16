import { inject } from '@adonisjs/core'
import stringify from 'json-stringify-safe'
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
    this.logger.error(message, stringify(context))
  }

  warn(message: string, context?: LogContext) {
    this.logger.warn(message, stringify(context))
  }

  info(message: string, context?: LogContext) {
    this.logger.info(message, stringify(context))
  }

  debug(message: string, context?: LogContext) {
    this.logger.debug(message, stringify(context))
  }

  trace(message: string, context?: LogContext) {
    this.logger.trace(message, stringify(context))
  }

  child(name: string) {
    const logger = l4j.getLogger()
    logger.addContext('name', name)
    const newTracer = new TracerService()
    newTracer.setLogger(logger)
    return newTracer
  }
}
