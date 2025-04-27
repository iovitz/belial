import {
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('favorite_video', {
  comment: '视频收藏表',
})
export class FavoriteVideo {
  @PrimaryColumn({
    name: 'id',
    type: 'bigint',
    comment: '雪花ID',
  })
  id: string

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
