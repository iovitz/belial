// eslint-disable-next-line ts/ban-ts-comment
// @ts-nocheck
import * as rc from 'rc'

const env = process.env

/**
 * 合并环境变量
 */
function mergeProcessEnvConfig(config: ConfigType) {
  Object.keys(config).forEach((k) => {
    if (env[k]) {
      config[k] = process.env[k]
    }
  })
  return config
}

export const appConfig: Readonly<AppConfig> = mergeProcessEnvConfig(rc('pili'))
