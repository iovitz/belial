import type { Context } from '@midwayjs/koa'
import { Catch, HttpStatus } from '@midwayjs/core'
import { BadRequestError, ForbiddenError } from '@midwayjs/core/dist/error/http'
import { BaseErrorFilter } from './base.filter'

@Catch(ForbiddenError)
export class ForbiddenFilter extends BaseErrorFilter<BadRequestError> {
  constructor() {
    super(HttpStatus.FORBIDDEN)
  }

  override log(message: string, err: Error, ctx: Context) {
    ctx.logger.debug(`Forbidden: ${message}`, err)
  }
}
