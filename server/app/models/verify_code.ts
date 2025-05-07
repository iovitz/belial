import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class VerifyCode extends BaseModel {
  static selfAssignPrimaryKey = true

  @column({
    isPrimary: true,
  })
  declare id: string

  @column()
  declare code: string

  @column()
  declare type: string

  @column()
  declare status: boolean

  @column.dateTime({ autoCreate: true, columnName: 'createdAt' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updatedAt' })
  declare updatedAt: DateTime
}
