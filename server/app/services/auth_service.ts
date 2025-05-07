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
      const newUserId = this.dbService.genBigIntID()

      await trx.insertQuery().table('users').insert({
        id: newUserId,
        nickname,
      })

      await trx.insertQuery().table('auths').insert({
        id: this.dbService.genBigIntID(),
        userId: newUserId,
        identifier,
        credential,
        identityType,
        verified: true,
      })
    })
  }

  async createSession(userId: string, ua: string) {
    const newSessionItem = await Session.create({
      id: this.dbService.genBigIntID(),
      userId,
      useragent: ua,
    })
    return newSessionItem.id
  }

  async getUserBySessionId(sessionId: string) {
    return Session.find(sessionId)
  }
}
