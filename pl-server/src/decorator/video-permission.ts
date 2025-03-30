import { createCustomMethodDecorator } from '@midwayjs/core'

// 装饰器内部的唯一 id
export const VIDEO_PERMISSION = 'decorator:VIDEO_PERMISSION'

export function VideoPermission(permission = 'read'): MethodDecorator {
  console.error(1)
  return createCustomMethodDecorator(VIDEO_PERMISSION, { permission })
}
