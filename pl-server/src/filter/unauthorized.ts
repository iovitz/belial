import type { Context } from '@midwayjs/koa'
import { Catch, HttpStatus } from '@midwayjs/core'
import { BadRequestError, UnauthorizedError } from '@midwayjs/core/dist/error/http'
import { BaseErrorFilter } from './base'

@Catch(UnauthorizedError)
export class UnauthorizedFilter extends BaseErrorFilter<BadRequestError> {
  constructor() {
    super(HttpStatus.UNAUTHORIZED)
  }

  override log(message: string, err: Error, ctx: Context) {
    ctx.logger.debug(`Unauthorized: ${message}`, err)
  }
}
