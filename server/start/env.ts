/*
|--------------------------------------------------------------------------
| Environment variables service
|--------------------------------------------------------------------------
|
| The `Env.create` method creates an instance of the Env service. The
| service validates the environment variables and also cast values
| to JavaScript data types.
|
*/

import { rootLogger } from '#shared/logger/index'
import { Env } from '@adonisjs/core/env'

let AppEnv: Env<{}>

try {
  AppEnv = await Env.create(new URL('../', import.meta.url), {
    NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
    PORT: Env.schema.number(),
    APP_KEY: Env.schema.number(),
    HOST: Env.schema.string({ format: 'host' }),
    LOG_LEVEL: Env.schema.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']),

    /*
  |----------------------------------------------------------
  | Variables for configuring database connection
  |----------------------------------------------------------
  */
    DB_HOST: Env.schema.string({ format: 'host' }),
    DB_PORT: Env.schema.number(),
    DB_USER: Env.schema.string(),
    DB_PASSWORD: Env.schema.string.optional(),
    DB_DATABASE: Env.schema.string(),

    // AES Encryption
    AES_PUBLIC_KEY: Env.schema.string(),
    AES_PRIVATE_KEY: Env.schema.string(),
  })
}
catch (error) {
  rootLogger.error(`Error creating Env instance: ${error.help}`, error)
  throw error
}

export default AppEnv
