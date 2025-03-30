import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Video } from './video.entity'

@Entity('history')
export class History {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number

  @OneToOne(() => Video)
  @JoinTable({ name: 'video_id' })
  video: Video

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
