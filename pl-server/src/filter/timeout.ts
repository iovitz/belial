import type { Context } from '@midwayjs/koa'
import { Catch, HttpStatus } from '@midwayjs/core'
import { GatewayTimeoutError } from '@midwayjs/core/dist/error/http'
import { BaseErrorFilter } from './base'

@Catch(GatewayTimeoutError)
export class GatewayTimeoutFilter extends BaseErrorFilter<GatewayTimeoutError> {
  constructor() {
    super(HttpStatus.GATEWAY_TIMEOUT)
  }

  override log(message: string, err: Error, ctx: Context) {
    ctx.logger.error(`Gateway Timeout: ${message}`, err)
  }
}
