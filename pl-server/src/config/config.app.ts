// eslint-disable-next-line ts/ban-ts-comment
// @ts-nocheck
import * as rc from 'rc'

const env = process.env

// https://tooltt.com/js-object-to-json/
const defaultConfig = {
  appName: env.APP_NAME ?? 'pili',
  port: env.PORT ?? 19981,

  cookieKey: '6hD-Els9jDgegVw4EoUS3',

  sessionMaxAgeDays: 30,
  sessionKeyName: '_ss',

  logLevel: 'debug',

  multiAvatar: '---',
}

export const appConfig: typeof defaultConfig = rc('pili', defaultConfig)
