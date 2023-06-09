module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["standard-with-typescript", "plugin:react/recommended"],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  parser: "@typescript-eslint/parser",
  plugins: ["react"],
  rules: {
    "max-len": [2, { ignoreComments: true }],
    "react/jsx-indent": [2, 2],
    "react/react-in-jsx-scope": [0],
    "@typescript-eslint/strict-boolean-expressions": [0],
    "@typescript-eslint/no-empty-interface": [1],
    "@typescript-eslint/explicit-function-return-type": [1],
    "@typescript-eslint/no-floating-promises": [1],
    "@typescript-eslint/naming-convention": [0],
    "@typescript-eslint/no-unused-vars": [1],
  },
  globals: {
    "__IS_DEV__": true
  }
};
