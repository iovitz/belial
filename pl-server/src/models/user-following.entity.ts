import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from './user.entity'
import { UserFollowingGroup } from './user-following-group.entity'
import { snowflakeIdGenerator } from '../shared/id'

@Entity('user_following', {
  comment: '用户关注关系表',
})
export class UserFollowing {
  @PrimaryColumn({
    name: 'id',
    type: 'bigint',
    comment: '雪花ID',
    default: () => snowflakeIdGenerator.generate(),
  })
  id: string

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @Column({
    name: 'follower_id',
    type: 'bigint',
    comment: '关注者用户ID',
  })
  followerId: string

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @Column({
    name: 'followed_id',
    type: 'bigint',
    comment: '被关注者用户ID',
  })
  followedId: string

  @ManyToOne(() => UserFollowingGroup, group => group.followings, {
    onDelete: 'CASCADE',
  })
  group: UserFollowingGroup | null

  @Column({
    name: 'is_mutual',
    type: 'boolean',
    default: false,
    comment: '是否互相关注',
  })
  isMutual: boolean

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
