import { createCustomMethodDecorator, JoinPoint, MidwayDecoratorService } from '@midwayjs/core'
import { UnauthorizedError } from '@midwayjs/core/dist/error/http'
import { Context } from '@midwayjs/koa'

// 装饰器内部的唯一 id
export const LOGIN_REQUIRED = 'decorator:LOGIN_REQUIRED'

export function LoginRequired(): MethodDecorator {
  return createCustomMethodDecorator(LOGIN_REQUIRED, {})
}

export function useLoginRequiredDecorator(decoratorService: MidwayDecoratorService) {
  decoratorService.registerMethodHandler(LOGIN_REQUIRED, () => {
    return {
      around: async (joinPoint: JoinPoint) => {
        // 拿到Video

        const [ctx] = joinPoint.args as [Context]
        if (!ctx.user) {
          throw new UnauthorizedError()
        }

        return await joinPoint.proceed(...joinPoint.args)
      },
    }
  })
}
