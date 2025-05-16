import Auth from '#models/auth'
import Session from '#models/session'
import { DaoService } from '#shared/dao'
import { inject } from '@adonisjs/core'

@inject()
export class AuthService extends DaoService<typeof Auth> {
  constructor() {
    super(Auth, {})
  }

  // Your code here
  async createUser(identifier: string, credential: string, identityType: string, nickname: string) {
    const newUserId = this.genPrimaryKey()
    const data = await this.createWithTransaction([
      {
        db: 't_users',
        data: {
          id: newUserId,
          nickname,
        },
      },
      {
        db: 't_auths',
        data: {
          userId: newUserId,
          identifier,
          credential,
          identityType,
          verified: true,
        },
      },
    ])
    return data
  }

  async createSession(userId: string, ua: string) {
    const newSessionItem = await Session.create({
      id: this.genPrimaryKey(),
      userId,
      useragent: ua,
    })
    return newSessionItem.id
  }

  async getSessionById(sessionId: string) {
    return Session.query().where({ id: sessionId, status: 0 }).first()
  }

  async deleteSession(sessionId: string) {
    return Session.query().where({ id: sessionId, status: 0 }).update({
      status: 1,
    })
  }
}
