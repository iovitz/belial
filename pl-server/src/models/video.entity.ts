import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from './user.entity'
import { VideoComment } from './video-comment.entity'
import { VideoCategory } from './video-category.entity'
import { VideoTagMapping } from './video-tag-mapping.entity'

@Entity('video', {
  comment: '视频表',
})
export class Video {
  @PrimaryColumn({
    name: 'id',
    type: 'bigint',
    comment: '雪花ID',
  })
  id: string

  @Column({
    name: 'title',
    type: 'varchar',
    length: 50,
  })
  title: string

  @Column({
    name: 'cover',
    type: 'varchar',
    length: 50,
  })
  cover: string

  @Column({
    name: 'duration',
    type: 'int',
  })
  duration: number

  @Column({
    name: 'play_count',
    type: 'int',
  })
  playCount: number

  @Column({
    name: 'barrage_count',
    type: 'int',
  })
  barrageCount: number

  @Column({
    name: 'status',
    type: 'tinyint',
    default: 0,
    comment: '正常：0，被删除：1，私有化：2，被封禁：3',
  })
  status: number

  @OneToMany(() => VideoComment, comment => comment.video)
  comments: VideoComment[]

  @OneToMany(() => VideoTagMapping, ({ video }) => video)
  tags: VideoTagMapping[]

  @ManyToOne(() => User, ({ videos }) => videos)
  @JoinColumn({ name: 'author_id' })
  author: User

  @Column({
    name: 'author_id',
    type: 'bigint',
  })
  authorId: string

  @ManyToOne(() => VideoCategory, ({ videos }) => videos)
  @JoinColumn({ name: 'category_id' })
  category: VideoCategory

  @Column({
    name: 'category_id',
    type: 'bigint',
  })
  categoryId: string

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
