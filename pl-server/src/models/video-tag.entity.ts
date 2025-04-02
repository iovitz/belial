import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { VideoTagDict } from './video-tag-dict.entity'
import { Video } from './video.entity'

@Entity('video_tag', {
  comment: '视频标签表',
})
export class VideoTag {
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
  authorId: string

  @ManyToOne(() => VideoTagDict, ({ videos }) => videos)
  @JoinColumn({ name: 'tag_id' })
  tag: VideoTagDict

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
