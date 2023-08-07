"use strict";

const eslintPlugin = require("./eslint-plugin");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    plugins: {"keeta": eslintPlugin},
    rules: {
      "keeta/eslint-enforce-return-parens": "error",
    },
  }
]