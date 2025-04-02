import { Inject, Provide, Scope, ScopeEnum } from '@midwayjs/core'
import { CaslService } from './casl'
import { Context } from '@midwayjs/koa'
import { CrudService } from './crud'
import { Video } from '../models/video.entity'
import { InjectEntityModel } from '@midwayjs/typeorm'
import { Repository } from 'typeorm'

@Provide()
@Scope(ScopeEnum.Request, { allowDowngrade: true })
export class VideoService extends CrudService<Video> {
  @InjectEntityModel(Video)
  entity: Repository<Video>

  @Inject()
  caslService: CaslService

  @Inject()
  ctx: Context

  buildAbilitiesForUser() {
    const { user } = this.ctx
    return this.caslService.buildAbilitiesFor('Video', [
      {
        action: 'read',
        conditions: {
          isPrivate: false,
        },
      },
      user
        ? {
            action: 'create',
          }
        : null,
      {
        action: ['update', 'delete'],
        conditions: {
          authorId: user?.id,
        },
      },
    ])
  }
}
