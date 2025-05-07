import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class RelationshipApply extends BaseModel {
  static selfAssignPrimaryKey = true

  @column({
    isPrimary: true,
  })
  declare id: string

  @column({
    columnName: 'from_user_id',
  })
  declare fromUserId: string

  @column({
    columnName: 'to_user_id',
  })
  declare toUserId: string

  @column({
    columnName: 'status',
  })
  declare status: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
