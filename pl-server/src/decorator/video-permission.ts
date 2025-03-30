import { createCustomMethodDecorator, JoinPoint, MidwayDecoratorService } from '@midwayjs/core'
import { ForbiddenError } from '@midwayjs/core/dist/error/http'
import { Context } from '@midwayjs/koa'
import { VideoService } from '../service/video.service'

// 装饰器内部的唯一 id
export const VIDEO_PERMISSION = 'decorator:VIDEO_PERMISSION'

interface VideoPermissionMetaData {
  videoPermissions: string[]
}

export function VideoPermission(permission: string[]): MethodDecorator {
  const metadata: VideoPermissionMetaData = {
    videoPermissions: permission,
  }
  return createCustomMethodDecorator(VIDEO_PERMISSION, metadata)
}

export function useVideoPermissionDecorator(decoratorService: MidwayDecoratorService) {
  decoratorService.registerMethodHandler(VIDEO_PERMISSION, (options) => {
    return {
      around: async (joinPoint: JoinPoint) => {
      // 拿到Video
        const { videoPermissions } = options.metadata as VideoPermissionMetaData

        const [ctx] = joinPoint.args as [Context]
        const videoService = await ctx.requestContext.getAsync(VideoService)
        const abilities = videoService.buildAbilitiesForUser()
        const can = videoPermissions.some(permission => abilities.can(permission, 'Video'))
        if (!can) {
          ctx.throw(new ForbiddenError())
        }
        const result = await joinPoint.proceed(...joinPoint.args)
        // 返回执行结果
        return result
      },
    }
  })
}
