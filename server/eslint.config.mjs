import antfu from '@antfu/eslint-config'

export default antfu(
  {
    javascript: {
      overrides: {
        'no-undef': 'error',
        'no-throw-literal': 'off',
      },
    },
    rules: {
      'node/prefer-global/process': 'off',
    },
    languageOptions: {
      globals: {
        __isProd: 'readonly',
        _: 'readonly',
        sails: 'readonly',
        ajv: 'readonly',
        rootLogger: 'readonly',
        VerifyCode: 'readonly',
        VerifyService: 'readonly',
        ValidateService: 'readonly',
      },
    },
  },
  {
    ignores: ['assets/*', 'node_modules/*', 'views/*', '**/*.yaml'],
  },
)
