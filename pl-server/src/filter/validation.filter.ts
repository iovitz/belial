import type { Context } from '@midwayjs/koa'
import { Catch, HttpStatus } from '@midwayjs/core'
import { MidwayValidationError } from '@midwayjs/validate'
import { BaseErrorFilter } from './base.filter'

@Catch(MidwayValidationError)
export class ValidationErrorFilter extends BaseErrorFilter<MidwayValidationError> {
  constructor() {
    super(HttpStatus.UNPROCESSABLE_ENTITY)
  }

  override log(message: string, err: MidwayValidationError, ctx: Context) {
    ctx.logger.info(`validation error: ${message}`, err.message)
  }

  protected override getMessageerr(err: MidwayValidationError): string {
    return err.message
  }
}
