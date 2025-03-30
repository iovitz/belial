import { Inject, Provide } from '@midwayjs/core'
import { CaslService } from './casl.service'
import { Context } from '@midwayjs/koa'

@Provide()
export class VideoService {
  @Inject()
  caslService: CaslService

  @Inject()
  ctx: Context

  buildAbilitiesForUser() {
    const { user } = this.ctx
    return this.caslService.buildAbilitiesFor('Video', [
      user
        ? {
            action: 'create',
          }
        : null,
      {
        action: 'read',
        conditions: {
          isPrivate: false,
        },
      },
      {
        action: ['update', 'delete'],
        conditions: {
          author: user?.id,
        },
      },
    ])
  }
}
