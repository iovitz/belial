import type { HttpContext } from '@adonisjs/core/http'

export default class StatusesController {
  getStatus(_ctx: HttpContext) {
    return true
  }

  getTest({ response }: HttpContext) {
    response.cookie('ss', '01JVC01DHJR19CPG5965HHY498', {
      domain: '',
      path: '/',
      maxAge: '30d',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
    })
  }
}
