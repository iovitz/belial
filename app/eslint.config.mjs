import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    overrides: {
      'ts/consistent-type-imports': 0,
      'ts/no-require-imports': 0,
      'ts/no-use-before-define': 0,
    },
  },

  rules: {
    'node/prefer-global/process': 0,
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
  },

}, {
  ignores: ['node_modules/*'],
})
