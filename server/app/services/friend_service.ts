import Friend from '#models/friend'
import FriendApplication from '#models/friend_application'
import { inject } from '@adonisjs/core'
import { DbService } from './db_service.js'

@inject()
export class FriendService {
  constructor(private dbService: DbService) {}

  getMyFriends(userId: string) {
    return Friend.query().where({
      userId,
      status: 0,
    })
  }

  createFriendApplication(fromUserId: string, toUserId: string, message: string) {
    return FriendApplication.create({
      id: this.dbService.genPrimaryKey(),
      fromUserId,
      toUserId,
      message,
    })
  }

  getReceivedApplication(userId: string) {
    return FriendApplication.findBy({
      toUserId: userId,
    })
  }
}
