import { Provide } from '@midwayjs/core'
import { InjectEntityModel } from '@midwayjs/typeorm'
import { Repository } from 'typeorm'
import { UserFollowingGroup } from '../models/user-following-group.entity'
import { DAOService } from './crud'

@Provide()
export class UserFollowingGroupService extends DAOService<UserFollowingGroup> {
  @InjectEntityModel(UserFollowingGroup)
  entity: Repository<UserFollowingGroup>
}
