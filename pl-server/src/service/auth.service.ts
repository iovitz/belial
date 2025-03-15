import { Application } from '@midwayjs/koa'
import {
  DataSource,
  FindOptionsSelect,
  FindOptionsWhere,
  Repository,
} from 'typeorm'
import { EncryptService } from './encrypt.service'
import { App, Inject, Provide } from '@midwayjs/core'
import { InjectDataSource, InjectEntityModel } from '@midwayjs/typeorm'
import { customAlphabet } from 'nanoid'
import * as uuid from 'uuid'
import { Session } from '../models/session.sqlite'
import { User } from '../models/user.sqlite'

@Provide()
export class AuthService {
  @App()
  app: Application

  @InjectDataSource()
  defaultDataSource: DataSource

  @InjectEntityModel(Session)
  private sessionModel: Repository<Session>

  @InjectEntityModel(User)
  private User: Repository<User>

  @Inject()
  private encrypt: EncryptService

  avatarGenerator = customAlphabet(
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
    10,
  )

  findUserBy(where: FindOptionsWhere<User>, select: FindOptionsSelect<User>) {
    return this.User.findOne({
      where,
      select,
    })
  }

  genUserId() {
    return this.encrypt.genRandomId('usr')
  }

  async createUser(email: string, password: string) {
    const id = this.genUserId()
    const key = this.app.getConfig('secrets.multiAvatar')
    const user = new User()

    user.id = id

    user.nickname = `用户${id.substring(0, 5)}`
    user.email = email
    user.password = await this.encrypt.encryptPassword(password)
    user.avatar = `https://api.multiavatar.com/Starcrasher.png?apikey=${key}`

    await this.User.save(user)
    return user
  }

  async createSession(user: User, useragent?: string) {
    const sessionId = uuid.v4()
    const session = this.sessionModel.create({
      sessionId,
      user,
      useragent,
    })
    this.sessionModel.save(session)
    return sessionId
  }
}
