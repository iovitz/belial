import { Provide } from '@midwayjs/core'
import { InjectEntityModel } from '@midwayjs/typeorm'
import { Repository } from 'typeorm'
import { UserFollowing } from '../models/user-following.entity'

@Provide()
export class UserFollowingService {
  @InjectEntityModel(UserFollowing)
  followingRepo: Repository<UserFollowing>

  async create(following: UserFollowing) {
    return this.followingRepo.save(following)
  }

  async delete(id: string) {
    return this.followingRepo.delete(id)
  }

  async findByUserId(userId: string) {
    return this.followingRepo.find({ where: { id: userId } })
  }
}
