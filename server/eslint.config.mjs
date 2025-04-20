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
        _: 'readonly',
        sails: 'readonly',
        rootLogger: 'readonly',
      },
    },
  },
  {
    ignores: ['assets/*', 'node_modules/*', 'views/*', '**/*.yaml'],
  },
)
