/**
 * UserFollowing Model
 *
 * @description :: User Following model
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const logger = rootLogger.child({
  scope: 'Model-UserFollowing',
})

module.exports = {
  primaryKey: 'id',
  attributes: {
    follower: {
      model: 'user',
    },
    followed: {
      model: 'user',
    },
    userFollowingGroups: {
      model: 'userFollowingGroup',
    },
  },
  beforeCreate(values, proceed) {
    logger.debug('Create `UserFollowing` Model', values)
    return proceed()
  },
}
