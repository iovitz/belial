import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'friend_applications'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 26).primary().comment('主键ID')

      table
        .string('fromUserId', 26)
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .comment('好友ID')
      table
        .string('toUserId', 26)
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .comment('好友ID')

      table.string('message', 500).comment('申请信息')
      table.tinyint('status').notNullable().comment('申请状态').defaultTo(0)

      table.timestamp('createdAt')
      table.timestamp('updatedAt')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
