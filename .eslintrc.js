
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:storybook/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  root: true,

  ignorePatterns: ['__mocks__'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'relative-path-checker-omurlan'],
  rules: {
    'relative-path-checker-omurlan/path-checker': [2, { alias: '@/' }],
    'relative-path-checker-omurlan/layer-imports': [2, { alias: '@/', ignoreImportPatterns: ['**/StoreProvider'] }],
    'relative-path-checker-omurlan/public-api-imports': [
      2,
      {
        alias: '@/',
        testFilePatterns: ['**/*.ts'],
        testPublicApi: 'testing'
      }
    ],
    '@typescript-eslint/no-non-null-assertion': [1],
    'max-len': [
      2,
      {
        ignoreComments: true,
        code: 140
      }
    ],
    '@typescript-eslint/promise-function-async': [1],
    'react/jsx-indent': [2, 2],
    indent: 'off',
    'react/react-in-jsx-scope': [0],
    '@typescript-eslint/no-misused-promises': [
      2,
      {
        checksVoidReturn: false
      }
    ],
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/no-invalid-void-type': [1],
    '@typescript-eslint/restrict-template-expressions': [1],
    '@typescript-eslint/restrict-plus-operands': [1],
    '@typescript-eslint/no-unnecessary-type-assertion': [0],
    '@typescript-eslint/strict-boolean-expressions': [0],
    '@typescript-eslint/no-empty-interface': [1],
    '@typescript-eslint/explicit-function-return-type': [1],
    '@typescript-eslint/no-floating-promises': [1],
    '@typescript-eslint/naming-convention': [0],
    '@typescript-eslint/no-unused-vars': [1],
    '@typescript-eslint/consistent-type-assertions': [1],
    'react/display-name': [0]
  },
  globals: {
    __IS_DEV__: 'readonly',
    __ENVIRONMENT__: 'readonly'
  }
}
