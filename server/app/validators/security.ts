import vine from '@vinejs/vine'

export const getCaptchaValidator = vine.compile(
  vine.object({
    width: vine.number().max(500).min(0),
    height: vine.number().max(500).min(0),
    type: vine.string().trim().maxLength(20).minLength(1),
  }),
)
