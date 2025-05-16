/* eslint-disable perfectionist/sort-imports */

/*
|--------------------------------------------------------------------------
| HTTP server entrypoint
|--------------------------------------------------------------------------
|
| The "server.ts" file is the entrypoint for starting the AdonisJS HTTP
| server. Either you can run this file directly or use the "serve"
| command to run this file and monitor file changes
|
*/
import './_prepare_server_environment.js'
import { Ignitor } from '@adonisjs/core'
import 'reflect-metadata'
import { appLogger } from '#shared/tracer'
import stringify from 'json-stringify-safe'
/**
 * URL to the application root. AdonisJS need it to resolve
 * paths to file and directories for scaffolding commands
 */
const APP_ROOT = new URL('../', import.meta.url)

/**
 * The importer is used to import files in context of the
 * application.
 */
function IMPORTER(filePath: string) {
  if (filePath.startsWith('./') || filePath.startsWith('../')) {
    return import(new URL(filePath, APP_ROOT).href)
  }
  return import(filePath)
}

if (__isProd) {
  appLogger.info('Server Environments', stringify(process.env))
}

new Ignitor(APP_ROOT, { importer: IMPORTER })
  .tap((app) => {
    app.booting(async () => {
      await import('#start/env')
    })
    app.listen('SIGTERM', () => app.terminate())
    app.listenIf(app.managedByPm2, 'SIGINT', () => app.terminate())
  })
  .httpServer()
  .start()
  .then(() => {
    appLogger.info(`HTTP server listening on port ${process.env.PORT || 3333} in ${process.env.NODE_ENV || 'development'} mode`)
  })
  .catch((error) => {
    process.exitCode = 1
    appLogger.error('!!!!!!!!!!Failed to start HTTP server', error)
  })
