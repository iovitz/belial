/**
 * encrypt-key action
 *
 * @description :: AES Encrypt Key
 * @usage       :: 'GET /api/v1/verify/encrypt-key': { action: 'verify/encrypt-key' },
 */

module.exports = {

  inputs: {
  },

  exits: sails.config.http.responses,

  async fn(_, exits) {
    return exits.ok(sails.config.custom.aesPublicKey)
  },

}
