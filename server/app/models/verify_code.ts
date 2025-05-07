import { DateTime } from 'luxon'
import { afterFind, BaseModel, column } from '@adonisjs/lucid/orm'

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

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
