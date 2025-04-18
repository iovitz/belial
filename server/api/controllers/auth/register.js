/**
 * register action
 *
 * @description :: register
 * @usage       :: 'POST /api/v1/auth/register': { action: 'auth/register' },
 */

module.exports = {

  inputs: {
    // name: {
    //   type: 'string',
    //   example: 'zhangsan',
    //   description: 'Someone\'s name',
    //   required: true,
    //   custom() {
    //     return true;
    //   },
    // },
  },

  exits: sails.config.http.responses,

  async fn(input, exits) {
    const data = 'success'

    return exits.ok(data)
  },

}
