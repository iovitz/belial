import vine from '@vinejs/vine'

export const getUserInfoValidator = vine.compile(
  vine.object({
    userId: vine.string().maxLength(26).minLength(26),
  })
)
