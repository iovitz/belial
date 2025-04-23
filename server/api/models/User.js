/**
 * User Model
 *
 * @description :: 用户表
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const logger = rootLogger.child({
  scope: 'Model-User',
})

module.exports = {
  primaryKey: 'id',
  attributes: {
    nickname: { type: 'string', required: true },
    avatar: { type: 'string', required: false },
    desc: { type: 'string', required: false },
    sex: { type: 'number', required: false },

    auths: { collection: 'auth', via: 'user' },
    sessions: { collection: 'session', via: 'user' },
    followers: { collection: 'userFollowing', via: 'followed' },
  },
  beforeCreate(values, proceed) {
    logger.debug('Create `User` Model', values)
    return proceed()
  },
}
