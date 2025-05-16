import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import User from './user.js'

export default class Auth extends BaseModel {
  static table = 't_auths'
  static selfAssignPrimaryKey = true

  @column({
    isPrimary: true,
  })
  declare id: string

  @column({
    columnName: 'identityType',
  })
  declare identityType: string

  @column({
    columnName: 'identifier',
  })
  declare identifier: string

  @column({
    columnName: 'credential',
  })
  declare credential: string

  @column({
    columnName: 'verified',
  })
  declare verified: boolean

  @column({
    columnName: 'userId',
  })
  declare userId: string

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true, columnName: 'createdAt' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updatedAt' })
  declare updatedAt: DateTime
}
