import type { Context } from '@midwayjs/koa'
import { Catch, HttpStatus } from '@midwayjs/core'
import { BadRequestError } from '@midwayjs/core/dist/error/http'
import { BaseErrorFilter } from './base.filter'

@Catch(BadRequestError)
export class BadRequestFilter extends BaseErrorFilter<BadRequestError> {
  constructor() {
    super(HttpStatus.BAD_REQUEST)
  }

  override log(message: string, err: Error, ctx: Context) {
    ctx.logger.debug(`BAD Request: ${message}`, err)
  }
}
