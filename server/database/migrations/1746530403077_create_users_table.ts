import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigint('id').primary().comment('主键ID')
      table.string('nickname').notNullable().comment('昵称')
      table.string('avatar').notNullable().comment('头像URL')
      table.string('desc').notNullable().comment('描述')
      table.tinyint('sex').notNullable().comment('性别')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
