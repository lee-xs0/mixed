/*
 * @Author: atwLee
 * @Date: 2022-12-29 16:21:30
 * @LastEditors: atwLee
 * @LastEditTime: 2022-12-29 16:25:31
 * @Description: eslint 配置文件
 * @FilePath: /al-mixed/.eslintrc.js
 */
module.exports = {
  extends: [
    "alloy",
    "alloy/react",
    "alloy/typescript",
    "prettier",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:import/typescript",
    "plugin:markdown/recommended",
  ],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    polyfills: ["Promise", "URL"],
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "react",
    "babel",
    "jest",
    "@typescript-eslint",
    "react-hooks",
    "markdown",
  ],
  globals: {
    gtag: true,
  },
};
