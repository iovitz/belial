import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('verify-code')
export class VerifyCode {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({
    type: 'varchar',
    length: 10,
  })
  clientId: string

  @Column({
    type: 'varchar',
    length: 100,
  })
  ua: string

  @Column({
    type: 'varchar',
    length: 6,
  })
  code: string

  @Column({
    type: 'varchar',
    length: 10,
  })
  type: string

  @Column({
    type: 'boolean',
    default: false,
  })
  status: boolean

  @CreateDateColumn({
    type: 'date',
  })
  createdAt: Date

  @UpdateDateColumn({
    type: 'date',
  })
  updatedAt: Date
}
