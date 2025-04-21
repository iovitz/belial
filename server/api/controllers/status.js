/**
 * status action
 *
 * @description :: implement the description here
 * @usage       :: 'POST /api/v1/status': { action: 'status' },
 */

module.exports = function (req, res) {
  const data = 'success'

  return res.ok(data)
}
