import { Provide } from '@midwayjs/core'
import { InjectEntityModel } from '@midwayjs/typeorm'
import { Repository } from 'typeorm'
import { UserFollowing } from '../models/user-following.entity'
import { DAOService } from './crud'

@Provide()
export class UserFollowingService extends DAOService<UserFollowing> {
  @InjectEntityModel(UserFollowing)
  entity: Repository<UserFollowing>
}
