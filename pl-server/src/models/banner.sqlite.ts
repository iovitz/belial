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

@Entity('banner')
export class Banner {
  @PrimaryGeneratedColumn({
    name: 'id',
    comment: '自增主键',
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
