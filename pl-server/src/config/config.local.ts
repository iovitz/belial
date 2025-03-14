import type { MidwayConfig } from '@midwayjs/core'

export default () => {
  return {
    midwayLogger: {
      default: {
        level: 'debug',
      },
      clients: {
        appLogger: {
          level: 'debug',
        },
        coreLogger: {
          level: 'debug',
        },
      },
    },
  } as MidwayConfig
}
