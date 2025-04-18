/**
 * VerifyCode Model
 *
 * @description :: VeirfyCode
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const { TwitterSnowflake } = require('@sapphire/snowflake')

const logger = rootLogger.child({
  scope: 'Model-VerifyCode',
})

module.exports = {
  primaryKey: 'id',
  attributes: {
    code: { type: 'string', required: true },
    type: { type: 'string', required: true },
    status: { type: 'boolean', required: true },
  },
  beforeCreate(values, proceed) {
    values.id = TwitterSnowflake.generate().toString()

    logger.debug('Create `VerifyCode` Model', values)
    return proceed()
  },
}
