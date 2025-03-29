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
    name: 'id',
    type: 'varchar',
    length: 30,
  })
  id: string

  @Column({
    name: 'code',
    type: 'varchar',
    length: 6,
  })
  code: string

  @Column({
    name: 'type',
    type: 'varchar',
    length: 10,
  })
  type: string

  @Column({
    name: 'status',
    type: 'boolean',
    default: false,
  })
  status: boolean

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
