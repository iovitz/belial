import { ApiProperty } from '@midwayjs/swagger'
import { Rule, RuleType } from '@midwayjs/validate'

export class RegisterDTO {
  @ApiProperty({
    example: 'Peter',
    description: '昵称',
  })
  @Rule(RuleType.string().required().max(10).min(1))
  nickname: string

  @ApiProperty({
    example: 'peter@gmail.com',
  })
  @Rule(RuleType.string().email().required().max(30).min(6))
  email: string

  @ApiProperty({
    example: '123123',
    description: '账户密码',
  })
  @Rule(RuleType.string().required().max(16).min(6))
  password: string

  @ApiProperty({
    example: 'abcd',
    description: '四位验证码',
    examples: ['1234', '4312'],
  })
  @Rule(RuleType.string().length(4))
  code: string
}

export class LoginDTO {
  @ApiProperty({
    example: 'peter@gmail.com',
    description: '邮箱',
  })
  @Rule(RuleType.string().email().required().max(30).min(6))
  email: string

  @ApiProperty({
    example: '123123',
    description: '账户密码',
  })
  @Rule(RuleType.string().required().max(16).min(6))
  password: string

  @ApiProperty({
    example: 'abcd',
    description: '四位验证码',
  })
  @Rule(RuleType.string().length(4))
  code: string
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
