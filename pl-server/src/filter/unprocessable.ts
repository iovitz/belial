import type { Context } from '@midwayjs/koa'
import { Catch, HttpStatus } from '@midwayjs/core'
import { BadRequestError, UnprocessableEntityError } from '@midwayjs/core/dist/error/http'
import { BaseErrorFilter } from './base'

@Catch(UnprocessableEntityError)
export class UnprocessableFilter extends BaseErrorFilter<BadRequestError> {
  constructor() {
    super(HttpStatus.UNPROCESSABLE_ENTITY)
  }

  override log(message: string, err: Error, ctx: Context) {
    ctx.logger.debug(`Unauthorized: ${message}`, err)
  }
}
