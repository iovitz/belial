import { Context } from '@midwayjs/koa'
import { AuthService } from '../service/auth.service'
import { EncryptService } from '../service/encrypt.service'
import { UserService } from '../service/user.service'
import { VerifyService } from '../service/verify.service'
import { LoginDTO, LoginSuccessDTO, RegisterDTO } from './auth.dto'
import { Body, Controller, Inject, Post } from '@midwayjs/core'
import { BadRequestError, ForbiddenError } from '@midwayjs/core/dist/error/http'
import { ApiOperation, ApiResponse, ApiTags } from '@midwayjs/swagger'

@ApiTags('Auth Module')
@Controller('/api/auth')
export class APIController {
  @Inject()
  private ctx: Context

  @Inject()
  private auth: AuthService

  @Inject()
  private user: UserService

  @Inject()
  private encrypt: EncryptService

  @Inject()
  private verify: VerifyService

  @Post('/register')
  @ApiOperation({
    description: '用户注册',
  })
  @ApiResponse({
    status: 200,
    description: '注册成功的用户信息',
    type: LoginSuccessDTO,
  })
  async register(@Body() body: RegisterDTO) {
    // 校验验证码
    const isVerifyCodeRight = await this.verify.checkVerifyCode(
      'register',
      body.verifyCodeId,
      body.verifyCode,
    )

    if (!isVerifyCodeRight) {
      return this.ctx.throw(new ForbiddenError('验证码错误'))
    }

    // 邮箱是否已经存在
    const existsEmailUser = await this.auth.findUserBy({ email: body.email.toLowerCase() }, { email: true })

    if (existsEmailUser) {
      return this.ctx.throw(new ForbiddenError('邮箱已存在'))
    }

    // 创建用户
    const user = await this.auth.createUser(body.email.toLowerCase(), body.password)

    // 创建Session
    const session = await this.auth.createSession(
      user,
      this.ctx.request.header['user-agent'],
    )
    // 写入Cookie
    this.ctx.set('session-id', session)

    return {
      userId: user.id,
      avatar: user.avatar,
      nickname: user.nickname,
      email: body.email,
      session,
    }
  }

  @Post('/login')
  @ApiOperation({
    description: '登录接口',
  })
  @ApiResponse({
    status: 200,
    description: '登录成功的用户信息',
    type: LoginSuccessDTO,
  })
  async login(@Body() body: LoginDTO) {
    // 校验验证码
    // 本地开发环境时，允许跳过验证码逻辑（有点入侵）
    const isVerifyCodeRight = this.verify.checkVerifyCode(
      'login',
      body.verifyCodeId,
      body.verifyCode,
    )

    if (!isVerifyCodeRight) {
      throw new BadRequestError('请求错误')
    }

    const existsUser = await this.auth.findUserBy(
      { email: body.email },
      {
        id: true,
        password: true,
      },
    )

    // 登录
    if (
      !existsUser
      || !this.encrypt.md5Match(body.password, existsUser.password)
    ) {
      throw new BadRequestError('密码错误')
    }

    const [userProfile, session] = await Promise.all([
      // Get User Profile
      this.user.getUserProfileBy(
        {
          id: existsUser.id,
        },
        {
          id: true,
          nickname: true,
          avatar: true,
        },
      ),
      // Crate Session ID
      this.auth.createSession(
        existsUser,
        this.ctx.request.header['user-agent'],
      ),
    ])

    // 写入Cookie
    this.ctx.set('session-id', session)

    return {
      userId: userProfile.id,
      avatar: userProfile.avatar,
      nickname: userProfile.nickname,
      email: body.email,
      session,
    }
  }
}
