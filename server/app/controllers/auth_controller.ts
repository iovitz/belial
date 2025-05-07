import Auth from '#models/auth'
import { AuthService } from '#services/auth_service'
import { EncryptService } from '#services/encrypt_service'
import { loginValidator, registerValidator } from '#validators/auth'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import createHttpError from 'http-errors'

@inject()
export default class AuthController {
  constructor(
    private encryptService: EncryptService,
    private authService: AuthService
  ) {}
  async register({ request, logger }: HttpContext) {
    const body = await registerValidator.validate(request.body())
    const { identifier, credential: bodyCredential, identityType, nickname } = body
    // 验证码校验

    // 查询是否已经注册
    const identifierItem = await Auth.find({
      identifier,
      identityType,
    })
    if (identifierItem) {
      throw createHttpError(422, 'identifier already exist')
    }

    let credential: string
    switch (identityType) {
      case 'email':
        logger.info('使用邮箱注册')
        credential = await this.encryptService.bcryptEncode(bodyCredential)
        break
      default:
        throw createHttpError(422, 'identityType not support')
    }

    await this.authService.createUser(identifier, credential!, identityType, nickname)
    return true
  }

  async login({ request, response, logger }: HttpContext) {
    const body = await loginValidator.validate(request.body())
    const { identifier, credential, identityType } = body
    const identifierItem = await Auth.find({
      identifier,
      identityType,
    })
    if (!identifierItem) {
      throw createHttpError(401, 'identifier match fail')
    }
    switch (identityType) {
      case 'email':
        if (!(await this.encryptService.bcryptCompare(credential, identifierItem.credential))) {
          throw createHttpError(401, 'identifier match fail')
        }
        break
      default:
        throw createHttpError(422, 'identityType not support')
    }
    // 创建session
    const sessionId = await this.authService.createSession(
      identifierItem.userId,
      request.header('user-agent') ?? ''
    )
    logger.info(`Login Success: ${identifierItem.userId} ${sessionId}`)
    response.cookie('ss-id', sessionId)
    return true
  }
}
