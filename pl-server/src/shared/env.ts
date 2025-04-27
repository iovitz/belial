import * as process from 'node:process'
// 环境变量
export enum Env {
  production = 'production',
  local = 'local',
  test = 'test',
}

// 主要判断是否为线上环境，非线上环境统一为开发或者测试环境
export function isProd() {
  return process.env.NODE_ENV === Env.production
}
