import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from './user.entity'
import { Video } from './video.entity'

@Entity('watch-history', {
  comment: '视频观看历史',
})
export class WatchHistory {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number

  @ManyToOne(() => Video)
  @JoinTable({ name: 'video_id' })
  video: Video

  @ManyToOne(() => User)
  @JoinTable({ name: 'user_id' })
  user: User

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
