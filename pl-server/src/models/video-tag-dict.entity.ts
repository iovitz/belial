import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { VideoTag } from './video-tag.entity'

@Entity('video_tag_dict', {
  comment: '视频标签表',
})
export class VideoTagDict {
  @PrimaryColumn({
    name: 'id',
    type: 'varchar',
    length: 30,
    comment: 'ulid',
  })
  id: string

  @Column({
    name: 'title',
    type: 'varchar',
    length: 50,
  })
  name: string

  @OneToMany(() => VideoTag, ({ tag }) => tag)
  videos: VideoTag

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
