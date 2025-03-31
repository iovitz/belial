import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('video-like', {
  comment: '视频点赞',
})
export class VideoLike {
  @PrimaryGeneratedColumn({
    name: 'id',
    comment: '自增主键',
  })
  id: number

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
