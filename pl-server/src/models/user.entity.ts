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
import { VideoComment } from './video-comment.entity'
import { Auth } from './auth.entity'

@Entity('user', {
  comment: '验证码',
})
export class User {
  @PrimaryColumn({
    name: 'id',
    type: 'bigint',
    comment: '雪花ID',
  })
  id: string

  @Column({
    name: 'nickname',
    type: 'varchar',
    length: 10,
  })
  nickname: string

  @Column({
    name: 'avatar',
    type: 'varchar',
    nullable: true,
    length: 100,
  })
  avatar: string | null

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

  @OneToMany(() => Auth, ({ user }) => user)
  auths: Auth[]

  @OneToMany(() => Video, ({ author }) => author)
  videos: Video[]

  @OneToMany(() => Session, ({ user }) => user)
  sessions: Session[]

  @OneToMany(() => VideoComment, ({ user }) => user)
  comments: VideoComment[]

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
