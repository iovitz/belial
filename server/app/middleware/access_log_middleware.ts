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
    if (originalIp !== ':11') {
      const data = await this.requestClient.get<HttpContext['ipInfo']>(`https://freeipapi.com/api/json/120.234.91.248`).catch(() => null).then((data) => {
        return data
      })
      ctx.ipInfo = data
    }

    // 记录启动日志
    this.tracer.info('>>> request in', {
      method: ctx.request.method(),
      url: ctx.request.url(),
      ipInfo: `${ctx.ipInfo?.countryName ?? '-'}(${ctx.ipInfo?.countryCode ?? '-'}) ${ctx.ipInfo?.regionName ?? '-'} ${ctx.ipInfo?.cityName ?? '-'}(${ctx.ipInfo?.latitude ?? '-'},${ctx.ipInfo?.longitude ?? '-'})`,
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

// {
//   ipVersion: 4,
//   ipAddress: '120.234.91.248',
//   latitude: 22.58333,
//   longitude: 113.083328,
//   countryName: 'China',
//   countryCode: 'CN',
//   timeZone: '+08:00',
//   zipCode: '529000',
//   cityName: 'Jiangmen',
//   regionName: 'Guangdong',
//   isProxy: false,
//   continent: 'Asia',
//   continentCode: 'AS',
//   currency: { code: 'CNY', name: 'Yuan Renminbi' },
//   language: 'Mandarin',
//   timeZones: [ 'Asia/Shanghai', 'Asia/Urumqi' ],
//   tlds: [ '.cn', '.中国', '.中國', '.公司', '.网络' ]
// }

declare module '@adonisjs/core/http' {
  interface HttpContext {
    ipInfo: null | {
      ipVersion: number
      ipAddress: string
      latitude: number
      longitude: number
      countryName: string
      countryCode: string
      timeZone: string
      zipCode: string
      cityName: string
      regionName: string
      isProxy: boolean
      continent: string
      continentCode: string
      currency: { code: string, name: string }
      language: string
      timeZones: string[]
      tlds: string[]
    }
  }
}
