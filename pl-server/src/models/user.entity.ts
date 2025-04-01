import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Video } from './video.entity'
import { Session } from './session.entity'
import { VideoComment } from './videl-comment.entity'

@Entity('user', {
  comment: '验证码',
})
export class User {
  @PrimaryColumn({
    name: 'id',
    type: 'varchar',
    length: 30,
    comment: 'ulid',
  })
  id: string

  @Column({
    name: 'email',
    type: 'varchar',
    length: 30,
  })
  email: string

  @Column({
    name: 'nickname',
    type: 'varchar',
    length: 10,
  })
  nickname: string

  @Column({
    name: 'avatar',
    type: 'varchar',
    length: 100,
  })
  avatar: string

  @Column({
    name: 'password',
    type: 'varchar',
    length: 100,
  })
  password: string

  @Column({
    name: 'desc',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  desc?: string

  @Column({
    name: 'sex',
    type: 'int',
    default: 0,
  })
  sex: number

  @OneToMany(() => Video, ({ user }) => user)
  videos: Video

  @OneToMany(() => Session, ({ user }) => user)
  sessions: Session

  @OneToMany(() => VideoComment, ({ user }) => user)
  comments: VideoComment

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
