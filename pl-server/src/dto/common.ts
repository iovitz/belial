import { ApiProperty } from '@midwayjs/swagger'
import { Rule, RuleType } from '@midwayjs/validate'

export class IDParamDTO {
  @ApiProperty({
    example: '查询',
    description: '验证码宽度',
  })
  @Rule(RuleType.string().max(30).min(0).required())
  id: string
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
