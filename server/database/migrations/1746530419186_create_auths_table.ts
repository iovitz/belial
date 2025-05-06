import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'auths'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigint('id').primary().comment('主键ID')
      table.string('identity_type').notNullable().comment('用户标识类型')
      table.string('identifier').notNullable().comment('用户标识')
      table.string('credential').notNullable().comment('密码凭证')
      table.boolean('verified').notNullable().comment('是否已经验证')
      table.bigint('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
