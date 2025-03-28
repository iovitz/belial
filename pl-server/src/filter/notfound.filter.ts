import type { Context } from '@midwayjs/koa'
import { Catch, HttpStatus } from '@midwayjs/core'
import { NotFoundError } from '@midwayjs/core/dist/error/http'
import { BaseErrorFilter } from './base.filter'

@Catch(NotFoundError)
export class NotFoundFilter extends BaseErrorFilter<NotFoundError> {
  constructor() {
    super(HttpStatus.NOT_FOUND)
  }

  override log(message: string, err: NotFoundError, ctx: Context) {
    // 请求处理完成
    ctx.logger.debug(message, err)
  }
}
