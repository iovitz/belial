import * as crypto from 'node:crypto'
import env from '#start/env'
import vine from '@vinejs/vine'
import createHttpError from 'http-errors'

export const registerValidator = vine.compile(
  vine.object({
    nickname: vine.string().trim().maxLength(20).minLength(2),
    identifier: vine.string().trim().maxLength(30).minLength(6),
    credential: vine
      .string()
      .trim()
      .maxLength(1000)
      .minLength(0)
      .transform((v) => {
        const res = crypto
          .privateDecrypt(
            {
              key: env.get('AES_PRIVATE_KEY'), // PEM 格式字符串
              padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            },
            Buffer.from(v, 'base64'), // 假设密文是 Base64
          )
          .toString()
        if (res.length > 16) {
          throw createHttpError(422, 'credential too long')
        }
        if (res.length < 6) {
          throw createHttpError(422, 'credential too short')
        }
        return res
      }),
    identityType: vine.string().trim().maxLength(30).minLength(1),
    verifyCode: vine.string().trim().maxLength(4).minLength(4),
    verifyCodeId: vine.string().trim().maxLength(26).minLength(26),
  }),
)
export const loginValidator = vine.compile(
  vine.object({
    identifier: vine.string().trim().maxLength(30).minLength(6),
    credential: vine
      .string()
      .trim()
      .maxLength(1000)
      .minLength(0)
      .transform((v) => {
        const res = crypto
          .privateDecrypt(
            {
              key: env.get('AES_PRIVATE_KEY'), // PEM 格式字符串
              padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            },
            Buffer.from(v, 'base64'), // 假设密文是 Base64
          )
          .toString()
        if (res.length > 16) {
          throw createHttpError(422, 'credential too long')
        }
        if (res.length < 6) {
          throw createHttpError(422, 'credential too short')
        }
        return res
      }),
    identityType: vine.string().trim().maxLength(30).minLength(1),
    verifyCode: vine.string().trim().maxLength(4).minLength(4),
    verifyCodeId: vine.string().trim().maxLength(26).minLength(26),
  }),
)
