import { ApiProperty } from '@midwayjs/swagger'
import { Rule, RuleType } from '@midwayjs/validate'

export class IDParamDTO {
  @ApiProperty({
    example: '查询',
    description: '验证码宽度',
  })
  @Rule(RuleType.string().max(18).min(18).required())
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
    example: '835446700675080192',
    description: '验证码ID',
    maxLength: 18,
    minLength: 18,
  })
  @Rule(RuleType.string().length(18).required())
  verifyCodeId: string
}
