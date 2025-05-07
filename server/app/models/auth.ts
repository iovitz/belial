import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Auth extends BaseModel {
  static table = 'auths'
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

  @column.dateTime({ autoCreate: true, columnName: 'createdAt' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updatedAt' })
  declare updatedAt: DateTime
}
