/**
 * Auth Model
 *
 * @description :: auth model
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const logger = rootLogger.child({
  scope: 'Model-Auth',
})

module.exports = {
  primaryKey: 'id',
  attributes: {
    userId: { type: 'string', required: true },
    identityType: { type: 'string', required: true },
    identifier: { type: 'string', required: true },
    credential: { type: 'string', required: true },
    verified: { type: 'boolean', required: true },

    user: {
      model: 'user',
    },
  },
  beforeCreate(values, proceed) {
    logger.debug('Create `Auth` Model', values)
    return proceed()
  },
}
