import { AuthService } from '#services/auth_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import createHttpError from 'http-errors'

@inject()
export default class AuthMiddleware {
  constructor(private authService: AuthService) {}
  async handle(ctx: HttpContext, next: NextFn) {
    const sessionId = ctx.request.cookie('ss')
    if (!sessionId) {
      throw createHttpError[401]()
    }
    const session = await this.authService.getSessionById(sessionId)
    if (!session) {
      throw createHttpError[401]()
    }

    ctx.userId = session.userId

    const output = await next()
    return output
  }
}

declare module '@adonisjs/core/http' {
  interface HttpContext {
    userId: string
  }
}
