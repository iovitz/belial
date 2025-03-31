import { Inject, Provide } from '@midwayjs/core'
import { CaslService } from './casl'
import { Context } from '@midwayjs/koa'
import { CrudService } from './crud'
import { Video } from '../models/video.entity'
import { InjectEntityModel } from '@midwayjs/typeorm'
import { Repository } from 'typeorm'

@Provide()
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
