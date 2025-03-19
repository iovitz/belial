import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('user')
export class User {
  @PrimaryColumn({
    type: 'varchar',
    length: 30,
    comment: 'ulid',
  })
  id: string

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
  })
  avatar: string

  @Column({
    type: 'varchar',
    length: 32,
  })
  password: string

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
    comment: '个性签名',
  })
  desc?: string

  @Column({
    type: 'int',
    default: 0,
    comment: '性别 0: 未知 1: 男 2: 女',
  })
  sex: number

  @CreateDateColumn({
    type: 'date',
  })
  createdAt: Date

  @UpdateDateColumn({
    type: 'date',
  })
  updatedAt: Date
}
