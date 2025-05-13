import app from '@adonisjs/core/services/app'
import chalk, { ChalkInstance } from 'chalk'
import { isEmpty, isObject } from 'lodash-es'
import { stringify } from 'safe-stable-stringify'
import { SPLAT } from 'triple-beam'
import { createLogger, format, transports } from 'winston'
import 'winston-daily-rotate-file'

function formatObject(param: unknown) {
  if (param instanceof Error && param.stack) {
    return param.stack.split('\n').join('\\n')
  }
  if (isObject(param)) {
    return stringify(param)
  }
  return param
}

// Ignore log messages if they have { private: true }
const all = format((info) => {
  const splat: any = info[SPLAT] ?? []
  const message = formatObject(info.message)
  const rest = splat.map(formatObject).join('\\n')
  info.message = `${message}`
  if (!isEmpty(rest)) {
    info.message += ` ${rest}`
  }
  return info
})

// 定义自定义日志级别
const customLevels = {
  fatal: 50,
  notice: 51,
  bootstrap: 99,
  error: 100,
  warn: 200,
  info: 300,
  http: 400,
  verbose: 500,
  debug: 600,
  silly: Number.MAX_SAFE_INTEGER,
}

const consoleTransport = new transports.Console({
  level: 'debug',
  // 使用时间戳和nest样式
  format: format.combine(
    all(),
    format.timestamp({ format: 'HH:mm:ss.SSS' }),
    format.printf(getOutputFormatter(false)),
  ),
})

const levelColorMap: Record<string, ChalkInstance> = {
  fatal: chalk.magentaBright, // 进程错误
  bootstrap: chalk.green, // 启动日志
  error: chalk.red, // 业务错误
  warn: chalk.yellow, // 业务警告
  info: chalk.blue, // 业务日志
  http: chalk.cyanBright, // http日志
  verbose: chalk.black, // 调试日志
  debug: chalk.blackBright, // 啊我额发我额发我额发我
}

function getOutputFormatter(isProd: boolean): Parameters<typeof format.printf>[0] {
  return function (logInfo) {
    if (isProd) {
      return `${logInfo.pid} ${logInfo.timestamp} ${[logInfo.scope]} ${logInfo.level} ${logInfo.message} ${logInfo.context || ''}`
    }
    const logLevelColor = levelColorMap[logInfo.level] ?? chalk.gray
    return `${chalk.gray(logInfo.pid)} ${chalk.gray(logInfo.timestamp)} ${[chalk.gray(logInfo.scope ?? 'GLOBAL')]} ${logLevelColor(logInfo.level)} ${logInfo.message} ${logInfo.context || ''}`
  }
}

function getCommonOutput() {
  return [
    all(),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss.SSS' }),
    format.printf(getOutputFormatter(true)),
  ]
}

function getFileLoggingTransport(level: string) {
  return new (transports as any).DailyRotateFile({
    dirname: `logs/${level}`,
    filename: '%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    level,
    format: format.combine(...getCommonOutput()),
  })
}

export const rootLogger = createLogger({
  level: app.inProduction ? 'info' : 'debug',
  levels: customLevels,
  defaultMeta: {
    pid: process.pid,
  },
})

if (app.inProduction) {
  rootLogger.add(getFileLoggingTransport('info'))
  rootLogger.add(getFileLoggingTransport('error'))
}
else {
  rootLogger.add(consoleTransport)
}
