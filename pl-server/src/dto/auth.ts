import { ApiProperty } from '@midwayjs/swagger'
import { Rule, RuleType } from '@midwayjs/validate'
import { CheckCaptchaDTO } from './common'

export class RegisterDTO extends CheckCaptchaDTO {
  @ApiProperty({
    example: 'phone',
    description: '认证类型：github/wechat/phone/email',
  })
  @Rule(RuleType.string().required().max(30).min(1))
  identityType: string

  @ApiProperty({
    examples: ['peter@gmail.com', '13812345678'],
    description: '邮箱、手机号、openid',
  })
  @Rule(RuleType.string().required().max(30).min(6))
  identifier: string

  @ApiProperty({
    example: 'xxxx',
    description: '密码凭证/令牌',
  })
  @Rule(RuleType.string().required().max(16).min(6))
  credential: string

  @ApiProperty({
    example: 'peter',
    description: '用户昵称',
  })
  @Rule(RuleType.string().required().max(10).min(2))
  nickname: string
}

export class LoginDTO extends CheckCaptchaDTO {
  @ApiProperty({
    example: 'phone',
    description: '认证类型：github/wechat/phone/email',
  })
  @Rule(RuleType.string().required().max(30).min(1))
  identityType: string

  @ApiProperty({
    examples: ['peter@gmail.com', '13812345678'],
    description: '邮箱、手机号、openid',
  })
  @Rule(RuleType.string().required().max(30).min(6))
  identifier: string

  @ApiProperty({
    example: 'xxxx',
    description: '密码凭证/令牌',
  })
  @Rule(RuleType.string().required().max(16).min(6))
  credential: string
}

export class LoginSuccessDTO {
  @ApiProperty({
    example: 'u123456789',
    description: '用户的UserID',
  })
  userId: string

  @ApiProperty({
    example: 'http://xxx.com/a.jpg',
    description: '头像地址',
  })
  avatar: string

  @ApiProperty({
    example: 'peter@gmail.com',
    description: '用户的邮箱',
  })
  email: string

  @ApiProperty({
    example: 'peter',
    description: '用户的昵称',
  })
  nickname: string

  @ApiProperty({
    example: '6a4fd79b-07d0-42ac-a3b7-17786ef495d9',
    description: 'UUID V4',
  })
  session: string
}
