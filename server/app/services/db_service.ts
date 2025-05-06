import { TwitterSnowflake } from '@sapphire/snowflake'

export class DbService {
  generate() {
    return TwitterSnowflake.generate().toString()
  }
}
