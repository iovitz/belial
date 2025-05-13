import type { HttpContext } from '@adonisjs/core/http'
import { SecurityService } from '#services/security_service'
import env from '#start/env'
import { getCaptchaValidator } from '#validators/security'
import { inject } from '@adonisjs/core'

@inject()
export default class SecurityController {
  constructor(private securityService: SecurityService) {}
  getAesPublicKey = async (_ctx: HttpContext) => {
    return { publicKey: env.get('AES_PUBLIC_KEY') }
  }

  async getCaptcha({ request }: HttpContext) {
    const payload = await getCaptchaValidator.validate(request.all())
    const data = this.securityService.getVerifyCode(payload.type, payload.width, payload.height, 4)
    return data
  }
}
