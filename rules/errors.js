module.exports = {
  extends: [require.resolve('eslint-config-airbnb-base/rules/errors')],
  rules: {
    'no-async-promise-executor': 'error',

    // disallow assignment in conditional expressions
    'no-cond-assign': ['error', 'always'],

    'no-constant-condition': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // Disallow assignments that can lead to race conditions due to usage of await or yield
    // https://eslint.org/docs/rules/require-atomic-updates
    'require-atomic-updates': 'error',

    'valid-jsdoc': ['error', { requireReturn: false }],
  },
};
