/**
 * UserFollowingGroup Model
 *
 * @description :: user following group model
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const logger = rootLogger.child({
  scope: 'Model-UserFollowingGroup',
})

module.exports = {
  primaryKey: 'id',
  attributes: {
    id: { type: 'string', required: true },
    name: { type: 'string', required: true },
    description: { type: 'string', required: true },
    user: {
      model: 'user',
    },
    userFollowings: {
      collection: 'userFollowing',
      via: 'userFollowingGroups',
    },
  },
  beforeCreate(values, proceed) {
    logger.debug('Create `UserFollowingGroup` Model', values)
    return proceed()
  },
}
