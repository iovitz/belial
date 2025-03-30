import { createCustomMethodDecorator } from '@midwayjs/core'

// 装饰器内部的唯一 id
export const LOGIN_REQUIRED = 'decorator:LOGIN_REQUIRED'

export function LoginRequired(): MethodDecorator {
  console.error(2)
  return createCustomMethodDecorator(LOGIN_REQUIRED, { })
}
