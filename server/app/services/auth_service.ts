import { inject } from '@adonisjs/core'
import { DbService } from './db_service.js'
import db from '@adonisjs/lucid/services/db'
import Session from '#models/session'

@inject()
export class AuthService {
  constructor(private dbService: DbService) {}
  // Your code here
  async createUser(identifier: string, credential: string, identityType: string, nickname: string) {
    return db.transaction(async (trx) => {
      const newUserId = this.dbService.genPrimaryKey()

      await trx.insertQuery().table('users').insert({
        id: newUserId,
        nickname,
      })

      await trx.insertQuery().table('auths').insert({
        id: this.dbService.genPrimaryKey(),
        userId: newUserId,
        identifier,
        credential,
        identityType,
        verified: true,
      })
      return newUserId
    })
  }

  async createSession(userId: string, ua: string) {
    const newSessionItem = await Session.create({
      id: this.dbService.genPrimaryKey(),
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
