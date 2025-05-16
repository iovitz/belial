import Friend from '#models/friend'
import FriendApplication from '#models/friend_application'
import { DaoService } from '#shared/dao'
import { inject } from '@adonisjs/core'

@inject()
export class FriendService extends DaoService<typeof Friend> {
  constructor() {
    super(Friend, {})
  }

  getMyFriends(userId: string) {
    return Friend.query().where({
      userId,
      status: 0,
    })
  }

  createFriendApplication(fromUserId: string, toUserId: string, message: string) {
    return FriendApplication.create({
      id: this.genPrimaryKey(),
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
