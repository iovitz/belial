import { ApiProperty } from '@midwayjs/swagger'

export class CreateGroupDTO {
  @ApiProperty({ description: '分组名称', example: '我的好友' })
  name: string

  @ApiProperty({ description: '用户ID', example: 1 })
  userId: number

  @ApiProperty({ description: '分组描述', example: '特别关注的好友', required: false })
  description?: string
}

export class UpdateGroupDTO {
  @ApiProperty({ description: '分组名称', example: '更新后的分组名', required: false })
  name?: string

  @ApiProperty({ description: '分组描述', example: '更新后的描述', required: false })
  description?: string
}
