import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Video } from './video.sqlite'
import { Session } from './session.sqlite'

@Entity('user')
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
    length: 32,
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

  @OneToMany(() => Video, video => video.user)
  videos: Video

  @OneToMany(() => Session, video => video.user)
  sessions: Session

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
