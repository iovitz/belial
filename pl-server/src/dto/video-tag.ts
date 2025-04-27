import { ApiProperty } from '@midwayjs/swagger'
import { Rule, RuleType } from '@midwayjs/validate'

export class CreateTagDTO {
  @ApiProperty({
    example: '鬼畜',
    description: 'tag name',
  })
  @Rule(RuleType.string().max(20).min(0).required())
  name: string
}
