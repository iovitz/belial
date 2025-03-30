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
  })
  weight: number

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
