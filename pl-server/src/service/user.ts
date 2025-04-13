import type {
  Repository,
} from 'typeorm'
import { Inject, Provide } from '@midwayjs/core'
import { InjectEntityModel } from '@midwayjs/typeorm'
import { User } from '../models/user.entity'
import { CrudService } from './crud'
import { Context } from '@midwayjs/koa'
import { CaslService } from './casl'

@Provide()
export class UserService extends CrudService<User> {
  @Inject()
  ctx: Context

  @Inject()
  caslService: CaslService

  @InjectEntityModel(User)
  entity: Repository<User>
}
