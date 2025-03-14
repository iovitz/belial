/**
 * User Model
 *
 * @description :: 用户表
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const jwt = require('jsonwebtoken')

const logger = rootLogger.child({
  scope: 'Model-User',
})

module.exports = {
  primaryKey: 'id',
  attributes: {
    id: { type: 'string', required: true },
    name: { type: 'string', required: true },
    email: { type: 'string', unique: true, required: true, isEmail: true },
    password: { type: 'string', required: true },
    avatar: { type: 'string', required: true },
    token: { type: 'string', required: false },
  },
  beforeCreate(values, proceed) {
    // values.id = ulid()
    logger.debug('Create `User` Model', values)

    return proceed()
  },
  afterCreate(newValue, proceed) {
    newValue.token = jwt.sign({
      id: newValue.id,
      email: newValue.email,
    }, sails.config.http.jwtSecret, { expiresIn: '1h' })
    return proceed()
  },
  beforeUpdate(values, proceed) {
    // values.id = ulid()
    logger.debug('Update `User` Model', values)
    return proceed()
  },
  beforeDestroy() {
    throw {
      code: 403,
    }
  },
}
