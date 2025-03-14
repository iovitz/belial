import { Catch, HttpStatus } from '@midwayjs/core'
import { BaseErrorFilter } from './base.filter'

@Catch()
export class DefaultErrorFilter extends BaseErrorFilter<Error> {
  constructor() {
    super(HttpStatus.INTERNAL_SERVER_ERROR)
  }
}
