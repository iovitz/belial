import { Provide } from '@midwayjs/core'
import { CrudService } from './crud'
import { Auth } from '../models/auth.entity'
import { InjectEntityModel } from '@midwayjs/typeorm'
import { Repository } from 'typeorm'
import { snowflakeIdGenerator } from '../shared/id'
import { User } from '../models/user.entity'

@Provide()
export class AuthService extends CrudService<Auth> {
  @InjectEntityModel(Auth)
  entity: Repository<Auth>

  createUser(identifier: string, credential: string, identityType: string, nickname: string) {
    return this.dataSourceManager.getDataSource('default').transaction(async (manager) => {
      const newUserId = snowflakeIdGenerator.generate()
      const auth = new Auth()
      auth.userId = newUserId
      auth.identifier = identifier
      auth.credential = credential
      auth.identityType = identityType
      const user = new User()
      user.id = newUserId
      user.nickname = nickname

      return Promise.all([manager.save(user), manager.save(auth)])
    })
  }
}
