import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from './user.entity'
import { Video } from './video.entity'

@Entity('comment')
export class Comment {
  @PrimaryGeneratedColumn({
    name: 'id',
    comment: '自增主键',
  })
  id: number

  @Column({
    name: 'content',
    type: 'varchar',
    length: 500,
  })
  content: string

  @ManyToOne(() => Video, video => video.comments)
  @JoinColumn({ name: 'video_id' })
  video: Video

  @ManyToOne(() => User, user => user.videos)
  @JoinColumn({ name: 'user_id' })
  user: User

  @ManyToOne(() => Comment)
  @JoinColumn({ name: 'reply_id' })
  reply: Comment

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
