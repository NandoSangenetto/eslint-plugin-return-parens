const enforceReturnParensRule = require("./eslint-enforce-return-parens");

const plugin = { 
  rules: { "return-parens": enforceReturnParensRule }
};

module.exports = plugin;
