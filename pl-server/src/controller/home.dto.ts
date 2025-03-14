import { ApiProperty } from '@midwayjs/swagger'

export class GetStatusResponseDTO {
  @ApiProperty({
    description: '服务器的问候',
    default: 'Hey Bro.',
  })
  message: string

  @ApiProperty({
    default: true,
    description: '服务运行状态',
  })
  running: boolean
}
