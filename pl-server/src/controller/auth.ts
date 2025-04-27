import { Body, Controller, Inject, Post } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'
import { Context } from '@midwayjs/koa'
import { AuthService } from '../service/auth'
import { LoginDTO, RegisterDTO } from '../dto/auth'
import { ConflictError, UnauthorizedError, UnprocessableEntityError } from '@midwayjs/core/dist/error/http'
import { EncryptService } from '../service/encrypt'
import { CookieKeys } from '../shared/constans/cookie.const'

@ApiTags('Auth Module')
@Controller('/api/auth')
export class APIController {
  @Inject()
  private ctx: Context

  @Inject()
  private auth: AuthService

  @Inject()
  private encrypt: EncryptService

  @Post('/register')
  async register(@Body() { identifier, credential: _credential, identityType, nickname }: RegisterDTO) {
    // 验证码校验

    // 查询是否已经注册
    const identifierItem = await this.auth.findOneBy({
      identifier,
      identityType,
    })
    if (identifierItem) {
      this.ctx.throw(new ConflictError('identifier is already exist'))
    }

    let credential: string
    switch (identityType) {
      case 'email':
        this.ctx.logger.info('使用邮箱注册')
        credential = await this.encrypt.bcryptEncode(_credential)
        break
      default:
        this.ctx.throw(new UnprocessableEntityError(''))
    }

    await this.auth.createUser(
      identifier,
      credential,
      identityType,
      nickname,
    )
    return true
  }

  @Post('/user-token')
  async getUserToken(@Body() { identifier, credential, identityType }: LoginDTO) {
    const identifierItem = await this.auth.findOneBy({
      identifier,
      identityType,
    })
    if (!identifierItem) {
      this.ctx.throw(new UnauthorizedError('identifier match fail'))
    }
    switch (identityType) {
      case 'email':
        if (!await this.encrypt.bcryptCompare(credential, identifierItem.credential)) {
          this.ctx.throw(new UnprocessableEntityError('identifier match fail'))
        }
        break
      default:
        this.ctx.throw(new UnprocessableEntityError(''))
    }
    // 创建session
    const sessionId = await this.auth.createSession(identifierItem.userId, this.ctx.header['user-agent'])
    this.ctx.logger.info(`Login Success: ${identifierItem.userId} ${sessionId}`)
    this.ctx.setCookie(CookieKeys.Session, sessionId)
    return true
  }
}
