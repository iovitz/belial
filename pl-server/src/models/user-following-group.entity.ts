import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from './user.entity'
import { UserFollowing } from './user-following.entity'
import { snowflakeIdGenerator } from '../shared/id'

@Entity('user_following_group', {
  comment: '用户关注分组表',
})
export class UserFollowingGroup {
  @PrimaryColumn({
    name: 'id',
    type: 'bigint',
    comment: '雪花ID',
    default: () => snowflakeIdGenerator.generate(),
  })
  id: string

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @Column({
    name: 'user_id',
    type: 'bigint',
    comment: '所属用户ID',
  })
  userId: string

  @OneToMany(() => UserFollowing, following => following.group)
  followings: UserFollowing[]

  @Column({
    name: 'name',
    length: 50,
    comment: '分组名称',
  })
  name: string

  @Column({
    name: 'description',
    length: 200,
    nullable: true,
    comment: '分组描述',
  })
  description: string | null

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
