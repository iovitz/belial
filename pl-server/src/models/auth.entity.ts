import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { snowflakeIdGenerator } from '../shared/id'
import { User } from './user.entity'

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

  @ManyToOne(() => User, ({ id }) => id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column({
    name: 'user_id',
    type: 'bigint',
    comment: '用户ID',
  })
  userId: string

  @Column({
    name: 'identity_type',
    type: 'varchar',
    length: 20,
    comment: '认证类型: password/mobile/github/wechat等',
  })
  identityType: string

  @Column({
    name: 'identifier',
    type: 'varchar',
    length: 100,
    comment: '唯一标识: 用户名/手机号/第三方ID等',
  })
  identifier: string

  @Column({
    name: 'credential',
    type: 'varchar',
    length: 255,
    comment: '密码凭证/令牌',
    nullable: true,
  })
  credential: string

  @Column({
    name: 'verified',
    type: 'boolean',
    default: false,
    comment: '是否验证',
  })
  verified: boolean

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
