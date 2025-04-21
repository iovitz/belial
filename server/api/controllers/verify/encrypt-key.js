/**
 * encrypt-key action
 *
 * @description :: implement the description here
 * @usage       :: 'GET /api/v1/verify/encrypt-key': { action: 'verify/encrypt-key' },
 */


module.exports = function (_, res) {
  return res.ok(sails.config.custom.aesPublicKey)
}
