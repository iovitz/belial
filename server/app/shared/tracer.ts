import chalk from 'chalk'
import l4j from 'log4js'

const tokens = {
  name(logEvent: any) {
    const info = logEvent.context.name
    return info ? ` ${info}` : ''
  },
}

l4j.configure({
  appenders: {
    stdout: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern: `${chalk.blue('%p')} ${process.pid}(${process.env.NODE_APP_INSTANCE ?? 0})${chalk.red('%x{name}')} %m`,
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
    default: { appenders: ['stdout', 'all'], level: __isProd ? 'info' : 'debug' },
  },
})

export const appLogger = l4j.getLogger('APP')
