const enforceReturnParensRule = require("./eslint-enforce-return-parens");
const plugin = { rules: { "eslint-enforce-return-parens": enforceReturnParensRule } };
module.exports = plugin;