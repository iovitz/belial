enum LogLevel {
  verbose = 1,
  log = 2,
  info = 3,
  warn = 4,
  error = 5,
}

class Logger {
  constructor(private level: LogLevel) {}

  verbose(message: string, ...args: unknown[]) {
    if (LogLevel.verbose >= this.level) console.log(message, ...args)
  }

  info(message: string, ...args: unknown[]) {
    if (LogLevel.info >= this.level) console.info(message, ...args)
  }

  warn(message: string, ...args: unknown[]) {
    if (LogLevel.warn >= this.level) console.warn(message, ...args)
  }

  error(message: string, ...args: unknown[]) {
    if (LogLevel.error >= this.level) console.error(message, ...args)
  }
}

const logger = new Logger(Number(localStorage.getItem('log_level')) || 3)

export default logger
