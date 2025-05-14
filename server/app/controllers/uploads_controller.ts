import type { HttpContext } from '@adonisjs/core/http'

export default class UploadsController {
  async getOssUploadPolicy(ctx: HttpContext) {
    return true
  }
}
