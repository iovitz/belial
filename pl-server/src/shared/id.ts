import { TwitterSnowflake } from '@sapphire/snowflake'

export const snowflakeIdGenerator = {
  generate() {
    return TwitterSnowflake.generate().toString()
  },
}
