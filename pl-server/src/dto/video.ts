import { ApiProperty } from '@midwayjs/swagger'
import { Rule, RuleType } from '@midwayjs/validate'

// #region Video controller
export class CreateVideoDTO {
  @ApiProperty({
    example: 'video name',
    description: 'video name',
  })
  @Rule(RuleType.string().max(1000).min(0).required())
  name: string

  @ApiProperty({
    example: 'abcd',
    description: '验证码ID',
    maxLength: 30,
    minLength: 30,
  })
  @Rule(RuleType.string().length(30).required())
  categoryId: string

  @ApiProperty({
    example: 'video description',
    description: 'video description',
  })
  @Rule(RuleType.string().max(1000).min(0).required())
  desc: string

  @ApiProperty({
    example: 'abcd',
    description: '验证码ID',
    maxLength: 30,
    minLength: 30,
  })
  @Rule(RuleType.array().max(10).min(0).items(RuleType.string().length(30).required()))
  tags: string[]

  @ApiProperty({
    example: 'video url',
    description: 'video url',
  })
  @Rule(RuleType.string().max(100).min(0).required())
  url: string
}
