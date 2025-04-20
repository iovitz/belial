/**
 * EncryptService
 *
 * @description :: Encrypt Service
 * @usage       :: EncryptService.[methodName]()
 */

const { Buffer } = require('node:buffer')
const crypto = require('node:crypto')
const pako = require('pako')

const Service = {

  aesPublicEncrypt(message) {
    return crypto.publicEncrypt(
      {
        key: this.configService.get('AES_PUBLIC_KEY'), // PEM 格式字符串
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING, // 推荐 OAEP 填充
      },
      Buffer.from(message),
    ).toString('base64')
  },

  aesPrivateDecrypt(encoded) {
    return crypto.publicDecrypt(
      { key: this.configService.get('AES_PRIVATE_KEY'), padding: crypto.constants.RSA_PKCS1_OAEP_PADDING },
      Buffer.from(encoded, 'base64'),
    )
  },

  ungzip(gzipBase64Str) {
    return JSON.parse(
      pako.ungzip(Buffer.from(gzipBase64Str, 'base64'), { to: 'string' }),
    )
  },

  gzip(data) {
    return this.strToGzipBase64(JSON.stringify(data))
  },

  strToGzipBase64(str) {
    return Buffer.from(pako.gzip(str, { level: 9 })).toString('base64')
  },

  md5(str) {
    return crypto.createHash('md5').update(str).digest('hex')
  },

}

// For LSP
globalThis.EncryptService = Service

module.exports = Service
