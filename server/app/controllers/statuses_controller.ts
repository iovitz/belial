import type { HttpContext } from '@adonisjs/core/http'

export default class StatusesController {
  getStatus(_ctx: HttpContext) {
    return true
  }

  getTest({ response }: HttpContext) {
    response.cookie('ss', '01JVBXAA970Z2K32GDZ8Y9H6YR', {
      domain: '',
      path: '/',
      maxAge: '30d',
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
    })
  }
}
