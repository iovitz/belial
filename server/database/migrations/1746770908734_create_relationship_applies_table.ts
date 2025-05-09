import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'relationship_applies'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 26).primary().comment('主键ID')

      table
        .string('userId', 26)
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .comment('好友ID')
      table
        .string('friendId', 26)
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .comment('好友ID')

      table.tinyint('status').notNullable().comment('申请状态').defaultTo(0)

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
