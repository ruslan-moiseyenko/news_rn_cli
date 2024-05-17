module.exports = {
  root: true,
  env: { 'jest/globals': true },
  extends: ['@react-native', 'plugin:testing-library/react'],
  plugins: ['testing-library'],
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 1,
    // testing library
    'testing-library/await-async-queries': 'error',
    'testing-library/no-await-sync-queries': 'error',
    'testing-library/no-debugging-utils': 'warn',
    'testing-library/no-dom-import': 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
