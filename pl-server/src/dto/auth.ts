import { ApiProperty } from '@midwayjs/swagger'
import { Rule, RuleType } from '@midwayjs/validate'
import { CheckCaptchaDTO } from './common'
import * as crypto from 'node:crypto'
import { appConfig } from '../config/rc-config'
import { Buffer } from 'node:buffer'

export class LoginDTO extends CheckCaptchaDTO {
  @ApiProperty({
    example: 'email',
    description: '认证类型：github/wechat/phone/email',
  })
  @Rule(RuleType.string().required().max(30).min(1))
  identityType: string

  @ApiProperty({
    example: 'pl@qq.com',
    description: '邮箱、手机号、openid',
  })
  @Rule(RuleType.string().required().max(30).min(6))
  identifier: string

  @ApiProperty({
    example: 'CJmxGgz85vVW1OWGUliAUWtJQQ7hHiQf0m5PuZY6N5uiI3Oa2LmIwbfVxFRFQQqfVXQQDy/6AUQPuwXrZ5iRwhTekL/XG+xVrq+OvSNUiC/QtTjwsMj5LSlB0qM9nRwi8ehZo2+VTeBdvZsO24cIgwYfM7dpTxrEw0KSP369yxn5rMO3Qd3J+2PT5WP0IlFsSOCB8Pnb1x2xC+5J9BiAFehGv1370XKZW9+LcEAQY1pjPD7ZQkVNwA6JcB+jdOrJGPTZLATmEfRmz+Fv+ct+WYzr9htsVdfO94BdCeEM3ZoMTRWmj6tqsrq2RDV9dsiE8THxJPiZlpiQdYDvU7FT8w==',
    description: '密码凭证/令牌',
  })
  @Rule(RuleType.string().custom((v: string) => {
    const res = crypto.privateDecrypt(
      {
        key: appConfig.AES_PRIVATE_KEY, // PEM 格式字符串
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      },
      Buffer.from(v, 'base64'), // 假设密文是 Base64
    ).toString()
    return res
  }).required().max(16).min(6))
  credential: string
}

export class RegisterDTO extends LoginDTO {
  @ApiProperty({
    example: 'peter',
    description: '用户昵称',
  })
  @Rule(RuleType.string().required().max(10).min(2))
  nickname: string
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
