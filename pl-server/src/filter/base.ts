import type { HttpStatus } from '@midwayjs/core'
import type { Context } from '@midwayjs/koa'
import { get } from 'lodash'
import stringify from 'safe-stable-stringify'
import * as statuses from 'statuses'

export abstract class BaseErrorFilter<E extends Error> {
  constructor(private status: HttpStatus) {}

  async catch(err: E, ctx: Context) {
    const { status } = this

    ctx.status = get(err, 'status') ?? status

    const message = statuses(status)

    this.log(message, err, ctx)

    // 请求处理完成
    ctx.logger.info(
      `- ERR ${ctx.method} ${ctx.url} ${ctx.userId ?? '??'}`,
      stringify({
        status,
        code: this.getCode(err, ctx.status),
        cid: ctx.clientId,
      }),
    )

    return {
      code: this.getCode(err, ctx.status),
      success: false,
      message: this.getMessenger(err, ctx.status),
    }
  }

  protected log(message: string, err: E, ctx: Context) {
    ctx.logger.error(message, err)
  }

  // 获取 body.code
  protected getCode(_err: E, status: number) {
    return get(_err, 'code', status * 100)
  }

  protected getMessenger(_err: E, status: number) {
    return get(_err, 'message', statuses(status))
  }
}
