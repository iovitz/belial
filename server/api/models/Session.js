/**
 * Session Model
 *
 * @description :: implement the description here
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const logger = rootLogger.child({
  scope: 'Model-Session',
})

module.exports = {
  primaryKey: 'id',
  attributes: {
    id: { type:'string', required: true },
    useragent: { type:'string', required: true },
    user: {
      model: 'user',
    },
  },
  beforeCreate(values, proceed) {
    logger.debug('Create `Session` Model', values)
    return proceed()
  },
}
