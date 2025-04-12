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
import { User } from './user.entity'
import { Video } from './video.entity'

@Entity('video_comment', {
  comment: '视频评论',
})
export class VideoComment {
  @PrimaryColumn({
    name: 'id',
    type: 'bigint',
    comment: '雪花ID',
    default: () => snowflakeIdGenerator.generator(),
  })
  id: string

  @Column({
    name: 'content',
    type: 'varchar',
    length: 500,
  })
  content: string

  @ManyToOne(() => Video, ({ comments }) => comments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'video_id' })
  video: Video

  @Column({
    name: 'video_id',
    type: 'bigint',
  })
  videoId: string

  @ManyToOne(() => User, ({ comments }) => comments, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column({
    name: 'user_id',
    type: 'bigint',
  })
  userId: string

  @ManyToOne(() => VideoComment, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'reply_id' })
  reply: VideoComment

  @Column({
    name: 'reply_id',
    type: 'bigint',
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
