import type { ILogger, IMiddleware } from '@midwayjs/core'
import type { Application, Context, NextFunction } from '@midwayjs/koa'
import type { Repository } from 'typeorm'
import { App, Middleware } from '@midwayjs/core'
import { InjectEntityModel } from '@midwayjs/typeorm'
import { Session } from '../models/session.sqlite'

type PromiseKey = 'GET_USER_BY_SESSION'

export class PromiseManager {
  private promises = new Map<string, Promise<any>>()

  constructor(private logger: ILogger) {}

  wait(keys: PromiseKey[]) {
    return Promise.all(keys.map(k => this.get(k)))
  }

  set(key: PromiseKey, promise: Promise<unknown>) {
    if (this.promises.has(key)) {
      this.logger.error('multy promise key', { key })
    }
    this.promises.set(
      key,
      promise.catch((e) => {
        e.PROMISE_KEY = key
        throw e
      }),
    )
  }

  get<T = any>(key: PromiseKey) {
    return this.promises.get(key) as Promise<T>
  }
}

@Middleware()
export class PromiseManagerMiddleware
implements IMiddleware<Context, NextFunction> {
  @App()
  app: Application

  @InjectEntityModel(Session)
  private sessionModel: Repository<Session>

  resolve() {
    return async (ctx: Context, next: NextFunction) => {
      // 预热一些Promise
      const promiseManager = new PromiseManager(ctx.logger)
      ctx.promiseManager = promiseManager

      // 有登录态，拉取session对应的信息
      const sessionId = ctx.cookies.get('session-id')
      if (sessionId) {
        promiseManager.set(
          'GET_USER_BY_SESSION',
          this.sessionModel
            .findOne({
              where: {
                sessionId,
              },
            })
            .then((v) => {
              // 挂载到ctx上
              ctx.userId = v.user.userId
            }),
        )
      }

      // ...

      return next()
    }
  }
}
