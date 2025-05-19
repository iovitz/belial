import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { RequestClientService } from '#services/request_client_service'
import { TracerService } from '#services/tracer_service'
import { inject } from '@adonisjs/core'

@inject()
export default class AccessLogMiddleware {
  constructor(private tracer: TracerService, private requestClient: RequestClientService) {}
  async handle(ctx: HttpContext, next: NextFn) {
    const startNs = process.hrtime.bigint()
    const forwardedIps = ctx.request.header('x-forwarded-for', '')?.split(',') ?? []
    const originalIp = forwardedIps[0]?.trim() || ctx.request.ip()

    // 获取原始IP
    if (originalIp !== '::11') {
      const data = await this.requestClient.get<HttpContext['ipInfo']>('http://ip-api.com/json/').catch(() => null).then((data) => {
        if (data?.status === 'successs') {
          return data
        }
        return null
      })
      ctx.ipInfo = data
    }

    // 记录启动日志
    this.tracer.info('>>> request in', {
      method: ctx.request.method(),
      url: ctx.request.url(),
      ipInfo: `${ctx.ipInfo?.country ?? '-'}(${ctx.ipInfo?.countryCode ?? '-'}) ${ctx.ipInfo?.regionName ?? '-'} ${ctx.ipInfo?.city ?? '-'} ${ctx.ipInfo?.lat ?? '-'} ${ctx.ipInfo?.lon ?? '-'}`,
    })

    // 记录响应时间
    ctx.response.onFinish(() => {
      const cost = `${(process.hrtime.bigint() - startNs).toLocaleString()}ns`
      this.tracer.info('<<< request out', {
        cost,
        status: ctx.response.getStatus(),
        userId: ctx.userId,
      })
    })

    const output = await next()

    return output
  }
}

declare module '@adonisjs/core/http' {
  interface HttpContext {
    ipInfo: null | {
      status?: string
      country?: string
      countryCode?: string
      region?: string
      regionName?: string
      city?: string
      zip?: string
      lat?: number
      lon?: number
      timezone?: string
      isp?: string
      org?: string
      as?: string
      query?: string
    }
  }
}
