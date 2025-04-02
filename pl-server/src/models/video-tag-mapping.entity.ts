import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { VideoTag } from './video-tag.entity'
import { Video } from './video.entity'

@Entity('video_tag_mapping', {
  comment: '视频和标签的映射表',
})
export class VideoTagMapping {
  @PrimaryColumn({
    name: 'id',
    type: 'varchar',
    length: 30,
    comment: 'ulid',
  })
  id: string

  @ManyToOne(() => Video, ({ tags }) => tags)
  @JoinColumn({ name: 'video_id' })
  video: Video

  @Column({
    name: 'video_id',
    type: 'varchar',
    length: 30,
  })
  videoId: string

  @ManyToOne(() => VideoTag, ({ videos }) => videos)
  tag: VideoTag

  @Column({
    name: 'tag_id',
    type: 'varchar',
    length: 30,
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
