import { ApiProperty } from '@midwayjs/swagger'
import { Rule, RuleType } from '@midwayjs/validate'

export class GetUsersDTO {
  @ApiProperty({ description: '用户ID列表', example: '[\"xxxxxxxxxxxxxxxxxx\"]', required: false })
  @Rule(RuleType.array().items(RuleType.string()))
  userIds: string[]
}
