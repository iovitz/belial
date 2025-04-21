/**
 * login action
 *
 * @description :: implement the description here
 * @usage       :: 'POST /api/v1/auth/login': { action: 'auth/login' },
 */

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

module.exports = function (req, res) {
  if (!bodyValidator(req.body)) {
    return res.unprocessable(bodyValidator.errors.map(e => e.message).join('\n'))
  }

  return res.ok('OK')
}
