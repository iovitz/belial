import { ulid } from 'ulid'

export class DbService {
  genPrimaryKey() {
    return ulid()
  }
}
