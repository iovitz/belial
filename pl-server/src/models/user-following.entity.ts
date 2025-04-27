import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from './user.entity'
import { UserFollowingGroup } from './user-following-group.entity'

@Entity('user_following', {
  comment: '用户关注关系表',
})
export class UserFollowing {
  @PrimaryColumn({
    name: 'id',
    type: 'bigint',
    comment: '雪花ID',
  })
  id: string

  @ManyToOne(() => User, ({ id }) => id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'follower_id' })
  follower: User

  @Column({
    name: 'follower_id',
    type: 'bigint',
    comment: '关注者用户ID',
  })
  followerId: string

  @ManyToOne(() => User, ({ id }) => id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'followed_id' })
  followed: User

  @Column({
    name: 'followed_id',
    type: 'bigint',
    comment: '被关注者用户ID',
  })
  followedId: string

  @ManyToOne(() => UserFollowingGroup, ({ id }) => id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'group_id' })
  group?: UserFollowingGroup | null

  @Column({
    name: 'group_id',
    type: 'bigint',
    comment: '被关注者用户ID',
    nullable: true,
  })
  groupId: string | null

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
