module.exports = {
  extends: [require.resolve('eslint-config-airbnb-base/rules/style')],
  rules: {
    // enforce line breaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    'array-bracket-newline': ['error', { multiline: true }],

    // / enforce line breaks between array elements
    // https://eslint.org/docs/rules/array-element-newline
    'array-element-newline': ['error', { multiline: true, minItems: 3 }],

    camelcase: ['error', { properties: 'always', ignoreDestructuring: false }],

    'func-names': 'error',

    'func-name-matching': ['error', { considerPropertyDescriptor: true }],

    'func-style': ['error', 'expression'],

    'id-blacklist': 'error',

    // camelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
    'id-match': ['error', '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$'],

    // specify whether double or single quotes should be used in JSX attributes
    // https://eslint.org/docs/rules/jsx-quotes
    'jsx-quotes': ['error', 'prefer-double'],

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    'line-comment-position': [
      'error',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],
    'max-depth': ['error', 4],
    // specify the max number of lines in a file
    // https://eslint.org/docs/rules/max-lines
    'max-lines': [
      'error',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // enforce a maximum function length
    // https://eslint.org/docs/rules/max-lines-per-function
    'max-lines-per-function': [
      'error',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
    'max-nested-callbacks': ['error', 7],
    'max-params': ['error', 3],
    'max-statements': ['error', 40],
    'max-statements-per-line': ['error', { max: 1 }],

    // require multiline ternary
    // https://eslint.org/docs/rules/multiline-ternary
    'multiline-ternary': ['error', 'always'],

    'new-cap': 'error',

    'no-multi-assign': 'error',

    'no-negated-condition': 'error',

    'no-unneeded-ternary': 'error',

    // Prefer use of an object spread over Object.assign
    // https://eslint.org/docs/rules/prefer-object-spread
    'prefer-object-spread': 'error',

    'sort-keys': 'off',
  },
};
