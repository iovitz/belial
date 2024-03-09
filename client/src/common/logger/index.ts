export enum LogLevel {
  verbose = 1,
  log = 2,
  info = 3,
  warn = 4,
  error = 5,
}

export class Logger {
  private level: LogLevel
  private module?: string

  constructor({ module, level }: { module: string; level?: LogLevel }) {
    this.module = module
    this.level = level ?? 2
  }

  setLevel(level: LogLevel) {
    this.level = level
  }

  verbose(message: string, ...args: unknown[]) {
    if (LogLevel.verbose >= this.level) console.log(`${this.module ?? ''} - ${message}`, ...args)
  }

  info(message: string, ...args: unknown[]) {
    if (LogLevel.info >= this.level) console.info(`${this.module ?? ''} - ${message}`, ...args)
  }

  warn(message: string, ...args: unknown[]) {
    if (LogLevel.warn >= this.level) console.warn(`${this.module ?? ''} - ${message}`, ...args)
  }

  error(message: string, ...args: unknown[]) {
    if (LogLevel.error >= this.level) console.error(`${this.module ?? ''} - ${message}`, ...args)
  }
}

export const logger = new Logger({
  module: 'app',
  level: Number(localStorage.getItem('log_level')),
})
