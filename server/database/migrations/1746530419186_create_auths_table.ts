import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'auths'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 26).primary().comment('主键ID')
      table.string('identity_type').notNullable().comment('用户标识类型')
      table.string('identifier').notNullable().comment('用户标识')
      table.string('credential').notNullable().comment('密码凭证')
      table.boolean('verified').notNullable().comment('是否已经验证')
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
