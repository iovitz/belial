import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('verify-code')
export class VerifyCode {
  @PrimaryColumn({
    type: 'varchar',
    length: 30,
    comment: 'ulid',
  })
  id: string

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
