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
    nickname: { type: 'string', required: true },
    avatar: { type: 'string', required: false },
    desc: { type: 'string', required: false },
    sex: { type: 'number', required: true },

    auths: { collection: 'auth', via: 'user' },
    followers: { collection: 'userFollowing', via: 'followed' },
  },
  beforeCreate(values, proceed) {
    values.id = ulid()

    logger.debug('Create `User` Model', values)
    return proceed()
  },
}
