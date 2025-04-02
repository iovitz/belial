import { ApiProperty } from '@midwayjs/swagger'
import { Rule, RuleType } from '@midwayjs/validate'

export class GetCaptchaDTO {
  @ApiProperty({
    example: 200,
    description: 'image width',
  })
  @Rule(RuleType.number().max(500).min(0).required())
  width: number

  @ApiProperty({
    example: 50,
    description: 'image height',
  })
  @Rule(RuleType.number().max(500).min(0).required())
  height: number

  @ApiProperty({
    example: 'login',
    description: 'verify code type(login / register)',
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
