/**
 * AuthService
 *
 * @description :: Auth Service
 * @usage       :: AuthService.[methodName]()
 */

const { TwitterSnowflake } = require('@sapphire/snowflake')

const Service = {

  async createUser(identityType, identifier, credential, nickname = 'zhangsan') {
    return await sails.getDatastore().transaction(async (db) => {
      // 检查是否已经存在该用户
      const existsAuth = await Auth.findOne({
        identifier,
        identityType,
      })
      if (existsAuth) {
        return existsAuth
      }
      const newUserId = TwitterSnowflake.generate().toString()
      const newUserRecord = await User.create({
        id: newUserId,
        nickname,
      }).usingConnection(db).fetch()
      await Auth.create({
        id: TwitterSnowflake.generate().toString(),
        userId: newUserId,
        identifier,
        credential,
        identityType,
        verified: true,
      }).usingConnection(db).fetch()
      return newUserRecord
    })
  },

  async createUserSession(userId, useragent) {
    return await Session.create({
      id: TwitterSnowflake.generate().toString(),
      userId,
      useragent,
    }).fetch()
  },
}

// For LSP
globalThis.AuthService = Service

module.exports = Service
