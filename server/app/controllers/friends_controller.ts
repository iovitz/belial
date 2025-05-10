import Friend from '#models/friend'
import FriendApplication from '#models/friend_application'
import { FriendService } from '#services/friend_service'
import {
  createFriendApplicationValidator,
  deleteFriendValidator,
  operateApplicationValidator,
} from '#validators/friend'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import createHttpError from 'http-errors'

@inject()
export default class FriendController {
  constructor(private friendService: FriendService) {}

  async createFriendApplication(ctx: HttpContext) {
    const body = await createFriendApplicationValidator.validate(ctx.request.body())
    const newApplicationRecord = await this.friendService.createFriendApplication(
      ctx.userId,
      body.targetUserId,
      body.message
    )
    return {
      applicationId: newApplicationRecord.id,
    }
  }

  async deleteFriend(ctx: HttpContext) {
    const query = await deleteFriendValidator.validate(ctx.request.qs())
    const friend = await Friend.findBy({
      userId: ctx.userId,
      friendId: query.friendId,
    })
    if (!friend) {
      throw createHttpError[422]('friend not found')
    }
    await friend.delete()
    return true
  }

  async operateApplication(ctx: HttpContext) {
    const body = await operateApplicationValidator.validate(ctx.request.body())
    const application = await FriendApplication.findBy({
      id: body.applicationId,
      toUserId: ctx.userId,
      status: 0,
    })
    if (!application) {
      throw createHttpError[422]('application not found or already been handled')
    }
    application.status = body.agree ? 1 : 2
    await application.save()
    return true
  }

  getMyApplication(ctx: HttpContext) {
    return this.friendService.getReceivedApplication(ctx.userId)
  }

  getMyFriends(ctx: HttpContext) {
    return this.friendService.getMyFriends(ctx.userId)
  }
}
