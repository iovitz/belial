import { Body, Controller, Get, Inject, Post } from '@midwayjs/core'
import { ApiTags } from '@midwayjs/swagger'
import { Context } from '@midwayjs/koa'
import { AuthService } from '../service/auth'
import { LoginDTO, RegisterDTO } from '../dto/auth'
import { ConflictError, UnauthorizedError, UnprocessableEntityError } from '@midwayjs/core/dist/error/http'
import { EncryptService } from '../service/encrypt'

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
    const identifierItem = await this.auth.findOneBy({
      identifier,
      identityType,
    })
    if (identifierItem) {
      this.ctx.throw(new ConflictError('identifier is already exist'))
    }
    let credential: string
    try {
      credential = this.encrypt.aesPrivateDecrypt(_credential).toString()
    }
    catch (error) {
      this.ctx.logger.error('decrypt data fail', error)
      this.ctx.throw(new UnprocessableEntityError('decrypt credential fail'))
    }

    switch (identityType) {
      case 'password':
        // const password = this.encrypt.aesPublicDecrypt(credential)
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

  @Get('/user-token')
  async getUserToken(@Body() { identifier, credential, identityType }: LoginDTO) {
    const identifierItem = await this.auth.findOneBy({
      identifier,
      identityType,
    })
    if (!identifierItem) {
      this.ctx.throw(new UnauthorizedError('identifier match fail'))
    }
    switch (identityType) {
      case 'password':
        if (identifierItem.credential === credential) {
          this.ctx.throw(new UnprocessableEntityError('identifier match fail'))
        }
        break
      default:
        this.ctx.throw(new UnprocessableEntityError(''))
    }

    // create session
    return this.ctx.session.user
  }
}
