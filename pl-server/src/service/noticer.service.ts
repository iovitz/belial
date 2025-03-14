import type { ILogger } from '@midwayjs/core'
import type { Application } from '@midwayjs/koa'
import * as process from 'node:process'
import { App, Logger, Provide } from '@midwayjs/core'
import * as superagent from 'superagent'

@Provide()
export class NoticeService {
  @App()
  app: Application

  @Logger()
  logger: ILogger

  error(message: string) {
    return this.notice(`🔴 ${message}`)
  }

  warn(message: string) {
    return this.notice(`🟠 ${message}`)
  }

  success(message: string) {
    return this.notice(`🟢 ${message}`)
  }

  info(message: string) {
    return this.notice(`🔵 ${message}`)
  }

  private async notice(message: string) {
    this.logger.info(message)
    if (this.app.getEnv() !== 'production') {
      return true
    }
    const url = `https://fwalert.com/${this.app.getConfig('secrets.fwalert')}`
    const data = await superagent.post(url).send({
      message: `${new Date().toLocaleTimeString()} - ${
        process.pid
      } : ${message}`,
    })
    if (data.text === '{}') {
      return true
    }
    this.logger.error('消息发送失败，检查FWAlert平台查看原因')
    return false
  }
}
