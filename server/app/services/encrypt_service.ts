import { Buffer } from 'node:buffer'
import * as bcrypt from 'bcrypt'
import * as pako from 'pako'
import * as crypto from 'node:crypto'
import env from '#start/env'

export class EncryptService {
  aesPublicEncrypt(message: string) {
    return crypto
      .publicEncrypt(
        {
          key: env.get('AES_PUBLIC_KEY'), // PEM 格式字符串
          padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, // 推荐 OAEP 填充
        },
        Buffer.from(message)
      )
      .toString('base64')
  }

  aesPrivateDecrypt(encoded: string) {
    return crypto.publicDecrypt(
      {
        key: env.get('AES_PRIVATE_KEY'),
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      },
      Buffer.from(encoded, 'base64')
    )
  }

  ungzip(gzipBase64Str: string) {
    return JSON.parse(
      pako.ungzip(Buffer.from(gzipBase64Str, 'base64') as unknown as pako.Data, { to: 'string' })
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

  bcryptEncode(data: string) {
    return bcrypt.hash(data, 5)
  }

  md5(str: string) {
    return crypto.createHash('md5').update(str).digest('hex')
  }
}
