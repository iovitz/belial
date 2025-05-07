import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

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

  @column.dateTime({ autoCreate: true, columnName: 'createdAt' })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName: 'updatedAt' })
  declare updatedAt: DateTime
}
