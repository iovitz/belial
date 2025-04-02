import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Video } from './video.entity'

@Entity('video_category', {
  comment: '视频分区表',
})
export class VideoCategory {
  @PrimaryColumn({
    name: 'id',
    type: 'varchar',
    length: 30,
    comment: 'ulid',
  })
  id: string

  @Column({
    name: 'title',
    type: 'varchar',
    length: 50,
  })
  name: string

  @OneToMany(() => Video, ({ category }) => category)
  videos: Video

  @Column({
    name: 'status',
    type: 'tinyint',
    default: 0,
    comment: '正常：0，被删除：1，私有：2，被封禁：3',
  })
  status: number

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
