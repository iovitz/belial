import { ApiProperty } from '@midwayjs/swagger'
import { Rule, RuleType } from '@midwayjs/validate'

export class GetVerifyCodeDTO {
  @ApiProperty({
    example: 200,
    description: '验证码宽度',
  })
  @Rule(RuleType.number().required().max(500).min(0))
  width: number

  @ApiProperty({
    example: 50,
    description: '验证码高度',
  })
  @Rule(RuleType.number().required().max(500).min(0))
  height: number

  @ApiProperty({
    example: 'login',
    description: '验证码类型',
  })
  @Rule(RuleType.string().required().max(20).min(1))
  type: string

  @ApiProperty({
    example: false,
    description:
      '是否直接返回svg文件数据（默认返回JSON数据，svg数据放在data字段中）',
  })
  @Rule(RuleType.boolean())
  svg: boolean
}
