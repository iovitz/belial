import vine from '@vinejs/vine'

export const createFriendApplicationValidator = vine.compile(
  vine.object({
    targetUserId: vine.string().trim().maxLength(26).minLength(26),
    message: vine.string().maxLength(500).minLength(0),
  })
)

export const deleteFriendValidator = vine.compile(
  vine.object({
    friendId: vine.string().trim().maxLength(26).minLength(26),
  })
)
export const operateApplicationValidator = vine.compile(
  vine.object({
    applicationId: vine.string().trim().maxLength(26).minLength(26),
    agree: vine.boolean(),
  })
)
