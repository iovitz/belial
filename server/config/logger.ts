import env from '#start/env'
import { defineConfig, targets } from '@adonisjs/core/logger'
import app from '@adonisjs/core/services/app'

const loggerConfig = defineConfig({
  default: 'app',

  /**
   * The loggers object can be used to define multiple loggers.
   * By default, we configure only one logger (named "app").
   */
  loggers: {
    app: {
      enabled: false,
      name: env.get('APP_NAME'),
      level: env.get('LOG_LEVEL'),
      formatters: {},
      transport: {
        targets: targets()
          .pushIf(
            !app.inProduction,
            targets.pretty({
              translateTime: 'yyyy-mm-dd HH:MM:ss',
              singleLine: true,
            }),
          )
          .push({
            target: 'pino-roll',
            level: 'info',
            options: {
              file: 'logs/adonisjs.log',
              frequency: 'daily',
              mkdir: true,
            },
          })
          .toArray(),
      },
    },
  },
})

export default loggerConfig

/**
 * Inferring types for the list of loggers you have configured
 * in your application.
 */
declare module '@adonisjs/core/types' {
  export interface LoggersList extends InferLoggers<typeof loggerConfig> {}
}
