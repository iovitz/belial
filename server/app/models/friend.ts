import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class Friend extends BaseModel {
  static table = 't_friends'
  static selfAssignPrimaryKey = true

  @column({
    isPrimary: true,
  })
  declare id: string

  @column({
    columnName: 'fromUserId',
  })
  declare fromUserId: string

  @column({
    columnName: 'toUserId',
  })
  declare toUserId: string

  @column({
    columnName: 'message',
  })
  declare message: string

  @column({
    columnName: 'status',
  })
  declare status: number

  @column.dateTime({ autoCreate: true, columnName: 'createdAt' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updatedAt' })
  declare updatedAt: DateTime
}
