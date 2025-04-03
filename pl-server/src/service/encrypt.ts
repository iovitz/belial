import { Buffer } from 'node:buffer'
import { Provide } from '@midwayjs/core'
import * as cryptoJS from 'crypto-js'
import * as pako from 'pako'
import * as bcrypt from 'bcrypt'

@Provide()
export class EncryptService {
  ungzip(gzipBase64Str: string) {
    return JSON.parse(
      pako.ungzip(Buffer.from(gzipBase64Str, 'base64') as unknown as pako.Data, { to: 'string' }),
    )
  }

  gzip(data: unknown) {
    return this.strToGzipBase64(JSON.stringify(data))
  }

  strToGzipBase64(str: string) {
    return Buffer.from(pako.gzip(str, { level: 9 })).toString('base64')
  }

  bcryptCompare(data: string, encrypted: string) {
    return bcrypt.compare(data, encrypted)
  }

  async bcryptEncode(data: string) {
    return bcrypt.hash(data, 5)
  }

  md5(str: string) {
    return cryptoJS.MD5(str).toString()
  }

  md5Match(str: string, md5Str: string) {
    return cryptoJS.MD5(str).toString() === md5Str
  }

  aesEncrypt(message: string) {
    return cryptoJS.AES.encrypt(message, '').toString()
  }

  aesDecrypt(encrypted) {
    return cryptoJS.AES.decrypt(encrypted, '').toString(cryptoJS.enc.Utf8)
  }
}
