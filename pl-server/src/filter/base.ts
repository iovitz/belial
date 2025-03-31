import type { HttpStatus } from '@midwayjs/core'
import type { Context } from '@midwayjs/koa'
import { get } from 'lodash'
import stringify from 'safe-stable-stringify'
import * as statuses from 'statuses'

export abstract class BaseErrorFilter<E extends Error> {
  constructor(private status: HttpStatus) {}

  async catch(err: E, ctx: Context) {
    const { status } = this

    ctx.status = status

    const message = statuses(status)

    this.log(message, err, ctx)

    // 请求处理完成
    ctx.logger.info(
      `- ERR ${ctx.method} ${ctx.url} ${ctx.userId ?? '??'}`,
      stringify({
        status,
        code: this.getCode(err),
        cost: ctx.getCostNs(),
        cid: ctx.clientId,
      }),
    )

    return {
      code: this.getCode(err),
      success: false,
      message: this.getMessageerr(err),
    }
  }

  protected log(message: string, err: E, ctx: Context) {
    ctx.logger.error(message, err)
  }

  // 获取 body.code
  protected getCode(_err: E) {
    return get(_err, 'code', this.status * 100)
  }

  protected getMessageerr(_err: E) {
    return get(_err, 'message', statuses(this.status))
  }
}
