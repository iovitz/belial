import { Provide } from '@midwayjs/core'
import { CrudService } from './crud'
import { Auth } from '../models/auth.entity'
import { InjectEntityModel } from '@midwayjs/typeorm'
import { Repository } from 'typeorm'
import { snowflakeIdGenerator } from '../shared/id'
import { User } from '../models/user.entity'
import { Session } from '../models/session.entity'

@Provide()
export class AuthService extends CrudService<Auth> {
  @InjectEntityModel(Auth)
  entity: Repository<Auth>

  @InjectEntityModel(Session)
  session: Repository<Session>

  createUser(identifier: string, credential: string, identityType: string, nickname: string) {
    return this.dataSourceManager.getDataSource('default').transaction(async (manager) => {
      const newUserId = snowflakeIdGenerator.generate()
      const auth = new Auth()
      auth.id = snowflakeIdGenerator.generate()
      auth.userId = newUserId
      auth.identifier = identifier
      auth.credential = credential
      auth.identityType = identityType
      const user = new User()
      user.id = newUserId
      user.nickname = nickname
      await manager.save(user)
      await manager.save(auth)
    })
  }

  async createSession(userId: string, ua: string) {
    const newSessionItem = this.session.create({
      id: snowflakeIdGenerator.generate(),
      userId,
      useragent: ua,
    })
    await this.session.save(newSessionItem)
    return newSessionItem.id
  }

  async getUserBySessionId(sessionId: string) {
    return this.session.findOneBy({
      id: sessionId,
    })
  }
}
