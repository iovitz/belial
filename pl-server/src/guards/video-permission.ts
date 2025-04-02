import { getPropertyMetadata, Guard, IGuard, Inject } from '@midwayjs/core'
import { NotFoundError } from '@midwayjs/core/dist/error/http'
import { Context } from '@midwayjs/koa'
import { get } from 'lodash'
import { VIDEO_ACCESS } from '../decorator/video-permission'
import type { Video } from '../models/video.entity'
import { VideoService } from '../service/video'

@Guard()
export class VideoPermissionGuard implements IGuard<Context> {
  @Inject()
  videoService: VideoService

  async canActivate(ctx: Context, supplierClz, methodName: string): Promise<boolean> {
    const videoId = get(ctx.params, 'id')

    const videoPermission: string[] = getPropertyMetadata(VIDEO_ACCESS, supplierClz, methodName)
    const userAbilities = this.videoService.buildAbilitiesForUser()
    // Get Video From DB
    let video: null | Video
    if (videoId) {
      video = await this.videoService.findOneBy({
        id: videoId,
      })
      if (!video) {
        ctx.throw(new NotFoundError('The video does not exists or has ben deleted!'))
      }
      ctx.video = video
    }
    const isDenied = videoPermission.some(permission => !userAbilities.can(permission, video))
    return isDenied
  }
}
