import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'verify_codes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigint('id').primary().comment('主键ID')
      table.string('code').notNullable().comment('验证码')
      table.string('type').notNullable().comment('验证码类型')
      table.boolean('status').defaultTo(false).comment('是否已经验证')
      table.bigint('user_id').references('id').inTable('users').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
