import { BaseModel } from '@adonisjs/lucid/orm'
import db from '@adonisjs/lucid/services/db'
import { ModelAttributes } from '@adonisjs/lucid/types/model'
import { pick } from 'lodash-es'
import { ulid } from 'ulid'

interface DaoServiceOptions<T extends typeof BaseModel> {
  filterFields?: Array<keyof InstanceType<T>>
}

export class DaoService<T extends typeof BaseModel> {
  private name: string
  filterFields?: Array<keyof InstanceType<T>>

  constructor(private model: T, options: DaoServiceOptions<T>) {
    this.name = model.name
    this.filterFields = options.filterFields
  }

  genPrimaryKey() {
    return ulid()
  }

  create(data: Partial<ModelAttributes<InstanceType<T>>>) {
    return this.model.create({
      id: this.genPrimaryKey,
      ...data,
    })
  }

  findById(id: string) {
    return this.model.find(id)
  }

  findOne(where: Partial<T>) {
    return this.model.findBy(where)
  }

  formatDataForResponse(modelData: InstanceType<T>) {
    if (!this.filterFields) {
      return modelData.toObject()
    }
    return pick(modelData.toObject(), this.filterFields)
  }

  createWithTransaction(dbData: Array<{
    db: string
    data: Record<string, unknown>
  }>) {
    return db.transaction(async (trx) => {
      const createResult: any[] = []
      while (dbData.length) {
        const { db, data } = dbData.shift()!

        const recordData = {
          id: this.genPrimaryKey(),
          ...data,
        }
        createResult.push(recordData)

        await trx.insertQuery().table(db).insert({
          id: this.genPrimaryKey(),
          ...data,
        })
      }
      return createResult
    })
  }
}
