import {
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('favorite-video', {
  comment: '视频收藏表',
})
export class FavoriteVideo {
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
