/**
 * tooManyRequest response
 *
 * @description :: 请求过多触发限流
 */

const statuses = require('statuses')

module.exports = async function (err) {
  const message = typeof err === 'string' ? err : _.get(err, 'message')

  return this.res.status(422).send({
    code: 422,
    message: message ?? statuses(422),
  })
}
