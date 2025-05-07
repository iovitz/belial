import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'verify_codes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 26).primary().comment('主键ID')
      table.string('code').notNullable().comment('验证码')
      table.string('type').notNullable().comment('验证码类型')
      table.boolean('status').defaultTo(false).comment('是否已经验证')
      table
        .string('userId', 26)
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .comment('用户ID')

      table.timestamp('createdAt')
      table.timestamp('updatedAt')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
