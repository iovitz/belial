/**
 * Auth Model
 *
 * @description :: auth model
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const { TwitterSnowflake } = require('@sapphire/snowflake')

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
    values.id = TwitterSnowflake.generate().toString()

    logger.debug('Create `Auth` Model', values)
    return proceed()
  },
}
