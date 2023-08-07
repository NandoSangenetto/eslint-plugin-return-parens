"use strict";

const eslintPlugin = require("./eslint-plugin-return-parens");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    plugins: {"return-parens": eslintPlugin},
    rules: {
      "return-parens/eslint-enforce-return-parens": "error",
    },
  }
]