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
import { VideoComment } from './videl-comment.entity'
import { VideoTag } from './video-tag.entity'

@Entity('video', {
  comment: '视频表',
})
export class Video {
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
  comments: VideoComment

  @OneToMany(() => VideoTag, ({ video }) => video)
  tags: VideoTag

  @ManyToOne(() => User, user => user.videos)
  @JoinColumn({ name: 'author_id' })
  user: User

  @Column({
    name: 'author_id',
    type: 'varchar',
    length: 30,
  })
  authorId: string

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
