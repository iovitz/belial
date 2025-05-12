import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id', 26).primary().comment('主键ID')
      table.string('nickname', 10).notNullable().comment('昵称')
      table.string('avatar', 100).nullable().comment('头像URL')
      table.string('desc', 50).nullable().comment('描述')
      table.tinyint('sex').nullable().comment('性别')

      table.timestamp('createdAt')
      table.timestamp('updatedAt')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
