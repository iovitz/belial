import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

export default class AccessLogMiddleware {
  async handle(ctx: HttpContext, next: NextFn) {
    const startNs = process.hrtime.bigint()

    // 记录启动日志
    ctx.logger.info(
      {
        method: ctx.request.method(),
        url: ctx.request.url(),
      },
      '>>> request in'
    )

    // 记录响应时间
    ctx.response.onFinish(() => {
      const cost = `${(process.hrtime.bigint() - startNs).toLocaleString()}ns`
      ctx.logger.info(
        {
          cost,
        },
        '<<< request out'
      )
    })

    const output = await next()

    return output
  }
}
