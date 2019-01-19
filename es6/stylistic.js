module.exports = {
  extends: './non-rules-config.js',
  rules: {
    'babel/new-cap': [
      'error',
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],
    'new-cap': 'off',

    'babel/camelcase': 'error',
    camelcase: 'off',

    'babel/object-curly-spacing': ['error', 'always'],
    'object-curly-spacing': 'off',

    'babel/quotes': [
      'error',
      'single',
      { avoidEscape: true, },
    ],
    quotes: 'off',

    'babel/semi': ['error', 'always'],
    semi: 'off',

    // deprecated rules
    'babel/flow-object-type': 'off',
    'babel/array-bracket-spacing': 'off',
    'babel/arrow-parens': 'off',
    'babel/func-params-comma-dangle': 'off',
    'babel/generator-star-spacing': 'off',
    'babel/object-shorthand': 'off',
  },
};
