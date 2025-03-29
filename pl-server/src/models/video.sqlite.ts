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
import { User } from './user.sqlite'
import { Comment } from './comment.sqlite'

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
    length: 50,
  })
  duration: number

  @Column({
    name: 'play_count',
    type: 'int',
    length: 50,
  })
  playCount: number

  @Column({
    name: 'barrage_count',
    type: 'int',
    length: 50,
  })
  barrageCount: number

  @OneToMany(() => Comment, comment => comment.video)
  comments: Comment

  @ManyToOne(() => User, user => user.videos)
  @JoinColumn({ name: 'author_id' })
  user: User

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
