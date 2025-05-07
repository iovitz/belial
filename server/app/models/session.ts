import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Session extends BaseModel {
  static selfAssignPrimaryKey = true

  @column({
    isPrimary: true,
  })
  declare id: string

  @column({
    columnName: 'user_id',
  })
  declare userId: string | null

  @column({
    columnName: 'useragent',
  })
  declare useragent: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
