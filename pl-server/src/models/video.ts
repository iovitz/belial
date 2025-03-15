import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('video')
export class video {
  @PrimaryGeneratedColumn({
    comment: '自增主键',
  })
  id: number

  @Column({
    type: 'varchar',
    length: 50,
    comment: '视频标题',
  })
  title: string

  @Column({
    type: 'varchar',
    length: 50,
    comment: '视频标题',
  })
  cover: string

  @Column({
    type: 'varchar',
    length: 50,
    comment: '视频标题',
  })
  authorId: string

  @Column({
    type: 'int',
    length: 50,
    comment: '总时长',
  })
  duration: number

  @Column({
    name: 'play_count',
    type: 'int',
    length: 50,
    comment: '播放数',
  })
  playCount: number

  @Column({
    name: 'barrage_count',
    type: 'int',
    length: 50,
    comment: '播放数',
  })
  barrageCount: number

  @CreateDateColumn({
    type: 'date',
  })
  createdAt: Date

  @UpdateDateColumn({
    type: 'date',
  })
  updatedAt: Date
}
