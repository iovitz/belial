import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Auth extends BaseModel {
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
    columnName: 'user_id',
  })
  declare userId: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
