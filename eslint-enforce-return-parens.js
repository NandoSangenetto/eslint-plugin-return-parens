
module.exports = {
  meta: {
      type: "problem",
      docs: {
        description: "Enforce return statements to have parens",
      },
      fixable: "code",
      schema: []
  },
  create(context) {
      return {
        ReturnStatement(node) {
          
          if(node.argument === null) return;
          
          const argument = context.sourceCode.getText(node.argument, 1, 1);

          if(argument.startsWith('(') && argument.endsWith(')')) return;

          context.report({
            node,
            message: 'Return statements must have parens',
            data: {
              name: node.name
            },
            fix(fixer) {
              return fixer.replaceText(node, `return (${context.sourceCode.getText(node.argument)});`);
            }
          })
        }
      };
  }
};
