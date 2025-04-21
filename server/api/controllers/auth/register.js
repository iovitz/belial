/**
 * register action
 *
 * @description :: implement the description here
 * @usage       :: 'POST /api/v1/auth/register': { action: 'auth/register' },
 */

const bodyValidator = ajv.compile({
  type: 'object',
  properties: {
    // name: {
    //   type: 'string',
    //   maxLength: 30,
    //   minLength: 1,
    //   description: 'Name',
    // },
  },
  required: [],
})

module.exports = function (req, res) {
  if (!bodyValidator(req.body)) {
    return res.unprocessable(bodyValidator.errors.map(e => e.message).join('\n'))
  }

  return res.ok('OK')
}
