import AppEnv from '#start/env'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'
import { STS } from 'ali-oss'

@inject()
export class AlicloudService {
  constructor(private ctx: HttpContext) {}
  // Your code here
  private _stsClient: STS | null = null

  get stsClient() {
    if (!this.stsClient) {
      this._stsClient = new STS({
        // 替换为主账号或RAM用户的AccessKey信息
        accessKeyId: AppEnv.get('ALI_CLOUD_ACCESS_KEY_ID'),
        accessKeySecret: AppEnv.get('ALI_CLOUD_ACCESS_KEY_SECRET'),
      })
    }

    return this._stsClient!
  }

  async generateStsToken() {
    try {
      const result = await this.stsClient.assumeRole(
        AppEnv.get('ALI_CLOUD_ARN'), // 角色ARN
        '', // Policy（可选，用于限制权限）
        3600, // Token有效期（单位：秒，最大3600秒）
        'session-name', // 自定义会话名称
      )

      // 提取临时访问凭证
      const credentials = result.credentials
      return {
        AccessKeyId: credentials.AccessKeyId,
        AccessKeySecret: credentials.AccessKeySecret,
        SecurityToken: credentials.SecurityToken,
        Expiration: credentials.Expiration, // 凭证过期时间
      }
    }
    catch (err) {
      this.ctx.logger.warn('生成STS临时访问凭证失败:', err)
      throw err
    }
  }
}
