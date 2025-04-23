/**
 * register action
 *
 * @description :: implement the description here
 * @usage       :: 'POST /api/v1/auth/register': { action: 'auth/register' },
 */

const { Buffer } = require('node:buffer')
const crypto = require('node:crypto')

const bodyValidator = ajv.compile({
  type: 'object',
  properties: {
    identityType: {
      type: 'string',
      maxLength: 30,
      minLength: 1,
      description: '认证类型：github/wechat/phone/email',
    },
    identifier: {
      type: 'string',
      maxLength: 30,
      minLength: 6,
      description: '邮箱、手机号、openid',
    },
    credential: {
      type: 'string',
      maxLength: 500,
      minLength: 0,
      description: '加密后的密码凭证/令牌',
    },
  },
  required: ['identityType', 'identifier', 'credential'],
})

module.exports = async function (req, res) {
  if (!bodyValidator(req.body)) {
    return res.unprocessable(bodyValidator.errors.map(e => e.message).join('\n'))
  }

  const decryptedCredential = crypto.privateDecrypt(
    {
      key: sails.config.custom.aesPrivateKey,
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    },
    Buffer.from(req.body.credential, 'base64'),
  ).toString()
  await AuthService.createUser(req.body.identityType, req.body.identifier, decryptedCredential)

  return res.ok(true)
}
