// https://docs.expo.dev/guides/using-eslint/
// const { defineConfig } = require('eslint/config');
// const expoConfig = require('eslint-config-expo/flat');

// module.exports = defineConfig([
//   expoConfig,
//   {
//     ignores: ['dist/*'],
//   },
// ]);
import antfu from '@antfu/eslint-config'

export default antfu({
  react: {
    overrides: {
      'react/prefer-destructuring-assignment': 0,
      'antfu/top-level-function': 0,
      'ts/no-require-imports': 0,
      'ts/no-use-before-define': 0,
    },
  },
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/no-useless-fragment': 0,
    'no-case-declarations': 0,
  },
  typescript: {
    overrides: {
      'node/prefer-global/process': 'off',
      'ts/consistent-type-imports': 0,
    },
  },
})
