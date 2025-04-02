import { createCustomMethodDecorator, savePropertyMetadata } from '@midwayjs/core'

// 装饰器内部的唯一 id
export const VIDEO_ACCESS = 'decorator:VIDEO_ACCESS'

export function VideoPermission(permission: string | string[]): MethodDecorator {
  const midwayDecorator = createCustomMethodDecorator(VIDEO_ACCESS, {}, false)
  return (target, property, descriptor) => {
    const metadata = typeof permission === 'string' ? [permission] : permission
    savePropertyMetadata(VIDEO_ACCESS, metadata, target, property)
    return midwayDecorator(target, property, descriptor)
  }
}
