import type { MidwayConfig } from '@midwayjs/core'
import { gray, red, yellow } from 'ansis'
import { isProd } from '../shared/env'
import { appConfig } from './rc-config'

export default {
  // use for cookie sign key, should change to your own and keep security
  koa: {
    port: appConfig.PORT,
    contextLoggerFormat: (info) => {
      const ctx = info.ctx
      return `${gray(info.timestamp)} ${yellow(info.LEVEL)} ${gray(
        info.pid,
      )} ${red(ctx.traceId ?? '')} ${info.message}`
    },
  },

  // use for cookie sign key, should change to your own and keep security
  keys: appConfig.COOKIE_SECRETS,

  // database
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'mysql',
        // 数据放在 ~/sqlite 目录下
        url: appConfig.MYSQL_CONNECTION_URL,

        synchronize: false, // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: false,

        entities: [
          'models/*.entity.{j,t}s',
        ],
      },
    },
  },

  secrets: {
    multiAvatar: appConfig.MULTI_AVATAR_KEY,
    fwalert: appConfig.FWALERT_KEY,
  },

  socketIO: {
    // ...
    transports: ['websocket'],
  },
  staticFile: {
    dirs: {
      default: {
        prefix: '/',
        dir: 'public',
        alias: {
          // '/': '/index.html',
        },
      },
    },
  },
  session: {
    maxAge: 24 * 3600 * 1000 * appConfig.SESSION_EFFECT_DAY,
    key: appConfig.SESSION_KEY_NAME,
    httpOnly: true,
    signed: false,
    sameSite: 'strict',
    overwrite: false,
  },
  view: {
    defaultExtension: '.ejs',
    mapping: {
      '.ejs': 'ejs',
    },
  },
  ejs: {
    cache: false,
  },
  midwayLogger: {
    default: {
      level: appConfig.LOG_LEVEL,
      transports: {
        console: {
          autoColors: false,
        },
        file: {
          autoColors: false,
        },
        error: {
          autoColors: false,
        },
      },
    },
    clients: {
      appLogger: {
        level: appConfig.LOG_LEVEL,
        format: logFormater,
      },
      coreLogger: {
        level: appConfig.LOG_LEVEL,
        format: logFormater,
      },
    },
  },
} as MidwayConfig

function logFormater(info: any) {
  if (isProd()) {
    return `${info.timestamp} ${info.LEVEL} ${info.pid} ${info.message}`
  }
  return `${gray(info.timestamp)} ${yellow(info.LEVEL)} ${gray(info.pid)} ${
    info.message
  }`
}
