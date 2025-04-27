import { ApiProperty } from '@midwayjs/swagger'
import { Rule, RuleType } from '@midwayjs/validate'

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
