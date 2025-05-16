import type { HttpContext } from '@adonisjs/core/http'

export default class HomeController {
  getIndex(ctx: HttpContext) {
    ctx.response.header('Content-Type', 'text/html')
    return ctx.view.render('index', {
      title: 'Welcome to AdonisJS',
    })
  }
}
