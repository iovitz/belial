import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Relationship from './relationship.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import RelationshipApply from './relationship_apply.js'
import Auth from './auth.js'
import Session from './session.js'

export default class User extends BaseModel {
  static table = 'users'
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

  @hasMany(() => Relationship, {
    foreignKey: 'userId',
  })
  declare posts: HasMany<typeof Relationship>

  @hasMany(() => RelationshipApply, {
    foreignKey: 'toUserId',
  })
  declare relationshipApplies: HasMany<typeof RelationshipApply>

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
