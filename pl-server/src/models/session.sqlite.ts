import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from './user.sqlite'

@Entity('session')
export class Session {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'varchar',
    length: 36,
  })
  sessionId: string

  @JoinColumn({ name: 'userId' })
  @ManyToOne(() => User, user => user.sessions)
  user: User

  @Column({
    type: 'varchar',
    length: 200,
  })
  useragent?: string

  @CreateDateColumn({
    type: 'date',
  })
  createdAt: Date

  @UpdateDateColumn({
    type: 'date',
  })
  updatedAt: Date
}
