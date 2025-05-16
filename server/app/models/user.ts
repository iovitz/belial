import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import Auth from './auth.js'
import Friend from './friend.js'
import FriendApplication from './friend_application.js'
import Session from './session.js'

export default class User extends BaseModel {
  static table = 't_users'
  static selfAssignPrimaryKey = true

  @column({
    isPrimary: true,
  })
  declare id: string

  @column({
    columnName: 'nickname',
  })
  declare nickname: string

  @column({
    columnName: 'avatar',
  })
  declare avatar: string | null

  @column({
    columnName: 'desc',
  })
  declare desc: string | null

  @column({
    columnName: 'sex',
  })
  declare sex: number | null

  @hasMany(() => Friend, {
    foreignKey: 'userId',
  })
  declare posts: HasMany<typeof Friend>

  @hasMany(() => FriendApplication, {
    foreignKey: 'toUserId',
  })
  declare friendApplications: HasMany<typeof FriendApplication>

  @hasMany(() => Auth, {
    foreignKey: 'userId',
  })
  declare auths: HasMany<typeof Auth>

  @hasMany(() => Session, {
    foreignKey: 'userId',
  })
  declare sessions: HasMany<typeof Session>

  @column.dateTime({ autoCreate: true, columnName: 'createdAt' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updatedAt' })
  declare updatedAt: DateTime
}
