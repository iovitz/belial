import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { snowflakeIdGenerator } from '../shared/id'
import { VideoTag } from './video-tag.entity'
import { Video } from './video.entity'

@Entity('video_tag_mapping', {
  comment: '视频和标签的映射表',
})
export class VideoTagMapping {
  @PrimaryColumn({
    name: 'id',
    type: 'bigint',
    comment: '雪花ID',
    default: () => snowflakeIdGenerator.generate(),
  })
  id: string

  @ManyToOne(() => Video, ({ tags }) => tags)
  @JoinColumn({ name: 'video_id' })
  video: Video

  @Column({
    name: 'video_id',
    type: 'bigint',
  })
  videoId: string

  @ManyToOne(() => VideoTag, ({ videos }) => videos)
  tag: VideoTag

  @Column({
    name: 'tag_id',
    type: 'bigint',
  })
  tagId: string

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
