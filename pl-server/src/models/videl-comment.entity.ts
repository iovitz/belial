import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from './user.entity'
import { Video } from './video.entity'

@Entity('video-comment', {
  comment: '视频评论',
})
export class VideoComment {
  @PrimaryColumn({
    name: 'id',
    type: 'varchar',
    length: 30,
    comment: 'ulid',
  })
  id: string

  @Column({
    name: 'content',
    type: 'varchar',
    length: 500,
  })
  content: string

  @ManyToOne(() => Video, video => video.comments)
  @JoinColumn({ name: 'video_id' })
  video: Video

  @Column({
    name: 'video_id',
    type: 'varchar',
    length: 30,
  })
  videoId: string

  @ManyToOne(() => User, user => user.comments)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column({
    name: 'user_id',
    type: 'varchar',
    length: 30,
  })
  userId: string

  @ManyToOne(() => VideoComment)
  @JoinColumn({ name: 'reply_id' })
  reply: VideoComment

  @Column({
    name: 'reply_id',
    type: 'varchar',
    length: 30,
  })
  replyId: string

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
