import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class User extends BaseModel {
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
  declare sex: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
