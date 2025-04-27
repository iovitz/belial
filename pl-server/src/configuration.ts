import {
  App,
  Configuration,
  ILifeCycle,
  ILogger,
  IMidwayContainer,
  Inject,
  Logger,
  MidwayDecoratorService,
} from '@midwayjs/core'
import { join } from 'node:path'
import * as process from 'node:process'
import * as info from '@midwayjs/info'
import * as koa from '@midwayjs/koa'
import * as socketio from '@midwayjs/socketio'
import * as staticFile from '@midwayjs/static-file'
import * as swagger from '@midwayjs/swagger'
import * as typeorm from '@midwayjs/typeorm'
import * as validate from '@midwayjs/validate'
import * as view from '@midwayjs/view-ejs'
import { BadRequestFilter } from './filter/badrequest'
import { DefaultErrorFilter } from './filter/default'
import { NotFoundFilter } from './filter/notfound'
import { GatewayTimeoutFilter } from './filter/timeout'
import { FormatMiddleware } from './middleware/format'
import { PromiseManagerMiddleware } from './middleware/promise-manager'
import { TagsMiddleware } from './middleware/tags'
import { TracerMiddleware } from './middleware/tracer'
import { UtilsMiddlware } from './middleware/utils'
import { NoticeService } from './service/noticer'
import { useLoginRequiredDecorator } from './decorator/login-required'
import { ValidationErrorFilter } from './filter/validation'
import { ForbiddenFilter } from './filter/forbidden'
import { UnauthorizedFilter } from './filter/unauthorized'
import { UnprocessableFilter } from './filter/unprocessable'
import { MaskingMiddleware } from './middleware/masking'

@Configuration({
  imports: [
    koa,
    typeorm,
    staticFile,
    validate,
    view,
    socketio,
    {
      component: swagger,
      enabledEnvironment: ['local'],
    },
    {
      component: info,
      enabledEnvironment: ['local'],
    },
  ],
  importConfigs: [join(__dirname, './config')],
})
export class MainConfiguration implements ILifeCycle {
  @App('koa')
  app: koa.Application

  @Logger()
  logger: ILogger

  @Inject()
  decoratorService: MidwayDecoratorService

  private noticer: NoticeService

  async onReady() {
    // #region middlewares
    this.app.useMiddleware([
      // 工具类的优先注入
      UtilsMiddlware,
      TracerMiddleware,
      TagsMiddleware,
      PromiseManagerMiddleware,
      FormatMiddleware,
      MaskingMiddleware,
      // 统计Controller的耗时的，需要放在最后
    ])
    // #endregion

    // #region filters
    this.app.useFilter([
      BadRequestFilter,
      GatewayTimeoutFilter,
      ValidationErrorFilter,
      ForbiddenFilter,
      NotFoundFilter,
      DefaultErrorFilter,
      UnauthorizedFilter,
      UnprocessableFilter,
    ])
    // #endregion

    // #region decorators
    useLoginRequiredDecorator(this.decoratorService)
    // #endregion
  }

  async onServerReady(
    container: IMidwayContainer,
    app: koa.Application,
  ): Promise<void> {
    const env = this.app.getEnv()
    const port = this.app.getConfig('koa.port')

    const noticer = await app.getApplicationContext().getAsync(NoticeService)
    this.noticer = noticer

    if (this.app.getEnv() === 'production') {
      this.logger.info(
        `[bootstrap]Server Running Success[${env}]: http://localhost:${port}`,
      )
      this.logger.info(
        '[bootstrap]: App Running Environment',
        JSON.stringify(this.app.getConfig()),
      )
      // 线上环境打印环境变量
      noticer.success('服务启动成功')
    }
    else {
      // 本地开发时，打印Swagger地址
      this.logger.info(
        `[bootstrap]Swagger Running In: http://localhost:${port}/swagger-ui/index.html`,
      )
    }

    process.send?.('ready')
  }

  async onStop(): Promise<void> {
    this.noticer.warn('Server Exits')
  }
}
