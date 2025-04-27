import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from './user.entity'

@Entity('session', {
  comment: '登录态Session',
})
export class Session {
  @PrimaryColumn({
    name: 'id',
    type: 'bigint',
    comment: '雪花ID',
  })
  id: string

  @Column({
    name: 'useragent',
    type: 'varchar',
    length: 200,
  })
  useragent: string

  @ManyToOne(() => User, ({ sessions }) => sessions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column({
    name: 'user_id',
    type: 'bigint',
  })
  userId: string

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
