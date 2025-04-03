import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { snowflakeIdGenerator } from '../shared/id'
import { VideoTagMapping } from './video-tag-mapping.entity'

@Entity('video_tag', {
  comment: '视频标签表',
})
export class VideoTag {
  @PrimaryColumn({
    name: 'id',
    type: 'bigint',
    comment: '雪花ID',
    default: () => snowflakeIdGenerator.generator(),
  })
  id: string

  @Column({
    name: 'title',
    type: 'varchar',
    length: 50,
  })
  name: string

  @OneToMany(() => VideoTagMapping, ({ tag }) => tag)
  videos: VideoTagMapping

  @Column({
    name: 'status',
    type: 'tinyint',
    default: 0,
    comment: '正常：0，被删除：1，私有：2，被封禁：3',
  })
  status: number

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
  updatedAt: Date
}
