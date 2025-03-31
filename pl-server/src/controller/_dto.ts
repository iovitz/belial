import { ApiProperty } from '@midwayjs/swagger'
import { Rule, RuleType } from '@midwayjs/validate'

// #region verify module

export class GetCaptchaDTO {
  @ApiProperty({
    example: 200,
    description: '验证码宽度',
  })
  @Rule(RuleType.number().max(500).min(0).required())
  width: number

  @ApiProperty({
    example: 50,
    description: '验证码高度',
  })
  @Rule(RuleType.number().max(500).min(0).required())
  height: number

  @ApiProperty({
    example: 'login',
    description: '验证码类型',
  })
  @Rule(RuleType.string().max(20).min(1).required())
  type: string

  @ApiProperty({
    example: false,
    description:
      '是否直接返回svg文件数据（默认返回JSON数据，svg数据放在data字段中）',
  })
  @Rule(RuleType.boolean())
  svg: boolean
}

export class CheckCaptchaDTO {
  @ApiProperty({
    example: 'abcd',
    description: '四位验证码',
    maxLength: 4,
    minLength: 4,
  })
  @Rule(RuleType.string().length(4).required())
  verifyCode: string

  @ApiProperty({
    example: 'abcd',
    description: '验证码ID',
    maxLength: 30,
    minLength: 30,
  })
  @Rule(RuleType.string().length(30).required())
  verifyCodeId: string
}

// #region auth controller
export class RegisterDTO extends CheckCaptchaDTO {
  @ApiProperty({
    example: 'Peter',
    description: '昵称',
  })
  @Rule(RuleType.string().required().max(10).min(1))
  nickname: string

  @ApiProperty({
    example: 'peter@gmail.com',
  })
  @Rule(RuleType.string().required().email().max(30).min(6))
  email: string

  @ApiProperty({
    example: '123123',
    description: '账户密码',
  })
  @Rule(RuleType.string().required().max(16).min(6))
  password: string
}

export class LoginDTO extends CheckCaptchaDTO {
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

// #region Github controller
export class GetCommitListDTO {
  @ApiProperty({
    examples: ['repo-owner'],
    description: '仓库Owner',
  })
  @Rule(RuleType.string().required().max(30).min(1))
  owner: string

  @ApiProperty({
    examples: ['repo-name'],
    description: '仓库名称',
  })
  @Rule(RuleType.string().required().max(30).min(1))
  repo: string

  @ApiProperty({
    example: 1,
    description: '分页拉去的页数',
    default: 1,
  })
  @Rule(RuleType.number().required().min(0))
  page: number

  @ApiProperty({
    example: 30,
    description: '每页数据条数',
    default: 30,
  })
  @Rule(RuleType.number().required().max(500).min(0))
  per_page: number
}
// #endregion
