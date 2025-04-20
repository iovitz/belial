/**
 * Custom configuration
 * (sails.config.custom)
 *
 * One-off settings specific to your application.
 *
 * For more information on custom configuration, visit:
 * https://sailsjs.com/config/custom
 */

module.exports.custom = {

  /***************************************************************************
  *                                                                          *
  * Any other custom config this Sails app should use during development.    *
  *                                                                          *
  ***************************************************************************/
  // sendgridSecret: 'SG.fake.3e0Bn0qSQVnwb1E4qNPz9JZP5vLZYqjh7sn8S93oSHU',
  // stripeSecret: 'sk_test_Zzd814nldl91104qor5911gjald',
  // …
  blockIps: [],

  limiter: {
    lruMax: 1000,
    lruMaxAge: 'minute',
    limiterTokens: 100,
    limiterInterval: 'minute',
  },

  // Encrypt

  // AES加密配置
  aesPrivateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDAz4jLRM6CM/bC\nhEtjJBxSVeeswhR+HaY+RQ0C7CYQKO+bbPwgwlZJww5WezIX77QBJvseNBk1WI15\nk2qliN5VUaXfjlf6NAlRQBw0nqtTVMApFLd11l6KL0maLGemQ52O7W2TyQ6IvWXS\n/T2/ahLbECsLhKNdcy4QgxGcopgPSqU/ZxgfJ2vMkBEnIIBhKsrKWp3OME2qCPVI\nDXY+KwkJhlMO2/ybGO7sJk9LF/yoXPwj6pMGa2aA79VMEjVZ/PuoquNEkgFErMEP\nhfk3jBoyaTc9B2aXhhBSZgrIqS3Nua+T4aIAKF9K7rVZbydbwYxnPl/NhtgLX4sm\nAenDLLuvAgMBAAECggEAMC1LIXtSXF9Ol6EF00JpHzue1WBzTWXsLaAEVcga5KvN\n3xi20RquA+VMtlg3FpsK78TFN3FOITG8u/WVTsJpx4jMuRTwr7CD6Xzq70z8Qyio\nkTs/ch675axWKENTLMy1WErEOAqjapBkmnkzjhoblwgtsUWVqlqG1pJherF37E3L\nyfq0hVkRx96WHf1mAAxFXzkW/RQbEQTo0RHnpt8LpVzbdE2jqaOoXRCuGaJ3bmgJ\nY0LY5FilSR08DSey9cTXox0l/N0NYgKKYFKqDkgBoyvjj1PspjiC6KmfKIel/EL5\ntbWOsjSqQR14vbifhwdjjthKRR4KmlsyCA8FxEMAfQKBgQDsXvZEqAvVpA71wfgi\nxpf38Q8VHq6MS3cyw9bvLv1CqrzloLIqD8pPf8Zg/B6ZnOh78sVLv+izado6t1xT\nV+dnBAxzrEmECcrv03tkog6HvSEM2kE8DTlaKg6XR9qIWDZ46Bk8mh54Rus1qjqA\n1jYEYaQF39cH/wADTd9J0Zc2IwKBgQDQ0oUAJNRMLOw5rN/UAoOLI8uU2HLQzh6r\n40pEy0X3g65Qj6/mfNdrlJkZPWrJ152+fjqTfdvmaNxiUa36f3cF9dgU2C7Q1byw\nwkY+/lc/sZQRipuE97qaO+/ueIhSDsu6aoqplAqRQ4EG7mWWBr8Gg3es3RJcQWdh\nVgEgMXrvBQKBgAkwl/qLXgpsWniLlg4kEnx9TszPaJHjzTqYCp86AHa7FKUI3mRs\nQL1ehmP26WmnhBJtmeYcC/wNvYJS5rAG1uRWb/V/WUxc5Rr16fI7qrz0SXiqc6bW\nDMjIodCX5pMues+wlmqYw16Bw1tOxv+DVI5PDYV88mtJKsL2IBxKncppAoGAGIZx\nCmhI6r1n7Qopq4u0CVZl5ZBaQ73BimyCX3wENqKniVymywokfsUQCg/Vh+kj5KiM\nlp/0gKYWJBH1vfLUdsW94AzXyr0fkR7wAxv6AUgI3NqLk11I9C5P6pELaZ/FO5qh\nuHLjntXvxHGhSrJ2IvyzxICeVGl2C89/CFnnV0UCgYB+B2scR3bTgGdLh1h8bude\nD/7xj0yFRoblB94cO6JudqQeOneFKImR3jcMiLJMeWNWPKh8gOr65OKVLo3WK3AK\nMFdCfP5L/oNyYK/dH2v2ciUOefI1ZM0LhyOJm+Q5czI4rmByb9oUP/fakAv3M/Dz\n1dIAHx9zUyW85sJX02orlQ==\n-----END PRIVATE KEY-----\n',
  aesPublicKey: '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwM+Iy0TOgjP2woRLYyQc\nUlXnrMIUfh2mPkUNAuwmECjvm2z8IMJWScMOVnsyF++0ASb7HjQZNViNeZNqpYje\nVVGl345X+jQJUUAcNJ6rU1TAKRS3ddZeii9JmixnpkOdju1tk8kOiL1l0v09v2oS\n2xArC4SjXXMuEIMRnKKYD0qlP2cYHydrzJARJyCAYSrKylqdzjBNqgj1SA12PisJ\nCYZTDtv8mxju7CZPSxf8qFz8I+qTBmtmgO/VTBI1Wfz7qKrjRJIBRKzBD4X5N4wa\nMmk3PQdml4YQUmYKyKktzbmvk+GiAChfSu61WW8nW8GMZz5fzYbYC1+LJgHpwyy7\nrwIDAQAB\n-----END PUBLIC KEY-----\n',
}
