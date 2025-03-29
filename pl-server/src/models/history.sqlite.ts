import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Video } from './video.sqlite'

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
    name: 'weight',
    type: 'int',
    length: 500,
  })
  weight: number

  @Column({
    name: 'paust_',
    type: 'int',
    length: 500,
  })
  played_seconds: number

  @CreateDateColumn({
    name: 'created_at',
    type: 'date',
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'date',
  })
  updatedAt: Date
}
