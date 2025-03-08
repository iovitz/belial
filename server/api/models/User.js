/**
 * User Model
 *
 * @description :: 用户表
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const { ulid } = require('ulid')

const logger = rootLogger.child({
  scope: 'Model-User',
})

module.exports = {
  primaryKey: 'id',
  attributes: {
    id: { type: 'string', required: true },
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    email: { type: 'string', unique: true, required: true, isEmail: true },
    age: { type: 'number', min: 18 },
  },
  beforeCreate(values, proceed) {
    values.id = ulid()

    logger.debug('Create `User` Model', values)
    return proceed()
  },
}
