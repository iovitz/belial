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

@Entity('watch_history', {
  comment: '视频观看历史',
})
export class WatchHistory {
  @PrimaryColumn({
    name: 'id',
    type: 'bigint',
    comment: '雪花ID',
    default: () => snowflakeIdGenerator.generate(),
  })
  id: string

  @ManyToOne(() => Video)
  @JoinColumn({ name: 'video_id' })
  video: Video

  @Column({
    name: 'video_id',
    type: 'bigint',
  })
  videoId: string

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column({
    name: 'user_id',
    type: 'bigint',
  })
  userId: string

  @Column({
    name: 'played_seconds',
    type: 'int',
  })
  played_seconds: number

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
