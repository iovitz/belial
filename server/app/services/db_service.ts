import { ulid } from 'ulid'

export class DbService {
  genBigIntID() {
    return ulid()
  }
}
