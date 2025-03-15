import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('user')
export class User {
  @PrimaryColumn()
  @Column({
    type: 'varchar',
    length: 30,
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
    length: 20,
    nullable: true,
  })
  phone?: string

  @Column({
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  desc?: string

  @Column({
    type: 'int',
    default: 0,
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
