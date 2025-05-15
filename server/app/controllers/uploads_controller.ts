import type { HttpContext } from '@adonisjs/core/http'

export default class UploadsController {
  async getOssUploadPolicy(_ctx: HttpContext) {
    return true
  }
}
