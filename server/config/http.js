/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For more information on configuration, check out:
 * https://sailsjs.com/config/http
 */

const crypto = require('node:crypto')
const { ulid } = require('ulid')

const COOKIE_CLIENT_ID_KEY = 'client-id'
const HEADER_CLIENT_IP_KEY = 'x-forward-for'
const HEADER_USER_AGENT = 'user-agent'
const HEADER_TRACE_ID_KEY = 'x-sails-log-id'

const IP_REG = /\d+\.\d+\.\d+\.\d+/

module.exports.http = {

  /****************************************************************************
  *                                                                           *
  * Sails/Express middleware to run for every HTTP request.                   *
  * (Only applies to HTTP requests -- not virtual WebSocket requests.)        *
  *                                                                           *
  * https://sailsjs.com/documentation/concepts/middleware                     *
  *                                                                           *
  ****************************************************************************/

  middleware: {

    /***************************************************************************
    *                                                                          *
    * The order in which middleware should be run for HTTP requests.           *
    * (This Sails app's routes are handled by the "router" middleware below.)  *
    *                                                                          *
    ***************************************************************************/

    order: [
      'cookieParser',
      'session',
      'bodyParser',
      'compress',
      'poweredBy',
      'www',
      'favicon',
      'clientVars',
      'logger',
      'router',
    ],

    /***************************************************************************
    *                                                                          *
    * The body parser that will handle incoming multipart HTTP requests.       *
    *                                                                          *
    * https://sailsjs.com/config/http#?customizing-the-body-parser             *
    *                                                                          *
    ***************************************************************************/

    clientVars: (function () {
      return function (req, res, next) {
        const clientIp = (req.header(HEADER_CLIENT_IP_KEY) ?? req.ip).match(IP_REG)?.[0]
        const clientId = req.cookies[COOKIE_CLIENT_ID_KEY]
          ?? crypto.createHash('md5').update(`${clientIp}-${req.header(HEADER_USER_AGENT)}`).digest('hex')
        const traceId = req.header(HEADER_TRACE_ID_KEY) ?? `${clientId}-${ulid()}`

        req.clientId = res.clientId = clientId
        req.clientIp = res.clientIp = clientIp
        req.traceId = res.traceId = traceId
        res.cookie(COOKIE_CLIENT_ID_KEY, clientId, {
          signed: false,
          maxAge: 360 * 24 * 60 * 60 * 1000,
          sameSite: 'strict',
          httpOnly: true,
        })
        return next()
      }
    })(),

    logger: (function () {
      return function (req, res, next) {
        req.logger = res.logger = globalThis.rootLogger.child({
          scope: req.traceId,
        })
        return next()
      }
    })(),

  },

  trustProxy: true,

  responses: {
    ok: {
      responseType: 'ok',
    },
    serverError: {
      responseType: 'serverError',
    },
    badRequest: {
      responseType: 'badRequest',
    },
    forbidden: {
      responseType: 'forbidden',
    },
    tooManyRequest: {
      responseType: 'tooManyRequest',
    },
    unprocessable: {
      responseType: 'unprocessable',
    },
  },
}
