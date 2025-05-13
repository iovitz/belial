import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: {
    overrides: {
      'no-unused-vars': 'off',
      'node/prefer-global/process': 'off',
      'ts/consistent-type-imports': 0,
      'node/prefer-global/buffer': 0,
    },
  },
  javascript: {
    overrides: {
      'no-unused-vars': 'off',
      'node/prefer-global/process': 'off',
      'antfu/no-top-level-await': 0,
    },
  },
  rules: {
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
  ignores: ['node_modules/*', '**/*.yaml'],
})
