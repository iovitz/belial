import { Buffer } from 'node:buffer'
import { Inject, Provide } from '@midwayjs/core'
import * as bcrypt from 'bcrypt'
import * as pako from 'pako'
import * as crypto from 'node:crypto'
import * as cryptoJS from 'crypto-js'
import { ConfigService } from './config'

@Provide()
export class EncryptService {
  @Inject()
  configService: ConfigService

  aesPublicEncrypt(message: string) {
    return crypto.publicEncrypt(
      {
        key: this.configService.get('AES_PUBLIC_KEY'), // PEM 格式字符串
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, // 推荐 OAEP 填充
      },
      Buffer.from(message),
    )
  }

  aesPrivateDecrypt(encoded: string) {
    return crypto.publicDecrypt(
      { key: this.configService.get('AES_PRIVATE_KEY'), padding: crypto.constants.RSA_PKCS1_PADDING },
      Buffer.from(encoded, 'base64'),
    )
  }

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
    return crypto.createHash('md5').update(str).digest('hex')
  }

  aesEncrypt(message: string) {
    return cryptoJS.AES.encrypt(message, this.configService.get('AES_PRIVATE_KEY')).toString()
  }

  aesDecrypt(encrypted: string) {
    return cryptoJS.AES.decrypt(encrypted, this.configService.get('AES_PRIVATE_KEY')).toString(cryptoJS.enc.Utf8)
  }
}
