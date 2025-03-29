import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from './user.entity'
import { Comment } from './comment.entity'

@Entity('video')
export class Video {
  @PrimaryGeneratedColumn({
    name: 'id',
    comment: '自增主键',
  })
  id: number

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

  @OneToMany(() => Comment, comment => comment.video)
  comments: Comment

  @ManyToOne(() => User, user => user.videos)
  @JoinColumn({ name: 'author_id' })
  user: User

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
