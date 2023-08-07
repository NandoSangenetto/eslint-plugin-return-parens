const { RuleTester } = require("eslint");
const enforceReturnParensRule = require("./eslint-enforce-return-parens");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2015 }
});

ruleTester.run(
  "eslint-enforce-return-parens",
  enforceReturnParensRule, 
  {
    valid: [
      { code: "function a (b) { return (b); }", },
      { code: "function a (b) { return ({ test: '123' }); }" },
      { code: "function a (b) { return({ test: '123' }); }" },
      { code: "function a (b) { return (function() { return (b); }); }" },
      { code: "(something) => something;" },
      { code: "() => true;" },
      { code: "(something) => { something + 1; return (true); }" },
      { code: "(something) => { return (1); }" },
      { code: "(something) => { return; }" },
      { code: "() => { return; }" },
      { code: "() => { return (undefined); }" },
    ],
    invalid: [
      { code: "function a (b) { return b; }", output: "function a (b) { return (b); }", errors: 1 },
      { code: "function a (b) { return { test: '123' }; }", output: "function a (b) { return ({ test: '123' }); }", errors: 1 },
      { code: "function a (b) { return function() { return b; }; }", output: "function a (b) { return (function() { return b; }); }", errors: 2 },
      { code: "function a (b) { return (function() { return b; }); }", output: "function a (b) { return (function() { return (b); }); }", errors: 1 },
      { code: "(something) => { return { something: something }; }", output: "(something) => { return ({ something: something }); }", errors: 1 },
      { code: "(something) => { return { something }; }", output: "(something) => { return ({ something }); }", errors: 1 },
      { code: "() => { return true; }", output: "() => { return (true); }", errors: 1 },
      { code: "(something) => { something + 1; return true; }", output: "(something) => { something + 1; return (true); }", errors: 1 },
      { code: "(something) => { return 1; }", output: "(something) => { return (1); }", errors: 1 },
      { code: "() => { return undefined; }", output: "() => { return (undefined); }", errors: 1 },
    ],
  }
);

console.log("All tests passed!");