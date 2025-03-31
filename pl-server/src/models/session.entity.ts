import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from './user.entity'

@Entity('session', {
  comment: '登录态Session',
})
export class Session {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number

  @Column({
    name: 'session_id',
    type: 'varchar',
    length: 36,
  })
  sessionId: string

  @Column({
    name: 'useragent',
    type: 'varchar',
    length: 200,
  })
  useragent?: string

  @ManyToOne(() => User, user => user.sessions)
  @JoinTable({ name: 'user_id' })
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
