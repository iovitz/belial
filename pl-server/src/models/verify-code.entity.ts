import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { snowflakeIdGenerator } from '../shared/id'

@Entity('verify_code', {
  comment: '验证码',
})
export class VerifyCode {
  @PrimaryColumn({
    name: 'id',
    type: 'bigint',
    comment: '雪花ID',
    default: () => snowflakeIdGenerator.generate(),
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
    type: 'timestamp',
  })
  createdAt: Date

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
  })
  updatedAt: Date
}
