import { ApiProperty } from '@midwayjs/swagger'
import { Rule, RuleType } from '@midwayjs/validate'

export class CreateGroupDTO {
  @ApiProperty({ description: '分组名称', type: 'string', example: '我的好友' })
  @Rule(RuleType.string().required().max(20).min(1))
  name: string

  @ApiProperty({ description: '分组描述', type: 'string', example: '特别关注的好友', required: false })
  @Rule(RuleType.string().required().max(100).min(1))
  description?: string
}

export class UpdateGroupDTO {
  @ApiProperty({ description: '分组名称', type: 'string', example: '更新后的分组名', required: false })
  @Rule(RuleType.string().required().max(20).min(1))
  name?: string

  @ApiProperty({ description: '分组描述', type: 'string', example: '更新后的描述', required: false })
  @Rule(RuleType.string().required().max(100).min(1))
  description?: string
}
