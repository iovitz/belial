import env from '#start/env'
import { getCaptchaValidator } from '#validators/security'
import type { HttpContext } from '@adonisjs/core/http'

export default class SecuritiesController {
  getAesPublicKey = async (_ctx: HttpContext) => {
    return env.get('AES_PUBLIC_KEY')
  }

  async getCaptcha({ request }: HttpContext) {
    const data = request.all()
    const payload = await getCaptchaValidator.validate(data)
    return payload
  }
}
