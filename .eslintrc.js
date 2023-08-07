"use strict";

// Import the ESLint plugin locally
const eslintPluginExample = require("./eslint-plugin");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      ecmaVersion: "latest",
    },
    // Using the eslint-plugin-example plugin defined locally
    plugins: {"example": eslintPluginExample},
    rules: {
      "example/enforce-return-parens": "error",
    },
  }
]