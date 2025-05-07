import vine from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    nickname: vine.string().trim().maxLength(20).minLength(2),
    identifier: vine.string().trim().maxLength(30).minLength(6),
    credential: vine.string().trim().maxLength(16).minLength(6),
    identityType: vine.string().trim().maxLength(30).minLength(1),
    verifyCode: vine.string().trim().maxLength(4).minLength(4),
    verifyCodeId: vine.string().trim().maxLength(18).minLength(18),
  })
)
export const loginValidator = vine.compile(
  vine.object({
    identifier: vine.string().trim().maxLength(30).minLength(6),
    credential: vine.string().trim().maxLength(16).minLength(6),
    identityType: vine.string().trim().maxLength(30).minLength(1),
    verifyCode: vine.string().trim().maxLength(4).minLength(4),
    verifyCodeId: vine.string().trim().maxLength(18).minLength(18),
  })
)
