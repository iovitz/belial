import vine from '@vinejs/vine'

export const getUserInfoValidator = vine.compile(
  vine.object({
    userId: vine.string().trim().maxLength(26).minLength(26),
  })
)

export const updateUserInfoValidator = vine.compile(
  vine.object({
    nickname: vine.string().trim().maxLength(10).minLength(2).optional(),
    avatar: vine.string().trim().maxLength(100).minLength(10).optional(),
    desc: vine.string().trim().maxLength(50).minLength(0).optional(),
    sex: vine.number().max(2).min(0).optional(),
  })
)
