import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm'
import { User } from './user.entity'
import { UserFollowing } from './user-following.entity'

@Entity('user_following_group', {
  comment: '用户关注分组表',
})
export class UserFollowingGroup {
  @PrimaryColumn({
    name: 'id',
    type: 'bigint',
    comment: '雪花ID',
  })
  id: string

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User

  @Column({
    name: 'user_id',
    type: 'bigint',
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
