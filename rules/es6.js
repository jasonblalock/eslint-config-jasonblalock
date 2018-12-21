module.exports = {
  extends: [require.resolve('eslint-config-airbnb-base/rules/es6')],
  env: {
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: true,
      },
    ],
    'prefer-const': 'error',
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
  },
};
