module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'arrow-body-style': ['error', 'as-needed', {  // stylistic
      requireReturnForObjectLiteral: true,
    }],
    'arrow-parens': ['error', 'as-needed', {  // stylistic
      requireForBlockBody: true,
    }],
    'arrow-spacing': ['error', { before: true, after: true }], // stylistic
    'constructor-super': 'error', // possible-errors
    'generator-star-spacing': ['error', { before: false, after: true }], // stylistic
    'no-class-assign': 'error',
    'no-confusing-arrow': ['error', {
      allowParens: true,
    }],
    'no-const-assign': 'error',  // possible-errors
    'no-dupe-class-members': 'error', // possible-errors
    'no-duplicate-imports': 'error',
    'no-invalid-this': 'off',
    'babel/no-invalid-this': 'error',
    'no-new-symbol': 'error', // possible-errors
    // not applicable for a config preset (should be configured only in projects)
    'no-restricted-imports': 'off',
    'no-this-before-super': 'error', // possible-errors
    'babel/no-unused-expressions': ['error', {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    }],
    'no-unused-expressions': 'off',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': ['error', 'always', { // stylistic
      ignoreConstructors: false,
      avoidQuotes: true,
    }],
    'prefer-arrow-callback': [ // stylistic
      'error',
      { allowNamedFunctions: false, allowUnboundThis: true },
    ],
    'prefer-const': 'error',
    'prefer-destructuring': ['error', {  // stylistic
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: true,
        object: true,
      },
    }, {
        enforceForRenamedProperties: false,
      }],
    'prefer-numeric-literals': 'error',
    'prefer-reflect': 'off', // deprecated
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'sort-imports': 'off', // stylistic
    'symbol-description': 'error',
    'template-curly-spacing': 'error', // stylistic
    'yield-star-spacing': ['error', 'after'], // stylistic
  },
};
