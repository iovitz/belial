import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { Goal } from './goal.sqlite'
import { Session } from './session.sqlite'

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({
    type: 'varchar',
    length: 10,
  })
  userId: string

  @Column({
    type: 'varchar',
    length: 30,
  })
  email: string

  @Column({
    type: 'varchar',
    length: 10,
  })
  nickname: string

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  avatar: string

  @Column({
    type: 'varchar',
    length: 32,
  })
  password: string

  @CreateDateColumn({
    type: 'date',
  })
  createdAt: Date

  @UpdateDateColumn({
    type: 'date',
  })
  updatedAt: Date

  @OneToMany(() => Session, session => session.user)
  sessions: Session[]

  @OneToMany(() => Goal, goal => goal.user)
  goals: Goal[]
}
