import type { IMiddleware } from '@midwayjs/core'
import type { Application, Context, NextFunction } from '@midwayjs/koa'
import { App, Middleware } from '@midwayjs/core'
import { customAlphabet } from 'nanoid'
import { stringify } from 'safe-stable-stringify'
import { CookieKeys } from '../shared/constans/cookie.const'
import { HeaderKeys } from '../shared/constans/header.const'

@Middleware()
export class TracerMiddleware implements IMiddleware<Context, NextFunction> {
  @App()
  app: Application

  private tracerIdGenerator = customAlphabet(
    'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789',
    10,
  )

  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      // 生成tracerId并放到请求头中
      ctx.traceId = ctx.get(HeaderKeys.Tracer) || this.tracerIdGenerator()
      ctx.res.setHeader(HeaderKeys.Tracer, ctx.traceId)

      ctx.clientId
        = ctx.getCookie(CookieKeys.ClientId) ?? this.tracerIdGenerator()
      ctx.setCookie(CookieKeys.ClientId, ctx.clientId)

      ctx.logger.info(
        `+ ${ctx.method} ${ctx.url}`,
        // 开发环境打印请求参数
        stringify({
          cid: ctx.clientId,
          body: ctx.request.body,
          query: ctx.request.query,
          params: ctx.params,
        }),
      )
      const result = await next()
      ctx.logger.info(
        `- SUC ${ctx.method} ${ctx.url} ${ctx.userId ?? '??'}`,
        stringify({
          cid: ctx.clientId,
          code: result.code,
          status: ctx.status,
        }),
      )
      return result
    }
  }
}
