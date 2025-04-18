/**
 * UserSession Model
 *
 * @description :: User Session Model
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const { TwitterSnowflake } = require('@sapphire/snowflake')

const logger = rootLogger.child({
  scope: 'Model-UserSession',
})

// @Entity('session', {
//   comment: '登录态Session',
// })
// export class Session {
//   @PrimaryColumn({
//     name: 'id',
//     type: 'bigint',
//     comment: '雪花ID',
//   })
//   id: string

//   @Column({
//     name: 'useragent',
//     type: 'varchar',
//     length: 200,
//   })
//   useragent: string

//   @ManyToOne(() => User, ({ sessions }) => sessions, { onDelete: 'CASCADE' })
//   @JoinColumn({ name: 'user_id' })
//   user: User

//   @Column({
//     name: 'user_id',
//     type: 'bigint',
//   })
//   userId: string

//   @CreateDateColumn({
//     name: 'created_at',
//     type: 'timestamp',
//   })
//   createdAt: Date

//   @UpdateDateColumn({
//     name: 'updated_at',
//     type: 'timestamp',
//   })
//   updatedAt: Date
// }

module.exports = {
  primaryKey: 'id',
  attributes: {
    useragent: { type: 'string', required: true },
    user: {
      model: 'user',
    },
  },
  beforeCreate(values, proceed) {
    values.id = TwitterSnowflake.generate().toString()

    logger.debug('Create `UserSession` Model', values)
    return proceed()
  },
}
