import {
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { snowflakeIdGenerator } from '../shared/id'

@Entity('auth', {
  comment: '用户认证表',
})
export class Auth {
  @PrimaryColumn({
    name: 'id',
    type: 'bigint',
    comment: '雪花ID',
    default: () => snowflakeIdGenerator.generator(),
  })
  id: string

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
