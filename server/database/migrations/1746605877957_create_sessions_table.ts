import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'sessions'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 26).primary().comment('主键ID')
      table.string('useragent').nullable().comment('登录时使用的浏览器UA')
      table
        .string('user_id', 26)
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .comment('用户ID')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
