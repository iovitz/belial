/**
 * User Model
 *
 * @description :: 声音表
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

// const { ulid } = require('ulid')

const logger = rootLogger.child({
  scope: 'Model-Voice',
})

module.exports = {
  primaryKey: 'id',
  attributes: {
    id: { type: 'string', required: true },
    _userId: { type: 'string', required: false },
    title: { type: 'string', required: true },
    content: { type: 'text', required: true },
    voiceUrl: { type: 'string', required: true },
  },
  beforeCreate(values, proceed) {
    // values.id = ulid()
    logger.debug('Create `Voice` Model', values)
    return proceed()
  },
  beforeUpdate(values, proceed) {
    logger.debug('Update `Voice` Model', values)
    return proceed()
  },
  beforeDestroy() {
    throw {
      code: 403,
    }
  },
}
