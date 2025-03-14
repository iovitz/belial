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

export enum GoalMode {
  specify = 'specify',
  frequency = 'frequency',
}

@Entity('goal')
export class Goal {
  @PrimaryGeneratedColumn({
    comment: '自增主键',
  })
  id: number

  @Column({
    type: 'varchar',
    length: 50,
    comment: '自增主键',
  })
  name: string

  @Column({
    type: 'date',
    comment: '任务开始时间',
  })
  startTime: Date

  @Column({
    type: 'date',
    comment: '任务结束时间',
  })
  endTime: Date

  @Column({
    type: 'varchar',
    comment: '打卡模式',
  })
  mode: GoalMode

  @Column({
    type: 'tinyint',
    comment: '每日打卡次数',
    default: 1,
  })
  dailyFrequency: number

  @JoinColumn({ name: 'userId' })
  @ManyToOne(() => User, user => user.goals)
  user: User

  @Column({
    type: 'boolean',
    default: false,
  })
  done: boolean

  @CreateDateColumn({
    type: 'date',
  })
  createdAt: Date

  @UpdateDateColumn({
    type: 'date',
  })
  updatedAt: Date
}
