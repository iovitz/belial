import { TracerService } from '#services/tracer_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'

@inject()
export default class AccessLogMiddleware {
  constructor(private tracerService: TracerService) {}
  async handle(ctx: HttpContext, next: NextFn) {
    const startNs = process.hrtime.bigint()

    // 记录启动日志
    this.tracerService.info('>>> request in', {
      method: ctx.request.method(),
      url: ctx.request.url(),
    })

    // 记录响应时间
    ctx.response.onFinish(() => {
      const cost = `${(process.hrtime.bigint() - startNs).toLocaleString()}ns`
      this.tracerService.info('<<< request out', {
        cost,
        status: ctx.response.getStatus(),
      })
    })

    const output = await next()

    return output
  }
}
