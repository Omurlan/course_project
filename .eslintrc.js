
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
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'max-len': [
      2,
      {
        ignoreComments: true,
        code: 100
      }
    ],
    'react/jsx-indent': [2, 2],
    'react/react-in-jsx-scope': [0],
    '@typescript-eslint/strict-boolean-expressions': [0],
    '@typescript-eslint/no-empty-interface': [1],
    '@typescript-eslint/explicit-function-return-type': [1],
    '@typescript-eslint/no-floating-promises': [1],
    '@typescript-eslint/naming-convention': [0],
    '@typescript-eslint/no-unused-vars': [1],
    'react/display-name': [1]
  },
  globals: {
    __IS_DEV__: true
  }
}
