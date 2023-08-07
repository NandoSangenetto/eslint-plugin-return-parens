# eslint-enforce-return-parens

## Installation

Install `eslint-enforce-return-parens`:
```bash
$ npm install eslint-plugin-return-parens --save-dev
```

## Usage

Add `eslint-plugin-return-parens` to the plugins section of your `.eslintrc` configuration file.
```json
{
  "plugins": [
    "return-parens"
  ]
}
```

Then configure the rules you want to use under the rules section.
```json
{
  "rules": {
    "return-parens/return-parens": "error"
  }
}
```


## Rule Details

This rule enforces that a return statement is always surrounded by parentheses.

## Examples

```js
// Incorrect
function foo() {
  return 'bar';
}

// Correct
function foo() {
  return ('bar');
}
```

```js
// Incorrect
function foo() {
  return 1;
}

// Correct
function foo() {
  return (1);
}
```

```js
// Incorrect
function foo() {
  return true;
}

// Correct
function foo() {
  return (true);
}
```

```js
// Incorrect
function foo() {
  return undefined;
}

// Correct
function foo() {
  return (undefined);
}

function foo() {
  return;
}
```

```js
// Incorrect
function foo() {
  return function() {
    return 'bar';
  };
}

// Correct
function foo() {
  return (function() {
    return ('bar');
  });
}
```


### Reason

This rule is useful for enforcing a consistent style when returning values from functions. It is also useful for preventing the [confusing behavior](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return#Description) of the return statement.

Also, if you find this rule useless, you are probably right and I agree with you.

Try these rules:
- [no-extra-parens](https://eslint.org/docs/latest/rules/no-extra-parens) - disallow unnecessary parentheses
- [consistent-return](https://eslint.org/docs/latest/rules/consistent-return) - require return statements to either always or never specify values
