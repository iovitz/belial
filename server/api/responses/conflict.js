/**
 * forbidden response
 *
 * @description :: 无权限访问资源
 */

const statuses = require('statuses')

module.exports = async function (err) {
  const code = _.get(err, 'code')
  const message = _.get(err, 'message')
  this.res.logger.warn('No Permission', err)

  return this.res.status(409).send({
    code: code || 40009,
    message: message || statuses(409),
  })
}
