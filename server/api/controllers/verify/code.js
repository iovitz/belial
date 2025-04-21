/**
 * code action
 *
 * @description :: implement the description here
 * @usage       :: 'GET /api/v1/verify/code': { action: 'verify/code' },
 */

const validator = ajv.compile({
  type: 'object',
  properties: {
    width: {
      type: 'string',
      pattern: "^\\d{2,3}\\.?\\d*$",
      description: 'verify code image width',
    },
    height: {
      type: 'string',
      pattern: "^\\d{2,3}\\.?\\d*$",
      description: 'verify code image height',
    },
    type: {
      type:'string',
      enum: ["login", "register"],
      description:'verify code type(login / register)',
    }
  },
  required: ['width', 'height', 'type'],
})

module.exports = async function (req, res) {
  if (!validator(req.query)) {
    return res.unprocessable(validator.errors.map(e => e.message).join('\n'))
  }

  const { id, svg } = await VerifyService.createVerifyCode(req.query.type, req.query.width, req.query.height)

  return res.ok({ id, svg })
}
