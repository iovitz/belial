/**
 * verify-code action
 *
 * @description :: verify code
 * @usage       :: 'GET /api/v1/verify/verify-code': { action: 'verify/verify-code' },
 */

module.exports = {

  inputs: {
    width: {
      type: 'number',
      example: 200,
      description: 'image width',
      required: true,
    },
    height: {
      type: 'number',
      example: 50,
      description: 'image height',
      required: true,
    },
    type: {
      type: 'string',
      example: 'login',
      description: 'verify code type(login / register)',
      required: true,
    },
  },

  exits: sails.config.http.responses,

  async fn(input, exits) {
    const { id, svg } = await VerifyService.createVerifyCode(input.type, input.width, input.height)

    return exits.ok({ id, svg })
  },

}
