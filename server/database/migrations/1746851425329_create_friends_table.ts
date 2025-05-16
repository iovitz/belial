import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 't_friends'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 26).primary().comment('主键ID')

      table
        .string('userId', 26)
        .references('id')
        .inTable('t_users')
        .onDelete('CASCADE')
        .comment('好友ID')
      table
        .string('friendId', 26)
        .references('id')
        .inTable('t_users')
        .onDelete('CASCADE')
        .comment('好友ID')

      table.tinyint('status').notNullable().defaultTo(0).comment('关系状态')

      table.timestamp('createdAt')
      table.timestamp('updatedAt')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
