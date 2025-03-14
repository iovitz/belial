import type { MidwayConfig } from '@midwayjs/core'
import { homedir } from 'node:os'
import { join } from 'node:path'
import * as process from 'node:process'
import { gray, red, yellow } from 'ansis'
import { isProd } from '../shared/env'

const env = process.env

export default {
  // use for cookie sign key, should change to your own and keep security
  koa: {
    port: Number(env.APP_PORT),
    contextLoggerFormat: (info) => {
      const ctx = info.ctx
      return `${gray(info.timestamp)} ${yellow(info.LEVEL)} ${gray(
        info.pid,
      )} ${red(ctx.traceId ?? '')} ${info.message}`
    },
  },

  // use for cookie sign key, should change to your own and keep security
  keys: env.APP_COOKIE_KEY,

  // database
  typeorm: {
    dataSource: {
      default: {
        /**
         * 单数据库实例
         */
        type: 'better-sqlite3', // 使用 better-sqlite3 驱动
        // 数据放在 ~/sqlite 目录下
        database: join(homedir(), 'sqlite', 'pilipili.sqlite'),

        synchronize: true, // 如果第一次使用，不存在表，有同步的需求可以写 true，注意会丢数据
        logging: false,

        // 配置实体模型
        // entities: [User],

        // 支持如下的扫描形式，为了兼容我们可以同时进行.js和.ts匹配
        entities: [
          // 'sqlite', // 特定目录
          'models/*.sqlite.{j,t}s', // 通配加后缀匹配
        ],
      },
    },
  },

  secrets: {
    multiAvatar: env.SECRET_MULTIAVATAR,
    fwalert: env.SECRET_FW_ALERT,
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
    maxAge: 24 * 3600 * 1000 * 30,
    key: '_ss',
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
      level: 'info',
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
        level: 'info',
        format: logFormater,
      },
      coreLogger: {
        level: 'info',
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
