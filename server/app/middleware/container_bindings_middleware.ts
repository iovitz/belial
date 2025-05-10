import { Logger } from '@adonisjs/core/logger'
import { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import { TracerService } from '#services/tracer_service'
import { inject } from '@adonisjs/core'

/**
 * The container bindings middleware binds classes to their request
 * specific value using the container resolver.
 *
 * - We bind "HttpContext" class to the "ctx" object
 * - And bind "Logger" class to the "ctx.logger" object
 */
@inject()
export default class ContainerBindingsMiddleware {
  constructor(private tracerService: TracerService) {}

  handle(ctx: HttpContext, next: NextFn) {
    ctx.containerResolver.bindValue(HttpContext, ctx)
    ctx.containerResolver.bindValue(Logger, ctx.logger)
    const tracer = this.tracerService.child(ctx.request.id() ?? '-')
    ctx.containerResolver.bindValue(
      TracerService,
      this.tracerService.child(ctx.request.id() ?? '-')
    )
    ctx.tracer = tracer
    return next()
  }
}

declare module '@adonisjs/core/http' {
  interface HttpContext {
    tracer: TracerService
  }
}
