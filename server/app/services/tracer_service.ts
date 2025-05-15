import { inject } from '@adonisjs/core'
import chalk from 'chalk';
import l4j, {type Logger} from 'log4js';

const tokens = {
  name: function (logEvent: any) {
    const info = logEvent.context.name;
    return info ? ` ${info}` : '';
  },
};

l4j.configure({
  appenders: {
    stdout: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern: `${chalk.blue('%p')}${chalk.red('%x{name}')} %m`,
        tokens,
      },
    },
    all: {
      type: 'file',
      filename: 'logs/app',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true, // 设置文件名称为 filename + pattern
      level: 'info',
      layout: {
        type: 'pattern',
        pattern: '%d{yyyy-MM-dd hh:mm:ss.SSS} %z %p%x{name} %m',
        tokens,
      },
      maxLogSize: '10m',
    },
  },
  categories: {
    default: { appenders: ['stdout', 'all'], level: 'debug' },
  },
});


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
  static appLogger = l4j.getLogger('APP')

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
    const logger = l4j.getLogger();
    logger.addContext('name', name);
    const newTracer = new TracerService()
    newTracer.setLogger(logger)
    return newTracer
  }
}
