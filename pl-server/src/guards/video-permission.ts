import { getPropertyMetadata, Guard, IGuard } from '@midwayjs/core'
import { Context } from '@midwayjs/koa'
import { VIDEO_ACCESS } from '../decorator/video-permission'
import { VideoService } from '../service/video'

@Guard()
export class VideoPermissionGuard implements IGuard<Context> {
  async canActivate(context: Context, supplierClz, methodName: string): Promise<boolean> {
    // ...
    const videoPermission: string[] = getPropertyMetadata(VIDEO_ACCESS, supplierClz, methodName)
    const videoService = await context.requestContext.getAsync(VideoService)
    const userAbilities = videoService.buildAbilitiesForUser()
    // Get Video From DB
    const video = {}
    const isDenied = videoPermission.some(permission => !userAbilities.can(permission, video))
    return isDenied
  }
}
