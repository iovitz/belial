/**
 * forbidden response
 *
 * @description :: 无权限访问资源
 */

const statuses = require('statuses')

module.exports = async function (err) {
  const code = _.get(err, 'code')
  const message = _.get(err, 'message')
  this.res.logger.warn('Login Required', err)

  return this.res.status(401).send({
    code: code || 40001,
    message: message || statuses(401),
  })
}
